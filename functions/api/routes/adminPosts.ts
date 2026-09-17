import { Hono } from 'hono';
import { generateUniqueSlug } from '../utils/slugify';
import { sanitizeHtml, calculateReadingTime } from '../utils/security';

export const adminPostsRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/admin/posts (List with filters & search)
adminPostsRoutes.get('/', async (c) => {
  const q = c.req.query('q')?.trim() || '';
  const status = c.req.query('status')?.trim() || '';
  const categoryId = c.req.query('category_id') || '';
  const page = Math.max(1, parseInt(c.req.query('page') || '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt(c.req.query('limit') || '20', 10)));
  const offset = (page - 1) * limit;

  let whereClauses: string[] = ['1=1'];
  let params: any[] = [];

  if (q) {
    whereClauses.push('(p.title LIKE ? OR p.slug LIKE ? OR p.excerpt LIKE ?)');
    const searchTerm = `%${q}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }

  if (status && status !== 'all') {
    whereClauses.push('p.status = ?');
    params.push(status);
  }

  if (categoryId && categoryId !== 'all') {
    whereClauses.push('p.category_id = ?');
    params.push(parseInt(categoryId, 10));
  }

  const whereSql = whereClauses.join(' AND ');

  // Count total
  const countRes = await c.env.DB.prepare(
    `SELECT COUNT(*) as total FROM cms_posts p WHERE ${whereSql}`
  ).bind(...params).first<{ total: number }>();
  const total = countRes?.total || 0;

  // Query records
  const query = `
    SELECT 
      p.id, p.uuid, p.title, p.slug, p.excerpt, p.status,
      p.author_id, p.category_id, p.featured_image_id,
      p.published_at, p.scheduled_at, p.created_at, p.updated_at,
      p.seo_title, p.focus_keyword, p.reading_time, p.word_count, p.revision_number,
      u.name as author_name,
      cat.name as category_name, cat.slug as category_slug,
      m.url as featured_image_url
    FROM cms_posts p
    LEFT JOIN cms_users u ON p.author_id = u.id
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    LEFT JOIN cms_media m ON p.featured_image_id = m.id
    WHERE ${whereSql}
    ORDER BY p.updated_at DESC
    LIMIT ? OFFSET ?
  `;

  const rows = await c.env.DB.prepare(query).bind(...params, limit, offset).all();

  return c.json({
    success: true,
    data: {
      posts: rows.results,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  });
});

// GET /api/admin/posts/:id (Detail for editing)
adminPostsRoutes.get('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  if (isNaN(id)) {
    return c.json({ success: false, error: { code: 'INVALID_ID', message: 'ID không hợp lệ' } }, 400);
  }

  const post: any = await c.env.DB.prepare(`
    SELECT 
      p.*,
      u.name as author_name,
      cat.name as category_name, cat.slug as category_slug,
      m.url as featured_image_url
    FROM cms_posts p
    LEFT JOIN cms_users u ON p.author_id = u.id
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    LEFT JOIN cms_media m ON p.featured_image_id = m.id
    WHERE p.id = ?
  `).bind(id).first();

  if (!post) {
    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Không tìm thấy bài viết' } }, 404);
  }

  // Get tags
  const tagsRes = await c.env.DB.prepare(`
    SELECT t.id, t.name, t.slug 
    FROM cms_tags t
    JOIN cms_post_tags pt ON t.id = pt.tag_id
    WHERE pt.post_id = ?
  `).bind(id).all();

  return c.json({
    success: true,
    data: {
      ...post,
      tags: tagsRes.results
    }
  });
});

// POST /api/admin/posts (Create new post)
adminPostsRoutes.post('/', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.title) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Tiêu đề bài viết là bắt buộc' } }, 400);
  }

  const title = body.title.trim();
  const slug = body.slug ? await generateUniqueSlug(c.env.DB, body.slug) : await generateUniqueSlug(c.env.DB, title);
  const uuid = `post_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const content_json = typeof body.content_json === 'string' ? body.content_json : JSON.stringify(body.content_json || { type: 'doc', content: [] });
  const rendered_html = sanitizeHtml(body.rendered_html || '');
  
  // Calculate read time & word count
  const rawText = rendered_html.replace(/<[^>]*>/g, ' ');
  const { wordCount, readTime } = calculateReadingTime(rawText);

  const status = ['draft', 'review', 'scheduled', 'published', 'archived'].includes(body.status) ? body.status : 'draft';
  const author_id = body.author_id || 1;
  const category_id = body.category_id || 1;
  const featured_image_id = body.featured_image_id || null;
  const published_at = status === 'published' ? (body.published_at || new Date().toISOString()) : null;
  const scheduled_at = status === 'scheduled' ? (body.scheduled_at || null) : null;
  const brief_json = body.brief_json ? (typeof body.brief_json === 'string' ? body.brief_json : JSON.stringify(body.brief_json)) : null;

  const insertSql = `
    INSERT INTO cms_posts (
      uuid, title, slug, excerpt, content_json, rendered_html,
      featured_image_id, status, author_id, category_id,
      published_at, scheduled_at,
      seo_title, seo_description, focus_keyword, canonical_url,
      og_title, og_description, og_image_id, robots_index, robots_follow,
      reading_time, word_count, revision_number, brief_json
    ) VALUES (
      ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, 1, ?
    )
  `;

  const result = await c.env.DB.prepare(insertSql).bind(
    uuid, title, slug, body.excerpt || '', content_json, rendered_html,
    featured_image_id, status, author_id, category_id,
    published_at, scheduled_at,
    body.seo_title || title, body.seo_description || body.excerpt || '', body.focus_keyword || '', body.canonical_url || `https://localmate.vn/kien-thuc/${slug}`,
    body.og_title || title, body.og_description || body.excerpt || '', featured_image_id,
    body.robots_index !== undefined ? (body.robots_index ? 1 : 0) : 1,
    body.robots_follow !== undefined ? (body.robots_follow ? 1 : 0) : 1,
    readTime, wordCount, brief_json
  ).run();

  const newId = result.meta.last_row_id;

  // Update category post_count
  await c.env.DB.prepare('UPDATE cms_categories SET post_count = post_count + 1 WHERE id = ?').bind(category_id).run();

  return c.json({
    success: true,
    data: {
      id: newId,
      slug,
      uuid
    }
  });
});

// PUT /api/admin/posts/:id (Update post with revision tracking & 301 redirects)
adminPostsRoutes.put('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  if (isNaN(id)) {
    return c.json({ success: false, error: { code: 'INVALID_ID', message: 'ID không hợp lệ' } }, 400);
  }

  const existing: any = await c.env.DB.prepare('SELECT * FROM cms_posts WHERE id = ?').bind(id).first();
  if (!existing) {
    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Không tìm thấy bài viết' } }, 404);
  }

  const body = await c.req.json().catch(() => null);
  if (!body || !body.title) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Tiêu đề là bắt buộc' } }, 400);
  }

  const title = body.title.trim();
  // Ensure slug uniqueness
  let slug = existing.slug;
  if (body.slug && body.slug !== existing.slug) {
    slug = await generateUniqueSlug(c.env.DB, body.slug, id);
    // If post was published, create 301 redirect
    if (existing.status === 'published') {
      const oldPath = `/kien-thuc/${existing.slug}`;
      const newPath = `/kien-thuc/${slug}`;
      await c.env.DB.prepare(`
        INSERT OR REPLACE INTO cms_redirects (source_path, destination_url, status_code, active)
        VALUES (?, ?, 301, 1)
      `).bind(oldPath, newPath).run();
    }
  }

  const content_json = typeof body.content_json === 'string' ? body.content_json : JSON.stringify(body.content_json || existing.content_json);
  const rendered_html = sanitizeHtml(body.rendered_html || existing.rendered_html);
  const rawText = rendered_html.replace(/<[^>]*>/g, ' ');
  const { wordCount, readTime } = calculateReadingTime(rawText);

  const status = ['draft', 'review', 'scheduled', 'published', 'archived'].includes(body.status) ? body.status : existing.status;
  const published_at = status === 'published' ? (existing.published_at || new Date().toISOString()) : existing.published_at;
  const scheduled_at = status === 'scheduled' ? (body.scheduled_at || existing.scheduled_at) : null;
  const category_id = body.category_id || existing.category_id;
  const featured_image_id = body.featured_image_id !== undefined ? body.featured_image_id : existing.featured_image_id;
  const newRevisionNumber = (existing.revision_number || 1) + 1;
  const brief_json = body.brief_json ? (typeof body.brief_json === 'string' ? body.brief_json : JSON.stringify(body.brief_json)) : existing.brief_json;

  // Create revision snapshot if post is published or was published
  if (existing.status === 'published' || status === 'published') {
    await c.env.DB.prepare(`
      INSERT INTO cms_post_revisions (
        post_id, revision_number, title, slug, content_json, rendered_html, author_id, reason
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id, existing.revision_number, existing.title, existing.slug, existing.content_json, existing.rendered_html,
      existing.author_id, body.revision_reason || 'Cập nhật nội dung'
    ).run();
  }

  const updateSql = `
    UPDATE cms_posts SET
      title = ?, slug = ?, excerpt = ?, content_json = ?, rendered_html = ?,
      featured_image_id = ?, status = ?, category_id = ?,
      published_at = ?, scheduled_at = ?, updated_at = CURRENT_TIMESTAMP,
      seo_title = ?, seo_description = ?, focus_keyword = ?, canonical_url = ?,
      og_title = ?, og_description = ?, og_image_id = ?,
      robots_index = ?, robots_follow = ?,
      reading_time = ?, word_count = ?, revision_number = ?, brief_json = ?
    WHERE id = ?
  `;

  await c.env.DB.prepare(updateSql).bind(
    title, slug, body.excerpt || '', content_json, rendered_html,
    featured_image_id, status, category_id,
    published_at, scheduled_at,
    body.seo_title || title, body.seo_description || body.excerpt || '', body.focus_keyword || '', body.canonical_url || `https://localmate.vn/kien-thuc/${slug}`,
    body.og_title || title, body.og_description || body.excerpt || '', featured_image_id,
    body.robots_index !== undefined ? (body.robots_index ? 1 : 0) : 1,
    body.robots_follow !== undefined ? (body.robots_follow ? 1 : 0) : 1,
    readTime, wordCount, newRevisionNumber, brief_json,
    id
  ).run();

  return c.json({
    success: true,
    data: {
      id,
      slug,
      revision_number: newRevisionNumber
    }
  });
});

// DELETE /api/admin/posts/:id (Delete post)
adminPostsRoutes.delete('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  if (isNaN(id)) {
    return c.json({ success: false, error: { code: 'INVALID_ID', message: 'ID không hợp lệ' } }, 400);
  }

  const existing: any = await c.env.DB.prepare('SELECT category_id FROM cms_posts WHERE id = ?').bind(id).first();
  if (existing && existing.category_id) {
    await c.env.DB.prepare('UPDATE cms_categories SET post_count = MAX(0, post_count - 1) WHERE id = ?').bind(existing.category_id).run();
  }

  await c.env.DB.prepare('DELETE FROM cms_posts WHERE id = ?').bind(id).run();
  return c.json({ success: true, data: { message: 'Đã xóa bài viết thành công' } });
});

