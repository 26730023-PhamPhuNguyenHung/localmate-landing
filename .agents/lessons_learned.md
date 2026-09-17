# BÀI HỌC VÀ LƯU Ý KỸ THUẬT (LESSONS LEARNED & BUG MEMORY)

## [2026-09-17] — Tối Giản Visual Hierarchy: Loại Bỏ Ảnh Bitmap Thừa Trùng Lặp Background & Cân Chỉnh Trục Ngang (Baseline Alignment) Thẻ Icon-Text Nhiều Dòng
- **Vấn đề phát sinh thực tế:**
  1. *Ảnh Bitmap Thừa Đè Nền*: Trong Section 3 ("Vì sao doanh nghiệp cần Localmate?"), background của section đã sử dụng ảnh phối cảnh `pricing-scene.png`. Việc nhét thêm một ảnh `value-scene.png` độ phân giải lớn đè lên khiến giao diện bị rối mắt, trùng lặp chi tiết minh họa và đẩy card trả lời AI (`.geo-answer`) tụt xuống đáy, tạo khoảng trống thừa bất hợp lý.
  2. *Lệch Trục Icon Do Text Rớt Dòng*: Trong lưới 4 thẻ platform ở Hero Section, 3 thẻ đầu có text ngắn 1 dòng ("ChatGPT", "Google Gemini", "Perplexity"), riêng thẻ thứ 4 có text 3 từ ("Google AI Overviews") bị ngắt thành 2 dòng. Nếu container dùng `justify-content: center` và không cố định khung icon, thẻ thứ 4 sẽ bị đẩy icon lên cao hơn 3 thẻ còn lại, làm gãy đường chân trời ngang thị giác.
- **Quy tắc & Kỹ thuật xử lý chuẩn:**
  1. *Triệt Tiêu Phối Cảnh Trùng Lặp (Clean Visual Hierarchy)*:
     - Khi background section đã có cảnh minh họa chiều sâu, các thành phần tương tác bên trong chỉ nên là các thẻ card UI chức năng (Data-Driven Cards, Prompt Queries, Interactive Answer Preview).
     - Xóa bỏ ảnh minh họa thừa giúp thẻ `.geo-answer` tự động căn giữa dọc (`align-self: center;`) ngang hàng với 4 query prompts, tạo sự đối thoại trực quan trực diện giữa "Câu hỏi khách hàng" và "Kết quả gợi ý từ AI".
  2. *Đồng Trục Ngang (Absolute Baseline Alignment) cho Card Hỗn Hợp Text*:
     - Container `.geo-platform`: Dùng `display: flex; flex-direction: column; align-items: center; justify-content: flex-start; min-height: 92px;`.
     - Khung icon `.geo-platform-icon`: Cố định kích thước `height: 36px; width: 36px; flex-shrink: 0;` để tâm và đáy của 4 icon luôn nằm trên cùng 1 đường thẳng tắp bất chấp chiều dài text bên dưới.
     - Khối text `.geo-platform span:last-child`: Đặt `display: flex; align-items: center; justify-content: center; min-height: 28px; line-height: 1.2;` để dù text 1 dòng hay 2 dòng thì trọng tâm của chữ vẫn cân đối hài hòa bên dưới icon.

## [2026-09-17] — Cân Bằng Quang Học (Optical Balance) & Khử Nền Lossless Cho Bộ Logo Nền Tảng AI
- **Vấn đề phát sinh thực tế:**
  - 4 logo từ các nguồn khác nhau có hình dáng hình học khác biệt lớn: hình tròn đặc (ChatGPT), hình thoi 4 cánh (Gemini), hình chữ nhật dọc (Perplexity), hình ngôi sao 4 cánh mảnh (Google AI Overview).
  - Nếu chỉ scale theo bounding box thông thường (cùng chiều rộng hay cùng chiều cao), hình có nét mảnh như ngôi sao AI Overview sẽ bị cảm giác bé hơn hẳn so với hình tròn đặc ChatGPT (hiện tượng thiếu cân bằng thị giác - Optical Disparity).
- **Quy tắc & Kỹ thuật xử lý chuẩn:**
  1. *Optical Sizing Canvas*: Sử dụng canvas vuông 256x256 trong suốt. Đặt kích thước mục tiêu (target_dim) theo diện tích cảm nhận thị giác:
     - ChatGPT (khối tròn đặc): `target_dim = 195px`
     - Gemini (khối thoi đa sắc): `target_dim = 210px`
     - Perplexity (khối hoa chữ nhật): `target_dim = 210px`
     - Google AI Overview (ngôi sao nét mảnh): `target_dim = 250px`
  2. *Unblend White Edge Fringe*: Khi tách logo từ ảnh JPG có nền trắng (Gemini, Perplexity), sử dụng công thức unblend: `clean_rgb = (rgb - 255*(1-a))/a` để loại bỏ dải viền trắng đục (white halos) khi đặt trên nền card hoặc nền chuyển sắc.
  3. *Hiển thị CSS Responsive*: Khung bao ngoài `.geo-platform-icon` flex center, ảnh con `.geo-platform-img` dùng `object-fit: contain; width: 34px; height: 34px` (desktop) và `26px` (mobile), thêm hiệu ứng micro-interaction `transform: scale(1.1)` khi hover.

## [2026-09-17] — Chuẩn Hóa Kiến Trúc Cloudflare Pages Static Serving & Redirects Cho Landing Page Đích (/geo)
- **Vấn đề phát sinh thực tế:**
  - Trang landing page `/geo` cần phục vụ song song cả dưới dạng SPA route lẫn Direct Static URL siêu tốc không cần chờ tải bundle JavaScript React.
  - Nếu chỉ dùng file `dist/landing-geo.html` với relative path `./geo/...`, khi người dùng truy cập `localmate.vn/geo/` (có dấu gạch chéo cuối), trình duyệt sẽ hiểu base là `/geo/` và load sai thành `/geo/geo/hero-scene.png` gây lỗi 404 hình ảnh.
- **Giải pháp & Kiến trúc chuẩn:**
  1. *Root-Relative Paths & Base Tag*: Luôn sử dụng đường dẫn tuyệt đối bắt đầu từ gốc domain (`/geo/image.png`) hoặc bổ sung `<base href="/">` trong `<head>` để triệt tiêu vĩnh viễn lỗi đường dẫn tương đối khi URL thay đổi có hoặc không có trailing slash.
  2. *Dual Static Output*: Script export (`scripts/export-geo-html.mjs`) ghi đồng thời vào cả `public/landing-geo.html` và `public/geo/index.html`. Cloudflare Pages sẽ tự động nhận diện `geo/index.html` và serve trực tiếp HTTP 200 cho cả `/geo` và `/geo/` với độ trễ thấp nhất.
  3. *Cloudflare `_redirects` SSOT*: Tạo file `public/_redirects`:
     ```
     /geo /geo/index.html 200
     /geo/ /geo/index.html 200
     /landing-geo /landing-geo.html 200
     /landing-490k /landing-490k.html 200
     /* /index.html 200
     ```
     Đảm bảo các landing page tĩnh được serve ngay lập tức, trong khi tất cả các route khác fallback về `/index.html` cho React Router.

