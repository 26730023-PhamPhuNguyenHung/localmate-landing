# BẢN ĐẶC TẢ KIẾN TRÚC THÔNG TIN HOMEPAGE LOCALMATE V2 (HOMEPAGE IA V2)
**Tài liệu Định hướng Cấu trúc, Dòng chảy Trải nghiệm & Phân loại Component Trang chủ**

> **Phiên bản:** 2.0.0 — Single Source of Truth (SSOT)  
> **Trạng thái:** Sẵn sàng triển khai (Ready for Implementation)  
> **Người thực hiện:** Subagent 2 — Homepage Information Architect  
> **Phạm vi tác động:** `src/pages/HomePage.tsx` và hệ thống Component Sections tương ứng.

---

## 1. TỔNG QUAN & BỐI CẢNH CHUYỂN DỊCH (EXECUTIVE SUMMARY)

### 1.1. Bối cảnh & Thực trạng Homepage Hiện Tại
Trang chủ hiện tại của Localmate (`src/pages/HomePage.tsx`) đang chứa tới **16 sections liên tiếp**. Mặc dù có đầy đủ thông tin kỹ thuật, cam kết pháp lý và bảng giá, trang chủ cũ đang mắc phải các điểm nghẽn nghiêm trọng về tâm lý khách hàng SME (chủ quán ăn, cơ sở dịch vụ, trung tâm, thợ, hộ kinh doanh):
- **Quá tải thông tin (Cognitive Overload):** Bảng giá chi tiết, so sánh thị trường, cam kết 5 năm, giới thiệu đội ngũ, hub kiến thức và FAQ cùng dồn lên một trang khiến người xem mỏi mệt trước khi hiểu được Localmate giúp gì cho họ.
- **Tiếp cận từ Sản phẩm thay vì Vấn đề (Solution-first vs Problem-first):** Liệt kê các gói dịch vụ (SEO, Google Maps, Web, Phần mềm) quá sớm khi khách hàng chưa nhận diện được bài toán mình đang vướng.
- **Thiếu câu chuyện đồng cảm thực tế:** Khách hàng SME sợ công nghệ phức tạp, sợ bị lừa, sợ mua phần mềm đắt tiền về không ai dùng. Trang chủ cũ chưa giải tỏa được nỗi sợ "phải làm một dự án to tốn kém".

### 1.2. Mục Tiêu Chuyển Dịch V2
Tái định hình toàn bộ dòng chảy Homepage thành một **câu chuyện bán hàng số chân thành, thực tế và thấu cảm**, tuân thủ nghiêm ngặt tinh thần:
1. **Hiểu trong 5 giây:** "Bạn lo việc kinh doanh. Chuyện công nghệ để Localmate cùng bạn xử lý."
2. **Dẫn dắt bằng 6 nỗi đau thật:** Không nói thuật ngữ cao siêu (AEO, GEO, Semantic SEO). Nói chuyện bằng cuộc gọi, tin nhắn, sổ sách lộn xộn, mất khách gần nhà.
3. **Bình dân hóa công nghệ:** Bắt đầu từ một việc rất nhỏ (micro-project). Thấy hiệu quả, ra khách hoặc bớt việc mới làm tiếp.
4. **Minh bạch và Chống AI-washing:** AI chỉ là công cụ khi cần; nếu một quy tắc đơn giản giải quyết xong thì dùng cách đơn giản nhất.
5. **Giao diện Light Mode tương phản cao:** Tinh gọn, không glassmorphism mờ đục, tải siêu tốc, dễ đọc trên di động.

---

## 2. AUDIT TOÀN BỘ FLOW HIỆN TẠI & BẢNG PHÂN LOẠI (KEEP / MOVE / REMOVE / MERGE)

Dưới đây là kết quả kiểm toán 16 khối nội dung đang có trên `src/pages/HomePage.tsx`:

