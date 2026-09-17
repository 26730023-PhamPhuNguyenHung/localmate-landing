# Quy Chuẩn Kiến Trúc Liên Kết Nội Bộ — LocalMate Internal Linking

## 1. Mục Đích & Nguyên Tắc Cốt Lõi
- **Dẫn dắt hành trình khách hàng (Customer Journey)**: Liên kết nội bộ không chỉ để truyền PageRank mà phải giúp người đọc giải quyết bước tiếp theo khi họ có thắc mắc sâu hơn hoặc cần dịch vụ.
- **Không nhồi nhét link**: Mỗi 400-500 từ chỉ nên có 1-2 liên kết ngữ cảnh tự nhiên.
- **Cấm anchor text vô nghĩa**:
  - ❌ *Cấm*: "xem tại đây", "bấm vào đây", "đọc bài viết này", "xem thêm".
  - ✅ *Chuẩn*: "bảng giá thiết kế website trọn gói", "tối ưu SEO Google Maps địa phương", "10 lỗi phổ biến khiến website không có khách".

## 2. Kiến Trúc Topic Cluster (Hub & Spoke 2 Chiều)
1. **Pillar Articles (Bài trụ cột)**:
   - Phải liên kết xuống tất cả các Supporting Articles trong cùng cụm chủ đề.
   - Phải liên kết sang Commercial Service Page liên quan trực tiếp.
2. **Supporting Articles (Bài vệ tinh)**:
   - **BẮT BUỘC** phải có ít nhất 1 liên kết ngược trở lại Bài Pillar (Upward Reverse Link).
   - Có thể liên kết ngang sang 1 bài vệ tinh lân cận cùng nhóm vấn đề (Lateral Link).
3. **Chống Bài Mồ Côi (Orphan Page Zero)**:
   - Mọi bài viết mới xuất bản bắt buộc phải có ít nhất 1 bài viết có sẵn trong hệ thống trỏ đến.
   - Không được tạo chu trình bẫy bot khép kín (Spider trap loop `A -> B -> C -> A` mà không có lối thoát sang cụm khác).

## 3. Danh Mục URL Thương Mại Chuẩn (Commercial Canonical Targets)
- Dịch vụ Thiết kế Website: `/thiet-ke-website`
- Bảng giá minh bạch: `/bang-gia`
- Gói Website 1 trang 490k: `/landing-490k`
- Dịch vụ Google Maps & Local SEO: `/google-maps-local-seo`
- Giải pháp Tối ưu AI Search / GEO: `/dich-vu/geo`
- Trang liên hệ / báo giá: `/lien-he`
