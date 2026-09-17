# Quy Trình Biên Tập & Tối Ưu Nội Dung (Content Workflow) — LocalMate

Tài liệu này hướng dẫn quy trình từng bước dành cho người làm nội dung (Content Writer), chuyên viên SEO và chủ doanh nghiệp khi vận hành xuất bản bài viết trên LocalMate CMS.

---

## Sơ Đồ Quy Trình Vận Hành 7 Bước

```
Ý tưởng (Idea)
     │
     ▼
Bản nháp (Draft) ──► Tự động lưu trữ dàn ý & Content Brief
     │
     ▼
Kiểm duyệt (Review) ──► Rà soát thông tin chuyên môn & bằng chứng thực tế
     │
     ▼
Kiểm tra SEO (SEO Check) ──► SERP Snippet, từ khóa chính, độ dài tiêu đề & mô tả
     │
     ▼
Lên lịch / Đăng ngay (Schedule / Publish)
     │
     ▼
Xuất bản công khai (Published) ──► Xuất hiện tại /kien-thuc & Sitemap XML
     │
     ▼
Cập nhật & Lưu vết (Update & Revision) ──► Tự động tạo snapshot & sinh 301 nếu đổi slug
```

---

## 1. Giai Đoạn 1: Lên Ý Tưởng & Khởi Tạo Bản Nháp (Idea & Draft)

1. Truy cập **`/admin/posts/new`**.
2. Nhập tiêu đề bài viết vào ô tiêu đề chính. Hệ thống sẽ tự động đề xuất đường dẫn tĩnh (slug) tiếng Việt không dấu.
3. Điền thông tin vào phần **Content Brief (Nội bộ)**:
   - **Từ khóa chính (Focus Keyword):** Từ khóa có ý định tìm kiếm cao của khách địa phương.
   - **Search Intent:** Khách muốn tìm hiểu định nghĩa (TOFU), so sánh giải pháp (MOFU) hay muốn xem giá chốt dịch vụ (BOFU).
   - **Chân dung khách hàng:** Chủ tiệm, doanh nghiệp nhỏ.
4. Bấm **"Lưu nháp" (Save Draft)**.
5. Hệ thống kích hoạt cơ chế **Autosave** tự động lưu nội dung sau mỗi 7 giây khi có thay đổi.

---

## 2. Giai Đoạn 2: Soạn Thảo Nội Dung Bằng Tiptap Block Editor

Áp dụng cấu trúc bài viết chuẩn chuyển đổi của LocalMate:
- **Tiêu đề H1:** Nêu rõ giá trị và câu hỏi khách hàng quan tâm nhất.
- **Đoạn mở đầu (Introduction):** Đặt vấn đề và thấu cảm với nỗi đau của chủ tiệm trong 2-3 câu.
- **Định nghĩa nhanh (Quick Answer Blockquote):** Đưa câu trả lời tóm tắt trực diện vào khối trích dẫn viền xanh.
- **Các đề mục H2 & H3:** Phân tích từng bước cụ thể, có ví dụ thực tế.
- **Hình ảnh minh họa:** Chèn ảnh từ thư viện Media R2 (chọn ảnh có alt-text rõ ràng).
- **Khối kêu gọi hành động (Contextual CTA):** Đưa giải pháp tư vấn dịch vụ của LocalMate ở cuối bài.

---

## 3. Giai Đoạn 3: Kiểm Tra Tối Ưu SEO (SEO & SERP Check)

Trước khi xuất bản, rà soát bảng điều khiển SEO ở cột bên phải:
- **SEO Title:** Độ dài lý tưởng từ 50 - 60 ký tự. Hệ thống có bộ đếm hiển thị màu xanh lá cây khi đạt chuẩn.
- **Meta Description:** Độ dài từ 140 - 160 ký tự. Đầy đủ thông điệp thu hút bấm chuột.
- **Xem trước Google SERP Snippet:** Quan sát mô phỏng hiển thị trên trang kết quả Google để đảm bảo tiêu đề không bị cắt cụt dấu ba chấm (`...`).
- **Thẻ Robots:** Đảm bảo chọn `Index` và `Follow`.

---

## 4. Giai Đoạn 4: Xem Trước Bản Nháp (Draft Preview)

1. Bấm nút **"Xem trước" (Preview)** trên thanh công cụ trên cùng.
2. Hệ thống mở tab mới tại đường dẫn `/preview/post/:id?token=...`.
3. Kiểm tra bài viết hiển thị trực tiếp trên giao diện thực tế (Header, Footer, Breadcrumbs, Mục lục, Khối tư vấn).
4. Khách vãng lai bình thường không thể truy cập link này nếu không có token bảo mật.

---

## 5. Giai Đoạn 5: Xuất Bản Ngay Hoặc Hẹn Giờ (Publish / Schedule)

- **Xuất bản ngay (Publish now):**
  - Đổi trạng thái sang `Đã xuất bản (Published)`.
  - Bấm **"Xuất bản ngay"**.
  - Bài viết sẽ hiển thị công khai tại `/kien-thuc/:slug` và được nạp vào sitemap `/sitemap.xml`.
- **Hẹn giờ đăng (Schedule):**
  - Đổi trạng thái sang `Hẹn giờ đăng (Scheduled)`.
  - Chọn ngày và giờ xuất bản theo giờ Việt Nam (GMT+7 Asia/Ho_Chi_Minh).
  - Bấm **"Lưu nháp"**. Khi tới đúng thời điểm đã hẹn, hệ thống sẽ tự động kích hoạt trạng thái Published cho bài viết.

---

## 6. Giai Đoạn 6: Cập Nhật Nội Dung & Lịch Sử Sửa Đổi (Revisions & 301 Redirects)

- Khi sửa đổi một bài viết đã xuất bản:
  - Hệ thống tự động tạo một snapshot lưu vết vào bảng `cms_post_revisions`.
  - Có thể xem lại lịch sử hoặc khôi phục phiên bản cũ bất cứ lúc nào.
- Khi thay đổi đường dẫn tĩnh (slug) của bài đã xuất bản:
  - Hệ thống tự động phát hiện và sinh bản ghi chuyển hướng **301 Moved Permanently** từ slug cũ sang slug mới trong bảng `cms_redirects`.
  - Người dùng hoặc bot tìm kiếm truy cập URL cũ sẽ tự động được điều hướng mượt mà sang URL mới mà không bị lỗi 404!
