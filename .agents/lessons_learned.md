# Lessons Learned & Operational Insights (LocalMate)

## 1. Content Strategy & Copywriting
- **Chống sáo rỗng công nghệ**: Tránh tuyệt đối các từ khóa vô thưởng vô phạt như "Trong thời đại 4.0", "AI thay đổi thế giới", "Chuyển đổi số toàn diện". Doanh nghiệp SME/kinh doanh địa phương chỉ quan tâm họ bớt được bước tay chân nào và có mất khách không.
- **Hook trực diện nỗi đau**: Đập thẳng vào nghịch lý vận hành (ví dụ: tuyển người chỉ để copy dữ liệu, mua quá nhiều app nhưng vẫn nhập tay).
- **Nguyên tắc không bịa**: Tuyệt đối không bịa số liệu "tiết kiệm 80% thời gian" hay case study ảo khi chưa có dữ liệu kiểm chứng. Dùng phân tích quy trình thật, demo và góc nhìn founder để tạo uy tín bền vững.
- **Content Memory SSOT**: Quản lý lịch sử nội dung qua file cấu trúc `contentMemory.json` để kiểm soát tỷ trọng pillar và chống lặp góc nhìn, format.
- **Data Model & Solution Taxonomy SSOT (`solutionsData.ts` & `capabilitiesData.ts`)**: Tách biệt rõ ràng giữa Business Outcomes, Technical Capabilities, Deliverables, Process, Use Cases và Pricing Packages. Thiết kế dữ liệu đa tầng giúp các trang giải pháp dễ dàng render động, đảm bảo tính nhất quán giữa landing page, trang chuyên sâu và tài liệu tư vấn thực tế.


## 2. Frontend Redesign & Mobile-First Responsive Polish (LocalMate Redesign Sprint)
- **Fluid Typography (clamp SSOT)**: Sử dụng clamp() cho H1, H2, H3, paragraph measure 58-68ch với `text-wrap: pretty` chống triệt để rớt chữ mồ côi (widows/orphans).
- **Desktop 1228px Laptop 14" Scale 125% Standard**: Quy chuẩn `--container-max: 1220px` kết hợp padding 32-40px giúp giao diện hiển thị thoáng đãng, sắc sảo, không bị dính cạnh hay nhảy dòng ở màn hình laptop Windows 125% phổ biến.
- **Triệt Tiêu Inner Element Overflow trong CSS Grid**: Trong CSS Grid, mặc định các grid-item có `min-width: auto`. Nếu phần tử con bên trong (như table row hay mockup bar) có chiều rộng cố định, grid item sẽ bị đẩy phình to vượt quá clientWidth. Bắt buộc luôn khai báo `min-width: 0; max-width: 100%; box-sizing: border-box;` cho các card bên trong CSS Grid.
- **Anti-Glassmorphism & Light Theme Tương Phản Cao**: Tuyệt đối không dùng `backdrop-filter: blur`, nền mờ đục hoặc viền phát sáng làm bẩn giao diện. Sử dụng nền sáng `#ffffff` / `#fbfcfb`, border 1px crisp `#e2e8f0` và shadow nhẹ tự nhiên để tạo cảm giác chuyên nghiệp, đáng tin cậy.
- **Audit Thực Tế Đa Viewport Bằng Agent-Browser**: Luôn đo lường `document.documentElement.scrollWidth <= window.innerWidth` trên 10 viewports thực tế (360px đến 1920px) trước khi bàn giao.

## 9. Chính Sách Bảo Hành Kỹ Thuật 5 Năm & Cam Kết Đồng Hành Địa Phương (Warranty5YearSection)
- **Giải tỏa rào cản tâm lý lớn nhất của khách hàng SMB**: Khách hàng làm website hoặc định vị Google Maps sợ nhất là tình trạng "đem con bỏ chợ" — đơn vị làm xong thu tiền rồi mất hút, mỗi lần website lỗi hay muốn đổi số hotline lại bị tính phí vài trăm nghìn hoặc chờ đợi cả tuần.
- **4 Trụ cột cam kết thiết thực, dễ hiểu**:
  1. *Mã nguồn & vận hành vĩnh viễn trên Cloudflare*: Uptime 99.99%, SSL tự động, không lo sập server do lỗi database cồng kềnh.
  2. *Hỗ trợ sự cố khẩn cấp trong 2 giờ*: Zalo nhóm riêng 1-1 có kỹ thuật viên túc trực, sẵn sàng ghé tận nơi tại địa phương khi có phát sinh lớn.
  3. *Cập nhật cơ bản định kỳ 0đ*: Đổi hotline, địa chỉ, thay menu, bảng giá miễn phí, triệt tiêu cảm giác bị "vòi tiền lắt nhắt".
  4. *Bảo vệ tài sản số trọn đời*: Giữ vững Google Maps chống bị đối thủ cướp/báo đóng cửa, sao lưu dữ liệu tự động hàng tuần, 100% tài khoản chính chủ giao tận tay.
- **Bảng so sánh trực diện (Table Comparison)**: Đặt song song "Đơn vị thông thường" (phủi trách nhiệm, phát sinh phí ẩn, giam tài khoản) vs "LocalMate" (đồng hành 5 năm, phản hồi 2h, minh bạch hợp đồng) giúp gia tăng tỷ lệ chuyển đổi mạnh mẽ.
- **Tích hợp kép (Double-Touch Integration)**: Đặt sau DemoShowcaseSection trên `HomePage.tsx` để củng cố niềm tin sau khi xem mẫu bàn giao; và đặt trước Final CTA trên `ServiceDetailPage.tsx` để khách hàng yên tâm click đăng ký bất kỳ dịch vụ nào.

