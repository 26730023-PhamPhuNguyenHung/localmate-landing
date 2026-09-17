# LocalMate Active Context & SSOT Timeline

## 1. Project & Corporate Info
- **Tên doanh nghiệp chính thức**: **CÔNG TY TNHH LOCALMATE**
- **Mã số thuế**: **4001337934**
- **Địa chỉ trụ sở / Thuế**: 03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng, Việt Nam
- **Hotline / Zalo**: 0834.422.439
- **Email chính thức**: **contact@localmate.vn**
- **Huy hiệu Bộ Công Thương**: File logo chuẩn `public/logo-da-thong-bao-bct.png`
- **Tech stack**: React 18 + TypeScript + Vite + Vanilla CSS Custom Tokens + Lucide Icons.

---

## 2. Recent Accomplishments & Updates

### A00000000000000. Audit & Refactor Toàn Diện Giao Diện Article Detail Chuẩn Editorial / SME Friendly:
- **Tác giả:** Hệ thống 10 Subagents & Main Agent Reviewer
- **Vị trí tệp:** `src/pages/ArticleDetailPage.tsx`, `src/components/article/*`, `src/components/ui/Breadcrumbs.tsx`, `scripts/build-articles-data.js`, `src/data/articlesData.ts`
- **Phạm vi hoàn tất:**
  1. **Khử bỏ thuật ngữ máy móc & AI slop**: Xóa hoàn toàn badge "Đã kiểm chứng thực tế", đổi "TL;DR (Answer First)" thành "Tóm tắt nhanh", đổi "Bài Viết Cùng Chủ Đề Trong Phễu" thành "Bài viết liên quan".
  2. **Tái thiết kế Header & Byline**: H1 sử dụng clamp() tinh tế, bỏ khối author card khổng lồ và avatar to lớn, chuyển sang dòng byline editorial trang nhã.
  3. **Thanh Breadcrumb siêu mỏng**: Chiều cao giảm từ 85px xuống ~48px nền sáng `#fbfcfb`, tự động thu gọn tiêu đề tránh vỡ layout mobile.
  4. **Typography & Layout 2 cột**: Chuẩn hóa container 760px, font 17-18px, line-height 1.8; Sidebar sticky chứa TOC trên desktop, mobile thu gọn thành accordion.
  5. **Tính toán Reading Time chuẩn**: Áp dụng công thức `wordCount / 230`, cập nhật chính xác cho toàn bộ 30 bài viết thay vì giá trị hardcode 18 phút.
  6. **Tách biệt Public Data vs Internal SEO**: Triển khai mapper `toPublicArticle()` và tách dữ liệu brief nội bộ sang `src/data/articles/internalSeo.ts`.
- **Trạng thái:** Hoàn tất 100%, `npm run build` PASS 100% trong 4.88s (0 lỗi type, 0 lỗi layout overflow).

### A0000000000000. Thiết Kế Article Schema & Flexible Block System Cho CMS LocalMate (`docs/article-schema.md`):
- **Tác giả:** Subagent 7: ARTICLE TEMPLATE ENGINEER
- **Vị trí tệp:** `docs/article-schema.md`, `src/cms/types.ts`
- **Phạm vi hoàn tất:**
  1. **Flexible Block System 19+ Blocks**: Thiết kế cấu trúc dữ liệu và giao diện cho 19 khối nội dung linh hoạt (TL;DR, Key Takeaways, Context & Boundary, Problem & Symptoms, Localmate POV, Evidence, Real Example, Comparison Table, Cost Breakdown Table, Checklist, Step-by-Step, Decision Tree, Common Mistakes, Warning Box, When NOT to do, Action Plan, FAQ JSON-LD, Sources & Evidence Citations, Related Services CTA, Related Posts).
  2. **Article-level Metadata Mở Rộng**: Mở rộng `PostContentBrief` và `PostEntity` trong `src/cms/types.ts` đầy đủ các trường: `articlePurpose`, `searchIntent`, `targetPersona`, `primaryQuestion`, `secondaryQuestions`, `uniqueAngle`, `experienceNotes`, `evidenceRequired`, `contentType`, `pillarId`, `relatedPosts`, `relatedService`, `author`, `reviewedBy`, `firstPublishedAt`, `updatedAt`, `factCheckedAt`, `qualityStatus`, `seoStatus`.
  3. **100% Type-Safe & Build Verified**: Cập nhật TS types tương thích ngược hoàn toàn, sửa lỗi type LucideIcon mismatch trong `src/components/layout/Header.tsx`, kiểm tra `npm run build` (`tsc && vite build`) PASS 100%.
  4. **SSOT Document**: Xuất bản `docs/article-schema.md` gồm đặc tả 19 blocks, JSON Schema Draft 2020-12, bản ghi JSON thực tế mẫu và hướng dẫn mapping với Cloudflare D1/UI renderer.
- **Trạng thái:** Hoàn tất 100%.

### A000000000000. Xây Dựng Bản Mổ Xẻ Thực Chiến 30 Chủ Đề Số Hóa Địa Phương (`docs/practical-insights.md`):
- **Tác giả:** Subagent 4: SME PRACTITIONER / REALITY CHECKER
- **Vị trí tệp:** `docs/practical-insights.md` (SSOT đối chiếu từ `docs/drafts_30_inventory.json`).
- **Phạm vi hoàn tất:**
  1. **Toàn bộ 30 chủ đề** trong inventory đều được bóc tách theo đúng 9 lăng kính thực chiến chuẩn nghề:
     - (1) Tình huống thực tế tại cửa hàng / xưởng (Real-world scenario: tiệm sửa xe, nha khoa, gara ô tô, xưởng mộc, tiệm rửa xe, bún chả...).
     - (2) Common mistake (Sai lầm phổ biến nhất của chủ quán).
     - (3) Hidden cost (Chi phí ẩn không ai nói trước: phí duy trì, phí chụp ảnh, thuế VAT Google, phí nền tảng...).
     - (4) Trade-off (Được gì và mất gì giữa các phương án).
     - (5) Điều agency thường giấu hoặc không nói thật với khách (Thủ thuật ăn gian, lười lọc search terms, bán gói rác).
     - (6) Điều chủ doanh nghiệp BẮT BUỘC phải hỏi trước khi chi tiền.
     - (7) Khi nào KHÔNG NÊN làm (Điều kiện dừng để tránh đốt tiền oan).
     - (8) Lựa chọn rẻ hơn / tinh gọn hơn nếu có (Giải pháp 0đ hoặc chi phí cực thấp).
     - (9) Dấu hiệu nhận biết việc triển khai đang thất bại hoặc bị lừa.
  2. **Bảng tổng hợp Operating Matrix** tóm gọn 30 hàng tương ứng 30 bài cho chủ cơ sở tra cứu nhanh.
  3. **5 Nguyên tắc vàng** cho chủ doanh nghiệp khi làm việc với công nghệ (Chính chủ 100%, Xem trước 0đ, Thước đo 4G, Minh bạch giá, Bán trước - tự động sau).
- **Trạng thái:** Hoàn tất 100%, tài liệu đạt ~127KB chiều sâu nghiệp vụ, cung cấp chất liệu thực chiến không thể sao chép cho đội ngũ biên tập nội dung.

### A00000000000. Thiết Kế Content Architecture & Internal Linking Graph Toàn Diện Cho 30 Bài Viết CMS (`docs/content-architecture.md`):
- **Tác giả:** Subagent 6: INFORMATION ARCHITECT
- **Vị trí tệp:** `docs/content-architecture.md` (SSOT đối chiếu từ `docs/drafts_30_inventory.json`).
- **Phạm vi hoàn tất:**
  1. **Phân Cụm Tự Nhiên & Phân Vai Trò (5 Clusters + 1 Master Cornerstone)**:
     - *Cụm 1: Website & Landing Page (6 bài)* — Pillar: Bài 01; Supporting: Bài 02, 03, 04, 05, 06. (Target: `/giai-phap/nen-tang-so` & `/landing-490k`).
     - *Cụm 2: Google Maps & Local Presence (6 bài)* — Pillar: Bài 07; Supporting: Bài 08, 09, 10, 11, 12. (Target: `/giai-phap/duoc-tim-thay`).
     - *Cụm 3: Local SEO & Discovery (6 bài)* — Pillar: Bài 13; Sub-pillars: Bài 14, 18; Supporting: Bài 15, 16, 17. (Target: `/giai-phap/duoc-tim-thay` & `/dich-vu/geo`).
     - *Cụm 4: Google Ads & Paid Acquisition (6 bài)* — Pillar: Bài 19; Sub-pillar: Bài 24; Supporting: Bài 20, 21, 22, 23. (Target: `/giai-phap/thu-hut-khach-hang`).
     - *Cụm 5: CRM & Automation (4 bài)* — Pillar: Bài 25; Sub-pillar: Bài 27; Supporting: Bài 26, 28. (Target: `/giai-phap/van-hanh-tu-dong-hoa`).
     - *Master Cornerstone & Enabler (2 bài)* — Bài 30 (Lộ trình 5 bước số hóa - Super Pillar liên kết toàn bộ 5 cụm) & Bài 29 (Máy phát nội dung tiệm địa phương).
  2. **Ma Trận Internal Linking Graph 3 Chiều Hoàn Chỉnh**:
     - Chiều dọc: Pillar <-> Supporting (100% bài con có contextual link về bài Pillar).
     - Chiều ngang: Supporting <-> Supporting theo logic vận hành.
     - Chiều liên cụm: Cross-cluster liên kết tự nhiên theo Customer Journey.
  3. **Thiết Kế Breadcrumbs & Schema.org**: 4 cấp chuẩn SEO, taxonomy rõ ràng, JSON-LD mẫu.
  4. **Thuật Toán Related Posts & Next-Best-Article CTA**:
     - Loại bỏ hoàn toàn random, xây dựng ma trận 3 Card cho 30 bài theo tiến trình nhận thức (Bước tiếp theo - Đào sâu/Cạm bẫy - Cầu nối hệ thống).
     - Thiết kế khối CTA dẫn dắt hành động riêng cho từng bài (kèm Commercial Action Button).
- **Trạng thái:** Hoàn tất 100%, sẵn sàng cho các đội ngũ triển khai nội dung và phát triển CMS.


### A0000000000. Xây Dựng 3 Pillar Pages Chuẩn SEO & GEO (/google-ads, /content-marketing, /automation):
- **Tác giả:** SEO & GEO Pillar Pages Specialist
- **Vị trí tệp:**
  - `src/pages/GoogleAdsPillarPage.tsx` (`/google-ads`)
  - `src/pages/ContentMarketingPillarPage.tsx` (`/content-marketing`)
  - `src/pages/AutomationPillarPage.tsx` (`/automation`)
  - `src/App.tsx`: Cập nhật định tuyến chuẩn và legacy alias routes.
- **Tiêu chuẩn hoàn tất:**
  1. Dữ liệu chuẩn SSOT từ `COMPANY_DATA` (`src/data/company.ts`).
  2. Hero section thiết thực cho SME: Không nói suông, tập trung bài toán thực tế.
  3. Answer-First Block: Đoạn văn 50–80 từ cô đọng, chuẩn AI Overviews & SearchGPT/Perplexity.
  4. Bảng tóm tắt: Bảng giá, Deliverables, Timeline, Ownership, Support, Last Updated.
  5. Chi tiết 4 module giải pháp thực tế + Bảng đối chiếu giải pháp cũ vs LocalMate.
  6. FAQ chi tiết 5 câu hỏi sát sườn + Form đăng ký nhận tư vấn kết nối `submitLead`.
  7. Giao diện 100% Light Mode sáng sủa, độ tương phản cao, tuyệt đối không glassmorphism.
- **Nghiệm thu kỹ thuật:** `npx tsc --noEmit` và `npm run build` PASS 100% với exit code 0.

### A000000000. Hoàn Thiện Canonical Routes, Catalog Bảng Giá Toàn Diện (/bang-gia) & Header/Footer SSOT:
- **Tác giả:** System & Routing Specialist
- **Vị trí tệp:**
  - `src/App.tsx`: Wire up toàn bộ canonical routes (`/thiet-ke-website`, `/google-maps-local-seo`, `/google-ads`, `/content-marketing`, `/automation`, `/bang-gia`, `/du-an`, `/du-an/:slug`, `/ve-localmate`, `/lien-he`).
  - `src/data/caseStudiesData.ts`: Tích hợp 3 case studies thực tế từ `company.ts` (`xeo-restaurant`, `nam-phat`, `huong-sen`) với đầy đủ số liệu đo lường thật.
  - `src/components/sections/FullServicesCatalogSection.tsx`: Catalog 41+ micro-services nhóm theo 5 trụ cột, lọc theo từ khóa và hình thức thanh toán.
  - `src/pages/PricingPage.tsx`: Đưa catalog làm trọng tâm, minh bạch giá từ 99k.
  - `src/components/layout/Header.tsx` & `Footer.tsx`: Cập nhật menu điều hướng trỏ về canonical URLs; Footer hiển thị đúng pháp nhân, MST 4001337934, địa chỉ 03 Trường Chinh, hotline 0834.422.439, email contact@localmate.vn.
- **Nghiệm thu kỹ thuật:** `npx tsc --noEmit` PASS 100% không lỗi.