// POST /api/admin/posts/:id/publish (Publish immediately)
adminPostsRoutes.post('/:id/publish', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  await c.env.DB.prepare(`
    UPDATE cms_posts SET 
      status = 'published', 
      published_at = CURRENT_TIMESTAMP, 
      updated_at = CURRENT_TIMESTAMP 
    WHERE id = ?
  `).bind(id).run();

  return c.json({ success: true, data: { message: 'Xuất bản thành công' } });
});

// POST /api/admin/posts/:id/duplicate (Duplicate post into draft)
adminPostsRoutes.post('/:id/duplicate', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const existing: any = await c.env.DB.prepare('SELECT * FROM cms_posts WHERE id = ?').bind(id).first();
  if (!existing) {
    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Không tìm thấy bài viết' } }, 404);
  }

  const newTitle = `${existing.title} (Bản sao)`;
  const newSlug = await generateUniqueSlug(c.env.DB, `${existing.slug}-copy`);
  const uuid = `post_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const insertSql = `
    INSERT INTO cms_posts (
      uuid, title, slug, excerpt, content_json, rendered_html,
      featured_image_id, status, author_id, category_id,
      published_at, scheduled_at,
      seo_title, seo_description, focus_keyword, canonical_url,
      og_title, og_description, og_image_id, robots_index, robots_follow,
      reading_time, word_count, revision_number, brief_json
    ) VALUES (
      ?, ?, ?, ?, ?, ?,
      ?, 'draft', ?, ?,
      NULL, NULL,
      ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, 1, ?
    )
  `;

  const res = await c.env.DB.prepare(insertSql).bind(
    uuid, newTitle, newSlug, existing.excerpt, existing.content_json, existing.rendered_html,
    existing.featured_image_id, existing.author_id, existing.category_id,
    newTitle, existing.seo_description, existing.focus_keyword, `https://localmate.vn/kien-thuc/${newSlug}`,
    newTitle, existing.og_description, existing.og_image_id, existing.robots_index, existing.robots_follow,
    existing.reading_time, existing.word_count, existing.brief_json
  ).run();

  return c.json({
    success: true,
    data: {
      id: res.meta.last_row_id,
      slug: newSlug,
      title: newTitle
    }
  });
});