## 10. Chuyển Hóa Cụm Dịch Vụ AI Search & GEO (GEO, AEO, SEO AI, SEO ChatGPT) Theo Tinh Thần LocalMate
- **Thách thức thị trường**: Các agency lớn và FastMarketing tiếp cận thị trường với mức giá 15.000.000đ – 45.000.000đ/tháng, nặng tính hàn lâm, sử dụng thuật ngữ đao to búa lớn và chỉ làm việc qua slide/Google Meet từ xa. Hộ kinh doanh, phòng khám, nhà hàng địa phương rất hoang mang và không có khả năng chi trả.
- **Giải pháp chuyển hóa của LocalMate**:
  1. *Đi từ gốc rễ kỹ thuật*: Thay vì hứa hẹn viển vông, tập trung làm chuẩn 100% hạ tầng máy đọc hiểu (Schema JSON-LD LocalBusiness & FAQPage, tệp chuẩn `llms.txt` & `llms-full.txt`, Entity NAP đồng bộ 15+ danh bạ, tối ưu tốc độ Core Web Vitals < 1.2s).
  2. *Mức giá bình dân thực tế*: Định giá trọn gói chỉ từ **2.900.000đ/tháng** (tiết kiệm 75-80%), minh bạch 100% không chi phí ẩn.
  3. *Người đồng hành số tại địa phương*: Kỹ thuật viên 1-1 ghé tận nơi tại cửa hàng, cùng chủ quán test trực tiếp trên điện thoại người dùng, chụp hình xác thực tại tiệm để tạo Information Gain mà AI không thể tự bịa ra được.
  4. *Chính sách bảo hành kỹ thuật 5 năm*: Duy trì cấu trúc Schema, tệp llms.txt không bị lỗi thời, cập nhật miễn phí theo thuật toán mới của Google Gemini và OpenAI.
- **Cấu trúc 4 dịch vụ độc lập nhưng liên kết chặt chẽ**:
  - *GEO (Generative Engine Optimization)*: Tối ưu đề xuất trên ChatGPT & Gemini khi người dùng hỏi quán xá quanh khu vực.
  - *AEO (Answer Engine Optimization)*: Tối ưu cấu trúc Atomic Answers để trở thành nguồn trích dẫn được AI dẫn link bấm vào trên Perplexity & ChatGPT Search.
  - *SEO AI (Google AI Overviews)*: Chiếm lĩnh vị trí số 0 đầu trang Google, giữ vững 60% click trước làn sóng tóm tắt AI.
  - *SEO ChatGPT*: Đưa thương hiệu vào luồng hội thoại mua sắm của 600M+ người dùng ChatGPT.
- **Component Tương Tác Trực Quan**: Sử dụng `AiSearchClusterNav` cho phép chuyển đổi tức thì giữa 4 dịch vụ; và `AiPromptSimulator` giúp chủ tiệm nhìn thấy ngay kết quả trước/sau khi tối ưu. Giao diện 100% Light Mode, không glassmorphism, tương phản cao.

## 8. Đóng Gói Bộ Danh Mục Triển Khai GEO (GEO Implementation Tasks Checklist)
- **Học hỏi FastMarketing & Tinh gọn cho Địa phương**: Thay vì áp dụng nguyên si 69 tasks phức tạp vốn dành cho tập đoàn enterprise, LocalMate cô đọng thành **35 đầu việc kỹ thuật cốt lõi chia thành 5 nhóm** rõ ràng, dễ hiểu cho hộ kinh doanh và SME:
  1. *Khảo sát & Đo Baseline*: Quét tỷ lệ nhắc tên (Mention Rate), kiểm tra ảo giác AI (Hallucination), lập điểm chuẩn ban đầu.
  2. *Schema JSON-LD & Entity*: Cấu hình Schema LocalBusiness sâu, @id định danh duy nhất, sameAs đa kênh, hasOfferCatalog bảng giá và tệp `llms.txt`.
  3. *Đồng bộ NAP*: Audit tên, địa chỉ, hotline nhất quán 100% trên Google Maps, Cốc Cốc, Trang Vàng Việt Nam, Facebook Location.
  4. *Bộ 50–80 Prompt Test*: Xây dựng prompt thực tế theo 4 hành vi khách (tìm gần, so sánh, giá cả, uy tín) và cấu trúc Direct-Answer Engine.
  5. *Báo cáo Ảnh Chụp Thực Tế*: Nghiệm thu bằng ảnh màn hình chat thật từ ChatGPT, Gemini, Perplexity; nói không với báo cáo số liệu ảo.
- **Tính Minh Bạch và Giá Trị Trực Quan**: Mỗi đầu việc đều có tên việc, diễn giải ngắn gọn, tag phân loại và Deliverable cụ thể để khách hàng nắm rõ từng đồng chi phí 2.900.000đ/tháng được sử dụng vào đâu.


