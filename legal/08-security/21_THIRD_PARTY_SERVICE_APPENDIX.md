# PHỤ LỤC DỊCH VỤ VÀ NỀN TẢNG BÊN THỨ BA
## (THIRD-PARTY PLATFORMS & INFRASTRUCTURE APPENDIX)
**Mã hiệu văn bản:** `LM-SEC-3RD-21`  
*(Đính kèm Hợp đồng Dịch vụ Khung số: [SO_HOP_DONG_MSA]/LM-MSA hoặc Đơn đặt hàng tương ứng)*  
**Căn cứ pháp lý:**  
- *Bộ luật Dân sự số 91/2015/QH13 (Điều 156, Điều 351 về sự kiện bất khả kháng và miễn trừ nghĩa vụ);*  
- *Luật Thương mại số 36/2005/QH11 (Điều 294 về các trường hợp miễn trách nhiệm);*  
- *Luật An toàn thông tin mạng số 86/2015/QH13;*  
- *Điều khoản Dịch vụ tiêu chuẩn của các nhà cung cấp nền tảng toàn cầu (Google Terms of Service, Meta Business Terms, Cloudflare Terms, Vercel, Supabase, OpenAI, Zalo Platform).*

---

Phụ lục này được lập và có hiệu lực kể từ ngày [NGAY] tháng [THANG] năm 202[X] giữa:
- **BÊN A (KHÁCH HÀNG):** [TEN_KHACH_HANG] (Đại diện: [NGUOI_DAI_DIEN_A])
- **BÊN B (LOCALMATE):** [LOCALMATE_LEGAL_NAME] (Đại diện: [REPRESENTATIVE])

Hai Bên thống nhất xác lập các nguyên tắc vận hành, phân định ranh giới trách nhiệm pháp lý và kỹ thuật liên quan đến việc sử dụng các công cụ, dịch vụ, nền tảng điện toán đám mây và hạ tầng mạng của Bên Thứ Ba trong suốt quá trình triển khai dự án theo các điều khoản sau:

---

### ĐIỀU 1. DANH MỤC CÁC NỀN TẢNG BÊN THỨ BA ĐƯỢC TÍCH HỢP
Trong quá trình cung ứng các giải pháp Website, Local SEO, Google Ads, Content và CRM/Automation, LocalMate sử dụng hoặc kết nối hệ thống với các nhà cung ứng nền tảng trung gian bên thứ ba (Third-Party Providers), bao gồm nhưng không giới hạn ở danh mục sau:

| STT | PHÂN LOẠI NỀN TẢNG | NHÀ CUNG CẤP ĐẠI DIỆN | VAI TRÒ TRONG HỆ THỐNG | BẢN QUYỀN & CHI PHÍ NỀN TẢNG (SUBSCRIPTION/USAGE) |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Hạ tầng Tên miền & Mạng CDN** | VNNIC/PA/Mắt Bão, Cloudflare | Đăng ký domain, phân giải DNS, bảo vệ tường lửa chống DDoS (WAF), caching toàn cầu. | Khách hàng tự thanh toán phí duy trì tên miền hàng năm và các gói Cloudflare nâng cao (nếu có). |
| **02** | **Nền tảng Tìm kiếm & Bản đồ** | Google LLC (Google Search, Google Maps / Business Profile) | Hiển thị vị trí doanh nghiệp, thu thập đánh giá, xếp hạng tìm kiếm địa phương. | Miễn phí nền tảng theo chính sách Google. Tuân thủ Google Business Profile Policies. |
| **03** | **Hệ thống Quảng cáo trực tuyến** | Google Ads, Meta Ads, TikTok Ads | Đấu thầu hiển thị quảng cáo tìm kiếm, banner hiển thị, mạng xã hội. | Khách hàng tự thanh toán trực tiếp 100% ngân sách quảng cáo (Media Spend) cho nền tảng. |
| **04** | **Lưu trữ & Cơ sở dữ liệu (Cloud/DB)** | Vercel, Hetzner, Supabase, Google Cloud Platform, AWS | Hosting mã nguồn website, chạy serverless functions, lưu trữ cơ sở dữ liệu và media assets. | Khách hàng tự chi trả gói tài nguyên vượt hạn mức miễn phí (Free Tier limits) hoặc trả gói Pro. |
| **05** | **Truyền thông & Gửi tin tự động** | Resend, SendGrid, Zalo Cloud (ZNS), Twilio, Telegram Bot API | Gửi email thông báo đơn hàng, tin nhắn xác thực OTP, tin nhắn chăm sóc khách hàng. | Khách hàng thanh toán phí tin nhắn/quota email theo bảng giá thực tế của nhà cung cấp. |
| **06** | **Trí tuệ Nhân tạo & Xử lý dữ liệu** | OpenAI API, Anthropic API, Google AI Studio | Phân loại lead, sinh gợi ý nội dung, chatbot thông minh hỗ trợ khách. | Khách hàng chi trả chi phí token tiêu thụ hàng tháng theo tài khoản OpenAI/Anthropic riêng. |

