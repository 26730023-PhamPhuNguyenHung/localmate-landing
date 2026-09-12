# LocalMate Active Context & SSOT Timeline

## 1. Project & Corporate Info
- **Tên doanh nghiệp chính thức**: **CÔNG TY TNHH LOCALMATE**
- **Mã số thuế**: **4001337934**
- **Địa chỉ trụ sở / Thuế**: 03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng, Việt Nam
- **Hotline / Zalo**: 0834.422.439
- **Email chính thức**: **contact@localmate.vn**
- **Huy hiệu Bộ Công Thương**: File logo chuẩn `public/logo-da-thong-bao-bct.png`
- **Tech stack**: React 18 + TypeScript + Vite + Vanilla CSS Custom Tokens + Lucide Icons.

---

## 2. Recent Accomplishments & Updates

### A. Xóa Nút CMS Quản Trị Khỏi Giao Diện Công Khai:
- Gỡ bỏ hoàn toàn nút `Mở CMS Quản Trị Bảng Giá` khỏi `PricingPage.tsx`.
- Đảm bảo an toàn bảo mật, khách hàng chỉ nhìn thấy bảng giá niêm yết công khai và nút liên hệ tư vấn.

### B. Thiết Kế Lại Toàn Bộ Bảng Giá 41 Dịch Vụ (`PricingMatrixSection.tsx` & `servicesCatalog.ts`):
- **Việt hóa 100%**: Chuyển toàn bộ tên dịch vụ kỹ thuật tiếng Anh sang tiếng Việt thực tế, dễ hiểu cho hộ kinh doanh và SME.
- **Thanh tìm kiếm nhanh**: Tích hợp ô Search tra cứu dịch vụ tức thì theo từ khóa.
- **Bố cục 3 cột thoáng đãng**: Card dịch vụ hiện đại có Icon màu sắc theo nhóm, badge phân loại, cam kết thời gian hoàn thành (`15–30 phút`, `1–2 ngày`), mức giá to rõ và nút CTA tư vấn.

### C. Header Mega Menu Full Width (1240px) & Footer MISA Light Theme:
- Header 1240px không bị rớt chữ trên bất kỳ tiêu đề nào, fix tràn viền 2 thẻ bên phải.
- Footer nền sáng chuẩn MISA/AMIS với 4 cột, dải social, trust pills và logo Bộ Công Thương.

### D. Tích Hợp Background Video Seamless Boomerang Loop Cho Hero Section:
- Cắt dựng video trừu tượng lượn sóng xanh (`Animating_abstract_green_wavy_ba._20260912095226.mp4`): kỹ thuật Boomerang loop 0s -> 3.5s rồi đảo ngược 3.5s -> 0s, loại bỏ frame trùng ở đỉnh và đáy để chuyển động trơn tru không khựng giật.
- Tối ưu dung lượng chuẩn web: MP4 H.264 (~740 KB) và WebM VP9 (~530 KB) không audio.
- Tích hợp vào `HeroSection.tsx` với overlay gradient mờ sáng tự nhiên, nền sáng chữ đậm, tương phản cao, tuyệt đối không glassmorphism, không cản trở click.
- Đã kiểm thử trực quan đa viewport (Desktop 1440, Tablet 768, Mobile 390) bằng `agent-browser`.

---

## 3. Production Readiness & Ads Launch Sprint (Current SSOT)
- **Lead Persistence & Webhook**: Đã tạo `src/services/leadService.ts` đồng bộ Google Sheets webhook, tự động kèm UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid`, referrer, path) và kích hoạt cả `lead_created` & `generate_lead` conversion events.
- **Analytics & Tracking**: Tích hợp đầy đủ GTM `dataLayer`, GA4 `gtag` và Meta Pixel `fbq` trong `index.html` và `src/analytics/tracker.ts`.
- **Zalo Link Direct**: Đồng bộ link Zalo toàn site thành `https://zalo.me/0834422439` (kết nối trực tiếp hotline).
- **CTA Actions Connected**: Hero "Nhận website demo 0đ", Starter Package, FAQ "Hỗ trợ trực tiếp ngay", Pricing Matrix "Tư vấn ngay" đều kết nối trực tiếp với LeadModal hoặc Router mà không có dead links/anchors.
- **Pháp nhân & MST**: Đồng bộ MST `4001337934` và Trụ sở ở `TrustSection.tsx` và `index.html` Schema.org.
- **Backlog**: Tạo `docs/post-launch-polish.md` lưu trữ danh mục cải tiến sau launch.

