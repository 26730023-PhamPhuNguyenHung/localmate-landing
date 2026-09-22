| **ĐƠN VỊ CUNG CẤP DỊCH VỤ**<br>**LOCALMATE VIỆT NAM**<br>Số: [MÃ_ĐƠN]/PL-CRM-LM/[NĂM] | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br>**Độc lập - Tự do - Hạnh phúc**<br>----------------o0o----------------<br>*Hà Nội, ngày [NGÀY] tháng [THÁNG] năm 202[NĂM]* |
| :---: | :---: |

# PHỤ LỤC DỊCH VỤ CRM, TỰ ĐỘNG HÓA & TÍCH HỢP HỆ THỐNG
**(CRM, AUTOMATION & SYSTEM INTEGRATION APPENDIX)**

- *Căn cứ Luật Công nghệ thông tin số 67/2006/QH11 ngày 29 tháng 06 năm 2006;*
- *Căn cứ Luật An toàn thông tin mạng số 86/2015/QH13 và Luật An ninh mạng số 24/2018/QH14;*
- *Căn cứ Nghị định số 13/2023/NĐ-CP ngày 17 tháng 04 năm 2023 của Chính phủ về bảo vệ dữ liệu cá nhân;*
- *Căn cứ Hợp đồng Dịch vụ Khung số: [MÃ_HỢP_ĐỒNG] ký giữa Hai Bên.*

---

### ĐIỀU 1: ĐỊNH NGHĨA KỸ THUẬT & KIẾN TRÚC HỆ THỐNG
1.1. **Hệ Thống CRM & Automation:** Là giải pháp phần mềm và luồng tự động hóa do Bên B thiết lập nhằm tiếp nhận dữ liệu khách hàng tiềm năng (Leads), phân loại trạng thái, kích hoạt thông báo tự động và quản lý vòng đời khách hàng.  
1.2. **Các Thành Phần Kiến Trúc Cốt Lõi:**
- **Cơ sở dữ liệu (Database):** Hệ thống lưu trữ dữ liệu có cấu trúc (Supabase PostgreSQL / Google Sheets bảo mật);
- **Luồng Tự Động Hóa (Workflows / Webhooks):** Các kịch bản xử lý sự kiện (khi khách điền form -> tự động gửi tin nhắn cảm ơn -> đồng bộ vào bảng CRM -> bắn thông báo khẩn vào nhóm chat);
- **Giao Diện Lập Trình Ứng Dụng (APIs):** Các cổng kết nối trung gian với bên thứ ba: Telegram Bot API, Zalo Cloud / ZNS API, Resend Transactional Email API, OpenAI API;
- **Người Sử Dụng Được Cấp Quyền (Authorized Users):** Số lượng tài khoản nhân sự của Bên A được phân quyền đăng nhập hệ thống theo từng cấp độ;
- **Hạn Mức Tiêu Thụ (Quotas):** Giới hạn số lượng tin nhắn, số lượng email, dung lượng lưu trữ database hoặc số lượt gọi API hàng tháng được quy định theo gói dịch vụ đã chọn.

---

### ĐIỀU 2: PHÂN LOẠI DỮ LIỆU CÁ NHÂN ĐƯỢC XỬ LÝ
Hệ thống CRM và luồng tự động hóa tiếp nhận và xử lý các trường dữ liệu sau của khách hàng của Bên A:
- **Dữ liệu cá nhân cơ bản:** Họ và tên, số điện thoại, địa chỉ email, địa chỉ liên hệ/giao hàng, nội dung yêu cầu tư vấn, thời gian gửi biểu mẫu, địa chỉ IP, nguồn truy cập (UTM Source/Campaign);
- **Lịch sử tương tác:** Nhật ký cuộc gọi, trạng thái xử lý lead của nhân viên kinh doanh, giá trị đơn hàng;
- **Dữ liệu nhân sự Bên A:** Tên đăng nhập, email nội bộ, phân quyền vai trò của nhân viên Bên A sử dụng hệ thống;
- **Cam Kết Không Xử Lý Dữ Liệu Nhạy Cảm:** Trừ khi có Phụ lục bảo mật chuyên sâu riêng biệt, hệ thống mặc định **KHÔNG** thu thập và không lưu trữ thông tin thẻ ngân hàng, dữ liệu sinh trắc học, hồ sơ bệnh án hoặc quan điểm tôn giáo chính trị của chủ thể dữ liệu.

---

