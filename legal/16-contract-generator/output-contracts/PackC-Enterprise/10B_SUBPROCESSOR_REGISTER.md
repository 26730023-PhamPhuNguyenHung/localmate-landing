# SỔ ĐĂNG KÝ BÊN XỬ LÝ PHỤ CHÍNH THỨC (SUBPROCESSOR REGISTER)
**(DANH MỤC NHÀ CUNG CẤP HẠ TẦNG & DỊCH VỤ CÔNG NGHỆ BÊN THỨ BA)**  
**Mã tài liệu:** LOCALMATE-SUBPROCESSOR-2026  
**Căn cứ pháp lý:** Điều 25 Nghị định 13/2023/NĐ-CP (Chuyển dữ liệu xuyên biên giới) và Luật Bảo vệ dữ liệu cá nhân 2025  
**Cập nhật lần cuối:** Tháng 09/2026  
**Phạm vi:** Đính kèm Thỏa thuận Xử lý Dữ liệu (DPA) công bố công khai cho Khách hàng

---

## BẢNG DANH MỤC CÁC BÊN XỬ LÝ PHỤ (SUB-PROCESSORS)

| Tên Đơn Vị | Pháp Nhân Chủ Quản & Quốc Gia Trụ Sở | Vị Trí Máy Chủ Lưu Trữ (Server Location) | Dịch Vụ Công Nghệ Cung Ứng | Loại Dữ Liệu Cá Nhân Tiếp Xúc | Tiêu Chuẩn Bảo Mật & Cơ Chế Chuyển Giao Quốc Tế | Đường Dẫn Chính Sách Bảo Mật & DPA | Trạng Thái Phê Duyệt |
|:---:|:---|:---|:---|:---|:---|:---|:---:|
| **Cloudflare** | Cloudflare, Inc.<br>*(San Francisco, CA, Hoa Kỳ)* | Mạng Anycast toàn cầu *(Bao gồm các Edge PoPs tại Việt Nam, Singapore, Hồng Kông)* | Mạng phân phối nội dung (CDN), Tường lửa WAF, Cloudflare Pages/Workers, DNS, Turnstile Captcha | Địa chỉ IP người dùng, User-Agent, Thời gian kết nối, Metadata gói tin mạng, Payload biểu mẫu tạm thời | ISO/IEC 27001, SOC 2 Type II, Tuân thủ Thỏa thuận DPA quốc tế (EU Standard Contractual Clauses - SCCs) | [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/) | **Đã Phê Duyệt** *(Active)* |
| **Supabase** | Supabase, Inc.<br>*(Singapore / Delaware, Hoa Kỳ)* | Khu vực máy chủ AWS Singapore *(ap-southeast-1)* | Cơ sở dữ liệu quan hệ PostgreSQL lưu trữ cấu hình hệ thống và dữ liệu lead | Thông tin liên hệ, lịch sử đơn hàng, nhật ký thao tác người dùng | SOC 2 Type II, HIPAA Compliant, Mã hóa AES-256 ở trạng thái nghỉ & TLS 1.3 trên đường truyền | [supabase.com/privacy](https://supabase.com/privacy) | **Đã Phê Duyệt** *(Active)* |
| **Google Cloud & Workspace** | Google LLC<br>*(Mountain View, CA, Hoa Kỳ)* | Trung tâm dữ liệu tại Singapore, Đài Loan, Hoa Kỳ | Google Sheets (lưu trữ lead), Google Drive, Gmail tiếp nhận thông báo | Họ và tên, Số điện thoại, Email, File đính kèm của người dùng | ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018, Google Cloud DPA (EU SCCs) | [cloud.google.com/terms/data-processing-addendum](https://cloud.google.com/terms/data-processing-addendum) | **Đã Phê Duyệt** *(Active)* |
| **Meta Platforms** | Meta Platforms Ireland Ltd / Meta Inc.<br>*(Ireland / Hoa Kỳ)* | Singapore, Hoa Kỳ, Châu Âu | Meta Pixel, Conversions API (CAPI) đo lường chuyển đổi quảng cáo | Mã định danh Cookie (`_fbp`), Email và Số điện thoại đã băm một chiều (SHA-256 Hash) | Meta Business Tools Terms, Global Data Processing Addendum | [facebook.com/legal/terms/dataprocessing](https://www.facebook.com/legal/terms/dataprocessing) | **Đã Phê Duyệt** *(Active)* |
| **Zalo / ZNS** | Công ty Cổ phần VNG<br>*(TP. Hồ Chí Minh, Việt Nam)* | Trung tâm Dữ liệu VNG Data Center tại Tân Thuận, TP.HCM *(Việt Nam)* | Zalo OA Webhook, Dịch vụ gửi tin nhắn chăm sóc khách hàng tự động Zalo Notification Service (ZNS) | Số điện thoại người nhận, Họ tên, Nội dung thông báo đơn hàng | Đặt máy chủ 100% tại lãnh thổ Việt Nam, tuân thủ Luật An ninh mạng & NĐ 53/2022/NĐ-CP | [zalo.me/chinh-sach-bao-mat](https://zalo.me/chinh-sach-bao-mat) | **Đã Phê Duyệt** *(Active)* |
| **Telegram** | Telegram FZ-LLC<br>*(Dubai, Các Tiểu vương quốc Ả Rập Thống nhất)* | Mạng lưới máy chủ phân tán toàn cầu | Telegram Bot API bắn thông báo có lead mới vào nhóm chat bảo mật của khách | Họ tên, Số điện thoại, Nội dung tin nhắn tóm tắt của lead | Kênh truyền tải mã hóa MTProto độc quyền, API phân quyền qua Bot Token bảo mật | [telegram.org/privacy](https://telegram.org/privacy) | **Đã Phê Duyệt** *(Active)* |
| **Resend** | Resend, Inc.<br>*(San Francisco, CA, Hoa Kỳ)* | Khu vực AWS us-east-1 *(Hoa Kỳ)* | Dịch vụ gửi thư điện tử giao dịch tự động (Transactional Email API) | Địa chỉ email người nhận, Tiêu đề và nội dung email thông báo | SOC 2 Compliant, Bắt buộc giao thức TLS 1.3 Enforced, Data Processing Agreement | [resend.com/legal/privacy-policy](https://resend.com/legal/privacy-policy) | **Đã Phê Duyệt** *(Active)* |

---

## NGUYÊN TẮC THÔNG BÁO VÀ THAY ĐỔI NHÀ CUNG CẤP
1. Mọi sự thay đổi, bổ sung hoặc thay thế Bên xử lý phụ sẽ được LocalMate cập nhật trực tiếp tại Sổ đăng ký này và thông báo bằng văn bản/email cho Khách hàng trước ít nhất **10 ngày làm việc**.
2. Khách hàng có quyền phản đối bằng văn bản có lý do chính đáng về mặt kỹ thuật/bảo mật. Nếu Các Bên không thống nhất được, Khách hàng có quyền yêu cầu vô hiệu hóa tính năng tích hợp liên quan mà không bị phạt vi phạm hợp đồng.
