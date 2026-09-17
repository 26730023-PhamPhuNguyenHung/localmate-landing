# 📚 LOCALMATE AGENTS LESSONS LEARNED & EDITORIAL RULES

## 9. Bài Học Về Search Intent, SERP Fit & Kiểm Soát Cannibalization (Subagent 2)
- **Bẫy định dạng một màu (Static Blog Trap)**: Người dùng tìm kiếm từ khóa BOFU/Commercial Investigation (như "chi phí làm web", "ngân sách chạy ads ngày") không chỉ muốn đọc văn bản; họ mong muốn công cụ tính toán (Calculator), bảng trượt ngân sách và so sánh gói dịch vụ. Nếu chỉ cung cấp bài viết blog văn bản tĩnh, tỷ lệ thoát trang sẽ cao và SERP ranking sẽ bị các đối thủ có interactive widget vượt mặt.
- **Phân định ranh giới giữa Blog Post và Service / Landing Pages**:
  - Blog Post (`/kien-thuc/...`): Phải phục vụ truy vấn Informational / How-to / Troubleshooting mang tính tự làm (DIY) hoặc khảo sát khách quan. Tuyệt đối không tự biến bài blog thành trang bán hàng trơ trẽn.
  - Service Page (`/thiet-ke-website`, `/google-ads`, `/bang-gia`): Phục vụ truy vấn Commercial / Transactional có chủ đích thuê dịch vụ.
  - Kết nối giữa 2 tầng: Sử dụng In-text Link tự nhiên và Action Box nổi bật (Hotline khẩn cấp, Form Audit miễn phí) để đưa người đọc từ Blog sang Landing Page mà không gây phản cảm.
- **Diệt trừ Cannibalization bằng Angle Differentiation**:
  - Khi 2 bài viết cùng nhắm một chủ đề lớn (ví dụ: Google Maps), phải chia tách rạch ròi: 1 bài là **Pillar Chiến lược & Bản quyền** (Bài 07), 1 bài là **Kỹ thuật xác minh 1 cú bấm máy 90s** (Bài 08).
  - Không bao giờ đặt tiêu đề và focus keyword chung chung dạng "Google Maps là gì" cho cả 2 bài.
- **Content Gap thế hệ mới (AI Search)**: Khi hệ thống đã có các trang dịch vụ tiên phong như GEO (`/dich-vu/geo`), AEO (`/dich-vu/aeo`), SEO AI (`/dich-vu/seo-ai`), bắt buộc phải có các bài viết Blog TOFU/MOFU tương ứng để tạo thành Topic Cluster vững chắc, tránh để Service Pages trở thành các "ốc đảo cô lập" (orphan pages) thiếu Topical Authority.

## 1. Bài Học Về Brand Voice & Tư Duy Biên Tập (Editorial POV)
- **Bản chất của khách hàng địa phương (SME/Hộ kinh doanh)**: Họ làm việc tay chân, bận rộn cả ngày, chỉ đọc điện thoại vào giờ nghỉ hoặc tối muộn. Văn phong phải ngắn gọn, chắc chắn, nói thẳng vào việc, không vòng vo, không văn hoa sáo rỗng.
- **Quy tắc "Bác thợ hiểu được"**: Nếu một câu văn chứa từ tiếng Anh viết tắt mà không thể giải thích bằng 5 từ tiếng Việt đơn giản cho một bác thợ 50 tuổi hiểu, câu đó bị loại bỏ ngay lập tức.
- **Kỹ thuật là để hoàn thành công việc**: Tuyệt đối không đem Schema.org, Entity SEO, Vector Embeddings, LLM RAG ra để khoe mẽ kỹ thuật. Chuyển hóa tất cả thành: *Cài đặt thông tin chuẩn để máy tìm kiếm hiểu đúng địa chỉ và số điện thoại của tiệm*.
- **Đo lường bằng "Việc thật"**: Mọi bài viết phải hướng người dùng tới hành động cụ thể để tạo ra: (1) Cuộc gọi thật, (2) Tin nhắn Zalo thật, (3) Lượt khách ghé tiệm. Tuyệt đối không báo cáo số ảo như Impression hay Reach.
- **Tôn trọng thị trường**: Giữ tư thế đàng hoàng, không công kích đối thủ hay agency khác ("cắt cổ", "chém giá", "con tin"). Chỉ cần làm tốt và minh bạch phần việc của mình.

