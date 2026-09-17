# 🏛️ EXECUTIVE AUDIT REPORT — CONTENT ENGINE V2 (RED-TEAM SSOT)
**Hệ thống:** LocalMate Knowledge Hub & Commercial Content Architecture  
**Thẩm định bởi:** Master Agent (Hợp nhất 10 Chuyên gia Subagents độc lập)  
**Ngày hoàn thành:** 17/09/2026  
**Trạng thái hệ thống:** Đã kiểm toán toàn diện 30/30 bài viết, CMS, Router, Schema, Rendering & Link Graph.

---

## 1. TỔNG QUAN ĐIỀU HÀNH (EXECUTIVE SUMMARY)

Vòng tái cấu trúc trước đó đã hoàn thành một khối lượng công việc đáng ghi nhận: loại bỏ stubs, đưa 30 bài về cùng cấu trúc, tích hợp hệ thống CMS và vượt qua build production. Tuy nhiên, qua lăng kính **Red-Team độc lập từ 10 Subagents chuyên biệt**, hệ thống lộ diện một sự thật quan trọng: **Nội dung hiện tại đang được viết để "đối phó với rubric kiểm tra" (AI-Gaming) chứ chưa sẵn sàng để cạnh tranh trên SERP thực tế, chưa tạo được phễu chuyển đổi lead và tiềm ẩn nhiều rủi ro kỹ thuật nghiêm trọng.**

### 5 Phát hiện cốt lõi từ 10 Subagents:
1. **Ảo giác hoàn thành (The 625-word Illusion):** Bình quân 625 từ/bài thực chất bị "pha loãng" bởi mở bài TLDR rập khuôn (~100 từ) và khối CTA quảng cáo máy móc ở cuối bài (~70 từ). Substance (hàm lượng nghiệp vụ hữu ích thực tế) chỉ đạt **280 – 350 từ/bài**. 5 bài thậm chí dưới 500 từ.
2. **Nhà máy dập khuôn (AI Industrial Template Cadence):** 100% bài mở đầu bằng `**Trả lời nhanh (Answer First):**`, 100% bài có đúng 1 thẻ `<table>` mang tính hình thức, 100% bài kết thúc bằng đoạn rao vặt giống hệt nhau. 25/30 bài không nhắc tới một địa danh, bối cảnh thực tế hay tên phố nào tại Việt Nam.
3. **Đứt gãy chuyển đổi (The Conversion Fracture):** Dù 30/30 bài có dẫn link về giải pháp, toàn bộ chỉ là hyperlink chữ thường chìm nghỉm ở đáy bài (0 nút bấm CTA, 0 form đăng ký tư vấn, 0 tài liệu mồi/checklist, 0 hotline/Zalo trực tiếp). Tỷ lệ rơi rụng khách tiềm năng ước tính > 98%.
4. **Lỗ hổng kỹ thuật On-Page & Indexability (P0 Blockers):** 
   - Lỗi nhân đôi Title Tag (`... | LocalMate | LocalMate`) trên 100% bài viết.
   - Regex băm nát Meta Description làm mất từ khóa chủ ngữ và cắt cụt câu giữa chừng.
   - Schema `Article` bị rỗng ngày tháng (`datePublished: ""`) và thiếu thuộc tính `image` bắt buộc của Google.
   - Lỗ hổng token ở API Preview khiến bất kỳ ai cũng cào được bài Draft qua ID tuần tự.
   - Lỗi Soft-404: `App.tsx` trả về `HomePage` (HTTP 200) cho mọi URL hỏng.
   - 2 Bài viết mồ côi (Orphan Articles): Bài 06 và Bài 13 (Topic Pillar cốt lõi) có 0 liên kết nội bộ trỏ đến.
5. **Khủng hoảng bằng chứng (Evidence Crisis):** Toàn bộ 30 bài có **0 liên kết ngoài (External Citations)** dẫn tới tài liệu chính thống (Google, VNNIC, Bộ Công Thương). Tồn tại 14 phát ngôn không có căn cứ (Fake precision, con số % tự bịa, dọa thuật toán Penguin cũ rích từ 2012).

---

## 2. CHỈ SỐ SỨC KHỎE HỆ THỐNG TỔNG THỂ (OVERALL SYSTEM HEALTH)