### A00000000. Xây Dựng Trang Quy Trình Vận Hành & Chăm Sóc Số Định Kỳ (`CareWorkflowPage.tsx`):
- **Tác giả:** Local Care & Operations Workflow Specialist
- **Vị trí tệp:** `src/pages/CareWorkflowPage.tsx` (route chính: `/quy-trinh-cham-soc`, aliases: `/quy-trinh-cham-soc-website`, `/quy-trinh-van-hanh`, `/cham-soc-website`).
- **Phạm vi hoàn tất:**
  1. **5 Chu Kỳ Vận Hành & Chăm Sóc Số Chi Tiết**:
     - *Hàng ngày (Daily Real-time 24/7)*: Giám sát Uptime 99.9% qua ping 60s từ 3 node máy chủ khu vực, tự động gửi Webhook cảnh báo vào Telegram/Zalo khi web quá tải hoặc link hỏng 404/500, kiểm tra chuông thông báo đơn hàng/đặt bàn/hotline đổ về trong 3 giây.
     - *Hàng tuần (Weekly SLA 15-30 phút)*: Sao lưu dữ liệu toàn diện (Full Snapshot) lên Cloudflare R2 Object Storage đa vùng, cập nhật bản vá bảo mật và Cloudflare WAF, hỗ trợ đổi bảng giá/banner khuyến mãi cuối tuần theo yêu cầu của chủ tiệm chỉ trong 15-30 phút qua nhóm Zalo VIP 1-1.
     - *Hàng tháng (Monthly Growth Analytics & Local SEO/AI)*: Gửi báo cáo định kỳ ngày 01-03 hàng tháng về số cuộc gọi hotline, lượt chỉ đường Google Maps, lượng truy cập web; rà soát từ khóa Google Maps theo bán kính 3-5km; kiểm tra tình trạng trích dẫn thương hiệu trên các công cụ AI (ChatGPT Search, Perplexity, Google AI Overviews).
     - *Hàng quý (Quarterly Deep Optimization & Campaign Boost)*: Kiểm tra toàn diện bộ chỉ số Core Web Vitals (LCP < 1.2s, CLS = 0, INP < 200ms) trên 4G/5G di động, nén ảnh AVIF/WebP, đề xuất ý tưởng khuyến mãi kéo khách mùa vụ (Lễ Tết, Hè, Khai trường) và trao đổi 30 phút cùng chủ tiệm định hướng quý tới.
     - *Cam kết bảo hành hạ tầng 5 năm (5-Year Infrastructure Warranty)*: Văn bản cam kết đồng hành kỹ thuật dài hạn, bàn giao 100% mã nguồn và tài khoản tên miền DNS Cloudflare chính chủ cho khách hàng, miễn phí khôi phục hạ tầng khi có sự cố, không thu phí duy trì ép buộc hay bỏ rơi khách hàng.
  2. **Bảng So Sánh Đối Trọng 2 Cột**:
     - Tự quản lý / Thuê Freelancer tự do (quên sao lưu, web sập không hay, đổi giá đợi cả tuần, mất liên lạc sau 6 tháng) vs Có KTV LocalMate Chăm Sóc (backup R2 tự động, bot cảnh báo 60s, sửa nhanh 15-30 phút, báo cáo minh bạch hàng tháng, bảo hành 5 năm).
  3. **Quy Trình 4 Bước Tiếp Nhận Nhanh (SLA 15-30 Phút)**:
     - Nhắn yêu cầu qua Zalo -> KTV tiếp nhận trong 5 phút -> Cập nhật & test mobile trong 10-20 phút -> Nghiệm thu link live hoàn tất trong 15-30 phút.
  4. **Cam Kết Vàng, FAQ Accordion & Lead Capture**:
     - Accordion 6 câu hỏi thường gặp về sao lưu R2, sửa gấp cuối tuần, quyền sở hữu mã nguồn, cứu hộ web cũ; kết nối modal tư vấn 0đ.
  5. **Tiêu chuẩn UI/UX & Tích hợp**:
     - 100% Light Mode sáng sủa, chuẩn màu thương hiệu (`#0d7647`, `#0f172a`), không glassmorphism, tương phản cao, responsive mượt mà.
     - Liên kết chuẩn trong Footer, HtmlSitemapPage, Router App.tsx và vượt qua `npm run build` 100%.

### A0000000. Xây Dựng Trang Lộ Trình Phát Triển Số 5 Giai Đoạn Cho Doanh Nghiệp Địa Phương (`StrategyPhasesPage.tsx`):
- **Tác giả:** Local Strategy 5 Phases Guide
- **Vị trí tệp:** `src/pages/StrategyPhasesPage.tsx` (route chính: `/chien-luoc-5-giai-doan`, aliases: `/lo-trinh-5-giai-doan`, `/chien-luoc-seo-5-giai-doan`, `/lo-trinh-phat-trien-so`).
- **Phạm vi hoàn tất:**
  1. **Triết lý & Khung chiến lược**: Học hỏi trang Chiến lược SEO 5 giai đoạn từ FastMarketing, điều chỉnh 100% sát sườn với bối cảnh doanh nghiệp và cửa hàng địa phương tại Việt Nam (từ con số 0 đến tự vận hành sinh khách bền vững).
  2. **Chi tiết 5 giai đoạn thực chiến**:
     - *Giai đoạn 1: Chuẩn hóa Định Danh & Google Maps* (Khảo sát vị trí thực tế, xác minh chính chủ vào Gmail của chủ tiệm, dọn sạch Maps rác/trùng lặp, thiết kế & in bảng QR Code mica giúp khách để lại đánh giá chân thực trên Google).
     - *Giai đoạn 2: Xây Dựng Nền Tảng Sales Hub & Khung Dữ Liệu AI* (Website siêu tốc < 0.8s Cloudflare Edge, khai báo Schema JSON-LD LocalBusiness chuẩn W3C, tệp llms.txt & robots.txt cho bot AI).
     - *Giai đoạn 3: Phủ Từ Khóa Nhu Cầu Địa Phương* (Chiếm lĩnh trang 1 Google và Top 3 Maps cho các cụm từ "gần đây", quận/huyện, khẩn cấp và hiển thị trong Google AI Overviews).
     - *Giai đoạn 4: Thu Hút Khách & Kéo Chuyển Đổi Thực* (Quảng cáo Google Search/Meta chuẩn bán kính 3-7km, 0% kê giá, chặn 200+ từ khóa rác, đo lường từng cuộc gọi và tin nhắn Zalo).
     - *Giai đoạn 5: Vận Hành Tự Động & Bảo Hành Hạ Tầng 5 Năm* (Webhook đồng bộ đơn về Google Sheets, chuông báo Telegram tức thì trong 3 giây, cam kết bảo hành kỹ thuật 5 năm bằng văn bản pháp nhân).
  3. **Cấu trúc từng giai đoạn đầy đủ**:
     - Mục tiêu cốt lõi (Core Goal)
     - Công việc KTV làm (KTV Action Checklist 5 bước cụ thể)
     - Sản phẩm bàn giao (Deliverables thật sờ thấy được)
     - Thời gian dự kiến (3-5 ngày, 5-7 ngày, 15-30 ngày, 2-4 ngày, 5 năm)
     - Lời khuyên thực chiến từ KTV Trưởng & Cầu nối giai đoạn kế tiếp
  4. **Khối chức năng tương tác bổ trợ cao cấp**:
     - *Bảng so sánh*: Cách làm manh mún cũ (tự phát, web lỗi, bị kê giá ads) vs Lộ trình 5 giai đoạn bài bản LocalMate.
     - *Thanh điều hướng Tabs*: Chọn và xem chi tiết từng giai đoạn mượt mà, có chuyển tiếp Next/Prev.
     - *Công cụ Tự Chẩn Đoán*: Đánh giá 30 giây giúp chủ tiệm biết ngay cơ sở mình nên xuất phát từ giai đoạn nào.
     - *Ma trận 5 giai đoạn*: Bảng tổng hợp đối chiếu nhanh mục tiêu, thời gian, bàn giao và CTA.
     - *Cam kết vàng & FAQ*: 4 cam kết bảo vệ quyền lợi khách hàng và 5 câu hỏi thường gặp.
  5. **Chuẩn thiết kế**: 100% Light Mode sáng sủa, sắc nét, tương phản cao, chống hoàn toàn glassmorphism, breadcrumbs chuẩn SEO, CTA đặt lịch tư vấn 1-1 với KTV Trưởng, `npm run build` pass 100%.

### A000000. Xây Dựng Trang Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương (`GeoWorkflowPage.tsx`):
- **Tác giả:** GEO & AI Search Workflow Deep-Dive Specialist
- **Vị trí tệp:** `src/pages/GeoWorkflowPage.tsx` (route: `/quy-trinh-geo` và alias `/quy-trinh-trien-khai-geo`).
- **Phạm vi hoàn tất:**
  1. **Bản chất vận hành**: Tối ưu dữ liệu có cấu trúc để ChatGPT, Gemini, Copilot và Google AI Overviews có căn cứ trích dẫn thương hiệu của bạn khi khách hàng hỏi tìm kiếm quanh vùng. Minh họa sơ đồ 3 chặng AI: Thu thập Entity Ingestion -> Xác thực độ tin cậy E-E-A-T & NAP -> Sinh câu trả lời & gắn thẻ trích dẫn (Citation Generation).
  2. **Quy trình 6 bước kỹ thuật sâu sắc**:
     - *Bước 1: Khảo sát tín hiệu số hiện tại & Phân tích cơ hội trích dẫn địa phương* (Baseline AI Audit 30 câu hỏi, phát hiện AI Hallucination).
     - *Bước 2: Thiết lập Schema JSON-LD đa tầng* (LocalBusiness / Dentist / AutoRepair, GeoCoordinates 6 số thập phân, OpeningHoursSpecification, AggregateRating, sameAs).
     - *Bước 3: Xuất bản và cấu hình tệp llms.txt chuẩn OpenSearch* (Cấu trúc Markdown tinh gọn, Content-Type text/plain, mở robots.txt cho AI crawler).
     - *Bước 4: Xây dựng Prompt Bank thực tế* (50–80 câu hỏi mua sắm người địa phương phân theo 4 nhóm Intent: Cấp bách, So sánh đạo đức, Báo giá, Kỹ thuật ngách).
     - *Bước 5: Đồng bộ NAP (Tên - Địa chỉ - Điện thoại) & Citation tin cậy* (30+ liên kết số đồng nhất 100%, gắn thẻ Geotag).
     - *Bước 6: Giám sát đo lường AI Visibility & Bàn giao tài liệu 5 năm* (Mục tiêu 60–85%+ AI Mention Rate, bàn giao 100% tài khoản chính chủ, bảo hành 5 năm).
  3. **Bảng so sánh trực quan Trước & Sau (Live AI Simulation)**:
     - 2 Kịch bản thực tế: Phòng khám nha khoa Hóc Môn & Gara sửa xe máy gần ngã tư An Sương.
     - So sánh phản hồi mô phỏng ChatGPT / Gemini: Trước (AI nói chung chung, gợi ý chuỗi ở xa hoặc sai lệch) vs. Sau (AI trích dẫn dứt khoát tên tiệm, địa chỉ, hotline và thế mạnh).
  4. **Deliverables Checklist**: 6 hộp bàn giao cụ thể, trực quan.
  5. **Chuyên mục FAQ**: 6 câu hỏi - giải đáp chuyên sâu về thời gian, chi phí, tệp llms.txt, chính sách đồng hành.
  6. **Lead Capture & Hotline**: Form đăng ký nhận bản phân tích AI Visibility 0đ kết nối `submitLead()`.
  7. **Tiêu chuẩn UI/UX**: 100% Light Mode sáng sủa, không glassmorphism, tương phản cao, responsive mượt mà.

### A00000. Hoàn Tất Đội Ngũ Kỹ Thuật Viên Thực Chiến Tại Địa Phương & Cam Kết 3 KHÔNG (`LocalTeamSection.tsx`):
- **Tác giả:** Team & In-House Technical Commitment Section Architect
- **Triết lý chủ đạo:** *"Chúng tôi không có phòng ban sale gọi điện ép ký hợp đồng. Bạn làm việc trực tiếp với những kỹ thuật viên thật, phụ trách từng việc cụ thể."*
- **4 Vị trí Kỹ thuật viên In-house thực chiến:**
  1. **Kỹ thuật viên Trưởng Hạ Tầng & Mã Nguồn**: Phụ trách bảo mật Cloudflare, tốc độ tải trang < 0.8s và bảo hành mã nguồn 5 năm.
  2. **Kỹ thuật viên Bản Đồ & Local SEO**: Phụ trách xác minh Google Maps, đồng bộ định vị GPS và tối ưu bán kính phủ sóng 5-15km.
  3. **Chuyên viên Dữ Liệu AI Search & GEO**: Phụ trách cấu trúc Schema JSON-LD, file llms.txt và thử nghiệm trích dẫn trên ChatGPT/Gemini.
  4. **Kỹ thuật viên Vận Hành & Hỗ Trợ 1-1**: Trực Zalo hỗ trợ giải quyết sự cố trong 15-30 phút, ghé tiệm khảo sát thực tế.
- **Khối cam kết 3 KHÔNG bắt buộc (Bảo chứng đạo đức nghề nghiệp):**
  - **KHÔNG giấu mặt đẩy việc cho cộng tác viên bên ngoài**: 100% in-house, trực tiếp chịu trách nhiệm từng dòng code.
  - **KHÔNG thu tiền rồi biến mất**: Xem trước demo 0đ trên điện thoại, nghiệm thu hài lòng mới thanh toán, hợp đồng & VAT đầy đủ.
  - **KHÔNG giam giữ tài khoản hay mật khẩu của khách hàng**: Bàn giao 100% quyền sở hữu chính chủ (Maps, domain, hosting, mã nguồn).
- **Tích hợp:**
  - `src/pages/AboutPage.tsx`: Tích hợp đầy đủ chi tiết với deliverables checklist và nút đặt lịch KTV khảo sát.
  - `src/pages/HomePage.tsx`: Tích hợp khối tóm tắt (`isSummary={true}`) liền mạch sau Warranty5YearSection.
  - Giao diện 100% Light Mode, không glassmorphism, tương phản cao, build pass 100% (`tsc && vite build`).

