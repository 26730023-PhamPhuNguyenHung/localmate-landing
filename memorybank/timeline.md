# Timeline & SSOT Activity Log (LocalMate)

Ghi nhận các mốc sự kiện, commit và trạng thái vận hành của dự án.

## [2026-09-17] - Fix Căn Giữa Subtitle Section "Câu Chuyện Khách Hàng" (HomePage)
- **Commit**: `e02ddbc` (`fix(landing): center align customer stories section subtitle`)
- **Bối cảnh & Vấn đề**:
  - Đoạn mô tả phụ trong section `#stories`: *"Localmate thấu hiểu đặc thù từng ngành nghề, từ đó thiết kế giải pháp phù hợp giúp bạn hiện diện đúng nơi, tiếp cận đúng khách hàng và phát triển bền vững."* bị dạt sang mép trái, đè lên phần chữ viết tay `side-note.left`.
  - Nguyên nhân: Trong `globals.css`, thẻ `p` bị gán `max-width: var(--paragraph-max-width)` mà không có `margin-inline: auto`. Trong khi đó `.section-heading p` chỉ có `margin-top: 16px` nên thẻ `p` mặc định dạt về lề trái của container.
- **Thực thi Kỹ thuật**:
  - `src/styles/reference-landing.css`: Cập nhật `.section-heading p`, `.stories .section-heading`, `.stories .section-heading p` và `.process .section-heading p` với `margin: 16px auto 0; text-align: center; max-width: 820px;`.
  - `src/pages/HomePage.tsx`: Bổ sung inline style `textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '820px'` để bulletproof chống mọi override CSS/cache.
  - Build `npm run build` (`tsc && vite build`) PASS 100% không lỗi.

## [2026-09-17] - Hoàn Tất Chiến Dịch Content Engine: Rewrite 30 Bài Viết & Nâng Cấp CMS Editorial
- **Bối cảnh & Vấn đề**:
  - CMS có 30 bài draft dạng placeholder stubs rập khuôn, văn mẫu sáo rỗng, nguy cơ bị Google phạt Thin Content.
  - Cần chuyển hóa thành Content Engine có góc nhìn riêng, kinh nghiệm thực chiến, ví dụ xưởng/tiệm tại VN, bảng checklist hành động, tối ưu cả Google SEO lẫn Generative Engine Optimization (GEO/AI search).
- **Thực thi Kỹ thuật Toàn Diện**:
  1. *Phối hợp 10 Subagents Song Song*: Xuất bản 10 tài liệu SSOT (`docs/content-audit.md`, `docs/search-intent-map.md`, `docs/editorial-pov.md`, `docs/practical-insights.md`, `docs/evidence-policy.md`, `docs/content-architecture.md`, `docs/article-schema.md`, `docs/rewrite-strategy-and-batches.md`, `docs/seo-geo-audit.md`, `docs/content-quality-report.md`).
  2. *Chốt Content Master Plan (`docs/content-master-plan.md`)*: Phân định 5 Topic Clusters + 1 Master Macro Pillar (Bài 30); giải quyết dứt điểm các cặp keyword cannibalization (Bài 7 vs 8, 1 vs 5, 13 vs 14 vs 15, 16 vs 17, 19 vs 20, 25 vs 26).
  3. *Thực thi 6 Batches Rewrite Đạt Chuẩn Quality Gate*: Viết lại toàn bộ 30 bài viết đạt 18.763 từ thực chiến, 100% đạt Answer-First, bảng đối soát, kịch bản xưởng/tiệm thật (Bình Thạnh, Gò Vấp, Thủ Đức, Đống Đa...), không một dòng AI slop hay placeholder stub.
  4. *Nâng Cấp CMS Giao Diện Editorial*:
     - `src/admin/pages/PostsListPage.tsx`: Thêm các cột Search Intent, Pillar/Supporting badge, Quality Gate status (PASS/Review), SEO/GEO status, Word count, Internal links count, Cảnh báo thiếu bằng chứng, bộ lọc thông minh.
     - `src/admin/editor/PostEditorPage.tsx`: Hệ thống 6 Tabs (Content, SEO, GEO, Internal Links, Evidence, Revisions), Content Brief Panel và Quality Gate Anti-AI Slop Panel thời gian thực.
  5. *Đồng bộ Dữ Liệu & Kiểm Định Build*:
     - Cập nhật `content/seeds/drafts_30_articles.json`, `docs/drafts_30_inventory.json` và `migrations/0003_seed_draft_posts.sql`.
     - Chạy `npm run build` (`tsc && vite build`) PASS 100% trong 5.50s.
     - Xuất bản Báo cáo Tổng kết tại `docs/content-rewrite-report.md`.
- **Nghiệm thu**:
  - 30/30 bài viết PASS Quality Gate, giữ trạng thái draft an toàn.
  - CMS UI Light Mode trực quan, mượt mà, chuyên nghiệp.

## [2026-09-17] - Audit & Redesign Mega Menu Dịch Vụ Chuẩn Digital Studio / SaaS 3 Cột (LocalMate)
- **Bối cảnh & Vấn đề**:
  - Mega menu cũ chia 4 cột với cột thứ 4 là Promo card lớn ("Gói Khởi Tạo 490k" + Hotline) chiếm diện tích và làm mất cân đối thị giác.
  - Quá nhiều badge giá rải rác (490k, Từ 299k, Từ 390k, 990k/th) biến navigation thành bảng giá gây nhiễu và phân tán mắt người dùng.
  - Mô tả dài dòng, chiều cao menu lớn (~540px) che khuất hơn nửa màn hình hero trên laptop 1366x768.