| Trụ cột đánh giá | Điểm số (1-100) | Đánh giá hiện trạng | Điểm nghẽn lớn nhất |
| :--- | :---: | :---: | :--- |
| **1. Content Quality & Depth** | **52 / 100** | Trung bình yếu | Thiếu substance thực tế, mở bài & kết bài rập khuôn, 5 bài quá mỏng (< 500 từ). |
| **2. Search Intent & SERP Fit** | **58 / 100** | Trung bình | Định dạng bài blog text thuần không đáp ứng được SERP 2026 (thiếu calculator, checklist sheet). |
| **3. On-Page SEO** | **46 / 100** | Yếu (Báo động) | Nhân đôi Title tag, vỡ Meta Description, Schema rỗng ngày tháng, 100% Title bị cắt cụt. |
| **4. GEO & AI Citation Readiness**| **63.8 / 100**| Khá | Có Answer First nhưng bị lỗi Zombie chunks, thiếu freshness 2026, thiếu Entity rõ ở đầu câu. |
| **5. E-E-A-T & Evidence** | **41 / 100** | Yếu (Báo động) | 0 link dẫn nguồn, 14 claims số liệu ảo, chưa render Author/Reviewer trust credentials. |
| **6. Topical Link Architecture** | **54 / 100** | Trung bình | 2 bài mồ côi (Bài 06, Bài 13), chuỗi lặp khép kín Cụm 1 bẫy PageRank, bỏ quên các landing page chính. |
| **7. Local SEO & Commercial Fit** | **50 / 100** | Trung bình | Chưa gắn bối cảnh thực tế SME VN (Zalo, Hotline, ngõ ngách), bài viết biến thành lý thuyết suông. |
| **8. Content UX & CRO** | **48 / 100** | Yếu | CSS `.article-rendered-body` bị thiếu, bảng tràn mobile, 0 CTA tương tác, thiếu FAQ UI. |
| **9. Technical & Indexability** | **55 / 100** | Trung bình yếu | Hở endpoint preview draft, Soft-404 SPA, robots.txt sai RFC 9309, thiếu prerender cho bot. |
| **10. Portfolio Economics** | **65 / 100** | Khá | Đã có taxonomy rõ ràng, cần tinh gọn 30 bài thành 24 URLs mạnh mẽ hoặc mở rộng chiều sâu. |
| **TOÀN HỆ THỐNG TRUNG BÌNH** | **53.3 / 100** | **CẦN TỐI ƯU CẤP BÁCH TRƯỚC KHI INDEX** | **Phải xử lý triệt để nhóm P0 và P1.** |

---

## 3. TOP 25 VẤN ĐỀ CÓ TÁC ĐỘNG LỚN NHẤT (THE TOP 25 IMPACT ISSUES)