### A0000. Hoàn Tất Bộ Dữ Liệu 40 Slide Hồ Sơ Năng Lực LocalMate 2026 (`src/data/credentialDeckData.ts`):
- **Tác giả:** Credential Data Specialist
- **Định vị cốt lõi:** "LocalMate - Người đồng hành số cho doanh nghiệp địa phương (Đưa công việc lên môi trường số, tìm khách hàng, tự động hóa vận hành, bảo hành kỹ thuật 5 năm)".
- **Cấu trúc hoàn chỉnh 4 phần và chuẩn 40 slide:**
  - **Phần 1: Giới thiệu & Năng lực (Slide 01 - 07)**: Bìa, Thư ngỏ Founder & KTV Trưởng, Mục lục 4 phần, Số liệu năng lực thật (250+ điểm, demo 48h, 100% chính chủ, bảo hành 5 năm), Đội ngũ kỹ thuật in-house 1-1, Mạng lưới khách hàng địa phương, Hạ tầng Cloudflare Edge & Schema.org / OpenSearch.
  - **Phần 2: Hệ thống Giải pháp 5 Trụ Cột (Slide 08 - 24)**: Khung 5 Trụ cột, Giải pháp GEO & Local AI Search, Bối cảnh thị trường, Nhóm ngành chịu tác động, Mô hình kinh doanh phù hợp, Năng lực mở rộng chuỗi, Công nghệ llms.txt & OpenSearch, Tối ưu Google AI Overviews & AEO, Bộ 5 dịch vụ nền tảng, Công cụ Instant Business Audit, Tín hiệu thuật toán AI, 6 chỉ số đo lường thực nhận, Báo cáo tiến độ tuần, CRM Mini Zalo/Telegram, Tốc độ tải trang < 0.8s Cloudflare Edge, Kênh kéo khách tức thì (Top 3 Maps & Google Ads bán kính), Checklist 35 đầu việc kỹ thuật.
  - **Phần 3: Case Studies & Tình Huống Thực Tế (Slide 25 - 36)**: Khung Case studies, Case 1 Bán lẻ & Thiết bị âm thanh, Case 1 Đo lường AI Visibility, Case 2 Nha khoa chuyên khoa tăng 250% cuộc gọi, Case 2 Trích dẫn câu hỏi chuyên môn AI, Case 3 Nhà hàng & Quán Cafe thu hút đánh giá chân thực qua mã QR, Case 4 Gara ô tô & Cứu hộ 24/7, Case 5 Thợ sửa chữa tại nhà & Báo giá minh bạch, Case 6 Dogfooding LocalMate tăng trưởng 100% bằng chính giải pháp của mình, Khắc phục lỗi chính sách tài khoản Google/Meta, Bộ deliverables bàn giao trọn gói, Bảng đối chiếu cách cũ vs LocalMate.
  - **Phần 4: Hợp tác & Cam kết (Slide 37 - 40)**: Nguyên tắc hợp tác & Cam kết 5 năm, 3 Tầng đầu tư linh hoạt (Foundation - Growth - Scale Pro), Quy trình 5 bước nghiệm thu hài lòng mới thanh toán, Thông tin liên hệ & Đặt lịch tư vấn 1-1 tại chỗ (Hotline 0834.422.439, 03 Trường Chinh, Đà Nẵng).
- **TypeScript Type Safety:** 100% type-safe, đầy đủ `id`, `index` (1-40), `screen` ("01"-"40"), `label`, `title`, `partId`, `partTitle`, `isDivider`, `summary`, `bullets`, `metrics`, `tags`, `quote`, `notes`. Kiểm tra `npx tsc --noEmit` đạt 0 lỗi.

### A000. Hoàn Tất Tinh Chỉnh Trang Chủ Theo Kiến Trúc 5 Solution Pillars & Luồng 7 Bước Chuẩn:
- **Tác giả:** Homepage Alignment & Problem Flow Architect
- **Phạm vi hoàn tất:**
  1. **Hero Section (`HeroSection.tsx`)**: Chuẩn hóa thông điệp hướng vấn đề: Subbadge *"Bạn cần giải quyết việc gì? • Người đồng hành số địa phương"*, Headline *"Giúp doanh nghiệp địa phương đưa công việc lên môi trường số, tìm khách hàng và vận hành dễ dàng."*
  2. **Instant Business Audit Hook**: Tích hợp quét nhanh sức khỏe số tức thì (`InstantAuditHook` trong Hero và `FreeAuditSection.tsx`).
  3. **Khối 5 Nhóm Giải Pháp Trọng Tâm (`SolutionPillarsSection.tsx`)**: Tạo mới section hiển thị 5 Solution Pillars kết nối trực tiếp đến `/giai-phap/{slug}` (`nen-tang-so`, `duoc-tim-thay`, `thu-hut-khach-hang`, `van-hanh-tu-dong-hoa`, `dong-hanh-duy-tri`).
  4. **Local Growth Flywheel (`GrowthFlywheelSection.tsx`)**: Bổ sung liên kết trực tiếp giữa 4 giai đoạn bánh đà tăng trưởng và các giải pháp trụ cột tương ứng.
  5. **Why LocalMate (`PhilosophySection.tsx`)**: Tinh chỉnh 4 cam kết trung thực, tôn trọng (Tài khoản thuộc về bạn 100%, Báo giá cố định trước khi làm, Nghiệm thu mới thanh toán, Đồng hành kỹ thuật lâu dài 5 năm).
  6. **Deliverables & Minh Chứng Thật**: Quy trình minh bạch 4 bước (`ProcessSection.tsx`), đối chiếu Trước/Sau (`BeforeAfterSection.tsx`) và Demo Showcase thực tế (`DemoShowcaseSection.tsx`).
  7. **FAQ & Final CTA (`FinalCTASection.tsx`)**: Tiêu đề hành động chuẩn xác: *"Nói cho LocalMate biết việc bạn đang cần giải quyết."*
  8. **Kiểm tra kỹ thuật**: 100% Light Mode, không glassmorphism, tương phản cao, `tsc && vite build` pass 100%.

### A00. Hoàn Tất Data Model & Solution Taxonomy Engine Cho 5 Trụ Cột Giải Pháp (`solutionsData.ts` & `capabilitiesData.ts`):
- **Tác giả:** Data Model & Solution Taxonomy Engine
- **File tạo mới & cập nhật:**
  - `src/data/solutionsData.ts`: Single Source of Truth cho 5 Solution Pillars (`xay-nen-tang-so`, `duoc-tim-thay`, `thu-hut-khach-hang`, `van-hanh-tu-dong-hoa`, `dong-hanh-cham-soc`).
  - `src/data/capabilitiesData.ts`: Taxonomy năng lực kỹ thuật và bản đồ liên kết 41 dịch vụ trong Catalog.
- **Cấu trúc TypeScript Interfaces:**
  - `SolutionOutcome`, `SolutionCapability`, `SolutionDeliverable`, `SolutionProcessStep`, `SolutionUseCase`, `SolutionOffer` (alias `SolutionPricingPackage`), `SolutionFAQ`, `SolutionWorkflowStep`, `SolutionProblemItem`, `Solution`.
- **Nội dung 100% tiếng Việt thực tế**: Tập trung giải quyết nỗi đau vận hành, không công kích đối thủ, không dùng thuật ngữ hoa mỹ, tương thích giao diện Light Mode không glassmorphism.
- **TypeScript Build:** Kiểm tra `npx tsc --noEmit` và `npm run build` đạt **0 lỗi, build pass 100%**.

### A0.1 Hoàn Thành Bộ Trình Chiếu Hồ Sơ Năng Lực 40 Slide (Credential Deck Viewer):
- **Tác giả:** Credential UI Architect
- **Các thành phần xây dựng:**
  1. `src/data/credentialData.ts`: 40 slide chuẩn hóa chia 4 phần mục lục, dữ liệu kinh doanh thực tế, phong phú, không dùng lorem ipsum.
  2. `src/components/credential/CredentialSlideCard.tsx`: Hiển thị slide chuẩn 16:9 với 10 loại layout (Cover, Letter, Metrics, Grid4, Comparison, Checklist 35 Task, Case Study, Process, Pillars, Contact), 100% Light Mode sáng sủa, sắc nét, tương phản cao, chống glassmorphism.
  3. `src/components/credential/CredentialToolbar.tsx`: Thanh điều hướng ghim trên cùng (Sticky Top HUD) gồm Logo LocalMate, Dropdown chọn 4 phần mục lục, Ô nhập slide trực tiếp (`[ 1 ] / 40`), Nút Prev/Next, Zoom (-/100%/+), Fullscreen (F), CTA "Tư vấn 1:1" mở LeadModal, Nút Hamburger mở Drawer.
  4. `src/components/credential/CredentialMenuDrawer.tsx`: Drawer mục lục trượt mượt mà cho phép cuộn nhanh đến bất kỳ slide nào trong 40 slide.
  5. `src/pages/CredentialPage.tsx`: Trang chủ hoàn chỉnh tích hợp `SEOHead`, Keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `F`, `Home`, `End`, `Escape`), Auto-Sync cuộn chuột, Thanh tiến độ đọc (Progress Bar) và chuyển đổi chế độ Cuộn Liên Tục vs Thuyết Trình.
  6. `src/App.tsx`: Tích hợp route `/ho-so-nang-luc` và `/credential`, tự động ẩn Header và MobileFloatingCTA mặc định để tối ưu không gian trình chiếu.
  7. Tích hợp liên kết truy cập nhanh tại Header Desktop, Header Mobile Drawer và Footer Cột 3.
- **Kiểm thử chất lượng:** TypeScript compile `tsc --noEmit` exit code 0, `npm run build` pass 100%.

### A0. Ban Hành Hệ Thống 7 Tài Liệu SSOT Tái Kiến Trúc Dịch Vụ (`docs/services/`):
- **Tác giả:** Docs SSOT Architect
- **Vị trí lưu trữ:** `docs/services/`
- **7 Tài liệu chuẩn mực:**
  1. `information-architecture.md`: Chuỗi giá trị 5 tầng (Jobs to be done -> Outcomes -> 5 Solution Pillars -> Capabilities -> Deliverables), đối chiếu Old vs New Architecture.
  2. `service-taxonomy.md`: Định nghĩa 5 Solution Pillars, 25+ capabilities kỹ thuật và ma trận use cases liên ngành (Phòng khám, Gara, F&B, Dịch vụ tại nhà, B2B).
  3. `messaging-guide.md`: Chuẩn giọng điệu điềm tĩnh, thực tế; loại bỏ từ ngữ công kích đối thủ và cam kết ảo.
  4. `solution-template.md`: Blueprint 12 sections chuẩn mực cho mọi trang giải pháp.
  5. `pricing-model.md`: Mô hình 3 dòng tiền minh bạch: Setup fee + Monthly Care fee + Ad spend/3rd party.
  6. `url-mapping.md`: Bảng đối chiếu URL cũ sang mới, xác định vai trò Trang Trụ Cột vs Trang Vệ Tinh SEO bổ trợ.
  7. `migration-log.md`: Nhật ký chuyển đổi và lộ trình 5 giai đoạn triển khai.

### A. Xóa Nút CMS Quản Trị Khỏi Giao Diện Công Khai:
- Gỡ bỏ hoàn toàn nút `Mở CMS Quản Trị Bảng Giá` khỏi `PricingPage.tsx`.
- Đảm bảo an toàn bảo mật, khách hàng chỉ nhìn thấy bảng giá niêm yết công khai và nút liên hệ tư vấn.

### B. Thiết Kế Lại Toàn Bộ Bảng Giá 41 Dịch Vụ (`PricingMatrixSection.tsx` & `servicesCatalog.ts`):
- **Việt hóa 100%**: Chuyển toàn bộ tên dịch vụ kỹ thuật tiếng Anh sang tiếng Việt thực tế, dễ hiểu cho hộ kinh doanh và SME.
- **Thanh tìm kiếm nhanh**: Tích hợp ô Search tra cứu dịch vụ tức thì theo từ khóa.
- **Bố cục 3 cột thoáng đãng**: Card dịch vụ hiện đại có Icon màu sắc theo nhóm, badge phân loại, cam kết thời gian hoàn thành (`15–30 phút`, `1–2 ngày`), mức giá to rõ và nút CTA tư vấn.

### C. Header Mega Menu Full Width (1240px) & Footer MISA Light Theme:
- Header 1240px không bị rớt chữ trên bất kỳ tiêu đề nào, fix tràn viền 2 thẻ bên phải.
- Footer nền sáng chuẩn MISA/AMIS với 4 cột, dải social, trust pills và logo Bộ Công Thương.

### D. Tích Hợp Background Video Seamless Boomerang Loop Cho Hero Section:
- Cắt dựng video trừu tượng lượn sóng xanh (`Animating_abstract_green_wavy_ba._20260912095226.mp4`): kỹ thuật Boomerang loop 0s -> 3.5s rồi đảo ngược 3.5s -> 0s, loại bỏ frame trùng ở đỉnh và đáy để chuyển động trơn tru không khựng giật.
- Tối ưu dung lượng chuẩn web: MP4 H.264 (~740 KB) và WebM VP9 (~530 KB) không audio.

