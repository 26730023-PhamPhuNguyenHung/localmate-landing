# Bảng Đối Chiếu & Quy Hoạch Đường Dẫn URL (URL Mapping & Migration SSOT)

> **Trạng thái:** Active SSOT  
> **Phiên bản:** 2.0.0  
> **Ngày phê duyệt:** 13/09/2026  
> **Tác giả:** Docs SSOT Architect  
> **Phạm vi áp dụng:** Toàn bộ Router trong mã nguồn (`src/App.tsx`), Hệ thống liên kết nội bộ (Internal Links), Breadcrumbs và File Sitemap (`public/sitemap.xml`).

---

## 1. Nguyên Tắc Di Chuyển URL Không Mất Traffic SEO (SEO Migration Principles)

1. **Tuyệt đối không xóa mù quáng (No Blind Deletion):** Các trang đã lập chỉ mục và có giá trị xếp hạng trên Google (như `/dich-vu/geo`, `/dich-vu/aeo`, `/landing-490k`, `/dich-vu/local-search`) phải được bảo toàn giá trị SEO.
2. **Phân định rõ 2 tầng trang:**
   - **Trang Trụ Cột Giải Pháp (Pillar Solution Pages):** Là xương sống kiến trúc thông tin (IA Backbone), định vị thương hiệu và chuyển đổi khách hàng từ trang chủ và menu chính.
   - **Trang Đích SEO Bổ Trợ (SEO Satellite Landing Pages):** Đón đầu các truy vấn ngách có độ cạnh tranh cao (Long-tail keywords), giải thích chuyên sâu về kỹ thuật nhưng **luôn gắn liên kết ngược (Contextual Link) về Trang Trụ Cột**.
3. **Chống trùng lặp nội dung (Anti-Duplicate & Anti-Doorway):** Mỗi trang vệ tinh kỹ thuật (GEO, AEO, SEO AI Overviews, SEO ChatGPT) phải phục vụ một Ý định Tìm kiếm (Search Intent) riêng biệt, không được copy cùng một bộ khung chữ rồi chỉ thay thế từ khóa.
4. **Cấu trúc Breadcrumbs phân cấp đúng thực tế:** Mọi trang con kỹ thuật đều phải có đường dẫn phân cấp chỉ rõ nó thuộc về Trụ Cột Giải Pháp nào.

---

## 2. Bảng Đối Chiếu Chi Tiết Toàn Bộ URL (Old Route → New Architecture)

