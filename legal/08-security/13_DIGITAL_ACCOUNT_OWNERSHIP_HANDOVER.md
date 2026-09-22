# QUY TRÌNH VÀ BIÊN BẢN BÀN GIAO QUYỀN SỞ HỮU TÀI KHOẢN KỸ THUẬT SỐ
## (DIGITAL ACCOUNT OWNERSHIP & CREDENTIAL HANDOVER PROTOCOL)
**Mã hiệu văn bản:** `LM-SEC-ACC-13`  
*(Ban hành kèm theo Hợp đồng Dịch vụ Khung số: [SO_HOP_DONG_MSA]/LM-MSA hoặc Đơn đặt hàng tương ứng)*  
**Căn cứ áp dụng:**  
- *Luật An toàn thông tin mạng số 86/2015/QH13;*  
- *Luật An ninh mạng số 24/2018/QH14 và Nghị định số 330/2026/NĐ-CP;*  
- *Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 & Nghị định số 356/2025/NĐ-CP;*  
- *Tiêu chuẩn quản lý an toàn thông tin ISO/IEC 27001 và nguyên tắc Quản lý truy cập theo vai trò (Role-Based Access Control - RBAC).*

---

### PHẦN I: QUY TRÌNH TIÊU CHUẨN BÀN GIAO TÀI KHOẢN AN TOÀN

Nhằm bảo đảm an toàn thông tin tối đa, ngăn ngừa nguy cơ lộ lọt thông tin đăng nhập, tranh chấp quyền sở hữu hoặc tấn công chiếm đoạt tài khoản kỹ thuật số, LocalMate và Khách hàng cam kết tuân thủ quy trình bàn giao chuẩn 04 bước sau:

#### BƯỚC 1: XÁC MINH CHỦ THỂ VÀ THIẾT LẬP EMAIL CHÍNH CHỦ
1. Toàn bộ tài khoản dịch vụ (Domain, Cloudflare, Google Ads, Google Business Profile, CRM) bắt buộc phải được đăng ký hoặc liên kết với hòm thư điện tử chính thức của Khách hàng (`[EMAIL_A]` hoặc email thuộc tên miền của doanh nghiệp Bên A).
2. Tuyệt đối không sử dụng email cá nhân của nhân sự LocalMate để đăng ký vĩnh viễn tài sản của Khách hàng. Trường hợp LocalMate tạo hộ tài khoản phục vụ quá trình setup ban đầu, LocalMate phải tiến hành chuyển giao quyền sở hữu chính chủ (Transfer of Ownership) theo đúng Bước 3.

#### BƯỚC 2: NGUYÊN TẮC BÀN GIAO CREDENTIAL AN TOÀN (ZERO-CLEARTEXT POLICY)
1. **Tuyệt đối cấm:** Hai Bên nghiêm cấm việc gửi thông tin đăng nhập, tên người dùng và mật khẩu ở dạng văn bản thô (cleartext password) qua các ứng dụng tin nhắn không mã hóa đầu cuối (Zalo cá nhân, Messenger, SMS) hoặc gửi trực tiếp trong email thông thường.
2. **Phương thức bàn giao hợp lệ:** Mọi thông tin đăng nhập nhạy cảm (Password, API Secret Keys, Recovery Codes) bắt buộc phải được truyền tải thông qua một trong các phương thức sau:
   - **Cách 1 (Khuyến nghị ưu tiên):** Mời email của Khách hàng trực tiếp vào hệ thống với vai trò Quản trị viên (Admin/Owner Invitation) để Khách hàng tự đặt mật khẩu riêng và tự kích hoạt Xác thực 2 bước (2FA/MFA);
   - **Cách 2 (Trường hợp phải bàn giao tài khoản tạo sẵn):** Sử dụng liên kết mã hóa tự hủy sau 01 lần mở hoặc hết hạn trong vòng 24 giờ qua công cụ quản lý mật khẩu chuyên nghiệp (**Bitwarden Send** hoặc **1Password Share**), có đặt mật khẩu giải mã gửi qua kênh độc lập (kênh Out-of-band).