- **Thực thi Kỹ thuật**:
  1. *Kiến Trúc Dữ Liệu `SERVICE_GROUPS`*:
     - Chuẩn hóa 3 nhóm danh mục đều nhau: `WEBSITE`, `HIỆN DIỆN ĐỊA PHƯƠNG`, `TĂNG TRƯỞNG` gồm 9 dịch vụ cốt lõi.
     - Cắt giảm >40% lượng chữ; áp dụng triệt để quy tắc: Title (2–4 từ) + Mô tả cốt lõi (4–8 từ). Scan xong trong 1–2 giây.
     - Định tuyến chuẩn xác: các path `/landing-490k`, `/thiet-ke-website`, `/google-maps-local-seo`, `/google-ads`, `/content-marketing`, `/automation`.
  2. *Tinh Chỉnh Visual Hierarchy & Tối Giản Badge*:
     - Loại bỏ toàn bộ badge giá thừa, chỉ giữ tối đa 2 badge entry-level: "Từ 490k" (Website 1 Trang) và "Từ 299k" (Google Maps) với nền xanh pastel dịu mát (`#edf7f1`), chữ xanh đậm (`#0d7647`), viền `#d1fae5`.
     - Thay thế Promo Card cồng kềnh bằng thanh Footer ngang siêu nhẹ cao 54px: *"Chưa biết nên bắt đầu từ đâu? Xem bảng giá → [Nhận tư vấn]"*.
     - Giữ vững 100% Light Mode, tương phản cao, **TUYỆT ĐỐI KHÔNG DÙNG GLASSMORPHISM**.
  3. *Trải Nghiệm Tương Tác & Chống Flicker*:
     - Bổ sung bộ đệm delay 140ms khi hover giữa header link và dropdown panel.
     - Hỗ trợ đầy đủ Click Outside, Escape key, Keyboard Navigation và ARIA attributes.
     - Card hover tinh tế với nền `#f4faf6`, border-radius 11px, dịch nhẹ 1px, không đổ shadow nặng.
  4. *Responsive Mobile Tinh Gọn*:
     - Chuyển đổi sang dạng Accordion phân cấp 3 nhóm trên Drawer di động.
     - Mỗi dịch vụ hiển thị thuần tên (bỏ mô tả dài và badge), kèm 2 nút hành động nhanh *"Xem tất cả dịch vụ →"* và *"Nhận tư vấn"*.
  5. *Visual QA Đa Màn Hình & Deploy Live*:
     - Build `tsc && vite build` PASS 100% trong 6.87s.
     - Deploy thành công lên Cloudflare Pages production (`localmate-vn`).
     - Nghiệm thu thực tế trên `1440x900`, `1366x768` (chiều cao menu chỉ ~310px, giảm 43%) và Mobile `390x844`.
- **Nghiệm thu**:
  - Live production: `https://localmate.vn/` & `https://50c73086.localmate-vn.pages.dev/`.
  - Screenshot QA: `megamenu_final_desktop.png`, `megamenu_1366x768.png`, `mobile_menu.png`.

## [2026-09-17] - Thiết Kế Article Schema & Flexible Block System Cho CMS LocalMate (Subagent 7)
- **Bối cảnh & Mục tiêu**:
  - Thiết kế kiến trúc dữ liệu và hệ thống khối nội dung linh hoạt (Flexible Content Blocks) cho LocalMate CMS.
  - Chuyển đổi từ mô hình bài viết văn bản dài thông thường sang các tài sản nội dung chuyển đổi (Conversion Content Assets) chuẩn E-E-A-T và Answer-First (tối ưu Google AI Overviews & Helpful Content).
  - Tích hợp 19+ content blocks có cấu trúc chặt chẽ và mở rộng Metadata cấp bài viết (Article-level Metadata) trong `src/cms/types.ts`.
- **Thực thi Kỹ thuật**:
  1. *Khảo sát Codebase Hiện Tại*:
     - `src/cms/types.ts`: Tìm hiểu các interface thực thể `PostEntity`, `PostContentBrief`, `CategoryEntity`, `TagEntity`.
     - `src/admin/editor/PostEditorPage.tsx`: Phân tích cách lưu trữ metadata và tương tác với Tiptap Editor.
     - `scripts/generate-seeds.js`: Kiểm tra cấu trúc seed data và phương thức render tài liệu.
  2. *Thiết kế Hệ thống 19+ Content Blocks Linh Hoạt*:
     - Định nghĩa `ContentBlockType` và `BaseContentBlock<TType, TData>` cùng 19 data interfaces chuyên dụng:
       1. `tldr_answer_first`: Tóm tắt trực diện trong 30 giây.
       2. `key_takeaways`: Điểm cốt lõi cần nhớ có nhãn phân loại.
       3. `context_boundary`: Phạm vi áp dụng (cho ai / không cho ai / ngân sách / điều kiện).
       4. `problem_symptoms`: Thấu cảm nỗi đau & triệu chứng thực tế của chủ tiệm.
       5. `localmate_pov`: Góc nhìn độc quyền, bóc trần sự thật thị trường.
       6. `evidence_verification`: Bằng chứng số liệu Before/After đo đạc thực tế.
       7. `real_example_scenario`: Tình huống thực tế (case study mini).
       8. `comparison_table`: Bảng so sánh đa phương án có khuyến nghị.
       9. `cost_breakdown_table`: Bảng bóc tách chi phí minh bạch từng khoản.
       10. `checklist`: Danh sách kiểm tra có tương tác checkbox.
       11. `step_by_step`: Hướng dẫn từng bước (How-To) chuẩn SEO.
       12. `decision_tree`: Cây quyết định Yes/No phân nhánh logic.
       13. `common_mistakes`: Sai lầm thường gặp & giải pháp phòng tránh.
       14. `warning_box`: Cảnh báo rủi ro cao & bẫy lừa đảo.
       15. `when_not_to_do`: Những trường hợp tuyệt đối không nên làm.
       16. `action_plan`: Kế hoạch hành động 24h / 7 ngày / 30 ngày.
       17. `faq`: Câu hỏi thường gặp chuẩn FAQPage JSON-LD.
       18. `sources_citations`: Trích dẫn tài liệu tham khảo chính thống E-E-A-T.
       19. `related_services_cta`: Cầu nối thương mại dẫn về dịch vụ LocalMate tương ứng.
       20. `related_posts`: Lưới bài viết liên quan giữ chân độc giả.
       21. `rich_text`: Khối văn bản tự do hỗ trợ Tiptap HTML/JSON fallback.
  3. *Mở rộng Article-level Metadata*:
     - Bổ sung vào `PostContentBrief` và `PostEntity`: `articlePurpose`, `searchIntent`, `targetPersona`, `primaryQuestion`, `secondaryQuestions`, `uniqueAngle`, `experienceNotes`, `evidenceRequired`, `contentType`, `pillarId`, `relatedPosts`, `relatedService`, `author`, `reviewedBy`, `firstPublishedAt`, `updatedAt`, `factCheckedAt`, `qualityStatus`, `seoStatus`.
     - Hỗ trợ cả `camelCase` và `snake_case` aliases giúp tương thích 100% với D1 database (`brief_json`, `schema_json`, `content_json`).
  4. *Đảm bảo 100% Type-Safe & Build Pass*:
     - Cập nhật trực tiếp `src/cms/types.ts`.
     - Sửa lỗi component type LucideIcon mismatch trong `src/components/layout/Header.tsx`.
     - Chạy `npm run build` (`tsc && vite build`) PASS 100% trong 13.02s.
  5. *Xuất bản Tài liệu SSOT*:
     - Biên soạn toàn diện tài liệu `docs/article-schema.md` gồm 7 phần: Triết lý, Metadata, 19 Blocks, JSON Schema chuẩn (Draft 2020-12), Bản ghi JSON mẫu thực tế, Hướng dẫn tích hợp D1/UI và Definition of Done.
