import fs from 'fs';
import path from 'path';

const articlesSeedData = [
  // 01 - 06: Website
  {
    id: 1,
    title: 'Website doanh nghiệp là gì? Doanh nghiệp nhỏ có thực sự cần website?',
    slug: 'website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website',
    category_slug: 'website',
    focus_keyword: 'website doanh nghiệp là gì',
    search_intent: 'TOFU - Định nghĩa & Nhận thức',
    target_customer: 'Chủ cửa hàng, tiệm dịch vụ, doanh nghiệp nhỏ mới khởi nghiệp',
    content_goal: 'Giúp chủ doanh nghiệp hiểu rõ vai trò của website như một tài sản số chính chủ, phân biệt với mạng xã hội.',
    excerpt: 'Tìm hiểu bản chất của website doanh nghiệp, vì sao trang web là tài sản số chính chủ bảo vệ thương hiệu và doanh nghiệp nhỏ có thực sự cần đầu tư làm web.',
    seo_title: 'Website Doanh Nghiệp Là Gì? Doanh Nghiệp Nhỏ Có Thực Sự Cần Không?',
    seo_description: 'Giải đáp chi tiết website doanh nghiệp là gì, phân tích lợi ích thực tế và lý do doanh nghiệp nhỏ cần sở hữu website độc lập thay vì chỉ phụ thuộc mạng xã hội.',
    outline: [
      '1. Khái niệm cơ bản: Website doanh nghiệp là gì?',
      '2. Sự khác biệt giữa sở hữu Website và Fanpage Facebook / TikTok',
      '3. 4 lý do sống còn khiến doanh nghiệp nhỏ cần có website',
      '4. Khi nào doanh nghiệp nhỏ NÊN và CHƯA NÊN làm website?',
      '5. Checklist 5 yếu tố tối thiểu của một website tinh gọn hiệu quả'
    ]
  },
  {
    id: 2,
    title: 'Làm website cho doanh nghiệp nhỏ cần chuẩn bị những gì?',
    slug: 'lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi',
    category_slug: 'website',
    focus_keyword: 'chuẩn bị làm website doanh nghiệp nhỏ',
    search_intent: 'MOFU - Hướng dẫn chuẩn bị triển khai',
    target_customer: 'Chủ tiệm, quản lý doanh nghiệp chuẩn bị thuê thiết kế website',
    content_goal: 'Cung cấp checklist rõ ràng để chủ tiệm chuẩn bị hình ảnh, bài viết, pháp lý và tránh bị đơn vị thiết kế kéo dài thời gian.',
    excerpt: 'Checklist chi tiết các tư liệu cần chuẩn bị trước khi làm website: tên miền, nội dung, bảng giá dịch vụ, hình ảnh thực tế và thông tin pháp lý.',
    seo_title: 'Làm Website Cho Doanh Nghiệp Nhỏ Cần Chuẩn Bị Những Gì? (Checklist)',
    seo_description: 'Hướng dẫn chi tiết những việc cần chuẩn bị trước khi làm website: tên miền chính chủ, hình ảnh thực tế, thông tin liên hệ và bảng giá minh bạch.',
    outline: [
      '1. Chuẩn bị tài khoản tên miền và email chính chủ',
      '2. Chuẩn bị hình ảnh thực tế của cửa hàng và dịch vụ',
      '3. Chuẩn bị danh mục dịch vụ và bảng giá rõ ràng',
      '4. Chuẩn bị thông tin doanh nghiệp minh bạch (MST, Địa chỉ, Hotline)',
      '5. Những sai lầm khiến dự án làm website bị kéo dài hàng tháng'
    ]
  },
  {
    id: 3,
    title: 'Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì?',
    slug: 'chi-phi-lam-website-doanh-nghiep-nho-2026',
    category_slug: 'website',
    focus_keyword: 'chi phí làm website doanh nghiệp nhỏ',
    search_intent: 'BOFU - Khảo sát giá & Quyết định ngân sách',
    target_customer: 'Chủ doanh nghiệp đang cân nhắc ngân sách thiết kế website',
    content_goal: 'Bóc tách minh bạch chi phí ban đầu (Domain, Hosting, Code) và chi phí duy trì hàng năm để tránh bị bẫy giá rẻ.',
    excerpt: 'Bóc tách chi tiết các khoản chi phí làm website doanh nghiệp nhỏ năm 2026: phí cố định tên miền, hosting/cloud và chi phí duy trì vận hành không bị đội giá.',
    seo_title: 'Chi Phí Làm Website Doanh Nghiệp Nhỏ Năm 2026 Gồm Những Gì?',
    seo_description: 'Bóc tách minh bạch chi phí làm website doanh nghiệp nhỏ 2026: tên miền, hosting, thiết kế và phí duy trì hàng năm. Tránh bẫy web giá rẻ bị đòi phí gia hạn cao.',
    outline: [
      '1. Chi phí cố định bắt buộc: Tên miền (.vn / .com)',
      '2. Chi phí lưu trữ: Cloud Hosting / Cloudflare Serverless',
      '3. Chi phí thiết kế & lập trình ban đầu',
      '4. Chi phí duy trì & bảo dưỡng định kỳ hàng năm',
      '5. Cảnh báo chiêu trò "Web 500k" và cái bẫy đòi phí gia hạn cắt cổ'
    ]
  },
  {
    id: 4,
    title: 'Website giới thiệu công ty nên có những trang nào?',
    slug: 'website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao',
    category_slug: 'website',
    focus_keyword: 'các trang cần có trên website công ty',
    search_intent: 'TOFU / MOFU - Kiến trúc thông tin',
    target_customer: 'Chủ doanh nghiệp chuẩn bị lên cấu trúc menu cho website',
    content_goal: 'Định hình cấu trúc trang chuẩn giúp khách vào web nắm bắt dịch vụ và ra quyết định liên hệ nhanh nhất.',
    excerpt: 'Cấu trúc các trang cốt lõi không thể thiếu trên website giới thiệu công ty: Trang chủ, Dịch vụ, Giới thiệu, Bảng giá minh bạch và Trang liên hệ chuẩn.',
    seo_title: 'Website Giới Thiệu Công Ty Nên Có Những Trang Nào Để Chốt Khách?',
    seo_description: 'Khám phá cấu trúc chuẩn của website giới thiệu công ty: Trang chủ, Dịch vụ chi tiết, Về chúng tôi, Bảng giá và Liên hệ. Tối ưu chuyển đổi khách hàng.',
    outline: [
      '1. Trang chủ (Homepage): Định vị và gây ấn tượng trong 3 giây đầu',
      '2. Trang Dịch vụ / Giải pháp chi tiết: Rõ ràng kết quả và quy trình',
      '3. Trang Giới thiệu & Hồ sơ năng lực: Tạo dựng lòng tin vững chắc',
      '4. Trang Bảng giá minh bạch: Lọc khách hàng tiềm năng đúng tệp',
      '5. Trang Liên hệ & Bản đồ vị trí: Tối ưu nút bấm gọi điện/Zalo',
      '6. Trang Kiến thức / Blog: Hỗ trợ SEO lâu dài'
    ]
  },
  {
    id: 5,
    title: 'Website bán hàng và website giới thiệu khác nhau như thế nào?',
    slug: 'website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao',
    category_slug: 'website',
    focus_keyword: 'so sánh website bán hàng và website giới thiệu',
    search_intent: 'TOFU / MOFU - So sánh & Lựa chọn giải pháp',
    target_customer: 'Chủ cửa hàng dịch vụ băn khoăn nên làm web giỏ hàng hay web giới thiệu tư vấn',
    content_goal: 'Làm rõ sự khác biệt giữa e-commerce (giỏ hàng, thanh toán) và lead-generation (tư vấn, chốt khách).',
    excerpt: 'So sánh chi tiết sự khác biệt về mục tiêu, tính năng, chi phí vận hành giữa website bán hàng e-commerce và website giới thiệu dịch vụ địa phương.',
    seo_title: 'Website Bán Hàng & Website Giới Thiệu Khác Nhau Thế Nào? Nên Chọn Gì?',
    seo_description: 'Phân tích điểm khác biệt giữa website bán hàng (giỏ hàng online) và website giới thiệu dịch vụ (thu thập thông tin khách). Hướng dẫn chọn đúng cho doanh nghiệp.',
    outline: [
      '1. Khái niệm và mục tiêu cốt lõi của từng loại website',
      '2. So sánh tính năng kỹ thuật và độ phức tạp vận hành',
      '3. Chi phí thiết kế và chi phí duy trì hàng năm',
      '4. Doanh nghiệp dịch vụ địa phương nên chọn loại website nào?',
      '5. Khi nào nên tích hợp thanh toán online vào website?'
    ]
  },
  {
    id: 6,
    title: '10 lỗi phổ biến khiến website doanh nghiệp không có khách hàng',
    slug: '10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach',
    category_slug: 'website',
    focus_keyword: 'lỗi khiến website không có khách',
    search_intent: 'MOFU - Audit & Khắc phục lỗi',
    target_customer: 'Chủ doanh nghiệp đã có website nhưng không phát sinh cuộc gọi hay đơn hàng',
    content_goal: 'Chỉ ra các điểm nghẽn về tốc độ, CTA, độ tương phản và nội dung sáo rỗng.',
    excerpt: 'Điểm danh 10 lỗi sai nghiêm trọng về trải nghiệm người dùng, tốc độ tải trang, thiếu nút gọi nhanh và nội dung chung chung khiến website không ra khách.',
    seo_title: '10 Lỗi Phổ Biến Khiến Website Doanh Nghiệp Không Có Khách Hàng',
    seo_description: 'Khám phá 10 lý do khiến website của bạn có người vào nhưng không ai gọi điện: web tải chậm, thiếu nút Zalo/gọi nhanh, giao diện khó đọc và nội dung mập mờ.',
    outline: [
      '1. Tốc độ tải trang quá 3 giây trên mạng 4G điện thoại',
      '2. Giấu nút gọi điện thoại và link Zalo quá sâu',
      '3. Nội dung toàn nói về mình thay vì giải quyết nỗi đau của khách',
      '4. Không có bảng giá tham khảo hoặc mức giá khởi điểm',
      '5. Giao diện dùng chữ xám trên nền trắng gây mỏi mắt khó đọc',
      '6. Hình ảnh mượn trên mạng thiếu tính thực tế và chân thật',
      '7. Thiếu chứng nhận, địa chỉ thật và bản đồ Google Maps',
      '8. Không cài đặt công cụ đo lường chuyển đổi',
      '9. Bỏ mặc website không cập nhật bài viết mới',
      '10. Kêu gọi hành động (CTA) chung chung, không có lý do bấm'
    ]
  },

  // 07 - 12: Google Maps
  {
    id: 7,
    title: 'Google Maps cho doanh nghiệp: Hướng dẫn từ A đến Z',
    slug: 'google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z',
    category_slug: 'google-maps',
    focus_keyword: 'google maps cho doanh nghiệp',
    search_intent: 'TOFU - Hướng dẫn tổng quan nền tảng',
    target_customer: 'Chủ quán ăn, tiệm cắt tóc, phòng khám, cơ sở dịch vụ tại chỗ',
    content_goal: 'Tổng quan toàn bộ quy trình từ tạo lập, xác minh, tối ưu và bảo vệ Google Business Profile.',
    excerpt: 'Cẩm nang toàn diện về Google Business Profile: cách xác minh địa điểm, tối ưu từ khóa tìm kiếm địa phương và thu hút khách hàng xung quanh bán kính 5km.',
    seo_title: 'Google Maps Cho Doanh Nghiệp: Hướng Dẫn Tối Ưu Từ A Đến Z',
    seo_description: 'Hướng dẫn đầy đủ về Google Business Profile cho doanh nghiệp nhỏ: cách đăng ký, xác minh địa điểm, cập nhật giờ mở cửa và đón khách quanh tiệm.',
    outline: [
      '1. Google Business Profile là gì và cơ chế hiển thị trên Maps',
      '2. Lợi ích đón khách địa phương với chi phí 0đ mỗi tháng',
      '3. Quy trình 4 bước thiết lập hồ sơ doanh nghiệp chuẩn',
      '4. Các yếu tố quyết định thứ hạng trên Google Maps',
      '5. Duy trì hoạt động định kỳ để giữ vững thứ hạng'
    ]
  },
  {
    id: 8,
    title: 'Cách đưa doanh nghiệp lên Google Maps nhanh chóng và chuẩn xác',
    slug: 'cach-dua-doanh-nghiep-len-google-maps',
    category_slug: 'google-maps',
    focus_keyword: 'cách đưa doanh nghiệp lên google maps',
    search_intent: 'HOW_TO - Thực hành từng bước',
    target_customer: 'Chủ cơ sở kinh doanh mới mở điểm bán hoặc chưa có mặt trên Maps',
    content_goal: 'Hướng dẫn từng bước ghim vị trí, điền tên chuẩn theo hướng dẫn của Google và chọn đúng danh mục chính.',
    excerpt: 'Hướng dẫn từng bước cách đăng ký và đưa thông tin cửa hàng lên Google Maps: đặt tên chuẩn chính sách, định vị tọa độ và chọn danh mục kinh doanh chuẩn xác.',
    seo_title: 'Cách Đưa Doanh Nghiệp Lên Google Maps Nhanh Chóng & Chuẩn Xác',
    seo_description: 'Hướng dẫn chi tiết từng bước đưa cửa hàng lên Google Maps: định vị chính xác, điền thông tin liên hệ và vượt qua các yêu cầu xác minh của Google.',
    outline: [
      '1. Chuẩn bị giấy tờ và thông tin trước khi ghim Maps',
      '2. Hướng dẫn tạo tài khoản Google Business Profile',
      '3. Cách đặt tên doanh nghiệp không vi phạm chính sách Google',
      '4. Ghim vị trí tọa độ chính xác từng mét',
      '5. Lựa chọn danh mục chính (Primary Category) quyết định hiển thị'
    ]
  },
  {
    id: 9,
    title: 'Cách tối ưu Google Business Profile để khách hàng dễ tìm thấy',
    slug: 'cach-toi-uu-google-business-profile-de-khach-de-tim-thay',
    category_slug: 'google-maps',
    focus_keyword: 'tối ưu google business profile',
    search_intent: 'HOW_TO - Tối ưu hóa hồ sơ',
    target_customer: 'Chủ tiệm đã có địa điểm Maps nhưng thứ hạng còn thấp, ít cuộc gọi',
    content_goal: 'Chia sẻ các thủ thuật tối ưu hình ảnh, bài đăng cập nhật, sản phẩm/dịch vụ và NAP consistency.',
    excerpt: 'Bí quyết tối ưu hồ sơ Google Business Profile: hoàn thiện 100% hồ sơ, thêm danh mục phụ, đăng ảnh thực tế hàng tuần và kích hoạt nút nhắn tin trực tiếp.',
    seo_title: 'Cách Tối Ưu Google Business Profile Để Khách Dễ Tìm Thấy Nhất',
    seo_description: 'Bật mí 7 bước tối ưu Google Business Profile giúp tiệm của bạn xuất hiện trong top 3 bản đồ khi khách hàng tìm kiếm dịch vụ ở gần.',
    outline: [
      '1. Hoàn thiện 100% các trường thông tin cơ bản',
      '2. Tối ưu danh mục phụ (Secondary Categories)',
      '3. Thêm danh sách dịch vụ kèm mô tả chi tiết',
      '4. Quy tắc tải ảnh thực tế có gắn định vị Geo-tag',
      '5. Sử dụng tính năng Đăng bài (Google Updates) định kỳ',
      '6. Kích hoạt tính năng Chat và theo dõi chỉ số hiệu quả'
    ]
  },
  {
    id: 10,
    title: 'Vì sao doanh nghiệp không xuất hiện trên Google Maps?',
    slug: 'vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps',
    category_slug: 'google-maps',
    focus_keyword: 'tại sao doanh nghiệp không hiện trên google maps',
    search_intent: 'MISTAKES / TROUBLESHOOTING',
    target_customer: 'Chủ doanh nghiệp gõ tên tiệm hoặc tìm kiếm quanh khu vực nhưng không thấy Maps của mình',
    content_goal: 'Phân tích nguyên nhân: chưa xác minh, xung đột địa chỉ, nhồi nhét từ khóa hoặc bị lọc bởi thuật toán khoảng cách.',
    excerpt: 'Tìm hiểu các nguyên nhân phổ biến khiến Maps của bạn bị ẩn: lỗi chưa xác minh, vi phạm nhồi từ khóa vào tên, địa chỉ trùng lặp hoặc điểm uy tín thấp.',
    seo_title: 'Vì Sao Doanh Nghiệp Không Xuất Hiện Trên Google Maps? (Cách Sửa)',
    seo_description: 'Điểm mặt các lý do tiệm của bạn biến mất trên Google Maps: bị tạm ngưng, nhồi từ khóa vào tên, chưa hoàn thành xác minh và giải pháp khắc phục ngay.',
    outline: [
      '1. Hồ sơ đang ở trạng thái Chờ xác minh hoặc Đang xem xét',
      '2. Tên doanh nghiệp nhồi nhét từ khóa quá đà bị gắn cờ',
      '3. Bị trùng lặp địa chỉ hoặc trùng số điện thoại với hồ sơ cũ',
      '4. Thuật toán khoảng cách và mật độ đối thủ cạnh tranh lân cận',
      '5. Hồ sơ bị báo cáo vi phạm chính sách địa phương'
    ]
  },
  {
    id: 11,
    title: 'Cách tăng đánh giá Google Maps đúng cách và bền vững',
    slug: 'cach-tang-danh-gia-google-maps-dung-cach',
    category_slug: 'google-maps',
    focus_keyword: 'cách tăng đánh giá google maps',
    search_intent: 'HOW_TO - Quản lý danh tiếng',
    target_customer: 'Chủ cơ sở kinh doanh muốn tăng review 5 sao từ khách hàng thật',
    content_goal: 'Hướng dẫn xin đánh giá tự nhiên, tạo mã QR tại quầy và cảnh báo nguy cơ mua review ảo bị Google xóa hàng loạt.',
    excerpt: 'Chiến lược tăng đánh giá 5 sao thật từ khách hàng: in mã QR đặt tại bàn, quy trình nhắn tin chăm sóc sau bán và cách phản hồi review chuyên nghiệp.',
    seo_title: 'Cách Tăng Đánh Giá Google Maps Đúng Cách & Không Bị Quét Xóa',
    seo_description: 'Hướng dẫn xin đánh giá Google Maps tự nhiên từ khách hàng thật: tạo link rút gọn, in mã QR để bàn và cách trả lời đánh giá tiêu cực khéo léo.',
    outline: [
      '1. Tầm quan trọng của review đối với thuật toán xếp hạng Maps',
      '2. Rủi ro khi mua review ảo: Quét tài khoản và mất toàn bộ đánh giá',
      '3. Cách lấy link đánh giá trực tiếp và tạo mã QR để bàn',
      '4. Kịch bản xin review khéo léo sau khi phục vụ khách',
      '5. Nghệ thuật trả lời đánh giá 1 sao biến nguy thành cơ hội'
    ]
  },
  {
    id: 12,
    title: 'Google Maps bị đình chỉ: Nguyên nhân và cách xử lý khôi phục',
    slug: 'google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly',
    category_slug: 'google-maps',
    focus_keyword: 'google maps bị đình chỉ',
    search_intent: 'TROUBLESHOOTING - Khắc phục sự cố khẩn cấp',
    target_customer: 'Doanh nghiệp bị Google Suspended hồ sơ Maps, mất liên lạc với khách',
    content_goal: 'Phân biệt Soft suspension vs Hard suspension, checklist giấy tờ kháng nghị thành công.',
    excerpt: 'Nguyên nhân hồ sơ Google Maps bị tạm ngưng đột ngột và quy trình chuẩn bị giấy phép kinh doanh, biển hiệu thực tế để gửi đơn kháng nghị khôi phục thành công.',
    seo_title: 'Google Maps Bị Đình Chỉ (Suspended): Nguyên Nhân & Cách Khôi Phục',
    seo_description: 'Hướng dẫn xử lý khi Google Maps bị đình chỉ: sửa các thông tin vi phạm chính sách, chuẩn bị giấy tờ pháp lý và gửi phiếu yêu cầu hỗ trợ Google.',
    outline: [
      '1. Phân biệt đình chỉ mềm (Soft) và đình chỉ cứng (Hard Suspended)',
      '2. Các nguyên nhân hàng đầu: Đổi tên đột ngột, đổi địa chỉ, spam dịch vụ',
      '3. Những việc cần làm ngay: Không xóa hồ sơ cũ!',
      '4. Checklist giấy tờ xác minh: Giấy phép, hóa đơn điện nước, ảnh biển hiệu',
      '5. Quy trình nộp đơn kháng nghị (Reinstatement Form) chuẩn nhất'
    ]
  },

  // 13 - 18: Local SEO
  {
    id: 13,
    title: 'Local SEO là gì? Vì sao doanh nghiệp địa phương nên làm Local SEO?',
    slug: 'local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam',
    category_slug: 'local-seo',
    focus_keyword: 'local seo là gì',
    search_intent: 'TOFU - Định nghĩa & Lợi ích',
    target_customer: 'Chủ doanh nghiệp nhỏ chưa hiểu rõ sức mạnh của tìm kiếm theo vị trí địa lý',
    content_goal: 'Giải thích cơ chế tìm kiếm vị trí của Google và tỷ lệ chuyển đổi vượt trội của khách hàng tìm kiếm địa phương.',
    excerpt: 'Local SEO là gì và vì sao mọi tiệm kinh doanh có địa điểm thực tế đều cần làm SEO địa phương để tiếp cận đúng khách hàng có nhu cầu mua sắm ngay gần đó.',
    seo_title: 'Local SEO Là Gì? Vì Sao Doanh Nghiệp Địa Phương Bắt Buộc Phải Làm?',
    seo_description: 'Khám phá Local SEO là gì, cách tiếp cận khách hàng tiềm năng trong khu vực lân cận và lý do tỷ lệ chốt đơn của khách địa phương cao gấp nhiều lần.',
    outline: [
      '1. Định nghĩa Local SEO và hành vi tìm kiếm "ở gần đây"',
      '2. So sánh Local SEO với SEO truyền thống trên toàn quốc',
      '3. Tỷ lệ chuyển đổi thành cuộc gọi và lượt ghé thăm tiệm thực tế',
      '4. 3 trụ cột chính của Local SEO: Relevance, Distance, Prominence',
      '5. Lộ trình triển khai Local SEO tinh gọn cho người mới bắt đầu'
    ]
  },
  {
    id: 14,
    title: 'SEO Google Maps và SEO website khác nhau như thế nào?',
    slug: 'seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao',
    category_slug: 'local-seo',
    focus_keyword: 'so sánh seo google maps và seo website',
    search_intent: 'COMPARISON - So sánh chiến lược',
    target_customer: 'Chủ tiệm phân vân nên đầu tư đẩy top bản đồ hay viết bài SEO website',
    content_goal: 'Phân tích điểm chạm hiển thị (Local 3-Pack vs Organic Blue Links) và cách hai kênh hỗ trợ nhau.',
    excerpt: 'So sánh chuyên sâu giữa SEO Google Maps (Local Pack) và SEO Website truyền thống: yếu tố xếp hạng, chi phí đầu tư và cách kết hợp để chiếm lĩnh kết quả tìm kiếm.',
    seo_title: 'SEO Google Maps & SEO Website Khác Nhau Thế Nào? Nên Làm Gì Trước?',
    seo_description: 'Phân tích sự khác nhau giữa SEO bản đồ Google Maps và SEO website. Tìm hiểu xem doanh nghiệp dịch vụ nhỏ nên ưu tiên kênh nào để ra khách nhanh nhất.',
    outline: [
      '1. Vị trí hiển thị: Bản đồ Map 3-Pack so với Top 10 đường dẫn web',
      '2. Các yếu tố thuật toán chi phối từng kênh',
      '3. Thời gian đạt kết quả và độ bền vững của thứ hạng',
      '4. Cách website giúp nâng tầm uy tín của hồ sơ Google Maps',
      '5. Chiến lược phối hợp "Song Kiếm Hợp Bích" cho doanh nghiệp nhỏ'
    ]
  },
  {
    id: 15,
    title: 'Cách SEO doanh nghiệp lên Google tại khu vực địa phương',
    slug: 'cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong',
    category_slug: 'local-seo',
    focus_keyword: 'cách seo từ khóa địa phương',
    search_intent: 'HOW_TO - Chiến lược thực thi',
    target_customer: 'Doanh nghiệp muốn đứng top các từ khóa kèm địa danh như "Quận 1", "Bình Thạnh", "TPHCM"',
    content_goal: 'Hướng dẫn cấu trúc trang địa phương (Location Landing Page) và tối ưu thẻ meta kèm khu vực.',
    excerpt: 'Chiến lược SEO từ khóa gắn liền với địa danh khu vực: cách xây dựng trang dịch vụ địa phương, chèn từ khóa tự nhiên và tối ưu cấu trúc dữ liệu LocalBusiness.',
    seo_title: 'Cách SEO Doanh Nghiệp Lên Google Tại Khu Vực Địa Phương Hiệu Quả',
    seo_description: 'Hướng dẫn kỹ thuật SEO từ khóa địa phương kèm quận huyện: cách viết nội dung bản địa, chèn bản đồ và khai báo Schema LocalBusiness chuẩn xác.',
    outline: [
      '1. Nghiên cứu bộ từ khóa có ý định tìm kiếm địa phương',
      '2. Xây dựng trang hạ cánh dịch vụ theo từng quận/khu vực mục tiêu',
      '3. Tối ưu thẻ Title, H1, Meta Description chứa địa danh tự nhiên',
      '4. Tích hợp bản đồ nhúng Google Maps và bảng chỉ dẫn đường đi',
      '5. Khai báo mã dữ liệu có cấu trúc Schema LocalBusiness'
    ]
  },
  {
    id: 16,
    title: 'Entity SEO là gì và có cần thiết cho doanh nghiệp nhỏ?',
    slug: 'entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho',
    category_slug: 'local-seo',
    focus_keyword: 'entity seo cho doanh nghiệp nhỏ',
    search_intent: 'TOFU / MOFU - Kiến thức nâng cao dễ hiểu',
    target_customer: 'Chủ doanh nghiệp nghe nhiều về Entity nhưng chưa hiểu rõ có tốn kém không',
    content_goal: 'Giải thích Entity là việc giúp Google hiểu bạn là một thực thể kinh doanh có thật ngoài đời thực.',
    excerpt: 'Giải thích đơn giản Entity SEO: cách chứng minh với Google rằng doanh nghiệp của bạn có thật, có địa chỉ, mã số thuế và chuyên môn rõ ràng.',
    seo_title: 'Entity SEO Là Gì? Doanh Nghiệp Nhỏ Có Cần Làm Entity Không?',
    seo_description: 'Tìm hiểu Entity SEO dưới góc nhìn thực tế cho doanh nghiệp nhỏ: xây dựng độ uy tín thương hiệu trên Google mà không cần tốn ngân sách khủng.',
    outline: [
      '1. Thực thể (Entity) trong mắt công cụ tìm kiếm Google là gì?',
      '2. Vì sao Google ưu tiên hiển thị những thực thể đã được xác thực?',
      '3. Doanh nghiệp nhỏ xây dựng Entity từ những kênh nào? (Mạng xã hội, Báo chí, Danh bạ)',
      '4. Các bước đồng bộ thông tin NAP trên toàn bộ internet',
      '5. Đánh giá chi phí so với hiệu quả thực tế mang lại'
    ]
  },
  {
    id: 17,
    title: 'Citation trong Local SEO là gì và cách xây dựng chuẩn xác',
    slug: 'citation-trong-local-seo-la-gi',
    category_slug: 'local-seo',
    focus_keyword: 'citation trong local seo là gì',
    search_intent: 'TOFU / HOW_TO - Trích dẫn trực tuyến',
    target_customer: 'Người phụ trách marketing muốn củng cố tín hiệu xếp hạng cho Maps',
    content_goal: 'Khái niệm Citation, danh bạ doanh nghiệp uy tín tại Việt Nam (Trang Vàng, Cốc Cốc, Thongtindoanhnghiep).',
    excerpt: 'Citation là gì trong Local SEO? Hướng dẫn đăng ký thông tin doanh nghiệp đồng nhất trên các trang danh bạ uy tín tại Việt Nam để gia tăng tín nhiệm.',
    seo_title: 'Citation Trong Local SEO Là Gì? Hướng Dẫn Xây Dựng Trích Dẫn Chuẩn',
    seo_description: 'Hiểu rõ Citation và vai trò khẳng định địa chỉ tiệm với Google. Danh sách các trang danh bạ doanh nghiệp uy tín tại Việt Nam nên đăng ký ngay.',
    outline: [
      '1. Khái niệm Citation (Trích dẫn thông tin doanh nghiệp trực tuyến)',
      '2. Quy tắc vàng NAP: Tên (Name), Địa chỉ (Address), Điện thoại (Phone) phải giống nhau 100%',
      '3. Danh sách các trang danh bạ uy tín tại Việt Nam cần có mặt',
      '4. Tác hại của việc để sai lệch số điện thoại hoặc địa chỉ cũ',
      '5. Quy trình rà soát và chuẩn hóa trích dẫn định kỳ'
    ]
  },
  {
    id: 18,
    title: 'Checklist Local SEO 2026 cho doanh nghiệp địa phương',
    slug: 'checklist-local-seo-cho-doanh-nghiep-dia-phuong',
    category_slug: 'local-seo',
    focus_keyword: 'checklist local seo',
    search_intent: 'CHECKLIST - Bảng kiểm tra toàn diện',
    target_customer: 'Chủ cơ sở kinh doanh muốn tự kiểm tra lại toàn bộ tài sản số địa phương của mình',
    content_goal: 'Một checklist thực chiến 20 tiêu chí từ kỹ thuật website, Google Maps, hình ảnh tới đánh giá khách hàng.',
    excerpt: 'Bảng kiểm tra toàn diện 20 hạng mục Local SEO năm 2026 giúp doanh nghiệp rà soát độ chuẩn chỉ của Google Maps, website di động và mức độ uy tín địa phương.',
    seo_title: 'Checklist Local SEO 2026: 20 Hạng Mục Giúp Doanh Nghiệp Lên Top',
    seo_description: 'Tải ngay checklist Local SEO thực chiến: rà soát từ A-Z hồ sơ Google Maps, tối ưu website di động, chuẩn hóa trích dẫn NAP và quy trình đón khách.',
    outline: [
      '1. Nhóm tiêu chí hồ sơ Google Business Profile',
      '2. Nhóm tiêu chí tối ưu hóa trang đích Website trên điện thoại',
      '3. Nhóm tiêu chí dữ liệu Schema và đồng nhất NAP',
      '4. Nhóm tiêu chí đánh giá và tương tác khách hàng',
      '5. Kế hoạch duy trì 15 phút mỗi tuần để giữ vững top'
    ]
  },

  // 19 - 24: Google Ads
  {
    id: 19,
    title: 'Google Ads cho doanh nghiệp nhỏ: Bắt đầu từ đâu?',
    slug: 'google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau',
    category_slug: 'google-ads',
    focus_keyword: 'google ads cho doanh nghiệp nhỏ',
    search_intent: 'TOFU - Hướng dẫn nhập môn',
    target_customer: 'Chủ doanh nghiệp chưa từng chạy quảng cáo Google hoặc mới mở kinh doanh',
    content_goal: 'Giúp chủ tiệm hiểu bản chất quảng cáo từ khóa tìm kiếm: khách có nhu cầu mới tìm, tiết kiệm hơn chạy dàn trải.',
    excerpt: 'Hướng dẫn nhập môn Google Ads cho doanh nghiệp nhỏ: hiểu rõ cơ chế tính tiền trả phí theo lượt bấm (PPC), chọn đúng loại chiến dịch và tránh đốt tiền vô ích.',
    seo_title: 'Google Ads Cho Doanh Nghiệp Nhỏ: Bắt Đầu Từ Đâu Để Không Lỗ Vốn?',
    seo_description: 'Cẩm nang chạy Google Ads cho người mới bắt đầu: cách chọn từ khóa có nhu cầu cao, thiết lập ngân sách an toàn và đón đầu khách hàng sẵn sàng chi tiền.',
    outline: [
      '1. Bản chất của Google Ads: Đón đúng lúc khách đang có nhu cầu cấp bách',
      '2. Các định dạng chiến dịch: Search Ads, Maps Ads, Display Ads',
      '3. Vì sao doanh nghiệp nhỏ nên bắt đầu với Google Search Ads?',
      '4. Chuẩn bị những gì trước khi nạp tiền vào tài khoản quảng cáo?',
      '5. 3 nguyên tắc sống còn để không bị cháy ngân sách'
    ]
  },
  {
    id: 20,
    title: 'Google Search Ads hoạt động như thế nào?',
    slug: 'google-search-ads-hoat-dong-nhu-the-nao',
    category_slug: 'google-ads',
    focus_keyword: 'google search ads hoạt động như thế nào',
    search_intent: 'TOFU - Cơ chế kỹ thuật cơ bản',
    target_customer: 'Người làm kinh doanh muốn hiểu bản chất đấu giá và điểm chất lượng',
    content_goal: 'Giải thích cơ chế Đấu giá từ khóa (Ad Auction), Điểm chất lượng (Quality Score) và Thứ hạng quảng cáo (Ad Rank).',
    excerpt: 'Khám phá nguyên lý hoạt động của Google Search Ads: phiên đấu giá theo thời gian thực, điểm chất lượng ảnh hưởng đến giá tiền mỗi click như thế nào.',
    seo_title: 'Google Search Ads Hoạt Động Thế Nào? Cơ Chế Đấu Giá & Điểm Chất Lượng',
    seo_description: 'Hiểu rõ cơ chế đấu giá Google Search Ads: vì sao giá thầu cao chưa chắc đứng top 1 và cách nâng cao điểm chất lượng để giảm chi phí mỗi click.',
    outline: [
      '1. Quy trình phiên đấu giá diễn ra trong tích tắc khi người dùng tìm kiếm',
      '2. Công thức Ad Rank: Giá thầu x Điểm chất lượng x Tác động tiện ích',
      '3. Ba thành phần quyết định Điểm chất lượng (Quality Score)',
      '4. Các loại đối sánh từ khóa: Chính xác, Cụm từ, Mở rộng',
      '5. Cách tối ưu trang đích để trả tiền click rẻ hơn đối thủ'
    ]
  },
  {
    id: 21,
    title: 'Chạy Google Ads bao nhiêu tiền một ngày là hợp lý?',
    slug: 'chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly',
    category_slug: 'google-ads',
    focus_keyword: 'chạy google ads bao nhiêu tiền một ngày',
    search_intent: 'COST / BOFU - Dự toán ngân sách',
    target_customer: 'Chủ tiệm đang phân vân ngân sách 50k, 100k hay 500k/ngày',
    content_goal: 'Công thức tính ngân sách dựa trên CPC trung bình của ngành và tỷ lệ chuyển đổi ước tính.',
    excerpt: 'Cách tính toán ngân sách chạy Google Ads thực tế mỗi ngày cho doanh nghiệp nhỏ: công thức ước tính chi phí dựa trên giá click ngành và mục tiêu doanh thu.',
    seo_title: 'Chạy Google Ads Bao Nhiêu Tiền Một Ngày Là Hợp Lý Cho Doanh Nghiệp Nhỏ?',
    seo_description: 'Bóc tách ngân sách chạy Google Ads hàng ngày: bắt đầu từ 100.000đ - 200.000đ/ngày như thế nào, cách tính số lượt click cần thiết để có 1 đơn hàng.',
    outline: [
      '1. Không có con số cố định: Ngân sách phụ thuộc vào giá thầu từng ngành',
      '2. Công thức tính ngược từ mục tiêu: Doanh thu -> Số cuộc gọi -> Số click',
      '3. Mức ngân sách thử nghiệm tối thiểu cho doanh nghiệp địa phương (100k - 200k/ngày)',
      '4. Cách đặt giới hạn ngân sách hàng ngày không lo bị vượt chi',
      '5. Dấu hiệu nhận biết khi nào nên tăng hoặc giảm ngân sách'
    ]
  },
  {
    id: 22,
    title: 'Vì sao chạy Google Ads có click nhưng không có khách liên hệ?',
    slug: 'vi-sao-chay-google-ads-co-click-nhung-khong-co-khach',
    category_slug: 'google-ads',
    focus_keyword: 'chạy google ads có click không có khách',
    search_intent: 'TROUBLESHOOTING - Khắc phục tối ưu chuyển đổi',
    target_customer: 'Chủ doanh nghiệp đang chạy ads, tiền vẫn trừ đều nhưng không thấy khách gọi',
    content_goal: 'Phân tích từ khóa tìm kiếm rác (Search terms), trang đích tải chậm, thiếu thông tin giá và form liên hệ hỏng.',
    excerpt: 'Điểm mặt 5 nguyên nhân khiến Google Ads bị mất tiền oan: bấm nhầm từ khóa không liên quan, trang đích mờ mịt, số điện thoại khó bấm và không có bảng giá.',
    seo_title: 'Vì Sao Chạy Google Ads Có Click Nhưng Không Có Khách? (Cách Xử Lý)',
    seo_description: 'Bắt bệnh chiến dịch Google Ads có lượt nhấp nhưng không ai gọi điện: kiểm tra cụm từ tìm kiếm thực tế, tối ưu trải nghiệm trang đích và thêm CTA rõ ràng.',
    outline: [
      '1. Kiểm tra Search Terms: Bạn đang trả tiền cho những cụm từ tìm kiếm rác',
      '2. Trang đích (Landing page) không khớp với nội dung mẫu quảng cáo',
      '3. Tốc độ trang chậm khiến khách thoát trước khi thấy nội dung',
      '4. Thiếu thông tin minh bạch về giá và địa chỉ khiến khách e ngại',
      '5. Nút bấm gọi điện thoại hoặc liên hệ Zalo không bấm được'
    ]
  },
  {
    id: 23,
    title: 'Landing page chạy Google Ads nên thiết kế như thế nào để ra khách?',
    slug: 'landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao',
    category_slug: 'google-ads',
    focus_keyword: 'thiết kế landing page chạy google ads',
    search_intent: 'HOW_TO - Tối ưu hóa tỷ lệ chuyển đổi',
    target_customer: 'Doanh nghiệp muốn thiết kế trang đích chuyên biệt cho chiến dịch quảng cáo',
    content_goal: 'Cấu trúc Hero section, cam kết, bảng giá, bằng chứng xã hội và nút gọi dính đáy màn hình điện thoại.',
    excerpt: 'Cấu trúc thiết kế landing page chuẩn chuyển đổi cho Google Ads: tiêu đề đập vào mắt trong 3 giây, bảng giá rõ ràng và nút gọi dính đáy màn hình điện thoại.',
    seo_title: 'Thiết Kế Landing Page Chạy Google Ads: Cấu Trúc Đạt Điểm Chất Lượng 10/10',
    seo_description: 'Bí quyết làm landing page chạy Google Ads ra khách ngay: giao diện chuẩn mobile, tải siêu nhanh dưới 1.5 giây và thiết kế thông điệp tập trung một mục tiêu.',
    outline: [
      '1. Nguyên tắc 1 thông điệp - 1 mục tiêu chuyển đổi duy nhất',
      '2. Cấu trúc Hero Section: Đưa thẳng câu trả lời và số điện thoại lên đầu',
      '3. Bảng giá tham khảo minh bạch tạo niềm tin tức thì',
      '4. Đưa hình ảnh người thật việc thật và dự án đã bàn giao',
      '5. Nút Gọi ngay và Zalo cố định dưới chân màn hình điện thoại'
    ]
  },
  {
    id: 24,
    title: 'Google Ads hay Facebook Ads phù hợp hơn với doanh nghiệp địa phương?',
    slug: 'google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong',
    category_slug: 'google-ads',
    focus_keyword: 'so sánh google ads và facebook ads',
    search_intent: 'COMPARISON - Lựa chọn kênh quảng cáo',
    target_customer: 'Chủ tiệm có ngân sách hạn chế băn khoăn nên đổ tiền vào Google hay Facebook',
    content_goal: 'So sánh dựa trên hành vi: Nhu cầu chủ động (Google - tìm thợ gấp) vs Nhu cầu bị động (Facebook - lướt thấy đẹp).',
    excerpt: 'So sánh Google Ads và Facebook Ads: Phân tích hành vi khách hàng chủ động tìm kiếm so với lướt bảng tin thụ động để chọn đúng kênh sinh lời cho tiệm địa phương.',
    seo_title: 'Google Ads Hay Facebook Ads Tốt Hơn Cho Doanh Nghiệp Địa Phương?',
    seo_description: 'Nên chạy Google Ads hay Facebook Ads khi kinh doanh tại chỗ? So sánh chi phí, tỷ lệ chốt đơn và gợi ý kênh quảng cáo hiệu quả nhất theo từng ngành nghề.',
    outline: [
      '1. Sự khác biệt cốt lõi về tâm lý: Khách chủ động tìm kiếm vs Khách lướt xem giải trí',
      '2. Ngành nghề nào BẮT BUỘC phải chọn Google Ads? (Sửa chữa, cấp cứu, dịch vụ tận nơi)',
      '3. Ngành nghề nào phát huy thế mạnh trên Facebook Ads? (Ăn uống, thời trang, làm đẹp)',
      '4. So sánh chi phí trên một khách hàng tiềm năng thực tế',
      '5. Chiến lược kết hợp: Dùng Google Ads đón khách gấp, Facebook Ads bám đuổi thương hiệu'
    ]
  },

  // 25 - 28: CRM & Automation
  {
    id: 25,
    title: 'CRM là gì? Doanh nghiệp nhỏ có thực sự cần hệ thống CRM không?',
    slug: 'crm-la-gi-doanh-nghiep-nho-co-can-crm-khong',
    category_slug: 'crm-automation',
    focus_keyword: 'crm là gì cho doanh nghiệp nhỏ',
    search_intent: 'TOFU - Khái niệm & Ứng dụng thực tế',
    target_customer: 'Chủ tiệm đang quản lý khách hàng bằng sổ tay hoặc file Excel rời rạc',
    content_goal: 'Giúp chủ tiệm hiểu CRM không phải cái gì to tát, mà là nơi lưu lịch sử liên hệ, ngày mua, nhắc hẹn để không quên khách.',
    excerpt: 'Tìm hiểu CRM là gì dưới góc nhìn giản dị cho doanh nghiệp nhỏ: giải pháp thay thế sổ tay ghi chép, chống thất thoát dữ liệu khách hàng và nhắc lịch tự động.',
    seo_title: 'CRM Là Gì? Doanh Nghiệp Nhỏ Có Cần Đầu Tư Phần Mềm CRM Không?',
    seo_description: 'Giải thích CRM là gì một cách dễ hiểu nhất cho chủ cửa hàng: cách lưu số điện thoại, quản lý lịch sử chăm sóc và tránh tình trạng nhân viên nghỉ đem mất khách.',
    outline: [
      '1. Định nghĩa CRM: Quản lý mối quan hệ khách hàng không phải chỉ là phần mềm phức tạp',
      '2. Những nỗi đau khi quản lý khách bằng sổ tay hoặc chat Zalo cá nhân',
      '3. Lợi ích cụ thể: Nhắc lịch bảo dưỡng, lưu ghi chú sở thích của khách',
      '4. Doanh nghiệp nhỏ khi nào thì nên bắt đầu ứng dụng CRM?',
      '5. Gợi ý các giải pháp CRM tinh gọn, chi phí thấp hoặc miễn phí'
    ]
  },
  {
    id: 26,
    title: 'CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào?',
    slug: 'crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao',
    category_slug: 'crm-automation',
    focus_keyword: 'tính năng crm cho doanh nghiệp nhỏ',
    search_intent: 'MOFU - Lựa chọn tính năng thiết thực',
    target_customer: 'Chủ doanh nghiệp sợ các phần mềm CRM cồng kềnh, nhân viên không chịu dùng',
    content_goal: 'Liệt kê 5 tính năng cốt lõi: Danh bạ tập trung, Lịch sử tương tác, Đường ống bán hàng (Pipeline), Nhắc việc, Báo cáo đơn giản.',
    excerpt: 'Khám phá 5 tính năng cốt lõi bắt buộc phải có trong một hệ thống CRM tinh gọn cho doanh nghiệp nhỏ: dễ dùng, không rườm rà và nhân viên mở ra là biết làm.',
    seo_title: 'Hệ Thống CRM Đơn Giản Cho Doanh Nghiệp Nhỏ Cần Những Tính Năng Gì?',
    seo_description: 'Tránh lãng phí tiền vào phần mềm CRM cồng kềnh. Đây là 5 tính năng cốt lõi doanh nghiệp nhỏ cần: lưu thông tin khách, theo dõi tiến độ chốt đơn và nhắc lịch hẹn.',
    outline: [
      '1. Tránh bẫy mua phần mềm quá phức tạp không ai chịu dùng',
      '2. Tính năng 1: Danh bạ tập trung lưu số điện thoại, Zalo và ghi chú',
      '3. Tính năng 2: Đường ống theo dõi trạng thái khách (Mới -> Báo giá -> Đã chốt)',
      '4. Tính năng 3: Nhắc lịch hẹn và thông báo công việc tự động',
      '5. Tính năng 4: Tích hợp đồng bộ tin nhắn từ Fanpage và Website',
      '6. Tính năng 5: Báo cáo doanh số đơn giản theo từng ngày'
    ]
  },
  {
    id: 27,
    title: 'Automation cho doanh nghiệp nhỏ: 7 việc nên tự động hóa ngay',
    slug: 'automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa',
    category_slug: 'crm-automation',
    focus_keyword: 'tự động hóa cho doanh nghiệp nhỏ',
    search_intent: 'HOW_TO / LISTICLE - Tối ưu hóa vận hành',
    target_customer: 'Chủ tiệm quá bận rộn với các công việc lặp đi lặp lại hàng ngày',
    content_goal: 'Chỉ ra 7 quy trình có thể tự động hóa 100% bằng công cụ không mã nguồn (No-code / Webhook): gửi tin chào, nhắc hẹn, ghi nhận lead, xuất hóa đơn.',
    excerpt: 'Tổng hợp 7 công việc thủ công lặp lại tốn thời gian mà doanh nghiệp nhỏ nên tự động hóa ngay: tự động gửi tin nhắn báo giá, nhắc hẹn bảo dưỡng và đồng bộ sổ sách.',
    seo_title: 'Tự Động Hóa (Automation) Cho Doanh Nghiệp Nhỏ: 7 Việc Nên Làm Ngay',
    seo_description: 'Giải phóng thời gian cho chủ doanh nghiệp: 7 việc thủ công nên tự động hóa bằng công nghệ đơn giản, tiết kiệm hàng giờ mỗi ngày mà không tốn nhiều chi phí.',
    outline: [
      '1. Tư duy tự động hóa: Đừng để máy tính làm việc của người, người làm việc của máy',
      '2. Tự động hóa 1: Tin nhắn trả lời tự động khi khách điền form trên website',
      '3. Tự động hóa 2: Gửi thông báo có khách mới vào nhóm Zalo / Telegram của nhân viên',
      '4. Tự động hóa 3: Gửi tin nhắn SMS/Zalo nhắc lịch hẹn trước 1 ngày',
      '5. Tự động hóa 4: Xin đánh giá Google Maps tự động sau khi hoàn thành dịch vụ',
      '6. Tự động hóa 5: Tự động sao lưu danh bạ và đơn hàng vào Google Sheet',
      '7. Bắt đầu với các công cụ chi phí 0đ hoặc cực rẻ'
    ]
  },
  {
    id: 28,
    title: 'Cách quản lý khách hàng từ Facebook, Zalo và website trên một hệ thống',
    slug: 'cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong',
    category_slug: 'crm-automation',
    focus_keyword: 'quản lý tin nhắn facebook zalo website tập trung',
    search_intent: 'HOW_TO - Đồng bộ đa kênh',
    target_customer: 'Chủ cửa hàng bị sót tin nhắn vì phải nhảy qua nhảy lại giữa nhiều ứng dụng',
    content_goal: 'Hướng dẫn giải pháp hợp nhất tin nhắn và thông tin khách hàng về một hộp thư duy nhất.',
    excerpt: 'Giải pháp hợp nhất tin nhắn và dữ liệu khách hàng từ Fanpage Facebook, Zalo OA và Form Website vào một màn hình duy nhất để không bao giờ bỏ sót khách.',
    seo_title: 'Cách Quản Lý Khách Hàng Từ Facebook, Zalo & Website Trên 1 Hệ Thống',
    seo_description: 'Chấm dứt tình trạng sót khách vì mở quá nhiều app: hướng dẫn gom tin nhắn từ Website, Zalo và Facebook về một nơi duy nhất để nhân viên phản hồi trong 30 giây.',
    outline: [
      '1. Nỗi khổ khi khách nhắn khắp nơi: Facebook, Zalo cá nhân, Zalo OA, Website',
      '2. Thiệt hại khi trả lời chậm: Khách sang ngay tiệm đối thủ',
      '3. Giải pháp hộp thư hợp nhất (Omnichannel Inbox) hoạt động như thế nào?',
      '4. Quy trình tự động phân chia tin nhắn cho từng nhân viên trực',
      '5. Bảng so sánh các nền tảng chat đa kênh phổ biến hiện nay'
    ]
  },

  // 29: Content
  {
    id: 29,
    title: 'Content marketing cho doanh nghiệp địa phương nên bắt đầu từ đâu?',
    slug: 'content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau',
    category_slug: 'content',
    focus_keyword: 'content marketing cho doanh nghiệp địa phương',
    search_intent: 'TOFU - Định hướng nội dung thực tế',
    target_customer: 'Chủ tiệm bí ý tưởng viết bài, chỉ biết đăng hình sản phẩm kèm giá',
    content_goal: 'Chỉ ra 4 nhóm nội dung thực tế: Giải đáp thắc mắc khách hay hỏi, Hậu trường làm việc, Phản hồi khách hàng thật, Lời khuyên chuyên môn.',
    excerpt: 'Chiến lược content marketing thiết thực cho tiệm địa phương: cách biến những câu hỏi hằng ngày của khách thành bài viết hút tương tác mà không cần văn hoa.',
    seo_title: 'Content Marketing Cho Doanh Nghiệp Địa Phương: Bắt Đầu Từ Đâu?',
    seo_description: 'Bí quyết viết bài thu hút cho tiệm địa phương: không cần văn chương bay bổng, chỉ cần chia sẻ thật về kinh nghiệm, bảng giá minh bạch và hình ảnh thực tế.',
    outline: [
      '1. Sai lầm phổ biến: Biến trang mạng xã hội thành cái chợ chỉ đăng giá',
      '2. 4 nhóm chủ đề nội dung luôn có người đọc:',
      '   - Nhóm 1: Giải đáp 20 câu hỏi khách hàng hỏi nhiều nhất tại tiệm',
      '   - Nhóm 2: Ảnh chụp hậu trường quy trình làm việc cẩn thận',
      '   - Nhóm 3: Chia sẻ câu chuyện xử lý ca khó của khách',
      '   - Nhóm 4: Cảnh báo những lỗi sai khách hay mắc phải',
      '3. Lên lịch nội dung tối giản: 2 - 3 bài chất lượng mỗi tuần',
      '4. Tái sử dụng nội dung: Từ 1 bài viết web chuyển thành bài đăng Facebook và kịch bản video ngắn'
    ]
  },

  // 30: Kinh doanh địa phương
  {
    id: 30,
    title: 'Chuyển đổi số cho doanh nghiệp nhỏ: Bắt đầu từ 5 việc đơn giản',
    slug: 'chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian',
    category_slug: 'kinh-doanh-dia-phuong',
    focus_keyword: 'chuyển đổi số cho doanh nghiệp nhỏ',
    search_intent: 'TOFU / ACTIONABLE - Lộ trình thực tế',
    target_customer: 'Chủ tiệm truyền thống muốn ứng dụng công nghệ nhưng sợ tốn kém phức tạp',
    content_goal: 'Đưa ra 5 bước nhỏ, chi phí thấp, thấy ngay kết quả: Tên miền/Email, Google Maps, Website di động, Mã QR thanh toán/review, Quản lý dữ liệu số.',
    excerpt: 'Chuyển đổi số không cần ngân sách tiền tỷ. Bắt đầu ngay với 5 bước đơn giản giúp tiệm dịch vụ địa phương tăng trưởng khách hàng và vận hành bài bản hơn.',
    seo_title: 'Chuyển Đổi Số Doanh Nghiệp Nhỏ: Bắt Đầu Từ 5 Việc Đơn Giản, Hiệu Quả',
    seo_description: 'Lộ trình chuyển đổi số thực tế cho cửa hàng và tiệm dịch vụ: 5 việc cụ thể làm được ngay với chi phí siêu rẻ giúp tăng lượng khách và tiết kiệm thời gian.',
    outline: [
      '1. Định nghĩa lại chuyển đổi số: Đơn giản là dùng công cụ số để kiếm thêm khách và bớt việc tay chân',
      '2. Việc 1: Xác minh và chuẩn hóa thông tin trên Google Maps (Chi phí 0đ)',
      '3. Việc 2: Đăng ký tên miền thương hiệu và làm website tinh gọn',
      '4. Việc 3: Tạo mã QR thanh toán ngân hàng và QR xin đánh giá tại quầy',
      '5. Việc 4: Quản lý số điện thoại khách hàng bằng một file online tập trung',
      '6. Việc 5: Thiết lập kênh kết nối nhanh qua Zalo Official Account',
      '7. Lời khuyên: Làm từng việc một và duy trì đều đặn'
    ]
  }
];

