# THỎA THUẬN XỬ LÝ DỮ LIỆU CÁ NHÂN (DPA)
**(DATA PROCESSING AGREEMENT - LOCALMATE ENTERPRISE STANDARD)**  
**Số hiệu Văn bản:** [MÃ_ĐƠN]/DPA-LM/[NĂM]  
*(Ban hành kèm theo Hợp đồng Dịch vụ Khung số: [MÃ_HỢP_ĐỒNG] ký ngày [NGÀY_KÝ])*

---

### CĂN CỨ PHÁP LUẬT BẮT BUỘC
- **Luật Bảo vệ dữ liệu cá nhân 2025** (Luật số 91/2025/QH15, có hiệu lực từ **01/01/2026**).
- **Nghị định số 13/2023/NĐ-CP** ngày 17/04/2023 của Chính phủ về bảo vệ dữ liệu cá nhân (và Nghị định 356/2025/NĐ-CP hướng dẫn thi hành).
- **Luật An ninh mạng 2018**, **Luật An toàn thông tin mạng 2015**, **Luật Dữ liệu 2024**.
- **Nghị định số 330/2026/NĐ-CP** (hiệu lực từ 19/08/2026) về xử phạt vi phạm hành chính an ninh mạng và dữ liệu cá nhân (mức phạt lên tới 5% doanh thu hoặc 03 tỷ đồng).

---

Hôm nay, ngày [NGÀY] tháng [THÁNG] năm 202[NĂM], Thỏa thuận này được ký kết giữa:

**BÊN KIỂM SOÁT DỮ LIỆU CÁ NHÂN (BÊN A / KHÁCH HÀNG):**
- Tên Doanh nghiệp / Hộ kinh doanh: **[TÊN_DOANH_NGHIỆP_KHÁCH_HÀNG]**
- Mã số thuế: [MST_KHÁCH_HÀNG]
- Đại diện: [ĐẠI_DIỆN_KHÁCH_HÀNG] — Chức vụ: [CHỨC_VỤ_KHÁCH_HÀNG]
- Đầu mối DPO / IT: [TÊN_DPO_A] — Email: [EMAIL_DPO_A] — SĐT: [SĐT_DPO_A]

**BÊN XỬ LÝ DỮ LIỆU CÁ NHÂN (BÊN B / LOCALMATE):**
- Tên pháp lý: **[LOCALMATE_LEGAL_NAME]**
- Mã số thuế: **[MST]**
- Đại diện: **[REPRESENTATIVE]** — Chức vụ: **[TITLE]**
- Đầu mối DPO / Phụ trách PDP: dpo@localmate.vn — SĐT: [PHONE]

---

### ĐIỀU 1: XÁC ĐỊNH TƯ CÁCH PHÁP LÝ & BẢN CHẤT HOẠT ĐỘNG XỬ LÝ
1.1. **Bên A là Bên Kiểm soát Dữ liệu Cá nhân (Data Controller):**
- Bên A là bên duy nhất quyết định mục đích thu thập (để tư vấn bán hàng, chốt đơn, cung cấp dịch vụ cho khách hàng của Bên A) và phương tiện xử lý dữ liệu cá nhân.
- **Trách nhiệm pháp lý của Bên A:** Chịu trách nhiệm 100% trước pháp luật và Chủ thể dữ liệu về việc thu thập sự đồng ý hợp lệ (Consent) của khách hàng trên website (đặt checkbox opt-in, công bố Chính sách quyền riêng tư); chịu trách nhiệm lập và nộp Hồ sơ đánh giá tác động xử lý dữ liệu (DPIA) cho Cục An ninh mạng (A05 - Bộ Công an) theo Điều 24 Nghị định 13/2023/NĐ-CP.  
1.2. **Bên B là Bên Xử lý Dữ liệu Cá nhân (Data Processor):**
- Bên B là đơn vị cung ứng hạ tầng kỹ thuật (Website, Cloudflare Workers, Form, Webhook, CRM) thực hiện xử lý dữ liệu cá nhân **thay mặt và theo sự ủy quyền/chỉ đạo bằng văn bản** của Bên A thông qua Hợp đồng dịch vụ.
- **Cam kết của Bên B:** Tuyệt đối không sử dụng dữ liệu lead của Bên A cho mục đích thương mại riêng của Bên B; không chia sẻ, bán, hoặc khai thác dữ liệu trái phép dưới bất kỳ hình thức nào.