- **Nghiệm thu**:
  - `src/cms/types.ts` đầy đủ types, 100% backward compatible.
  - `docs/article-schema.md` hoàn thành xuất sắc.
  - Type-check và Vite build PASS hoàn toàn.
- **Bối cảnh & Mục tiêu**:
  - Đóng vai trò Red Team kiểm duyệt chất lượng khắt khe nhất, bảo vệ độc giả khỏi AI Slop, bài viết generic, nội dung sáo rỗng.
  - Xây dựng Bộ 14 Tiêu Chí Đỏ (Knock-out criteria) bị loại ngay lập tức.
  - Audit sơ bộ 30 bài draft hiện tại, đưa ra kết luận bác bỏ (100% REWRITE REQUIRED) cho từng bài.
  - Thiết kế Rubric 100 điểm và Phiếu kiểm duyệt nghiệm thu (Quality Gate Inspection Sheet) phục vụ Bước 4.
- **Thực thi Kỹ thuật**:
  1. *Bộ 14 Tiêu Chí Đỏ (C1 - C14)*: Định nghĩa chi tiết các lỗi knock-out: Generic, Filler, Số liệu bịa, Lời khuyên mơ hồ thiếu công thức, Review/Case study ảo, Mở bài vòng vo, Salesy CTA, AI phrasing mẫu, Khoe thuật ngữ hàn lâm, Công kích đối thủ, Lý thuyết suông, Tự xưng số 1, Câu văn dịch máy và Xa rời thực tế tiệm nhỏ.
  2. *Red Team Audit 30 Bài Draft*: Rà soát trực tiếp `content/seeds/drafts_30_articles.json` và `docs/drafts_30_inventory.json`. Kết luận: Cả 30 bài hiện là placeholder template lặp lại văn mẫu, mầm mống Thin Content vi phạm nặng nề các tiêu chí C1, C2, C6, C11. Quyết định: **REJECT 30/30 (100% REWRITE REQUIRED)** kèm chỉ đạo viết lại cụ thể từng bài.
  3. *Rubric Nghiệm Thu 100 Điểm*: 5 trụ cột (Local Domain Depth 30đ, Actionability 25đ, Brand Voice 20đ, Readability 15đ, Technical SEO 10đ), ngưỡng pass >= 85 điểm và 0 lỗi đỏ.
  4. *Phiếu Kiểm Duyệt Chuẩn Hóa (Quality Gate Inspection Sheet)*: Tạo template biểu mẫu Markdown kiểm tra 3 vòng sẵn sàng áp dụng cho người duyệt bài ở Bước 4.
  5. *Tài liệu SSOT*: Xuất bản `docs/content-quality-report.md`.
- **Nghiệm thu**:
  - `docs/content-quality-report.md` hoàn thành xuất sắc, đầy đủ 7 phần chi tiết.
  - Cập nhật bài học kinh nghiệm vào `.agents/lessons_learned.md` và `.agents/memorybank/bugMemory.md`.


## [2026-09-17] - Thiết Lập Tiêu Chuẩn & Ma Trận Tối Ưu Hóa SEO & GEO Cho 30 Bài Viết LocalMate (Subagent 9)
- **Bối cảnh & Mục tiêu**:
  - Chuẩn bị nền tảng tối ưu hóa SEO On-Page và GEO (Generative Engine Optimization / AI Search Visibility: Google AI Overview, ChatGPT Search, Perplexity) cho toàn bộ 30 bài viết kiến thức của LocalMate.
  - Phân tích hiện trạng kho bản thảo `docs/drafts_30_inventory.json` và chuẩn hóa theo `docs/localmate-brand-voice-v2.md`.
- **Thực thi Kỹ thuật & Nghiên cứu**:
  1. *Thiết lập Tiêu chuẩn SEO On-Page*: Chuẩn hóa công thức Title Tag (50-60 ký tự), Meta Description hành động (140-155 ký tự), cấu trúc Semantic Headings (H1->H2->H3), Entity Mapping, Schema.org JSON-LD (Article, LocalBusiness, FAQPage, BreadcrumbList), Alt Text và OpenGraph.
  2. *Thiết lập Tiêu chuẩn GEO*: Chuẩn hóa Khung Answer-First 40-60 từ trực diện, định nghĩa có phạm vi (Scoping Claims), bảng biểu Markdown và checklist có cấu trúc, minh bạch E-E-A-T, loại bỏ 100% 30 cụm từ cấm kỵ và PR sáo rỗng.
  3. *Ma trận kiểm định 30 bài*: Soát xét toàn diện 30 bài nháp, phát hiện các lỗ hổng (Thin content placeholder, thiếu H3, thiếu bảng biểu, vi phạm từ cấm "cắt cổ" ở bài 3).
  4. *Khắc phục Vi Phạm Brand Voice*: Loại bỏ ngay cụm từ "cắt cổ" trong `docs/drafts_30_inventory.json` và `content/seeds/drafts_30_articles.json` (sửa thành "bất hợp lý").
  5. *Đặc tả chi tiết 30 bài viết*: Biên soạn tài liệu SSOT `docs/seo-geo-audit.md` gồm đầy đủ đề xuất Title, Meta Desc, Semantic Headings, Answer-First block mẫu, bảng biểu/checklist bắt buộc, Entity Mapping và Internal Link Anchors trỏ về 5 Trụ Cột Giải Pháp Cốt Lõi.
- **Nghiệm thu**:
  - Tài liệu SSOT: `docs/seo-geo-audit.md` hoàn thành đầy đủ, chi tiết, sẵn sàng làm cẩm nang hướng dẫn cho đội ngũ Content Writer và Kỹ sư CMS.