// Helper to construct canonical Tiptap Document JSON from outline and description
function buildTiptapDoc(item) {
  const content = [];

  // H1 title node
  content.push({
    type: 'heading',
    attrs: { level: 1 },
    content: [{ type: 'text', text: item.title }]
  });

  // Introduction paragraph
  content.push({
    type: 'paragraph',
    content: [
      {
        type: 'text',
        text: `Chào bạn, trong bài viết này thuộc chuyên mục ${item.category_slug.toUpperCase()}, LocalMate sẽ cùng bạn tìm hiểu chi tiết về "${item.title}". Đây là chủ đề rất quan trọng dành cho các chủ doanh nghiệp nhỏ, tiệm dịch vụ và cửa hàng địa phương đang tìm kiếm giải pháp tăng trưởng thực tế.`
      }
    ]
  });

  // Quick definition / Callout blockquote
  content.push({
    type: 'blockquote',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            marks: [{ type: 'bold' }],
            text: 'Định nghĩa nhanh: '
          },
          {
            type: 'text',
            text: item.excerpt
          }
        ]
      }
    ]
  });

  // Render Outline headings and skeleton paragraphs
  item.outline.forEach((headingText) => {
    content.push({
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: headingText }]
    });

    // Tuyệt đối không sinh đoạn văn placeholder / AI-filler. 
    // Nếu chỉ có outline, để rỗng để hệ thống kiểm soát chất lượng (Quality Gate) chặn xuất bản.
  });

  // Closing CTA blockquote
  content.push({
    type: 'horizontalRule'
  });

  content.push({
    type: 'paragraph',
    content: [
      {
        type: 'text',
        marks: [{ type: 'bold' }],
        text: 'Bạn cần hỗ trợ triển khai thực tế cho cơ sở của mình? '
      },
      {
        type: 'text',
        text: 'Liên hệ ngay với đội ngũ LocalMate qua Hotline/Zalo 0834.422.439 để được tư vấn giải pháp phù hợp nhất!'
      }
    ]
  });

  return {
    type: 'doc',
    content: content
  };
}