| STT | Khối Nội Dung Cũ | Trạng Thái | Hành Động & Phân Bổ Mới | Lý Do Kiến Trúc |
| :---: | :--- | :---: | :--- | :--- |
| **0** | `SEOHead` | **KEEP** | Giữ nguyên ở đầu file, cập nhật lại Title/Meta Description theo định vị V2. | Cần thiết cho SEO kỹ thuật và OpenGraph. |
| **1** | `HeroSection` | **MERGE & REVISE** | Chuyển thành **Section 1: Hero V2**. Tinh gọn thông điệp 5 giây, video/visual minh họa kết quả thật, nút CTA kể vấn đề & nhận tư vấn nhẹ nhàng. | Hero cũ dài dòng, nhiều badge kỹ thuật gây xao nhãng. |
| **2** | `TrustBar` | **MERGE** | Hợp nhất 4 cam kết ngắn vào Footer của Hero V2 hoặc đưa vào Section 9 (Tại sao là Localmate?). | Đặt riêng một dải băng tách biệt làm gián đoạn mạch chuyển tiếp cảm xúc sang nỗi đau khách hàng. |
| **3** | `SolutionPillarsSection` (5 trụ cột) | **REFACTOR** | Tái cấu trúc thành **Section 3: "Localmate thực sự làm gì?"** với 4 nhóm giải pháp đời thường thay vì 5 trụ cột kỹ thuật. | 5 trụ cột cũ vẫn mang hơi hướng phân loại dịch vụ kỹ thuật. |
| **4** | `GrowthFlywheelSection` | **MOVE** | Chuyển sang trang `/gioi-thieu` hoặc trang chuyên sâu `/giai-phap`. | Khái niệm "bánh đà tăng trưởng" quá trừu tượng với chủ quán và tiểu thương. |
| **5** | `PhilosophySection` | **MERGE** | Tích hợp các luận điểm cam kết cốt lõi (Tài khoản của bạn, Báo giá cố định, Không phát sinh) vào **Section 9: "Tại sao là Localmate?"**. | Tránh trùng lặp nội dung giải thích triết lý. |
| **6** | `ProcessSection` (4 bước cũ) | **REVISE** | Tái cấu trúc thành **Section 6: "Cách Localmate làm việc"** (Kể vấn đề $\rightarrow$ Bóc tách $\rightarrow$ Bản đầu tiên $\rightarrow$ Dùng thật cải thiện). | Quy trình cũ còn nặng ngôn ngữ kỹ thuật agency. |
| **7** | `BeforeAfterSection` | **MERGE** | Tích hợp các ví dụ trực quan đối chiếu vào **Section 7: "Workflow minh họa theo ngành"** hoặc chuyển vào trang `/du-an`. | Trực quan hóa trước/sau phát huy tác dụng mạnh nhất khi gắn với ngành nghề cụ thể. |
| **8** | `DemoShowcaseSection` | **MOVE** | Đưa toàn bộ vào trang `/du-an` (`PortfolioPage.tsx`), chỉ để lại 1 teaser nhỏ ở Section 5. | Trình diễn quá nhiều mẫu trên trang chủ làm phân tán sự tập trung vào giá trị cốt lõi. |
| **9** | `PricingMatrixSection` | **MOVE** | Chuyển toàn bộ bảng giá ma trận chi tiết sang trang chuyên biệt `/bang-gia`. | Đưa bảng giá đầy đủ lên trang chủ khiến khách hàng so đo chi phí trước khi cảm nhận được giải pháp. |
| **10** | `MarketComparisonSection` | **MOVE** | Chuyển sang trang `/bang-gia` hoặc `/gioi-thieu`. | So sánh đối đầu thị trường tạo cảm giác phòng thủ, không cần thiết trên trang chủ tinh gọn. |
| **11** | `Warranty5YearSection` | **MERGE** | Đưa điểm nhấn "Đồng hành & Bảo hành kỹ thuật dài hạn" vào một thẻ của **Section 9**. | Một chính sách bảo hành không cần chiếm riêng một section đồ sộ trên trang chủ. |
| **12** | `LocalTeamSection` | **MERGE** | Đưa thông điệp "Kỹ thuật viên địa phương túc trực 1-1" vào **Section 9 & Section 10**. | Giá trị người thật việc thật được đưa vào như một bảo chứng tin cậy. |
| **13** | `FreeAuditSection` | **MERGE** | Tích hợp trực tiếp công cụ nhập tên quán/địa chỉ vào **Section 10: Final CTA**. | Giúp section kết thúc có hành động thực tế ngay lập tức, tránh bị phân mảnh 2 lần form audit. |
| **14** | `KnowledgeHubSection` | **MOVE** | Chuyển hẳn về trang `/kien-thuc` và đặt link tinh gọn tại Footer. | Trang chủ không nên đóng vai trò là kho bài viết tin tức gây loãng chuyển đổi. |
| **15** | `FAQSection` | **MOVE / ACCORDION** | Chuyển vào trang `/lien-he` và `/bang-gia`, hoặc giữ lại tối đa 4 câu hỏi thực chiến nhất ngay trước Final CTA. | Giảm độ dài trang chủ. |
| **16** | `FinalCTASection` | **REVISE** | Chuyển đổi thành **Section 10: "Không chắc mình cần giải pháp gì? Kể vấn đề & nhận tư vấn nhẹ nhàng"**. | Đổi giọng điệu từ "Chốt đơn / Báo giá ngay" sang "Lắng nghe & chẩn đoán bài toán". |

---

## 3. THIẾT KẾ CHI TIẾT DÒNG CHẢY 10 SECTION HOMEPAGE MỚI

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Section 1: HERO — Hiểu Localmate trong 5 giây                           │
│ "Bạn lo việc kinh doanh. Chuyện công nghệ để Localmate cùng bạn xử lý." │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Kích hoạt nhận diện bài toán)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 2: "Bạn đang vướng ở đâu?" (6 Pain Points thực tế)              │
│ Không tìm thấy tiệm | Web bỏ xó | Sổ sách rối | Tốn công | Sợ đắt | Cô độc
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Mở ra lời giải trực quan)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 3: "Localmate thực sự làm gì?" (4 Nhóm giải pháp dễ hiểu)       │
│ 1. Có mặt tốt hơn | 2. Gom & chăm khách | 3. Bớt việc | 4. Làm theo yêu cầu
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Xóa tan định kiến ép mua công nghệ)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 4: "Localmate không bắt đầu bằng công nghệ"                     │
│ Vấn đề thật ➔ Hiểu cách làm ➔ Chọn cách đơn giản ➔ Đo lường ➔ Cải thiện │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Giảm thiểu rủi ro tài chính)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 5: "Một việc có thể bắt đầu rất nhỏ"                            │
│ 1 Landing page | 1 Form đặt lịch | 1 Bot Zalo nhắc hẹn ➔ Hiệu quả mới làm│
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Minh bạch cách thức hợp tác)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 6: "Cách Localmate làm việc" (Quy trình 4 bước)                 │
│ Kể vấn đề ➔ Cùng bóc tách ➔ Bản chạy thử ➔ Dùng thật rồi cải thiện      │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Chứng minh bằng nghiệp vụ cụ thể)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 7: "Một vài cách Localmate có thể giúp" (Workflow 4 ngành)      │
│ Quán ăn ⬝ Trung tâm/Lớp học ⬝ Dịch vụ/Sửa chữa ⬝ Đội ngũ Bán hàng       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Tạo sự khác biệt chân thành)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 8: "AI nhưng không AI-washing"                                  │
│ Chỉ dùng khi giải quyết việc thật; Rule đơn giản tốt hơn thì dùng Rule  │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Chốt hạ niềm tin & lý do chọn)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 9: "Tại sao là Localmate?" (5 Điểm tựa bền vững)                │
│ Việc thật | Đơn giản | Làm nhỏ | Dữ liệu của bạn | Kỹ thuật viên đồng hành│
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Hành động tự nhiên, không áp lực)
┌────────────────────────────────────▼────────────────────────────────────┐
│ Section 10: "Không chắc mình cần giải pháp gì?" (Light Consultation CTA)│
│ Kể vấn đề đang gặp ➔ Nhận chẩn đoán & demo giải pháp sơ bộ 0đ           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### SECTION 1: HERO — HIỂU LOCALMATE TRONG 5 GIÂY