## [2026-09-17] — Tối Ưu Mobile Typography, Khử Lỗi Rớt Chữ Vụn Vặt & Thiết Kế Lại Footer Promise Badge
- **Vấn đề phát sinh thực tế:**
  1. *Tiêu đề Hero H1 rớt từ vụn vỡ*: `font-size: 34px` trên mobile 360–390px quá lớn khiến 1 câu 13 chữ bị ngắt thành 5 dòng cụt lủn ("KHÁCH HỎI", "CHATGPT VỀ", "DỊCH VỤ.", "AI CÓ NHẮC ĐẾN", "BẠN KHÔNG?"), mỗi dòng chỉ có 1–2 từ.
  2. *Badge Footer Promise bị ép co rúm*: Thẻ cam kết sứ mệnh `"Cùng nhau xây dựng một Việt Nam thịnh vượng trong kỷ nguyên AI"` bị nhét bên trong cột con "Dịch vụ nổi bật" (vốn chỉ chiếm 1/2 màn hình mobile ~165px). Diện tích text còn lại ~115px không đủ chứa cụm `"một Việt Nam thịnh vượng"`, khiến chữ `"vượng"` bị rớt trơ trọi 1 mình thành dòng thứ 4.
  3. *Proof items 3 cột co rúm*: Dàn hàng ngang 3 cột trên mobile màn hẹp khiến câu `"Phù hợp với doanh nghiệp đã có website"` bị xé thành 4 dòng li ti khó đọc.
  4. *Orphan word ở chữ viết tay*: Cụm từ `"mạnh mẽ"` bị bẻ đôi, chữ `"mẽ"` rớt đơn lẻ xuống dòng riêng.
- **Giải pháp & Kỹ thuật chuẩn hóa:**
  1. *Tách Footer Promise Badge thành Full-Width Banner*: Đưa `.geo-footer-promise` ra làm con trực tiếp của `.geo-container`, nằm ngang giữa `geo-footer-grid` và `geo-footer-bottom`.
     - Trên Desktop: Chiều ngang fit-content, căn giữa trang trọng, 1 dòng duy nhất.
     - Trên Mobile: Chiều rộng 100%, padding 12px 14px, nền xanh `#f0faf5`, viền nhạt `#d4ece1`, icon mầm xanh `#008762` bên trái, text 11.5–12px cân đối 2 dòng, bọc `<b style="white-space:nowrap">một Việt Nam thịnh vượng</b>` để triệt tiêu vĩnh viễn lỗi rớt chữ đơn lẻ.
  2. *Responsive Fluid Typography cho Hero H1*: Dùng `font-size: clamp(22px, 6.2vw, 28px); line-height: 1.24; letter-spacing: -0.035em; text-wrap: balance;`. Kết quả: Tiêu đề chia đều thành 2 dòng trên và 2 dòng dưới cân xứng tuyệt đối trên cả 360px và 390px.
  3. *Chuyển Proof Items thành danh sách dọc dạng Pill*: Trên mobile (`max-width: 640px`), `.geo-proofs` chuyển sang `flex-direction: column; gap: 7px;`. Mỗi item là 1 card pill bo góc `#ffffffba` viền `#dcf2e8`, icon tròn 32px bên trái và câu mô tả trọn vẹn 1 dòng bên phải.
  4. *Khử chữ rớt lẻ cho Handwritten*: Bọc `<span style="white-space:nowrap">mạnh mẽ</span>` và dùng `text-wrap: balance; font-size: clamp(14px, 4.2vw, 16px) !important;`.

## [2026-09-17] — Khắc Phục Lỗi Font Ký Tự Tiếng Việt In Hoa Có Dấu & Layout Viewport-Fit Cho Landing Page Ads
- **Vấn đề phát sinh:**
  1. *Lỗi Font Ký Tự Có Dấu*: Khi viết in hoa tiếng Việt có dấu (`Ắ, Ầ, Ỏ, Ậ, Ộ, Ờ...`) với font-weight nặng như `900` hoặc các số lẻ (`850`, `750`), trình duyệt Chromium trên Windows bị thiếu glyphs tiếng Việt nên tự động fallback sang font hệ thống (Segoe UI / Arial), làm cho chữ có dấu bị lệch phông, nét mỏng/dày bất thường so với chữ không dấu.
  2. *Lỗi Tràn Màn Hình Thẻ Giá*: Khi danh sách checklist gồm 8–10 hạng mục xếp dọc thành 1 cột, chiều cao thẻ bị phình to tới ~700px, khiến người dùng laptop không thấy được nút CTA và ghi chú giá dưới đáy màn hình mà không cuộn chuột.
  3. *Lỗi Footer Quá Tải*: Trang landing page chạy Ads chuyển đổi cao không được hiển thị Footer tập đoàn 5 cột với hàng chục link liên kết rườm rà.
- **Quy tắc & Giải pháp kỹ thuật đúc kết:**
  1. *Google Fonts URL*: Luôn thêm `&subset=vietnamese&display=swap` vào link Google Fonts trong `index.html`.
  2. *Font-weight tiêu chuẩn*: Tuyệt đối không dùng các trọng số font tự bịa (`550`, `650`, `750`, `850`, `900`). Hãy dùng các trọng số chuẩn `400`, `500`, `600`, `700`, `800`. Đối với tiêu đề in hoa tiếng Việt, dùng `font-weight: 800; font-family: 'Be Vietnam Pro', sans-serif; letter-spacing: -0.01em;` để đảm bảo 100% ký tự có dấu hiển thị đồng nhất tuyệt đối.
  3. *Lưới Checklist 2 Cột (Compact Viewport-Fit)*: Trên desktop, chia danh sách checklist thành grid 2 cột (`grid-template-columns: 1fr 1fr; gap: 4px 12px;`). Kết hợp đặt Tên gói và Giá trên cùng một hàng ngang (`display: flex; justify-content: space-between;`). Điều này giảm 50% chiều cao thẻ (từ 700px xuống ~350px), giúp toàn bộ section nằm vừa khít màn hình desktop không cần cuộn.
  4. *Dedicated Clean Ads Footer*: Trên các trang landing page chạy Ads (`/geo`, `/geo-ads`), tạo Footer riêng (`GeoFooter.tsx`) tinh gọn: Logo, Hotline/Zalo, Email, Địa chỉ, MST công ty và các liên kết chính sách bảo mật/điều khoản để đáp ứng 100% chính sách Ads mà không gây xao nhãng.


- **Bối cảnh & Vấn đề phát hiện:**
  - Khi thiết kế Hero section chia 2 cột (cột trái văn bản, cột phải form audit) trên desktop, cột văn bản bị co hẹp lại chỉ còn ~500–550px.
  - Hậu quả: Tiêu đề H1 cỡ chữ lớn bị ngắt từ vụn vỡ kỳ quặc (ví dụ: *"KHÁCH HỎI CHATGPT VỀ DỊCH"* ở dòng 1 và *"VỤ CỦA BẠN"* ở dòng 2), làm mất nhịp đọc tự nhiên và tạo cảm giác chật chội, thiếu uy lực.
