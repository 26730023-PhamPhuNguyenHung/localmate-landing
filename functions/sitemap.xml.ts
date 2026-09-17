interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;

  try {
    const rows = await DB.prepare(`
      SELECT slug, updated_at, published_at 
      FROM cms_posts 
      WHERE status = 'published' 
      ORDER BY published_at DESC
    `).all<{ slug: string; updated_at: string; published_at: string }>();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Core Static & Service Landing Pages
    const staticUrls = [
      'https://localmate.vn/',
      'https://localmate.vn/kien-thuc',
      'https://localmate.vn/dich-vu',
      'https://localmate.vn/dich-vu/geo',
      'https://localmate.vn/dich-vu/thiet-ke-website',
      'https://localmate.vn/dich-vu/google-maps-seo',
      'https://localmate.vn/dich-vu/quang-cao-google-ads',
      'https://localmate.vn/dich-vu/crm-automation',
      'https://localmate.vn/bang-gia',
      'https://localmate.vn/gioi-thieu',
      'https://localmate.vn/lien-he'
    ];

    for (const url of staticUrls) {
      xml += `  <url>\n    <loc>${url}</loc>\n    <changefreq>daily</changefreq>\n    <priority>${url === 'https://localmate.vn/' ? '1.0' : '0.9'}</priority>\n  </url>\n`;
    }

    // Dynamic Categories
    try {
      const catRows = await DB.prepare(`SELECT slug FROM cms_categories ORDER BY id ASC`).all<{ slug: string }>();
      if (catRows?.results) {
        for (const cat of catRows.results) {
          xml += `  <url>\n    <loc>https://localmate.vn/kien-thuc?category=${cat.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
        }
      }
    } catch {
      // ignore
    }

    // Dynamic published articles
    if (rows && rows.results) {
      for (const post of rows.results) {
        const lastmod = (post.updated_at || post.published_at || new Date().toISOString()).split(' ')[0];
        xml += `  <url>\n    <loc>https://localmate.vn/kien-thuc/${post.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
      }
    }

    xml += `</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800'
      }
    });
  } catch (err: any) {
    return new Response(`<!-- Sitemap Generation Error: ${err.message} -->`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};
