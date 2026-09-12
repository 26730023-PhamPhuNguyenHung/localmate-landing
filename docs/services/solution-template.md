# Chuẩn Thiết Kế Trang Giải Pháp (Solution Page Template SSOT)

> **Trạng thái:** Active SSOT  
> **Phiên bản:** 2.0.0  
> **Ngày phê duyệt:** 13/09/2026  
> **Tác giả:** Docs SSOT Architect  
> **Phạm vi áp dụng:** Mọi trang chi tiết giải pháp thuộc 5 Solution Pillars của Localmate (ví dụ: `/giai-phap/duoc-tim-thay`, `/giai-phap/nen-tang-so`...).

---

## 1. Triết Lý Thiết Kế Trang Giải Pháp (Mental Model)

Mỗi trang giải pháp của Localmate phải đóng vai trò như một **Chuyên gia Cố vấn Kỹ thuật Trực tiếp (Consulting & Execution Partner)**, trò chuyện và tháo gỡ khó khăn cho khách hàng. Trang web không được biến thành một brochure tiếp thị sáo rỗng hay một danh mục tra cứu kỹ thuật máy móc.

Toàn bộ trang giải pháp được xây dựng đồng nhất theo cấu trúc **12 Sections Tiêu Chuẩn**, dẫn dắt cảm xúc và nhận thức của người đọc từ bài toán kinh doanh cá nhân đến giải pháp kỹ thuật, bằng chứng thực tế và lời kêu gọi hành động cụ thể.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   12-SECTION SOLUTION PAGE BLUEPRINT                   │
├────────────────────────────────────────────────────────────────────────┤
│ 01. HERO (Vấn đề & Giá trị cốt lõi trong 5 giây)                       │
│ 02. VẤN ĐỀ THƯỜNG GẶP (3–5 Nỗi đau thực tế của doanh nghiệp)           │
│ 03. KẾT QUẢ HƯỚNG TỚI (Mục tiêu kinh doanh đo lường được)              │
│ 04. LOCALMATE SẼ LÀM GÌ (Quy trình công việc minh bạch từng bước)      │
│ 05. NĂNG LỰC & KỸ THUẬT (Capabilities & Tech Modules kèm giải thích)   │
│ 06. HẠNG MỤC BÀN GIAO (Deliverables & Tài sản khách hàng sở hữu)       │
│ 07. LỘ TRÌNH THỰC HIỆN (Timeline triển khai từ khảo sát đến chạy thật) │
│ 08. BẢNG GIÁ & ĐẦU TƯ (Tách bạch Setup, Phí duy trì & Chi phí bên thứ 3)│
│ 09. TÌNH HUỐNG THỰC TẾ THEO NGÀNH (Cross-Industry Use Cases)           │
│ 10. VÌ SAO CHỌN LOCALMATE (Minh bạch, sở hữu tài sản, không bẫy giá)   │
│ 11. CÂU HỎI THƯỜNG GẶP (FAQ giải đáp băn khoăn mua hàng thực tế)       │
│ 12. KÊU GỌI HÀNH ĐỘNG (CTA Form nói lên nhu cầu cụ thể của khách)      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Chi Tiết 12 Sections Chuẩn Mực

---

### SECTION 01 — HERO (Mở Đầu Thực Tế & Lời Hứa Giải Pháp)
- **Mục tiêu:** Giúp khách hàng nhận ra ngay giải pháp này có dành cho họ không trong vòng 5 giây đầu tiên.
- **Quy tắc Copy:**
  - ❌ *Tuyệt đối không mở bằng thuật ngữ:* "Dịch vụ SEO Tổng thể chuẩn Semantic Entity & GEO AI 4.0".
  - ✅ *Mở bằng bài toán & giải pháp thực tế:* "Giúp khách hàng tìm thấy doanh nghiệp của bạn ngay khi họ đang có nhu cầu bức thiết tại địa phương."
