# Lessons Learned & Knowledge Bank — LocalMate

Tài liệu này ghi chép các bài học kinh nghiệm, lưu ý kỹ thuật và giải pháp kiến trúc trong quá trình phát triển LocalMate.

## 8. Navigation, Mega Menu & Footer Enrichment: Hệ Thống Tài Nguyên Số & Chuẩn Hóa Touch Target Di Động (`Header.tsx`, `Footer.tsx`)
- **Bối cảnh & Nhiệm vụ**: Khi hệ thống bổ sung hàng loạt công cụ và trang quy trình chuyên sâu từ FastMarketing (`/khao-sat-du-an`, `/chien-luoc-5-giai-doan`, `/quy-trinh-geo`, `/tieu-chuan-audit`, `/quy-trinh-cham-soc`, `/ho-so-nang-luc`), cấu trúc Header và Footer cũ (chỉ có link đơn giản "Kiến thức") không còn đáp ứng được việc dẫn dắt luồng người dùng tiếp cận kho tài nguyên giá trị này.
- **Giải pháp Kiến Trúc & UI/UX**:
  1. *Desktop Header Navigation*:
     - Bổ sung nút bấm nổi bật **"Khảo sát dự án 0đ"** (`/khao-sat-du-an`) tại khu vực `header-desktop-actions` với phong cách pill sáng màu MISA (`#f0fdf4`, viền `#86efac`, chữ xanh đậm `#0d7647`, hover nhấc nhẹ 1px), kích thước 40px cân đối hoàn hảo.
     - Nâng cấp mục "Kiến thức" thành Mega Dropdown **"Kiến thức & Tài nguyên"** với 6 thẻ điều hướng trực quan: Lộ trình 5 giai đoạn (Tăng trưởng), Quy trình GEO & AI (Chuẩn 2026), Tiêu chuẩn Audit 2026 (Kỹ thuật), Quy trình chăm sóc số (Bảo hành 5 năm), Hồ sơ năng lực 2026 (40 Slide), và Trung tâm kiến thức; kèm banner chân dropdown mời làm khảo sát 0đ.
  2. *Mobile Drawer Menu (Chuẩn Touch Target >= 44px)*:
     - Bổ sung Section chuyên biệt **"TÀI NGUYÊN & QUY TRÌNH"** với card nổi bật "Khảo sát dự án 0đ" (cao 66px, badge "0đ").
     - Tối ưu toàn bộ liên kết và icon với `min-height: 46px - 48px`, padding 10px-12px, đảm bảo 100% phần tử tương tác đạt chuẩn touch target >= 44px của Google Web Vitals & Apple HIG.
  3. *5-Column Rich Footer & Logo Bộ Công Thương To Rõ*:
     - Tái cấu trúc Footer từ 4 cột sang **5 cột chuyên nghiệp trên Desktop**: Hồ sơ pháp nhân (MST, Trụ sở, VP Hóc Môn) -> 5 Trụ Cột Giải Pháp -> Tài Nguyên & Quy Trình (MỚI) -> Chính Sách & Minh Bạch -> Đặc Quyền Địa Phương (Tư vấn 1-1 tận nơi & Kênh kết nối).
     - Logo **Bộ Công Thương** được phóng to rõ nét với chiều cao `48px` (kích thước render thực tế 155x48px), có `drop-shadow` nhẹ nhàng, tạo độ tin cậy pháp lý tuyệt đối cho khách hàng doanh nghiệp địa phương.
  4. *Độ Tương Thích Responsive Đa Màn Hình (Matrix Audit)*:
     - Đã kiểm thử tự động với `agent-browser` trên màn hình Laptop 14" scale 125% (`1152 x 720`): `hasHorizontalOverflow: false`, header height 70px vừa vặn không co giật.
     - Kiểm thử trên di động (`390 x 844`): Drawer mở mượt mà, `allLinksPassTouchTarget: true`.
  5. *Nguyên tắc UI*: 100% Light Mode sáng màu, độ tương phản cao, nền sáng chữ đậm (`#0f172a`), tuyệt đối CẤM Glassmorphism.