### E. Tối Ưu Hiển Thị Hero Background Video (Tự Nhiên, Sắc Nét & Êm Dịu):
- **Tốc độ chuyển động chậm 50%**: Ghim `playbackRate = 0.5` qua React ref + event listeners (`loadedmetadata`, `canplay`, `play`) chống trình duyệt tự động reset.
- **Loại bỏ triệt để lớp màng trắng phủ**: Xóa bỏ overlay gradient trắng dày (0.4 - 1.0) làm bạc màu, phục hồi 100% độ tươi màu xanh mint của video gốc.
- **Overlay siêu mỏng & Backdrop cục bộ**: Kết hợp linear-gradient siêu nhẹ (0.04 - 0.06) phủ toàn khung và radial-gradient mềm mại chỉ nằm phía sau vùng nội dung trung tâm (`.hero-content-backdrop`), giúp chữ và nút bấm cực kỳ sắc nét mà không làm mờ video.
- **Tách biệt lớp giao diện**: Video `z-index: 0` cố định với `scale(1.02)` chống hở viền; nội dung `z-index: 2` tương tác trơn tru.
- **Accessibility & Motion Safety**: Tự động nhận diện `prefers-reduced-motion: reduce` để pause video, nền dự phòng `#edf5f1` đồng màu êm dịu.
### F. Tối Ưu Hero Section & Trust Badges Theo Phong Cách SaosangEdu (Subagent 2):
- **Sub-badge tinh tế (Pill Eyebrow)**: Nền xanh nhạt (`#e8f5e9`), chữ xanh đậm (`#065f46`), viền `#c6ebd4`, nội dung: "Đồng hành số địa phương • Bàn giao demo trong 48h".
- **Tiêu đề Hero trúng Insight**: "Giúp doanh nghiệp địa phương có website chuẩn, lên Google và thu hút thêm khách." với highlight xanh lá chủ đạo.
- **Cụm CTA kép chuẩn mực**:
  - Nút chính: `Tư vấn miễn phí / Xem Demo` (variant `primary`, icon Sparkles + ArrowRight).
  - Nút phụ: `Xem bảng giá / Tìm hiểu thêm` (variant `white`, scroll mượt tới bảng giá).
  - Micro-copy cam kết 3 tiêu chuẩn: Dựng demo xem trước 0đ • Báo giá cố định trước khi làm • Nghiệm thu mới thanh toán.
- **Dải Trust Metrics / Stats Thẻ Số Liệu Gãy Gọn**:
  - 4 thẻ số liệu gãy gọn tích hợp trong Hero Section:
    1. `250+` Khách hàng địa phương (Hộ kinh doanh & SMB tin chọn)
    2. `48 Giờ` Bàn giao demo xem trước (Trải nghiệm 0đ trước khi làm)
    3. `1 - 1` Hỗ trợ kỹ thuật tại chỗ (KTV địa phương đồng hành)
    4. `100%` Chính chủ tài khoản (Báo giá cố định, không phí ẩn)
  - Thẻ nền trắng tinh, viền crisp 1px `#e2e8f0`, icon xanh dịu `#edf7f1`, responsive 4 cột desktop, 2 cột tablet/mobile.
- **Tinh gọn CSS & Bố Cục**: Tối ưu padding `clamp(2.5rem, 4.5vw, 4.25rem)`, triệt tiêu hoàn toàn nguy cơ horizontal overflow, giữ nguyên hiệu ứng boomerang loop của background video. Build pass 100%.

### G. Thiết Kế & Tích Hợp Bánh Đà Tăng Trưởng Doanh Thu Địa Phương (Local Growth Flywheel - WebFX Inspiration):
- **Tạo mới component**: `src/components/sections/GrowthFlywheelSection.tsx`.
- **4 Giai đoạn cốt lõi gắn liền hệ sinh thái dịch vụ LocalMate**:
  1. **Giai đoạn 01 - Thu hút (Stay Visible)**: Lên top tìm kiếm Google Maps & Google Search, tối ưu bán kính 3–10km, phủ từ khóa địa phương không dấu/có dấu, 100% tài khoản chính chủ.
  2. **Giai đoạn 02 - Chuyển đổi (Capture Leads)**: Tốc độ website tải siêu tốc < 1s trên Cloudflare Edge, bộ nút Gọi/Zalo/Chỉ đường một chạm, form nhận demo 0đ không rào cản.
  3. **Giai đoạn 03 - Chăm sóc & Vận hành (Care & RevOps)**: Gói Digital Care chăm sóc Fanpage & website 990k/tháng, quy trình tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google, bảo mật SSL dữ liệu.
  4. **Giai đoạn 04 - Đòn bẩy & Tái đầu tư (Scale & Automate)**: Tái đầu tư lợi nhuận vào quảng cáo Google Ads / Meta Ads bám đuổi, tự động hóa đơn hàng & đặt lịch qua Zalo OA, đồng bộ CRM.
- **Thiết kế & Tương tác**:
  - Giao diện 100% Light Mode sáng sủa, nền sáng chữ đậm, viền nhẹ `#e2e8f0`, hệ icon pastel dịu mắt theo 4 gam màu chủ đạo.
  - Vòng tròn Bánh đà tương tác (Flywheel Visual Wheel) 4 góc xoay tuần hoàn, hỗ trợ auto-play có nút tạm dừng, click chọn mượt mà.
  - Bảng đối chiếu thực tế: Phễu Marketing tuyến tính cũ (chi phí tăng dần, tiền hết khách tắt) vs Bánh đà LocalMate (khách hàng làm tâm điểm, chi phí giảm dần theo thời gian).
- **Tích hợp toàn diện**:
  - `HomePage.tsx`: Đặt trang trọng sau BeforeAfterSection, dẫn dắt sang Bảng giá niêm yết.
  - `SolutionsPage.tsx`: Đặt cuối trang Giải pháp theo ngành để củng cố năng lực vận hành.
### H. Triển Khai Tính Năng 'Instant Website/Business Audit Hook' Học Hỏi Từ WebFX:
- **Tạo component Hook**: `src/components/audit/InstantAuditHook.tsx`.
  - Ô input to rõ (min-height: 48px trên mobile, 52px desktop), placeholder: "Nhập tên tiệm, link Facebook hoặc Website hiện có...".
  - Nút CTA dứt khoát màu xanh chủ đạo `#0d7647`: "Nhận phân tích & Demo 0đ".
  - Chip gợi ý ngành nghề thử nhanh: Tiệm Cà Phê Mộc, Nha Khoa Tâm Đức, Tiệm Bánh An An, Spa Thẩm Mỹ Lan Hương.
  - Micro-trust cam kết: Quét 3 tiêu chí trong 30s • Demo 0đ xem trước • KTV địa phương hỗ trợ 1-1.
- **Tạo component Modal Kết Quả**: `src/components/audit/InstantAuditModal.tsx`.
  - Hiệu ứng quét chẩn đoán 3 bước trực quan (~1.2s) tạo độ tin cậy.
  - Phân tích chi tiết 3 tiêu chí cốt lõi:
    1. **Tốc độ mở trang (Speed & Uptime)**: Đo lường thời gian tải, cảnh báo nguy cơ 53% khách di động thoát trang nếu load >3s, giải pháp LocalMate tải <0.8s.
    2. **Thứ hạng Google Maps (Local SEO)**: Độ phủ định vị bán kính 2-5km, cảnh báo mất khách vào tay đối thủ kế bên, giải pháp đẩy Top 3 bản đồ.
    3. **Trải nghiệm trên điện thoại (Mobile UX & Nút chuyển đổi)**: Kiểm tra nút gọi/Zalo 1-chạm, cảnh báo tỷ lệ chốt cuộc hẹn thấp, giải pháp thanh liên hệ dính chân màn hình.
  - Khung kết nối KTV địa phương: Form nhập Số điện thoại/Zalo để KTV gửi Báo cáo kỹ thuật chi tiết + Dựng demo xem trước 0đ trong 48h, tích hợp `submitLead` đồng bộ CRM và nút Chat Zalo trực tiếp.
- **Tích hợp HeroSection**: `src/components/sections/HeroSection.tsx` đặt Instant Audit Hook tại vị trí trung tâm, kèm link phụ xem bảng giá niêm yết và đăng ký khảo sát 1-1.
- **Tối ưu Khối chuyên biệt**: `src/components/sections/FreeAuditSection.tsx` cung cấp Dedicated Instant Audit Block với 3 cột giải thích trụ cột, tích hợp mượt mà vào `HomePage.tsx`.
- **Chuyển tiếp dữ liệu LeadModal**: Mở rộng `LeadModalProps` (`initialBusinessInput`, `initialNote`) và `App.tsx` để đồng bộ thông tin cửa hàng liền mạch.
### I. Triển Khai Hoàn Chỉnh Cụm Dịch Vụ AI Search & GEO 2026 (GEO, AEO, SEO AI, SEO ChatGPT):
- **Học hỏi & Chuyển hóa từ FastMarketing**:
  - Giữ vững các luận điểm kỹ thuật tiến bộ (Schema JSON-LD đa tầng, tệp chuẩn `llms.txt`, Entity Knowledge Graph, Inverted Pyramid Q&A, Information Gain).
  - Chuyển hóa 100% sang tinh thần LocalMate: Đi từ gốc, giá cả bình dân thực tế (chỉ từ **2.900.000đ/tháng**, tiết kiệm 75-80% so với agency lớn hét giá 15-40 triệu).
  - Định vị "Người đồng hành số tại địa phương": Kỹ thuật viên 1-1 ghé tận nơi tại cửa hàng/tiệm/phòng khám, cùng chủ quán test máy thực tế.
  - Chính sách bảo hành kỹ thuật hạ tầng lên đến **5 năm**, đồng hành dài lâu.
- **Xây dựng 4 Trang Dịch Vụ Chuyên Sâu**:
  1. `GeoServicePage.tsx` (`/dich-vu/geo`): Tối ưu đề xuất trên ChatGPT & Google Gemini.
  2. `AeoServicePage.tsx` (`/dich-vu/aeo`): Tối ưu Answer Engine Optimization — Đưa website thành nguồn trích dẫn tin cậy số 1 trên Perplexity, ChatGPT Search, Google Answer Box.
  3. `SeoAiServicePage.tsx` (`/dich-vu/seo-ai`): Thống trị Google AI Overviews — Giữ vững vị trí số 0 đầu trang tìm kiếm, tối ưu Information Gain & Helpful Content 2026.
  4. `SeoChatGptServicePage.tsx` (`/dich-vu/seo-chatgpt`): SEO ChatGPT — Đưa thương hiệu vào luồng hội thoại mua hàng của 600M+ người dùng AI.
- **Bộ Components Chuyên Dụng Tương Tác**:
  - `AiSearchClusterNav.tsx`: Thanh điều hướng cụm 4 dịch vụ đặt đầu trang, tích hợp badges "Chỉ từ 2.900.000đ/tháng", "Bảo hành 5 năm", "KTV 1-1 tận nơi".
  - `AiPromptSimulator.tsx`: Widget giả lập tương tác cho phép người dùng chọn ngành (quán ăn, nha khoa, spa, gara, nội thất) và chọn AI (ChatGPT, Gemini, Perplexity, AI Overviews) để so sánh trực quan Trước vs Sau khi tối ưu cùng LocalMate.
  - `AiSearchPricingTable.tsx`: Bảng 3 gói giá minh bạch (Khởi Động 2.9tr, Phủ Vùng 4.9tr, Toàn Diện 7.9tr) kèm bảng đối chiếu đối lập trực diện với Agency truyền thống / FastMarketing.
- **Hạ Tầng Dữ Liệu & Routing**:
  - `servicesData.ts`: Bổ sung 4 dịch vụ đầy đủ 7 câu hỏi định vị khách hàng và alias mapping.
  - `App.tsx`: Định tuyến hoàn chỉnh các đường dẫn `/dich-vu/geo`, `/dich-vu/aeo`, `/dich-vu/seo-ai`, `/dich-vu/seo-chatgpt`.
  - `Header.tsx` & `Footer.tsx`: Cập nhật liên kết trong Mega Menu, Mobile Drawer và Cột Dịch Vụ chân trang.
- **Tiêu Chuẩn Thiết Kế & Kiểm Thử**:
  - 100% Light Mode sáng sủa, nền sáng chữ đậm, tương phản cao, tuyệt đối không glassmorphism.
  - Build pass 100% (`npm run build`).

---