- **Giải pháp & Kỹ thuật triển khai:**
  1. *Chuyển đổi sang Full-Width Centered Hero*:
     - Thay vì ép 2 cột bên hông, đưa Tiêu đề H1 và đoạn thông điệp lên vị trí toàn chiều rộng (Full-Width / Container wide).
     - Định nghĩa 2 dòng độc lập bằng `<span className="geo-title-line">` kết hợp `word-break: keep-all` và `text-wrap: balance` để giữ nguyên cụm từ tiếng Việt trọn vẹn, không ngắt đôi từ đơn.
  2. *Thiết kế Form Audit dạng Centerpiece Card*:
     - Đặt ngay bên dưới tiêu đề theo dạng thẻ trung tâm (max-width 860px - 880px), viền xanh thương hiệu `#0d7647`, bóng mờ tinh tế.
     - 4 checklist được tổ chức thành 2 cột x 2 hàng trên desktop giúp form thoáng đãng và giảm chiều dài cuộn.
     - 2 ô input (`[ Website của bạn ]` và `[ Số điện thoại / Zalo ]`) đặt song song 2 cột trên Desktop, tự động xếp chồng 1 cột trên Mobile.
  3. *Tối ưu chuyển đổi Mobile Ads*:
     - Tối giản hóa trường thông tin chỉ còn Website + SĐT/Zalo để đạt Zero Friction.
     - Nút CTA to bản min-height 54px, dễ bấm bằng ngón cái.
     - Hotline và Chat Zalo luôn sẵn sàng dưới chân form và thanh sticky bar.
- **Nghiệm thu:**
  - Trực quan màn hình desktop 1440x900 và mobile 390x844 hiển thị cân xứng, sang trọng, không lỗi typography.
  - `npx tsc --noEmit` và `npm run build` hoàn thành với mã thoát 0.


## [2026-09-14] — Xây Dựng 3 Pillar Pages Tiếp Theo Chuẩn SEO & GEO: /google-ads, /content-marketing, /automation
- **Yêu cầu & Thách thức:**
  - Hoàn thiện 3 trang Pillar Pages còn lại theo chuẩn Single Source of Truth (SSOT) `src/data/company.ts`:
    1. `/google-ads` (`src/pages/GoogleAdsPillarPage.tsx`)
    2. `/content-marketing` (`src/pages/ContentMarketingPillarPage.tsx`)
    3. `/automation` (`src/pages/AutomationPillarPage.tsx`)
  - Cấu trúc mỗi trang:
    1. Hero section với thông điệp thực tế cho SME
    2. Answer-First Block (50-80 từ trả lời trực tiếp cho AI & người đọc)
    3. Bảng tóm tắt: Bảng giá, Deliverables, Timeline, Ownership, Support, Last Updated
    4. Chi tiết gói giải pháp & tính năng thực tế + Bảng so sánh trực quan
    5. FAQ & CTA nhận tư vấn kết nối `submitLead`
  - Giao diện Light Mode, tương phản cao, tuyệt đối không glassmorphism.
- **Kỹ thuật & Kiến trúc thực hiện:**
  - `GoogleAdsPillarPage.tsx`: Nhấn mạnh 0% kê giá, khách hàng tự quản lý thẻ Visa/Mastercard với Google, LocalMate chỉ thu phí công kỹ thuật 1.500.000đ/tháng, chặn click tặc đa tầng và đo lường bằng cuộc gọi Hotline/Zalo thật. Answer-First Block: 74 từ.
  - `ContentMarketingPillarPage.tsx`: Giải pháp phòng marketing thuê ngoài cho SME chỉ 990.000đ/tháng với 15 bài viết SEO, 15 thiết kế đồ họa, sao lưu hàng tuần Cloudflare R2, bảo trì Uptime/SSL 24/7 và cập nhật giá/banner trong 15–30 phút. Answer-First Block: 76 từ.
  - `AutomationPillarPage.tsx`: Hệ thống thông báo đơn hàng rung chuông điện thoại sau 3 giây qua Zalo/Telegram, đồng bộ Google Sheets Mini CRM, chatbot tự động gửi bảng giá với chi phí cài đặt 1 lần 1.900.000đ và 0đ phí duy trì phần mềm hàng tháng. Answer-First Block: 77 từ.
  - Cập nhật định tuyến `src/App.tsx` cho các canonical routes `/google-ads`, `/content-marketing`, `/automation` và các aliases liên quan.
- **Nghiệm thu & Bài học:**
  - Khi alias component import trong TypeScript (`as LegacyName`), cần cẩn trọng rà soát toàn bộ file router để tránh lỗi thiếu import component trùng tên ở nhánh khác.
  - Các icon Lucide truyền vào `React.ComponentType` nên đặt kiểu `any` hoặc `React.ComponentType<LucideProps>` để tránh lỗi type incompatibility với `PropTypes` trong chế độ strict mode.
  - `npx tsc --noEmit` và `npm run build` hoàn thành với mã thoát 0 (0 lỗi).

## [2026-09-14] — Xây Dựng 2 Pillar Pages Chuẩn SEO & GEO: /thiet-ke-website & /google-maps-local-seo
- **Yêu cầu & Thách thức:**
  - Xây dựng 2 trang Pillar Page cốt lõi tương ứng 2 trụ cột đầu tiên trong `src/data/company.ts`:
    1. `/thiet-ke-website` (`src/pages/WebDesignPillarPage.tsx`)
    2. `/google-maps-local-seo` (`src/pages/GoogleMapsPillarPage.tsx`)
  - Cấu trúc chuẩn hóa 6 phần:
    1. Hero section với headline rõ ràng, cam kết "Bàn giao mới thanh toán", nút tư vấn Zalo
    2. Answer-First Block: Đoạn văn 50–80 từ trả lời trực tiếp cho AI ("Làm website 1 trang cho hộ kinh doanh giá bao nhiêu?", "Dịch vụ Google Maps bao gồm những gì?")
    3. Bảng tóm tắt thông tin rõ ràng (8 tiêu chí bắt buộc: Bảng giá, Đối tượng phù hợp, Hạng mục bàn giao, Thời gian triển khai, Chi phí duy trì, Quyền sở hữu, Bảo hành, Ngày cập nhật)
    4. Chi tiết các gói cước và quy trình 4 bước thực chiến
    5. Case studies liên quan (dẫn link sang `/du-an/...` với các dự án thực tế Quán XÈO, Nội Thất Nam Phát, Hương Sen Spa)
    6. FAQ chi tiết và CTA chuyển đổi cao
  - Giao diện Light Mode, phông Be Vietnam Pro, không glassmorphism.
- **Giải pháp & Kỹ thuật triển khai:**
  - Khởi tạo `src/pages/WebDesignPillarPage.tsx` và `src/pages/GoogleMapsPillarPage.tsx` đọc trực tiếp từ `COMPANY_DATA` trong `src/data/company.ts`.
  - Thiết kế Answer-First Block chuẩn SEO/GEO với độ dài 72 từ (Web) và 76 từ (Maps), hỗ trợ nút copy và schema `FAQPage` JSON-LD tự động bơm vào thẻ head.
  - Xây dựng bảng tóm tắt 8 tiêu chí chuẩn xác, layout responsive ngang có cuộn mượt mà trên mobile.
  - Cập nhật định tuyến trong `src/App.tsx` trỏ `/thiet-ke-website` và `/google-maps-local-seo` về 2 trang Pillar mới.
  - Cập nhật `src/pages/HtmlSitemapPage.tsx` bổ sung 2 liên kết Pillar pages.