## 2. Quy Chuẩn Tài Liệu SSOT
- `docs/localmate-brand-voice-v2.md`: Chuẩn mực định vị và danh sách 30 cụm từ cấm kỵ.
- `docs/content-quality-report.md`: Báo cáo Kiểm toán Chất lượng Nội dung, Bộ 14 Tiêu Chí Đỏ, Rubric 100 điểm & Phiếu Kiểm Duyệt Nghiệm Thu (Quality Gate Inspection Sheet).
- `docs/editorial-pov.md`: Hệ thống luận điểm biên tập 6 domain, bảng đối chiếu 30 bài viết và 5 bài test nghiệm thu.
- `docs/drafts_30_inventory.json`: Danh mục 30 bài viết chuẩn bị xuất bản.

## 3. Bài Học Về Kiểm Duyệt Chất Lượng & Red Team (Quality Gate)
- **Zero AI Slop**: Các bản thảo sinh tự động (templated content) lặp lại văn mẫu "Đang được biên tập theo tiêu chuẩn thực tế..." là mầm mống Thin Content khiến Google Helpful Content phạt toàn miền. Phải bác bỏ 100% trước khi lọt ra công khai.
- **Quy chế Knock-out 14 Tiêu Chí Đỏ**: Bài viết dù điểm trung bình cao đến đâu nhưng chỉ cần dính 1 trong 14 tiêu chí đỏ (số liệu bịa, lời khuyên mơ hồ thiếu công thức, case study ảo, mở bài vòng vo, CTA đe dọa chèn ép...) đều bị FAIL lập tức.

## 4. Bài Học Thực Chiến Từ Triển Khai Thực Tế (Practitioner Lessons Learned)
- **Quyền sở hữu chính chủ (100% Primary Owner)**: Bài học xương máu số 1 của mọi chủ hộ kinh doanh là để agency đăng ký tên miền, Google Maps, Facebook hay Ads bằng email/tài khoản của agency. Khi tranh chấp xảy ra, chủ tiệm mất toàn bộ tài sản số hoặc bị đòi tiền chuộc vô lý. Mọi dự án phải bàn giao tài khoản đứng tên chính chủ ngay từ ngày đầu.
- **Thước đo 4G di động**: 90% khách tìm kiếm tiệm địa phương (sửa xe, ăn uống, cứu hộ, nha khoa) đang cầm điện thoại di động ngoài đường. Mọi thiết kế web, landing page và biểu mẫu chỉ có giá trị khi mở mượt dưới 3 giây trên mạng di động 4G và có nút Gọi / Zalo cố định dính đáy màn hình.
- **Tránh bẫy "Ăn gian từ khóa" trên Google Maps**: Nhồi nhét từ khóa vào tên Maps (ví dụ: "Sửa xe máy giá rẻ uy tín quận 10") có thể giúp lên top vài ngày nhưng sẽ bị thuật toán khóa vĩnh viễn (Hard Suspended). Tên Maps bắt buộc phải khớp 100% với biển hiệu thực tế trước cửa tiệm.
- **Lọc Search Terms trong Google Ads là sống còn**: Đốt tiền quảng cáo không ra khách 95% do dùng đối sánh mở rộng và không chịu lọc từ khóa rác hàng ngày (khách tìm "miễn phí", "tự làm", "hình ảnh"). Phải chủ động phủ định từ khóa rác và cắm bán kính sát tiệm (3–7km).
- **Tự động hóa phải đi sau quy trình phục vụ trơn tru**: Không có phần mềm hay bot nào cứu được một dịch vụ trễ hẹn hoặc thái độ nhân viên kém. Chỉ số hóa và tự động hóa những gì đã được chứng minh hiệu quả bằng tay chân và sổ sách.

