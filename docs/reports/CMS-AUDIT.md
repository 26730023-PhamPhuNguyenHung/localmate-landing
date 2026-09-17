# CMS Audit & Architecture Strategy — LocalMate

**Ngày thực hiện:** 17/09/2026  
**Dự án:** LocalMate (localmate.vn)  
**Mục tiêu:** Xây dựng hệ thống CMS hoàn chỉnh, phong cách WordPress tinh gọn, hiện đại, bảo trì cao, native Cloudflare (D1 + R2 + Hono + Tiptap + React).

---

## 1. Current Architecture (Hiện Trạng)

- **Frontend Core:** React 18 (`react`, `react-dom`), TypeScript 5, Vite 5.
- **Routing:** Client-side SPA Router tùy chỉnh (`src/components/layout/Router.tsx`) sử dụng History API (`pushState`, `popstate`), điều hướng nhanh, không phụ thuộc nặng vào thư viện thứ 3.
- **Build System:** `tsc && vite build`, bundle xuất ra thư mục `dist/`.
- **Styling & Design System:** 
  - Vanilla CSS Module / Global CSS Tokens (`src/styles/tokens.css`, `globals.css`, `reference-landing.css`).
  - Tone màu chủ đạo: Primary Green (`#0d7647`), Slate (`#0f172a`), Surface (`#ffffff`, `#f8fafc`).
  - **TUYỆT ĐỐI KHÔNG DÙNG GLASSMORPHISM**, giao diện Light Mode có độ tương phản cao.
- **Knowledge & Article Hub hiện tại:**
  - `src/pages/KnowledgePage.tsx`: Giao diện danh sách bài viết, filter theo pillar và tìm kiếm từ khóa.
  - `src/pages/ArticleDetailPage.tsx`: Giao diện chi tiết bài viết với Breadcrumb, Author card, Summary callout, Table of Contents, Section renderer, FAQ accordion, Contextual CTA, Sidebar liên kết dịch vụ & bài viết liên quan.
  - **Hạn chế lớn:** Toàn bộ bài viết đang hardcode trong file `src/data/articlesData.ts` (chỉ có 1 vài bài viết mẫu), mỗi lần sửa nội dung phải sửa mã nguồn và deploy lại toàn bộ web.
- **SEO & Metadata:**
  - `src/components/seo/SEOHead.tsx`: Đã có sẵn component tiêm Title, Description, Canonical URL, OpenGraph, Twitter Cards, Schema.org (`ProfessionalService`, `Article`, `BreadcrumbList`).
  - Tệp tĩnh: `public/sitemap.xml`, `public/robots.txt`, `public/_redirects`.
- **Hạ tầng & Cloudflare Deployment:**
  - Triển khai trên **Cloudflare Pages** (`localmate-vn`) với rule SPA rewrite trong `public/_redirects` (`/* /index.html 200`).
  - Đã có bucket **Cloudflare R2** `localmate-assets-prod`.
  - Quyền tài khoản Cloudflare qua Wrangler CLI có đủ `d1 (write)`, `pages (write)`, `workers (write)`, `workers_kv (write)`.

---

## 2. Problems & Gaps (Vấn Đề & Khoảng Trống Cần Giải Quyết)

1. **Dữ liệu cứng (Hardcoded Data):** Nội dung bài viết, tác giả, category nằm cứng trong `articlesData.ts`. Chủ doanh nghiệp / Content writer không thể tự đăng, sửa bài hay lên lịch mà không cần lập trình viên can thiệp.
2. **Thiếu Backend & Database:** Hiện tại chưa có database D1 kết nối, chưa có REST API CRUD để xử lý quản trị bài viết.
3. **Chưa có Rich Content Editor:** Không có giao diện soạn thảo trực quan dạng block (Tiptap), không upload được ảnh chèn vào bài.
4. **Không có tính năng Schedule & Draft an toàn:** Mọi nội dung deploy đều là public, không có cơ chế lưu nháp, xem trước (Preview token) hay hẹn giờ đăng bài (Scheduled publishing).
5. **Thiếu Quản lý Redirects 301 tự động:** Khi sửa đổi slug bài viết vì mục đích SEO, URL cũ sẽ bị 404 nếu không có bảng Redirects tự động.
6. **SEO & Sitemap tĩnh:** `sitemap.xml` không tự cập nhật khi có bài viết mới.

---

## 3. Reusable Components (Các Thành Phần Tái Sử Dụng Triệt Để)

- **Giao diện & Layout Public:**
  - Giữ nguyên 100% Header, Footer, MobileFloatingCTA, LeadModal, Breadcrumbs, Container, Button.
  - Tái sử dụng cấu trúc `ArticleDetailPage.tsx` (Sidebar, FAQ, CTA Box, TOC) làm renderer cho bài viết từ CMS.
  - Tái sử dụng `SEOHead.tsx` để tiêm metadata và JSON-LD tự động từ cơ sở dữ liệu CMS.