- **Cấu trúc thành phần:**
  - **Badge nhỏ (Eyebrow):** Tên trụ cột giải pháp (ví dụ: `02. HIỆN DIỆN & TÌM KIẾM CỤC BỘ`).
  - **Tiêu đề chính (H1):** Nói thẳng vào kết quả người dùng mong muốn (`text-wrap: pretty`).
  - **Đoạn mô tả ngắn (Subheadline):** 2–3 câu giải thích cách Localmate kết hợp công nghệ để hiện thực hóa kết quả đó.
  - **CTA chính:** Nút bấm hành động trực tiếp: `Trao đổi về tình trạng của bạn` (Mở modal tiếp nhận thông tin).
  - **CTA phụ:** `Xem chi tiết các việc Localmate sẽ làm` (Cuộn mượt xuống Section 04).
  - **Thẻ minh chứng nhanh (Trust Anchor):** 3 cam kết nhỏ (Sở hữu 100% tài sản / Báo giá trọn gói không phát sinh / Bàn giao mã nguồn).

---

### SECTION 02 — VẤN ĐỀ THƯỜNG GẶP (Pain Points Recognition)
- **Mục tiêu:** Tạo sự đồng cảm sâu sắc, cho thấy Localmate thực sự hiểu những vướng mắc hằng ngày của chủ doanh nghiệp.
- **Quy tắc Copy:** Trình bày từ 3 đến 5 câu nói/trường hợp có thật của khách hàng, không diễn đạt trừu tượng.
- **Mẫu nội dung thực tế:**
  1. *"Đã thuê làm website tiền triệu nhưng mỗi tháng chẳng có nổi một cuộc gọi hay tin nhắn nào từ khách lạ."*
  2. *"Tìm tên cơ sở mình trên Google Maps thì trôi sang phường khác, hoặc thông tin giờ mở cửa bị hiển thị sai."*
  3. *"Khách hàng ở ngay con phố bên cạnh tìm thợ/dịch vụ thì bản đồ chỉ toàn hiển thị cơ sở của đối thủ."*
  4. *"Từng tự chạy quảng cáo thử nhưng chỉ thấy tiền trong tài khoản trừ đều đều mà không thấy khách đâu."*

---

### SECTION 03 — KẾT QUẢ HƯỚNG TỚI (Measurable Business Outcomes)
- **Mục tiêu:** Định hình kỳ vọng thực tế, định lượng giá trị kinh doanh mà giải pháp mang lại.
- **Quy tắc Copy:** Tránh tuyệt đối các lời hứa viển vông ("Cam kết Top 1 vĩnh viễn", "Doanh thu tăng gấp 5 lần"). Thay bằng các chỉ số có thể kiểm chứng được:
  - **Tăng độ phủ tìm kiếm:** Xuất hiện đồng nhất trên Google Search, Google Maps và các ứng dụng trợ lý AI.
  - **Đo lường được chuyển đổi:** Theo dõi chính xác bao nhiêu lượt người đã bấm nút gọi điện, bấm chỉ đường hoặc gửi biểu mẫu.
  - **Tài sản số tích lũy dài hạn:** Nội dung và hồ sơ thuộc quyền sở hữu của doanh nghiệp, tiếp tục mang lại khách hàng tự nhiên ngay cả khi dừng chiến dịch quảng cáo.

---

### SECTION 04 — LOCALMATE SẼ LÀM GÌ (Actionable Scope & Transparency)
- **Mục tiêu:** Xóa tan tâm lý sợ bị "vẽ việc" hoặc không hiểu tiền của mình bỏ ra được dùng để làm những gì.
- **Cấu trúc 7 bước làm việc rõ ràng:**
  1. **Khảo sát hiện trạng & Kiểm tra lỗi:** Đánh giá tình trạng website, định danh tên thương hiệu và tài khoản Maps hiện tại.
  2. **Xác định điểm nghẽn chuyển đổi:** Tìm nguyên nhân tại sao khách hàng vào xem mà không liên hệ.
  3. **Lập danh sách ưu tiên:** Chọn ra những việc cốt lõi cần làm trước để mang lại kết quả nhanh nhất, tránh dàn trải.
  4. **Triển khai kỹ thuật:** Cài đặt mã nguồn, tinh chỉnh thẻ dữ liệu, đồng bộ hóa thông tin địa chỉ và tối ưu nội dung.
  5. **Gắn hệ thống đo lường:** Cài đặt công cụ theo dõi cuộc gọi và tin nhắn minh bạch.
  6. **Kiểm thử & Nghiệm thu:** Rà soát trên các kích thước màn hình điện thoại và máy tính, bàn giao quyền quản trị.
  7. **Đồng hành & Duy trì:** Cung cấp hướng dẫn sử dụng và định kỳ kiểm tra tình trạng hệ thống.

