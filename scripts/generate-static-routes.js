import fs from 'fs';
import path from 'path';

export function generateStaticRoutes() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist! Run build first.');
    return;
  }

  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('dist/index.html does not exist!');
    return;
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
  const seedsPath = path.resolve('content/seeds/drafts_30_articles.json');
  const articles = JSON.parse(fs.readFileSync(seedsPath, 'utf-8'));

  console.log('⚡ Generating Static HTML Shells for all 30 Articles & Core Routes...');

  // Helper to replace SEO tags
  function customizeHtml(html, { title, description, canonicalUrl, ogType = 'article' }) {
    let customized = html;
    
    // Title
    customized = customized.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
    
    // Description
    customized = customized.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["']/i, `<meta name="description" content="${description}"`);
    
    // Canonical
    customized = customized.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i, `<link rel="canonical" href="${canonicalUrl}"`);
    
    // OG
    customized = customized.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i, `<meta property="og:title" content="${title}"`);
    customized = customized.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i, `<meta property="og:description" content="${description}"`);
    customized = customized.replace(/<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/i, `<meta property="og:url" content="${canonicalUrl}"`);
    customized = customized.replace(/<meta\s+property=["']og:type["']\s+content=["'][^"']*["']/i, `<meta property="og:type" content="${ogType}"`);
    
    // Twitter
    customized = customized.replace(/<meta\s+property=["']twitter:title["']\s+content=["'][^"']*["']/i, `<meta property="twitter:title" content="${title}"`);
    customized = customized.replace(/<meta\s+property=["']twitter:description["']\s+content=["'][^"']*["']/i, `<meta property="twitter:description" content="${description}"`);
    customized = customized.replace(/<meta\s+property=["']twitter:url["']\s+content=["'][^"']*["']/i, `<meta property="twitter:url" content="${canonicalUrl}"`);

    return customized;
  }

  // 1. /kien-thuc index page
  const kienThucDir = path.join(distDir, 'kien-thuc');
  if (!fs.existsSync(kienThucDir)) fs.mkdirSync(kienThucDir, { recursive: true });
  
  const kienThucHtml = customizeHtml(baseHtml, {
    title: 'Kiến Thức Doanh Nghiệp & Cẩm Nang Tăng Trưởng Số | LocalMate',
    description: 'Tổng hợp 30 cẩm nang thực chiến về Thiết kế website, SEO Google Maps, Quảng cáo Google Ads và Vận hành số cho doanh nghiệp nhỏ và hộ kinh doanh.',
    canonicalUrl: 'https://localmate.vn/kien-thuc',
    ogType: 'website'
  });
  fs.writeFileSync(path.join(kienThucDir, 'index.html'), kienThucHtml, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'kien-thuc.html'), kienThucHtml, 'utf-8');

  // 2. 30 Articles /kien-thuc/:slug
  let generatedCount = 0;
  for (const article of articles) {
    const slug = article.slug;
    const articleDir = path.join(kienThucDir, slug);
    if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });

    const articleTitle = `${article.title} | LocalMate`;
    const articleDesc = article.seo_description || article.excerpt || article.title;
    const articleUrl = `https://localmate.vn/kien-thuc/${slug}`;

    const articleHtml = customizeHtml(baseHtml, {
      title: articleTitle,
      description: articleDesc,
      canonicalUrl: articleUrl,
      ogType: 'article'
    });

    // Write both directory/index.html and flat .html for 100% 200 OK matching without redirects
    fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml, 'utf-8');
    fs.writeFileSync(path.join(kienThucDir, `${slug}.html`), articleHtml, 'utf-8');
    generatedCount++;
  }

  // 3. Core Static Policy & Geo Pages
  const staticRoutes = [
    {
      dir: 'dich-vu',
      title: 'Dịch vụ LocalMate | Giải pháp số cho doanh nghiệp địa phương',
      description: 'Khám phá dịch vụ thiết kế website, Google Maps, Google Ads, content và CRM của LocalMate.',
      url: 'https://localmate.vn/dich-vu'
    },
    {
      dir: 'labs',
      title: 'LocalMate Labs | Sản phẩm AI cho kinh doanh địa phương',
      description: 'LocalMate Labs nghiên cứu, thử nghiệm và phát triển sản phẩm AI thực tế cho công việc, tài chính và kinh doanh địa phương.',
      url: 'https://localmate.vn/labs'
    },
    {
      dir: 'mam-non',
      title: 'Localmate Mầm non — Thêm thời gian cho các bé',
      description: 'Giải pháp quản lý lớp và trường mầm non tinh gọn từ Localmate: Điểm danh, hồ sơ bé, nghỉ học, học phí và việc hằng ngày đơn giản, chi phí chỉ từ 3.000đ/ngày.',
      url: 'https://localmate.vn/mam-non'
    },
    {
      dir: 'geo',
      title: 'GEO — Tối Ưu Tìm Kiếm AI (ChatGPT, Perplexity, Gemini) | LocalMate',
      description: 'Đưa doanh nghiệp của bạn vào câu trả lời của AI. Giải pháp Generative Engine Optimization đón đầu kỷ nguyên tìm kiếm không click.',
      url: 'https://localmate.vn/geo'
    },
    {
      dir: 'chinh-sach-bao-mat',
      title: 'Chính Sách Bảo Mật | LocalMate',
      description: 'Chính sách bảo mật thông tin khách hàng và dữ liệu doanh nghiệp tại LocalMate.',
      url: 'https://localmate.vn/chinh-sach-bao-mat'
    },
    {
      dir: 'dieu-khoan',
      title: 'Điều Khoản Dịch Vụ | LocalMate',
      description: 'Điều khoản sử dụng dịch vụ và chính sách bàn giao tại LocalMate.',
      url: 'https://localmate.vn/dieu-khoan'
    },
    {
      dir: 'chinh-sach-dich-vu',
      title: 'Chính Sách Dịch Vụ & Bảo Hành | LocalMate',
      description: 'Cam kết chất lượng dịch vụ, thời gian phản hồi và chính sách thanh toán sau khi bàn giao của LocalMate.',
      url: 'https://localmate.vn/chinh-sach-dich-vu'
    }
  ];

  for (const route of staticRoutes) {
    const routeDir = path.join(distDir, route.dir);
    if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });

    const routeHtml = customizeHtml(baseHtml, {
      title: route.title,
      description: route.description,
      canonicalUrl: route.url,
      ogType: 'website'
    });

    fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
    fs.writeFileSync(path.join(distDir, `${route.dir}.html`), routeHtml, 'utf-8');
  }

  console.log(`✅ Successfully generated HTML shells for ${generatedCount} articles + ${staticRoutes.length + 1} static pages (both flat .html and /index.html)!`);
}

// Auto-run when executed directly
if (process.argv[1] && process.argv[1].endsWith('generate-static-routes.js')) {
  generateStaticRoutes();
}