- **Nghiệm thu:**
  - `npx tsc --noEmit` và `npm run build` hoàn thành với mã thoát 0.
  - Không glassmorphism, tương phản chữ đậm trên nền sáng, typography `Be Vietnam Pro`.


## [2026-09-14] — Hoàn Thiện Canonical Routes, Catalog Bảng Giá Toàn Diện (/bang-gia) & Chuẩn Hóa Header/Footer
- **Yêu cầu & Vấn đề xử lý:**
  1. *Routing*: `src/App.tsx` cần kết nối toàn bộ canonical routes chuẩn (`/thiet-ke-website`, `/google-maps-local-seo`, `/google-ads`, `/content-marketing`, `/automation`, `/bang-gia`, `/du-an`, `/du-an/:slug`, `/ve-localmate`, `/lien-he`) tương ứng với 5 Pillar Pages chuyên sâu và 3 Case Studies thực tế từ `company.ts`.
  2. *Catalog Bảng giá*: Trang `/bang-gia` (`PricingPage.tsx`) trước đây ẩn drawer 41 dịch vụ trong accordion và chỉ hiện 16 item. Cần một Catalog toàn diện (`FullServicesCatalogSection.tsx`) hiển thị mở sẵn, nhóm theo 5 trụ cột rõ ràng từ `company.ts` & `servicesCatalog.ts` kèm bộ lọc tìm kiếm tức thì theo từ khóa và hình thức thanh toán (trọn gói / theo tháng).
  3. *Header & Footer*: Cập nhật menu Desktop Mega Menu và Mobile Drawer trỏ trực tiếp về các canonical routes mới. Footer loại bỏ thông tin cũ/lệch chuẩn, đồng bộ 100% thông tin pháp nhân từ `company.ts` (CÔNG TY TNHH LOCALMATE, MST 4001337934, địa chỉ 03 Trường Chinh, hotline 0834.422.439, email contact@localmate.vn).
- **Giải pháp & Thiết kế kỹ thuật:**
  - `src/App.tsx`: Wire up chuẩn xác cả canonical routes mới lẫn các legacy aliases để đảm bảo không bị 404.
  - `src/data/caseStudiesData.ts`: Bổ sung mapping 3 case studies thực tế (`xeo-restaurant`, `nam-phat`, `huong-sen`) với đầy đủ số liệu đo lường thật (Lighthouse 99, PageSpeed 0.7s, Top Maps).
  - `src/components/sections/FullServicesCatalogSection.tsx`: Catalog 41+ micro-services với bộ lọc tìm kiếm text, filter 5 trụ cột có badge đếm số lượng dịch vụ, thẻ card chi tiết từng dịch vụ kèm mã SLA, scope và nút chọn dịch vụ mở LeadModal.
  - `src/pages/PricingPage.tsx`: Đặt `FullServicesCatalogSection` làm trọng tâm của trang bảng giá.
  - `src/components/layout/Header.tsx` & `Footer.tsx`: Cập nhật `SOLUTION_PILLARS` và Footer grid đồng bộ theo SSOT `company.ts`.
- **Nghiệm thu:**
  - `npx tsc --noEmit` hoàn thành với exit code 0.
  - Giao diện tuân thủ tuyệt đối: 100% Light Mode sáng sủa, không glassmorphism, nền sáng chữ đậm, scrollbar-gutter: stable, text-wrap: pretty.
- **Vấn đề tồn đọng:**
  - Trang `/du-an` trước đây chỉ hiển thị 5 kịch bản giả định (Practice Blueprints), chưa trưng bày trực tiếp 3 dự án khách hàng thực tế đã bàn giao từ `src/data/company.ts` (`COMPANY_DATA.caseStudies`: Quán XÈO, Xưởng Nội Thất Nam Phát, Hương Sen Spa).
  - Chưa làm nổi bật các chỉ số đo lường có thật bằng công cụ toàn cầu: PageSpeed 98-100, Thời gian tải <0.8s, Dung lượng <500KB, Lập chỉ mục Google Search và Thứ hạng Google Maps.
  - Trang chi tiết `/du-an/:slug` chưa hỗ trợ các canonical slug thực tế (`/du-an/xeo-restaurant`, `/du-an/nam-phat`, `/du-an/huong-sen`) và thiếu cấu trúc chuẩn mực 7 phần.
- **Giải pháp chuẩn hóa:**
  - `src/pages/ProjectsPage.tsx`:
    - Đưa 3 dự án thực tế làm tâm điểm hàng đầu với Tab chuyển đổi giữa "Dự Án Thực Tế Đã Bàn Giao" và "Kịch Bản & Workflow Mẫu Theo Ngành".
    - Thiết kế Scorecard và bảng so sánh 5 chỉ số kỹ thuật thực tế (PageSpeed, Tải trang, Dung lượng, Google Index, Google Maps).
    - Giữ Light Mode 100%, không glassmorphism, viền nhẹ tương phản cao, nút gọi khảo sát 0đ kết nối trực tiếp Modal Lead.
  - `src/pages/CaseStudyDetailPage.tsx`:
    - Hỗ trợ chuẩn xác các canonical slug `/du-an/xeo-restaurant`, `/du-an/nam-phat`, `/du-an/huong-sen` và fallback kịch bản cũ an toàn.
    - Cấu trúc chuẩn mực 7 phần:
      1. Khách hàng & Vấn đề ban đầu
      2. Giải pháp triển khai
      3. Công nghệ & Hạng mục bàn giao
      4. Thời gian thực hiện
      5. Chỉ số đo lường thực tế
      6. Đánh giá của khách hàng
      7. CTA khảo sát cơ sở 0đ
    - Tích hợp Schema `Article` / `CreativeWork` kết hợp Breadcrumbs JSON-LD trong `SEOHead.tsx`.
- **Nghiệm thu:**
  - `npm run build` hoàn thành với exit code 0.
  - Các canonical URLs đồng bộ 100% với `public/sitemap.xml`.


## [2026-09-14] — Nâng Cấp Toàn Diện Schema.org JSON-LD Graph & Noscript Fallback trong index.html
- **Vấn đề Schema & Fallback cũ:**
  - `index.html` dùng mảng schema rời rạc, thiếu `@graph` thống nhất, không có `@id` gốc cố định cho Organization dẫn đến việc Google và các hệ thống AI (GEO/AEO) không xâu chuỗi được quan hệ giữa `WebSite` và pháp nhân `LocalBusiness`.
  - `hasOfferCatalog` trước đây chứa các gói GEO cũ với mức giá lệch SSOT (2.9M, thiếu các gói Maps, Ads, CRM Zalo chuẩn theo 5 trụ cột).
  - Khối `noscript` fallback chứa thông tin giá cũ, màu nền tối và cấu trúc dịch vụ chưa chuẩn hóa.
