import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Slugify helper for Headings and Anchor IDs
function slugifyHeading(text, existingIds = new Set()) {
  // Strip any inner HTML tags (e.g. <span>, <strong>, <code>)
  const cleanText = text.replace(/<[^>]*>/g, '').trim();
  
  let slug = cleanText
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  if (!slug) {
    slug = 'muc-luc';
  }

  let uniqueSlug = slug;
  let counter = 1;
  while (existingIds.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  existingIds.add(uniqueSlug);
  return { id: uniqueSlug, text: cleanText };
}

// 2. Category mapping table
const CATEGORY_NAMES = {
  'website': 'Website',
  'google-maps': 'Google Maps',
  'local-seo': 'Local SEO',
  'google-ads': 'Google Ads',
  'crm-automation': 'Vận hành & CRM',
  'content': 'Content Marketing',
  'kinh-doanh-dia-phuong': 'Kinh doanh địa phương'
};

const CATEGORY_DESCRIPTIONS = {
  'website': 'Xây dựng website chính chủ, tối ưu chuyển đổi và thương hiệu số',
  'google-maps': 'Khởi tạo, xác minh, tối ưu và xử lý sự cố hồ sơ Google Maps (Google Business Profile)',
  'local-seo': 'Chiến lược tối ưu hóa tìm kiếm địa phương để đón đầu khách hàng gần bạn',
  'google-ads': 'Quảng cáo tìm kiếm Google Ads chuẩn xác, tối ưu chi phí và bùng nổ cuộc gọi',
  'crm-automation': 'Hệ thống quản lý khách hàng và tự động hóa quy trình chăm sóc đơn giản',
  'content': 'Sáng tạo nội dung chạm đúng nỗi đau và giữ chân khách hàng địa phương',
  'kinh-doanh-dia-phuong': 'Chiến lược phát triển thực chiến cho cơ sở kinh doanh, cửa hàng và xưởng dịch vụ'
};

async function buildArticlesData() {
  console.log('🚀 [Data Engine] Bắt đầu xử lý và đóng gói 30 bài viết Code-First...');

  const draftsSeedPath = path.join(rootDir, 'content', 'seeds', 'drafts_30_articles.json');
  if (!fs.existsSync(draftsSeedPath)) {
    throw new Error(`Không tìm thấy file nguồn: ${draftsSeedPath}`);
  }

  const drafts = JSON.parse(fs.readFileSync(draftsSeedPath, 'utf8'));
  console.log(`📦 Đã nạp ${drafts.length} bài viết từ drafts_30_articles.json.`);

  const articlesDir = path.join(rootDir, 'content', 'articles');
  const targetDir = path.join(rootDir, 'src', 'data', 'articles');
  const targetContentDir = path.join(targetDir, 'content');

  // Ensure directories exist
  fs.mkdirSync(targetDir, { recursive: true });
  fs.mkdirSync(targetContentDir, { recursive: true });

  const metadataList = [];
  const internalSeoMap = {};
  const loadersExportLines = [];

  for (let i = 0; i < drafts.length; i++) {
    const draft = drafts[i];
    const slug = draft.slug;

    // Read extra data from content/articles/<slug>/article.json if available
    const articleJsonPath = path.join(articlesDir, slug, 'article.json');
    let articleJson = {};
    if (fs.existsSync(articleJsonPath)) {
      try {
        articleJson = JSON.parse(fs.readFileSync(articleJsonPath, 'utf8'));
      } catch (e) {
        console.warn(`⚠️ Cảnh báo: Lỗi đọc article.json cho slug ${slug}:`, e.message);
      }
    }

    // Parse brief
    let briefJson = {};
    if (draft.brief_json) {
      try {
        briefJson = typeof draft.brief_json === 'string' ? JSON.parse(draft.brief_json) : draft.brief_json;
      } catch (e) {
        // ignore
      }
    }

    // 1. Process HTML and Headings to build TOC
    let rawHtml = draft.rendered_html || '';
    const headingIds = new Set();
    const toc = [];

    // Replace <h2...> and <h3...> to inject id
    const processedHtml = rawHtml.replace(/<(h[2-3])(\s+[^>]*)?>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, innerContent) => {
      const level = parseInt(tag.substring(1), 10);
      const { id, text } = slugifyHeading(innerContent, headingIds);
      
      toc.push({
        id,
        text,
        level
      });

      // Preserve existing attributes (like class), but override or inject id
      let cleanAttrs = (attrs || '').replace(/\s*id=["'][^"']*["']/i, '');
      return `<${tag} id="${id}"${cleanAttrs}>${innerContent}</${tag}>`;
    });

    // 2. Process FAQs
    const faqs = (articleJson.faqs && Array.isArray(articleJson.faqs) && articleJson.faqs.length > 0)
      ? articleJson.faqs
      : [];

    // 3. Process Author & Images
    const author = articleJson.author || 'Đội ngũ Chuyên gia LocalMate';
    const featuredImageUrl = draft.featured_image_url || articleJson.featured_image || '/assets/hero.webp';
    const featuredImageAlt = articleJson.featured_image_alt || draft.title;
    const coverImage = featuredImageUrl;

    // 4. Category
    const categorySlug = draft.category_slug || articleJson.category_slug || 'website';
    const categoryName = CATEGORY_NAMES[categorySlug] || articleJson.category || categorySlug;

    // 5. CÔNG THỨC READING TIME CHÍNH XÁC:
    // Vietnamese target: ~220 - 250 từ/phút (chuẩn 230 từ/phút)
    const plainText = rawHtml.replace(/<[^>]+>/g, ' ');
    const computedWordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
    const wordCount = computedWordCount > 0 ? computedWordCount : (draft.word_count || 1500);
    const readingMinutes = Math.max(1, Math.ceil(wordCount / 230));
    const readingTime = `${readingMinutes} phút đọc`;

    // 6. Public SEO (Clean & Safe - Không chứa focusKeyword hay Search Intent)
    const publicSeo = {
      title: draft.seo_title || articleJson.seo?.seo_title || draft.title,
      description: draft.seo_description || articleJson.seo?.seo_description || draft.excerpt,
      canonicalUrl: draft.canonical_url || `https://localmate.vn/blog/${slug}`,
      ogTitle: draft.og_title || draft.seo_title || draft.title,
      ogDescription: draft.og_description || draft.seo_description || draft.excerpt
    };

    // 7. Internal SEO & Strategy Data (Bảo mật - tách riêng phục vụ audit/nội bộ)
    const focusKeyword = draft.focus_keyword || articleJson.seo?.focus_keyword || '';
    const brief = {
      primaryKeyword: briefJson.primary_keyword || focusKeyword,
      secondaryKeywords: briefJson.secondary_keywords || [],
      searchIntent: briefJson.search_intent || '',
      targetCustomer: briefJson.target_customer || '',
      contentGoal: briefJson.content_goal || '',
      outline: briefJson.outline || []
    };

    internalSeoMap[slug] = {
      slug,
      focusKeyword,
      searchIntent: brief.searchIntent,
      targetCustomer: brief.targetCustomer,
      contentGoal: brief.contentGoal,
      outline: brief.outline,
      brief
    };

    // 8. Structured Data (Schema.org JSON-LD)
    const schemaOrg = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `https://localmate.vn/blog/${slug}#article`,
          'isPartOf': {
            '@type': 'WebSite',
            '@id': 'https://localmate.vn/#website',
            'name': 'LocalMate',
            'url': 'https://localmate.vn'
          },
          'headline': draft.title,
          'description': publicSeo.description,
          'inLanguage': 'vi',
          'mainEntityOfPage': `https://localmate.vn/blog/${slug}`,
          'datePublished': draft.published_at || '2026-03-01T00:00:00.000Z',
          'dateModified': draft.updated_at || draft.published_at || '2026-03-01T00:00:00.000Z',
          'author': {
            '@type': 'Organization',
            'name': author,
            'url': 'https://localmate.vn'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'LocalMate',
            'url': 'https://localmate.vn',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://localmate.vn/logo.png'
            }
          },
          'image': {
            '@type': 'ImageObject',
            'url': coverImage.startsWith('http') ? coverImage : `https://localmate.vn${coverImage}`
          }
        },
        ...(faqs.length > 0 ? [{
          '@type': 'FAQPage',
          '@id': `https://localmate.vn/blog/${slug}#faq`,
          'mainEntity': faqs.map(f => ({
            '@type': 'Question',
            'name': f.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': f.answer
            }
          }))
        }] : [])
      ]
    };

    // 9. Public Lightweight Metadata object (An toàn cho Public UI)
    const metadata = {
      id: draft.id || (i + 1),
      uuid: draft.uuid,
      slug,
      title: draft.title,
      category: categoryName,
      categorySlug,
      excerpt: draft.excerpt || '',
      readingTime,
      wordCount,
      author,
      publishedAt: draft.published_at || '2026-03-01T00:00:00.000Z',
      updatedAt: draft.updated_at || draft.published_at || '2026-03-01T00:00:00.000Z',
      coverImage,
      featuredImageUrl,
      featuredImageAlt,
      faqCount: faqs.length,
      headingsCount: toc.length,
      seo: publicSeo
    };

    metadataList.push(metadata);

    // 10. Public Content Body (CHỈ chứa dữ liệu công khai, không để rò rỉ brief hay internal keyword)
    const contentBody = {
      slug,
      html: processedHtml,
      content: processedHtml,
      toc,
      faqs,
      schemaOrg
    };

    // Write individual content file
    const contentFilePath = path.join(targetContentDir, `${slug}.ts`);
    const contentTsCode = `// Auto-generated by scripts/build-articles-data.js - DO NOT EDIT MANUALLY
import type { ArticleContent } from '../types';

const content: ArticleContent = ${JSON.stringify(contentBody, null, 2)};

export default content;
`;
    fs.writeFileSync(contentFilePath, contentTsCode, 'utf8');

    // Register loader line for dynamic code splitting
    loadersExportLines.push(`  '${slug}': () => import('./articles/content/${slug}'),`);
  }

  // 11. Write types.ts
  const typesContent = `// Auto-generated by scripts/build-articles-data.js - DO NOT EDIT MANUALLY

export interface ArticleTOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

/**
 * Public SEO Metadata: Thân thiện với người dùng và Search Engine.
 * Tuyệt đối không chứa focusKeyword hay Search Intent nội bộ.
 */
export interface PublicArticleSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
}

// Backward compatibility alias
export type ArticleSeo = PublicArticleSeo;

/**
 * Public Article Metadata: Nhẹ (~12KB cho 30 bài), dùng cho trang danh sách, thẻ bài viết, tìm kiếm.
 */
export interface PublicArticleMetadata {
  id: number;
  uuid?: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  readingTime: string;
  wordCount: number;
  author: string;
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
  featuredImageUrl: string;
  featuredImageAlt: string;
  faqCount: number;
  headingsCount: number;
  seo: PublicArticleSeo;
}

// Backward compatibility alias
export type ArticleMetadata = PublicArticleMetadata;

/**
 * Public Content Body của từng bài viết (được chia nhỏ code-splitting theo từng chunk).
 */
export interface ArticleContent {
  slug: string;
  html: string;
  content: string;
  toc: ArticleTOCItem[];
  faqs: ArticleFAQ[];
  schemaOrg: Record<string, any>;
}

/**
 * Public Article Detail: Đầy đủ dữ liệu hiển thị trên trang chi tiết công khai.
 */
export interface PublicArticleDetail extends PublicArticleMetadata, ArticleContent {
  relatedPosts?: PublicArticleMetadata[];
}

// Backward compatibility alias
export type ArticleDetail = PublicArticleDetail;

/**
 * Internal SEO & Chiến lược nội dung (BẢO MẬT - TUYỆT ĐỐI KHÔNG xuất hiện trên Public UI).
 */
export interface ArticleBrief {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetCustomer: string;
  contentGoal: string;
  outline: string[];
}

export interface ArticleInternalData {
  slug: string;
  focusKeyword: string;
  searchIntent: string;
  targetCustomer: string;
  contentGoal: string;
  outline: string[];
  brief: ArticleBrief;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  count: number;
}
`;
  fs.writeFileSync(path.join(targetDir, 'types.ts'), typesContent, 'utf8');

  // 12. Write metadata.ts
  const metadataTsContent = `// Auto-generated by scripts/build-articles-data.js - Lightweight Metadata Index (0ms load)
import type { ArticleMetadata, CategoryInfo } from './types';

export const CATEGORIES_INFO: CategoryInfo[] = ${JSON.stringify(
    Object.keys(CATEGORY_NAMES).map(cSlug => {
      const count = metadataList.filter(m => m.categorySlug === cSlug).length;
      return {
        slug: cSlug,
        name: CATEGORY_NAMES[cSlug],
        description: CATEGORY_DESCRIPTIONS[cSlug] || '',
        count
      };
    }),
    null,
    2
  )};

export const ARTICLES_METADATA: ArticleMetadata[] = ${JSON.stringify(metadataList, null, 2)};
`;
  fs.writeFileSync(path.join(targetDir, 'metadata.ts'), metadataTsContent, 'utf8');

  // 13. Write internalSeo.ts (Lưu trữ độc lập, tách biệt khỏi client bundle)
  const internalSeoTsContent = `// Auto-generated by scripts/build-articles-data.js - Confidential Internal SEO & Content Strategy
// DO NOT import this file into client-facing public UI components!
import type { ArticleInternalData } from './types';

export const ARTICLES_INTERNAL_SEO: Record<string, ArticleInternalData> = ${JSON.stringify(internalSeoMap, null, 2)};

export function getInternalSeoBySlug(slug: string): ArticleInternalData | undefined {
  return ARTICLES_INTERNAL_SEO[slug];
}
`;
  fs.writeFileSync(path.join(targetDir, 'internalSeo.ts'), internalSeoTsContent, 'utf8');

  // 14. Write main facade module src/data/articlesData.ts
  const facadeContent = `// LocalMate High-Performance Code-First Articles Data Engine
// Zero-API, 0ms Instant Rendering, Full Code-Splitting per Article
import type {
  PublicArticleMetadata,
  ArticleMetadata,
  ArticleContent,
  PublicArticleDetail,
  ArticleDetail,
  ArticleTOCItem,
  ArticleFAQ,
  ArticleBrief,
  ArticleInternalData,
  PublicArticleSeo,
  ArticleSeo,
  CategoryInfo
} from './articles/types';
import { ARTICLES_METADATA, CATEGORIES_INFO } from './articles/metadata';

// Re-export all types
export type {
  PublicArticleMetadata,
  ArticleMetadata,
  ArticleContent,
  PublicArticleDetail,
  ArticleDetail,
  ArticleTOCItem,
  ArticleFAQ,
  ArticleBrief,
  ArticleInternalData,
  PublicArticleSeo,
  ArticleSeo,
  CategoryInfo
};

// Re-export static constants
export { ARTICLES_METADATA, CATEGORIES_INFO };

// Code-splitting dynamic loaders map for per-article HTML/TOC/FAQ chunks
const articleContentLoaders: Record<string, () => Promise<{ default: ArticleContent }>> = {
${loadersExportLines.join('\n')}
};

// In-Memory RAM Cache to guarantee true 0ms repeat accesses
const articleMemoryCache = new Map<string, PublicArticleDetail>();

/**
 * 🛡️ Mapper Helper: Chuyển đổi bất kỳ dữ liệu bài viết thô thành PublicArticleDetail chuẩn.
 * Loại bỏ 100% dữ liệu SEO nội bộ (focusKeyword, searchIntent, targetCustomer, brief...)
 * Đảm bảo chỉ chứa và hiển thị các thuộc tính thân thiện với người dùng.
 */
export function toPublicArticle(
  raw: any,
  relatedPosts?: PublicArticleMetadata[]
): PublicArticleDetail {
  if (!raw) return raw;
  const coverImage = raw.coverImage || raw.featuredImageUrl || '/assets/hero.webp';
  const htmlContent = raw.html || raw.content || '';

  return {
    id: raw.id,
    uuid: raw.uuid,
    slug: raw.slug,
    title: raw.title,
    category: raw.category,
    categorySlug: raw.categorySlug,
    excerpt: raw.excerpt || '',
    readingTime: raw.readingTime,
    wordCount: raw.wordCount || 0,
    author: raw.author || 'Đội ngũ Chuyên gia LocalMate',
    publishedAt: raw.publishedAt,
    updatedAt: raw.updatedAt,
    coverImage,
    featuredImageUrl: coverImage,
    featuredImageAlt: raw.featuredImageAlt || raw.title,
    faqCount: raw.faqCount ?? (raw.faqs ? raw.faqs.length : 0),
    headingsCount: raw.headingsCount ?? (raw.toc ? raw.toc.length : 0),
    html: htmlContent,
    content: htmlContent,
    toc: raw.toc || [],
    faqs: raw.faqs || [],
    relatedPosts: relatedPosts || [],
    schemaOrg: raw.schemaOrg || {},
    seo: {
      title: raw.seo?.title || raw.title,
      description: raw.seo?.description || raw.excerpt || '',
      canonicalUrl: raw.seo?.canonicalUrl || \`https://localmate.vn/blog/\${raw.slug}\`,
      ogTitle: raw.seo?.ogTitle || raw.seo?.title || raw.title,
      ogDescription: raw.seo?.ogDescription || raw.seo?.description || raw.excerpt || ''
    }
  };
}

/**
 * 🛡️ Mapper Helper: Chuẩn hóa metadata thành PublicArticleMetadata an toàn
 */
export function toPublicMetadata(raw: any): PublicArticleMetadata {
  if (!raw) return raw;
  const coverImage = raw.coverImage || raw.featuredImageUrl || '/assets/hero.webp';
  return {
    id: raw.id,
    uuid: raw.uuid,
    slug: raw.slug,
    title: raw.title,
    category: raw.category,
    categorySlug: raw.categorySlug,
    excerpt: raw.excerpt || '',
    readingTime: raw.readingTime,
    wordCount: raw.wordCount || 0,
    author: raw.author || 'Đội ngũ Chuyên gia LocalMate',
    publishedAt: raw.publishedAt,
    updatedAt: raw.updatedAt,
    coverImage,
    featuredImageUrl: coverImage,
    featuredImageAlt: raw.featuredImageAlt || raw.title,
    faqCount: raw.faqCount ?? 0,
    headingsCount: raw.headingsCount ?? 0,
    seo: {
      title: raw.seo?.title || raw.title,
      description: raw.seo?.description || raw.excerpt || '',
      canonicalUrl: raw.seo?.canonicalUrl || \`https://localmate.vn/blog/\${raw.slug}\`,
      ogTitle: raw.seo?.ogTitle || raw.seo?.title || raw.title,
      ogDescription: raw.seo?.ogDescription || raw.seo?.description || raw.excerpt || ''
    }
  };
}

/**
 * ⚡ Synchronous: Get all articles metadata (only ~12KB bundle impact)
 */
export function getAllArticles(): PublicArticleMetadata[] {
  return ARTICLES_METADATA;
}

/**
 * ⚡ Synchronous: Get lightweight metadata for a single article by slug
 */
export function getArticleMetadataBySlug(slug: string): PublicArticleMetadata | undefined {
  return ARTICLES_METADATA.find(item => item.slug === slug);
}

/**
 * ⚡ Synchronous: Get articles by category slug
 */
export function getArticlesByCategory(categorySlug: string): PublicArticleMetadata[] {
  return ARTICLES_METADATA.filter(item => item.categorySlug === categorySlug);
}

/**
 * ⚡ Synchronous: Get related articles in the same category (excluding current)
 */
export function getRelatedArticles(currentSlug: string, limit = 3): PublicArticleMetadata[] {
  const current = getArticleMetadataBySlug(currentSlug);
  if (!current) {
    return ARTICLES_METADATA.slice(0, limit);
  }
  const inCategory = ARTICLES_METADATA.filter(
    item => item.categorySlug === current.categorySlug && item.slug !== currentSlug
  );
  if (inCategory.length >= limit) {
    return inCategory.slice(0, limit);
  }
  const others = ARTICLES_METADATA.filter(
    item => item.categorySlug !== current.categorySlug && item.slug !== currentSlug
  );
  return [...inCategory, ...others].slice(0, limit);
}

/**
 * ⚡ Synchronous: Get list of all categories with active article counts
 */
export function getAllCategories(): CategoryInfo[] {
  return CATEGORIES_INFO;
}

/**
 * ⚡ Synchronous: Client-side fulltext search across title, excerpt, category
 * An toàn 100%: Không tra cứu hay làm rò rỉ focusKeyword nội bộ
 */
export function searchArticles(query: string): PublicArticleMetadata[] {
  if (!query || !query.trim()) return ARTICLES_METADATA;
  const q = query.toLowerCase().trim();
  return ARTICLES_METADATA.filter(item => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });
}

/**
 * 🚀 Asynchronous (Code-Splitted): Load full article content (HTML, TOC, FAQs, Schema)
 * Vite automatically loads only the specific ~15KB JS chunk for this slug!
 * Luôn trả về PublicArticleDetail an toàn đã qua mapper toPublicArticle.
 * Subsequent calls resolve in 0ms from RAM cache.
 */
export async function getArticleBySlug(slug: string): Promise<PublicArticleDetail | null> {
  // Check RAM Cache first
  if (articleMemoryCache.has(slug)) {
    return articleMemoryCache.get(slug)!;
  }

  const meta = getArticleMetadataBySlug(slug);
  if (!meta) return null;

  const loader = articleContentLoaders[slug];
  if (!loader) return null;

  try {
    const mod = await loader();
    const content = mod.default;
    const relatedPosts = getRelatedArticles(slug, 3);
    const detail = toPublicArticle({ ...meta, ...content }, relatedPosts);
    
    // Cache in RAM
    articleMemoryCache.set(slug, detail);
    return detail;
  } catch (err) {
    console.error(\`[Data Engine] Failed to load content chunk for slug "\${slug}":\`, err);
    return null;
  }
}

/**
 * 🚀 Preload article content into RAM cache in background (e.g. on hover)
 */
export function preloadArticle(slug: string): void {
  if (articleMemoryCache.has(slug) || !articleContentLoaders[slug]) return;
  getArticleBySlug(slug).catch(() => {});
}

/**
 * ⚡ Synchronous Cache Reader: If already loaded, returns immediately, otherwise undefined
 */
export function getCachedArticleSync(slug: string): PublicArticleDetail | undefined {
  return articleMemoryCache.get(slug);
}
`;
  fs.writeFileSync(path.join(rootDir, 'src', 'data', 'articlesData.ts'), facadeContent, 'utf8');

  console.log(`✅ [Data Engine] Hoàn tất xuất sắc!`);
  console.log(`   - 30 metadata items -> src/data/articles/metadata.ts (~${(Buffer.byteLength(metadataTsContent) / 1024).toFixed(1)} KB)`);
  console.log(`   - 30 content chunks -> src/data/articles/content/*.ts`);
  console.log(`   - Confidential Internal SEO -> src/data/articles/internalSeo.ts (~${(Buffer.byteLength(internalSeoTsContent) / 1024).toFixed(1)} KB)`);
  console.log(`   - TypeScript Interfaces -> src/data/articles/types.ts`);
  console.log(`   - Master Data Engine Module -> src/data/articlesData.ts`);
}

buildArticlesData().catch(err => {
  console.error('❌ Lỗi:', err);
  process.exit(1);
});