---

### SECTION 05 — CÁC CAPABILITIES BÊN TRONG (Technical Engine & Modules)
- **Mục tiêu:** Nơi duy nhất các thuật ngữ kỹ thuật được phép xuất hiện, nhưng luôn đi kèm lời giải thích bằng "tiếng người" (Plain Vietnamese).
- **Trình bày:** Dưới dạng lưới thẻ (Grid Cards) có icon rõ ràng:
  - **Google Maps & Local SEO:** Đưa vị trí doanh nghiệp lên bản đồ chuẩn xác và giữ vững tín hiệu hoạt động tích cực.
  - **Cấu Trúc Dữ Liệu Thực Thể (Schema):** Giúp bot tìm kiếm hiểu rõ địa chỉ, danh mục kinh doanh và thực đơn/bảng giá.
  - **Tối Ưu Đề Xuất AI (GEO & AEO):** Chuẩn bị sẵn dữ liệu có cấu trúc để các công cụ trợ lý AI (ChatGPT, Gemini) có thể đọc hiểu và đề xuất thương hiệu.
  - **Hiệu Năng Tải Trang (Core Web Vitals):** Đảm bảo trang web mở tức thì dưới 1.5 giây trên mạng 4G di động.

---

### SECTION 06 — HẠNG MỤC BÀN GIAO (Ownership & Deliverables)
- **Mục tiêu:** Trả lời trực diện câu hỏi *"Tôi sẽ cầm được cái gì trong tay sau khi xong?"*.
- **Quy tắc:** Liệt kê các tài sản số có thể kiểm tra và chuyển giao toàn quyền:
  - [x] Hồ sơ Google Business Profile được xác minh và chuyển quyền Sở hữu chính (Primary Owner) cho tài khoản Gmail của khách.
  - [x] Toàn bộ mã nguồn website đã đóng gói, không mã hóa, không khóa backdoor.
  - [x] Tài khoản quản lý tên miền và hạ tầng đám mây đứng tên chính chủ.
  - [x] Bảng báo cáo kỹ thuật và danh sách từ khóa nhu cầu đã tối ưu.
  - [x] Bộ tài liệu hướng dẫn và video ngắn hướng dẫn tự cập nhật hình ảnh/bài viết.

---

### SECTION 07 — LỘ TRÌNH THỰC HIỆN (Timeline & Process)
- **Mục tiêu:** Giúp khách hàng nắm được tiến độ và thời gian hoàn thành ước tính, không đưa ra cam kết ngày giờ vô lý.
- **Quy trình 5 mốc thời gian tiêu chuẩn:**
  - **Giai đoạn 1: Tiếp nhận & Thống nhất phạm vi (Ngày 1–2):** Ký biên nhận công việc, nhận thông tin cơ sở và hình ảnh thực tế.
  - **Giai đoạn 2: Khởi tạo nền tảng & Cấu hình (Ngày 3–5):** Xây dựng giao diện, thiết lập cấu trúc kỹ thuật và hồ sơ số.
  - **Giai đoạn 3: Tinh chỉnh & Gắn đo lường (Ngày 6–7):** Kiểm tra hiển thị di động, gắn mã theo dõi cuộc gọi và biểu mẫu.
  - **Giai đoạn 4: Chạy thử & Nghiệm thu bàn giao (Ngày 8–10):** Khách hàng trực tiếp kiểm tra thực tế trên điện thoại, bàn giao toàn bộ quyền sở hữu.
  - **Giai đoạn 5: Theo dõi sau vận hành (30 ngày tiếp theo):** Hỗ trợ giải đáp thắc mắc và kiểm tra dữ liệu đo lường định kỳ.

