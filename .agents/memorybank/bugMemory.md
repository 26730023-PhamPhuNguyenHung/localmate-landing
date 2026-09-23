# Bug Memory & Lessons Learned

## 1. Bài học về Quản lý Agent & Prompting
- **Không nhồi nhét rules dự án khác**: Tránh copy-paste các rules backend B2B (Prisma, Tanstack, Flue) vào dự án landing page đơn giản vì sẽ làm Agent bị ngộ độc context và kẹt vòng lặp.
- **Tránh Spawn quá nhiều Subagents trên 1 Frontend**: 10 subagents cùng sửa 1 repo frontend gây xung đột git và file lock. Nên dùng 1 Agent chính giải quyết tuần tự theo module hoặc tối đa 2 subagent chạy 2 trang độc lập.
- **Quy tắc Kiểm thử & Không chạy lặp Screenshot vô tận**: Tránh để subagent rơi vào vòng lặp chụp ảnh màn hình (screenshot loop) hoặc sinh file script test tạm gây chậm tiến độ. Ưu tiên build TypeScript/Vite và visual check dứt điểm.
- **Rule 14 Verified-First**: Sau mỗi cụm module hoặc 15 phút, chạy `npm run build` và commit local ngay.
- **Bài học Mobile Responsive & CSS Grid Tràn Màn Hình (Viewport Overflow)**:
  - Lỗi: Dùng `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` hoặc `minmax(340px, 1fr)` kết hợp `Container` có padding cố định khiến tổng width vượt quá 360px-375px trên mobile, làm toàn bộ trang bị lệch trái/phải và chữ bị cắt mép.
  - Giải pháp: Chuẩn hóa ở tầng Layout & Core Primitives (`Container`, `SectionHeader`, `Card`, `globals.css`). Luôn dùng `minmax(min(100%, 280px), 1fr)` thay cho số pixel cố định, dùng fluid clamp spacing (`--space-container-px`, `--space-card-p`) và bổ sung universal anti-overflow `overflow-x: hidden` trên `html, body, #root`.

- **Lỗi LucideIcon ComponentType Mismatch trong React 18 & TypeScript (`TS2322`)**:
  - Triệu chứng: `error TS2322: Type 'LucideIcon' is not assignable to type 'ComponentType<{ size?: number; className?: string; color?: string; }>'` do kiểu `propTypes` của `LucideProps` khai báo `size?: string | number` trong khi ComponentType đòi hỏi `size?: number`.
  - Giải pháp: Khai báo trường icon trong các interface điều hướng/danh mục là `React.ComponentType<any>` thay vì `LucideIcon` hoặc `ComponentType<{ size?: number }>`. Điều này giúp tương thích tuyệt đối với mọi phiên bản của `lucide-react` mà không gây vỡ type build.

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
  - Tách bạch rõ ràng: Gói Bán hàng 1 trang (490k / 24h) dành cho tiệm nhỏ/cá nhân, Gói Khởi tạo chuẩn (2.9tr / 3-5 ngày) bao gồm Web 3-5 trang + Google Maps chính chủ + Bộ mã QR đánh giá chân thực để bàn.
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

## 12. Bài học về Content Quality Gate & Red Team (Subagent 10)
- **Căn bệnh Templated Seed / AI Slop trong CMS Seed Data**:
  - Khi khởi tạo dữ liệu mẫu cho CMS (như 30 bài viết SEO), việc dùng vòng lặp gán cùng 1 đoạn văn placeholder ("Nội dung chi tiết cho mục X đang được biên tập...") tạo ra 30 bài "Thin Content" nguy hiểm.
  - Nguy cơ: Nếu vô tình chuyển trạng thái `published`, toàn bộ trang web sẽ bị thuật toán Google Helpful Content Update & SpamBrain gắn cờ phạt chất lượng thấp.
  - Giải pháp: Khóa chặt trạng thái `draft`, thiết lập Hàng rào Kiểm duyệt Đỏ (Red Team Quality Gate) với 14 Tiêu Chí Bác Bỏ Ngay Lập Tức (Knock-out), chấm theo Rubric 100 điểm (>= 85 điểm mới được Publish) và yêu cầu viết lại 100% (100% Rewrite Required) trước khi ra công chúng.

