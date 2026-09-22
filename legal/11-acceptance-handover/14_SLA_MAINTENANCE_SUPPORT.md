# THỎA THUẬN MỨC ĐỘ DỊCH VỤ VÀ CAM KẾT BẢO TRÌ KỸ THUẬT
## (SERVICE LEVEL AGREEMENT - SLA & TECHNICAL MAINTENANCE)
**Mã hiệu văn bản:** `LM-OPS-SLA-14`  
*(Đính kèm Hợp đồng Dịch vụ Khung số: [SO_HOP_DONG_MSA]/LM-MSA hoặc Đơn đặt hàng tương ứng)*  
**Căn cứ áp dụng:**  
- *Bộ luật Dân sự số 91/2015/QH13 (Điều 513, Điều 517 về nghĩa vụ bảo hành dịch vụ);*  
- *Luật Thương mại số 36/2005/QH11 (Điều 74, Điều 81);*  
- *Quy chuẩn dịch vụ hỗ trợ kỹ thuật tiêu chuẩn của LocalMate.*

---

Phụ lục Thỏa thuận Mức độ Dịch vụ (SLA) này được xác lập giữa:
- **BÊN A (KHÁCH HÀNG):** [TEN_KHACH_HANG] (Đại diện: [NGUOI_DAI_DIEN_A])
- **BÊN B (LOCALMATE):** [LOCALMATE_LEGAL_NAME] (Đại diện: [REPRESENTATIVE])

Thỏa thuận này quy định cụ thể về thời gian tiếp nhận, thời hạn khắc phục sự cố, phạm vi bảo hành và các kênh hỗ trợ kỹ thuật áp dụng cho các sản phẩm kỹ thuật số do LocalMate bàn giao.

---

### ĐIỀU 1. PHÂN CẤP SỰ CỐ VÀ CHỈ TIÊU THỜI GIAN ĐÁP ỨNG (INCIDENT SEVERITY & RESPONSE TIME)

Mọi yêu cầu hỗ trợ hoặc báo lỗi từ Khách hàng được phân loại theo 04 mức độ ưu tiên (Severity Levels) với cam kết thời gian phản hồi (Initial Response Time) và thời gian giải quyết mục tiêu (Target Resolution Time) như sau:

| MỨC ĐỘ ƯU TIÊN | ĐỊNH NGHĨA VÀ MÔ TẢ TÌNH HUỐNG SỰ CỐ | KÊNH TIẾP NHẬN | THỜI GIAN PHẢN HỒI BAN ĐẦU | THỜI GIAN GIẢI QUYẾT MỤC TIÊU |
| :---: | :--- | :---: | :---: | :---: |
| **P0: KHẨN CẤP** *(Critical Outage)* | - Toàn bộ website bị sập (Downtime 100%), trang trắng, lỗi máy chủ 500/502/503.<br>- Form thu thập lead chết hoàn toàn, khách hàng không thể gửi thông tin.<br>- Website bị chèn mã độc nghiêm trọng hoặc cảnh báo bảo mật đỏ từ Google. | Hotline 24/7: **0834.422.439** + Nhóm Zalo khẩn cấp | **Trong vòng 01 giờ** *(Bất kể ngày nghỉ, lễ)* | **Dưới 04 giờ** *(Khôi phục trạng thái hoạt động bình thường)* |
| **P1: NGHIÊM TRỌNG** *(Major Incident)* | - Một tính năng quan trọng bị gián đoạn nhưng website vẫn truy cập được.<br>- Nút gọi hotline hoặc nút Zalo bị sai số điện thoại.<br>- Mất kết nối luồng webhook CRM dẫn đến chậm thông báo lead.<br>- Chiến dịch Google Ads bị tạm dừng đột ngột do lỗi kỹ thuật thẻ tracking. | Nhóm Zalo hỗ trợ / Hotline | **Trong vòng 02 giờ** *(Giờ làm việc)* | **Dưới 08 giờ làm việc** |
| **P2: TRUNG BÌNH** *(Moderate Issue)* | - Lỗi hiển thị giao diện nhỏ trên một số dòng máy đặc thù (vỡ layout nhẹ).<br>- Tốc độ tải trang bị chậm đột xuất nhưng vẫn mở được nội dung.<br>- Lỗi font chữ, hình ảnh mờ, đường dẫn trang con (broken link) không quan trọng. | Nhóm Zalo hỗ trợ / Email ticket | **Trong vòng 04 giờ** *(Giờ làm việc)* | **Trong vòng 24 - 48 giờ làm việc** |
| **P3: YÊU CẦU HỖ TRỢ** *(Service Request)* | - Yêu cầu thay đổi thông tin liên hệ, đổi banner giới thiệu, cập nhật bảng giá.<br>- Đăng tải thêm bài viết, ảnh sản phẩm mới trong định mức bảo trì.<br>- Hướng dẫn sử dụng tính năng quản trị, xuất file dữ liệu lead định kỳ. | Email: contact@localmate.vn / Nhóm Zalo | **Trong vòng 08 giờ** *(Giờ làm việc)* | **1 - 3 ngày làm việc** *(Theo thỏa thuận lịch)* |

---