- **Tên Component:** `HeroSectionV2.tsx`
- **Tâm lý khách hàng:** Đang vội, lướt web trên điện thoại, không kiên nhẫn đọc văn mẫu quảng cáo. Họ cần biết ngay: *Trang này làm gì? Có liên quan đến mình không?*
- **Headline chính:**  
  > **"Bạn lo việc kinh doanh.**  
  > **Chuyện công nghệ để Localmate cùng bạn xử lý."**
- **Sub-headline:**  
  > *"Không cần biết kỹ thuật, không phải mua phần mềm cồng kềnh. Localmate giúp bạn đưa cửa hàng lên mạng, gom khách tự động và bớt việc thủ công — bắt đầu từ những việc nhỏ nhất."*
- **Primary CTA:** `Kể cho chúng tôi việc bạn đang vướng` (Scroll xuống Section 10 hoặc mở Form chẩn đoán).
- **Secondary CTA:** `Xem cách chúng tôi xử lý việc thật` (Scroll nhẹ xuống Section 2 & 3).
- **Visual minh họa:**
  - Mockup tương tác sống động, sáng sủa thể hiện 3 màn hình thực tế:
    1. *Khách tìm thấy quán trên Google Maps & bấm gọi.*
    2. *Tin nhắn Zalo tự động nhận lịch hẹn của khách.*
    3. *Bảng tóm tắt doanh số & khách hàng trong ngày cực kỳ đơn giản trên di động.*
  - Huy hiệu cam kết tinh gọn: `Demo xem trước 0đ` • `Báo giá cố định` • `Có người hỗ trợ trực tiếp`.

---

### SECTION 2: "BẠN ĐANG VƯỚNG Ở ĐÂU?" (6 PAIN POINTS THỰC TẾ)

- **Tên Component:** `PainPointsGridSection.tsx`
- **Tâm lý khách hàng:** Cảm thấy được thấu hiểu sâu sắc khi nhìn thấy đúng cảnh ngộ hàng ngày của mình thay vì bị chào bán một mớ gói tính năng xa lạ.
- **Tiêu đề khối:**
  - Eyebrow: `BẮT ĐẦU TỪ THỰC TẾ CỦA BẠN`
  - Headline: **"Bạn đang vướng ở đâu trong công việc hàng ngày?"**
  - Subheadline: *"Đa số chủ cơ sở không thiếu tay nghề, họ chỉ đang mất quá nhiều thời gian cho những việc luẩn quẩn trên môi trường số."*
- **Nội dung 6 Thẻ Nỗi Đau (Pain Point Cards):**

```
┌───────────────────────────────────┬───────────────────────────────────┐
│ 01. KHÁCH Ở GẦN TÌM KHÔNG THẤY   │ 02. CÓ WEB NHƯNG KHÔNG CÓ KHÁCH   │
│ Khách quanh khu vực tìm dịch vụ   │ Bỏ tiền làm website/fanpage nhưng  │
│ nhưng chỉ thấy quán đối thủ. Bản   │ cả tháng không có cuộc gọi nào.   │
│ đồ Maps của bạn thiếu thông tin.  │ Trang web như brochure bỏ quên.   │
├───────────────────────────────────┼───────────────────────────────────┤
│ 03. SỔ SÁCH & TIN NHẮN RỐI TUNG   │ 04. MẤT CÔNG LÀM VIỆC LẶP LẠI     │
│ Khách nhắn qua Zalo, gọi điện,    │ Trả lời đi trả lời lại một câu    │
│ ghi sổ tay lộn xộn. Hay sót đơn,  │ hỏi, gửi bảng giá thủ công, nhắn  │
│ quên lịch hẹn, nhầm thông tin.    │ tin nhắc hẹn từng người mỗi ngày. │
├───────────────────────────────────┼───────────────────────────────────┤
│ 05. SỢ BỊ VẼ CÔNG NGHỆ TỐN KÉM    │ 06. KHÔNG CÓ AI HỖ TRỢ KỸ THUẬT   │
│ Sợ thuê agency báo giá trên trời, │ Thuê nhân sự riêng thì quá đắt.   │
│ mua phần mềm đồ sộ về nhân viên   │ Thuê ngoài thì xong việc là mất   │
│ không ai chịu xài, bỏ xó lãng phí.│ hút, khi lỗi không biết gọi ai.   │
└───────────────────────────────────┴───────────────────────────────────┘
```
- **Micro-Interaction:** Click vào từng thẻ sẽ tự động highlight gợi ý cách giải quyết tương ứng tại Section 3 hoặc cuộn mượt tới nhóm giải pháp liên quan.