## 13. Lỗi Cô Lập Bài Viết (Orphan Pages) & Vòng Lặp Bẫy Bot (Spider Trap Loop) Trong Link Graph (Subagent 6)
- **Phát hiện lỗi logic**:
  - **Bài 06** (`10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach`): Bị bỏ quên với 0 incoming link do chuỗi bài Cụm 1 trỏ vòng lại Bài 01 (`05 -> 01`).
  - **Bài 13** (`local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam`): Dù là **Pillar của Cụm 3**, nhưng bị 0 incoming link do Bài 12 nhảy cóc thẳng sang Bài 16, và Bài 30 không link tới Bài 13. Hậu quả: PageRank của Bài 13 rớt xuống đáy (0.0050), kéo theo Bài 14 (0.0071) và 15 bị bỏ đói thẩm quyền.
  - **Closed Loop tại Cụm 1**: Chu trình khép kín `01 -> 02 -> 03 -> 04 -> 05 -> 01` làm bẫy bot và tích tụ PageRank ảo (> 0.055), ngăn cản dòng chảy PageRank sang Cụm 2 và Cụm 3.
  - **Bất đồng bộ hệ thống dữ liệu**: `src/data/articlesData.ts` chỉ chứa 5 bài viết cũ (`art-01` đến `art-05`), không đồng bộ với 30 bài trong `drafts_30_articles.json`.
- **Quy tắc ngăn chặn vĩnh viễn (Fix & Prevention)**:
  1. Mọi kịch bản seed content phải có bước kiểm thử đồ thị tự động (`scripts/analyze_graph.cjs`): kiểm tra In-degree $\ge 1$ cho 100% bài viết.
  2. Bắt buộc liên kết 2 chiều Hub-and-Spoke: Bài Pillar phải trỏ xuống các Supporting, và 100% Supporting phải có Reverse Upward Link về Pillar.
  3. Bổ sung liên kết liên cụm (Cross-Cluster Bridge): Bài 06 trỏ sang Bài 07, Bài 12 trỏ sang Bài 13, Bài 22 trỏ sang Bài 06, Bài 24 trỏ sang Bài 28.
  4. Đưa thẳng link thương mại về Canonical Pages (`/bang-gia`, `/landing-490k`, `/thiet-ke-website`, `/google-maps-local-seo`, `/dich-vu/geo`) thay vì chỉ dùng alias `/giai-phap/*`.## 14. Bài học về CMS Guardrails & Chặn Đứng AI Placeholder/Slop Xuất Bản (Audit V2 & Post 1)
- **Căn nguyên rò rỉ Placeholder (Root Cause)**:
  - Vòng lặp sinh outline trong `scripts/generate-seeds.js` tự động inject template string `Nội dung chi tiết cho mục "${headingText}" đang được biên tập theo tiêu chuẩn thực tế của LocalMate...` khi thiếu nội dung chi tiết. Đây là cơ chế ngụy trang nguy hiểm: trông bài viết có vẻ hoàn chỉnh nhưng 80% là thin content.
- **Giải pháp Chặn 2 tầng (Dual-Layer Publish Guardrail)**:
  1. *Server-Side Validation* (`functions/api/routes/adminPosts.ts`): Bắt buộc kiểm tra khi trạng thái là `published`. Nếu nội dung chứa bất kỳ pattern placeholder (`đang được biên tập`, `sẽ cập nhật`, `tiêu chuẩn thực tế của LocalMate`, `placeholder`, `lorem ipsum`) hoặc tổng từ < 400 từ, API lập tức trả lỗi 400 Bad Request kèm danh sách lý do cụ thể và chặn đứng việc ghi DB.
  2. *Client-Side Guardrail* (`src/admin/editor/PostEditorPage.tsx`): Trước khi gửi request chuyển sang `published`, frontend quét nội dung và hiển thị alert cảnh báo trực quan ngăn người dùng xuất bản bài viết rác.
