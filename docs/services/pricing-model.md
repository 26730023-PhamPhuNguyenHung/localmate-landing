# Mô Hình Tính Phí Minh Bạch Localmate (Transparent Pricing Model SSOT)

> **Trạng thái:** Active SSOT  
> **Phiên bản:** 2.0.0  
> **Ngày phê duyệt:** 13/09/2026  
> **Tác giả:** Docs SSOT Architect  
> **Phạm vi áp dụng:** Bảng giá trên Website, Báo giá Hợp đồng và Định mức Dịch vụ Kỹ thuật của Localmate.

---

## 1. Triết Lý Định Giá (Pricing Philosophy)

Doanh nghiệp vừa, nhỏ và hộ kinh doanh địa phương thường e ngại khi tiếp cận các dịch vụ số vì ba lý do lớn:
1. **Sợ bị phát sinh chi phí ẩn** (lúc chào giá thì rẻ, làm xong đòi thêm tiền tính năng).
2. **Sợ bị trói buộc hàng tháng** (bắt buộc đóng tiền duy trì đắt đỏ mới cho chạy web).
3. **Mập mờ tiền quảng cáo** (không biết bao nhiêu tiền thực sự chạy vào quảng cáo và bao nhiêu tiền trả cho agency).

> **Nguyên tắc định giá Localmate:**  
> **MINH BẠCH BẬC NHẤT — TÁCH BẠCH DÒNG TIỀN — SỞ HỮU TRỌN ĐỜI**  
> *"Localmate tách bạch 100% giữa công sức kỹ thuật của chúng tôi và các chi phí hạ tầng/quảng cáo của bên thứ ba. Khách hàng luôn biết rõ từng đồng vốn của mình đang được chi trả cho điều gì."*

---

## 2. Cấu Trúc 3 Cột Chi Phí Độc Lập (3-Pillar Cost Structure)

