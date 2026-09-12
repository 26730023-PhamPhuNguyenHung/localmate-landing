# ĐẶC TẢ HỆ THỐNG VẬN HÀNH & KẾ HOẠCH NÂNG CẤP TRANG CHỦ LOCALMATE
**Tài liệu SSOT (Single Source of Truth) phục vụ triển khai**  
**Căn cứ:** `Localmate vận hành.md` & Phân tích hệ thống codebase LocalMate  
**Ngày lập:** 12/09/2026 | **Trạng thái:** Đặc tả chi tiết hoàn tất (Spec Complete)

---

## 1. TỔNG QUAN ĐỊNH VỊ CHIẾN LƯỢC MỚI

### 1.1. Từ Bẫy Giá Rẻ Đến Đối Tác Triển Khai Kỹ Thuật Bền Vững
- **Mô hình cũ:** Tiếp cận đơn thuần từ các dịch vụ nhỏ lẻ giá đáy (*làm web 490k, map 490k, sửa lỗi lẻ 99k*). Nhược điểm: Biên lợi nhuận mỏng, khách hàng không giải quyết được bài toán kinh doanh tổng thể, thiếu dòng tiền định kỳ.
- **Mô hình chiến lược mới:** 
  - **Với Doanh nghiệp nhỏ & Hộ kinh doanh:** Là **"Người đồng hành số tại địa phương"** (One-stop Local Tech Partner), một đầu mối công nghệ duy nhất giải quyết bài toán: Hiện diện số (Website 24h), Gom lead CRM không sót khách, Tự động hóa bớt việc thủ công.
  - **Với Đối tác B2B (Công ty SaaS, Marketing Agency, Nhà phân phối thiết bị):** Là **"Technical Backend & Last-mile Deployment Partner"**. Giúp đối tác đưa sản phẩm từ trạng thái *"đã bán"* sang *"khách hàng thực sự sử dụng được"* thông qua setup, onboarding, migration, integration và mạng lưới kỹ thuật viên tại địa phương.

### 1.2. Triết Lý Vận Hành & Khẩu Hiệu Cốt Lõi
> *"Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."*  
> *"Không nhất thiết phải xây lại những thứ đã tồn tại."*  
> *"Bạn bán sản phẩm. LocalMate triển khai."*  
> *"Bạn nói điều cần làm. LocalMate tìm giải pháp, đúng người và triển khai đến khi hoàn thành."*

---

## 2. CHÂN DUNG KHÁCH HÀNG (3 ICPs B2B + 1 NHÓM SME)

1. **ICP 1 (SaaS & Phần mềm B2B):**
   - *Vấn đề:* Đội sales bán được phần mềm (CRM, POS, ERP, HRM) về các tỉnh nhưng thiếu đội ngũ kỹ thuật tại địa phương để import dữ liệu, cấu hình workflow, phân quyền và training cho khách.
   - *LocalMate giải quyết:* Cung cấp dịch vụ **Software Onboarding** trọn gói (1–3 triệu/khách), giảm tỷ lệ khách hàng bỏ cuộc (churn rate).
2. **ICP 2 (Marketing, Web & Ads Agency):**
   - *Vấn đề:* Có khách hàng nhưng không muốn nuôi đội lập trình viên full-time; thuê freelancer tự do thì trễ hạn, dễ mất tích khi có lỗi phát sinh.
   - *LocalMate giải quyết:* Trở thành **White-label Technical Team** đứng sau agency (làm landing page, tracking, CRM, API, dashboard) với chi phí từ 3–10 triệu/tháng hoặc tính theo ticket.
3. **ICP 3 (Nhà cung cấp thiết bị công nghệ & IoT, POS, Camera, Mạng):**
   - *Vấn đề:* Khách hàng rải rác toàn quốc nhưng chi phí cử kỹ thuật viên từ HN/TP.HCM đi tỉnh quá đắt đỏ và phản hồi chậm.
   - *LocalMate giải quyết:* Cung cấp **Mạng lưới kỹ thuật viên địa phương (Last-mile Deployment Network)**: Khảo sát tại chỗ $\rightarrow$ Lắp đặt $\rightarrow$ Chụp ảnh bằng chứng $\rightarrow$ Khách nghiệm thu $\rightarrow$ Đóng ticket.
4. **Nhóm Doanh nghiệp nhỏ, Cửa hàng & Hộ kinh doanh:**
   - *Vấn đề:* Ngại công nghệ phức tạp, sợ bị vẽ vời tốn tiền, khách hàng rơi rớt vì quản lý thủ công trên sổ sách, Zalo, Facebook.
   - *LocalMate giải quyết:* Xử lý theo Jobs-to-be-Done: Website 24h, Gom lead về 1 bảng điều khiển, Tự động hóa 1 quy trình tốn thời gian.

---