- **Tiêu chuẩn Rewrite Bài Viết Thực Chiến (Case Post ID 1: ~3.890 từ)**:
  - *Answer-First*: Định nghĩa trọn vẹn bản chất website doanh nghiệp ngay 80 từ đầu, không lan man, không rào đón.
  - *Bảng so sánh đa chiều*: Lập bảng so sánh 8 tiêu chí giữa Website vs Mạng xã hội (Quyền sở hữu, Khách tìm kiếm, Tự động hóa...).
  - *Bộ lọc quyết định (Decision Matrix)*: Phân định rạch ròi 4 trường hợp CẦN LÀM NGAY vs 4 trường hợp CHƯA NÊN LÀM để chủ doanh nghiệp tự đối chiếu.
  - *Ví dụ thực tế đời thường*: Đưa ví dụ xưởng nhôm kính Bình Tân, tiệm sửa điều hòa Quận 7, quán ăn gia đình... để giải thích cấu trúc trang và chi phí.
  - *Minh bạch chi phí*: Bóc tách 5 khoản chi phí cố định và biến đổi (Domain, Hosting, Thiết kế, Bảo trì, Marketing) giúp khách hàng không bị agency khác "vẽ tiền".
  - *Checklist tự thẩm định*: 6 bước chủ shop cần chuẩn bị trước khi thuê thiết kế website.
  - *FAQPage Schema*: Tích hợp 6 câu hỏi đáp thực tế phản ánh đúng thắc mắc phổ biến nhất của chủ doanh nghiệp nhỏ.

## 15. Bài học về Tái Thiết Kế Giao Diện Bài Viết Editorial Chuẩn Tạp Chí (Anti-AI & Anti-Dashboard)
- **Căn bệnh "SEO Dashboardification" trên trang bài viết**:
  - Giao diện bài viết cũ bị lạm dụng các thành phần kỹ thuật máy móc: Badge "Đã kiểm chứng thực tế" kèm khiên bảo vệ (fake credential), hộp viền xanh rực `TL;DR (Answer First)` với icon tick xanh kiểm toán, breadcrumb xám cao 85px, khối tác giả đóng khung to tướng như thẻ widget dashboard admin.
  - Hậu quả: Độc giả cảm nhận đây là trang xuất bản tự động từ tool SEO hoặc AI generator, làm suy giảm nghiêm trọng độ tin cậy của thương hiệu dịch vụ.
- **Quy tắc chuyển đổi sang Editorial Magazine Format**:
  1. *Breadcrumbs*: Chiều cao mỏng nhẹ (~48px), nền sáng đồng bộ `#fbfcfb`, tự động cắt ngắn tiêu đề (ellipsis) theo breakpoint.
  2. *Header & Byline*: H1 dùng `clamp()`, text-wrap pretty, line-height 1.25. Tác giả và metadata trình bày theo chuẩn Byline tạp chí tinh tế ("Đội ngũ Localmate • Cập nhật dd/mm/yyyy • X phút đọc • Chia sẻ"), bỏ toàn bộ card xám bao quanh.
  3. *Hộp Tóm Tắt (ArticleSummary)*: Đổi nhãn thành "Tóm tắt nhanh" (không uppercase, không icon kiểm chứng), viền trái xanh mỏng `3px solid #0d7647`, nền sáng dịu `#f8fafc`.
  4. *Typography Chuẩn Mắt Đọc*: Thân bài giới hạn `max-width: 760px`, cỡ chữ 17-18px, `line-height: 1.8`, màu `#1e293b`. Các bảng biểu so sánh bọc container `overflow-x: auto` chống vỡ ngang trên di động.
  5. *Tính toán Reading Time từ thực tế*: Tuyệt đối không dùng chuỗi hardcode (như 18 phút đọc). Tính chuẩn theo công thức tiếng Việt: `readingTime = Math.max(1, Math.ceil(wordCount / 230)) + ' phút đọc'`.
  6. *Tách biệt Public Data và Internal Strategy*: Các trường `searchIntent`, `targetCustomer`, `contentGoal`, `outline`, `brief` thuộc về chiến lược SEO nội bộ, phải lưu tách biệt sang `internalSeo.ts` và dùng mapper `toPublicArticle()`, tuyệt đối không để rò rỉ ra client bundle của người đọc.

