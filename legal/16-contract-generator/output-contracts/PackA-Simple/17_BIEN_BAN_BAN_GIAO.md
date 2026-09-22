# BIÊN BẢN BÀN GIAO SẢN PHẨM VÀ TÀI NGUYÊN KỸ THUẬT SỐ
## (DELIVERABLES & DIGITAL ASSETS HANDOVER RECORD)
**Mã hiệu văn bản:** `LM-OPS-HND-17`  
*(Căn cứ theo Hợp đồng Dịch vụ Khung số: LM-MSA-2026-088/LM-MSA và Phụ lục SHTT số: `LM-IP-APP-12`)*  
**Dự án:** DỰ ÁN SỐ HÓA THƯƠNG HIỆU & LOCAL SEO LOCAL FASHION  
**Khách hàng (Bên Tiếp Nhận - Bên A):** CÔNG TY TNHH THỜI TRANG ĐỊA PHƯƠNG SÀI GÒN (Đại diện: NGUYỄN VĂN AN)  
**Đơn vị thực hiện (Bên Bàn Giao - Bên B):** CÔNG TY TNHH CÔNG NGHỆ VÀ TRUYỀN THÔNG LOCALMATE (Đại diện: PHẠM NGUYÊN VŨ)  
**Ngày bàn giao:** Ngày [NGAY] tháng [THANG] năm 202[X]

---

### PHẦN I: DANH MỤC SẢN PHẨM VÀ TÀI NGUYÊN BÀN GIAO THỰC TẾ

Hôm nay, Bên B tiến hành bàn giao và Bên A tiến hành tiếp nhận toàn bộ các sản phẩm kỹ thuật số thuộc phạm vi dự án theo bảng danh mục sau:

| STT | DANH MỤC SẢN PHẨM BÀN GIAO | HÌNH THỨC BÀN GIAO & ĐỊNH DẠNG | ĐƯỜNG DẪN TRUY CẬP / NƠI LƯU TRỮ | TRẠNG THÁI TIẾP NHẬN |
| :---: | :--- | :--- | :--- | :---: |
| **01** | **Hệ thống Website Đang Hoạt Động (Live Website)** | Tên miền chính thức đã trỏ DNS hoàn tất, cài đặt chứng chỉ SSL | `https://localfashion.vn` | [x] Đã truy cập tốt<br>[x] Form lead hoạt động |
| **02** | **Trang Quản Trị Website (CMS / Admin Dashboard)** | Tài khoản quản trị cấp cao nhất (Super Admin User) | `https://localfashion.vn/admin`<br>*(Bàn giao qua Bitwarden Send)* | [x] Đã đăng nhập<br>[x] Đã đổi mật khẩu |
| **03** | **Tài liệu Hướng dẫn Quản trị (Admin User Manual)** | File tài liệu số định dạng PDF + Video clip hướng dẫn thao tác | Đường dẫn Google Drive nội bộ:<br>`[LINK_DRIVE_MANUAL]` | [x] Đã nhận tài liệu<br>[x] Nhân sự đã được hướng dẫn |
| **04** | **Tệp Thiết Kế Đồ Họa Gốc (Design Assets)** | File thiết kế giao diện Figma, Banner gốc, Logo vector, Icons | Đường dẫn thư mục đám mây:<br>`[LINK_FIGMA_ASSETS]` | [x] Đã nhận đầy đủ file gốc |
| **05** | **Hồ sơ Google Business Profile (Google Maps)** | Quyền Chủ sở hữu (Owner) hồ sơ vị trí doanh nghiệp | Tên địa điểm: `Local Fashion Sài Gòn - Thời Trang Thiết Kế`<br>*(Email nhận quyền: [EMAIL_GOOGLE_A])* | [x] Đã nhận quyền Owner<br>[x] Đã kiểm tra thông tin |
| **06** | **Mã nguồn Sản phẩm tạo riêng (Custom Code)** | Toàn bộ mã nguồn trang giao diện tạo riêng cho Khách hàng | Git Repository URL / Tệp nén mã nguồn:<br>`[LINK_GIT_REPO]` | [x] Đã bàn giao mã nguồn |

---

### PHẦN II: XÁC LẬP CHUYỂN GIAO QUYỀN SỞ HỮU TRÍ TUỆ
1. **Chuyển giao quyền tài sản:** Căn cứ quy định tại Điều 2 Phụ lục Sở hữu trí tuệ (`LM-IP-APP-12`) và Điều 331 Bộ luật Dân sự 2015, sau khi Bên A hoàn thành 100% nghĩa vụ thanh toán quyết toán cho Bên B, toàn bộ quyền tài sản đối với các Sản phẩm tạo riêng (Custom Deliverables) nêu tại Mục 1, 4 và 6 Phần I chính thức được chuyển nhượng hoàn toàn và vĩnh viễn sang cho Bên A.
2. **Cấp phép mã nguồn nền tảng (Core Framework):** Bên B cấp cho Bên A quyền sử dụng không độc quyền, vĩnh viễn đối với các module, thư viện cốt lõi của LocalMate được tích hợp trong website nhằm mục đích vận hành kinh doanh nội bộ của Bên A.

---

### PHẦN III: TRÁCH NHIỆM BẢO MẬT SAU KHI TIẾP NHẬN
1. Bên A xác nhận đã tiếp nhận đầy đủ quyền quản trị, hướng dẫn sử dụng và kiểm tra tính toàn vẹn của hệ thống.
2. Bên A cam kết:
   - Ngay lập tức đổi toàn bộ mật khẩu đăng nhập của trang quản trị website, email hosting, và kích hoạt xác thực 2 bước (2FA);
   - Tự chịu trách nhiệm quản lý, phân quyền cho nhân viên nội bộ và bảo mật thông tin đăng nhập kể từ thời điểm ký biên bản này;
   - Không can thiệp sửa đổi các cấu hình lõi máy chủ khi chưa hiểu rõ kỹ thuật để tránh làm gián đoạn dịch vụ.
3. Bên B được miễn trừ hoàn toàn trách nhiệm đối với các sự cố mất mát dữ liệu, lộ mật khẩu hoặc lỗi hệ thống do hành vi tự ý chỉnh sửa của nhân sự Bên A gây ra sau thời điểm bàn giao.

Biên bản này được lập thành 02 (hai) bản gốc bằng tiếng Việt có giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản làm chứng từ lưu trữ pháp lý và kế toán.

---

### KÝ XÁC NHẬN CỦA ĐẠI DIỆN HAI BÊN:

| ĐẠI DIỆN BÊN TIẾP NHẬN (KHÁCH HÀNG) | ĐẠI DIỆN BÊN BÀN GIAO (LOCALMATE) |
| :--- | :--- |
| *(Ký tên, ghi rõ họ tên và đóng dấu)* | *(Ký tên, ghi rõ họ tên và đóng dấu)* |
| <br><br><br> | <br><br><br> |
| **Họ và tên:** NGUYỄN VĂN AN | **Họ và tên:** PHẠM NGUYÊN VŨ |
| **Chức vụ:** Tổng Giám Đốc | **Chức vụ:** Giám Đốc |
| **Thời điểm ký:** Ngày ____/____/202[X] | **Thời điểm ký:** Ngày ____/____/202[X] |