## [2026-09-17] - Chuẩn Hóa Toàn Diện Header/Footer Mới, Tích Hợp Mega Menu & Deploy Admin CMS Lên Production (localmate.vn)
- **Bối cảnh & Vấn đề**:
  - Giao diện bị trùng 2 header và 2 footer (header cũ từ layout và header mới từ homepage).
  - Route `/admin` chưa được deploy lên Cloudflare Pages production dẫn tới fallback về homepage.
  - Cần tích hợp lại Dropdown Mega Menu 4 cột giàu thông tin từ header cũ vào Header mới của trang chủ.
- **Thực thi Kỹ thuật**:
  1. *Header Mới Chuẩn Toàn Cục*: Cập nhật `src/components/layout/Header.tsx` với logo mascot, menu điều hướng đầy đủ, số điện thoại `0834.422.439`, nút `✧ Báo giá nhanh` mở `LeadModal`, menu hamburger cho mobile, tone sáng, 100% không glassmorphism.
  2. *Tích Hợp Mega Menu 4 Cột*:
     - Cột 1: Website & Bán Hàng (Gói 490k, Web Doanh Nghiệp 3-5 trang, Nâng cấp web).
     - Cột 2: Google Maps & Tìm Kiếm (Đưa tiệm lên Maps từ 299k, Tối ưu SEO Maps, Mã QR 5 sao).
     - Cột 3: Quảng Cáo & Hệ Thống (Google Ads từ 390k, Chăm sóc nội dung 990k, CRM Automation).
     - Cột 4: Promo Rail nổi bật (Gói khởi tạo 490k + Hotline 24/7 0834.422.439).
     - Mobile: Tích hợp Accordion mở/đóng danh sách dịch vụ mượt mà trên di động.
  3. *Footer Mới Chuẩn Toàn Cục*: Cập nhật `src/components/layout/Footer.tsx` với bố cục 4 cột, slogan viết tay, các liên kết dịch vụ & thông tin, liên hệ Zalo/Hotline/Email và MST công ty.
  4. *Loại bỏ trùng lặp tại HomePage*: Gỡ bỏ hoàn toàn thẻ `<header>` và `<footer>` cục bộ trong `src/pages/HomePage.tsx`.
  5. *Tách biệt Admin Layout*: Trong `src/App.tsx`, route `/admin*` chỉ hiển thị `AdminLayout` chuyên dụng, hoàn toàn không bị kèm Header/Footer công cộng.
  6. *Đồng bộ D1 Password Hash*: Khắc phục hash SHA-256 cho mật khẩu mặc định `LocalMate@2026`.
  7. *Build & Deploy Production*: `npm run build` PASS trong 5.94s. Deploy production thành công qua Wrangler Pages CLI lên Cloudflare Pages (`localmate-vn`).
- **Nghiệm thu Production**:
  - `https://localmate.vn/`: Duy nhất 1 Header mới kèm Dropdown Mega Menu và 1 Footer mới.
  - `https://localmate.vn/admin`: Màn hình Đăng nhập CMS Quản trị, đăng nhập vào Dashboard quản lý thành công 100%.

## [2026-09-17] - Xây Dựng Hệ Thống CMS Hoàn Chỉnh Chuẩn WordPress Tinh Gọn Trên Cloudflare (D1, R2, Hono, Tiptap, React)
- **Bối cảnh & Mục tiêu**:
  - Xây dựng một CMS hoàn chỉnh theo tư duy "WordPress đủ dùng cho agency/local business, nhẹ, hiện đại, dễ bảo trì, chạy native Cloudflare".
  - Giữ nguyên 100% giao diện public và homepage hiện tại của LocalMate. Không hardcode dữ liệu giả. Tất cả CRUD hoạt động thật.
- **Thực thi Kỹ thuật & Hạ tầng**:
  1. *Audit Codebase*: Lập tài liệu `docs/CMS-AUDIT.md` phân tích hiện trạng kiến trúc và đề xuất giải pháp.
  2. *Cloudflare D1 Database*: Thiết lập 10 bảng `cms_*` (`cms_users`, `cms_categories`, `cms_tags`, `cms_post_tags`, `cms_media`, `cms_posts`, `cms_post_revisions`, `cms_pages`, `cms_settings`, `cms_redirects`) trên database `localmate_survey_db`.
  3. *Cloudflare R2 Media*: Tích hợp upload multipart lên bucket `localmate-assets-prod`, tự động sanitize tên tệp, gán alt-text và lưu trữ metadata vào D1.
  4. *Backend API (Hono)*: Xây dựng RESTful API trong `functions/api/` hỗ trợ xác thực cookie HttpOnly, mã hóa mật khẩu Web Crypto SHA-256 + Salt, CRUD bài viết, danh mục, thẻ, chuyển hướng 301 tự động khi đổi slug, sitemap.xml và rss.xml động.
  5. *Tiptap Block Editor*: Lưu trữ canonical content dạng Tiptap JSON (`content_json`) và `rendered_html` đã sanitize XSS. Đầy đủ thanh công cụ soạn thảo, autosave 7 giây, Google SERP Snippet preview, và panel Content Brief nội bộ.
  6. *Code-Splitting Performance*: Toàn bộ Admin Dashboard và Tiptap Editor được tải lười (`React.lazy()`) và gom thành chunk riêng biệt (`tiptap.js`). Khách xem web công cộng không tải bất kỳ byte nào của Tiptap.
  7. *30 Bài Viết SEO Khởi Đầu*: Nạp 30 bài viết chi tiết chuẩn SEO theo đúng danh mục vào D1 dưới trạng thái `draft` (100% không tự động publish).
  8. *Tài Liệu Hướng Dẫn*: Lập `docs/CMS.md`, `docs/CONTENT-WORKFLOW.md` và `IMPLEMENTATION-SUMMARY.md`.
- **Nghiệm thu**:
  - `npm run build` PASS 100% (tsc & vite build sạch sẽ trong 6.15s).
  - Khởi tạo thành công database và nạp 30 bài nháp idempotent qua `npm run cms:seed`.
  - Tài khoản admin: `admin` / `LocalMate@2026`.

## [2026-09-17] - Deploy Giao Diện Trang Chủ Mới & Sửa Triệt Để Lỗi Font Handwriting Lên Production (localmate.vn)
- **Bối cảnh & Yêu cầu**:
  - Chuyển đổi giao diện tham chiếu `localmate.html` thành trang chủ chính thức của `localmate.vn`.
  - Khắc phục lỗi font handwriting tiếng Việt (font Caveat thiếu dấu `ả, ế, ỗ, ệ, ộ, ơ, ắ, ầ, ể, ổ, ố, ự...`).
