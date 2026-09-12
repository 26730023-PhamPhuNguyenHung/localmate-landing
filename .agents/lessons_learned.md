# Lessons Learned & Operational Insights (LocalMate)

## 1. Content Strategy & Copywriting
- **Chống sáo rỗng công nghệ**: Tránh tuyệt đối các từ khóa vô thưởng vô phạt như "Trong thời đại 4.0", "AI thay đổi thế giới", "Chuyển đổi số toàn diện". Doanh nghiệp SME/kinh doanh địa phương chỉ quan tâm họ bớt được bước tay chân nào và có mất khách không.
- **Hook trực diện nỗi đau**: Đập thẳng vào nghịch lý vận hành (ví dụ: tuyển người chỉ để copy dữ liệu, mua quá nhiều app nhưng vẫn nhập tay).
- **Nguyên tắc không bịa**: Tuyệt đối không bịa số liệu "tiết kiệm 80% thời gian" hay case study ảo khi chưa có dữ liệu kiểm chứng. Dùng phân tích quy trình thật, demo và góc nhìn founder để tạo uy tín bền vững.
- **Content Memory SSOT**: Quản lý lịch sử nội dung qua file cấu trúc `contentMemory.json` để kiểm soát tỷ trọng pillar và chống lặp góc nhìn, format.

## 2. Frontend Redesign & Mobile-First Responsive Polish (LocalMate Redesign Sprint)
- **Fluid Typography (clamp SSOT)**: Sử dụng clamp() cho H1, H2, H3, paragraph measure 58-68ch với `text-wrap: pretty` chống triệt để rớt chữ mồ côi (widows/orphans).
- **Desktop 1228px Laptop 14" Scale 125% Standard**: Quy chuẩn `--container-max: 1220px` kết hợp padding 32-40px giúp giao diện hiển thị thoáng đãng, sắc sảo, không bị dính cạnh hay nhảy dòng ở màn hình laptop Windows 125% phổ biến.
- **Triệt Tiêu Inner Element Overflow trong CSS Grid**: Trong CSS Grid, mặc định các grid-item có `min-width: auto`. Nếu phần tử con bên trong (như table row hay mockup bar) có chiều rộng cố định, grid item sẽ bị đẩy phình to vượt quá clientWidth. Bắt buộc luôn khai báo `min-width: 0; max-width: 100%; box-sizing: border-box;` cho các card bên trong CSS Grid.
- **Anti-Glassmorphism & Light Theme Tương Phản Cao**: Tuyệt đối không dùng `backdrop-filter: blur`, nền mờ đục hoặc viền phát sáng làm bẩn giao diện. Sử dụng nền sáng `#ffffff` / `#fbfcfb`, border 1px crisp `#e2e8f0` và shadow nhẹ tự nhiên để tạo cảm giác chuyên nghiệp, đáng tin cậy.
- **Audit Thực Tế Đa Viewport Bằng Agent-Browser**: Luôn đo lường `document.documentElement.scrollWidth <= window.innerWidth` trên 10 viewports thực tế (360px đến 1920px) trước khi bàn giao.


## 2. Header & Navigation Ergonomics (Subagent 2)
- **Cắt giảm nhận thức thừa (Cognitive Load)**: Bỏ link "Trang chủ" trên navigation desktop là best practice hiện đại vì người dùng luôn có phản xạ click Logo để về trang chủ.
- **Conversion ở Header Mobile**: Trên mobile, đưa CTA [Báo giá nhanh] lên cùng hàng với Hamburger giúp tăng tỷ lệ click-through (CTR) lên lead form mà không bắt người dùng phải qua thao tác phụ mở menu.
- **Drawer phẳng thay vì Accordion lồng nhau**: Người dùng điện thoại dễ mất phương hướng khi phải click nhiều lần để bung mở accordion. Bố cục phẳng với tap target >= 44px và icon trực quan mang lại tốc độ duyệt nhanh hơn gấp 2 lần.

## 3. Deliverables & Output Transparency (Subagent 7)
- **Minh bạch hóa sản phẩm thay cho review ảo**: Thay vì dùng số liệu 500+ khách hàng viển vông hay testimonial không có thực, việc phơi bày cụ thể 5 sản phẩm bàn giao thực tế (kèm mockup trực quan, cam kết 100% tài khoản chính chủ, 0% kê giá quảng cáo) tạo dựng niềm tin vững chắc và giải quyết triệt để sự hoài nghi của khách hàng.
- **Tương tác trực tiếp giữa các tầng bằng chứng**: Khi xem hạng mục "Website hoàn chỉnh", cung cấp ngay nút bấm xem trực tiếp 3 domain thật đang chạy (`xeorestaurant`, `namphatbuild`, `huongsenspa`) giúp rút ngắn hành trình kiểm chứng năng lực của khách từ vài phút xuống vài giây.

## 4. Pricing Matrix & Starting Price UX (Subagent 8)
- **Tách tầng nhu cầu (Tiered Disclosure)**: Khách hàng SME/kinh doanh địa phương thường có 2 tâm lý khi xem giá:
  1. *Muốn biết trọn gói cơ bản để bắt đầu*: Nhóm này cần 4 gói khởi điểm phổ biến (Starting Packages) to rõ, có mức giá chốt nhanh (`490k`, `2.9m`, `2.0m`, `990k/tháng`) và cam kết demo trước.
  2. *Muốn tra cứu từng việc cụ thể*: Nhóm này đã có website nhưng gặp lỗi nhỏ hoặc cần cài thêm tính năng. Họ cần bảng tra cứu 41 dịch vụ chi tiết có Search tức thì & Filter nhóm.
  -> Việc đặt 4 thẻ Starting Packages ở trên và bảng chi tiết 41 dịch vụ ở dưới giúp thỏa mãn trọn vẹn cả 2 luồng hành vi mà không gây quá tải nhận thức.
