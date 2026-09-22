# BẢNG KÊ DANH MỤC CÁC LUỒNG XỬ LÝ DỮ LIỆU CÁ NHÂN (ROPA)
**(DATA PROCESSING INVENTORY & RECORDS OF PROCESSING ACTIVITIES)**  
**Mã tài liệu:** LOCALMATE-ROPA-2026  
**Căn cứ pháp lý:** Điều 24 Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân 2025  
**Đơn vị áp dụng:** Hệ thống giải pháp số LocalMate (localmate.vn)

---

## I. MỤC ĐÍCH & PHẠM VI ÁP DỤNG
Tài liệu này là Bản ghi chép các hoạt động xử lý dữ liệu cá nhân (Records of Processing Activities - RoPA) bắt buộc phải lập và lưu trữ tại trụ sở của LocalMate, sẵn sàng xuất trình khi Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05 - Bộ Công an) hoặc các cơ quan có thẩm quyền tiến hành kiểm tra, thanh tra định kỳ hoặc đột xuất.

---

## II. BẢNG DANH MỤC 4 LUỒNG DỮ LIỆU CỐT LÕI TẠI LOCALMATE

| Mã Luồng | Tên Hoạt Động Xử Lý | Tư Cách Pháp Lý LocalMate | Nhóm Chủ Thể Dữ Liệu | Danh Mục Dữ Liệu Thu Thập | Mục Đích Xử Lý | Hệ Thống & Hạ Tầng Lưu Trữ | Bên Xử Lý Phụ (Sub-processors) | Thời Hạn Lưu Trữ | Biện Pháp An Toàn Kỹ Thuật (TOMs) |
|:---:|:---|:---:|:---|:---|:---|:---|:---|:---:|:---|
| **FLOW-01** | **Tiếp nhận Lead từ Web Form Khách hàng** | **Bên Xử lý (Data Processor)** | Khách hàng tiềm năng điền form trên website của Bên A | *Dữ liệu cơ bản:* Họ tên, SĐT, Email, Tỉnh/Thành phố, Yêu cầu tư vấn, Địa chỉ IP, UTM parameters | Tiếp nhận nhu cầu mua hàng, chuyển tiếp cho bộ phận bán hàng của Bên A | Cloudflare Pages, Edge Worker Webhook trung gian | Cloudflare Inc., Google LLC (Google Sheets API) | Lưu tạm trên Worker cache tối đa 30 ngày (tự động xóa sạch) | Mã hóa TLS 1.3, Cloudflare Turnstile chống bot, Token xác thực HMAC SHA-256 |
| **FLOW-02** | **Đồng bộ CRM & Bắn thông báo Lead Tức thì** | **Bên Xử lý (Data Processor)** | Khách hàng để lại thông tin trên hệ thống | *Dữ liệu cơ bản:* Họ tên, SĐT, Dịch vụ quan tâm, Thời gian gửi | Kích hoạt kịch bản tự động hóa, gửi thông báo vào nhóm chat nội bộ của Bên A | Serverless Webhook Dispatcher | Telegram FZ-LLC, VNG (Zalo OA / ZNS), Resend Inc. | Không lưu nội dung; dữ liệu truyền dạng dòng dữ liệu (Pass-through stream) | Mã hóa HTTPS, IP Whitelist, Khóa bí mật API lưu trong Cloudflare Secrets |
| **FLOW-03** | **Khách đăng ký tư vấn trên `localmate.vn`** | **Bên Kiểm soát kiêm Xử lý (Controller-cum-Processor)** | Chủ cơ sở kinh doanh, người đại diện doanh nghiệp liên hệ LocalMate | *Dữ liệu cơ bản:* Họ tên, SĐT Zalo, Tên cơ sở kinh doanh, Địa chỉ tiệm, Ngân sách dự kiến | Tư vấn giải pháp số, gửi báo giá, demo sản phẩm và chăm sóc khách hàng | LocalMate CRM Database (Supabase PostgreSQL) | Supabase Inc., Cloudflare, Google Workspace | Lưu trữ 24 tháng kể từ tương tác gần nhất hoặc xóa ngay khi có yêu cầu DSR | Row-Level Security (RLS), phân quyền RBAC nhân sự, bắt buộc 100% MFA |
| **FLOW-04** | **Ký kết hợp đồng B2B & Xuất hóa đơn VAT** | **Bên Kiểm soát kiêm Xử lý (Controller-cum-Processor)** | Người đại diện theo pháp luật, Kế toán trưởng của Khách hàng | *Dữ liệu cơ bản:* Họ tên, Chức vụ, Số CCCD/Hộ chiếu người ký, Email công vụ, SĐT, Số tài khoản ngân hàng | Giao kết hợp đồng thương mại, thu hồi công nợ, xuất hóa đơn điện tử, kê khai thuế | Phần mềm kế toán & Hóa đơn điện tử nội bộ | Đơn vị cung cấp Hóa đơn điện tử (Viettel / VNPT / MISA) | Lưu trữ tối thiểu **10 năm** theo quy định bắt buộc của Luật Kế toán và Luật Quản lý thuế | Hợp đồng ký số token công cộng, phân vùng lưu trữ bảo mật riêng biệt |

---

## III. NGUYÊN TẮC GIÁM SÁT VÀ ĐÁNH GIÁ ĐỊNH KỲ
1. **Trách nhiệm cập nhật:** Bộ phận Bảo vệ Dữ liệu (DPO) của LocalMate có trách nhiệm rà soát và cập nhật Bảng kê này tối thiểu **06 tháng/lần** hoặc ngay khi phát sinh luồng tích hợp công nghệ mới.
2. **Kiểm toán quyền truy cập:** Định kỳ hàng quý tiến hành thu hồi quyền truy cập đối với các tài khoản kỹ thuật viên đã chuyển đổi dự án hoặc nhân sự đã thôi việc.