---

### SECTION 3: "LOCALMATE THỰC SỰ LÀM GÌ?" (4 NHÓM GIẢI PHÁP DỄ HIỂU)

- **Tên Component:** `CoreSolutionsSection.tsx`
- **Tâm lý khách hàng:** Cần một câu trả lời mạch lạc: *Localmate làm gì cho tôi, cụ thể là được cái gì?*
- **Tiêu đề khối:**
  - Eyebrow: `GIẢI PHÁP THỰC TẾ`
  - Headline: **"Localmate thực sự làm gì giúp bạn?"**
  - Subheadline: *"Chúng tôi gom toàn bộ các công cụ kỹ thuật phức tạp lại thành 4 nhóm việc cụ thể giúp bạn tăng khách và rảnh tay hơn."*
- **4 Nhóm Giải Pháp:**
  1. **Có mặt tốt hơn trên Internet:**
     - *Nội dung:* Tối ưu Google Maps để khách quanh vùng tìm là thấy. Xây dựng trang giới thiệu gọn gàng, rõ giá, chuẩn di động, có nút gọi ngay.
     - *Kết quả thực tế:* Tăng cuộc gọi hỏi dịch vụ và khách bấm chỉ đường đến tận nơi.
  2. **Tìm và chăm sóc khách hàng:**
     - *Nội dung:* Gom form yêu cầu tư vấn, gắn nút chat Zalo thông minh, hệ thống gửi thông báo tự động và xin review sau khi hoàn thành.
     - *Kết quả thực tế:* Không bỏ sót bất kỳ ai liên hệ; khách cũ nhớ quay lại.
  3. **Bớt việc thủ công cho bạn & nhân viên:**
     - *Nội dung:* Tự động gửi bảng báo giá mẫu, tự động gửi tin nhắn xác nhận lịch hẹn, số hóa bảng theo dõi công việc đơn giản trên Google Sheets/App.
     - *Kết quả thực tế:* Tiết kiệm 2-3 tiếng gõ bàn phím mỗi ngày, tập trung phục vụ khách.
  4. **Xây thứ riêng theo đúng cách bạn làm việc:**
     - *Nội dung:* Không bắt bạn thay đổi theo phần mềm có sẵn. Chúng tôi thiết kế công cụ mini (quản lý ca thợ, kho hàng nhỏ, bảng tính giá nhanh) bám sát thói quen thực tế của cơ sở.
     - *Kết quả thực tế:* Dễ dùng ngay ngày đầu tiên, nhân viên không bị phản kháng.

---

### SECTION 4: "LOCALMATE KHÔNG BẮT ĐẦU BẰNG CÔNG NGHỆ" (TRIẾT LÝ VẤN ĐỀ TRƯỚC)

- **Tên Component:** `ProblemFirstPhilosophySection.tsx`
- **Tâm lý khách hàng:** Lo sợ bị dụ cài đặt phần mềm khó dùng, bị ép mua giải pháp không vừa vặn với quy mô nhỏ.
- **Tiêu đề khối:**
  - Eyebrow: `CÁCH TIẾP CẬN KHÁC BIỆT`
  - Headline: **"Localmate không bao giờ bắt đầu bằng công nghệ"**
  - Subheadline: *"Phần lớn các dự án chuyển đổi số thất bại vì người ta đem phần mềm phức tạp về áp đặt lên một quy trình chưa rõ ràng."*
- **Sơ đồ tư duy 6 bước (Flow Diagram):**
  $$\text{1. Vấn đề kinh doanh thật} \longrightarrow \text{2. Hiểu cách bạn đang làm} \longrightarrow \text{3. Chọn cách đơn giản nhất} \longrightarrow \text{4. Triển khai nhanh} \longrightarrow \text{5. Đo lường kết quả} \longrightarrow \text{6. Cải thiện tiếp}$$
- **Nội dung làm rõ sự khác biệt:**
  - *Agency truyền thống:* Cố bán gói dịch vụ đắt tiền $\rightarrow$ Vẽ dự án hoành tráng $\rightarrow$ Bàn giao xong không ai xài được.
  - *Localmate:* Ngồi lại xem sổ sách/Zalo của bạn $\rightarrow$ Chỉ ra nút thắt $\rightarrow$ Dùng công cụ đơn giản nhất để thông mạch $\rightarrow$ Đo lường bằng số cuộc gọi và giờ công tiết kiệm được.

---

### SECTION 5: "MỘT VIỆC CÓ THỂ BẮT ĐẦU RẤT NHỎ" (MICRO-PROJECTS)

- **Tên Component:** `MicroProjectsSection.tsx`
- **Tâm lý khách hàng:** Cần hạ thấp rào cản chi phí và cam kết. Muốn thử nghiệm cái gì đó nhỏ, rẻ hoặc miễn phí trước để xem năng lực và thái độ làm việc.
- **Tiêu đề khối:**
  - Eyebrow: `BẮT ĐẦU AN TOÀN`
  - Headline: **"Một việc có thể bắt đầu rất nhỏ — Hiệu quả mới làm tiếp"**
  - Subheadline: *"Bạn không cần ký hợp đồng hàng chục triệu. Hãy để chúng tôi xử lý giúp bạn một việc đang gây đau đầu nhất trước."*
