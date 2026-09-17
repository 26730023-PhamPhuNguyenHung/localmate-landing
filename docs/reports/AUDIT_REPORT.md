# AUDIT_REPORT.md — Báo Cáo Kiểm Toán Toàn Diện CMS LocalMate

**Dự án**: LocalMate Content Management System (Production Codebase)  
**Ngày kiểm toán**: 17/09/2026  
**Môi trường**: Cloudflare Pages + D1 Database + R2 Object Storage + React 18 / Vite / TypeScript  
**Phương pháp**: 10 Subagent Audit song song theo các góc nhìn chuyên sâu.

---

## 1. TỔNG QUAN KẾT QUẢ 10 TRACKS AUDIT

| Subagent | Chuyên môn | Trạng thái hiện tại | Đánh giá rủi ro |
|---|---|---|---|
| **Agent 1** | CMS Product Audit | Sidebar phẳng 9 mục, thiếu hub SEO/GEO, empty state thô sơ | **High** |
| **Agent 2** | Content Editor UX | Đã có Tiptap nhưng sidebar ôm đồm, thiếu tab Social/Schema/CTA chuẩn | **High** |
| **Agent 3** | Media Library + R2 | Chỉ upload cơ bản, thiếu metadata WxH, thiếu lọc bài viết sử dụng, không cảnh báo xóa | **Critical** |
| **Agent 4** | Image Optimization | Thiếu pipeline nén WebP/kích thước, thiếu hash chống trùng, thiếu `<OptimizedImage />` | **Critical** |
| **Agent 5** | SEO Engine | Thiếu bộ tính điểm SEO Score thời gian thực theo quy tắc deterministic minh bạch | **High** |
| **Agent 6** | GEO / AI Search | Chưa có bảng đánh giá GEO readiness, thiếu checklist answer-first & trích dẫn AI | **High** |
| **Agent 7** | Structured Data & Meta | `SEOHead` xử lý rải rác, thiếu validator chống sinh Schema FAQ/Service rỗng | **Medium** |
| **Agent 8** | Technical SEO | `sitemap.xml.ts` còn tĩnh, thiếu phát hiện vòng lặp/chuỗi redirect (Loop/Chain) | **High** |
| **Agent 9** | Conversion / CTA | Chưa có hệ thống CTA tập trung, CTA bị hardcode trong code bài viết | **High** |
| **Agent 10** | Architecture / QA / DB | Thiếu các cột metadata quan trọng trong D1, nguy cơ N+1 và orphan media | **Critical** |

---

## 2. PHÂN LOẠI MỨC ĐỘ NGUY CƠ (SEVERITY MATRIX)

### 🔴 Critical (P0 — Nguy cơ cao, ảnh hưởng trực tiếp đến dữ liệu & hiệu năng)
1. **Media Pipeline chưa tối ưu kích thước & định dạng**: Ảnh tải lên R2 nguyên bản (có thể nặng 5MB-10MB), không có width/height khiến giao diện frontend bị giật khung hình (CLS cao) và điểm Core Web Vitals tụt dốc.
2. **Không kiểm tra tệp trùng lặp (Hash Deduplication)**: Cùng một hình ảnh upload nhiều lần sẽ tạo ra nhiều bản ghi và nhiều object R2 trùng thừa.
3. **Xóa Media gây hỏng bài viết (Orphan References)**: Hiện tại nút Xóa trong Media Library cho phép xóa ngay mà không kiểm tra xem ảnh đó có đang làm `featured_image` hoặc ảnh minh họa trong bài viết nào không.
4. **Database Schema còn thiếu các trường SEO/GEO/CTA/Media Metadata cốt lõi**: `cms_media` thiếu `width, height, hash, size_optimized`; `cms_posts` thiếu `geo_main_question, geo_direct_answer, geo_faq_json, cta_id, schema_type`.

### 🟠 High (P1 — Ảnh hưởng nghiệp vụ biên tập, thứ hạng tìm kiếm & chuyển đổi)
1. **Sidebar Navigation thiếu cấu trúc nhóm (IA lộn xộn)**: 9 menu trải dài không phân cấp, người vận hành khó định hướng giữa Nội dung, Media, SEO và Cài đặt.
2. **Dashboard chỉ đếm số lượng thô (Vanity Metrics)**: Chưa cung cấp các danh sách công việc cần xử lý thực tế: Bài viết thiếu mô tả SEO, ảnh thiếu ALT, bài viết chưa tối ưu GEO, media dung lượng quá khổ.
3. **Thiếu hệ thống CTA chuyển đổi lead**: LocalMate là đơn vị dịch vụ, nhưng bài viết chưa thể gắn linh hoạt CTA nhận tư vấn theo danh mục hoặc theo bài viết.
4. **Redirect Manager chưa có Loop & Chain Detection**: Nguy cơ người dùng tạo vòng lặp redirect (A -> B -> A) hoặc chuỗi (A -> B -> C) gây phạt SEO.
5. **Sitemap động chưa bao phủ đầy đủ các landing page dịch vụ & case studies**: File `sitemap.xml.ts` hiện tại chỉ hardcode vài URL tĩnh và lấy bài viết.