| STT | Issue ID | Mức độ | Vấn đề & Bằng chứng thực tế | Nguyên nhân gốc rễ (Root Cause) | Giải pháp đề xuất | Độ phức tạp | Files bị ảnh hưởng |
| :---: | :---: | :---: | :--- | :--- | :--- | :---: | :--- |
| **1** | **TECH-01** | **P0** | **Lỗi nhân đôi Title Tag `\| LocalMate \| LocalMate`** trên cả 30 bài viết. | `ArticleDetailPage.tsx` dòng 83 tự nối thêm `\| LocalMate` trong khi CMS đã có sẵn đuôi này. | Xóa đoạn nối chuỗi thủ công trong `ArticleDetailPage.tsx`, để `SEOHead` xử lý chuẩn hóa. | Low | `src/pages/ArticleDetailPage.tsx` |
| **2** | **TECH-02** | **P0** | **Meta Description bị xóa sạch từ khóa chủ ngữ và cắt cụt giữa chừng câu.** | Regex `r.replace(/\*\*.*?\*\*/g, '')` trong `apply-rewritten-content.cjs` xóa mất từ in đậm đầu câu và substr(0, 155). | Viết lại logic sinh snippet: bóc tách text thuần, giữ nguyên danh từ thực thể, cắt tại dấu chấm tròn câu. | Medium | `scripts/apply-rewritten-content.cjs`, `content/seeds/drafts_30_articles.json` |
| **3** | **TECH-03** | **P0** | **Schema `Article` bị rỗng ngày tháng (`datePublished: ""` và `dateModified: ""`).** | Dữ liệu seed trong JSON thiếu trường `published_at` và `updated_at`. | Bổ sung timestamp ISO chuẩn xác vào seed JSON và logic fallback trong `ArticleDetailPage.tsx`. | Low | `content/seeds/drafts_30_articles.json`, `src/pages/ArticleDetailPage.tsx` |
| **4** | **TECH-04** | **P0** | **Hở Token bảo vệ bài Draft tại API `/api/public/preview/:id`.** Bất kỳ ai cũng crawl được 30 bài draft qua ID tuần tự. | Endpoint `publicContent.ts` nhận query param `token` nhưng không thực hiện kiểm tra logic xác thực. | Yêu cầu xác thực Bearer token hoặc hash secret hợp lệ mới cho phép đọc bài status 'draft'. | Medium | `functions/api/routes/publicContent.ts` |
| **5** | **TECH-05** | **P0** | **Hiểm họa Soft-404 trên toàn bộ website.** Truy cập URL sai trả về `HomePage` với mã 200 OK. | `App.tsx` không có route bắt 404, fallback render `<HomePage />`. | Tạo component `NotFoundPage` với thẻ `noindex` và phản hồi chuẩn 404 cho crawler. | Medium | `src/App.tsx`, `src/pages/NotFoundPage.tsx` |
| **6** | **TECH-06** | **P0** | **`robots.txt` vi phạm RFC 9309:** Bot bỏ qua khối `*` khiến Googlebot và AI Bot không hề bị chặn ở `/admin/` và `/api/`. | Khai báo các khối riêng (`User-agent: Googlebot`) chỉ có `Allow: /` mà không kế thừa `Disallow: /admin/`. | Cấu trúc lại `robots.txt` chuẩn RFC: Khối riêng phải lặp lại đầy đủ các dòng `Disallow: /admin/`, `Disallow: /preview/`. | Low | `public/robots.txt` |
| **7** | **SEO-01** | **P0** | **2 Bài viết Mồ côi (Orphan Pages): Bài 06 và Bài 13 (Pillar Cụm 3) có 0 liên kết trỏ đến.** | Phân bổ internal link theo kiểu chuỗi xích đơn luồng (Daisy chain), bỏ sót bài 06 và 13. | Bổ sung liên kết ngữ cảnh từ Bài 01, 02 sang Bài 06; từ Bài 07, 18 sang Bài 13. | Low | `content/seeds/drafts_30_articles.json`, `scripts/batches/` |
| **8** | **UX-01** | **P0** | **Class `.article-rendered-body` không được định nghĩa trong CSS.** Bài viết từ CMS bị thả nổi giao diện. | Quên khai báo stylesheet cho nội dung HTML do CMS render. | Bổ sung bộ quy tắc CSS hoàn chỉnh cho `.article-rendered-body` (typography, line-height, tables, lists). | Medium | `src/index.css` hoặc `src/pages/ArticleDetailPage.css` |
| **9** | **UX-02** | **P0** | **Bảng so sánh bị tràn khung ngang (Horizontal Overflow) trên màn hình mobile 390px/430px.** | Thẻ `<table>` do Tiptap xuất ra không có thẻ bọc `div` với thuộc tính `overflow-x: auto`. | Thêm container bọc bảng trong renderer hoặc CSS `display: block; overflow-x: auto; width: 100%`. | Low | `src/index.css`, `src/pages/ArticleDetailPage.tsx` |
| **10** | **EEAT-01**| **P0** | **Toàn bộ 30 bài có 0 External Authority Citations.** Thiếu tín hiệu kiểm chứng của Google E-E-A-T. | Quá trình rewrite trước đó tập trung vào internal links mà xóa sạch nguồn dẫn ngoài. | Nhúng có chọn lọc 14 External Citations uy tín (Google Search Central, Google Business Profile, VNNIC). | Medium | `content/seeds/drafts_30_articles.json`, `scripts/batches/` |
| **11** | **EEAT-02**| **P0** | **Tồn tại 14 tuyên bố không có căn cứ (Fake Precision & Số liệu ảo).** | Sử dụng văn phong AI giật tít ("giảm 40% chi phí", "Penguin phạt", "90% tiệm dùng sổ tay"). | Xóa bỏ hoặc chuyển đổi nhãn sang "Quan sát thực địa LocalMate" / "Ví dụ minh họa ước tính". | Medium | `content/seeds/drafts_30_articles.json` |
| **12** | **CRO-01** | **P1** | **Đứt gãy chuyển đổi (The Conversion Fracture): 0 nút bấm CTA, 0 form đăng ký nhanh trong toàn bộ bài viết.** | Kết bài chỉ có dòng text thuần chìm nghỉm, không có Action block rõ ràng. | Tích hợp **CTA Banner 2 tầng**: Tầng 1 là Form audit/Ước tính chi phí nhanh, Tầng 2 là Hotline & Zalo trực tiếp. | Medium | `src/pages/ArticleDetailPage.tsx` |
| **13** | **CRO-02** | **P1** | **Sidebar CMS bị "mù" dịch vụ tương ứng (`targetService = undefined`).** | `ArticleDetailPage.tsx` chỉ map dịch vụ cho static article, bài từ CMS bị fallback chung chung. | Viết hàm ánh xạ tự động từ `category_slug` của CMS Post sang dịch vụ phù hợp để hiển thị card tư vấn chuẩn. | Low | `src/pages/ArticleDetailPage.tsx` |
| **14** | **SEO-02** | **P1** | **100% Title bài viết bị cắt cụt (Truncated) trên SERP Desktop và Mobile (> 580px / 80-100 ký tự).** | Tiêu đề quá dài và lặp từ khóa "doanh nghiệp nhỏ" không cần thiết. | Tối ưu lại toàn bộ 30 thẻ `seo_title` trong khoảng 50 - 60 ký tự, giữ từ khóa trọng tâm ở đầu. | Medium | `content/seeds/drafts_30_articles.json` |
| **15** | **GEO-01** | **P1** | **Zombie Chunks: 11 câu lead-in cụt (< 25 từ) làm loãng vector embedding trong RAG.** | Các câu nối vô nghĩa trước bảng như "Hãy xem xét bảng đối chiếu sau đây:". | Viết lại câu giới thiệu chứa trọn vẹn thông tin kết luận và thực thể chính trước khi vào bảng/list. | Medium | `content/seeds/drafts_30_articles.json` |
| **16** | **CONTENT-01**| **P1**| **Mở bài rập khuôn `**Trả lời nhanh (Answer First):**` trên 100% bài viết gây AI Cadence.** | Áp dụng công thức máy móc mà không biến đổi ngữ điệu tự nhiên theo từng chủ đề. | Đa dạng hóa câu mở đầu, đưa trực tiếp kết luận hoặc định nghĩa thực thể mà không cần dán nhãn cứng nhắc. | Medium | `content/seeds/drafts_30_articles.json` |
| **17** | **CONTENT-02**| **P1**| **5 Bài viết bị mỏng nội dung nghiêm trọng (< 500 từ: Bài 14, 21, 26, 28, 29).** | Viết tóm tắt sơ sài, thiếu ví dụ thực tế và phương án xử lý sự cố. | Mở rộng nội dung các bài này lên tối thiểu 800 - 1.100 từ với quy trình từng bước và bảng tính chi tiết. | High | `content/seeds/drafts_30_articles.json` |
| **18** | **CONTENT-03**| **P1**| **Lệch số liệu ở Bài 06: Slug ghi "10 lỗi" nhưng thân bài chỉ có 6 lỗi.** | Thiếu kiểm soát chất lượng outline giữa slug và nội dung bài viết. | Bổ sung thêm 4 lỗi thực tế chí mạng của website doanh nghiệp nhỏ để khớp hoàn toàn 10 lỗi. | Medium | `content/seeds/drafts_30_articles.json`, `scripts/batches/batch-2.cjs` |
| **19** | **IA-01**   | **P1** | **Bẫy chuỗi xích khép kín Cụm 1 (Daisy Chain Trap) giam hãm PageRank.** | Bài 01->02->03->04->05->01 không tỏa liên kết sang Cụm Google Maps và Cụm Local SEO. | Phá vỡ vòng lặp: Thêm liên kết ngang từ Bài 03 sang Bài 07 (Maps) và từ Bài 05 sang Bài 19 (Ads). | Low | `content/seeds/drafts_30_articles.json` |
| **20** | **SCHEMA-01**| **P1**| **Article Schema thiếu thuộc tính bắt buộc `image` theo quy chuẩn Google Rich Results.** | `SEOHead.tsx` không truyền mảng image URL đầy đủ cho schema `Article`. | Thêm trường `image: [canonical_image_url]` vào JSON-LD của Article trong `SEOHead.tsx`. | Low | `src/components/seo/SEOHead.tsx` |
| **21** | **LOCAL-01**| **P1** | **12/30 bài thiếu bối cảnh thực địa địa phương (TP.HCM, Hà Nội, Đà Nẵng, quận/huyện).** | Viết theo văn phong dịch thuật quốc tế chung chung, thiếu góc nhìn SME Việt Nam. | Bổ sung ví dụ thực tế tại các quận/huyện (Quận 7, Bình Thạnh, Cầu Giấy, Hải Châu) và thói quen gọi Zalo/Hotline. | Medium | `content/seeds/drafts_30_articles.json` |
| **22** | **UX-03**   | **P2** | **Dữ liệu FAQs có sẵn trong `articlesData.ts` nhưng không được render ra giao diện.** | Thiếu component Accordion FAQ trong `ArticleDetailPage.tsx`. | Xây dựng FAQ Accordion chuẩn Light Mode ở cuối bài để tăng time-on-page và ăn FAQ Rich Snippets. | Medium | `src/pages/ArticleDetailPage.tsx` |
| **23** | **TECH-07** | **P2** | **Kiến trúc SPA React thuần khiến các Bot không chạy JS (Zalo, Facebook, AI Scrapers) chỉ đọc được trang trắng.** | Cloudflare Pages phục vụ `index.html` tĩnh chưa qua SSR/Prerender. | Sử dụng Cloudflare Pages Middleware (`functions/_middleware.ts`) với `HTMLRewriter` inject thẻ meta và content. | High | `functions/_middleware.ts` |
| **24** | **CMS-01**  | **P2** | **CMS thiếu các cột chỉ số sức khỏe thực tế (SEO Health, GEO Health, Evidence Health).** | Giao diện CMS Post List chỉ hiển thị vài chỉ số cơ bản, không giải thích lý do bài viết chưa đạt chuẩn. | Nâng cấp CMS Posts List & Editor với Rule-Derived Health Checks hiển thị cụ thể lý do Pass/Fail. | Medium | `src/admin/pages/PostsListPage.tsx`, `src/admin/editor/PostEditorPage.tsx` |
| **25** | **GAP-01**  | **P2** | **Thiếu hụt Topic Cluster về AI Search & GEO trong 30 bài hạt giống.** | Bộ từ khóa hạt giống được lập từ 2025 chỉ xoay quanh Web, Maps, Ads, thiếu vắng hoàn toàn GEO/AEO. | Lập kế hoạch bổ sung Cụm 5 bài viết chuyên sâu về Tối ưu hiển thị trên ChatGPT Search, Perplexity và Gemini. | High | Kế hoạch V3 |

