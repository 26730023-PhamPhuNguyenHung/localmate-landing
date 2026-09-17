# Article Schema & Flexible Block System — LocalMate CMS (SSOT)

> **Tài liệu đặc tả kiến trúc dữ liệu và hệ thống khối nội dung linh hoạt (Flexible Content Blocks) cho LocalMate CMS.**  
> **Phiên bản:** 2.0 (Tháng 9/2026)  
> **Áp dụng cho:** `src/cms/types.ts`, `PostEditorPage.tsx`, `PostPreviewPage.tsx`, API Cloudflare Workers & D1 Database.

---

## 1. Tổng Quan & Triết Lý Thiết Kế (Philosophy & Core Principles)

LocalMate không phát triển một blog thông thường với văn bản dài vô tận. Mỗi bài viết trên `localmate.vn/kien-thuc/` là một **Tài sản nội dung chuyển đổi (Conversion Content Asset)** được thiết kế để:
1. **Answer-First (Google AI Overview & Helpful Content Ready):** Đưa câu trả lời dứt khoát, trực diện ngay trong 30 giây đầu; không giấu giếm thông tin để câu view.
2. **E-E-A-T Tuyệt Đối (Kinh nghiệm, Chuyên môn, Thẩm quyền, Tin cậy):** Mọi bài viết phải có tác giả, chuyên gia kiểm duyệt, ngày kiểm chứng số liệu (fact-checked date) và trích dẫn bằng chứng thực tế từ các ca triển khai cho cửa hàng SME.
3. **Minh Bạch Chi Phí & Bóc Trần Cạm Bẫy (LocalMate POV):** Sẵn sàng nói thẳng mặt trái thị trường (như bẫy web 500k, buff review ảo bị Google quét) để bảo vệ chủ doanh nghiệp nhỏ.
4. **Chuẩn UI/UX Sáng Màu & Không Glassmorphism:** Nền sáng (`#fbfcfb`, `#ffffff`), chữ tối tương phản cao (`#0f172a`), viền nét rõ ràng (`#e2e8f0` / `#dcfce7`), màu nhấn xanh lá thương hiệu (`#0d7647`), chống co giật khung hình (`scrollbar-gutter: stable`), ngắt dòng thẩm mỹ (`text-wrap: pretty`).

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             LOCALMATE ARTICLE SCHEMA                             │
├──────────────────────────┬───────────────────────────────────────────────────────┤
│ Article-Level Metadata   │ Purpose, Intent, Persona, Primary Question, Pillars,  │
│ (SSOT Content Brief)     │ Author, Reviewer, FactCheck Date, SEO & Quality Flags │
├──────────────────────────┼───────────────────────────────────────────────────────┤
│ Flexible Block Engine    │ 19+ Modular Blocks: TL;DR, POV, Cost Table, FAQ,      │
│ (Structured Content)     │ Decision Tree, Step-by-Step, Warning, Real Case, CTA  │
├──────────────────────────┼───────────────────────────────────────────────────────┤
│ Output Encoders          │ 1. Interactive UI Component (React Light Theme)       │
│                          │ 2. Schema.org JSON-LD (FAQPage, HowTo, Article)       │
│                          │ 3. Plain Text / Markdown Fallback for RSS & IndexNow  │
└──────────────────────────┴───────────────────────────────────────────────────────┘
```

---

## 2. Article-Level Extended Metadata

Hệ thống Metadata mở rộng nằm trong `PostContentBrief` và `PostEntity` (được lưu trữ tại cột `brief_json` và `schema_json` trong Cloudflare D1 `cms_posts`).

| Thuộc tính (CamelCase / Snake_case) | Kiểu dữ liệu | Ý nghĩa nghiệp vụ | Ví dụ thực tế |
| :--- | :--- | :--- | :--- |
| `articlePurpose` (`article_purpose`) | `ArticlePurpose` | Mục đích chiến lược của bài viết trong hành trình khách hàng | `'cost_estimation'`, `'problem_solving'` |
| `searchIntent` (`search_intent_level`) | `SearchIntentLevel` | Phân tầng ý định tìm kiếm theo phễu (TOFU, MOFU, BOFU) | `'BOFU_transactional'`, `'MOFU_commercial'` |
| `targetPersona` (`target_persona`) | `TargetPersona` / string | Chân dung đối tượng độc giả mục tiêu mà bài viết nhắm tới | `'local_store_owner'`, `'spa_salon_clinic'` |
| `primaryQuestion` (`primary_question`) | string | Câu hỏi cốt lõi số 1 bài viết phải giải đáp dứt điểm | *"Chi phí làm website doanh nghiệp nhỏ 2026 gồm những gì?"* |
| `secondaryQuestions` (`secondary_questions`) | string[] | Các câu hỏi phụ liên quan (Google PAA - People Also Ask) | `["Chi phí duy trì web hàng năm là bao nhiêu?", "Có nên dùng web 500k không?"]` |
| `uniqueAngle` (`unique_angle`) | string | Điểm khác biệt độc quyền không bài viết đối thủ nào có | *"Bóc tách chi phí ẩn sau 12 tháng và chiêu trò đòi mã nguồn của đơn vị giá rẻ"* |
| `experienceNotes` (`experience_notes`) | string | Ghi chú thực tế từ 100+ dự án LocalMate đã gặp | *"90% chủ tiệm bị mất tên miền vì để thợ làm web đứng tên hộ"* |
| `evidenceRequired` (`evidence_required`) | string[] | Danh mục bằng chứng bắt buộc người viết phải đính kèm | `["Hóa đơn VAT mua domain mắt bão", "Ảnh chụp màn hình chi phí hosting Cloudflare 0đ"]` |
| `contentType` (`content_type`) | `ArticleContentType` | Định dạng cấu trúc bài | `'cost_breakdown'`, `'guide'`, `'comparison'` |
| `pillarId` (`pillar_id`) | number / string | Thuộc 1 trong 8 Trụ cột nội dung theo Topic Map SSOT | `3` (Pillar 3: Website & Landing Page) |
| `relatedPosts` (`related_posts`) | (number \| string)[] | Các bài viết phụ cận cùng cụm cluster luân chuyển traffic | `[1, 2, 5]` |
| `relatedService` (`related_service`) | `ArticleRelatedService` | Dịch vụ LocalMate tương ứng gắn kèm Contextual CTA | `{ slug: "thiet-ke-website", title: "Gói Website Tinh Gọn", cta_text: "Xem Báo Giá Trọn Gói" }` |
| `author` (`author_details`) | `ArticleAuthor` | Tác giả bài viết với bằng cấp & hồ sơ E-E-A-T | `{ name: "Nguyễn Văn Hùng", role: "Trưởng nhóm Giải pháp Số LocalMate" }` |
| `reviewedBy` (`reviewed_by`) | `ArticleReviewer` | Chuyên gia kiểm định kỹ thuật & pháp lý bài viết | `{ name: "Trần Anh Tuấn", role: "Kiến trúc sư Hạ tầng Cloud", credentials: "AWS & Cloudflare Certified" }` |
| `firstPublishedAt` (`first_published_at`) | string (ISO Date) | Thời gian đăng tải lần đầu | `"2026-03-01T08:00:00Z"` |
| `updatedAt` (`updated_at`) | string (ISO Date) | Thời gian cập nhật nội dung gần nhất | `"2026-09-15T14:30:00Z"` |
| `factCheckedAt` (`fact_checked_at`) | string (ISO Date) | Ngày kiểm chứng lại toàn bộ số liệu, luật và bảng giá | `"2026-09-10T10:00:00Z"` |
| `qualityStatus` (`quality_status`) | `ArticleQualityStatus` | Trạng thái kiểm soát chất lượng biên tập nội bộ | `'editorial_approved'`, `'fact_check_pending'` |
| `seoStatus` (`seo_status`) | `ArticleSeoStatus` | Trạng thái tối ưu hóa SEO On-page | `'optimized'`, `'top_ranking'` |

---

## 3. Hệ Thống 19 Content Blocks Linh Hoạt (Flexible Block System)

Mỗi Content Block tuân theo kiến trúc:
```typescript
interface BaseContentBlock<TType extends ContentBlockType, TData> {
  id: string;        // UUID hoặc chuỗi duy nhất: block_tldr_01
  type: TType;       // Định danh loại khối
  order: number;     // Thứ tự hiển thị trong bài viết (1, 2, 3...)
  data: TData;       // Dữ liệu payload có cấu trúc chặt chẽ
  visible?: boolean; // Cho phép ẩn/hiện linh hoạt
}
```

### 3.1. Block: TL;DR / Answer First (`tldr_answer_first`)
- **Giá trị nghiệp vụ:** Đưa câu trả lời dứt khoát ngay sau tiêu đề H1. Phục vụ trực tiếp thuật toán Google Helpful Content, tối ưu lấy vị trí Google Featured Snippet và hiển thị trên AI Overviews.
- **Quy chuẩn UI:** Khối nền xanh lá nhạt (`#edf7f1`), viền trái đậm 4px (`#0d7647`), tiêu đề viết hoa kèm icon đồng hồ cát/tia chớp.
- **TypeScript Data Interface:**
```typescript
export interface TldrBlockData {
  title?: string; // Mặc định: "Tóm tắt nhanh (TL;DR)"
  summary: string; // 1-3 câu trả lời dứt khoát
  highlightPoint?: string; // Điểm mấu chốt nhất cần nhớ
  actionAdvice?: string; // Lời khuyên hành động lập tức
  readingTimeSeconds?: number; // Ước tính thời gian đọc (ví dụ: 30)
}
```