---

### ĐIỀU 2: PHẠM VI, LOẠI DỮ LIỆU & NHÓM CHỦ THỂ DỮ LIỆU
2.1. **Nhóm Chủ Thể Dữ Liệu:** Khách hàng tiềm năng (Leads), khách hàng thực tế truy cập và điền thông tin vào các biểu mẫu trên Website, Landing Page, hoặc kênh mạng xã hội của Bên A.  
2.2. **Danh Mục Dữ Liệu Cá Nhân Được Xử Lý:**
- *Dữ liệu cá nhân cơ bản:* Họ và tên, số điện thoại, địa chỉ email, địa chỉ liên hệ/giao hàng, nội dung lời nhắn/yêu cầu tư vấn, thời gian gửi biểu mẫu, địa chỉ IP kết nối, User-Agent trình duyệt và thông số chiến dịch tiếp thị (UTM parameters).
- *Dữ liệu cá nhân nhạy cảm:* Hai Bên xác nhận mặc định **KHÔNG thu thập và KHÔNG xử lý** dữ liệu nhạy cảm (thông tin thẻ tín dụng chi tiết, bệnh án sức khỏe, quan điểm tôn giáo chính trị, dữ liệu vị trí địa lý chính xác). Nếu ngành nghề kinh doanh của Bên A yêu cầu thu thập dữ liệu sức khỏe (Phòng khám, Nha khoa), Bên A phải có văn bản xác nhận đã lấy sự đồng ý rõ ràng của chủ thể dữ liệu theo Điều 10, Điều 11 NĐ 13/2023/NĐ-CP.  
2.3. **Mục Đích Xử Lý:** Tiếp nhận dữ liệu, xác thực chống bot/spam, định tuyến tự động (routing) và đồng bộ dữ liệu vào cơ sở dữ liệu CRM/Google Sheets/Email/Telegram theo đúng cấu hình Bên A chỉ định.

---

### ĐIỀU 3: BIỆN PHÁP AN NINH KỸ THUẬT VÀ TỔ CHỨC (TOMS)
Bên B cam kết áp dụng các biện pháp kỹ thuật và tổ chức bảo vệ dữ liệu tương ứng với chuẩn an toàn thông tin Cấp độ 2 (TCVN 11930:2017):
3.1. **Mã Hóa Toàn Diện:** Mã hóa dữ liệu trên đường truyền (In-transit) bằng giao thức HTTPS/TLS 1.3; mã hóa dữ liệu lưu trữ (At-rest) chuẩn AES-256 đối với cơ sở dữ liệu hoạt động.  
3.2. **Kiểm Soát Truy Cập Phân Quyền (RBAC & Least Privilege):** Chỉ những kỹ thuật viên được chỉ định của Bên B mới có quyền truy cập hạ tầng backend để xử lý sự cố. Kích hoạt xác thực đa yếu tố (MFA/2FA) bắt buộc trên mọi tài khoản quản trị.  
3.3. **Chống Tấn Công Form Tự Động:** Áp dụng công nghệ xác thực Cloudflare Turnstile vô hình nhằm ngăn chặn botnet gửi spam hoặc tấn công tràn bộ đệm.  
3.4. **Ghi Nhật Ký Hệ Thống (Audit Logs):** Duy trì lưu trữ nhật ký truy vết truy cập, xuất dữ liệu và gọi API tối thiểu **12 tháng** phục vụ công tác thanh kiểm tra của cơ quan chuyên trách.

---

