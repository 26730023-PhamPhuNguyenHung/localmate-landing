import { Hono } from 'hono';

export const adminMediaRoutes = new Hono<{ Bindings: { DB: D1Database; MEDIA_BUCKET?: R2Bucket } }>();

// GET /api/admin/media (List with search, status filters & usage tracking)
adminMediaRoutes.get('/', async (c) => {
  const q = c.req.query('q')?.trim() || '';
  const filter = c.req.query('filter')?.trim() || 'all'; // all, used, unused, missing-alt, oversized
  const page = Math.max(1, parseInt(c.req.query('page') || '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt(c.req.query('limit') || '24', 10)));
  const offset = (page - 1) * limit;

  let whereClauses: string[] = ['1=1'];
  let params: any[] = [];

  if (q) {
    whereClauses.push('(m.filename LIKE ? OR m.original_filename LIKE ? OR m.alt_text LIKE ?)');
    params.push(`%${q}%`, `%${q}%`, `%${q}%`);
  }

  if (filter === 'missing-alt') {
    whereClauses.push("(m.alt_text IS NULL OR TRIM(m.alt_text) = '')");
  } else if (filter === 'oversized') {
    whereClauses.push('m.size > 512000'); // > 500KB
  } else if (filter === 'used') {
    whereClauses.push(`(
      m.id IN (SELECT DISTINCT featured_image_id FROM cms_posts WHERE featured_image_id IS NOT NULL)
      OR EXISTS (SELECT 1 FROM cms_posts p WHERE p.rendered_html LIKE '%' || m.url || '%')
    )`);
  } else if (filter === 'unused') {
    whereClauses.push(`(
      m.id NOT IN (SELECT DISTINCT featured_image_id FROM cms_posts WHERE featured_image_id IS NOT NULL)
      AND NOT EXISTS (SELECT 1 FROM cms_posts p WHERE p.rendered_html LIKE '%' || m.url || '%')
    )`);
  }

  const whereSql = whereClauses.join(' AND ');

  const countRes = await c.env.DB.prepare(
    `SELECT COUNT(*) as total FROM cms_media m WHERE ${whereSql}`
  ).bind(...params).first<{ total: number }>();
  const total = countRes?.total || 0;

  const rows = await c.env.DB.prepare(`
    SELECT m.* 
    FROM cms_media m
    WHERE ${whereSql}
    ORDER BY m.created_at DESC
    LIMIT ? OFFSET ?
  `).bind(...params, limit, offset).all();

  // Tìm các bài viết đang sử dụng các ảnh này để phục vụ hiển thị & kiểm tra an toàn
  const mediaList = rows.results as any[];
  if (mediaList.length > 0) {
    const allPosts = await c.env.DB.prepare(`
      SELECT id, title, slug, featured_image_id, rendered_html 
      FROM cms_posts
    `).all<{ id: number; title: string; slug: string; featured_image_id: number | null; rendered_html: string }>();

    for (const item of mediaList) {
      const usedIn: { id: number; title: string; slug: string; is_featured: boolean }[] = [];
      for (const p of allPosts.results) {
        const isFeatured = p.featured_image_id === item.id;
        const isInContent = p.rendered_html && (p.rendered_html.includes(item.url) || p.rendered_html.includes(item.filename));
        if (isFeatured || isInContent) {
          usedIn.push({
            id: p.id,
            title: p.title,
            slug: p.slug,
            is_featured: isFeatured
          });
        }
      }
      item.used_in_posts = usedIn;
    }
  }

  return c.json({
    success: true,
    data: {
      media: mediaList,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  });
});

// POST /api/admin/media/upload (With WebP optimization metadata & Hash deduplication)
adminMediaRoutes.post('/upload', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File | null;
    const altText = ((formData.get('alt_text') as string) || '').trim();
    const caption = ((formData.get('caption') as string) || '').trim();
    const widthStr = formData.get('width') as string;
    const heightStr = formData.get('height') as string;
    const format = (formData.get('format') as string) || '';
    const hash = (formData.get('hash') as string) || '';
    const sizeOriginalStr = formData.get('size_original') as string;
    const sizeOptimizedStr = formData.get('size_optimized') as string;

    const width = widthStr ? parseInt(widthStr, 10) : null;
    const height = heightStr ? parseInt(heightStr, 10) : null;
    const sizeOriginal = sizeOriginalStr ? parseInt(sizeOriginalStr, 10) : null;
    const sizeOptimized = sizeOptimizedStr ? parseInt(sizeOptimizedStr, 10) : null;

    if (!file || typeof file === 'string') {
      return c.json({ success: false, error: { code: 'NO_FILE', message: 'Vui lòng chọn tệp hình ảnh' } }, 400);
    }

    const mimeType = file.type;
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'image/avif'];
    if (!allowedMimes.includes(mimeType)) {
      return c.json({ success: false, error: { code: 'INVALID_MIME', message: 'Định dạng tệp không được hỗ trợ. Chỉ nhận WebP, JPG, PNG, GIF, SVG, AVIF' } }, 400);
    }

    // Giới hạn max 10MB
    if (file.size > 10 * 1024 * 1024) {
      return c.json({ success: false, error: { code: 'FILE_TOO_LARGE', message: 'Dung lượng tệp vượt quá giới hạn 10MB' } }, 400);
    }

    // 1. Kiểm tra chống upload trùng bằng Hash (Deduplication)
    if (hash) {
      const existingMedia: any = await c.env.DB.prepare(
        'SELECT * FROM cms_media WHERE hash = ? LIMIT 1'
      ).bind(hash).first();

      if (existingMedia) {
        return c.json({
          success: true,
          data: {
            ...existingMedia,
            is_duplicate: true,
            message: 'Hình ảnh giống hệt đã có trong thư viện, tái sử dụng bản ghi hiện có'
          }
        });
      }
    }

    // 2. Sanitize tên file chuẩn SEO
    const originalName = file.name;
    const ext = originalName.split('.').pop()?.toLowerCase() || (mimeType.includes('webp') ? 'webp' : 'jpg');
    const cleanBaseName = originalName
      .substring(0, originalName.lastIndexOf('.'))
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'image';

    const timestamp = Date.now();
    const filename = `${cleanBaseName}-${timestamp}.${ext}`;
    const r2Key = `uploads/${filename}`;

    // 3. Upload lên Cloudflare R2
    let publicUrl = `https://assets.localmate.vn/${r2Key}`;
    if (c.env.MEDIA_BUCKET) {
      const buffer = await file.arrayBuffer();
      await c.env.MEDIA_BUCKET.put(r2Key, buffer, {
        httpMetadata: {
          contentType: mimeType,
          cacheControl: 'public, max-age=31536000, immutable'
        }
      });
    } else {
      publicUrl = `/assets/uploads/${filename}`;
    }

    // 4. Lưu metadata đầy đủ vào D1 database
    const insertRes = await c.env.DB.prepare(`
      INSERT INTO cms_media (
        filename, original_filename, mime_type, size, alt_text, caption, r2_key, url,
        width, height, format, hash, size_original, size_optimized
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      filename, originalName, mimeType, file.size, altText, caption, r2Key, publicUrl,
      width, height, format || ext, hash || null, sizeOriginal || file.size, sizeOptimized || file.size
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
        width,
        height,
        format: format || ext,
        hash,
        alt_text: altText,
        caption
      }
    });
  } catch (err: any) {
    return c.json({ success: false, error: { code: 'UPLOAD_FAILED', message: err.message || 'Lỗi khi tải ảnh lên' } }, 500);
  }
});

// PUT /api/admin/media/:id (Update metadata: ALT, caption, focal point)
adminMediaRoutes.put('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const body = await c.req.json().catch(() => null);
  if (!body) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Dữ liệu không hợp lệ' } }, 400);
  }

  await c.env.DB.prepare(`
    UPDATE cms_media SET
      alt_text = ?,
      caption = ?,
      focal_x = COALESCE(?, focal_x),
      focal_y = COALESCE(?, focal_y)
    WHERE id = ?
  `).bind(
    body.alt_text !== undefined ? body.alt_text.trim() : '',
    body.caption !== undefined ? body.caption.trim() : '',
    body.focal_x !== undefined ? body.focal_x : null,
    body.focal_y !== undefined ? body.focal_y : null,
    id
  ).run();

  return c.json({ success: true, data: { message: 'Cập nhật thông tin ảnh thành công' } });
});

// DELETE /api/admin/media/:id (Safe delete with usage check & confirmation)
adminMediaRoutes.delete('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const force = c.req.query('force') === 'true';

  const media: any = await c.env.DB.prepare('SELECT * FROM cms_media WHERE id = ?').bind(id).first();
  if (!media) {
    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Không tìm thấy hình ảnh' } }, 404);
  }

  // Kiểm tra an toàn: Nếu ảnh đang được dùng làm featured_image hoặc trong nội dung bài viết
  if (!force) {
    const featuredPosts = await c.env.DB.prepare(
      'SELECT id, title, slug FROM cms_posts WHERE featured_image_id = ?'
    ).bind(id).all();

    const inlinePosts = await c.env.DB.prepare(
      "SELECT id, title, slug FROM cms_posts WHERE rendered_html LIKE '%' || ? || '%'"
    ).bind(media.url).all();

    const usedPosts = [...(featuredPosts.results || []), ...(inlinePosts.results || [])];
    // Loại bỏ bài trùng lặp
    const uniquePosts = Array.from(new Map(usedPosts.map((item: any) => [item.id, item])).values());

    if (uniquePosts.length > 0) {
      return c.json({
        success: false,
        error: {
          code: 'CANNOT_DELETE_USED_MEDIA',
          message: `Hình ảnh này đang được sử dụng trong ${uniquePosts.length} bài viết. Xóa ảnh sẽ làm hỏng giao diện bài viết!`,
          used_in_posts: uniquePosts
        }
      }, 409);
    }
  }

  // Xóa trên R2 nếu có
  if (c.env.MEDIA_BUCKET && media.r2_key) {
    try {
      await c.env.MEDIA_BUCKET.delete(media.r2_key);
    } catch {
      // Bỏ qua lỗi nếu tệp không tồn tại trên R2
    }
  }

  // Xóa bản ghi trong D1
  await c.env.DB.prepare('DELETE FROM cms_media WHERE id = ?').bind(id).run();

  return c.json({ success: true, data: { message: 'Đã xóa hình ảnh khỏi thư viện thành công' } });
});
