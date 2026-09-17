# 🛡️ BÁO CÁO KIỂM TOÁN CHẤT LƯỢNG NỘI DUNG & HÀNG RÀO KIỂM DUYỆT ĐỎ
## (RED TEAM QUALITY GATE REPORT & AUDIT SSOT)

> **Cơ quan kiểm duyệt:** Subagent 10 — Quality Gate & Red Team Auditor  
> **Dự án:** LocalMate CMS & Content Ecosystem  
> **Thời điểm thẩm định:** 17/09/2026  
> **Nguyên tắc tối thượng:** *"Bảo vệ độc giả khỏi AI Slop, nội dung đại trà vô thưởng vô phạt và những lời hứa hẹn viển vông. Mọi bài viết xuất bản phải đem lại giá trị thực tế đo lường được cho người làm kinh doanh địa phương."*  
> **Trạng thái 30 bài Draft hiện tại:** ❌ **100% REJECTED — REWRITE REQUIRED (YÊU CẦU VIẾT LẠI TOÀN BỘ 30/30 BÀI)**

---

## MỤC LỤC TỔNG THỂ
1. [Tuyên Ngôn Red Team & Nguyên Tắc Knock-out](#1-tuyên-ngôn-red-team--nguyên-tắc-knock-out)
2. [Bộ 14 Tiêu Chí Đỏ Bị Từ Chối Ngay Lập Tức (Red Team Rejection Criteria)](#2-bộ-14-tiêu-chí-đỏ-bị-từ-chối-ngay-lập-tức-red-team-rejection-criteria)
3. [Báo Cáo Kiểm Toán Sơ Bộ Hiện Trạng 30 Bài Draft](#3-báo-cáo-kiểm-toán-sơ-bộ-hiện-trạng-30-bài-draft)
4. [Bảng Đánh Giá Chi Tiết & Quyết Định Bác Bỏ 30/30 Bài Draft](#4-bảng-đánh-giá-chi-tiết--quyết-định-bác-bỏ-3030-bài-draft)
5. [Rubric Chấm Điểm Nghiệm Thu Chất Lượng (Thang 100 Điểm)](#5-rubric-chấm-điểm-nghiệm-thu-chất-lượng-thang-100-điểm)
6. [Phiếu Kiểm Duyệt Nghiệm Thu Chuẩn Hóa (Quality Gate Inspection Sheet)](#6-phiếu-kiểm-duyệt-nghiệm-thu-chuẩn-hóa-quality-gate-inspection-sheet)
7. [Kế Hoạch & Chỉ Đạo Cho Bước 4 (Content Rewriting Directive)](#7-kế-hoạch--chỉ-đạo-cho-bước-4-content-rewriting-directive)

---

## 1. TUYÊN NGÔN RED TEAM & NGUYÊN TẮC KNOCK-OUT

Trong kỷ nguyên bùng nổ của các mô hình ngôn ngữ lớn (LLM), mạng internet đang bị tràn ngập bởi **"AI Slop"** — thứ rác thông tin được sinh ra hàng loạt chỉ bằng vài câu lệnh prompt rẻ tiền: dài dòng, bóng bẩy, sáo rỗng, thiếu trải nghiệm thực tế và hoàn toàn vô giá trị đối với người đọc.

Đối với **LocalMate**, tệp độc giả và khách hàng cốt lõi là những người làm nghề chân chính: **chủ xưởng nhôm kính, thợ sửa điện lạnh, chủ tiệm ăn, chủ gara ô tô, quản lý phòng khám địa phương**. Thời gian của họ là vàng bạc; họ thức khuya dậy sớm, đôi bàn tay lấm lem dầu mỡ hoặc bận rộn phục vụ khách hàng. Khi họ vào trang web LocalMate để tìm kiếm giải pháp, họ cần:
- **Câu trả lời trực diện** trong 5 giây đầu tiên.
- **Con số thật, chi phí thật, công thức tính thật** không giấu giếm.
- **Kịch bản từng bước có thể làm được ngay**, kể cả người không rành công nghệ.

### 🚫 Nguyên Tắc "Knock-out" Bất Biến (Zero-Tolerance Rule):
- Bất kỳ bài viết nào vi phạm **dù chỉ 01 trong 14 Tiêu Chí Đỏ** sẽ bị **BÁC BỎ NGAY LẬP TỨC (REJECT ON SIGHT)**, không cần xem xét tổng điểm hay tính điểm trung bình.
- Không có ngoại lệ cho "bài viết nháp", "bản demo" hay "viết tạm để lấy link SEO". Uy tín của LocalMate được bảo chứng trên từng dòng chữ xuất bản công khai.

---

## 2. BỘ 14 TIÊU CHÍ ĐỎ BỊ TỪ CHỐI NGAY LẬP TỨC (RED TEAM REJECTION CRITERIA)

Dưới đây là 14 vi phạm nghiêm trọng sẽ khiến bài viết bị trả về ngay lập tức:

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│                   HÀNG RÀO KIỂM DUYỆT ĐỎ — 14 LỖI LOẠI NGAY                      │
├─────────────────┬─────────────────┬───────────────────┬──────────────────────────┤
│ C1. Generic     │ C2. Filler/Nhồi │ C3. Số liệu bịa   │ C4. Vague Advice         │
│ (Đại trà)       │ (Độn số từ)     │ (Fake Data)       │ (Không công thức tính)   │
├─────────────────┼─────────────────┼───────────────────┼──────────────────────────┤
│ C5. Fake Proof  │ C6. Weak Intro  │ C7. Salesy CTA    │ C8. AI Phrasing          │
│ (Review ảo)     │ (Vòng vo)       │ (Ép mua/đe dọa)   │ (Slop văn mẫu)           │
├─────────────────┼─────────────────┼───────────────────┼──────────────────────────┤
│ C9. Tech Jargon │ C10. Toxic Bashing│ C11. No Action  │ C12. Fake Authority      │
│ (Khoe thuật ngữ)│ (Chửi đối thủ)  │ (Lý thuyết suông) │ (Tự xưng số 1)           │
├─────────────────┴─────────────────┴───────────────────┴──────────────────────────┤
│ C13. Passive Bloat (Câu văn dịch thuật rườm rà)                                  │
│ C14. Domain Disconnect (Ảo tưởng phi thực tế với tiệm địa phương)                 │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết 14 Tiêu Chí Đỏ:

#### 🛑 C1: Generic / Brand-Agnostic (Nội dung đại trà, gắn logo nào vào cũng được)
- **Bản chất lỗi:** Bài viết mang tính khái quát vô thưởng vô phạt, thay tên LocalMate bằng bất kỳ công ty agency nào khác từ Mỹ, Ấn Độ hay Hà Nội vẫn đọc được y nguyên; thiếu hoàn toàn hơi thở đặc thù của tiệm địa phương Việt Nam.
- **Red Flags:** "Website là cầu nối giữa doanh nghiệp và khách hàng", "Google Maps giúp tiếp cận người dùng trên internet".
- **Chuẩn LocalMate:** Phải đề cập trực diện bối cảnh cụ thể: ví dụ tiệm cơ khí tại Bình Chánh, quán bún bò tại Quận 3, thợ sửa ống nước lưu động tại Đà Nẵng; nêu rõ thói quen gọi điện thoại / nhắn Zalo của người Việt.

#### 🛑 C2: Filler / Fluff Word Padding (Độn chữ câu giờ, nhồi từ sáo rỗng)
- **Bản chất lỗi:** Kéo dài dung lượng bài viết bằng những đoạn văn lặp đi lặp lại một ý, dùng nhiều phó từ, tính từ sáo rỗng nhằm đạt đủ 1.000 – 2.000 từ một cách giả tạo.
- **Red Flags:** "Như chúng ta đã biết ở phần trên...", "Tóm lại, điều này vô cùng quan trọng và cần thiết, đóng vai trò then chốt không thể thiếu...".
- **Chuẩn LocalMate:** Viết cô đọng. Câu nào bỏ đi mà đoạn văn vẫn giữ nguyên nghĩa thì BẮT BUỘC PHẢI BỎ. Ưu tiên bảng so sánh, danh sách gạch đầu dòng ngắn và sơ đồ khối.

#### 🛑 C3: Unsupported Claim & Fabricated Metrics (Tuyên bố vô căn cứ, số liệu bịa đặt)
- **Bản chất lỗi:** Bịa ra các tỷ lệ phần trăm hoặc con số thống kê giật gân mà không có nguồn kiểm chứng độc lập hoặc cơ sở kỹ thuật minh bạch.
- **Red Flags:** "98.5% khách hàng hài lòng", "tăng trưởng 300% doanh thu chỉ sau 2 tuần", "hơn 500+ doanh nghiệp đã tin dùng" (khi hệ thống chưa có dữ liệu kiểm toán độc lập).
- **Chuẩn LocalMate:** Tuyệt đối tuân thủ `docs/trust-claims-audit.md`. Chỉ nêu số liệu có nguồn cụ thể (ví dụ: "Theo tài liệu chính thức từ Google Business Profile Hỗ trợ...", hoặc dữ liệu kỹ thuật thực tế: "Thời gian tải trang đo trên công cụ PageSpeed Insights đạt 0.8s").

#### 🛑 C4: Vague Advice Without Decision Formula (Lời khuyên mơ hồ, thiếu công thức ra quyết định)
- **Bản chất lỗi:** Đưa ra lời khuyên kiểu "nước đôi", sáo rỗng như "tùy vào ngân sách của bạn", "cân nhắc kỹ lưỡng trước khi chọn", "lựa chọn đơn vị uy tín" mà không chỉ cho độc giả CÁCH TÍNH hay TIÊU CHÍ CỤ THỂ để tự quyết định.
- **Red Flags:** "Bạn nên chi ngân sách hợp lý cho quảng cáo", "Hãy chọn loại web phù hợp với mô hình".
- **Chuẩn LocalMate:** Cung cấp công thức hoặc ngưỡng cụ thể. Ví dụ: *Ngân sách quảng cáo Google Ads tối thiểu cho tiệm địa phương = Giá click trung bình ngành (5.000đ) x 20 click/ngày = 100.000đ/ngày. Nếu lãi gộp trên mỗi đơn sửa chữa dưới 200.000đ, không nên chạy từ khóa chung chung.*

#### 🛑 C5: Fake Case Study & Fabricated Testimonials (Bịa ca khách hàng & Lời chứng thực giả)
- **Bản chất lỗi:** Tự sáng tác tên người, hình ảnh avatar trên mạng và lời khen ngợi ảo như "Bác sĩ Tâm ở Nha Khoa X khen LocalMate tuyệt vời".
- **Red Flags:** Dẫn lời phát biểu của khách hàng nhưng không có danh tính thật, cơ sở thật hoặc mượn danh nghĩa chưa được ký biên bản đồng thuận.
- **Chuẩn LocalMate:** Chuyển 100% sang định dạng **"Kịch bản giả định thực tế theo ngành (Realistic Practice Scenario)"** hoặc mô tả workflow kỹ thuật rõ ràng: nêu rõ bài toán, các bước giải quyết và sản phẩm bàn giao thực tế.

#### 🛑 C6: Weak Opening & Buried Answer (Mở bài vòng vo, giấu câu trả lời)
- **Bản chất lỗi:** Bắt đầu bằng 3-4 đoạn văn dạo đầu về lịch sử phát triển, triết lý kinh doanh trước khi đi vào nội dung; bắt người đọc phải cuộn chuột mỏi tay mới tìm thấy định nghĩa.
- **Red Flags:** "Từ xa xưa đến nay...", "Trong bối cảnh nền kinh tế thị trường đang không ngừng biến chuyển...".
- **Chuẩn LocalMate:** **Quy tắc 5 dòng đầu (Quick Answer Box)**: Ngay dưới thẻ H1, bài viết phải có một trích dẫn (Blockquote) hoặc tóm tắt ngắn trả lời TRỰC DIỆN câu hỏi của từ khóa trong vòng 2-3 câu ngắn.

#### 🛑 C7: Aggressive / Spammy / Salesy CTA (Kêu gọi hành động thô bạo, chèn ép bán hàng)
- **Bản chất lỗi:** Cứ sau mỗi đoạn văn lại nhét nút "Mua ngay", "Gọi ngay kẻo muộn", đe dọa khách hàng bằng giọng điệu FOMO độc hại ("Không làm ngay đối thủ sẽ đè bẹp bạn").
- **Red Flags:** "Đăng ký ngay hôm nay để nhận ưu đãi duy nhất trong đời!", "Liên hệ ngay để tiêu diệt đối thủ!".
- **Chuẩn LocalMate:** CTA theo ngữ cảnh (Contextual CTA), nhã nhặn, tôn trọng và mang tính hỗ trợ: "Nếu bạn bận việc tay chân chưa tiện tự cài đặt, có thể gửi thông tin cơ sở cho LocalMate hỗ trợ xem thử bản mẫu miễn phí qua Zalo 0834.422.439."

#### 🛑 C8: Obvious AI Phrasing & Machine Slop (Văn phong AI khuôn mẫu, máy móc)
- **Bản chất lỗi:** Giữ nguyên các cấu trúc câu văn đặc trưng của ChatGPT / mô hình dịch máy tiếng Anh sang tiếng Việt.
- **Red Flags:**
  - *"Trong thời đại kỷ nguyên số phát triển như vũ bão hiện nay..."*
  - *"Không thể phủ nhận rằng..."*
  - *"Đóng vai trò như một cầu nối quan trọng..."*
  - *"Hãy cùng chúng tôi lặn sâu vào bài viết này..."*
  - *"Đây là một bức tranh toàn cảnh / một con dao hai lưỡi..."*
  - *"Tóm lại, việc [X] không chỉ là [A] mà còn là [B]..."*
- **Chuẩn LocalMate:** Dùng văn phong tự nhiên của người Việt, ngôn ngữ mộc mạc, gãy gọn, xưng hô tôn trọng, đời thường.

#### 🛑 C9: Academic Jargon & Tech Over-Engineering (Khoe khoang thuật ngữ kỹ thuật, hàn lâm)
- **Bản chất lỗi:** Nhồi nhét hàng tá từ ngữ chuyên ngành công nghệ / tiếp thị trừu tượng để ra vẻ nguy hiểm, khiến người đọc bình dân bị choáng ngợp và bối rối.
- **Red Flags:** "Atomic Q&A", "Vector Embeddings", "Knowledge Graph Entity", "Omnichannel Conversion Funnel", "Zero-Click Search Architecture".
- **Chuẩn LocalMate:** Quy tắc "Bác thợ / Người nhà hiểu được": Mọi thuật ngữ kỹ thuật đều phải được chuyển hóa thành hành động thực tế: ví dụ thay vì nói "Cấu hình Schema JSON-LD LocalBusiness", hãy nói "Cài đặt mã kỹ thuật chuẩn để khi khách tìm kiếm, Google hiện đúng địa chỉ và số hotline của tiệm".

#### 🛑 C10: Competitor Bashing & Toxic Framing (Hạ thấp đối thủ, giọng điệu hằn học)
- **Bản chất lỗi:** Dùng từ ngữ công kích, miệt thị các đơn vị khác trên thị trường nhằm tự nâng cao giá trị bản thân.
- **Red Flags:** "Agency cắt cổ", "chém giá hàng chục triệu", "thợ vườn lừa đảo", "agency giữ tài khoản làm con tin".
- **Chuẩn LocalMate:** Giữ tư thế điềm đạm, đàng hoàng của người làm nghề chân chính. Nói về sự khác biệt bằng giải pháp minh bạch của mình (ví dụ: "Bàn giao tài khoản chính chủ 100%, khách hàng tự nắm quyền quản trị tên miền và bản đồ").

#### 🛑 C11: Zero Actionable Steps & Pure Theory (Lý thuyết suông, thiếu kịch bản thực thi)
- **Bản chất lỗi:** Bài viết chỉ nói "CẦN PHẢI LÀM GÌ" nhưng không hề chỉ ra "LÀM NHƯ THẾ NÀO TỪNG BƯỚC".
- **Red Flags:** "Bạn cần tối ưu hình ảnh cho đẹp", "Bạn cần chăm sóc khách hàng chu đáo".
- **Chuẩn LocalMate:** Phải có checklist thao tác, ảnh minh họa hoặc kịch bản mẫu: Ví dụ: *Bước 1: Mở ứng dụng Google Maps > Bấm vào ảnh hồ sơ góc phải > Chọn Doanh nghiệp của bạn > Bấm nút Thêm ảnh...* Kèm mẫu tin nhắn xin đánh giá mẫu gửi qua Zalo.

#### 🛑 C12: Fake Authority & Delusional Positioning (Tự phong danh hiệu hão huyền, hoang tưởng quyền năng)
- **Bản chất lỗi:** Tự xưng là "Số 1 Việt Nam", "Đơn vị hàng đầu Đông Nam Á", "Bậc thầy công nghệ", hoặc hứa hẹn những điều nằm ngoài tầm kiểm soát của con người như "Cam kết Top 1 Google vĩnh viễn".
- **Red Flags:** "Chiếm lĩnh tuyệt đối top 1 tìm kiếm", "Độc quyền công nghệ duy nhất tại VN".
- **Chuẩn LocalMate:** Định vị khiêm nhường: "Người đồng hành số tại địa phương", "Hỗ trợ kỹ thuật thực tế cho các cơ sở kinh doanh nhỏ".

#### 🛑 C13: Passive Bloat & Unnatural Vietnamese (Câu văn què cụt, ngữ pháp dịch thô)
- **Bản chất lỗi:** Lạm dụng thể bị động ("được xem như là", "bị ảnh hưởng bởi"), câu văn dài 4-5 dòng không có dấu chấm ngắt, ngữ pháp tây hóa gượng gạo.
- **Red Flags:** "Một trang web có thể được xem như là một sự đầu tư xứng đáng được thực hiện bởi các doanh nghiệp...".
- **Chuẩn LocalMate:** Viết câu chủ động, ngắn gọn (mỗi câu tối đa 20–25 từ), ngắt nghỉ mạch lạc.

#### 🛑 C14: Business Domain Disconnect (Ngắt kết nối thực tế với ngành nghề địa phương)
- **Bản chất lỗi:** Áp dụng tư duy của tập đoàn đa quốc gia hoặc startup SaaS công nghệ vào một tiệm sửa xe máy, tiệm giặt ủi hay quán cơm bình dân.
- **Red Flags:** Khuyên quán ăn vặt cài đặt hệ thống Marketing Automation phức tạp trị giá 500 USD/tháng, khuyên tiệm nhôm kính làm SEO bài viết blog 100 bài mỗi tuần.
- **Chuẩn LocalMate:** Mọi giải pháp phải tương thích với nguồn lực thật: chủ tiệm tự làm hoặc chỉ có 1-2 thợ phụ tá; ngân sách vài trăm nghìn đến vài triệu; giải quyết việc cấp bách trước: có số điện thoại bấm gọi ngay, có bảng giá không cãi nhau, có vị trí chuẩn chỉ đường không bị lạc.

---

## 3. BÁO CÁO KIỂM TOÁN SƠ BỘ HIỆN TRẠNG 30 BÀI DRAFT

Đội ngũ Red Team đã tiến hành rà soát từng dòng mã và dữ liệu trong:
- File hạt nhân: `content/seeds/drafts_30_articles.json` (Dung lượng 312 KB, 722 dòng)
- File danh mục: `docs/drafts_30_inventory.json` (467 dòng)

### 🔍 Kết quả rà soát chi tiết hiện trạng kỹ thuật:
1. **Nội dung bài viết hoàn toàn là "Mẫu khung rỗng" (Placeholder Stubs):**
   - Mọi bài viết từ ID 1 đến 30 đều sử dụng một đoạn mã khung copy-paste 100% nguyên văn cho tất cả các thẻ H2:
     > *"Nội dung chi tiết cho mục [Tên tiêu đề H2] đang được biên tập theo tiêu chuẩn thực tế của LocalMate. Chúng tôi sẽ cập nhật các ví dụ cụ thể, số liệu thực chiến và hướng dẫn từng bước tại đây."*
   - Đoạn mở đầu mọi bài đều lặp lại máy móc:
     > *"Chào bạn, trong bài viết này thuộc chuyên mục [CATEGORY], LocalMate sẽ cùng bạn tìm hiểu chi tiết về "[TITLE]". Đây là chủ đề rất quan trọng dành cho các chủ doanh nghiệp nhỏ, tiệm dịch vụ và cửa hàng địa phương đang tìm kiếm giải pháp tăng trưởng thực tế."*
   - Đoạn kết mọi bài đều lặp lại CTA đơn điệu:
     > *"Bạn cần hỗ trợ triển khai thực tế cho cơ sở của mình? Liên hệ ngay với đội ngũ LocalMate qua Hotline/Zalo 0834.422.439 để được tư vấn giải pháp phù hợp nhất!"*

2. **Chỉ số đo lường giả tạo (Mock Stats):**
   - Mọi bài đều khai báo `word_count: 650` và `reading_time: "5 phút đọc"`, trong khi nội dung văn bản thực tế chỉ có khoảng 70–90 từ lặp lại.
   - Trạng thái hệ thống đang để: `status: "draft"`.

3. **Đánh giá rủi ro thuật toán & thương hiệu:**
   - Nếu bất kỳ bài viết nào trong số 30 bài này bị sơ suất xuất bản công khai lên website (`/kien-thuc/:slug`):
     - **Thuật toán Google Helpful Content Update & SpamBrain** sẽ ngay lập tức phạt toàn bộ tên miền `localmate.vn` vì hành vi xuất bản hàng loạt trang "Thin Content" (nội dung mỏng, rỗng) và "Scraped/Templated Content".
     - Độc giả thực tế truy cập vào sẽ cảm thấy bị xúc phạm vì tốn thời gian đọc một bài viết không có bất kỳ thông tin nào ngoài lời hứa "đang biên tập".

### ⚖️ KẾT LUẬN CỦA RED TEAM:
> **TỶ LỆ BÁC BỎ: 30 / 30 BÀI VIẾT (100% REJECTED).**  
> **TOÀN BỘ 30 BÀI PHẢI ĐƯỢC VIẾT LẠI HOÀN TOÀN (100% REWRITE REQUIRED) Ở BƯỚC 4 THEO QUY TRÌNH CONTENT WORKFLOW CHUẨN TRƯỚC KHI ĐƯỢC PHÉP TRÌNH DUYỆT LẠI.**

---

## 4. BẢNG ĐÁNH GIÁ CHI TIẾT & QUYẾT ĐỊNH BÁC BỎ 30/30 BÀI DRAFT

Dưới đây là bảng phân tích cụ thể từng bài draft trong kho lưu trữ, chỉ rõ các tiêu chí đỏ vi phạm và nhiệm vụ bắt buộc của tác giả khi thực hiện viết lại ở Bước 4:

| ID | Tiêu Đề Bài Viết | Slug | Focus Keyword | Category | Các Tiêu Chí Đỏ Vi Phạm | Quyết Định Red Team | Chỉ Đạo Bắt Buộc Khi Rewrite (Bước 4) |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| **01** | Website doanh nghiệp là gì? Doanh nghiệp nhỏ có thực sự cần website? | `website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website` | website doanh nghiệp là gì | Website | **C1, C2, C6, C11, C13** | ❌ **REJECTED (Rewrite 100%)** | Mở bài trả lời ngay định nghĩa tài sản số chính chủ; phân tích bảng so sánh mất fanpage vs có website; 5 tiêu chí tối thiểu cho tiệm nhỏ. |
| **02** | Làm website cho doanh nghiệp nhỏ cần chuẩn bị những gì? | `lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi` | chuẩn bị làm website doanh nghiệp nhỏ | Website | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Lập Checklist 4 nhóm tư liệu thực tế (hình ảnh xưởng thật, bảng giá niêm yết, MST/CCCD, tên miền chính chủ); cảnh báo bẫy làm web bị kéo dài. |
| **03** | Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì? | `chi-phi-lam-website-doanh-nghiep-nho-2026` | chi phí làm website doanh nghiệp nhỏ | Website | **C1, C2, C4, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Bóc tách rõ 3 khoản chi bắt buộc (Tên miền .vn 650k/năm, Hosting/Cloud 0đ-500k, phí thiết kế); bóc mẽ chiêu trò "Web 500k" lừa phí duy trì hàng triệu. |
| **04** | Website giới thiệu công ty nên có những trang nào? | `website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao` | các trang cần có trên website công ty | Website | **C1, C2, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Bản thiết kế kiến trúc thông tin 5 trang chuẩn: Trang chủ, Dịch vụ/Bảng giá, Giới thiệu thật, Liên hệ bản đồ, Blog chia sẻ; kèm mẫu bố cục wireframe. |
| **05** | Website bán hàng và website giới thiệu khác nhau như thế nào? | `website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao` | so sánh website bán hàng và website giới thiệu | Website | **C1, C2, C4, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Bảng so sánh 6 tiêu chí (mục tiêu, giỏ hàng, độ phức tạp, chi phí bảo trì); đưa ra công thức chọn lựa: khi nào tiệm dịch vụ chỉ cần web giới thiệu. |
| **06** | 10 lỗi phổ biến khiến website doanh nghiệp không có khách hàng | `10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach` | lỗi khiến website không có khách | Website | **C1, C2, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Mổ xẻ 10 lỗi thực tế: web load chậm trên 4G, giấu số hotline, chữ mờ khó đọc ngoài nắng, thiếu bảng giá minh bạch; kèm giải pháp khắc phục từng lỗi. |
| **07** | Google Maps cho doanh nghiệp: Hướng dẫn từ A đến Z | `google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z` | google maps cho doanh nghiệp | Google Maps | **C1, C2, C3, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Giải thích cơ chế Local 3-Pack; quy trình 4 bước tạo và xác minh hồ sơ; các quy định chính sách Google Business Profile để không bị khóa. |
| **08** | Cách đưa doanh nghiệp lên Google Maps nhanh chóng và chuẩn xác | `cach-dua-doanh-nghiep-len-google-maps` | cách đưa doanh nghiệp lên google maps | Google Maps | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Hướng dẫn từng cú click chuột trên điện thoại và máy tính; cách đặt tên doanh nghiệp chuẩn không vi phạm thuật toán nhồi từ khóa (Name spamming). |
| **09** | Cách tối ưu Google Business Profile để khách hàng dễ tìm thấy | `cach-toi-uu-google-business-profile-de-khach-de-tim-thay` | tối ưu google business profile | Google Maps | **C1, C2, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | 6 checklist tối ưu: điền 100% hồ sơ, chọn đúng danh mục phụ, đăng ảnh Geo-tag thật, đăng bài Google Updates, mở tin nhắn và tối ưu mô tả. |
| **10** | Vì sao doanh nghiệp không xuất hiện trên Google Maps? | `vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps` | tại sao doanh nghiệp không hiện trên google maps | Google Maps | **C1, C2, C4, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Phân tích 5 nguyên nhân gốc rễ: chưa xác minh, nhồi từ khóa bị phạt ngầm, trùng lặp địa chỉ/SĐT với tiệm cũ, khoảng cách bán kính và tài khoản bị gắn cờ. |
| **11** | Cách tăng đánh giá Google Maps đúng cách và bền vững | `cach-tang-danh-gia-google-maps-dung-cach` | cách tăng đánh giá google maps | Google Maps | **C1, C2, C3, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Cảnh báo hậu quả mua review ảo; cung cấp kịch bản 3 bước xin review thật sau khi phục vụ; mẫu in mã QR để bàn 1 chạm; cách xử lý review 1 sao văn minh. |
| **12** | Google Maps bị đình chỉ: Nguyên nhân và cách xử lý khôi phục | `google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly` | google maps bị đình chỉ | Google Maps | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Phân biệt Hard vs Soft suspension; checklist giấy tờ cần thiết (giấy phép kinh doanh, hóa đơn điện nước, ảnh biển hiệu mặt tiền); link form kháng nghị chuẩn. |
| **13** | Local SEO là gì? Vì sao doanh nghiệp địa phương nên làm Local SEO? | `local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam` | local seo là gì | Local SEO | **C1, C2, C6, C9, C11** | ❌ **REJECTED (Rewrite 100%)** | Định nghĩa đơn giản không dùng thuật ngữ cao siêu; 3 trụ cột thuật toán Google (Khoảng cách, Mức độ liên quan, Sự nổi bật); kế hoạch triển khai 0đ. |
| **14** | SEO Google Maps và SEO website khác nhau như thế nào? | `seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao` | so sánh seo google maps và seo website | Local SEO | **C1, C2, C4, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | So sánh vị trí hiển thị, tốc độ lên top, chi phí và mức độ phụ thuộc thuật toán; chiến lược kết hợp website để củng cố tín hiệu Entity cho Maps. |
| **15** | Cách SEO doanh nghiệp lên Google tại khu vực địa phương | `cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong` | cách seo từ khóa địa phương | Local SEO | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Hướng dẫn cấu trúc URL, thẻ Title và nội dung gắn địa danh tự nhiên (Quận/Huyện); cách nhúng bản đồ và chèn địa chỉ chuẩn chỉ không bị gượng gạo. |
| **16** | Entity SEO là gì và có cần thiết cho doanh nghiệp nhỏ? | `entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho` | entity seo cho doanh nghiệp nhỏ | Local SEO | **C1, C2, C8, C9, C11** | ❌ **REJECTED (Rewrite 100%)** | Giải mã Entity bằng ngôn ngữ dân dã: chứng minh với máy tìm kiếm tiệm của bạn là thực thể có thật ngoài đời; checklist đồng bộ NAP và mạng xã hội. |
| **17** | Citation trong Local SEO là gì và cách xây dựng chuẩn xác | `citation-trong-local-seo-la-gi` | citation trong local seo là gì | Local SEO | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Định nghĩa Citation (trích dẫn danh bạ); quy tắc sống còn NAP (Tên, Địa chỉ, Số điện thoại phải khớp 100%); danh sách 10 trang danh bạ miễn phí uy tín tại VN. |
| **18** | Checklist Local SEO 2026 cho doanh nghiệp địa phương | `checklist-local-seo-cho-doanh-nghiep-dia-phuong` | checklist local seo | Local SEO | **C1, C2, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Bảng kiểm tra 20 hạng mục thực tế chia làm 4 nhóm: Google Maps, Trang web di động, Trích dẫn NAP, Đánh giá khách hàng; kế hoạch duy trì 15 phút/tuần. |
| **19** | Google Ads cho doanh nghiệp nhỏ: Bắt đầu từ đâu? | `google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau` | google ads cho doanh nghiệp nhỏ | Google Ads | **C1, C2, C4, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Nguyên lý cơ bản trả tiền theo lượt bấm (PPC); phân biệt Search Ads đón khách khẩn cấp vs Display Ads; 3 việc phải làm trước khi nạp tiền thẻ. |
| **20** | Google Search Ads hoạt động như thế nào? | `google-search-ads-hoat-dong-nhu-the-nao` | google search ads hoạt động như thế nào | Google Ads | **C1, C2, C6, C9, C11** | ❌ **REJECTED (Rewrite 100%)** | Giải thích công thức Ad Rank (Giá thầu x Điểm chất lượng); cách 3 loại đối sánh từ khóa hoạt động; bí quyết tối ưu trang đích để giảm giá click. |
| **21** | Chạy Google Ads bao nhiêu tiền một ngày là hợp lý? | `chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly` | chạy google ads bao nhiêu tiền một ngày | Google Ads | **C1, C2, C4, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Cung cấp công thức tính ngược từ mục tiêu đơn hàng; bảng dự toán mẫu cho ngành dịch vụ địa phương (100k - 200k/ngày); cách đặt chặn hạn mức ngày. |
| **22** | Vì sao chạy Google Ads có click nhưng không có khách liên hệ? | `vi-sao-chay-google-ads-co-click-nhung-khong-co-khach` | chạy google ads có click không có khách | Google Ads | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Bóc tách 5 nguyên nhân mất tiền oan: dính từ khóa tìm kiếm rác, web load chậm, giấu giá khiến khách sợ, nút gọi không hoạt động; cách cài bộ lọc phủ định. |
| **23** | Landing page chạy Google Ads nên thiết kế như thế nào để ra khách? | `landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao` | thiết kế landing page chạy google ads | Google Ads | **C1, C2, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Cấu trúc Landing Page 5 khối chuẩn chuyển đổi: Hero nêu rõ giải pháp trong 3 giây, bảng giá dịch vụ, ảnh thực tế xưởng/thợ, phản hồi thật, nút gọi dính chân trang. |
| **24** | Google Ads hay Facebook Ads phù hợp hơn với doanh nghiệp địa phương? | `google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong` | so sánh google ads và facebook ads | Google Ads | **C1, C2, C4, C6, C14** | ❌ **REJECTED (Rewrite 100%)** | Phân tích tâm lý tìm kiếm chủ động (sửa khóa, cứu hộ xe) vs lướt xem thụ động (quán trà sữa, quần áo); bảng phân loại ngành nào nên chạy kênh nào. |
| **25** | CRM là gì? Doanh nghiệp nhỏ có thực sự cần hệ thống CRM không? | `crm-la-gi-doanh-nghiep-nho-co-can-crm-khong` | crm là gì cho doanh nghiệp nhỏ | CRM & Tự Động Hóa | **C1, C2, C8, C9, C14** | ❌ **REJECTED (Rewrite 100%)** | Đập tan lầm tưởng CRM là phần mềm nghìn đô phức tạp; định nghĩa CRM giản dị là sổ tay số hóa lưu lịch sử khách hàng; giải pháp Google Sheet 0đ cho tiệm nhỏ. |
| **26** | CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào? | `crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao` | tính năng crm cho doanh nghiệp nhỏ | CRM & Tự Động Hóa | **C1, C2, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | 5 tính năng cốt lõi duy nhất cần có: Danh bạ tập trung, Phân loại trạng thái đơn (Mới/Báo giá/Đã xong), Nhắc lịch bảo dưỡng, Đồng bộ tin nhắn, Báo cáo ngày ngắn gọn. |
| **27** | Automation cho doanh nghiệp nhỏ: 7 việc nên tự động hóa ngay | `automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa` | tự động hóa cho doanh nghiệp nhỏ | CRM & Tự Động Hóa | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | 7 tác vụ tự động thực tế: Báo chuông có khách mới về Zalo, gửi SMS nhắc lịch hẹn, gửi link xin đánh giá Maps sau 2 giờ giao xe/xong dịch vụ, sao lưu danh bạ. |
| **28** | Cách quản lý khách hàng từ Facebook, Zalo và website trên một hệ thống | `cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong` | quản lý tin nhắn facebook zalo website tập trung | CRM & Tự Động Hóa | **C1, C2, C4, C6, C11** | ❌ **REJECTED (Rewrite 100%)** | Nêu nỗi đau sót khách khi chat rời rạc; giải pháp hợp nhất tin nhắn (Inbox tập trung); quy trình phân chia việc cho thợ/nhân viên trực ca; gợi ý công cụ tinh gọn. |
| **29** | Content marketing cho doanh nghiệp địa phương nên bắt đầu từ đâu? | `content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau` | content marketing cho doanh nghiệp địa phương | Nội Dung & Tăng Trưởng | **C1, C2, C6, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Bỏ tư duy viết văn hoa; biến 20 câu hỏi thường ngày của khách tại quầy thành 20 bài viết hữu ích; cách chụp ảnh công trình thật và quay video thợ giải thích ngắn. |
| **30** | Chuyển đổi số cho doanh nghiệp nhỏ: Bắt đầu từ 5 việc đơn giản | `chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian` | chuyển đổi số cho doanh nghiệp nhỏ | Kinh Doanh Địa Phương | **C1, C2, C6, C8, C11, C14** | ❌ **REJECTED (Rewrite 100%)** | Tước bỏ vỏ bọc vĩ mô của chuyển đổi số; hướng dẫn 5 bước 0đ thực tế: ghim Google Maps, làm web danh thiếp số, tạo QR thanh toán/review, lưu danh bạ cloud, tạo Zalo OA. |

---

## 5. RUBRIC CHẤM ĐIỂM NGHIỆM THU CHẤT LƯỢNG (THANG 100 ĐIỂM)

Sau khi đội ngũ biên tập hoàn thành việc viết lại toàn bộ nội dung ở **Bước 4**, mỗi bài viết bắt buộc phải được đưa qua Hội đồng Red Team để chấm điểm theo Rubric 5 Trụ Cột dưới đây.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│                  HỆ THỐNG TRỌNG SỐ RUBRIC CHẤM ĐIỂM (100 ĐIỂM)                │
├──────────────────────────────────────────────┬───────────────────────────────┤
│ Trụ cột 1: Độ Sâu & Am Hiểu Ngành Địa Phương  │ 30 Điểm (Tối đa)              │
│ Trụ cột 2: Tính Khả Thi & Công Thức Thực Chiến│ 25 Điểm (Tối đa)              │
│ Trụ cột 3: Chuẩn Mực Giọng Văn (Brand Voice) │ 20 Điểm (Tối đa)              │
│ Trụ cột 4: Cấu Trúc Trình Bày & Khả Năng Đọc  │ 15 Điểm (Tối đa)              │
│ Trụ cột 5: Sức Khỏe Kỹ Thuật & Tối Ưu SERP   │ 10 Điểm (Tối đa)              │
└──────────────────────────────────────────────┴───────────────────────────────┘
```

### BẢNG TIÊU CHÍ CHI TIẾT TỪNG TRỤ CỘT:

#### 🏛️ Trụ cột 1: Độ Sâu & Am Hiểu Ngành Địa Phương (Local Domain Depth) — 30 Điểm
* **1.1. Thấu cảm bối cảnh thực tế (10 điểm):** Bài viết mô tả chính xác những khó khăn, thói quen và rào cản của chủ hộ kinh doanh địa phương tại Việt Nam (không bàn chuyện vĩ mô xa vời).
* **1.2. Độ chính xác chuyên môn (10 điểm):** Giải thích đúng bản chất thuật toán, chính sách nền tảng (Google Business Profile, Google Ads, Meta Ads) được cập nhật mới nhất năm 2026.
* **1.3. Tính độc bản & Bản sắc địa phương (10 điểm):** Có dẫn chứng, tình huống hoặc ví dụ đặc trưng (tiệm sửa xe, nha khoa, gara, cửa hàng ăn uống); tuyệt đối không phải bản dịch thô từ tài liệu tiếng Anh.

#### 🛠️ Trụ cột 2: Tính Khả Thi & Công Thức Thực Chiến (Actionability & Frameworks) — 25 Điểm
* **2.1. Có công thức tính toán hoặc ngưỡng số liệu cụ thể (10 điểm):** Ví dụ công thức dự toán ngân sách Ads, công thức tính số đơn hòa vốn, bảng dự toán chi phí làm web minh bạch.
* **2.2. Hướng dẫn từng bước rõ ràng (10 điểm):** Các bước triển khai mạch lạc (Bước 1, Bước 2, Bước 3) mà một người bình thường chỉ cần làm theo là đạt kết quả.
* **2.3. Checklist nghiệm thu / Kịch bản mẫu áp dụng ngay (5 điểm):** Cung cấp sẵn mẫu tin nhắn Zalo, mẫu bảng giá hoặc checklist kiểm tra để chủ tiệm copy-paste sử dụng được ngay.

#### 🎙️ Trụ cột 3: Chuẩn Mực Giọng Văn & Nói Thực (Brand Voice & Zero-Hype) — 20 Điểm
* **3.1. Tuân thủ SSOT v2 Brand Voice (10 điểm):** Giọng văn gần gũi, khiêm nhường, xưng hô nhã nhặn; không có bất kỳ từ ngữ nào trong danh mục 30 cụm từ cấm kỵ (xem `docs/localmate-brand-voice-v2.md`).
* **3.2. Không nói quá & Minh bạch số liệu (10 điểm):** Không cam kết ảo (không "Top 1 Google", không "tăng 300% doanh thu"); nếu là kịch bản ví dụ phải ghi rõ kịch bản minh họa giả định.

#### 📖 Trụ cột 4: Cấu Trúc Trình Bày & Khả Năng Đọc Lướt (Readability & Layout) — 15 Điểm
* **4.1. Khối trả lời nhanh trực diện (Quick Answer) (5 điểm):** Trả lời ngay câu hỏi trọng tâm của bài trong 5 dòng đầu tiên dưới dạng Blockquote viền nổi bật.
* **4.2. Khả năng đọc lướt (Scannability) (5 điểm):** Đề mục H2, H3 rõ ràng; phân đoạn hợp lý (mỗi đoạn không quá 3-4 câu); sử dụng bảng so sánh và danh sách có cấu trúc.
* **4.3. Giữ chân người đọc tự nhiên (5 điểm):** Dẫn dắt lôi cuốn, không có câu văn rác, không dùng văn phong dịch máy lủng củng.

#### ⚙️ Trụ cột 5: Sức Khỏe Kỹ Thuật & Tối Ưu SERP (Technical & SEO Health) — 10 Điểm
* **5.1. Tối ưu thẻ SEO Title & Meta Description (5 điểm):** Title 50–60 ký tự hấp dẫn, chứa từ khóa chính tự nhiên; Description 140–160 ký tự không bị cắt cụt dấu `...`.
* **5.2. Cấu trúc liên kết nội bộ & CTA tự nhiên (5 điểm):** Có internal link dẫn tới các bài liên quan hoặc trang dịch vụ phù hợp; CTA nhã nhặn, tôn trọng, không ép buộc.

---

### 📊 THANG ĐIỂM XẾP HẠNG & QUYẾT ĐỊNH NGHIỆM THU:

| Khoảng Điểm | Xếp Loại | Quyết Định Của Quality Gate | Hành Động Kế Tiếp |
|:---:|:---:|:---:|:---|
| **$\ge 85$ Điểm** *(Và 0 lỗi đỏ)* | **XUẤT SẮC** | ✅ **PASS (ĐỦ ĐIỀU KIỆN XUẤT BẢN)** | Ký duyệt nghiệm thu, chuyển sang trạng thái `Published` trên CMS và cập nhật Sitemap XML. |
| **70 – 84 Điểm** *(Và 0 lỗi đỏ)* | **TRUNG BÌNH KHÁ** | ⚠️ **HOLD (TẠM HOÃN / CẦN SỬA ĐỔI)** | Trả lại cho tác giả kèm danh sách góp ý chi tiết; chỉ sửa các điểm yếu cụ thể trong 24h rồi chấm lại. |
| **< 70 Điểm** *Hoặc dính bất kỳ lỗi đỏ nào* | **KHÔNG ĐẠT** | ❌ **REJECT (BÁC BỎ HOÀN TOÀN)** | Hủy bỏ bản thảo, yêu cầu lập lại dàn ý và viết lại toàn bộ từ đầu. |

---

## 6. PHIẾU KIỂM DUYỆT NGHIỆM THU CHUẨN HÓA (QUALITY GATE INSPECTION SHEET)

*Phiếu này là biểu mẫu SSOT bắt buộc phải được lập riêng cho từng bài viết sau khi viết xong ở Bước 4. Kiểm duyệt viên phải tick kiểm tra từng mục và ký xác nhận.*

```markdown
# 📋 PHIẾU KIỂM DUYỆT NGHIỆM THU BÀI VIẾT (QUALITY GATE INSPECTION SHEET)

**Tên bài viết:** [Điền tiêu đề bài viết]  
**Mã bài viết (ID):** [Post ID] — **Slug:** `[post-slug]`  
**Tác giả biên tập:** [Tên người viết] — **Kiểm duyệt viên Red Team:** [Tên người duyệt]  
**Ngày kiểm duyệt:** [DD/MM/YYYY] — **Phiên bản (Revision):** v[X]  

---

### VÒNG 1: QUY CHẾ ĐIỂM LIỆT — RÀ SOÁT 14 TIÊU CHÍ ĐỎ (KNOCK-OUT CHECK)
*(Chỉ cần 1 mục ĐÁNH DẤU LỖI [X], bài viết lập tức bị BÁC BỎ, dừng chấm điểm ngay lập tức)*

- [ ] C1: Generic / Brand-Agnostic (Có đoạn nào chung chung gắn logo khác vào cũng được không?)
- [ ] C2: Filler / Fluff Word Padding (Có đoạn văn nào thừa thãi, nhồi chữ kéo dài độ dài không?)
- [ ] C3: Unsupported Claim & Fabricated Metrics (Có con số % hoặc tuyên bố nào không có căn cứ không?)
- [ ] C4: Vague Advice Without Formula (Có lời khuyên mơ hồ "tùy vào ngân sách" mà thiếu công thức không?)
- [ ] C5: Fake Case Study & Testimonials (Có bịa đặt tên khách hàng, avatar hay trích dẫn ảo không?)
- [ ] C6: Weak Opening & Buried Answer (Có mở bài vòng vo và thiếu khối Quick Answer trong 5 dòng đầu không?)
- [ ] C7: Aggressive / Spammy / Salesy CTA (Có chèn ép bán hàng, đe dọa hoặc giật gân vô lý không?)
- [ ] C8: Obvious AI Phrasing (Có xuất hiện các cụm từ sáo rỗng: "trong kỷ nguyên số", "không thể phủ nhận" không?)
- [ ] C9: Academic Jargon (Có nhồi thuật ngữ công nghệ phức tạp khiến chủ tiệm khó hiểu không?)
- [ ] C10: Competitor Bashing (Có dùng từ ngữ công kích đối thủ: "cắt cổ", "chém giá", "thợ vườn" không?)
- [ ] C11: Zero Actionable Steps (Bài viết có bị rơi vào lý thuyết suông mà thiếu checklist/hướng dẫn từng bước không?)
- [ ] C12: Fake Authority (Có tự xưng "Số 1", "Độc quyền công nghệ", "Cam kết Top 1" không?)
- [ ] C13: Passive Bloat (Có lạm dụng câu bị động, ngữ pháp dịch máy gượng gạo không?)
- [ ] C14: Business Domain Disconnect (Giải pháp có bị xa rời nguồn lực và thực tế của tiệm nhỏ không?)

👉 **Kết luận Vòng 1:** [ ] ĐẠT 100% TIÊU CHÍ ĐỎ (Tiếp tục Vòng 2)  |  [ ] VI PHẠM TIÊU CHÍ [C...] ➔ LOẠI NGAY

---

### VÒNG 2: CHẤM ĐIỂM CHUYÊN SÂU THEO 5 TRỤ CỘT (RUBRIC 100 ĐIỂM)

| Trụ Cột Đánh Giá | Điểm Tối Đa | Điểm Chấm Thực Tế | Nhận Xét Cụ Thể Của Kiểm Duyệt Viên |
|:---|:---:|:---:|:---|
| **1. Độ Sâu Ngành Địa Phương (Local Domain Depth)** | 30 | ..... / 30 | |
| **2. Tính Khả Thi & Công Thức (Actionability)** | 25 | ..... / 25 | |
| **3. Chuẩn Giọng Văn SSOT v2 (Brand Voice)** | 20 | ..... / 20 | |
| **4. Trình Bày & Khả Năng Đọc (Readability)** | 15 | ..... / 15 | |
| **5. Sức Khỏe Kỹ Thuật & SEO (Technical Health)** | 10 | ..... / 10 | |
| **TỔNG ĐIỂM TOÀN BÀI** | **100** | **..... / 100** | |

---

### VÒNG 3: BÀN GIAO THỰC TẾ (CHỦ TIỆM THẨM ĐỊNH)
*Đóng vai một chủ xưởng / chủ quán đọc bài viết này:*
- Bài viết này có giúp tôi tiết kiệm được tiền hoặc tránh bị mất tiền oan không? **[Có / Không]**
- Đọc xong tôi có biết chính xác ngày mai mình cần bấm vào đâu trên điện thoại không? **[Có / Không]**
- Giọng điệu bài viết có chân thành, dễ chịu và đáng tin cậy không? **[Có / Không]**

---

### KẾT LUẬN & PHÊ DUYỆT CHÍNH THỨC:
- Trạng thái nghiệm thu: **[ ] PASS (ĐỦ ĐIỀU KIỆN PUBLISH)**  |  **[ ] HOLD (CẦN SỬA NHỎ)**  |  **[ ] REJECT (VIẾT LẠI)**
- Ý kiến chỉ đạo sửa đổi (nếu có): .....................................................................................................
- **Chữ ký xác nhận của Red Team Lead:** ...................................................
```

---

## 7. KẾ HOẠCH & CHỈ ĐẠO CHO BƯỚC 4 (CONTENT REWRITING DIRECTIVE)

Để hoàn tất việc thay máu toàn bộ hệ thống nội dung, Đội ngũ Content Writer và các Subagent phụ trách biên tập ở **Bước 4** phải tuân thủ nghiêm ngặt lộ trình tác chiến sau:

1. **Không viết dàn trải:** Chia 30 bài viết thành 5 cụm chuyên đề (Clusters) để viết dứt điểm từng cụm:
   - **Cụm 1 (Bài 01 – 06):** Kiến thức nền tảng & Chi phí làm Website Doanh Nghiệp Nhỏ.
   - **Cụm 2 (Bài 07 – 12):** Thực chiến Google Maps & Khắc phục sự cố đình chỉ.
   - **Cụm 3 (Bài 13 – 18):** Chiến lược Local SEO, Citation & Cấu trúc Entity.
   - **Cụm 4 (Bài 19 – 24):** Google Search Ads & Thiết kế Landing Page ra khách.
   - **Cụm 5 (Bài 25 – 30):** CRM, Tự động hóa & Chuyển đổi số tinh gọn cho tiệm nhỏ.

2. **Cấu trúc chuẩn của mỗi bài viết khi rewrite:**
   - **H1:** Tiêu đề rõ ràng, chứa từ khóa chính, giải quyết đúng băn khoăn của khách.
   - **Quick Answer Blockquote:** Tóm tắt 2-3 câu trả lời dứt khoát vấn đề ngay dưới H1.
   - **Các phần H2:** Đi kèm bảng biểu, hình minh họa hoặc checklist thao tác.
   - **Khối công thức / Bảng giá thật:** Cung cấp con số rõ ràng theo thị trường năm 2026.
   - **Contextual CTA:** Nhẹ nhàng, đặt ở chân trang, hướng dẫn liên hệ tư vấn 0đ qua Zalo.

3. **Cơ chế nghiệm thu kép (Dual Gate):**
   - Tác giả tự rà soát theo [Phiếu Kiểm Duyệt Nghiệm Thu](#6-phiếu-kiểm-duyệt-nghiệm-thu-chuẩn-hóa-quality-gate-inspection-sheet).
   - Đệ trình lên Red Team Auditor thẩm định độc lập. Đạt $\ge 85$ điểm và vượt qua 14 Tiêu Chí Đỏ mới được cấp cờ `PASS` để đẩy vào cơ sở dữ liệu xuất bản chính thức.

---
*Báo cáo được thiết lập và phê chuẩn bởi Subagent 10 — Quality Gate / Red Team Leader.*  
*Tài liệu này là Single Source of Truth (SSOT) cho toàn bộ quy trình kiểm duyệt chất lượng nội dung của LocalMate.*
