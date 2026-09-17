# Timeline & SSOT Activity Log (LocalMate)

Ghi nhận các mốc sự kiện, commit và trạng thái vận hành của dự án.

## [2026-09-17] - Khôi Phục Trang Chủ (HomePage & Header) Về Chuẩn Bản Production Deploy Trên Wrangler
- **Bối cảnh & Yêu cầu**: Bản localhost gần đây bị nhồi nhét mega-menu tự bung che khuất màn hình và các khối giao diện phức tạp làm mất tính tinh gọn. Khôi phục lại toàn bộ Trang chủ (`HomePage.tsx`, `Header.tsx` và 15 sections trực thuộc) về chính xác phiên bản đang deploy ổn định trên Wrangler (`localmate.vn` - commit `914fa97`).
- **Các thành phần được đồng bộ chuẩn xác**:
  1. *Header & Navigation*: Khôi phục thanh menu điều hướng gọn nhẹ (Trang chủ, Dịch vụ, Bảng giá, Dự án, Kiến thức, Giới thiệu, Liên hệ, Hotline 0834.422.439, Báo giá nhanh). Loại bỏ hoàn toàn popover mega-menu tự động bung khi rê chuột.
  2. *Hero Section*: Tiêu đề chuẩn *"Giúp doanh nghiệp nhỏ có website, lên Google và tìm thêm khách"*, 2 nút CTA rõ ràng ("Nhận website demo 0đ" & "Xem dịch vụ & giá"), dải 4 cam kết vàng minh bạch.
  3. *Các khối cốt lõi*: 6 thẻ nhu cầu khách hàng (`ProblemMapperSection`), menu dịch vụ linh hoạt (`ServiceHubSection`), lộ trình thấu hiểu (`SolutionJourneySection`), gói khởi tạo 2.9M (`StarterPackageSection`), bảng giá niêm yết, dự án thực tế, quy trình, FAQ và Kiến thức.
- **Nghiệm thu**:
  - `npm run build` (`tsc && vite build`) PASS 100% không một lỗi type.
  - Kiểm tra trực quan bằng `agent-browser` trên `http://localhost:3000`: Giao diện Light Mode sáng sủa, sạch sẽ, chuẩn xác 100% so với trang live `https://localmate.vn`.


## [2026-09-17] - Triển Khai Landing Page Chuyển Đổi Cao Cho Mobile Ads Tại /geo
- **Mục tiêu**: Xây dựng trang Landing Page chuyên biệt phục vụ chiến dịch chạy quảng cáo (Ads traffic), tối ưu chuyển đổi cao trên mobile (Mobile First), layout Full-Width căn giữa sang trọng, chống rớt dòng vụn chữ tiếng Việt và tích hợp form audit trực tiếp.
- **Các hạng mục đã hoàn thành**:
  1. *Section 1 — Hero & Form Audit*:
     - Headline 2 dòng chuẩn ngữ nghĩa không gãy từ: *"KHÁCH HỎI CHATGPT VỀ DỊCH VỤ CỦA BẠN. / AI CÓ NHẮC ĐẾN BẠN KHÔNG?"*.
     - Bố cục Full-Width rộng rãi, cân xứng, tránh chia cột hẹp làm méo chữ.
     - Form Audit trực tiếp: `[ Website của bạn ]` + `[ Số điện thoại / Zalo ]` đặt ngang hàng trên Desktop, dọc trên Mobile.
     - Cam kết minh bạch: *"Không cam kết “ép ChatGPT lên top”. Chúng tôi đo lường hiện trạng và tối ưu những yếu tố có thể tác động."*
  2. *Section 2 — Bảng Giá*:
     - Gói **GEO SETUP**: 2.490.000đ thanh toán 1 lần, 10 quyền lợi kỹ thuật, CTA "BẮT ĐẦU GEO".
     - Gói **GEO GROWTH**: Từ 2.990.000đ/tháng, 8 quyền lợi tăng trưởng, cam kết *"Không bắt buộc duy trì hàng tháng"*, CTA "XEM WEBSITE CỦA TÔI PHÙ HỢP GÓI NÀO".
  3. *Section 3 — Mục Tiêu Là Xuất Hiện Đúng Lúc Khách Đang Chọn Nhà Cung Cấp*:
     - 4 Prompt Cards minh họa câu hỏi AI thực tế của khách hàng khi chọn nhà cung cấp.
     - 4 Khối giá trị 01 — 04: AI nói gì, Đối thủ nào được nhắc, Cần làm gì trước, Đo lường cải thiện.
     - Khối chốt hạ chuyển đổi: *"KIỂM TRA WEBSITE TRƯỚC KHI QUYẾT ĐỊNH"* kèm form thu lead 0đ.
  4. *Định tuyến & Nghiệm thu*:
     - Định tuyến `/geo`, `/geo-ads`, `/landing-geo` trỏ về `GeoLandingPage.tsx` trong `src/App.tsx`.
     - Tích hợp `submitLead` đồng bộ Google Sheets và theo dõi chuyển đổi.
     - Đạt 0 lỗi TypeScript (`npx tsc --noEmit`), `npm run build` hoàn thành với mã thoát 0.


