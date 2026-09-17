import { Hono } from 'hono';

export const adminSettingsRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/admin/dashboard (Dashboard live statistics)
adminSettingsRoutes.get('/dashboard', async (c) => {
  // Counts by status
  const counts = await c.env.DB.prepare(`
    SELECT status, COUNT(*) as count 
    FROM cms_posts 
    GROUP BY status
  `).all<{ status: string; count: number }>();

  let totalPosts = 0;
  let publishedPosts = 0;
  let draftPosts = 0;
  let scheduledPosts = 0;

  for (const row of counts.results) {
    totalPosts += row.count;
    if (row.status === 'published') publishedPosts = row.count;
    if (row.status === 'draft') draftPosts = row.count;
    if (row.status === 'scheduled') scheduledPosts = row.count;
  }

  // Recent updated posts
  const recentPosts = await c.env.DB.prepare(`
    SELECT p.id, p.title, p.slug, p.status, p.updated_at, cat.name as category_name
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    ORDER BY p.updated_at DESC
    LIMIT 6
  `).all();

  // Upcoming scheduled posts
  const upcomingPosts = await c.env.DB.prepare(`
    SELECT p.id, p.title, p.slug, p.status, p.scheduled_at, cat.name as category_name
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    WHERE p.status = 'scheduled'
    ORDER BY p.scheduled_at ASC
    LIMIT 5
  `).all();

  // Top categories with counts
  const topCategories = await c.env.DB.prepare(`
    SELECT c.id, c.name, c.slug, COUNT(p.id) as real_post_count
    FROM cms_categories c
    LEFT JOIN cms_posts p ON c.id = p.category_id
    GROUP BY c.id
    ORDER BY real_post_count DESC
    LIMIT 7
  `).all();

  return c.json({
    success: true,
    data: {
      stats: {
        totalPosts,
        publishedPosts,
        draftPosts,
        scheduledPosts
      },
      recentPosts: recentPosts.results,
      upcomingPosts: upcomingPosts.results,
      topCategories: topCategories.results
    }
  });
});

// GET /api/admin/settings
adminSettingsRoutes.get('/settings', async (c) => {
  const rows = await c.env.DB.prepare('SELECT key, value FROM cms_settings').all<{ key: string; value: string }>();
  const settingsObj: Record<string, string> = {};
  for (const row of rows.results) {
    settingsObj[row.key] = row.value;
  }
  return c.json({ success: true, data: settingsObj });
});

// PUT /api/admin/settings
adminSettingsRoutes.put('/settings', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Dữ liệu không hợp lệ' } }, 400);
  }

  for (const [k, v] of Object.entries(body)) {
    if (typeof v === 'string') {
      await c.env.DB.prepare(`
        INSERT OR REPLACE INTO cms_settings (key, value, updated_at)
        VALUES (?, ?, CURRENT_TIMESTAMP)
      `).bind(k, v).run();
    }
  }

  return c.json({ success: true, data: { message: 'Đã lưu cài đặt hệ thống thành công' } });
});

// GET /api/admin/backup/export (Export all posts as versioned JSON)
adminSettingsRoutes.get('/backup/export', async (c) => {
  const posts = await c.env.DB.prepare(`
    SELECT p.*, cat.slug as category_slug
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    ORDER BY p.id ASC
  `).all();

  const backupData = {
    schema_version: 1,
    exported_at: new Date().toISOString(),
    total_posts: posts.results.length,
    posts: posts.results
  };

  return c.json({ success: true, data: backupData });
});

// POST /api/admin/backup/import (Import preview & commit)
adminSettingsRoutes.post('/backup/import', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !Array.isArray(body.posts)) {
    return c.json({ success: false, error: { code: 'INVALID_JSON', message: 'Tệp sao lưu không đúng cấu trúc' } }, 400);
  }

  const dryRun = c.req.query('dry_run') === 'true';
  const existingSlugs = new Set<string>();
  const allExisting = await c.env.DB.prepare('SELECT slug FROM cms_posts').all<{ slug: string }>();
  for (const row of allExisting.results) {
    existingSlugs.add(row.slug);
  }

  let newCount = 0;
  let updateCount = 0;
  let skippedCount = 0;
  const previewItems: any[] = [];

  for (const post of body.posts) {
    if (!post.title || !post.slug) {
      skippedCount++;
      continue;
    }

    const isConflict = existingSlugs.has(post.slug);
    if (isConflict) {
      updateCount++;
      previewItems.push({ title: post.title, slug: post.slug, action: 'UPDATE' });
    } else {
      newCount++;
      previewItems.push({ title: post.title, slug: post.slug, action: 'NEW' });
    }

    if (!dryRun) {
      // Commit insert or update
      await c.env.DB.prepare(`
        INSERT OR REPLACE INTO cms_posts (
          uuid, title, slug, excerpt, content_json, rendered_html,
          status, author_id, category_id,
          seo_title, seo_description, focus_keyword, canonical_url,
          og_title, og_description, robots_index, robots_follow,
          reading_time, word_count, revision_number, brief_json
        ) VALUES (
          ?, ?, ?, ?, ?, ?,
          ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?
        )
      `).bind(
        post.uuid || `post_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        post.title, post.slug, post.excerpt || '',
        typeof post.content_json === 'string' ? post.content_json : JSON.stringify(post.content_json),
        post.rendered_html || '',
        post.status || 'draft',
        post.author_id || 1,
        post.category_id || 1,
        post.seo_title || post.title, post.seo_description || '', post.focus_keyword || '', post.canonical_url || '',
        post.og_title || post.title, post.og_description || '', post.robots_index ?? 1, post.robots_follow ?? 1,
        post.reading_time || '5 phút đọc', post.word_count || 0, post.revision_number || 1,
        typeof post.brief_json === 'string' ? post.brief_json : JSON.stringify(post.brief_json || {})
      ).run();
    }
  }

  return c.json({
    success: true,
    data: {
      dry_run: dryRun,
      summary: {
        total: body.posts.length,
        new: newCount,
        update: updateCount,
        skipped: skippedCount
      },
      preview: previewItems.slice(0, 30)
    }
  });
});

// GET /api/admin/redirects
adminSettingsRoutes.get('/redirects', async (c) => {
  const rows = await c.env.DB.prepare('SELECT * FROM cms_redirects ORDER BY created_at DESC').all();
  return c.json({ success: true, data: rows.results });
});

// POST /api/admin/redirects
adminSettingsRoutes.post('/redirects', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.source_path || !body.destination_url) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Vui lòng nhập đường dẫn nguồn và đích' } }, 400);
  }

  const statusCode = body.status_code === 302 ? 302 : 301;
  await c.env.DB.prepare(`
    INSERT OR REPLACE INTO cms_redirects (source_path, destination_url, status_code, active)
    VALUES (?, ?, ?, 1)
  `).bind(body.source_path.trim(), body.destination_url.trim(), statusCode).run();

  return c.json({ success: true, data: { message: 'Đã lưu quy tắc chuyển hướng' } });
});

// DELETE /api/admin/redirects/:id
adminSettingsRoutes.delete('/redirects/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  await c.env.DB.prepare('DELETE FROM cms_redirects WHERE id = ?').bind(id).run();
  return c.json({ success: true, data: { message: 'Đã xóa quy tắc chuyển hướng' } });
});