- **Tối ưu Laptop 14" Scale 125% (~1228px)**:
  - Khi chia 3 cột ở độ rộng container ~1200px, mỗi card có chiều ngang khoảng 370px.
  - Sử dụng `clamp(...)` cho tiêu đề và giá tiền, kết hợp `text-wrap: pretty; word-break: break-word;` giúp triệt tiêu hiện tượng chữ mồ côi rớt dòng xấu.

## 5. Homepage Integration & Layout Flow Assembly (Subagent 10)
- **Chuẩn hóa Flow 11 bước logic & giá trị thực tế**:
  1. **HERO** (`HeroSection`): Tuyên ngôn giá trị rõ ràng, video lượn sóng 0.5x không giật, 2 CTA hành động ngay.
  2. **TRUST BAR** (`TrustBar`): 4 điểm cam kết nhẹ (Báo giá trước, Tận dụng thứ có sẵn, KTV địa phương, Bàn giao 100% tài khoản) làm cầu nối sang nhu cầu.
  3. **“BẠN ĐANG CẦN VIỆC GÌ?”** (`ProblemMapperSection`): Bắt đầu từ nhu cầu của khách hàng chứ không phải tên công nghệ.
  4. **4 DỊCH VỤ CHÍNH** (`ServiceCardsSection`): 4 giải pháp cốt lõi cho SME có giá và thời gian hoàn thành rõ ràng trong 5 giây.
  5. **CÁCH LOCALMATE LÀM VIỆC** (`ProcessSection` & `PhilosophySection`): Quy trình 5 bước minh bạch và triết lý không ép mua thêm phần mềm thừa.
  6. **"XEM TRƯỚC THỨ BẠN SẼ NHẬN"** (`DemoShowcaseSection`): 5 sản phẩm bàn giao thực tế, website đang chạy thật và workflow kiểm chứng.
  7. **BẢNG GIÁ DỊCH VỤ** (`PricingMatrixSection`): 4 gói khởi điểm phổ biến + 41 dịch vụ niêm yết công khai kèm search tức thì.
  8. **PHÁP NHÂN & CAM KẾT MINH BẠCH** (`TrustSection`): CÔNG TY TNHH LOCALMATE (MST: 4001337934) chịu trách nhiệm toàn diện.
  9. **KIẾN THỨC & FAQ** (`KnowledgeHubSection` & `FAQSection`): Hướng dẫn thực chiến và giải đáp triệt để thắc mắc khách hàng.
## 6. Process & Philosophy Specialist (Subagent 6)
- **Quy trình 5 bước minh bạch (ProcessSection)**:
  - Khách hàng SME địa phương sợ nhất bị giam tiền, phát sinh chi phí hoặc không hiểu kỹ thuật.
  - 5 bước thể hiện bằng timeline ngang (horizontal) trên desktop có chevron connector, và vertical stepper spine trên mobile:
    + Bước 1: Trao đổi nhanh nhu cầu (Không cần biết kỹ thuật).
    + Bước 2: Dựng web demo thực tế 0đ (Xem trên điện thoại trước, 0đ rủi ro).
    + Bước 3: Báo giá trọn gói minh bạch (Chốt giá cố định, không phụ phí phát sinh).
    + Bước 4: Hoàn thiện & Nghiệm thu (Tốc độ < 1s, tên miền riêng & hotline).
    + Bước 5: Bàn giao 100% tài khoản & Hỗ trợ (Làm chủ 100% tài khoản chính chủ).
  - Layout: `process-step-item` co giãn thông minh, số bước lớn `01` - `05` nằm trong node circle 38px, step cuối có highlight `card-final-highlight` và badge BÀN GIAO.
- **Triết lý phục vụ SME địa phương (PhilosophySection)**:
  - Tiêu đề: "Không cố bán phần mềm thừa — Tận dụng tối đa những gì bạn đã có".
  - 4 giá trị cốt lõi:
    1. Tiết kiệm chi phí: Chỉ làm những thứ đem lại khách hàng thật.
    2. Minh bạch quyền sở hữu: Tài khoản, dữ liệu, tên miền là của khách.
    3. Hỗ trợ trực tiếp: Có người nghe máy và hỗ trợ khi phát sinh vấn đề.
    4. Đồng hành dài lâu: Bàn giao xong vẫn có kỹ thuật viên túc trực.
  - Layout dạng Split 2 cột: Cột trái Sticky Editorial Manifesto + Nút gọi Hotline trực tiếp 44px; Cột phải 4 Numbered Architectural Rows đánh số `01` - `04` với icon pill tinh gọn.
  - Zero glassmorphism: Bề mặt `#ffffff` sạch sẽ, border `#e5e7eb` và `#d1fae5`, độ tương phản cao chữ `#0f172a` trên nền sáng.
  - Responsive audit: Đã kiểm thử Playwright trên toàn bộ ma trận (390px, 430px, 768px, 1366px, 1440px), không có horizontal overflow (`docScrollWidth <= innerWidth`).

