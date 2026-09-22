| **ĐƠN VỊ CUNG CẤP DỊCH VỤ**<br>**LOCALMATE VIỆT NAM**<br>Số: [MÃ_ĐƠN]/PL-WEB-LM/[NĂM] | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br>**Độc lập - Tự do - Hạnh phúc**<br>----------------o0o----------------<br>*Hà Nội, ngày [NGÀY] tháng [THÁNG] năm 202[NĂM]* |
| :---: | :---: |

# PHỤ LỤC DỊCH VỤ THIẾT KẾ & PHÁT TRIỂN WEBSITE
**(WEBSITE DEVELOPMENT & DEPLOYMENT APPENDIX)**

- *Căn cứ Luật Công nghệ thông tin số 67/2006/QH11 ngày 29 tháng 06 năm 2006;*
- *Căn cứ Luật Giao dịch điện tử số 20/2023/QH15 ngày 22 tháng 06 năm 2023;*
- *Căn cứ Luật An toàn thông tin mạng số 86/2015/QH13 và Luật An ninh mạng số 24/2018/QH14;*
- *Căn cứ Hợp đồng Dịch vụ Khung số: [MÃ_HỢP_ĐỒNG] ký ngày [NGÀY_KÝ] giữa Hai Bên.*

---

### ĐIỀU 1: PHẠM VI DỊCH VỤ & TIÊU CHUẨN KỸ THUẬT NỀN TẢNG
Bên B chịu trách nhiệm triển khai gói giải pháp Website cho Bên A với các tiêu chuẩn kỹ thuật số sau:
1.1. **Cấu trúc & Số lượng Trang:** Được xác định định lượng theo từng Bảng đặc tả SOW (Ví dụ: 01 Landing Page đơn hoặc Website giới thiệu doanh nghiệp 03 - 07 trang tiêu chuẩn: Trang chủ, Giới thiệu, Sản phẩm/Dịch vụ, Dự án/Khách hàng, Tin tức/Blog, Liên hệ).  
1.2. **Khả năng Tương thích Giao diện (Responsive Design):** Website được lập trình hiển thị mượt mà trên 03 nhóm kích thước màn hình tiêu chuẩn: Desktop (màn hình rộng $\ge 1280\text{px}$), Tablet ($768\text{px} - 1024\text{px}$), và Mobile ($375\text{px} - 430\text{px}$).  
1.3. **Hỗ trợ Trình duyệt (Browser Compatibility):** Bảo đảm tương thích tối ưu trên các phiên bản trình duyệt phổ biến cập nhật trong 02 năm gần nhất: Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox.  
1.4. **SEO Kỹ thuật Cơ bản (Technical SEO Baseline):**
- Cấu trúc thẻ HTML ngữ nghĩa (`h1`, `h2`, `h3`, `alt` cho hình ảnh);
- Tự động sinh file `sitemap.xml` và cấu hình file `robots.txt`;
- Khai báo đầy đủ thẻ OpenGraph (OG title, description, image) phục vụ chia sẻ link trên Zalo, Facebook;
- Tối ưu điểm hiệu năng Core Web Vitals (FCP, LCP, CLS) trên môi trường Edge Network.  
1.5. **Đo lường & Chuyển đổi:** Tích hợp mã Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta Pixel và nút gọi Hotline/chat Zalo chuyển đổi nổi trên màn hình di động.  
1.6. **Hạ tầng Mạng & Bảo mật (Cloudflare & Hosting):**
- Cấu hình DNS trên hạ tầng Cloudflare bảo vệ chống tấn công DDoS phân tán;
- Kích hoạt chứng chỉ bảo mật mã hóa đường truyền SSL/TLS (HTTPS) miễn phí trọn đời;
- Triển khai website trên mạng lưới phân phối nội dung toàn cầu (Edge CDN).

---

