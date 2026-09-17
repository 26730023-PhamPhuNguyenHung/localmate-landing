import { Hono } from 'hono';

export const adminSettingsRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/admin/dashboard (Real Actionable Metrics, Zero Vanity Metrics)
adminSettingsRoutes.get('/dashboard', async (c) => {
  // 1. Post counts by status
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

  // 2. Real SEO & Media Actionable Issues
  const missingMetaDesc = await c.env.DB.prepare(`
    SELECT COUNT(*) as count FROM cms_posts 
    WHERE (seo_description IS NULL OR TRIM(seo_description) = '')
  `).first<{ count: number }>();

  const missingFeaturedImg = await c.env.DB.prepare(`
    SELECT COUNT(*) as count FROM cms_posts 
    WHERE featured_image_id IS NULL
  `).first<{ count: number }>();

  const missingAltMedia = await c.env.DB.prepare(`
    SELECT COUNT(*) as count FROM cms_media 
    WHERE (alt_text IS NULL OR TRIM(alt_text) = '')
  `).first<{ count: number }>();

  const oversizedMedia = await c.env.DB.prepare(`
    SELECT COUNT(*) as count FROM cms_media 
    WHERE size > 512000
  `).first<{ count: number }>();

  const geoIssues = await c.env.DB.prepare(`
    SELECT COUNT(*) as count FROM cms_posts 
    WHERE (geo_direct_answer IS NULL OR TRIM(geo_direct_answer) = '' OR geo_main_question IS NULL)
  `).first<{ count: number }>();

  const unusedMedia = await c.env.DB.prepare(`
    SELECT COUNT(*) as count FROM cms_media 
    WHERE id NOT IN (SELECT DISTINCT featured_image_id FROM cms_posts WHERE featured_image_id IS NOT NULL)
  `).first<{ count: number }>();

  // 3. Recent updated posts
  const recentPosts = await c.env.DB.prepare(`
    SELECT p.id, p.title, p.slug, p.status, p.updated_at, p.word_count, cat.name as category_name
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    ORDER BY p.updated_at DESC
    LIMIT 6
  `).all();

  // 4. Upcoming scheduled posts
  const upcomingPosts = await c.env.DB.prepare(`
    SELECT p.id, p.title, p.slug, p.status, p.scheduled_at, cat.name as category_name
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    WHERE p.status = 'scheduled'
    ORDER BY p.scheduled_at ASC
    LIMIT 5
  `).all();

  // 5. Top categories with counts
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
      issues: {
        missingMetaDescription: missingMetaDesc?.count || 0,
        missingFeaturedImage: missingFeaturedImg?.count || 0,
        missingAltMedia: missingAltMedia?.count || 0,
        oversizedMedia: oversizedMedia?.count || 0,
        geoIssues: geoIssues?.count || 0,
        unusedMedia: unusedMedia?.count || 0
      },
      recentPosts: recentPosts.results,
      upcomingPosts: upcomingPosts.results,
      topCategories: topCategories.results
    }
  });
});