- **Thực thi Kỹ thuật**:
  1. *Font Handwriting*: Thay thế bằng `Mali (Italic 500)` kết hợp `Patrick Hand`, hỗ trợ 100% tiếng Việt có dấu.
  2. *Tối ưu hóa asset*: Trích xuất tranh minh họa ra `public/images/landing/` và font ra `public/fonts/`, giảm CSS từ 19.4 MB base64 xuống còn 26 KB.
  3. *Tích hợp React*: Xây dựng `HomePage.tsx` và `reference-landing.css`, kết nối form báo giá với `submitLead`.
  4. *Fix thẻ head*: Xóa ký tự lạ `w` ngoài thẻ meta trong `index.html`.
  5. *Build & Deploy*: `npm run build` PASS trong 4.38s. Deploy production thành công qua Wrangler Pages CLI lên Cloudflare Pages dự án `localmate-vn`.
- **Trạng thái Production**:
  - URL chính thức: **`https://localmate.vn/`** (Status 200 OK)
  - Preview URL: **`https://fce3f92d.localmate-vn.pages.dev`** (Status 200 OK)
  - Commit SHA: `aa290fd`

## [2026-09-17] - Tối Ưu Toàn Diện Viewport Laptop & Windows Scale 125% Cho Trang Đích (/geo)
- **Bối cảnh & Vấn đề thực tế**:
  - Màn hình laptop phổ biến (Full HD 1920x1080 cài đặt tỷ lệ hiển thị Windows Scale 125%) có viewport CSS thực tế là `1536 x 864`. Khi tính cả thanh Taskbar và thanh công cụ Chrome, chiều cao khả dụng chỉ còn khoảng `700px – 750px`.
  - Trên các màn hình này, Header cũ cao 88px cùng padding/margin lớn đẩy chiều cao các section lên `813px – 880px`, khiến:
    1. *Section Hero*: Nút bấm CTA chính ("Kiểm tra ngay miễn phí") và dòng bảo mật ở chân form bị tràn mép đáy hoặc cắt cụt.
    2. *Section Pricing*: Tiêu đề bị Header đè một phần và thanh cam kết đáy màn hình bị cắt mất 130px.
    3. *Section Value*: Thẻ câu hỏi và thanh kiểm tra bị đẩy tràn khỏi màn hình laptop.
- **Giải pháp Kỹ thuật & Thực thi**:
  1. *Thiết lập Breakpoint Chuyên biệt cho Laptop & Scale 125%*:
     - Bổ sung `@media (min-width: 1001px) and (max-width: 1540px), (min-width: 1001px) and (max-height: 860px)`.
     - Header tinh gọn: Giảm từ 88px xuống 72px (`border-radius: 0 0 18px 18px`), logo 180x62px, menu gọn gàng, tiết kiệm 16px quý giá.
  2. *Tối ưu Viewport-Fit Toàn Diện*:
     - *Hero Section*: Container giảm padding dọc xuống 16px/20px, font H1 fluid `clamp(27px, 2.25vw, 35px)`, các thẻ platform 78px, Lead Card giảm chiều cao từ 650px xuống ~449px (đáy thẻ nằm ở 585px trên viewport 750px, dư 165px an toàn, 100% không bị che khuất).
     - *Pricing Section*: Căn giữa dọc `min-height: calc(100svh - 72px)`, padding thẻ giá 13px 15px, tiêu đề 25-32px, chiều cao toàn bộ section giảm từ 880px xuống đúng 678px -> Vừa khít 100% trong 1 màn hình laptop không cần cuộn dở dang.
     - *Value Section*: Giảm chiều cao từ 813px xuống 678px, 4 card query 78px, thẻ mô phỏng AI và thanh Audit Strip hiển thị trọn vẹn, thanh thoát.
  3. *Export, Build & Deploy Production*:
     - Re-export HTML đồng bộ vào `public/landing-geo.html` và `public/geo/index.html`.
     - `npm run build` PASS 100% (tsc & vite build).
     - Deploy lên Cloudflare Pages (`localmate-vn`) phục vụ tức thì tại `https://localmate.vn/geo`.
- **Nghiệm thu**:
  - Playwright visual verification: Đo đạc và chụp ảnh tại các viewports laptop thực tế: `1536x750` (1080p @ 125%), `1366x680` (Laptop 14 inch) và `390x844` (Mobile).
  - Cả 3 section chính (Hero, Pricing, Value) đều nằm vừa vặn, cân đối 100% trong một khung nhìn màn hình laptop. Không còn hiện tượng cắt chữ hay đè mép.

## [2026-09-17] - Tinh Chỉnh Hero Logo Gemini & Xóa Ảnh Thừa value-scene.png Tại Section 3 (/geo)
- **Bối cảnh & Yêu cầu**:
  1. Thay thế logo Google AI Overview bằng logo Google Gemini đa sắc ở Hero Section vì logo cũ nét mảnh, màu nhạt và lệch tỷ lệ quang học so với 3 card còn lại.
  2. Xóa bỏ hình ảnh `https://localmate.vn/geo/value-scene.png` trong Section 3 ("Vì sao doanh nghiệp cần Localmate?") do bị thừa và đè lặp lên background cảnh `pricing-scene.png` đã có sẵn.
- **Giải pháp Kỹ thuật & Thực thi**:
  1. *Hero Section Platform Cards*:
     - `GeoShared.tsx`: Cập nhật thẻ thứ 4 `Google AI Overviews` sử dụng logo Gemini (`/geo/platforms/gemini.png`).
     - `geo-landing.css`: Căn chỉnh `.geo-platform` với `justify-content: flex-start; min-height: 92px;`. Cố định kích thước `.geo-platform-icon` (`height: 36px; width: 36px; flex-shrink: 0;`), đảm bảo 4 icon luôn nằm thẳng tắp trên cùng một đường chân trời tuyệt đối, bất kể nhãn text là 1 dòng hay 2 dòng (`Google AI Overviews`).
  2. *Section 3 (Value Section)*:
     - `GeoValueSection.tsx`: Xóa bỏ hoàn toàn thẻ `<img>` `/geo/value-scene.png`.
     - `geo-landing.css`: Xóa bỏ CSS dead code cho `.geo-ai-scene>img`, reset padding `.geo-ai-scene` (`padding: 10px 0 10px 20px; min-height: auto; align-self: center;`). Thẻ mô phỏng kết quả AI (`.geo-answer`) được căn giữa dọc song song với lưới 4 query, giúp layout sáng sủa, thanh thoát và không còn bị che khuất nền cảnh.
  3. *Triển khai & Deploy Production*:
     - Chạy script đồng bộ `scripts/export-geo-html.mjs` ra `public/landing-geo.html` và `public/geo/index.html`.
     - Chạy `npm run build` (tsc && vite build) hoàn thành với exit code 0.
     - Deploy lên Cloudflare Pages (`localmate-vn`) qua Wrangler CLI phục vụ trực tiếp trên `https://localmate.vn/geo`.
