# Kế hoạch chuẩn hóa header và footer LocalMate

## Trạng thái sau trang Labs

- `/labs` dùng `Header` và `Footer` chung của các trang public; đã thêm Labs vào desktop/mobile navigation và nhóm Labs ở footer.
- Trang chủ (`HomeReferencePage`) đã dùng `Header` chung; footer vẫn là biến thể riêng. `/geo` còn layout riêng.
- Trang Labs dùng logo gốc `/logo.webp` thay cho `ArtCrop` trong layout chung. Không dùng ảnh tham chiếu làm asset của trang.

## Chuẩn đích

1. Header public có bốn mục `Trang chủ · Dịch vụ · Labs · Kiến thức`, hotline và CTA. `Dịch vụ` đi tới `/dich-vu`; không dùng popup hay link giả cho dịch vụ chi tiết.
2. Một footer public: giới thiệu thương hiệu, Dịch vụ, Labs, Thông tin, Liên hệ; chính sách ở dải cuối. Link điều hướng phải trỏ tới route/anchor đang tồn tại.
3. Dùng cùng container, font, logo, breakpoint và cách bù sticky header. Biến thể landing chỉ thay nội dung CTA khi cần, không tạo bản sao layout.
4. Từng bước đưa trang chủ và `/geo` vào layout chung sau khi kiểm tra các section, form và anchor của từng trang. Tránh đổi toàn bộ cùng lúc trong phiên tập trung Labs.
5. Nghiệm thu ở 1536, 1366, 1024, 768, 430, 390 và 375px: không tràn ngang, menu và CTA thao tác được, footer không vỡ cột, anchor không bị header che.

## Giới hạn nội dung

- Trạng thái sản phẩm Labs hiện là nội dung định hướng theo ảnh tham chiếu, chưa nối với hệ thống quản lý tiến độ. Giao diện ghi rõ tiến độ có thể thay đổi sau thử nghiệm.
- Form Labs dùng `submitLead` hiện có. Webhook `no-cors` chỉ xác nhận yêu cầu gửi qua mạng, chưa chứng minh Google Sheets đã ghi thành công.

## Cập nhật 2026-09-23

- Header public desktop/mobile giữ bốn mục chính: Trang chủ, Dịch vụ, Labs, Kiến thức; hotline và CTA vẫn có trong header.
- Nút Dịch vụ kế thừa font chung; menu mobile dùng weight 700. Điều này tránh font mặc định `Arial` và nét chữ bị khác các link xung quanh.
- Footer public lấy nhóm link từ `FOOTER_GROUPS`. Mobile dùng hai cột link chính, lược phần mô tả lặp, giữ Zalo, điện thoại, email và chính sách. Các link phụ vẫn hiện trên desktop.
- Đã đo ở 375, 390, 430, 1024, 1366 và 1536px: không có tràn ngang; footer mobile cao khoảng 511px ở 390px. Build TypeScript/Vite pass.
- `/dich-vu` là trang tổng quan riêng dùng lại `servicesData`; menu `Dịch vụ` đi thẳng tới trang này. Thẻ dịch vụ trang chủ cũng dẫn tới mục tương ứng, không mở dialog.
- `LeadModal` chỉ còn họ tên, số điện thoại, nội dung tùy chọn và lối gọi/Zalo. Bỏ tuyên bố thời gian phản hồi chưa xác minh.
- Trang chủ, Labs và Dịch vụ dùng cùng `Header`. Logo chuyển sang `/logo.png` 853×332 để tránh artefact nén ở bản WebP.
- Nét vàng của câu handwriting trong footer trang chủ được căn ngay dưới chữ ở mobile.
- /geo và /mam-non dùng Header public chung. /dich-vu dẫn tới hai giải pháp chuyên biệt; footer GEO bỏ các route cũ không tồn tại.
