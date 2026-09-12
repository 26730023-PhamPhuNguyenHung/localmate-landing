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
  - Phân tách sắc nét giữa: 5 Tài sản bàn giao cầm tay (CCCD, Primary Owner Maps, QR Review 5 sao, Video HD 2 phút, Zalo nhóm 1-1) và Pháp nhân Công ty TNHH LocalMate (MST 4001337934, địa chỉ trụ sở, hóa đơn VAT điện tử, hotline KTV).
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