## 7. Hero Section & Trust Badges Ergonomics — SaosangEdu Benchmark (Subagent 2)
- **Sub-badge tinh tế (Pill Eyebrow)**: Thay vì chuỗi từ khóa viết hoa thô cứng, dùng badge mềm mại với nền xanh nhạt (`#e8f5e9`), chữ xanh đậm (`#065f46`), icon `Sparkles` và nội dung súc tích: "Đồng hành số địa phương • Bàn giao demo trong 48h". Cảm giác trang nhã, nhẹ nhàng và uy tín theo phong cách saosangedu.
- **Tiêu đề đập trúng Insight địa phương & SMB**: "Giúp doanh nghiệp địa phương có website chuẩn, lên Google và thu hút thêm khách." — Tập trung vào 3 giá trị thực dụng: có web chuẩn, có mặt trên Google, có thêm khách hàng.
- **Cụm CTA kép chuẩn mực**:
  - Nút chính: `Tư vấn miễn phí / Xem Demo` (variant `primary` xanh lá, có icon `Sparkles` & `ArrowRight`).
  - Nút phụ: `Xem bảng giá / Tìm hiểu thêm` (variant `white` viền sáng, dẫn mượt mà tới bảng giá).
  - Micro-copy cam kết 3 điểm: Dựng demo xem trước 0đ • Báo giá cố định trước khi làm • Nghiệm thu mới thanh toán.
- **Dải Trust Metrics / Stats thẻ số liệu gãy gọn**:
  - Tích hợp dải 4 thẻ số liệu ngay trong Hero Section:
    1. `250+` Khách hàng địa phương (Hộ kinh doanh & SMB tin chọn)
    2. `48 Giờ` Bàn giao demo xem trước (Trải nghiệm 0đ trước khi làm)
    3. `1 - 1` Hỗ trợ kỹ thuật tại chỗ (KTV địa phương đồng hành)
    4. `100%` Chính chủ tài khoản (Báo giá cố định, không phí ẩn)
  - Thẻ nền trắng tinh khiết `#ffffff`, viền crisp 1px `#e2e8f0`, icon nằm trong box xanh dịu `#edf7f1`, số đậm to rõ (`1.25rem`), nhãn và mô tả súc tích. Responsive 4 cột trên desktop, 2 cột trên tablet và mobile.
- **Tinh gọn Layout & Triệt tiêu Horizontal Overflow**:
  - Tinh giảm mã nguồn CSS, loại bỏ các class lặp và style thừa.
  - Căn chỉnh padding trên/dưới `clamp(2.5rem, 4.5vw, 4.25rem)` tạo không gian thoáng đãng, sang trọng.
  - Trên mobile, stack trực quan gọn gàng, không bị tràn viền, touch target >= 44px.


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
## 7. Footer & Local Identity Specialist (Subagent 9)
- **Tham chiếu chuẩn mực từ saosangedu.com**:
  - Footer được chia thành 4 khối chức năng rõ ràng, không dồn cục hay để thông tin mơ hồ.
  - Cấu trúc:
    1. *Khối định danh & Liên hệ chuẩn mực*: Pháp nhân đầy đủ (`CÔNG TY TNHH LOCALMATE` - MST `4001337934`), địa chỉ văn phòng tư vấn tại Hóc Môn, TP.HCM & trụ sở chính, hotline/Zalo `0834 422 439`, email và giờ làm việc cố định: **8:00 – 20:00 cả tuần (Thứ Hai – Chủ Nhật)**.
    2. *Khối Dịch vụ cốt lõi*: Đầy đủ liên kết đến các gói giải pháp quan trọng (Web 490k, Google Maps, Google Ads, Chăm sóc Fanpage, Web doanh nghiệp SME, Bảng giá niêm yết).
    3. *Khối Chính sách & Pháp lý minh bạch*: Bảng giá, Chính sách bảo mật, Điều khoản dịch vụ, Quy định bảo hành, Sơ đồ trang web (Sitemap), Giới thiệu công ty.
    4. *Khối Đặc quyền địa phương (Local Identity)*: Thẻ nổi bật "Tư vấn 1-1 tận nơi" khẳng định chuyên viên sẵn sàng đến tận quán/tiệm tại khu vực Hóc Môn, Quận 12 và TP.HCM để khảo sát và lên demo miễn phí; kết hợp triển khai online cho khách toàn quốc.
  - *Dải bảo chứng uy tín (Trust Strip)*: Huy hiệu Đã thông báo Bộ Công Thương (`online.gov.vn`), SSL 256-bit, Cam kết 100% tài khoản chính chủ, Báo giá trước - không phát sinh, Giờ làm việc 8h-20h cả tuần.
  - *Thanh đáy (Bottom Bar)*: Bản quyền chính thức và Tuyên ngôn sứ mệnh trang trọng: *"Đồng hành cùng hộ kinh doanh và doanh nghiệp SME địa phương xây dựng hiện diện số uy tín, tinh gọn, chi phí hợp lý và ra đơn thực tế."*

## 8. Final CTA Banner & Lead Capture Modal Ergonomics (Subagent 7)
- **Chuẩn tham chiếu SaosangEdu**:
  - Banner CTA cuối trang áp dụng nền xanh đậm thương hiệu (`#0d7647` kết hợp gradient tinh tế) với chữ trắng tương phản cao, tôn vinh tính trang trọng và thu hút chuyển đổi mạnh mẽ ở điểm chạm cuối cùng của landing page.
  - Phân tách rõ ràng **2 luồng tương tác song song**:
    1. *Khách thích tự điền*: Form siêu tinh gọn chỉ cần Họ tên + Số điện thoại/Zalo (+ chọn nhu cầu) với input to rõ (`min-height: 48px`, `font-size: 16px` chống iOS auto-zoom).
    2. *Khách muốn trao đổi ngay*: Bộ nút gọi Hotline trực tiếp (`tel:0834422439`) và nút chat Zalo 24/7 kích thước lớn, bấm là kết nối tức thì.
- **Bộ 3 cam kết uy tín cạnh form (Trust Badges)**:
  - Khách hàng SME rất nhạy cảm với việc bị spam hay gọi quấy rầy. Đặt bộ 3 bảo chứng: `Bảo mật thông tin` • `Phản hồi trong 15 phút` • `Hoàn toàn miễn phí` ngay tại form giúp gỡ bỏ hoàn toàn rào cản tâm lý khi gửi thông tin.
