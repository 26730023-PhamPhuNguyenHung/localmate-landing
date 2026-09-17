# 📘 LOCALMATE BRAND VOICE & POSITIONING SSOT v2
> **Tài Liệu Nguồn Duy Nhất (Single Source of Truth) Về Định Vị Thương Hiệu, Giọng Điệu & Chuẩn Mực Truyền Thông**
> **Phiên bản:** 2.0 (Tháng 09/2026)  
> **Cơ sở định vị:** *"Localmate — Người đồng hành số tại địa phương. Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."*

---

## 📑 MỤC LỤC
1. [Báo Cáo Kiểm Toán Codebase: Các Điểm Lệch Chuẩn & Biến Tướng](#1-báo-cáo-kiểm-toán-codebase-các-điểm-lệch-chuẩn--biến-tướng)
2. [Tuyên Ngôn Định Vị Cốt Lõi (Core Positioning SSOT v2)](#2-tuyên-ngôn-định-vị-cốt-lõi-core-positioning-ssot-v2)
3. [Bốn Trụ Cột Giọng Điệu Thương Hiệu (The 4 Pillars of Voice)](#3-bốn-trụ-cột-giọng-điệu-thương-hiệu-the-4-pillars-of-voice)
4. [Bảng Tra Cứu 30 Cụm Từ Cấm Kỵ & Cụm Từ Chuẩn Mực Thay Thế](#4-bảng-tra-cứu-30-cụm-từ-cấm-kỵ--cụm-từ-chuẩn-mực-thay-thế)
5. [Hướng Dẫn Chuyển Đổi Giọng Văn Cho Từng Trang Chính (Transformation Playbook)](#5-hướng-dẫn-chuyển-đổi-giọng-văn-cho-từng-trang-chính-transformation-playbook)
6. [Quy Trình 5 Bước Nghiệm Thu Brand Voice Dành Cho Kỹ Sư & Content (QA Checklist)](#6-quy-trình-5-bước-nghiệm-thu-brand-voice-dành-cho-kỹ-sư--content-qa-checklist)

---

## 1. BÁO CÁO KIỂM TOÁN CODEBASE: CÁC ĐIỂM LỆCH CHUẨN & BIẾN TƯỚNG

Qua quá trình rà soát toàn bộ hệ thống mã nguồn (`src/pages`, `src/components`, `src/data`), kiểm toán viên ghi nhận dự án đã xây dựng được nền tảng kỹ thuật và giao diện trực quan tốt. Tuy nhiên, **tầng nội dung và định vị đang gặp 5 căn bệnh lệch chuẩn nghiêm trọng**, làm mờ nhạt bản sắc "Người đồng hành địa phương" và tạo khoảng cách xa lạ với đối tượng khách hàng mục tiêu (chủ xưởng, tiệm ăn, gara, cơ sở dịch vụ).

### 🔍 5 Biểu Hiện Biến Tướng Cụ Thể Trong Code:

#### ⚠️ 1. Biến tướng thành "AI Research Lab & SEO Agency" cao siêu
* **Vị trí vi phạm:** `src/pages/AeoServicePage.tsx`, `src/pages/GeoServicePage.tsx`, `src/pages/SeoAiServicePage.tsx`, `src/pages/SeoChatGptServicePage.tsx`, `src/data/servicesData.ts`.
* **Hiện tượng:** Nhồi nhét hàng loạt thuật ngữ trừu tượng mang tính hàn lâm của giới agency tiếp thị số:
  * *"Atomic Q&A"*, *"Answer Engine Optimization (AEO)"*, *"Generative Engine Optimization (GEO)"*, *"Vector Embeddings"*, *"Knowledge Graph Entity"*, *"Zero-Click Search"*, *"Baseline Scorecard"*, *"Thực thể số chuẩn mô hình ngôn ngữ lớn (LLM)"*.
* **Hệ quả:** Chủ một xưởng nhôm kính hay một quán phở đọc vào sẽ cảm thấy công nghệ quá phức tạp, đáng sợ, xa vời với thực tế buôn bán hàng ngày của họ.

#### ⚠️ 2. Ngôn từ đao to búa lớn, quảng cáo phóng đại (Hype & Over-promising)
* **Vị trí vi phạm:** `src/data/solutionPillarsData.ts`, `src/data/credentialDeckData.ts`, `src/pages/GeoWorkflowPage.tsx`, `src/pages/ProjectsPage.tsx`.
* **Hiện tượng:** Lạm dụng các từ ngữ mang tính kích động, hứa hẹn vượt tầm kiểm soát:
  * *"Chiếm lĩnh Top 3 Google Maps"*, *"Chiếm lĩnh toàn bộ câu trả lời của AI"*, *"Thời điểm vàng duy nhất"*, *"Đột phá thần tốc 4–7 ngày"*, *"Vũ khí bán hàng số"*, *"Tăng trưởng phi mã +250%"*.
* **Hệ quả:** Vi phạm cam kết "Nói thực - Làm thực". Thuật toán tìm kiếm và hành vi khách hàng luôn biến động; việc cam kết "chiếm lĩnh" tạo cảm giác như một đơn vị bán dịch vụ đa cấp hoặc quảng cáo lừa đảo.

#### ⚠️ 3. Giọng điệu hung hăng, công kích đối thủ thiếu chuyên nghiệp
* **Vị trí vi phạm:**
  * `src/pages/GeoServicePage.tsx` (dòng 618–621): *"Agency Lớn Báo Giá 'Cắt Cổ' 20–50Tr"*, *"Các agency lớn đang hét giá dịch vụ GEO hàng chục triệu..."*.
  * `src/components/services/AiSearchPricingTable.tsx` (dòng 238–247): Gọi đích danh đối thủ: *"Agency truyền thống / FastMarketing"*, *"Không chém giá hàng chục triệu"*.
  * `src/data/servicesData.ts` (dòng 469): *"bị agency giữ tài khoản làm con tin"*.
  * `src/pages/OperationalCareClusterPage.tsx` (dòng 544): *"Agency truyền thống / Thợ làm dạo"*.
* **Hệ quả:** Đánh mất tư thế điềm đạm, khiêm nhường và đàng hoàng của một thương hiệu uy tín. Hạ thấp người khác không làm tăng giá trị của mình; khách hàng địa phương đánh giá cao sự tử tế, chăm chỉ hơn là sự thù ghét đối thủ.

#### ⚠️ 4. Biến tướng thành B2B White-label Agency (Nhận gia công giấu mặt)
* **Vị trí vi phạm:** `src/data/operationsData.ts` (dòng 296–313):
  * *"Target: Marketing, Ads, Branding & SEO Agency. LocalMate hoạt động như đội kỹ thuật phía sau agency. Khách cuối không cần biết LocalMate tồn tại. Bạn bán dịch vụ, LocalMate lo thực thi."*
* **Hiện tượng:** Biến một mô hình đồng hành sát sườn với bà con địa phương thành xưởng outsource kỹ thuật giấu mặt cho các agency khác.
* **Hệ quả:** Mâu thuẫn 100% với định vị: LocalMate là người đến tận nơi, bắt tay chủ quán, hỗ trợ kỹ thuật trực tiếp 1-1.

#### ⚠️ 5. Phức tạp hóa danh mục và bảng tính (Over-engineering)
* **Vị trí vi phạm:** `src/pages/PricingPage.tsx`, `src/components/pricing/InteractiveCostEstimator.tsx`, `src/data/servicesCatalog.ts`.
* **Hiện tượng:** Bày biện một danh mục hơn 40 đầu dịch vụ xé lẻ, máy tính dự toán ROI kinh tế lượng học với các chỉ số như "Điểm hòa vốn đầu tư", "Tỷ lệ tăng trưởng kép", "Growth Engine MRR".
* **Hệ quả:** Chủ doanh nghiệp nhỏ chỉ muốn biết: *Làm cái này hết bao nhiêu tiền? Khi nào xong? Có ai hướng dẫn tui xài không?* Việc phức tạp hóa khiến họ ngần ngại liên hệ.

---

## 2. TUYÊN NGÔN ĐỊNH VỊ CỐT LÕI (CORE POSITIONING SSOT v2)

### 🌟 Định nghĩa Thương Hiệu (Brand Identity):
> **Localmate là người đồng hành số tại địa phương.**  
> Chúng tôi giúp các hộ kinh doanh, cửa hàng và xưởng dịch vụ đưa công việc lên mạng một cách bài bản, dễ hiểu và hiệu quả — từ việc có một trang giới thiệu rõ ràng, vị trí chuẩn xác trên bản đồ, cho đến việc khách hàng quanh vùng dễ dàng gọi điện và nhắn tin hỏi việc.  
> **Phương châm bất biến:** *Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành.*

### 🎯 4 Câu Hỏi Định Vị Trọng Tâm:

| Câu hỏi | Câu trả lời chuẩn mực của LocalMate |
| :--- | :--- |
| **Bạn là ai?** | Người đồng hành số, kỹ thuật viên hỗ trợ thực tế tại địa phương (không phải Agency tiếp thị hào nhoáng, không phải công ty bán phần mềm đóng gói). |
| **Bạn phục vụ ai?** | Chủ cơ sở kinh doanh thực chiến: xưởng thợ, cửa hàng ăn uống, phòng khám, gara ô tô, dịch vụ sửa chữa gia đình tại các quận/huyện. |
| **Bạn giải quyết việc gì?** | Giúp việc buôn bán suôn sẻ hơn: Khách tìm thấy số điện thoại, thấy bảng giá rõ ràng, tin tay nghề thật và bấm gọi hoặc nhắn Zalo đặt lịch nhanh chóng. |
| **Bạn khác biệt ở đâu?** | **Làm thực - Hỗ trợ thực - Tận nơi.** Xem trước bản mẫu 0đ, ưng ý mới thanh toán; bàn giao tài khoản chính chủ 100%; hỗ trợ kỹ thuật viên 1-1 lâu dài. |

### 🧭 Chỉ Số Kim Chỉ Nam (North Star Metric):
* **Số cuộc hội thoại mua hàng thực tế (Qualified Customer Conversations):**  
  Bao gồm: Cuộc gọi trực tiếp của khách hàng, tin nhắn Zalo hỏi giá/đặt hẹn, và khách bấm chỉ đường đến tận tiệm.  
  *Tuyệt đối không báo cáo số lượt reach ảo, lượt hiển thị hay lượt like vô nghĩa.*

---

## 3. BỐN TRỤ CỘT GIỌNG ĐIỆU THƯƠNG HIỆU (THE 4 PILLARS OF VOICE)

```text
       ┌────────────────────────────────────────────────────────┐
       │                 LOCALMATE BRAND VOICE                  │
       │  "Người đồng hành số chân thành, thiết thực tại địa phương"  │
       └────────────────────────────────────────────────────────┘
            │                     │                    │
 ┌──────────┴─────────┐ ┌─────────┴─────────┐ ┌────────┴─────────┐ ┌────────┴─────────┐
 │    1. GẦN GŨI      │ │    2. DỄ HIỂU     │ │ 3. CÓ CHUYÊN MÔN │ │ 4. KHÔNG NÓI QUÁ │
 │ (Local/Approachable│ │(Radically Simple) │ │(Quiet Competence)│ │   (Honest/Humble)│
 └────────────────────┘ └───────────────────┘ └───────────────────┘ └───────────────────┘
```

### 🤝 Trụ cột 1: Gần Gũi & Thấu Hiểu (Local & Approachable)
* **Ý nghĩa:** Trò chuyện như một người thợ lành nghề, một người bạn công nghệ ở cùng khu phố. Không đứng trên cao giảng dạy, không dùng thái độ kẻ cả của chuyên gia thành thị.
* **Cách thể hiện:**
  * Dùng từ ngữ đời thường: *quán xá, tiệm, thợ, chủ nhà, khách ghé tiệm, cuộc gọi, nhắn Zalo*.
  * Xưng hô nhã nhặn, tôn trọng: *Localmate đồng hành cùng anh/chị*, *hỗ trợ bạn*.
  * Hiểu được sự vất vả của người làm nghề: ban ngày bận tay chân, tối mịt mới rảnh xem điện thoại; không ép khách phải học cách dùng công cụ rườm rà.

### 💡 Trụ cột 2: Dễ Hiểu & Tinh Gọn (Radically Simple)
* **Ý nghĩa:** Bất kỳ ai, dù chưa từng biết công nghệ, đọc qua cũng hiểu ngay việc cần làm là gì, đem lại lợi ích gì cho quán của mình.
* **Cách thể hiện:**
  * **Nguyên tắc "Bà ngoại/Bác thợ hiểu được":** Nếu một câu văn chứa từ tiếng Anh viết tắt mà không giải thích được trong 5 từ tiếng Việt đơn giản, phải loại bỏ ngay.
  * Thay vì nói: *"Tối ưu hóa phễu chuyển đổi đa kênh (Omnichannel Conversion Funnel)"* ➔ Nói: *"Đưa khách từ bản đồ và mạng xã hội về xem bảng giá rồi bấm gọi cho bạn."*
  * Không dùng tiếng lóng Marketing (Marketing Slop), không viết câu ghép 4–5 vế rối rắm.

### 🛠️ Trụ cột 3: Có Chuyên Môn Nhưng Không Khoe Kỹ Thuật (Quiet Competence)
* **Ý nghĩa:** Chuyên môn được chứng minh bằng sản phẩm chạy mượt, trang web mở nhanh tức thì trên điện thoại ngoài trời nắng, tài khoản chuẩn chỉ, chứ không phải bằng danh sách từ vựng chuyên ngành.
* **Cách thể hiện:**
  * Chuyển hóa tính năng kỹ thuật thành giá trị công việc hoàn thành:
    * Thay vì khoe: *"Chúng tôi cấu hình Schema.org JSON-LD LocalBusiness đa tầng và tệp llms.txt"*
    * Hãy nói: *"Chúng tôi cài đặt mã thông tin chuẩn xác để khi khách hỏi Google hay ChatGPT về dịch vụ sửa máy lạnh gần đây, máy sẽ hiểu rõ địa chỉ và số hotline của bạn để giới thiệu."*
  * Điềm tĩnh, chắc chắn, tập trung vào chi tiết: đường truyền ổn định, số điện thoại bấm là gọi được ngay, địa chỉ dẫn đường không bị lạc.

### 🌱 Trụ cột 4: Nói Thực, Không Nói Quá, Không Công Kích (Honest, Humble & Zero-Hype)
* **Ý nghĩa:** Uy tín được gầy dựng từ sự trung thực tuyệt đối. Một lời nói thật có giá trị gấp trăm lần một lời hứa hẹn trên mây.
* **Cách thể hiện:**
  * **Không hứa ảo:** Không bao giờ cam kết "Top 1 vĩnh viễn", "Đột phá doanh số 300%", "Chiếm lĩnh tuyệt đối". Thay vào đó, cam kết về quy chuẩn làm việc: *Hoàn thiện đầy đủ thông tin, lọc sạch từ khóa không liên quan, hỗ trợ kỹ thuật trong 24 giờ*.
  * **Tôn trọng thị trường & đối thủ:** Tuyệt đối không dùng các từ ngữ miệt thị: *chém giá, cắt cổ, lừa đảo, gà mờ, thợ vườn*. Mỗi đơn vị có một cách làm; LocalMate tập trung làm thật tốt phần việc của mình với mức giá công khai, hợp lý.

---

## 4. BẢNG TRA CỨU 30 CỤM TỪ CẤM KỴ & CỤM TỪ CHUẨN MỰC THAY THẾ

Bảng đối chiếu dưới đây là quy chuẩn bắt buộc áp dụng cho toàn bộ Copywriter, Kỹ sư Frontend và Quản trị viên nội dung của LocalMate:

| STT | ❌ Cụm từ cấm kỵ (Hype / Jargon / Aggressive) | Lý do loại bỏ | ✅ Cụm từ thay thế chuẩn mực (SSOT v2) | Ứng dụng trong câu mẫu chuẩn |
| :---: | :--- | :--- | :--- | :--- |
| **1** | Chiếm lĩnh Top 3 / Thống trị vị trí số 0 | Quảng cáo phóng đại, không thể cam kết 100% thuật toán | **Xuất hiện rõ ràng trên Google Maps / Được ưu tiên đề xuất** | *"Giúp cửa hàng xuất hiện rõ ràng khi khách quanh vùng tìm kiếm dịch vụ."* |
| **2** | Báo giá "cắt cổ" / Chém giá hàng chục triệu | Công kích đối thủ, văn phong hằn học | **Chi phí minh bạch / Tiết kiệm ngân sách ban đầu** | *"Báo giá trọn gói rõ ràng từ đầu, phù hợp với ngân sách của cơ sở nhỏ."* |
| **3** | Đột phá doanh thu / Tăng trưởng phi mã | Hứa hẹn ảo, vượt ngoài phạm vi kỹ thuật số | **Có thêm nhiều cuộc gọi & tin nhắn hỏi giá thực tế** | *"Mục tiêu là giúp tiệm nhận thêm nhiều cuộc gọi và đơn đặt hẹn mỗi tuần."* |
| **4** | Tối ưu hóa phễu chuyển đổi đa kênh | Biệt ngữ tiếp thị trừu tượng, khó hiểu | **Quy trình đón khách và chốt lịch qua Zalo/Điện thoại** | *"Hướng dẫn khách từ lúc thấy tiệm đến khi bấm số gọi hoặc nhắn Zalo."* |
| **5** | Trí tuệ nhân tạo đột phá / Siêu AI 2026 | Nói quá công nghệ, tạo cảm giác xa vời | **Hỗ trợ công cụ tìm kiếm hiện đại (AI Search & Google)** | *"Giúp thông tin của tiệm dễ dàng được các trợ lý tìm kiếm hiện đại ghi nhận."* |
| **6** | Chiếm lĩnh toàn bộ câu trả lời của AI | Khoa trương, phản tác dụng | **Được các trợ lý tìm kiếm (Google, ChatGPT) nhắc tên chính xác** | *"Khi khách hỏi gợi ý quanh đây, thông tin tiệm sẽ được gợi ý đầy đủ, đúng địa chỉ."* |
| **7** | Vũ khí bán hàng số tối thượng | Đao to búa lớn, tính từ kích động | **Trang giới thiệu dịch vụ rõ ràng, tiện chốt đơn** | *"Một trang giới thiệu gọn gàng để bạn gửi ngay cho khách xem giá và hình ảnh."* |
| **8** | FastMarketing / Agency truyền thống | Chỉ trích hoặc gọi tên cụ thể đối thủ cạnh tranh | **Cách làm cũ / Các giải pháp chưa tối ưu** | *"Khác với cách gửi ảnh rời rạc qua tin nhắn dễ trôi, trang web giúp khách xem giá trong 30 giây."* |
| **9** | Bị agency giữ làm con tin / Khóa tài khoản | Ngôn từ tiêu cực, tạo cảm xúc sợ hãi độc hại | **Bạn đứng tên làm chủ tài khoản 100%** | *"Toàn bộ tài khoản bản đồ, tên miền và dữ liệu đều do bạn trực tiếp sở hữu."* |
| **10** | Dịch vụ White-label cho Agency | Biến tướng sai tệp khách hàng mục tiêu | **Đồng hành trực tiếp cùng hộ kinh doanh địa phương** | *"Localmate trực tiếp làm việc và hỗ trợ tận nơi cho từng chủ cơ sở."* |
| **11** | Giải pháp chuyển đổi số toàn diện | Từ ngữ sáo rỗng, khẩu hiệu hội thảo | **Gói đưa công việc lên mạng tinh gọn** | *"Giải quyết đúng các việc cần thiết trước: có vị trí bản đồ, có trang giới thiệu và số hotline."* |
| **12** | Atomic Q&A / Cấu trúc nội dung nguyên tử | Biệt ngữ hàn lâm nước ngoài | **Câu trả lời ngắn gọn, thẳng thắn vào thắc mắc của khách** | *"Viết sẵn các câu giải đáp về giá cả, thời gian và cam kết bảo hành để khách yên tâm."* |
| **13** | Entity Schema / Vector Embeddings / llms.txt | Khoe khoang kỹ thuật máy tính với người dùng | **Cài đặt thông tin chuẩn kỹ thuật cho máy đọc** | *"Kỹ thuật viên sẽ hoàn thiện đầy đủ mã kỹ thuật phía sau để công cụ tìm kiếm hiểu đúng tiệm của bạn."* |
| **14** | Click tặc tàn phá / Đối thủ chơi xấu | Hù dọa khách hàng, kích động nghi kỵ | **Lọc từ khóa tìm kiếm không đúng nhu cầu** | *"Cài đặt chặn các từ khóa bấm nhầm để không lãng phí tiền quảng cáo của bạn."* |
| **15** | Thần tốc 24h thay đổi vận mệnh | Phóng đại tính chất thời gian và hiệu quả | **Bàn giao bản xem thử trong 24 – 48 giờ** | *"Kỹ thuật viên hoàn thiện bản mẫu thực tế để bạn dùng thử sau 1 đến 2 ngày."* |
| **16** | Xây dựng thương hiệu số đẳng cấp quốc tế | Xa rời thực tế quán xá, tiệm dịch vụ | **Tạo sự tin cậy với bà con xung quanh khu vực** | *"Giúp khách hàng quanh vùng nhìn vào là thấy sự chỉn chu, uy tín của xưởng."* |
| **17** | Chiến lược Content Marketing đỉnh cao | Nói quá về việc viết bài bán hàng | **Bộ hình ảnh công trình thật và video tay nghề thực tế** | *"Chụp lại các công trình đã làm và quay video thợ chính giải thích cho khách dễ hiểu."* |
| **18** | Thợ làm dạo / Đơn vị kém chất lượng | Chê bai người làm nghề tự do | **Giải pháp tự làm thiếu tính đồng bộ** | *"Thay vì tự mày mò mất thời gian, Localmate hỗ trợ cài đặt bài bản ngay từ đầu."* |
| **19** | Báo cáo Impression, Reach, Engagement | Chỉ số vô giá trị với chủ tiệm | **Báo cáo số cuộc gọi, tin nhắn Zalo và đơn thực tế** | *"Tổng kết rõ ràng: Tuần qua có bao nhiêu người bấm gọi, bao nhiêu khách nhắn hỏi giá."* |
| **20** | Hệ thống CRM Automation tối tân | Thuật ngữ phần mềm văn phòng cồng kềnh | **Tự động báo tin nhắn khách mới về Zalo/Điện thoại** | *"Khi có khách đặt lịch trên web, điện thoại của bạn sẽ báo chuông ngay lập tức."* |
| **21** | Độc quyền công nghệ / Đi đầu Việt Nam | Tuyên bố vô căn cứ, dễ bị soi xét pháp lý | **Phương pháp thực tế, đã kiểm chứng qua nhiều tiệm** | *"Quy trình rõ ràng, đã áp dụng hiệu quả cho nhiều cơ sở dịch vụ tương tự."* |
| **22** | Tiêu diệt điểm nghẽn bán hàng | Ngôn từ mang tính bạo lực, hiếu chiến | **Tháo gỡ khó khăn khi tư vấn khách** | *"Giúp bạn không còn phải tốn công trả lời lặp đi lặp lại những câu hỏi về giá."* |
| **23** | Gói Scale Pro Tăng Tốc Đột Phá | Tên gói lai căng tiếng Anh, sáo rỗng | **Gói Đồng Hành Phát Triển (Định kỳ hàng tháng)** | *"Gói hỗ trợ định kỳ: Cập nhật hình ảnh mới, chăm sóc trang bản đồ và hỗ trợ kỹ thuật liên tục."* |
| **24** | Bí quyết đánh bại đối thủ 5km | Gây căng thẳng, định hướng tiêu cực | **Nổi bật nhờ chất lượng dịch vụ và đánh giá thật** | *"Khách hàng chọn bạn vì thấy hình ảnh làm việc tỉ mỉ và nhiều phản hồi hài lòng."* |
| **25** | Chỉ tiêu hòa vốn đầu tư ROI kinh tế lượng | Biệt ngữ tài chính gây rối trí | **Tính toán lượng khách cần có để bù chi phí làm web** | *"Chỉ cần có thêm 2–3 khách mới mỗi tháng là bạn đã thu hồi xong chi phí ban đầu."* |
| **26** | Chuyển đổi số hoặc là chết | Khẩu hiệu đe dọa, tạo áp lực tiêu cực | **Chuẩn bị sẵn sàng khi khách ngày càng tìm kiếm trên điện thoại** | *"Ngày nay bà con có thói quen tra cứu trên mạng trước khi ghé tiệm, có mặt sớm sẽ tiện hơn."* |
| **27** | Answer Engine Optimization (AEO) độc quyền | Biệt ngữ kỹ thuật không cần thiết | **Đưa thông tin vào các công cụ tìm kiếm bằng hỏi đáp** | *"Tối ưu câu trả lời chuẩn để người dùng hỏi trên mạng là thấy ngay thông tin của bạn."* |
| **28** | Quét sạch đối thủ cạnh tranh trên bản đồ | Nói quá và phi thực tế | **Tối ưu hồ sơ Google Maps đầy đủ và chuẩn xác** | *"Bổ sung đầy đủ số điện thoại, giờ mở cửa và hình ảnh tiệm để bản đồ gợi ý chính xác."* |
| **29** | Giữ bí kíp thuật toán nội bộ | Tạo vẻ huyền bí giả tạo | **Quy trình kỹ thuật công khai, minh bạch** | *"Mọi bước thực hiện từ tạo trang web đến cài đặt bản đồ chúng tôi đều giải thích rõ cho bạn."* |
| **30** | Cam kết hoàn hảo 100% không tì vết | Hứa suông bất khả thi | **Đồng hành xử lý lỗi kỹ thuật phát sinh trong suốt quá trình** | *"Nếu có bất kỳ trục trặc nào trong quá trình sử dụng, kỹ thuật viên sẽ hỗ trợ khắc phục ngay."* |

---

## 5. HƯỚNG DẪN CHUYỂN ĐỔI GIỌNG VĂN CHO TỪNG TRANG CHÍNH (TRANSFORMATION PLAYBOOK)

Dưới đây là kim chỉ nam chi tiết để tái cấu trúc câu chữ trên từng trang web:

### 🏠 5.1. Trang Chủ (Homepage — `/`)
* **Vấn đề hiện tại:** Đoạn so sánh thị trường (`MarketComparisonSection.tsx`) và một số tiêu đề còn mang nặng tính công kích agency lớn ("cắt cổ", "con tin"), bảng giá có quá nhiều phân cấp dịch vụ nhỏ lẻ.
* **Định hướng viết lại:**
  * **Hero Section:** Giữ vững thông điệp ấm áp, hướng việc làm thực:  
    * *"Người đồng hành số tại địa phương. Giúp cơ sở của bạn có mặt chuẩn xác trên bản đồ, sở hữu trang giới thiệu rõ ràng và đón thêm khách hàng mỗi ngày."*
    * Nhấn mạnh 3 cam kết thiết thực: **Xem trước bản mẫu 0đ** ➔ **Nghiệm thu hài lòng mới thanh toán** ➔ **Kỹ thuật viên hỗ trợ tận nơi**.
  * **Khung so sánh (Comparison Section):** Đổi từ *"So sánh với Agency lớn chém giá"* thành *"So sánh giữa Cách gửi tin truyền thống và Trang giới thiệu LocalMate"*:
    * *Cách cũ:* Gửi 15 bức ảnh công trình lộn xộn qua Zalo ➔ Khách ngại đọc, trôi tin, khó báo giá.
    * *Có Localmate:* Gửi đúng 1 đường link trang giới thiệu chuyên nghiệp ➔ Khách xem đầy đủ hình ảnh, bảng giá công khai, đánh giá của khách cũ và bấm gọi chỉ sau 30 giây.
  * **CTA cuối trang:** Thay vì *"Bắt đầu đột phá ngay"* ➔ *"Nói cho Localmate biết việc bạn đang cần giải quyết. Chúng tôi sẽ ghé thăm hoặc trao đổi cụ thể qua Zalo."*

### 🏢 5.2. Trang Giới Thiệu (AboutPage — `/gioi-thieu`)
* **Vấn đề hiện tại:** Có nhắc đến việc "Chúng tôi là phòng công nghệ thuê ngoài" mang dáng dấp công ty outsourcing IT.
* **Định hướng viết lại:**
  * Khẳng định tư cách: **Đội ngũ kỹ thuật viên thực chiến tại địa phương**.
  * Giải thích lý do LocalMate ra đời: Người làm nghề thực thụ (thợ may, thợ cơ khí, chủ gara, nha sĩ...) rất giỏi chuyên môn nhưng không rành công nghệ, dễ bị mua phải các dịch vụ đắt đỏ không dùng tới. LocalMate ra đời để làm đúng người bạn phụ trách mảng kỹ thuật số, giúp họ an tâm làm nghề.
  * 3 Giá trị cốt lõi:
    1. **Nói thật, làm thật:** Không cam kết viển vông, chỉ làm những gì đem lại cuộc gọi và khách thật.
    2. **Khách hàng làm chủ:** Bàn giao 100% tài khoản, không trói buộc bằng hợp đồng phức tạp.
    3. **Đồng hành dài lâu:** Có mặt khi khách cần hỗ trợ, không "đem con bỏ chợ" sau khi thu tiền.

### 💼 5.3. Trang Dịch Vụ & 5 Nhóm Giải Pháp (`/dich-vu`, `/giai-phap/*`)
* **Vấn đề hiện tại:** Dùng từ ngữ AEO, GEO, AI Overviews dày đặc, làm rối mắt người đọc.
* **Định hướng viết lại theo Ngôn ngữ Người Làm Nghề:**
  * **Trụ cột 1 (Nền tảng số):** Đổi từ *"Thiết lập hiện diện số chuẩn xác"* thành *"Có Trang Web Giới Thiệu & Bản Đồ Google Rõ Ràng"*.
  * **Trụ cột 2 (Được tìm thấy):** Đổi từ *"Tối ưu tìm kiếm cục bộ & Đề xuất AI"* thành *"Giúp Khách Hàng Quanh Vùng Tìm Thấy Tiệm Dễ Dàng (Trên Google & Bản đồ)"*.
  * **Trụ cột 3 (Thu hút khách):** Đổi từ *"Chiến dịch Google Ads nhắm mục tiêu chuẩn xác"* thành *"Tìm Kiếm Đúng Khách Đang Có Nhu Cầu Gấp Gần Tiệm"*.
  * **Trụ cột 4 (Vận hành):** Đổi từ *"Tự động hóa vận hành CRM"* thành *"Tự Động Nhận Thông Báo Khách Mới Về Zalo / Điện Thoại"*.
  * **Trụ cột 5 (Đồng hành):** Đổi từ *"Modular Digital Care SLAs"* thành *"Kỹ Thuật Viên Hỗ Trợ Định Kỳ & Bảo Trì Dài Lâu"*.

### 💰 5.4. Trang Bảng Giá (PricingPage — `/bang-gia`)
* **Vấn đề hiện tại:** Ma trận 40 dịch vụ quá vụn vặt, máy tính ROI tính toán quá đà khiến khách phân vân.
* **Định hướng viết lại tinh gọn (Mô hình 2 Gói SSOT):**
  * **Gói 1: `LocalMate Khởi Động` (Trọn gói làm một lần — 2.900.000đ):**
    * *Dành cho:* Cơ sở mới mở hoặc chưa từng làm trang web, chưa có bản đồ.
    * *Bàn giao:* Bản đồ Google chuẩn xác + Trang giới thiệu tối ưu cho điện thoại + Tên miền riêng + Cụm nút gọi/Zalo 1-chạm + Hướng dẫn tự quản lý.
    * *Cam kết:* Xem trước bản mẫu ưng ý mới thanh toán.
  * **Gói 2: `LocalMate Đồng Hành` (Gói duy trì định kỳ hàng tháng):**
    * *Dành cho:* Cơ sở muốn liên tục cập nhật hình ảnh công trình mới, chăm sóc đánh giá trên bản đồ và có kỹ thuật viên túc trực hỗ trợ bất kỳ lúc nào.
    * *Bàn giao:* Chụp/quay tư liệu công việc thực tế, đăng tải nội dung giải đáp cho khách, hỗ trợ cài đặt quảng cáo khu vực, báo cáo số cuộc gọi mỗi tháng.
  * Bảng tính chi phí: Đơn giản hóa thành công cụ xem nhanh: *Ngành nghề của bạn ➔ Gợi ý gói phù hợp ➔ Dự trù số lượng khách gọi cần để sinh lời.*

### 🛠️ 5.5. Trang Dự Án Thực Tế (ProjectsPage — `/du-an`)
* **Vấn đề hiện tại:** Lạm dụng từ "KẾT QUẢ ĐỘT PHÁ", "Thần tốc", văn phong như agency khoe case study đạt cúp quảng cáo.
* **Định hướng viết lại:**
  * Chuyển thành dạng **"Nhật ký công việc thực tế" (Proof of Work)**:
    * *Tiệm của ai?* (Anh Tuấn - Xưởng nhôm kính, Chị Lan - Nha khoa, Chú Ba - Gara ô tô).
    * *Khó khăn lúc đầu:* Khách gọi hỏi giá rồi đi mất, gửi ảnh qua Zalo lộn xộn, bản đồ chỉ sai đường vào hẻm cụt.
    * *LocalMate đã hỗ trợ làm gì:* Chỉnh lại ghim Google Maps ra đúng mặt tiền đường lớn, làm trang web gọn gàng có bảng giá nhôm Xingfa theo mét vuông, quay video anh Tuấn hướng dẫn cách phân biệt nhôm thật/giả.
    * *Kết quả đo được thực tế:* Số cuộc gọi từ người xây nhà xung quanh tăng lên, thợ gửi link báo giá qua Zalo khách xem hiểu ngay không cần trả giá lòng vòng.

### 🤖 5.6. Nhóm Trang Công Nghệ Tìm Kiếm Hiện Đại (AEO, GEO, AI Search)
* **Vấn đề hiện tại:** Mang nặng tính "dọa dẫm thị trường": nếu không làm GEO sẽ bị đào thải, agency hét giá cắt cổ...
* **Định hướng viết lại:**
  * Giải thích bản chất công nghệ bằng cách so sánh đời thực:  
    *"Trước đây khách hỏi người quen xem quanh đây tiệm nào sửa đồ uy tín. Ngày nay, khách mở điện thoại ra hỏi Google hoặc các ứng dụng trợ lý thông minh (ChatGPT, AI). Localmate giúp cơ sở của bạn có đầy đủ thông tin rõ ràng, minh bạch để khi được hỏi, các ứng dụng này sẽ giới thiệu đúng tên, đúng địa chỉ và đúng số điện thoại của bạn."*
  * Loại bỏ hoàn toàn các từ công kích đối thủ.

---

## 6. QUY TRÌNH 5 BƯỚNG NGHIỆM THU BRAND VOICE (QA CHECKLIST)

Trước khi bất kỳ Pull Request nào liên quan đến nội dung hoặc giao diện được phê duyệt, người thực thi phải tự kiểm tra qua 5 bước nghiêm ngặt sau:

```text
[BƯỚC 1: QUÉT TỪ CẤM]  ──>  Không chứa từ nào trong Bảng 30 Cụm Từ Cấm Kỵ.
         │
[BƯỚC 2: THỬ NGHIỆM BÁC THỢ] ──>  Đưa đoạn văn cho một người không rành công nghệ đọc, họ có hiểu ngay không?
         │
[BƯỚC 3: KIỂM SOÁT TÍNH TỪ] ──>  Gạch bỏ 100% các tính từ phóng đại (đột phá, thần tốc, chiếm lĩnh, đỉnh cao).
         │
[BƯỚC 4: RÀ SOÁT TÔN TRỌNG] ──>  Tuyệt đối không có câu từ nào hạ thấp, chê bai đối thủ hay các đơn vị khác.
         │
[BƯỚC 5: CAM KẾT ĐO LƯỜNG]  ──>  Mọi con số nêu ra đều phải là số liệu đo được bằng việc thật (cuộc gọi, tin nhắn Zalo, đơn hàng).
```

### ✅ Checklist Đánh Dấu Cụ Thể Trước Khi Bàn Giao:
- [ ] Đã kiểm tra file không còn chứa từ "cắt cổ", "chém giá", "con tin", "hét giá".
- [ ] Không còn nhắc tên bất kỳ đối thủ cạnh tranh nào trên thị trường.
- [ ] Toàn bộ thuật ngữ AEO/GEO/Entity/llms.txt đã được diễn giải sang ngôn ngữ bình dân, thiết thực.
- [ ] Bảng giá và dịch vụ thể hiện tinh gọn, minh bạch, có giá niêm yết rõ ràng.
- [ ] Thể hiện rõ triết lý cốt lõi: **"Người đồng hành số tại địa phương. Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."**

---
*Tài liệu này được phê duyệt làm chuẩn mực cao nhất cho toàn bộ hệ thống nội dung của LocalMate Việt Nam.*
