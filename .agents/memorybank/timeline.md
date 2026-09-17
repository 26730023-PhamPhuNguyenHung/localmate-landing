# Timeline SSOT — LocalMate Engineering & Content Engine

Tài liệu này ghi nhận dòng thời gian các mốc cam kết (commits), sự kiện kiến trúc và tình trạng vận hành của hệ thống.

---

## Mốc Sự Kiện & Commits Gần Nhất

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

---

## Trạng Thái Hệ Thống Hiện Tại (Current System State)
- **Local D1 Database**: Đã seed đủ 30 bài viết, trong đó Post 1 là bài viết thực chiến hoàn chỉnh 3.890 từ.
- **Production Build**: Pass 100% (Vite bundle hoàn tất trong 6.76s).
- **Trạng thái bài viết**: Toàn bộ 30 bài vẫn đang ở trạng thái `draft` an toàn.
