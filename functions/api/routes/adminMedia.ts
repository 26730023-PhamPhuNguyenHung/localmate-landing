import { Hono } from 'hono';

export const adminMediaRoutes = new Hono<{ Bindings: { DB: D1Database; MEDIA_BUCKET?: R2Bucket } }>();

// GET /api/admin/media
adminMediaRoutes.get('/', async (c) => {
  const q = c.req.query('q')?.trim() || '';
  const page = Math.max(1, parseInt(c.req.query('page') || '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt(c.req.query('limit') || '24', 10)));
  const offset = (page - 1) * limit;

  let whereSql = '1=1';
  let params: any[] = [];
  if (q) {
    whereSql = '(filename LIKE ? OR original_filename LIKE ? OR alt_text LIKE ?)';
    params.push(`%${q}%`, `%${q}%`, `%${q}%`);
  }

  const countRes = await c.env.DB.prepare(
    `SELECT COUNT(*) as total FROM cms_media WHERE ${whereSql}`
  ).bind(...params).first<{ total: number }>();
  const total = countRes?.total || 0;

  const rows = await c.env.DB.prepare(`
    SELECT * FROM cms_media 
    WHERE ${whereSql}
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `).bind(...params, limit, offset).all();

  return c.json({
    success: true,
    data: {
      media: rows.results,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  });
});

// POST /api/admin/media/upload
adminMediaRoutes.post('/upload', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File | null;
    const altText = (formData.get('alt_text') as string) || '';
    const caption = (formData.get('caption') as string) || '';

    if (!file || typeof file === 'string') {
      return c.json({ success: false, error: { code: 'NO_FILE', message: 'Vui lòng chọn tệp hình ảnh' } }, 400);
    }

    const mimeType = file.type;
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    if (!allowedMimes.includes(mimeType)) {
      return c.json({ success: false, error: { code: 'INVALID_MIME', message: 'Định dạng tệp không được hỗ trợ. Chỉ nhận JPG, PNG, WebP, GIF, SVG' } }, 400);
    }

    // Max 10MB
    if (file.size > 10 * 1024 * 1024) {
      return c.json({ success: false, error: { code: 'FILE_TOO_LARGE', message: 'Dung lượng tệp vượt quá giới hạn cho phép (10MB)' } }, 400);
    }

    // Sanitize filename
    const originalName = file.name;
    const ext = originalName.split('.').pop()?.toLowerCase() || 'jpg';
    const cleanBaseName = originalName
      .substring(0, originalName.lastIndexOf('.'))
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-');
    const timestamp = Date.now();
    const filename = `${cleanBaseName}-${timestamp}.${ext}`;
    const r2Key = `uploads/${filename}`;

    // Upload to Cloudflare R2 if binding exists
    let publicUrl = `https://assets.localmate.vn/${r2Key}`;
    if (c.env.MEDIA_BUCKET) {
      const buffer = await file.arrayBuffer();
      await c.env.MEDIA_BUCKET.put(r2Key, buffer, {
        httpMetadata: { contentType: mimeType }
      });
    } else {
      // Fallback relative url for local or demo
      publicUrl = `/assets/uploads/${filename}`;
    }

    // Save metadata to D1
    const insertRes = await c.env.DB.prepare(`
      INSERT INTO cms_media (
        filename, original_filename, mime_type, size, alt_text, caption, r2_key, url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      filename, originalName, mimeType, file.size, altText, caption, r2Key, publicUrl
    ).run();

    return c.json({
      success: true,
      data: {
        id: insertRes.meta.last_row_id,
        filename,
        original_filename: originalName,
        url: publicUrl,
        size: file.size,
        mime_type: mimeType,
        alt_text: altText
      }
    });
  } catch (err: any) {
    return c.json({ success: false, error: { code: 'UPLOAD_FAILED', message: err.message || 'Lỗi khi tải ảnh lên' } }, 500);
  }
});

// PUT /api/admin/media/:id
adminMediaRoutes.put('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const body = await c.req.json().catch(() => null);
  if (!body) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Dữ liệu không hợp lệ' } }, 400);
  }

  await c.env.DB.prepare(`
    UPDATE cms_media SET alt_text = ?, caption = ? WHERE id = ?
  `).bind(body.alt_text || '', body.caption || '', id).run();

  return c.json({ success: true, data: { message: 'Cập nhật thông tin ảnh thành công' } });
});

// DELETE /api/admin/media/:id
adminMediaRoutes.delete('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const media: any = await c.env.DB.prepare('SELECT r2_key FROM cms_media WHERE id = ?').bind(id).first();
  if (media && c.env.MEDIA_BUCKET && media.r2_key) {
    try {
      await c.env.MEDIA_BUCKET.delete(media.r2_key);
    } catch {
      // Ignore R2 delete error if file not found
    }
  }

  await c.env.DB.prepare('DELETE FROM cms_media WHERE id = ?').bind(id).run();
  return c.json({ success: true, data: { message: 'Đã xóa ảnh thành công' } });
});