## 3. Production Readiness & Ads Launch Sprint (Current SSOT)
- **Lead Persistence & Webhook**: Đã tạo `src/services/leadService.ts` đồng bộ Google Sheets webhook, tự động kèm UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid`, referrer, path) và kích hoạt cả `lead_created` & `generate_lead` conversion events.
- **Analytics & Tracking**: Tích hợp đầy đủ GTM `dataLayer`, GA4 `gtag` và Meta Pixel `fbq` trong `index.html` và `src/analytics/tracker.ts`.
- **Zalo Link Direct**: Đồng bộ link Zalo toàn site thành `https://zalo.me/0834422439` (kết nối trực tiếp hotline).
- **CTA Actions Connected**: Hero "Nhận website demo 0đ", Starter Package, FAQ "Hỗ trợ trực tiếp ngay", Pricing Matrix "Tư vấn ngay" đều kết nối trực tiếp với LeadModal hoặc Router mà không có dead links/anchors.
- **Pháp nhân & MST**: Đồng bộ MST `4001337934` và Trụ sở ở `TrustSection.tsx` và `index.html` Schema.org.
## 4. Operational Transformation & Homepage Layout Implementation (Completed)
- **Tài liệu chiến lược**: Dựa trên `Localmate vận hành.md`, chuyển dịch định vị sang "Người đồng hành số tại địa phương" & "Technical Backend / Deployment Partner cho SaaS, Agency, Vendor và SME".
- **Bản đặc tả chi tiết (SSOT)**: Đã hoàn thành và lưu tại `docs/specs-localmate-operations.md` và Artifact `specs_localmate_transformation.md`.
- **Nguyên tắc bảo toàn giao diện**: Giữ nguyên 100% Header, Footer, Hero Video Boomerang loop và toàn bộ Design Tokens (100% Light mode, không glassmorphism).
- **Các thành phần đã triển khai**:
  - `src/data/operationsData.ts`: Data-Driven SSOT cho 5 Task Groups, 5 Core Offers, Triết lý, Process 5 bước, Demos thật và FAQ.
  - `HeroSection.tsx`: Tinh chỉnh copy "Bạn tập trung bán hàng - LocalMate lo phần công nghệ", giữ nguyên boomerang loop.
  - `ProblemMapperSection.tsx`: 5 nhóm nhu cầu thực tế (Hiện diện 24h, Gom lead CRM, Bớt việc thủ công, Bạn bán - LocalMate triển khai, Tư vấn 0đ).
  - `CoreOffersSection.tsx`: 5 gói giải pháp B2B & Đối tác (Local Deployment, Software Onboarding, Integration & Automation, White-label Dev Team, Deployment Network).
  - `PhilosophySection.tsx`: Cập nhật triết lý "Không cố bán phần mềm thừa — Tận dụng tối đa những gì bạn đã có" với 4 giá trị cốt lõi (Tiết kiệm chi phí, Minh bạch quyền sở hữu, Hỗ trợ trực tiếp, Đồng hành dài lâu), layout Split 2 cột có Sticky Editorial Manifesto và hotline trực tiếp.
  - `ProcessSection.tsx`: Quy trình 5 bước minh bạch (1. Trao đổi nhu cầu -> 2. Web demo thực tế 0đ duyệt trước trên điện thoại -> 3. Báo giá trọn gói cố định -> 4. Hoàn thiện nghiệm thu tốc độ & tên miền -> 5. Bàn giao 100% tài khoản & KTV hỗ trợ). Layout horizontal timeline trên desktop và vertical stepper spine trên mobile.
  - `DemoShowcaseSection.tsx`: Nâng cấp toàn diện mục "Xem trước thứ bạn sẽ nhận" với 5 sản phẩm bàn giao thực tế, tab website thật và workflow kiểm chứng.
  - `ServiceCardsSection.tsx`, `CoreOffersSection.tsx`, `StarterPackageSection.tsx` (Subagent 3): Tối ưu hóa chuẩn mực tham chiếu từ saosangedu.com (thẻ nền trắng `#ffffff`, viền nhẹ `#e5e7eb`, hover shadow tinh tế, icon container pastel `#ecfdf5` chữ xanh `#0d7647`, checkmark xanh lá sắc nét, định vị 2 tầng giá khởi điểm & nâng cao minh bạch). Build pass 100%.
- **Audit Responsive Playwright (Subagent 6)**: 5 viewports chuẩn (390px, 430px, 768px, 1366px, 1440px) pass 100%, không bị horizontal overflow (`hasOverflow: false`).
  - `FAQSection.tsx`: Bộ câu hỏi thường gặp về mô hình vận hành và pháp nhân.
  - `FinalCTASection.tsx`: Loại bỏ glassmorphism, form gửi việc 3 trường vàng nhanh gọn.
  - `HomePage.tsx`: Luồng 10 section mạch lạc, `npm run build` pass 100% không lỗi.

## 5. Deliverables & Sample Output Showcase ("Xem trước thứ bạn sẽ nhận") (Completed)
- **SSOT Data**: `src/data/operationsData.ts` bổ sung `DELIVERABLES_DATA` và `DeliverableItem` chuẩn xác, không fake số liệu.
- **5 Sản phẩm bàn giao thực tế**:
  1. **Website hoàn chỉnh**: Chuẩn SEO on-page, 100% responsive di động & laptop, nút Hotline 1-chạm & chat Zalo, tốc độ < 0.8s, bàn giao 100% tài khoản, kèm nút tương tác chuyển xem website demo thật.
  2. **Bàn giao trang quản trị tiếng Việt**: Bảng điều khiển tối giản, cập nhật giá món và đăng bài trong 3 phút, kèm video clip hướng dẫn 1-2 phút riêng biệt.
  3. **Hồ sơ Google Business & Maps**: Xác minh chính chủ Gmail của bạn, ghim định vị chuẩn, hiển thị hotline, giờ mở cửa và bộ mã QR đánh giá chân thực tại quầy.
  4. **Lịch biên tập nội dung**: Kế hoạch bài đăng tháng trên Google Sheets, rõ tiêu đề và ngày đăng, viết sát thực tế, khách duyệt trước mới xuất bản.
  5. **Báo cáo quảng cáo minh bạch**: Chạy trực tiếp trên tài khoản của khách, tiền trừ thẻ gốc từ Meta/Google, 0% kê giá hay ăn chênh lệch chi phí ads.
- **Tab Switcher 3 chế độ**: "5 Sản phẩm bàn giao thực tế", "Website thật đang hoạt động" (`DEMO_SHOWCASES`), "Workflow & Tự động hóa kiểm chứng" (`PROOF_SHOWCASE_DATA`).
- **Giao diện chuẩn Design Tokens**: 100% Light mode, viền 1px crisp, badge "Bàn giao thực tế", không glassmorphism, responsive mượt mà. Build pass 100%.

## 6. Fanpage Content Strategy & Automation (Active)
- **Định vị truyền thông**: "Người đồng hành số tại địa phương" — Không bán tool phức tạp, giải quyết từ câu hỏi "Bạn đang cần làm gì?".
- **SSOT Memory**: Duy trì file `.agents/memorybank/contentMemory.json` lưu trữ metadata từng bài, kiểm soát tỷ trọng pillar, chống lặp hook/angle/format và tự thích ứng (adaptive content).
- **Trụ cột nội dung**: 30% Vấn đề vận hành thật, 20% AI & Automation thực dụng, 15% Founder đang xây gì, 15% Breakdown hệ thống, 10% Quan điểm, 10% Offer / Conversion.
- **Tiêu chuẩn chất lượng**: 100% tiếng Việt tự nhiên, không bịa số liệu/case study giả, không văn sáo rỗng thời đại 4.0. Tự chấm điểm Quality Check 8 tiêu chí >= 7/10 trước khi xuất bản.

## 6. Header & Navigation Redesign (Subagent 2 Complete)
- **Desktop Navigation**:
  - Bố cục: [Logo LocalMate] [Dịch vụ] [Bảng giá] [Dự án] [Kiến thức] [Giới thiệu] ... [Hotline: 0834 422 439] [Báo giá nhanh].
  - Bỏ "Trang chủ" khỏi desktop nav (logo đã trỏ về trang chủ).
  - Chiều cao 70px cố định sticky top, nền trắng sạch `#ffffff`. Khi scroll kích hoạt `border-bottom: 1px solid #e2e8f0` và shadow cực nhẹ (`0 2px 10px rgba(0,0,0,0.04)`).
  - Nav links: font-weight 550, color `#334155`, hover `#0d7647`, padding 8px 12px, không bị wrap hay đè lên CTA ở laptop 14" zoom 125% (~1228px).
  - Hotline trực tiếp `tel:0834422439` kèm icon Phone, màu sắc nhã nhặn (`#475569`, hover `#0d7647`).
  - Nút CTA chính [Báo giá nhanh] xanh `#0d7647`, chữ trắng, font-semibold, bo góc 10px, padding 10px 18px.
- **Mobile Header & Drawer**:
  - Header trên mobile: [Logo] ... [Báo giá nhanh (compact)] [Nút Menu Hamburger (>=44px)].
  - Drawer slide-in mượt mà từ phải qua (rộng 90vw, max 380px), backdrop solid overlay chống click nhầm.
  - Cấu trúc phẳng 2 nhóm: Điều hướng chính + Dịch vụ triển khai nhanh. Tuyệt đối không dùng accordion hay dropdown lồng nhau gây rối mắt.
  - Mọi link và button trong Drawer đều đạt tap target >= 44px chuẩn di động.
  - Pinned footer trong drawer có nút CTA to rõ [Báo giá nhanh & Nhận demo 0đ] và Hotline gọi trực tiếp `0834 422 439`.
## 7. Pricing Matrix & Starting Price Redesign (Subagent 8 Complete)
- **4 Thẻ Gói Khởi Điểm Phổ Biến Ở Trên Cùng**:
  - **Gói Khởi Nghiệp Tối Giản**: 490.000đ trọn gói (1 trang landing gọn gàng, chuẩn di động, hotline & Zalo tức thì, SLA 24h–48h).
  - **Gói Web Giới Thiệu**: Từ 2.900.000đ trọn gói (Xem demo trước, ưng ý mới thanh toán, tặng bộ SEO & GA4, bàn giao 100% tài khoản, SLA 3–5 ngày).
  - **Gói Google Maps**: 2.000.000đ trọn gói (Xác minh chính chủ 100%, Local SEO, đăng 20+ hình ảnh, tặng mã QR để bàn giúp khách để lại đánh giá chân thực, SLA 2–4 ngày).
  - **Gói Quản Trị Duy Trì**: 990.000đ / tháng (Chăm sóc nội dung & kỹ thuật định kỳ, backup 24/7, duy trì top Maps, hỗ trợ qua nhóm Zalo riêng, SLA 2h–4h).
- **Danh Sách Dịch Vụ Chi Tiết 41 Dịch Vụ Công Khai**:
  - Bảo toàn 100% tính năng tra cứu với Search Bar thời gian thực và Bộ lọc phân loại 9 nhóm dịch vụ.
  - Card 3 cột trên desktop (>= 1040px), 2 cột trên tablet (640px - 1039px), 1 cột trên mobile (< 640px).
  - Hiển thị đầy đủ: Icon nhóm, tên dịch vụ tiếng Việt, mô tả ngắn gọn (scope), SLA thời gian hoàn thành với icon Đồng hồ, giá niêm yết to rõ và nút "Tư vấn gói này".
  - Tối ưu spacing, typography clamp (`clamp(...)`), `text-wrap: pretty`, chống vỡ dòng và chống co giật khung hình trên màn hình laptop 14" tỉ lệ zoom 125% (~1228px).
  - Nút mở rộng "Xem thêm toàn bộ bảng giá (41 dịch vụ)" mượt mà với icon xoay 180 độ, tự động bung đầy đủ khi tìm kiếm hoặc lọc danh mục.
- **Verified**: `npx tsc --noEmit` pass 100%, `npm run build` pass 100% không warning/error.

## 8. Homepage Integration & Layout Flow Assembly (Subagent 10 Complete)
- **Chuẩn hóa Flow 11 bước hoàn chỉnh theo đúng SSOT**:
  1. **HERO** (`HeroSection`): Tuyên ngôn giá trị, background video 0.5x không giật, 2 CTA chính trỏ về Lead Form và Bảng giá.
  2. **TRUST BAR** (`TrustBar`): Dải 4 cam kết nhẹ (Báo giá trước, Tận dụng thứ đã có, Đội ngũ KTV địa phương, Bàn giao 100% tài khoản), Light mode sang trọng, responsive mượt mà.
  3. **“BẠN ĐANG CẦN VIỆC GÌ?”** (`ProblemMapperSection`): Phân loại 5 nhóm việc thực tế, khách click mở LeadForm đúng nghiệp vụ.
  4. **4 DỊCH VỤ CHÍNH** (`ServiceCardsSection`): 4 dịch vụ cốt lõi cho SME (Website, Maps, Ads, Facebook) với bảng giá và SLA thời gian hoàn thành rõ ràng trong 5 giây.
  5. **CÁCH LOCALMATE LÀM VIỆC** (`ProcessSection` & `PhilosophySection`): Quy trình 5 bước minh bạch và triết lý "Không cố bán thêm phần mềm".
  6. **"XEM TRƯỚC THỨ BẠN SẼ NHẬN"** (`DemoShowcaseSection`): 5 sản phẩm bàn giao thực tế, 3 website thật đang chạy và workflow tự động hóa kiểm chứng.
  7. **BẢNG GIÁ DỊCH VỤ** (`PricingMatrixSection`): 4 thẻ gói khởi điểm phổ biến + 41 dịch vụ công khai với tìm kiếm thời gian thực.
  8. **PHÁP NHÂN & CAM KẾT MINH BẠCH** (`TrustSection`): CÔNG TY TNHH LOCALMATE (MST: 4001337934) chịu trách nhiệm toàn diện.
  9. **KIẾN THỨC & FAQ** (`KnowledgeHubSection` & `FAQSection`): Cẩm nang hướng dẫn thực tế + giải đáp thắc mắc chuyên sâu.
  10. **CTA CUỐI TRANG** (`FinalCTASection`): Form gửi việc 3 trường vàng nhanh gọn, gửi trực tiếp về CRM/Google Sheets.
  11. **FOOTER** (`Footer` từ `App.tsx`): Nền sáng chuẩn MISA/AMIS, MST 4001337934, Hotline 0834 422 439, địa chỉ Đà Nẵng, logo Bộ Công Thương và sitemap.
- **Tách biệt sạch sẽ**: Tạo mới `src/components/sections/TrustBar.tsx`, cấu hình `showTrustStrip` linh hoạt trên `HeroSection.tsx` giúp tránh trùng lặp.
- **Kiểm thử nghiệm thu**: `npm run build` pass 100% trong 11.58s (0 TypeScript error, 0 broken props/imports).