## 6. Bài Học Về Kiến Trúc Article Schema & Flexible Block System
- **Chuyển dịch từ Long-form Text sang Modular Content Blocks**: Người đọc địa phương và công cụ AI không đọc tuần tự bài viết 3000 từ. Việc chia nhỏ bài viết thành các khối chuyên biệt (TL;DR, POV, Cost Table, Decision Tree, Checklist, Warning Box) giúp bài viết vừa có tính tương tác cao trên thiết bị di động, vừa tối ưu hóa cấu trúc dữ liệu cho Google Rich Results (HowTo, FAQPage, Article).
- **Phân tách rõ ràng Dữ liệu (Data Payload) và Trình diễn (UI Component)**: Mỗi block có interface dữ liệu độc lập (`TldrBlockData`, `CostBreakdownTableBlockData`...), cho phép CMS lưu trữ sạch dạng JSON trong Cloudflare D1 và render linh hoạt ra nhiều định dạng: React Light Mode UI, Schema.org JSON-LD và Plain text/Markdown fallback.
- **Answer-First là tiêu chuẩn bắt buộc số 1**: Khối `tldr_answer_first` bắt buộc phải đứng ngay vị trí đầu tiên của nội dung bài viết. Không giấu câu trả lời ở cuối bài để kéo time-on-site giả tạo; tính hữu ích trực diện mới là chìa khóa xếp hạng bền vững theo tiêu chuẩn Google Helpful Content.
- **Minh bạch hóa chi phí đến từng đồng**: Khối `cost_breakdown_table` bóc tách chi phí cố định (domain, hosting) và chi phí dịch vụ giúp phá tan rào cản nghi ngại về "phí ẩn" của chủ doanh nghiệp nhỏ.

## 7. Bài Học Về Thiết Kế Navigation & Mega Menu (Studio / SaaS Navigation)
- **Mega Menu là Điều Hướng (Navigation), Không Phải Bảng Giá (Pricing Table)**: Mục tiêu duy nhất của Mega menu là giúp người dùng trả lời nhanh trong 2–3 giây: *"Tôi muốn tìm hiểu việc gì?"*. Việc nhồi nhét mô tả dài dòng, quá nhiều badge giá hay promo card cồng kềnh biến menu thành bảng danh mục dịch vụ nặng nề.
- **Cấu Trúc 3 Cột Studio Đều Nhau**: Chia 3 nhóm danh mục (`WEBSITE`, `HIỆN DIỆN ĐỊA PHƯƠNG`, `TĂNG TRƯỞNG`) với 9 dịch vụ trọng tâm. Mỗi item tuân thủ nghiêm ngặt: Tên dịch vụ (2–4 từ) + Mô tả cốt lõi (4–8 từ). Scan xong toàn bộ menu trong dưới 1 giây.
- **Tiết Chế Badge Giá Tối Đa**: Chỉ gắn badge cho tối đa 1–2 dịch vụ phễu nhập môn ("Từ 490k" cho Website 1 Trang, "Từ 299k" cho Google Maps) với tone màu xanh nhạt (`#edf7f1`), chữ xanh đậm (`#0d7647`), viền mảnh `#d1fae5`. Không cạnh tranh thị giác với tên dịch vụ.
- **Chống Flicker Hover (140ms Buffer Timer)**: Trải nghiệm rê chuột từ button Header xuống Dropdown Panel cần có timeout delay 140ms để tránh tình trạng menu bị chớp nháy hoặc đóng đột ngột khi người dùng di chuột qua khoảng đệm padding.
- **Thanh Footer Ngang Tinh Tế Thay Thế Promo Rail**: Bỏ hoàn toàn Promo Card chiếm cột 4 cồng kềnh; thay bằng 1 thanh ngang thanh mảnh (~54px) dưới chân 3 cột: *"Chưa biết nên bắt đầu từ đâu? Xem bảng giá → [Nhận tư vấn]"*. Giảm chiều cao menu từ ~540px xuống ~310px, hiển thị trọn vẹn và thoáng đãng ngay cả trên màn hình laptop 1366x768.
- **Mobile Accordion Tinh Gọn**: Trên di động, menu dịch vụ hiển thị dạng accordion chỉ gồm tiêu đề các nhóm và tên dịch vụ (bỏ mô tả dài), kèm 2 nút *"Xem tất cả dịch vụ →"* và *"Nhận tư vấn"*, giúp thao tác một tay mượt mà.

