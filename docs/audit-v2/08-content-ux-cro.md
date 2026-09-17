# Báo Cáo Audit Chuyên Sâu: Content UX & Tỷ Lệ Chuyển Đổi (CRO) Trang Đọc Bài Viết

> **Người thực hiện:** Subagent 8 — Content UX & CRO Specialist  
> **Phạm vi khảo sát:** `src/pages/ArticleDetailPage.tsx`, `src/pages/PostPreviewPage.tsx`, `src/components/layout/`, `src/components/ui/`, `src/styles/globals.css`, `src/styles/tokens.css`, `src/data/articlesData.ts`, `src/cms/types.ts`  
> **Tiêu chuẩn thiết kế:** Light Mode chuẩn mực (nền sáng chữ đậm, cấm glassmorphism, scrollbar-gutter stable, text-wrap pretty/balance, WCAG 2.1 AA).

---

## 1. Đánh Giá Hiện Trạng UI/UX Của ArticleDetailPage (Desktop & Mobile)

Qua kiểm tra trực tiếp mã nguồn `src/pages/ArticleDetailPage.tsx` và hệ thống CSS của LocalMate, chúng tôi ghi nhận trang bài viết hiện tại đã có cấu trúc cơ bản nhưng đang bộc lộ nhiều hạn chế lớn về mặt trải nghiệm đọc (Content UX) và khả năng chuyển đổi người đọc thành khách hàng tiềm năng (CRO).

### 1.1. Khu vực Above the Fold (5 giây đầu tiên)
- **Tiêu đề (`<h1>`)**: Sử dụng inline style `fontSize: 'clamp(1.75rem, 4vw, 2.3rem)'`, `fontWeight: 800`, `lineHeight: 1.3`. Tiêu đề có độ tương phản tốt với nền sáng (`var(--color-text)` trên nền trắng `#ffffff`), tuy nhiên chưa áp dụng chuẩn token fluid typography `var(--font-size-h2)` hay `var(--font-size-h1)` của `tokens.css`.
- **Metadata bài viết**:
  ```tsx
  // ArticleDetailPage.tsx (Dòng 176 - 194)
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
      {categoryName}
    </span>
    <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
      <Clock size={14} /> {readTime}
    </span>
    <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
      <Calendar size={14} /> Cập nhật: {updatedAt}
    </span>
  </div>
  ```
  *Nhận xét*: Có danh mục, thời gian đọc và ngày cập nhật. Nhưng **thiếu phân định giữa Ngày xuất bản gốc và Ngày cập nhật mới nhất**. Đối với nội dung kiến thức kỹ thuật (Google Ads, Google Maps), người dùng cần biết bài viết này mới được cập nhật hay là bài cũ từ năm trước.
- **Tín hiệu Tác giả & Thẩm định (E-E-A-T)**:
  ```tsx
  // ArticleDetailPage.tsx (Dòng 210 - 230)
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.85rem 1.25rem', backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
      <User size={20} />
    </div>
    <div>
      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text)' }}>{authorName}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{authorRole}</div>
    </div>
  </div>
  ```
  *Nhận xét*: Sử dụng icon `User` màu xám vector chung chung. Không có ảnh chân dung thật, không có số năm kinh nghiệm, không có huy hiệu "Đã kiểm duyệt chuyên môn" (Peer-reviewed by Tech Lead), làm giảm độ tin cậy đối với chủ doanh nghiệp tìm kiếm giải pháp thực chiến.
- **Khối Tóm tắt (Summary / TLDR)**:
  ```tsx
  // ArticleDetailPage.tsx (Dòng 232 - 248)
  {summary && (
    <div style={{ backgroundColor: '#f8fbfa', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '1.025rem', color: 'var(--color-text)', lineHeight: 1.65, fontWeight: 500, marginBottom: '2rem' }}>
      {summary}
    </div>
  )}
  ```
  *Nhận xét*: Chỉ là một khối text văn xuôi với thanh viền xanh bên trái. **Không đạt tiêu chuẩn Answer-First**: không có huy hiệu nhận diện "Tóm tắt trong 30 giây", không tách thành các bullet points mấu chốt, không giúp người bận rộn nắm ngay cốt lõi trong 5 giây đầu.

---

