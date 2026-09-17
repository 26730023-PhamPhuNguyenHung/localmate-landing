# Quy Chuẩn Chống Rác AI (Anti-AI Slop Rules) — LocalMate

## 1. Danh Sách Đen Các Cụm Từ Cấm Kỵ (Forbidden Clichés)
Tuyệt đối KHÔNG sử dụng các cụm từ sáo rỗng sau trong bất kỳ phần nào của bài viết:
- ❌ *"Trong thời đại công nghệ số 4.0 phát triển như vũ bão..."*
- ❌ *"Trong bối cảnh thị trường cạnh tranh ngày càng khốc liệt..."*
- ❌ *"Đóng một vai trò vô cùng quan trọng không thể thiếu..."*
- ❌ *"Hãy cùng chúng tôi tìm hiểu chi tiết trong bài viết dưới đây..."*
- ❌ *"Ở phần tiếp theo, chúng ta sẽ cùng đi sâu vào..."*
- ❌ *"Tóm lại, có thể thấy rằng..."*
- ❌ *"Không còn nghi ngờ gì nữa..."*
- ❌ *"Một giải pháp toàn diện và đột phá..."*

## 2. Cấm Ngụy Trang Placeholder Dưới Mọi Hình Thức
Hệ thống kiểm duyệt tự động (`validate-content.ts`) sẽ từ chối bài viết ngay lập tức nếu xuất hiện bất kỳ chuỗi nào sau:
- ❌ `đang được biên tập theo tiêu chuẩn thực tế của LocalMate`
- ❌ `chúng tôi sẽ cập nhật các ví dụ cụ thể tại đây`
- ❌ `nội dung chi tiết cho mục [...] sẽ được bổ sung`
- ❌ `placeholder`
- ❌ `lorem ipsum`

## 3. Cấm Trình Bày Giả Tạo (Fake Structure)
- **Checklist giả tạo**: Đưa ra các gạch đầu dòng chung chung không thể hành động (ví dụ: *"Bước 1: Nâng cao nhận thức; Bước 2: Tối ưu quy trình"*). Checklist phải là hành động kiểm chứng được: *"Bước 1: Yêu cầu agency cung cấp thông tin tài khoản quản trị tên miền đứng tên email của bạn"*.
- **Bảng biểu độn nội dung**: Tạo bảng nhưng các ô bên trong chỉ lặp lại câu văn vô nghĩa ("Tốt", "Khá", "Cần thiết").
- **Kéo dài từ ngữ (Word Stuffing)**: Viết 5 câu cùng một ý để tăng số lượng từ từ 800 lên 1.500 từ. Rule của LocalMate: **Chất lượng nội dung (Information Gain) > Số lượng từ (Word Count)**. Thà viết 1.200 từ súc tích thực chiến còn hơn 3.000 từ nước lã.