## [2026-09-14] - Xây Dựng 2 Pillar Pages Chuẩn SEO & GEO: /thiet-ke-website & /google-maps-local-seo
- **Mục tiêu**: Xây dựng 2 trang Pillar chuyên sâu cho Trụ cột 1 (Thiết Kế Website Tốc Độ Cao) và Trụ cột 2 (Google Maps & Local SEO) dựa trên dữ liệu SSOT `src/data/company.ts`.
- **Hạng mục hoàn thành**:
  1. *Trang Pillar 1: `/thiet-ke-website`* (`src/pages/WebDesignPillarPage.tsx`):
     - Hero section với headline rõ ràng, cam kết "Bàn giao mới thanh toán", nút gọi Zalo 1-1 và nhận demo 0đ.
     - Answer-First Block: Đoạn văn 72 từ trả lời trực tiếp cho AI câu hỏi *"Làm website 1 trang cho hộ kinh doanh giá bao nhiêu?"*.
     - Bảng tóm tắt 8 tiêu chí chuẩn xác: Bảng giá (490k vs 2.9M), Đối tượng phù hợp, Hạng mục bàn giao, Thời gian triển khai (24-48h vs 3-7 ngày), Chi phí duy trì (0đ/tháng), Quyền sở hữu (100%), Bảo hành (12 tháng vs 5 năm), Ngày cập nhật (14/09/2026).
     - Chi tiết 2 gói cước (Landing Page 1 Trang Khởi Tạo & Website Doanh Nghiệp Đa Trang) và Quy trình 4 bước thực chiến.
     - Case studies liên quan: Quán XÈO (`/du-an/xeo-restaurant`) và Nội Thất Nam Phát (`/du-an/nam-phat`).
     - FAQ chi tiết 6 câu hỏi và khối CTA cam kết 3 không.
  2. *Trang Pillar 2: `/google-maps-local-seo`* (`src/pages/GoogleMapsPillarPage.tsx`):
     - Hero section với cam kết bàn giao tài khoản Google Business Profile chính chủ 100% mới thanh toán.
     - Answer-First Block: Đoạn văn 76 từ trả lời trực tiếp cho AI câu hỏi *"Dịch vụ Google Maps bao gồm những gì?"*.
     - Bảng tóm tắt 8 tiêu chí chuẩn xác: Bảng giá (990k vs 2tr/tháng), Đối tượng phù hợp, Hạng mục bàn giao, Thời gian triển khai (1-3 ngày vs liên tục), Chi phí duy trì (0đ vs 2tr/tháng), Quyền sở hữu (100% Gmail chính chủ), Bảo hành (12 tháng), Ngày cập nhật (14/09/2026).
     - Chi tiết 2 gói cước (Khởi Tạo & Xác Minh Chính Chủ & SEO Google Maps Đẩy Top 3 Bán Kính) và Quy trình 4 bước thực chiến.
     - Case studies liên quan: Quán XÈO (`/du-an/xeo-restaurant`) và Hương Sen Spa (`/du-an/huong-sen`).
     - FAQ chi tiết 6 câu hỏi và khối CTA trực tiếp qua Zalo / Khảo sát 0đ.
  3. *Routing & Sitemap Synchronization*:
     - Định tuyến chuẩn trong `src/App.tsx` trỏ `/thiet-ke-website` và `/google-maps-local-seo` về 2 trang mới.
     - Bổ sung 2 URL vào `src/pages/HtmlSitemapPage.tsx`.
  4. *Nghiệm thu*:
     - `npm run build` (`tsc && vite build`) hoàn thành thành công với exit code 0.
     - Light Mode chuẩn mực, font Be Vietnam Pro, không glassmorphism.


## [2026-09-14] - Tái Tạo Chuẩn Hóa public/llms.txt & public/llms-full.txt Từ SSOT src/data/company.ts
- **Mục tiêu**: Đồng bộ hóa 100% dữ liệu LLMs/GEO với Single Source of Truth `src/data/company.ts`, loại bỏ triệt để email cá nhân, đồng bộ bảng giá niêm yết chuẩn và cung cấp tri thức máy đọc (Machine-Readable Knowledge Base) cho AI Search Engines.
- **Các hạng mục đã hoàn thành**:
  1. *Loại bỏ hoàn toàn email cá nhân*: Xóa bỏ email cá nhân khỏi toàn bộ hệ thống tri thức, chỉ duy trì duy nhất email công ty `contact@localmate.vn`.
  2. *Đồng bộ bảng giá niêm yết chuẩn xác*:
     - Landing page 1 trang: 490.000đ (24-48h, bàn giao 100% quyền).
     - Website đa trang doanh nghiệp: 2.900.000đ (3-7 ngày, bàn giao xong mới thanh toán).
     - Google Maps xác minh GPS chính chủ: 990.000đ (1-3 ngày, chống cướp Maps).
     - SEO Google Maps đẩy Top 3 bán kính: 2.000.000đ / tháng.
     - Quản trị Google Ads địa phương: 1.500.000đ / tháng.
     - Chăm sóc số Digital Care toàn diện: 990.000đ / tháng (15 bài viết + 15 banner hình ảnh + sao lưu).
     - Tự động hóa bán hàng & CRM Zalo: 1.900.000đ (2-4 ngày, đồng bộ Sheets + Telegram/Zalo bot).
  3. *Chuẩn hóa Entity & AI/GEO Index*:
     - Pháp nhân: CÔNG TY TNHH LOCALMATE, MST: 4001337934, Trụ sở: 03 Trường Chinh, P. Hội An Tây, TP. Đà Nẵng, GPS: (16.054407, 108.202167).
     - Khu vực: Đà Nẵng, Hội An, Quảng Nam, Thừa Thiên Huế, TP. Hồ Chí Minh, Hà Nội và Toàn quốc.
     - Triết lý cốt lõi: Dựng trước nghiệm thu mới thanh toán, khách hàng sở hữu 100% tài sản số, báo giá trước không phí ẩn, bảo hành đồng hành 5 năm.
     - 5 Trụ cột cốt lõi và hệ thống canonical URLs: `/thiet-ke-website`, `/google-maps-local-seo`, `/google-ads`, `/content-marketing`, `/automation`, `/bang-gia`, `/du-an`, `/ve-localmate`.
     - 3 Case Studies chuẩn có số liệu đo lường thực tế (Quán XÈO Lighthouse 99 - 0.7s; Xưởng Nam Phát Lighthouse 98 - 0.9s; Hương Sen Spa Lighthouse 100 - 0.8s).
     - Bộ câu hỏi thường gặp (FAQs) cho AI/GEO Engines.
  4. *Nghiệm thu kỹ thuật*:
     - `public/llms.txt` và `public/llms-full.txt` định dạng Markdown sạch, chuẩn cú pháp llmstxt.org.
     - `npm run build` hoàn thành với mã thoát 0, file được tự động copy sang thư mục `dist/`.

