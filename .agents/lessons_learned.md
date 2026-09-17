# 📚 LOCALMATE AGENTS LESSONS LEARNED & EDITORIAL RULES

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

