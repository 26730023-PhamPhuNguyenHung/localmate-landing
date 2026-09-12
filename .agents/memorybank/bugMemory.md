# Bug Memory & Lessons Learned

## 1. Bài học về Quản lý Agent & Prompting
- **Không nhồi nhét rules dự án khác**: Tránh copy-paste các rules backend B2B (Prisma, Tanstack, Flue) vào dự án landing page đơn giản vì sẽ làm Agent bị ngộ độc context và kẹt vòng lặp.
- **Tránh Spawn quá nhiều Subagents trên 1 Frontend**: 10 subagents cùng sửa 1 repo frontend gây xung đột git và file lock. Nên dùng 1 Agent chính giải quyết tuần tự theo module hoặc tối đa 2 subagent chạy 2 trang độc lập.
- **Rule 14 Verified-First**: Sau mỗi cụm module hoặc 15 phút, chạy `npm run build` và commit local ngay.
- **Bài học Mobile Responsive & CSS Grid Tràn Màn Hình (Viewport Overflow)**:
  - Lỗi: Dùng `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` hoặc `minmax(340px, 1fr)` kết hợp `Container` có padding cố định khiến tổng width vượt quá 360px-375px trên mobile, làm toàn bộ trang bị lệch trái/phải và chữ bị cắt mép.
  - Giải pháp: Chuẩn hóa ở tầng Layout & Core Primitives (`Container`, `SectionHeader`, `Card`, `globals.css`). Luôn dùng `minmax(min(100%, 280px), 1fr)` thay cho số pixel cố định, dùng fluid clamp spacing (`--space-container-px`, `--space-card-p`) và bổ sung universal anti-overflow `overflow-x: hidden` trên `html, body, #root`.

## 2. Bài học về Kiến trúc SEO & Copywriting Ngôn Ngữ Khách Hàng (Customer-Centric)
- **Tư duy Khách hàng là trên hết (No Agency Jargon)**:
  - Chủ shop, bác sĩ nha khoa, chủ xưởng không mua "digital transformation", "funnel", "SLA", "content pillar". Họ mua cuộc gọi, tin nhắn, khách ghé quán và một website rõ ràng, uy tín.
  - Mọi từ ngữ kỹ thuật phải được dịch sang hành động đời thường: "Search Terms" -> "Khách đã tìm gì trên Google", "Local SEO / GBP" -> "Đưa tiệm lên Google Maps", "Landing Page" -> "Website 1 trang bán hàng".
- **Minh bạch giá & Loại bỏ cam kết ảo**:
  - Giá phải xuất hiện sớm (Website từ 490k, Google Maps từ 299k, Google Ads từ 390k, Viết bài từ 990k/tháng).
  - Nghiêm cấm cam kết ảo ("Top 1 Google", "Bảo hành trọn đời"). Thay bằng cam kết thực tế: "Nghiệm thu hài lòng rồi mới thanh toán", "Bàn giao 100% tài khoản chính chủ", "Có hỗ trợ kỹ thuật sau bàn giao".
- **Dynamic Per-Route SEO**: Trong các SPA/Vite apps, nếu không dùng SSR/SSG phức tạp, hãy tạo component `SEOHead` cập nhật ngay lập tức `document.title`, `meta[name="description"]`, canonical `link[rel="canonical"]` và inject JSON-LD script động vào `<head>`.
- **Type Guard cho quan hệ dữ liệu liên quan (Related Items)**: Khi map danh sách slugs (`relatedServiceSlugs`, `relatedArticleSlugs`) sang entities, luôn sử dụng TypeScript User-Defined Type Guard `filter((item): item is EntityType => Boolean(item))` để tránh lỗi `TS18048: item is possibly undefined`.

## 3. Bài học về Ads Launch, Chuyển Đổi & Kênh Liên Hệ
- **Không bao giờ dùng link Zalo trần (`https://zalo.me`)**: Link Zalo trần chỉ mở trang chủ hoặc trang tải app của Zalo, không mở hội thoại chat với doanh nghiệp. Luôn dùng định dạng chuẩn: `https://zalo.me/<SỐ_ĐIỆN_THOẠI>` (ví dụ: `https://zalo.me/0834422439`).
- **Tập trung hóa dịch vụ gửi Lead (`submitLead`)**: Tránh viết hàm fetch phân tán ở nhiều form (`LeadModal`, `ContactPage`, `Landing490kPage`, `FinalCTASection`). Gom tất cả qua 1 service duy nhất (`src/services/leadService.ts`) để tự động kèm UTM attribution, đồng bộ Google Sheets, và kích hoạt conversion event (`generate_lead`, `lead_created`) cho cả Google Ads và Meta Ads.
- **Không dùng `alert()` trong luồng đăng ký mua hàng/dịch vụ**: Dùng modal state, inline error messages hoặc toast notification để trải nghiệm trên mobile mượt mà, không bị chặn bởi pop-up native của trình duyệt.