## 8. Bài Học Về Layout & Khống Chế Global `p` Max-Width (Gotcha Phổ Biến)
- **Cái bẫy của Global `p { max-width: ... }`**: Khi CSS toàn cục áp dụng `max-width` (ví dụ `68ch`) lên thẻ `p` để tối ưu trải nghiệm đọc sách/bài viết, nếu không đi kèm `margin-inline: auto`, mọi thẻ `<p>` nằm trong các container căn giữa (`text-align: center`) sẽ bị trình duyệt neo mặc định ở lề trái (`margin-left: 0`).
- **Triệu chứng trực quan**: Khối tiêu đề phụ (subtitle/heading paragraph) co lại và dạt hẳn sang góc trái màn hình, lệch hoàn toàn so với thẻ H2 căn giữa, thậm chí đè lên các thành phần trang trí hai bên (side notes).
- **Giải pháp dứt điểm**: Mọi section subtitle (`.section-heading p`, `.stories .section-heading p`, v.v.) phải luôn được khai báo rõ ràng:
  `margin-left: auto; margin-right: auto; text-align: center; max-width: 820px–850px;` để đảm bảo thẻ block luôn nằm chính giữa tâm container, kết hợp inline style cho các component landing nhạy cảm.

## 8. Bài Học Về Vận Hành Content Engine & Batch Rewrite (Anti-AI Slop SOP)
- **Tách Biệt Khâu Khám Phá & Khâu Viết Thực Tế**: Không bao giờ viết ngay khi chưa audit và chưa chốt Content Master Plan. Phối hợp 10 Subagents giúp phân tích đa chiều từ Search Intent, Kiến trúc liên kết nội bộ, Chuẩn chứng cứ cho tới Rà soát Red Team.
- **Quy Hoạch Cụm Chủ Đề (Topic Cluster) Để Diệt Trừ Cannibalization**: Các bài viết tương đồng (như Tạo Maps vs Video xác minh, Web bán hàng vs Web tư vấn) phải được phân vai dứt điểm (Pillar vs Supporting) và đổi góc nhìn (Angle Pivot) trước khi bắt tay vào viết.
- **Tiêu Chuẩn 10 Điểm Của Bài Viết Chuyển Đổi**:
  1. *Answer First (100-180 từ đầu)*: Giải quyết dứt điểm thắc mắc, đưa ra kết luận ngay.
  2. *Context & Boundary*: Nêu rõ ai nên làm, ai chưa nên làm.
  3. *LocalMate POV*: Luận điểm độc lập, bảo vệ quyền sở hữu chính chủ 100%.
  4. *Breakdown*: Giải phẫu bình dân theo ngôn ngữ bác thợ.
  5. *Example*: Tình huống có địa chỉ, ngành nghề thật tại Việt Nam.
  6. *Decision Support*: Checklist, ma trận so sánh, bảng đối soát chi phí.
  7. *Trade-off*: Được gì và mất gì, chi phí ẩn.
  8. *Mistakes*: Sai lầm phổ biến khi triển khai tại hiện trường.
  9. *Action Plan*: Kế hoạch 24h & 7 ngày.
  10. *Contextual CTA*: Dẫn dắt tự nhiên về dịch vụ LocalMate tương ứng (`/giai-phap/*`).
- **Nâng Cấp CMS Thành Editorial Dashboard Chuyên Nghiệp**: Bảng danh sách bài viết phải phản ánh đúng các chỉ số nghiệp vụ (Search Intent, Pillar, Quality Gate PASS/Review, Số từ, Liên kết nội bộ). Trình soạn thảo cần hỗ trợ bộ lọc kiểm tra thời gian thực (Real-time Slop Detector) để ngăn chặn từ sáo rỗng ngay khi gõ phím.