- **Ví dụ về 4 Micro-Projects khởi đầu:**
  1. **Một trang Landing Page đơn giản (1 ngày làm việc):** Giới thiệu duy nhất dịch vụ chủ lực + Bảng giá công khai + Nút bấm Zalo.
  2. **Một Form đặt lịch tự động hóa (Vài giờ làm việc):** Khách điền thông tin $\rightarrow$ Tự động báo về Zalo chủ quán $\rightarrow$ Không sót lịch.
  3. **Chuẩn hóa hồ sơ Google Maps (Xác minh & Tối ưu):** Đầy đủ ảnh thực tế, giờ mở cửa, số hotline để khách bấm gọi trực tiếp.
  4. **Bảng tính giá tự động gửi khách:** Nhập kích thước/yêu cầu là ra file báo giá đẹp mắt gửi khách trong 30 giây.
- **Cam kết đính kèm:** *Hữu ích thực sự và bạn thấy có giá trị thì mới làm tiếp các phần nâng cao. Không ràng buộc.*

---

### SECTION 6: "CÁCH LOCALMATE LÀM VIỆC" (QUY TRÌNH 4 BƯỚC)

- **Tên Component:** `HowWeWorkSection.tsx`
- **Tâm lý khách hàng:** Muốn biết cụ thể nếu tôi liên hệ thì chuyện gì sẽ xảy ra? Có bị quấy rầy không? Có mất nhiều thời gian của tôi không?
- **Tiêu đề khối:**
  - Eyebrow: `MINH BẠCH & GỌN GÀNG`
  - Headline: **"Cách Localmate cùng làm việc với bạn"**
  - Subheadline: *"Không họp hành rườm rà, không thuật ngữ khó hiểu. Chỉ có 4 bước thực tế:"*
- **4 Bước Làm Việc:**
  - **Bước 1: Bạn kể vấn đề (15–30 phút):** Nhắn Zalo hoặc uống ly cà phê. Bạn chỉ cần kể công việc đang làm, đang bận ở đâu, muốn thêm khách như thế nào.
  - **Bước 2: Cùng bạn bóc tách:** Chúng tôi phân tích rõ: cái gì cần làm trước, cái gì chưa cần, phương án nào tiết kiệm chi phí nhất cho bạn.
  - **Bước 3: Làm bản đầu tiên (vài ngày):** Dựng bản chạy thử thực tế (Prototype/Demo). Bạn được xem tận mắt, bấm thử, dùng thử trước khi trả tiền.
  - **Bước 4: Dùng thật rồi cải thiện:** Đưa vào phục vụ khách thật. Cùng bạn theo dõi, chỉnh sửa cho mượt mà và đồng hành hỗ trợ lâu dài.

---

### SECTION 7: "MỘT VÀI CÁCH LOCALMATE CÓ THỂ GIÚP" (WORKFLOW 4 NGÀNH NGHỀ)

- **Tên Component:** `IndustryWorkflowsSection.tsx`
- **Tâm lý khách hàng:** "Không biết quán ăn/trung tâm/xưởng của mình thì áp dụng cụ thể thế nào?"
- **Tiêu đề khối:**
  - Eyebrow: `TÌNH HUỐNG THỰC TẾ`
  - Headline: **"Một vài cách Localmate có thể giúp cơ sở của bạn"**
  - Subheadline: *"Bấm chọn mô hình kinh doanh gần với bạn nhất để xem quy trình vận hành sau khi tối ưu:"*
- **4 Tabs Ngành & Workflow Chi Tiết:**
  1. **Quán ăn / Nhà hàng / Tiệm đồ uống:**
     - *Hiện trạng cũ:* Khách đến đông lúng túng, quên món, khách gọi đặt bàn qua Zalo trôi tin nhắn.
     - *Sau khi làm với Localmate:* Google Maps chuẩn vị trí $\rightarrow$ Khách xem thực đơn & giá online $\rightarrow$ Form đặt bàn nhanh $\rightarrow$ Tin nhắn Zalo xác nhận ngay cho khách $\rightarrow$ Tự động xin đánh giá 5 sao sau bữa ăn.
  2. **Trung tâm đào tạo / Lớp năng khiếu / Kỹ năng:**
     - *Hiện trạng cũ:* Phụ huynh hỏi học phí nhiều nơi, quản lý lịch học thử bằng sổ tay, quên nhắc đóng học phí.
     - *Sau khi làm với Localmate:* Trang giới thiệu giáo viên & học phí minh bạch $\rightarrow$ Đăng ký học thử tự động chia theo ca $\rightarrow$ Nhắc lịch học qua Zalo phụ huynh $\rightarrow$ Dashboard theo dõi chuyên cần.
  3. **Dịch vụ kỹ thuật / Sửa chữa / Lắp đặt (Cửa nhôm, Điện lạnh, Xây dựng):**
     - *Hiện trạng cũ:* Khách sợ bị thợ báo giá ảo; thợ bận không kịp gửi hình mẫu công trình đã làm.
     - *Sau khi làm với Localmate:* Kho tư liệu mẫu công trình thực tế (Before-After) $\rightarrow$ Khách gửi ảnh chụp sự cố $\rightarrow$ Báo giá sơ bộ minh bạch $\rightarrow$ Lưu lịch bảo hành điện tử chống cãi vã.
  4. **Đội ngũ bán hàng / Doanh nghiệp dịch vụ B2B nhỏ:**
     - *Hiện trạng cũ:* Số điện thoại khách rải rác trong inbox, nhân viên sales quên gọi lại sau 24h, mất dấu khách.
     - *Sau khi làm với Localmate:* Gom toàn bộ lead về 1 trang quản lý $\rightarrow$ Tự động phân công người gọi $\rightarrow$ Nhắc việc nếu khách chưa phản hồi sau 2 ngày $\rightarrow$ Báo cáo tỷ lệ chốt rõ ràng.

