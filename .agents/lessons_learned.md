# Lessons Learned & Operational Insights (LocalMate)

## 1. Content Strategy & Copywriting
- **Chống sáo rỗng công nghệ**: Tránh tuyệt đối các từ khóa vô thưởng vô phạt như "Trong thời đại 4.0", "AI thay đổi thế giới", "Chuyển đổi số toàn diện". Doanh nghiệp SME/kinh doanh địa phương chỉ quan tâm họ bớt được bước tay chân nào và có mất khách không.
- **Hook trực diện nỗi đau**: Đập thẳng vào nghịch lý vận hành (ví dụ: tuyển người chỉ để copy dữ liệu, mua quá nhiều app nhưng vẫn nhập tay).
- **Nguyên tắc không bịa**: Tuyệt đối không bịa số liệu "tiết kiệm 80% thời gian" hay case study ảo khi chưa có dữ liệu kiểm chứng. Dùng phân tích quy trình thật, demo và góc nhìn founder để tạo uy tín bền vững.
- **Content Memory SSOT**: Quản lý lịch sử nội dung qua file cấu trúc `contentMemory.json` để kiểm soát tỷ trọng pillar và chống lặp góc nhìn, format.

## 2. Header & Navigation Ergonomics (Subagent 2)
- **Cắt giảm nhận thức thừa (Cognitive Load)**: Bỏ link "Trang chủ" trên navigation desktop là best practice hiện đại vì người dùng luôn có phản xạ click Logo để về trang chủ.
- **Conversion ở Header Mobile**: Trên mobile, đưa CTA [Báo giá nhanh] lên cùng hàng với Hamburger giúp tăng tỷ lệ click-through (CTR) lên lead form mà không bắt người dùng phải qua thao tác phụ mở menu.
## 3. Pricing Matrix & Starting Price UX (Subagent 8)
- **Tách tầng nhu cầu (Tiered Disclosure)**: Khách hàng SME/kinh doanh địa phương thường có 2 tâm lý khi xem giá:
  1. *Muốn biết trọn gói cơ bản để bắt đầu*: Nhóm này cần 4 gói khởi điểm phổ biến (Starting Packages) to rõ, có mức giá chốt nhanh (`490k`, `2.9m`, `2.0m`, `990k/tháng`) và cam kết demo trước.
  2. *Muốn tra cứu từng việc cụ thể*: Nhóm này đã có website nhưng gặp lỗi nhỏ hoặc cần cài thêm tính năng. Họ cần bảng tra cứu 41 dịch vụ chi tiết có Search tức thì & Filter nhóm.
  -> Việc đặt 4 thẻ Starting Packages ở trên và bảng chi tiết 41 dịch vụ ở dưới giúp thỏa mãn trọn vẹn cả 2 luồng hành vi mà không gây quá tải nhận thức.
- **Tối ưu Laptop 14" Scale 125% (~1228px)**:
  - Khi chia 3 cột ở độ rộng container ~1200px, mỗi card có chiều ngang khoảng 370px.
  - Sử dụng `clamp(...)` cho tiêu đề và giá tiền, kết hợp `text-wrap: pretty; word-break: break-word;` giúp triệt tiêu hiện tượng chữ mồ côi rớt dòng xấu.
  - Footer card luôn dùng `flex-wrap: wrap; gap: 0.75rem;` để nút "Tư vấn gói này" không bị đè hoặc tràn khi zoom to.

