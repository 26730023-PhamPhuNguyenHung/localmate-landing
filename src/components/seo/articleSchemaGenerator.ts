/**
 * LocalMate GEO & Structured Data Engine
 * Tự động sinh cấu trúc Schema JSON-LD, OpenGraph & Twitter Cards chuẩn xác
 * Tương thích: Google Search Rich Results, Google AI Overviews, Perplexity AI, ChatGPT Search
 * Tuân thủ nghiêm ngặt: content/rules/geo-rules.md
 */

import { BreadcrumbItem } from './SEOHead';

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface GenerateArticleSchemaInput {
  title: string;
  slug: string;
  description: string;
  canonicalUrl?: string;
  featuredImageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorRole?: string;
  authorUrl?: string;
  categoryName?: string;
  categorySlug?: string;
  tags?: string[];
  rawMarkdownOrHtml?: string;
  predefinedFaqs?: ArticleFaqItem[];
  entities?: string[];
  wordCount?: number;
}

export interface GeneratedSeoBundle {
  canonicalPath: string;
  title: string;
  description: string;
  ogImage: string;
  ogType: 'article';
  breadcrumbs: BreadcrumbItem[];
  articleMeta: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
    tags: string[];
  };
  articleSchema: Record<string, any>;
  faqSchema?: Record<string, any>;
  extraSchemas: Record<string, any>[];
  extractedFaqs: ArticleFaqItem[];
}

/**
 * Trích xuất các cặp câu hỏi & câu trả lời (Q&A) từ nội dung bài viết
 * Hỗ trợ cả Markdown (### Câu hỏi?) và HTML (<h3>Câu hỏi?</h3><p>Trả lời...</p>)
 */
export function extractFaqsFromContent(
  rawContent?: string,
  predefinedFaqs?: ArticleFaqItem[]
): ArticleFaqItem[] {
  // 1. Ưu tiên sử dụng FAQ có cấu trúc sẵn
  if (predefinedFaqs && predefinedFaqs.length > 0) {
    return predefinedFaqs
      .filter(f => f.question && f.question.trim().length > 5 && f.answer && f.answer.trim().length > 10)
      .map(f => ({
        question: cleanText(f.question),
        answer: cleanText(f.answer)
      }));
  }

  if (!rawContent || rawContent.trim().length === 0) {
    return [];
  }

  const results: ArticleFaqItem[] = [];

  // 2. Trích xuất từ Markdown heading (## hoặc ### có dấu chấm hỏi ?)
  // Pattern: ### Tiêu đề câu hỏi?\n\nNội dung câu trả lời...
  const mdHeadingRegex = /(?:^|\n)#{2,4}\s+([^\n\?]+\?)\s*\n+([\s\S]*?)(?=\n#{2,4}\s+|$)/g;
  let mdMatch;
  while ((mdMatch = mdHeadingRegex.exec(rawContent)) !== null) {
    const question = cleanText(mdMatch[1]);
    const answer = cleanMarkdown(mdMatch[2]);
    if (question.length >= 8 && answer.length >= 20 && answer.length <= 1500) {
      results.push({ question, answer });
    }
  }

  // 3. Nếu chưa tìm thấy hoặc nội dung dạng HTML: quét thẻ heading H2/H3 kết thúc bằng ?
  if (results.length === 0) {
    const htmlHeadingRegex = /<h[2-4][^>]*>([\s\S]*?\?)<\/h[2-4]>\s*([\s\S]*?)(?=<h[2-4]|$)/gi;
    let htmlMatch;
    while ((htmlMatch = htmlHeadingRegex.exec(rawContent)) !== null) {
      const question = cleanText(stripHtml(htmlMatch[1]));
      const answer = cleanText(stripHtml(htmlMatch[2]));
      if (question.length >= 8 && answer.length >= 20 && answer.length <= 1500) {
        results.push({ question, answer });
      }
    }
  }

  // Giới hạn tối đa 10 FAQs để cấu trúc Schema gọn gàng, súc tích
  return results.slice(0, 10);
}

/**
 * Xóa định dạng markdown cơ bản để lấy văn bản thuần cho Schema text
 */
