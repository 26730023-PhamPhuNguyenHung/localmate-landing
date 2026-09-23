#!/usr/bin/env node

/**
 * ============================================================================
 * LocalMate SEO & AI Crawler Automation Generator
 * Domain: https://localmate.vn
 * 
 * Functions:
 * 1. Scans and loads 30 technical articles from content/articles
 * 2. Generates canonical public/sitemap.xml (W3C standard)
 * 3. Generates public/robots.txt optimized for search engines & leading AI crawlers
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://localmate.vn';
const TODAY_ISO = new Date().toISOString().split('T')[0]; // e.g. '2026-09-17'

/**
 * XML special characters escape
 */
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

/**
 * 1. Define Static Core Pages & Routes
 */
const CORE_PAGES = [
  // Trang chủ
  {
    loc: `${BASE_URL}/`,
    lastmod: TODAY_ISO,
    changefreq: 'daily',
    priority: '1.0',
    title: 'Trang chủ LocalMate - Giải Pháp Số Địa Phương Toàn Diện'
  },
  // Core Services
  {
    loc: `${BASE_URL}/dich-vu`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.90',
    title: 'Dịch Vụ LocalMate'
  },
  {
    loc: `${BASE_URL}/thiet-ke-website`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.95',
    title: 'Thiết Kế Website Doanh Nghiệp Tinh Gọn'
  },
  {
    loc: `${BASE_URL}/google-maps-local-seo`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.95',
    title: 'Dịch Vụ Google Maps & Local SEO'
  },
  {
    loc: `${BASE_URL}/google-ads`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'Quảng Cáo Google Ads Tìm Kiếm Tối Ưu Chuyển Đổi'
  },
  {
    loc: `${BASE_URL}/content-marketing`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'Content Marketing & Chăm Sóc Số Đa Kênh'
  },
  {
    loc: `${BASE_URL}/automation`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'Phần Mềm CRM & Tự Động Hóa Vận Hành'
  },
  {
    loc: `${BASE_URL}/bang-gia`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'Bảng Giá Dịch Vụ Minh Bạch'
  },
  // GEO & Generative AI Search Hub
  {
    loc: `${BASE_URL}/labs`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.85',
    title: 'LocalMate Labs - Sản phẩm AI cho kinh doanh địa phương'
  },
  {
    loc: `${BASE_URL}/geo`,
    lastmod: TODAY_ISO,
    changefreq: 'daily',
    priority: '0.95',
    title: 'GEO - Tối Ưu Hóa Tìm Kiếm Bằng Trí Tuệ Nhân Tạo (Generative Engine Optimization)'
  },
  // Mầm non Vertical Solution
  {
    loc: `${BASE_URL}/mam-non`,
    lastmod: TODAY_ISO,
    changefreq: 'daily',
    priority: '0.95',
    title: 'Localmate Mầm non — Thêm thời gian cho các bé'
  },
  {
    loc: `${BASE_URL}/dich-vu/geo`,
    lastmod: TODAY_ISO,
    changefreq: 'daily',
    priority: '0.95',
    title: 'Dịch Vụ Đưa Thương Hiệu Lên Top Khuyên Dùng AI'
  },
  {
    loc: `${BASE_URL}/dich-vu/aeo`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'AEO - Answer Engine Optimization Cho Doanh Nghiệp'
  },
  {
    loc: `${BASE_URL}/dich-vu/seo-ai`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'SEO AI - Tối Ưu Hiện Diện Trên Mọi Trợ Lý Số'
  },
  {
    loc: `${BASE_URL}/dich-vu/seo-chatgpt`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.90',
    title: 'SEO ChatGPT & SearchGPT Citation'
  },
  {
    loc: `${BASE_URL}/quy-trinh-geo`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.85',
    title: 'Quy Trình 6 Bước Triển Khai GEO Chuẩn Hóa'
  },
  // Real Portfolio Case Studies
  {
    loc: `${BASE_URL}/du-an`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.85',
    title: 'Thư Viện Dự Án & Bằng Chứng Số Thực Tế'
  },
  {
    loc: `${BASE_URL}/du-an/xeo-restaurant`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.80',
    title: 'Case Study: Xèo Restaurant Tăng 320% Khách Đặt Bàn'
  },
  {
    loc: `${BASE_URL}/du-an/nam-phat`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.80',
    title: 'Case Study: Cơ Khí Nam Phát Đón Khách Khu Công Nghiệp'
  },
  {
    loc: `${BASE_URL}/du-an/huong-sen`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.80',
    title: 'Case Study: Hương Sen Spa Giảm Chi Phí Lead'
  },
  // Company & Contact
  {
    loc: `${BASE_URL}/ve-localmate`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.80',
    title: 'Về LocalMate - Đồng Hành Cùng Hộ Kinh Doanh Việt'
  },
  {
    loc: `${BASE_URL}/lien-he`,
    lastmod: TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.80',
    title: 'Liên Hệ Tư Vấn & Khảo Sát Demo 0đ'
  },
  {
    loc: `${BASE_URL}/landing-490k`,
    lastmod: TODAY_ISO,
    changefreq: 'weekly',
    priority: '0.85',
    title: 'Gói Khởi Tạo Website 490k Tinh Gọn Chuyển Đổi'
  },
  {
    loc: `${BASE_URL}/kien-thuc`,
    lastmod: TODAY_ISO,
    changefreq: 'daily',
    priority: '0.90',
    title: 'Trung Tâm Kiến Thức Số Thực Chiến Doanh Nghiệp Địa Phương'
  },
  // Legal & Compliance Pages
  {
    loc: `${BASE_URL}/chinh-sach-bao-mat`,
    lastmod: TODAY_ISO,
    changefreq: 'yearly',
    priority: '0.50',
    title: 'Chính Sách Bảo Mật Thông Tin Khách Hàng'
  },
  {
    loc: `${BASE_URL}/dieu-khoan`,
    lastmod: TODAY_ISO,
    changefreq: 'yearly',
    priority: '0.50',
    title: 'Điều Khoản Dịch Vụ & Sử Dụng Hệ Thống'
  },
  {
    loc: `${BASE_URL}/chinh-sach-dich-vu`,
    lastmod: TODAY_ISO,
    changefreq: 'yearly',
    priority: '0.50',
    title: 'Chính Sách Dịch Vụ, Bàn Giao & Nghiệm Thu'
  }
];