## 3. CẤU TRÚC 5 CORE OFFERS CHI TIẾT

| # | Tên Gói Giải Pháp | Nhóm Đối Tượng | Phạm Vi Thực Hiện | Biểu Phí Chuẩn |
|---|---|---|---|---|
| **01** | **Local Deployment** | Vendor POS, Camera, IoT, Mạng | Khảo sát thực địa, lắp đặt, cấu hình, kiểm tra, chụp ảnh bằng chứng nghiệm thu. | Remote: Từ **500.000đ/job**<br>Onsite: Từ **1.000.000đ/job** |
| **02** | **Software Onboarding** | Công ty SaaS, CRM, Phần mềm | Tạo tài khoản, import dữ liệu, setup pipeline, phân quyền user, training nhân sự. | Từ **1.000.000đ – 3.000.000đ/khách** |
| **03** | **Integration & Automation** | Doanh nghiệp dùng nhiều công cụ rời | Kết nối Web $\rightarrow$ Form $\rightarrow$ Zalo $\rightarrow$ Sheets $\rightarrow$ CRM $\rightarrow$ Báo cáo bằng n8n/Make/API. | Đơn giản: Từ **1.000.000đ**<br>Tiêu chuẩn: **2.000.000đ – 5.000.000đ** |
| **04** | **White-label Technical Team** | Marketing / Ads / Web Agency | Đội kỹ thuật phía sau làm Landing page, Form, Tracking, API, Dashboard dưới tên Agency. | Từ **3.000.000đ – 10.000.000đ/tháng** (hoặc per-ticket) |
| **05** | **LocalMate Deployment Network** | Chuỗi bán lẻ / Tập đoàn công nghệ | Ký 1 hợp đồng duy nhất $\rightarrow$ Dispatch việc KTV 63 tỉnh theo SLA và quy trình QA nghiêm ngặt. | Theo Retainer duy trì + Đơn giá job theo thỏa thuận |

---

## 4. QUY TẮC BẢO TOÀN KIẾN TRÚC & TIÊU CHUẨN THIẾT KẾ

Tuân thủ nghiêm ngặt chỉ đạo của người dùng và các Global Guidelines:
- **Header (`Header.tsx`):** GIỮ NGUYÊN 100% cấu trúc, CSS, Mega Menu 1240px Mona-style, Hotline và các liên kết điều hướng.
- **Footer (`Footer.tsx`):** GIỮ NGUYÊN 100% phong cách MISA/AMIS Light theme, thông tin pháp nhân CÔNG TY TNHH LOCALMATE, MST 4001337934, dải trust certification pills, logo Đã thông báo Bộ Công Thương.
- **Hero Section (`HeroSection.tsx`):** GIỮ NGUYÊN background video seamless boomerang loop tốc độ 0.5x, overlay siêu mỏng chống bạc màu, radial backdrop bảo vệ chữ; CHỈ tinh chỉnh nhẹ Copywriting.
- **100% Light Mode:** Nền sáng (`#ffffff`, `#fbfcfb`), chữ đậm (`#111827`, `#0f172a`), màu chủ đạo Primary Green (`#0d7647`).
- **TUYỆT ĐỐI KHÔNG GLASSMORPHISM:** Không dùng backdrop-filter blur mờ đục. Giao diện card sắc nét, viền rõ ràng, shadow mịn, độ tương phản cao.
- **Bảo toàn chức năng & Tránh hồi quy:** Toàn bộ routing (`/dich-vu`, `/bang-gia`, `/landing-490k`, `/kien-thuc`, `/du-an`) và hệ thống tracking attribution (`leadService.ts`, `tracker.ts`) tiếp tục vận hành trơn tru.

---

## 5. SƠ ĐỒ CẤU TRÚC LAYOUT Ở GIỮA TRÊN HOMEPAGE