## 16. Bài học về TOC ScrollSpy Giật Cửa Sổ (Auto-Scroll Bug) & Bảng Dữ Liệu Tràn Màn Hình Mobile
- **Căn nguyên Bug Tự Động Cuộn Lên (Heading Auto-Scroll Trap)**:
  - *Bản chất của `element.scrollIntoView()`*: Theo W3C CSSOM View, hàm này cuộn đệ quy toàn bộ các scrolling ancestor cho tới tận `window`. Khi ScrollSpy cập nhật `activeId`, gọi `scrollIntoView()` sẽ kéo giật cả cửa sổ trình duyệt (window) về phía container TOC!
  - *Nguy hiểm từ Dual Mounting*: Trang bài viết render 2 instance TOC cùng lúc trong DOM (1 ở đầu bài viết cho mobile, 1 ở sidebar cho desktop). Dù mobile TOC bị ẩn bằng `display: none !important` trên desktop, React vẫn mount nó. Cả hai cùng nghe `window.scroll`, cùng tính toán và mobile TOC ở đầu trang gọi `scrollIntoView()` trên phần tử ẩn -> Kéo window của người dùng giật ngược lên đầu trang ngay khi vừa cuộn xuống!
  - *Giải pháp triệt để*:
    1. **Tuyệt đối cấm dùng `scrollIntoView()` cho TOC nội bộ**: Thay bằng điều chỉnh `container.scrollTop` nội bộ (`listEl.scrollTop += delta`), chỉ di chuyển nội dung bên trong rail, zero side-effect lên window.
    2. **Phân lập Conditional Mounting theo Breakpoint**: Dùng hook `useIsDesktop(1080)` để chỉ mount Desktop Sidebar TOC trên màn hình lớn và chỉ mount Mobile Inline Accordion TOC trên màn hình nhỏ. Không còn ghost scroll listeners, không duplicate DOM query.
    3. **Visibility Guard**: Kiểm tra `offsetParent !== null` trước khi chạy ScrollSpy.
    4. **Scroll Lock khi click**: Tạm khóa ScrollSpy trong 650ms khi người dùng click vào mục lục, cập nhật URL hash qua `window.history.replaceState`.
- **Căn nguyên Bug Layout Table Tràn Màn Hình Mobile (Horizontal Page Overflow)**:
  - *Lỗi đặt `overflow-x: auto` trên thẻ `<table>`*: Thẻ `<table>` có `display: table`, không phải block container nên thuộc tính `overflow-x: auto` trực tiếp trên nó bị vô hiệu hoàn toàn theo CSS spec. Kết hợp với `min-width: 580px`, bảng phá vỡ toàn bộ độ rộng viewport trên mobile (375px/390px), gây lỗi cuộn ngang toàn trang.
  - *Lỗi `white-space: nowrap` trên `<th>`*: Khi tiêu đề cột tiếng Việt dài, `nowrap` cấm ngắt dòng làm bảng bị kéo dãn tới 900px - 1000px, người dùng mobile phải vuốt một quãng đường quá dài.
  - *Giải pháp triệt để*:
    1. Tiền xử lý HTML tự động wrap tất cả bảng trong `<div class="table-scroll-wrapper"><div class="table-scroll-hint">...</div><div class="table-responsive" tabindex="0" role="region" aria-label="Bảng dữ liệu"><table>...</table></div></div>`.
    2. Thay `white-space: nowrap` bằng `white-space: normal; text-wrap: balance;`, giảm `min-width: 520px`.
    3. Bổ sung chỉ báo cuộn trực quan "Vuốt ngang để xem đầy đủ bảng" kèm custom thin scrollbar chuẩn Light Mode.
- **Redesign Table of Contents Chuẩn Editorial Guide Rail (Linear / Stripe Docs)**:
  - Loại bỏ toàn bộ badge đếm số lượng mục, icon nền xanh to, footer "Lên đầu trang" trong card, viền card thô và active background pill lớn.
  - Header: Chỉ "Mục lục" thanh thoát (14px, font-weight 600, màu `#0f172a`).
  - Trục ray dẫn hướng bên trái mỏng 1px (`#e2e8f0`). Active item có chỉ báo `border-left: 2px solid #0d7647`, text xanh thương hiệu font-weight 600.
  - Mobile: Thu gọn thành accordion siêu nhẹ ở đầu bài, tự động đóng lại khi người dùng chọn mục để bài viết được đọc trọn vẹn ngay tức thì.