### 1.2. Typography & Độ Dễ Đọc (Content Typography & Rhythm)
- **Inline Style tràn lan**: Trang đang phụ thuộc nặng nề vào inline style thay vì hệ thống token lớp. Điều này gây khó khăn cho việc bảo trì và không tận dụng được sức mạnh caching và media queries của CSS.
- **Thẻ nội dung động (`rendered_html`) bị thả nổi CSS**:
  ```tsx
  // ArticleDetailPage.tsx (Dòng 298 - 306)
  <div
    className="article-rendered-body"
    dangerouslySetInnerHTML={{ __html: cmsPost!.rendered_html }}
    style={{
      fontSize: '1.05rem',
      lineHeight: 1.8,
      color: '#334155'
    }}
  />
  ```
  *Lỗ hổng nghiêm trọng*: Class `.article-rendered-body` **hoàn toàn không được định nghĩa trong bất kỳ file CSS nào** (`globals.css`, `tokens.css`, `geo-landing.css`). Do đó, các thẻ con do CMS sinh ra như `<h2>`, `<h3>`, `<blockquote>`, `<table>`, `<ul>`, `<code>`, `<figure>` đều hiển thị theo browser default hoặc CSS reset cơ bản:
  - `table` không có bo viền, không có màu nền thead, không có zebra striping.
  - `blockquote` không có styling trích dẫn chuyên gia.
  - Khoảng cách giữa các đoạn (`p`) không được kiểm soát chặt chẽ.
- **Độ rộng dòng đọc (Measure)**: Khối chứa chính có `maxWidth: '800px'`. Trong khi chuẩn quốc tế tối ưu cho đọc văn bản tiếng Việt là 65–72 ký tự/dòng (`~680px - 720px`). Chiều rộng 800px trên màn hình máy tính 1080p khiến mắt người đọc phải đảo quá xa sang hai bên, gây mỏi mắt khi đọc bài dài trên 1.500 từ.

---

### 1.3. Khả Năng Quét Nhanh (Skimability trong 30 Giây)
Một chủ doanh nghiệp nhỏ hoặc chủ tiệm bận rộn khi mở bài viết thường chỉ có 30 giây để quét tìm 4 thông tin sống còn:
1. **Câu trả lời ngay lập tức**: Vấn đề này là gì? $\rightarrow$ *Hiện tại: Phải đọc qua nhiều đoạn dạo đầu.*
2. **Có nên làm không?**: Lợi ích ROI và rủi ro nếu bỏ qua? $\rightarrow$ *Hiện tại: Không có bảng so sánh Cost/Benefit.*
3. **Làm thế nào?**: Quy trình các bước thực hiện? $\rightarrow$ *Hiện tại: Chỉ có danh sách đoạn văn thông thường.*
4. **Khi nào thì nên thuê LocalMate làm thay?**: Điểm giới hạn của việc tự làm? $\rightarrow$ *Hiện tại: Không có khối Executive Decision (Tự làm vs Thuê).*

Trang hiện tại chưa có các điểm neo thị giác (Visual Anchors) như:
- Metric Chips (ví dụ: "Tiết kiệm 30% ngân sách", "Thời gian triển khai: 15 phút").
- Callout POV độc quyền của LocalMate (Ví dụ: "Quan điểm thực chiến từ kỹ thuật viên").
- Checklist tự đánh giá có thể tương tác (Interactive Checklist).

---

### 1.4. Tràn Màn Hình Di Động (Table Responsiveness & Horizontal Overflow)
- **Rủi ro vỡ khung trên Mobile 390px / 430px**: Các bài so sánh (ví dụ: So sánh Google Ads thông minh vs Tìm kiếm thủ công, Bảng giá vị trí Maps) chứa thẻ `<table>`. Do `.article-rendered-body` không có wrapper `overflow-x: auto` và bảng không có `min-width` kết hợp `white-space`, bảng sẽ bung rộng ra ngoài viền màn hình di động 390px, vi phạm nghiêm trọng quy tắc cốt lõi:
  $$\text{scrollWidth} \le \text{innerWidth}$$
- Thẻ `<img>` trong CMS post chưa được ép `max-width: 100%; height: auto; display: block; border-radius: 12px;`, có thể gây tràn khi ảnh có kích thước gốc lớn hơn bề rộng viewport.

---