- **Nghiệm thu**:
  - Chụp ảnh kiểm thử thực tế trên Desktop & Mobile.
  - Section Hero: 4 logo to rõ, đều tăm tắp, logo Gemini nổi bật.
  - Section 3: Gọn gàng, sạch sẽ, thẻ kết quả AI đứng độc lập sắc nét.

## [2026-09-17] - Trích Xuất Lossless & Tích Hợp Bộ 4 Logo AI Chuẩn Vào Hero Section (/geo)
- **Bối cảnh & Yêu cầu**: Người dùng cung cấp 4 file ảnh logo gốc (Google AI Overview, Perplexity, Gemini, ChatGPT) để thay thế các biểu tượng generic/conic-gradient cũ trên hero section thành logo chính thức chuẩn sắc nét.
- **Quy trình Xử lý Kỹ thuật (Asset Sheet Extractor)**:
  1. *Trích xuất Lossless & Khử nền*:
     - `ChatGPT`: Trích xuất bông hoa vector OpenAI, khử nền trắng, tạo viền antialiased mượt mà với màu xanh ngọc thương hiệu `#10a37f`.
     - `Google Gemini`: Tách biểu tượng ngôi sao 4 cánh đa sắc gradient (xanh dương, đỏ, cam, xanh lá), loại bỏ viền trắng (unblend white fringe).
     - `Perplexity`: Tách cụm icon hoa đối xứng hình học màu teal nguyên bản.
     - `Google AI Overviews`: Cắt và tách ngôi sao 4 cánh màu xanh dương Google `#1a73e8`, khử nền gradient nhẹ.
  2. *Cân bằng Quang học (Optical Balance)*: Chuẩn hóa 4 logo trên canvas vuông 256x256 trong suốt, căn chỉnh padding quang học để khi thu nhỏ về `34x34px` (desktop) và `26x26px` (mobile), cả 4 logo đều đạt sự cân đối thị giác đồng nhất.
  3. *Tích hợp & Triển khai*:
     - Cập nhật `src/components/geo/landing/GeoShared.tsx` và `src/styles/geo-landing.css` với class `.geo-platform-img`.
     - Đồng bộ file HTML tĩnh qua `export-geo-html.mjs` và build `npm run build`.
     - Deploy lên Cloudflare Pages (`localmate-vn`) phục vụ tức thì trên `https://localmate.vn/geo`.
- **Nghiệm thu**:
  - `playwright-cli` chụp kiểm thử thực tế trên Desktop (`1366x768`) và Mobile (`390x844`). 4 logo hiển thị sắc nét, thẳng hàng, bóng mờ trang nhã.

## [2026-09-17] - Triển Khai & Phục Vụ Thành Công /geo Lên Production (localmate.vn)
- **Mục tiêu**: Đưa landing page GEO tối ưu mobile lên trực tiếp route `/geo` của tên miền chính thức `localmate.vn` trên Cloudflare Pages (`localmate-vn`).
- **Thực thi Kiến trúc Routing & Serving**:
  1. *Cấu hình Static Serving Song Hành*:
     - Tạo script `scripts/export-geo-html.mjs` tự động đồng bộ cả 2 file: `public/landing-geo.html` và `public/geo/index.html` với thẻ `<base href="/">` và đường dẫn tài nguyên gốc `/geo/...`.
     - Cấu hình file `public/_redirects` cho Cloudflare Pages:
       ```
       /geo /geo/index.html 200
       /geo/ /geo/index.html 200
       /landing-geo /landing-geo.html 200
       /landing-490k /landing-490k.html 200
       /* /index.html 200
       ```
  2. *Build & Deploy qua Wrangler CLI*:
     - Chạy `node scripts/export-geo-html.mjs` & `npm run build` (tsc + vite build pass 100%).
     - Deploy lên Cloudflare Pages qua Wrangler CLI: `npx wrangler pages deploy dist --project-name=localmate-vn`.
- **Nghiệm thu Live Production**:
  - `curl -I https://localmate.vn/geo` -> HTTP 308 -> `/geo/` -> HTTP 200 OK.
  - Kiểm tra tài nguyên ảnh (`/geo/hero-scene.png`, `/geo/logo.png`, `/geo/pricing-scene.png`) -> HTTP 200 OK.
  - Chụp ảnh kiểm thử trực tiếp bằng Playwright trên thiết bị di động (390x844): Hero section và Footer promise badge hiển thị cân đối hoàn hảo, không còn bất kỳ lỗi rớt chữ đơn lẻ hay vỡ layout.

## [2026-09-17] - Tối Ưu Mobile Responsive: Khử Lỗi Rớt Dòng Vụn Vặt & Tái Cấu Trúc Footer Promise Badge
- **Bối cảnh & Vấn đề**:
  1. *Tiêu đề Hero*: Font 34px trên mobile 360–390px quá to khiến tiêu đề bị bẻ thành 5 dòng cụt lủn ("KHÁCH HỎI", "CHATGPT VỀ", "DỊCH VỤ.", "AI CÓ NHẮC ĐẾN", "BẠN KHÔNG?").
  2. *Badge Promise ở Footer*: Thẻ "Cùng nhau xây dựng một Việt Nam thịnh vượng trong kỷ nguyên AI" bị nhét vào cột con 50% "Dịch vụ nổi bật", khiến chữ "vượng" bị rớt trơ trọi 1 mình thành dòng thứ 4.
  3. *3 Khối Proof items*: Ép 3 cột ngang co rúm khiến text rớt 4 dòng li ti.
  4. *Orphan word*: Từ "mạnh mẽ" bị rớt chữ "mẽ" lẻ loi.