/**
 * 2. Load and parse all 30 articles from content/articles
 */
function loadAllArticles() {
  const articlesDir = path.join(projectRoot, 'content', 'articles');
  if (!fs.existsSync(articlesDir)) {
    console.error(`[ERROR] Articles directory not found: ${articlesDir}`);
    return [];
  }

  const entries = fs.readdirSync(articlesDir, { withFileTypes: true });
  const articles = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const jsonPath = path.join(articlesDir, entry.name, 'article.json');
      if (fs.existsSync(jsonPath)) {
        try {
          const raw = fs.readFileSync(jsonPath, 'utf-8');
          const data = JSON.parse(raw);
          const slug = data.slug || entry.name;
          
          // Determine last modified date
          let lastmod = TODAY_ISO;
          if (data.provenance && data.provenance.validated_at) {
            lastmod = data.provenance.validated_at.split('T')[0];
          } else if (data.updated_at) {
            lastmod = data.updated_at.split('T')[0];
          }

          articles.push({
            slug,
            loc: `${BASE_URL}/kien-thuc/${slug}`,
            lastmod,
            changefreq: 'monthly',
            priority: '0.80',
            title: data.title || slug
          });
        } catch (err) {
          console.warn(`[WARN] Failed to parse ${jsonPath}:`, err.message);
        }
      }
    }
  }

  // Sort alphabetically by slug for clean deterministic output
  articles.sort((a, b) => a.slug.localeCompare(b.slug));
  return articles;
}

/**
 * 3. Generate XML Sitemap content
 */
