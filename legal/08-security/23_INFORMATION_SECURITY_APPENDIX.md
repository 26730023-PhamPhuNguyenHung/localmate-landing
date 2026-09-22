| **ĐƠN VỊ CUNG CẤP DỊCH VỤ**<br>**LOCALMATE VIỆT NAM**<br>Số: [MÃ_ĐƠN]/PL-ATTT-LM/[NĂM] | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br>**Độc lập - Tự do - Hạnh phúc**<br>----------------o0o----------------<br>*Hà Nội, ngày [NGÀY] tháng [THÁNG] năm 202[NĂM]* |
| :---: | :---: |

# PHỤ LỤC AN TOÀN THÔNG TIN MẠNG VÀ BẢO ĐẢM AN NINH KỸ THUẬT
**(INFORMATION SECURITY & ANTI-SPAM COMPLIANCE APPENDIX)**

- *Căn cứ Luật An toàn thông tin mạng số 86/2015/QH13 (Điều 16, Điều 17, Điều 20 về bảo vệ thông tin cá nhân và chống thư rác);*
- *Căn cứ Luật An ninh mạng số 24/2018/QH14 và Nghị định số 53/2022/NĐ-CP;*
- *Căn cứ Nghị định số 13/2023/NĐ-CP ngày 17 tháng 04 năm 2023 về bảo vệ dữ liệu cá nhân;*
- *Căn cứ Nghị định số 91/2020/NĐ-CP về chống tin nhắn rác, thư rác, cuộc gọi rác và quy định về gửi tin nhắn quảng cáo;*
- *Căn cứ Hợp đồng Dịch vụ Khung số: [MÃ_HỢP_ĐỒNG] ký giữa Hai Bên.*

Hai Bên thống nhất các tiêu chuẩn kỹ thuật, quy định an toàn thông tin và cam kết phòng chống thư rác/tin nhắn rác áp dụng cho toàn bộ hạ tầng Website, phần mềm CRM, hệ thống tự động hóa và các kênh kết nối dữ liệu như sau:


---

### ĐIỀU 1. CÁC TIÊU CHUẨN AN TOÀN KỸ THUẬT CƠ SỞ (SECURITY BASELINE)
Trong quá trình thiết kế, lập trình và triển khai hệ thống cho Bên A, LocalMate cam kết áp dụng các biện pháp kỹ thuật và tổ chức (TOMs) theo chuẩn thực hành tốt nhất của ngành công nghệ phần mềm:

1.1. **Mã hóa dữ liệu trong truyền tải (Data in Transit):**
- Bắt buộc kích hoạt giao thức bảo mật truyền tải HTTPS/TLS (phiên bản tối thiểu TLS 1.2, khuyến nghị TLS 1.3) cho 100% các trang web, cổng API và webhook kết nối;
- Cấu hình chuyển hướng tự động toàn bộ lưu lượng HTTP không an toàn sang kết nối mã hóa HTTPS an toàn;
- Tích hợp chứng chỉ số SSL/TLS hợp lệ (Let's Encrypt hoặc Cloudflare Universal SSL).

1.2. **Bảo mật mã nguồn và Cơ sở dữ liệu (Database & Source Code Security):**
- Áp dụng kỹ thuật Parameterized Queries / ORM chuẩn (Prisma, Drizzle...) trong truy vấn cơ sở dữ liệu nhằm triệt tiêu hoàn toàn lỗ hổng tấn công chèn mã độc SQL Injection (SQLi);
- Áp dụng các bộ lọc làm sạch dữ liệu đầu vào (Input Sanitization) và mã hóa đầu ra (Output Encoding) để phòng ngừa triệt để lỗ hổng tấn công Cross-Site Scripting (XSS);
- Không lưu trữ mật khẩu ở dạng văn bản thô (cleartext). Mọi mật khẩu người dùng lưu trên hệ thống phải được băm (hash) bằng các thuật toán băm mật mã an toàn chuẩn công nghiệp (Bcrypt, Argon2, PBKDF2) kèm chuỗi muối ngẫu nhiên (salt).

1.3. **Quản lý Secrets, API Keys và Quyền truy cập tối thiểu (Least Privilege):**
- Tuyệt đối không nhúng mã bí mật (hardcode API keys, database credentials, JWT secrets) trực tiếp vào mã nguồn công khai (public git repository);
- Toàn bộ secret keys phải được quản lý thông qua biến môi trường (Environment Variables) hoặc hệ thống quản lý bí mật đám mây (Cloudflare Secrets, Vercel Environment Variables);
- Phân quyền người dùng theo vai trò (RBAC): Chỉ cấp đúng và đủ quyền cần thiết cho từng tài khoản nhân sự thực hiện công việc.

1.4. **Bảo vệ chống tấn công từ chối dịch vụ (Anti-DDoS & WAF):**
- Định tuyến lưu lượng truy cập qua mạng phân phối nội dung và tường lửa ứng dụng web (Cloudflare WAF);
- Kích hoạt cơ chế giới hạn tần suất yêu cầu (Rate Limiting) trên các endpoint nhạy cảm (form đăng ký, API gửi OTP, trang đăng nhập) để chống tấn công brute-force và spam bot.

---

### ĐIỀU 2. NGHĨA VỤ AN TOÀN CỦA KHÁCH HÀNG (BÊN A)
Bên A thừa nhận rằng an toàn thông tin là trách nhiệm chung của Hai Bên. Bên A cam kết thực hiện đầy đủ các nghĩa vụ sau:

2.1. **Quản lý tài khoản và thông tin xác thực nội bộ:**
- Thiết lập mật khẩu mạnh cho toàn bộ nhân sự có quyền truy cập hệ thống (tối thiểu 12 ký tự, kết hợp chữ, số và ký tự đặc biệt);
- Bắt buộc kích hoạt Xác thực đa yếu tố (MFA/2FA) đối với các tài khoản có quyền Quản trị viên (Super Admin, Manager);
- Thu hồi ngay lập tức quyền truy cập của nhân viên nghỉ việc hoặc thay đổi vị trí công tác;
- Không chia sẻ dùng chung một tài khoản quản trị cho nhiều nhân viên.

2.2. **Bảo đảm an toàn máy trạm (Endpoint Security):**
- Đảm bảo các thiết bị máy tính, điện thoại cá nhân của nhân sự Bên A dùng để đăng nhập hệ thống được cập nhật hệ điều hành mới nhất, có cài đặt phần mềm chống virus/mã độc có bản quyền;
- Không cài đặt các phần mềm bẻ khóa (crack), không tải file lạ không rõ nguồn gốc dẫn đến nguy cơ bị mã độc đánh cắp phiên đăng nhập (Session Hijacking / Cookie Stealer).

---

### ĐIỀU 3. RANH GIỚI CAM KẾT VÀ MIỄN TRỪ TRÁCH NHIỆM AN NINH MẠNG
3.1. **Nguyên tắc nỗ lực kỹ thuật hợp lý (Reasonable Best Efforts):**
LocalMate cam kết áp dụng các biện pháp an ninh mạng hợp lý, chuyên nghiệp và cập nhật nhất tại thời điểm triển khai. Tuy nhiên, Hai Bên công nhận một thực tế khách quan rằng: **Trong kỷ nguyên số, không có bất kỳ hệ thống công nghệ thông tin nào trên thế giới có thể bảo đảm an toàn tuyệt đối 100% trước mọi hình thức tấn công mạng phức tạp mới xuất hiện.** Do đó, LocalMate không đưa ra bất kỳ cam kết nào mang tính chất tuyệt đối rằng "hệ thống sẽ không bao giờ bị tấn công hoặc xâm nhập".

3.2. **Các trường hợp LocalMate được miễn trừ hoàn toàn trách nhiệm:**
LocalMate không chịu trách nhiệm pháp lý, không bị phạt vi phạm và không phải bồi thường thiệt hại đối với các sự cố an ninh mạng phát sinh từ:
- (a) Lỗ hổng bảo mật dạng Zero-Day (lỗ hổng chưa từng được công bố và chưa có bản vá từ nhà cung ứng phần mềm toàn cầu);
- (b) Hành vi bất cẩn, để lộ mật khẩu, rò rỉ mã OTP, mã xác thực của chính nhân sự hoặc đối tác của Bên A;
- (c) Thiết bị đầu cuối của nhân sự Bên A bị nhiễm mã độc, trojan, keylogger đánh cắp phiên làm việc;
- (d) Sự cố tấn công mạng quy mô lớn mang tính chất thảm họa nhắm vào các nhà cung ứng hạ tầng đám mây toàn cầu (Cloudflare, AWS, Google Cloud, Microsoft Azure);
- (e) Trường hợp Bên A tự ý cài đặt thêm mã nguồn lạ, plugins không rõ nguồn gốc, hoặc tự ý can thiệp chỉnh sửa cấu hình hệ thống mà không có sự phê duyệt kỹ thuật bằng văn bản của LocalMate.

---

### ĐIỀU 4. TUÂN THỦ PHÁP LUẬT VỀ CHỐNG THƯ RÁC VÀ TIN NHẮN RÁC (NGHỊ ĐỊNH 91/2020/NĐ-CP)
Khi triển khai các giải pháp tiếp thị tự động, gửi email thông báo, tin nhắn SMS Brandname hoặc Zalo ZNS cho khách hàng của Bên A:

4.1. **Nguyên tắc có sự đồng ý trước (Opt-in Principle):**
- Bên A cam kết chỉ gửi thông điệp quảng cáo (email, tin nhắn, ZNS) đến các khách hàng đã chủ động đăng ký nhận tin và có sự đồng ý rõ ràng, hợp pháp trước đó (Opt-in);
- Tuyệt đối nghiêm cấm việc Bên A mua bán, thu thập trái phép các danh sách số điện thoại, email trôi nổi trên mạng (danh sách quét data rác) để đưa vào hệ thống CRM/Automation của LocalMate nhằm mục đích phát tán tin nhắn hàng loạt.

4.2. **Nguyên tắc rút lui dễ dàng (Opt-out Principle):**
- Mọi email tiếp thị, bản tin (Newsletter) gửi đi bắt buộc phải tích hợp liên kết hủy đăng ký nhận tin (Unsubscribe link) tự động, rõ ràng ở chân trang email;
- Khi khách hàng nhấn hủy nhận tin, hệ thống CRM phải tự động cập nhật trạng thái ngừng gửi tin nhắn tiếp thị trong vòng tối đa 24 giờ.

4.3. **Quy định Danh sách không nhận quảng cáo (Do-Not-Call / Do-Not-Spam):**
- Bên A cam kết kiểm tra và loại trừ các thuê bao nằm trong Danh sách không nhận quảng cáo quốc gia do Cục An toàn thông tin quản lý theo quy định tại Nghị định 91/2020/NĐ-CP;
- Trường hợp Bên A cố tình vi phạm dẫn đến việc tên miền bị đưa vào danh sách đen (Blacklist), tài khoản gửi tin bị khóa hoặc bị cơ quan chức năng phạt vi phạm hành chính, Bên A chịu hoàn toàn trách nhiệm và bồi hoàn mọi tổn thất cho LocalMate theo Điều khoản Bồi hoàn tại Hợp đồng khung.

---

### ĐIỀU 5. QUY TRÌNH ỨNG PHÓ VÀ KHẮC PHỤC SỰ CỐ AN NINH (INCIDENT RESPONSE)
5.1. **Tiếp nhận và khoanh vùng sự cố:**
Ngay khi phát hiện có dấu hiệu bị tấn công mạng, rò rỉ dữ liệu hoặc xâm nhập trái phép:
- Bên phát hiện phải thông báo ngay lập tức cho đầu mối kỹ thuật của Bên kia (trong vòng tối đa 02 giờ);
- LocalMate tiến hành khoanh vùng kỹ thuật khẩn cấp: Tạm thời ngắt kết nối các endpoint bị tấn công, thu hồi tokens/API keys bị nghi ngờ lộ lọt, khôi phục hệ thống từ bản sao lưu sạch an toàn gần nhất (Clean Backup).

5.2. **Phối hợp điều tra và Báo cáo cơ quan chức năng:**
- Hai Bên cùng trích xuất và bảo lưu toàn bộ file nhật ký hệ thống (System Access Logs) để phục vụ công tác điều tra;
- Trường hợp sự cố có dấu hiệu rò rỉ dữ liệu cá nhân quy mô nghiêm trọng, Hai Bên có nghĩa vụ lập báo cáo theo Mẫu số 03 (Phụ lục `LM-PDP-INC-10D`) để thông báo cho Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05) - Bộ Công an trong thời hạn **72 giờ** luật định theo Nghị định 356/2025/NĐ-CP và Nghị định 330/2026/NĐ-CP.

---

Phụ lục này là một bộ phận không thể tách rời của Hợp đồng Dịch vụ Khung (MSA), được lập thành 02 (hai) bản gốc có giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản để thực thi.

| ĐẠI DIỆN BÊN A (KHÁCH HÀNG) | ĐẠI DIỆN BÊN B (LOCALMATE) |
| :---: | :---: |
| *(Ký tên, ghi rõ họ tên và đóng dấu)* | *(Ký tên, ghi rõ họ tên và đóng dấu)* |
| <br><br><br><br> | <br><br><br><br> |
| **[NGƯỜI_ĐẠI_DIỆN_A]** | **[REPRESENTATIVE]** |
| Chức vụ: [CHỨC_VỤ_A] | Chức vụ: [TITLE] |
| Ngày ký: ..... / ..... / 202[NĂM] | Ngày ký: ..... / ..... / 202[NĂM] |

