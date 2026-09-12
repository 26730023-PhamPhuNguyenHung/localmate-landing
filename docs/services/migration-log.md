# Nhật Ký Chuyển Đổi Kiến Trúc Dịch Vụ (Services Architecture Migration Log)

> **Trạng thái:** Active SSOT  
> **Phiên bản:** 2.0.0  
> **Ngày khởi tạo:** 13/09/2026  
> **Kiến trúc sư phụ trách:** Docs SSOT Architect  
> **Hồ sơ liên quan:** `information-architecture.md`, `service-taxonomy.md`, `messaging-guide.md`, `solution-template.md`, `pricing-model.md`, `url-mapping.md`.

---

## 1. Bối Cảnh & Kết Quả Đánh Giá Hiện Trạng (Baseline Audit)

Trước tháng 09/2026, website Localmate phát triển qua nhiều giai đoạn thử nghiệm và bổ sung tính năng theo nhu cầu thị trường. Điều này dẫn đến một số vấn đề nghiêm trọng về Kiến trúc Thông tin (Information Architecture) và Định vị Thương hiệu:

### 1.1. Các vấn đề cốt lõi được phát hiện:
1. **Quá tải thuật ngữ chuyên ngành (Jargon Overload):**
   - Các thuật ngữ kỹ thuật như `GEO`, `AEO`, `SEO AI Overviews`, `SEO ChatGPT`, `Entity Semantic`, `Schema JSON-LD`, `PageSpeed Optimization` bị đặt ngang hàng trên thanh điều hướng với các nhu cầu cốt lõi.
   - Khách hàng SME, chủ tiệm và chủ phòng khám cảm thấy bối rối, không thể tự xác định mình cần dịch vụ nào.
2. **Cấu trúc danh mục phẳng (Flat Catalog Directory):**
   - Trang `/dich-vu` hiển thị danh sách từ 15 đến 40 dịch vụ vụn vặt dạng thẻ lưới (grid) giống như một chợ đồ cũ hoặc danh mục linh kiện, thiếu câu chuyện giải pháp đồng hành.
3. **Phân nhánh tệp khách hàng quá sớm (Premature Persona Branching):**
   - Xuất hiện xu hướng tạo nhánh riêng cho từng ngành nghề (`Dành cho Gara`, `Dành cho Nha khoa`, `Dành cho F&B`) dẫn đến việc nhân bản mã nguồn và trùng lặp nội dung nghiêm trọng.
4. **Giọng điệu tiếp thị (Messaging) chưa chuẩn mực:**
   - Xuất hiện một số cụm từ mang tính công kích đối thủ ("agency giam tài khoản", "sale đẩy intern", "chém giá") làm giảm tính cao cấp và uy tín của Localmate.
   - Tồn tại các cam kết thiếu căn cứ ("100%", "24/7 vĩnh viễn", "cam kết Top 1").
5. **Mô hình giá chưa tách bạch:**
   - Chưa làm rõ ranh giới giữa chi phí nhân công thiết lập (Setup), phí duy trì tùy chọn (Care) và chi phí nạp thẳng cho nền tảng bên thứ ba (Google/Meta/Nhà đăng ký tên miền).

---

## 2. Mục Tiêu Tái Kiến Trúc (Architectural Goals)

1. **Chuẩn hóa thành 5 Trụ Cột Giải Pháp (5 Solution Pillars):**
   - `01. Xây Nền Tảng Số` (Website & Hiện diện số)
   - `02. Được Khách Hàng Tìm Thấy` (Google Search, Maps & AI Search)
   - `03. Thu Hút Khách Hàng` (Quảng cáo & Chuyển đổi cuộc gọi)
   - `04. Vận Hành Tự Động Hóa` (Thông báo đơn & Quy trình nhẹ)
   - `05. Chăm Sóc & Đồng Hành` (Kỹ thuật viên duy trì định kỳ)
2. **Kỹ thuật phục vụ giải pháp:** Đưa GEO, AEO, Schema, Core Web Vitals về đúng tầng Năng lực kỹ thuật (Capability/Technique) bên trong Trụ cột.
3. **Khách hàng sở hữu 100% tài sản:** Xuyên suốt mọi tài liệu và hợp đồng khẳng định quyền làm chủ mã nguồn, tên miền, tài khoản quảng cáo của khách hàng.
4. **Bảo toàn 100% giá trị SEO:** Giữ nguyên các URL vệ tinh đã có traffic/backlink (`/dich-vu/geo`, `/dich-vu/aeo`...) nhưng định vị chúng thành Landing Page chuyên sâu bổ trợ, gắn liên kết nội bộ về Trụ cột giải pháp chính.