---

## 4. MA TRẬN ĐÁNH GIÁ 30 BÀI VIẾT (THE 30-ARTICLE MATRIX)

Dưới đây là ma trận kiểm toán độc lập cho toàn bộ 30 bài viết hạt giống.  
*Quy ước Final Action:* **KEEP** (Giữ & Tối ưu nhẹ), **TUNE** (Tinh chỉnh On-page/Entity), **EXPAND** (Mở rộng dung lượng & chiều sâu), **REWRITE** (Viết lại cấu trúc), **MERGE** (Gộp vào bài lớn hơn), **REPURPOSE** (Chuyển đổi thành Tool/Checklist/Landing Page), **HOLD** (Tạm hoãn publish).

| ID | Slug | Cụm chủ đề | Search Intent | Chất lượng nội dung | SEO Score | GEO Score | Bằng chứng (E-E-A-T) | Liên kết nội bộ | Chuyển đổi (CRO) | Kỹ thuật (Tech) | **Final Action** |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **01** | `website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website` | Nền tảng Website | TOFU (Định nghĩa) | 7.5 / 10 | 6.5 / 10 | 7.2 / 10 | Cấp D (Field Obs) | 3 In / 2 Out | 5.5 / 10 | PASS | **KEEP** (Tối ưu Title) |
| **02** | `lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi` | Nền tảng Website | MOFU (Quy trình) | 7.0 / 10 | 6.0 / 10 | 6.9 / 10 | Cấp C (Industry) | 2 In / 3 Out | 6.5 / 10 | PASS | **REPURPOSE** (Checklist Mẫu) |
| **03** | `chi-phi-lam-website-doanh-nghiep-nho-2026` | Nền tảng Website | BOFU (Báo giá) | 8.0 / 10 | 7.0 / 10 | 6.6 / 10 | Cấp D (Bảng giá chuẩn) | 2 In / 2 Out | 7.5 / 10 | PASS | **REPURPOSE** (Interactive Estimator) |
| **04** | `website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao` | Nền tảng Website | MOFU (Cấu trúc) | 6.0 / 10 | 5.5 / 10 | 6.2 / 10 | Cấp E (Opinion) | 2 In / 2 Out | 5.0 / 10 | PASS | **TUNE** (Đổi góc nhìn 5 trang chốt sale) |
| **05** | `website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao` | Nền tảng Website | MOFU (So sánh) | 7.0 / 10 | 6.5 / 10 | 6.4 / 10 | Cấp D (Bảng so sánh) | 2 In / 2 Out | 6.0 / 10 | PASS | **TUNE** (Phá chuỗi Daisy Chain) |
| **06** | `10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach` | Nền tảng Website | MOFU (Chẩn đoán) | 6.5 / 10 | 5.0 / 10 | 6.1 / 10 | Cấp D (Kinh nghiệm) | **0 In (Orphan)** | 7.0 / 10 | PASS | **EXPAND** (Bổ sung đủ 10 lỗi, giải cứu mồ côi) |
| **07** | `google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z` | Google Maps | TOFU/MOFU Pillar | 8.0 / 10 | 6.5 / 10 | 6.5 / 10 | Cấp A & D | 4 In / 4 Out | 7.0 / 10 | PASS | **KEEP** (Crown Jewel Pillar) |
| **08** | `cach-dua-doanh-nghiep-len-google-maps` | Google Maps | MOFU (Xác minh) | 8.5 / 10 | 7.0 / 10 | 7.1 / 10 | Cấp A (Chuẩn Video 2026) | 3 In / 2 Out | 6.5 / 10 | PASS | **KEEP** (Tối ưu Passage Citation) |
| **09** | `cach-toi-uu-google-business-profile-de-khach-de-tim-thay` | Google Maps | MOFU (Tối ưu) | 7.0 / 10 | 6.5 / 10 | 6.4 / 10 | Cấp G (Xóa claim 60%) | 2 In / 2 Out | 6.0 / 10 | PASS | **TUNE** (Xóa số liệu thuật toán ảo) |
| **10** | `vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps` | Google Maps | MOFU (Xử lý lỗi) | 7.0 / 10 | 6.0 / 10 | 6.3 / 10 | Cấp D (Thực tế) | 2 In / 2 Out | 6.5 / 10 | PASS | **TUNE** (Sửa câu mở đầu điều kiện) |
| **11** | `cach-tang-danh-gia-google-maps-dung-cach` | Google Maps | MOFU (Review QR) | 7.5 / 10 | 6.5 / 10 | 6.5 / 10 | Cấp A & D (Chống phạt) | 2 In / 2 Out | 7.0 / 10 | PASS | **KEEP** (Tải template QR miễn phí) |
| **12** | `google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly` | Google Maps | BOFU (Khẩn cấp SOS) | 8.5 / 10 | 7.0 / 10 | 6.5 / 10 | Cấp A (Kháng nghị Google) | 3 In / 2 Out | 8.5 / 10 | PASS | **REPURPOSE** (Emergency Landing Page SOS) |
| **13** | `local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam` | Local SEO | TOFU Pillar Cụm 3 | 7.0 / 10 | 5.0 / 10 | 6.7 / 10 | Cấp C & D | **0 In (Orphan)** | 6.0 / 10 | PASS | **EXPAND** (Giải cứu mồ côi, tăng chiều sâu) |
| **14** | `seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao` | Local SEO | MOFU (So sánh) | 5.5 / 10 | 5.5 / 10 | 6.0 / 10 | Cấp E (Phổ thông) | 1 In / 2 Out | 5.5 / 10 | **476w (Thin)** | **EXPAND** (Mở rộng bảng ma trận chi tiết) |
| **15** | `cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong` | Local SEO | MOFU (Khu vực) | 6.5 / 10 | 6.0 / 10 | 6.2 / 10 | Cấp D (Bán kính) | 2 In / 2 Out | 6.5 / 10 | PASS | **TUNE** (Cảnh báo chống doorway pages) |
| **16** | `entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho` | Local SEO | MOFU (Bóc trần) | 7.5 / 10 | 6.5 / 10 | 6.7 / 10 | Cấp G (Xóa claim Penguin) | 2 In / 2 Out | 6.0 / 10 | PASS | **TUNE** (Cập nhật thuật toán SpamBrain 2026) |
| **17** | `citation-trong-local-seo-la-gi` | Local SEO | TOFU (Học thuật) | 6.5 / 10 | 6.0 / 10 | 6.7 / 10 | Cấp A & C (NAP chuẩn) | 2 In / 2 Out | 5.0 / 10 | PASS | **TUNE** (Chuyển thành Sổ tay tra cứu NAP) |
| **18** | `checklist-local-seo-cho-doanh-nghiep-dia-phuong` | Local SEO | MOFU/BOFU | 8.0 / 10 | 7.0 / 10 | 6.9 / 10 | Cấp D (20 Tiêu chí) | 3 In / 3 Out | 7.5 / 10 | PASS | **REPURPOSE** (Interactive Audit Checklist) |
| **19** | `google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau` | Google Ads | TOFU Pillar Cụm 4 | 7.0 / 10 | 6.5 / 10 | 6.3 / 10 | Cấp D (3 Trụ cột Ads) | 3 In / 2 Out | 6.5 / 10 | PASS | **KEEP** (Pillar nền tảng quảng cáo) |
| **20** | `google-search-ads-hoat-dong-nhu-the-nao` | Google Ads | TOFU (Cơ chế) | 6.0 / 10 | 6.0 / 10 | 6.1 / 10 | Cấp A (Đấu giá Ad Rank) | 2 In / 2 Out | 5.0 / 10 | PASS | **TUNE** (Gắn Ad Rank vào cách hạ tiền click) |
| **21** | `chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly` | Google Ads | BOFU (Ngân sách) | 7.5 / 10 | 6.5 / 10 | 6.2 / 10 | Cấp D (Công thức hòa vốn) | 2 In / 2 Out | 7.5 / 10 | **479w (Thin)** | **EXPAND** (Bổ sung bảng tính hòa vốn chi tiết) |
| **22** | `vi-sao-chay-google-ads-co-click-nhung-khong-co-khach` | Google Ads | BOFU (Bắt bệnh) | 8.0 / 10 | 6.5 / 10 | 6.4 / 10 | Cấp D (Thực chiến chốt sale) | 2 In / 2 Out | 8.0 / 10 | PASS | **KEEP** (Phễu bán Audit Landing Page) |
| **23** | `landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao` | Google Ads | MOFU (Thiết kế) | 8.0 / 10 | 6.5 / 10 | 6.8 / 10 | Cấp D (Cấu trúc 5 tầng) | 2 In / 2 Out | 7.5 / 10 | PASS | **KEEP** (Top Citation Passage) |
| **24** | `google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong` | Google Ads | MOFU (So sánh) | 7.5 / 10 | 6.5 / 10 | 6.4 / 10 | Cấp D (Bảng phễu nhu cầu) | 2 In / 2 Out | 7.0 / 10 | PASS | **KEEP** (Bài so sánh chiến lược xuất sắc) |
| **25** | `crm-la-gi-doanh-nghiep-nho-co-can-crm-khong` | CRM & Tự động hóa | TOFU Pillar Cụm 5 | 7.0 / 10 | 6.5 / 10 | 6.6 / 10 | Cấp D (Sheet 0đ) | 3 In / 2 Out | 6.5 / 10 | PASS | **KEEP** (Pillar quản lý khách bình dân) |
| **26** | `crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao` | CRM & Tự động hóa | MOFU (Tính năng) | 6.0 / 10 | 5.5 / 10 | 6.0 / 10 | Cấp D (4 Tính năng) | 2 In / 2 Out | 5.5 / 10 | **453w (Thin)** | **EXPAND** (Bổ sung quy trình lọc lead rác) |
| **27** | `automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa` | CRM & Tự động hóa | MOFU (Quy trình) | 8.0 / 10 | 7.0 / 10 | 6.5 / 10 | Cấp D (7 Kịch bản n8n) | 3 In / 2 Out | 7.5 / 10 | PASS | **KEEP** (Bài chuyển đổi giải pháp tự động) |
| **28** | `cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong` | CRM & Tự động hóa | MOFU (Đa kênh) | 6.5 / 10 | 5.5 / 10 | 6.1 / 10 | Cấp D (Webhook Telegram) | 2 In / 2 Out | 6.0 / 10 | **448w (Thin)** | **EXPAND** (Bổ sung sơ đồ luồng dữ liệu 0đ) |
| **29** | `content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau` | Nội dung | TOFU (Mồ côi Cụm) | 5.5 / 10 | 5.0 / 10 | 5.8 / 10 | Cấp E (Chung chung) | 1 In / 1 Out | 5.0 / 10 | **495w (Thin)** | **HOLD / TUNE** (Chuyển hướng Reel/TikTok thực tế) |
| **30** | `chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian` | Tổng quan SME | Macro North Star | 9.0 / 10 | 7.5 / 10 | 6.5 / 10 | Cấp D (Flywheel 5 bước) | 4 In / 5 Out | 8.5 / 10 | PASS | **KEEP** (Ngôi sao định hướng toàn diện) |

