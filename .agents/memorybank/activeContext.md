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
  - `DemoShowcaseSection.tsx`: Build & Test công khai kết hợp Website thật và Automations kiểm chứng.
  - `FAQSection.tsx`: Bộ câu hỏi thường gặp về mô hình vận hành và pháp nhân.
  - `FinalCTASection.tsx`: Loại bỏ glassmorphism, form gửi việc 3 trường vàng nhanh gọn.
  - `HomePage.tsx`: Luồng 10 section mạch lạc, `npm run build` pass 100% không lỗi.

## 5. Fanpage Content Strategy & Automation (Active)
- **Định vị truyền thông**: "Người đồng hành số tại địa phương" — Không bán tool phức tạp, giải quyết từ câu hỏi "Bạn đang cần làm gì?".
- **SSOT Memory**: Duy trì file `.agents/memorybank/contentMemory.json` lưu trữ metadata từng bài, kiểm soát tỷ trọng pillar, chống lặp hook/angle/format và tự thích ứng (adaptive content).
- **Trụ cột nội dung**: 30% Vấn đề vận hành thật, 20% AI & Automation thực dụng, 15% Founder đang xây gì, 15% Breakdown hệ thống, 10% Quan điểm, 10% Offer / Conversion.
- **Tiêu chuẩn chất lượng**: 100% tiếng Việt tự nhiên, không bịa số liệu/case study giả, không văn sáo rỗng thời đại 4.0. Tự chấm điểm Quality Check 8 tiêu chí >= 7/10 trước khi xuất bản.