### 1.5. Các Thành Phần Tương Tác (Interactive Elements)
- **Mục Lục (Table of Contents - TOC)**:
  ```tsx
  // ArticleDetailPage.tsx (Dòng 262 - 294)
  {tocItems.length > 0 && (
    <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
        <BookOpen size={18} color="var(--color-primary)" /> Mục Lục Hướng Dẫn
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {tocItems.map((toc, idx) => (
          <li key={idx}><a href={`#${toc.id}`} ...>{toc.title}</a></li>
        ))}
      </ul>
    </div>
  )}
  ```
  - *Điểm yếu 1*: Nằm cố định ở đầu bài viết. Khi người dùng cuộn xuống đọc nội dung dài 2.000 từ, TOC biến mất hoàn toàn.
  - *Điểm yếu 2*: Không có cơ chế **ScrollSpy** để sáng đèn (active state) theo vị trí người dùng đang đọc.
  - *Điểm yếu 3*: Trên điện thoại, danh sách 6-8 mục lục chiếm trọn một màn hình cuộn đầu tiên nhưng **không thể thu gọn (Collapsible)**, đẩy nội dung chính xuống quá sâu.
  - *Điểm yếu 4*: Regex trích xuất TOC trong CMS chỉ bắt `<h2>`, bỏ qua `<h3>`, làm mất tính phân tầng của tài liệu kỹ thuật.
- **Thanh Tiến Trình Đọc (Reading Progress Bar)**: Hoàn toàn chưa có. Người đọc không ước lượng được mình đã đọc được bao nhiêu % bài viết.
- **FAQ Accordion bị "bỏ rơi"**: Trong file `src/data/articlesData.ts`, mỗi bài viết đều được biên soạn mảng `faqs` rất chất lượng (Ví dụ: "Bao lâu nên vào kiểm tra từ khóa?", "Chặn từ khóa có làm giảm khách gọi không?"). Tuy nhiên trong `ArticleDetailPage.tsx`, **code hoàn toàn không hề render mảng FAQs này ra giao diện**! Đây là sự lãng phí tài nguyên nội dung cực lớn và làm mất đi cơ hội xuất hiện trên Google Rich Results (Schema FAQPage).

---

### 1.6. Vị Trí CTA & Tỷ Lệ Chuyển Đổi (CRO)
- **Khối CTA cuối bài quá chung chung**:
  ```tsx
  // ArticleDetailPage.tsx (Dòng 368 - 386)
  <div style={{ backgroundColor: '#f8fbfa', border: '2px solid var(--color-primary)', borderRadius: 'var(--radius-xl)', padding: '2rem', marginTop: '3.5rem', textAlign: 'center' }}>
    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
      Cần Triển Khai Cho Doanh Nghiệp Của Bạn?
    </h3>
    <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
      LocalMate hỗ trợ dựng demo xem trước 0đ, cam kết bàn giao toàn quyền và không phát sinh chi phí.
    </p>
    <Button variant="primary" size="lg" onClick={handleCTAClick} style={{ fontWeight: 700 }}>
      Nhận Tư Vấn 0đ Ngay
    </Button>
  </div>
  ```
  - Khối CTA này giống hệt nhau ở mọi bài viết. Một người đang đọc bài "Cách lọc từ khóa Google Ads" cần một lời kêu gọi cụ thể: *"Bạn muốn nhận danh sách từ khóa phủ định mẫu cho ngành của bạn?"* hoặc *"Gửi tài khoản để LocalMate audit miễn phí trong 30 phút"*, chứ không phải một câu mời chung chung "Dựng demo xem trước 0đ".
- **CMS Post bị "mù" dịch vụ liên quan ở Sidebar**:
  - Dòng 116: `const targetService = !isCms && article?.cta?.targetServiceSlug ? getServiceBySlug(article.cta.targetServiceSlug) : undefined;`
  - Hệ quả: Khi bài viết được tải từ CMS Database (`isCms = true`), `targetService` luôn là `undefined`. Cột bên phải (Sidebar) chỉ hiển thị danh sách bài viết cùng chủ đề mà **hoàn toàn biến mất Card chào dịch vụ**! Đây là điểm rò rỉ chuyển đổi cực kỳ tai hại.
- **Thiếu In-content Soft CTAs**: Khi người đọc vừa đọc xong một phân tích kỹ thuật phức tạp (ví dụ: cài đặt thẻ Google Tag Manager hoặc chuẩn hóa mã định danh NAP), họ thường có cảm giác *"việc này quá phức tạp, mình không có thời gian tự làm"*. Đó là thời điểm vàng để đặt một Soft CTA (ví dụ: *"Bạn ngại thao tác kỹ thuật? Xem gói cài đặt chuẩn của LocalMate chỉ từ 299k"*). Trang hiện tại không có bất kỳ in-text CTA nào.

---

### 1.7. Định Danh Thị Giác (Visual Identity)
- **Hiện trạng**: Giao diện bài viết hiện nay trông giống một **trang blog cá nhân WordPress thông thường** hơn là một **Sản phẩm Tri thức Chuyên môn Cao cấp (Editorial Knowledge Product)**.
- **Chuẩn mực cần đạt**: Học hỏi từ các ấn phẩm tri thức B2B xuất sắc như *Stripe Atlas, First Round Review, Basecamp Guides, McKinsey Quarterly*:
  - Thiết kế phải toát lên sự chuẩn xác về mặt kỹ thuật, tinh gọn, không rườm rà.
  - Nhãn dán phân loại tri thức rõ ràng (Pillar, Search Intent, Experience Level).
  - Có dấu chứng nhận chất lượng (Editorial Quality Stamp, Fact-check Date).
  - Bảng biểu và Callout có độ hoàn thiện mỹ thuật cao (Clean borders, sharp typography).

---

## 2. Danh Sách 10 Điểm Nghẽn Chuyển Đổi & Trải Nghiệm Đọc

Dưới đây là bảng tổng hợp 10 điểm nghẽn nghiêm trọng nhất được phân cấp độ ưu tiên:

| STT | Điểm Nghẽn | Mức Độ | Vị Trí Code | Tác Động Tiêu Cực Đến Trải Nghiệm & Chuyển Đổi |
|:---:|:---|:---:|:---|:---|
| **01** | **Bảng dữ liệu & Ảnh trong `rendered_html` không chống tràn (Horizontal Overflow)** | **CRITICAL** | `ArticleDetailPage.tsx` d.298-306 | Trên mobile 390px/430px, bảng và ảnh CMS phá vỡ viewport, sinh thanh cuộn ngang toàn trang, vi phạm quy chuẩn UX Google. |
| **02** | **Bố cục lưới Grid co giật ở màn hình trung bình (`minmax(280px, 1fr)`)** | **CRITICAL** | `ArticleDetailPage.tsx` d.171 | Lưới chia cột không cố định tỷ lệ, làm cho Sidebar bị giãn to bằng cột bài viết chính hoặc rớt xuống đáy bất hợp lý. |
| **03** | **Bài viết CMS bị "mù" dịch vụ ở Sidebar (Zero Service Card)** | **HIGH** | `ArticleDetailPage.tsx` d.116, d.392-431 | Bài viết từ CMS không load được `targetService`, sidebar bỏ trống card dịch vụ, làm mất 100% cơ hội chuyển đổi tự nhiên trên desktop. |
| **04** | **Bỏ quên dữ liệu FAQ Accordion không render ra giao diện** | **HIGH** | `ArticleDetailPage.tsx` d.308-364 | Dữ liệu FAQ trong `articlesData.ts` bị bỏ qua, mất đi nội dung giải đáp thắc mắc then chốt và mất Rich Snippet FAQPage trên Google. |
| **05** | **Thiếu Standalone Answer Block / TLDR 30 Giây trên Above-the-Fold** | **HIGH** | `ArticleDetailPage.tsx` d.232-248 | Không áp dụng triết lý Answer-First, người đọc bận rộn không nhận được giá trị trong 5 giây đầu, tỷ lệ thoát trang (bounce rate) tăng cao. |
| **06** | **Thiếu Khối Executive Decision Box ("Tự làm vs Thuê LocalMate")** | **HIGH** | Toàn bộ bài viết | Người đọc nắm được cách làm nhưng không có sự so sánh về thời gian/rủi ro để quyết định thuê dịch vụ, chuyển đổi rơi rụng. |
| **07** | **Mục Lục (TOC) cố định, không ScrollSpy và chiếm trọn màn hình Mobile** | **MEDIUM** | `ArticleDetailPage.tsx` d.262-294 | TOC không cuộn theo người dùng, không thể thu gọn trên di động, đẩy nội dung chính xuống dưới màn hình đầu. |
| **08** | **Thiếu Reading Progress Bar** | **MEDIUM** | Header / Top Container | Người đọc không có phản hồi trực quan về tiến trình đọc của bài viết dài (1.500 - 3.000 từ). |
| **09** | **Tín hiệu E-E-A-T và Thẩm định quá nghèo nàn (Generic User Icon)** | **MEDIUM** | `ArticleDetailPage.tsx` d.210-230 | Thiếu ảnh tác giả, thiếu chứng chỉ chuyên môn, không có thông tin "Kiểm duyệt kỹ thuật bởi ai vào ngày nào", giảm độ uy tín B2B. |
| **10** | **CTA cuối bài rập khuôn, thiếu In-text Micro Hooks & Quick Action** | **MEDIUM** | `ArticleDetailPage.tsx` d.368-386 | Không có nút chat Zalo trực tiếp hỏi nhanh kỹ thuật, CTA cuối bài lặp lại thông điệp "web demo 0đ" không khớp ngữ cảnh bài viết. |

---

## 3. Thiết Kế Đặc Tả Các UI Blocks Mới (Component Specifications)

Để biến trang đọc bài viết thành một **Editorial Knowledge Product** có tỷ lệ chuyển đổi cao, chúng tôi đề xuất bổ sung 6 UI Blocks chuyên biệt sau:

### Block 1: Standalone Answer Block (Khối Trả Lời Nhanh 30 Giây)
- **Mục tiêu**: Phục vụ đối tượng độc giả bận rộn (chủ tiệm, quản lý) cần câu trả lời ngay lập tức (Answer-First Engine).
- **Vị trí**: Đặt ngay sau tiêu đề và thông tin tác giả, trước ảnh đại diện hoặc mục lục.
- **Thành phần**:
  - Badge: `TÓM TẮT TRONG 30 GIÂY • ANSWER-FIRST` (Màu xanh thương hiệu nền dịu `#edf7f1`, chữ `#063d24`).
  - 3–4 gạch đầu dòng then chốt (Key Takeaways) với icon Checkmark tròn màu xanh.
  - Hộp kết luận hành động (Bottom Line): Nhấn mạnh hành động quan trọng nhất cần làm ngay hôm nay.

