# Timeline & SSOT Activity Log (LocalMate)

Ghi nhận các mốc sự kiện, commit và trạng thái vận hành của dự án.

## [2026-09-13] - Kết Nối Toàn Diện Router, Đồng Bộ 6 Tuyến Trang Mới & Nghiệm Thu Build Production (QA & Build Verifier)
- **Mục tiêu**: Đăng ký đầy đủ các route và alias mới trong `src/App.tsx`, kiểm tra toàn diện imports, props, exports và nghiệm thu chất lượng biên dịch `npm run build` (TypeScript tsc && Vite build).
- **Các tuyến đường hoàn tất ánh xạ chuẩn xác**:
  1. `/khao-sat-du-an` (alias `/brief`, `/brief-du-an`, `/brief-geo-seo`) -> `ProjectBriefPage` (Khảo sát 4 bước & Nhận Demo 0đ).
  2. `/chien-luoc-5-giai-doan` (alias `/lo-trinh-5-giai-doan`, `/chien-luoc-seo-5-giai-doan`, `/lo-trinh-phat-trien-so`) -> `StrategyPhasesPage` (Lộ trình phát triển số 5 giai đoạn cho doanh nghiệp địa phương).
  3. `/quy-trinh-geo` (alias `/quy-trinh-trien-khai-geo`) -> `GeoWorkflowPage` (Quy trình 6 bước kỹ thuật triển khai GEO & AI Search).
  4. `/tieu-chuan-audit` (alias `/tieu-chuan-audit-ky-thuat`, `/technical-audit-standards`, `/tieu-chuan-website-2026`) -> `TechnicalAuditStandardsPage` (Bộ 30 tiêu chuẩn kỹ thuật & checklist website 2026).
  5. `/quy-trinh-cham-soc` (alias `/quy-trinh-van-hanh-cham-soc`) -> `CareWorkflowPage` (Quy trình vận hành & chăm sóc kỹ thuật định kỳ).
  6. `/ho-so-nang-luc` (alias `/credential`) -> `CredentialPage` (Hồ sơ năng lực 40 slide chuyên sâu).
- **Kết quả nghiệm thu kỹ thuật**:
  - Toàn bộ props (`onOpenConsultForm`), exports và imports giữa các components được kết nối đồng nhất, không thiếu phụ thuộc hay type mismatch.
  - `npm run build` PASS 100% (tsc không báo bất kỳ lỗi nào, Vite v5.4.21 transformed 1580 modules, build hoàn tất trong 12.57s).
- **Tiêu chuẩn UI/UX**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, tương phản cao, responsive đa màn hình.

---

## [2026-09-13] - Xây Dựng Trang Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương (`GeoWorkflowPage.tsx`)
- **Mục tiêu**: Xây dựng trang Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương (`src/pages/GeoWorkflowPage.tsx`) theo route `/quy-trinh-geo` (alias `/quy-trinh-trien-khai-geo`) học hỏi quy trình chuyên sâu từ FastMarketing (`/quy-trinh-trien-khai-geo`).
- **Nội dung hoàn thành**:
  1. *Bản chất*: Diễn giải cơ chế tối ưu dữ liệu để ChatGPT, Gemini, Copilot và Google AI Overviews có căn cứ trích dẫn thương hiệu khi khách hàng hỏi quanh vùng. Sơ đồ 3 chặng AI: Entity Ingestion -> NAP Cross-Verification -> Citation Generation.
  2. *Quy trình 6 bước kỹ thuật*:
     - Bước 1: Khảo sát tín hiệu số hiện tại & Phân tích cơ hội trích dẫn địa phương (Baseline AI Audit, phát hiện AI Hallucination).
     - Bước 2: Thiết lập Schema JSON-LD đa tầng (LocalBusiness, GeoCoordinates, OpeningHours, AggregateRating, sameAs) kèm code block mẫu copy 1-click.
     - Bước 3: Xuất bản và cấu hình tệp `llms.txt` chuẩn OpenSearch cho bot AI thu thập (kèm template Markdown và nút sao chép).
     - Bước 4: Xây dựng Prompt Bank thực tế (50–80 câu hỏi mua sắm người địa phương thường dùng phân theo 4 nhóm Intent).
     - Bước 5: Đồng bộ NAP (Tên - Địa chỉ - Điện thoại) & 30+ nguồn citation tin cậy.
     - Bước 6: Giám sát đo lường AI Visibility (AI Mention Rate) & Bàn giao 100% tài nguyên + Bảo hành 5 năm.
  3. *Bảng so sánh trực quan Trước & Sau (Live AI Simulation)*: 2 tình huống thực tế (Nha khoa Hóc Môn & Gara sửa xe An Sương).
  4. *Bộ sản phẩm bàn giao & FAQ*: 6 hộp deliverables minh bạch + 6 câu hỏi - giải đáp chuyên sâu cho chủ tiệm.
  5. *Lead Capture*: Form nhận bản khảo sát AI Visibility 0đ kết nối `submitLead()`.