function generateSitemapXml(allUrls) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const item of allUrls) {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(item.loc)}</loc>\n`;
    xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    xml += `    <priority>${item.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

/**
 * 4. Generate Robots.txt content with Leading AI Crawler rules
 */
function generateRobotsTxt() {
  return `# ==============================================================================
# LocalMate Robots.txt - Technical Crawl & Search / AI Crawler Directives
# Domain: https://localmate.vn
# Standard: RFC 9309 Compliant
# Last Updated: ${TODAY_ISO}
# Generator: scripts/generate-seo-files.js
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. Default Fallback Rules
# ------------------------------------------------------------------------------
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# ------------------------------------------------------------------------------
# 2. Major Search Engine Crawlers
# ------------------------------------------------------------------------------
# Google Web Search Crawler
User-agent: Googlebot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Microsoft Bing Search Crawler
User-agent: Bingbot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# ------------------------------------------------------------------------------
# 3. Top AI Search Engines & LLM Citation Crawlers
# ------------------------------------------------------------------------------
# Google AI & Gemini Training / AI Overviews Crawler
User-agent: Google-Extended
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# OpenAI LLM Training & Web Crawler
User-agent: GPTBot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# OpenAI Real-Time Browsing by ChatGPT Users
User-agent: ChatGPT-User
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# OpenAI Search Engine (SearchGPT)
User-agent: OAI-SearchBot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Anthropic Claude Web Crawler & Knowledge Indexer
User-agent: ClaudeBot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Anthropic Claude Real-Time User Browsing
User-agent: Claude-Web
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Perplexity AI Search & Answer Engine Crawler
User-agent: PerplexityBot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Apple Search, Spotlight & Siri Crawler
User-agent: Applebot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Apple Intelligence Training & Data Crawler
User-agent: Applebot-Extended
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# ByteDance / TikTok AI Crawler
User-agent: Bytespider
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# Meta AI Crawlers (Llama / Meta AI Search)
User-agent: FacebookBot
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

User-agent: meta-externalagent
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Allow: /

# ------------------------------------------------------------------------------
# 4. Sitemaps & Machine-Readable Knowledge Architecture
# ------------------------------------------------------------------------------
Sitemap: ${BASE_URL}/sitemap.xml
Link: ${BASE_URL}/llms.txt
Link: ${BASE_URL}/llms-full.txt
`;
}

/**
 * Main execution
 */
async function main() {
  console.log(`==============================================================================`);
  console.log(`🤖 LOCALMATE SITEMAP & AI CRAWLER SEO GENERATOR`);
  console.log(`==============================================================================`);
  console.log(`Domain:     ${BASE_URL}`);
  console.log(`Timestamp:  ${TODAY_ISO}`);

  // 1. Load articles
  const articles = loadAllArticles();
  console.log(`📚 Loaded:  ${articles.length} knowledge base articles from content/articles`);

  if (articles.length !== 30) {
    console.warn(`⚠️ [WARNING] Expected 30 articles, found ${articles.length}. Please verify directory.`);
  }

  // 2. Combine all URLs
  const allUrls = [...CORE_PAGES, ...articles];
  console.log(`🌐 Total:   ${allUrls.length} canonical URLs for sitemap`);

  // 3. Write public/sitemap.xml
  const sitemapXml = generateSitemapXml(allUrls);
  const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`✅ Generated: public/sitemap.xml (${Buffer.byteLength(sitemapXml, 'utf8')} bytes)`);

  // 4. Write public/robots.txt
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(projectRoot, 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
  console.log(`✅ Generated: public/robots.txt (${Buffer.byteLength(robotsTxt, 'utf8')} bytes)`);

  // 5. Verification checks
  console.log(`\n🔍 VERIFICATION AUDIT:`);
  
  // Check XML syntax basic validity
  const locCount = (sitemapXml.match(/<loc>/g) || []).length;
  const urlCloseCount = (sitemapXml.match(/<\/url>/g) || []).length;
  const hasRoot = sitemapXml.includes('<loc>https://localmate.vn/</loc>');
  const hasGeo = sitemapXml.includes('<loc>https://localmate.vn/geo</loc>');
  const hasMamNon = sitemapXml.includes('<loc>https://localmate.vn/mam-non</loc>');
  const hasPrivacy = sitemapXml.includes('<loc>https://localmate.vn/chinh-sach-bao-mat</loc>');
  const hasTerms = sitemapXml.includes('<loc>https://localmate.vn/dieu-khoan</loc>');
  const hasServicePolicy = sitemapXml.includes('<loc>https://localmate.vn/chinh-sach-dich-vu</loc>');

  console.log(`  - <loc> tags count:            ${locCount} (Expected: ${allUrls.length}) -> ${locCount === allUrls.length ? 'PASS' : 'FAIL'}`);
  console.log(`  - Closing </url> count:        ${urlCloseCount} -> ${urlCloseCount === allUrls.length ? 'PASS' : 'FAIL'}`);
  console.log(`  - Root URL included:           ${hasRoot ? 'PASS' : 'FAIL'}`);
  console.log(`  - /geo URL included:           ${hasGeo ? 'PASS' : 'FAIL'}`);
  console.log(`  - /mam-non URL included:       ${hasMamNon ? 'PASS' : 'FAIL'}`);
  console.log(`  - Privacy policy included:     ${hasPrivacy ? 'PASS' : 'FAIL'}`);
  console.log(`  - Terms of service included:   ${hasTerms ? 'PASS' : 'FAIL'}`);
  console.log(`  - Service policy included:     ${hasServicePolicy ? 'PASS' : 'FAIL'}`);
  console.log(`  - 30 Articles included:        ${articles.length === 30 ? 'PASS (30/30)' : `FAIL (${articles.length}/30)`}`);

  // Check Robots.txt AI Crawlers
  const requiredCrawlers = [
    'Googlebot',
    'Google-Extended',
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Applebot',
    'Applebot-Extended'
  ];

  const crawlerAudit = requiredCrawlers.map(c => ({
    crawler: c,
    status: robotsTxt.includes(`User-agent: ${c}`) ? 'PASS' : 'FAIL'
  }));

  console.log(`\n🤖 AI CRAWLERS AUDIT:`);
  crawlerAudit.forEach(a => {
    console.log(`  - ${a.crawler.padEnd(20)}: ${a.status}`);
  });

  console.log(`\n==============================================================================`);
  console.log(`🎉 ALL SITEMAP & ROBOTS.TXT DIRECTIVES GENERATED SUCCESSFULLY!`);
  console.log(`==============================================================================\n`);
}

main().catch(err => {
  console.error('Fatal error in generator script:', err);
  process.exit(1);
});
