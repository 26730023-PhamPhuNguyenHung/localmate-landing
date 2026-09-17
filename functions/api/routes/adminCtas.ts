import { Hono } from 'hono';

export const adminCtasRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/admin/ctas (List all CTAs)
adminCtasRoutes.get('/', async (c) => {
  const rows = await c.env.DB.prepare(`
    SELECT * FROM cms_ctas ORDER BY created_at DESC
  `).all();

  return c.json({
    success: true,
    data: rows.results
  });
});

// POST /api/admin/ctas (Create CTA)
adminCtasRoutes.post('/', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.name || !body.headline || !body.button_label || !body.destination_url) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Vui lòng điền đầy đủ các thông tin bắt buộc' } }, 400);
  }

  const placement = ['after-intro', 'middle', 'before-conclusion', 'end'].includes(body.placement) ? body.placement : 'end';
  const isActive = body.is_active !== undefined ? (body.is_active ? 1 : 0) : 1;

  const res = await c.env.DB.prepare(`
    INSERT INTO cms_ctas (name, headline, description, button_label, destination_url, placement, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    body.name.trim(),
    body.headline.trim(),
    body.description ? body.description.trim() : '',
    body.button_label.trim(),
    body.destination_url.trim(),
    placement,
    isActive
  ).run();

  return c.json({
    success: true,
    data: {
      id: res.meta.last_row_id,
      name: body.name
    }
  });
});

// PUT /api/admin/ctas/:id (Update CTA)
adminCtasRoutes.put('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const body = await c.req.json().catch(() => null);
  if (!body) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Dữ liệu không hợp lệ' } }, 400);
  }

  const placement = ['after-intro', 'middle', 'before-conclusion', 'end'].includes(body.placement) ? body.placement : 'end';
  const isActive = body.is_active !== undefined ? (body.is_active ? 1 : 0) : 1;

  await c.env.DB.prepare(`
    UPDATE cms_ctas SET
      name = COALESCE(?, name),
      headline = COALESCE(?, headline),
      description = COALESCE(?, description),
      button_label = COALESCE(?, button_label),
      destination_url = COALESCE(?, destination_url),
      placement = ?,
      is_active = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).bind(
    body.name ? body.name.trim() : null,
    body.headline ? body.headline.trim() : null,
    body.description !== undefined ? body.description.trim() : null,
    body.button_label ? body.button_label.trim() : null,
    body.destination_url ? body.destination_url.trim() : null,
    placement,
    isActive,
    id
  ).run();

  return c.json({ success: true, data: { message: 'Cập nhật CTA thành công' } });
});

// DELETE /api/admin/ctas/:id (Delete CTA)
adminCtasRoutes.delete('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  await c.env.DB.prepare('DELETE FROM cms_ctas WHERE id = ?').bind(id).run();
  return c.json({ success: true, data: { message: 'Đã xóa CTA thành công' } });
});