---

### SECTION 8: "AI NHƯNG KHÔNG AI-WASHING"

- **Tên Component:** `HonestAISection.tsx`
- **Tâm lý khách hàng:** Đang bị ngập trong "bão tin tức AI" trên báo đài nhưng không hiểu AI áp dụng vào quán xá nhỏ như thế nào; sợ bị bán công nghệ viển vông.
- **Tiêu đề khối:**
  - Eyebrow: `MINH BẠCH & THỰC TẾ`
  - Headline: **"Ứng dụng AI thực chất — Tuyệt đối không 'AI-washing'"**
  - Subheadline: *"AI chỉ có giá trị khi nó giải quyết được một việc thật và mang lại hiệu quả đo đếm được. Chúng tôi không cố nhét AI vào để lấy giá đắt."*
- **Quy tắc 3 KHÔNG & 3 CÓ:**
  - ❌ **KHÔNG** dùng AI tạo nội dung rác vô hồn làm mất uy tín thương hiệu của bạn.
  - ❌ **KHÔNG** làm chatbot thông minh ảo nhưng trả lời sai lệch giá và dịch vụ của tiệm.
  - ❌ **KHÔNG** phức tạp hóa vấn đề nếu một công thức Excel hoặc 3 dòng tự động đơn giản giải quyết tốt hơn.
  - ✅ **CÓ** dùng AI tóm tắt yêu cầu của khách từ hình ảnh/tin nhắn để thợ nắm việc tức thì.
  - ✅ **CÓ** dùng AI gợi ý trả lời các câu hỏi lặp lại của khách hàng vào ban đêm có người thật kiểm duyệt.
  - ✅ **CÓ** dùng rule tự động đơn giản, bền bỉ, không tốn phí duy trì hàng tháng vô lý.

---

### SECTION 9: "TẠI SAO LÀ LOCALMATE?" (5 ĐIỂM TỰA BỀN VỮNG)

- **Tên Component:** `WhyLocalmateSection.tsx`
- **Tâm lý khách hàng:** So sánh Localmate với các agency lớn ở thành phố hoặc các thợ làm web tự do (freelancer).
- **Tiêu đề khối:**
  - Eyebrow: `ĐỒNG HÀNH BỀN VỮNG`
  - Headline: **"Tại sao nhiều cơ sở địa phương chọn Localmate?"**
  - Subheadline: *"Chúng tôi không định vị mình là nhà thầu phần mềm xa lạ. Chúng tôi là người đồng hành kỹ thuật tại địa phương của bạn."*
- **5 Lý Do Cốt Lõi:**
  1. **Bắt đầu từ việc thật:** Nói chuyện bằng doanh thu, cuộc gọi và giờ làm việc — không bán từ khóa kỹ thuật.
  2. **Cách đơn giản nhất:** Luôn ưu tiên giải pháp dễ dùng nhất để bạn và nhân viên dùng được ngay.
  3. **Làm nhỏ trước, an toàn tài chính:** Làm từng bước nhỏ có kết quả mới mở rộng; nghiệm thu chất lượng mới thanh toán.
  4. **Dữ liệu & Tài sản thuộc về bạn 100%:** Toàn bộ tài khoản Google, mã nguồn web, danh sách khách hàng đều đứng tên bạn. Không giữ làm con tin.
  5. **Có người cùng xử lý trực tiếp:** Đội ngũ kỹ thuật viên túc trực hỗ trợ 1-1, sẵn sàng có mặt tận nơi khi bạn cần.

---

### SECTION 10: "KHÔNG CHẮC MÌNH CẦN GIẢI PHÁP GÌ?" (LIGHT CONSULTATION CTA)

- **Tên Component:** `LightConsultationCTASection.tsx`
- **Tâm lý khách hàng:** Vẫn còn phân vân, sợ liên hệ là bị ép mua hàng, muốn một cách tiếp cận nhẹ nhàng, an toàn.
- **Tiêu đề khối:**
  - Eyebrow: `BẮT ĐẦU RẤT DỄ DÀNG`
  - Headline: **"Bạn không chắc cơ sở của mình cần giải pháp nào?"**
  - Subheadline: *"Đừng lo, bạn không cần phải tự nghĩ xem mình nên mua gói gì. Chỉ cần cho chúng tôi biết bạn đang làm nghề gì và chỗ nào đang làm bạn tốn thời gian nhất."*
- **Form Kể Vấn Đề Gọn Gàng (Lightweight Problem Form):**
  - Input 1: `Tên quán / Cơ sở / Ngành bạn đang làm` (vd: Gara Ô tô Thành Phát, Quán chay Sen Hồng).
  - Input 2: `Số điện thoại hoặc Zalo` để nhận phản hồi.
  - Input 3: `Việc bạn muốn xử lý nhất lúc này` (Nút chọn nhanh hoặc ô gõ tự do: *Muốn đông khách hơn / Web cũ cần sửa / Hay quên lịch hẹn / Cần bảng giá gửi khách*).
- **Hành động & Phản hồi:**
  - Kỹ thuật viên Localmate liên hệ trong **15 phút** (giờ làm việc).
  - Gửi bản gợi ý giải pháp sơ bộ hoặc demo xem trước **0đ** trong vòng 24-48 giờ.
  - Kèm nút bấm nhanh: `Chat Zalo trực tiếp ngay` (Hotline: 0834.422.439).

---

## 4. MA TRẬN ÁNH XẠ FILE & KIẾN TRÚC COMPONENT (MAPPING MATRIX)

