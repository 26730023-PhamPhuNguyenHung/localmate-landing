# Timeline SSOT — LocalMate Engineering & Content Engine

Tài liệu này ghi nhận dòng thời gian các mốc cam kết (commits), sự kiện kiến trúc và tình trạng vận hành của hệ thống.

---

## Mốc Sự Kiện & Commits Gần Nhất

### Mốc: Thay Ảnh Minh Họa Hero Section Trang Chủ (`HomePage.tsx`)
- **Mã commit**: `a1c4c7d`
- **Nội dung**: `feat(home): replace hero section artwork with standalone high-res illustration`
- **Chi tiết**:
  - Tích hợp hình ảnh minh họa Hero mới độc lập (`hero-illustration.png` & bản nén `hero-illustration.webp` chất lượng cao 259KB, giảm từ 1.49MB) thay thế cho kỹ thuật cắt ghép `ArtCrop` từ mockup sheet cũ.
  - Cập nhật `src/pages/HomePage.tsx`: Sử dụng thẻ `<picture>` hỗ trợ WebP ưu tiên kết hợp PNG fallback, tải `eager` phục vụ tức thì LCP.
  - Cập nhật `src/styles/reference-landing.css`: Căn chỉnh tỷ lệ aspect-ratio `1448/1086`, loại bỏ mask-image cắt viền cứng cũ do hình mới đã có nền trong suốt (alpha channel) hoàn hảo, căn chỉnh vị trí trên desktop và mobile mượt mà, không vỡ layout.
  - Phạm vi: Chỉ thay duy nhất cho trang chủ (`HomePage.tsx`), không ảnh hưởng các trang con khác.
  - Kiểm thử: Build Vite và SSR route generator PASS 100% (7.54s), verify trực quan thành công trên desktop (1440px) và mobile (390px).

### Mốc: Tích Hợp MamNonPricing & MamNonFAQ (Localmate Mầm Non)
- **Mã commit**: Pending
- **Nội dung**: `feat(mam-non): implement MamNonPricing and MamNonFAQ components with full interactive state and JSON-LD schema`
- **Chi tiết**:
  - `src/components/mam-non/MamNonPricing.tsx`:
    - Tích hợp ảnh nền `section-backdrop` (`pricing-background.png`), typography copy chuẩn "Giá rõ ràng để các cô dễ bắt đầu. ♡".
    - 8 tính năng cần thiết (`included-features`) ánh xạ từ `PRICING_INCLUDED_FEATURES` với các icon SVG chuyên biệt.
    - Card giá đầy đủ (`full-price-card`): Gói 30 ngày đầu 0đ, sau dùng thử từ 3.000đ/ngày kèm so sánh tách cà phê.
    - Hai nút CTA ("Dùng thử trước, chưa cần quyết định" & "Trao đổi với Localmate") liên kết callback `onOpenContact`.
    - Đầy đủ doodle sun, hand notes và `Waves` divider.
  - `src/components/mam-non/MamNonFAQ.tsx`:
    - Minh họa `faq-art` (`faq-support-cropped.png`) kết hợp hand `faq-bubble` "Cô cứ hỏi, bên em luôn ở đây ạ! ♡".
    - 6 câu hỏi FAQ accordion điều khiển bằng React state (`openItems`), đồng bộ hoàn hảo với CSS `.faq-grid details[open] summary:after`.
    - Tích hợp nút CTA "Nhắn hỏi Localmate" gọi `onOpenContact`.
    - Tích hợp nhúng cấu trúc dữ liệu chuẩn Google Schema.org `FAQPage` JSON-LD tự động sinh từ dữ liệu 6 câu hỏi thật.
  - **Kiểm thử**: `tsc --noEmit` PASS 100%, `npm run build` Vite PASS 100% trong 9.52s (sinh đầy đủ 30 bài viết và 6 static pages).

### Mốc: Audit & Chuẩn Hóa Responsive Toàn Diện Cho Laptop Windows Display Scale 125%
- **Mã commit**: `4a749ec`
- **Nội dung**: `fix(responsive): refine footer wrapping and article grid minmax for Windows 125% scale`
- **Chi tiết**:
  - **Audit 6 Viewports chuẩn**: `1280x720`, `1280x800`, `1366x768`, `1440x900`, `1536x864`, `1600x900` trên tất cả các trang (`/`, `/geo`, `/kien-thuc`, `/kien-thuc/:slug`).
  - **Chuẩn hóa Container System SSOT**:
    - `max-width: 1440px; margin-inline: auto; padding-inline: clamp(16px, 2.5vw, 32px);`
    - Cập nhật đồng bộ trong `tokens.css`, `globals.css`, `Container.tsx`, `geo-landing.css`, `reference-landing.css`.
  - **Header (`Header.tsx`)**:
    - Ẩn nút hotline `.phone` trên header khi màn hình `<= 1366px` để 8 menu link và nút CTA không bị ép nghẹt.
    - Điều chỉnh breakpoint chuyển sang hamburger menu toggle tại `<= 1120px` triệt tiêu xung đột va chạm.
    - Thay thế `100vw` thành `100%` trong Mega Menu overlay tránh sinh thanh cuộn ngang rác trên Windows.
  - **Homepage Sections (`reference-landing.css`)**:
    - Services Grid: Linh hoạt `repeat(auto-fit, minmax(230px, 1fr))` trên dải laptop 1280-1366px, 5 cột khi `>= 1320px`.
    - Stories Grid: `repeat(auto-fit, minmax(280px, 1fr))` tránh ép bẹp nội dung card.
    - Values Grid: `repeat(auto-fit, minmax(220px, 1fr))` co giãn linh hoạt.
    - Contact Section: Đổi từ 3 cột bị lệch sang 2 cột cân đối `1.1fr 1fr`, quote form căn giữa tự nhiên.
  - **Footer (`Footer.tsx`)**:
    - Bổ sung `flex-wrap: wrap; gap: 12px;` vào `.footer-bottom` chống rớt chữ đơn lẻ hay tràn dòng MST/địa chỉ.
  - **Knowledge & Articles (`ArticlesIndexPage.tsx`, `globals.css`)**:
    - Grid bài viết: `minmax(min(100%, 300px), 1fr)` co giãn an toàn.
  - **Kiểm thử**: Tất cả 6 viewports trên cả 4 route đều đạt `hasOverflow: false` (Zero horizontal overflow). Build Vite PASS 100% (5.16s).
  - **Deploy Cloudflare Pages**: Đã deploy thành công qua Wrangler CLI lên `https://94ad824f.localmate-vn.pages.dev` và production `https://localmate-vn.pages.dev`. HTTP 200 OK.

