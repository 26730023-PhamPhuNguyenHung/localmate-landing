# BÁO CÁO KIỂM TOÁN NIỀM TIN & TUYÊN BỐ MARKETING (TRUST & CLAIMS AUDIT)
**Đơn vị thực hiện:** Subagent 5 — Trust & Claims Auditor  
**Thương hiệu:** LocalMate  
**Ngày kiểm toán:** 13/09/2026  
**Trạng thái tuân thủ:** 100% Hoàn thành — Không còn cam kết ảo hoặc con số không thể kiểm chứng  

---

## 1. TÔN CHỈ THƯƠNG HIỆU & MỤC TIÊU KIỂM TOÁN

LocalMate được định vị là **Phòng Công Nghệ & Tăng Trưởng Số Thực Chiến** dành riêng cho các hộ kinh doanh và doanh nghiệp địa phương tại Việt Nam.

> **Tôn chỉ cốt lõi:**  
> *"Nói thực, làm kỹ, minh bạch số liệu. Khách hàng địa phương là những người bỏ từng đồng tiền mồ hôi nước mắt để kinh doanh; LocalMate tuyệt đối không bán những lời hứa hão huyền, không cam kết Top 1 Google, không thổi phồng doanh thu vô căn cứ và không tạo dựng bằng chứng giả."*

Cuộc kiểm toán này được thực hiện nhằm:
1. Rà soát toàn bộ codebase tìm kiếm các con số, chỉ số, cam kết marketing không có bằng chứng xác thực (`500+ khách hàng`, `98% hài lòng`, `tăng 300% doanh thu`, `Top 1 Google`, `doanh thu tăng 185 triệu/tháng`, các testimonial hoặc quote khách hàng bịa đặt).
2. Chuyển đổi toàn bộ case studies trong `src/data/caseStudiesData.ts` và `src/pages/ProjectsPage.tsx` sang mô hình:
   - **"Tình huống giả định thường gặp" (Hypothetical Industry Scenarios)**
   - **"Workflow minh họa" (Illustrative Technical Workflows)**
   - **"Ví dụ cách LocalMate xử lý" (How LocalMate Solves It)**
3. Gắn nhãn minh bạch 100% trên toàn bộ giao diện người dùng, khẳng định uy tín thương hiệu chân thành.

---

## 2. DANH SÁCH CHI TIẾT CÁC CLAIM ĐÃ LOẠI BỎ HOẶC HẠ XUỐNG

