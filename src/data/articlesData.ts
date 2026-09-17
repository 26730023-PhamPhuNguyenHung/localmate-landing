// LocalMate High-Performance Code-First Articles Data Engine
// Zero-API, 0ms Instant Rendering, Full Code-Splitting per Article
import type {
  ArticleMetadata,
  ArticleContent,
  ArticleDetail,
  ArticleTOCItem,
  ArticleFAQ,
  ArticleBrief,
  ArticleSeo,
  CategoryInfo
} from './articles/types';
import { ARTICLES_METADATA, CATEGORIES_INFO } from './articles/metadata';

// Re-export all types
export type {
  ArticleMetadata,
  ArticleContent,
  ArticleDetail,
  ArticleTOCItem,
  ArticleFAQ,
  ArticleBrief,
  ArticleSeo,
  CategoryInfo
};

// Re-export static constants
export { ARTICLES_METADATA, CATEGORIES_INFO };

// Code-splitting dynamic loaders map for per-article HTML/TOC/FAQ chunks
const articleContentLoaders: Record<string, () => Promise<{ default: ArticleContent }>> = {
  'website-doanh-nghiep-la-gi': () => import('./articles/content/website-doanh-nghiep-la-gi'),
  'lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi': () => import('./articles/content/lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi'),
  'chi-phi-lam-website-doanh-nghiep-nho-2026': () => import('./articles/content/chi-phi-lam-website-doanh-nghiep-nho-2026'),
  'website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao': () => import('./articles/content/website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao'),
  'website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao': () => import('./articles/content/website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao'),
  '10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach': () => import('./articles/content/10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach'),
  'google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z': () => import('./articles/content/google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z'),
  'cach-dua-doanh-nghiep-len-google-maps': () => import('./articles/content/cach-dua-doanh-nghiep-len-google-maps'),
  'cach-toi-uu-google-business-profile-de-khach-de-tim-thay': () => import('./articles/content/cach-toi-uu-google-business-profile-de-khach-de-tim-thay'),
  'vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps': () => import('./articles/content/vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps'),
  'cach-tang-danh-gia-google-maps-dung-cach': () => import('./articles/content/cach-tang-danh-gia-google-maps-dung-cach'),
  'google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly': () => import('./articles/content/google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly'),
  'local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam': () => import('./articles/content/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam'),
  'seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao': () => import('./articles/content/seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao'),
  'cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong': () => import('./articles/content/cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong'),
  'entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho': () => import('./articles/content/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho'),
  'citation-trong-local-seo-la-gi': () => import('./articles/content/citation-trong-local-seo-la-gi'),
  'checklist-local-seo-cho-doanh-nghiep-dia-phuong': () => import('./articles/content/checklist-local-seo-cho-doanh-nghiep-dia-phuong'),
  'google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau': () => import('./articles/content/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau'),
  'google-search-ads-hoat-dong-nhu-the-nao': () => import('./articles/content/google-search-ads-hoat-dong-nhu-the-nao'),
  'chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly': () => import('./articles/content/chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly'),
  'vi-sao-chay-google-ads-co-click-nhung-khong-co-khach': () => import('./articles/content/vi-sao-chay-google-ads-co-click-nhung-khong-co-khach'),
  'landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao': () => import('./articles/content/landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao'),
  'google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong': () => import('./articles/content/google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong'),
  'crm-la-gi-doanh-nghiep-nho-co-can-crm-khong': () => import('./articles/content/crm-la-gi-doanh-nghiep-nho-co-can-crm-khong'),
  'crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao': () => import('./articles/content/crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao'),
  'automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa': () => import('./articles/content/automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa'),
  'cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong': () => import('./articles/content/cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong'),
  'content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau': () => import('./articles/content/content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau'),
  'chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian': () => import('./articles/content/chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian'),
};

// In-Memory RAM Cache to guarantee true 0ms repeat accesses
const articleMemoryCache = new Map<string, ArticleDetail>();

/**
 * ⚡ Synchronous: Get all articles metadata (only ~12KB bundle impact)
 */
export function getAllArticles(): ArticleMetadata[] {
  return ARTICLES_METADATA;
}

/**
 * ⚡ Synchronous: Get lightweight metadata for a single article by slug
 */
export function getArticleMetadataBySlug(slug: string): ArticleMetadata | undefined {
  return ARTICLES_METADATA.find(item => item.slug === slug);
}

/**
 * ⚡ Synchronous: Get articles by category slug
 */
export function getArticlesByCategory(categorySlug: string): ArticleMetadata[] {
  return ARTICLES_METADATA.filter(item => item.categorySlug === categorySlug);
}

/**
 * ⚡ Synchronous: Get related articles in the same category (excluding current)
 */
export function getRelatedArticles(currentSlug: string, limit = 3): ArticleMetadata[] {
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
 * ⚡ Synchronous: Client-side fulltext search across title, excerpt, focusKeyword
 */
export function searchArticles(query: string): ArticleMetadata[] {
  if (!query || !query.trim()) return ARTICLES_METADATA;
  const q = query.toLowerCase().trim();
  return ARTICLES_METADATA.filter(item => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.seo.focusKeyword.toLowerCase().includes(q)
    );
  });
}

/**
 * 🚀 Asynchronous (Code-Splitted): Load full article content (HTML, TOC, FAQs, Brief, Schema)
 * Vite automatically loads only the specific ~15KB JS chunk for this slug!
 * Subsequent calls resolve in 0ms from RAM cache.
 */
export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
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
    const detail: ArticleDetail = {
      ...meta,
      ...content
    };
    // Cache in RAM
    articleMemoryCache.set(slug, detail);
    return detail;
  } catch (err) {
    console.error(`[Data Engine] Failed to load content chunk for slug "${slug}":`, err);
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
export function getCachedArticleSync(slug: string): ArticleDetail | undefined {
  return articleMemoryCache.get(slug);
}