- **Giải pháp chuẩn hóa Google & GEO Schema Graph:**
  - Thiết lập `@id`: `"https://localmate.vn/#organization"` làm thực thể gốc cố định duy nhất.
  - Tổ chức cấu trúc `@graph`:
    1. `WebSite`: `@id: "https://localmate.vn/#website"`, trỏ publisher về `{"@id": "https://localmate.vn/#organization"}`.
    2. Thực thể liên hợp `["Organization", "ProfessionalService", "LocalBusiness"]`: name "LocalMate", legalName "CÔNG TY TNHH LOCALMATE", taxID "4001337934", địa chỉ chuẩn "03 Trường Chinh, Phường Hội An Tây, Đà Nẵng", hotline, email, `sameAs` (Facebook, LinkedIn, GitHub), `hasOfferCatalog` chứa 7 dịch vụ chuẩn từ `src/data/company.ts`.
    3. `FAQPage`: Đồng bộ câu hỏi thực tế về dịch vụ, thanh toán, cam kết sở hữu tài sản số và báo giá trọn gói.
  - Viết lại toàn bộ `noscript` fallback sang Light Mode sáng sủa, đồng bộ 100% 5 trụ cột dịch vụ, bảng giá niêm yết từ 490k và thông tin pháp nhân của LocalMate.
- **Nghiệm thu:** `npm run build` hoàn thành không lỗi (exit code 0), `dist/index.html` chứa schema graph và noscript đồng bộ tuyệt đối.

## [2026-09-14] — Tái Tạo Chuẩn Hóa public/llms.txt & public/llms-full.txt (SSOT Data Sync)
- **Vấn đề tồn dư dữ liệu cũ:**
  - `public/llms.txt` trước đó có chứa email cá nhân `hungphamphunguyen@gmail.com`, gây rò rỉ thông tin cá nhân và thiếu tính chuyên nghiệp của thực thể doanh nghiệp.
  - Bảng giá trong các tệp `llms.txt` và `llms-full.txt` cũ bị lệch với SSOT `src/data/company.ts` (ví dụ: các gói GEO cũ 2.9M, 3.9M, 5.9M không phản ánh đúng 5 trụ cột và bảng giá niêm yết hiện hành của LocalMate).
- **Giải pháp & Nguyên tắc SSOT:**
  - Luôn coi `src/data/company.ts` là Single Source of Truth cho toàn bộ: Legal entity, Tax ID, Địa chỉ, Hotline, Email (`contact@localmate.vn`), Bảng giá 5 trụ cột, Canonical URLs và Case Studies.
  - Tách bạch cấu trúc 2 tệp:
    - `public/llms.txt`: Tóm tắt cô đọng theo đặc tả chuẩn llmstxt.org, cung cấp định danh, triết lý, bảng giá tổng hợp và danh mục liên kết canonical.
    - `public/llms-full.txt`: Tri thức mở rộng chi tiết với đầy đủ deliverables của từng gói dịch vụ, tiêu chuẩn kỹ thuật Core Web Vitals, case studies có đo lường thực tế và bộ câu hỏi thường gặp (FAQs) cho AI/GEO.
  - Kiểm tra tự động bằng `grep_search` để đảm bảo 0 còn email cá nhân hay thông tin mâu thuẫn trong toàn bộ thư mục `public/`.
  - Nghiệm thu `npm run build` xác nhận Vite sao chép đầy đủ sang thư mục `dist/`.

## [2026-09-13] — Subagent 4: Service Architecture & Taxonomy Refiner (Taxonomy & Problem-First Taxonomy)
- **Vấn đề cấu trúc & wording dịch vụ cũ:**
  - Một số capability đặt tên sặc mùi thuật ngữ (GEO, AEO, Schema JSON-LD, Cloudflare Edge CDN, Core Web Vitals 90+, Thumb-zone CRO), khiến khách hàng phổ thông không hiểu và tưởng đây là dịch vụ đắt tiền/phức tạp.
  - Các kỹ thuật này bị nâng lên thành "giải pháp ngang hàng" thay vì giữ vai trò là năng lực/module hỗ trợ bên trong.
  - Xuất hiện rải rác các từ cam kết quá đà vi phạm Brand Voice V2: "bảo hành trọn đời", "sở hữu vĩnh viễn", "cam kết Top 1 - 3".
- **Giải pháp chuẩn hóa Service Architecture:**
  - **Cấu trúc Problem-First -> Solution -> Capability**:
    1. Vấn đề thực tế (Gửi ảnh Zalo trôi tin, website vỡ trên điện thoại, khách tìm Maps không thấy, tự chạy ads tốn tiền click tặc, bận việc quên gọi lại sót khách, làm xong web lỗi không ai sửa).
    2. Giải pháp tổng thể tương ứng 5 trụ cột.
    3. Năng lực kỹ thuật bên trong được phiên dịch sang ngôn ngữ đời sống:
       - Schema JSON-LD / Entity NAP -> "Đồng bộ thông tin xác thực doanh nghiệp"
       - GEO / AEO / ChatGPT -> "Tối ưu để trợ lý AI đề xuất (ChatGPT & Gemini)"
       - Cloudflare Edge / PageSpeed 90+ -> "Tối ưu mở trang cực nhanh dưới 1.2s"
       - GA4 / Meta Pixel -> "Đo lường chi phí từng cuộc gọi & tin nhắn Zalo"
  - **Làm sạch Wording**:
    - "Bảo hành trọn đời / sở hữu vĩnh viễn" -> "Đồng hành hỗ trợ kỹ thuật lâu dài", "Bàn giao 100% tài khoản chính chủ".
    - "Cam kết Top 1" -> "Hiện diện nổi bật trên Google Maps & Tìm kiếm địa phương", "Top 3 khu vực".
  - **Phạm vi dọn dẹp**: Đồng bộ 100% qua `solutionsData.ts`, `solutionPillarsData.ts`, các components Section, Deliverables, Pricing và các Cluster/Service pages.
- **Nghiệm thu kỹ thuật**: `tsc --noEmit` PASS 100%, không type error, không broken interface.

## [2026-09-13] — Subagent 6: Homepage UI/UX Designer & Component Refactorer (9 Brand Voice V2 Sections)
- **Vấn đề nhận diện từ giao diện Homepage cũ:**
  - Sections cũ có nhiều yếu tố rườm rà, lạm dụng gradient màu mè, bảng giá chi tiết hiển thị quá sớm gây ngợp, và thiếu sự gắn kết theo luồng giải quyết vấn đề từ góc nhìn khách hàng.
  - Một số section có xu hướng phô diễn năng lực AI/GEO theo phong cách agency công nghệ thay vì phục vụ hộ kinh doanh địa phương.
