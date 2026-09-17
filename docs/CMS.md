# LocalMate CMS — Sổ Tay Kỹ Thuật & Vận Hành Toàn Diện

> *"WordPress đủ dùng cho một agency/local digital business, nhưng nhẹ, hiện đại, dễ bảo trì, chạy tốt trên Cloudflare."*

Tài liệu này là **Single Source of Truth (SSOT)** về kiến trúc kỹ thuật, cơ sở dữ liệu, lưu trữ media, luồng xác thực và cách thức vận hành hệ thống CMS của LocalMate.

---

## 1. Tổng Quan Kiến Trúc (Architecture)

LocalMate CMS được thiết kế theo mô hình **Headless / Decoupled CMS** tích hợp liền khối trên nền tảng Cloudflare:

```
┌─────────────────────────────────────────────────────────────────┐
│                    LOCALMATE WEB PLATFORM                       │
├───────────────────────────────┬─────────────────────────────────┤
│        PUBLIC FRONTEND        │         ADMIN DASHBOARD         │
│  - Trang chủ, Landing pages   │  - /admin (Dashboard số liệu)   │
│  - /kien-thuc (Knowledge Hub) │  - /admin/posts (CRUD, Lọc, Tìm)│
│  - /kien-thuc/:slug (Chi tiết)│  - /admin/posts/new & :id/edit  │
│  - /preview/post/:id (Nháp)   │  - /admin/categories & tags     │
│  - Sitemap & RSS động         │  - /admin/media (Thư viện R2)   │
│                               │  - /admin/redirects & settings  │
├───────────────────────────────┴─────────────────────────────────┤
│               API LAYER (Cloudflare Pages Functions / Hono)     │
│  - Entrypoint: functions/api/[[route]].ts                       │
│  - RESTful JSON API (/api/public/* & /api/admin/*)              │
│  - Session Auth (HttpOnly Cookie, Web Crypto SHA-256 + Salt)    │
├────────────────────────────────┬────────────────────────────────┤
│      DATABASE (Cloudflare D1)  │    OBJECT STORAGE (Cloudflare) │
│  - Database: localmate_survey_ │    - Bucket: localmate-assets- │
│    db                          │      prod                      │
│  - Bảng cms_* chuẩn quan hệ    │    - Upload multipart, tối ưu  │
└────────────────────────────────┴────────────────────────────────┘
```

### Điểm nhấn hiệu năng & bảo mật:
- **Code-Splitting thông minh:** Toàn bộ Admin Dashboard và thư viện soạn thảo Tiptap được tải lười (Lazy Loaded) qua `React.lazy()` và gom thành chunk riêng (`tiptap.js`). Khách hàng xem website công cộng **hoàn toàn không phải tải bất kỳ byte nào của Tiptap**.
- **Canonical Content:** Nội dung bài viết được lưu trữ dưới dạng **Tiptap JSON (`content_json`)** có cấu trúc, kèm `rendered_html` đã được lọc bỏ mã độc (Whitelist HTML Sanitizer) để phục vụ trang hiển thị với tốc độ Zero CLS.

---

## 2. Cài Đặt & Chạy Môi Trường Cục Bộ (Local Setup)

### Yêu cầu:
- Node.js >= 18.x
- PowerShell trên Windows (hoặc terminal tương đương)
- Cloudflare Wrangler CLI (`wrangler` >= 4.133)

### Các bước khởi chạy:
```powershell
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Chạy Dev Server
npm run dev
```

### Các lệnh quản trị CSDL D1:
```powershell
# Chạy migration cấu trúc bảng và dữ liệu mặc định
npm run db:migrate

# Chạy nạp (seed) 30 bài viết nháp khởi đầu (Idempotent)
npm run cms:seed
```

---

## 3. Cấu Hình Cơ Sở Dữ Liệu D1 & Media R2

### Cloudflare D1:
- Tên Database: `localmate_survey_db`
- UUID: `2a283520-4f4d-4542-8493-8caeb7673808`
- Tất cả các bảng CMS được đặt tiền tố `cms_` để phân lập domain sạch sẽ, không xung đột với các bảng khác:
  - `cms_users`: Tài khoản Admin và Biên tập viên.
  - `cms_categories`: Chuyên mục bài viết.
  - `cms_tags` & `cms_post_tags`: Thẻ phân loại.
  - `cms_media`: Dữ liệu metadata hình ảnh.
  - `cms_posts`: Bảng bài viết trung tâm.
  - `cms_post_revisions`: Lịch sử các phiên bản sửa đổi.
  - `cms_pages`: Các trang tùy biến.
  - `cms_settings`: Cấu hình hệ thống.
  - `cms_redirects`: Quản trị chuyển hướng 301 / 302 SEO.

### Cloudflare R2:
- Tên Bucket: `localmate-assets-prod`
- Khi người dùng tải ảnh qua trang `/admin/media` hoặc trong Tiptap Editor:
  1. Kiểm tra kích thước (< 10MB) và MIME type hợp lệ (`image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/svg+xml`).
  2. Tự động chuẩn hóa tên file (chống ký tự lạ, gắn timestamp chống ghi đè).
  3. Đẩy file lên R2 theo key `uploads/filename.ext`.
  4. Lưu trữ thông tin kích thước, alt-text vào bảng `cms_media`.

---

## 4. Quản Trị Hệ Thống & Đăng Nhập (Admin Setup)

- Đường dẫn trang quản trị: **`/admin`**
- Tài khoản quản trị mặc định:
  - **Tên đăng nhập:** `admin` (hoặc email `contact@localmate.vn`)
  - **Mật khẩu khởi tạo:** `LocalMate@2026`
- Cơ chế bảo mật:
  - Mật khẩu băm bằng thuật toán **SHA-256 kèm salt** qua Web Crypto API.
  - Session cookie gắn cờ `HttpOnly`, `SameSite=Lax`, tự động hết hạn sau 7 ngày.

---

## 5. Quy Trình Triển Khai Lên Production (Deployment)

Dự án triển khai nguyên bản trên **Cloudflare Pages**:
```powershell
# 1. Biên dịch TypeScript và tạo gói tĩnh
npm run build

# 2. Deploy lên Cloudflare Pages dự án localmate-vn
npx wrangler pages deploy dist --project-name=localmate-vn
```

Pages Functions trong thư mục `functions/api/` sẽ được Cloudflare tự động nhận diện và kích hoạt làm backend Worker không máy chủ (Serverless) cùng lúc với frontend `dist/`.

---

## 6. Sao Lưu & Phục Hồi Dữ Liệu (Backup & Restore)

- **Xuất dữ liệu (Export):**
  - Truy cập `/admin/backup`, bấm **"Tải Về Tệp Sao Lưu (.json)"**.
  - File JSON xuất ra theo chuẩn `schema_version: 1` chứa toàn bộ bài viết, chuyên mục, thẻ, metadata SEO và nội dung Tiptap JSON.
- **Nạp dữ liệu (Import):**
  - Bấm chọn file `.json` tại `/admin/backup`.
  - Hệ thống tự động kích hoạt chế độ kiểm tra trước (Dry-run preview) liệt kê rõ: số bài mới (`NEW`), số bài xung đột trùng slug (`UPDATE`), số bài bỏ qua (`SKIPPED`).
  - Sau khi kiểm tra an toàn, bấm **"Xác Nhận Nhập Dữ Liệu"** để hệ thống ghi vào D1.
