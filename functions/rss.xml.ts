interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;

  try {
    const rows = await DB.prepare(`
      SELECT title, slug, excerpt, published_at
      FROM cms_posts
      WHERE status = 'published'
      ORDER BY published_at DESC
      LIMIT 30
    `).all<{ title: string; slug: string; excerpt: string; published_at: string }>();

    let rss = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    rss += `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n`;
    rss += `    <title>LocalMate - Kiến thức kinh doanh &amp; tăng trưởng số địa phương</title>\n`;
    rss += `    <link>https://localmate.vn/kien-thuc</link>\n`;
    rss += `    <atom:link href="https://localmate.vn/rss.xml" rel="self" type="application/rss+xml" />\n`;
    rss += `    <description>Hướng dẫn thực tế về làm website, SEO Google Maps và chạy quảng cáo cho doanh nghiệp nhỏ</description>\n`;
    rss += `    <language>vi-vn</language>\n`;

    if (rows && rows.results) {
      for (const item of rows.results) {
        rss += `    <item>\n`;
        rss += `      <title><![CDATA[${item.title}]]></title>\n`;
        rss += `      <link>https://localmate.vn/kien-thuc/${item.slug}</link>\n`;
        rss += `      <description><![CDATA[${item.excerpt || item.title}]]></description>\n`;
        rss += `      <pubDate>${new Date(item.published_at || Date.now()).toUTCString()}</pubDate>\n`;
        rss += `      <guid>https://localmate.vn/kien-thuc/${item.slug}</guid>\n`;
        rss += `    </item>\n`;
      }
    }

    rss += `  </channel>\n</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800'
      }
    });
  } catch (err: any) {
    return new Response(`<!-- RSS Generation Error: ${err.message} -->`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};