### 3.2. Block: Key Takeaways (`key_takeaways`)
- **Giá trị nghiệp vụ:** Độc giả bận rộn chỉ cần lướt qua là nắm trọn 3-5 ý then chốt của cả bài viết 2000 từ.
- **Quy chuẩn UI:** Thẻ card nền trắng, viền `#e2e8f0`, danh sách chấm tròn xanh lá `#16a34a` có nhãn tag nổi bật.
- **TypeScript Data Interface:**
```typescript
export interface KeyTakeawaysBlockData {
  title?: string;
  items: Array<{
    id?: string;
    text: string;
    highlight?: string;
    badge?: string; // "Cốt lõi", "Thực tế", "Lưu ý"
  }>;
}
```

### 3.3. Block: Context & Boundary (`context_boundary`)
- **Giá trị nghiệp vụ:** Xác lập phạm vi và điều kiện áp dụng. Tránh việc người đọc áp dụng sai quy mô dẫn đến thất bại và đổ lỗi cho kiến thức.
- **Quy chuẩn UI:** Chia 2 cột rõ ràng: Cột xanh "Áp dụng hiệu quả cho" (icon Check) và Cột xám "Chưa nên áp dụng cho" (icon Minus/X).
- **TypeScript Data Interface:**
```typescript
export interface ContextBoundaryBlockData {
  title?: string;
  applicableFor: string[]; // Đối tượng/ngành nghề phù hợp
  notApplicableFor: string[]; // Đối tượng chưa phù hợp
  budgetMin?: number | string;
  budgetMax?: number | string;
  currency?: string;
  prerequisites?: string[]; // Điều kiện cần chuẩn bị trước
  timelineScope?: string;
}
```

### 3.4. Block: Problem & Symptoms (`problem_symptoms`)
- **Giá trị nghiệp vụ:** Thấu cảm nỗi đau của khách hàng. Miêu tả đúng những gì họ đang chịu đựng ở tiệm/văn phòng hàng ngày để tạo sự đồng cảm sâu sắc.
- **Quy chuẩn UI:** Hộp viền cảnh báo mềm (`#fef2f2` / viền `#fecaca`), phân loại mức độ nghiêm trọng (high: đỏ, medium: cam, low: xám).
- **TypeScript Data Interface:**
```typescript
export interface ProblemSymptomsBlockData {
  title?: string;
  headline: string;
  description?: string;
  symptoms: Array<{
    symptom: string;
    rootCause: string;
    businessImpact: string;
    severity: 'high' | 'medium' | 'low';
  }>;
}
```