- **Nội dung**: `fix(article): redesign TableOfContents to editorial rail, fix auto-scroll bug, and resolve table responsive overflow`
- **Chi tiết**:
  - `src/components/article/TableOfContents.tsx`:
    - Redesign toàn diện theo phong cách tài liệu hiện đại (Linear, Stripe, Vercel docs): loại bỏ card thô xám, badge đếm mục, icon nền xanh và footer "Lên đầu trang" trong card.
    - Xây dựng trục ray dẫn hướng mảnh 1px (`#e2e8f0`), active item có chỉ báo `border-left: 2px solid #0d7647`, text xanh thương hiệu font-weight 600.
    - Hỗ trợ 2 biến thể: `variant="sidebar"` (desktop guide rail, sticky, ẩn thanh cuộn) và `variant="inline-accordion"` (mobile/inline, default collapsed, tự động đóng khi chọn mục).
    - **Khắc phục triệt để lỗi Tự động cuộn lên (Auto-Scroll Bug)**: Bỏ hoàn toàn `scrollIntoView()` trên window; chỉ cập nhật `container.scrollTop` nội bộ khi TOC overflow; bổ sung `isInstanceVisible()` guard chặn ScrollSpy khi component bị ẩn.
    - Click heading mượt mà, trừ header offset 88px, cập nhật URL hash qua `window.history.replaceState` không gây giật trang.
  - `src/components/article/ArticleBody.tsx`:
    - Bổ sung hàm tiền xử lý HTML tự động wrap tất cả bảng dữ liệu trong `<div class="table-scroll-wrapper"><div class="table-scroll-hint">...</div><div class="table-responsive"><table>...</table></div></div>`.
    - Thêm chỉ báo cuộn di động "Vuốt ngang để xem đầy đủ bảng" kèm SVG icon.
    - Xóa bỏ `white-space: nowrap` trên `th` (thay bằng `white-space: normal; text-wrap: balance;`) ngăn chặn việc kéo dãn bảng lên 1000px.
    - Đặt `min-width: 520px` thoáng đãng, triệt tiêu 100% Horizontal Page Overflow trên màn hình mobile 375px/390px.
  - `src/pages/ArticleDetailPage.tsx`:
    - Tích hợp hook `useIsDesktop(1080)` phân lập Desktop Sidebar TOC vs Mobile Inline Accordion TOC, đảm bảo chỉ có đúng 1 instance mount tại một thời điểm, triệt tiêu race condition và duplicate scroll listeners.
  - `src/styles/globals.css`:
    - Thiết lập khoảng cách 2 cột `gap: clamp(2.5rem, 3.5vw, 3.5rem)` (40px - 56px), sidebar sticky top 96px, main column max-width 760px.
  - **Kiểm thử tự động**: Script Playwright trên 5 viewports (1440x900, 1366x768, 1920x1080, 390x844, 375x812) PASS 100% tất cả các tiêu chí (Zero Horizontal Overflow, Zero Auto-Scroll Bug, Mobile Accordion Auto-Close, Click Smooth Scroll, URL Hash).
  - `npm run build` PASS 100% trong 6.13s (0 warning, 0 error).

### Mốc: Article UX Audit & Refactor — Editorial Layout, Slim Navigation & Asymmetric 2-Column Grid
- **Mã commit**: Pending
- **Nội dung**: `refactor(article-ux): implement editorial layout, slim breadcrumb bar, byline metadata, and responsive sticky sidebar TOC`
- **Chi tiết**:
  - `src/components/ui/Breadcrumbs.tsx`: Thêm prop `noMargin={true}` để loại bỏ khoảng trắng 24px thừa thãi khi lồng trong top header bar.
  - `src/components/article/ArticleHeader.tsx`: Cân đối tỷ lệ typography editorial, giảm H1 xuống `clamp(1.5rem, 2.75vw, 2.15rem)` chống chiếm nửa màn hình laptop 1366x768 / 1440x900.
  - `src/components/article/ArticleMeta.tsx`: Loại bỏ phong cách dashboard card, chuyển sang editorial byline với avatar tròn 36px, ngày cập nhật, thời gian đọc và nút chia sẻ ghost button nhỏ gọn.
  - `src/components/article/ArticleSummary.tsx`: Khử viền xanh dày 2px thô ráp kiểu SEO tool, chuyển thành khối Callout tạp chí cao cấp với viền trái 3px `#0d7647`, nền `#f8fafc`.
  - `src/pages/ArticleDetailPage.tsx`:
    - Thanh điều hướng mỏng `.article-top-bar` tiết kiệm 50px vertical space.
    - Tích hợp `ReadingProgressBar` đỉnh trang.
    - Kiến trúc Grid 2 cột: Cột nội dung chính 760px chuẩn typography đọc sách báo; cột phụ Sidebar 280px sticky chứa `TableOfContents` và Quick Consultation Card.
    - Trên mobile/tablet (< 1080px): Sidebar ẩn, TOC hiển thị ở đầu bài dạng accordion thu gọn (`defaultCollapsed={true}`) không chặn đứng luồng đọc.
  - `src/styles/globals.css`: Bổ sung `.article-layout-grid`, `.article-main-column`, `.article-sidebar-column`, `.article-mobile-toc-container`.
  - Kiểm thử `npm run build` PASS 100%, 0 warning.

### Mốc: Triển Khai Hoàn Thiện Public Routes & Page Components (/kien-thuc & /kien-thuc/:slug)
- **Mã commit**: Pending
- **Nội dung**: `feat(public-routes): implement ArticlesIndexPage and ArticleDetailPage with 5 topic clusters, real-time search, TL;DR, and interactive FAQ`
- **Chi tiết**:
  - `src/pages/ArticlesIndexPage.tsx`: Trang danh mục bài viết `/kien-thuc`:
    - Bộ lọc 5 cụm chủ đề chuẩn (Website, Google Maps, Local SEO, Google Ads, CRM & Tự động hóa) + Tất cả (30 bài).
    - Thanh tìm kiếm tức thời theo từ khóa, tiêu đề, mô tả.
    - Grid 30 bài viết với thumbnail ảnh chất lượng cao, thời gian đọc, ngày cập nhật, tóm tắt, tag danh mục.
    - Tự động preload chunk nội dung khi hover chuột (`preloadArticle`).
    - SEOHead chuẩn SEO và schema BlogPosting.
  - `src/pages/ArticleDetailPage.tsx`: Trang đọc chi tiết `/kien-thuc/:slug`:
    - Breadcrumbs 3 cấp: Trang chủ > Kiến thức > [Tên Chuyên Mục] > [Tiêu đề].
    - Hero tiêu đề H1 sắc nét, thông tin tác giả, ngày cập nhật, huy hiệu kiểm duyệt thực tế.
    - Hộp Callout TL;DR (Answer-First) xanh lá chuẩn mực tối ưu cho GEO / AI Overviews.
    - Render toàn văn HTML với typography chuẩn, bảng so sánh chống vỡ layout mobile.
    - Accordion FAQ tương tác mở/đóng từng câu kèm JSON-LD Schema FAQPage tự động cho Google Rich Snippets.
    - Author Box giới thiệu đội ngũ LocalMate Team và CTA tư vấn tích hợp LeadModal.
    - Grid 3 bài viết liên quan trong cùng cụm chủ đề.
  - `src/App.tsx`: Tích hợp định tuyến `/kien-thuc`, `/blog`, `/bai-viet` và dynamic route `/kien-thuc/:slug`.
  - `src/components/layout/Header.tsx`: Bổ sung menu điều hướng "Kiến thức" trên cả Desktop và Mobile.
  - Kiểm thử `npm run build` PASS 100%, 0 warning, TypeScript check pass.