## 4. Bài học về Tối Ưu Background Video & Infinite Loop (Web Performance & UI)
- **Kỹ thuật Boomerang / Ping-Pong Loop Không Khựng Khung Hình (Zero-Stutter)**:
  - Khi tạo loop xuôi-ngược (`[fwd][rev]`), nếu không xử lý, frame ở đỉnh đảo chiều và frame ở điểm tiếp giáp 0s sẽ bị lặp lại 2 lần liên tiếp gây khựng nhẹ (stutter).
  - Khắc phục bằng FFmpeg trim chính xác: loại bỏ frame trùng ở đỉnh và đuôi (`[0:v]trim=start=0:end=3.5` + `trim=start=0.04167:end=3.45833,reverse`). Nhờ đó chuyển động sóng đạt gia tốc điều hòa êm ái tuyệt đối.
- **Tối Ưu Dung Lượng & Tiết Kiệm Băng Thông Web**:
  - Luôn loại bỏ luồng âm thanh thừa (`-an`) cho video nền.
  - Xuất song song bản WebM (VP9, ~530 KB) và MP4 (H.264 High Profile, faststart, ~740 KB) để trình duyệt ưu tiên nạp WebM nhẹ hơn 30-40%.
- **Quy Chuẩn UI Light Mode & Giữ Màu Tự Nhiên Cho Background Video**:
  - Tránh lớp gradient trắng dày phủ toàn màn hình: Phủ `rgba(255,255,255, 0.4 - 1.0)` toàn hero làm bạc màu (wash out), mất màu xanh nhận diện và mất chiều sâu sóng nước.
  - Giải pháp đúng: Dùng `linear-gradient` siêu mỏng (0.04 - 0.06) phủ toàn khung + `radial-gradient` cục bộ (`.hero-content-backdrop`) chỉ nằm phía sau cụm văn bản trung tâm. Vừa giữ trọn 100% màu sắc và độ sâu chuyển động của video, vừa đảm bảo chữ đen `#0F172A` đọc cực rõ nét.
  - Video giữ nguyên `opacity: 1`, tinh chỉnh nhẹ `saturate(1.05) contrast(1.02)` và cố định `transform: scale(1.02)` chống hở viền khi `object-fit: cover` (tuyệt đối không animate scale/translate).
- **Data-Driven UI & Tách Biệt Nội Dung Khỏi Presentation**:
  - Toàn bộ nội dung của 5 Task Groups, 5 Core Offers, Triết lý vận hành, Quy trình 5 bước và FAQ được quản lý tập trung tại `src/data/operationsData.ts`.
  - Giúp việc điều chỉnh nội dung kinh doanh độc lập hoàn toàn với UI rendering, tránh phá vỡ giao diện khi cập nhật câu chữ.
- **Loại Bỏ Triệt Để Glassmorphism (No Backdrop-Filter Blur)**:
  - Phát hiện và loại bỏ vết tích `backdrop-filter: blur(8px)` trong `FinalCTASection.tsx`, thay bằng nền phẳng solid `var(--color-navy)` và viền `#334155` rõ ràng. Đảm bảo 100% Light/Solid contrast, không gây lag GPU trên thiết bị di động yếu.
- **Sửa Lỗi Điều Hướng Route Con**:
  - `KnowledgeHubSection.tsx` từng gọi `navigate(art.slug)` dẫn đến URL thiếu tiền tố `/kien-thuc/`. Đã chuẩn hóa thành `navigate('/kien-thuc/' + art.slug)`.
- **Bảo Toàn 100% Thành Phần Chi Tiết Cốt Lõi**:
  - Header (Mega Menu 4 cột full-width 1240px) và Footer (chuẩn MISA/AMIS Light theme với thông tin pháp nhân CÔNG TY TNHH LOCALMATE MST 4001337934 và huy hiệu BCT) được giữ nguyên vẹn 100%, bảo toàn uy tín thương hiệu cao nhất.

## 5. Bài học về Responsive Laptop 14" & Windows Zoom 125% (Subagent 3 Audit)
- **Lỗi kinh điển CSS Grid dùng `%` cộng lại bằng 100% khi có `gap`**:
  - Trong `PhilosophySection.tsx`, đặt `grid-template-columns: 42% 58%` kết hợp với `gap: 3.5rem (56px)`. Do CSS Grid tính `%` theo container width nên `42% + 58% = 100%`, cộng thêm `gap` khiến cột phải luôn bị tràn ra ngoài container đúng bằng kích thước `gap` (56px), sinh ra 24 phần tử overflow!
  - Khắc phục triệt để: Luôn dùng fractional units `fr` (`minmax(0, 5fr) minmax(0, 7fr)`). CSS Grid sẽ tự động trừ `gap` ra trước khi chia tỷ lệ `fr`, bảo đảm 100% không bao giờ tràn viền.