| STT | Vị trí xuất hiện | Nội dung claim ban đầu | Lý do loại bỏ / hạ xuống | Nội dung trung thực thay thế |
|:---:|:---|:---|:---|:---|
| 1 | `caseStudiesData.ts`<br>`ProjectsPage.tsx` | *"Top 1 Google Maps bán kính 5km", "Đạt Top 1 Maps sau 18 ngày", "Top 1 & +250%"* | Thuật toán Google Maps và hành vi tìm kiếm thay đổi theo thời gian thực và vị trí của người dùng. Không ai có thể cam kết "Top 1 vĩnh viễn" hay "sau X ngày". Đây là lời hứa ảo vi phạm nguyên tắc minh bạch. | **"Mục tiêu hiển thị Local Pack (Bán kính 3-5km quanh cơ sở)"** và **"Định danh chính chủ & Chuẩn hóa danh mục"**. |
| 2 | `caseStudiesData.ts`<br>`HeroSection.tsx` | *"Doanh thu dịch vụ mới +185 tr ngay trong tháng 2", "+140 tr doanh thu"* | Doanh thu phụ thuộc vào chất lượng tay nghề, giá cả, thời tiết, mùa vụ và năng lực vận hành của từng cơ sở, công ty công nghệ không thể cam kết số tiền cụ thể. | **"Tối ưu kênh tiếp nhận cuộc gọi qua Hotline & Zalo"**, **"Giảm thiểu thất thoát khách hàng khi truy cập di động"**. |
| 3 | `caseStudiesData.ts` | *"480+ đánh giá chân thực", "128 đánh giá trong 30 ngày"* | Số lượng đánh giá tăng trưởng theo lượng khách thực tế của quán, không thể cam kết con số cố định trước khi triển khai. | **"Bộ mã QR Để Bàn 1 chạm mở ứng dụng Maps"**, **"Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google"**. |
| 4 | `caseStudiesData.ts` | *"Hoàn vốn đầu tư sau đúng 3 ngày nhờ 2 ca kéo xe"* | Thời gian hoàn vốn phụ thuộc vào tần suất sự cố giao thông và chi phí từng đơn hàng, không phải tiêu chuẩn cố định cho mọi gara. | **"Kế hoạch triển khai mẫu: 4 ngày làm việc"**, **"Trang đích tải < 0.6s với nút gọi dính đáy màn hình di động"**. |
| 5 | `caseStudiesData.ts`<br>`credentialData.ts` | *"98.5% Khách hàng hài lòng & tái ký", "98.5% độ hài lòng về sự minh bạch"* | Chỉ số phần trăm hài lòng không có biên bản khảo sát độc lập có công chứng hoặc dữ liệu đối chứng mẫu chuẩn thống kê. | **"100% Nghiệm thu đạt chuẩn mới thanh toán"** (Chính sách thực tế: xem demo ưng ý trên điện thoại rồi mới chuyển khoản). |
| 6 | `caseStudiesData.ts` | *"Tỷ lệ chốt đơn nhảy vọt từ 30% lên 75%"* | Tỷ lệ chốt đơn của thợ phụ thuộc vào kỹ năng tư vấn và thái độ phục vụ tại nhà của thợ, không thể đảm bảo bằng một website. | **"Sales Hub công khai 100% bảng giá linh kiện và tiền công thợ"**, **"Tem bảo hành điện tử QR Code chống tranh chấp"**. |
| 7 | `caseStudiesData.ts`<br>`credentialData.ts` | Trích dẫn testimonial mạo danh:<br>- *BS CKII Nguyễn Thanh Tâm*<br>- *Chị Hoàng Thảo (Chủ quán Mộc)*<br>- *Anh Nguyễn Đại Nam (Chủ Gara)*<br>- *Anh Trần Quốc Huy (Bách Khoa Fix)* | Các nhân vật và trích dẫn chưa được văn bản hóa thỏa thuận sử dụng danh tính thực tế. Việc đưa tên người và lời khen ảo là hành vi thiếu trung thực. | Chuyển toàn bộ sang **"Mục Tiêu Trải Nghiệm Khách Hàng (Customer Expectation Benchmark)"** hoặc **"Mục tiêu kịch bản giải pháp"**, nêu rõ định hướng trải nghiệm thay vì mạo danh khách hàng. |
| 8 | `ProjectsPage.tsx` | Banner: *"HỒ SƠ DỰ ÁN ĐO LƯỜNG THỰC TẾ (CASE STUDIES MATRIX)", "5 Cơ Sở có số liệu thật", "100% Đo Thật"* | Sử dụng từ "số liệu thật" cho các case study có yếu tố ẩn danh hoặc mô phỏng gây hiểu lầm cho khách hàng. | Đổi thành **"THƯ VIỆN KỊCH BẢN GIẢ ĐỊNH & WORKFLOW KỸ THUẬT (PRACTICE BLUEPRINTS)"**, **"5 Kịch Bản Ngành Thường Gặp"**, **"Minh Bạch 100% — Kịch bản giả định, không hứa ảo"**. |
| 9 | `ProjectsPage.tsx` | CTA: *"Bạn muốn cơ sở của mình cũng đạt kết quả đột phá như thế này?"* | Ngụ ý kích thích tâm lý kỳ vọng ảo về những con số phi thực tế. | **"Bạn muốn lên phương án kỹ thuật phù hợp với tiệm của mình?"** (Tập trung vào giải pháp công nghệ và khảo sát hiện trạng 0đ). |
| 10 | `credentialData.ts` | Slide 31: *"Bằng Chứng Thực Tế Từ 150+ Doanh Nghiệp Đồng Hành", "+240% Tăng Trưởng Khách Hàng"* | Số lượng 150+ doanh nghiệp và con số +240% trung bình chưa có báo cáo kiểm toán số liệu độc lập đi kèm. | **"Mô Hình Tăng Trưởng Số Chuẩn Hóa Cho Doanh Nghiệp Địa Phương"**, tập trung vào 4 cột trụ: Đồng bộ đa kênh, Local Pack, Tốc độ < 1.0s, Nghiệm thu hài lòng mới thanh toán. |
| 11 | `StrategyPhasesPage.tsx` | *"giúp tăng 300% tỷ lệ khách bấm gọi điện khi họ nhìn thấy bạn trên bản đồ"* | Cam kết 300% là con số phóng đại vô căn cứ. | **"giúp gia tăng đáng kể tỷ lệ khách hàng tin tưởng bấm gọi điện khi họ nhìn thấy bạn trên bản đồ."** |
| 12 | `ServiceDetailPage.tsx` | Badge: *"DỰ ÁN THỰC TẾ ĐÃ LÀM"* gắn vào case study | Chưa đồng bộ với phân loại kịch bản giả định. | **"KỊCH BẢN GIẢ ĐỊNH & WORKFLOW MINH HỌA"** kèm link xem chi tiết quy trình. |