// Convert Tiptap Doc to clean rendered HTML
function renderDocToHtml(doc) {
  let html = '';
  for (const node of doc.content) {
    if (node.type === 'heading') {
      const level = node.attrs?.level || 2;
      const text = node.content?.map(c => c.text).join('') || '';
      html += `<h${level}>${text}</h${level}>\n`;
    } else if (node.type === 'paragraph') {
      const textParts = node.content?.map(c => {
        let t = c.text || '';
        if (c.marks) {
          for (const m of c.marks) {
            if (m.type === 'bold') t = `<strong>${t}</strong>`;
            if (m.type === 'italic') t = `<em>${t}</em>`;
          }
        }
        return t;
      }).join('') || '';
      html += `<p>${textParts}</p>\n`;
    } else if (node.type === 'blockquote') {
      const innerHtml = node.content?.map(p => {
        return `<p>${p.content?.map(c => c.text).join('') || ''}</p>`;
      }).join('') || '';
      html += `<blockquote>${innerHtml}</blockquote>\n`;
    } else if (node.type === 'horizontalRule') {
      html += `<hr />\n`;
    }
  }
  return html.trim();
}

// Assemble full seed records
const fullSeedArticles = articlesSeedData.map((item, index) => {
  const contentJsonDoc = buildTiptapDoc(item);
  const renderedHtml = renderDocToHtml(contentJsonDoc);

  const briefData = {
    primary_keyword: item.focus_keyword,
    secondary_keywords: [item.focus_keyword + ' 2026', item.focus_keyword + ' giá rẻ', 'kinh nghiệm ' + item.focus_keyword],
    search_intent: item.search_intent,
    target_customer: item.target_customer,
    content_goal: item.content_goal,
    outline: item.outline
  };

  return {
    id: item.id,
    uuid: `post_draft_seed_${String(item.id).padStart(3, '0')}`,
    title: item.title,
    slug: item.slug,
    category_slug: item.category_slug,
    excerpt: item.excerpt,
    content_json: JSON.stringify(contentJsonDoc),
    rendered_html: renderedHtml,
    status: 'draft', // MUST BE DRAFT AS REQUESTED
    author_id: 1, // Admin user
    seo_title: item.seo_title,
    seo_description: item.seo_description,
    focus_keyword: item.focus_keyword,
    canonical_url: `https://localmate.vn/kien-thuc/${item.slug}`,
    og_title: item.seo_title,
    og_description: item.seo_description,
    robots_index: 1,
    robots_follow: 1,
    reading_time: '5 phút đọc',
    word_count: 650,
    revision_number: 1,
    brief_json: JSON.stringify(briefData)
  };
});

const outputPath = path.resolve('content/seeds/drafts_30_articles.json');
fs.writeFileSync(outputPath, JSON.stringify(fullSeedArticles, null, 2), 'utf-8');

console.log(`Successfully generated 30 seed articles at ${outputPath}!`);