- **LeadModal Mobile Ergonomics**:
  - Loại bỏ hoàn toàn glassmorphism/backdrop-blur; sử dụng modal card solid `#ffffff` với viền crisp `#e2e8f0` và overlay tối vững chắc.
  - Tối ưu hóa touch target >= 44px, nút CTA dứt khoát toàn chiều ngang (full width), cung cấp hotline fallback ngay trong modal khi khách cần giải quyết vấn đề cấp bách.

## 9. Trust Section & Before/After Optimization (Subagent 5)
- **Tham chiếu phong cách chuẩn saosangedu.com**:
  - Không lý thuyết suông, không dùng từ ngữ công nghệ trừu tượng. Thay vào đó, đặt 2 thế giới cạnh nhau một cách trực quan: **Cách làm cũ (Tốn kém, Chậm chạp, Phụ thuộc agency, Ép mua phần mềm)** đối chiếu trực diện với **Giải pháp LocalMate (Giá trọn gói từ 2.9M cố định 100%, Bàn giao 3-7 ngày, 100% tài khoản chính chủ, KTV hỗ trợ tận nơi 1-1)**.
  - Sử dụng ma trận đối chiếu 5 khía cạnh cốt lõi của hộ kinh doanh (Chi phí đầu tư, Thời gian tiến độ, Quyền sở hữu, Độ phức tạp hệ thống, Hỗ trợ khi có sự cố).
- **Bộ 3 Thẻ Cam Kết Uy Tín (3 Core Trust Guarantees)**:
  1. *Cam kết chất lượng*: Dựng demo thực tế xem trước 0đ, nghiệm thu hài lòng 100% mới thanh toán.
  2. *Bảo hành kỹ thuật*: Hỗ trợ KTV 1-1 qua Zalo, sao lưu tự động định kỳ, xử lý sự cố trong ngày.
  3. *Không phát sinh chi phí*: Báo giá niêm yết trong hợp đồng là con số cuối cùng, tuyệt đối 0đ phụ phí.
- **Bảo chứng Pháp nhân & Bằng chứng xã hội (Social Proof)**:
  - Tích hợp thanh Social Proof định lượng: `150+ Cửa hàng & tiệm địa phương tin cậy`, `100% Khách hàng làm chủ tài khoản`, `0đ Chi phí phát sinh`.
  - Phân tách rõ ràng giữa:
    + *5 Tài sản thực tế cầm tay khi nghiệm thu* (CCCD, Primary Owner Maps, Bộ QR 5 sao, Video HD 2 phút, Kênh Zalo 1-1).
    + *Hồ sơ pháp lý doanh nghiệp minh bạch* (Công ty TNHH LocalMate Việt Nam, MST, địa chỉ, hóa đơn VAT điện tử, Hotline KTV tại chỗ).
- **Thiết kế chuẩn Light Mode & No-Glassmorphism**:
  - Nền sáng `#ffffff` / `#fbfcfb`, viền sắc nét `1px solid var(--color-border)`, màu sắc thương hiệu `#0d7647`, chữ đậm tương phản cao chuẩn WCAG AA.
  - `text-wrap: pretty` chống rớt chữ đơn độc, responsive mượt mà từ mobile 360px tới desktop 1920px.

## 10. Mobile Floating Quick Contacts & Sticky Navigation Ergonomics (Subagent 8)
- **Tham chiếu phong cách chuẩn saosangedu.com**:
  - Trên thiết bị di động, khách hàng ghé thăm có 2 phản xạ tự nhiên: bấm gọi Hotline trực tiếp hoặc nhắn Zalo để hỏi giá nhanh.
  - Việc cấu hình thanh floating cố định dưới đáy màn hình với 3 nút bấm chuẩn mực mang lại tỷ lệ chuyển đổi cao nhất:
    1. *Nút Gọi điện*: `tel:0834422439`, icon phone ấm áp, phản hồi ngay.
    2. *Nút Nhắn Zalo*: Mở trực tiếp Zalo hỗ trợ 24/7, định vị thương hiệu thân thiện, dễ trao đổi.
    3. *Nút Đăng ký tư vấn*: Primary CTA màu xanh thương hiệu `#0d7647` nổi bật, mở modal tư vấn demo 0đ tức thì.
- **Kỹ thuật Safe Area Insets đa nền tảng (iOS & Android)**:
  - Bắt buộc khai báo `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />` trong file `index.html` để Safari trên iPhone kích hoạt chính xác biến `env(safe-area-inset-bottom)` thay vì mặc định về 0.
  - Xử lý padding đáy thông minh: `padding-bottom: max(8px, env(safe-area-inset-bottom, 8px))` cho thanh bar và `padding-bottom: calc(68px + env(safe-area-inset-bottom, 0px)) !important;` cho thẻ `body`. Kỹ thuật này triệt tiêu 100% rủi ro thanh floating che khuất nội dung footer hoặc các nút tương tác ở cuối trang.
- **Công thái học chạm (Touch Target >= 44px)**:
  - Tất cả nút đạt chiều cao `46px` (vượt ngưỡng WCAG 44px), bo tròn mềm mại 12px, kèm phản hồi xúc giác `:active { transform: scale(0.97); }` tạo cảm giác bấm đầm tay, nhạy bén như app native.
  - Trên màn hình siêu nhỏ (360px), các nút co giãn tự động không rớt chữ nhờ `white-space: nowrap` và `text-overflow: ellipsis`.