Mọi giải pháp của Localmate đều được phân rã thành 3 dòng tiền độc lập:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                     CẤU TRÚC 3 CỘT CHI PHÍ MINH BẠCH                         │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ 1. CHI PHÍ KHỞI TẠO  │ 2. CHI PHÍ DUY TRÌ   │ 3. NGÂN SÁCH QUẢNG CÁO         │
│     (Setup Fee)      │  (Monthly Care Fee)  │    & BÊN THỨ BA (Ad Spend)     │
├──────────────────────┼──────────────────────┼────────────────────────────────┤
│ • Trả 1 lần duy nhất │ • Trả định kỳ tháng  │ • Khách hàng trả trực tiếp     │
│ • Hoàn thành là xong │ • Hoàn toàn TÙY CHỌN │ • Localmate KHÔNG thu % hoa    │
│ • Bàn giao trọn vẹn  │ • Có thể hủy bất kỳ  │   hồng chênh lệch ngân sách    │
│   quyền sở hữu       │   lúc nào            │ • Minh bạch hóa đơn nền tảng   │
└──────────────────────┴──────────────────────┴────────────────────────────────┘
```

### 2.1. Chi Phí Khởi Tạo Một Lần (Setup Fee)
- **Bản chất:** Là tiền công kỹ thuật để khảo sát, thiết kế, lập trình, cấu hình hệ thống và tối ưu dữ liệu ban đầu.
- **Cam kết:** Báo giá trọn gói trước khi làm. Sau khi bàn giao và nghiệm thu, khách hàng sở hữu toàn bộ sản phẩm và **KHÔNG BỊ BẮT BUỘC** phải trả bất kỳ khoản phí duy trì nào nếu tự quản trị được.

### 2.2. Chi Phí Đồng Hành & Duy Trì (Monthly Recurring Care)
- **Bản chất:** Là gói dịch vụ kỹ thuật viên túc trực hỗ trợ dành cho doanh nghiệp không có nhân sự công nghệ nội bộ.
- **Quyền lợi:** Giám sát website hoạt động liên tục (Uptime), sao lưu dữ liệu an toàn hàng tuần, hỗ trợ sửa các lỗi nhỏ phát sinh, thay đổi banner/số điện thoại/bảng giá và cập nhật bài viết mới định kỳ.
- **Nguyên tắc:** **Hoàn toàn tùy chọn (Optional)**. Khách hàng có thể đăng ký theo từng tháng hoặc hủy dịch vụ bất cứ lúc nào mà không bị khóa hệ thống hay mất mã nguồn.

### 2.3. Ngân Sách Quảng Cáo & Nhà Cung Cấp Bên Thứ Ba (Ad Spend & Third-Party)
- **Bản chất:** Là các khoản phí do Google, Meta (Facebook), nhà đăng ký tên miền (.vn / .com) thu trực tiếp.
- **Cơ chế thanh toán:** Thẻ thanh toán quốc tế (Visa/Mastercard) của khách hàng được gắn trực tiếp vào tài khoản Google Ads / Meta Ads chính chủ. Hóa đơn điện tử xuất thẳng cho doanh nghiệp của khách.
- **Localmate chỉ thu phí công thiết lập & quản trị chiến dịch (Management/Setup Fee)**, tuyệt đối không "ăn chênh lệch" tiền hiển thị của khách hàng.

---

## 3. Bảng Khung Giá Tham Chiếu Theo Từng Nhóm Giải Pháp

Dưới đây là khung giá chuẩn được công khai trên toàn hệ thống Localmate (Đã đồng bộ với Catalog mã dịch vụ thực tế):

### 3.1. Nhóm 01: Xây Nền Tảng Số (Website & Hồ Sơ Số)

| Hạng mục dịch vụ | Quy mô / Phạm vi | Chi phí Setup (1 lần) | Phí duy trì gợi ý (Tháng) | Quyền sở hữu & Bàn giao |
| :--- | :--- | :--- | :--- | :--- |
| **Website Bán Hàng 1 Trang** *(Landing 490k)* | 1 trang tinh gọn, chuẩn di động, nút gọi Zalo, bảng giá | **490.000đ** | 0đ *(Tự quản)* hoặc **290.000đ** *(Gói Care)* | 100% Mã nguồn + Hosting tĩnh Cloudflare 0đ trọn đời |
| **Website Doanh Nghiệp Chuẩn Mực** | 3–5 trang: Chủ, Giới thiệu, Dịch vụ, Bảng giá, Liên hệ | **1.890.000đ – 3.490.000đ** | Tùy chọn gói Care Mini hoặc Business | Mã nguồn chuẩn SEO, bàn giao toàn bộ file và database |
| **Sửa Nhanh / Cải Thiện Web Cũ** | Sửa lỗi nhỏ, đổi hotline, tăng tốc, sửa giao diện vỡ | **Từ 99.000đ – 299.000đ / lần** | Không áp dụng | Nghiệm thu theo từng đầu việc cụ thể |

---

### 3.2. Nhóm 02: Được Khách Hàng Tìm Thấy (Google Maps & SEO)

| Hạng mục dịch vụ | Quy mô / Phạm vi | Chi phí Setup (1 lần) | Phí duy trì gợi ý (Tháng) | Quyền sở hữu & Bàn giao |
| :--- | :--- | :--- | :--- | :--- |
| **Xác Minh & Tối Ưu Vị Trí Google Maps** | Tạo mới hoặc chuẩn hóa hồ sơ Maps, NAP, mã QR đánh giá | **299.000đ – 690.000đ** | 0đ *(Đã bàn giao)* | Quyền Chủ sở hữu chính (Primary Owner) trên Gmail khách |
| **Tối Ưu Tìm Kiếm AI (GEO & AEO Starter)** | Cấu trúc Schema LocalBusiness, chuẩn hóa dữ liệu hỏi đáp | **690.000đ – 1.490.000đ** | Tùy chọn duy trì content | Báo cáo kiểm tra Schema hợp lệ trên Rich Results Test |
| **SEO Từ Khóa Nhu Cầu Địa Phương** | Tối ưu onpage 5–10 cụm từ khóa có nhu cầu cao tại khu vực | **1.890.000đ – 3.890.000đ** | Tùy chọn theo quý | Bàn giao bài viết chuẩn cấu trúc và báo cáo thứ hạng |

---

### 3.3. Nhóm 03: Thu Hút Khách Hàng (Google & Meta Ads)

| Hạng mục dịch vụ | Quy mô / Phạm vi | Phí Setup kỹ thuật (1 lần) | Phí Tối ưu & Vận hành chiến dịch | Ngân sách quảng cáo trả nền tảng |
| :--- | :--- | :--- | :--- | :--- |
| **Khởi Tạo Chiến Dịch Google Search Ads** | Nghiên cứu từ khóa nhu cầu, viết mẫu quảng cáo, phủ định từ khóa rác | **390.000đ – 790.000đ** | Miễn phí theo dõi 7 ngày đầu | Khách tự nạp trực tiếp qua thẻ (Khuyến nghị 50k–150k/ngày) |
| **Khởi Tạo Chiến Dịch Meta Ads (Khu Vực)** | Thiết lập tệp đối tượng bán kính 3–5km, gắn Pixel theo dõi tin nhắn | **490.000đ – 890.000đ** | Miễn phí theo dõi 7 ngày đầu | Khách tự nạp trực tiếp qua thẻ (Khuyến nghị 50k–100k/ngày) |
| **Quản Trị Chiến Dịch Tháng** *(Nếu khách không có thời gian tự theo dõi)* | Tối ưu chi phí mỗi cuộc gọi, thêm từ khóa mới, báo cáo tuần | Không thu phí Setup lại | **590.000đ – 1.200.000đ / tháng** | Khách thanh toán độc lập với nền tảng |

---

### 3.4. Nhóm 04: Vận Hành Tự Động Hóa (Automation & CRM)

| Hạng mục dịch vụ | Quy mô / Phạm vi | Chi phí Setup (1 lần) | Phí bản quyền công cụ bên thứ 3 | Quyền sở hữu & Bàn giao |
| :--- | :--- | :--- | :--- | :--- |
| **Báo Đơn & Số Điện Thoại Về Telegram/Zalo** | Tích hợp Webhook kết nối Form Web sang máy chủ thông báo | **299.000đ** | **0đ** *(Dùng hạ tầng miễn phí vĩnh viễn)* | Luồng tự động hoạt động ổn định, không tốn phí duy trì |
| **Lưu Trữ Khách Hàng Tự Động Vào Google Sheets** | Tự phân loại ngày giờ, dịch vụ, số điện thoại theo cột | **199.000đ** | **0đ** *(Google Drive cá nhân)* | Bảng tính bàn giao quyền quản trị cho chủ cơ sở |
| **Hệ Thống Đặt Lịch Hẹn Trực Tuyến Tự Động** | Khách chọn giờ rảnh, tự trừ lịch trùng, gửi tin nhắn xác nhận | **690.000đ – 1.290.000đ** | **0đ** *(Tận dụng Google Calendar / Form)* | Quy trình khép kín, hướng dẫn nhân viên tiếp nhận |

---

### 3.5. Nhóm 05: Gói Chăm Sóc & Đồng Hành Hàng Tháng (Digital Care Tiers)

Khách hàng có thể lựa chọn 1 trong 3 mức đồng hành kỹ thuật linh hoạt:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      3 GÓI ĐỒNG HÀNH KỸ THUẬT HÀNG THÁNG                        │
├──────────────────────────┬──────────────────────────┬───────────────────────────┤
│ GÓI CARE MINI            │ GÓI CARE BUSINESS ⭐     │ GÓI CARE PRO              │
│ 290.000đ / tháng         │ 590.000đ / tháng         │ 1.290.000đ / tháng        │
├──────────────────────────┼──────────────────────────┼───────────────────────────┤
│ • Giám sát web 24/7      │ • Toàn bộ quyền lợi Mini │ • Toàn bộ quyền lợi Bus.  │
│ • Sao lưu định kỳ tuần   │ • Cập nhật nội dung/ảnh  │ • Cập nhật bài viết định  │
│ • Hỗ trợ sửa 02 task nhỏ │ • Hỗ trợ sửa 04 task nhỏ │   kỳ 4 bài chuẩn SEO/tháng│
│ • Tiếp nhận qua Zalo     │ • Chăm sóc Google Maps   │ • Tối ưu chiến dịch Ads   │
│                          │ • Kiểm tra nút gọi/form  │ • Báo cáo chuyên sâu tháng│
└──────────────────────────┴──────────────────────────┴───────────────────────────┘
```