---

### SECTION 08 — BẢNG GIÁ & ĐẦU TƯ (Transparent Pricing Model)
- **Mục tiêu:** Minh bạch chi phí, giúp khách hàng tự tin lập ngân sách mà không lo các khoản "phí ẩn".
- **Quy tắc hiển thị:**
  - Hiển thị mức giá khởi điểm rõ ràng: `"Bắt đầu từ: X.000.000đ"`.
  - Tách bạch 3 cột chi phí:
    1. **Chi phí khởi tạo ban đầu (Setup Fee):** Trả 1 lần duy nhất để xây dựng và cấu hình hoàn thiện.
    2. **Chi phí duy trì hệ thống (Monthly Recurring Fee):** Tùy chọn cho việc bảo trì, cập nhật nội dung và hỗ trợ kỹ thuật định kỳ.
    3. **Ngân sách quảng cáo / Bên thứ ba (Ad Spend & 3rd Party):** Khách hàng tự nạp trực tiếp cho nhà mạng/Google/Meta, Localmate không thu phí hoa hồng chênh lệch.
  - Bảng liệt kê chi tiết: Có gì trong gói (Included) và Không có gì trong gói (Excluded).

---

### SECTION 09 — TÌNH HUỐNG THỰC TẾ THEO NGÀNH (Cross-Industry Use Cases)
- **Mục tiêu:** Giúp khách hàng thấy được cách giải pháp áp dụng vào chính mô hình kinh doanh cụ thể của họ.
- **Trình bày:** Bộ lọc thẻ theo ngành hoặc Tab chuyển đổi nhẹ nhàng:
  - **Phòng khám & Nha khoa:** Tập trung vào bảng giá dịch vụ minh bạch, bằng cấp bác sĩ và hệ thống đặt lịch hẹn trước tránh chờ đợi.
  - **Gara & Cứu hộ ô tô:** Tập trung vào hiển thị số điện thoại khẩn cấp, vị trí bản đồ mặt tiền và đánh giá uy tín của khách hàng cũ.
  - **Nhà hàng & F&B:** Thực đơn xem nhanh trên di động, hình ảnh không gian thực tế và chỉ đường Google Maps nhanh.
  - **Dịch vụ kỹ thuật tại nhà:** Cam kết có mặt nhanh trong bán kính phục vụ, bảng giá sửa chữa công khai.

---

### SECTION 10 — VÌ SAO CHỌN LOCALMATE (Why Localmate & Core Differentiators)
- **Mục tiêu:** Khẳng định sự khác biệt bằng đạo đức nghề nghiệp và cam kết làm việc thực tế, **tuyệt đối không công kích đối thủ**.
- **6 Luận điểm cốt lõi:**
  1. **Bạn sở hữu 100% tài sản số:** Tên miền, mã nguồn, tài khoản quảng cáo đều đứng tên của bạn.
  2. **Nói rõ phạm vi trước khi làm:** Có văn bản thống kê từng việc cụ thể, không mập mờ, không phát sinh chi phí giữa chừng.
  3. **Giải pháp vừa vặn, không vẽ việc:** Ưu tiên những giải pháp tinh gọn giải quyết ngay vấn đề, không bắt ép mua thêm công cụ đắt đỏ.
  4. **Bàn giao kèm tài liệu thực tế:** Sau khi làm xong có video và hướng dẫn bằng tiếng Việt để bạn tự chủ hoạt động khi cần.
  5. **Đồng hành có trách nhiệm:** Đội ngũ kỹ thuật túc trực tại địa phương, hỗ trợ qua nhóm Zalo chuyên trách khi gặp trục trặc.
  6. **Chi phí phù hợp quy mô doanh nghiệp nhỏ:** Mức đầu tư hợp lý, hoàn toàn có thể thu hồi vốn từ những khách hàng mới đầu tiên.