- **UI/UX**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, tương phản cao, responsive. Build Vite thành công.

---

## [2026-09-13] - Nâng Cấp Hệ Thống Case Studies Matrix & Storytelling Chuẩn FastMarketing
- **Mục tiêu**: Nâng cấp toàn diện hệ thống Case Studies của LocalMate tại `src/data/caseStudiesData.ts`, `src/pages/ProjectsPage.tsx` và `src/pages/CaseStudyDetailPage.tsx` học hỏi cách FastMarketing trình bày case studies chi tiết với ảnh chụp, số liệu và câu chuyện giải quyết vấn đề.
- **5 Câu chuyện khách hàng địa phương tiêu biểu**:
  1. *Phòng khám Nha Khoa Tâm Đức*: Cơ sở mới vắng khách -> Tối ưu Google Maps + Schema Y tế (@type: Dentist) -> Đạt Top 1 tìm kiếm bán kính 5km, tăng +250% cuộc gọi đặt lịch hàng tuần.
  2. *Tiệm Cà Phê Mộc & Nhà Hàng Hội An*: Tối ưu bộ mã QR thông minh để bàn xin đánh giá 5 sao thật -> Đạt 480+ lượt review tích cực thật, Google Maps tự động đề xuất khách du lịch, tiết kiệm 100% ngân sách ads (0 đồng).
  3. *Gara Ô Tô Đại Nam (Cứu hộ 24/7)*: Tối ưu trang đích có nút gọi cứu hộ nổi bật + Google Search Ads cụm từ khóa khẩn cấp -> Tiếp nhận 5-8 cuộc gọi kéo xe/tuần, hoàn vốn sau 3 ngày.
  4. *Cửa hàng Thiết bị Âm thanh & Điện tử Hoàng Long*: Khắc phục lỗi tài khoản quảng cáo bị khóa chính sách -> Kháng sạch vi phạm, mở rộng kênh Google Shopping & Maps kéo 35-42 khách đến phòng nghe thử/tuần.
  5. *Dịch vụ Sửa chữa Điện lạnh tại nhà Bách Khoa Fix*: Xây dựng Sales Hub bảng giá minh bạch 100% + Tem bảo hành QR -> Xóa nỗi sợ chặt chém giá, tăng tỷ lệ chốt đơn từ 30% lên 75%.
- **Cấu trúc chuẩn 4 chặng**: Bối cảnh -> Điểm nghẽn -> Giải pháp kỹ thuật LocalMate -> Kết quả đo lường Before/After thật.
- **UI/UX chuẩn FastMarketing**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, thẻ số liệu to rõ, bảng ma trận đối chiếu nhanh 5 cơ sở, CTA khảo sát cơ sở 0đ tận nơi.
- **Tương thích ngược**: Hỗ trợ `legacySlugs` bảo toàn toàn bộ URL cũ không bị lỗi 404.

---

## [2026-09-13] - Xây dựng Trang Khảo Sát Nhu Cầu Dự Án & Nhận Demo 0đ Thông Minh (`ProjectBriefPage.tsx`)
- **Mục tiêu**: Xây dựng trang Khảo sát Nhu cầu Dự án & Nhận Website Demo 0đ (`src/pages/ProjectBriefPage.tsx`) theo route `/khao-sat-du-an` (alias `/brief`, `/brief-geo-seo`).
- **Quy trình tương tác trực quan 4 bước**:
  1. *Bước 1 - Chọn mô hình kinh doanh*: 6 mô hình thực tế (F&B ẩm thực, Phòng khám/Nha khoa/Spa, Gara ô tô/Cứu hộ 24/7, Cửa hàng bán lẻ/Showroom, Thợ sửa chữa tại nhà, Khác với input tùy biến).
  2. *Bước 2 - Hiện trạng số hiện tại*: Chưa có gì (từ số 0), Chỉ có Fanpage Facebook, Đã có Web nhưng cũ & không ra đơn, Đã có Google Maps nhưng bị tụt hạng. Kèm góc nhìn phân tích từ chuyên gia.
  3. *Bước 3 - Mục tiêu ưu tiên 3 tháng tới*: Có thêm khách gọi điện/ghé tiệm, Lên Top Google Maps 3-5km quanh tiệm, Hiện diện trên AI Search (ChatGPT/Gemini/Google AI), Tự động nhận đơn không sót việc.
  4. *Bước 4 - Thông tin cơ sở & Nhận Demo 0đ*: Widget tóm tắt Brief trực quan, Form nhập thông tin cơ sở (Tên tiệm, Khu vực quận/huyện, SĐT/Zalo nhận bàn giao, Người đại diện, Ghi chú).