## 11. WebFX Benchmark: Revenue-Driven Framework & Service Delivery Model
- **Định vị kết quả kinh doanh thực tế thay cho thuật ngữ kỹ thuật (Revenue Impact vs Tech Vanity)**:
  - WebFX không bán "SEO" hay "Code website" chung chung, họ định vị giải pháp: *Digital Marketing That Drives Measurable Revenue*.
  - Đối với LocalMate: Đóng gói dịch vụ gắn liền với kết quả kinh doanh thực tế của chủ cơ sở, tiệm quán: Số cuộc gọi từ Google Maps, khách nhắn tin Zalo, đơn hàng và độ nhận diện tại địa phương (bán kính 3-10km).
- **Mô hình Bánh đà Tăng trưởng 4 giai đoạn khép kín (The Local Growth Flywheel)**:
  1. *Giai đoạn 1 - Thu hút (Acquisition / Stay Visible)*: Google Maps chuẩn SEO, Web lên top tìm kiếm địa phương, chạy Ads định vị chính xác khu vực.
  2. *Giai đoạn 2 - Chuyển đổi (Pipeline / Convert Leads)*: Tốc độ web < 1s, nút Gọi/Zalo/Chỉ đường một chạm, Form đăng ký tư vấn 3 trường siêu gọn.
  3. *Giai đoạn 3 - Vận hành & Chăm sóc (RevOps & Care)*: Chăm sóc Fanpage định kỳ, quy trình lấy đánh giá 5 sao Google Maps, sao lưu & bảo mật dữ liệu.
  4. *Giai đoạn 4 - Đo lường & Tăng trưởng (Measurement & Growth)*: Báo cáo minh bạch số cuộc gọi, lượt chỉ đường, tin nhắn khách hàng mới mỗi tuần/tháng.
- **Minh bạch chi phí tuyệt đối (Pricing Transparency) & Quyền sở hữu tài sản độc lập**:
  - Cung cấp mức giá cố định, không phụ phí bất ngờ, khách nghiệm thu đạt chuẩn mới thanh toán.
  - 100% tài khoản chính chủ (Domain, Hosting, Gmail, Google Business Profile) bàn giao tận tay khách hàng.

## 12. WebFX Deliverables & Service Tiers Matrix Standard
- **Phân tách 3 cấp độ doanh nghiệp minh bạch (Starter, Growth, Enterprise)**:
  - *Gói Khởi Động (Starter - 1.490.000đ)*: Dành cho hộ kinh doanh cá thể, tiệm ăn nhỏ, thợ dịch vụ. Triển khai 24-48h, 1 Landing Page chuẩn di động, Google Maps cơ bản, Hotline & Zalo 1 chạm.
  - *Gói Tăng Trưởng (Growth - 2.900.000đ - ⭐ Best Seller)*: Dành cho cửa hàng, spa, phòng khám, nhà thầu. Web 3-5 trang chuẩn SEO tốc độ cao < 1.2s, Maps xác minh GPS chính chủ, QR review 5 sao, chuông báo Telegram/Zalo, video hướng dẫn 1-1.
  - *Gói Doanh Nghiệp (Enterprise - 5.900.000đ)*: Dành cho chuỗi đa chi nhánh, SME quy mô. Web 7-10 trang độc bản, Multi-location Maps, đồng bộ Webhook/CRM, Full Server-side tracking GTM, SLA hỗ trợ < 2h.
- **2 Cam kết vàng bảo vệ quyền lợi tối cao của khách hàng**:
  - *Cam kết 1: Nghiệm thu đạt chuẩn 100% mới thanh toán*: Khách hàng trực tiếp test trên điện thoại thật, đạt chuẩn tốc độ, tính năng và bản đồ mới trả tiền (Zero Risk).
  - *Cam kết 2: Bàn giao tài khoản chính chủ 100%*: Đăng ký bằng CCCD & Gmail của khách hàng. Bàn giao đầy đủ mã nguồn và hạ tầng, tuyệt đối không giữ con tin kỹ thuật hay thu phí duy trì ngầm.
- **Ma trận đối chiếu quyền lợi bàn giao chi tiết (WebFX Deliverables Matrix)**:
  - Bảng đối chiếu 5 trụ cột: Nền tảng Website, Google Maps & Local SEO, Chuyển đổi & Lead Gen, Bàn giao & Sở hữu, Cam kết & Bảo hành.
  - Thiết kế Light Mode, `scrollbar-gutter: stable`, `text-wrap: pretty`, hoàn toàn không dùng glassmorphism, tương phản cao đạt chuẩn accessibility.

## 13. Market Mapping & Comparative Positioning: FastMarketing vs LocalMate
- **Giải mã chiến lược định vị của Agency lớn (FastMarketing Benchmark)**:
  - Các agency lớn nhắm vào khách hàng enterprise với ngân sách khủng (15 – 50 triệu/tháng), dùng chiến thuật "bủa vây bằng thuật ngữ công nghệ" (GEO, AEO, Entity AI, SGE, Full-funnel Conversion...) và slide deck năng lực dày cộp để tạo cảm giác phức tạp, biện minh cho mức phí cao.
  - Sau khi ký hợp đồng, họ thường đùn đẩy việc cho intern/fresher, hỗ trợ qua ticket chậm chạp, giữ tài khoản quản trị làm "con tin kỹ thuật", và phủi tay ngay khi hết hạn hợp đồng.