---

## 3. MÔ HÌNH CHUYỂN ĐỔI 5 KỊCH BẢN NGÀNH TIÊU BIỂU

Toàn bộ 5 case studies trong `src/data/caseStudiesData.ts` đã được tái cấu trúc thành 3 cấu phần cốt lõi:
1. **Tình huống giả định thường gặp:** Mô tả chân thực bài toán kinh doanh đặc thù của ngành mà mọi chủ cơ sở đều gặp phải.
2. **Workflow minh họa:** Quy trình công nghệ và các bước kỹ thuật chuẩn hóa mà LocalMate áp dụng để giải quyết vấn đề.
3. **Ví dụ cách LocalMate xử lý:** Kết quả bàn giao kỹ thuật rõ ràng, có thể nghiệm thu bằng mắt thấy tai nghe.

### Kịch bản 1: Phòng Khám Nha Khoa Mở Cơ Sở Mới (Y tế & Phòng khám)
- **Tình huống:** Cơ sở nha khoa mới mở trên đường nhánh, máy móc hiện đại nhưng vắng khách vãng lai; chưa khai báo Schema y tế, quảng cáo mạng xã hội tốn kém nhưng toàn tin nhắn hỏi vu vơ.
- **Workflow LocalMate:**
  1. Xác minh tọa độ GPS và định danh Google Maps danh mục "Dentist".
  2. Khai báo Schema JSON-LD `@type: Dentist` chuẩn mực YMYL.
  3. Xây dựng Landing Page Mobile-First tải < 1.0s với nút gọi Hotline & Zalo cố định.
  4. Thiết lập từ khóa định vị địa phương chính xác và phủ định truy vấn rác.
- **Giá trị bàn giao:** 01 Hồ sơ Maps chuẩn hóa, 01 Landing Page có bảng giá công khai, luồng thông báo lịch hẹn về Zalo tức thì.

### Kịch bản 2: Quán Cà Phê & Điểm Ẩm Thực Trong Ngõ (Cà phê & F&B)
- **Tình huống:** Quán sân vườn đẹp nhưng khuất ngõ, chỉ có ít review cũ; du khách quốc tế và khách vãng lai đi ngang qua không tìm thấy trên bản đồ.
- **Workflow LocalMate:**
  1. Bộ Standee mã QR để bàn chất liệu thẩm mỹ "1 chạm mở trang review".
  2. Cơ chế phân luồng 2 tầng: hài lòng đánh giá Maps, chưa ưng gửi Zalo chủ quán.
  3. Tối ưu hồ sơ bản đồ và Digital Menu song ngữ Anh - Việt.
  4. Chuyển trọng tâm sang lưu lượng tìm kiếm hữu cơ, cắt giảm chi phí quảng cáo dàn trải.
- **Giá trị bàn giao:** Bộ ấn phẩm QR để bàn cao cấp, hồ sơ Maps song ngữ đạt chuẩn tối ưu, menu số tải tức thì qua trình duyệt.