## 17. Bài học về Pháp Lý Số 2026 (LegalOps SSOT): Hợp Đồng Khung, PDP 2025, Quảng Cáo, SHTT và Chống Hình Sự Hóa
- **Mô hình Hợp đồng Khung (MSA) + Phụ lục SOW thay vì hợp đồng rời rạc**:
  - Không ký 5-6 hợp đồng độc lập với cùng một khách hàng. Áp dụng 1 Master Service Agreement (MSA) chứa điều khoản pháp lý chung (Bảo mật, SHTT, DPA, Giới hạn trách nhiệm, Tranh chấp), đi kèm Đơn hàng (SO) và Bản đặc tả phạm vi (SOW) định lượng cho từng dịch vụ (Web, Maps, Ads, Content, CRM).
- **Cập nhật Pháp lý Thực định 2026 (Tuyệt đối không dùng mẫu luật cũ)**:
  - *Bảo vệ dữ liệu cá nhân*: Phải viện dẫn Luật Bảo vệ dữ liệu cá nhân 2025 (Luật số 91/2025/QH15) & Nghị định 356/2025/NĐ-CP (hiệu lực 01/01/2026) thay cho việc chỉ viện dẫn Nghị định 13/2023. Tích hợp Nghị định 330/2026/NĐ-CP về xử phạt an ninh mạng/DLCN (phạt tới 5% doanh thu).
  - *Quảng cáo*: Tuân thủ Luật Quảng cáo sửa đổi 2025 (Luật số 75/2025/QH15) hiệu lực 01/01/2026; bắt buộc ký cam kết điều kiện quảng cáo `LM-MKT-DEC-22` để chuyển 100% rủi ro phạt sang khách hàng.
  - *Giao dịch điện tử*: Tuân thủ Luật Giao dịch điện tử 2023 (số 20/2023/QH15) công nhận giá trị pháp lý của email/Zalo và chữ ký số.
- **Bóc tách dòng tiền Media Spend (Thuế GTGT & Thu nhập)**:
  - Tuyệt đối khuyến khích khách hàng tự add thẻ thanh toán trực tiếp vào Google/Meta để Google xuất hóa đơn có mã số thuế nhà thầu cho khách.
  - Nếu nhận nạp hộ, phải ghi rõ là khoản "Thu hộ, chi hộ theo Điểm d Khoản 7 Điều 5 Thông tư 219/2013/TT-BTC" không tính vào doanh thu của LocalMate để tránh bị truy thu thuế.
- **Xử lý Khách chậm tiền: Chống hình sự hóa tranh chấp dân sự (Điều 287 BLHS)**:
  - Tuyệt đối cấm đổi mật khẩu, cấm đổi DNS, cấm xóa cơ sở dữ liệu của khách khi khách nợ tiền. Hành vi này có nguy cơ cấu thành Tội cản trở hoạt động mạng máy tính theo Điều 287 BLHS.
  - Thay vào đó: Áp dụng cơ chế **Bảo lưu quyền sở hữu mã nguồn (Điều 331 BLDS 2015)** + **Quyền tạm ngừng dịch vụ (Điều 308 LTM & Điều 411 BLDS)** bằng cách hiển thị màn hình thông báo bảo trì kỹ thuật trung tính.
- **Tiền Đặt Cọc (Điều 328 BLDS & Án lệ 25/2018/AL)**:
  - Dùng thuật ngữ "Tiền đặt cọc", tuyệt đối không dùng "tiền tạm ứng/trả trước" để không bị ép xuất hóa đơn ngay và được giữ lại 100% cọc khi khách tự ý hủy hợp đồng.
- **Encoding trên Windows PowerShell CLI**:
  - Tránh hardcode chuỗi ký tự tiếng Việt có dấu trực tiếp trong mã script `.ps1` nếu không có UTF-8 BOM, vì PowerShell 5.1 mặc định parse theo Windows-1252 gây lỗi cú pháp. Dùng tiếng Anh/ASCII cho console logs của script tự động hóa.

## Footer và menu public trên mobile (2026-09-23)
- Nút `Dịch vụ` trong mobile drawer từng dùng font mặc định của browser (`Arial`) vì `button` không tự kế thừa `font-family`; đặt `font-family: inherit` và dùng weight 700 có trong font đang tải để đồng nhất với navigation.
- Lỗi menu `Dịch vụ` tự bật khi vào `/labs` xuất phát từ `onMouseEnter` trên desktop dropdown. Chỉ mở dropdown bằng click; đóng dropdown và mobile accordion khi đổi `currentPath` hoặc chọn link. Kiểm tra đường đi `/kien-thuc` → `/labs` khi dropdown đang mở.
- Footer dùng chung nên giữ link trong `FOOTER_GROUPS`, chỉ ẩn các link phụ ở mobile khi chúng còn truy cập được qua menu khác. Kiểm tra viewport 375/390/430px và route đích trước khi tái sử dụng trên trang mới.