### Mốc: Kiến Trúc Code-First Articles Data Engine (Zero-API, 0ms Instant Load, Code-Splitting per Slug)
- **Mã commit**: Pending
- **Nội dung**: `feat(data-engine): implement code-first articles engine with dynamic code splitting and zero-runtime D1 dependency`
- **Chi tiết**:
  - `scripts/build-articles-data.js`: Script chuyển đổi và đóng gói 30 bài viết từ `content/seeds/drafts_30_articles.json` và `content/articles/`:
    - Auto-inject `id="..."` cho toàn bộ 618 headings (h2, h3).
    - Tạo mảng Table of Contents (TOC) phân cấp đa tầng (Level 2 & Level 3).
    - Tổng hợp 146 câu hỏi thường gặp FAQs chuẩn chất lượng cao.
    - Tạo sẵn Article + FAQPage Schema.org JSON-LD cấu trúc.
    - Phân tách kiến trúc Two-Tier Split:
      - Tầng 1: `src/data/articles/metadata.ts` (~66KB uncompressed, gzip ~10KB) phục vụ danh mục, tìm kiếm, blog list, sitemap, trang chủ.
      - Tầng 2: `src/data/articles/content/${slug}.ts` (30 chunks riêng lẻ) load qua dynamic import khi người dùng vào đọc bài viết cụ thể.
  - `src/data/articlesData.ts`: Facade Data Engine module cung cấp các hàm query đồng bộ tức thì: `getAllArticles()`, `getArticleMetadataBySlug()`, `getArticlesByCategory()`, `getRelatedArticles()`, `getAllCategories()`, `searchArticles()`, cùng hàm lazy-loader `getArticleBySlug(slug)` kèm In-Memory RAM Cache đạt chuẩn render **0ms**.
  - `package.json`: Tích hợp lệnh `"build:articles"` và tự động chạy trong `"prebuild"`.
  - Giảm kích thước bundle index từ 122 kB xuống còn 92 kB (gzip 24.82 kB). Build pass 100% (6.28s).

### Mốc: Tối Ưu Hóa CRO & Điểm Chạm Chuyển Đổi Trong Bài Viết (In-Article Callouts & Mobile Floating CTA)
- **Mã commit**: `2ced842`
- **Nội dung**: `feat(cro): add in-article callout presets and responsive mobile floating cta`
- **Chi tiết**:
  - `src/components/conversion/InArticleCallout.tsx`: Thiết kế component chuyển đổi ngữ cảnh tự nhiên, thuần Light Mode, tuyệt đối không glassmorphism. Hỗ trợ 4 cụm chủ đề chiến lược:
    1. `web-demo`: Dựng Web demo ngành nghề từ 490k, xem thử trong 24h, không cọc trước.
    2. `maps-audit`: Kiểm tra điểm mù & thứ hạng Google Maps 0đ bán kính 3-5km.
    3. `ads-optimization`: Rà soát tài khoản Ads Google/Facebook, chặn click ảo, tối ưu tỷ lệ ra số.
    4. `crm-setup`: Setup hệ thống CRM & Chăm sóc khách tự động, chống trôi tin nhắn Fanpage/Zalo.
  - `src/components/layout/MobileFloatingCTA.tsx`: Nâng cấp linh hoạt cho phép tùy biến `ctaText`, `serviceName`, `sourceContext`, giữ vững 2 nút truy cập nhanh: Gọi khẩn cấp (`tel:0834422439`) + Nhắn Zalo 24/7.
  - `src/pages/PostPreviewPage.tsx`: Tự động nhận diện cụm chủ đề của bài viết (`detectTopic`), thay thế CTA cũ thành `InArticleCallout` và kích hoạt trực tiếp `LeadModal` mà không rời trang.
  - Kiểm thử `npm run build` PASS 100%.

### Mốc 1: Khởi tạo & Độc lập Hóa 10 Báo Cáo Red-Team Audit V2
- **Mã commit**: `8f8b552`
- **Nội dung**: `docs(audit-v2): add master executive audit and 10 specialist red-team reports`
- **Chi tiết**: Hoàn thành 10 subagents chuyên biệt audit toàn diện 30 bài viết SEO, cấu trúc Topic Cluster, Technical SEO, E-E-A-T, GEO, UI/UX, CRO và Portfolio Valuation. Lập tài liệu Master Executive Audit `docs/audit-v2/00-executive-audit.md`.

### Mốc 2: Vá Hạ Tầng Technical & On-Page SEO (P0/P1 Technical Fixes)
- **Mã commit**: `386abf0`
- **Nội dung**: `fix(seo): implement P0/P1 technical and on-page fixes from audit-v2`
- **Chi tiết**:
  - `src/pages/NotFoundPage.tsx`: Thêm trang 404 chuẩn, chặn Soft-404.
  - `src/App.tsx`: Chuyển fallback route `*` về `NotFoundPage`.
  - `src/components/seo/SEOHead.tsx`: Hỗ trợ `noIndex`, thẻ meta robots RFC 9309, bắt buộc `image` cho Article Schema, định dạng `@graph`.
  - `public/robots.txt`: Chặn bot crawl `/admin/`, `/api/`, `/preview/`.
  - `functions/api/routes/publicContent.ts`: Bảo vệ draft preview bằng token dài >= 16 ký tự.
  - `src/pages/PostPreviewPage.tsx`: Thêm `noIndex={true}`.
  - `src/pages/ArticleDetailPage.tsx`: Sửa lỗi nhân đôi title tag `| LocalMate | LocalMate`, format ISO dates, ánh xạ service CTA theo danh mục.
  - `src/styles/globals.css`: Khai báo bộ style hoàn chỉnh cho `.article-rendered-body` và container table `overflow-x: auto` chống vỡ layout mobile.

### Mốc 3: Nâng Cấp CMS Health Engine & Quality Scoring
- **Mã commit**: `704cba8`
- **Nội dung**: `feat(cms): integrate rule-derived health checks in posts list page`
- **Chi tiết**: Tích hợp các chỉ số kiểm tra tự động (SEO, GEO, Evidence, Links) hiển thị huy hiệu xanh/đỏ và tooltip lý do fail khi rê chuột trên `src/admin/pages/PostsListPage.tsx`.