### ĐIỀU 2. KHUNG GIỜ LÀM VIỆC VÀ KÊNH HỖ TRỢ CHÍNH THỨC
2.1. **Giờ làm việc tiêu chuẩn (Standard Business Hours):**
- Từ **Thứ Hai đến Thứ Sáu:** Sáng từ 08h30 đến 12h00; Chiều từ 13h30 đến 17h30.
- **Thứ Bảy:** Sáng từ 08h30 đến 12h00.
- Chiều Thứ Bảy, Chủ Nhật và các ngày nghỉ Lễ/Tết theo quy định của Nhà nước: Chỉ trực tiếp nhận và xử lý sự cố mức độ **P0 (Khẩn cấp)**.

2.2. **Kênh hỗ trợ chính thức:**
- **Hotline hỗ trợ kỹ thuật khẩn cấp 24/7:** `0834.422.439`
- **Email tiếp nhận yêu cầu & hồ sơ:** `contact@localmate.vn`
- **Cổng trao đổi công việc nội bộ:** Nhóm Zalo / Telegram chuyên trách được lập riêng cho dự án giữa Hai Bên.

---

### ĐIỀU 3. CHẾ ĐỘ BẢO HÀNH TIÊU CHUẨN (STANDARD WARRANTY)
3.1. **Thời hạn bảo hành miễn phí:**
- Mọi dự án thiết kế website và hệ thống do LocalMate bàn giao đều được áp dụng chính sách **Bảo hành kỹ thuật miễn phí trong vòng 30 (ba mươi) ngày** kể từ ngày ký Biên bản bàn giao;
- Trong thời hạn bảo hành, LocalMate có trách nhiệm khắc phục hoàn toàn miễn phí 100% các lỗi kỹ thuật phát sinh từ mã nguồn gốc do LocalMate phát triển (Bugs) theo đúng cam kết thời gian tại Điều 1.

3.2. **Phạm vi bảo hành:**
- Sửa lỗi hiển thị sai lệch so với bản thiết kế đã nghiệm thu;
- Sửa lỗi form lead không gửi được dữ liệu về email/CRM;
- Đảm bảo website hoạt động ổn định trên các trình duyệt phổ biến (Chrome, Safari, Edge) phiên bản mới nhất;
- Duy trì cấu hình bảo mật HTTPS/TLS và tường lửa cơ bản.

---

### ĐIỀU 4. CÁC TRƯỜNG HỢP LOẠI TRỪ BẢO HÀNH MIỄN PHÍ
LocalMate có quyền từ chối bảo hành miễn phí hoặc tính phí dịch vụ hỗ trợ theo đơn giá giờ công kỹ thuật trong các trường hợp sau:
1. **Can thiệp trái phép từ phía Khách hàng:** Khách hàng hoặc bên thứ ba do Khách hàng ủy quyền tự ý chỉnh sửa mã nguồn (source code), can thiệp cơ sở dữ liệu hoặc cài đặt thêm plugins/scripts lạ gây xung đột hệ thống;
2. **Không gia hạn dịch vụ nền tảng:** Website ngưng hoạt động do Khách hàng quên nộp phí duy trì tên miền (domain) hoặc tài khoản hosting/cloud bị khóa do nợ cước;
3. **Lỗi xuất phát từ nền tảng bên thứ ba toàn cầu:** Sự cố đứt cáp quang biển, sự cố downtime diện rộng của Google, Cloudflare, Meta, Vercel, Supabase (tuân theo Phụ lục Bên thứ ba `LM-SEC-3RD-21`);
4. **Thay đổi tính năng (Feature Requests):** Các yêu cầu lập trình thêm trang mới, đổi cấu trúc bố cục lớn, tích hợp tính năng mới không có trong SOW ban đầu.

---

### ĐIỀU 5. QUY CHẾ DỊCH VỤ BẢO TRÌ ĐỊNH KỲ THEO THÁNG (MAINTENANCE RETAINER)
Sau khi kết thúc thời hạn 30 ngày bảo hành miễn phí, Khách hàng có thể lựa chọn ký kết Hợp đồng Dịch vụ Duy trì & Bảo trì định kỳ theo tháng (Phí duy trì: **[PHI_BAO_TRI_THANG] VND/tháng**) để tiếp tục hưởng các quyền lợi cao cấp:
- Giám sát hoạt động của website và uptime 24/7;
- Sao lưu dự phòng dữ liệu định kỳ hàng tuần (Weekly Backups) lưu trên đám mây an toàn;
- Cập nhật bản vá bảo mật, vá lỗ hổng framework định kỳ;
- Hỗ trợ cập nhật nội dung nhẹ: Thay đổi tối đa 03 banner/ảnh sản phẩm và 02 bài viết/tháng;
- Cam kết duy trì SLA mức độ P0 và P1 theo đúng chuẩn Điều 1 Thỏa thuận này.

---

Thỏa thuận SLA này là căn cứ cam kết chất lượng dịch vụ vận hành của LocalMate, được lập thành 02 (hai) bản gốc có giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản để giám sát thực hiện.

| ĐẠI DIỆN BÊN A (KHÁCH HÀNG) | ĐẠI DIỆN BÊN B (LOCALMATE) |
| :--- | :--- |
| *(Ký tên, ghi rõ họ tên và đóng dấu)* | *(Ký tên, ghi rõ họ tên và đóng dấu)* |
| <br><br><br> | <br><br><br> |
| **Họ và tên:** [NGUOI_DAI_DIEN_A] | **Họ và tên:** [REPRESENTATIVE] |
| **Chức vụ:** [CHUC_VU_A] | **Chức vụ:** [TITLE] |
| **Ngày ký:** ____/____/202[X] | **Ngày ký:** ____/____/202[X] |