## Điều hướng dịch vụ và form tư vấn (2026-09-23)
- Menu cũ khai báo các `path` dịch vụ chi tiết nhưng `App` chưa có route tương ứng; các item lại chuyển về `/#services` và bật form. Dùng `/dich-vu` thật với dữ liệu từ `servicesData`, không hiển thị link tới route chưa triển khai.
- Header trang chủ và header public phải cùng tập mục chính; xóa mục điều hướng chỉ trỏ tới anchor khi không còn phù hợp. Footer có thể giữ link nội dung phụ nếu đích thực sự tồn tại.
- Không hứa thời gian phản hồi cố định trong `LeadModal` khi chưa có quy trình đo được. Với webhook `no-cors`, trạng thái thành công chỉ nói yêu cầu đã gửi qua mạng.
- Với slogan footer, căn nét vàng theo vùng chữ thay vì `margin-left: auto` về cạnh phải của cột; kiểm tra cả mobile và desktop.
## Layout Audit, Touch Targets & Anti-Overflow Pass (2026-09-23)
- **Sticky Filter Bar Offset**: Site Header cố định (cao 68px) đè che lấp hoàn toàn phần tử con có `position: sticky; top: 0;` khi người dùng cuộn trang. Khắc phục: Luôn đặt `top: '68px'` (bằng chiều cao header) để thanh lọc chủ đề luôn nằm ngay dưới header khi cuộn.
- **Seed Index Ổn Định Cho Thumbnail Bài Viết**: Việc dùng `idx` (chỉ số trong mảng đã filter `filteredArticles.map((article, idx) => ...)`) khiến cùng một bài viết bị nhảy đổi ảnh đại diện liên tục mỗi khi người dùng bấm lọc chuyên mục hoặc gõ từ khóa tìm kiếm. Khắc phục: Luôn tính seed index từ chính `article.id` (`typeof article.id === 'number' ? article.id : parseInt(article.id, 10)`).
- **Triệt tiêu Horizontal Overflow 1264px trên Mobile (390px)**:
  - Khi dùng ảnh minh họa trang trí lớn (width 130%-140%, right -20%), nếu container cha thiếu thuộc tính khống chế tràn, trang web sẽ bị sinh thanh cuộn ngang rác khổng lồ.
  - Khắc phục: Khai báo `overflow-x: hidden; width: 100%; max-width: 100vw;` trên `.geo-page`, đặt `overflow-x: clip;` trên các section container, và trên mobile `<= 640px` khống chế `max-width: 100%; width: 100%; right: 0; left: 0; margin: 0 auto;`.
- **Touch Target Chuẩn W3C/Google (>= 44px) & Xử Lý Virtual Keyboard**:
  - Nút đóng `.lead-modal-close` và các filter pill cần đạt tối thiểu 44px x 44px để chống bấm trượt trên mobile.
  - Trên mobile, modal overlay cần có `align-items: flex-start; padding: 12px;` để modal không bị trôi mất tiêu đề hoặc nút bấm khi bàn phím ảo bật lên.
  - Phím Escape trong Modal phải gọi hàm `close()` để reset sạch sẽ toàn bộ form state thay vì chỉ gọi `onClose()`.
- **Anti-Glassmorphism & Tương Phản WCAG AA**:
  - Loại bỏ hoàn toàn các màu nền bán trong suốt alpha hex (`#ffffff75`, `#ffffffdb`, `#ffffffcc`) sang nền đặc `#ffffff` và viền nhạt tinh tế `#e2e8f0`.
  - Thay màu cam nhạt `#f47b00` / `#f65e16` thành `#b45309` / `#c2410c` để đạt độ tương phản chuẩn WCAG AA (> 4.5:1) trên nền sáng.
  - Loại bỏ thuộc tính `text-wrap: initial` gây rớt từ đơn lẻ, đồng bộ sử dụng `text-wrap: pretty` cho tiêu đề và nội dung ngắn.