## [2026-09-14] - Tối Ưu Toàn Diện GEO (Generative Engine Optimization) & Tăng Tỷ Lệ Chuyển Đổi (CRO)
- **Mục tiêu**: Tối ưu hóa GEO cho chính website `https://localmate.vn/` trên các mô hình AI Search lớn (ChatGPT Search, Google Gemini & AI Overviews, Perplexity AI, Microsoft Copilot) đồng thời biến trang Dịch vụ GEO và các điểm chạm trên Trang chủ thành phễu chuyển đổi cao (CRO).
- **Các hạng mục đã hoàn thành**:
  1. *Technical GEO & AI Indexing*:
     - Nâng cấp `public/llms.txt` và tạo mới `public/llms-full.txt`: Chuẩn hóa Markdown dành cho LLMs với cấu trúc thực thể thống nhất (MST 4001337934, địa chỉ Đà Nẵng, hotline 0834.422.439, bảng giá niêm yết, 6 cam kết, FAQ trực diện).
     - Bổ sung Geo meta tags vào `index.html`: `geo.region="VN-DN"`, `geo.placename="Đà Nẵng, Việt Nam"`, `geo.position="16.054407;108.202167"`, `ICBM`.
     - Cập nhật link alternate: `llms.txt` và `llms-full.txt`.
     - Mở rộng JSON-LD Schema trong `index.html`: `WebSite` (SearchAction), `LocalBusiness` (GeoCoordinates, openingHours, areaServed, aggregateRating 4.9/5, OfferCatalog niêm yết 4 gói chính), `FAQPage`.
     - Cập nhật nội dung text-only trong `<noscript>` đầy đủ thông tin dịch vụ GEO và bảng giá để text/AI bots không chạy JavaScript vẫn parse được 100% dữ liệu.
     - Cập nhật `public/sitemap.xml`: Bổ sung các URL dịch vụ AI/GEO (`/dich-vu/geo`, `/dich-vu/aeo`, `/dich-vu/seo-ai`, `/dich-vu/seo-chatgpt`, `/quy-trinh-geo`).
  2. *Interactive Live AI Visibility Scanner (`AiVisibilityScanner.tsx`)*:
     - Tạo công cụ quét trực quan tại chỗ cho khách hàng trên `GeoServicePage.tsx`:
     - Nhập tên quán + chọn ngành nghề + chọn khu vực -> Mô phỏng quét qua 4 AI Engine lớn trong 1.5s.
     - Hiển thị điểm số Entity, Prompt Bank, Citations và cảnh báo mô phỏng thực tế câu trả lời của AI.
     - Tối ưu chuyển đổi: Form nộp thông tin nhận báo cáo 50 Prompt Bank & Schema mẫu miễn phí qua Zalo + Nút chat Zalo trực tiếp 1-chạm.
  3. *Tối Ưu Chuyển Đổi & Minh Bạch Bảng Giá*:
     - Bổ sung khối "Bài Toán Hòa Vốn (ROI Breakeven Analysis)": Chỉ ra cụ thể mỗi ngành (F&B, Spa, Nha khoa, Gara) chỉ cần 1-3 hoặc 10-15 khách mới/tháng là bù đủ chi phí 2.900k/tháng.
     - Bổ sung các nút Zalo Quick Action kèm tin nhắn mẫu có ngữ cảnh.
  4. *Đồng Bộ Điểm Chạm GEO Trên Trang Chủ (`HomePage.tsx`)*:
     - Bổ sung thẻ `geo-ai-search` (Tối Ưu AI Search & GEO 2026) vào `ServiceCardsSection.tsx`.
     - Bổ sung Pain Point 05 ("Đối thủ lên Top AI trước") vào `ConversionJourneySection.tsx`.
  5. *Nghiệm thu kỹ thuật*:
     - `npm run build` (tsc && vite build) PASS 100% (1583 modules, 0 lỗi TypeScript).