- **Chiến lược "Đồng hành số địa phương" của LocalMate (Gỡ bỏ 6 rào cản cốt lõi)**:
  - *1. Chi phí đầu tư*: Chỉ từ 490k – 2.9tr trọn gói giá từ gốc, 0đ phụ phí ẩn (tiết kiệm 85% ngân sách cho chủ tiệm).
  - *2. Người triển khai*: Kỹ thuật viên địa phương hỗ trợ 1-1 tại chỗ, ghé tận quán khảo sát và hướng dẫn cầm tay chỉ việc.
  - *3. Trách nhiệm sau bàn giao*: Cam kết bảo hành kỹ thuật lên đến 5 NĂM, hỗ trợ qua nhóm Zalo riêng trong 15-30 phút như người nhà.
  - *4. Quyền sở hữu tài sản*: Bàn giao 100% tài khoản chính chủ bằng CCCD & Gmail của khách hàng. Không giam lỏng, toàn quyền làm chủ vĩnh viễn.
  - *5. Ngôn ngữ & Tư vấn*: Nói tiếng bình dân, đo lường trực tiếp bằng cuộc gọi, khách ghé quán và đơn hàng thay vì các chỉ số impression/traffic ảo.
  - *6. Rủi ro thanh toán*: Dựng Demo xem thử 0đ trước trên chính thông tin của tiệm; nghiệm thu hài lòng 100% mới thanh toán.
- **Kinh nghiệm thiết kế UI Component so sánh minh bạch**:
  - Tích hợp cả 3 tầng hiển thị: Quick Highlights Stat Cards (tóm tắt nhanh), Tab Pills (chọn xem theo nhu cầu), và Full Comparative Table (desktop)/Card Stack (mobile).
  - CSS responsive thông minh: Ẩn table header trên mobile (<= 860px) và chuyển card sang 1 cột để loại bỏ hoàn toàn lỗi tràn viền ngang (zero horizontal overflow).
  - Giữ vững chuẩn Light Mode, tương phản sắc nét, CTA kép hành động rõ ràng (Dựng Demo 0đ & Gặp KTV 1-1).

## 14. Catalog Hub & Dynamic Service Router Integration (15 Dịch Vụ Chuẩn Hóa)
- **Đóng gói toàn diện 15 dịch vụ thực chiến trong `src/data/operationsData.ts`**:
  - Đầy đủ mã slug, tên dịch vụ, badge, headline, giá khởi điểm từ gốc (minh bạch, bình dân), cam kết bảo hành lên đến 5 năm, đối tượng phù hợp, danh sách deliverables cụ thể, quy trình và FAQs.
  - Phủ đủ 5 nhóm: Đề xuất AI & GEO (4 dịch vụ), Website & Tối ưu (4 dịch vụ), Google Maps & Local SEO (3 dịch vụ), Quảng cáo & Kéo khách (3 dịch vụ), Đào tạo & Chuyển giao (1 dịch vụ).
- **Kiến trúc Router động hai tầng (Dynamic Service Router)**:
  - `ServiceDetailPage.tsx` hợp nhất `getOperationServiceBySlug(slug)` và `getServiceBySlug(slug)`, hiển thị chi tiết mọi dịch vụ theo link `/dich-vu/:slug`.
  - Tích hợp 4 trụ cột niềm tin: Cam kết bảo hành 5 năm, Bàn giao 100% tài khoản, Nghiệm thu mới thanh toán, Hỗ trợ 1-1 tại chỗ.
  - Tích hợp `Warranty5YearSection` và hệ sinh thái dịch vụ liên quan giúp điều hướng mượt mà, không có dead ends.
- **Trang Danh mục Dịch vụ `ServicesPage.tsx` nâng cấp toàn diện**:
  - Hỗ trợ thanh tìm kiếm thời gian thực (Search Bar) và 6 tab phân loại danh mục.
  - Mỗi card dịch vụ có badge, giá khởi điểm to rõ, 5-year warranty pill, 3 deliverables chính và nút xem chi tiết.
- **Đồng bộ Header Mega Menu & Footer Navigation**:
  - Header Mega Menu 3 cột chuẩn chỉ (AI Search & GEO, Website & Tối ưu, Google Maps & Ads) kèm thanh liên kết xem toàn bộ 15 dịch vụ.
  - Mobile drawer phẳng, tap target >= 44px, điều hướng trực tiếp không gây rối mắt.
  - Footer Cột 2 liên kết các dịch vụ trọng điểm và dẫn về trang danh mục đầy đủ.
- **Kết quả nghiệm thu**: `npm run build` PASS 100% (0 lỗi TypeScript, 0 cú pháp vỡ).