- **Lỗi Mega Menu 1240px bị cắt cụt (clipping) 134px ở Laptop 14" Windows Zoom 125% (~1093x614)**:
  - Ở độ phân giải 1093px (màn hình 14 inch zoom 125%), container chỉ rộng 1048px, trong khi 3 cột dịch vụ + cột promo rail 280px đòi hỏi tối thiểu ~1207px. Do container có `overflow: hidden`, cột promo rail bị tràn và cắt cụt mất 134px (chỉ còn thấy 146px)!
  - Khắc phục triệt để: Bổ sung media query `@media (min-width: 1025px) and (max-width: 1240px)` tinh chỉnh padding (1.15rem 1.25rem), giảm gap (1.15rem / 0.85rem), co promo rail về 240px và giảm kích thước icon/card. Kết quả: `clippedPixels = 0`, toàn bộ 9 dịch vụ và banner gói 490k hiển thị sắc nét, nguyên vẹn 100%.
  - Đổi `.mega-menu-overlay` từ `width: 100vw` thành `width: 100%` để tránh thanh cuộn ngang do scrollbar dọc trên Windows.
- **Tối ưu Hero Affordance & Peek Height cho màn hình chiều cao thấp (614px)**:
  - Hero trên laptop 14" zoom 125% có chiều cao hiển thị chỉ 614px. Padding quá dày làm section kế tiếp chỉ nhô lên 29px (dễ bị che nếu có thanh bookmark/taskbar dày).
  - Tinh chỉnh `clamp(2rem, 3.8vw, 3.75rem)` giúp chiều cao Hero giảm còn ~502px, độ nhô lên (peek) của `#can-lam-gi` tăng lên 42px - 55px rõ rệt, thúc đẩy người dùng cuộn chuột tự nhiên.

## 6. Bài học về Header & Navigation UX (Subagent 2)
- **Tối ưu Desktop Nav Density & Tránh Cạnh Tranh Thị Giác (Visual Hierarchy)**:
  - Bỏ "Trang chủ" khỏi desktop nav vì logo đã là điểm neo mặc định trỏ về `/`, giúp tiết kiệm 80px chiều ngang.
  - Hotline trực tiếp (`tel:0834422439`) dùng màu slate nhã nhặn (`#475569`, hover `#0d7647`) đóng vai trò thông tin hỗ trợ, nhường trọn thị giác thu hút cho nút CTA chính [Báo giá nhanh] màu xanh `#0d7647`.
  - Tổng chiều rộng các phần tử nav + action trên desktop ~900px, đảm bảo an toàn tuyệt đối không bị wrap hay đè lên nhau trên màn hình laptop 14" zoom 125% (~1228px).
- **Mobile Header Conversion & Drawer Flat UX**:
  - Đưa nút [Báo giá nhanh] compact ngay trên Header mobile cạnh nút Hamburger, giúp khách hàng di động có thể bấm chuyển đổi tức thì mà không cần mở menu.
  - Loại bỏ hoàn toàn accordion lồng nhau (nested accordions) bên trong Mobile Drawer vì gây khó bấm và làm giấu nội dung quan trọng. Thay bằng cấu trúc danh sách phẳng 2 tầng (Điều hướng chính + Dịch vụ triển khai nhanh).
  - Chuẩn hóa mọi interactive item trong Drawer đạt tap target `>= 44px` (Apple Human Interface Guidelines & Google Web Vitals), có nút Hotline và CTA kích thước lớn ghim ở chân menu.

## 7. Bài học về Master Redesign & Premium Editorial UI/UX (Landing Page Redesign)
- **Giải quyết dứt điểm "Bội thực Card" (Card Fatigue)**:
  - Trước đây: Quá nhiều card nhỏ chữ nhật lặp đi lặp lại (`ProblemMapperSection` 5 card, `ServiceCardsSection` 4 card, `PricingMatrixSection` 4 card...).
  - Giải pháp: Chuyển đổi sang **Editorial Rows (Split 35/65)** cho Discovery nhu cầu, **Asymmetric 3-Package Layout** cho Bảng giá (1 gói chính nổi bật + 2 gói phụ xếp chồng), và **Minimal Horizontal Trust Strip** (không card).
  - Giảm hơn 40% số lượng visual cards, tạo nhịp điệu thị giác đĩnh đạc và sang trọng như một Digital Studio cao cấp.