---

### ĐIỀU 2. VỊ THẾ PHÁP LÝ VÀ BẢN CHẤT DỊCH VỤ CỦA LOCALMATE
2.1. Hai Bên xác nhận rõ ràng rằng:
- LocalMate là **đơn vị tư vấn, thiết kế, triển khai kỹ thuật và tối ưu giải pháp**;
- LocalMate **không sở hữu, không quản trị, không vận hành và không đại diện theo ủy quyền** cho bất kỳ nhà cung cấp nền tảng bên thứ ba nào nêu tại Điều 1;
- Các nền tảng bên thứ ba hoạt động hoàn toàn độc lập, chịu sự điều chỉnh bởi các Điều khoản dịch vụ (Terms of Service - ToS), Chính sách cộng đồng và Quy chế sử dụng toàn cầu của chính các nhà cung cấp đó.

2.2. Khách hàng cam kết đọc, hiểu và tuân thủ các Điều khoản dịch vụ và Chính sách người dùng cuối của các nền tảng bên thứ ba được tích hợp trong giải pháp.

---

### ĐIỀU 3. MIỄN TRỪ TRÁCH NHIỆM KỸ THUẬT VÀ SỰ CỐ BÊN THỨ BA (FORCE MAJEURE & THIRD-PARTY OUTAGE)
Theo quy định tại Điều 351 Bộ luật Dân sự 2015 và Điều 294 Luật Thương mại 2005, LocalMate được **hoàn toàn miễn trừ mọi nghĩa vụ bồi thường thiệt hại, phạt vi phạm hoặc hoàn trả phí dịch vụ** đối với các thiệt hại trực tiếp hoặc gián tiếp phát sinh từ các sự cố ngoài tầm kiểm soát kỹ thuật hợp lý của LocalMate, bao gồm nhưng không giới hạn ở các trường hợp sau:

3.1. **Sự cố gián đoạn hạ tầng mạng và máy chủ (Outages & Downtime):**
- Sự cố đứt cáp quang biển quốc tế (AAG, APG, IA, AAE-1...), sự cố nghẽn mạng của các nhà mạng viễn thông tại Việt Nam (VNPT, Viettel, FPT);
- Sự cố ngừng hoạt động máy chủ toàn cầu hoặc khu vực của Cloudflare, Google, AWS, Vercel, Supabase dẫn đến việc website hoặc luồng CRM tạm thời không thể truy cập;
- Sự cố bảo trì định kỳ hoặc khẩn cấp được thông báo bởi các nhà cung cấp nền tảng.

3.2. **Thay đổi chính sách, thuật toán và ngừng cung cấp tính năng:**
- Google thay đổi thuật toán xếp hạng tìm kiếm tự nhiên (Core Algorithm Update), làm biến động vị trí từ khóa hoặc thứ hạng hiển thị Google Maps;
- Các nhà cung cấp nền tảng (Meta, Zalo, OpenAI) đơn phương thay đổi cấu trúc API (Breaking API Changes), thu hồi quyền truy cập API, thay đổi chính sách xét duyệt ứng dụng hoặc tăng phí dịch vụ đột xuất;
- Nhà mạng viễn thông hoặc Zalo siết chặt quy định kiểm duyệt mẫu tin nhắn thông báo (ZNS Template Review) làm chậm tiến độ gửi tin.

3.3. **Các quyết định kỷ luật, tạm khóa hoặc từ chối từ Nền tảng:**
- Google tạm ngừng hoạt động hoặc khóa tài khoản Google Ads do lỗi nghi ngờ thanh toán bất thường của thẻ tín dụng Khách hàng, hoặc do Khách hàng vi phạm Chính sách quảng cáo đối với ngành nghề đặc thù;
- Google Business Profile (Maps) bị tạm ngưng (Suspension), từ chối duyệt xác minh địa điểm do Google quét tự động hoặc do có tranh chấp địa chỉ thực tế tại địa phương mà không xuất phát từ hành vi gian lận có lỗi cố ý của LocalMate;
- Tên miền bị nhà đăng ký thu hồi do Khách hàng không nộp phí duy trì đúng hạn hoặc do cơ quan quản lý nhà nước (VNNIC) xử lý vi phạm nội dung của Khách hàng.