---
- **Bối cảnh**: Doanh nghiệp địa phương thường rơi vào tình cảnh "đem con bỏ chợ": Thuê đơn vị làm website xong nhưng khi cần đổi giá, treo banner khuyến mãi cuối tuần thì gọi không được; website bị sập cả ngày không ai hay; dữ liệu không sao lưu nên khi host lỗi là mất trắng; sau 1 năm bị ép nộp phí duy trì vô lý hoặc bị giữ mã nguồn.
- **Học hỏi & Định vị**: Học hỏi triết lý dịch vụ chăm sóc website bài bản từ FastMarketing (`/quy-trinh-cham-soc-website`), nâng cấp toàn diện thành **Hệ Thống Vận Hành Chăm Sóc Số 5 Chu Kỳ Khép Kín** thiết kế riêng cho các cơ sở kinh doanh địa phương:
  1. *Hàng ngày (Daily Real-time 24/7)*: Hệ thống ping tự động mỗi 60s từ 3 node máy chủ, tự động gửi Webhook cảnh báo vào Telegram/Zalo nếu có sự cố quá tải hoặc link hỏng 404/500, kiểm tra chuông thông báo đơn hàng/đặt bàn/hotline tức thì trong 3 giây.
  2. *Hàng tuần (Weekly SLA 15-30 phút)*: Chụp bản sao lưu Full Snapshot lên Cloudflare R2 Object Storage đa vùng (khôi phục 1-click trong 5 phút); cập nhật bản vá bảo mật và bộ lọc Cloudflare WAF; hỗ trợ đổi bảng giá, menu, banner khuyến mãi theo yêu cầu của chủ tiệm chỉ trong 15 - 30 phút qua nhóm Zalo VIP 1-1.
  3. *Hàng tháng (Monthly Growth Analytics & Local SEO/AI)*: Báo cáo chỉ số kinh doanh thực tế định kỳ ngày 01-03 hàng tháng (số cuộc gọi hotline, số lượt chỉ đường Maps, số khách nhắn Zalo, lượng xem web); rà soát từ khóa Google Maps theo bán kính 3-5km; kiểm tra tình trạng trích dẫn thương hiệu trên các công cụ AI (ChatGPT, Perplexity, Google AI Overviews).
  4. *Hàng quý (Quarterly Deep Optimization & Campaign Boost)*: Kiểm tra chuyên sâu bộ chỉ số Core Web Vitals (LCP < 1.2s, CLS = 0, INP < 200ms) trên 4G/5G di động, nén ảnh thế hệ mới AVIF/WebP, đề xuất các chiến dịch khuyến mãi kéo khách theo mùa vụ (Tết, Hè, Khai trường) và trao đổi 30 phút cùng chủ tiệm định hướng quý tới.
  5. *Cam kết bảo hành hạ tầng 5 năm (5-Year Infrastructure Warranty)*: Cam kết bằng văn bản: Bàn giao 100% mã nguồn sạch và tài khoản tên miền DNS Cloudflare chính chủ cho khách hàng; miễn phí khôi phục hạ tầng khi có sự cố; không thu phí duy trì ép buộc; sẵn sàng hỗ trợ mở rộng chi nhánh mới.
- **Tính năng UI/UX nổi bật**:
  - *Interactive Tabs & Timeline Flow*: Bộ lọc chuyển đổi giữa các chu kỳ trực quan, kèm thông tin chi tiết từng đầu việc kỹ thuật, kết quả bàn giao và bộ công cụ chuyên dụng.
  - *Bảng so sánh đối trọng 2 cột*: Phân định rành mạch giữa "Tự quản lý / Thuê Freelancer tự do (mất thời gian, hay lỗi, bỏ rơi)" vs "Có Kỹ Thuật Viên LocalMate Chăm Sóc (an tâm kinh doanh, SLA 15-30 phút, bảo hành 5 năm)".
  - *Quy trình tiếp nhận 4 bước (SLA 15-30 phút)*: Nhắn Zalo -> KTV tiếp nhận 5 phút -> Sửa & test di động 10-20 phút -> Nghiệm thu hoàn tất 15-30 phút.
  - *FAQ Accordion 6 câu hỏi thực tế*: Giải tỏa triệt để thắc mắc về sao lưu Cloudflare R2, hỗ trợ gấp tối thứ Bảy, quyền sở hữu mã nguồn và cứu hộ web WordPress cũ.
  - *Tuân thủ chuẩn UI/UX*: 100% Light Mode sáng màu, độ tương phản cao chữ đậm (`#0f172a`) trên nền sáng, cấm glassmorphism, responsive mượt mà trên di động, `npm run build` pass 100%.