#### BƯỚC 3: QUY TRÌNH CHUYỂN QUYỀN CHỦ SỞ HỮU CHÍNH (PRIMARY OWNER)
1. **Đối với Google Business Profile (Google Maps):**
   - Theo quy định kỹ thuật của Google, việc chuyển giao vai trò "Chủ sở hữu chính" (Primary Owner) yêu cầu tài khoản email của Khách hàng phải được thêm vào làm "Chủ sở hữu" (Owner) trong tối thiểu **07 (bảy) ngày liên tục** mới có thể thực hiện thao tác chuyển quyền Primary Owner;
   - LocalMate có trách nhiệm gửi lời mời và hướng dẫn Khách hàng chấp nhận lời mời làm Owner ngay khi hoàn tất xác minh;
   - Sau đủ 07 ngày, LocalMate thực hiện thao tác chuyển giao quyền Primary Owner cho email của Khách hàng và Khách hàng có quyền hạ quyền hoặc xóa tài khoản của LocalMate khỏi Profile.
2. **Đối với Google Ads & Google Analytics (GA4):**
   - LocalMate cấp quyền "Quản trị viên" (Admin) cho email của Khách hàng;
   - Khách hàng thêm phương thức thanh toán của chính mình;
   - LocalMate giữ quyền User thao tác kỹ thuật (Standard/Manager Link) trong thời gian quản lý chiến dịch và sẽ hủy liên kết khi kết thúc dịch vụ.
3. **Đối với Quản trị Tên miền (DNS / Domain) & Hosting:**
   - Khách hàng được bàn giao toàn quyền tài khoản Registrar (Mắt Bão, PA Việt Nam, Cloudflare, Namecheap...);
   - Khách hàng kiểm tra email bảo hộ tên miền và kích hoạt khóa bảo vệ (Transfer Lock / Registry Lock).

#### BƯỚC 4: NGHĨA VỤ SAU BÀN GIAO VÀ PHÂN ĐỊNH RANH GIỚI TRÁCH NHIỆM
1. Ngay sau khi tiếp nhận bàn giao thành công, Khách hàng có nghĩa vụ bắt buộc phải:
   - Đổi toàn bộ mật khẩu đăng nhập của tất cả các tài khoản sang mật khẩu mạnh mới (tối thiểu 12 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt);
   - Bật Xác thực 2 yếu tố (2FA/MFA) sử dụng ứng dụng Google Authenticator, Microsoft Authenticator hoặc khóa bảo mật vật lý YubiKey;
   - Kiểm tra và cập nhật chính xác số điện thoại và email khôi phục tài khoản mang tên Khách hàng.
2. **Miễn trừ trách nhiệm:** Kể từ thời điểm Hai Bên ký Biên bản bàn giao dưới đây, Khách hàng chịu hoàn toàn trách nhiệm về việc bảo mật, quản lý và vận hành các tài khoản số này. LocalMate hoàn toàn được miễn trừ mọi trách nhiệm pháp lý và bồi thường đối với các sự cố xảy ra sau ngày bàn giao (bao gồm nhưng không giới hạn: bị hack do nhân sự Khách hàng làm lộ mật khẩu, mất quyền truy cập do không gia hạn tên miền, vi phạm chính sách của nền tảng bên thứ ba do Khách hàng tự ý thay đổi cấu hình hoặc nội dung).

---

### PHẦN II: BIÊN BẢN BÀN GIAO TÀI KHOẢN KỸ THUẬT SỐ

Hôm nay, ngày [NGAY] tháng [THANG] năm 202[X], Hai Bên tiến hành lập và ký Biên bản bàn giao tài khoản kỹ thuật số đối với dự án: **[TEN_DU_AN]** theo chi tiết danh mục sau:

#### BẢNG DANH MỤC TÀI KHOẢN BÀN GIAO:

| STT | NỀN TẢNG / TÀI NGUYÊN | TÊN TÀI KHOẢN / ĐỊNH DANH (ID / URL) | EMAIL ĐĂNG KÝ QUẢN TRỊ | VAI TRÒ ĐƯỢC CẤP CHO KHÁCH HÀNG | PHƯƠNG THỨC BÀN GIAO | TÌNH TRẠNG XÁC NHẬN CỦA KHÁCH HÀNG |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Tên miền website (Domain)** | `[DOMAIN_NAME]` (VD: `khachhang.com`) | `[EMAIL_DOMAIN]` | Quản trị tối cao (Registrar Account / Owner) | Mời chuyển quyền / Bitwarden Send link | [ ] Đã nhận & Đã đổi mật khẩu<br>[ ] Đã bật 2FA |
| **02** | **Quản trị DNS / Cloudflare** | Cloudflare Zone ID: `[CF_ZONE_ID]` | `[EMAIL_CF]` | Super Administrator | Mời tài khoản Email qua Cloudflare Members | [ ] Đã nhận quyền Admin<br>[ ] Đã kiểm tra DNS |
| **03** | **Google Business Profile (Maps)** | Map Place ID / Tên Profile: `[GBP_NAME]` | `[EMAIL_GOOGLE_A]` | Chủ sở hữu chính (Primary Owner) | Quy trình chuyển giao sau 7 ngày của Google | [ ] Đã nhận lời mời Owner<br>[ ] Đã lên lịch chuyển Primary Owner |
| **04** | **Google Ads Account** | Customer ID: `[GOOGLE_ADS_CID]` (10 chữ số) | `[EMAIL_ADS_A]` | Quyền Quản trị viên (Admin) | Gửi lời mời quản trị qua Google Ads Tools | [ ] Đã chấp nhận quyền Admin<br>[ ] Đã tự liên kết thẻ thanh toán |
| **05** | **Google Analytics & GTM** | GA4 Property ID: `[GA4_ID]`<br>GTM Container ID: `[GTM_ID]` | `[EMAIL_GOOGLE_A]` | Quản trị viên (Administrator) | Phân quyền User qua Google Marketing Platform | [ ] Đã nhận quyền Admin |
| **06** | **Mã nguồn / Hosting / Vercel** | Git Repo / Web Admin URL: `[URL_ADMIN]` | `[EMAIL_ADMIN_A]` | Owner / Admin | Chuyển nhượng quyền sở hữu Repo / Admin User | [ ] Đã nhận bàn giao & Test login |
| **07** | **Hệ thống CRM / Automation** | CRM Sub-account / Webhook: `[CRM_URL]` | `[EMAIL_CRM_A]` | Quản trị viên cao nhất (Super Admin) | Mời Admin email / Bàn giao API keys bảo mật | [ ] Đã nhận bàn giao & Test tính năng |

---

### PHẦN III: XÁC NHẬN VÀ CAM KẾT CỦA HAI BÊN

1. **Bên A (Khách hàng) xác nhận:**
   - Đã nhận đầy đủ quyền truy cập, tài liệu hướng dẫn đăng nhập và thông tin tài khoản đối với tất cả các hạng mục được tích chọn tại Bảng danh mục nêu trên;
   - Đã kiểm tra, đăng nhập thử nghiệm thành công vào từng hệ thống;
   - Cam kết thực hiện ngay việc đổi mật khẩu, bật bảo mật 2 bước (2FA) và hoàn toàn chịu trách nhiệm quản trị bảo mật các tài khoản kể từ thời điểm ký biên bản này;
   - Đồng ý cho phép LocalMate hạ quyền hoặc xóa bỏ quyền truy cập khỏi các tài khoản không còn thuộc phạm vi bảo trì định kỳ.

2. **Bên B (LocalMate) cam kết:**
   - Đã bàn giao toàn bộ quyền quản trị hợp pháp của các tài sản thuộc về Khách hàng theo đúng quy định tại Hợp đồng và Phụ lục SHTT `LM-IP-APP-12`;
   - Đã xóa bỏ toàn bộ các bản lưu mật khẩu tạm thời khỏi hệ thống của nhân sự LocalMate sau khi Khách hàng xác nhận hoàn tất đổi mật khẩu;
   - Sẵn sàng hỗ trợ kỹ thuật trong phạm vi thời hạn bảo hành hoặc thỏa thuận duy trì SLA đã ký kết.

Biên bản này được lập thành 02 (hai) bản gốc có giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản làm căn cứ hoàn tất thủ tục bàn giao tài sản kỹ thuật số.

---

### KÝ XÁC NHẬN CỦA ĐẠI DIỆN HAI BÊN:

| ĐẠI DIỆN BÊN TIẾP NHẬN (KHÁCH HÀNG) | ĐẠI DIỆN BÊN BÀN GIAO (LOCALMATE) |
| :--- | :--- |
| *(Ký tên, ghi rõ họ tên và đóng dấu)* | *(Ký tên, ghi rõ họ tên và đóng dấu)* |
| <br><br><br> | <br><br><br> |
| **Họ và tên:** [NGUOI_DAI_DIEN_A] | **Họ và tên:** [REPRESENTATIVE] |
| **Chức vụ:** [CHUC_VU_A] | **Chức vụ:** [TITLE] |
| **Thời điểm ký:** ____:____ ngày ____/____/202[X] | **Thời điểm ký:** ____:____ ngày ____/____/202[X] |