### ĐIỀU 3: BẢO MẬT HỆ THỐNG & CAM KẾT TIÊU CHUẨN KỸ THUẬT HỢP LÝ
3.1. **Áp Dụng Biện Pháp Bảo Mật Hợp Lý (Reasonable Security Standards):**
Bên B cam kết áp dụng các biện pháp an ninh kỹ thuật và tổ chức phù hợp với quy chuẩn an toàn thông tin Cấp độ 2 theo quy định pháp luật Việt Nam:
- **Mã hóa đường truyền:** 100% dữ liệu truyền qua Internet được mã hóa bằng giao thức HTTPS / TLS 1.3;
- **Mã hóa lưu trữ:** Dữ liệu cơ sở dữ liệu được mã hóa ở trạng thái nghỉ (Encryption at rest - chuẩn AES-256);
- **Quản lý khóa bí mật (Secrets Management):** Toàn bộ API keys, Database secrets được lưu trong biến môi trường bảo mật độc lập, tuyệt đối không lưu trong mã nguồn frontend;
- **Xác thực Đa Yếu Tố (MFA/2FA):** Bắt buộc kích hoạt xác thực 2 bước trên mọi tài khoản quản trị hệ thống có quyền cấu hình luồng dữ liệu;
- **Nguyên Tắc Quyền Tối Thiểu (Principle of Least Privilege - PoLP):** Nhân viên của Bên A chỉ được cấp quyền xem các trường dữ liệu cần thiết phục vụ công việc của mình (RBAC).  
3.2. **Tuyên Bố Giới Hạn Cam Kết Kỹ Thuật (Không Cam Kết Bất Khả Xâm Phạm):**
Hai Bên hiểu và thừa nhận rằng trong môi trường không gian mạng không có bất kỳ hệ thống nào có thể bảo đảm an toàn tuyệt đối 100% trước mọi nguy cơ tấn công mới. **BÊN B TUYỆT ĐỐI KHÔNG CAM KẾT RẰNG HỆ THỐNG "BẤT KHẢ XÂM PHẠM" HOẶC "KHÔNG BAO GIỜ BỊ HACK"**. Trách nhiệm của Bên B được giới hạn ở việc tuân thủ các quy chuẩn bảo mật hợp lý cam kết tại Khoản 3.1.

---

### ĐIỀU 4: NGHĨA VỤ CỦA KHÁCH HÀNG & MÔ HÌNH CHIA SẺ TRÁCH NHIỆM
4.1. **Bảo Mật Thông Tin Đăng Nhập:**
- Bên A có trách nhiệm tự bảo mật tài khoản, mật khẩu của nhân viên mình;
- **Tuyệt đối không chia sẻ mật khẩu qua tin nhắn không mã hóa** hoặc dùng chung 01 tài khoản cho nhiều nhân viên;
- Bên A có nghĩa vụ lập tức thu hồi quyền truy cập khi nhân sự của Bên A nghỉ việc hoặc chuyển đổi vị trí công tác.  
4.2. **Chống Phát Tán Thư Rác & Tin Nhắn Rác (Nghị định 91/2020/NĐ-CP):**
- Bên A cam kết chỉ nạp vào hệ thống CRM danh bạ khách hàng mà Bên A **đã nhận được sự đồng ý rõ ràng từ trước (Opt-in)** của người nhận;
- Bên A cam đoan không gửi tin nhắn/email quảng cáo tới các số thuê bao nằm trong Danh sách không quảng cáo (Do Not Call - DNC quốc gia);
- Mọi email gửi đi phải chứa link hủy đăng ký (Unsubscribe) hoạt động bình thường;
- Bên A chịu hoàn toàn trách nhiệm pháp lý và các khoản tiền phạt vi phạm hành chính (từ 20.000.000đ đến 100.000.000đ theo Nghị định 91/2020/NĐ-CP) nếu lạm dụng hệ thống để phát tán tin nhắn rác hoặc cuộc gọi rác quấy rối người tiêu dùng.  
4.3. **Miễn Trừ Cho Bên B:** Bên B hoàn toàn được miễn trừ trách nhiệm trong trường hợp dữ liệu bị rò rỉ do: Nhân viên Bên A bị nhiễm mã độc/keylogger trên máy tính cá nhân, Bên A làm lộ mật khẩu hoặc Bên A tự ý cấp quyền API cho bên thứ ba.

---