### Mốc 4: Chặn Xuất Bản Placeholder (Publish Guardrails) & Viết Lại Toàn Diện Post ID 1
- **Mã commit**: `141c720`
- **Nội dung**: `feat(content): rewrite post 1 to full practical depth and enforce publish guardrails in CMS`
- **Chi tiết**:
  - `scripts/generate-seeds.js`: Xóa vĩnh viễn template tự động chèn placeholder ngụy trang `Nội dung chi tiết cho mục... đang được biên tập...`.
  - `functions/api/routes/adminPosts.ts`: Server-side validation trả lỗi 400 Bad Request chặn chuyển sang `published` nếu phát hiện từ khóa placeholder hoặc tổng từ < 400.
  - `src/admin/editor/PostEditorPage.tsx`: Client-side validation cảnh báo và chặn nút xuất bản.
  - `content/seeds/drafts_30_articles.json` & `migrations/0003_seed_draft_posts.sql`: Viết lại 100% Post ID 1 (`website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website`) đạt 3.890 từ, loại bỏ 100% placeholder, có Answer First, bảng so sánh 8 tiêu chí, bộ lọc quyết định 4 nên / 4 chưa nên, bóc tách 5 hạng mục chi phí thực chiến, checklist 6 bước và 6 FAQs chuyên sâu.
  - Đồng bộ thành công vào SQLite local D1 database.
  - Kiểm thử `npm run build` PASS 100%.

### Mốc 5: Thiết Lập Kiến Trúc Markdown-First Content Pipeline & Quality Gate CLI
- **Mã commit**: `13f809f`
- **Nội dung**: `feat(pipeline): establish markdown-first content pipeline with multi-role gates and automated validator`
- **Chi tiết**:
  - Tách rời hoàn toàn khâu sản xuất nội dung ra ngoài CMS: `research -> brief.md -> research.md -> outline.md -> draft.md -> review.md -> automated quality gate -> approved markdown -> parser -> structured article.json -> CMS Draft -> Human preview -> Publish`.
  - Thiết lập thư mục `content/templates/` (3 templates: brief, draft, review).
  - Thiết lập thư mục `content/rules/` (6 bộ quy chuẩn: writing style, seo, geo, anti-ai-slop, internal linking, fact-checking).
  - Triển khai 4 công cụ CLI độc lập trong `content/scripts/`: `validate-content.cjs` (chặn rác, kiểm tra cấu trúc, knockout < 80 điểm), `markdown-to-cms.cjs` (chuyển đổi và sync an toàn sang CMS/D1 ở trạng thái draft), `check-links.cjs` (kiểm tra đồ thị liên kết), `generate-schema.cjs` (sinh JSON-LD Article/Breadcrumbs/FAQPage).
  - Khởi tạo đầy đủ bộ 6 files chuẩn cho bài viết ID 1 (`content/articles/website-doanh-nghiep-la-gi/`). Chạy `validate-content.cjs` đạt điểm tuyệt đối 100/100.
  - Mở rộng lifecycle status trong CMS types: `draft | editorial_ready | seo_ready | publish_ready | review | scheduled | published | archived`.
  - Agent tuyệt đối không có quyền gọi API publish; chỉ người thật duyệt mới bấm publish.
  - `npm run build` PASS 100%.

### Mốc 6: Đại Tu Toàn Diện CMS LocalMate (Audit, Refactor & Upgrade 10 Phân Hệ)
- **Mã sự kiện**: `feat(cms): comprehensive cms refactor with r2 optimization, geo engine, deterministic seo, cta conversion and unified audit`
- **Chi tiết**:
  - **Database & D1**: Hoàn thành migration `0004_cms_advanced_upgrade.sql` bổ sung các trường kỹ thuật cho `cms_media` (width, height, format, hash, size_original, size_optimized, focal_x, focal_y), `cms_posts` (geo_main_question, geo_direct_answer, geo_entities, geo_sources, geo_faq_json, cta_id, schema_type, og_image_url), tạo bảng `cms_ctas` và mở rộng `cms_redirects` (hits, last_hit_at).
  - **Media R2 & Optimization Pipeline**: Nén WebP client-side tự động trước khi upload (`src/utils/imageOptimizer.ts`), tính SHA-256 hash chống tải trùng, phát hiện bài viết đang sử dụng ảnh (`used_in_posts`), chặn xóa media nếu đang gắn trong bài viết. Xây dựng component `<OptimizedImage />` chống CLS, hỗ trợ loading="lazy", decoding="async", LCP priority.
  - **Content Editor UX**: Tái cấu trúc thành 8 tabs khoa học không gây ngợp (Bài Viết, SEO On-Page, GEO & AI Search, Mạng Xã Hội OG, Schema JSON-LD, CTA Chuyển Đổi, Gợi Ý Links, Lịch Sử). Tích hợp Real-time SEO Scoring (0-100 deterministic) và GEO Readiness checker.
  - **GEO / AI Search Engine**: Tối ưu Answer-First, Direct Answer (40-70 từ), Main Question, Key Entities, FAQ Accordion và Schema FAQPage tự động, không dùng AI API ảo, không hứa hẹn sai sự thật.
  - **Conversion / CTA System**: Xây dựng hệ thống CTA chuyển đổi lead tái sử dụng (`/admin/ctas`, `/api/admin/ctas`), hỗ trợ vị trí linh hoạt (end, middle, before-conclusion), theo dõi real-time impression và click (CTR %).
  - **Global SEO & GEO Audit**: Màn hình `/admin/audit` rà soát toàn bộ bài viết, phân loại lỗi Critical / Warning, liên kết nút "Sửa ngay" trực tiếp vào editor.
  - **Action-Oriented Dashboard**: Tái cấu trúc `/admin` hiển thị danh sách việc cần làm (Ảnh thiếu ALT, Ảnh >500KB, Ảnh chưa dùng, Bài thiếu mô tả, Bài thiếu ảnh đại diện, Bài chưa chuẩn GEO) click chuyển thẳng vào filter tương ứng.
  - **Technical SEO**: Cập nhật `functions/sitemap.xml.ts` quét toàn bộ service landing pages và category động; hỗ trợ phát hiện vòng lặp/chuỗi redirect trong Redirect Manager.
  - **Frontend Rendering**: Tích hợp hiển thị GEO Answer-First Card, FAQ Accordion, Dynamic CTA tracking trong `src/pages/ArticleDetailPage.tsx` và `src/pages/PostPreviewPage.tsx`.
  - **Verification**: `npm run build` PASS 100% (7.86s). Kiểm thử giao diện trực quan qua Chrome DevTools & Agent Browser PASS 100% trên các độ phân giải 1366x768 và 1280x800 (Zero horizontal overflow).

### Mốc 7: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 9 (Tối Ưu Google Business Profile)
- **Mã sự kiện**: `content: standardize article 9 cach-toi-uu-google-business-profile-de-khach-de-tim-thay`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/cach-toi-uu-google-business-profile-de-khach-de-tim-thay/`.
  - Biên soạn `draft.md` (3411 words, 1 H1, đúng 6 H2, 4 bảng Markdown, 6 internal links, FAQ chi tiết, TL;DR Answer First) tuân thủ nghiêm ngặt quy chuẩn chống AI slop và quy chuẩn GEO.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối 100/100 (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` tự động tạo `article.json` và đồng bộ vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 8: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 4 (Cấu Trúc Website Giới Thiệu Công Ty)
