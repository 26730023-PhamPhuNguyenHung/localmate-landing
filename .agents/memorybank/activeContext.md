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
- **Kiểm thử đa màn hình**: Đã kiểm tra và chụp ảnh nghiệm thu qua `agent-browser` trên Mobile 390px, Tablet 768px và Desktop 1440px.

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
  - `PhilosophySection.tsx`: 4 trụ cột triết lý "Không cố bán thêm phần mềm" + Hotline trực tiếp.
  - `ProcessSection.tsx`: Quy trình 5 bước minh bạch (từ nói việc đến nghiệm thu 100% tài khoản).
  - `DemoShowcaseSection.tsx`: Nâng cấp toàn diện mục "Xem trước thứ bạn sẽ nhận" với 5 sản phẩm bàn giao thực tế, tab website thật và workflow kiểm chứng.
  - `FAQSection.tsx`: Bộ câu hỏi thường gặp về mô hình vận hành và pháp nhân.
  - `FinalCTASection.tsx`: Loại bỏ glassmorphism, form gửi việc 3 trường vàng nhanh gọn.
  - `HomePage.tsx`: Luồng 10 section mạch lạc, `npm run build` pass 100% không lỗi.

## 5. Deliverables & Sample Output Showcase ("Xem trước thứ bạn sẽ nhận") (Completed)
- **SSOT Data**: `src/data/operationsData.ts` bổ sung `DELIVERABLES_DATA` và `DeliverableItem` chuẩn xác, không fake số liệu.
- **5 Sản phẩm bàn giao thực tế**:
  1. **Website hoàn chỉnh**: Chuẩn SEO on-page, 100% responsive di động & laptop, nút Hotline 1-chạm & chat Zalo, tốc độ < 0.8s, bàn giao 100% tài khoản, kèm nút tương tác chuyển xem website demo thật.
  2. **Bàn giao trang quản trị tiếng Việt**: Bảng điều khiển tối giản, cập nhật giá món và đăng bài trong 3 phút, kèm video clip hướng dẫn 1-2 phút riêng biệt.
  3. **Hồ sơ Google Business & Maps**: Xác minh chính chủ Gmail của bạn, ghim định vị chuẩn, hiển thị hotline, giờ mở cửa và bộ mã QR 5 sao tại quầy.
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
  - **Gói Google Maps**: 2.000.000đ trọn gói (Xác minh chính chủ 100%, Local SEO, đăng 20+ hình ảnh, tặng mã QR để bàn xin 5 sao, SLA 2–4 ngày).
  - **Gói Quản Trị Duy Trì**: 990.000đ / tháng (Chăm sóc nội dung & kỹ thuật định kỳ, backup 24/7, duy trì top Maps, hỗ trợ qua nhóm Zalo riêng, SLA 2h–4h).
- **Danh Sách Dịch Vụ Chi Tiết 41 Dịch Vụ Công Khai**:
  - Bảo toàn 100% tính năng tra cứu với Search Bar thời gian thực và Bộ lọc phân loại 9 nhóm dịch vụ.
  - Card 3 cột trên desktop (>= 1040px), 2 cột trên tablet (640px - 1039px), 1 cột trên mobile (< 640px).
  - Hiển thị đầy đủ: Icon nhóm, tên dịch vụ tiếng Việt, mô tả ngắn gọn (scope), SLA thời gian hoàn thành với icon Đồng hồ, giá niêm yết to rõ và nút "Tư vấn gói này".
  - Tối ưu spacing, typography clamp (`clamp(...)`), `text-wrap: pretty`, chống vỡ dòng và chống co giật khung hình trên màn hình laptop 14" tỉ lệ zoom 125% (~1228px).
  - Nút mở rộng "Xem thêm toàn bộ bảng giá (41 dịch vụ)" mượt mà với icon xoay 180 độ, tự động bung đầy đủ khi tìm kiếm hoặc lọc danh mục.
- **Verified**: `npx tsc --noEmit` pass 100%, `npm run build` pass 100% không warning/error.