function cleanMarkdown(text: string): string {
  if (!text) return '';
  return text
    .replace(/^>\s*/gm, '') // Blockquotes
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Links [text](url) -> text
    .replace(/[*_~`]/g, '') // bold, italic, code
    .replace(/<[^>]*>/g, ' ') // html tags
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Xóa thẻ HTML
 */
function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Chuẩn hóa chuỗi text một dòng
 */
function cleanText(text: string): string {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Sinh gói Structured Data & OpenGraph Metadata hoàn chỉnh cho bài viết
 */
export function buildArticleSeoBundle(input: GenerateArticleSchemaInput): GeneratedSeoBundle {
  const canonicalPath = input.canonicalUrl
    ? (input.canonicalUrl.startsWith('http') ? new URL(input.canonicalUrl).pathname : input.canonicalUrl)
    : `/kien-thuc/${input.slug}`;

  const absoluteCanonicalUrl = `https://localmate.vn${canonicalPath}`;
  
  // Xử lý ảnh đại diện chuẩn Google Rich Results (URL tuyệt đối)
  const fullFeaturedImage = input.featuredImageUrl
    ? (input.featuredImageUrl.startsWith('http') ? input.featuredImageUrl : `https://localmate.vn${input.featuredImageUrl}`)
    : 'https://localmate.vn/assets/hero.webp';

  const authorName = input.authorName || 'Ban biên tập LocalMate';
  const authorUrl = input.authorUrl || 'https://localmate.vn/#organization';
  const categoryName = input.categoryName || 'Kiến thức';
  const categorySlug = input.categorySlug || 'kien-thuc';
  const tags = input.tags || ['Doanh nghiệp nhỏ', 'Website', 'Local SEO'];

  // Breadcrumb chuẩn 3 cấp
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Trang chủ', url: '/' },
    { name: categoryName, url: `/kien-thuc?chuyen-muc=${categorySlug}` },
    { name: input.title, url: canonicalPath }
  ];

  const publishedDateIso = new Date(input.datePublished).toISOString();
  const modifiedDateIso = input.dateModified
    ? new Date(input.dateModified).toISOString()
    : publishedDateIso;

  // 1. Article / BlogPosting Schema (Chuẩn Google Search Central & GEO)
  const articleSchema: Record<string, any> = {
    '@type': 'Article',
    '@id': `${absoluteCanonicalUrl}#article`,
    isPartOf: {
      '@type': 'WebPage',
      '@id': absoluteCanonicalUrl
    },
    headline: input.title.length > 110 ? `${input.title.substring(0, 107)}...` : input.title,
    description: input.description,
    image: [
      fullFeaturedImage
    ],
    datePublished: publishedDateIso,
    dateModified: modifiedDateIso,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteCanonicalUrl
    },
    inLanguage: 'vi-VN',
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: input.authorRole || 'Chuyên gia Chuyển đổi số & Local SEO',
      url: authorUrl,
      worksFor: {
        '@type': 'ProfessionalService',
        '@id': 'https://localmate.vn/#organization',
        name: 'LocalMate',
        url: 'https://localmate.vn'
      }
    },
    publisher: {
      '@type': 'ProfessionalService',
      '@id': 'https://localmate.vn/#organization',
      name: 'LocalMate',
      url: 'https://localmate.vn',
      logo: {
        '@type': 'ImageObject',
        url: 'https://localmate.vn/logo.png',
        width: 192,
        height: 192
      }
    },
    articleSection: categoryName,
    keywords: tags.join(', '),
    // Hỗ trợ GEO: Speakable Specification cho Google Assistant & AI Voice Retrieval
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'blockquote', '.tldr-box', 'article p:first-of-type']
    }
  };

  if (input.wordCount && input.wordCount > 0) {
    articleSchema.wordCount = input.wordCount;
  }

  // Thêm thực thể ngữ nghĩa (about / mentions) hỗ trợ Perplexity AI & ChatGPT Search Entity Linking
  if (input.entities && input.entities.length > 0) {
    articleSchema.about = input.entities.map(entity => ({
      '@type': 'Thing',
      name: entity
    }));
  }

  // 2. Trích xuất FAQ và tạo FAQPage Schema
  const extractedFaqs = extractFaqsFromContent(input.rawMarkdownOrHtml, input.predefinedFaqs);
  let faqSchema: Record<string, any> | undefined = undefined;

  const extraSchemas: Record<string, any>[] = [];

  if (extractedFaqs.length > 0) {
    faqSchema = {
      '@type': 'FAQPage',
      '@id': `${absoluteCanonicalUrl}#faq`,
      mainEntity: extractedFaqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
    extraSchemas.push(faqSchema);
  }

  return {
    canonicalPath,
    title: input.title,
    description: input.description,
    ogImage: fullFeaturedImage,
    ogType: 'article',
    breadcrumbs,
    articleMeta: {
      publishedTime: publishedDateIso,
      modifiedTime: modifiedDateIso,
      author: authorName,
      section: categoryName,
      tags
    },
    articleSchema,
    faqSchema,
    extraSchemas,
    extractedFaqs
  };
}