---

## 6. Lộ Trình Phát Triển Số 5 Giai Đoạn & Chiến Lược Chuyển Đổi Địa Phương (`StrategyPhasesPage.tsx`)
- **Bối cảnh**: Doanh nghiệp địa phương thường làm chuyển đổi số theo kiểu chắp vá, manh mún (thuê làm web rẻ tiền xong bỏ hoang, tạo Google Maps không chính chủ bị đối thủ cướp, chạy quảng cáo bị kê giá và dính click ảo, khách nộp form bị quên không gọi lại).
- **Học hỏi & Định vị**: Học hỏi cấu trúc đa giai đoạn có tính sư phạm cao từ trang Chiến lược SEO 5 giai đoạn của FastMarketing, nhưng chuyển hóa 100% sang bối cảnh vận hành thực chiến của cửa hàng và doanh nghiệp địa phương tại Việt Nam:
  1. *Giai đoạn 1 - Nền tảng*: Chuẩn hóa định danh số (NAP) & Google Maps chính chủ, gắn bảng QR tích review 5 sao tại quầy.
  2. *Giai đoạn 2 - Tài sản số*: Xây dựng Sales Hub siêu tốc < 0.8s trên Cloudflare Edge, khai báo Schema LocalBusiness và tệp `llms.txt` sẵn sàng cho AI Search.
  3. *Giai đoạn 3 - Đón đầu nhu cầu*: Phủ từ khóa địa phương ("gần đây", quận/huyện, khẩn cấp) lên Top 3 Maps và Google AI Overviews.
  4. *Giai đoạn 4 - Tăng tốc doanh thu*: Chạy quảng cáo Google/Meta chuẩn bán kính 3-7km, 0% kê giá, chặn 200+ từ khóa rác, đếm chuẩn từng cuộc gọi và Zalo.
  5. *Giai đoạn 5 - Vận hành bền vững*: Đồng bộ lead vào Google Sheets, chuông báo Telegram tức thì trong 3 giây, cam kết bảo hành hạ tầng kỹ thuật 5 năm bằng văn bản pháp nhân.
- **Tính năng chuyển đổi cao**:
  - *Interactive Tabs & Deliverables Checklist*: Người dùng xem rõ công việc KTV làm và sản phẩm bàn giao thật của từng giai đoạn.
  - *Bộ công cụ tự chẩn đoán 30 giây*: Giúp chủ tiệm xác định chính xác hiện trạng của mình để chọn giai đoạn bắt đầu phù hợp nhất mà không lãng phí ngân sách.
  - *Bảng ma trận đối chiếu 5 giai đoạn*: Tổng hợp nhanh mục tiêu, thời gian, sản phẩm và nút xem chi tiết.
- **Tiêu chuẩn UI/UX**: 100% Light Mode, typography phân tầng rõ nét, `text-wrap: pretty`, `scrollbar-gutter: stable`, touch target >= 44px, tuyệt đối không glassmorphism.

---