// GET /api/admin/audit/seo-geo (Global SEO & GEO Comprehensive Audit)
adminSettingsRoutes.get('/audit/seo-geo', async (c) => {
  const posts = await c.env.DB.prepare(`
    SELECT 
      p.id, p.title, p.slug, p.status, p.word_count, p.updated_at,
      p.seo_title, p.seo_description, p.focus_keyword,
      p.featured_image_id, p.rendered_html,
      p.geo_main_question, p.geo_direct_answer, p.cta_id,
      cat.name as category_name
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    ORDER BY p.updated_at DESC
  `).all();

  const auditedPosts = (posts.results as any[]).map((post) => {
    const issues: { type: 'critical' | 'warning' | 'info'; code: string; message: string }[] = [];

    // SEO checks
    if (!post.seo_description || post.seo_description.trim().length === 0) {
      issues.push({ type: 'critical', code: 'MISSING_META_DESC', message: 'Chưa có thẻ mô tả SEO (Meta Description)' });
    } else if (post.seo_description.length < 90) {
      issues.push({ type: 'warning', code: 'SHORT_META_DESC', message: `Mô tả hơi ngắn (${post.seo_description.length} ký tự < 120)` });
    }

    if (!post.featured_image_id) {
      issues.push({ type: 'warning', code: 'MISSING_FEATURED_IMAGE', message: 'Chưa cài đặt ảnh đại diện (Featured Image)' });
    }

    if (!post.word_count || post.word_count < 300) {
      issues.push({ type: 'critical', code: 'THIN_CONTENT', message: `Nội dung quá mỏng (${post.word_count || 0} từ < 400)` });
    }

    const html = post.rendered_html || '';
    if (!html.includes('<h2')) {
      issues.push({ type: 'critical', code: 'MISSING_H2', message: 'Bài viết thiếu thẻ phân đoạn Heading 2 (H2)' });
    }

    // GEO checks
    if (!post.geo_direct_answer || post.geo_direct_answer.trim().length < 30) {
      issues.push({ type: 'warning', code: 'MISSING_GEO_ANSWER', message: 'Chưa có câu trả lời trực diện (Answer-First) cho AI' });
    }

    if (!post.geo_main_question || post.geo_main_question.trim().length < 10) {
      issues.push({ type: 'warning', code: 'MISSING_GEO_QUESTION', message: 'Chưa định danh câu hỏi chính người dùng tìm kiếm' });
    }

    // CTA check
    if (!post.cta_id) {
      issues.push({ type: 'info', code: 'NO_CUSTOM_CTA', message: 'Đang dùng CTA mặc định, chưa gắn CTA chuyển đổi riêng' });
    }

    // Score calculation
    const criticalCount = issues.filter(i => i.type === 'critical').length;
    const warningCount = issues.filter(i => i.type === 'warning').length;
    let score = 100 - (criticalCount * 25) - (warningCount * 10);
    score = Math.max(0, Math.min(100, score));

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      status: post.status,
      category_name: post.category_name || 'Chung',
      word_count: post.word_count || 0,
      updated_at: post.updated_at,
      score,
      criticalCount,
      warningCount,
      issues
    };
  });

  return c.json({
    success: true,
    data: {
      posts: auditedPosts,
      totalAudited: auditedPosts.length,
      criticalIssuesTotal: auditedPosts.reduce((sum, p) => sum + p.criticalCount, 0),
      warningIssuesTotal: auditedPosts.reduce((sum, p) => sum + p.warningCount, 0)
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
    SELECT 
      p.uuid, p.title, p.slug, p.excerpt, p.content_json, p.rendered_html,
      p.status, p.author_id, p.category_id,
      p.published_at, p.scheduled_at, p.created_at, p.updated_at,
      p.seo_title, p.seo_description, p.focus_keyword, p.canonical_url,
      p.og_title, p.og_description, p.robots_index, p.robots_follow,
      p.reading_time, p.word_count, p.revision_number, p.brief_json,
      p.geo_main_question, p.geo_direct_answer, p.geo_entities, p.geo_sources, p.geo_faq_json,
      p.cta_id, p.schema_type,
      cat.name as category_name, cat.slug as category_slug
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    ORDER BY p.id ASC
  `).all();

  const settings = await c.env.DB.prepare('SELECT key, value FROM cms_settings').all();
  const ctas = await c.env.DB.prepare('SELECT * FROM cms_ctas').all();

  return c.json({
    version: '2.0',
    app: 'LocalMate CMS',
    exported_at: new Date().toISOString(),
    total_posts: posts.results.length,
    settings: settings.results,
    ctas: ctas.results,
    posts: posts.results
  });
});

// POST /api/admin/backup/import (Safe import with preview / dry-run)
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
      await c.env.DB.prepare(`
        INSERT OR REPLACE INTO cms_posts (
          uuid, title, slug, excerpt, content_json, rendered_html,
          status, author_id, category_id,
          seo_title, seo_description, focus_keyword, canonical_url,
          og_title, og_description, robots_index, robots_follow,
          reading_time, word_count, revision_number, brief_json,
          geo_main_question, geo_direct_answer, geo_entities, geo_sources, geo_faq_json,
          cta_id, schema_type
        ) VALUES (
          ?, ?, ?, ?, ?, ?,
          ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?, ?,
          ?, ?
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
        typeof post.brief_json === 'string' ? post.brief_json : JSON.stringify(post.brief_json || {}),
        post.geo_main_question || null, post.geo_direct_answer || null, post.geo_entities || null, post.geo_sources || null, post.geo_faq_json || null,
        post.cta_id || null, post.schema_type || 'Article'
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

// POST /api/admin/redirects (With Loop & Chain Detection)
adminSettingsRoutes.post('/redirects', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.source_path || !body.destination_url) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Vui lòng nhập đường dẫn nguồn và đích' } }, 400);
  }

  const source = body.source_path.trim();
  const destination = body.destination_url.trim();

  // 1. Phát hiện vòng lặp trực tiếp (Self-Loop: A -> A)
  if (source === destination) {
    return c.json({
      success: false,
      error: { code: 'REDIRECT_LOOP', message: 'Lỗi vòng lặp: Đường dẫn nguồn và đường dẫn đích không được trùng nhau!' }
    }, 400);
  }

  // 2. Phát hiện vòng lặp hai chiều (Cross Loop: B -> A khi đã có A -> B)
  const existingReverse = await c.env.DB.prepare(
    'SELECT * FROM cms_redirects WHERE source_path = ? AND destination_url = ?'
  ).bind(destination, source).first();

  if (existingReverse) {
    return c.json({
      success: false,
      error: { code: 'REDIRECT_LOOP', message: `Lỗi vòng lặp: Đã tồn tại quy tắc chuyển hướng ngược lại (${destination} → ${source}). Không thể tạo vòng lặp vô tận!` }
    }, 400);
  }

  // 3. Phát hiện chuỗi chuyển hướng (Chain Detection: A -> B khi B -> C)
  const existingChain = await c.env.DB.prepare(
    'SELECT * FROM cms_redirects WHERE source_path = ?'
  ).bind(destination).first<{ destination_url: string }>();

  let finalDestination = destination;
  let chainWarning = '';
  if (existingChain) {
    finalDestination = existingChain.destination_url;
    chainWarning = `Hệ thống đã tự động nối thẳng sang đích cuối (${finalDestination}) để tránh chuỗi chuyển hướng (Redirect Chain) gây chậm trang.`;
  }

  const statusCode = body.status_code === 302 ? 302 : 301;
  await c.env.DB.prepare(`
    INSERT OR REPLACE INTO cms_redirects (source_path, destination_url, status_code, active, hits)
    VALUES (?, ?, ?, 1, 0)
  `).bind(source, finalDestination, statusCode).run();

  return c.json({
    success: true,
    data: {
      message: 'Đã lưu quy tắc chuyển hướng thành công',
      warning: chainWarning || undefined
    }
  });
});

// DELETE /api/admin/redirects/:id
adminSettingsRoutes.delete('/redirects/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  await c.env.DB.prepare('DELETE FROM cms_redirects WHERE id = ?').bind(id).run();
  return c.json({ success: true, data: { message: 'Đã xóa quy tắc chuyển hướng' } });
});