## 15. Cụm Dịch Vụ Local Search, Google Maps & Technical — Chuẩn Hóa Từ FastMarketing Cho LocalMate
- **Giải mã chiến lược Local Search & Google Maps cho điểm bán địa phương**:
  - *Google Maps GPS chính chủ 100%*: Nhiều agency tạo Maps bằng email của agency rồi giữ quyền, hoặc bỏ qua tọa độ GPS chuẩn dẫn đến việc khách đi lạc ngõ hẻm. LocalMate chuẩn hóa: xác minh bằng Gmail của chính khách (Primary Owner), khóa khiên bảo vệ chống đối thủ đề xuất đổi số điện thoại hay báo đóng cửa.
  - *Bộ QR Review 5 sao để bàn*: Khách lười đánh giá vì tìm tiệm mất công. Giải pháp standee mã QR để bàn / quầy thu ngân giúp khách chỉ cần mở camera điện thoại quét 1 chạm là vào thẳng màn hình chấm 5 sao, kích hoạt hàng trăm review thật mà an toàn tuyệt đối với Google.
  - *SEO Tổng Thể Địa Phương (Bán kính 3–10km)*: Đa số agency chỉ làm từ khóa có dấu. Người dùng Việt Nam khi mở điện thoại tìm kiếm lúc đang đi đường có tới 70% gõ không dấu (như "sua xe gan day", "tiem thuoc q7"). Tối ưu song song có dấu & không dấu giúp tiệm đón trọn lượng khách nóng quanh bán kính 3-10km.
  - *Tối Ưu Tốc Độ Web (PageSpeed 90+ trên Cloudflare)*: Đưa web lên Cloudflare Edge CDN toàn cầu, nén ảnh WebP/AVIF, loại bỏ render-blocking, zero CLS giúp trang mở dưới 1s, hạ tỷ lệ thoát trang và giảm chi phí click Google Ads.
  - *Thực Thể Số & Schema LocalBusiness*: Khai báo mã JSON-LD chuẩn schema.org (GeoCoordinates, OpeningHours, SameAs, PriceRange) và đồng bộ NAP giúp cả Google Search và AI (ChatGPT, Gemini) nhận diện thương hiệu độc nhất.
  - *SEO Audit Hiện Trạng 0đ*: Khảo sát hiện trạng miễn phí 100%, vạch trần đúng chỗ ngứa (tại sao có web/maps mà không có khách gọi) và đưa bảng việc cần làm sau 24h mà không ép mua dịch vụ.
- **Kinh nghiệm thiết kế UX Trang Hub Cụm Dịch Vụ (`LocalSearchClusterPage.tsx`)**:
  - 100% Light Mode sáng sủa, nền `#ffffff` và `#f8fafc`, chữ đậm `#0f172a`, viền sắc nét, cấm glassmorphism.
  - Tích hợp công cụ chẩn đoán sức khỏe số tương tác (Self-Diagnosis Calculator) cho phép chủ tiệm tự tích chọn triệu chứng và tính điểm nghẽn trực tiếp.
  - Live Simulator đối sánh tốc độ Cloudflare Edge vs Hosting thường (96/100 vs 38/100).
  - Khối mô phỏng Standee Mica mã QR Review 5 sao trực quan để bàn.
  - Bảng cam kết 4 KHÔNG & 4 CÓ và bảo hành kỹ thuật lên đến 5 năm.
- **TypeScript Typings Lesson**:
  - `BreadcrumbItem` định nghĩa là `{ name: string, url: string }`, không dùng `{ label, href }`.
  - `SEOHeadProps` không có thuộc tính `keywords`, bắt buộc có `canonicalPath`.
- **Kết quả nghiệm thu**: `npm run build` PASS 100% không lỗi.
## 16. Tái Kiến Trúc Toàn Bộ Hệ Thống Dịch Vụ Theo 5 Trụ Cột Giải Pháp (SSOT Docs Architecture)
- **Thiết lập chuẩn mực tài liệu SSOT tại `docs/services/` gồm 7 tài liệu nền tảng**:
  - `information-architecture.md`: Chuẩn hóa 5 tầng thông tin từ Jobs to be done -> Business Outcomes -> 5 Solution Pillars -> Capabilities/Techniques -> Deliverables. Xóa bỏ hoàn toàn mô hình catalog vụn vặt 15-40 dịch vụ kỹ thuật phẳng.
  - `service-taxonomy.md`: Định nghĩa 5 Trụ cột (01. Nền tảng số, 02. Được tìm thấy, 03. Thu hút khách, 04. Vận hành tự động, 05. Chăm sóc đồng hành), 25+ capabilities kỹ thuật và ma trận use cases liên ngành (Phòng khám, Gara, F&B, Dịch vụ tại nhà, B2B).
  - `messaging-guide.md`: Ban hành giọng điệu điềm tĩnh, thực tế, hiểu bài toán SME. Loại bỏ triệt để từ ngữ công kích đối thủ ("chém giá", "bẻ gãy thị trường", "giam tài khoản", "sale đẩy intern") và cam kết ảo ("100%", "24/7 vĩnh viễn", "cam kết Top 1").
  - `solution-template.md`: Chuẩn thiết kế trang giải pháp 12 section thống nhất (Hero -> Vấn đề -> Kết quả -> Localmate sẽ làm gì -> Capabilities -> Deliverables -> Process -> Pricing -> Use cases -> Why Localmate -> FAQ -> CTA).
  - `pricing-model.md`: Mô hình tính phí 3 cột minh bạch: Tách biệt chi phí Setup 1 lần, Phí duy trì tùy chọn (Care) và Ngân sách quảng cáo/bên thứ ba trả thẳng cho nền tảng.
  - `url-mapping.md`: Bảng đối chiếu URL cũ sang mới, phân định rõ Trang Trụ Cột (Pillar) vs Trang Vệ Tinh SEO bổ trợ (/dich-vu/geo, /dich-vu/aeo...).
  - `migration-log.md`: Nhật ký chuyển đổi và lộ trình 5 giai đoạn tái kiến trúc hệ thống dịch vụ.
- **Bài học cốt lõi**:
  - Khách hàng không thức dậy và tìm kiếm AEO hay Schema JSON-LD; họ tìm kiếm giải pháp để có thêm cuộc gọi và khách ghé tiệm. Kỹ thuật chỉ xuất hiện ở tầng Capability giải thích "Làm như thế nào (How)".
  - Ngành nghề không phải là nhánh kiến trúc thông tin (không tạo nhánh riêng cho Gara hay Phòng khám làm duplicate service), mà là Use Case Scenarios minh họa bên trong từng trang giải pháp.