### 3.5. Block: Localmate Point of View (POV) (`localmate_pov`)
- **Giá trị nghiệp vụ:** Định vị thương hiệu LocalMate là đơn vị tư vấn thẳng thắn, không bưng bít sự thật. Phân tích đối lập giữa "Mẹo vặt bề nổi ngoài thị trường" và "Sự thật vận hành thực tế".
- **Quy chuẩn UI:** Khối nền tối nhẹ hoặc viền xanh đậm `#0d7647`, có huy hiệu "GÓC NHÌN ĐỘC QUYỀN LOCALMATE", trích dẫn có chữ ký đội ngũ giải pháp.
- **TypeScript Data Interface:**
```typescript
export interface LocalmatePovBlockData {
  title?: string;
  marketMyth: string; // Lầm tưởng phổ biến ngoài thị trường
  realityCheck: string; // Sự thật trần trụi
  localmateStance: string; // Lập trường & Giải pháp bền vững của LocalMate
  transparencyNote?: string;
}
```

### 3.6. Block: Evidence & Verification (`evidence_verification`)
- **Giá trị nghiệp vụ:** Đáp ứng tiêu chuẩn kiểm chứng E-E-A-T. Không nói suông bằng từ ngữ sáo rỗng mà bằng số liệu Before/After đã được đo đạc.
- **Quy chuẩn UI:** Lưới Grid chứa các chỉ số KPI lớn (Metrics Card), giá trị Trước/Sau có màu sắc phân biệt rõ ràng kèm thông tin nguồn kiểm chứng.
- **TypeScript Data Interface:**
```typescript
export interface EvidenceVerificationBlockData {
  title?: string;
  claim: string;
  metrics: Array<{
    label: string;
    beforeValue?: string;
    afterValue: string;
    diffText?: string; // Ví dụ: "+180% cuộc gọi"
    verifiedBy?: string;
  }>;
  verificationMethod: string; // Ví dụ: "Google Analytics 4 & Báo cáo cuộc gọi thật"
  sampleSizeOrSource?: string;
  screenshotUrl?: string;
}
```

### 3.7. Block: Real Example & Scenario (`real_example_scenario`)
- **Giá trị nghiệp vụ:** Tình huống thực chiến từ một cơ sở kinh doanh cụ thể giúp độc giả nhìn thấy chính mình trong bài viết.
- **Quy chuẩn UI:** Thẻ Case Study viền bo tròn 12px, có huy hiệu loại hình kinh doanh (ví dụ: "Tiệm Trà Sữa Quận 10", "Phòng Khám Răng Biên Hòa"), trình bày mạch lạc 3 chặng: Vấn đề -> Giải pháp -> Kết quả.
- **TypeScript Data Interface:**
```typescript
export interface RealExampleScenarioBlockData {
  title?: string;
  businessNameOrType: string;
  initialSituation: string;
  actionTaken: string;
  measurableResult: string;
  timeframe: string;
  keyLesson: string;
  testimonialSnippet?: string;
}
```

### 3.8. Block: Comparison Table (`comparison_table`)
- **Giá trị nghiệp vụ:** Đặt các phương án lên bàn cân khách quan (ví dụ: Thuê Agency vs Tự chạy Ads vs Dịch vụ LocalMate; hoặc Web code tay vs Web kéo thả).
- **Quy chuẩn UI:** Bảng HTML responsive cuộn ngang được trên di động, cột khuyên dùng được tô nền nhấn xanh lá nhạt với nhãn "Khuyên Dùng Cho SME".
- **TypeScript Data Interface:**
```typescript
export interface ComparisonTableBlockData {
  title: string;
  description?: string;
  options: Array<{
    id: string;
    name: string;
    isRecommended?: boolean;
    badge?: string;
  }>;
  criteria: Array<{
    id: string;
    name: string;
    values: Record<string, string>; // key = option id, value = text
    isHighlight?: boolean;
  }>;
  recommendationSummary: string;
}
```

### 3.9. Block: Cost Breakdown Table (`cost_breakdown_table`)
- **Giá trị nghiệp vụ:** Bóc tách chi phí minh bạch đến từng nghìn đồng. Xóa bỏ nỗi sợ bị "chém giá" hoặc phát sinh chi phí ẩn của chủ tiệm.
- **Quy chuẩn UI:** Bảng giá rõ ràng, cột Chu kỳ (1 lần / Hàng năm / Hàng tháng), cột Bắt buộc (Có / Không), dòng Tổng cộng nổi bật, có hộp cảnh báo "Chi phí ẩn cần tránh".
- **TypeScript Data Interface:**
```typescript
export interface CostBreakdownTableBlockData {
  title: string;
  description?: string;
  currency: string; // Mặc định "VND"
  items: Array<{
    id: string;
    category: string;
    item: string;
    minPrice: number | string;
    maxPrice: number | string;
    period: 'one-time' | 'yearly' | 'monthly' | 'as-needed';
    isMandatory: boolean;
    notes: string;
  }>;
  totalEstimatedMin: number | string;
  totalEstimatedMax: number | string;
  hiddenCostsWarning?: string[];
}
```

### 3.10. Block: Interactive Checklist (`checklist`)
- **Giá trị nghiệp vụ:** Danh sách hành động thực tế có thể tương tác bấm check trực tiếp trên trình duyệt, giúp người đọc tự kiểm tra tiến độ dự án của mình.
- **Quy chuẩn UI:** Phân nhóm theo giai đoạn (Chuẩn bị -> Triển khai -> Bàn giao), có trạng thái checkbox rõ ràng, nút lưu tiến độ cục bộ vào localStorage.
- **TypeScript Data Interface:**
```typescript
export interface ChecklistBlockData {
  title: string;
  description?: string;
  groups: Array<{
    groupName: string;
    items: Array<{
      id: string;
      label: string;
      hint?: string;
      isRequired: boolean;
      defaultChecked?: boolean;
    }>;
  }>;
  completionNote?: string;
}
```

### 3.11. Block: Step-by-Step Guide (`step_by_step`)
- **Giá trị nghiệp vụ:** Hướng dẫn thực hành từng bước (Actionable How-To), kết xuất trực tiếp ra Google `HowTo` Rich Results.
- **Quy chuẩn UI:** Dòng thời gian thẳng đứng (Vertical Stepper), số bước tròn to viền xanh lá, có nhãn thời gian ước tính, mẹo chuyên gia (Pro-tip) và kết quả cần đạt ở mỗi bước.
- **TypeScript Data Interface:**
```typescript
export interface StepByStepBlockData {
  title: string;
  description?: string;
  totalEstimatedTime?: string;
  steps: Array<{
    stepNumber: number;
    title: string;
    action: string;
    timeEstimate?: string;
    proTips?: string[];
    deliverable?: string;
    warning?: string;
  }>;
}
```