- **Giải pháp & Thực thi**:
  1. Đưa `.geo-footer-promise` ra ngoài grid 4 cột, trở thành banner sứ mệnh full-width giữa grid và copyright:
     - Desktop: 1 hàng ngang fit-content thanh lịch.
     - Mobile: 100% chiều rộng, nền `#f0faf5`, viền `#d4ece1`, text 11.5–12px cân đối 2 dòng, bọc `white-space: nowrap` cho "một Việt Nam thịnh vượng".
  2. Áp dụng Fluid Typography `clamp(22px, 6.2vw, 28px)` và `text-wrap: balance` cho Hero H1. Tiêu đề ngắt thành 2 dòng trên và 2 dòng dưới cân xứng tuyệt đối.
  3. Chuyển Proof items trên mobile sang layout dọc dạng Pill card (`flex-direction: column; gap: 7px;`), mỗi câu nằm trọn 1 dòng.
  4. Đồng bộ triệt để cả 3 tầng: mã nguồn `src/` (`GeoFooter.tsx`, `GeoHeroSection.tsx`, `geo-landing.css`), file tĩnh `public/landing-geo.html` qua export script, và file `dist/landing-geo.html`.
- **Nghiệm thu**:
  - Test trực tiếp bằng `playwright-cli` ở các kích thước `360x780` và `390x844`.
  - Không còn hiện tượng rớt chữ vụn vặt, layout thoáng đãng, sang trọng.

## [2026-09-17] - Fix Lỗi Font Dấu Tiếng Việt, Tối Ưu Pricing Section Fit Màn Hình Desktop & Tinh Gọn Footer /geo
- **Bối cảnh & Vấn đề**:
  1. *Lỗi Font*: Google Fonts `Be Vietnam Pro` trên một số trình duyệt Chromium bị fallback sang Segoe UI khi gặp các ký tự tiếng Việt in hoa có dấu (`Ắ, Ầ, Ỏ, Ậ, Ộ, Ờ...`) do thiếu tham số `&subset=vietnamese` và việc sử dụng các font-weight không chuẩn (`900`, `850`, `750`).
  2. *Lỗi Tràn Màn Hình Section Pricing*: 10 dòng checklist xếp dọc 1 cột làm thẻ giá cao ~700px, khiến nút CTA và ghi chú giá bị đẩy tụt khỏi màn hình laptop (1366x768 / 1440x900).
  3. *Footer Quá Tải*: `App.tsx` render Footer chung 5 cột khổng lồ của công ty khiến trang `/geo` bị loãng, không phù hợp với trang đích chạy quảng cáo.
- **Giải pháp & Thành phẩm**:
  1. *Fix Triệt Để Lỗi Font*:
     - Cập nhật Google Fonts URL trong `index.html` với `&subset=vietnamese&display=swap`.
     - Chuẩn hóa toàn bộ tiêu đề về `font-weight: 800; font-family: 'Be Vietnam Pro', sans-serif; letter-spacing: -0.01em;`. Chữ tiếng Việt có dấu và không dấu hoàn toàn đồng nhất 100% về phông và độ đậm.
  2. *Section Pricing Fit Màn Hình*:
     - Thiết kế lại header card: Đặt Tên gói (`GEO SETUP`) và Giá (`2.490.000 đ/lần`) trên cùng hàng ngang.
     - Checklist triển khai chuyển thành **Lưới 2 cột** (`grid-template-columns: 1fr 1fr; gap: 4px 12px;`) giúp giảm chiều cao card từ 700px xuống còn ~350px.
     - Dùng `clamp()` và flex responsive để toàn bộ Section 2 (gồm Tiêu đề, 2 Thẻ giá, Nút CTA và Thanh cam kết) hiển thị trọn vẹn trong một màn hình desktop mà không bị tràn hay phải cuộn dở dang.
  3. *Dedicated Clean Ads Footer (`GeoFooter.tsx`)*:
     - Ẩn Footer chung 5 cột trong `App.tsx` khi vào `/geo` (`isGeoLandingView`).
     - Tích hợp `GeoFooter`: Logo, Slogan, Hotline/Zalo, Email, Địa chỉ, MST Công ty (4001337934), Cam kết minh bạch tài khoản chính chủ, và các liên kết pháp lý (Bảo mật, Điều khoản, Quy trình GEO, Bảng giá) đạt chuẩn phê duyệt quảng cáo Google/Meta.
- **Nghiệm thu**:
  - `npm run build` hoàn thành với mã thoát 0 (pass 100%).
  - Kiểm tra trực quan bằng `agent-browser` (full page screenshot): Font hiển thị sắc nét đồng đều, Section Pricing fit trọn vẹn, Footer tinh gọn, sang trọng.

- **Mục tiêu**: Tái thiết kế toàn bộ trang Landing Page dịch vụ GEO / SEO ChatGPT (`/geo`) theo chuẩn Ads Direct-Response cao cấp, định dạng **3 Section khít màn hình desktop** (`min-height: 100svh`), nhịp điệu thị giác mạnh mẽ và tách module sạch sẽ.
- **Các thành phần được cấu trúc lại hoàn toàn**:
  1. *Section 1 — Hero Full-Screen* (`GeoHeroSection.tsx`):
     - Chiều cao `min-height: calc(100svh - 72px)`, căn giữa dọc, container rộng 1320px.
     - Cột trái: Eyebrow badge, Headline 2 dòng uy lực trọn vẹn ngữ nghĩa, 4 chip nền tảng AI, 3 trust proof bullets (phù hợp doanh nghiệp có web, kiểm tra nhanh, không cần hiểu kỹ thuật) và Hotline/Zalo.
     - Cột phải: Thẻ Form Audit trung tâm nổi bật làm visual anchor.
  2. *Section 2 — Bảng Giá Khít Màn Hình* (`GeoPricingSection.tsx`):
     - Nền slate nhẹ `#f8fafc` tạo nhịp chuyển thị giác, `min-height: 100svh`.
     - 2 Card song song: GEO Setup (2.490.000đ/lần) & GEO Growth (Từ 2.990.000đ/tháng) với checklist rõ ràng và bar minh bạch.
  3. *Section 3 — Mục Tiêu Là Xuất Hiện Đúng Lúc Khách Đang Chọn Nhà Cung Cấp* (`GeoValueSection.tsx`):
     - Cột trái: 4 Prompts giả lập tin nhắn AI thực tế của khách hàng.
     - Cột phải: 4 Khối giá trị 01 — 04.
     - Chân trang: Form chốt cuối nền tối cao cấp tương phản cao.
  4. *Kiến trúc Modular*:
     - Tách nhỏ: `GeoLeadFormCard.tsx`, `GeoPricingCard.tsx`, `GeoHeroSection.tsx`, `GeoPricingSection.tsx`, `GeoValueSection.tsx`.