Bảng chi tiết liên kết giữa các file mã nguồn hiện tại và các component mới:

| Section V2 | Tên Component Đề Xuất | File Mã Nguồn Tương Ứng | Tận Dụng Từ Component Cũ | Trạng Thái File |
| :---: | :--- | :--- | :--- | :---: |
| **Header** | `SEOHead` | `src/components/seo/SEOHead.tsx` | Giữ nguyên, tinh chỉnh meta | Đã có sẵn |
| **Sec 1** | `HeroSectionV2` | `src/components/sections/HeroSectionV2.tsx` | Tái cấu trúc từ `HeroSection.tsx` | Tạo mới/Refactor |
| **Sec 2** | `PainPointsGridSection` | `src/components/sections/PainPointsGridSection.tsx` | Tận dụng logic từ `PainPointsSection.tsx` | Tạo mới/Refactor |
| **Sec 3** | `CoreSolutionsSection` | `src/components/sections/CoreSolutionsSection.tsx` | Tinh giản từ `SolutionPillarsSection.tsx` | Tạo mới/Refactor |
| **Sec 4** | `ProblemFirstPhilosophySection` | `src/components/sections/ProblemFirstPhilosophySection.tsx` | Sáng tạo mới theo triết lý V2 | Tạo mới |
| **Sec 5** | `MicroProjectsSection` | `src/components/sections/MicroProjectsSection.tsx` | Trích xuất từ ý tưởng `StarterPackageSection.tsx` | Tạo mới |
| **Sec 6** | `HowWeWorkSection` | `src/components/sections/HowWeWorkSection.tsx` | Tinh gọn hóa từ `ProcessSection.tsx` | Tạo mới/Refactor |
| **Sec 7** | `IndustryWorkflowsSection` | `src/components/sections/IndustryWorkflowsSection.tsx` | Nâng cấp từ `IndustrySolutionSection.tsx` | Tạo mới/Refactor |
| **Sec 8** | `HonestAISection` | `src/components/sections/HonestAISection.tsx` | Sáng tạo mới (Anti AI-washing manifesto) | Tạo mới |
| **Sec 9** | `WhyLocalmateSection` | `src/components/sections/WhyLocalmateSection.tsx` | Tích hợp `PhilosophySection` + `Warranty5YearSection` + `TrustSection` | Tạo mới/Refactor |
| **Sec 10**| `LightConsultationCTASection` | `src/components/sections/LightConsultationCTASection.tsx` | Tinh gọn từ `FinalCTASection.tsx` + `FreeAuditSection.tsx` | Tạo mới/Refactor |

---

## 5. BỘ DỮ LIỆU ĐẦU VÀO ĐỀ XUẤT CHO HOMEPAGE V2 (`src/data/homeV2Content.ts`)

Để đảm bảo nguyên tắc **Data-Driven UI** và tách rời dữ liệu khỏi giao diện hiển thị, đề xuất tạo tệp `src/data/homeV2Content.ts` chứa dữ liệu có cấu trúc cho cả 10 sections:

```typescript
// Sơ đồ cấu trúc Data SSOT cho Homepage V2
export interface HomePainPoint {
  id: string;
  orderNumber: string;
  title: string;
  situation: string;
  consequence: string;
  relatedSolutionId: string;
}

export interface HomeSolutionGroup {
  id: string;
  order: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  realOutcome: string;
  iconName: string;
}

export interface MicroProjectItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  idealFor: string;
  deliverable: string;
}

export interface IndustryWorkflow {
  id: string;
  industryName: string;
  iconName: string;
  oldPain: string;
  optimizedFlow: {
    step: number;
    title: string;
    description: string;
  }[];
  practicalResult: string;
}

export interface CoreDifferentiator {
  id: string;
  title: string;
  description: string;
  proofBadge: string;
}
```

---

## 6. KHUNG CẤU TRÚC MÃ NGUỒN HOMEPAGE MỚI (`src/pages/HomePage.tsx`)

Dưới đây là khung code chuẩn bị cho `src/pages/HomePage.tsx` V2:

```tsx
import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';

// 10 Section Components chuẩn V2
import { HeroSectionV2 } from '../components/sections/HeroSectionV2';
import { PainPointsGridSection } from '../components/sections/PainPointsGridSection';
import { CoreSolutionsSection } from '../components/sections/CoreSolutionsSection';
import { ProblemFirstPhilosophySection } from '../components/sections/ProblemFirstPhilosophySection';
import { MicroProjectsSection } from '../components/sections/MicroProjectsSection';
import { HowWeWorkSection } from '../components/sections/HowWeWorkSection';
import { IndustryWorkflowsSection } from '../components/sections/IndustryWorkflowsSection';
import { HonestAISection } from '../components/sections/HonestAISection';
import { WhyLocalmateSection } from '../components/sections/WhyLocalmateSection';
import { LightConsultationCTASection } from '../components/sections/LightConsultationCTASection';

interface HomePageProps {
  onOpenConsultForm?: (serviceName?: string, businessInput?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultForm }) => {
  const handleOpenConsult = (topic?: string, inputDetail?: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(topic || 'Tư vấn giải pháp LocalMate V2', inputDetail);
    }
  };

  return (
    <div className="homepage-v2-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 0. SEO Meta V2 — Định vị người đồng hành số địa phương */}
      <SEOHead
        title="LocalMate | Bạn lo việc kinh doanh, chuyện công nghệ để Localmate xử lý"
        description="Đồng hành cùng doanh nghiệp địa phương: đưa tiệm lên Google Maps, gom khách Zalo tự động, bớt việc thủ công. Bắt đầu từ việc nhỏ nhất, demo xem trước 0đ, có kỹ thuật viên hỗ trợ trực tiếp."
        canonicalPath="/"
      />

      {/* Section 1: Hero V2 — Hiểu trong 5 giây */}
      <HeroSectionV2 onOpenConsult={handleOpenConsult} />

      {/* Section 2: "Bạn đang vướng ở đâu?" — 6 Nỗi đau thực tế */}
      <PainPointsGridSection onSelectPain={(painId) => handleOpenConsult(`Nỗi đau: ${painId}`)} />

      {/* Section 3: "Localmate thực sự làm gì?" — 4 Nhóm giải pháp dễ hiểu */}
      <CoreSolutionsSection onSelectSolution={(solId) => handleOpenConsult(`Giải pháp: ${solId}`)} />

      {/* Section 4: "Localmate không bắt đầu bằng công nghệ" — Triết lý Vấn đề trước */}
      <ProblemFirstPhilosophySection />

      {/* Section 5: "Một việc có thể bắt đầu rất nhỏ" — Micro Projects */}
      <MicroProjectsSection onSelectProject={(projId) => handleOpenConsult(`Bắt đầu nhỏ: ${projId}`)} />

      {/* Section 6: "Cách Localmate làm việc" — 4 Bước minh bạch */}
      <HowWeWorkSection onStartStep1={() => handleOpenConsult('Bắt đầu kể vấn đề')} />

      {/* Section 7: "Một vài cách Localmate có thể giúp" — Workflow 4 Ngành nghề */}
      <IndustryWorkflowsSection onConsultIndustry={(indId) => handleOpenConsult(`Mô hình: ${indId}`)} />

      {/* Section 8: "AI nhưng không AI-washing" — Cam kết thực chất */}
      <HonestAISection />

      {/* Section 9: "Tại sao là Localmate?" — 5 Điểm tựa bền vững */}
      <WhyLocalmateSection onOpenConsult={handleOpenConsult} />

      {/* Section 10: "Không chắc mình cần giải pháp gì?" — Light Consultation CTA */}
      <LightConsultationCTASection onDirectSubmit={handleOpenConsult} />
    </div>
  );
};

export default HomePage;
```

---

## 7. QUY TẮC THIẾT KẾ UI/UX & DO'S AND DON'TS (DESIGN GUARDRAILS)

Để đảm bảo chuẩn mực chất lượng toàn hệ thống theo quy định:

### 7.1. Bắt Buộc (Do's)
- **100% Light Mode:** Nền sáng (`#ffffff`, `#F8FAFC`, `#F0FDF4`), thẻ Card (`#ffffff` viền mỏng `#E2E8F0` hoặc `#DCFCE7`).
- **Tương phản chuẩn:** Chữ tiêu đề tối (`#0F172A`), chữ nội dung (`#334155`), chữ chú thích (`#64748B`). Đảm bảo đạt chuẩn WCAG AA/AAA.
- **Scrollbar & Layout Stability:** Luôn dùng `scrollbar-gutter: stable` và `text-wrap: pretty` cho tiêu đề để chống rớt chữ đơn lẻ.
- **Mobile First:** Touch target trên nút bấm và thẻ tối thiểu $\ge 44\text{px}$.
- **Tự động liên kết:** Mọi nút bấm và CTA đều phải dẫn trực tiếp đến form tư vấn với ngữ cảnh tương ứng hoặc cuộn mượt đến section đích.

### 7.2. Tuyệt Đối Cấm (Don'ts)
- ❌ **TUYỆT ĐỐI KHÔNG DÙNG GLASSMORPHISM:** Không dùng `backdrop-filter: blur()`, không dùng nền bán trong suốt mờ mờ ảo ảo.
- ❌ **CẤM DÙNG TỪ NGỮ TIẾP THỊ HOA MỸ (Marketing Slop):** Không dùng các từ như "chuyển đổi số toàn diện đẳng cấp thế giới", "đột phá doanh thu 10x", "hệ sinh thái tối thượng".
- ❌ **CẤM NHỒI NHÉT BẢNG GIÁ PHỨC TẠP:** Không đưa bảng giá 20 hạng mục lên trang chủ; chỉ giới thiệu triết lý "bắt đầu rất nhỏ" và dẫn link sang `/bang-gia`.
- ❌ **CẤM DÙNG ICON/HÌNH ẢNH MINH HỌA GIẢ:** Không dùng hình robot 3D trừu tượng kỳ quặc; ưu tiên ảnh chụp màn hình Zalo, Google Maps thật, giao diện thực tế.

---

## 8. KẾ HOẠCH BÀN GIAO & CÁC BƯỚC TIẾP THEO

Tài liệu này đã hoàn tất đầy đủ 4 hạng mục được giao:
1. ✅ **Audit toàn bộ flow `src/pages/HomePage.tsx` hiện tại** (đánh giá 16 khối nội dung).
2. ✅ **Thiết kế lại luồng 10 section mới** theo đúng 10 tiêu chuẩn đặc tả.
3. ✅ **Lập bảng phân loại KEEP/MOVE/REMOVE/MERGE** rõ ràng, có căn cứ kiến trúc.
4. ✅ **Chuẩn bị khung cấu trúc (Code Skeleton) và Schema dữ liệu** sẵn sàng cho các Subagent triển khai code tiếp theo.

Tài liệu được lưu trữ cố định tại:  
`D:\03-Startups-Products\localmate\new\docs\homepage-ia-v2.md`