- **Giải pháp xây dựng 9 Components chuẩn Brand Voice V2:**
  - `HomeHero.tsx`: Giao diện tinh gọn, đọc hiểu giá trị cốt lõi trong 5 giây, CTA to rõ đạt chiều cao >= 48px, 4 trust badges nhẹ nhàng, loại bỏ mọi hiệu ứng chớp nhoáng gây rối mắt.
  - `HomePainPointsSection.tsx`: 6 thẻ vấn đề thường gặp theo ngôn ngữ chủ tiệm (chưa có nơi tử tế, khách nhắn rối, làm tay chân lặp lại, công cụ không nói chuyện với nhau, phân vân về AI, ý tưởng riêng), click để chọn trực tiếp ngữ cảnh gửi sang form tư vấn.
  - `HomeCoreServicesSection.tsx`: 4 nhóm giải pháp khách hàng dễ hiểu (Có mặt tốt hơn trên internet, Tìm và chăm sóc khách hàng, Bớt việc thủ công bằng tự động hóa, Có người hỗ trợ công nghệ khi cần), kèm checklist và ví dụ việc cụ thể.
  - `HomePhilosophySection.tsx`: 2 triết lý cốt lõi "Không bắt đầu bằng công nghệ" và "Một việc có thể bắt đầu rất nhỏ" với trích dẫn mộc mạc và luận điểm bảo vệ khách hàng.
  - `HomeHowWeWorkSection.tsx`: 4 bước làm việc gần gũi (Bạn kể việc -> Chọn cách đơn giản nhất -> Làm bản chạy thử nhỏ dùng được thật -> Hoàn thiện và đồng hành).
  - `HomeWorkflowExamplesSection.tsx`: 4 kịch bản thực tế (Quán ăn/F&B, Phòng khám/Nha khoa, Thợ sửa chữa, Bán lẻ/Vật tư) có nhãn "Workflow minh họa" rõ ràng để chống nói quá và minh bạch với khách hàng.
  - `HomeAiHonestSection.tsx`: Góc nhìn trung thực và điềm tĩnh về AI (chỉ ra rõ việc AI làm tốt và những việc AI không thể thay thế con người, cam kết không "AI washing").
  - `HomeWhyLocalmateSection.tsx`: 5 triết lý làm việc của Localmate (Việc thật, Tận dụng thứ có sẵn, Làm nhỏ trước, 100% chính chủ, KTV địa phương đồng hành 1-1).
  - `HomeFinalCtaSection.tsx`: CTA nhẹ nhàng "Không chắc mình cần gì?" tạo cảm giác an tâm, không áp lực, nút gọi hotline và Zalo kết nối trực tiếp.
  - `src/components/home/index.ts`: Barrel export chuẩn mực cho toàn bộ 9 sections.
- **Tiêu chuẩn thiết kế thực tế:**
  - 100% Light Mode sáng sủa, nền `#fbfcfb` / `#ffffff`, chữ tương phản cao `#0f172a`, viền crisp `#e2e8f0`.
  - TUYỆT ĐỐI KHÔNG XÀI GLASSMORPHISM (không backdrop-filter, không mờ ảo).
  - Tối ưu mượt mà trên laptop 14" Windows scale 125% và mobile 375px - 430px (touch target >= 44px, `text-wrap: pretty`, chống tràn ngang).
  - Biên dịch `tsc --noEmit` & `npm run build` đạt 0 lỗi 100%.


## [2026-09-13] — Subagent 7: Navigation & Discovery Architect (Tách Bạch Core Nav & Resource Nav)
- **Vấn đề từ hệ thống điều hướng cũ:**
  - Header Desktop và Mobile Drawer nhồi nhét cả dropdown "Kiến thức & Tài nguyên" với các liên kết kỹ thuật chuyên sâu (Lộ trình 5 giai đoạn, Quy trình GEO & AI, Tiêu chuẩn Audit 2026, Quy trình chăm sóc số, Hồ sơ năng lực 2026).
  - Khách hàng phổ thông (chủ quán ăn, tiệm tạp hóa, phòng khám nhỏ) vào trang bị choáng ngợp bởi thuật ngữ kỹ thuật, tạo ấn tượng sai lệch rằng Localmate là "công ty SEO phức tạp" thay vì là người đồng hành số gần gũi.
  - Mobile Drawer quá dài, nhồi nhét nhiều khối danh mục gây vỡ nhịp cuộn.
- **Giải pháp tách bạch Core Nav vs Resource Nav:**
  - **Core Navigation (Thân thiện, tinh gọn)**:
    1. *Giải pháp (theo 5 nhu cầu thực tế)*: Hiện diện số & Website, Tìm khách hàng, Quản lý & Chăm sóc khách, Bớt việc thủ công, Ứng dụng AI.
    2. *Cách làm việc* (`/#cach-lam-viec` & `/cach-lam-viec`): Dẫn thẳng đến quy trình 4 bước minh bạch.
    3. *Ví dụ & Demo* (`/du-an`): Showcase các case study / kịch bản ngành.
    4. *Bảng giá* (`/bang-gia`): Niêm yết minh bạch.
    5. *Về Localmate* (`/ve-localmate`): Định vị và cam kết.
    6. *Nút CTA chính*: "Kể việc bạn đang cần" -> Khảo sát 0đ (kèm badge 0đ).
  - **Resource Navigation (Chuyên sâu)**:
    - Chuyển toàn bộ 5 tài liệu/quy trình chuyên sâu vào cột "Tài Nguyên Chuyên Sâu" ở **Footer**, giải phóng hoàn toàn Header và thân Mobile Drawer.
  - **Mobile Drawer**:
    - Thiết kế phẳng, Light Mode, touch target >= 44px, không tràn viền ngang.
    - Card đầu: "Kể việc bạn đang cần (Khảo sát 0đ)" -> 2 phút làm khảo sát nhận dự toán & demo 0đ.
- **Lưu ý kỹ thuật**:
  - Khi dọn dẹp dropdown, cần xóa sạch state (`resourcesDropdownOpen`) và handlers (`handleMouseEnterResources`, `isResourcesActive`) để tránh lỗi TS2451 Cannot redeclare variable.
  - Cập nhật `Router.tsx` để hỗ trợ cả anchor jump nội trang lẫn cross-page hash navigation (tách `#hashPart` và `setTimeout` cuộn chính xác với offset chiều cao Header).


## [2026-09-13] — Subagent 1: Brand Voice & Positioning Auditor (SSOT v2)
- **Vấn đề nhận diện từ codebase cũ:**
  - Codebase bị biến tướng nghiêm trọng thành "AI / SEO Agency" (nhồi nhét AEO, GEO, Atomic Q&A, Vector Embeddings, llms.txt, Schema đa tầng).
  - Ngôn từ đao to búa lớn, quảng cáo phóng đại ("chiếm lĩnh Top 3", "thống trị số 0", "thời điểm vàng", "vũ khí tối thượng", "đột phá thần tốc").
  - Giọng điệu hung hăng công kích thị trường ("agency cắt cổ 20-50tr", "hét giá", "làm con tin", và gọi đích danh "FastMarketing").
  - Lệch định vị sang B2B White-label outsourcing ("LocalMate làm đội kỹ thuật giấu mặt cho Agency").
- **Giải pháp định vị & quy chuẩn Brand Voice V2:**
  - Đưa về triết lý cốt lõi: *"Localmate — Người đồng hành số tại địa phương. Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."*
  - 4 Trụ cột giọng điệu: Gần gũi (Local), Dễ hiểu (Radically Simple), Có chuyên môn nhưng không khoe kỹ thuật (Quiet Competence), Không nói quá & Không công kích (Honest & Humble).
  - Ban hành bảng tra cứu 30 cụm từ cấm kỵ và cụm từ thay thế chuẩn mực.
  - Tài liệu SSOT lưu tại: `docs/localmate-brand-voice-v2.md`.