```
[ HEADER — Giữ nguyên 100% ]
  │
  ├── 1. HeroSection (Copywriting mới + Video Boomerang loop + Cụm 2 CTA)
  │
  ├── 2. ProblemMapperSection ("Bạn đang cần làm gì?" — 5 Nhóm công việc thực tế)
  │      ├─ 01. Bắt đầu hiện diện (Web 24h, Maps, Kênh liên hệ)
  │      ├─ 02. Có thêm khách hàng (Gom lead CRM không sót khách, tìm khách)
  │      ├─ 03. Bớt việc thủ công (Tự động hóa 1 quy trình, kết nối công cụ)
  │      ├─ 04. Bạn bán - LocalMate triển khai (Đội kỹ thuật cho SaaS/Agency/Vendor)
  │      └─ 05. Chưa biết mình cần gì? (Nói việc muốn làm -> LocalMate giải quyết)
  │
  ├── 3. CoreOffersSection (MỚI: 5 Gói triển khai B2B & Đối tác SaaS/Agency)
  │      ├─ Local Deployment (Khảo sát/lắp đặt tại chỗ từ 500k - 1tr)
  │      ├─ Software Onboarding (Thay đối tác onboarding khách SaaS 1 - 3tr)
  │      ├─ Integration & Automation (Kết nối hệ thống tự động 1 - 5tr)
  │      ├─ White-label Technical Team (Đội kỹ thuật cho Agency 3 - 10tr/th)
  │      └─ Deployment Network (Mạng lưới KTV toàn quốc theo SLA)
  │
  ├── 4. PhilosophySection (MỚI: Triết lý vận hành & Khác biệt)
  │      ├─ Bắt đầu từ công việc (Không cố bán thêm phần mềm)
  │      ├─ Tận dụng thứ đã có (Tích hợp, không xây lại từ đầu)
  │      ├─ Tự động hóa khi có ích (Giảm thao tác tay chân, không làm màu)
  │      └─ Con người ở chỗ cần con người (Tư vấn, kiểm tra, KTV tại địa phương)
  │
  ├── 5. ProcessSection (Quy trình 5 bước minh bạch)
  │      01. Nói điều cần làm → 02. Tìm cách phù hợp → 03. Biết trước phạm vi & giá → 04. Triển khai → 05. Nghiệm thu & bàn giao
  │
  ├── 6. DemoShowcaseSection (Bằng chứng năng lực: "Build / Test công khai")
  │      ├─ Showcase 1: Luồng gom lead Zalo/Sheets tự động
  │      ├─ Showcase 2: Website doanh nghiệp tinh gọn hoàn thành trong 24h
  │      └─ Showcase 3: Hệ thống onboarding khách hàng & cấu hình CRM
  │
  ├── 7. PricingMatrixSection (Bảng giá 41 dịch vụ niêm yết — Giữ nguyên)
  │
  ├── 8. TrustSection (Pháp nhân CÔNG TY TNHH LOCALMATE, MST, Cam kết — Giữ nguyên)
  │
  ├── 9. FAQSection (Bộ câu hỏi thường gặp về mô hình triển khai)
  │
  └── 10. FinalCTASection (Khối kêu gọi hành động cuối: Gửi việc cho LocalMate)
  │
[ FOOTER — Giữ nguyên 100% ]
```

---

## 6. KẾ HOẠCH TRIỂN KHAI MÃ NGUỒN (CODE REFACTORING PLAN)

### Bước 1: Tạo Data Cấu Trúc Mới (`src/data/operationsData.ts`)
Tách biệt dữ liệu và giao diện, khai báo TypeScript interfaces rõ ràng:
- `TaskGroup`: 5 nhóm nhu cầu trong Problem Mapper.
- `CoreOffer`: 5 gói giải pháp B2B & giá niêm yết.
- `PhilosophyPillar`: 4 trụ cột triết lý.
- `OperationalStep`: 5 bước quy trình.
- `ShowcaseCase`: 3 dự án demo "Build-in-public".
- `FAQItem`: Danh sách câu hỏi thực tế.

### Bước 2: Nâng Cấp & Tạo Các Component Layout Ở Giữa
1. **`HeroSection.tsx`**: Tinh chỉnh Headline, Subtitle, Eyebrow, giữ nguyên video và 2 nút CTA điều hướng mượt mà.
2. **`ProblemMapperSection.tsx`**: Tái cấu trúc thành 5 cards đại diện cho 5 nhóm công việc thực tế, click mở LeadModal với dịch vụ tương ứng.
3. **`CoreOffersSection.tsx`** *(Tạo mới)*: Card lưới hiện đại thể hiện 5 Core Offers với icon Lucide, đối tượng phù hợp, quy trình thực hiện, biểu phí to rõ và nút CTA.
4. **`PhilosophySection.tsx`** *(Tạo mới)*: Trình bày 4 trụ cột triết lý "Tại sao là LocalMate?" với layout 4 cột trực quan.
5. **`ProcessSection.tsx`**: Cập nhật copy 5 bước theo format chuẩn của tài liệu vận hành.
6. **`DemoShowcaseSection.tsx`**: Chuyển đổi nội dung theo tinh thần "Build & Test công khai".
7. **`FAQSection.tsx` & `FinalCTASection.tsx`**: Cập nhật câu hỏi thực tế và form kêu gọi hành động.

### Bước 3: Tích Hợp Vào `HomePage.tsx` & Kiểm Thử
- Sắp xếp lại danh sách component trong `src/pages/HomePage.tsx`.
- Chạy `npm run build` để xác minh không có lỗi TypeScript hay lỗi cú pháp.
- Kiểm tra toàn diện trên trình duyệt đa màn hình (Mobile 390px, Tablet 768px, Desktop 1440px).
- Cam kết không có lỗi layout, không text clipping, touch target $\ge 44\text{px}$, không horizontal overflow.