---

## 5. MA TRẬN ƯU TIÊN THỰC THI (PRIORITY MATRIX)

### 🔴 P0 — BLOCK PUBLISH (Bắt buộc phải sửa ngay trong codebase trước khi mở trang công khai)
1. **Sửa lỗi nhân đôi Title tag trong `ArticleDetailPage.tsx`.**
2. **Sửa regex vỡ Meta Description và cập nhật seed data chuẩn SEO.**
3. **Bổ sung timestamp ISO (`published_at`, `updated_at`) vào seed JSON để sửa Schema Article rỗng ngày tháng.**
4. **Vá lỗ hổng Token kiểm tra tại API `/api/public/preview/:id` để bảo vệ Draft.**
5. **Tạo trang `NotFoundPage` (404 component) ngăn chặn Soft-404 trong `App.tsx`.**
6. **Sửa `public/robots.txt` chuẩn RFC 9309, Disallow chặt chẽ `/admin/`, `/preview/`, `/api/`.**
7. **Giải cứu 2 bài viết mồ côi (Bài 06 và Bài 13) bằng các Internal Links chất lượng cao.**
8. **Bổ sung CSS hoàn chỉnh cho `.article-rendered-body` và sửa lỗi tràn bảng ngang trên mobile.**
9. **Xóa 14 tuyên bố số liệu ảo (Fake precision, Penguin penalty) trong seed content.**
10. **Nhúng tối thiểu 5 External Authority Citations vào các bài cốt lõi (Google Search Central, GBP Help, VNNIC).**