## 17. Chuẩn Hóa Cụm Trang Năng Lực Chuyên Sâu (Capability Pages) & Liên Kết Ngữ Cảnh 2 Chiều (Hub & Spoke Model)
- **Vấn đề đặt ra**: Trước đây các trang dịch vụ ngách kỹ thuật (`/dich-vu/geo`, `/dich-vu/aeo`, `/dich-vu/seo-ai`, `/dich-vu/seo-chatgpt`, `/dich-vu/local-search`, `/dich-vu/chay-khach-cham-soc`) đứng độc lập, thiếu sự liên kết ngữ cảnh với hệ thống giải pháp tổng thể, đồng thời một số trang mang giọng văn hứa hẹn thái quá ("chém giá 50 triệu", "thống trị Google", "chiếm lĩnh số 0").
- **Giải pháp chuyển đổi**:
  1. *Giữ nguyên URL cho SEO hữu cơ*: Tuyệt đối không đổi hay xóa URL để bảo toàn toàn bộ sức mạnh backlink, bookmark cũ và index của Googlebot.
  2. *Component Contextual Box chuẩn mực (`CapabilityContextBox.tsx`)*: Đặt ngay đầu trang dưới thanh Breadcrumb, nêu rõ đây là năng lực chuyên sâu trực thuộc Giải pháp cha (`/giai-phap/duoc-tim-thay`), có nút bấm "Về giải pháp cha" để người dùng không bị lạc trong ngách kỹ thuật.
  3. *Breadcrumb chuẩn phân cấp*: `Trang chủ -> Giải pháp -> Được khách hàng tìm thấy (hoặc giải pháp cha) -> [Tên module này]`.
  4. *Hạ giọng văn & định vị chuyên gia thực chất*:
     - Thay "Thống trị", "Chiếm lĩnh số 0", "Top 1 chắc chắn" bằng: "Chuẩn bị dữ liệu để AI có căn cứ trích dẫn thương hiệu", "Hiện diện vị trí tổng quan AI đầu Google", "Chi phí hợp lý, làm từ gốc kỹ thuật".
     - Chuyển trọng tâm từ "hứa hẹn kết quả thần thánh" sang "quy trình kỹ thuật chuẩn xác, minh bạch số liệu".
  5. *Đồng bộ 2 chiều tại Hub giải pháp (`SolutionsPage.tsx`)*: Tuyến đường `/giai-phap/duoc-tim-thay` hiển thị danh sách 6 module năng lực chuyên sâu, tạo trải nghiệm duyệt web mạch lạc, khép kín từ tổng quan tới chi tiết và ngược lại.


## 17. Tích Hợp Routing, Route Aliasing & Kỷ Luật TypeScript QA Pass (Router & QA Agent)
- **Chuẩn Hóa URL & Xử Lý Trailing Slash Tự Động**:
  - Khi triển khai routing trên Single Page Application (SPA), khách hàng hoặc bot tìm kiếm có thể truy cập `/dich-vu` hoặc `/dich-vu/`. Nếu so khớp cứng nhắc chuỗi, một trong hai URL sẽ rơi vào 404 hoặc fallback homepage.
  - Giải pháp: Chuẩn hóa `normalizedPath = currentPath.replace(/\/$/, '') || '/'` ngay đầu hàm `renderPage()`. Mọi so khớp route tiếp theo đều sạch sẽ, không trùng lặp code và chống gãy trang 100%.
- **Chiến Lược Route Alias Bảo Toàn SEO & Thói Quen Người Dùng**:
  - Không phá vỡ các liên kết cũ `/dich-vu` và các route chuyên sâu `/dich-vu/geo`, `/dich-vu/local-search`...
  - Cung cấp đồng thời cả URL ngữ nghĩa mới (`/giai-phap/xay-nen-tang-so`) và URL alias ngắn gọn theo thói quen (`/dich-vu/xay-nen-tang-so`). Cả hai đều trỏ về cùng một Single Source of Truth component giúp người dùng truy cập từ bất kỳ nguồn nào cũng mượt mà.
- **Kỷ Luật Type-Safety & Khắc Phục Lỗi TypeScript Ngầm**:
  - *Extending HTML Element Attributes*: Component bọc như `<Link>` hay `<Button>` luôn cần kế thừa `React.AnchorHTMLAttributes<HTMLAnchorElement>` hoặc `React.ButtonHTMLAttributes<HTMLButtonElement>` để không chặn các event handlers phổ biến như `onMouseEnter`, `onMouseLeave`, `title`, `aria-*`.
  - *Lucide Icon Dictionary Typing*: Khi tạo `ICON_MAP` ánh xạ chuỗi sang Lucide Icon component, sử dụng `Record<string, React.ComponentType<any>>` để tránh xung đột `WeakValidationMap` với `LucideProps` của thư viện.
  - *Single Source Data Completeness*: Khi một trang (như `ServicesPage`) dựa vào dataset phụ (như `INDUSTRY_SCENARIOS_DATA` hay `COMPARISON_TABLE_DATA`), luôn xuất khẩu dữ liệu có kiểu rõ ràng và đầy đủ thuộc tính đồng bộ (`traditionalWay` song song với `traditionalAgency`), ngăn chặn lỗi `Parameter implicitly has an 'any' type` lan truyền khắp ứng dụng.
- **Nghiệm Thu Thực Tế**:
  - Chạy `npm run build` sau mỗi lần refactor lớn để đảm bảo `tsc` và `vite build` kiểm tra toàn bộ 1566+ modules. Trạng thái: **BUILD PASS 100% (0 errors)**.