- **Tích hợp dịch vụ & Cam kết**:
  - Tích hợp `submitLead` từ `src/services/leadService.ts` tự động gửi dữ liệu về Google Sheets & bắn sự kiện tracking conversion.
  - Success State xác nhận kèm mã ID, tóm tắt 3 bước kỹ thuật viên thực hiện trong 24h và nút liên hệ Zalo trực tiếp `0834.422.439`.
  - Thiết kế 100% Light Mode sáng sủa, độ tương phản cao, thẻ bo góc mềm mại, viền crisp `#e2e8f0`, TUYỆT ĐỐI KHÔNG XÀI GLASSMORPHISM.
  - Tích hợp đầy đủ `SEOHead` chuẩn Title, Description, Breadcrumbs và OpenGraph.

---

## [2026-09-13] - Xây dựng Interactive Cost & ROI Estimator Widget & Tích hợp Trang Báo Giá
- **Mục tiêu**: Xây dựng công cụ Bảng Tính Chi Phí & Dự Toán ROI Tương Tác (`src/components/pricing/InteractiveCostEstimator.tsx`) học hỏi tính năng báo giá và ước tính ngân sách từ FastMarketing (`/bao-gia-dich-vu-geo`):
  1. Chọn quy mô linh hoạt: 1 Cơ sở độc lập (1x) / Chuỗi 2-3 điểm (chiết khấu 20%) / Chuỗi từ 5 điểm trở lên (chiết khấu 35%).
  2. Bật/tắt & tùy chọn 5 nhóm giải pháp:
     - Website chuẩn di động (Lựa chọn Gói Cơ bản 490k hoặc Gói Pro 1.990k).
     - Khởi tạo & Tối ưu Google Maps Top 3 (990k setup 1 lần).
     - Tối ưu AI Search & GEO địa phương (2.900k/tháng).
     - Quảng cáo Google Ads bán kính quanh tiệm (1.490k/tháng).
     - Chăm sóc & Vận hành Digital Care (990k/tháng).
  3. Bảng tổng hợp thời gian thực: Setup Fee 1 lần, Duy trì hàng tháng, Dự toán khách & cuộc gọi hàng tháng.
  4. Phân tích điểm hòa vốn động: Tính số đơn hàng/tháng cần thiết theo ngành nghề (F&B, Spa/Nails, Phòng khám, Gara, Retail) và thanh trượt AOV / Margin.
  5. Nút CTA kết nối trực tiếp LeadModal: Gửi kèm dữ liệu cấu hình dự toán đầy đủ qua Zalo.
- **Tích hợp**: Đưa widget vào `src/pages/PricingPage.tsx` và liên kết handler trong `src/App.tsx`.
- **Tiêu chuẩn UI**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, tương phản cao, responsive.

---

## [2026-09-13] - Cập nhật kiến trúc Trang chủ 5 Trụ cột Giải pháp (Homepage Alignment & Problem Flow)
- **Mục tiêu**: Rà soát và tái cấu trúc trang chủ `src/pages/HomePage.tsx` và các section liên quan ăn khớp 100% với kiến trúc 5 Solution Pillars theo đặc tả mục 12:
  1. Hero: Thông điệp giải quyết vấn đề ("Bạn cần giải quyết việc gì?", "Giúp doanh nghiệp địa phương đưa công việc lên môi trường số, tìm khách hàng và vận hành dễ dàng") + Instant Audit Hook + video boomerang loop.
  2. Solution Pillars Section: Khối 5 Nhóm Giải Pháp Trọng Tâm kết nối trực tiếp đến `/giai-phap/{slug}` (`SolutionPillarsSection.tsx`).
  3. Growth Flywheel Section: Bánh đà tăng trưởng 4 giai đoạn gắn liên kết trực tiếp tới các giải pháp tương ứng (`GrowthFlywheelSection.tsx`).
  4. Why Localmate (PhilosophySection): 4 Cam Kết Trung Thực & Tôn Trọng Người Làm Nghề (100% sở hữu, báo giá cố định, nghiệm thu mới trả tiền, đồng hành kỹ thuật 5 năm).
  5. Deliverables / Bằng chứng thật: Khối sản phẩm bàn giao thực tế và quy trình rõ ràng.
  6. Final CTA Section: Headline "Nói cho LocalMate biết việc bạn đang cần giải quyết", định hướng nhận demo 0đ trong 24h.
- **Tiêu chuẩn UI**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, tương phản cao, responsive mượt mà.
- **Nghiệm thu kỹ thuật**: `npm run build` PASS 100% (0 lỗi TypeScript, 1572 modules transformed).

---

## [2026-09-12] - Chuẩn hóa Cụm 6 Trang Năng lực Kỹ thuật (Capability Pages) & Component Giải pháp Tái sử dụng
- Tạo mới trọn bộ 11 component tại `src/components/solutions/`.
- Chuẩn hóa 6 trang vệ tinh kỹ thuật (`/dich-vu/geo`, `/dich-vu/aeo`, `/dich-vu/seo-ai`, `/dich-vu/seo-chatgpt`, `/dich-vu/local-search`, `/dich-vu/chay-khach-cham-soc`) với `CapabilityContextBox.tsx`.
- Đồng bộ Router, bảo toàn liên kết cũ và xử lý trailing slash.