### 3.12. Block: Decision Tree (`decision_tree`)
- **Giá trị nghiệp vụ:** Cây quyết định Yes/No giúp người đọc tự trả lời câu hỏi: *"Với trường hợp của tôi thì nên chọn giải pháp nào?"* mà không cần phải đoán mò.
- **Quy chuẩn UI:** Sơ đồ luồng phân nhánh trực quan, nút bấm Yes (Xanh lá) / No (Xám đậm), mở rộng câu hỏi tiếp theo hoặc dẫn ngay tới kết luận phù hợp.
- **TypeScript Data Interface:**
```typescript
export interface DecisionTreeBlockData {
  title: string;
  description?: string;
  startNodeId: string;
  nodes: Array<{
    id: string;
    question: string;
    yesNextNodeId?: string;
    noNextNodeId?: string;
    yesConclusion?: string;
    noConclusion?: string;
    recommendedServiceSlug?: string;
  }>;
}
```

### 3.13. Block: Common Implementation Mistakes (`common_mistakes`)
- **Giá trị nghiệp vụ:** Cảnh báo các sai lầm phổ biến khiến 80% chủ tiệm mất tiền oan khi tự làm hoặc thuê thợ không uy tín.
- **Quy chuẩn UI:** Thẻ card viền cam `#ea580c`, cấu trúc 3 phần: Tên sai lầm -> Hậu quả thực tế -> Cách phòng ngừa/sửa lỗi chuẩn xác.
- **TypeScript Data Interface:**
```typescript
export interface CommonMistakesBlockData {
  title?: string;
  mistakes: Array<{
    id: string;
    title: string;
    mistakeDescription: string;
    consequence: string;
    preventionTip: string;
    severity: 'critical' | 'moderate' | 'minor';
  }>;
}
```

### 3.14. Block: Warning Box (`warning_box`)
- **Giá trị nghiệp vụ:** Cảnh báo khẩn cấp về nguy cơ bị khóa tài khoản, bị Google phạt vi phạm chính sách, hoặc các bẫy lừa đảo mua bán tài nguyên số.
- **Quy chuẩn UI:** Nền đỏ cam sáng nhạt (`#fff1f2` hoặc `#fff7ed`), icon tam giác chấm than vàng/đỏ, chữ đậm tương phản cao.
- **TypeScript Data Interface:**
```typescript
export interface WarningBoxBlockData {
  level: 'danger' | 'warning' | 'caution';
  title: string;
  content: string;
  actionRequired?: string;
}
```

### 3.15. Block: When NOT to do this (`when_not_to_do`)
- **Giá trị nghiệp vụ:** Khẳng định sự liêm chính của LocalMate bằng cách chỉ ra những tình huống khách hàng TUYỆT ĐỐI CHƯA NÊN triển khai dịch vụ này, giúp khách hàng tiết kiệm ngân sách.
- **Quy chuẩn UI:** Danh sách thẻ viền xám tối `#475569`, icon cấm đỏ, nêu rõ hoàn cảnh và giải pháp thay thế tạm thời.
- **TypeScript Data Interface:**
```typescript
export interface WhenNotToDoBlockData {
  title?: string;
  scenarios: Array<{
    situation: string;
    whyNot: string;
    alternativeSuggestion: string;
  }>;
}
```

### 3.16. Block: Action Plan (`action_plan`)
- **Giá trị nghiệp vụ:** Bản kế hoạch hành động chia theo các cột mốc thời gian (24 giờ tới, 7 ngày tới, 30 ngày tới), biến kiến thức lý thuyết thành hành động thực tiễn.
- **Quy chuẩn UI:** Tabs hoặc 3 cột thời gian với huy hiệu số ngày, danh sách đầu việc và chỉ số đo lường kết quả hoàn thành.
- **TypeScript Data Interface:**
```typescript
export interface ActionPlanBlockData {
  title: string;
  goal: string;
  phases: Array<{
    timeframe: '24h' | '7_days' | '30_days' | string;
    phaseTitle: string;
    tasks: string[];
    expectedMilestone: string;
  }>;
}
```

### 3.17. Block: FAQ Schema (`faq`)
- **Giá trị nghiệp vụ:** Giải đáp các câu hỏi thường gặp, tự động xuất mã cấu trúc `FAQPage` JSON-LD để Google hiển thị accordion mở rộng ngay trên kết quả tìm kiếm SERP.
- **Quy chuẩn UI:** Accordion đóng/mở mượt mà, viền `#e2e8f0`, trả lời ngắn gọn, có thể đính kèm liên kết tới dịch vụ liên quan.
- **TypeScript Data Interface:**
```typescript
export interface FaqBlockData {
  title?: string;
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  enableSchemaOrg?: boolean; // Tự động inject JSON-LD
}
```

### 3.18. Block: Sources & Evidence Citations (`sources_citations`)
- **Giá trị nghiệp vụ:** Danh mục nguồn tài liệu tham khảo chính thống (Trang hỗ trợ chính thức của Google, Meta, Bộ Công Thương, báo cáo số liệu). Củng cố điểm E-E-A-T cao nhất trong mắt Google.
- **Quy chuẩn UI:** Danh sách chân trang tinh gọn, có icon liên kết ngoài, tên nhà xuất bản và ngày truy cập kiểm chứng.
- **TypeScript Data Interface:**
```typescript
export interface SourcesCitationsBlockData {
  title?: string;
  citations: Array<{
    id: string;
    title: string;
    publisherOrAuthor: string;
    url: string;
    datePublishedOrAccessed?: string;
    sourceType: 'official_doc' | 'google_support' | 'legal' | 'industry_report' | 'case_study';
  }>;
}
```