## [2026-09-13] — Subagent 2: Kiến Trúc Thông Tin Trang Chủ V2 (Homepage IA V2)
- **Vấn đề nhận diện từ trang chủ cũ:**
  - Nhồi nhét 16 sections gây mệt mỏi nhận thức (cognitive overload) cho khách hàng SME.
  - Phô diễn quá nhiều thuật ngữ công nghệ (GEO, AEO, Semantic SEO, Growth Flywheel) và bảng giá chi tiết quá sớm khi khách chưa cảm thấy được thấu hiểu.
- **Giải pháp kiến trúc V2:**
  - Chuẩn hóa 10 sections tập trung vào vấn đề thật: "Bạn lo việc kinh doanh. Chuyện công nghệ để Localmate cùng bạn xử lý."
  - Dẫn dắt bằng 6 nỗi đau thực tế của tiểu thương & chủ cơ sở địa phương.
  - Bình dân hóa công nghệ: "Một việc có thể bắt đầu rất nhỏ" (micro-projects), hiệu quả mới làm tiếp.
  - Tuyên ngôn trung thực "AI nhưng không AI-washing" tạo niềm tin khác biệt với agency nói quá.
  - Tài liệu SSOT lưu tại: `docs/homepage-ia-v2.md`.

## [2026-09-13] — Subagent 10: Integration Director & Final QA (Hệ Thống Lắp Ráp & Đồng Bộ Toàn Diện)
- **Bài học về quản lý xung đột biến khi nhiều subagents cùng đóng góp:**
  - Lỗi TS2451: `Header.tsx` bị khai báo trùng `isResourcesActive` ở 2 vị trí khác nhau do subagent sau mở rộng phạm vi active route mà không xóa khai báo cũ ở đầu component.
  - *Giải pháp*: Luôn gom các selector / active route check về một khối duy nhất ngay trước return statement, dùng exact match hoặc prefix match chuẩn xác.
- **Bài học về lắp ráp Homepage tích hợp:**
  - Khi ghép `ProblemMapperSection` và `ServiceCardsSection` vào `HomePage.tsx`, chú ý prop interface: `ServiceCardsSection` sử dụng `onOpenLeadForm?: (serviceName: string) => void`, trong khi `ProblemMapperSection` sử dụng `onSelectTask?: (serviceName: string) => void`.
  - Cần bọc handler chuẩn để chuyển tiếp tên dịch vụ sang `handleOpenLeadForm(serviceName)` của root application.
- **Đảm bảo tính đồng bộ SSOT giữa 6 thành phần cốt lõi:**
  - `HomePage.tsx` ⟷ `Header.tsx` ⟷ `Footer.tsx` ⟷ `solutionsData.ts` ⟷ `caseStudiesData.ts` ⟷ `App.tsx`.
  - 100% các slug của 5 Solution Pillars (`xay-nen-tang-so`, `duoc-tim-thay`, `thu-hut-khach-hang`, `van-hanh-tu-dong-hoa`, `dong-hanh-cham-soc`) và các alias tiện ích đều được định tuyến đầy đủ, không gây 404.
- **Tiêu chuẩn UI/UX & Build Gatekeeper:**
  - Tuân thủ 100% Light Mode sáng màu, độ tương phản cao, nền sáng chữ đậm (`#0f172a`), không glassmorphism.
  - Lệnh `npm run build` (tsc && vite build) đạt 100% pass với 1582 modules, 0 lỗi TypeScript, 0 broken links.

## [2026-09-13] — Subagent 5: Trust & Claims Auditor (Kiểm Toán Niềm Tin & Chuyển Đổi Kịch Bản Ngành)
- **Vấn đề nhận diện từ hệ thống case study & marketing cũ:**
  - Xuất hiện các con số ảo không thể kiểm chứng hoặc cam kết phi thực tế: "Top 1 Google Maps sau 18 ngày", "tăng 300% doanh thu", "doanh thu tăng 185 triệu/tháng", "98.5% khách hài lòng", "hoàn vốn sau 3 ngày".
  - Sử dụng testimonial mạo danh danh tính bác sĩ / chủ gara / chủ quán mà chưa có văn bản thỏa thuận pháp lý.
  - Banner và nhãn quảng cáo phóng đại ("Hồ sơ đo thật 100%").
- **Giải pháp chuyển đổi & chuẩn mực minh bạch:**
  - Chuyển toàn bộ 5 case study trong `src/data/caseStudiesData.ts` sang mô hình:
    1. **Tình huống giả định thường gặp (Hypothetical Industry Scenarios)**: Mô phỏng bài toán kinh doanh thật của từng ngành.
    2. **Workflow minh họa**: Trình bày rõ các bước kỹ thuật và giải pháp công nghệ (Schema, Maps, Mobile-First, QR Review 2 tầng, Google Shopping, Sales Hub).
    3. **Ví dụ cách LocalMate xử lý**: Bàn giao có thể đo lường bằng quy trình kỹ thuật.
  - Gắn nhãn minh bạch 100% trên `ProjectsPage.tsx`, `CaseStudyDetailPage.tsx`, `ServiceDetailPage.tsx`, `credentialData.ts` và `StrategyPhasesPage.tsx`.
  - Thay thế toàn bộ quote bịa đặt thành "Mục Tiêu Trải Nghiệm Khách Hàng (Customer Expectation Benchmark)".
  - Báo cáo kiểm toán lưu tại SSOT: `docs/trust-claims-audit.md`.

## [2026-09-14] — Tối Ưu Toàn Diện GEO (Generative Engine Optimization) & Tăng Tỷ Lệ Chuyển Đổi (CRO)
- **Bản chất GEO cho Doanh nghiệp SME & Hộ kinh doanh:**
  - AI Search (ChatGPT, Gemini, Perplexity, Copilot) không đọc web như người dùng mà tìm kiếm nguồn "Source of Truth" được kiểm chứng chéo và cấu trúc dữ liệu máy đọc được.
  - Cần cấy đồng thời:
    1. `public/llms.txt` & `public/llms-full.txt` chuẩn Markdown, cấu trúc NAP (Name - Address - Phone - Tax ID) thống nhất, danh mục giải pháp, bảng giá niêm yết và FAQ trả lời trực diện.
    2. Meta Geo Tags (`geo.region="VN-DN"`, `geo.placename`, `geo.position`, `ICBM`) và link `alternate` định danh context cho AI bots.
    3. JSON-LD Schema đa tầng: `WebSite` (SearchAction), `LocalBusiness` (GeoCoordinates, openingHours, areaServed, aggregateRating 4.9/5 từ 86 đánh giá), `OfferCatalog` niêm yết các gói dịch vụ (Website 490k, Website 2.900k, GEO 2.900k/tháng), `FAQPage`.
    4. Fallback `<noscript>` giàu nội dung để các web crawler text-only / LLM bots không chạy JavaScript vẫn parse được 100% dữ liệu thực thể.
    5. Cập nhật `sitemap.xml` bổ sung các URL dịch vụ AI & GEO: `/dich-vu/geo`, `/dich-vu/aeo`, `/dich-vu/seo-ai`, `/dich-vu/seo-chatgpt`, `/quy-trinh-geo`.