### Block 2: Executive Decision Box (Bảng Quyết Định: Tự Làm vs Thuê LocalMate)
- **Mục tiêu**: Cầu nối chuyển đổi tâm lý từ "Biết cách làm" sang "Nhận ra việc thuê ngoài tối ưu hơn nhiều".
- **Vị trí**: Đặt ở 2/3 bài viết (sau khi đã hướng dẫn các bước chi tiết).
- **Cấu trúc 2 cột so sánh trực quan**:
  - Cột 1: **Tự Triển Khai (Do-It-Yourself)**:
    - Chi phí tài chính: 0đ.
    - Thời gian tiêu hao: 15–25 giờ tự tìm hiểu và đọc tài liệu.
    - Rủi ro kỹ thuật: Bấm nhầm cài đặt, dính từ khóa rác, bị Google tạm khóa tài khoản hoặc Maps dính án phạt.
    - Phù hợp: Người có nhiều thời gian rảnh và muốn học nghề.
  - Cột 2: **Đồng Hành Cùng LocalMate (Done-For-You / Co-Pilot)**:
    - Chi phí tài chính: Từ 299.000đ – 1.490.000đ trọn gói.
    - Thời gian: Bàn giao chuẩn kỹ thuật trong 24–48 giờ.
    - Đảm bảo: Kỹ sư trực tiếp cài đặt, có báo cáo minh bạch, cam kết không phát sinh chi phí.
    - Phù hợp: Chủ kinh doanh cần hiệu quả ngay để tập trung bán hàng.