---

### SECTION 11 — CÂU HỎI THƯỜNG GẶP (Pre-Purchase FAQ)
- **Mục tiêu:** Giải tỏa những rào cản tâm lý cuối cùng trước khi khách hàng quyết định liên hệ.
- **Top câu hỏi bắt buộc phải có trong template:**
  1. *"Tôi chưa từng làm website bao giờ thì cần chuẩn bị những gì?"*
  2. *"Sau khi bàn giao, tôi có bắt buộc phải trả phí duy trì hàng tháng cho Localmate không?"*
  3. *"Nếu sau này tôi muốn chuyển cho người khác quản lý hoặc tự quản trị thì có được không?"*
  4. *"Chi phí quảng cáo sẽ được thanh toán như thế nào?"*
  5. *"Bao lâu thì tôi có thể thấy được kết quả hiển thị trên Google?"*

---

### SECTION 12 — KÊU GỌI HÀNH ĐỘNG (Contextual Conversion CTA)
- **Mục tiêu:** Thu thập thông tin nhu cầu thực tế của khách hàng bằng trải nghiệm thân thiện, không tạo cảm giác bị ép mua hàng.
- **Quy tắc Copy:**
  - ❌ *Tránh CTA sáo rỗng:* "Đăng ký mua ngay", "Nhận ưu đãi khủng hôm nay".
  - ✅ *Dùng CTA hỗ trợ:* "Hãy chia sẻ với Localmate công việc bạn đang cần hoàn thành."
- **Thiết kế Form:**
  - Ô chọn nhanh nhu cầu: `[Tôi cần làm web mới]` `[Tôi cần sửa Maps]` `[Tôi cần thêm khách gọi]` `[Tôi cần tư vấn trọn gói]`.
  - Ô nhập liệu chính: *"Mô tả ngắn tình trạng hoặc ngành nghề cơ sở của bạn (ví dụ: Nha khoa tại Quận Tân Bình)..."*
  - Ô số điện thoại / Zalo để chuyên viên kỹ thuật phản hồi.
  - Dòng cam kết bảo mật: *"Localmate cam kết chỉ liên hệ trao đổi về giải pháp kỹ thuật, không spam cuộc gọi quảng cáo."*

---

## 3. Quy Chuẩn Kỹ Thuật & Trải Nghiệm Giao Diện (UI/UX Engineering Rules)

1. **Light Mode Bắt Buộc:**
   - Nền sáng sạch sẽ (`#fbfcfb` / `#ffffff`), bề mặt Card trắng viền nhạt (`#e2e8f0` / `#dcfce7`).
   - Chữ đậm rõ nét (`#0f172a` cho tiêu đề, `#334155` cho văn bản thường).
   - Tuyệt đối cấm hiệu ứng `glassmorphism` (không dùng `backdrop-filter: blur`, không viền phát sáng mờ đục).
2. **Ổn Định Khung Hình (Layout Shift & Text Wrap):**
   - Áp dụng `scrollbar-gutter: stable` cho toàn bộ trang để chống hiện tượng co giật khi xuất hiện thanh cuộn.
   - Áp dụng `text-wrap: pretty` cho mọi tiêu đề `h1`, `h2`, `h3` để không bị rớt chữ đơn lẻ xuống dòng cuối.
3. **Ma Trận Màn Hình Kiểm Thử (Viewport Verification Matrix):**
   - **Màn hình Laptop 14-inch tiêu chuẩn:** `1366x768`, `1440x900` ở mức phóng to (Windows Scale) **125%**.
   - **Màn hình Di động phổ biến:** `390x844` (iPhone 12/13/14), `430x932` (iPhone Pro Max), `393x873` (Android Pixel/Galaxy).
   - Kiểm tra nghiêm ngặt: Tuyệt đối không có hiện tượng tràn chiều ngang (`scrollWidth <= innerWidth`).