### ĐIỀU 4: SỬ DỤNG BÊN XỬ LÝ PHỤ (SUB-PROCESSORS) & CHUYỂN DỮ LIỆU XUYÊN BIÊN GIỚI
4.1. **Cấp Quyền Chung Sử Dụng Bên Xử Lý Phụ:** Bên A đồng ý cho phép Bên B sử dụng các nhà cung cấp dịch vụ hạ tầng công nghệ bên thứ ba nằm trong **Sổ Đăng Ký Bên Xử Lý Phụ (Bản Phụ Lục 10B)** bao gồm:
- *Lưu trữ & Edge Compute:* Cloudflare, Inc. (Mỹ / Mạng Anycast toàn cầu);
- *Cơ sở dữ liệu:* Supabase, Inc. (Singapore / AWS ap-southeast-1);
- *Lưu trữ tài liệu & Email:* Google LLC (Google Sheets, Gmail);
- *Gửi Email giao dịch:* Resend, Inc. (Mỹ);
- *Thông báo tức thì:* Telegram FZ-LLC (Dubai) / Công ty CP VNG (Zalo ZNS - Việt Nam).  
4.2. **Chuyển Dữ Liệu Ra Nước Ngoài (Cross-border Data Transfer):**
Căn cứ Điều 25 Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân 2025:
- Do máy chủ của Cloudflare, Google, Supabase, Resend đặt tại nước ngoài, việc truyền dữ liệu được xác định là hoạt động chuyển dữ liệu xuyên biên giới.
- Bên B cam kết các Bên xử lý phụ nêu trên đều đạt các chứng chỉ bảo mật quốc tế khắt khe (ISO/IEC 27001, SOC 2 Type II, tuân thủ EU Standard Contractual Clauses - SCCs).
- Bên B có trách nhiệm cung cấp sơ đồ luồng dữ liệu kỹ thuật để Bên A hoàn tất **Hồ sơ đánh giá tác động chuyển dữ liệu ra nước ngoài** nộp Cục An ninh mạng (A05 - Bộ Công an) theo luật định.  
4.3. **Thông Báo Thay Đổi Sub-processor:** Khi bổ sung nhà cung cấp mới, Bên B sẽ thông báo bằng văn bản/email cho Bên A trước ít nhất **10 ngày làm việc**. Bên A có quyền phản đối bằng văn bản có lý do chính đáng về mặt bảo mật.

---

### ĐIỀU 5: QUY TRÌNH ỨNG PHÓ & THÔNG BÁO SỰ CỐ TRONG 72 GIỜ (DATA BREACH PROTOCOL)
5.1. **Phát Hiện & Cô Lập Sự Cố:** Ngay khi phát hiện sự cố mất an toàn thông tin, rò rỉ dữ liệu hoặc truy cập trái phép:
- Trong vòng **02 giờ**: Bên B kích hoạt biện pháp kỹ thuật cô lập hệ thống, khóa endpoint API bị tấn công và xoay vòng secret tokens.
5.2. **Thông Báo Cho Bên A Trong 24 - 48 Giờ:** Bên B có trách nhiệm gửi thông báo bằng văn bản khẩn cấp cho Đầu mối DPO của Bên A chậm nhất trong vòng **48 giờ** kể từ thời điểm phát hiện, nêu rõ: Bản chất sự cố, loại dữ liệu bị ảnh hưởng, số lượng ước tính và các biện pháp khắc phục đã kích hoạt.  
5.3. **Tuân Thủ Thời Hạn 72 Giờ Báo Cáo Bộ Công An:** Bên B cam kết cung cấp đầy đủ thông số kỹ thuật, trích xuất audit log để Bên A hoàn thiện văn bản thông báo vi phạm dữ liệu cá nhân (theo Mẫu số 03 NĐ 13/2023/NĐ-CP) gửi **Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05 - Bộ Công an)** trong thời hạn không quá **72 giờ** kể từ khi phát hiện sự cố.

---