| # | Tuyến Đường Cũ (Old Route) | Tuyến Đường Mới (New Route) | Phân Loại Vai Trò (Role) | Hành Động (Action) | Breadcrumbs Mới & Lý Do Chuyển Đổi |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **01** | `/dich-vu` | `/giai-phap` *(và giữ `/dich-vu` làm Alias/Redirect)* | **Hub Trung Tâm Giải Pháp** | **REFACTOR** | `Trang chủ` → `Giải pháp`  <br>*Lý do:* Chuyển từ giao diện catalog 15 card rời rạc sang trung tâm định hướng 5 trụ cột theo nhu cầu kinh doanh. |
| **02** | `/landing-490k`, `/goi-490k` | `/landing-490k` | **Offer Landing Page** | **KEEP** | `Trang chủ` → `Giải pháp` → `Nền tảng số` → `Gói 490k`  <br>*Lý do:* Giữ nguyên URL phễu chuyển đổi bán hàng trực tiếp, gắn nhãn trực thuộc Pillar 01 (Xây nền tảng số). |
| **03** | `/dich-vu/thiet-ke-website`, `/thiet-ke-web` | `/giai-phap/nen-tang-so` | **Pillar Solution 01** | **MERGE & MAP** | `Trang chủ` → `Giải pháp` → `Xây nền tảng số`  <br>*Lý do:* Mở rộng từ dịch vụ làm web đơn thuần thành giải pháp hiện diện số trọn vẹn (Web + Domain + DNS + Profile). |
| **04** | `/dich-vu/local-search`, `/dich-vu/google-maps-seo`, `/dich-vu/seo-maps`, `/local-search` | `/giai-phap/duoc-tim-thay` | **Pillar Solution 02** | **MERGE & MAP** | `Trang chủ` → `Giải pháp` → `Được tìm thấy trên Google & AI`  <br>*Lý do:* Hợp nhất các cụm trang tìm kiếm địa phương rời rạc vào giải pháp trụ cột giúp khách hàng được tìm thấy. |
| **05** | `/dich-vu/geo`, `/dich-vu-geo`, `/geo` | `/dich-vu/geo` | **SEO Satellite (AI Search)** | **KEEP & CONTEXTUALIZE** | `Trang chủ` → `Giải pháp` → `Được tìm thấy` → `Tối ưu GEO`  <br>*Lý do:* Giữ nguyên để hứng organic search cho từ khóa "dịch vụ GEO". Thêm liên kết dẫn về Pillar 02. |
| **06** | `/dich-vu/aeo`, `/dich-vu-aeo`, `/aeo` | `/dich-vu/aeo` | **SEO Satellite (Answer Engine)** | **KEEP & CONTEXTUALIZE** | `Trang chủ` → `Giải pháp` → `Được tìm thấy` → `Tối ưu AEO`  <br>*Lý do:* Phục vụ tìm kiếm chuyên sâu về Answer Engine (Perplexity, Siri). Không để làm rối menu chính. |
| **07** | `/dich-vu/seo-ai`, `/dich-vu-seo-ai`, `/seo-ai` | `/dich-vu/seo-ai` | **SEO Satellite (AI Overviews)** | **KEEP & CONTEXTUALIZE** | `Trang chủ` → `Giải pháp` → `Được tìm thấy` → `SEO AI Overviews`  <br>*Lý do:* Phục vụ từ khóa ngách về hiển thị tóm tắt AI của Google. |
| **08** | `/dich-vu/seo-chatgpt`, `/seo-chatgpt` | `/dich-vu/seo-chatgpt` | **SEO Satellite (LLM Search)** | **KEEP & CONTEXTUALIZE** | `Trang chủ` → `Giải pháp` → `Được tìm thấy` → `SEO ChatGPT`  <br>*Lý do:* Giữ trang phục vụ tệp khách hàng tìm giải pháp đề xuất trên ChatGPT, link về Pillar 02. |
| **09** | `/dich-vu/quang-cao-google`, `/dich-vu/google-ads` | `/giai-phap/thu-hut-khach-hang` | **Pillar Solution 03** | **MERGE & MAP** | `Trang chủ` → `Giải pháp` → `Thu hút khách hàng`  <br>*Lý do:* Tích hợp cả Google Ads và Meta Ads vào giải pháp chuyển đổi và thu hút lead tổng thể. |
| **10** | `/dich-vu/chay-khach-van-hanh`, `/chay-khach-van-hanh` | `/giai-phap/van-hanh-tu-dong-hoa` | **Pillar Solution 04** | **RENAME & MAP** | `Trang chủ` → `Giải pháp` → `Vận hành tự động hóa`  <br>*Lý do:* Đổi từ tên gọi tạm sang tên giải pháp chuẩn mực, giải quyết bài toán giảm tải thao tác thủ công. |
| **11** | `/dich-vu/chay-khach-cham-soc`, `/chay-khach-cham-soc` | `/giai-phap/dong-hanh-duy-tri` | **Pillar Solution 05** | **RENAME & MAP** | `Trang chủ` → `Giải pháp` → `Chăm sóc & Đồng hành`  <br>*Lý do:* Chuẩn hóa trang gói dịch vụ đồng hành bảo trì, sao lưu, hỗ trợ kỹ thuật lâu dài. |
| **12** | `/bang-gia` | `/bang-gia` | **Core Commercial Hub** | **REFINE** | `Trang chủ` → `Bảng giá minh bạch`  <br>*Lý do:* Giữ nguyên URL, tái cấu trúc nội dung hiển thị thành mô hình 3 cột minh bạch (Setup + Duy trì + Ad spend). |
| **13** | `/kien-thuc`, `/kien-thuc/:slug` | `/kien-thuc`, `/kien-thuc/:slug` | **Knowledge Hub** | **KEEP** | `Trang chủ` → `Kiến thức` → `:slug`  <br>*Lý do:* Giữ nguyên toàn bộ cấu trúc bài viết chia sẻ kinh nghiệm kinh doanh địa phương. |
| **14** | `/du-an`, `/du-an/:slug` | `/du-an`, `/du-an/:slug` | **Proof / Case Studies** | **KEEP** | `Trang chủ` → `Dự án thực tế` → `:slug`  <br>*Lý do:* Giữ nguyên các bài phân tích dự án thực tế làm bằng chứng kiểm chứng. |