## 9. Bài Học Về Local SEO, Commercial Intent & Chống Bẫy Doorway Pages (SME Lead Engine)
- **Tuyệt Đối Tránh Bẫy "Traffic-Only" / Học Thuật Phương Tây**: Chủ tiệm SME không tìm "Entity SEO" hay "Thuật toán đấu giá Vickrey Google Ads". Họ chỉ tìm "cách có khách gọi quanh khu vực", "sửa web bị đắp chiếu", "cứu Google Maps bị khóa". Mọi nội dung kỹ thuật phải được phiên dịch sang ngôn ngữ bác thợ và nỗi đau mất tiền thực tế.
- **Cảnh Báo Đỏ Về Doorway Pages Tại Việt Nam**: Tuyệt đối không nhân bản trang dịch vụ theo từng quận/huyện bằng cách Find & Replace địa danh (dễ bị Google Spam Update phạt nặng). Mỗi location page phải là 1 Case Study thực tế có hình ảnh thi công, địa chỉ khách hàng thật và nhân sự phụ trách khu vực.
- **Giải Quyết Lỗ Hổng Đứt Gãy Chuyển Đổi (The Conversion Fracture)**: Bài viết có hay đến mấy mà cuối bài chỉ để 1 dòng hyperlink text thuần thì tỷ lệ mất Lead lên tới 98%. Bắt buộc phải triển khai hệ thống CTA Đa Tầng (Multi-tier CTA): Contextual Note, Lead Magnet (File mẫu Excel / Checklist PDF đổi Zalo), Audit Tool CTA (Scan web miễn phí), Risk-Reversal Offer (Xem demo 0đ trước khi ký) và Floating Action Button (Hotline/Zalo) dính trên di động.
- **Hành Vi Khách Hàng SME Việt Nam Là Zalo & Hotline**: Khách địa phương không để lại email chờ 24h. Điểm chốt chuyển đổi số 1 luôn là nút gọi điện thoại và nút chat Zalo trực tiếp, kèm mã VietQR thanh toán nhanh.

## 11. Bài Học Về Kiến Trúc Thông Tin, Đồ Thị Liên Kết & Thẩm Quyền Chủ Đề (Subagent 6 - Link Graph Engineer)
- **Căn Bệnh Chuỗi Xích Đơn Luồng (The Daisy-Chain Anti-Pattern)**:
  - Khi seed bài viết hàng loạt, xu hướng phổ biến là nối bài n sang bài n+1 (1 -> 2 -> 3 -> 4 -> 5 -> 1). Kết quả tạo ra các vòng lặp bẫy bot khép kín (Spider Trap Loop) tích tụ PageRank ảo tại một cụm (như Cụm Website PR > 0.05) nhưng chặn đứng dòng chảy thẩm quyền sang các cụm khác.
  - Khắc phục: Phải chuyển sang mô hình **Hub-and-Spoke kết hợp**: Bài Pillar là Hub tỏa liên kết xuống tất cả Supporting; 100% Supporting bắt buộc phải có Reverse Upward Link trỏ ngược lên Pillar để tích tụ Topical Authority.
- **Thảm Họa Orphan Pillar (Trường Hợp Bài 13 & Bài 06)**:
  - Bài 13 là Pillar chính của Cụm Local SEO nhưng bị bỏ quên (In-degree = 0), khiến toàn bộ các bài con (Bài 14, 15) chịu cảnh đói PageRank (PR 0.0050 - 0.0071). Bài 06 (10 lỗi website làm mất khách) cũng bị cô lập do chuỗi bài 5 trỏ ngược về 1.
  - Bài học: Bắt buộc phải có Audit Script quét Adjacency Matrix tự động (`scripts/analyze_graph.cjs`) trước khi đưa nội dung vào vận hành. Mọi bài Pillar phải nhận link từ Master Cornerstone và từ bài chuyển tiếp của cụm trước đó.