---

### ĐIỀU 4. NGHĨA VỤ CHI PHÍ VÀ DUY TRÌ QUOTA CỦA KHÁCH HÀNG
4.1. **Nguyên tắc chi phí nền tảng:** Toàn bộ chi phí duy trì bản quyền, cước phí sử dụng tài nguyên (resource quota, storage, API calls, bandwidth, tin nhắn ZNS, token AI) của các nền tảng bên thứ ba là **chi phí độc lập thuộc trách nhiệm chi trả của Khách hàng**, không bao gồm trong phí dịch vụ kỹ thuật của LocalMate (trừ khi có thỏa thuận trọn gói bằng văn bản trong SOW/Báo giá).

4.2. **Hệ quả của việc gián đoạn thanh toán nền tảng:** Trường hợp website, chiến dịch quảng cáo hoặc luồng tự động hóa bị ngắt kết nối do Khách hàng không thanh toán hoặc thanh toán chậm cước phí cho nhà cung cấp bên thứ ba (hết tiền thẻ quảng cáo, hết hạn tên miền, tài khoản OpenAI hết credit):
- LocalMate không chịu trách nhiệm về bất kỳ sự gián đoạn kinh doanh, mất dữ liệu tạm thời hoặc tổn thất doanh thu nào của Khách hàng;
- Thời gian dịch vụ bị gián đoạn do lỗi này không được trừ vào thời hạn cam kết hoặc thời hạn bảo hành của LocalMate.

---

### ĐIỀU 5. QUY CHẾ HỖ TRỢ VÀ PHỐI HỢP XỬ LÝ SỰ CỐ (BEST EFFORTS SUPPORT)
Mặc dù được miễn trừ trách nhiệm pháp lý theo Điều 3, LocalMate cam kết duy trì tinh thần trách nhiệm nghề nghiệp và nỗ lực tối đa (Reasonable Best Efforts) để hỗ trợ Khách hàng xử lý các sự cố phát sinh từ nền tảng bên thứ ba theo quy trình sau:

5.1. **Quy trình hỗ trợ chuẩn:**
- **Tiếp nhận & Chẩn đoán:** Khi nhận được thông báo của Khách hàng hoặc từ hệ thống giám sát tự động, LocalMate tiến hành kiểm tra mã lỗi, rà soát nguyên nhân trong vòng 04 giờ làm việc;
- **Phối hợp kháng nghị (Appeal):** Trong các trường hợp tài khoản Google Ads hoặc Google Maps bị khóa do quét nhầm thuật toán, LocalMate hướng dẫn và hỗ trợ Khách hàng soạn thảo hồ sơ, cung cấp tài liệu giải trình hợp pháp để gửi đơn khiếu nại (Appeal) lên đội ngũ hỗ trợ của Google;
- **Cập nhật mã nguồn chuyển đổi:** Trường hợp API bên thứ ba bị thay đổi bắt buộc, LocalMate hỗ trợ điều chỉnh mã nguồn hoặc cấu hình webhook trong phạm vi điều kiện bảo hành hoặc thỏa thuận nâng cấp bảo trì.

5.2. **Ranh giới cam kết:** LocalMate **tuyệt đối không cam kết và không bảo đảm** rằng mọi khiếu nại hoặc kháng nghị lên Google/Meta đều sẽ thành công 100%, do quyền quyết định cuối cùng thuộc về chính sách nội bộ và hội đồng xét duyệt độc lập của các tập đoàn công nghệ này.

---

Phụ lục này có hiệu lực đồng thời với Hợp đồng Dịch vụ Khung (MSA) và là căn cứ pháp lý vững chắc để giải quyết mọi khiếu nại liên quan đến hạ tầng kỹ thuật và nền tảng bên thứ ba giữa Hai Bên.

| ĐẠI DIỆN BÊN A (KHÁCH HÀNG) | ĐẠI DIỆN BÊN B (LOCALMATE) |
| :--- | :--- |
| *(Ký tên, ghi rõ họ tên và đóng dấu)* | *(Ký tên, ghi rõ họ tên và đóng dấu)* |
| <br><br><br> | <br><br><br> |
| **Họ và tên:** [NGUOI_DAI_DIEN_A] | **Họ và tên:** [REPRESENTATIVE] |
| **Chức vụ:** [CHUC_VU_A] | **Chức vụ:** [TITLE] |
| **Ngày ký:** ____/____/202[X] | **Ngày ký:** ____/____/202[X] |