### 🟡 Medium (P2 — Trải nghiệm người dùng & tính hoàn thiện)
1. **Empty State Media quá lớn và trống trải**: Màn hình thư viện khi chưa có ảnh tạo cảm giác hệ thống bị lỗi hoặc chưa sẵn sàng.
2. **Tiptap Editor thiếu thanh công cụ gắn ảnh trực quan từ thư viện**: Người dùng phải qua các bước rườm rà.
3. **Preview bài viết chưa đồng bộ hoàn toàn với CSS giao diện ngoài**: Chưa hỗ trợ preview nhanh bản nháp mà không cần publish.
4. **Thiếu Audit tổng quan SEO/GEO toàn site**: Biên tập viên không thể rà soát nhanh bài nào cần bổ sung nội dung.

### 🟢 Low (P3 — Đánh bóng & tiện ích nhỏ)
1. Animation chuyển tab trong PostEditor.
2. Bộ lọc kích thước chi tiết trong Media Library.
3. Xuất file báo cáo audit SEO ra CSV/JSON.

---

## 3. PHÂN ĐỊNH: KEEP / FIX / ADD / REMOVE

### 保持 KEEP (Giữ lại & phát huy)
- Kiến trúc nền tảng **Cloudflare Pages + D1 Database + R2 Object Storage + Hono API**: Cực kỳ nhanh, độ trễ thấp, chi phí vận hành 0đ đến siêu tiết kiệm.
- Hệ thống xác thực an toàn: Token-based auth với password hash SHA-256 + salt độc lập.
- Trình soạn thảo **Tiptap Editor v3**: Tương thích tốt, hỗ trợ Heading, Blockquote, Table, List, CodeBlock, Image.
- Cơ chế lưu trữ bài viết kết hợp song song `content_json` (dạng cây tài liệu) và `rendered_html` (dạng HTML chuẩn hóa để render tốc độ cao).
- Tự động hóa xuất bản theo lịch (`scheduled_at <= datetime('now')`) trong `publicContent.ts`.
- Tự động sinh chuyển hướng 301 khi thay đổi slug của bài viết đã xuất bản.

### 🔧 FIX (Sửa đổi & hoàn thiện)
- **Media Upload Pipeline**: Bổ sung tự động trích xuất metadata (Width, Height, Format, Hash, File Size), nén tối ưu sang WebP trước khi đưa lên R2.
- **Media Delete Logic**: Kiểm tra ràng buộc với các bài viết đang sử dụng ảnh trước khi cho phép xóa. Cảnh báo rõ ràng danh sách bài liên quan.
- **Sidebar AdminLayout**: Tổ chức lại thành 5 nhóm logic: TỔNG QUAN, NỘI DUNG, MEDIA, SEO & CHUYỂN HƯỚNG, HỆ THỐNG.
- **Dashboard Page**: Thay thế các số liệu tĩnh bằng Dashboard hành động thực tế (Thống kê bài thiếu SEO, thiếu ALT, bài cần cải thiện GEO, media quá khổ; click vào tự lọc danh sách tương ứng).
- **SEOHead Component**: Khử bỏ hoàn toàn metadata hardcode, hỗ trợ đầy đủ OpenGraph, Twitter Cards, Schema Organization, Article, BreadcrumbList và FAQPage chuẩn W3C/Google.
- **Redirect Manager**: Bổ sung thuật toán phát hiện chuỗi chuyển hướng (Redirect Chain) và vòng lặp (Redirect Loop), theo dõi số lượt truy cập (Hits) và Last Hit Time.

### ➕ ADD (Bổ sung mới bắt buộc)
- **Image Optimization & Component `<OptimizedImage />`**: Render ảnh chuẩn responsive với `srcset`, `sizes`, `width`, `height`, `loading="lazy"`, `decoding="async"` chống CLS.
- **Lightweight SEO Scoring Engine (Deterministic)**: Tính điểm SEO 0-100 dựa trên 12 tiêu chí cụ thể (Title, Slug, Meta Description, Focus Keyword, H1/H2/H3 hierarchy, Word count, Internal links, Image ALT).
- **GEO / AI Search Readiness Panel**: Bộ tiêu chí kiểm tra Answer-First, Direct Answer, Entity Mapping, Factual Sources, Structured FAQ để sẵn sàng cho Google AI Overviews, ChatGPT Search, Perplexity.
- **Chuyển đổi & Quản lý CTA (Conversion System)**: Model CTA tái sử dụng (`cms_ctas`), hỗ trợ gắn CTA mặc định, CTA theo chuyên mục, CTA ghi đè trên từng bài viết và theo dõi lượt hiển thị/click.
- **Trang SEO & GEO Global Audit (`/admin/audit`)**: Bảng kiểm toán tổng thể toàn bộ bài viết trên website để biên tập viên phát hiện và khắc phục lỗi ngay lập tức.
- **Safe Preview Draft**: Xem trước giao diện bài viết nháp chính xác như trang thật với đầy đủ TOC, Author card, CTA và Schema Preview.

### ❌ REMOVE (Loại bỏ triệt để)
- Loại bỏ giao diện Empty State trắng toát khổng lồ gây nhầm lẫn là lỗi trang.
- Loại bỏ các trường thông tin giả, fake review, fake rating trong Schema.
- Loại bỏ việc hardcode các liên kết tĩnh trong `sitemap.xml.ts`.
- Gộp mục Sao lưu JSON vào Cài đặt hệ thống để giữ sidebar tinh gọn, không phân mảnh menu.

---

Báo cáo này là cơ sở trực tiếp cho **CMS_IMPLEMENTATION_PLAN.md**.