### Block 3: Interactive Implementation Checklist (Checklist Thực Thi Tương Tác)
- **Mục tiêu**: Tăng thời gian on-page (Dwell Time) và độ tương tác thực tế của người đọc.
- **Cơ chế**: Cho phép người đọc click vào từng ô checkbox khi họ kiểm tra tài khoản của mình.
- **Thanh trạng thái**: Hiển thị tỷ lệ hoàn thành (Ví dụ: `2/5 bước hoàn thành — Tài khoản của bạn còn 3 lỗ hổng cần vá`).
- **Nút hành động phụ**: "Bạn kẹt ở bước số 3? Nhắn Zalo kỹ thuật viên hỗ trợ miễn phí 5 phút".

### Block 4: SME Cost & Impact Callout (Hộp Định Lượng Chi Phí Thực Tế)
- **Mục tiêu**: Minh bạch hóa con số, đánh trúng tâm lý sợ lãng phí ngân sách của chủ doanh nghiệp nhỏ.
- **Thành phần**:
  - Thẻ 1: *Ngân sách trung bình lãng phí do từ khóa rác*: **1.200.000đ – 3.500.000đ/tháng**.
  - Thẻ 2: *Thời gian trung bình để xử lý chuẩn*: **10 – 15 giờ làm việc**.
  - Thẻ 3: *Chi phí rà soát 0đ từ LocalMate*: **0đ (Hỗ trợ cộng đồng SME)**.