## 5. Router Integration, QA & Multi-Subagent Build Verification (`src/App.tsx`, Routing & Build Integrity)
- **Bối cảnh**: Khi nhiều subagents làm việc song song (tạo mới `ProjectBriefPage`, `StrategyPhasesPage`, `GeoWorkflowPage`, `TechnicalAuditStandardsPage`, `CareWorkflowPage`), việc đồng bộ Router trung tâm (`src/App.tsx`) đóng vai trò then chốt để tránh xung đột đường dẫn (path collision) hoặc fallback tạm bợ gây 404/sai trang.
- **Nguyên tắc định tuyến (Routing Best Practices)**:
  1. *Normalized Path Check*: Luôn xử lý chuẩn hóa trailing slash (`const normalizedPath = currentPath.replace(/\/$/, '') || '/'`) trước khi matching để `/quy-trinh-geo` và `/quy-trinh-geo/` hoạt động đồng nhất.
  2. *Hỗ trợ đầy đủ Aliases & Sub-paths*: Mỗi trang chuyên sâu cần định nghĩa các alias tiếng Việt thân thiện (ví dụ: `/brief`, `/brief-du-an` trỏ về `ProjectBriefPage`; `/lo-trinh-5-giai-doan`, `/chien-luoc-seo-5-giai-doan` trỏ về `StrategyPhasesPage`). Sử dụng cả toán tử so sánh tuyệt đối (`===`) và tiền tố (`startsWith`) để tránh bỏ sót các đường dẫn con.
  3. *Prop Contract Consistency*: Các page components độc lập phải tuân thủ hợp đồng prop chung (như `onOpenConsultForm?: (serviceName?: string) => void`), cho phép mở form liên hệ tập trung (`LeadModal`) mà không phá vỡ tính đóng gói của component.
  4. *Định tuyến Standalone Views*: Trang trình chiếu dạng deck (như `/ho-so-nang-luc` / `CredentialPage`) cần kiểm soát ẩn Header/Footer/FloatingCTA để nhường toàn bộ không gian cho Presentation Controls chuyên biệt, trong khi các trang Content/Workflow vẫn kế thừa đầy đủ layout tổng.
- **Quy trình QA & Build Verification**:
  - Luôn kiểm tra song song `tsc` (kiểm tra kiểu TypeScript, props, imports không tồn tại) và `vite build` (kiểm tra module resolution, chunking, asset bundling).
  - Nghiệm thu thực tế: 1580 modules transformed, build 0 lỗi trong 12.57s.
- **Tiêu chuẩn UI/UX**:
  - Tất cả các trang mới tuân thủ nghiêm ngặt 100% Light Mode sáng sủa, độ tương phản cao chữ đậm (`#0f172a`) trên nền sáng (`#ffffff` / `#f8fafc`), viền sắc nét `#e2e8f0`.
  - Tuyệt đối CẤM Glassmorphism (không backdrop-blur, không mờ ảo).

---

## 4. Case Studies Matrix & Rich Storytelling (`caseStudiesData.ts`, `ProjectsPage.tsx`, `CaseStudyDetailPage.tsx`)
- **Vị trí**: `src/data/caseStudiesData.ts`, `src/pages/ProjectsPage.tsx` (`/du-an`), `src/pages/CaseStudyDetailPage.tsx` (`/du-an/:slug`).
- **Học hỏi & Nâng cấp từ FastMarketing**:
  - Trình bày Case Study không phải chỉ là một bài viết blog chung chung, mà là **một cỗ máy chứng minh năng lực (Proof Engine)** với cấu trúc chuẩn 4 chặng:
    1. *Bối cảnh & Xuất phát điểm (Context & Baseline)*: Quy mô cơ sở, khu vực địa lý, rào cản mặt bằng/vị trí.
    2. *Điểm nghẽn cốt lõi (Bottlenecks)*: Phân tích 3 rào cản kỹ thuật nghiêm trọng (mất hút trên Google Maps, tài khoản ads bị khóa do chính sách hạn chế, nỗi sợ chặt chém giá điện lạnh, thiếu review thật...).
    3. *Giải pháp kỹ thuật chuyên sâu (Technical Solutions)*: Trình bày từng bước có gắn thẻ tag kỹ thuật (`Google Maps SEO`, `Medical Schema`, `Smart QR Review`, `Emergency UI`, `Policy Clearance`, `Sales Hub Pricing`).
    4. *Kết quả đo lường Before / After thật*: Bảng so sánh 4 chỉ số có cột Trước (đỏ/xám) vs Sau (xanh đậm) vs Tác động kinh doanh (Impact). Kèm theo khối **Visual Proof Card** (Local Falcon Maps audit, Hồ sơ 480+ review 5 sao, Tỷ lệ bấm gọi khẩn cấp 28.4%, Báo cáo Google Shopping ROAS 7.2x, Module Sales Hub tra cứu giá).