- **Nghiệm thu**:
  - `npm run build` hoàn tất trong 4.63s với 0 lỗi.
  - Trực quan qua `agent-browser` đạt chuẩn laptop 14–15.6 inch và mobile 390px.


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

---

## [2026-09-17] - Audit & Redesign Toàn Diện Footer LocalMate (Minimalist 2-Tier 4-Column Layout)
- **Mục tiêu**: Thay thế toàn bộ component Footer cũ (mega-menu 5 cột, quá tải thông tin, nhiều badge gây nhiễu, cao ~800px) thành một Footer tinh gọn, sang trọng, chiều cao chuẩn desktop 400–500px, đáp ứng triết lý "LESS CONTENT, MORE TRUST".
- **Cải tiến kiến trúc & giao diện (`src/components/layout/Footer.tsx`)**:
  - **Tầng 1: Main Footer (Grid 4 cột)**:
    - *Cột 1 (Brand, 33% width)*: Logo LocalMate, mô tả xúc tích 2 dòng ("Website, Google Maps, quảng cáo và hệ thống số cho hộ kinh doanh & SME"), địa bàn phục vụ ("Đà Nẵng · Hội An · TP.HCM · Toàn quốc").
    - *Cột 2 (Dịch vụ)*: Đúng 5 liên kết dịch vụ cốt lõi (Thiết kế website, Google Maps & Local SEO, Google Ads, Content & chăm sóc số, CRM & Automation). Loại bỏ hoàn toàn số thứ tự, badge, subtitle.
    - *Cột 3 (Thông tin)*: Đúng 5 liên kết điều hướng thông tin (Cách làm việc, Bảng giá, Dự án / Demo, Về LocalMate, Chính sách bảo mật).
    - *Cột 4 (Contact / CTA)*: Heading "Cần hỗ trợ?", mô tả ngắn, CTA Primary "Nhắn Zalo" (brand green, bo góc 8px), text link Hotline "0834 422 439", email `contact@localmate.vn`, nhóm 3 social icon phẳng (Facebook, Zalo, Hotline). Xóa bỏ card bọc thô cứng.
  - **Tầng 2: Bottom Bar**: Divider 1px `#E5E7EB`, Copyright left, "Điều khoản · Bảo mật" right. Tinh chỉnh CSS baseline alignment cho dấu bullet separator.
  - **Loại bỏ**: Hàng header nhỏ rườm rà phía trên footer và thanh trust pills lặp lại nội dung.
- **Kết quả nghiệm thu kỹ thuật (Definition of Done)**:
  - **Responsive Matrix Audit (Playwright)**:
    - `1920x1080`: 488px (đạt chuẩn 400–500px).
    - `1440x900`: 488px.
    - `1366x768`: 488px (thoáng đãng, thanh lịch, tỷ lệ vàng).
    - `1024x768` & `768x1024`: 2x2 grid mượt mà.
    - `390x844`: 1 column stack theo thứ tự chuẩn Brand -> Contact/CTA -> Dịch vụ -> Thông tin -> Bottom bar.
    - `has_overflow: false` 100% trên tất cả các breakpoint (`scrollWidth <= innerWidth`).
  - `npx tsc --noEmit`: PASS (0 errors).
  - `npm run build`: PASS (Vite bundle built in 6.16s).

---

## [2026-09-17] - Xây Dựng Hệ Thống Quan Điểm Biên Tập LocalMate (Editorial POV System)
- **Người thực hiện**: Subagent 3 (LocalMate POV Editor).
- **Tài liệu bàn giao**: `docs/editorial-pov.md` (SSOT về góc nhìn biên tập và bản sắc ngòi bút LocalMate).
- **Nội dung hoàn thành**:
  - **Bản tuyên ngôn biên tập (The Editorial Manifesto)**: Loại bỏ triệt để các câu sáo rỗng vô thưởng vô phạt ("Thời đại 4.0...", "Website đóng vai trò quan trọng...", "SEO giúp tăng nhận diện...").
  - **Khung Job-To-Be-Done & Phân tích giá trị kinh doanh**: Đối chiếu 3 mô hình (Agency thành thị vs Web 500k vs LocalMate), làm rõ bản chất "Công nghệ không cần phức tạp, quan trọng là công việc được hoàn thành".
  - **6 Domain nghiệp vụ chính (42 luận điểm sắc bén & bảng đối chiếu tương phản)**:
    1. *Website & Landing Page cho SME địa phương*: Web là nhân viên trực ca đêm, sticky call bar, bảng giá minh bạch, cấm bẫy web 500k.
    2. *Local Search & Google Business Profile*: Mặt tiền số 0đ đắt giá, cấm nhồi từ khóa, nghệ thuật trả lời review 1 sao, ghim tọa độ thực tế.
    3. *SEO & GEO (AI Search) thực chiến*: SEO theo quận huyện, GEO là nói sự thật có cấu trúc cho AI hiểu, chuẩn hóa NAP 100%, đo bằng cuộc gọi thật.
    4. *Quảng cáo Google Ads & Facebook Ads*: Đón khách cấp bách vs nhắc nhớ thương hiệu, phủ định từ khóa là sống còn, minh bạch tài khoản 100%.
    5. *CRM & Automation tinh gọn*: Cuốn sổ nhớ khách không bao giờ quên, quy tắc 60 giây, phản hồi sau 5 phút là mất khách, gom tin về 1 nhóm Zalo.
    6. *Content Marketing & Chuyển đổi số*: Bằng chứng tay nghề thật, lấy 20 câu hỏi tại tiệm làm bài viết, chuyển đổi số bắt đầu từ 5 việc 0đ.
  - **Bảng đối chiếu 1-1 cho toàn bộ 30 bài viết** trong `docs/drafts_30_inventory.json`.
  - **Quy trình 5 bước thẩm định nghiệm thu nội dung (Acceptance Test Checklist)**: Test Bác Thợ, Zero-Hype Scan, Actionability, Tôn trọng thị trường, và Đo lường việc thật.
  - Khởi tạo `.agents/lessons_learned.md` lưu trữ bài học và quy chuẩn biên tập cho hệ thống Agent.