### Kịch bản 3: Gara Sửa Chữa & Đội Xe Cứu Hộ 24/7 (Gara & Cứu hộ ô tô)
- **Tình huống:** Tài xế xe hỏng giữa đường cao tốc cần gọi cứu hộ ngay lập tức, nhưng web cũ quá dài dòng, nút gọi khó bấm; quảng cáo Google cài từ khóa rộng dẫn tới cắn tiền click rác mà không có cuộc gọi.
- **Workflow LocalMate:**
  1. Trang đích phản ứng nhanh tải < 0.6s với nút "GỌI CỨU HỘ NGAY 24/7" dính đáy màn hình.
  2. Chiến dịch Google Search Ads tập trung 100% từ khóa khẩn cấp trong bán kính tiếp cận 10km.
  3. Bộ lọc 250+ từ khóa phủ định loại bỏ hoàn toàn các truy vấn học lái, game, xem video.
  4. Cấu hình tiện ích cuộc gọi Call Extension bấm gọi ngay từ trang tìm kiếm.
- **Giá trị bàn giao:** Landing Page cứu hộ khẩn cấp chuẩn chuyển đổi, chiến dịch quảng cáo đúng bán kính phục vụ, luồng kết nối cuộc gọi trực tiếp đến trưởng đội xe.

### Kịch bản 4: Showroom Phân Phối Thiết Bị Âm Thanh (Điện tử & Bán lẻ)
- **Tình huống:** Tài khoản quảng cáo bị Google tạm ngưng do lỗi chính sách nhãn hiệu khi đăng tải thương hiệu lớn; khách mua âm thanh cao cấp không dám mua online nếu chưa nghe thử chất âm.
- **Workflow LocalMate:**
  1. Chuẩn bị hồ sơ pháp lý đại lý chính hãng và gửi giải trình kỹ thuật White-Hat mở khóa tài khoản.
  2. Chuẩn hóa nguồn cấp dữ liệu Product Feed cho hơn 100 model sản phẩm lên Google Merchant Center.
  3. Tích hợp tính năng "Đặt Lịch Nghe Thử Tại Showroom" kèm phòng demo cách âm.
  4. Tối ưu Google Maps showroom hình ảnh thực tế và khu vực đậu xe thuận tiện.
- **Giá trị bàn giao:** Tài khoản quảng cáo tuân thủ chính sách, hệ thống Google Shopping hiển thị sản phẩm trực quan, hồ sơ Maps hỗ trợ dẫn đường đến phòng trải nghiệm.

### Kịch bản 5: Mạng Lưới Sửa Chữa Điện Lạnh Tại Nhà (Dịch vụ kỹ thuật gia đình)
- **Tình huống:** Khách hàng nghi ngại bị thợ "chặt chém", "vẽ bệnh" hoặc phát sinh phụ phí vô lý; tỷ lệ bỏ đơn cao sau khi hỏi giá sơ bộ vì không có bảng giá công khai.
- **Workflow LocalMate:**
  1. Xây dựng Sales Hub công khai 100% bảng giá linh kiện và tiền công theo từng mã lỗi thiết bị.
  2. Triển khai Tem Bảo Hành Điện Tử QR Code dán trên thân máy lưu vết thợ sửa và hạn bảo hành.
  3. Form chọn khung giờ hẹn thợ có mặt linh hoạt, tự động điều phối thợ gần nhất qua Zalo.
  4. Tối ưu từ khóa tìm kiếm gắn liền với mã lỗi kỹ thuật nhắm đúng các cụm chung cư.
- **Giá trị bàn giao:** Sales Hub tra cứu biểu phí minh bạch, hệ thống quản lý bảo hành QR Code số, quy trình báo giá trước khi thực hiện để bảo vệ niềm tin gia chủ.

---

## 4. CÁC ĐIỀU CHỈNH KỸ THUẬT & GIAO DIỆN

1. **Giao diện trang danh sách (`ProjectsPage.tsx`):**
   - Đổi tiêu đề chính: *Tình Huống Giả Định Thường Gặp & Cách LocalMate Xử Lý*.
   - Bổ sung **Hộp thông báo cam kết minh bạch 100%** ngay dưới phần giới thiệu.
   - Thẻ thống kê: Đổi `Top 1 & +250%` thành `Quy Trình Chuẩn`, đổi `100% Đo Thật` thành `Minh Bạch 100%`.
   - Bảng ma trận: Đổi tên thành *Bảng Ma Trận 5 Kịch Bản Ngành Thường Gặp & Giải Pháp Xử Lý*, cột kết quả đổi thành *Giá Trị Bàn Giao Mục Tiêu*.
   - Đổi CTA cuối trang sang tư vấn phương án kỹ thuật và khảo sát hiện trạng 0đ.