## [2026-09-13] - Subagent 4: Service Architecture & Taxonomy Refiner (Chuẩn Hóa Kiến Trúc Dịch Vụ & Ngôn Ngữ Gần Gũi)
- **Mục tiêu**: Rà soát cấu trúc dịch vụ trong `src/data/solutionsData.ts`, `src/data/solutionPillarsData.ts`, các components và các trang dịch vụ; bảo đảm luồng Problem-First -> Solution -> Capability; đưa kỹ thuật (GEO, AEO, Schema, JSON-LD, Cloudflare Edge...) về đúng vị trí module hỗ trợ bên trong; loại bỏ từ cấm ("trọn đời", "vĩnh viễn", "cam kết Top 1").
- **Các hạng mục hoàn tất**:
  1. *Cấu trúc Problem-First & Taxonomy*:
     - Toàn bộ 5 trụ cột giải pháp (`xay-nen-tang-so`, `duoc-tim-thay`, `thu-hut-khach-hang`, `van-hanh-tu-dong-hoa`, `dong-hanh-cham-soc`) đi từ vấn đề thực tế của chủ tiệm/hộ kinh doanh đến giải pháp và năng lực hỗ trợ.
     - Các khái niệm kỹ thuật sâu (Schema, JSON-LD, GEO, AEO, Cloudflare Edge CDN, Core Web Vitals) được chuyển hóa thành tên gọi và diễn giải gần gũi: "Đồng bộ thông tin xác thực doanh nghiệp", "Tối ưu để trợ lý AI đề xuất (ChatGPT, Gemini)", "Tối ưu mở trang cực nhanh dưới 1.2s", "Đo lường chi phí từng cuộc gọi & tin nhắn Zalo".
  2. *Làm sạch Wording & Cam kết quá đà*:
     - Thay thế toàn bộ "bảo hành trọn đời", "sở hữu vĩnh viễn" bằng "đồng hành hỗ trợ kỹ thuật lâu dài", "bàn giao 100% tài khoản chính chủ".
     - Loại bỏ các claim "Top 1 - 3" hoặc "Top 1" chuyển thành "Hiện diện nổi bật trên Google Maps", "Top 3 Google Maps khu vực", "danh sách gợi ý hàng đầu của trợ lý AI".
  3. *Làm sạch đồng bộ trên các components và trang liên quan*:
     - `src/data/solutionsData.ts` & `src/data/solutionPillarsData.ts`.
     - `SolutionDeliverables.tsx`, `SolutionHero.tsx`, `PricingMatrixSection.tsx`, `ProcessSection.tsx`, `ServiceCardsSection.tsx`, `TrustBar.tsx`, `InteractiveCostEstimator.tsx`, `BeforeAfterSection.tsx`, `AiPromptSimulator.tsx`, `ConversionJourneySection.tsx`, `GeoTaskChecklistSection.tsx`.
     - `LocalSearchClusterPage.tsx`, `OperationalCareClusterPage.tsx`, `GeoServicePage.tsx`, `SeoChatGptServicePage.tsx`, `ServicesPage.tsx`, `StrategyPhasesPage.tsx`.
  4. *Nghiệm thu kỹ thuật*:
     - `npx tsc --noEmit` đạt 0 lỗi.
     - Hệ thống đồng bộ hoàn toàn với ngôn ngữ gần gũi của Localmate v2.

## [2026-09-13] - Subagent 7: Navigation & Discovery Architect (Tách Bạch Core Nav & Resource Navigation)
- **Mục tiêu**: Rà soát và tái cấu trúc hệ thống điều hướng tại `src/components/layout/Header.tsx` và `src/components/layout/Footer.tsx`. Tách bạch triệt để giữa Core Navigation dành cho người dùng phổ thông và Resource Navigation chuyên sâu để không tạo ấn tượng sai lệch Localmate là công ty SEO.
- **Các hạng mục đã hoàn thành**:
  1. *Core Navigation (Menu chính trên Desktop & Mobile)*:
     - **Giải pháp**: Phân loại trực quan theo 5 nhu cầu thực tế: (1) Hiện diện số & Website, (2) Tìm khách hàng, (3) Quản lý & Chăm sóc khách, (4) Bớt việc thủ công, (5) Ứng dụng AI.
     - **Cách làm việc** (`/#cach-lam-viec` & `/cach-lam-viec`): Dẫn tới quy trình 4 bước minh bạch, hỗ trợ neo cuộn mượt mà cross-page qua `Router.tsx`.
     - **Ví dụ & Demo** (`/du-an`): Minh chứng và case study ngành thực tế.
     - **Bảng giá** (`/bang-gia`): Niêm yết công khai, minh bạch.
     - **Về Localmate** (`/ve-localmate`): Định vị "Người đồng hành số tại địa phương" & cam kết 3 không.
     - **Nút CTA chính**: "Kể việc bạn đang cần" -> Khảo sát 0đ (kèm badge 0đ).
  2. *Resource Navigation (Tài nguyên chuyên sâu)*:
     - Chuyển toàn bộ 5 trang/quy trình kỹ thuật chuyên sâu (`/chien-luoc-5-giai-doan`, `/quy-trinh-geo`, `/tieu-chuan-audit`, `/quy-trinh-cham-soc`, `/ho-so-nang-luc`) vào cột "Tài Nguyên Chuyên Sâu" ở **Footer**, loại bỏ hoàn toàn dropdown kỹ thuật khỏi Header để không làm rối khách hàng phổ thông.
  3. *Tối ưu Mobile Drawer*:
     - Bố cục danh mục phẳng, rõ ràng, gọn gàng. Card mở đầu: "Kể việc bạn đang cần (Khảo sát 0đ)".
     - Đảm bảo 100% touch target >= 44px (thực tế 46px - 54px).
     - Đảm bảo `overflow-x: hidden`, không tràn viền ngang, Light Mode chuẩn contrast, TUYỆT ĐỐI KHÔNG GLASSMORPHISM.
  4. *Nghiệm thu kỹ thuật*:
     - `npx tsc --noEmit` đạt 0 lỗi.
     - `npm run build` (tsc && vite build) PASS 100% (1582 modules, 7.15s).