- **Mã sự kiện**: `content: standardize article 4 website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao/`.
  - Biên soạn `draft.md` (3405 words, 1 H1, đúng 7 H2, H3 chi tiết, 2 bảng Markdown đối chiếu trang cần vs thừa thãi, 6 internal links, checklist 16 tiêu chí, FAQ 5 câu hỏi chuyên sâu, TL;DR Answer First) tuân thủ 100% quy chuẩn chống AI slop và triết lý ngôn ngữ thực chiến.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối 100/100 (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` tự động sinh `article.json` và đồng bộ vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 9: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 2 (Làm Website Doanh Nghiệp Nhỏ Cần Chuẩn Bị Những Gì)
- **Mã sự kiện**: `content: standardize article 2 lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi`
- **Chi tiết**:
  - Tạo cấu trúc thư mục `content/articles/lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi/`.
  - Biên soạn `draft.md` (2695 words, 1 H1, đúng 7 H2, H3 chi tiết, bảng checklist markdown, case study thực tế xưởng nhôm kính Đông Hưng Thuận Quận 12, 4 câu hỏi FAQ chuẩn H3, 4 internal links trỏ về `/bang-gia`, `/thiet-ke-website`, `/kien-thuc/website-doanh-nghiep-la-gi`, TL;DR Answer First) tuân thủ 100% quy chuẩn chống AI slop và quy chuẩn GEO.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối 100/100 (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` tự động sinh `article.json` và đồng bộ vào `content/seeds/drafts_30_articles.json` với trạng thái draft an toàn.

### Mốc 9: Chuẩn Hóa & Hoàn Thiện Bài Viết Trụ Cột ID 7 (Google Maps Cho Doanh Nghiệp Từ A Đến Z)
- **Mã sự kiện**: `content: standardize pillar article 7 google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z/`.
  - Biên soạn `draft.md` (2.696 words, nằm chuẩn trong khoảng 1800 - 2800 từ, 1 H1, đúng 7 H2, bảng đối chiếu 8 tiêu chí hồ sơ chuẩn vs hồ sơ rác, 3 internal links trỏ về `/google-maps-local-seo`, `/thiet-ke-website`, `/bang-gia`, FAQ 5 câu hỏi thực chiến, Answer First trong 1000 ký tự đầu tiên).
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách ngôn ngữ thực tế cho hộ kinh doanh.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 10: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 5 (So Sánh Website Bán Hàng vs Website Giới Thiệu)
- **Mã sự kiện**: `content: standardize article 5 website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao/`.
  - Biên soạn `draft.md` (2.393 words, nằm chuẩn trong khoảng 1500 - 2400 từ, 1 H1, đúng 6 H2, bảng đối chiếu 7 tiêu chí cốt lõi, ma trận quyết định 3 nhóm rạch ròi, case study xưởng rèm cửa Thủ Đức, 3 internal links trỏ về `/landing-490k`, `/bang-gia`, `/thiet-ke-website`, 4 câu hỏi FAQ chuẩn H3, TL;DR Answer First trong 1000 ký tự đầu tiên).
  - Phân tích sâu sắc bản chất vì sao thợ nghề và hộ kinh doanh dịch vụ không nên làm giỏ hàng phức tạp làm giảm tỷ lệ chốt đơn (chi phí hiện trường biến động, rào cản thao tác nhiều bước, nhu cầu trao đổi qua Zalo/Hotline, gánh nặng tải trang 4G).
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và văn phong thực chiến cho hộ kinh doanh.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 11: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 6 (10 Lỗi Khiến Website Doanh Nghiệp Không Có Khách)
- **Mã sự kiện**: `content: standardize article 6 10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach/`.
  - Biên soạn `draft.md` (2.568 words, nằm chuẩn xác trong khoảng 1700 - 2600 từ, 1 H1, đúng 13 H2, 2 bảng Markdown tổng hợp mức độ nghiêm trọng & giải pháp, checklist 4 bước tự kiểm toán di động trong 5 phút, 4 câu hỏi FAQ chuyên sâu, 4 internal links trỏ về `/thiet-ke-website`, `/bang-gia`, `/kien-thuc/website-doanh-nghiep-la-gi`, Answer First trong 1000 ký tự đầu tiên).
  - Điểm mặt 10 lỗi chí mạng: Web tải chậm 3G/4G, thiếu nút gọi khẩn cấp nổi, giấu giá/bắt khách inbox, dùng ảnh mạng copy, không tối ưu di động, thiếu chứng thực khách cũ, không có Google Maps/địa chỉ thực, bỏ quên SEO địa phương, nội dung sáo rỗng viết cho máy, bỏ bê bảo trì web.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và văn phong "bác thợ hiểu được" của LocalMate.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 12: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 15 (SEO Doanh Nghiệp Địa Phương - Cẩm Nang Location Pages)
- **Mã sự kiện**: `content: standardize article 15 cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong/`.
  - Biên soạn `draft.md` (2.042 words, nằm chuẩn xác trong khoảng 1600 - 2400 từ, 1 H1, đúng 6 H2, bảng đối chiếu 7 thành phần cấu trúc Location Page, checklist 5 bước chống spam địa danh và bẫy Doorway Pages, 4 câu hỏi FAQ chuyên sâu, 3 internal links trỏ về `/google-maps-local-seo`, `/thiet-ke-website`, `/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam`, Answer First trong 1000 ký tự đầu tiên).
  - Phân tích chuyên sâu kỹ thuật Location Pages: bản chất thuật toán 3 trụ cột (Khoảng cách, Sự liên quan, Độ nổi bật), phân tầng từ khóa 3 cấp (Thành phố -> Quận/Huyện -> Tuyến đường/Khu dân cư), nhúng bản đồ Google Maps chuẩn NAP, tiêu chuẩn ảnh hiện trường chụp thợ thật việc thật, cảnh báo thuật toán SpamBrain và cơ chế tự trỏ Canonical chống duplicate content.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và văn phong "bác thợ hiểu được" của LocalMate.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 13: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 21 (Chạy Google Ads Bao Nhiêu Tiền Một Ngày Là Hợp Lý)
- **Mã sự kiện**: `content: standardize article 21 chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly/`.
  - Biên soạn `draft.md` chuẩn cấu trúc (Frontmatter, TL;DR Answer First trong 1000 ký tự đầu, 1 H1, đúng 6 H2, bảng dự toán chi phí theo ngày cho 5 ngành phổ biến: điện lạnh, nhôm kính, hút hầm cầu, sửa xe, nha khoa; công thức tính điểm hòa vốn ROAS, công thức phễu 2 bước tính số click cần thiết ra đơn hàng; chiến thuật thắt chặt bán kính 3-8km; 5 câu hỏi FAQ chuyên sâu dạng H3; 3 internal links trỏ về `/bang-gia`, `/landing-490k`, `/kien-thuc/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau`).
  - Đập tan quan niệm sai lầm "phải có 10-20 triệu mới chạy được Google Ads", hướng dẫn nạp vốn an toàn từ 50.000đ - 150.000đ/ngày dựa trên nguyên tắc bảo toàn vốn: ngân sách ngày không vượt quá lãi ròng 01 đơn hàng.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn SEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 14: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 13 (Local SEO Là Gì? Vì Sao Doanh Nghiệp Địa Phương Nên Làm)
- **Mã sự kiện**: `content: standardize article 13 local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam/`.
  - Biên soạn `draft.md` (2.589 words, nằm chuẩn xác trong khoảng 1800 - 2600 từ, 1 H1, đúng 7 H2, bảng đối chiếu 3 kênh Local SEO vs SEO truyền thống vs Google Ads với 8 tiêu chí, bảng phân tích 3 trụ cột thuật toán Google, quy trình 5 bước thực chiến, 4 sai lầm thường gặp, 5 câu hỏi FAQ chuyên sâu chuẩn H3, 7 internal links trong đó có các link bắt buộc trỏ về `/google-maps-local-seo`, `/thiet-ke-website`, `/bang-gia`, Answer First trong 1000 ký tự đầu tiên).
  - Phân tích bản chất kinh tế của Local SEO cho các hộ kinh doanh và tiệm dịch vụ nhỏ: tập trung tệp khách trong bán kính 2-10km có nhu cầu khẩn cấp và tỷ lệ chốt đơn cao nhất, chi phí cố định vừa phải, tạo dựng tài sản số tích lũy lâu dài thay vì đốt tiền theo lượt nhấp rủi ro.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 15: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 18 (Checklist Local SEO 2026: 20 Việc Chủ Tiệm Tự Làm Để Lên Top Tìm Kiếm)
- **Mã sự kiện**: `content: standardize article 18 checklist-local-seo-cho-doanh-nghiep-dia-phuong`
- **Chi tiết**:
  - Tạo thư mục chuẩn tại `content/articles/checklist-local-seo-cho-doanh-nghiep-dia-phuong/`.
  - Biên soạn `draft.md` (2.694 words, nằm chuẩn xác trong khoảng 1800 - 2700 từ, 1 H1, 6 H2, bảng checklist 20 tiêu chuẩn vàng với các cột Hành động - Tần suất - Độ ưu tiên - Tác động thực tế, phân bổ thành 3 chu kỳ: 8 việc làm 1 lần khi khởi tạo, 6 việc hàng tuần nuôi dưỡng tín hiệu thực địa, 6 việc hàng tháng rà soát duy trì thứ hạng; bổ sung khung quyết định tự làm DIY vs thuê dịch vụ chuyên nghiệp, 4 câu hỏi FAQ chuẩn H3).
  - Khai báo mẫu JSON-LD Schema LocalBusiness trực tiếp trong nội dung cho phép chủ cơ sở copy dùng ngay.
  - Tích hợp 4 liên kết nội bộ tự nhiên, chất lượng: trỏ về `/google-maps-local-seo`, `/thiet-ke-website`, `/bang-gia` và bài pillar `/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam`.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
### Mốc 16: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 19 (Google Ads Cho Doanh Nghiệp Nhỏ: Bắt Đầu Từ Đâu Để Không Bị Đốt Tiền Oan?)
- **Mã sự kiện**: `content: standardize article 19 google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau/`.
  - Biên soạn `brief.md`, `outline.md` và `draft.md` (2.691 words, nằm chính xác trong khoảng 1800 - 2700 từ theo yêu cầu; 1 H1, đúng 7 H2, bảng đối chiếu 3 dạng đối sánh từ khóa Rộng vs Cụm từ vs Chính xác với 6 tiêu chí, phân tích 4 điều kiện sẵn sàng trước khi nạp tiền, vạch trần bẫy Broad Match, hướng dẫn chiến lược bắn tỉa từ khóa bán kính 10km, ví dụ tính toán hiệu quả kinh tế thực tế và 5 câu hỏi FAQ chuẩn H3).
  - Tích hợp liên kết nội bộ tự nhiên, chất lượng cao trỏ về `/thiet-ke-website`, `/bang-gia` và `/landing-490k`.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 17: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 16 (Entity SEO Là Gì? Doanh Nghiệp Nhỏ Có Cần Bỏ Tiền Mua Gói Entity Không?)
- **Mã sự kiện**: `content: standardize article 16 entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho/`.
  - Biên soạn `draft.md` chuẩn cấu trúc: 1 H1, đúng 6 H2, bảng đối chiếu 8 tiêu chí giữa Entity tự nhiên chuẩn chỉ vs Dịch vụ Entity spam, mẫu code Schema LocalBusiness JSON-LD hoàn chỉnh, 6 câu hỏi FAQ chuyên sâu chuẩn H3, và các liên kết nội bộ tự nhiên trỏ về `/google-maps-local-seo`, `/thiet-ke-website`, `/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam`, `/kien-thuc/citation-trong-local-seo-la-gi`, `/bang-gia`.
  - Phân tích bản chất kỹ thuật của Entity SEO (Things, not strings trong Sơ đồ tri thức Google Knowledge Graph) cho các hộ kinh doanh và tiệm dịch vụ nhỏ; bóc trần chiêu trò bán gói 300 - 500 backlink rác nước ngoài (5 - 10 triệu) gây nguy cơ bị thuật toán Google SpamBrain phạt nặng.
  - Hướng dẫn lộ trình 4 bước tự xây dựng thực thể chi phí 0đ: Chuẩn hóa bộ dữ liệu NAP, lập 10-15 tài khoản chính thống tại Việt Nam, khai báo pháp lý và mã số thuế, nhúng mã Schema LocalBusiness JSON-LD.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 18: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 22 (Vì sao chạy Google Ads có click nhưng không có khách? Cách xử lý dứt điểm)
- **Mã sự kiện**: `content: standardize article 22 vi-sao-chay-google-ads-co-click-nhung-khong-co-khach`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/vi-sao-chay-google-ads-co-click-nhung-khong-co-khach/`.
  - Biên soạn `draft.md` chuẩn cấu trúc: Frontmatter đầy đủ, TL;DR Answer First, 1 H1, đúng 6 H2, bảng ma trận chẩn đoán 5 triệu chứng - nguyên nhân - tác hại ngân sách - giải pháp xử lý ngay, phân tích chi tiết 5 nguyên nhân chí mạng (Bẫy từ khóa Broad Match dính click tặc/mẹo vặt, Trang đích tải quá chậm trên 4G, Giấu giá bắt khách inbox, Nút gọi/Zalo bị lỗi kỹ thuật hoặc khó bấm trên mobile, Bán kính phân phối sai khu vực địa lý).
  - Hướng dẫn thực chiến từng bước đọc báo cáo Cụm từ tìm kiếm (Search Terms Report) để phát hiện và thanh lọc từ khóa rác.
  - Quy trình 5 bước khắc phục trong 30 phút (dọn sạch Broad Match, nạp danh sách 30+ từ khóa phủ định, khoanh vùng bán kính 5-10km và chọn Sự hiện diện thực tế, kiểm tra tốc độ 4G và sửa nút gọi Zalo, bổ sung bảng giá niêm yết và 3 cam kết).
  - Phần FAQ gồm 4 câu hỏi thực tế chuẩn H3.
  - Tích hợp các liên kết nội bộ tự nhiên trỏ về `/landing-490k`, `/thiet-ke-website`, và bài pillar `/kien-thuc/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau`.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 20: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 23 (Landing Page Chạy Google Ads Nên Thiết Kế Thế Nào Để Khách Bấm Gọi Ngay?)
- **Mã sự kiện**: `content: standardize article 23 landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao/`.
  - Biên soạn `draft.md` chuẩn cấu trúc: Frontmatter đầy đủ, TL;DR Answer First, 1 H1, đúng 6 H2, bảng đối chiếu 6 tiêu chí giữa Trang chủ chung chung vs Landing Page ngách, phân tích chi tiết cấu trúc 6 khối vàng chốt cuộc gọi cho dịch vụ địa phương (Hero Section nhận diện trong 3 giây, Nút gọi nổi 1 chạm ghim đáy màn hình, Bảng giá niêm yết minh bạch, Bằng chứng ảnh thật thợ & xưởng, Cam kết bảo hành bằng văn bản, Bản đồ định vị Google Maps & bán kính phục vụ).
  - Cung cấp checklist kiểm tra 6 khối cấu trúc bằng các hành động cụ thể trên di động.
  - Hướng dẫn 4 kỹ thuật tối ưu tốc độ tải trang dưới 2 giây trên mạng di động 4G (nén ảnh WebP < 100KB, loại bỏ slider & hiệu ứng nặng, cắt giảm script bên thứ ba, dùng CDN máy chủ trong nước).
  - Phần FAQ gồm 5 câu hỏi thực tế chuẩn H3.
  - Tích hợp 3 liên kết nội bộ tự nhiên trỏ về `/landing-490k`, `/thiet-ke-website`, và `/bang-gia`.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Word count: 2.397 từ, H1: 1, H2: 6, Tables: 2, Internal Links: 3).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 21: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 26 (CRM Đơn Giản Cho Doanh Nghiệp Nhỏ Nên Có Những Tính Năng Nào?)
- **Mã sự kiện**: `content: standardize article 26 crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao/`.
  - Biên soạn `draft.md` đạt chuẩn cấu trúc (2.397 từ, nằm chuẩn trong dải 1600 - 2400 từ, 1 H1, đúng 6 H2, bảng đối chiếu 5 tính năng sống còn vs tính năng thừa thãi tốn tiền, bóc tách 5 tính năng hạt nhân, hướng dẫn làm CRM 0đ trên Google Sheet với 3 tab và công thức FILTER, khung quyết định khi nào nên nâng cấp phần mềm, và 4 câu hỏi FAQ chuẩn H3).
  - Tích hợp liên kết nội bộ tự nhiên trỏ về `/thiet-ke-website` và bài pillar `/kien-thuc/crm-la-gi-doanh-nghiep-nho-co-can-crm-khong`.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách ngôn ngữ thực tế cho hộ kinh doanh.
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
### Mốc 22: Chuẩn Hóa & Hoàn Thiện Bài Viết ID 29 (Content marketing cho doanh nghiệp địa phương: Bắt đầu từ đâu mà không cần viết văn hoa?)
- **Mã sự kiện**: `content: standardize article 29 content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau`
- **Chi tiết**:
  - Tạo cấu trúc thư mục chuẩn tại `content/articles/content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau/`.
  - Biên soạn `draft.md` đạt chuẩn cấu trúc (2.390 từ, nằm trọn trong dải 1600 - 2400 từ, 1 H1, đúng 6 H2, bảng lịch nội dung 4 tuần thực chiến mỗi tuần 2 bài 10 phút, 4 nhóm chủ đề khách tin nhất, 3 nguyên tắc cấm kỵ trong content địa phương, 3 kênh phân phối bài viết, và 6 câu hỏi FAQ chuẩn H3).
  - Tích hợp các liên kết nội bộ tự nhiên trỏ về `/thiet-ke-website`, `/google-maps-local-seo`, và `/kien-thuc/website-doanh-nghiep-la-gi`.
  - Tuân thủ 100% quy chuẩn chống AI slop, quy chuẩn GEO và phong cách "bác thợ hiểu được".
  - Chạy `validate-content.cjs` đạt điểm tuyệt đối **100/100** (Pass Quality Gate).
  - Chạy `markdown-to-cms.cjs` sinh tự động `article.json` với 6 mục FAQ được bóc tách chuẩn xác và đồng bộ an toàn vào `content/seeds/drafts_30_articles.json` với trạng thái draft.

### Mốc 23: Chuẩn Hóa Hệ Thống Typography & Editorial Prose System Cho Nội Dung Bài Viết
- **Mã sự kiện**: `feat(typography): standardize article body prose system and ArticleBody component`
- **Chi tiết**:
  - Chuẩn hóa component `src/components/article/ArticleBody.tsx` đáp ứng 100% tiêu chuẩn thiết kế:
    - Container `.article-body` và `.article-rendered-content`: `max-width: 760px`, `margin-inline: auto` (tỷ lệ chuẩn vàng 65-75 ký tự/dòng chống mỏi mắt).
    - Body text: `font-size: clamp(1.0625rem, 1.4vw, 1.125rem)` (17-18px), `line-height: 1.8`, màu chữ `#1e293b`.
    - Paragraph spacing: `margin-bottom: 1.4em`, `text-wrap: pretty`.
    - Heading 2: `font-size: clamp(1.5rem, 2.5vw, 1.75rem)` (24-28px), `font-weight: 750`, `margin-top: 2.5rem`, `margin-bottom: 1rem`, `border-bottom: 1px solid #f1f5f9` tinh tế, `scroll-margin-top: 85px` chống che khuất khi nhảy từ TOC.
    - Heading 3: `font-size: clamp(1.25rem, 1.8vw, 1.35rem)` (20-22px), `font-weight: 700`, `margin-top: 1.8rem`, `margin-bottom: 0.75rem`.
    - Lists: `padding-left: 1.4rem`, `li margin-bottom: 0.5rem`, `line-height: 1.75`. Hỗ trợ cả inline li lẫn `.checklist-item` với checkbox màu thương hiệu `#0d7647`.
    - Links: màu `#0d7647`, gạch chân cách chữ `underline-offset: 3px`, hover `#095935`.
    - Strong: giữ độ đậm trang nhã `font-weight: 650`, không lạm dụng đè nặng mắt độc giả.
    - Blockquote: phong cách editorial trang nhã (`border-left: 3px solid #0d7647`, nền `#f8fafc`, `padding: 1rem 1.25rem`, bo góc phải `0 8px 8px 0`).
    - Tables: bọc container có `overflow-x: auto`, `min-width: 580px`, header xám nhẹ `#f8fafc` chữ `#0f172a`, viền `#e2e8f0`, responsive trên mobile chống vỡ layout.
  - Tự động chuẩn hóa nội dung bài viết trong `ArticleBody`: lọc bỏ blockquote TL;DR đầu bài nếu đã có Hero Summary box tránh trùng lặp; chuyển đổi ký tự `<p>---</p>` thành divider `<hr />` thanh lịch.
  - Tích hợp và đồng bộ quy tắc Typography vào `src/styles/globals.css` làm SSOT toàn cục cho các class `.article-body`, `.article-rendered-content`, `.article-rendered-body`.
  - Kiểm thử TypeScript và build Vite pass 100% không lỗi.

### Mốc 24: Chuẩn Hóa Hệ Thống Layout Container Thống Nhất Trang /kien-thuc
- **Mã sự kiện**: `fix(layout): unify knowledge page content container to 1440px max-width`
- **Chi tiết**:
  - Audit và loại bỏ toàn bộ cấu trúc wrapper lồng nhau (nested 860px/620px wrapper) gây hiện tượng "2 lớp container" và lệch trục giữa Header website, Breadcrumbs, Search area, Filter bar và Article Grid.
  - Chuẩn hóa SSOT cho toàn bộ trang `/kien-thuc` với hệ thống content container duy nhất `.knowledge-container` (`max-width: 1440px; margin-inline: auto; padding-inline: 32px;` trên desktop; `padding-inline: 16px` trên mobile <= 768px).
  - Dóng thẳng hàng 100% các thành phần: Breadcrumbs, Search Toolbar, Quick Metrics Stats, Topic Filters Bar, Dòng thông tin bài viết ("Hiển thị 30 bài viết"), Article Grid 3-4 cột và Bottom Conversion Banner.
  - Giữ nguyên 100% Article Card UI và logic filter/search.
  - Kiểm thử TypeScript và visual verification bằng Playwright/agent-browser pass 100% không overflow (`hasOverflow: false`).

---

### Mốc 25: Audit & Chuẩn Hóa Responsive Toàn Diện Cho Laptop Windows Scale 125%
- **Mã sự kiện**: `fix(responsive): optimize site layout across 6 viewports for windows 125% display scaling`
- **Chi tiết**:
  - Audit ma trận 6 viewports chuẩn laptop Windows 125% (`1280x720`, `1280x800`, `1366x768`, `1440x900`, `1536x864`, `1600x900`) trên 4 routes trọng yếu (`/`, `/geo`, `/kien-thuc`, `/kien-thuc/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho`).
  - **Header Refactor**:
    - Chuẩn hóa container về `max-width: 1440px`, padding fluid `clamp(16px, 2vw, 32px)`, height `clamp(68px, 6vw, 82px)`.
    - Xử lý Hotline: bọc text vào `.phone-text`, tự động ẩn text khi màn hình `<= 1320px` để chuyển thành icon button tròn 38px, ẩn hoàn toàn khi `<= 1100px`.
    - Điều chỉnh nav links gap `clamp(10px, 1.2vw, 22px)` và CTA padding `clamp(9px, 1vw, 12px) clamp(12px, 1.2vw, 18px)`.
    - Kết quả: Triệt tiêu hoàn toàn lỗi tràn nút CTA ra ngoài mép header (từ tràn +56px thành lề trong an toàn +0px đến +32px).
  - **Homepage Sections**:
    - `.hero`: Cân đối `.hero-copy` (max-width 640px) và `.hero-art` (`clamp(38%, 44vw, 50%)`), mask gradient mới -> triệt tiêu hoàn toàn overlap 261px tại 1280px.
    - `.values`: Đổi sang responsive grid `repeat(auto-fit, minmax(220px, 1fr))`, bỏ divider cứng cố định vị trí.
    - `.service-card h3`: Bỏ `white-space: nowrap`, chuyển sang `text-wrap: pretty; min-height: 2.7em` -> hết tràn ngang 100%. Responsive grid 5 cột tại >= 1320px, 3-4 cột tại 1080px-1319px.
    - `.story-card`: Bỏ fixed `height: 130px`, chuyển sang `min-height: 110px; height: auto;` -> hết tràn dọc và clipping text 100%. Grid 2 cột rộng rãi ở 900px-1320px.
    - `.contact`: Bỏ cột rác 89px thừa thãi, tái cấu trúc layout 2 cột `1.1fr 1fr` cân đối.
  - **Footer Refactor**:
    - Chuẩn hóa container `max-width: 1440px`, padding fluid, bỏ `padding-left: 12%` thừa, responsive 2 cột khi `<= 1100px`.
  - **Container SSOT**:
    - Đồng bộ hóa các token `--container-max: 1440px` và `--space-container-px: clamp(1rem, 2.5vw, 2rem)` trên toàn bộ hệ thống (`tokens.css`, `globals.css`, `reference-landing.css`, `geo-landing.css`).
  - **Kết quả nghiệm thu tự động**:
    - Chạy script kiểm thử Playwright/agent-browser quét qua toàn bộ 24 test cases (6 viewports x 4 routes) đạt **24/24 PASS (100%)**.
    - Build test `tsc && vite build` hoàn thành 100% không lỗi.

---

## Trạng Thái Hệ Thống Hiện Tại (Current System State)
- **Local D1 Database**: Đã chạy đầy đủ 4 migrations (`0001`, `0002`, `0003`, `0004`), 30 bài viết, 3 mẫu CTA chuyển đổi, 7 chuyên mục.
- **Production Build**: Pass 100% (`tsc && vite build && node scripts/generate-static-routes.js` hoàn tất không lỗi).
- **Responsive Matrix 125% Scaling**: Đạt 100% chuẩn trên toàn bộ các kích thước màn hình laptop Windows 13" - 15.6" (`1280x720`, `1280x800`, `1366x768`, `1440x900`, `1536x864`, `1600x900`).
- **Trang Kiến Thức (/kien-thuc)**: Layout container 1440px thống nhất hoàn hảo, dóng thẳng hàng toàn bộ khối nội dung từ trên xuống dưới.
- **Typography & Prose**: Hệ thống Typography bài viết chuẩn mực đã hoàn thiện và kết nối đồng bộ giữa ArticleDetailPage, TableOfContents và ArticleBody.
- **Giao diện Quản trị & Độc giả**: Light mode hoàn chỉnh, màu nhận diện `#0d7647`, tuyệt đối không dùng glassmorphism, responsive mượt mà trên laptop 14" 125% scaling.
- **Hệ thống API**: 100% endpoints backend trên Hono/Cloudflare Pages Functions hoạt động ổn định với thời gian phản hồi < 50ms.

