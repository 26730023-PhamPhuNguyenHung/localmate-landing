// LocalMate SEO Engine - Deterministic Lightweight Rule-Based Scoring
// Tính điểm SEO minh bạch từ 0-100, nhóm Critical / Warning / Good, không dùng AI API hay dữ liệu ảo.

import { SeoScoreReport, SeoRuleCheck } from '../types';

export interface SeoEvaluationInput {
  title: string;
  slug: string;
  excerpt: string;
  renderedHtml: string;
  focusKeyword: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  featuredImageId?: number | null;
  featuredImageUrl?: string | null;
  featuredImageAlt?: string | null;
}

export function evaluatePostSeo(input: SeoEvaluationInput): SeoScoreReport {
  const checks: SeoRuleCheck[] = [];
  const keyword = input.focusKeyword.trim().toLowerCase();
  const effectiveTitle = (input.seoTitle || input.title || '').trim();
  const effectiveDesc = (input.seoDescription || input.excerpt || '').trim();
  const rawText = input.renderedHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = rawText ? rawText.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;

  // 1. Tiêu đề SEO (SEO Title)
  if (!effectiveTitle) {
    checks.push({
      id: 'title_missing',
      name: 'Tiêu đề SEO',
      status: 'critical',
      message: 'Chưa có tiêu đề bài viết',
      detail: 'Tiêu đề là yếu tố quan trọng nhất để Google hiểu nội dung.',
      score: 0,
      maxScore: 15
    });
  } else if (effectiveTitle.length < 35) {
    checks.push({
      id: 'title_too_short',
      name: 'Tiêu đề SEO',
      status: 'warning',
      message: `Tiêu đề hơi ngắn (${effectiveTitle.length} ký tự)`,
      detail: 'Độ dài lý tưởng là 40 - 65 ký tự để hiển thị trọn vẹn trên Google Search.',
      score: 8,
      maxScore: 15
    });
  } else if (effectiveTitle.length > 70) {
    checks.push({
      id: 'title_too_long',
      name: 'Tiêu đề SEO',
      status: 'warning',
      message: `Tiêu đề quá dài (${effectiveTitle.length} ký tự)`,
      detail: 'Có thể bị Google cắt bớt bằng dấu ba chấm (...). Nên rút gọn dưới 65 ký tự.',
      score: 10,
      maxScore: 15
    });
  } else {
    checks.push({
      id: 'title_good',
      name: 'Tiêu đề SEO',
      status: 'good',
      message: `Độ dài tiêu đề tối ưu (${effectiveTitle.length} ký tự)`,
      detail: 'Hiển thị hoàn hảo trên cả máy tính và điện thoại.',
      score: 15,
      maxScore: 15
    });
  }

  // 2. Thẻ mô tả SEO (Meta Description)
  if (!effectiveDesc) {
    checks.push({
      id: 'desc_missing',
      name: 'Thẻ mô tả (Meta Description)',
      status: 'critical',
      message: 'Chưa có thẻ mô tả SEO',
      detail: 'Thiếu thẻ mô tả sẽ khiến Google tự lấy đoạn ngẫu nhiên làm giảm tỷ lệ click (CTR).',
      score: 0,
      maxScore: 15
    });
  } else if (effectiveDesc.length < 90) {
    checks.push({
      id: 'desc_too_short',
      name: 'Thẻ mô tả (Meta Description)',
      status: 'warning',
      message: `Mô tả hơi ngắn (${effectiveDesc.length} ký tự)`,
      detail: 'Độ dài lý tưởng là 120 - 160 ký tự để tóm tắt giá trị bài viết cho người đọc.',
      score: 8,
      maxScore: 15
    });
  } else if (effectiveDesc.length > 175) {
    checks.push({
      id: 'desc_too_long',
      name: 'Thẻ mô tả (Meta Description)',
      status: 'warning',
      message: `Mô tả hơi dài (${effectiveDesc.length} ký tự)`,
      detail: 'Nên giữ trong khoảng 120 - 160 ký tự để không bị cắt bớt.',
      score: 10,
      maxScore: 15
    });
  } else {
    checks.push({
      id: 'desc_good',
      name: 'Thẻ mô tả (Meta Description)',
      status: 'good',
      message: `Độ dài mô tả chuẩn SEO (${effectiveDesc.length} ký tự)`,
      detail: 'Đầy đủ ý nghĩa và kích thích người tìm kiếm nhấp chuột.',
      score: 15,
      maxScore: 15
    });
  }

  // 3. Từ khóa chính (Focus Keyword)
  if (!keyword) {
    checks.push({
      id: 'keyword_missing',
      name: 'Từ khóa chính',
      status: 'warning',
      message: 'Chưa xác định từ khóa chính',
      detail: 'Nhập từ khóa trọng tâm để hệ thống hỗ trợ kiểm tra tính liên quan.',
      score: 5,
      maxScore: 15
    });
  } else {
    const inTitle = effectiveTitle.toLowerCase().includes(keyword);
    const inDesc = effectiveDesc.toLowerCase().includes(keyword);
    const inContentCount = (rawText.toLowerCase().match(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;

    if (inTitle && inDesc && inContentCount >= 1) {
      checks.push({
        id: 'keyword_optimal',
        name: 'Từ khóa chính',
        status: 'good',
        message: `Từ khóa "${keyword}" xuất hiện tự nhiên`,
        detail: `Có mặt trong Tiêu đề, Mô tả và lặp lại ${inContentCount} lần trong nội dung.`,
        score: 15,
        maxScore: 15
      });
    } else if (inTitle || inDesc) {
      checks.push({
        id: 'keyword_partial',
        name: 'Từ khóa chính',
        status: 'warning',
        message: `Từ khóa "${keyword}" xuất hiện một phần`,
        detail: `Cần đảm bảo từ khóa xuất hiện tự nhiên trong tiêu đề, mô tả và nội dung bài viết.`,
        score: 10,
        maxScore: 15
      });
    } else {
      checks.push({
        id: 'keyword_not_found',
        name: 'Từ khóa chính',
        status: 'warning',
        message: `Từ khóa "${keyword}" chưa có trong Tiêu đề hoặc Mô tả`,
        detail: 'Hãy khéo léo chèn từ khóa vào tiêu đề hoặc đoạn mở đầu.',
        score: 4,
        maxScore: 15
      });
    }
  }

  // 4. Cấu trúc Tiêu đề (Headings H2, H3)
  const h2Count = (input.renderedHtml.match(/<h2/gi) || []).length;
  const h3Count = (input.renderedHtml.match(/<h3/gi) || []).length;
  const h4Count = (input.renderedHtml.match(/<h4/gi) || []).length;

  if (h2Count === 0) {
    checks.push({
      id: 'heading_no_h2',
      name: 'Cấu trúc tiêu đề (Headings)',
      status: 'critical',
      message: 'Bài viết chưa có thẻ Heading 2 (H2)',
      detail: 'Hãy chia nhỏ nội dung thành các phần chính bằng các tiêu đề H2.',
      score: 0,
      maxScore: 15
    });
  } else if (h2Count === 0 && h4Count > 0) {
    checks.push({
      id: 'heading_hierarchy_error',
      name: 'Cấu trúc tiêu đề (Headings)',
      status: 'critical',
      message: 'Lỗi phân cấp tiêu đề (nhảy cóc thẻ)',
      detail: 'Không nên dùng H4 khi chưa có H2/H3.',
      score: 5,
      maxScore: 15
    });
  } else {
    checks.push({
      id: 'heading_good',
      name: 'Cấu trúc tiêu đề (Headings)',
      status: 'good',
      message: `Cấu trúc rõ ràng (${h2Count} thẻ H2, ${h3Count} thẻ H3)`,
      detail: 'Người đọc và máy tìm kiếm dễ dàng nắm bắt mục lục bài viết.',
      score: 15,
      maxScore: 15
    });
  }

  // 5. Ảnh đại diện & Thẻ ALT (Featured Image & Image ALT)
  const hasFeaturedImg = !!input.featuredImageId || !!input.featuredImageUrl;
  const inlineImages = (input.renderedHtml.match(/<img[^>]+>/gi) || []);
  const imagesWithoutAlt = inlineImages.filter(img => !img.includes('alt=') || /alt=["']\s*["']/.test(img)).length;

  if (!hasFeaturedImg) {
    checks.push({
      id: 'img_missing_featured',
      name: 'Hình ảnh đại diện',
      status: 'warning',
      message: 'Chưa có ảnh đại diện (Featured Image)',
      detail: 'Bài viết cần ảnh đại diện để hiển thị trên mạng xã hội và danh mục.',
      score: 5,
      maxScore: 15
    });
  } else if (imagesWithoutAlt > 0) {
    checks.push({
      id: 'img_missing_alt',
      name: 'Thẻ ALT của hình ảnh',
      status: 'warning',
      message: `Có ${imagesWithoutAlt} ảnh trong bài chưa có thẻ ALT`,
      detail: 'Bổ sung thẻ ALT mô tả nội dung cho tất cả hình ảnh để tối ưu SEO hình ảnh.',
      score: 8,
      maxScore: 15
    });
  } else {
    checks.push({
      id: 'img_good',
      name: 'Hình ảnh & Thẻ ALT',
      status: 'good',
      message: 'Đã có ảnh đại diện và thẻ ALT đầy đủ',
      detail: 'Hình ảnh được tối ưu chuẩn Google Image Search.',
      score: 15,
      maxScore: 15
    });
  }

  // 6. Dung lượng nội dung (Content Word Count)
  if (wordCount < 200) {
    checks.push({
      id: 'content_thin',
      name: 'Độ dài bài viết',
      status: 'critical',
      message: `Nội dung quá ngắn (${wordCount} từ - Thin Content)`,
      detail: 'Bài viết dưới 300 từ thường bị Google đánh giá thấp. Nên viết tối thiểu 500 từ.',
      score: 2,
      maxScore: 10
    });
  } else if (wordCount < 500) {
    checks.push({
      id: 'content_short',
      name: 'Độ dài bài viết',
      status: 'warning',
      message: `Độ dài trung bình (${wordCount} từ)`,
      detail: 'Để cạnh tranh vị trí top đầu, nên mở rộng phân tích chuyên sâu thêm.',
      score: 6,
      maxScore: 10
    });
  } else {
    checks.push({
      id: 'content_good',
      name: 'Độ dài bài viết',
      status: 'good',
      message: `Nội dung đầy đủ, chuyên sâu (${wordCount} từ)`,
      detail: 'Cung cấp giá trị toàn diện cho người đọc.',
      score: 10,
      maxScore: 10
    });
  }

  // 7. Liên kết nội bộ (Internal Links)
  const links = (input.renderedHtml.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi) || []);
  let internalLinkCount = 0;
  let externalLinkCount = 0;

  for (const l of links) {
    if (l.includes('localmate.vn') || l.includes('href="/"') || l.includes('href="/dich-vu') || l.includes('href="/kien-thuc')) {
      internalLinkCount++;
    } else if (l.includes('http://') || l.includes('https://')) {
      externalLinkCount++;
    }
  }

  if (internalLinkCount === 0) {
    checks.push({
      id: 'link_no_internal',
      name: 'Liên kết nội bộ (Internal Links)',
      status: 'warning',
      message: 'Chưa có liên kết nội bộ đến các trang khác',
      detail: 'Thêm ít nhất 1-2 liên kết trỏ đến dịch vụ hoặc bài viết liên quan của LocalMate.',
      score: 3,
      maxScore: 10
    });
  } else {
    checks.push({
      id: 'link_internal_good',
      name: 'Liên kết nội bộ (Internal Links)',
      status: 'good',
      message: `Đã có ${internalLinkCount} liên kết nội bộ liên quan`,
      detail: 'Giúp bot Google thu thập dữ liệu và giữ chân khách hàng trên website.',
      score: 10,
      maxScore: 10
    });
  }

  // 8. Chuẩn hóa đường dẫn (URL Slug)
  const slug = (input.slug || '').trim();
  const isCleanSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);

  if (!slug) {
    checks.push({
      id: 'slug_missing',
      name: 'Đường dẫn (Slug)',
      status: 'critical',
      message: 'Chưa có đường dẫn bài viết',
      detail: 'Đường dẫn là bắt buộc để xuất bản.',
      score: 0,
      maxScore: 5
    });
  } else if (!isCleanSlug) {
    checks.push({
      id: 'slug_invalid',
      name: 'Đường dẫn (Slug)',
      status: 'warning',
      message: 'Đường dẫn chứa ký tự lạ hoặc có dấu',
      detail: 'Nên dùng chữ thường không dấu và phân tách bằng dấu gạch ngang (-).',
      score: 2,
      maxScore: 5
    });
  } else {
    checks.push({
      id: 'slug_good',
      name: 'Đường dẫn (Slug)',
      status: 'good',
      message: 'Đường dẫn chuẩn SEO, ngắn gọn',
      detail: `https://localmate.vn/kien-thuc/${slug}`,
      score: 5,
      maxScore: 5
    });
  }

  // Tính tổng điểm
  const totalScore = Math.min(100, Math.round(checks.reduce((sum, c) => sum + c.score, 0)));
  const criticalCount = checks.filter(c => c.status === 'critical').length;
  const warningCount = checks.filter(c => c.status === 'warning').length;
  const goodCount = checks.filter(c => c.status === 'good').length;

  let status: 'good' | 'warning' | 'critical' = 'good';
  if (criticalCount > 0 || totalScore < 60) {
    status = 'critical';
  } else if (warningCount > 0 || totalScore < 80) {
    status = 'warning';
  }

  return {
    totalScore,
    status,
    checks,
    summary: {
      criticalCount,
      warningCount,
      goodCount
    }
  };
}