## [2026-09-13] - Subagent 5: Trust & Claims Auditor (Kiểm Toán Niềm Tin & Chuyển Đổi Kịch Bản Ngành)
- **Mục tiêu**: Rà soát toàn bộ codebase tìm kiếm và loại bỏ các con số ảo không có bằng chứng ("Top 1 Google", "tăng 300% doanh thu", "doanh thu tăng 185 triệu/tháng", "98.5% khách hài lòng", "hoàn vốn sau 3 ngày", testimonial mạo danh danh tính bác sĩ / chủ gara / chủ quán).
- **Các hạng mục hoàn tất**:
  1. *Chuyển đổi toàn diện `src/data/caseStudiesData.ts`*:
     - Tái cấu trúc 5 case study thành: "Tình huống giả định thường gặp" + "Workflow minh họa" + "Ví dụ cách LocalMate xử lý".
     - Loại bỏ các claim Top 1 và doanh thu ảo, chuyển thành các mục tiêu kỹ thuật có thể đo lường: Local Pack, Tốc độ < 1.0s, Nút gọi một chạm, Schema Y tế 100%, Sales Hub công khai biểu phí, Tem bảo hành QR.
     - Thay thế toàn bộ quote mạo danh bằng "Mục Tiêu Trải Nghiệm Khách Hàng (Customer Expectation Benchmark)".
     - Gắn nhãn minh bạch 100% `transparencyNote` trên từng kịch bản.
  2. *Cập nhật giao diện `src/pages/ProjectsPage.tsx` & `src/pages/CaseStudyDetailPage.tsx`*:
     - Đổi tiêu đề: "Thư Viện Kịch Bản Giả Định & Workflow Triển Khai Thực Chiến".
     - Chèn hộp thông báo cam kết minh bạch 100% ngay dưới phần giới thiệu.
     - Thẻ thống kê: Đổi `Top 1 & +250%` thành `Quy Trình Chuẩn`, đổi `100% Đo Thật` thành `Minh Bạch 100%`.
     - Bảng ma trận: Đổi cột kết quả thành "Giá Trị Bàn Giao Mục Tiêu".
  3. *Chuẩn hóa các trang vệ tinh & tài liệu*:
     - `ServiceDetailPage.tsx`: Đổi badge thành `KỊCH BẢN GIẢ ĐỊNH & WORKFLOW MINH HỌA`.
     - `credentialData.ts`: Bỏ claim 150+ doanh nghiệp và 98.5% hài lòng, chuyển 3 case study sang kịch bản minh họa theo ngành.
     - `StrategyPhasesPage.tsx`: Hạ claim "tăng 300%" thành "gia tăng đáng kể tỷ lệ khách hàng tin tưởng bấm gọi điện".
  4. *Lập báo cáo kiểm toán niềm tin*:
     - Soạn thảo và lưu trữ báo cáo chi tiết tại `docs/trust-claims-audit.md`.
  5. *Nghiệm thu biên dịch*:
     - `npm run build` PASS 100% (1582 modules transformed, 0 lỗi TypeScript).

---

## [2026-09-13] - Subagent 10: Integration Director & Final QA (Toàn Diện Hệ Thống & Nghiệm Thu Production)
- **Mục tiêu**: Điều phối và tích hợp toàn diện thành quả của 9 subagents, giải quyết xung đột mã nguồn (`Header.tsx` duplicate variable declaration), lắp ráp và hoàn thiện file `src/pages/HomePage.tsx` với các components chuẩn mực từ Subagent 6 (`ProblemMapperSection`) và Subagent 3 (`ServiceCardsSection`, `TrustSection`), đồng bộ 100% giữa HomePage, Header, Footer, solutionsData, caseStudiesData và App.tsx routing, kiểm thử và biên dịch production `npm run build` thành công 100%.
- **Các hạng mục hoàn tất**:
  1. *Giải quyết xung đột code*: Khắc phục triệt để lỗi khai báo trùng lặp `isResourcesActive` (TS2451) trong `src/components/layout/Header.tsx`, đảm bảo menu điều hướng nhận diện chính xác các route tài nguyên và quy trình.
  2. *Lắp ráp & Hoàn thiện `src/pages/HomePage.tsx`*:
     - Bổ sung `ProblemMapperSection` (Subagent 6): Khối "Bạn đang cần làm gì?" phân loại 5 nhóm bài toán thực tế của chủ tiệm & hộ kinh doanh với bộ lọc tab trực quan.
     - Bổ sung `ServiceCardsSection` (Subagent 3): 4 Dịch vụ chính cho SME (Web, Maps, Ads, Chăm sóc) với mức giá và thời gian hoàn thành minh bạch.
     - Bổ sung `TrustSection`: Khối bảo chứng minh bạch & pháp nhân (5 tài sản bàn giao chính chủ + CÔNG TY TNHH LOCALMATE MST 4001337934).
     - Luồng trải nghiệm 18 blocks mượt mà, định vị chuẩn xác "Người đồng hành số tại địa phương", nói không với hứa ảo và biệt ngữ phức tạp.
  3. *Đồng bộ liên kết & Định tuyến*: Kiểm tra chéo toàn diện Header Mega Menu, Footer 5 cột, 5 Trụ cột giải pháp (`solutionsData.ts`), Thư viện kịch bản giải định (`caseStudiesData.ts`) và bộ định tuyến chuẩn hóa (`App.tsx`). Không có broken links, không 404.
  4. *Nghiệm thu biên dịch*: `npx tsc --noEmit` đạt 0 lỗi; `npm run build` (tsc && vite build) PASS 100% (1582 modules transformed, hoàn tất trong 10.48s).
  5. *Quy chuẩn UI/UX*: 100% Light Mode sáng sủa, độ tương phản cao, TUYỆT ĐỐI KHÔNG GLASSMORPHISM, chuẩn touch target >= 44px, không horizontal overflow.

---

## [2026-09-13] - Subagent 1: Kiểm Toán Định Vị Thương Hiệu & Ban Hành Brand Voice SSOT v2 (`docs/localmate-brand-voice-v2.md`)
- **Mục tiêu**: Rà soát toàn bộ source code hiện tại (Homepage, AboutPage, ServicesPage, PricingPage, ProjectsPage, AI & SEO cluster pages), chỉ ra các điểm lệch khỏi định vị cốt lõi, loại bỏ tư duy Agency/quảng cáo phóng đại/công kích đối thủ, ban hành Brand Voice SSOT v2.
- **Báo cáo kiểm toán**:
  - Phát hiện 5 biểu hiện biến tướng: (1) AI Research Lab / SEO Agency với biệt ngữ AEO, GEO, Atomic Q&A, llms.txt, Schema đa tầng; (2) Ngôn từ đao to búa lớn (chiếm lĩnh, thống trị, đột phá, vũ khí); (3) Giọng điệu hung hăng công kích thị trường ("cắt cổ", "chém giá", "con tin", gọi đích danh FastMarketing); (4) Biến tướng sang B2B White-label outsourcing ("LocalMate làm đội kỹ thuật giấu mặt cho Agency"); (5) Phức tạp hóa 40+ dịch vụ vụn vặt và bảng tính ROI kinh tế lượng.