- **Trải nghiệm người dùng & Giao diện**:
  - 100% Light Mode sáng sủa, độ tương phản cao, nền sáng (`#ffffff` / `#f8fafc`) kết hợp chữ đậm (`#0f172a`), viền sắc nét `#e2e8f0`.
  - Tuyệt đối KHÔNG dùng Glassmorphism.
  - Thẻ số liệu to rõ (typography 32px-40px, bold 900) với mã màu phân định rõ ràng.
  - Bảng ma trận đối chiếu nhanh 5 cơ sở (SSOT Matrix Table) trên `ProjectsPage.tsx` giúp chủ tiệm nắm bắt tức thì kết quả đo lường.
  - Khối CTA Khảo sát tiệm tận nơi 0đ với cam kết không phát sinh chi phí, liên kết trực tiếp `onOpenConsultForm`.
- **Tính tương thích ngược**: Thiết kế trường `legacySlugs` trong `CaseStudyEntity` và mở rộng hàm `getCaseStudyBySlug()` để các liên kết cũ (từ `ServiceDetailPage` hay sitemap) tự động ánh xạ mượt mà không bao giờ bị lỗi 404.

---

## 3. Project Brief & Survey Builder — Khảo Sát Nhu Cầu & Nhận Demo 0đ (`ProjectBriefPage.tsx`)
- **Vị trí**: `src/pages/ProjectBriefPage.tsx`, route `/khao-sat-du-an`, alias `/brief`, `/brief-geo-seo`.
- **Học hỏi & Tinh chỉnh từ FastMarketing (`/brief-geo-seo`)**:
  - Tinh thần "KISS" (đơn giản, thực tế, giá trị cao): Tránh các câu hỏi học thuật phức tạp (như hỏi khách về DNS, API, CMS engine). Thay vào đó, tập trung vào bài toán thực chiến của chủ quán/chủ tiệm:
    * Mô hình kinh doanh thực tế (F&B, Phòng khám, Gara cứu hộ, Bán lẻ, Dịch vụ tại nhà, Khác).
    * Tình trạng số hiện tại (Chưa có gì, Fanpage Facebook, Web cũ tải chậm, Google Maps tụt hạng).
    * Mục tiêu ưu tiên trong 3 tháng tới (Khách gọi điện/ghé tiệm, Top Google Maps quanh tiệm, Hiện diện trên AI, Tự động hóa).
    * Thông tin cơ sở & SĐT/Zalo nhận bàn giao Demo xem trước 0đ và Báo cáo khảo sát trong 24 giờ.
  - **Tích hợp Backend & Analytics**:
    * Gọi hàm `submitLead` đồng bộ dữ liệu vào Google Sheets (Apps Script Webhook) và kích hoạt theo dõi chuyển đổi (`trackLeadCreated`).
    * Tạo ID định danh duy nhất (`LM-xxxxxx`) để chủ tiệm tra cứu tiến độ tiếp nhận.
  - **Trải nghiệm người dùng (UX/UI)**:
    * 100% Light Mode sáng sủa, độ tương phản cao chữ đậm (`#0f172a`) trên nền sáng (`#ffffff` / `#f8fafc`).
    * Tuyệt đối KHÔNG sử dụng Glassmorphism / backdrop-blur.
    * Thẻ bo góc mềm mại, viền crisp `#e2e8f0`, viền active xanh lá đậm `#0d7647` khi được chọn.
    * Progress indicator rõ ràng qua 4 bước, tự động cuộn lên đầu mỗi bước (`scrollToTop`).
    * Có phần giải đáp câu hỏi thường gặp (FAQ) xua tan nỗi sợ bị gọi làm phiền hay chi phí ẩn.

---

## 1. Interactive Cost & ROI Estimator Widget (`InteractiveCostEstimator.tsx`)
- **Vị trí**: `src/components/pricing/InteractiveCostEstimator.tsx`, tích hợp trực tiếp vào `src/pages/PricingPage.tsx`.
- **Đặc điểm & Giá trị Domain**:
  - Học hỏi mô hình định giá và dự toán minh bạch của FastMarketing (`/bao-gia-dich-vu-geo`).
  - Cho phép chủ tiệm tự chọn quy mô: 1 cơ sở độc lập (1x), chuỗi 2-3 điểm (chiết khấu 20%), chuỗi từ 5 điểm trở lên (chiết khấu 35%).
  - 5 Nhóm giải pháp minh bạch:
    1. Nền tảng số & Website chuẩn di động (Lựa chọn Gói Cơ bản 490k hoặc Gói Pro 1.990k)
    2. Khởi tạo & Tối ưu Google Maps Top 3 (990k setup 1 lần)
    3. Tối ưu AI Search & GEO địa phương (2.900k/tháng)
    4. Chạy quảng cáo Google Ads bán kính tiệm (1.490k/tháng)
    5. Chăm sóc & Vận hành Digital Care (990k/tháng)
  - **Phân tích điểm hòa vốn (Break-even Analysis)**: Tính toán số đơn hàng tối thiểu cần thiết dựa trên giá trị đơn hàng trung bình (AOV) và biên lợi nhuận theo ngành nghề (F&B, Spa/Nails, Phòng khám, Gara xe, Bán lẻ).
  - **Kết nối LeadModal**: Đóng gói toàn bộ cấu hình dự toán vào ghi chú lead (`initialNote`), giúp tư vấn viên tiếp cận ngay lập tức với số liệu khách hàng vừa tính toán.