### 3.19. Block: Related Services Contextual CTA (`related_services_cta`)
- **Giá trị nghiệp vụ:** Cầu nối thương mại (Commercial Bridge). Biến độc giả sau khi đọc hiểu vấn đề thành khách hàng liên hệ tư vấn giải pháp trọn gói của LocalMate.
- **Quy chuẩn UI:** Khối thẻ Banner nổi bật ở cuối bài, nền xanh nhạt `#f0fdf4`, viền xanh thương hiệu 2px `#0d7647`, liệt kê 3 cam kết dịch vụ, nút bấm gọi hành động kích thước lớn.
- **TypeScript Data Interface:**
```typescript
export interface RelatedServicesCtaBlockData {
  serviceSlug: string;
  badge?: string; // "Dịch Vụ Tinh Gọn LocalMate"
  headline: string;
  description: string;
  deliverables: string[];
  pricingHint?: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}
```

### 3.20. Block: Related Posts (`related_posts`)
- **Giá trị nghiệp vụ:** Giữ chân người dùng on-site lâu hơn, giảm bounce rate và luân chuyển sức mạnh SEO (PageRank) giữa các bài trong cùng cụm chủ đề (Pillar - Cluster).
- **Quy chuẩn UI:** Lưới 3 thẻ bài viết hiển thị ảnh thumbnail, thẻ phân loại, thời gian đọc và nhãn Intent (TOFU/MOFU/BOFU).
- **TypeScript Data Interface:**
```typescript
export interface RelatedPostsBlockData {
  heading?: string;
  posts: Array<{
    id: number | string;
    title: string;
    slug: string;
    excerpt: string;
    categoryName?: string;
    readingTime?: string;
    intentBadge?: string;
  }>;
}
```

---

## 4. JSON Schema Chuẩn (Draft 2020-12 / Draft 7)