### Block 5: Author & Fact-Check Trust Card (Hộp Minh Chứng Năng Lực Tác Giả & Kiểm Duyệt)
- **Mục tiêu**: Thỏa mãn tiêu chuẩn Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) và xây dựng niềm tin vững chắc.
- **Thành phần**:
  - Ảnh chân dung thật của tác giả.
  - Tên + Chức danh thực tế (Ví dụ: *Nguyễn Văn Hùng — Chuyên viên Kỹ thuật Google Ads & Tracking tại LocalMate, 5 năm kinh nghiệm tối ưu cho 120+ cơ sở địa phương*).
  - Dòng thẩm định: *Bài viết đã được kiểm duyệt thực tế (Fact-checked) bởi Kỹ sư trưởng LocalMate vào ngày 12/08/2026*.
  - Link dẫn tới Hồ sơ năng lực (`/ho-so-nang-luc`).

### Block 6: Floating Reading Bar & Mobile Contextual CTA Strip
- **Trên Desktop**: Một thanh tiến trình mỏng 3px màu xanh thương hiệu (`#0d7647`) chạy sát mép trên màn hình khi người dùng cuộn trang.
- **Trên Mobile**: Thanh liên hệ nhanh đa năng cố định ở đáy màn hình với 3 nút bấm chuẩn công thái học:
  1. Nút gọi điện hotline trực tiếp.
  2. Nút mở Zalo kỹ thuật viên kèm nội dung tự động: *"Chào bạn, mình cần hỗ trợ về bài viết [Tên bài viết]"*.
  3. Nút đăng ký nhận demo / tư vấn giải pháp 0đ.

---

## 4. Code Snippets Đề Xuất Nâng Cấp

### 4.1. Bổ sung CSS Hoàn Chỉnh Cho `.article-rendered-body` trong `src/styles/globals.css`
Đoạn CSS này giải quyết triệt để lỗi tràn khung bảng, tối ưu typography và thiết lập các hộp callout chuẩn Light Mode:

```css
/* ================================================================
   EDITORIAL KNOWLEDGE PRODUCT — ARTICLE BODY & RESPONSIVE ENGINE
   ================================================================ */

.article-rendered-body {
  font-size: clamp(1rem, 0.25vw + 0.95rem, 1.075rem);
  line-height: 1.8;
  color: #1e293b;
  text-wrap: pretty;
  word-break: break-word;
}

/* 1. Paragraphs & Spacing Rhythm */
.article-rendered-body p {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #334155;
  max-width: 68ch;
}

/* 2. Headings Hierarchy */
.article-rendered-body h2 {
  font-size: clamp(1.4rem, 2vw, 1.85rem);
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin-top: 2.75rem;
  margin-bottom: 1rem;
  padding-top: 0.5rem;
  scroll-margin-top: 5rem;
  text-wrap: balance;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.5rem;
}

.article-rendered-body h3 {
  font-size: clamp(1.15rem, 1.5vw, 1.4rem);
  font-weight: 700;
  color: #0f172a;
  line-height: 1.4;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  scroll-margin-top: 5rem;
  text-wrap: balance;
}

/* 3. Lists with Optimal Padding & Spacing */
.article-rendered-body ul,
.article-rendered-body ol {
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
  color: #334155;
}

.article-rendered-body li {
  margin-bottom: 0.6rem;
  line-height: 1.65;
}

.article-rendered-body li strong {
  color: #0f172a;
}

/* 4. Strict Anti-Overflow Responsive Tables */
.article-rendered-body table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;
  font-size: 0.925rem;
  text-align: left;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}

/* Bắt buộc bọc wrapper cho table trong bài viết để chống tràn mobile */
.article-table-container {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1.75rem 0;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.article-table-container table {
  margin: 0;
  border: none;
  min-width: 580px; /* Đảm bảo bảng không bị co dúm trên 390px */
}

.article-rendered-body th {
  background-color: #f8fafc;
  color: #0f172a;
  font-weight: 700;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}

.article-rendered-body td {
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  vertical-align: top;
}

.article-rendered-body tr:last-child td {
  border-bottom: none;
}

.article-rendered-body tr:hover td {
  background-color: #f8fbfa;
}

/* 5. Responsive Images & Figures */
.article-rendered-body img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  margin: 2rem auto;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
}

.article-rendered-body figure {
  margin: 2rem 0;
  text-align: center;
}

.article-rendered-body figcaption {
  font-size: 0.825rem;
  color: #64748b;
  margin-top: 0.5rem;
  font-style: italic;
}

/* 6. Blockquote & Expert Voices */
.article-rendered-body blockquote {
  margin: 1.75rem 0;
  padding: 1.25rem 1.75rem;
  background-color: #f8fafc;
  border-left: 4px solid #0d7647;
  border-radius: 0 12px 12px 0;
  font-size: 1.05rem;
  font-style: normal;
  color: #1e293b;
  line-height: 1.7;
}

.article-rendered-body blockquote p:last-child {
  margin-bottom: 0;
}

/* 7. Code & Inline Monospace */
.article-rendered-body code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
  background-color: #f1f5f9;
  color: #0f172a;
  padding: 0.2rem 0.45rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.article-rendered-body pre {
  background-color: #0f172a;
  color: #f8fafc;
  padding: 1.25rem;
  border-radius: 12px;
  overflow-x: auto;
  margin: 1.75rem 0;
}

.article-rendered-body pre code {
  background: transparent;
  border: none;
  color: inherit;
  padding: 0;
}
```