- **Tiêu chuẩn UI/UX**:
  - 100% Light Mode sáng sủa, sắc nét, tương phản cao (`#0d7647`, `#0f172a`, `#f8fafc`).
  - Hoàn toàn KHÔNG dùng Glassmorphism / backdrop-blur.
  - Sticky summary card trên Desktop, Responsive mượt mà trên Mobile (touch target >= 48px).

---

## 2. Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương (`GeoWorkflowPage.tsx`)
- **Vị trí**: `src/pages/GeoWorkflowPage.tsx`, route `/quy-trinh-geo` và alias `/quy-trinh-trien-khai-geo`.
- **Học hỏi & Nâng cấp từ FastMarketing (`/quy-trinh-trien-khai-geo`)**:
  - Diễn đạt ngôn ngữ bình dân, đi thẳng vào bản chất: Tối ưu dữ liệu có cấu trúc để ChatGPT, Gemini, Copilot và Google AI Overviews có căn cứ trích dẫn thương hiệu của bạn khi khách hàng hỏi tìm kiếm quanh vùng.
  - Sơ đồ 3 chặng AI vận hành: Thu thập (Entity Ingestion) -> Xác thực độ tin cậy (Cross-Verification NAP) -> Sinh câu trả lời & gắn thẻ trích dẫn (Citation Generation).
- **Lộ trình 6 bước kỹ thuật sâu sắc nhưng dễ hiểu**:
  1. *Bước 1*: Khảo sát tín hiệu số hiện tại & Phân tích cơ hội trích dẫn địa phương (Baseline AI Audit 30 câu hỏi, phát hiện AI Hallucination).
  2. *Bước 2*: Thiết lập Schema JSON-LD đa tầng (LocalBusiness/Dentist/AutoRepair, GeoCoordinates 6 số thập phân, OpeningHoursSpecification, AggregateRating, sameAs).
  3. *Bước 3*: Xuất bản và cấu hình tệp `llms.txt` & `llms-full.txt` chuẩn OpenSearch cho các bot AI thu thập (kèm code preview và nút Copy 1-click).
  4. *Bước 4*: Xây dựng Prompt Bank thực tế (50–80 câu hỏi mua sắm người địa phương thường dùng để test AI phân theo 4 nhóm Intent).
  5. *Bước 5*: Đồng bộ NAP (Tên - Địa chỉ - Điện thoại) và kiểm tra các nguồn citation tin cậy (30+ liên kết số đồng nhất 100%).
  6. *Bước 6*: Giám sát đo lường AI Visibility và bàn giao tài liệu quản trị cho chủ tiệm (Cam kết 100% chính chủ + Bảo hành 5 năm).
- **Bảng so sánh trực quan Trước & Sau (Live AI Simulation)**:
  - 2 kịch bản thực tế: Phòng khám nha khoa Hóc Môn & Gara sửa xe máy gần An Sương.
  - Đối chiếu trực quan: Trước tối ưu (AI trả lời chung chung, giới thiệu chuỗi lớn ở xa, sai lệch thông tin) vs. Sau tối ưu (AI trích dẫn dứt khoát tên tiệm, số hotline, địa chỉ chuẩn, thế mạnh và link nguồn).
- **Tuân thủ Design System**: 100% Light Mode, không glassmorphism, tương phản cao, touch target chuẩn, tích hợp sẵn Form đăng ký khảo sát AI Visibility 0đ kết nối `submitLead()`.