Dưới đây là JSON Schema chuẩn hóa để xác thực cấu trúc bài viết và các khối nội dung:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://localmate.vn/schemas/article-v2.json",
  "title": "LocalMate Article Schema",
  "description": "Schema chuẩn hóa bài viết và khối nội dung linh hoạt cho LocalMate CMS",
  "type": "object",
  "required": ["version", "metadata", "blocks"],
  "properties": {
    "version": {
      "type": "string",
      "const": "2.0"
    },
    "metadata": {
      "type": "object",
      "required": [
        "title",
        "slug",
        "excerpt",
        "status",
        "contentType",
        "articlePurpose",
        "searchIntent",
        "targetPersona",
        "primaryQuestion",
        "author",
        "seo"
      ],
      "properties": {
        "id": { "type": "integer" },
        "uuid": { "type": "string" },
        "title": { "type": "string", "minLength": 10, "maxLength": 120 },
        "slug": { "type": "string", "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
        "excerpt": { "type": "string", "maxLength": 300 },
        "featuredImageUrl": { "type": ["string", "null"], "format": "uri" },
        "status": {
          "type": "string",
          "enum": ["draft", "review", "scheduled", "published", "archived"]
        },
        "pillarId": { "type": ["integer", "string"] },
        "contentType": {
          "type": "string",
          "enum": [
            "guide",
            "comparison",
            "cost_breakdown",
            "case_study",
            "checklist",
            "opinion_pov",
            "pillar_hub",
            "faq_sheet"
          ]
        },
        "articlePurpose": {
          "type": "string",
          "enum": [
            "brand_awareness",
            "education",
            "problem_solving",
            "solution_comparison",
            "cost_estimation",
            "service_conversion",
            "trust_building"
          ]
        },
        "searchIntent": {
          "type": "string",
          "enum": [
            "TOFU_informational",
            "MOFU_commercial",
            "BOFU_transactional",
            "navigational"
          ]
        },
        "targetPersona": {
          "type": "string",
          "enum": [
            "local_store_owner",
            "spa_salon_clinic",
            "service_contractor",
            "fnb_owner",
            "sme_director",
            "marketing_inhouse"
          ]
        },
        "primaryQuestion": { "type": "string" },
        "secondaryQuestions": {
          "type": "array",
          "items": { "type": "string" }
        },
        "uniqueAngle": { "type": "string" },
        "experienceNotes": { "type": "string" },
        "evidenceRequired": {
          "type": "array",
          "items": { "type": "string" }
        },
        "author": {
          "type": "object",
          "required": ["name", "role"],
          "properties": {
            "id": { "type": "integer" },
            "name": { "type": "string" },
            "role": { "type": "string" },
            "avatar": { "type": "string" },
            "bio": { "type": "string" },
            "credentials": { "type": "string" }
          }
        },
        "reviewedBy": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "role": { "type": "string" },
            "credentials": { "type": "string" },
            "reviewed_at": { "type": "string", "format": "date-time" }
          }
        },
        "firstPublishedAt": { "type": ["string", "null"], "format": "date-time" },
        "updatedAt": { "type": "string", "format": "date-time" },
        "factCheckedAt": { "type": ["string", "null"], "format": "date-time" },
        "qualityStatus": {
          "type": "string",
          "enum": ["draft", "fact_check_pending", "editorial_approved", "needs_update", "flagged"]
        },
        "seoStatus": {
          "type": "string",
          "enum": ["not_optimized", "needs_review", "optimized", "top_ranking"]
        },
        "seo": {
          "type": "object",
          "required": ["focusKeyword", "seoTitle", "seoDescription", "canonicalUrl"],
          "properties": {
            "focusKeyword": { "type": "string" },
            "seoTitle": { "type": "string", "maxLength": 70 },
            "seoDescription": { "type": "string", "maxLength": 165 },
            "canonicalUrl": { "type": "string", "format": "uri" },
            "robotsIndex": { "type": "boolean" },
            "robotsFollow": { "type": "boolean" }
          }
        }
      }
    },
    "blocks": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "type", "order", "data"],
        "properties": {
          "id": { "type": "string" },
          "type": {
            "type": "string",
            "enum": [
              "tldr_answer_first",
              "key_takeaways",
              "context_boundary",
              "problem_symptoms",
              "localmate_pov",
              "evidence_verification",
              "real_example_scenario",
              "comparison_table",
              "cost_breakdown_table",
              "checklist",
              "step_by_step",
              "decision_tree",
              "common_mistakes",
              "warning_box",
              "when_not_to_do",
              "action_plan",
              "faq",
              "sources_citations",
              "related_services_cta",
              "related_posts",
              "rich_text"
            ]
          },
          "order": { "type": "integer", "minimum": 1 },
          "visible": { "type": "boolean", "default": true },
          "data": { "type": "object" }
        }
      }
    }
  }
}
```

---

## 5. Ví Dụ Bài Viết Mẫu Hoàn Chỉnh (Full Production Example JSON)

Dưới đây là bản ghi thực tế của một bài viết hoàn chỉnh áp dụng đầy đủ Article Metadata và hệ thống Content Blocks linh hoạt:

```json
{
  "version": "2.0",
  "metadata": {
    "id": 3,
    "uuid": "post_seed_web_cost_2026",
    "title": "Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì? (Bóc tách minh bạch)",
    "slug": "chi-phi-lam-website-doanh-nghiep-nho-2026",
    "excerpt": "Bóc tách chi tiết từng khoản chi phí làm website doanh nghiệp nhỏ 2026: tên miền, hosting cloud, phí thiết kế và phí duy trì hàng năm để tránh bị bẫy đòi tiền vô lý.",
    "featuredImageUrl": "https://pub-r2.localmate.vn/media/articles/chi-phi-lam-web-sme-2026.webp",
    "status": "published",
    "pillarId": 3,
    "contentType": "cost_breakdown",
    "articlePurpose": "cost_estimation",
    "searchIntent": "BOFU_transactional",
    "targetPersona": "local_store_owner",
    "primaryQuestion": "Chi phí làm website doanh nghiệp nhỏ trọn gói năm 2026 là bao nhiêu?",
    "secondaryQuestions": [
      "Chi phí duy trì website mỗi năm là bao nhiêu?",
      "Web 500k hay web miễn phí có xài được không?",
      "Ai sẽ là người đứng tên sở hữu tên miền?"
    ],
    "uniqueAngle": "Công khai chi phí hạ tầng thật và cảnh báo cái bẫy 'web 500k nhưng đòi 3 triệu phí gia hạn mỗi năm'.",
    "experienceNotes": "Hơn 65% khách hàng chuyển về LocalMate trước đó đã bị đơn vị thiết kế cũ giam tên miền hoặc đòi phí sửa lỗi vô lý.",
    "evidenceRequired": [
      "Bảng giá niêm yết tên miền VNNIC",
      "Hóa đơn hosting Cloudflare/Vercel",
      "Hợp đồng bàn giao mã nguồn trọn đời"
    ],
    "author": {
      "id": 1,
      "name": "Nguyễn Hoàng Minh",
      "role": "Trưởng phòng Kỹ thuật & Giải pháp Số LocalMate",
      "bio": "Hơn 8 năm kinh nghiệm xây dựng hệ thống website và hạ tầng chuyển đổi cho hơn 120 doanh nghiệp SME tại TP.HCM."
    },
    "reviewedBy": {
      "name": "Lê Quốc Bảo",
      "role": "Chuyên gia Tư vấn Chuyển đổi số Doanh nghiệp",
      "credentials": "Cố vấn chiến lược công nghệ SME",
      "reviewed_at": "2026-09-12T09:00:00Z"
    },
    "firstPublishedAt": "2026-03-01T08:00:00Z",
    "updatedAt": "2026-09-16T15:00:00Z",
    "factCheckedAt": "2026-09-10T10:00:00Z",
    "qualityStatus": "editorial_approved",
    "seoStatus": "top_ranking",
    "readingTime": "6 phút đọc",
    "wordCount": 1850,
    "seo": {
      "focusKeyword": "chi phí làm website doanh nghiệp nhỏ",
      "seoTitle": "Chi Phí Làm Website Doanh Nghiệp Nhỏ 2026: Bóc Tách Chi Tiết & Minh Bạch",
      "seoDescription": "Bóc tách minh bạch chi phí làm website doanh nghiệp nhỏ 2026: tên miền, hosting, thiết kế và phí duy trì hàng năm. Tránh bẫy web giá rẻ bị đòi phí phát sinh.",
      "canonicalUrl": "https://localmate.vn/kien-thuc/chi-phi-lam-website-doanh-nghiep-nho-2026",
      "robotsIndex": true,
      "robotsFollow": true
    }
  },
  "blocks": [
    {
      "id": "block_tldr_01",
      "type": "tldr_answer_first",
      "order": 1,
      "data": {
        "title": "Tóm Tắt Nhanh Trong 30 Giây (TL;DR)",
        "summary": "Năm 2026, chi phí hợp lý để sở hữu một website giới thiệu doanh nghiệp nhỏ hoàn chỉnh dao động từ 1.500.000đ đến 4.500.000đ (trọn gói năm đầu). Chi phí duy trì từ năm thứ 2 trở đi chỉ từ 300.000đ - 700.000đ/năm tiền tên miền.",
        "highlightPoint": "Tuyệt đối không sử dụng 'Web 500k trọn gói' vì chắc chắn bạn sẽ bị giữ con tin tên miền và đòi phí gia hạn máy chủ từ 2 - 4 triệu mỗi năm sau đó.",
        "actionAdvice": "Luôn tự tay đăng ký tên miền chính chủ trên tài khoản của bạn trước khi thuê bất kỳ ai thiết kế web.",
        "readingTimeSeconds": 30
      }
    },
    {
      "id": "block_takeaways_02",
      "type": "key_takeaways",
      "order": 2,
      "data": {
        "title": "4 Điểm Cốt Lõi Chủ Tiệm Cần Nhớ",
        "items": [
          {
            "id": "kt_1",
            "text": "Website có 3 cấu phần chi phí: Tên miền (bắt buộc trả hàng năm), Nơi lưu trữ (Hosting/Cloud) và Tiền công thiết kế (trả 1 lần).",
            "badge": "Cốt lõi"
          },
          {
            "id": "kt_2",
            "text": "Với công nghệ Serverless hiện đại (Cloudflare), chi phí hosting cho web SME chỉ bằng 0đ hoặc dưới 100k/tháng.",
            "badge": "Tiết kiệm"
          },
          {
            "id": "kt_3",
            "text": "Quyền sở hữu mã nguồn và quyền quản trị DNS tên miền là 2 tài sản bạn bắt buộc phải cầm trong tay.",
            "badge": "Sống còn"
          }
        ]
      }
    },
    {
      "id": "block_pov_03",
      "type": "localmate_pov",
      "order": 3,
      "data": {
        "title": "Góc Nhìn LocalMate: Mặt Trái Của Web Giá Rẻ",
        "marketMyth": "Nhiều bên quảng cáo 'Làm website chỉ 500k trọn đời, tặng kèm tên miền và hosting miễn phí'.",
        "realityCheck": "Không ai có thể nuôi máy chủ và duy trì tên miền cho bạn với giá 500k. Đây là chiêu 'thả con săn sắt bắt con cá rô'. Sang năm thứ hai, họ sẽ khóa web và báo giá gia hạn 3.500.000đ. Nếu không đóng, bạn mất sạch dữ liệu và mất luôn tên miền thương hiệu.",
        "localmateStance": "LocalMate cam kết tách bạch hoàn toàn: Tên miền khách hàng tự đứng tên chính chủ; mã nguồn bàn giao trọn đời không mã hóa khóa cửa; không thu phí bảo trì nếu khách không có yêu cầu phát sinh mới.",
        "transparencyNote": "Minh bạch chi phí là nền tảng để hợp tác kinh doanh lâu dài với doanh nghiệp địa phương."
      }
    },
    {
      "id": "block_cost_table_04",
      "type": "cost_breakdown_table",
      "order": 4,
      "data": {
        "title": "Bảng Bóc Tách Chi Phí Làm Website Chuẩn Năm 2026",
        "description": "Chi phí thực tế cho một trang web giới thiệu dịch vụ địa phương hoàn chỉnh",
        "currency": "VND",
        "items": [
          {
            "id": "c1",
            "category": "Tài sản cố định",
            "item": "Tên miền Quốc tế (.com / .net)",
            "minPrice": "280.000",
            "maxPrice": "350.000",
            "period": "yearly",
            "isMandatory": true,
            "notes": "Đăng ký trực tiếp tại đại lý VNNIC (Mắt Bão, PA, iNET)"
          },
          {
            "id": "c2",
            "category": "Tài sản cố định",
            "item": "Tên miền Quốc gia (.vn)",
            "minPrice": "550.000",
            "maxPrice": "750.000",
            "period": "yearly",
            "isMandatory": false,
            "notes": "Được pháp luật VN bảo vệ thương hiệu cao nhất"
          },
          {
            "id": "c3",
            "category": "Hạ tầng lưu trữ",
            "item": "Cloud Serverless (Cloudflare / Edge)",
            "minPrice": "0",
            "maxPrice": "250.000",
            "period": "yearly",
            "isMandatory": true,
            "notes": "Tốc độ tải dưới 1 giây, miễn phí chứng chỉ bảo mật SSL HTTPS trọn đời"
          },
          {
            "id": "c4",
            "category": "Thiết kế & Lập trình",
            "item": "Công thiết kế giao diện & Tối ưu chuyển đổi",
            "minPrice": "1.200.000",
            "maxPrice": "3.500.000",
            "period": "one-time",
            "isMandatory": true,
            "notes": "Bao gồm responsive di động, nút gọi điện thoại/Zalo, chuẩn SEO"
          }
        ],
        "totalEstimatedMin": "1.480.000",
        "totalEstimatedMax": "4.500.000",
        "hiddenCostsWarning": [
          "Phí đổi logo/số điện thoại sau khi bàn giao (nhiều nơi đòi 200k-500k/lần)",
          "Phí gia hạn hosting năm thứ 2 bị đẩy lên gấp 3-5 lần giá trị thực",
          "Phí cấp lại mã bảo mật SSL (thực chất Let's Encrypt cấp miễn phí)"
        ]
      }
    },
    {
      "id": "block_decision_tree_05",
      "type": "decision_tree",
      "order": 5,
      "data": {
        "title": "Cây Quyết Định: Doanh Nghiệp Bạn Nên Chọn Loại Website Nào?",
        "description": "Bấm chọn Yes hoặc No theo tình hình thực tế của tiệm để nhận khuyến nghị chính xác",
        "startNodeId": "q1",
        "nodes": [
          {
            "id": "q1",
            "question": "Bạn bán dịch vụ tư vấn (như spa, sửa chữa, xây dựng, nha khoa) hay bán hàng trăm mặt hàng cần giỏ hàng online?",
            "yesConclusion": "Chọn Website Giới Thiệu & Chốt Lead (Landing Page): Tinh gọn, tải nhanh, tập trung chuyển đổi cuộc gọi/Zalo.",
            "noNextNodeId": "q2",
            "recommendedServiceSlug": "thiet-ke-website"
          },
          {
            "id": "q2",
            "question": "Bạn có nhân sự chuyên trách vận hành kho hàng và xử lý thanh toán trực tuyến mỗi ngày không?",
            "yesConclusion": "Chọn Sàn TMĐT (Shopee/TikTok Shop) hoặc Website E-Commerce chuyên dụng (Haravan/Shopify).",
            "noConclusion": "Nên bắt đầu với Website Giới Thiệu Sản Phẩm kèm nút đặt hàng nhanh qua Zalo để tiết kiệm 80% chi phí vận hành."
          }
        ]
      }
    },
    {
      "id": "block_warning_06",
      "type": "warning_box",
      "order": 6,
      "data": {
        "level": "danger",
        "title": "CẢNH BÁO QUAN TRỌNG: Mất Quyền Kiểm Soát Tên Miền",
        "content": "Khi ký hợp đồng làm web, hãy yêu cầu ghi rõ: Tên miền phải được đăng ký bằng Số CMND/CCCD hoặc Mã số thuế của chính bạn. Nếu bên thiết kế đăng ký bằng tài khoản cá nhân của họ, sau này họ có toàn quyền sang nhượng hoặc tống tiền bạn khi thương hiệu phát triển.",
        "actionRequired": "Kiểm tra ngay chủ sở hữu tên miền của bạn tại trang tra cứu whois.inet.vn hoặc vnnic.vn."
      }
    },
    {
      "id": "block_faq_07",
      "type": "faq",
      "order": 7,
      "data": {
        "title": "Câu Hỏi Thường Gặp Về Chi Phí Website",
        "enableSchemaOrg": true,
        "items": [
          {
            "id": "faq_1",
            "question": "Làm website xong tôi có phải đóng phí duy trì hàng tháng không?",
            "answer": "Không. Với kiến trúc Cloud Serverless hiện đại mà LocalMate triển khai, website không tốn phí duy trì hàng tháng. Bạn chỉ đóng phí gia hạn tên miền 1 lần duy nhất mỗi năm cho nhà mạng (khoảng 300.000đ/năm)."
          },
          {
            "id": "faq_2",
            "question": "Sau khi bàn giao, tôi muốn tự sửa chữ và thay ảnh có dễ không?",
            "answer": "Rất dễ dàng. Hệ thống LocalMate CMS cung cấp trang quản trị trực quan tiếng Việt, bạn có thể tự thay số điện thoại, đổi giá dịch vụ và đăng bài viết mới chỉ trong 2 phút từ điện thoại."
          }
        ]
      }
    },
    {
      "id": "block_cta_08",
      "type": "related_services_cta",
      "order": 8,
      "data": {
        "serviceSlug": "thiet-ke-website",
        "badge": "Giải Pháp Minh Bạch LocalMate",
        "headline": "Sở Hữu Website Doanh Nghiệp Tinh Gọn — Không Chi Phí Ẩn",
        "description": "Gói thiết kế website trọn gói chuẩn SEO, tốc độ dưới 1s, kết nối hotline/Zalo chốt khách ngay tức thì.",
        "deliverables": [
          "Bàn giao 100% mã nguồn và quyền sở hữu tên miền chính chủ",
          "Tốc độ tải trang cực nhanh trên nền tảng Cloudflare Edge",
          "Miễn phí hướng dẫn sử dụng và hỗ trợ kỹ thuật trực tiếp"
        ],
        "pricingHint": "Trọn gói từ 1.890.000đ — Không phát sinh chi phí hàng tháng",
        "primaryButtonText": "Xem Báo Giá Trọn Gói Chi Tiết",
        "primaryButtonUrl": "/thiet-ke-website",
        "secondaryButtonText": "Tư Vấn Miễn Phí Qua Zalo",
        "secondaryButtonUrl": "https://zalo.me/0900000000"
      }
    },
    {
      "id": "block_sources_09",
      "type": "sources_citations",
      "order": 9,
      "data": {
        "title": "Tài Liệu Tham Khảo & Nguồn Kiểm Chứng",
        "citations": [
          {
            "id": "cite_1",
            "title": "Bảng biểu mức thu phí duy trì tên miền quốc gia .VN",
            "publisherOrAuthor": "Trung tâm Internet Việt Nam (VNNIC - Bộ TT&TT)",
            "url": "https://vnnic.vn/bieumucphi",
            "datePublishedOrAccessed": "2026-01-15",
            "sourceType": "legal"
          },
          {
            "id": "cite_2",
            "title": "Báo cáo Tốc độ Trang web & Tỷ lệ Chuyển đổi Khách hàng SME",
            "publisherOrAuthor": "Google Web Vitals Research",
            "url": "https://web.dev/vitals/",
            "datePublishedOrAccessed": "2026-02-01",
            "sourceType": "official_doc"
          }
        ]
      }
    }
  ]
}
```

---

## 6. Hướng Dẫn Tích Hợp Vào CMS & Renderer

### 6.1. Lưu trữ trong Cloudflare D1
Cấu trúc cơ sở dữ liệu `cms_posts` đã có sẵn các trường:
- `brief_json`: Lưu toàn bộ Article-level Metadata mở rộng (Purpose, Intent, Persona, Author, Reviewer, Fact-check...).
- `content_json`: Có thể lưu mảng `blocks` của `ArticleDocument` (hoặc Tiptap JSON).
- `schema_json`: Tự động trích xuất và lưu cấu trúc JSON-LD (FAQPage, HowTo) để Worker render trực tiếp vào thẻ `<head>` khi bot Google crawl mà không tốn tài nguyên runtime.
- `rendered_html`: HTML tĩnh được biên dịch sẵn từ các block để phục vụ Instant Page Load (< 50ms) cho người dùng cuối.

### 6.2. Mapping với UI Blocks Renderer
Tại Frontend (`src/pages/PostPreviewPage.tsx` hoặc trang đọc bài `/kien-thuc/:slug`), hệ thống phân giải danh sách `blocks` thông qua switch-case component:

```tsx
export const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'tldr_answer_first':
      return <TldrBlockView data={block.data} />;
    case 'key_takeaways':
      return <KeyTakeawaysBlockView data={block.data} />;
    case 'cost_breakdown_table':
      return <CostTableBlockView data={block.data} />;
    case 'comparison_table':
      return <ComparisonTableBlockView data={block.data} />;
    case 'decision_tree':
      return <DecisionTreeBlockView data={block.data} />;
    case 'faq':
      return <FaqBlockView data={block.data} />;
    case 'related_services_cta':
      return <RelatedServiceCtaView data={block.data} />;
    // ... các block còn lại
    default:
      return null;
  }
};
```

---

## 7. Quy Tắc Thẩm Định & Nghiệm Thu (Definition of Done)

Khi tạo bài viết mới hoặc review bài viết cũ trên LocalMate CMS, người biên tập phải kiểm tra:
1. **Có khối TL;DR không?** Nếu thiếu câu trả lời trực diện đầu bài, bài viết bị hạ điểm chất lượng.
2. **Có dữ liệu POV và Cảnh báo rủi ro không?** Bài viết phải có ít nhất 1 góc nhìn bóc trần mặt trái thị trường.
3. **Có Fact-checked Date không?** Ngày kiểm tra thực tế không được quá 6 tháng so với hiện tại.
4. **Contextual CTA có khớp Search Intent không?** Bài TOFU/MOFU chỉ dẫn về tư vấn/báo giá minh bạch, không ép mua hàng thô bạo.
5. **Giao diện sáng sủa:** Không dùng hiệu ứng mờ ảo (glassmorphism); văn bản hiển thị rõ nét trên màn hình điện thoại dưới ánh sáng mặt trời.
