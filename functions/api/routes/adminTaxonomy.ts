import { Hono } from 'hono';
import { slugify } from '../utils/slugify';

export const adminTaxonomyRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/admin/categories
adminTaxonomyRoutes.get('/categories', async (c) => {
  const rows = await c.env.DB.prepare(`
    SELECT c.*, 
      (SELECT COUNT(*) FROM cms_posts p WHERE p.category_id = c.id) as real_post_count
    FROM cms_categories c
    ORDER BY c.id ASC
  `).all();
  return c.json({ success: true, data: rows.results });
});

// POST /api/admin/categories
adminTaxonomyRoutes.post('/categories', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.name) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Tên chuyên mục là bắt buộc' } }, 400);
  }

  const name = body.name.trim();
  const slug = body.slug ? slugify(body.slug) : slugify(name);
  const description = body.description || '';

  try {
    const res = await c.env.DB.prepare(`
      INSERT INTO cms_categories (name, slug, description, post_count)
      VALUES (?, ?, ?, 0)
    `).bind(name, slug, description).run();

    return c.json({
      success: true,
      data: {
        id: res.meta.last_row_id,
        name,
        slug,
        description
      }
    });
  } catch (err: any) {
    return c.json({ success: false, error: { code: 'DUPLICATE', message: 'Chuyên mục hoặc đường dẫn slug đã tồn tại' } }, 409);
  }
});

// PUT /api/admin/categories/:id
adminTaxonomyRoutes.put('/categories/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const body = await c.req.json().catch(() => null);
  if (!body || !body.name) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Tên chuyên mục là bắt buộc' } }, 400);
  }

  const name = body.name.trim();
  const slug = body.slug ? slugify(body.slug) : slugify(name);
  const description = body.description || '';

  await c.env.DB.prepare(`
    UPDATE cms_categories SET name = ?, slug = ?, description = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).bind(name, slug, description, id).run();

  return c.json({ success: true, data: { id, name, slug, description } });
});

// DELETE /api/admin/categories/:id
adminTaxonomyRoutes.delete('/categories/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  // Re-assign posts in this category to default category 1
  await c.env.DB.prepare('UPDATE cms_posts SET category_id = 1 WHERE category_id = ?').bind(id).run();
  await c.env.DB.prepare('DELETE FROM cms_categories WHERE id = ?').bind(id).run();
  return c.json({ success: true, data: { message: 'Đã xóa chuyên mục' } });
});

// GET /api/admin/tags
adminTaxonomyRoutes.get('/tags', async (c) => {
  const q = c.req.query('q')?.trim() || '';
  let query = 'SELECT * FROM cms_tags';
  let params: any[] = [];
  if (q) {
    query += ' WHERE name LIKE ? OR slug LIKE ?';
    params.push(`%${q}%`, `%${q}%`);
  }
  query += ' ORDER BY post_count DESC, name ASC LIMIT 50';

  const rows = await c.env.DB.prepare(query).bind(...params).all();
  return c.json({ success: true, data: rows.results });
});

// POST /api/admin/tags
adminTaxonomyRoutes.post('/tags', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.name) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Tên thẻ là bắt buộc' } }, 400);
  }

  const name = body.name.trim();
  const slug = body.slug ? slugify(body.slug) : slugify(name);

  try {
    const res = await c.env.DB.prepare(`
      INSERT INTO cms_tags (name, slug, post_count) VALUES (?, ?, 0)
    `).bind(name, slug).run();

    return c.json({
      success: true,
      data: { id: res.meta.last_row_id, name, slug }
    });
  } catch {
    // If exists, fetch and return
    const existing = await c.env.DB.prepare('SELECT * FROM cms_tags WHERE slug = ?').bind(slug).first();
    return c.json({ success: true, data: existing });
  }
});