- **Thoát Khỏi Bẫy URL Alias Chung Chung (Direct-to-Canonical Conversion)**:
  - Việc 100% bài viết chỉ link về 5 alias `/giai-phap/*` làm lu mờ các trang đích chuyển đổi cao trong `src/App.tsx`. Cần phân bổ chính xác: bài chi phí -> `/bang-gia`, bài bắt đầu nhỏ -> `/landing-490k`, bài lỗi -> `/tieu-chuan-audit` hoặc `/khao-sat-du-an`, bài Entity/AI -> `/dich-vu/geo`.
## 12. Bài Học Về Kiến Trúc & Vận Hành CMS Quản Trị Thực Dụng (Full-Stack Refactor & R2 Pipeline)
- **Tối Ưu Ảnh Tự Động Client-Side Sang WebP & Deduplication Hash**:
  - Không cần đầu tư hạ tầng xử lý ảnh backend phức tạp hay dịch vụ ngoài tốn phí. Nén canvas client-side sang WebP (quality 0.82) và tính hash SHA-256 ngay trên trình duyệt trước khi upload giúp giảm 65–85% dung lượng lưu trữ R2 và chống hoàn toàn việc tải ảnh trùng lặp.
  - Luôn lưu trữ `width` và `height` trong database để render kèm thẻ `<img>`, triệt tiêu hoàn toàn hiện tượng nhảy khung hình giật layout (Cumulative Layout Shift - CLS) theo chuẩn Core Web Vitals.
- **Cơ Chế Bảo Vệ Tài Sản Số (Asset Delete Protection Guardrail)**:
  - Khi xóa một media trong R2, bắt buộc kiểm tra xem asset id hoặc URL đó có đang được gắn làm `featured_image_id` hoặc xuất hiện trong `rendered_html` của bất kỳ bài viết nào hay không. Nếu có, server phải chặn xóa và trả về danh sách các bài viết đang bị ảnh hưởng, trừ khi có cờ `force=true`.
- **Thiết Kế Post Editor Không Gây Choáng Ngợp (8-Tab Progressive Disclosure)**:
  - Một CMS thực dụng không được bắt người viết nhìn thấy cùng lúc 50 trường dữ liệu (Title, Slug, SEO, OG, GEO, FAQ, Schema, CTA...). Việc chia thành 8 tabs độc lập (Bài Viết, SEO On-Page, GEO AI, Mạng Xã Hội, Schema, CTA Chuyển Đổi, Gợi Ý Links, Lịch Sử) giúp người dùng tập trung hoàn thành nội dung trước, sau đó mới tối ưu từng tầng.
- **Tính Điểm SEO & GEO Bằng Thuật Toán Xác Định (Deterministic Scoring)**:
  - Tuyệt đối không dùng AI API hay LLM bên ngoài để chấm điểm bài viết (gây chậm, tốn chi phí và ảo giác). Sử dụng bộ 10 luật on-page rõ ràng (độ dài title, meta description, heading hierarchy, internal link, thin content, featured image ALT) và GEO Readiness (Answer-First, Main Question, Entities, FAQ) cho ra kết quả tức thì ngay khi gõ phím.
  - Minh bạch hóa: Không bao giờ tuyên bố đây là "Google Score" hay "Đảm bảo ChatGPT trích dẫn 100%".
- **Dashboard Định Hướng Hành Động (Action-Oriented Dashboard)**:
  - Loại bỏ các biểu đồ vanity metrics giả lập. Dashboard phải trả lời câu hỏi: *"Hôm nay tôi cần sửa gì?"* (Ví dụ: 12 ảnh thiếu ALT, 3 ảnh quá khổ, 5 bài thiếu mô tả). Mỗi thẻ vấn đề phải là 1 hyperlink click chuyển thẳng vào bộ lọc tương ứng để xử lý dứt điểm.
- **Phục Vụ Chuyển Đổi Thực Tế (Lead Generation Engine)**:
  - CMS không chỉ để SEO đọc. Mỗi bài viết phải có khả năng gắn CTA chuyển đổi có ngữ cảnh (end, middle, before-conclusion), có khả năng theo dõi lượt hiển thị (Impression) và lượt bấm (Click) để đo lường tỷ lệ chuyển đổi thực tế.