---

### 4.2. Component: Standalone Answer Block (`src/components/article/AnswerFirstBlock.tsx`)
```tsx
import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

interface AnswerFirstBlockProps {
  summary: string;
  keyTakeaways?: string[];
  bottomLine?: string;
}

export const AnswerFirstBlock: React.FC<AnswerFirstBlockProps> = ({
  summary,
  keyTakeaways = [],
  bottomLine
}) => {
  return (
    <div
      style={{
        backgroundColor: '#f6fbf8',
        border: '1px solid #c6ebd4',
        borderRadius: '16px',
        padding: '1.5rem',
        marginBottom: '2.5rem',
        boxShadow: '0 1px 3px rgba(13, 118, 71, 0.05)'
      }}
    >
      {/* Eyebrow badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.85rem' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#063d24',
            backgroundColor: '#edf7f1',
            padding: '0.3rem 0.65rem',
            borderRadius: '9999px',
            border: '1px solid #c6ebd4'
          }}
        >
          <Zap size={13} color="#0d7647" /> Câu trả lời nhanh trong 30 giây
        </span>
      </div>

      {/* Primary Summary Text */}
      <p style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.6, margin: '0 0 1rem 0' }}>
        {summary}
      </p>

      {/* Key Takeaways Bullets */}
      {keyTakeaways.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: bottomLine ? '1rem' : 0 }}>
          {keyTakeaways.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
              <span style={{ fontSize: '0.925rem', color: '#334155', lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Actionable Bottom Line */}
      {bottomLine && (
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            borderLeft: '3px solid #0d7647',
            fontSize: '0.875rem',
            color: '#0f172a',
            fontWeight: 500
          }}
        >
          <strong>Hành động cốt lõi:</strong> {bottomLine}
        </div>
      )}
    </div>
  );
};
```

---

### 4.3. Component: Executive Decision Box (`src/components/article/ExecutiveDecisionBox.tsx`)
```tsx
import React from 'react';
import { ArrowRight, Clock, ShieldAlert, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface ExecutiveDecisionBoxProps {
  onSelectDoneForYou: () => void;
  diyTime?: string;
  diyRisks?: string[];
  dfyPrice?: string;
  dfyBenefits?: string[];
}

export const ExecutiveDecisionBox: React.FC<ExecutiveDecisionBoxProps> = ({
  onSelectDoneForYou,
  diyTime = '15 - 20 giờ tự nghiên cứu',
  diyRisks = ['Dễ bấm nhầm làm thất thoát ngân sách', 'Mất thời gian mò mẫm kỹ thuật', 'Không có người bảo hành khi gặp sự cố'],
  dfyPrice = 'Chỉ từ 299.000đ trọn gói',
  dfyBenefits = ['Kỹ sư LocalMate cài đặt chuẩn trong 24h', 'Dựng demo xem trước 0đ, ưng ý mới làm', 'Bàn giao 100% quyền quản trị, không giam tài khoản']
}) => {
  return (
    <div
      style={{
        margin: '3rem 0',
        padding: '2rem',
        backgroundColor: '#ffffff',
        border: '2px solid #e2e8f0',
        borderRadius: '20px',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0d7647', backgroundColor: '#edf7f1', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
          GÓC NHÌN QUẢN TRỊ & THỜI GIAN
        </span>
        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
          Nên Tự Làm Hay Giao Cho Kỹ Thuật Viên?
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', maxWidth: '540px', margin: '0 auto' }}>
          Thời gian của chủ doanh nghiệp nên dành cho việc bán hàng và chăm sóc khách. Hãy cân nhắc bài toán chi phí cơ hội:
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {/* Option 1: DIY */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '16px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <Clock size={20} color="#64748b" />
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>Tự triển khai (DIY)</span>
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            0đ vốn tiền mặt
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
              <strong>Thời gian:</strong> {diyTime}
            </div>
            {diyRisks.map((risk, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: '#64748b' }}>
                <ShieldAlert size={15} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{risk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Option 2: LocalMate DFY */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '16px',
            backgroundColor: '#f6fbf8',
            border: '2px solid #0d7647',
            position: 'relative'
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '-12px',
              right: '16px',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              fontSize: '0.7rem',
              fontWeight: 800,
              padding: '0.2rem 0.6rem',
              borderRadius: '9999px',
              textTransform: 'uppercase'
            }}
          >
            Được Khuyên Dùng
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <Sparkles size={20} color="#0d7647" />
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#063d24' }}>Nhờ LocalMate làm trọn gói</span>
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0d7647', marginBottom: '1rem' }}>
            {dfyPrice}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {dfyBenefits.map((benefit, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: '#1e293b' }}>
                <CheckCircle size={15} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={onSelectDoneForYou}
            style={{ width: '100%', fontWeight: 700 }}
          >
            Đăng Ký Tư Vấn 0đ <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </div>
  );
};
```

