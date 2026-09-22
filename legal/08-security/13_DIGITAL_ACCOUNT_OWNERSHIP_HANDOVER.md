| **ĐƠN VỊ BÀN GIAO DỊCH VỤ**<br>**LOCALMATE VIỆT NAM**<br>Số: [MÃ_PHIẾU]/BG-TK-LM/[NĂM] | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br>**Độc lập - Tự do - Hạnh phúc**<br>----------------o0o----------------<br>*Hà Nội, ngày [NGÀY] tháng [THÁNG] năm 202[NĂM]* |
| :---: | :---: |

# QUY TRÌNH VÀ BIÊN BẢN BÀN GIAO QUYỀN SỞ HỮU TÀI KHOẢN KỸ THUẬT SỐ
**(DIGITAL ACCOUNT OWNERSHIP & CREDENTIAL HANDOVER PROTOCOL)**

- *Căn cứ Bộ luật Dân sự số 91/2015/QH13 ngày 24 tháng 11 năm 2015;*
- *Căn cứ Luật An toàn thông tin mạng số 86/2015/QH13 và Luật An ninh mạng số 24/2018/QH14;*
- *Căn cứ Nghị định số 13/2023/NĐ-CP ngày 17 tháng 04 năm 2023 về bảo vệ dữ liệu cá nhân;*
- *Căn cứ Hợp đồng Dịch vụ Khung số: [MÃ_HỢP_ĐỒNG] ký giữa Hai Bên.*

---

### PHẦN I: QUY TRÌNH TIÊU CHUẨN BÀN GIAO TÀI KHOẢN AN TOÀN

Nhằm bảo đảm an toàn thông tin tối đa, ngăn ngừa nguy cơ lộ lọt mật khẩu, tranh chấp quyền sở hữu hoặc tấn công chiếm đoạt tài khoản kỹ thuật số, LocalMate và Khách hàng cam kết tuân thủ quy trình bàn giao chuẩn 04 bước:

#### BƯỚC 1: XÁC MINH CHỦ THỂ VÀ THIẾT LẬP EMAIL CHÍNH CHỦ
1. Toàn bộ tài khoản dịch vụ (Domain, Cloudflare, Google Ads, Google Business Profile, CRM) bắt buộc phải được đăng ký hoặc liên kết với hòm thư điện tử chính thức của Khách hàng (`[EMAIL_A]` hoặc email thuộc tên miền của doanh nghiệp Bên A).
2. Tuyệt đối không sử dụng email cá nhân của nhân sự LocalMate để đăng ký vĩnh viễn tài sản của Khách hàng. Trường hợp LocalMate tạo hộ tài khoản phục vụ quá trình setup ban đầu, LocalMate phải tiến hành chuyển giao quyền sở hữu chính chủ (Transfer of Ownership) theo đúng Bước 3.

#### BƯỚC 2: NGUYÊN TẮC BÀN GIAO CREDENTIAL AN TOÀN (ZERO-CLEARTEXT POLICY)
1. **Tuyệt đối cấm:** Hai Bên nghiêm cấm việc gửi thông tin đăng nhập, tên người dùng và mật khẩu ở dạng văn bản thô (cleartext password) qua các ứng dụng tin nhắn không mã hóa đầu cuối (Zalo cá nhân, Messenger, SMS) hoặc gửi trực tiếp trong email thông thường.
2. **Phương thức bàn giao hợp lệ:** Mọi thông tin đăng nhập nhạy cảm (Password, API Secret Keys, Recovery Codes) bắt buộc phải được truyền tải thông qua:
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
2. **Miễn trừ trách nhiệm:** Kể từ thời điểm Hai Bên ký Biên bản bàn giao, Khách hàng chịu hoàn toàn trách nhiệm về việc bảo mật, quản lý và vận hành các tài khoản số này. LocalMate hoàn toàn được miễn trừ mọi trách nhiệm pháp lý và bồi thường đối với các sự cố xảy ra sau ngày bàn giao (bị hack do nhân sự Khách hàng làm lộ mật khẩu, mất quyền truy cập do không gia hạn tên miền, vi phạm chính sách do Khách hàng tự ý thay đổi cấu hình hoặc nội dung).

---

### PHẦN II: BIÊN BẢN BÀN GIAO TÀI KHOẢN KỸ THUẬT SỐ

Hôm nay, ngày [NGÀY] tháng [THÁNG] năm 202[NĂM], Hai Bên tiến hành lập và ký Biên bản bàn giao tài khoản kỹ thuật số đối với dự án: **[TÊN_DỰ_ÁN]** theo chi tiết danh mục sau:

#### BẢNG DANH MỤC TÀI KHOẢN BÀN GIAO:

| STT | NỀN TẢNG & TÀI NGUYÊN | ĐỊNH DANH / URL & EMAIL QUẢN TRỊ | VAI TRÒ CẤP & PHƯƠNG THỨC | XÁC NHẬN CỦA KHÁCH HÀNG |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Tên miền website (Domain)** | Tên miền: `[DOMAIN_NAME]`<br>Email: `[EMAIL_DOMAIN]` | Quản trị tối cao (Registrar Account)<br>Phương thức: Mời chuyển quyền / Bitwarden Send | [ ] Đã nhận & Đổi mật khẩu<br>[ ] Đã bật bảo mật 2FA |
| **02** | **Quản trị DNS / Cloudflare** | Zone ID: `[CF_ZONE_ID]`<br>Email: `[EMAIL_CF]` | Super Administrator<br>Phương thức: Phân quyền qua Cloudflare Members | [ ] Đã nhận quyền Admin<br>[ ] Đã kiểm tra DNS |
| **03** | **Google Business Profile (Maps)** | Place ID / Tên Map: `[GBP_NAME]`<br>Email: `[EMAIL_GOOGLE_A]` | Chủ sở hữu chính (Primary Owner)<br>Phương thức: Phân quyền sau 7 ngày của Google | [ ] Đã nhận lời mời Owner<br>[ ] Đã lên lịch chuyển Primary |
| **04** | **Google Ads Account** | CID: `[GOOGLE_ADS_CID]`<br>Email: `[EMAIL_ADS_A]` | Quyền Quản trị viên (Admin)<br>Phương thức: Lời mời quản trị Google Ads Tools | [ ] Đã chấp nhận quyền Admin<br>[ ] Đã tự liên kết thẻ thanh toán |
| **05** | **Google Analytics & GTM** | GA4 ID: `[GA4_ID]` / GTM ID: `[GTM_ID]`<br>Email: `[EMAIL_GOOGLE_A]` | Administrator<br>Phương thức: Phân quyền Google Marketing Platform | [ ] Đã nhận quyền Admin<br>[ ] Đã kiểm tra luồng dữ liệu |
| **06** | **Mã nguồn / Hosting / Vercel** | Git Repo / Web URL: `[URL_ADMIN]`<br>Email: `[EMAIL_ADMIN_A]` | Owner / Admin<br>Phương thức: Bàn giao Repo / Admin User | [ ] Đã nhận bàn giao<br>[ ] Đã đăng nhập thử nghiệm |
| **07** | **Hệ thống CRM / Automation** | CRM URL: `[CRM_URL]`<br>Email: `[EMAIL_CRM_A]` | Quản trị viên cao nhất (Super Admin)<br>Phương thức: Mời Admin / Bàn giao Webhook API | [ ] Đã nhận bàn giao<br>[ ] Đã kiểm tra tính năng |

---

### PHẦN III: XÁC NHẬN VÀ CAM KẾT CỦA HAI BÊN

1. **Bên A (Khách hàng) xác nhận:**
   - Đã nhận đầy đủ quyền truy cập, tài liệu hướng dẫn đăng nhập và thông tin tài khoản đối với tất cả các hạng mục được tích chọn tại Bảng danh mục nêu trên;
   - Đã kiểm tra, đăng nhập thử nghiệm thành công vào từng hệ thống;
   - Cam kết thực hiện ngay việc đổi mật khẩu, bật bảo mật 2 bước (2FA) và hoàn toàn chịu trách nhiệm quản trị bảo mật các tài khoản kể từ thời điểm ký biên bản này;
   - Đồng ý cho phép LocalMate hạ quyền hoặc xóa bỏ quyền truy cập khỏi các tài khoản không còn thuộc phạm vi bảo trì định kỳ.

2. **Bên B (LocalMate) cam kết:**
   - Đã bàn giao toàn bộ quyền quản trị hợp pháp của các tài sản thuộc về Khách hàng theo đúng quy định tại Hợp đồng;
   - Đã xóa bỏ toàn bộ các bản lưu mật khẩu tạm thời khỏi hệ thống của nhân sự LocalMate sau khi Khách hàng xác nhận hoàn tất đổi mật khẩu;
   - Sẵn sàng hỗ trợ kỹ thuật trong phạm vi thời hạn bảo hành hoặc thỏa thuận duy trì SLA đã ký kết.

Biên bản này được lập thành 02 (hai) bản gốc có giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản làm căn cứ hoàn tất thủ tục bàn giao tài sản kỹ thuật số.

---

| ĐẠI DIỆN BÊN TIẾP NHẬN (KHÁCH HÀNG) | ĐẠI DIỆN BÊN BÀN GIAO (LOCALMATE) |
| :---: | :---: |
| *(Ký tên, ghi rõ họ tên và đóng dấu)* | *(Ký tên, ghi rõ họ tên và đóng dấu)* |
| <br><br><br><br> | <br><br><br><br> |
| **[NGƯỜI_ĐẠI_DIỆN_A]** | **[REPRESENTATIVE]** |
| Chức vụ: [CHỨC_VỤ_A] | Chức vụ: [TITLE] |
| Ngày ký: ..... / ..... / 202[NĂM] | Ngày ký: ..... / ..... / 202[NĂM] |