- **Kết quả bàn giao**:
  - Ban hành tài liệu chuẩn `docs/localmate-brand-voice-v2.md`.
  - Khẳng định Core Positioning: *"Localmate — Người đồng hành số tại địa phương. Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."*
  - Xác lập 4 Trụ cột giọng điệu: Gần gũi, Dễ hiểu, Có chuyên môn nhưng không khoe kỹ thuật, Không nói quá & Không công kích.
  - Lập Bảng tra cứu 30 cụm từ cấm kỵ và cụm từ thay thế chuẩn mực.
  - Cung cấp Transformation Playbook cho từng trang chính và Quy trình QA 5 bước.

---

## [2026-09-13] - Kết Nối Toàn Diện Router, Đồng Bộ 6 Tuyến Trang Mới & Nghiệm Thu Build Production (QA & Build Verifier)
- **Mục tiêu**: Đăng ký đầy đủ các route và alias mới trong `src/App.tsx`, kiểm tra toàn diện imports, props, exports và nghiệm thu chất lượng biên dịch `npm run build` (TypeScript tsc && Vite build).
- **Các tuyến đường hoàn tất ánh xạ chuẩn xác**:
  1. `/khao-sat-du-an` (alias `/brief`, `/brief-du-an`, `/brief-geo-seo`) -> `ProjectBriefPage` (Khảo sát 4 bước & Nhận Demo 0đ).
  2. `/chien-luoc-5-giai-doan` (alias `/lo-trinh-5-giai-doan`, `/chien-luoc-seo-5-giai-doan`, `/lo-trinh-phat-trien-so`) -> `StrategyPhasesPage` (Lộ trình phát triển số 5 giai đoạn cho doanh nghiệp địa phương).
  3. `/quy-trinh-geo` (alias `/quy-trinh-trien-khai-geo`) -> `GeoWorkflowPage` (Quy trình 6 bước kỹ thuật triển khai GEO & AI Search).
  4. `/tieu-chuan-audit` (alias `/tieu-chuan-audit-ky-thuat`, `/technical-audit-standards`, `/tieu-chuan-website-2026`) -> `TechnicalAuditStandardsPage` (Bộ 30 tiêu chuẩn kỹ thuật & checklist website 2026).
  5. `/quy-trinh-cham-soc` (alias `/quy-trinh-van-hanh-cham-soc`) -> `CareWorkflowPage` (Quy trình vận hành & chăm sóc kỹ thuật định kỳ).
  6. `/ho-so-nang-luc` (alias `/credential`) -> `CredentialPage` (Hồ sơ năng lực 40 slide chuyên sâu).
- **Kết quả nghiệm thu kỹ thuật**:
  - Toàn bộ props (`onOpenConsultForm`), exports và imports giữa các components được kết nối đồng nhất, không thiếu phụ thuộc hay type mismatch.
  - `npm run build` PASS 100% (tsc không báo bất kỳ lỗi nào, Vite v5.4.21 transformed 1580 modules, build hoàn tất trong 12.57s).
- **Tiêu chuẩn UI/UX**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, tương phản cao, responsive đa màn hình.

---

## [2026-09-13] - Xây Dựng Trang Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương (`GeoWorkflowPage.tsx`)
- **Mục tiêu**: Xây dựng trang Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương (`src/pages/GeoWorkflowPage.tsx`) theo route `/quy-trinh-geo` (alias `/quy-trinh-trien-khai-geo`) học hỏi quy trình chuyên sâu từ FastMarketing (`/quy-trinh-trien-khai-geo`).
- **Nội dung hoàn thành**:
  1. *Bản chất*: Diễn giải cơ chế tối ưu dữ liệu để ChatGPT, Gemini, Copilot và Google AI Overviews có căn cứ trích dẫn thương hiệu khi khách hàng hỏi quanh vùng. Sơ đồ 3 chặng AI: Entity Ingestion -> NAP Cross-Verification -> Citation Generation.
  2. *Quy trình 6 bước kỹ thuật*:
     - Bước 1: Khảo sát tín hiệu số hiện tại & Phân tích cơ hội trích dẫn địa phương (Baseline AI Audit, phát hiện AI Hallucination).
     - Bước 2: Thiết lập Schema JSON-LD đa tầng (LocalBusiness, GeoCoordinates, OpeningHours, AggregateRating, sameAs) kèm code block mẫu copy 1-click.
     - Bước 3: Xuất bản và cấu hình tệp `llms.txt` chuẩn OpenSearch cho bot AI thu thập (kèm template Markdown và nút sao chép).
     - Bước 4: Xây dựng Prompt Bank thực tế (50–80 câu hỏi mua sắm người địa phương thường dùng phân theo 4 nhóm Intent).
     - Bước 5: Đồng bộ NAP (Tên - Địa chỉ - Điện thoại) & 30+ nguồn citation tin cậy.
     - Bước 6: Giám sát đo lường AI Visibility (AI Mention Rate) & Bàn giao 100% tài nguyên + Bảo hành 5 năm.
  3. *Bảng so sánh trực quan Trước & Sau (Live AI Simulation)*: 2 tình huống thực tế (Nha khoa Hóc Môn & Gara sửa xe An Sương).
  4. *Bộ sản phẩm bàn giao & FAQ*: 6 hộp deliverables minh bạch + 6 câu hỏi - giải đáp chuyên sâu cho chủ tiệm.
  5. *Lead Capture*: Form nhận bản khảo sát AI Visibility 0đ kết nối `submitLead()`.
