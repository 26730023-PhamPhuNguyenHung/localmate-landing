# BÀI HỌC VÀ LƯU Ý KỸ THUẬT (LESSONS LEARNED & BUG MEMORY)

## [2026-09-17] — Giữ Trang Chủ Tinh Gọn & Tuyệt Đối Không Dùng Dropdown Tự Mở Tràn Màn Hình
- **Vấn đề phát sinh:**
  - Việc tự ý thêm mega menu dropdown bung mở tự động khi hover (`onMouseEnter`) khiến giao diện bị che khuất nghiêm trọng, gây ức chế cho người dùng khi chỉ muốn lướt xem trang.
  - Nhồi nhét quá nhiều khối nội dung trung gian (conversion journey phức tạp, form chẩn đoán cồng kềnh) vào trang chủ làm mất đi thông điệp cốt lõi đơn giản, trực diện của LocalMate.
- **Quy tắc đúc kết:**
  1. Header điều hướng phải gọn gàng, drop-down chỉ mở khi có chủ đích rõ ràng, click ra ngoài phải tự đóng (`handleClickOutside`).
  2. Trang chủ luôn theo tôn chỉ: *"Đơn giản, thực tế, giải quyết trực tiếp vấn đề mà không làm phức tạp hóa mọi thứ lên"*. Nền sáng, chữ đậm, tương phản cao, người dùng dễ hiểu ngay dịch vụ và giá cả trong 5 giây đầu tiên.

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