- **Giải quyết dứt điểm Mâu thuẫn Báo giá 490k vs 2.9tr**:
  - Tách bạch rõ ràng: Gói Bán hàng 1 trang (490k / 24h) dành cho tiệm nhỏ/cá nhân, Gói Khởi tạo chuẩn (2.9tr / 3-5 ngày) bao gồm Web 3-5 trang + Google Maps chính chủ + Bộ mã QR Review 5 sao để bàn.
  - Loại bỏ việc dump toàn bộ 41 dịch vụ lẻ ra mặt tiền trang chủ, đưa vào collapsible catalog drawer mở rộng theo yêu cầu (`.catalog-toggle-btn`).
- **Nâng cấp Typography & 16px Root Base**:
  - Cố định `html { font-size: 16px; }` thay vì bị hạ xuống 14.5px/14px.
  - Sử dụng `clamp()` chuẩn cho H1, H2, H3, Body và Metadata tối thiểu 14px, tối ưu đọc thư thái trên Laptop 14" Scale 125%.
- **Zero Horizontal Overflow & Zero CLS**:
  - Kiểm thử thực tế bằng `agent-browser` trên toàn bộ 9 viewports (1536, 1440, 1366, 1228, 1024, 768, 430, 390, 375): `overflow = 0` trên 100% viewports.
  - Khắc phục nguy cơ CLS trên Header và Footer bằng cách gán kích thước cố định `width`/`height` cho logo.

## 11. Bài học về Chuẩn Hóa Cụm Dịch Vụ Chạy Khách & Chăm Sóc Vận Hành (Học Hỏi Từ FastMarketing)
- **Minh bạch tài chính tuyệt đối (0% phí kê giá / Không ăn chênh lệch)**:
  - Nỗi đau của khách hàng: Các agency cũ thường thu % ngân sách hoặc nâng khống giá bid click (báo 10k nhưng thực chạy 3k-4k), đồng thời giấu tài khoản Ads làm con tin.
  - Giải pháp LocalMate: 100% tài khoản chính chủ của khách (khách giữ quyền Admin cao nhất). Thẻ Visa/Mastercard cá nhân hoặc công ty của khách được add trực tiếp vào Google/Meta, sao kê trừ bao nhiêu khách trả bấy nhiêu. LocalMate chỉ thu phí kỹ thuật (setup & quản trị tối ưu) cố định được niêm yết công khai.
- **Xử lý chuyên sâu ngành nhạy cảm (Sửa điện thoại, laptop, điện lạnh, thông hút bể phốt, sửa khóa)**:
  - Bản chất vấn đề: Google siết gắt chính sách "Third-party consumer technical support" và "Misrepresentation/Trademark" để ngăn chặn mạo danh trung tâm bảo hành Apple/Samsung. Các thủ thuật blackhat (bọc link, cloaking) chỉ chạy được vài ngày là bị khóa vĩnh viễn tên miền lẫn thẻ vì tội "Tránh né hệ thống".
  - Giải pháp chính ngạch chuẩn hóa theo FastMarketing: (1) Sửa landing page, thêm Tuyên bố miễn trừ trách nhiệm pháp lý độc lập (Independent Disclaimer); (2) Gỡ bỏ toàn bộ logo nhãn hiệu vi phạm bản quyền Trademark; (3) Công khai thông tin pháp nhân, bảng giá niêm yết, quy trình và cam kết bảo hành; (4) Chuẩn bị hồ sơ ĐKKD/hợp đồng thuê nhà và soạn đơn giải trình kháng nghị song ngữ (Việt - Anh) trực tiếp tới bộ phận Trust & Safety của Google Ads; (5) Nuôi tài khoản whitelist an toàn.
- **Chiến lược cắm mốc GPS bán kính 1km – 5km quanh tiệm (Facebook Ads)**:
  - Nhắm mục tiêu chính xác vào cư dân đang sinh sống, làm việc quanh tiệm. Loại bỏ hoàn toàn đối tượng vãng lai hoặc ở tỉnh xa.
  - Sử dụng hình ảnh/video chụp thật tại quán, thiết kế kịch bản tin nhắn tự động (Quick Replies) hỏi số điện thoại và báo giá ngay để chốt lịch hẹn.
- **Chính sách Cam kết Bảo hành Kỹ thuật Lên Đến 5 Năm (Website Care)**:
  - Đóng vai trò phòng IT & Content thuê ngoài cho SME: giám sát Uptime 24/7, tự động backup hàng tuần, tối ưu Cloudflare CDN < 1.2s, hỗ trợ cập nhật nội dung qua nhóm Zalo riêng trong 15–30 phút, viết 4–8 bài chuẩn SEO kéo traffic tự nhiên.
  - Bảo hành toàn diện 5 năm về hạ tầng, mã nguồn và bảo mật giúp chủ tiệm an tâm kinh doanh dài lâu.