### ĐIỀU 5: PHỤ THUỘC NỀN TẢNG BÊN THỨ BA & HẠN MỨC TIÊU THỤ (API QUOTAS)
5.1. **Sự Cố Nền Tảng Bên Thứ Ba:** Các cổng tích hợp (Zalo ZNS, Telegram, OpenAI, Resend, Supabase) vận hành theo chính sách và hạ tầng độc lập của các nhà cung cấp đó. Bên B được miễn trừ trách nhiệm bồi thường nếu dịch vụ tự động hóa bị gián đoạn do:
- Máy chủ Zalo / Telegram / OpenAI quốc tế bị sập hoặc bảo trì;
- Zalo OA của Bên A bị khóa do vi phạm chính sách kiểm duyệt của Zalo;
- Nhà mạng viễn thông chặn tin nhắn SMS do nghi vấn nội dung.  
5.2. **Hạn Mức & Chi Phí Vượt Hạn Mức:** Chi phí dịch vụ Bên B không bao gồm cước phí viễn thông hoặc cước phí API tính theo lượt (như phí gửi tin Zalo ZNS khoảng 200đ - 400đ/tin, phí token OpenAI). Bên A có trách nhiệm duy trì số dư tài khoản trên các nền tảng này để hệ thống vận hành liên tục.

---

### ĐIỀU 6: SAO LƯU, XUẤT DỮ LIỆU & QUY TRÌNH HỦY BỎ SAU DỰ ÁN
6.1. **Sao Lưu Dự Phòng (Backup):** Hệ thống được cấu hình tự động sao lưu dữ liệu định kỳ (Snapshot hàng tuần) nhằm bảo đảm khả năng phục hồi dữ liệu khi xảy ra sự cố kỹ thuật.  
6.2. **Quyền Xuất Dữ Liệu (Data Export):** Trong suốt thời gian hợp đồng hoặc khi chấm dứt, Bên A có toàn quyền yêu cầu xuất trích toàn bộ dữ liệu khách hàng thuộc quyền sở hữu của Bên A dưới dạng các tệp dữ liệu chuẩn quốc tế (CSV, JSON hoặc SQL Dump).  
6.3. **Quy Trình Offboarding & Xóa Dữ Liệu:** Khi hợp đồng chấm dứt:
- Bên B tiến hành thu hồi toàn bộ các kết nối API và khóa quyền truy cập hệ thống;
- Bàn giao tệp dữ liệu xuất hoàn chỉnh cho Bên A;
- Trong vòng 30 ngày, Bên B tiến hành xóa vĩnh viễn (Permanent Delete) toàn bộ bản ghi dữ liệu khách hàng trên các máy chủ tạm của Bên B và phát hành **Biên Bản Xác Nhận Hoàn Tất Xóa Dữ Liệu (Mẫu 10E)** gửi Bên A.

---

### ĐIỀU 7: QUY TRÌNH XỬ LÝ SỰ CỐ AN NINH DỮ LIỆU (INCIDENT RESPONSE SLA)
7.1. **Thông Báo Sự Cố:** Ngay khi phát hiện hệ thống có dấu hiệu bị xâm nhập trái phép hoặc rò rỉ dữ liệu, Bên B sẽ phát hành Thông báo Sự cố bằng văn bản/email cho Đầu mối IT của Bên A trong vòng tối đa **24 giờ**.  
7.2. **Biện Pháp Ngăn Chặn Khẩn Cấp:** Bên B có toàn quyền chủ động thực hiện ngay lập tức các biện pháp: Tạm khóa các endpoint webhook bị tấn công, xoay vòng (rotate) API secret tokens và cô lập cơ sở dữ liệu để ngăn chặn thiệt hại mở rộng.  
7.3. **Phối Hợp Báo Cáo Cơ Quan Nhà Nước:** Bên B có trách nhiệm hỗ trợ kỹ thuật và trích xuất nhật ký truy vết (Audit Logs) để Bên A hoàn thành Báo cáo hành vi vi phạm an ninh dữ liệu gửi Cục An ninh mạng (A05 - Bộ Công an) theo đúng thời hạn 72 giờ luật định.

---

### ĐẠI DIỆN CÁC BÊN KÝ TÊN
*(Ký, ghi rõ họ tên và đóng dấu)*

| ĐẠI DIỆN BÊN A (KHÁCH HÀNG) | ĐẠI DIỆN BÊN B (LOCALMATE) |
| :---: | :---: |
| **[TÊN_DOANH_NGHIỆP_KHÁCH_HÀNG]** | **[LOCALMATE_LEGAL_NAME]** |
| *(Ký tên, đóng dấu hoặc Ký số điện tử)* | *(Ký tên, đóng dấu hoặc Ký số điện tử)* |
| <br><br><br><br> | <br><br><br><br> |
| **[ĐẠI_DIỆN_KHÁCH_HÀNG]** | **[REPRESENTATIVE]** |
| Chức vụ: [CHỨC_VỤ_KHÁCH_HÀNG] | Chức vụ: [TITLE] |
