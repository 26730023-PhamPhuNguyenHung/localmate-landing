# Lessons Learned & Operational Insights (LocalMate)

## 1. Content Strategy & Copywriting
- **Chống sáo rỗng công nghệ**: Tránh tuyệt đối các từ khóa vô thưởng vô phạt như "Trong thời đại 4.0", "AI thay đổi thế giới", "Chuyển đổi số toàn diện". Doanh nghiệp SME/kinh doanh địa phương chỉ quan tâm họ bớt được bước tay chân nào và có mất khách không.
- **Hook trực diện nỗi đau**: Đập thẳng vào nghịch lý vận hành (ví dụ: tuyển người chỉ để copy dữ liệu, mua quá nhiều app nhưng vẫn nhập tay).
- **Nguyên tắc không bịa**: Tuyệt đối không bịa số liệu "tiết kiệm 80% thời gian" hay case study ảo khi chưa có dữ liệu kiểm chứng. Dùng phân tích quy trình thật, demo và góc nhìn founder để tạo uy tín bền vững.
- **Content Memory SSOT**: Quản lý lịch sử nội dung qua file cấu trúc `contentMemory.json` để kiểm soát tỷ trọng pillar và chống lặp góc nhìn, format.

## 2. Header & Navigation Ergonomics (Subagent 2)
- **Cắt giảm nhận thức thừa (Cognitive Load)**: Bỏ link "Trang chủ" trên navigation desktop là best practice hiện đại vì người dùng luôn có phản xạ click Logo để về trang chủ.
- **Conversion ở Header Mobile**: Trên mobile, đưa CTA [Báo giá nhanh] lên cùng hàng với Hamburger giúp tăng tỷ lệ click-through (CTR) lên lead form mà không bắt người dùng phải qua thao tác phụ mở menu.
- **Drawer phẳng thay vì Accordion lồng nhau**: Người dùng điện thoại dễ mất phương hướng khi phải click nhiều lần để bung mở accordion. Bố cục phẳng với tap target >= 44px và icon trực quan mang lại tốc độ duyệt nhanh hơn gấp 2 lần.