// GET /api/admin/posts/:id/revisions (List revisions)
adminPostsRoutes.get('/:id/revisions', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const rows = await c.env.DB.prepare(`
    SELECT r.id, r.post_id, r.revision_number, r.title, r.slug, r.author_id, r.reason, r.created_at,
           u.name as author_name
    FROM cms_post_revisions r
    LEFT JOIN cms_users u ON r.author_id = u.id
    WHERE r.post_id = ?
    ORDER BY r.revision_number DESC
  `).bind(id).all();

  return c.json({ success: true, data: rows.results });
});

// POST /api/admin/posts/:id/revisions/:revId/restore (Restore revision)
adminPostsRoutes.post('/:id/revisions/:revId/restore', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const revId = parseInt(c.req.param('revId'), 10);

  const revision: any = await c.env.DB.prepare(
    'SELECT * FROM cms_post_revisions WHERE id = ? AND post_id = ?'
  ).bind(revId, id).first();

  if (!revision) {
    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Không tìm thấy phiên bản' } }, 404);
  }

  await c.env.DB.prepare(`
    UPDATE cms_posts SET
      title = ?, slug = ?, content_json = ?, rendered_html = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).bind(revision.title, revision.slug, revision.content_json, revision.rendered_html, id).run();

  return c.json({ success: true, data: { message: 'Khôi phục phiên bản thành công' } });
});

// POST /api/admin/posts/bulk (Bulk actions)
adminPostsRoutes.post('/bulk', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !Array.isArray(body.ids) || !body.action) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Dữ liệu không hợp lệ' } }, 400);
  }

  const ids: number[] = body.ids.map((i: any) => parseInt(i, 10)).filter((i: number) => !isNaN(i));
  if (ids.length === 0) {
    return c.json({ success: true, data: { affected: 0 } });
  }

  const placeholders = ids.map(() => '?').join(',');

  if (body.action === 'publish') {
    await c.env.DB.prepare(`
      UPDATE cms_posts SET status = 'published', published_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
      WHERE id IN (${placeholders})
    `).bind(...ids).run();
  } else if (body.action === 'draft') {
    await c.env.DB.prepare(`
      UPDATE cms_posts SET status = 'draft', updated_at = CURRENT_TIMESTAMP
      WHERE id IN (${placeholders})
    `).bind(...ids).run();
  } else if (body.action === 'archive') {
    await c.env.DB.prepare(`
      UPDATE cms_posts SET status = 'archived', updated_at = CURRENT_TIMESTAMP
      WHERE id IN (${placeholders})
    `).bind(...ids).run();
  } else if (body.action === 'delete') {
    await c.env.DB.prepare(`
      DELETE FROM cms_posts WHERE id IN (${placeholders})
    `).bind(...ids).run();
  }

  return c.json({ success: true, data: { affected: ids.length } });
});
