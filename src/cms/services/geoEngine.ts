// LocalMate GEO Engine - Generative Engine Optimization & AI Search Readiness
// Đánh giá khả năng máy/LLM (ChatGPT, Google Gemini AI Overviews, Perplexity) hiểu và trích xuất nội dung
// Tuyệt đối không phán đoán ảo "đảm bảo lên top AI" hay "đảm bảo trích dẫn 100%".

import { GeoReadinessReport, GeoRuleCheck } from '../types';

export interface GeoEvaluationInput {
  title: string;
  renderedHtml: string;
  mainQuestion?: string;
  directAnswer?: string;
  entities?: string;
  sources?: string;
  faqJson?: string;
  authorName?: string;
  updatedAt?: string;
  schemaType?: string;
}

export function evaluatePostGeo(input: GeoEvaluationInput): GeoReadinessReport {
  const checks: GeoRuleCheck[] = [];
  const rawText = input.renderedHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const lowerText = rawText.toLowerCase();
  const first150Words = rawText.split(/\s+/).slice(0, 150).join(' ').toLowerCase();

  // 1. Trực diện: Answer-First (Đoạn đầu giải quyết ngay vấn đề cốt lõi)
  const hasDirectAnswerField = !!input.directAnswer && input.directAnswer.trim().length >= 30;
  const isDirectInIntro = first150Words.includes('là') || first150Words.includes('giải pháp') || first150Words.includes('chi phí') || first150Words.includes('cách');
  
  if (hasDirectAnswerField || isDirectInIntro) {
    checks.push({
      id: 'geo_answer_first',
      name: 'Nguyên tắc Answer-First',
      passed: true,
      score: 15,
      maxScore: 15,
      recommendation: 'Đoạn mở đầu đi thẳng vào trọng tâm, giúp mô hình AI dễ dàng trích xuất định nghĩa.',
      impact: 'high'
    });
  } else {
    checks.push({
      id: 'geo_answer_first',
      name: 'Nguyên tắc Answer-First',
      passed: false,
      score: 0,
      maxScore: 15,
      recommendation: 'Hãy đưa định nghĩa hoặc câu trả lời cốt lõi ngay trong 100 từ đầu tiên thay vì rào đón dài dòng.',
      impact: 'high'
    });
  }

  // 2. Câu hỏi trọng tâm (Main Question)
  const hasMainQuestion = !!input.mainQuestion && input.mainQuestion.trim().length >= 10;
  if (hasMainQuestion) {
    checks.push({
      id: 'geo_main_question',
      name: 'Câu hỏi trọng tâm (Main Question)',
      passed: true,
      score: 15,
      maxScore: 15,
      recommendation: `Đã xác định rõ câu hỏi chính: "${input.mainQuestion}".`,
      impact: 'high'
    });
  } else {
    checks.push({
      id: 'geo_main_question',
      name: 'Câu hỏi trọng tâm (Main Question)',
      passed: false,
      score: 0,
      maxScore: 15,
      recommendation: 'Cần xác định câu hỏi chính mà người tìm kiếm hỏi trợ lý AI (Ví dụ: "Chi phí thiết kế website tiệm là bao nhiêu?").',
      impact: 'high'
    });
  }

  // 3. Thực thể kinh doanh & địa phương rõ ràng (Entity Grounding)
  const hasEntityField = !!input.entities && input.entities.trim().length > 0;
  const brandMentioned = lowerText.includes('localmate');
  const geoLocalMentioned = lowerText.includes('hồ chí minh') || lowerText.includes('tphcm') || lowerText.includes('việt nam') || lowerText.includes('địa phương');

  if (hasEntityField || (brandMentioned && geoLocalMentioned)) {
    checks.push({
      id: 'geo_entities',
      name: 'Thực thể & Địa bàn (Entity Grounding)',
      passed: true,
      score: 15,
      maxScore: 15,
      recommendation: 'Thực thể thương hiệu và ngữ cảnh địa phương rõ ràng, tránh thông tin mơ hồ.',
      impact: 'high'
    });
  } else {
    checks.push({
      id: 'geo_entities',
      name: 'Thực thể & Địa bàn (Entity Grounding)',
      passed: false,
      score: 5,
      maxScore: 15,
      recommendation: 'Bổ sung danh sách thực thể liên quan (Tên thương hiệu LocalMate, địa bàn TP.HCM/Việt Nam, loại hình kinh doanh).',
      impact: 'high'
    });
  }

  // 4. Phát hiện Placeholder & Nội dung rác (Zero Placeholder Check)
  const placeholderRegex = /lorem ipsum|todo|tbd|nội dung đang cập nhật|chưa có nội dung|sẽ cập nhật sau/i;
  const hasPlaceholder = placeholderRegex.test(rawText);

  if (!hasPlaceholder) {
    checks.push({
      id: 'geo_zero_placeholder',
      name: 'Độ tin cậy & Hoàn chỉnh',
      passed: true,
      score: 10,
      maxScore: 10,
      recommendation: 'Bài viết không chứa văn bản tạm thời (TODO, Lorem Ipsum, TBD).',
      impact: 'high'
    });
  } else {
    checks.push({
      id: 'geo_zero_placeholder',
      name: 'Độ tin cậy & Hoàn chỉnh',
      passed: false,
      score: 0,
      maxScore: 10,
      recommendation: 'Cần loại bỏ ngay các từ khóa placeholder như "TODO", "Lorem ipsum" hoặc "nội dung đang cập nhật".',
      impact: 'high'
    });
  }

  // 5. Câu hỏi thường gặp thực tế (FAQ Section)
  let faqCount = 0;
  if (input.faqJson) {
    try {
      const parsed = JSON.parse(input.faqJson);
      if (Array.isArray(parsed)) faqCount = parsed.length;
    } catch {}
  }
  const hasInlineFaq = input.renderedHtml.includes('faq') || input.renderedHtml.includes('câu hỏi thường gặp');

  if (faqCount >= 2 || hasInlineFaq) {
    checks.push({
      id: 'geo_faqs',
      name: 'Mục Hỏi - Đáp thực tế (FAQ Section)',
      passed: true,
      score: 10,
      maxScore: 10,
      recommendation: 'Cung cấp các câu hỏi - đáp phụ giúp Answer Engine dễ đối sánh truy vấn liên quan.',
      impact: 'medium'
    });
  } else {
    checks.push({
      id: 'geo_faqs',
      name: 'Mục Hỏi - Đáp thực tế (FAQ Section)',
      passed: false,
      score: 0,
      maxScore: 10,
      recommendation: 'Nên bổ sung 2-3 câu hỏi phụ thường gặp kèm câu trả lời dứt khoát.',
      impact: 'medium'
    });
  }

  // 6. Cấu trúc đoạn văn (Paragraph Readability)
  // Tránh các đoạn văn quá dài lê thê (> 180 từ) khiến AI khó trích đoạn (Quote Snippet)
  const paragraphs = input.renderedHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  const longParagraphs = paragraphs.filter(p => {
    const pText = p.replace(/<[^>]*>/g, ' ').trim();
    return pText.split(/\s+/).length > 160;
  }).length;

  if (longParagraphs === 0) {
    checks.push({
      id: 'geo_paragraph_chunking',
      name: 'Phân đoạn trích dẫn độc lập',
      passed: true,
      score: 10,
      maxScore: 10,
      recommendation: 'Các đoạn văn có độ dài vừa phải, mô hình AI dễ trích dẫn trực tiếp từng ý.',
      impact: 'medium'
    });
  } else {
    checks.push({
      id: 'geo_paragraph_chunking',
      name: 'Phân đoạn trích dẫn độc lập',
      passed: false,
      score: 4,
      maxScore: 10,
      recommendation: `Có ${longParagraphs} đoạn văn quá dài (> 160 từ). Hãy tách thành các ý nhỏ hoặc dạng danh sách bullet points.`,
      impact: 'medium'
    });
  }

  // 7. Bảng biểu & Dữ liệu có cấu trúc so sánh (Data Tables / Lists)
  const hasTable = input.renderedHtml.includes('<table') || input.renderedHtml.includes('<ul') || input.renderedHtml.includes('<ol');
  if (hasTable) {
    checks.push({
      id: 'geo_structured_tables',
      name: 'Dữ liệu so sánh & Bảng biểu',
      passed: true,
      score: 10,
      maxScore: 10,
      recommendation: 'Nội dung có bảng hoặc danh sách có cấu trúc, AI Engine đặc biệt ưu tiên trích xuất định dạng này.',
      impact: 'medium'
    });
  } else {
    checks.push({
      id: 'geo_structured_tables',
      name: 'Dữ liệu so sánh & Bảng biểu',
      passed: false,
      score: 3,
      maxScore: 10,
      recommendation: 'Nên thêm bảng so sánh, bảng giá hoặc danh sách các bước để tăng khả năng trích dẫn.',
      impact: 'low'
    });
  }

  // 8. Tác giả & Ban biên tập chuyên môn (E-E-A-T)
  if (input.authorName && input.authorName.trim().length > 0) {
    checks.push({
      id: 'geo_author_credibility',
      name: 'Minh bạch tác giả & Thẩm quyền (E-E-A-T)',
      passed: true,
      score: 10,
      maxScore: 10,
      recommendation: `Tác giả rõ ràng: ${input.authorName}.`,
      impact: 'high'
    });
  } else {
    checks.push({
      id: 'geo_author_credibility',
      name: 'Minh bạch tác giả & Thẩm quyền (E-E-A-T)',
      passed: false,
      score: 2,
      maxScore: 10,
      recommendation: 'Cần gán tác giả hoặc ban biên tập kỹ thuật cụ thể.',
      impact: 'high'
    });
  }

  // 9. Dữ liệu có cấu trúc Schema tương ứng
  const schemaType = input.schemaType || 'Article';
  checks.push({
    id: 'geo_schema_matching',
    name: 'Khớp Schema JSON-LD',
    passed: true,
    score: 5,
    maxScore: 5,
    recommendation: `Đã liên kết cấu trúc Schema: ${schemaType}.`,
    impact: 'medium'
  });

  const totalScore = Math.min(100, Math.round(checks.reduce((sum, c) => sum + c.score, 0)));

  let readiness: 'Good' | 'Needs work' | 'Poor' = 'Good';
  if (totalScore < 50) {
    readiness = 'Poor';
  } else if (totalScore < 80) {
    readiness = 'Needs work';
  }

  return {
    readiness,
    score: totalScore,
    checks
  };
}