- **Design Tokens:** Sử dụng toàn bộ CSS variables từ `tokens.css` (`--color-primary`, `--color-text`, `--color-border`, v.v.) cho cả Admin Dashboard để đảm bảo đồng nhất nhận diện thương hiệu LocalMate.
- **Router:** Mở rộng router hiện tại để điều hướng liền mạch các route `/admin/*`, `/preview/*`, `/kien-thuc/*`.

---

## 4. Proposed CMS Architecture (Kiến Trúc CMS Mục Tiêu)

```
┌─────────────────────────────────────────────────────────────────┐
│                       LOCALMATE WEB PLATFORM                    │
├───────────────────────────────┬─────────────────────────────────┤
│        PUBLIC FRONTEND        │         ADMIN DASHBOARD         │
│  - /kien-thuc (Hub bài viết)  │  - /admin (Tổng quan thống kê)  │
│  - /kien-thuc/:slug (Chi tiết)│  - /admin/posts (CRUD, Lọc, Tìm)│
│  - /kien-thuc/chuyen-muc/:slug│  - /admin/posts/new & :id/edit  │
│  - /preview/post/:id?token=...│  - /admin/categories & tags     │
│  - /sitemap.xml & /rss.xml    │  - /admin/media (R2 Uploader)   │
│                               │  - /admin/redirects & settings  │
├───────────────────────────────┴─────────────────────────────────┤
│               API LAYER (Cloudflare Pages Functions / Hono)     │
│  - /api/public/* (Posts, Categories, Search, Sitemap, Feed)     │
│  - /api/admin/* (Auth, Posts CRUD, Media R2, Revisions, Backup) │
│  - Auth: HttpOnly Secure Cookie / Web Crypto PBKDF2 Session     │
├────────────────────────────────┬────────────────────────────────┤
│      DATABASE (Cloudflare D1)  │    OBJECT STORAGE (Cloudflare) │
│  - users, posts, post_revisions│    - Bucket: localmate-assets- │
│  - categories, tags, post_tags │      prod                      │
│  - media, settings, redirects  │    - Tự động tối ưu URL/MIME   │
└────────────────────────────────┴────────────────────────────────┘
```

- **Content Storage:** Canonical content lưu bằng **Tiptap JSON (`content_json`)** + **`rendered_html`** để hiển thị tốc độ cao (Zero CLS, không giật màn hình).
- **Security & Validation:**
  - Whitelist nodes/marks khi render HTML chống XSS.
  - Auth session cookie `HttpOnly`, `SameSite=Lax`, `Secure`.
  - Server-side validation bằng Zod / Schema chuẩn cho tất cả endpoint.
- **Media Engine:** Tích hợp Cloudflare R2 qua API endpoint, upload ảnh multipart, tự động gán alt-text, caption và metadata kích thước.

---

## 5. Migration & Execution Plan

1. **Khởi tạo D1 Schema & Migrations:**
   - Tạo file SQL migration chuẩn hóa bảng: `users`, `posts`, `post_revisions`, `categories`, `tags`, `post_tags`, `media`, `pages`, `settings`, `redirects`.
   - Viết lệnh `npm run db:migrate` và kết nối với D1 local / remote.
2. **Xây dựng API Backend (Hono / Pages Functions):**
   - Đặt tại `functions/api/[[route]].ts` (hoặc Worker backend tương thích 100% với Pages).
   - Thiết lập các endpoints Admin (Auth, Posts, Revisions, Media, Categories, Tags, Settings, Redirects, Backup) và Public (Posts list, Post detail by slug, Search, Category posts, Dynamic Sitemap & RSS).
3. **Xây dựng Admin Dashboard UI (`/admin/*`):**
   - Layout Admin sáng sủa, thanh thoát chuẩn LocalMate, không glassmorphism, responsive tối ưu cho màn hình laptop 14-16 inch (`1366x768`, `1536x864`, `1920x1080`).
   - Tích hợp Tiptap WYSIWYG Block Editor (Heading, Bold, Italic, Link, Image, Table, Quotes, Lists, Divider, Autosave 5s).
   - Sidebar quản lý bài viết, chuyên mục, thẻ, thư viện media R2, chuyển hướng 301, backup JSON import/export.
4. **Kết nối Frontend Public (`/kien-thuc` & `/kien-thuc/:slug`):**
   - Thay thế mock data cứng trong `KnowledgePage` và `ArticleDetailPage` bằng API Client thật (có cơ chế fallback an toàn).
   - Hỗ trợ xem trước bài viết nháp (`/preview/post/:id?token=...`).
5. **Seed 30 Bài Viết Khởi Đầu:**
   - 30 bài viết chuẩn SEO cho doanh nghiệp địa phương theo đúng danh sách yêu cầu.
   - Trạng thái 100% là `draft`, có đầy đủ category, focus keyword, search intent, excerpt, outline, SEO metadata.
   - Script chạy Idempotent: `npm run cms:seed`.
6. **Kiểm Thử & Nghiệm Thu:**
   - Test end-to-end các luồng: Login -> Tạo bài -> Upload ảnh -> Lưu draft -> Preview -> Xuất bản -> Đổi slug tự sinh 301 -> Xem bài public -> Sitemap XML.