---

## 3. Lộ Trình Triển Khai Chuyển Đổi (5-Phase Migration Roadmap)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      LỘ TRÌNH 5 GIAI ĐOẠN TÁI KIẾN TRÚC                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│ GIAI ĐOẠN 1: THIẾT LẬP TÀI LIỆU SSOT (Docs Architecture)          [HOÀN THÀNH]  │
│ -> Biên soạn 7 tài liệu chuẩn mực tại docs/services/                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│ GIAI ĐOẠN 2: CHUẨN HÓA DATA MODEL (Backend / TypeScript Schemas)  [TIẾP THEO]   │
│ -> Tái cấu trúc Solution, Capability, Offer, UseCase trong src/data/           │
├─────────────────────────────────────────────────────────────────────────────────┤
│ GIAI ĐOẠN 3: XÂY DỰNG UI COMPONENTS & TEMPLATE CHUẨN              [KẾ HOẠCH]    │
│ -> SolutionPageTemplate 12 sections, Mega Menu, Services Hub mới               │
├─────────────────────────────────────────────────────────────────────────────────┤
│ GIAI ĐOẠN 4: ROUTING, CANONICAL & INTERNAL LINK AUDIT             [KẾ HOẠCH]    │
│ -> Cập nhật src/App.tsx, Breadcrumbs, chuyển hướng 301 và sitemap              │
├─────────────────────────────────────────────────────────────────────────────────┤
│ GIAI ĐOẠN 5: KIỂM THỬ GIAO DIỆN & NGHIỆM THU RUNTIME              [KẾ HOẠCH]    │
│ -> Responsive matrix (Mobile, 14" Laptop 125%), build test, console audit      │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Nhật Ký Sự Kiện Chi Tiết (Milestone Event Log)

### Mốc: 13/09/2026 — Khởi Tạo Toàn Diện Bộ Tài Liệu SSOT Hệ Thống Dịch Vụ
- **Người thực hiện:** Docs SSOT Architect
- **Hành động:**
  - Khởi tạo thư mục gốc `docs/services/`.
  - Biên soạn tài liệu `docs/services/information-architecture.md`: Xác lập phân tầng 5 lớp (Jobs to be Done → Outcomes → Solution Pillars → Capabilities → Deliverables), sơ đồ đối chiếu kiến trúc cũ và mới.
  - Biên soạn tài liệu `docs/services/service-taxonomy.md`: Định nghĩa chi tiết 5 Solution Pillars, rà soát 25+ Capabilities kỹ thuật và thiết lập ngân hàng Use Cases liên ngành (Phòng khám, Gara, F&B, Dịch vụ tại nhà, Doanh nghiệp B2B).
  - Biên soạn tài liệu `docs/services/messaging-guide.md`: Ban hành bộ quy tắc giọng điệu điềm tĩnh, hiểu bài toán SME, loại bỏ toàn bộ từ ngữ công kích đối thủ và cam kết ảo.
  - Biên soạn tài liệu `docs/services/solution-template.md`: Xây dựng chuẩn thiết kế 12 section thống nhất cho mọi trang giải pháp, tích hợp tiêu chuẩn kỹ thuật Light Mode, chống giật layout và kiểm thử responsive.
  - Biên soạn tài liệu `docs/services/pricing-model.md`: Minh bạch hóa mô hình 3 dòng tiền (Setup Fee + Monthly Recurring Care + Ad Spend/Third-party).
  - Biên soạn tài liệu `docs/services/url-mapping.md`: Lập bảng đối chiếu URL cũ sang mới, xác định vai trò Trang Trụ Cột vs Trang Vệ Tinh SEO bổ trợ, cấu hình chuyển hướng 301 và thẻ Canonical.
  - Biên soạn tài liệu `docs/services/migration-log.md`: Ghi nhận toàn bộ nhật ký chuyển đổi và các bài học kinh nghiệm.
- **Kết quả:** Hệ thống tài liệu SSOT hoàn chỉnh 7/7 tệp, được lưu trữ tại `D:\03-Startups-Products\localmate\new\docs\services\`.

---

## 5. Bảng Đối Chiếu Trạng Thái Trước & Sau Tái Kiến Trúc (Before vs After)

| Tiêu Chí So Sánh | Trạng Thái Cũ (Trước Tháng 09/2026) | Trạng Thái Mới (Chuẩn SSOT 2.0.0) |
| :--- | :--- | :--- |
| **Phân loại dịch vụ** | 15–40 dịch vụ kỹ thuật phẳng, ngang hàng. | 5 Solution Pillars hướng đến kết quả kinh doanh rõ ràng. |
| **Vị trí của GEO / AEO / AI** | Chiếm trọn menu chính, gây nhiễu và hiểu lầm. | Được định vị đúng tầng Capability bên trong Pillar "Được tìm thấy". |
| **Tâm lý khách hàng** | Phải tự tìm hiểu thuật ngữ mới biết mình cần gì. | Đọc vào thấy ngay bài toán của mình trong 5 giây đầu tiên. |
| **Xử lý ngành nghề** | Có nguy cơ đẻ nhánh riêng cho từng ngành (Gara, Phòng khám...). | Ngành nghề chỉ là Use Case / Tình huống minh họa trong từng Solution. |
| **Giọng điệu văn bản** | Có từ ngữ công kích đối thủ ("chém giá", "giam tài khoản"). | Điềm tĩnh, tự tin, tôn trọng thị trường, khẳng định bằng tài sản sở hữu. |
| **Cam kết kết quả** | Cam kết Top 1, bảo hành vĩnh viễn không kiểm chứng. | Định lượng bằng chỉ số thực (lượt bấm gọi, vị trí hiển thị, mã nguồn bàn giao). |
| **Minh bạch chi phí** | Dễ gây hiểu lầm là trói buộc phí hàng tháng. | Tách bạch 3 cột: Phí làm ban đầu, Phí chăm sóc tùy chọn, Tiền nạp quảng cáo. |
| **Cấu trúc URL & SEO** | Nguy cơ tự dẫm chân từ khóa (Keyword Cannibalization). | Phân định rõ Trang Trụ Cột (Pillar) và Trang Vệ Tinh (Satellite SEO). |

---

## 6. Phân Tích Rủi Ro & Kế Hoạch Ứng Phó (Risk Management)

1. **Rủi ro rớt thứ hạng SEO khi thay đổi cấu trúc URL:**
   - *Biện pháp:* Giữ nguyên các URL vệ tinh có organic traffic (`/dich-vu/geo`, `/dich-vu/aeo`, `/landing-490k`), chỉ cập nhật nội dung cho khớp giọng điệu và gắn breadcrumb/canonical chuẩn. Sử dụng chuyển hướng 301 vĩnh viễn cho các alias phụ.
2. **Rủi ro gián đoạn trải nghiệm người dùng cũ:**
   - *Biện pháp:* URL `/dich-vu` vẫn hoạt động bình thường nhưng chuyển hướng nhẹ sang giao diện Hub 5 giải pháp mới, giúp người dùng tiếp cận nhanh hơn thay vì phải lướt qua bảng danh mục dài dặc.
3. **Rủi ro lệch tông giọng giữa các lập trình viên và biên tập viên:**
   - *Biện pháp:* Sử dụng `messaging-guide.md` làm tiêu chuẩn bắt buộc (Gatekeeper Rule) trước khi nghiệm thu bất kỳ đoạn mã giao diện hay bài viết nào.

---

## 7. Bài Học Kinh Nghiệm (Lessons Learned)

> **Ghi nhận vào Trí nhớ Hệ thống (`.agents/`):**  
> 1. *Đừng bán "cái khoan", hãy bán "cái lỗ trên tường":* Khách hàng doanh nghiệp địa phương không mua JSON-LD hay Cloudflare Worker, họ mua sự yên tâm rằng khách tìm đường trên điện thoại sẽ tới đúng địa chỉ tiệm của họ.  
> 2. *Sự minh bạch là vũ khí chuyển đổi mạnh nhất:* Thay vì dùng chiêu trò mập mờ để ép khách hàng ký hợp đồng duy trì, việc công bố rõ "Bạn sở hữu 100% mã nguồn và có thể tự quản lý" lại chính là lý do khiến khách hàng tin tưởng và tự nguyện sử dụng gói đồng hành kỹ thuật của Localmate.  
> 3. *Tách biệt rõ ràng giữa IA cốt lõi và Landing Page phục vụ tìm kiếm:* Giữ cho thanh điều hướng tinh gọn (chỉ 5 giải pháp lớn), trong khi vẫn duy trì các trang đích chuyên sâu cho thuật toán tìm kiếm mà không làm ô nhiễm trải nghiệm người dùng thực tế.