---

## 3. Quy Hoạch Ý Định Tìm Kiếm (Search Intent) Cho Các Trang Vệ Tinh AI

Nhằm tránh hiện tượng Keyword Cannibalization (tự dẫm chân từ khóa) giữa 4 trang AI Search, mỗi trang được quy định một góc nhìn chuyên biệt:

```
                                [PILLAR 02: ĐƯỢC TÌM THẤY]
                                 /giai-phap/duoc-tim-thay
                                             │
      ┌──────────────────────┬───────────────┴───────────────┬──────────────────────┐
      │                      │                               │                      │
      ▼                      ▼                               ▼                      ▼
[/dich-vu/geo]         [/dich-vu/aeo]                 [/dich-vu/seo-ai]     [/dich-vu/seo-chatgpt]
Ý định tìm kiếm:       Ý định tìm kiếm:               Ý định tìm kiếm:      Ý định tìm kiếm:
Tối ưu tổng thể đề     Xuất hiện trong câu            Tối ưu hiển thị       Được gợi ý trực tiếp
xuất của các mô hình   trả lời trực tiếp trên         khung tóm tắt         trong hội thoại trò
AI đa nền tảng         Perplexity & Siri              Google AI Overviews   chuyện với ChatGPT
```

### Chi tiết Search Intent & Thẻ Canonical:
1. **Trang `/dich-vu/geo` (Generative Engine Optimization):**
   - **Target Intent:** Khách hàng muốn chuẩn bị thương hiệu cho kỷ nguyên tìm kiếm bằng AI tổng quát.
   - **Thẻ Canonical:** Tự trỏ về chính nó (`https://localmate.vn/dich-vu/geo`).
   - **Liên kết dẫn dắt (Contextual CTA):** *"Tìm hiểu giải pháp Hiện diện & Tìm kiếm toàn diện của Localmate →"* (Dẫn về `/giai-phap/duoc-tim-thay`).
2. **Trang `/dich-vu/aeo` (Answer Engine Optimization):**
   - **Target Intent:** Tối ưu hóa các cấu trúc câu trả lời hỏi - đáp ngắn gọn (FAQ), định nghĩa khái niệm để bot đọc ngay lập tức.
   - **Thẻ Canonical:** Tự trỏ về chính nó.
3. **Trang `/dich-vu/seo-ai` (Google AI Overviews SEO):**
   - **Target Intent:** Doanh nghiệp lo sợ tính năng AI tóm tắt đầu trang của Google làm giảm lượt nhấp truyền thống.
   - **Thẻ Canonical:** Tự trỏ về chính nó.
4. **Trang `/dich-vu/seo-chatgpt` (ChatGPT / SearchGPT Optimization):**
   - **Target Intent:** Doanh nghiệp muốn khi người dùng hỏi mua hàng hoặc hỏi địa chỉ trên ChatGPT thì quán/cơ sở mình được nhắc tên.
   - **Thẻ Canonical:** Tự trỏ về chính nó.

---

## 4. Chiến Lược Cấu Hình Kỹ Thuật (Nginx / Cloudflare / Vite Router)

### 4.1. Mã Phản Hồi 301 Tĩnh Cho Các Đường Dẫn Cũ
Khi người dùng hoặc Googlebot truy cập các đường dẫn alias cũ, hệ thống tự động điều hướng 301 vĩnh viễn về đường dẫn chuẩn:
- `/dich-vu/google-maps-seo` `301` → `/giai-phap/duoc-tim-thay`
- `/dich-vu/seo-maps` `301` → `/giai-phap/duoc-tim-thay`
- `/local-search` `301` → `/giai-phap/duoc-tim-thay`
- `/chay-khach-van-hanh` `301` → `/giai-phap/van-hanh-tu-dong-hoa`
- `/chay-khach-cham-soc` `301` → `/giai-phap/dong-hanh-duy-tri`
- `/dich-vu-geo` `301` → `/dich-vu/geo`
- `/dich-vu-aeo` `301` → `/dich-vu/aeo`

### 4.2. Cấu Trúc Dữ Liệu Có Cấu Trúc (BreadcrumbList Schema)
Tất cả các trang đều phải được inject JSON-LD `BreadcrumbList` chuẩn mực để hiển thị thanh điều hướng rõ ràng trên trang kết quả tìm kiếm Google (SERP).
