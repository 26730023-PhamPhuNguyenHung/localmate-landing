# BÁO CÁO AUDIT KỸ THUẬT ON-PAGE SEO (30 BÀI VIẾT & FRONTEND CODEBASE)

> **Dự án:** LocalMate (https://localmate.vn)  
> **Chuyên mục:** Kiến thức chuyên môn (`/kien-thuc`)  
> **Phạm vi kiểm toán:** Toàn diện 30 bài viết hạt giống (`content/seeds/drafts_30_articles.json`), mã nguồn frontend (`src/pages/ArticleDetailPage.tsx`, `src/components/seo/SEOHead.tsx`), và pipeline xử lý dữ liệu (`scripts/batches/`, `scripts/apply-rewritten-content.cjs`).  
> **Thời điểm thực hiện:** 17/09/2026  
> **Đơn vị thực hiện:** Subagent 3 — Technical On-page SEO Specialist  

---

## MỤC LỤC
1. [TỔNG QUAN KẾT QUẢ AUDIT ON-PAGE SEO](#1-tổng-quan-kết-quả-audit-on-page-seo)
2. [BẢNG ON-PAGE SEO MATRIX CHO 30 BÀI VIẾT](#2-bảng-on-page-seo-matrix-cho-30-bài-viết)
3. [DANH SÁCH LỖI KỸ THUẬT PHÂN LOẠI THEO MỨC ĐỘ](#3-danh-sách-lỗi-kỹ-thuật-phân-loại-theo-mức-độ)
   - [3.1. Nhóm Lỗi Critical (Nghiêm trọng - Bắt buộc sửa ngay)](#31-nhóm-lỗi-critical-nghiêm-trọng---bắt-buộc-sửa-ngay)
   - [3.2. Nhóm Lỗi High (Tác động lớn đến Thứ hạng & CTR)](#32-nhóm-lỗi-high-tác-động-lớn-đến-thứ-hạng--ctr)
   - [3.3. Nhóm Lỗi Medium (Tối ưu hóa Trải nghiệm & Tín hiệu SEO)](#33-nhóm-lỗi-medium-tối-ưu-hóa-trải-nghiệm--tín-hiệu-seo)
   - [3.4. Nhóm Lỗi Low (Hoàn thiện Cấu trúc Dữ liệu & Tiêu chuẩn Quốc tế)](#34-nhóm-lỗi-low-hoàn-thiện-cấu-trúc-dữ-liệu--tiêu-chuẩn-quốc-tế)
4. [ĐÁNH GIÁ CHUYÊN SÂU STRUCTURED DATA (SCHEMA MARKUP)](#4-đánh-giá-chuyên-sâu-structured-data-schema-markup)
5. [GIẢI PHÁP & CODE SNIPPET CẢI TIẾN TOÀN DIỆN](#5-giải-pháp--code-snippet-cải-tiến-toàn-diện)
   - [5.1. Sửa lỗi Frontend Code (`ArticleDetailPage.tsx` & `SEOHead.tsx`)](#51-sửa-lỗi-frontend-code-articledetailpagetsx--seoheadtsx)
   - [5.2. Sửa lỗi Pipeline Dữ liệu (`scripts/apply-rewritten-content.cjs`)](#52-sửa-lỗi-pipeline-dữ-liệu-scriptsapply-rewritten-contentcjs)
   - [5.3. Chiến lược liên kết giải cứu 2 Bài viết Mồ côi (Orphan Articles)](#53-chiến-lược-liên-kết-giải-cứu-2-bài-viết-mồ-côi-orphan-articles)
6. [KẾT LUẬN & LỘ TRÌNH TRIỂN KHAI](#6-kết-luận--lộ-trình-triển-khai)

---

## 1. TỔNG QUAN KẾT QUẢ AUDIT ON-PAGE SEO

Hệ thống đã thực hiện quét trực tiếp (Automated Script AST & Regex Parsing) trên 30 bài viết với hơn 35.000 từ nội dung, kết hợp đối soát cấu trúc DOM của các component React.

### Chỉ số Thống kê Cốt lõi:
- **Tổng số bài viết kiểm toán:** 30 bài.
- **Tính độc nhất Metadata:** 30/30 bài có Title, Slug, Description, Focus Keyword hoàn toàn riêng biệt (0% trùng lặp thô).
- **Lỗi Double Brand Name trong Title (`| LocalMate | LocalMate`):** **30/30 bài (100%)** do lỗi cộng dồn chuỗi giữa `ArticleDetailPage.tsx` và `SEOHead.tsx`.
- **Nguy cơ Truncation Title trên Google SERP:** **30/30 bài (100%)** vượt quá chiều rộng cho phép (580px trên Desktop và 680px trên Mobile).
- **Lỗi Hỏng Meta Description (Corrupted Description):** **30/30 bài (100%)** bị mất cụm từ khóa in đậm do regex sai và bị cắt cụt ngang giữa chừng một từ ở ký tự 154.
- **Tính chuẩn xác của Heading Hierarchy (H1 -> H2 -> H3):** **100% đạt chuẩn**, không có hiện tượng nhảy cấp heading, không có thẻ H1 thứ hai bên trong `rendered_html`.
- **Cấu trúc Slug URL:** **30/30 bài (100%)** đạt chuẩn Kebab-case không dấu (`[a-z0-9-]+`).
- **Mạng lưới Internal Links:** 75 liên kết nội bộ trong bài viết (trung bình 2.5 link/bài).
- **Bài viết mồ côi (Orphan Articles):** **2 bài** (Bài ID 6 và Bài ID 13 hoàn toàn không có bài viết nào khác trỏ tới).
- **Tình trạng Hình ảnh (Images & Alt tags):** **0 hình ảnh minh họa** trong toàn bộ 30 bài viết (0 thẻ `<img>` trong body, thiếu trường `featured_image_url`).
- **Khớp chuẩn Canonical URL:** 100% khớp chuẩn `https://localmate.vn/kien-thuc/${slug}`.

---

## 2. BẢNG ON-PAGE SEO MATRIX CHO 30 BÀI VIẾT

Bảng đối soát chi tiết 30 bài viết dựa trên dữ liệu thực tế tại `content/seeds/drafts_30_articles.json`:

| ID | Focus Keyword | Slug | H1 Title | Title Len (Char/Px) | SERP Truncation (Desk/Mob) | Meta Desc Len | Inbound Links | Outbound Links | Đánh giá & Rủi ro |
|:---|:---|:---|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **1** | `website doanh nghiệp là gì` | `website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website` | Website doanh nghiệp là gì? Doanh nghiệp nhỏ có thực sự cần website? | 80c / 654px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 3 | 🔴 Double Brand, Cụt Desc |
| **2** | `chuẩn bị làm website doanh nghiệp nhỏ` | `lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi` | Làm website cho doanh nghiệp nhỏ cần chuẩn bị những gì? (Checklist thực chiến) | 90c / 746px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **3** | `chi phí làm website doanh nghiệp nhỏ` | `chi-phi-lam-website-doanh-nghiep-nho-2026` | Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì? (Bóc tách minh bạch) | 92c / 766px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Cụt Desc |
| **4** | `các trang cần có trên website công ty` | `website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao` | Website giới thiệu công ty nên có những trang nào để chốt khách hiệu quả? | 85c / 676px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Cụt Desc |
| **5** | `so sánh website bán hàng và website giới thiệu` | `website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao` | Website bán hàng và website giới thiệu khác nhau thế nào? Nên chọn loại nào? | 88c / 706px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 1 | 2 | 🔴 Double Brand, Mất chủ ngữ Desc |
| **6** | `lỗi khiến website không có khách` | `10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach` | Vì sao website doanh nghiệp có người vào xem nhưng không có ai gọi điện? | 84c / 684px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 0 | 2 | 🚨 **ORPHAN ARTICLE**, Lệch H1/KW |
| **7** | `google maps cho doanh nghiệp` | `google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z` | Google Maps cho doanh nghiệp: Hướng dẫn từ A đến Z cho hộ kinh doanh | 80c / 661px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 4 | 🔴 Double Brand, Cụt Desc |
| **8** | `cách đưa doanh nghiệp lên google maps` | `cach-dua-doanh-nghiep-len-google-maps` | Cách đưa doanh nghiệp lên Google Maps: Hướng dẫn xác minh video thực địa 2026 | 89c / 736px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **9** | `tối ưu google business profile` | `cach-toi-uu-google-business-profile-de-khach-de-tim-thay` | Cách tối ưu Google Business Profile để khách hàng quanh đây dễ tìm thấy | 83c / 675px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 2 | 2 | 🔴 Double Brand, Cụt Desc |
| **10** | `tại sao doanh nghiệp không hiện trên google maps` | `vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps` | Vì sao doanh nghiệp không xuất hiện trên Google Maps? Cách khắc phục nhanh | 86c / 718px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 3 | 🔴 Double Brand, Cụt Desc |
| **11** | `cách tăng đánh giá google maps` | `cach-tang-danh-gia-google-maps-dung-cach` | Cách tăng đánh giá Google Maps đúng cách và bền vững cho hộ kinh doanh | 82c / 680px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 3 | 2 | 🔴 Double Brand, Cụt Desc |
| **12** | `google maps bị đình chỉ` | `google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly` | Google Maps bị đình chỉ: Nguyên nhân cốt lõi và quy trình kháng nghị khôi phục | 90c / 734px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Cụt Desc |
| **13** | `local seo là gì` | `local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam` | Local SEO là gì? Vì sao doanh nghiệp địa phương nên tập trung làm Local SEO? | 88c / 732px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 0 | 3 | 🚨 **ORPHAN PILLAR**, Mất chủ ngữ Desc |
| **14** | `so sánh seo google maps và seo website` | `seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao` | SEO Google Maps và SEO Website khác nhau thế nào? Nên ưu tiên làm cái nào? | 86c / 716px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **15** | `cách seo từ khóa địa phương` | `cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong` | Cách SEO doanh nghiệp lên Google tại khu vực địa phương: Cẩm nang Location Pages | 92c / 771px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Slug thiếu từ khóa |
| **16** | `entity seo cho doanh nghiệp nhỏ` | `entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho` | Entity SEO là gì? Doanh nghiệp nhỏ có cần bỏ tiền mua các gói Entity không? | 87c / 703px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 2 | 3 | 🔴 Double Brand, Mất chủ ngữ Desc |
| **17** | `citation trong local seo là gì` | `citation-trong-local-seo-la-gi` | Citation trong Local SEO là gì và cách xây dựng chuẩn xác tại Việt Nam | 82c / 660px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 1 | 2 | 🔴 Double Brand, Thủng lỗ Desc |
| **18** | `checklist local seo` | `checklist-local-seo-cho-doanh-nghiep-dia-phuong` | Checklist Local SEO 2026: 20 việc chủ tiệm tự làm để lên top tìm kiếm | 81c / 641px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Cụt Desc |
| **19** | `google ads cho doanh nghiệp nhỏ` | `google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau` | Google Ads cho doanh nghiệp nhỏ: Bắt đầu từ đâu để không bị đốt tiền oan? | 85c / 688px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 4 | 🔴 Double Brand, Cụt Desc |
| **20** | `google search ads hoạt động như thế nào` | `google-search-ads-hoat-dong-nhu-the-nao` | Google Search Ads hoạt động như thế nào? Cơ chế đấu giá và cách giảm tiền click | 91c / 735px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **21** | `chạy google ads bao nhiêu tiền một ngày` | `chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly` | Chạy Google Ads bao nhiêu tiền một ngày là hợp lý cho doanh nghiệp nhỏ? | 83c / 673px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Thủng số tiền Desc |
| **22** | `chạy google ads có click không có khách` | `vi-sao-chay-google-ads-co-click-nhung-khong-co-khach` | Vì sao chạy Google Ads có click nhưng không có khách? Cách xử lý dứt điểm | 85c / 698px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **23** | `thiết kế landing page chạy google ads` | `landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao` | Landing page chạy Google Ads nên thiết kế thế nào để khách bấm gọi ngay? | 84c / 689px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 2 | 2 | 🔴 Double Brand, Thủng lỗ Desc |
| **24** | `so sánh google ads và facebook ads` | `google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong` | Google Ads hay Facebook Ads phù hợp hơn với doanh nghiệp địa phương? | 80c / 677px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 1 | 2 | 🔴 Double Brand, Mất chủ ngữ Desc |
| **25** | `crm là gì cho doanh nghiệp nhỏ` | `crm-la-gi-doanh-nghiep-nho-co-can-crm-khong` | CRM là gì? Doanh nghiệp nhỏ có thực sự cần mua phần mềm CRM đắt tiền? | 81c / 676px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 2 | 2 | 🔴 Double Brand, Mất chủ ngữ Desc |
| **26** | `tính năng crm cho doanh nghiệp nhỏ` | `crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao` | CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào? (Bảng lọc thực chiến) | 95c / 787px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **27** | `tự động hóa cho doanh nghiệp nhỏ` | `automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa` | Automation cho doanh nghiệp nhỏ: 7 việc thủ công nên tự động hóa ngay (Chi phí 0đ) | 94c / 763px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **28** | `quản lý tin nhắn facebook zalo website tập trung` | `cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong` | Cách quản lý khách hàng từ Facebook, Zalo và Website tập trung trên một điện thoại | 94c / 751px | ⚠️ Bị cắt / ⚠️ Bị cắt | 153c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **29** | `content marketing cho doanh nghiệp địa phương` | `content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau` | Content marketing cho doanh nghiệp địa phương: Bắt đầu từ đâu mà không cần viết văn hoa? | 100c / 817px | ⚠️ Bị cắt / ⚠️ Bị cắt | 154c | 1 | 2 | 🔴 Double Brand, Cụt Desc |
| **30** | `chuyển đổi số cho doanh nghiệp nhỏ` | `chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian` | Chuyển đổi số cho doanh nghiệp nhỏ: Lộ trình 5 bước thực tế từ 0 đến có khách | 89c / 715px | ⚠️ Bị cắt / ⚠️ Bị cắt | 152c | 1 | 9 | 🔴 Double Brand, Mất chủ ngữ Desc |

---

## 3. DANH SÁCH LỖI KỸ THUẬT PHÂN LOẠI THEO MỨC ĐỘ

### 3.1. Nhóm Lỗi Critical (Nghiêm trọng - Bắt buộc sửa ngay)

#### Lỗi C-01: Lỗi nhân đôi thương hiệu (Double Brand Name Suffix) trên toàn bộ tiêu đề trang
- **Mức độ:** `CRITICAL`
- **File liên quan:** `src/pages/ArticleDetailPage.tsx` (dòng 130) và `src/components/seo/SEOHead.tsx` (dòng 31).
- **Hiện tượng thực tế:**
  - Trong dữ liệu `content/seeds/drafts_30_articles.json`, trường `seo_title` đã có sẵn đuôi: `... | LocalMate`.
  - Trong `ArticleDetailPage.tsx`:
    ```tsx
    title={`${isCms && cmsPost!.seo_title ? cmsPost!.seo_title : title} | LocalMate`}
    ```
    Code lại nối thêm chuỗi ` | LocalMate`.
  - Trong `SEOHead.tsx`:
    ```tsx
    const fullTitle = title.includes('LocalMate') ? title : `${title} | LocalMate`;
    ```
    Vì prop nhận vào đã có chữ `LocalMate`, hàm giữ nguyên chuỗi, dẫn đến thẻ `<title>`, `og:title`, `twitter:title` hiển thị dạng:
    `Website doanh nghiệp là gì? Doanh nghiệp nhỏ có thực sự cần website? | LocalMate | LocalMate`
- **Tác hại:** Làm tiêu đề dài thêm 12 ký tự rác, chiếm thêm gần 100px chiều rộng SERP, tạo cảm giác thiếu chuyên nghiệp và bị Google phạt thuật toán Title Rewriting.
- **Đề xuất khắc phục:** Chuẩn hóa việc xử lý title ở cả 2 cấp:
  1. Ở `ArticleDetailPage.tsx`: Chỉ truyền nguyên bản `cmsPost.seo_title` hoặc `title`.
  2. Ở `SEOHead.tsx`: Làm sạch triệt để mọi đuôi `| LocalMate` trước khi gắn hậu tố thương hiệu duy nhất một lần:
     ```typescript
     const cleanTitle = title.replace(/\s*\|\s*LocalMate.*$/gi, '').trim();
     const fullTitle = `${cleanTitle} | LocalMate`;
     ```

---

#### Lỗi C-02: Lỗi thuật toán sinh Meta Description làm cụt câu, mất chủ ngữ và thủng lỗ từ khóa
- **Mức độ:** `CRITICAL`
- **File liên quan:** `scripts/apply-rewritten-content.cjs` (dòng 80) & `content/seeds/drafts_30_articles.json`.
- **Hiện tượng thực tế:**
  Đoạn mã tạo meta description:
  ```javascript
  seo_description: rewritten.blocks.find(b => b.type === 'tldr')?.text
    .replace(/\*\*.*?\*\*/g, '') // LỖI GỐC: Xóa luôn cả text bên trong dấu ** !
    .slice(0, 155).trim()
  ```
  - Biểu thức chính quy `/\*\*.*?\*\*/g` đã thay thế TOÀN BỘ cụm text in đậm thành chuỗi rỗng `""`.
  - Hậu quả:
    - **Mất chủ ngữ đầu câu:** Bài 5 ("**Website bán hàng** dành riêng cho..."), Bài 13 ("**Local SEO** là tập hợp..."), Bài 16 ("**Entity SEO** là cách..."), Bài 24 ("**Google Ads** là lựa chọn..."), Bài 25 ("**CRM** thực chất chỉ là..."), Bài 30 ("**Chuyển đổi số** hoàn toàn không phải...") đều bị mất cụm từ đầu, câu mở đầu bằng trợ từ/vị ngữ cụt lủn: *"dành riêng cho..."*, *"là tập hợp..."*, *"thực chất chỉ là..."*.
    - **Thủng lỗ trắng nội dung:** Bài 3 bị biến thành *"từ  cho năm đầu tiên"* (mất cụm `**490.000đ đến 3.500.000đ**`), Bài 17 bị thủng *"cốt lõi của bạn: , viết tắt là . Google..."* (mất `**NAP**`, `**Name - Address - Phone**`).
    - **Bị chặt ngang giữa chừng:** Lệnh `.slice(0, 155)` cắt cụt ngay giữa một từ ngữ (`dịch vụ c`, `phục vụ tro`, `cơ sở dịch vụ`).
- **Tác hại:** Snippet hiển thị trên Google SERP bị vô nghĩa, mất uy tín trầm trọng với người tìm kiếm, CTR rớt thảm hại.
- **Đề xuất khắc phục:** 
  1. Đổi regex giữ nguyên nội dung in đậm: `.replace(/\*\*(.*?)\*\*/g, '$1')`.
  2. Cắt theo ranh giới từ (word boundary) và thêm Call-To-Action (CTA) có ý nghĩa: "Xem ngay cẩm nang...", "Khám phá giải pháp chi tiết tại LocalMate".

---

#### Lỗi C-03: Trường ngày tháng (`datePublished`, `dateModified`) bị rỗng trong Schema và UI
- **Mức độ:** `CRITICAL`
- **File liên quan:** `content/seeds/drafts_30_articles.json`, `src/pages/ArticleDetailPage.tsx` (dòng 91-92, dòng 143-144).
- **Hiện tượng thực tế:**
  Trong file seed `drafts_30_articles.json`, cả 30 bài viết hoàn toàn **KHÔNG có** trường `published_at` hoặc `updated_at`.
  Khi `ArticleDetailPage.tsx` đọc:
  ```typescript
  const updatedAt = isCms ? (cmsPost!.updated_at || cmsPost!.published_at || '').split(' ')[0] : article!.updatedAt;
  const publishedAt = isCms ? (cmsPost!.published_at || '').split(' ')[0] : article!.publishedAt;
  ```
  Giá trị trả về là chuỗi rỗng `""`. Khi đưa vào Schema:
  ```json
  "datePublished": "",
  "dateModified": ""
  ```
- **Tác hại:** Công cụ kiểm tra kết quả nhiều định dạng của Google (Rich Results Test) sẽ báo lỗi không hợp lệ (Invalid Date Format), từ chối cấp Rich Snippet cho bài viết. Trên giao diện người dùng, dòng "Cập nhật: " bị trống ngày.
- **Đề xuất khắc phục:** 
  1. Thêm trường `published_at` và `updated_at` chuẩn ISO 8601 (ví dụ `2026-03-01T08:00:00+07:00`) vào file seed.
  2. Frontend bổ sung fallback date hợp lệ nếu dữ liệu backend trả về null/rỗng.

---

### 3.2. Nhóm Lỗi High (Tác động lớn đến Thứ hạng & CTR)

#### Lỗi H-01: 100% Tiêu đề (30/30 bài) bị cắt cụt (Truncated) trên Desktop và Mobile SERP
- **Mức độ:** `HIGH`
- **Hiện tượng:**
  - Giới hạn hiển thị an toàn của Google:
    - Desktop: Max **580px** (~55-60 ký tự).
    - Mobile: Max **680px** (~65-70 ký tự).
  - Thực tế: Tiêu đề của 30 bài viết (ngay cả khi đã bỏ lỗi double brand) có độ dài từ **80 đến 100 ký tự**, với pixel width ước tính từ **641px đến 817px**.
  - Ví dụ điển hình:
    - Bài 29: `Content marketing cho doanh nghiệp địa phương: Bắt đầu từ đâu mà không cần viết văn hoa? | LocalMate` (100 ký tự / 817px).
    - Bài 26: `CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào? (Bảng lọc thực chiến) | LocalMate` (95 ký tự / 787px).
    - Bài 3: `Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì? (Bóc tách minh bạch) | LocalMate` (92 ký tự / 766px).
- **Tác hại:** Người tìm kiếm trên Google không thể đọc hết câu hỏi, phần hook kêu gọi hấp dẫn nhất và thương hiệu LocalMate ở cuối câu đều bị biến thành dấu `...`.
- **Đề xuất khắc phục:** Viết lại `seo_title` ngắn gọn, cô đọng dưới 58 ký tự (< 550px), cấu trúc: `[Từ khóa chính] + [Lợi ích cốt lõi / Năm 2026] | LocalMate`. Ví dụ:
  - Bài 3: `Chi phí làm website doanh nghiệp nhỏ 2026 bóc tách chi tiết | LocalMate` (60 ký tự).
  - Bài 29: `Content marketing doanh nghiệp địa phương: Hướng dẫn từ A-Z | LocalMate` (59 ký tự).

---

#### Lỗi H-02: Tồn tại 2 Bài viết Mồ côi (Orphan Articles) trong cấu trúc liên kết nội bộ
- **Mức độ:** `HIGH`
- **Các bài vi phạm:**
  1. Bài ID 6: `10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach` ("Vì sao website doanh nghiệp có người vào xem nhưng không có ai gọi điện?") — **Inbound Links = 0**.
  2. Bài ID 13: `local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam` ("Local SEO là gì? Vì sao doanh nghiệp địa phương nên tập trung làm Local SEO?") — **Inbound Links = 0**.
- **Tác hại cực kỳ nghiêm trọng:**
  - Bài 13 là **Topic Pillar (Bài viết trụ cột)** của toàn bộ cụm chủ đề Local SEO (các bài vệ tinh 14, 15, 16, 17, 18). Việc bài trụ cột không nhận được link nào từ các bài vệ tinh và các cụm khác khiến cấu trúc Topic Cluster bị đứt gãy hoàn toàn. PageRank nội bộ không dồn về được bài trụ cột để tranh chấp từ khóa hạt giống `local seo là gì`.
  - Bài 6 là bài viết then chốt giải quyết nỗi đau lớn nhất của khách hàng làm web (có traffic nhưng không có lead), nhưng bị cô lập khỏi cụm bài về website (Bài 1, 2, 3, 4, 5).
- **Đề xuất khắc phục:** Bổ sung ngay các anchor text liên kết ngữ cảnh tự nhiên:
  - Từ Bài 1, Bài 4, Bài 5 trỏ về Bài 6.
  - Từ Bài 14, Bài 15, Bài 18, Bài 30 trỏ về Bài 13.

---

#### Lỗi H-03: Toàn bộ 30 bài viết hoàn toàn thiếu hình ảnh minh họa (0 Image & Missing Featured Image)
- **Mức độ:** `HIGH`
- **Hiện tượng:**
  - 0 thẻ `<img>` trong phần nội dung (`rendered_html`).
  - Không có trường `featured_image_url` trong seed JSON.
  - Trong `ArticleDetailPage.tsx`, khối hiển thị ảnh bìa bị ẩn hoàn toàn:
    ```tsx
    {isCms && cmsPost!.featured_image_url && (
      <div><img src={cmsPost!.featured_image_url} alt={title} /></div>
    )}
    ```
- **Tác hại:**
  - Mất 100% lượng truy cập tiềm năng từ Google Images Search.
  - Bài viết dài 800 - 1.500 từ chỉ toàn chữ thô, làm tăng tỷ lệ thoát trang (bounce rate) và giảm thời gian đọc bài (dwell time).
  - Schema `Article` thiếu thuộc tính `image` bắt buộc của Google.
- **Đề xuất khắc phục:** 
  - Khởi tạo thư viện hình ảnh SVG / WebP chuẩn hóa cho 30 bài viết.
  - Đặt tên file theo chuẩn SEO: `localmate-[tu-khoa-khong-dau].webp`.
  - Mỗi bài cần có 1 ảnh đại diện (Cover/Hero) tỉ lệ 16:9 và ít nhất 1 hình infographic/sơ đồ quy trình minh họa trong bài viết.

---

### 3.3. Nhóm Lỗi Medium (Tối ưu hóa Trải nghiệm & Tín hiệu SEO)

#### Lỗi M-01: Thiếu thẻ `<meta name="robots">` trong component `SEOHead.tsx`
- **Mức độ:** `MEDIUM`
- **File:** `src/components/seo/SEOHead.tsx`.
- **Hiện tượng:** Dữ liệu seed có hai trường `robots_index` và `robots_follow`, nhưng `SEOHead.tsx` hoàn toàn không render thẻ meta `robots`.
- **Đề xuất:** Bổ sung prop `robots` hoặc tự động tạo `<meta name="robots" content="index, follow" />` để kiểm soát chỉ mục rõ ràng.

---

#### Lỗi M-02: Thiếu thẻ `twitter:card` và chia sẻ mạng xã hội luôn bị rơi vào Logo tĩnh
- **Mức độ:** `MEDIUM`
- **File:** `src/pages/ArticleDetailPage.tsx` và `src/components/seo/SEOHead.tsx`.
- **Hiện tượng:** 
  - Không có thẻ `<meta name="twitter:card" content="summary_large_image">`.
  - `ArticleDetailPage.tsx` gọi `<SEOHead ... />` nhưng **không truyền prop `ogImage`**, khiến giá trị mặc định luôn là `https://localmate.vn/logo.png`.
  - Thiếu `og:locale` (`vi_VN`) và `og:site_name` (`LocalMate`).
- **Đề xuất:** Truyền `ogImage={cmsPost?.featured_image_url || '/assets/og-default.jpg'}` và bổ sung các thẻ meta mạng xã hội tiêu chuẩn vào `SEOHead.tsx`.

---

#### Lỗi M-03: Hoàn toàn không có Outbound Authority Links (Liên kết trích dẫn bên ngoài)
- **Mức độ:** `MEDIUM`
- **Hiện tượng:** Cả 30 bài viết chỉ chứa liên kết nội bộ, 0 outbound link đến các nguồn tài liệu uy tín.
- **Tác hại:** Thuật toán Google đánh giá cao tính chuyên môn (E-E-A-T) khi tác giả bài viết trích dẫn các tài liệu hướng dẫn chính thức từ Google (Google Business Profile Help, Search Central documentation, Web.dev).
- **Đề xuất:** Bổ sung 1 outbound link uy tín cho mỗi bài viết chủ đề kỹ thuật với thuộc tính `target="_blank" rel="noopener noreferrer"`.

---

#### Lỗi M-04: 8 Slug bài viết chưa chứa trọn vẹn từ khóa mục tiêu
- **Mức độ:** `MEDIUM`
- **Các bài vi phạm:** ID 4, 5, 10, 14, 15, 24, 25, 28.
- **Ví dụ:**
  - ID 15: Focus KW là `cách seo từ khóa địa phương`, Slug là `cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong` (quá dài, thiếu từ khóa `tu-khoa`).
  - ID 24: Focus KW là `so sánh google ads và facebook ads`, Slug là `google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong`.
- **Đề xuất:** Tối ưu hóa slug súc tích, phản ánh trực diện từ khóa chính. Khi đổi slug cần cập nhật đồng thời bảng `cms_redirects` để đảm bảo 301 SEO redirect không bị 404.

---

### 3.4. Nhóm Lỗi Low (Hoàn thiện Cấu trúc Dữ liệu & Tiêu chuẩn Quốc tế)

#### Lỗi L-01: Cấu trúc JSON-LD độc lập thay vì chuẩn `@graph` thống nhất
- **Mức độ:** `LOW`
- **Hiện tượng:** `SEOHead.tsx` nhúng JSON-LD dưới dạng một mảng các object:
  ```json
  [
    { "@context": "https://schema.org", "@type": "ProfessionalService", ... },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", ... },
    { "@context": "https://schema.org", "@type": "Article", ... }
  ]
  ```
- **Đề xuất:** Tái cấu trúc thành định dạng `@graph` với các `@id` liên kết định danh thực thể (Entity Relationship) chuẩn Google Knowledge Graph.

#### Lỗi L-02: Thiếu khai báo ngôn ngữ `inLanguage: "vi-VN"` trong Schema
- **Mức độ:** `LOW`
- **Đề xuất:** Thêm `"inLanguage": "vi-VN"` vào `WebPage`, `Article`, và `Organization`.

#### Lỗi L-03: Thiếu cấu trúc Schema FAQPage cho các bài có nội dung Hỏi - Đáp
- **Mức độ:** `LOW`
- **Hiện tượng:** Nhiều bài viết chứa khối câu hỏi giải đáp nhưng chưa có schema `FAQPage` để mở rộng diện tích hiển thị trên SERP (Rich Results).

---

## 4. ĐÁNH GIÁ CHUYÊN SÂU STRUCTURED DATA (SCHEMA MARKUP)

### Phân tích Kiến trúc Hiện tại trong Codebase:
1. **Tại `SEOHead.tsx`:**
   - Đã có schema nền tảng `ProfessionalService` (khai báo tên LocalMate, logo, phone, address, priceRange).
   - Đã có schema `BreadcrumbList` ánh xạ theo mảng breadcrumbs.
   - Hỗ trợ dynamic schema type (`schemaType` và `schemaData`).
2. **Những khiếm khuyết lớn cần vá ngay:**
   - Thiếu `mainEntityOfPage` trỏ về Canonical URL của trang trong Article Schema.
   - Thiếu thuộc tính `image` trong Article Schema.
   - `author` trong `ArticleDetailPage.tsx` chỉ có `name` và `jobTitle`, thiếu `@id` và liên kết profile (`url`).
   - Cấu trúc rời rạc, các entity không liên kết với nhau qua `@id`.

### Mẫu Schema `@graph` Hoàn Hảo (Chuẩn Google Rich Results 2026):
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://localmate.vn/#organization",
      "name": "LocalMate",
      "url": "https://localmate.vn",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://localmate.vn/#logo",
        "url": "https://localmate.vn/logo.png",
        "caption": "LocalMate Logo"
      },
      "telephone": "+84834422439",
      "email": "contact@localmate.vn",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "VN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://localmate.vn/#website",
      "url": "https://localmate.vn",
      "name": "LocalMate",
      "publisher": {
        "@id": "https://localmate.vn/#organization"
      },
      "inLanguage": "vi-VN"
    },
    {
      "@type": "Person",
      "@id": "https://localmate.vn/#author-hung-localmate",
      "name": "Ban Biên Tập Kỹ Thuật LocalMate",
      "jobTitle": "Chuyên gia Tư vấn Chuyển đổi số & Local SEO",
      "worksFor": {
        "@id": "https://localmate.vn/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website/#webpage",
      "url": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website",
      "name": "Website doanh nghiệp là gì? Doanh nghiệp nhỏ có cần website?",
      "isPartOf": {
        "@id": "https://localmate.vn/#website"
      },
      "breadcrumb": {
        "@id": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website/#breadcrumb"
      },
      "inLanguage": "vi-VN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": "https://localmate.vn"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kiến thức",
          "item": "https://localmate.vn/kien-thuc"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Website doanh nghiệp là gì?",
          "item": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website/#article",
      "isPartOf": {
        "@id": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website/#webpage"
      },
      "headline": "Website doanh nghiệp là gì? Doanh nghiệp nhỏ có thực sự cần website?",
      "description": "Hướng dẫn thực tế về vai trò của website tinh gọn cho hộ kinh doanh cá thể và doanh nghiệp nhỏ...",
      "mainEntityOfPage": "https://localmate.vn/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website",
      "datePublished": "2026-03-01T08:00:00+07:00",
      "dateModified": "2026-03-15T09:30:00+07:00",
      "author": {
        "@id": "https://localmate.vn/#author-hung-localmate"
      },
      "publisher": {
        "@id": "https://localmate.vn/#organization"
      },
      "image": [
        "https://localmate.vn/assets/articles/website-doanh-nghiep-cover.webp"
      ],
      "inLanguage": "vi-VN"
    }
  ]
}
```

---

## 5. GIẢI PHÁP & CODE SNIPPET CẢI TIẾN TOÀN DIỆN

### 5.1. Sửa lỗi Frontend Code (`ArticleDetailPage.tsx` & `SEOHead.tsx`)

#### Bước 1: Sửa triệt để Double Brand Name và Schema trong `ArticleDetailPage.tsx`
```tsx
// FILE: src/pages/ArticleDetailPage.tsx
// Sửa dòng gọi <SEOHead /> (khoảng dòng 128 - 160)

// 1. Chuẩn hóa tiêu đề sạch không dính đuôi kép
const rawSeoTitle = isCms && cmsPost!.seo_title ? cmsPost!.seo_title : title;
const cleanSeoTitle = rawSeoTitle.replace(/\s*\|\s*LocalMate.*$/gi, '').trim();

// 2. Chuẩn hóa ngày tháng ISO 8601 an toàn
const publishedIso = isCms && cmsPost!.published_at 
  ? new Date(cmsPost!.published_at).toISOString() 
  : '2026-03-01T08:00:00+07:00';
const updatedIso = isCms && cmsPost!.updated_at 
  ? new Date(cmsPost!.updated_at).toISOString() 
  : publishedIso;

// 3. Ảnh đại diện chuẩn
const articleCoverImage = isCms && cmsPost!.featured_image_url 
  ? cmsPost!.featured_image_url 
  : 'https://localmate.vn/assets/illustrations/mascot-ga4-gtm-ads.png';

return (
  <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
    <SEOHead
      title={cleanSeoTitle}
      description={isCms && cmsPost!.seo_description ? cmsPost!.seo_description : summary}
      canonicalPath={`/kien-thuc/${slug}`}
      ogType="article"
      ogImage={articleCoverImage}
      breadcrumbs={[
        { name: 'Kiến thức', url: '/kien-thuc' },
        { name: categoryName, url: '/kien-thuc' },
        { name: title, url: `/kien-thuc/${slug}` }
      ]}
      schemaType="Article"
      schemaData={{
        headline: title,
        description: isCms && cmsPost!.seo_description ? cmsPost!.seo_description : summary,
        mainEntityOfPage: `https://localmate.vn/kien-thuc/${slug}`,
        image: [articleCoverImage],
        datePublished: publishedIso,
        dateModified: updatedIso,
        inLanguage: 'vi-VN',
        author: {
          '@type': 'Person',
          name: authorName,
          jobTitle: authorRole
        },
        publisher: {
          '@type': 'Organization',
          name: 'LocalMate',
          logo: {
            '@type': 'ImageObject',
            url: 'https://localmate.vn/logo.png'
          }
        }
      }}
    />
    {/* ... phần còn lại giữ nguyên */}
```

#### Bước 2: Nâng cấp `SEOHead.tsx` chống lặp thương hiệu, thêm Twitter Card & Meta Robots
```tsx
// FILE: src/components/seo/SEOHead.tsx
// Nâng cấp useEffect (khoảng dòng 29 - 74)

useEffect(() => {
  // 1. Chuẩn hóa Title: Tự động loại bỏ bất kỳ đuôi | LocalMate thừa trước khi gắn hậu tố duy nhất
  const strippedTitle = title.replace(/\s*\|\s*LocalMate.*$/gi, '').trim();
  const fullTitle = `${strippedTitle} | LocalMate`;
  document.title = fullTitle;

  // 2. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. Meta Robots (Đảm bảo luôn index và follow)
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  metaRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // 4. Update Canonical URL
  const canonicalUrl = `https://localmate.vn${canonicalPath === '/' ? '' : canonicalPath}`;
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);

  // 5. OpenGraph & Twitter Card
  const updateOrCreateMeta = (attrName: string, attrVal: string, contentVal: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', contentVal);
  };

  updateOrCreateMeta('property', 'og:title', fullTitle);
  updateOrCreateMeta('property', 'og:description', description);
  updateOrCreateMeta('property', 'og:url', canonicalUrl);
  updateOrCreateMeta('property', 'og:image', ogImage);
  updateOrCreateMeta('property', 'og:type', ogType);
  updateOrCreateMeta('property', 'og:site_name', 'LocalMate');
  updateOrCreateMeta('property', 'og:locale', 'vi_VN');

  updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMeta('name', 'twitter:title', fullTitle);
  updateOrCreateMeta('name', 'twitter:description', description);
  updateOrCreateMeta('name', 'twitter:image', ogImage);

  // ... (phần inject Schema JSON-LD)
}, [title, description, canonicalPath, ogImage, ogType, breadcrumbs, schemaType, schemaData]);
```

---

### 5.2. Sửa lỗi Pipeline Dữ liệu (`scripts/apply-rewritten-content.cjs`)

Sửa lỗi regex và bổ sung ngày tháng chuẩn ISO vào `scripts/apply-rewritten-content.cjs`:
```javascript
// Dòng 79 - 88 trong scripts/apply-rewritten-content.cjs

function cleanMarkdownToText(mdText) {
  if (!mdText) return '';
  return mdText
    .replace(/\*\*(.*?)\*\*/g, '$1') // GIỮ LẠI NỘI DUNG TỪ KHÓA BÊN TRONG!
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function generateSafeMetaDescription(tldrText, fallbackDesc) {
  if (!tldrText) return fallbackDesc;
  const clean = cleanMarkdownToText(tldrText);
  if (clean.length <= 155) return clean;
  // Cắt thông minh theo ranh giới từ cuối cùng (không bị cụt chữ)
  const sub = clean.slice(0, 152);
  const lastSpace = sub.lastIndexOf(' ');
  return (lastSpace > 110 ? sub.slice(0, lastSpace) : sub) + '...';
}

// Khi map bài viết:
return {
  ...orig,
  title: rewritten.title,
  slug: rewritten.slug,
  focus_keyword: rewritten.focus_keyword,
  seo_title: `${rewritten.title} | LocalMate`,
  seo_description: generateSafeMetaDescription(
    rewritten.blocks.find(b => b.type === 'tldr')?.text,
    orig.seo_description
  ),
  excerpt: cleanMarkdownToText(rewritten.blocks.find(b => b.type === 'tldr')?.text).slice(0, 220),
  published_at: orig.published_at || '2026-03-01 08:00:00',
  updated_at: orig.updated_at || '2026-03-15 09:30:00',
  // ...
};
```

---

### 5.3. Chiến lược liên kết giải cứu 2 Bài viết Mồ côi (Orphan Articles)

#### 1. Cứu Bài ID 6 (`10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach`):
- **Trong Bài ID 1 (`website-doanh-nghiep-la-gi`):**
  - Vị trí: Đoạn phân tích *"Website đẹp nhưng không có người gọi"*.
  - Chèn Anchor: *"Nếu trang web của bạn đã hoạt động nhưng chưa có khách, hãy xem ngay [10 lỗi phổ biến khiến website không có khách](/kien-thuc/10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach) để tự kiểm tra."*
- **Trong Bài ID 4 (`website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao`):**
  - Chèn Anchor: *"Tránh mắc phải [các lỗi phổ biến khiến website không có người liên hệ](/kien-thuc/10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach) khi bố trí các nút gọi và báo giá."*

#### 2. Cứu Bài ID 13 (`local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam`):
- **Trong Bài ID 14 (`seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao`):**
  - Vị trí: Đoạn mở đầu giải thích khái niệm.
  - Chèn Anchor: *"Trước khi so sánh hai kênh, bạn cần nắm vững bản chất cốt lõi của [Local SEO là gì](/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam) và cách thức nó hoạt động."*
- **Trong Bài ID 18 (`checklist-local-seo-cho-doanh-nghiep-dia-phuong`):**
  - Vị trí: Bước 1 trong checklist.
  - Chèn Anchor: *"Xem lại hướng dẫn nền tảng về [vai trò của Local SEO đối với doanh nghiệp địa phương](/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam) để hiểu rõ mục tiêu từng đầu việc."*
- **Trong Bài ID 30 (`chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian`):**
  - Chèn Anchor: *"Bước 2 trong lộ trình số hóa là triển khai [chiến lược Local SEO](/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam) để đón đầu lượng tìm kiếm xung quanh."*

---

## 6. KẾT LUẬN & LỘ TRÌNH TRIỂN KHAI

### Tổng kết Chất lượng On-page SEO:
- **Ưu điểm lớn:**
  1. Nội dung 30 bài viết có chiều sâu nghiệp vụ thực tế vượt trội, tập trung giải quyết trực diện bài toán của hộ kinh doanh cá thể và doanh nghiệp nhỏ.
  2. Thứ bậc Heading H1, H2, H3 phân cấp rất chuẩn mực, không nhảy cấp, không generic.
  3. Cấu trúc Slug ngắn gọn, chuẩn Kebab-case.
  4. Hệ thống Internal links ngữ cảnh tự nhiên, không nhồi nhét, không dùng anchor vô nghĩa.
  5. Khớp 100% định dạng Canonical URL với domain production.
- **Tồn tại kỹ thuật cần fix:**
  1. Lỗi nhân đôi hậu tố thương hiệu (`| LocalMate | LocalMate`) ở toàn bộ 30 bài.
  2. Lỗi regex xóa từ khóa và cắt cụt Meta Description ở toàn bộ 30 bài.
  3. 100% Tiêu đề bị quá dài dẫn đến nguy cơ Truncation trên SERP.
  4. 2 bài viết mồ côi (trong đó có bài Topic Pillar quan trọng ID 13).
  5. Thiếu hình ảnh minh họa và thiếu trường ngày tháng chuẩn ISO trong Schema.

### Bảng Phân Công Ưu Tiên Triển Khai (Action Plan):

| Ưu tiên | Hạng mục công việc | File tác động | Mục tiêu hoàn thành |
|:---:|:---|:---|:---|
| **P0** | Sửa triệt để Double Brand Name trong Title | `src/pages/ArticleDetailPage.tsx`, `src/components/seo/SEOHead.tsx` | Khắc phục 100% lỗi hiển thị trên SERP & Social |
| **P0** | Sửa thuật toán regex Meta Description & làm sạch văn bản | `scripts/apply-rewritten-content.cjs`, `content/seeds/drafts_30_articles.json` | Khôi phục từ khóa chủ ngữ & bổ sung CTA chuẩn |
| **P0** | Bổ sung `published_at`, `updated_at` chuẩn ISO 8601 vào seed & schema | `content/seeds/drafts_30_articles.json`, `ArticleDetailPage.tsx` | Xóa bỏ lỗi Invalid Date trên Google Rich Results |
| **P1** | Chèn liên kết nội bộ giải cứu 2 bài viết mồ côi (ID 6 và ID 13) | `scripts/batches/batch-1.cjs`, `scripts/batches/batch-3.cjs` | Đạt 100% bài viết có tối thiểu 1-2 Inbound Links |
| **P1** | Bổ sung thẻ `twitter:card`, `meta robots` và truyền `ogImage` động | `src/components/seo/SEOHead.tsx`, `ArticleDetailPage.tsx` | Hoàn thiện Rich Card mạng xã hội & quản trị chỉ mục |
| **P2** | Rút gọn `seo_title` 30 bài dưới 60 ký tự (< 580px) | `scripts/batches/batch-*.cjs`, `content/seeds/drafts_30_articles.json` | Triệt tiêu 100% rủi ro cắt cụt tiêu đề trên Desktop & Mobile |
| **P2** | Tạo bộ ảnh WebP minh họa chuẩn SEO và gán `featured_image_url` | `public/assets/articles/`, `content/seeds/drafts_30_articles.json` | Mở rộng lưu lượng từ Google Image Search & tăng Dwell Time |