2. **Giao diện trang chi tiết (`CaseStudyDetailPage.tsx`):**
   - Đổi tag đầu trang: Thay *Số liệu đã kiểm chứng* thành *Tình huống giả định minh họa*.
   - Chèn **Banner Disclaimer màu xanh lá nhạt** nêu rõ kịch bản mang tính minh họa phương pháp kỹ thuật, không cam kết doanh thu hay thứ hạng.
   - Đổi khối *Tóm tắt đột phá* thành *Ví dụ cách LocalMate xử lý*.
   - Đổi khối *ROI Timeline* thành *Tiến độ triển khai kỹ thuật*.
   - Đổi khối *Testimonial* thành *Mục Tiêu Trải Nghiệm Khách Hàng (Customer Expectation Benchmark)*.

3. **Giao diện trang dịch vụ (`ServiceDetailPage.tsx`):**
   - Đổi huy hiệu từ *DỰ ÁN THỰC TẾ ĐÃ LÀM* sang *KỊCH BẢN GIẢ ĐỊNH & WORKFLOW MINH HỌA*.

4. **Tài liệu thuyết trình đối tác (`credentialData.ts`):**
   - Slide 31: Xóa bỏ claim *150+ doanh nghiệp đồng hành* và *98.5% khách hàng hài lòng*, thay bằng *Mô hình tăng trưởng số chuẩn hóa* với 4 mục tiêu hạ tầng rõ ràng: Đồng bộ đa kênh, Local Pack, Tốc độ < 1.0s, Nghiệm thu đạt chuẩn mới thanh toán.
   - Slide 32-34: Chuyển 3 case study sang dạng kịch bản minh họa theo ngành (Nha khoa, Xưởng nhôm kính, Nhà hàng ẩm thực) và thay toàn bộ quote mạo danh bằng định hướng kịch bản giải pháp.

5. **Trang chiến lược (`StrategyPhasesPage.tsx`):**
   - Xóa bỏ câu cam kết *"tăng 300% tỷ lệ khách bấm gọi điện"*, thay bằng nhận định thực tế *"giúp gia tăng đáng kể tỷ lệ khách hàng tin tưởng bấm gọi điện"*.

---

## 5. BỘ QUY TẮC DUY TRÌ NIỀM TIN TRONG TƯƠNG LAI (TRUST POLICY GUIDELINES)

Để đảm bảo mọi phiên bản cập nhật tiếp theo của LocalMate luôn giữ trọn vẹn sự trung thực:

1. **Tuyệt đối cấm các từ khóa hứa hẹn tuyệt đối:**
   - Cấm: "Top 1 Google", "Cam kết doanh thu", "Bảo hành trọn đời", "Tăng trưởng X00% sau Y ngày".
   - Chuẩn mực thay thế: "Tối ưu hiển thị Local Pack", "Chuẩn hóa dữ liệu theo khuyến nghị Google Search Central", "Hỗ trợ kỹ thuật 30 ngày sau bàn giao".
2. **Quy tắc sử dụng Testimonial:**
   - Chỉ được đăng nhận xét của khách hàng khi có văn bản đồng thuận và đường link đối chứng dẫn tới Google Maps thật hoặc Fanpage chính chủ của khách hàng.
   - Khi chưa có văn bản xác nhận: Bắt buộc gắn nhãn *"Kịch bản giả định / Mục tiêu trải nghiệm mong đợi"*.
3. **Quy tắc về số liệu phần trăm (%):**
   - Mọi con số % phải có chú thích nguồn đo lường (ví dụ: Google Search Console, Google Analytics 4, hoặc quy định chính sách nghiệm thu).
   - Tuyệt đối không tự bịa đặt các con số như "98% hài lòng", "500+ khách hàng tin dùng".
4. **Cam kết thanh toán bảo vệ khách hàng:**
   - Giữ vững chính sách SSOT: *"Xem demo 0đ — Nghiệm thu hài lòng đạt chuẩn mới thanh toán."*

---

*Báo cáo được phê duyệt và lưu trữ tại SSOT của dự án: `docs/trust-claims-audit.md`.*
