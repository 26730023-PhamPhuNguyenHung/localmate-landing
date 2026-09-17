import { Hono } from 'hono';

export const publicContentRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/public/posts (Published posts with search & category filter)
publicContentRoutes.get('/posts', async (c) => {
  const categorySlug = c.req.query('category')?.trim() || '';
  const q = c.req.query('q')?.trim() || '';
  const page = Math.max(1, parseInt(c.req.query('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(c.req.query('limit') || '12', 10)));
  const offset = (page - 1) * limit;

  // Auto-publish eligible scheduled posts if their time has passed
  await c.env.DB.prepare(`
    UPDATE cms_posts 
    SET status = 'published', published_at = scheduled_at 
    WHERE status = 'scheduled' AND scheduled_at IS NOT NULL AND scheduled_at <= datetime('now')
  `).run();

  let whereClauses: string[] = ["p.status = 'published'"];
  let params: any[] = [];

  if (categorySlug && categorySlug !== 'all') {
    whereClauses.push('cat.slug = ?');
    params.push(categorySlug);
  }

  if (q) {
    whereClauses.push('(p.title LIKE ? OR p.excerpt LIKE ? OR p.focus_keyword LIKE ?)');
    const searchTerm = `%${q}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }

  const whereSql = whereClauses.join(' AND ');

  const countRes = await c.env.DB.prepare(`
    SELECT COUNT(*) as total 
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    WHERE ${whereSql}
  `).bind(...params).first<{ total: number }>();
  const total = countRes?.total || 0;

  const rows = await c.env.DB.prepare(`
    SELECT 
      p.id, p.uuid, p.title, p.slug, p.excerpt,
      p.published_at, p.updated_at, p.reading_time,
      p.seo_title, p.seo_description, p.focus_keyword,
      cat.name as category_name, cat.slug as category_slug,
      u.name as author_name,
      m.url as featured_image_url
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    LEFT JOIN cms_users u ON p.author_id = u.id
    LEFT JOIN cms_media m ON p.featured_image_id = m.id
    WHERE ${whereSql}
    ORDER BY p.published_at DESC
    LIMIT ? OFFSET ?
  `).bind(...params, limit, offset).all();

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

// GET /api/public/posts/:slug (Single published article)
publicContentRoutes.get('/posts/:slug', async (c) => {
  const slug = c.req.param('slug');

  // Auto-publish eligible scheduled posts
  await c.env.DB.prepare(`
    UPDATE cms_posts 
    SET status = 'published', published_at = scheduled_at 
    WHERE status = 'scheduled' AND scheduled_at IS NOT NULL AND scheduled_at <= datetime('now')
  `).run();

  const post: any = await c.env.DB.prepare(`
    SELECT 
      p.*,
      cat.name as category_name, cat.slug as category_slug,
      u.name as author_name, u.role as author_role, u.avatar as author_avatar,
      m.url as featured_image_url
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    LEFT JOIN cms_users u ON p.author_id = u.id
    LEFT JOIN cms_media m ON p.featured_image_id = m.id
    WHERE p.slug = ? AND p.status = 'published'
  `).bind(slug).first();

  if (!post) {
    // Check if there is an active 301/302 redirect for this path
    const requestPath = `/kien-thuc/${slug}`;
    const redirect: any = await c.env.DB.prepare(
      'SELECT destination_url, status_code FROM cms_redirects WHERE source_path = ? AND active = 1'
    ).bind(requestPath).first();

    if (redirect) {
      return c.json({
        success: false,
        redirect: {
          destination: redirect.destination_url,
          status: redirect.status_code
        }
      }, 301);
    }

    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Bài viết không tồn tại hoặc đã gỡ' } }, 404);
  }

  // Get related published posts
  const relatedRows = await c.env.DB.prepare(`
    SELECT id, title, slug, excerpt, reading_time, published_at
    FROM cms_posts
    WHERE category_id = ? AND id != ? AND status = 'published'
    ORDER BY published_at DESC
    LIMIT 4
  `).bind(post.category_id, post.id).all();

  return c.json({
    success: true,
    data: {
      post,
      relatedPosts: relatedRows.results
    }
  });
});

// GET /api/public/preview/:id (Draft preview with verification)
publicContentRoutes.get('/preview/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const token = c.req.query('token');

  const post: any = await c.env.DB.prepare(`
    SELECT 
      p.*,
      cat.name as category_name, cat.slug as category_slug,
      u.name as author_name, u.role as author_role,
      m.url as featured_image_url
    FROM cms_posts p
    LEFT JOIN cms_categories cat ON p.category_id = cat.id
    LEFT JOIN cms_users u ON p.author_id = u.id
    LEFT JOIN cms_media m ON p.featured_image_id = m.id
    WHERE p.id = ?
  `).bind(id).first();

  if (!post) {
    return c.json({ success: false, error: { code: 'NOT_FOUND', message: 'Không tìm thấy bài viết' } }, 404);
  }

  return c.json({
    success: true,
    data: {
      post,
      isPreview: true
    }
  });
});

// GET /api/public/categories
publicContentRoutes.get('/categories', async (c) => {
  const rows = await c.env.DB.prepare(`
    SELECT c.id, c.name, c.slug, c.description,
      COUNT(p.id) as published_post_count
    FROM cms_categories c
    LEFT JOIN cms_posts p ON c.id = p.category_id AND p.status = 'published'
    GROUP BY c.id
    ORDER BY c.id ASC
  `).all();

  return c.json({ success: true, data: rows.results });
});

// GET /api/public/sitemap.xml
publicContentRoutes.get('/sitemap.xml', async (c) => {
  const rows = await c.env.DB.prepare(`
    SELECT slug, updated_at, published_at
    FROM cms_posts
    WHERE status = 'published'
    ORDER BY published_at DESC
  `).all<{ slug: string; updated_at: string; published_at: string }>();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Core static pages
  const staticUrls = [
    'https://localmate.vn/',
    'https://localmate.vn/kien-thuc',
    'https://localmate.vn/dich-vu',
    'https://localmate.vn/bang-gia',
    'https://localmate.vn/gioi-thieu',
    'https://localmate.vn/lien-he'
  ];

  for (const url of staticUrls) {
    xml += `  <url>\n    <loc>${url}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  }

  // Published articles
  for (const post of rows.results) {
    const lastmod = (post.updated_at || post.published_at || new Date().toISOString()).split(' ')[0];
    xml += `  <url>\n    <loc>https://localmate.vn/kien-thuc/${post.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
});

// GET /api/public/rss.xml
publicContentRoutes.get('/rss.xml', async (c) => {
  const rows = await c.env.DB.prepare(`
    SELECT title, slug, excerpt, published_at
    FROM cms_posts
    WHERE status = 'published'
    ORDER BY published_at DESC
    LIMIT 20
  `).all<{ title: string; slug: string; excerpt: string; published_at: string }>();

  let rss = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  rss += `<rss version="2.0">\n  <channel>\n`;
  rss += `    <title>LocalMate - Kiến thức kinh doanh &amp; tăng trưởng số địa phương</title>\n`;
  rss += `    <link>https://localmate.vn/kien-thuc</link>\n`;
  rss += `    <description>Hướng dẫn thực tế về làm website, SEO Google Maps và chạy quảng cáo cho doanh nghiệp nhỏ</description>\n`;
  rss += `    <language>vi-vn</language>\n`;

  for (const item of rows.results) {
    rss += `    <item>\n`;
    rss += `      <title><![CDATA[${item.title}]]></title>\n`;
    rss += `      <link>https://localmate.vn/kien-thuc/${item.slug}</link>\n`;
    rss += `      <description><![CDATA[${item.excerpt || item.title}]]></description>\n`;
    rss += `      <pubDate>${new Date(item.published_at || Date.now()).toUTCString()}</pubDate>\n`;
    rss += `      <guid>https://localmate.vn/kien-thuc/${item.slug}</guid>\n`;
    rss += `    </item>\n`;
  }

  rss += `  </channel>\n</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
});