---

## 4. Quy Định Về Phát Sinh & Điều Khoản Loại Trừ (Inclusions & Exclusions)

Nhằm đảm bảo sự thẳng thắn và uy tín lâu dài, mọi hợp đồng/biên nhận dịch vụ của Localmate đều ghi rõ:

### 4.1. Những Gì ĐÃ BAO GỒM (Inclusions)
- Khảo sát hiện trạng và tư vấn giải pháp đúng nhu cầu trước khi ký hợp đồng.
- Bàn giao trọn gói tài khoản quản trị cao nhất (Super Admin/Owner).
- Tài liệu hướng dẫn sử dụng và bàn giao kỹ thuật bằng tiếng Việt.
- Bảo hành lỗi kỹ thuật phát sinh do quá trình cài đặt trong vòng 30 ngày kể từ ngày nghiệm thu.

### 4.2. Những Gì KHÔNG BAO GỒM (Exclusions)
- **Chi phí mua tên miền quốc tế (.com) hoặc quốc gia (.vn):** Khách hàng tự đóng trực tiếp cho nhà đăng ký tên miền (khoảng 250k–750k/năm tùy đuôi).
- **Ngân sách nạp tiền chạy quảng cáo cho Google hoặc Meta:** Doanh nghiệp tự kiểm soát hạn mức chi tiêu trên thẻ ngân hàng của mình.
- **Chi phí bản quyền các phần mềm quản lý nâng cao của bên thứ ba** (nếu khách hàng chủ động yêu cầu sử dụng các phần mềm trả phí như KiotViet, Sapo, HubSpot...).
- **Viết bài PR trên các báo điện tử lớn** (VNExpress, Dân Trí...) nếu không nằm trong thỏa thuận ban đầu.

---

## 5. Quy Trình Thanh Toán 2 Đợt Tiêu Chuẩn

1. **Đợt 1 (Tạm ứng 50%):** Sau khi hai bên thống nhất danh mục công việc (Scope of Work) và ký xác nhận đơn hàng để Localmate tiến hành khảo sát và triển khai hạ tầng.
2. **Đợt 2 (Thanh toán 50% còn lại):** Sau khi khách hàng kiểm tra thực tế hệ thống chạy tốt trên điện thoại và máy tính, nhận toàn bộ biên bản bàn giao và quyền sở hữu tài sản số.
