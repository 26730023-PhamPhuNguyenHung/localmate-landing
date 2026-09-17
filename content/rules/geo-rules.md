# Quy Chuẩn GEO & Trích Dẫn AI Search — LocalMate GEO Rules

## 1. Định Nghĩa GEO (Generative Engine Optimization)
GEO là tối ưu hóa nội dung để các cỗ máy tìm kiếm dựa trên LLM (Google AI Overviews, Gemini, ChatGPT Search, Perplexity AI, Copilot) có thể:
1. **Tìm nạp (Retrieve)** chính xác đoạn văn trả lời mà không bị hiểu sai ngữ cảnh.
2. **Trích dẫn trực tiếp (Direct Citation)** nguyên văn hoặc tóm lược kèm URL nguồn về `localmate.vn`.

## 2. Tiêu Chuẩn "Đoạn Văn Độc Lập" (Standalone Passage Standard)
Mọi khối nội dung quan trọng (đặc biệt là TL;DR và định nghĩa ở đầu mỗi H2) phải tuân thủ nghiêm ngặt 3 nguyên tắc:
- **Chủ ngữ thực thể rõ ràng (Explicit Entity Subject)**:
  - ❌ *Sai*: "Nó giúp các chủ tiệm giải quyết bài toán tiếp cận khách hàng trên mạng..."
  - ✅ *Đúng*: "Website doanh nghiệp giúp các hộ kinh doanh và chủ tiệm địa phương tiếp cận khách hàng đang chủ động tìm kiếm trên Google..."
- **Trọn vẹn ý nghĩa khi đứng một mình**: Nếu trích đoạn đó ra khỏi bài viết, một người đọc bình thường hoặc một con bot AI vẫn hiểu đúng 100% bối cảnh và kết luận.
- **Fact Density (Mật độ thông tin cao)**: Chứa định nghĩa rõ ràng, phân loại cụ thể, có số liệu hoặc tiêu chí rành mạch.

## 3. Cấu Trúc Bảng & Danh Sách Chuẩn Máy Đọc
- **Bảng đối chiếu (Comparison Table)**: Luôn có header cột rõ ràng, giá trị từng ô ngắn gọn, dễ dàng chuyển đổi thành JSON key-value.
- **Cấu trúc Nếu... Thì... (Conditional Logic)**: Rất được AI Overviews ưa chuộng khi giải thích quyết định kinh doanh:
  - *"Nếu bạn đang chạy quảng cáo Google Ads tìm kiếm $\rightarrow$ Bắt buộc phải có website/landing page."*
  - *"Nếu bạn chỉ bán hàng theo trào lưu ngắn hạn dưới 1 tháng $\rightarrow$ Chưa nên tốn chi phí làm website."*

## 4. Bằng Chứng & Nguồn Dẫn Chứng Có Thể Xác Minh
- Khi trích dẫn thông tin thuật toán: Nêu rõ "Theo tài liệu chính thức từ Google Search Central...".
- Khi nêu quy định tên miền: Nêu rõ "Theo quy định của Trung tâm Internet Việt Nam (VNNIC)...".
- AI Search có cơ chế lọc bỏ các tuyên bố không có nguồn gốc (unsupported claims). Nội dung càng minh bạch nguồn thì xác suất được trích dẫn càng cao.