### ĐIỀU 2: PHÂN ĐỊNH RẠCH RÒI "LỖI KỸ THUẬT" (BUG) VÀ "YÊU CẦU TÍNH NĂNG MỚI" (FEATURE REQUEST)
Nhằm triệt tiêu mọi hiểu lầm và tranh cãi kéo dài trong quá trình nghiệm thu và bảo hành, Các Bên thống nhất định nghĩa pháp lý kỹ thuật như sau:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                   BẢNG PHÂN LOẠI LỖI KỸ THUẬT (BUG) VS YÊU CẦU TÍNH NĂNG MỚI           │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│ THẾ NÀO LÀ LỖI KỸ THUẬT (BUG ĐƯỢC FIX FREE)│ CÁI GÌ KHÔNG PHẢI LÀ BUG (TÍNH PHÍ MỚI)    │
├───────────────────────────────────────────┼────────────────────────────────────────────┤
│ • Chức năng đã ghi trong SOW nhưng không  │ • Thay đổi ý tưởng mỹ thuật hoặc đổi layout│
│   hoạt động (ví dụ: bấm gửi form không gửi│   sau khi đã phê duyệt mockup trước đó.    │
│   được dữ liệu, form báo lỗi 500).        │ • Thay đổi nội dung bài viết, thay đổi bảng│
│ • Vỡ khung giao diện, chữ đè lên nhau     │   giá, thay đổi ảnh banner của sản phẩm.   │
│   trên các dòng điện thoại thông dụng.    │ • Yêu cầu bổ sung thêm trang, thêm nút bấm,│
│ • Nút gọi Hotline bấm nhầm số điện thoại  │   thêm trường dữ liệu trên form liên hệ.   │
│   so với số Bên A đã cung cấp.            │ • Thay đổi luồng nghiệp vụ (Workflow) hoặc │
│ • Lỗi hiển thị sai lệch trên 10% so với   │   đổi nhà cung cấp cổng thanh toán/API.    │
│   Mockup Figma đã được Bên A phê duyệt.   │ • Tích hợp thêm phần mềm thứ ba ngoài SOW. │
└───────────────────────────────────────────┴────────────────────────────────────────────┘
```

2.1. **Định Nghĩa Lỗi Kỹ Thuật (Bug):** Là hiện tượng một thành phần hoặc chức năng **đã được quy định tường minh trong Bảng SOW** nhưng hoạt động không chính xác theo Tiêu chí kiểm thử (Acceptance Criteria), hoặc gây lỗi sập trang, không thể gửi dữ liệu. Bên B có trách nhiệm **sửa chữa hoàn toàn miễn phí** các lỗi này trong thời gian triển khai và thời gian bảo hành.  
2.2. **Yêu Cầu Tính Năng Mới (Feature Request):** Là mọi yêu cầu phát sinh sửa đổi cấu trúc, bổ sung thêm nội dung, tích hợp mới hoặc thay đổi những hạng mục đã được Bên A phê duyệt ở các chặng trước. Các yêu cầu này **BẮT BUỘC PHẢI LẬP PHIẾU CHANGE REQUEST** và tính phí phát sinh theo thỏa thuận.  
2.3. **Nguyên Tắc Vàng Về Bảo Hành:** **BẢO HÀNH KỸ THUẬT KHÔNG ĐỒNG NGHĨA VỚI VIỆC PHÁT TRIỂN TÍNH NĂNG MỚI HOẶC THAY ĐỔI NỘI DUNG MIỄN PHÍ TRỌN ĐỜI.**

---

### ĐIỀU 3: QUY TRÌNH DUYỆT THIẾT KẾ & HẠN MỨC CHỈNH SỬA (REVISION POLICY)
3.1. **Nguyên Tắc Cuốn Chiếu Khóa Chặng (Phase-lock):**
- *Chặng 1 (Duyệt Khung & Bố Cục UI):* Bên B gửi bản thiết kế Wireframe/Figma. Bên A phản hồi góp ý. Sau khi ký duyệt, giao diện được "khóa" để chuyển sang lập trình mã nguồn.
- *Chặng 2 (Lập Trình & Demo Staging):* Bên B dựng web thật trên link thử nghiệm `preview.localmate.vn`.
3.2. **Hạn Mức Chỉnh Sửa (Tối Đa 02 Vòng):**
- Bên A được quyền yêu cầu tối đa **02 (hai) vòng chỉnh sửa nhỏ (Minor Revisions)** đối với bản demo staging (bao gồm: căn chỉnh cỡ chữ, đổi mã màu nút bấm, thay thế ảnh đại diện, sửa lỗi chính tả).
- Mỗi vòng chỉnh sửa phải được Bên A tổng hợp thành **01 danh sách văn bản duy nhất** gửi qua Email hoặc Nhóm Zalo chính thức trong vòng **03 ngày làm việc**.
- Yêu cầu chỉnh sửa vòng 3 trở đi hoặc yêu cầu đập đi làm lại giao diện đã duyệt sẽ tính phí từ **500.000đ đến 2.000.000đ/lần**.

---

### ĐIỀU 4: ĐIỀU KIỆN NGHIỆM THU & NGHIỆM THU MẶC NHIÊN
4.1. **Tiêu Chí Nghiệm Thu Đạt Chuẩn:**
- Website hoạt động ổn định trên môi trường staging;
- Tương đồng tối thiểu 90% so với bản thiết kế mockup đã ký duyệt;
- Các form liên hệ gửi dữ liệu thành công;
- Không còn tồn tại Lỗi Nghiêm Trọng (Critical Bug).  
4.2. **Kích Hoạt Nghiệm Thu Mặc Nhiên (Deemed Acceptance):**
- Hết thời hạn 07 ngày làm việc kể từ ngày Bên B gửi thông báo hoàn thành mà Bên A không gửi danh sách lỗi hợp lệ; HOẶC
- Bên A tự ý trỏ tên miền chính thức, nhập dữ liệu thật hoặc chạy quảng cáo kéo khách hàng vào website;  
thì website được **MẶC NHIÊN COI LÀ ĐÃ NGHIỆM THU ĐẠT CHUẨN 100%**. Mọi nghĩa vụ thanh toán đợt cuối lập tức đến hạn.

---

### ĐIỀU 5: PHÂN ĐỊNH QUYỀN SỞ HỮU 10 THÀNH PHẦN KỸ THUẬT SỐ CỦA WEBSITE
Nhằm bảo vệ tối đa tài sản của Khách hàng đồng thời bảo vệ bí mật công nghệ của LocalMate, Hai Bên thống nhất quy chế bản quyền đối với 10 thành phần sau:

| STT | Thành phần Kỹ thuật số | Chủ sở hữu gốc | Cơ chế bàn giao & Sở hữu cho Khách hàng |
|:---:|:---|:---|:---|
| **1** | **Tên miền (Domain Name)** | Nhà đăng ký VNNIC/ICANN | **100% thuộc sở hữu của Bên A**. Bên A đứng tên chủ thể và tự nộp phí duy trì hàng năm. |
| **2** | **Tài khoản Google (GA4, GTM, GSC)** | Google LLC | Phân quyền Quản trị viên (`Administrator`) cho Gmail chính chủ của Bên A. |
| **3** | **Tài khoản Cloudflare / DNS** | Cloudflare Inc. | Mời email của Bên A làm `Super Administrator` quản trị toàn bộ bản ghi DNS. |
| **4** | **Mã nguồn giao diện tùy biến (Custom UI Code)** | LocalMate (tác giả) | **Chuyển nhượng quyền tài sản cho Bên A sau khi Bên A thanh toán đủ 100% tiền**. |
| **5** | **Hình ảnh, Video chụp riêng (Custom Assets)** | LocalMate (tác giả) | **Chuyển nhượng quyền tài sản cho Bên A sau khi Bên A thanh toán đủ 100% tiền**. |
| **6** | **Hình ảnh minh họa có phí (Stock Assets)** | Đơn vị cung cấp Stock | Bên A được quyền sử dụng thương mại theo giấy phép tiêu chuẩn đã mua. |
| **7** | **Phông chữ (Fonts)** | Nhà thiết kế Font | Sử dụng phông chữ mở (Google Fonts) hoặc Bên A tự mua license thương mại. |
| **8** | **Thư viện mã nguồn mở (Open Source)** | Cộng đồng quốc tế | React, Tailwind, Vite... bàn giao nguyên trạng ("AS IS") theo giấy phép MIT/Apache. |
| **9** | **Cơ sở dữ liệu (Database Content)** | Bên A | Toàn bộ dữ liệu bài viết, sản phẩm, thông tin khách hàng **100% thuộc về Bên A**. |
| **10**| **Mã nguồn nền tảng LocalMate (Core Framework)** | **LOCALMATE ĐỘC QUYỀN** | **LocalMate giữ nguyên 100% quyền sở hữu**. Chỉ cấp Giấy phép sử dụng vĩnh viễn, không độc quyền (Non-exclusive Perpetual License) để Bên A vận hành website này. Cấm sao chép bán lại. |

---

### ĐIỀU 6: BẢO HÀNH KỸ THUẬT 30 NGÀY VÀ NGHĨA VỤ LƯU TRỮ (HOSTING)
6.1. **Thời Hạn & Nội Dung Bảo Hành:** Bên B bảo hành sửa lỗi lập trình phát sinh miễn phí trong **ba mươi (30) ngày** kể từ ngày bàn giao chính thức.  
6.2. **Miễn Trừ Bảo Hành:** Bên B không chịu trách nhiệm bảo hành trong các trường hợp:
- Bên A tự ý chỉnh sửa mã nguồn backend, tự thay đổi bản ghi DNS làm sập kết nối;
- Bên A để lộ thông tin đăng nhập dẫn đến việc website bị cài mã độc phá hoại;
- Sự cố đứt cáp quang biển hoặc sự cố hạ tầng máy chủ toàn cầu của Cloudflare;
- Tên miền của Bên A bị tạm khóa do Bên A quên đóng phí gia hạn cho Nhà đăng ký.

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
