# Timeline & SSOT Activity Log (LocalMate)

Ghi nhận các mốc sự kiện, commit và trạng thái vận hành của dự án.

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