### ĐIỀU 6: HỖ TRỢ THỰC HIỆN QUYỀN CỦA CHỦ THỂ DỮ LIỆU (DSR)
Căn cứ Điều 9 Nghị định 13/2023/NĐ-CP, chủ thể dữ liệu có 11 quyền hợp pháp (quyền được biết, đồng ý, truy cập, rút lại sự đồng ý, xóa dữ liệu, hạn chế xử lý, khiếu nại...):
6.1. Khi chủ thể dữ liệu gửi yêu cầu thực hiện quyền trực tiếp đến Bên B, Bên B sẽ chuyển tiếp yêu cầu đó cho Bên A trong vòng **24 - 48 giờ**.  
6.2. Bên B cam kết cung cấp các công cụ kỹ thuật và thực thi thao tác xóa, trích xuất hoặc chỉnh sửa bản ghi dữ liệu cá nhân theo lệnh hợp lệ của Bên A trong thời hạn tối đa **72 giờ** kể từ khi nhận được yêu cầu.

---

### ĐIỀU 7: THỜI HẠN LƯU TRỮ, TRẢ LẠI VÀ XÓA DỮ LIỆU VĨNH VIỄN
7.1. **Thời Hạn Lưu Trữ Tạm Thời:** Trên hệ thống máy chủ tạm, worker cache của Bên B, dữ liệu lead chỉ được lưu trữ tạm thời tối đa **30 ngày** để phục vụ việc đối soát đường truyền, sau đó được tự động dọn dẹp (auto-purge).  
7.2. **Quy Trình Xóa Dữ Liệu Khi Chấm Dứt Hợp Đồng:** Trong vòng **30 ngày** kể từ ngày Hợp đồng dịch vụ chấm dứt hoặc thanh lý:
a) Bên B xuất toàn bộ dữ liệu khách hàng thuộc quyền sở hữu của Bên A dưới dạng tệp chuẩn (CSV/JSON) bàn giao cho Bên A;  
b) Bên B thực hiện xóa vĩnh viễn không thể phục hồi (Permanent cryptographic deletion) toàn bộ bản ghi dữ liệu cá nhân trên các hệ thống, máy chủ lưu trữ của Bên B (ngoại trừ các chứng từ kế toán thuế bắt buộc phải lưu trữ theo Luật Kế toán);  
c) Bên B ký và cấp **Biên Bản Xác Nhận Hoàn Tất Xóa Dữ Liệu (Mẫu 10E)** gửi Bên A để lưu hồ sơ tuân thủ.

---

### ĐIỀU 8: GIỚI HẠN TRÁCH NHIỆM & MIỄN TRỪ
8.1. Bên B chỉ chịu trách nhiệm bồi thường thiệt hại trực tiếp nếu Bên A chứng minh được bằng phán quyết có hiệu lực pháp luật rằng sự cố lộ lọt dữ liệu hoàn toàn do lỗi bất cẩn nghiêm trọng hoặc hành vi cố ý vi phạm cam kết kỹ thuật của Bên B.  
8.2. **Bên B Hoàn Toàn Được Miễn Trừ Trách Nhiệm Trong Các Trường Hợp:**
- Bên A thu thập dữ liệu người dùng mà không có sự đồng ý hợp lệ (không có Opt-in Consent);
- Nhân sự của Bên A làm lộ tài khoản quản trị, mật khẩu hoặc thiết bị của Bên A bị nhiễm phần mềm gián điệp;
- Bên A tự ý cấu hình sai quyền truy cập hoặc chia sẻ dữ liệu cho bên thứ ba ngoài hệ thống;
- Sự cố phát sinh do tấn công mạng cấp quốc gia hoặc lỗ hổng Zero-day toàn cầu chưa có bản vá từ nhà sản xuất hạ tầng.  
8.3. Mức trần trách nhiệm bồi thường của Bên B đối với Thỏa thuận DPA này tuân thủ theo mức trần trách nhiệm chung quy định tại Điều 16 Hợp đồng Khung MSA.

---

### ĐẠI DIỆN HỢP PHÁP CÁC BÊN KÝ TÊN

```
             ĐẠI DIỆN BÊN A                                   ĐẠI DIỆN BÊN B
  (Ký tên, đóng dấu hoặc Ký số điện tử)             (Ký tên, đóng dấu hoặc Ký số điện tử)
```