---

### 4.4. Cải Tiến Cột Cân Bằng Cho Layout Desktop & Mobile trong `ArticleDetailPage.tsx`
Thay thế đoạn grid co giật cũ bằng layout chuẩn 2 cột có độ rộng cố định:

```tsx
/* Thay thế dòng 171: 
   style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '3rem', ... }}
   bằng layout chuẩn Responsive Grid: */

<div
  className="article-layout-grid"
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    alignItems: 'start'
  }}
>
  {/* Main Article Content Column */}
  <article style={{ maxWidth: '740px', width: '100%', margin: '0 auto' }}>
    ...
  </article>

  {/* Sticky Sidebar Column */}
  <aside className="article-sticky-sidebar">
    ...
  </aside>
</div>

<style>{`
  @media (min-width: 1024px) {
    .article-layout-grid {
      grid-template-columns: minmax(0, 740px) 340px !important;
      justify-content: center;
      gap: 3.5rem !important;
    }
    .article-sticky-sidebar {
      position: sticky;
      top: 100px;
    }
  }
`}</style>
```

---

## 5. Kế Hoạch Triển Khai Nâng Cấp (Next Steps)

Để hiện thực hóa toàn bộ các cải tiến trên mà không làm gián đoạn hệ thống hiện tại, khuyến nghị chia làm 2 giai đoạn thực thi:

### Giai đoạn 1: Sửa Lỗi Nguy Cơ Cao & Chống Tràn Khung (High Impact / Fast Fix)
1. Bổ sung trọn bộ CSS cho `.article-rendered-body` và `.article-table-container` vào `src/styles/globals.css`.
2. Sửa layout grid trong `ArticleDetailPage.tsx` sang chuẩn `minmax(0, 740px) 340px` để bảo vệ bố cục.
3. Kích hoạt render mảng `faqs` có sẵn trong `articlesData.ts` bằng component `Accordion`.
4. Bổ sung hàm tự động lấy `targetService` dự phòng cho bài viết CMS (nếu không có thì mặc định gán dịch vụ cốt lõi phù hợp với danh mục).

### Giai đoạn 2: Gia Tăng Chuyển Đổi & Trải Nghiệm Đọc Cao Cấp (CRO & Visual Identity)
1. Thêm `AnswerFirstBlock` (Key Takeaways) vào đầu trang cho cả bài viết Static và CMS.
2. Thêm `ExecutiveDecisionBox` vào cuối phần hướng dẫn kỹ thuật.
3. Tích hợp thanh tiến trình đọc mỏng (`Reading ProgressBar`) ở đầu trang.
4. Nâng cấp Thẻ Tác Giả (Author Trust Card) hiển thị ảnh thật và dấu kiểm định chuyên môn (Fact-checked date).

---

> **Kết luận:** Khi áp dụng đồng bộ các giải pháp trên, trang đọc bài viết của LocalMate sẽ lột xác từ một blog tin tức thông thường trở thành một **cỗ máy tri thức có khả năng giáo dục và chuyển đổi khách hàng mạnh mẽ**, mang lại trải nghiệm đọc mượt mà, đẳng cấp trên cả Desktop lẫn Mobile.