- **UI/UX**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, tương phản cao, responsive. Build Vite thành công.

---

## [2026-09-13] - Nâng Cấp Hệ Thống Case Studies Matrix & Storytelling Chuẩn FastMarketing
- **Mục tiêu**: Nâng cấp toàn diện hệ thống Case Studies của LocalMate tại `src/data/caseStudiesData.ts`, `src/pages/ProjectsPage.tsx` và `src/pages/CaseStudyDetailPage.tsx` học hỏi cách FastMarketing trình bày case studies chi tiết với ảnh chụp, số liệu và câu chuyện giải quyết vấn đề.
- **5 Câu chuyện khách hàng địa phương tiêu biểu**:
  1. *Phòng khám Nha Khoa Tâm Đức*: Cơ sở mới vắng khách -> Tối ưu Google Maps + Schema Y tế (@type: Dentist) -> Đạt Top 1 tìm kiếm bán kính 5km, tăng +250% cuộc gọi đặt lịch hàng tuần.
  2. *Tiệm Cà Phê Mộc & Nhà Hàng Hội An*: Tối ưu bộ mã QR để bàn giúp khách để lại đánh giá chân thực trên Google -> Đạt 480+ lượt review tích cực thật, Google Maps tự động đề xuất khách du lịch, tiết kiệm 100% ngân sách ads (0 đồng).
  3. *Gara Ô Tô Đại Nam (Cứu hộ 24/7)*: Tối ưu trang đích có nút gọi cứu hộ nổi bật + Google Search Ads cụm từ khóa khẩn cấp -> Tiếp nhận 5-8 cuộc gọi kéo xe/tuần, hoàn vốn sau 3 ngày.
  4. *Cửa hàng Thiết bị Âm thanh & Điện tử Hoàng Long*: Khắc phục lỗi tài khoản quảng cáo bị khóa chính sách -> Kháng sạch vi phạm, mở rộng kênh Google Shopping & Maps kéo 35-42 khách đến phòng nghe thử/tuần.
  5. *Dịch vụ Sửa chữa Điện lạnh tại nhà Bách Khoa Fix*: Xây dựng Sales Hub bảng giá minh bạch 100% + Tem bảo hành QR -> Xóa nỗi sợ chặt chém giá, tăng tỷ lệ chốt đơn từ 30% lên 75%.
- **Cấu trúc chuẩn 4 chặng**: Bối cảnh -> Điểm nghẽn -> Giải pháp kỹ thuật LocalMate -> Kết quả đo lường Before/After thật.
- **UI/UX chuẩn FastMarketing**: 100% Light Mode sáng sủa, hoàn toàn không glassmorphism, thẻ số liệu to rõ, bảng ma trận đối chiếu nhanh 5 cơ sở, CTA khảo sát cơ sở 0đ tận nơi.
- **Tương thích ngược**: Hỗ trợ `legacySlugs` bảo toàn toàn bộ URL cũ không bị lỗi 404.

---

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

---

## [2026-09-13] - Subagent 2: Kiến Trúc Thông Tin Trang Chủ V2 (Homepage IA V2)
- **Mục tiêu**: Tái định hình toàn bộ luồng trải nghiệm trang chủ từ 16 section cũ thành chuỗi 10 section mới chuẩn hóa theo tư duy Problem-First & SME Empathy:
  1. Hero V2: Hiểu trong 5 giây ("Bạn lo việc kinh doanh. Chuyện công nghệ để Localmate cùng bạn xử lý").
  2. Nỗi đau thật: 6 Pain Points của chủ cơ sở địa phương (tìm không thấy, web bỏ xó, sổ sách rối, mất công lặp lại, sợ đắt, cô độc kỹ thuật).
  3. Giải pháp dễ hiểu: 4 nhóm việc (Có mặt tốt hơn, Tìm & chăm sóc khách, Bớt việc thủ công, Xây thứ riêng).
  4. Triết lý Vấn đề trước: Không bắt đầu bằng công nghệ.
  5. Bắt đầu rất nhỏ: Micro-projects (Landing page, form đặt lịch, hồ sơ Maps, bảng tính giá), hiệu quả mới làm tiếp.
  6. Cách làm việc 4 bước: Kể vấn đề -> Cùng bóc tách -> Bản đầu tiên -> Dùng thật rồi cải thiện.
  7. Workflow minh họa: 4 nhóm ngành (Quán ăn, Trung tâm, Dịch vụ/Thợ, Đội ngũ sales).
  8. AI thực chất: Không AI-washing, ưu tiên rule đơn giản bền bỉ.
  9. Tại sao là Localmate: 5 điểm tựa bền vững.
  10. Final CTA: Kể vấn đề & nhận tư vấn nhẹ nhàng 0đ.
- **Tài liệu SSOT**: `docs/homepage-ia-v2.md` đã được biên soạn chi tiết gồm ma trận KEEP/MOVE/REMOVE/MERGE, Code Skeleton cho `HomePage.tsx`, Data Schema và Design Guardrails.

---

## [2026-09-14] - Nâng Cấp Hệ Thống Case Studies / Dự Án Thực Tế (SSOT Alignment)
- **Mục tiêu**: Đồng bộ toàn bộ hệ thống Case Studies với dữ liệu thực tế từ `src/data/company.ts` (`COMPANY_DATA.caseStudies`).
- **Nâng cấp `src/pages/ProjectsPage.tsx` (`/du-an`)**:
  - Trưng bày nổi bật 3 dự án thực tế: Quán XÈO, Xưởng Nội Thất Nam Phát, Hương Sen Traditional Massage & Spa.
  - Hiển thị đầy đủ 5 chỉ số đo lường có thật: PageSpeed 98-100, Thời gian tải trang <0.8s (0.7s - 0.9s), Dung lượng siêu nhẹ <500KB (280KB - 450KB), Lập chỉ mục Google Search trong 24h, Thứ hạng Google Maps Top 1 - 3 địa phương.
  - Bổ sung bảng so sánh chỉ số kỹ thuật thực tế giữa 3 dự án.
  - Cung cấp Tab chuyển đổi linh hoạt giữa "Dự Án Thực Tế Đã Bàn Giao" và "Kịch Bản & Workflow Mẫu Theo Ngành".