### 🟡 P1 — FIX BEFORE FIRST INDEXING (Sửa trước khi gửi URL lên Google Search Console / IndexNow)
1. Tối ưu lại 30 thẻ `seo_title` chống cắt cụt trên SERP (< 60 ký tự).
2. Thêm thuộc tính `image` vào Article Schema trong `SEOHead.tsx`.
3. Mở rộng dung lượng 5 bài quá mỏng (< 500 từ: Bài 14, 21, 26, 28, 29) lên trên 800 từ.
4. Bổ sung 4 lỗi còn thiếu cho Bài 06 để khớp hoàn toàn với slug "10 lỗi".
5. Bổ sung bối cảnh thực tế SME Việt Nam (Zalo, Hotline, địa danh TP.HCM, Hà Nội, Đà Nẵng).
6. Tích hợp CTA Banner 2 tầng có nút bấm chuyển đổi nổi bật trên trang bài viết.
7. Ánh xạ chính xác dịch vụ liên quan (`targetService`) cho bài viết tải từ CMS.
8. Thêm tiêu chí đánh giá sức khỏe SEO, GEO, Evidence vào CMS Posts List.

### 🔵 P2 — FIX WITHIN 30 DAYS (Tối ưu trong vòng 30 ngày sau khi xuất bản)
1. Thiết lập Cloudflare Pages Middleware (`_middleware.ts`) kết hợp `HTMLRewriter` để Dynamic Pre-render Metadata & OpenGraph cho Bot không chạy JS.
2. Xây dựng Interactive Components: Calculator dự toán web (Bài 03), Ngân sách Ads (Bài 21), Checklist tương tác (Bài 18).
3. Triển khai Emergency Landing Page chuyên sâu cho dịch vụ Kháng nghị Maps bị đình chỉ (Bài 12).
4. Render UI Accordion FAQ cho các bài viết để ăn FAQ Rich Snippets.

### ⚪ P3 — EXPERIMENT LATER (Thử nghiệm giai đoạn tăng trưởng)
1. Bổ sung Cụm 5 bài viết chuyên sâu về AI Search (GEO, AEO, ChatGPT Search, Perplexity).
2. Tích hợp thanh đo lường thời gian đọc thực tế và bản đồ nhiệt (Heatmap / Scroll depth tracker).
3. Đóng gói các bộ Template Google Sheet tải về (Lead Magnet thu thập email/số điện thoại).