## 9. Final CTA Banner & Lead Capture Modal Ergonomics (Subagent 7 Complete)
- **Chuẩn tham chiếu SaosangEdu**:
  - Banner CTA cuối trang (`FinalCTASection.tsx`): Áp dụng nền xanh đậm thương hiệu (`#0d7647` kết hợp gradient tinh tế `#074e2e` -> `#0d7647`), chữ trắng tương phản cao.
  - Cung cấp **2 lựa chọn tương tác song song**:
    1. *Khách thích tự điền*: Form siêu tinh gọn chỉ cần Họ tên + Số điện thoại/Zalo (+ chọn nhu cầu) với input to rõ (`min-height: 48px`, `font-size: 16px` chống iOS auto-zoom).
    2. *Khách muốn trao đổi ngay*: Bộ nút gọi Hotline trực tiếp (`tel:0834422439`) và nút chat Zalo 24/7 kích thước lớn, kết nối tức thì.
  - Bộ 3 cam kết uy tín cạnh form: **'Bảo mật thông tin • Phản hồi trong 15 phút • Hoàn toàn miễn phí'** kèm cam kết *Nghiệm thu hài lòng 100% mới thanh toán*.
- **Modal Tư Vấn Tinh Gọn (`LeadModal.tsx`)**:
  - Loại bỏ hoàn toàn glassmorphism/backdrop-blur; sử dụng modal card solid `#ffffff` với viền crisp `#e2e8f0` và overlay tối vững chắc (`rgba(15, 23, 42, 0.75)`).
  - Tối ưu hóa touch target >= 44px, các input to rõ (16px font-size chống iOS zoom), nút CTA dứt khoát toàn chiều ngang (full width), cung cấp hotline fallback ngay trong modal khi khách cần trao đổi gấp.
  - Kết nối trực tiếp với CRM / Google Sheets Webhook qua `submitLead()` và gửi tracking conversion events đầy đủ.
- **Kiểm thử nghiệm thu**: `npm run build` pass 100% không lỗi (Vite build thành công trong ~5.8s).

## 10. Trust Section & Before/After Optimization (Subagent 5 Complete)
- **Tối ưu TrustBar (`src/components/sections/TrustBar.tsx`)**:
  - Tinh chỉnh 4 cam kết cốt lõi: Báo giá trước khi làm (100% không phí ẩn), Tận dụng thứ đã có (không ép mua phần mềm thừa), KTV địa phương (hỗ trợ tận nơi & Zalo 1-1), Bàn giao 100% tài khoản (khách làm chủ vĩnh viễn).
  - Thêm thẻ badge `Cam kết 01 - 04` với micro-icon check xanh lá, bố cục grid responsive (1 cột mobile, 2 cột tablet, 4 cột desktop).
- **Tối ưu Before/After Section (`src/components/sections/BeforeAfterSection.tsx`)**:
  - Tham chiếu chuẩn saosangedu.com: Ma trận đối chiếu 5 khía cạnh thiết thực (Chi phí đầu tư, Thời gian tiến độ, Quyền sở hữu tài khoản, Hệ thống vận hành, Hỗ trợ sự cố kỹ thuật).
  - Đặt Cách làm cũ (Đỏ cam, tốn kém, phụ thuộc) đối chiếu trực diện với Giải pháp LocalMate (Xanh lá, minh bạch, chủ động).
  - Tích hợp **Bộ 3 Thẻ Cam Kết Uy Tín** ngay bên dưới ma trận: *Cam kết chất lượng (Xem demo 0đ)*, *Bảo hành kỹ thuật trọn đời*, *Không phát sinh chi phí*.
  - Tích hợp thanh hành động nhanh (Action Bar) với nút đăng ký xem demo 0đ kết nối trực tiếp với luồng tư vấn của hệ thống.
  - Đã tích hợp trực tiếp vào luồng trang chủ `HomePage.tsx` ngay sau `PhilosophySection` để tạo đòn bẩy thuyết phục mạnh mẽ trước khi khách xem `PricingMatrixSection`.
- **Tối ưu TrustSection (`src/components/sections/TrustSection.tsx`)**:
  - Bổ sung dải số liệu Social Proof định lượng: `150+ Cửa hàng tin cậy`, `100% Khách hàng làm chủ tài khoản`, `0đ Chi phí phát sinh`.
  - Phân tách sắc nét giữa: 5 Tài sản bàn giao cầm tay (CCCD, Primary Owner Maps, QR Đánh Giá Chân Thực, Video HD 2 phút, Zalo nhóm 1-1) và Pháp nhân Công ty TNHH LocalMate (MST 4001337934, địa chỉ trụ sở, hóa đơn VAT điện tử, hotline KTV).
- **Kiểm thử nghiệm thu**:
  - `npm run build` pass 100% không warning/error (Vite build xong trong 6.92s).
  - Giao diện tuân thủ tuyệt đối quy chuẩn Light mode, không glassmorphism, tương phản cao, `text-wrap: pretty`.

## 11. Mobile Floating Quick Contacts Ergonomics Optimization (Subagent 8 Complete)
- **Tham chiếu chuẩn mực từ saosangedu.com**:
  - Thanh floating liên hệ nhanh cố định cạnh dưới màn hình trên thiết bị di động (<= 768px).
  - Cụm 3 hành động chuyển đổi nhanh tức thì:
    1. **Nút Gọi điện**: Liên kết trực tiếp `tel:0834422439`, icon `PhoneCall` nổi bật với nền ấm `#fff7ed` và viền `#fed7aa`, chữ cam đậm `#9a3412` tương phản cao, tích hợp `trackPhoneClick('mobile_floating_bar')`.
    2. **Nút Nhắn Zalo**: Mở Zalo 24/7 trực tiếp tab mới (`https://zalo.me/0834422439`), icon `MessageCircle` với nền xanh dịu `#eff6ff` và viền `#bfdbfe`, chữ xanh `#1d4ed8`, tích hợp `trackZaloClick('mobile_floating_bar')`.
    3. **Nút Đăng ký tư vấn**: Primary CTA trung tâm nổi bật nhất, nền xanh thương hiệu `#0d7647`, chữ trắng tương phản cao, icon `Sparkles`, mở Lead Modal xem Web Demo 0đ tức thì, tích hợp `trackCTAClick('Đăng ký tư vấn', 'mobile_floating_bar')`.
- **Chuẩn công thái học di động (Ergonomics & A11y)**:
  - Chiều cao các nút đạt chuẩn WCAG 2.1 AA (`min-height: 46px`, tap target >= 44px).
  - Bo tròn mềm mại 12px (`border-radius: 12px`), bóng đổ nhẹ tự nhiên (`box-shadow: 0 -3px 16px rgba(15, 23, 42, 0.08)`).
  - Phản hồi xúc giác nhanh (`:active { transform: scale(0.97); }` trong 120ms).
  - Chống vỡ dòng chữ trên màn hình siêu hẹp (<= 360px): co giãn tỉ lệ thông minh, `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`.
- **An toàn Safe Area Insets trên cả iPhone & Android**:
  - Khai báo chuẩn `viewport-fit=cover` trong `index.html` meta tag.
  - Sử dụng `padding-bottom: max(8px, env(safe-area-inset-bottom, 8px))` và `padding-left/right: max(10px, env(safe-area-inset-...))` tương thích cả iPhone (Home Indicator) và Android navigation bar.
  - Tự động cộng khoảng đệm an toàn `padding-bottom: calc(68px + env(safe-area-inset-bottom, 0px)) !important;` cho thẻ `body` trên mobile, triệt tiêu hoàn toàn lỗi che khuất chân trang (footer) hoặc nút tương tác dưới cùng.
- **Kiểm thử nghiệm thu**: `npm run build` pass 100% không lỗi (Vite build thành công trong ~7.3s).