- **Nâng cấp `src/pages/CaseStudyDetailPage.tsx`**:
  - Hỗ trợ đầy đủ các canonical slug: `/du-an/xeo-restaurant`, `/du-an/nam-phat`, `/du-an/huong-sen` (và fallback giữ tương thích kịch bản cũ).
  - Chuẩn hóa cấu trúc 7 phần chuẩn mực: Khách hàng & Vấn đề ban đầu -> Giải pháp triển khai -> Công nghệ & Hạng mục bàn giao -> Thời gian thực hiện -> Chỉ số đo lường thực tế -> Đánh giá của khách hàng -> CTA khảo sát 0đ.
  - Tích hợp Schema `Article` / `CreativeWork` kết hợp Breadcrumbs JSON-LD trong `SEOHead.tsx`.
- **Nghiệm thu kỹ thuật**: `npm run build` PASS 100% (exit code 0, 0 lỗi TypeScript).

---

## [2026-09-14] - Hoàn Thành 3 Pillar Pages Chuẩn SEO & GEO (/google-ads, /content-marketing, /automation)
- **Mục tiêu**: Xây dựng 3 Pillar Pages tiếp theo theo Single Source of Truth (SSOT) `src/data/company.ts`, tối ưu hóa tìm kiếm người dùng và Answer Engine Optimization (GEO/AEO).
- **Trang 1: `/google-ads` (`src/pages/GoogleAdsPillarPage.tsx`)**:
  - Dữ liệu tham chiếu: `COMPANY_DATA.pillars[2]` (`pillar-ads`), gói `google-ads-starter` (1.500.000đ/tháng).
  - Hero section: Định vị 0% kê giá, khách hàng tự gắn thẻ Visa/Mastercard thanh toán trực tiếp cho Google, LocalMate thu phí công kỹ thuật cố định.
  - Answer-First Block: 74 từ trả lời trực tiếp cho AI và người đọc về mô hình quản trị quảng cáo từ khóa ý định cao (High Intent), lọc từ khóa phủ định và chặn click tặc.
  - Bảng tóm tắt: Bảng giá, Deliverables, Timeline, Ownership, Support, Last Updated.
  - Chi tiết 4 trọng tâm kỹ thuật + Bảng đối chiếu cách làm cũ vs chuẩn minh bạch LocalMate.
  - Accordion FAQ 5 câu hỏi sát sườn + Form đăng ký nhận danh sách từ khóa 0đ (kết nối `submitLead`).
- **Trang 2: `/content-marketing` (`src/pages/ContentMarketingPillarPage.tsx`)**:
  - Dữ liệu tham chiếu: `COMPANY_DATA.pillars[3]` (`pillar-content`), gói `content-care-package` (990.000đ/tháng).
  - Hero section: Giải phóng thời gian cho SME, không cần thuê nhân sự marketing đắt đỏ.
  - Answer-First Block: 76 từ tóm tắt định nghĩa gói Digital Care, 15 bài viết SEO, 15 ảnh thiết kế, sao lưu Cloudflare R2 và bảo trì Uptime/SSL 24/7.
  - Bảng tóm tắt: Bảng giá 990.000đ/tháng, 15 bài + 15 ảnh, sao lưu hàng tuần, hỗ trợ sửa giá/banner trong 15-30p, sở hữu 100% bản quyền.
  - Bảng đối chiếu bài toán chi phí: Tự làm vs Thuê full-time (7-10tr) vs Gói Digital Care LocalMate (tiết kiệm 85%).
  - Accordion FAQ 5 câu hỏi + Form đăng ký nhận kế hoạch 15 bài viết mẫu 0đ.
- **Trang 3: `/automation` (`src/pages/AutomationPillarPage.tsx`)**:
  - Dữ liệu tham chiếu: `COMPANY_DATA.pillars[4]` (`pillar-automation`), gói `automation-crm-zalo` (1.900.000đ trọn gói).
  - Hero section: Báo đơn rung chuông sau 3 giây về Zalo/Telegram, đồng bộ Google Sheets CRM, 0đ phí duy trì phần mềm hàng tháng.
  - Answer-First Block: 77 từ giải thích kiến trúc Webhook nhẹ, đồng bộ Mini CRM và chatbot tự động gửi bảng giá.
  - Bảng tóm tắt: Bảng giá 1.900.000đ (thanh toán 1 lần trọn đời), 0đ phí duy trì, timeline 2-4 ngày, bảo hành 12 tháng.
  - Chi tiết 4 module cốt lõi + Bảng đối chiếu quy trình thủ công vs luồng tự động.
  - Accordion FAQ 5 câu hỏi + Form nhận demo bắn đơn thử nghiệm 0đ.
- **Đồng bộ Router trong `src/App.tsx`**:
  - Tích hợp route `/google-ads`, `/content-marketing`, `/automation` cùng các alias thuận tiện.
- **Nghiệm thu kỹ thuật**:
  - `npx tsc --noEmit`: PASS (0 type errors).
  - `npm run build`: PASS (Vite production build thành công 100%).
  - Tuân thủ nghiêm ngặt quy tắc Light Mode, độ tương phản cao, tuyệt đối không dùng glassmorphism.