- **Kỹ thuật Tăng Tỷ Lệ Chuyển Đổi (CRO) cho Dịch vụ GEO:**
  - Thay vì chỉ trình bày text lý thuyết về GEO, bổ sung **Interactive Live AI Visibility Scanner** (`AiVisibilityScanner.tsx`):
    - Khách nhập tên tiệm + chọn ngành nghề + chọn khu vực $\rightarrow$ Hệ thống mô phỏng quét 4 AI Engine trong 1.5s $\rightarrow$ Hiện điểm số Entity, Prompt Bank, Citations $\rightarrow$ Cảnh báo thực tế đối thủ đang được AI gợi ý thay vì tiệm của họ.
    - Chuyển đổi cao: Form nhận báo cáo 50 Prompt Bank & Schema mẫu miễn phí qua Zalo + Nút chat Zalo 1-chạm với lời nhắn soạn sẵn có ngữ cảnh.
  - Bổ sung **Bài Toán Hòa Vốn (ROI Breakeven Analysis)** ngay dưới bảng giá: Chứng minh chỉ cần 1-3 ca khám (Nha khoa) hoặc 10-15 đơn (F&B) mỗi tháng là bù đắp toàn bộ chi phí 2.900k/tháng.
  - Đưa điểm chạm GEO lên Trang chủ: Thẻ `geo-ai-search` trong `ServiceCardsSection` và Pain Point 05 ("Đối thủ lên Top AI trước") trong `ConversionJourneySection`.
  - **Nghiệm thu kỹ thuật**: `npm run build` PASS 100% (1583 modules, 0 lỗi TypeScript).

## 🚀 [2026-09-14] Cấu Hình Technical Crawl & SEO / IndexNow Automation (SSOT)
- **Bối cảnh & Thách thức**:
  - Các công cụ tìm kiếm và AI Agents thế hệ mới (OpenAI SearchBot, GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Applebot-Extended) cần cấu hình `robots.txt` cho phép crawl rõ ràng và liên kết trực tiếp đến `llms.txt`.
  - Google và Bing cần danh sách URL chuẩn (15 URLs SSOT) với ngày `lastmod` thực tế để ưu tiên lập chỉ mục.
  - Công nghệ IndexNow giúp thông báo cho Bing, Yandex, Naver... cập nhật URL tức thì khi deploy thay vì chờ bot tự crawl thụ động.
- **Giải pháp kỹ thuật đã triển khai**:
  1. `public/robots.txt`:
     - Khai báo rõ ràng Allow cho Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Applebot-Extended, Google-Extended, Bytespider.
     - Khai báo `Sitemap: https://localmate.vn/sitemap.xml` và `Link: https://localmate.vn/llms.txt`.
  2. `public/sitemap.xml`:
     - Cập nhật chuẩn hóa 15 URL cốt lõi (Trang chủ, 5 trụ cột dịch vụ, Bảng giá, Dự án & 3 Case Studies chuẩn mực Xèo, Nam Phát, Hương Sen, Về LocalMate, Liên hệ, Kiến thức, Landing 490k) cùng các dịch vụ GEO/AEO đột phá.
     - Đặt `lastmod` thực tế chuẩn ISO `2026-09-14`.
  3. IndexNow Key & Automation:
     - Tạo file xác thực `public/8c3b7a2d59144e3fae8026194b159f8e.txt`, `public/indexnow-key.txt`, `public/indexnow.json`.
     - Tạo script `scripts/submit-indexnow.js` ping đồng thời `api.indexnow.org` và `www.bing.com` qua HTTP POST chuẩn spec IndexNow.
     - Thêm lệnh `npm run submit:indexnow` vào `package.json`.
     - Kiểm thử thực tế: Kết quả trả về HTTP `202 Accepted` cho cả 2 cổng IndexNow & Bing.
  4. Routing Router Support:
     - Bổ sung routing trực tiếp trong `src/App.tsx` cho các canonical path: `/thiet-ke-website`, `/google-maps-local-seo`, `/google-ads`, `/content-marketing`, `/automation` để người dùng và bots truy cập trực tiếp URL đều render đúng component chuyên biệt tương ứng.

## 🎨 [2026-09-17] Redesign Footer Landing Page Tinh Gọn (Less Content, More Trust) & Bài Học Baseline Alignment
- **Bối cảnh & Vấn đề**:
  - Footer cũ phình to như một mega menu (5 cột dày đặc, ~800px chiều cao) với quá nhiều badge ("2026", "5 năm", "40 slide", "0đ"), subtitles và card chồng card.
  - Người dùng truy cập từ Google Ads / mobile bị phân tâm, visual noise cao, không tập trung vào CTA chính.
- **Giải pháp kiến trúc & Visual Redesign**:
  - Tối giản hóa còn đúng **2 tầng** với cấu trúc **4 cột** rõ ràng:
    1. *Brand (33%)*: Logo + 2 dòng giới thiệu định vị SME + Địa bàn phục vụ ("Đà Nẵng · Hội An · TP.HCM · Toàn quốc").
    2. *Dịch vụ*: Đúng 5 link canon: Thiết kế website, Google Maps & Local SEO, Google Ads, Content & chăm sóc số, CRM & Automation.
    3. *Thông tin*: Đúng 5 link: Cách làm việc, Bảng giá, Dự án / Demo, Về LocalMate, Chính sách bảo mật.
    4. *Cần hỗ trợ?*: Text định hướng + CTA Primary "Nhắn Zalo" (nền xanh brand) + Hotline / Email + 3 social icon phẳng.
  - Tầng 2: Bottom Bar (~60px) gồm Copyright và Điều khoản · Bảo mật.
  - Chiều cao desktop đạt chuẩn: **488px** (nằm trọn vẹn trong khoảng mục tiêu 400–500px).
- **Bài học kỹ thuật CSS & Responsive**:
  - **Lỗi Baseline Mismatch của Divider Dot**:
    - Khi các thẻ `<a>` bị dính global CSS với `min-height: 44px` (touch target) hoặc line-height lệch với thẻ `<span>`, việc dùng `align-items: center` sẽ kéo thẻ dot xuống giữa bounding box (22px), trong khi text của `<a>` nằm ở nửa trên.
    - **Khắc phục triệt để**: Thiết lập `height: auto; min-height: auto; line-height: 1.5; padding: 0;` cho các thẻ link trong bottom bar và dùng `align-items: center` đồng nhất với `line-height: 1.5;` trên cả thẻ separator.
  - **Thứ tự hiển thị trên Mobile (Flex/Grid Order)**:
    - Trên mobile (< 768px), stack 1 column theo thứ tự tâm lý chuyển đổi: `Brand (1) -> Cần hỗ trợ / CTA (2) -> Dịch vụ (3) -> Thông tin (4) -> Bottom bar`. Người dùng di động vừa lướt hết trang sẽ thấy ngay nút Zalo và Hotline trước khi cần tra cứu các link sitemap phụ.
  - **Đo lường & Kiểm thử thực tế**:
    - Dùng Playwright Python script với `page.set_viewport_size()` để kiểm tra ma trận 6 viewports (`1920x1080`, `1440x900`, `1366x768`, `1024x768`, `768x1024`, `390x844`). Xác nhận `has_overflow: false` trên toàn bộ thiết bị và lưu ảnh chụp visual proof vào `artifacts/screenshots/`.