## 12. Market Mapping & Comparative Positioning: FastMarketing vs LocalMate
- **Nghiên cứu & Đối chiếu thực tế từ FastMarketing (https://fastmarketing.com.vn/)**:
  - *Agency lớn / Tập trung doanh nghiệp lớn*: Pitching bằng slide deck 2026 hoành tráng, dùng thuật ngữ đao to búa lớn (GEO, AEO, Entity AI, Search Generative Experience, Full-funnel, SGE...), mức giá rất cao từ 15 – 50 triệu/tháng (chưa tính ngân sách chạy Ads).
  - *Nỗi đau của chủ tiệm / SMB*: Bị ép ký hợp đồng dài hạn, sale chốt xong đẩy qua intern/fresher làm qua loa gián tiếp, hết hợp đồng bị phủi tay hoặc tính phí sửa chữa cắt cổ, bị giam lỏng tài khoản (hosting, domain, Google Maps), bắt cọc 50-100% rủi ro cao.
- **Xây dựng component đối chiếu minh bạch `src/components/sections/MarketComparisonSection.tsx`**:
  - Bảng đối chiếu 6 khía cạnh sống còn của chủ tiệm & hộ kinh doanh SMB:
    1. **Chi phí đầu tư**: Agency lớn (15 – 50tr/tháng, hợp đồng dài hạn, phụ phí phát sinh) vs LocalMate (Chỉ từ 490k – 2.9tr trọn gói, giá từ gốc, 0đ phụ phí ẩn).
    2. **Người triển khai**: Agency lớn (Sale chốt xong đẩy qua intern/fresher, ticket chờ cả tuần) vs LocalMate (Kỹ thuật viên địa phương hỗ trợ 1-1 tại chỗ, ghé tận quán, Zalo 15-30 phút).
    3. **Trách nhiệm sau bàn giao**: Agency lớn (Hết hợp đồng là phủi tay, bỏ rơi web) vs LocalMate (Người đồng hành số địa phương, cam kết bảo hành kỹ thuật lên đến 5 NĂM).
    4. **Quyền sở hữu tài sản**: Agency lớn (Giữ tài khoản, giam con tin kỹ thuật) vs LocalMate (Bàn giao 100% tài khoản chính chủ bằng CCCD & Gmail của khách).
    5. **Ngôn ngữ & Tư vấn**: Agency lớn (Nói thuật ngữ công nghệ phức tạp, báo cáo số liệu ảo) vs LocalMate (Nói tiếng bình dân, chỉ rõ khách gọi điện từ đâu, tăng đơn ra sao).
    6. **Rủi ro thanh toán**: Agency lớn (Bắt cọc 50-100% mới làm, rủi ro khách chịu) vs LocalMate (Dựng Demo xem thử 0đ, nghiệm thu hài lòng 100% mới thanh toán).
  - **Thiết kế UI/UX**:
    - Chuẩn Light Mode, không glassmorphism, tương phản cao, nền sáng chữ đậm (`#0f172a`, `#111827`), xanh thương hiệu `#0d7647`.
    - Dải 4 thẻ tóm tắt nổi bật (Quick Stats Summary).
    - Bộ lọc tab theo từng khía cạnh so sánh.
    - Bố cục lưới 3 cột desktop + tự động thích ứng 1 cột trên mobile không tràn viền ngang (zero horizontal overflow).
    - Hộp kêu gọi hành động với cam kết xem trước Demo 0đ và nút gặp KTV tại chỗ 1-1.
- **Tích hợp thực tế**:
  - Trang chủ `src/pages/HomePage.tsx`: Vị trí đắc địa ngay trước `PricingMatrixSection` để giải tỏa triệt để băn khoăn về giá và giá trị của khách hàng.
  - Trang giải pháp `src/pages/SolutionsPage.tsx`: Củng cố lý do tại sao các ngành nghề nên chọn LocalMate thay vì thuê agency trung tâm đắt đỏ.
- **Nghiệm thu**: Build pass 100% không lỗi (Vite build thành công trong 5.43s).

---

## 13. Xây Dựng & Chuẩn Hóa Cụm Dịch Vụ Chạy Khách & Chăm Sóc Vận Hành (Học Hỏi Từ FastMarketing)
- **Bối cảnh & Nghiên cứu thị trường**:
  - Học hỏi thế mạnh chuyên môn thực chiến của FastMarketing tại Việt Nam: chuyên chạy Google Ads địa phương, gỡ lỗi tài khoản vi phạm chính sách cho các ngành sửa chữa nhạy cảm (sửa điện thoại, laptop, máy lạnh, cứu hộ khóa...), Facebook Ads bán kính quanh tiệm và chăm sóc website định kỳ.
  - Chuẩn hóa theo triết lý LocalMate: Bình dân, thực tế, 0% kê giá ăn chênh lệch, 100% tài khoản chính chủ của khách, bảo hành kỹ thuật lên đến 5 năm, giao diện 100% Light mode, không glassmorphism.
- **4 Dịch Vụ Cốt Lõi Được Chuẩn Hóa Toàn Diện**:
  1. **Google Ads Địa Phương (`google-ads-dia-phuong`)**:
     - Tìm kiếm khách có nhu cầu mua thực tế quanh bán kính 3–10km quanh tiệm.
     - **0% phí chênh lệch**: Khách hàng tự nạp tiền cho Google bằng thẻ Visa/Mastercard cá nhân/công ty, sao kê trừ bao nhiêu trả bấy nhiêu. LocalMate chỉ thu phí kỹ thuật cài đặt (từ 390k) hoặc tối ưu hàng tháng (từ 690k).
     - **100% tài khoản chính chủ**: Khách giữ quyền Admin cao nhất, sở hữu trọn đời lịch sử tìm kiếm và tệp khách.
     - Chặn 200+ từ khóa rác, cài nút gọi Hotline 1 chạm và đo lường chuyển đổi chuẩn xác qua GA4/GTM.
  2. **Khắc Phục Lỗi Ads Ngành Sửa Chữa (`khac-phuc-loi-google-ads-sua-chua`)**:
     - Chuyên trị các ca khó cho thợ sửa điện thoại (iPhone/Android), ép kính, sửa laptop (Macbook/Dell/ThinkPad), điện lạnh (máy lạnh, tủ lạnh, máy giặt), sửa khóa.
     - Xử lý triệt để chính sách Google: "Dịch vụ kỹ thuật bên thứ ba", "Mạo danh nhãn hiệu", "Tránh né hệ thống".
     - Quy trình chính ngạch: Sửa trang đích bổ sung Independent Disclaimer, gỡ bỏ logo vi phạm Trademark, công khai thông tin pháp nhân & bảng giá, soạn hồ sơ giải trình song ngữ kèm ĐKKD/hợp đồng thuê tiệm và thiết lập tài khoản whitelist an toàn.
     - Đánh giá hồ sơ 0đ trước khi nhận việc, không mở khóa được hoàn tiền 100%. Giá từ 1.290.000đ/lần.
  3. **Facebook Ads Địa Phương (`facebook-ads-dia-phuong`)**:
     - Cắm mốc GPS tại địa chỉ tiệm, quét bán kính 1km – 5km quanh tiệm (loại bỏ hoàn toàn đối tượng ở tỉnh xa).
     - Thiết kế banner & bài viết từ ảnh thật tại quán, kích thích cư dân lân cận nhắn tin đặt lịch hoặc ghé trải nghiệm trực tiếp.
     - Cài kịch bản FAQ tin nhắn tự động (Quick Replies) hỏi số điện thoại và báo giá tức thì.
     - Giá từ 490k setup, chăm sóc 790k/tháng.
  4. **Chăm Sóc Website Chuẩn SEO & Vận Hành (`cham-soc-website-chuan-seo`)**:
     - Đóng vai trò phòng IT & Content thuê ngoài: giám sát Uptime 24/7, gia hạn SSL, sao lưu (backup) cơ sở dữ liệu hàng tuần, tối ưu CDN Cloudflare < 1.2s.
     - Nhận yêu cầu qua nhóm Zalo riêng 1-1, sửa đổi nội dung và đổi banner sau 15–30 phút.
     - Biên tập 4–8 bài viết chuẩn SEO/tháng đưa website lên top Google bền vững.
     - **Cam kết bảo hành kỹ thuật lên đến 5 NĂM** (duy nhất tại LocalMate). Giá từ 590k – 990k/tháng.
- **Các Thành Phần Kỹ Thuật Đã Triển Khai**:
  - `src/pages/OperationalCareClusterPage.tsx`: Trang landing chuyên sâu cho Cụm Dịch Vụ Chạy Khách & Vận Hành với Hero, Trust Bar, 4 Card dịch vụ chi tiết, bảng đối chiếu với Agency truyền thống, quy trình 4 bước và FAQ.
  - `src/App.tsx`: Định tuyến `/dich-vu/chay-khach-cham-soc`, `/dich-vu/chay-khach-van-hanh`, `/chay-khach-van-hanh`, `/chay-khach-cham-soc`.
  - `src/data/servicesData.ts`: Bổ sung 4 ServiceEntity hoàn chỉnh với Problem, Outcome, Deliverables, Process, FAQs và bộ alias URLs toàn diện.
  - `src/data/servicesCatalog.ts`: Cập nhật bảng giá niêm yết (dịch vụ 28, 29, 30, 31) và bổ sung cam kết bảo hành 5 năm vào `DIGITAL_CARE_TIERS`.
  - `src/data/operationsData.ts`: Cập nhật aliases đồng bộ cho `ALL_15_SERVICES_DATA`.
  - `src/pages/ServicesPage.tsx`: Thêm banner nổi bật điều hướng người dùng khám phá cụm dịch vụ chuyên sâu.
  - `src/components/layout/Header.tsx`: Cập nhật mega menu bổ sung link trực tiếp tới Facebook Ads 5km và Cụm Chạy Khách & Vận Hành.
- **Kiểm Thử Nghiệm Thu**:
  - `npx tsc --noEmit` PASS 100% không lỗi.
  - `npm run build` PASS 100% trong 5.83s (0 lỗi cú pháp, 0 lỗi TypeScript).


## 13. Cụm Dịch Vụ Local Search, Google Maps & Technical (Chuẩn Hóa Từ FastMarketing Cho LocalMate)
- **Học hỏi FastMarketing & Chuẩn hóa cho LocalMate**:
  1. **Dịch vụ Google Maps**: Xác minh GPS chính chủ 100% bằng Gmail của khách (Primary Owner), thiết lập khiên bảo vệ chống đối thủ chơi xấu cướp Maps hoặc đổi số điện thoại lén, tặng kèm bộ ấn phẩm mã QR Đánh Giá Chân Thực để bàn chuẩn file in vector, cam kết bảo hành kỹ thuật lên đến 5 năm (giá gốc từ 299k).
  2. **Dịch vụ SEO Tổng Thể Địa Phương**: Phủ sóng bán kính 3–10km xung quanh điểm bán, tối ưu 100% cụm từ khóa có dấu & không dấu (ví dụ: "sua xe gan day", "nha khoa uy tin q7"), phủ 25+ trích dẫn địa phương Local Citations kéo khách ghé tiệm và gọi hotline liên tục (từ 390k).
  3. **Dịch vụ Tối Ưu Tốc Độ Web**: Cam kết điểm Google PageSpeed Insights 90+ trên cả Mobile & Desktop, tốc độ mở trang dưới 1s trên mạng lưới biên Cloudflare Edge CDN toàn cầu, nén ảnh WebP/AVIF lossless, Zero CLS (0.000), bảo hành tốc độ 5 năm (từ 299k).
  4. **Dịch vụ Thực Thể Số (Entity & Schema)**: Cấu hình trọn bộ Schema JSON-LD LocalBusiness (GeoCoordinates, OpeningHours, PriceRange, SameAs) và đồng bộ NAP trên Knowledge Graph, giúp cả Google và AI (ChatGPT, Gemini) nhận diện thương hiệu độc nhất (từ 199k).
  5. **Dịch vụ SEO Audit Hiện Trạng 0đ**: Khảo sát hiện trạng toàn diện 0đ miễn phí 100%, vạch trần điểm nghẽn chuyển đổi (tại sao có web/maps mà không có khách gọi), báo cáo sau 24h kèm lộ trình Quick-Win xử lý ngay.
- **Trang Hub Chuyên Sâu Mới**: `src/pages/LocalSearchClusterPage.tsx` tại tuyến đường `/dich-vu/local-search` (hỗ trợ các alias `/dich-vu/google-maps-seo`, `/local-search`).
- **Tính năng tương tác độc đáo**:
  - Tab navigator 5 dịch vụ trực quan, đầy đủ bài toán, giải pháp, bảng giá, quy trình 5 bước.
  - Công cụ tự chẩn đoán sức khỏe số 0đ (Local Health Score Checker) cho phép chủ quán tích chọn triệu chứng và tính điểm nghẽn trực tiếp.
  - Widget so sánh trực quan tốc độ Cloudflare Edge vs Hosting truyền thống.
  - Mô hình Standee mã QR Đánh Giá Chân Thực để bàn cho quán ăn, spa, nha khoa.
  - Bảng cam kết 4 KHÔNG & 4 CÓ của Người đồng hành số địa phương.
- **Tích hợp hệ sinh thái**:
  - Cập nhật 5 dịch vụ trong `src/data/servicesData.ts` và `src/data/servicesCatalog.ts`.
  - Header Mega Menu gắn liên kết trực tiếp tới Cụm Local Search và các dịch vụ thành phần.
  - ServicesPage gắn banner nổi bật cho Cụm Local Search bên cạnh Cụm Vận Hành.
- **Nghiệm thu**: Build pass 100% không lỗi (`npm run build` hoàn tất sạch sẽ).
## 14. Catalog Hub & Dynamic Service Router Integration (15 Dịch Vụ Chuẩn Hóa)
- **Tập hợp 15 dịch vụ tiêu chuẩn trong `src/data/operationsData.ts`**:
  1. `geo`: Dịch vụ GEO — Tối ưu đề xuất AI (ChatGPT & Gemini) (2.9tr/th)
  2. `aeo`: Dịch vụ AEO — Tối ưu câu trả lời AI Search (2.49tr/th)
  3. `seo-ai`: Dịch vụ SEO AI — Google AI Overviews 2026 (2.9tr/th)
  4. `seo-chatgpt`: Dịch vụ SEO ChatGPT & SearchGPT (2.49tr/th)
  5. `thiet-ke-website`: Thiết Kế Website Chuyên Nghiệp Tốc Độ < 1s (từ 490k)
  6. `seo-tong-the`: Dịch vụ SEO Tổng Thể Địa Phương (1.99tr/th)
  7. `google-maps`: Dịch vụ Google Maps Xác Minh GPS Chính Chủ & Top 3-Pack (từ 299k)
  8. `toi-uu-toc-do-web`: Tối Ưu Tốc Độ Web PageSpeed > 90 (490k)
  9. `dich-vu-entity`: Dịch vụ Entity Xây Dựng Thực Thể Số (1.49tr)
  10. `seo-audit`: Dịch vụ SEO Audit Website Khảo Sát 0đ (0đ - 990k)
  11. `google-ads`: Dịch vụ Quảng Cáo Google Ads 0% Kê Giá (từ 390k)
  12. `khac-phuc-loi-google-ads`: Khắc Phục Lỗi Ads Sửa Chữa Điện Thoại/Laptop/Điện Lạnh (990k)
  13. `facebook-ads`: Dịch vụ Quảng Cáo Facebook Ads Quanh Bán Kính Điểm Bán (từ 490k)
  14. `cham-soc-website`: Dịch Vụ Chăm Sóc & Vận Hành Web Bảo Hành 5 Năm (990k/th)
  15. `khoa-hoc-geo-ai`: Khóa Đào Tạo Chuyển Giao GEO & AI Thực Chiến (1.99tr)
- **Đặc trưng cấu trúc**:
  - Khai báo kiểu TypeScript rõ ràng (`OperationServiceItem`), mỗi dịch vụ gồm slug, tên, icon, badge, giá gốc minh bạch, cam kết bảo hành lên đến 5 năm, 3 deliverables chính, danh sách deliverables cụ thể, đối tượng phù hợp/chưa phù hợp, quy trình 5 bước và FAQs thực tế.
  - Cung cấp hàm tra cứu `getAllOperationServices()` và `getOperationServiceBySlug(slug)` hỗ trợ hệ thống alias đa dạng (`geo-local`, `dich-vu-geo`, `thiet-ke-web`, `google-ads`, v.v.).
- **Tối ưu Catalog Hub `src/pages/ServicesPage.tsx`**:
  - Giao diện Light Mode sáng sủa, thanh tìm kiếm Search Bar thời gian thực và 6 tab phân loại danh mục.
  - Hiển thị 15 thẻ Card tiêu chuẩn với badge, giá to rõ, pill bảo hành 5 năm, 3 deliverables checkmark và link điều hướng mượt mà đến `/dich-vu/:slug`.
  - Tích hợp `Warranty5YearSection` và `PricingMatrixSection` (bảng giá 41 dịch vụ chi tiết).
- **Master Dynamic Template `src/pages/ServiceDetailPage.tsx`**:
  - Phân giải dịch vụ kết hợp `getOperationServiceBySlug` và `getServiceBySlug`, tương thích 100% với 15 dịch vụ chuẩn hóa và các slug chuyên biệt.
  - Hiển thị thông tin toàn diện: Hero với bảo hành 5 năm, 4 giá trị niềm tin, Vấn đề & Cam kết giải pháp, Danh sách sản phẩm bàn giao, Quy trình 5 bước, Yêu cầu chuẩn bị, FAQs, Dịch vụ liên quan gợi ý chéo và CTA Footer.
- **Điều hướng Header & Footer đồng bộ**:
  - Header Mega Menu 3 cột phân loại logic và Mobile Drawer có danh sách dịch vụ nhanh + liên kết "Xem tất cả 15 dịch vụ & bảng giá".
  - Footer Cột 2 liên kết trực tiếp tới các dịch vụ trọng điểm.
- **Nghiệm thu**:
  - `npm run build` PASS 100% không lỗi (build xong trong ~3.9s).

## 15. Tích Hợp Hệ Thống Routing, 5 Trụ Cột Giải Pháp (Solution Pillars) & QA Build Pass
- **Tác giả / Vai trò**: Router & QA Integration Agent
- **Mục tiêu**: Tích hợp toàn bộ hệ thống routing, alias thuận tiện và kiểm thử chất lượng tổng thể toàn dự án theo chuẩn SSOT.
- **Khai báo 5 Trụ Cột Giải Pháp (Solution Pillars) trong `src/App.tsx`**:
  1. `/giai-phap/xay-nen-tang-so` (alias `/giai-phap/nen-tang-so`, `/dich-vu/xay-nen-tang-so`, `/dich-vu/nen-tang-so`) -> `PresenceSolutionPage`: Xây dựng nền tảng số, website chuẩn di động < 1s, định vị Google Maps GPS, kết nối nút gọi/Zalo 1 chạm, bàn giao 100% tài khoản chính chủ và cam kết bảo hành kỹ thuật 5 năm.
  2. `/giai-phap/duoc-tim-thay` (alias `/dich-vu/duoc-tim-thay`) -> `SearchSolutionPage`: Đưa cơ sở lên top Google Maps Local Pack, tối ưu đề xuất AI (GEO - ChatGPT & Gemini), chuẩn hóa NAP và tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google.
  3. `/giai-phap/thu-hut-khach-hang` (alias `/dich-vu/thu-hut-khach-hang`) -> `AcquisitionSolutionPage`: Kéo khách gọi điện và ghé tiệm quanh bán kính 3-10km, quảng cáo Google Ads & Meta Ads 0% kê giá (trừ tiền thẻ chính chủ), xử lý kháng lỗi ngành nhạy cảm.
  4. `/giai-phap/van-hanh-tu-dong-hoa` (alias `/dich-vu/van-hanh-tu-dong-hoa`) -> `AutomationSolutionPage`: Vận hành tự động hóa, chuông báo đơn tức thì qua Telegram sau 3 giây, đặt lịch hẹn online 24/7 và đồng bộ Google Sheets CRM không tốn phí bản quyền.
  5. `/giai-phap/dong-hanh-cham-soc` (alias `/giai-phap/dong-hanh-duy-tri`, `/dich-vu/dong-hanh-cham-soc`, `/dich-vu/dong-hanh-duy-tri`) -> `CareSolutionPage`: Phòng kỹ thuật số ngoài túc trực 24/7, xử lý sự cố trong 2 giờ, hỗ trợ đăng bài/đổi giá qua Zalo và hoàn thiện hồ sơ thông báo Bộ Công Thương.
- **Hệ Thống Route Aliases & Hub**:
  - `/giai-phap`: Trỏ tới `ServicesPage` (Hub giải pháp chuyển đổi số toàn diện).
  - `/dich-vu`: Tiếp tục hoạt động trỏ tới `ServicesPage` (Bảo toàn 100% liên kết và SEO cũ).
  - Bảo toàn nguyên vẹn các route chuyên sâu: `/dich-vu/geo`, `/dich-vu/aeo`, `/dich-vu/seo-ai`, `/dich-vu/seo-chatgpt`, `/dich-vu/local-search`, `/dich-vu/chay-khach-cham-soc`.
  - Chuẩn hóa xử lý trailing slash tự động bằng `normalizedPath = currentPath.replace(/\/$/, '') || '/'`.
- **Tạo Mới 5 Component Trang Trụ Cột Độc Lập**:
  - `src/pages/PresenceSolutionPage.tsx`
  - `src/pages/SearchSolutionPage.tsx`
  - `src/pages/AcquisitionSolutionPage.tsx`
  - `src/pages/AutomationSolutionPage.tsx`
  - `src/pages/CareSolutionPage.tsx`
  - Mỗi trang được thiết kế 100% Light Mode chuẩn nhận diện thương hiệu (`#0d7647`, `#0f172a`, `#f8fbfa`), typography rõ ràng, không glassmorphism, tích hợp đầy đủ SEOHead, Breadcrumbs, Deliverables, Quy trình 4 bước, FAQs và Lead Modal trigger.
- **Sửa Lỗi & Tinh Chỉnh Chất Lượng Toàn Dự Án (QA Bug Fixes)**:
  - `src/components/ui/Button.tsx`: Bổ sung variant `'outline'` tương thích với secondary/ghost.
  - `src/components/layout/Router.tsx`: Mở rộng `LinkProps` kế thừa `React.AnchorHTMLAttributes<HTMLAnchorElement>` để hỗ trợ các sự kiện chuột (`onMouseEnter`, `onMouseLeave`...).
  - `src/components/solutions/SolutionUseCases.tsx`: Chuẩn hóa kiểu `ICON_MAP: Record<string, React.ComponentType<any>>` tránh lỗi incompatible validation type của LucideIcon.
  - `src/data/solutionPillarsData.ts`: Khai báo và export đầy đủ `SOLUTION_PILLARS_DATA`, `SolutionPillarItem`, `INDUSTRY_SCENARIOS_DATA` và `COMPARISON_TABLE_DATA` kèm `traditionalWay` phục vụ hiển thị trên `ServicesPage` và `SolutionsPage`.
- **Kết Quả Build**:
  - `npm run build`: **SUCCESS 100% (Exit code 0)** — 1566 modules transformed, không có bất kỳ lỗi cú pháp hay TypeScript nào.


## 15. Chuẩn Hóa Cụm 6 Trang Năng Lực Chuyên Sâu (SEO Capability Pages Aligner)
- **Mục tiêu**: Tái định vị các trang dịch vụ ngách kỹ thuật thành các trang năng lực chuyên sâu (Capability Pages), củng cố cấu trúc Hub & Spoke với trang giải pháp cha `/giai-phap/duoc-tim-thay`, đảm bảo không làm gãy URL/backlink cũ và hạ giọng văn về chuẩn chuyên nghiệp, kỹ thuật thực chất.
- **6 Trang chuẩn hóa**:
  1. `src/pages/GeoServicePage.tsx` (`/dich-vu/geo`)
  2. `src/pages/AeoServicePage.tsx` (`/dich-vu/aeo`)
  3. `src/pages/SeoAiServicePage.tsx` (`/dich-vu/seo-ai`)
  4. `src/pages/SeoChatGptServicePage.tsx` (`/dich-vu/seo-chatgpt`)
  5. `src/pages/LocalSearchClusterPage.tsx` (`/dich-vu/local-search`)
  6. `src/pages/OperationalCareClusterPage.tsx` (`/dich-vu/chay-khach-cham-soc`)
- **Các cải tiến đã thực hiện**:
  - **Tạo mới component `CapabilityContextBox.tsx`**: Nền sáng xanh dịu (`#f0fdf4`), viền `#bbf7d0`, text `#166534`, chứa thông điệp ngữ cảnh chuẩn và nút CTA "Về giải pháp cha" (`/giai-phap/duoc-tim-thay`).
  - **Chuẩn hóa Breadcrumb hierarchy**: `Trang chủ -> Giải pháp -> Được khách hàng tìm thấy (hoặc giải pháp cha) -> [Tên module này]`.
  - **Hạ giọng văn & chuẩn hóa từ ngữ**:
    - Loại bỏ các từ ngữ hứa hẹn thái quá ("chắc chắn lên top 1 ChatGPT", "chém giá 50 triệu", "bẻ gãy thị trường", "thống trị", "chiếm lĩnh").
  - **Typecheck & Build**: Cả 6 trang và component mới compile sạch sẽ, 0 lỗi TypeScript.

---

## 16. Hoàn Thành Bộ Component Hiển Thị Trang Giải Pháp Tái Sử Dụng (Reusable Solution Template)
- **Tác giả / Vai trò**: Frontend & Solution Component Builder
- **Mục tiêu**: Xây dựng trọn bộ 11 component trang giải pháp có khả năng tái sử dụng độc lập tại `src/components/solutions/`, tương thích 100% với kiểu dữ liệu `Solution` trong `src/data/solutionsData.ts`.
- **Danh mục 11 component chuyên dụng**:
  1. `SolutionHero.tsx`: Tiêu đề theo ngôn ngữ nhu cầu, breadcrumb điều hướng, pain-point pill nổi bật, nút CTA "Trao đổi việc đang cần" + nút xem quy trình, chips đối tượng phù hợp và dải trust pills (demo 0đ, KTV 1-1, chính chủ 100%).
  2. `SolutionProblems.tsx`: Khối 3-4 vấn đề thường gặp mà khách hàng đang đối mặt, hiển thị số thứ tự, icon cảnh báo, mô tả thực tế và box hệ quả thực tế tương phản cao.
  3. `SolutionOutcomes.tsx`: Kết quả thực tế hướng tới (tăng hiện diện, đo lường được, giảm việc thủ công...) với metric số liệu to rõ, label, mô tả và highlight tag.
  4. `SolutionWorkflow.tsx`: Phân định trách nhiệm 2 cột rõ ràng: "LocalMate chủ động làm gì (90% việc kỹ thuật)" vs "Khách hàng chỉ cần làm gì (duyệt và cung cấp nội dung)", kèm mốc thời gian và kết quả từng chặng.
  5. `SolutionCapabilities.tsx`: Khối modules / capabilities kỹ thuật (Google Business Profile, Schema JSON-LD, Cloudflare Edge, Nút gọi 1 chạm...) với giải thích bằng "tiếng người" dễ hiểu và lợi ích thực tế thu về.
  6. `SolutionDeliverables.tsx`: Những thứ khách hàng thực sự nhận được (bàn giao rõ ràng, tài liệu hướng dẫn, quyền sở hữu tài khoản chính chủ 100%, không bị giam giữ dữ liệu).
  7. `SolutionProcess.tsx`: Quy trình 4-6 bước triển khai gọn gàng với visual stepper, mốc thời gian ước lượng và cam kết dựng demo xem trước 0đ.
  8. `SolutionUseCases.tsx`: Kịch bản ứng dụng thực tế theo từng ngành nghề (quán ăn/F&B, phòng khám, dịch vụ sửa chữa/gara, xưởng xây dựng...) với bối cảnh, thiết lập cốt lõi và kết quả chuyển đổi.
  9. `SolutionPricing.tsx`: Bảng các gói triển khai minh bạch, tách rõ chi phí khởi tạo (làm 1 lần) và chi phí duy trì định kỳ, nổi bật gói phổ biến và cam kết giá cố định.
  10. `SolutionFAQ.tsx`: Accordion giải đáp thắc mắc thường gặp liên quan trực tiếp đến giải pháp, hỗ trợ đóng/mở mượt mà.
  11. `SolutionPageTemplate.tsx`: Template tổng hợp ghép các component trên lại dựa theo dữ liệu từ `Solution` interface trong `src/data/solutionsData.ts`, tích hợp SEOHead, Breadcrumbs, Sticky quick-nav bar, form nhận demo 0đ tức thì và bottom CTA bar.
- **Tiêu chuẩn thiết kế & kỹ thuật**:
  - 100% Light Mode sáng sủa (`#fbfcfb` / `#ffffff`), chữ đậm (`#0f172a`), viền crisp nhạt (`#e2e8f0`).
  - Tuyệt đối không xài glassmorphism, không backdrop-filter mờ ảo.
  - Responsive mượt mà từ mobile 390px đến desktop 1440px, chống tràn ngang (`min-width: 0`, `box-sizing: border-box`).
  - Đóng gói xuất khẩu tập trung qua `src/components/solutions/index.ts`.
- **Nghiệm thu**:
  - `npx tsc --noEmit` PASS 100% không lỗi.
  - `npm run build` PASS 100% (1566 modules transformed, build hoàn tất trong 6.58s).

---

## 17. Hoàn Thành Xây Dựng Trang Bộ Tiêu Chuẩn Kỹ Thuật Số Điểm Kinh Doanh Địa Phương 2026
- **Tác giả / Vai trò**: Technical Audit Checklist Page & Standards
- **Tệp mới**:
  - `src/data/technicalAuditStandardsData.ts`: Danh mục 30 tiêu chí kỹ thuật chuẩn mực phân bổ thành 5 nhóm trụ cột (mỗi nhóm 6 tiêu chí), 14 Bắt buộc, 10 Quan trọng, 6 Nâng cao. Kèm benchmark, giải thích đơn giản cho chủ tiệm, tác động kinh doanh và giải pháp LocalMate.
  - `src/pages/TechnicalAuditStandardsPage.tsx`: Trang kiểm chuẩn toàn diện với:
    - 5 Tab nhóm chuyên môn + Bộ lọc theo mức độ ưu tiên + Ô tìm kiếm từ khóa trực quan.
    - Bộ công cụ tương tác "Tự chấm điểm website": Tích chọn từng tiêu chí, tính % đạt chuẩn, hiển thị chẩn đoán tự động.
    - Bảng so sánh "Website tự phát/cũ kỹ vs Chuẩn mực LocalMate 2026".
    - Form tiếp nhận kiểm tra website 0đ tích hợp `submitLead`.
    - Hỗ trợ in ấn và xuất file PDF với `@media print` được tối ưu chuyên nghiệp.
    - Khối hỏi đáp FAQ và Bottom CTA cam kết bảo hành 5 năm.
- **Routing**:
  - Cập nhật `src/App.tsx`: Liên kết route chính `/tieu-chuan-audit` cùng các alias `/tieu-chuan-audit-ky-thuat`, `/technical-audit-standards`, `/tieu-chuan-website-2026`.
  - Cập nhật `src/pages/HtmlSitemapPage.tsx`: Thêm liên kết vào sơ đồ website HTML.
- **Kiểm thử**: `npm run build` thành công 100% (1580 modules transformed, 0 lỗi TypeScript).

---

## 18. Hoàn Thành Cập Nhật Cấu Hình Technical Crawl, SEO & IndexNow Automation
- **Tác giả / Vai trò**: Subagent Technical Crawl & SEO Optimizer
- **Chi tiết các mục triển khai**:
  1. `public/robots.txt`:
     - Khai báo Allow cho toàn bộ Search Bots (Googlebot, Bingbot) và AI Crawlers (OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Applebot-Extended, Google-Extended, Bytespider).
     - Khai báo sitemap chuẩn: `https://localmate.vn/sitemap.xml` và tài liệu ngữ cảnh LLM: `Link: https://localmate.vn/llms.txt`.
  2. `public/sitemap.xml`:
     - Cập nhật chuẩn hóa danh sách 15 URL cốt lõi (Trang chủ, 5 trụ cột dịch vụ, Bảng giá, Dự án, 3 Case Studies chuẩn mực Xèo, Nam Phát, Hương Sen, Về LocalMate, Liên hệ, Kiến thức, Landing 490k) và các dịch vụ GEO/AEO/bài viết thực tế.
     - Đồng bộ ngày `lastmod` thực tế: `2026-09-14`.
  3. IndexNow Key & Automation:
     - Tạo file xác thực key root: `public/8c3b7a2d59144e3fae8026194b159f8e.txt`, `public/indexnow-key.txt`, `public/indexnow.json`.
     - Tạo script tự động `scripts/submit-indexnow.js` ping đồng thời `api.indexnow.org` và `www.bing.com`.
     - Thêm lệnh `npm run submit:indexnow` vào `package.json`.
     - Kiểm thử gửi payload: Cả 2 cổng Bing và IndexNow đều trả về HTTP `202 Accepted` thành công.
  4. Routing Architecture (`src/App.tsx`):
     - Định tuyến trực tiếp các canonical paths: `/thiet-ke-website`, `/google-maps-local-seo`, `/google-ads`, `/content-marketing`, `/automation` về đúng components chuyên biệt.
  5. Nghiệm thu: `npm run build` PASS 100% (1580 modules, không lỗi TypeScript).

