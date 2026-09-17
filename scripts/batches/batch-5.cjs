/**
 * scripts/batches/batch-5.cjs
 * Dữ liệu bài viết được viết lại chất lượng cao cho Batch 5 (Bài 21 - 25)
 * Cụm 4 & Cụm 5: Tối Ưu Chi Phí Ads & Khởi Động CRM Tinh Gọn
 */

const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('../content-builder.cjs');

const batch5Articles = [
  // ==========================================
  // BÀI 21 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 21,
    slug: 'chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly',
    title: 'Chạy Google Ads bao nhiêu tiền một ngày là hợp lý cho doanh nghiệp nhỏ?',
    category_slug: 'google-ads',
    focus_keyword: 'chạy google ads bao nhiêu tiền một ngày',
    search_intent: 'Budgeting / Decision - Cân đối ngân sách',
    target_customer: 'Chủ cơ sở băn khoăn không biết cần bao nhiêu vốn để chạy quảng cáo thử nghiệm',
    primary_question: 'Một tiệm dịch vụ địa phương cần nạp bao nhiêu tiền quảng cáo Google Ads mỗi ngày để có khách mà không sợ bị lỗ vốn?',
    unique_angle: 'Đừng nghe agency phán "phải nạp tối thiểu 10 - 20 triệu mới chạy được". Công thức tính ngân sách thực tế: Bắt đầu từ 50.000đ - 100.000đ/ngày dựa trên biên lợi nhuận của 1 đơn hàng thành công để đảm bảo luôn hòa vốn hoặc có lãi.',
    pillar_id: 19,
    related_service: '/giai-phap/thu-hut-khach-hang',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Với một cơ sở dịch vụ địa phương (sửa xe, sửa nhà, nha khoa, tiệm giặt ủi), mức ngân sách khởi điểm hợp lý nhất là từ **70.000đ đến 150.000đ/ngày** (tương đương khoảng 2.000.000đ - 4.500.000đ/tháng). Mức chi phí này đủ để bạn mang về từ 10 đến 25 lượt nhấp chuột chất lượng cao mỗi ngày từ những người đang có nhu cầu khẩn cấp quanh bán kính 5-10km. **Công thức an toàn:** Ngân sách quảng cáo cho 1 ngày không bao giờ được vượt quá số tiền lãi ròng của 01 đơn hàng bình quân. Chỉ cần có 1 khách chốt đơn trong ngày là bạn đã hòa vốn tiền quảng cáo, các khách tiếp theo là lợi nhuận thuần.'
      },
      {
        type: 'h2',
        text: 'Bảng tính ngân sách tối thiểu theo biên lợi nhuận của từng ngành nghề'
      },
      {
        type: 'table',
        headers: ['Ngành nghề dịch vụ', 'Giá trị lãi 1 đơn hàng (VNĐ)', 'Giá click ước tính (CPC)', 'Ngân sách đề xuất / ngày', 'Mục tiêu số cuộc gọi / ngày'],
        rows: [
          ['Thợ sửa khóa, mở khóa khẩn cấp', '200.000đ - 400.000đ', '5.000đ - 9.000đ', '70.000đ - 100.000đ', '1 - 2 cuộc gọi chốt ngay'],
          ['Sửa chữa máy giặt, điều hòa tại nhà', '300.000đ - 700.000đ', '7.000đ - 14.000đ', '100.000đ - 150.000đ', '2 - 3 cuộc gọi khảo sát'],
          ['Nha khoa (Cạo vôi, trám răng, bọc sứ)', '500.000đ - 3.000.000đ', '12.000đ - 25.000đ', '150.000đ - 250.000đ', '2 - 4 lịch hẹn khám'],
          ['Thông tắc bồn cầu, hút hầm cầu', '400.000đ - 1.200.000đ', '15.000đ - 35.000đ', '150.000đ - 300.000đ', '2 - 3 cuộc gọi xử lý gấp']
        ]
      },
      {
        type: 'h2',
        text: 'Chiến thuật "Thắt chặt bán kính - Bắn tỉa từ khóa"'
      },
      {
        type: 'p',
        text: 'Lý do khiến các chủ tiệm nhanh chóng cạn kiệt ngân sách là vì cài đặt quảng cáo quá rộng:'
      },
      {
        type: 'list',
        items: [
          '**Bán kính quá xa:** Tiệm ở quận Gò Vấp nhưng lại bật quảng cáo cho toàn bộ TP.HCM. Khi khách ở huyện Nhà Bè bấm vào gọi, thợ không thể sang phục vụ -> Mất trắng tiền click.',
          '**Khắc phục:** Cài đặt bán kính định vị chuẩn xác trong vòng 5-8km xung quanh cửa hàng. Tập trung ngân sách cho những tuyến đường gần nhất.',
          '**Không chạy từ khóa chung:** Bỏ từ khóa "điều hòa", chỉ chạy từ khóa mua hàng cụ thể: "sửa điều hòa gò vấp", "bơm ga máy lạnh quang trung".'
        ]
      },
      {
        type: 'h2',
        text: 'Nếu bạn đã chạy nhưng có click mà không có ai gọi?'
      },
      {
        type: 'p',
        text: 'Nhiều trường hợp tài khoản trừ tiền đều đặn mỗi ngày nhưng điện thoại im bặt. Hãy đọc ngay bài phân tích khắc phục sự cố [Vì sao chạy Google Ads có click nhưng không có khách liên hệ](/kien-thuc/vi-sao-chay-google-ads-co-click-nhung-khong-co-khach).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi tư vấn ngân sách chuẩn xác theo thực tế túi tiền của bạn tại [Dịch Vụ Quản Trị Quảng Cáo Hiệu Quả](/giai-phap/thu-hut-khach-hang), cam kết không ép khách nạp ngân sách lớn.'
      }
    ]
  },

  // ==========================================
  // BÀI 22 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 22,
    slug: 'vi-sao-chay-google-ads-co-click-nhung-khong-co-khach',
    title: 'Vì sao chạy Google Ads có click nhưng không có khách? Cách xử lý dứt điểm',
    category_slug: 'google-ads',
    focus_keyword: 'chạy google ads có click không có khách',
    search_intent: 'Troubleshooting / Problem aware - Chẩn đoán sự cố quảng cáo',
    target_customer: 'Chủ tiệm đang bị trừ tiền quảng cáo hàng ngày nhưng không có cuộc gọi hoặc tin nhắn nào',
    primary_question: 'Tại sao quảng cáo Google Ads vẫn báo có người nhấp vào xem đều đặn nhưng số hotline của tiệm cả ngày không reo chuông?',
    unique_angle: 'Đừng vội đổ lỗi hoàn toàn cho "click tặc". Trong 80% trường hợp thực tế, tiền mất là do: Bật nhầm đối sánh rộng làm tiền rơi vào các cụm từ tìm kiếm rác, nút gọi trên website bị hỏng liên kết và nhân viên không nghe máy kịp thời.',
    pillar_id: 19,
    related_service: '/giai-phap/thu-hut-khach-hang',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Nếu Google Ads của bạn bị trừ tiền liên tục nhưng không có khách gọi, hãy lập tức kiểm tra **3 thủ phạm chính**: (1) **Cụm từ tìm kiếm thực tế (Search Terms) bị tràn từ khóa rác**: Khách gõ tìm kiếm "tự sửa", "tải tài liệu", "tuyển dụng" nhưng quảng cáo của bạn vẫn kích hoạt do để đối sánh rộng; (2) **Nút gọi hotline trên điện thoại bị lỗi**: Khách bấm vào số nhưng điện thoại không tự mở bàn phím gọi (hoặc form đăng ký bị lỗi gửi); (3) **Thời gian tải trang đích quá chậm trên 4G**: Khách bấm vào quảng cáo, chờ 4 giây không thấy nội dung nên bấm nút "Back" thoát ra ngay trong khi Google vẫn trừ tiền của bạn.'
      },
      {
        type: 'h2',
        text: 'Bảng kiểm tra 5 bước chẩn đoán và khắc phục sự cố'
      },
      {
        type: 'table',
        headers: ['Bước kiểm tra', 'Nơi kiểm tra trong tài khoản', 'Dấu hiệu nhận biết lỗi', 'Thao tác khắc phục tức thì'],
        rows: [
          ['1. Kiểm tra Cụm từ tìm kiếm', 'Mục "Cụm từ tìm kiếm" (Search Terms)', 'Xuất hiện các từ: việc làm, tự làm, thanh lý, miễn phí', 'Tích chọn các từ đó và bấm "Thêm vào danh sách từ khóa phủ định"'],
          ['2. Kiểm tra Mạng hiển thị', 'Mục "Cài đặt chiến dịch" -> Mạng', 'Đang tích chọn "Bao gồm Mạng hiển thị của Google"', 'Bỏ tích ngay lập tức! Chỉ giữ lại duy nhất Mạng tìm kiếm'],
          ['3. Kiểm tra liên kết Hotline', 'Mở website trên điện thoại cá nhân', 'Bấm vào số điện thoại xem có nhảy sang ứng dụng gọi không', 'Sửa lại link nút bấm thành chuẩn định dạng `tel:09xxxx`'],
          ['4. Kiểm tra Vị trí thực tế', 'Mục "Vị trí" trong cài đặt', 'Đang để mặc định "Người ở hoặc thể hiện sự quan tâm đến vị trí"', 'Chuyển sang tùy chọn: "Người hiện đang ở vị trí của bạn"'],
          ['5. Kiểm tra thời gian nghe máy', 'Lịch sử cuộc gọi nhỡ trên điện thoại', 'Có các số lạ gọi đến nhưng chuông reo 2 tiếng rồi tắt', 'Bố trí người trực máy liên tục trong giờ chạy quảng cáo']
        ]
      },
      {
        type: 'h2',
        text: 'Cách phòng chống "Click tặc" (Click fraud) thực chiến'
      },
      {
        type: 'p',
        text: 'Hiện tượng đối thủ bấm phá quảng cáo của nhau là có thật tại một số ngành cạnh tranh khốc liệt (như hút bể phốt, cứu hộ ô tô). Bạn có thể tự bảo vệ ngân sách bằng 3 cách đơn giản:'
      },
      {
        type: 'list',
        items: [
          '**Không chạy top 1 tuyệt đối cả ngày:** Hãy đặt giá thầu ở mức vị trí số 2 hoặc số 3. Đối thủ bấm phá thường chỉ có thói quen nhấp vào kết quả đầu tiên.',
          '**Chặn dải IP đáng ngờ:** Nếu phát hiện một địa chỉ IP nhấp liên tục 5-7 lần trong 1 giờ mà không có cuộc gọi, hãy đưa địa chỉ IP đó vào mục "Loại trừ IP" trong cài đặt chiến dịch.',
          '**Tắt quảng cáo vào ban đêm nếu không có người trực:** Nếu bạn không trực máy sau 22h, hãy lên lịch tắt quảng cáo tự động để tránh lãng phí.'
        ]
      },
      {
        type: 'p',
        text: 'Yếu tố quan trọng nhất để chuyển đổi lượt click thành cuộc gọi là một trang đích chuẩn mực. Mời bạn xem tiếp [Cách thiết kế Landing page chạy Google Ads để ra khách](/kien-thuc/landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi nhận kiểm toán miễn phí tài khoản Google Ads đang chạy không hiệu quả tại [Dịch Vụ Tối Ưu Chiến Dịch Quảng Cáo](/giai-phap/thu-hut-khach-hang), giúp bạn chặn đứng các nguồn click rác trong 24 giờ.'
      }
    ]
  },

  // ==========================================
  // BÀI 23 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 23,
    slug: 'landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao',
    title: 'Landing page chạy Google Ads nên thiết kế thế nào để khách bấm gọi ngay?',
    category_slug: 'google-ads',
    focus_keyword: 'thiết kế landing page chạy google ads',
    search_intent: 'Solution aware / Design - Tối ưu tỷ lệ chuyển đổi',
    target_customer: 'Chủ tiệm chuẩn bị làm trang đích chạy quảng cáo dịch vụ địa phương',
    primary_question: 'Một Landing page chuyên chạy quảng cáo cho hộ kinh doanh cần có cấu trúc những tầng nội dung nào để khách xem xong bấm gọi ngay?',
    unique_angle: 'Đừng dùng landing page của các khóa học làm giàu hay mỹ phẩm với hàng chục màn hình cuộn mỏi tay. Landing page dịch vụ địa phương chỉ cần 5 tầng nội dung súc tích: Tiêu đề khớp từ khóa, Bảng giá minh bạch, Ảnh xưởng thật, Cam kết bảo hành và Nút gọi điện cố định.',
    pillar_id: 19,
    related_service: '/giai-phap/thu-hut-khach-hang',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Một **Landing page chạy Google Ads hiệu quả cho tiệm địa phương** chỉ cần độ dài vừa đủ trong **3 đến 5 lần vuốt màn hình điện thoại**. Khách hàng bấm từ quảng cáo vào không có kiên nhẫn đọc văn chương hoa mỹ. Họ chỉ tìm kiếm câu trả lời cho 3 câu hỏi trong 5 giây đầu: (1) Bạn có làm đúng dịch vụ tôi vừa tìm không? (2) Giá khởi điểm bao nhiêu? (3) Gọi cho bạn thì bao lâu thợ có mặt? Cấu trúc 5 tầng chuẩn gồm: Tầng 1 (Tiêu đề + Nút gọi ngay); Tầng 2 (Bảng giá minh bạch); Tầng 3 (Hình ảnh công trình thực tế); Tầng 4 (Cam kết bảo hành & Giấy tờ cơ sở); Tầng 5 (Chân trang ghim hotline + Zalo).'
      },
      {
        type: 'h2',
        text: 'Wireframe chuẩn 5 tầng nội dung của Landing Page chuyển đổi cao'
      },
      {
        type: 'table',
        headers: ['Tầng nội dung', 'Thành phần bắt buộc phải có', 'Mục tiêu tâm lý khách hàng'],
        rows: [
          ['Tầng 1: Màn hình đầu (Hero Section)', 'Tiêu đề trùng 100% với từ khóa Ads + Huy hiệu "Có mặt sau 15p" + Nút Gọi Hotline màu nổi', 'Xác nhận ngay lập tức: Đã tìm đúng nơi, có thể gọi thợ ngay'],
          ['Tầng 2: Bảng giá dịch vụ', 'Bảng liệt kê 3-5 hạng mục sửa chữa kèm mức giá khởi điểm rõ ràng', 'Xóa tan nỗi sợ bị chặt chém hoặc phát sinh phụ phí vô lý'],
          ['Tầng 3: Ảnh thợ & Công trình thật', '4-6 bức ảnh chụp cận cảnh thợ đang thao tác tại nhà khách hoặc xưởng', 'Tạo dựng lòng tin vững chắc: Đây là thợ thật, cơ sở thật quanh quận'],
          ['Tầng 4: Quy trình & Bảo hành', '3 bước làm việc (Khảo sát -> Báo giá -> Làm việc) + Phiếu bảo hành', 'Khách an tâm về trách nhiệm sau khi thanh toán'],
          ['Tầng 5: Nút liên hệ cố định (Sticky Bar)', 'Thanh chân trang ghim chặt 2 nút: "Gọi Ngay" (Xanh lá) và "Chat Zalo" (Xanh dương)', 'Khách có thể bấm liên hệ ở bất kỳ vị trí nào trên trang']
        ]
      },
      {
        type: 'h2',
        text: '3 Lỗi chết người khi làm Landing Page chạy Ads'
      },
      {
        type: 'list',
        items: [
          '**Trang đích trỏ về trang chủ chung chung:** Khách tìm "thay ổ khóa xe SH" nhưng bấm vào lại nhảy ra trang chủ giới thiệu lịch sử thành lập công ty khóa -> Khách thoát ngay trong 1 giây.',
          '**Tải quá nhiều ảnh dung lượng lớn chưa nén:** Mỗi bức ảnh nặng 3-5MB khiến trang tải mất 7 giây trên sóng 4G. Hãy nén toàn bộ ảnh dưới 150KB định dạng WebP.',
          '**Bắt khách điền biểu mẫu dài dòng:** Tuyệt đối không để form bắt nhập email đối với các dịch vụ sửa chữa địa phương. Nút gọi hotline và Zalo là đủ 100% nhu cầu.'
        ]
      },
      {
        type: 'p',
        text: 'Nếu bạn đang phân vân giữa việc dồn ngân sách cho Google Ads hay chạy Facebook Ads, hãy đọc bài so sánh chi tiết [Google Ads hay Facebook Ads phù hợp hơn với doanh nghiệp địa phương](/kien-thuc/google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi chuyên thiết kế [Landing Page Chuẩn Tốc Độ Cao](/giai-phap/thu-hut-khach-hang) tối ưu riêng cho các chiến dịch Google Ads, bàn giao chính chủ và cam kết xem trước mẫu 0đ.'
      }
    ]
  },

  // ==========================================
  // BÀI 24 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 24,
    slug: 'google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong',
    title: 'Google Ads hay Facebook Ads phù hợp hơn với doanh nghiệp địa phương?',
    category_slug: 'google-ads',
    focus_keyword: 'so sánh google ads và facebook ads',
    search_intent: 'Comparison / Strategy - Lựa chọn kênh tiếp cận',
    target_customer: 'Chủ tiệm phân vân không biết nên thuê người chạy quảng cáo Facebook hay Google',
    primary_question: 'Ngành nghề dịch vụ của tiệm tôi nên chạy Google Ads hay chạy Facebook Ads thì ra khách hiệu quả hơn?',
    unique_angle: 'Không có kênh nào tốt hơn tuyệt đối. Sự khác biệt nằm ở hành vi: Google Ads đánh vào nhu cầu chủ động (Khách đang cần gấp); Facebook Ads đánh vào nhu cầu thụ động (Khách xem ảnh đẹp, tạo cảm xúc). Lựa chọn chuẩn xác theo 10 nhóm ngành nghề cụ thể.',
    pillar_id: 19,
    related_service: '/giai-phap/thu-hut-khach-hang',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **Google Ads** là lựa chọn số 1 cho các dịch vụ giải quyết sự cố khẩn cấp hoặc sản phẩm có giá trị cao mà khách hàng chủ động tìm kiếm khi có nhu cầu (sửa khóa, sửa ống nước, cứu hộ ô tô, nha khoa, văn phòng luật, xây nhà). Khách hàng tìm trên Google là những người **đang có sẵn nhu cầu và muốn mua ngay**. Ngược lại, **Facebook Ads** là lựa chọn hoàn hảo cho các sản phẩm/dịch vụ mang tính thị giác, cảm xúc và giải trí (quán ăn ngon, tiệm trà sữa, spa làm đẹp, thời trang, làm móng nail, chụp ảnh cưới) — nơi khách hàng chưa có ý định mua nhưng bị thuyết phục khi nhìn thấy video và hình ảnh bắt mắt lướt qua bảng tin.'
      },
      {
        type: 'h2',
        text: 'Bảng ma trận lựa chọn kênh quảng cáo theo 10 nhóm ngành nghề'
      },
      {
        type: 'table',
        headers: ['Ngành nghề kinh doanh', 'Kênh nên ưu tiên số 1', 'Kênh bổ trợ số 2', 'Lý do hành vi khách hàng'],
        rows: [
          ['Sửa khóa, cứu hộ xe, điện nước', 'Google Search Ads (100%)', 'Không cần Facebook', 'Khách gặp sự cố cần thợ ngay trong 15 phút, không ai lướt Facebook tìm thợ khóa'],
          ['Nha khoa, phòng khám chuyên khoa', 'Google Search Ads (70%)', 'Facebook Ads (30%)', 'Khách đau răng tìm trên Google; Facebook dùng đăng video bác sĩ tạo uy tín'],
          ['Quán nướng, lẩu, cafe, tiệm trà', 'Facebook/TikTok Ads (90%)', 'Google Maps (10%)', 'Khách thèm ăn khi thấy video món ăn xèo xèo hấp dẫn trên bảng tin'],
          ['Gara ô tô, làm đẹp xe (Detailing)', 'Google Search Ads (60%)', 'Facebook Ads (40%)', 'Google đón khách bảo dưỡng/sửa chữa; Facebook đăng ảnh dán decal/phủ ceramic'],
          ['Tiệm Spa, làm móng (Nail), nối mi', 'Facebook/TikTok Ads (80%)', 'Google Maps (20%)', 'Chị em phụ nữ xem mẫu móng đẹp, video không gian thư giãn rồi rủ nhau đi']
        ]
      },
      {
        type: 'h2',
        text: 'So sánh về cách tính tiền và tỷ lệ ra cuộc gọi'
      },
      {
        type: 'list',
        items: [
          '**Google Ads tính tiền theo Click (CPC):** Bạn chỉ trả tiền khi có người thực sự bấm vào trang web của bạn. Chi phí mỗi click cao hơn (từ 5.000đ - 20.000đ) nhưng tỷ lệ gọi điện rất cao vì khách đang có nhu cầu thật.',
          '**Facebook Ads tính tiền theo Lượt hiển thị (CPM):** Cứ 1.000 người lướt qua bài viết là bạn mất tiền (khoảng 30.000đ - 80.000đ/1.000 lượt), bất kể họ có đọc hay không. Tỷ lệ tương tác cao nhưng nhiều bình luận hỏi giá rồi im lặng.'
        ]
      },
      {
        type: 'h2',
        text: 'Khi có khách liên hệ từ các kênh, quản lý như thế nào để không bị sót?'
      },
      {
        type: 'p',
        text: 'Nhiều chủ tiệm mải mê chạy quảng cáo nhưng khi khách nhắn tin qua Facebook, gọi điện qua website thì nhân viên ghi chép vào mẩu giấy rồi làm mất số. Hãy đọc tiếp bài viết nền tảng [CRM là gì và doanh nghiệp nhỏ có thực sự cần CRM không](/kien-thuc/crm-la-gi-doanh-nghiep-nho-co-can-crm-khong).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi giúp bạn phân tích đúng mô hình kinh doanh để lựa chọn kênh chạy quảng cáo hiệu quả nhất tại [Giải Pháp Thu Hút Khách Hàng](/giai-phap/thu-hut-khach-hang), bảo đảm không phung phí ngân sách.'
      }
    ]
  },

  // ==========================================
  // BÀI 25 - PILLAR ARTICLE
  // ==========================================
  {
    id: 25,
    slug: 'crm-la-gi-doanh-nghiep-nho-co-can-crm-khong',
    title: 'CRM là gì? Doanh nghiệp nhỏ có thực sự cần mua phần mềm CRM đắt tiền?',
    category_slug: 'crm-automation',
    focus_keyword: 'crm là gì cho doanh nghiệp nhỏ',
    search_intent: 'TOFU / Pillar - Giải ảo công nghệ',
    target_customer: 'Chủ tiệm nhỏ, xưởng dịch vụ nghe nói nhiều về CRM nhưng sợ phức tạp và tốn kém',
    primary_question: 'Hệ thống CRM thực chất là gì và một tiệm kinh doanh dưới 10 người có cần chi hàng chục triệu mua phần mềm CRM không?',
    unique_angle: 'Giải ảo nỗi sợ công nghệ. CRM cho tiệm nhỏ không phải là phần mềm cao siêu của các tập đoàn, mà chỉ đơn giản là phương pháp lưu trữ thông tin khách hàng có tổ chức (bắt đầu từ Google Sheet) để không bao giờ bị mất số khách cũ và biết khi nào cần nhắc lịch bảo dưỡng.',
    pillar_id: 25,
    related_service: '/giai-phap/van-hanh-tu-dong-hoa',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **CRM (Customer Relationship Management)** thực chất chỉ là từ viết tắt của việc **"Quản lý mối quan hệ với khách hàng"**. Đối với một cơ sở kinh doanh nhỏ dưới 10 nhân sự, bạn **TUYỆT ĐỐI CHƯA CẦN mua các phần mềm CRM cồng kềnh** tiêu tốn từ 10 đến 30 triệu đồng mỗi năm. Mục tiêu duy nhất của CRM ở quy mô tiệm địa phương là: (1) Lưu trữ số điện thoại và địa chỉ của từng khách hàng vào một nơi an toàn; (2) Ghi nhớ lịch sử họ đã làm dịch vụ gì, vào ngày nào, thợ nào làm; (3) Tự động nhắc bạn gọi điện hỏi thăm hoặc báo lịch bảo dưỡng định kỳ sau 3-6 tháng. Một bảng tính Google Sheet được thiết kế bài bản hoàn toàn có thể đóng vai trò là hệ thống CRM 0đ hiệu quả nhất cho bạn.'
      },
      {
        type: 'h2',
        text: 'Căn bệnh "Mất trí nhớ khách hàng" của các hộ kinh doanh'
      },
      {
        type: 'p',
        text: 'Hãy xem cách thức vận hành thông thường của 90% tiệm sửa xe, gara, tiệm rèm cửa hay cơ sở nhôm kính hiện nay:'
      },
      {
        type: 'list',
        items: [
          '**Ghi chép vào sổ tay hoặc tờ giấy rời:** Khách đến làm dịch vụ, thợ ghi số điện thoại vào một cuốn sổ tay nhem nhuốc dầu mỡ. Sau 3 tháng cuốn sổ bị thất lạc hoặc rách nát.',
          '**Lưu số vào điện thoại cá nhân của thợ:** Khách quen chỉ nhớ số của một người thợ nhất định. Đến khi người thợ đó nghỉ việc, họ mang theo toàn bộ danh bạ khách hàng quen sang xưởng đối thủ.',
          '**Không bao giờ chăm sóc lại khách cũ:** Khách thay bình ắc quy hay bọc răng sứ xong, 1 năm sau chủ tiệm không hề nhớ để nhắn tin hỏi thăm xem sản phẩm dùng có tốt không.'
        ]
      },
      {
        type: 'h2',
        text: 'Bảng so sánh 3 cấp độ quản lý khách hàng cho doanh nghiệp nhỏ'
      },
      {
        type: 'table',
        headers: ['Tiêu chí so sánh', 'Cấp độ 1: Sổ tay truyền thống', 'Cấp độ 2: Bảng tính Google Sheet chuẩn (LocalMate)', 'Cấp độ 3: Phần mềm CRM lớn (Salesforce, Hubspot)'],
        rows: [
          ['Chi phí đầu tư', '0đ (vài chục ngàn mua sổ)', '0đ (Miễn phí 100%)', '15.000.000đ - 50.000.000đ/năm'],
          ['Độ khó sử dụng', 'Rất dễ, ai cũng viết được', 'Cực kỳ dễ, dùng trên điện thoại như Excel', 'Rất khó, phải đào tạo nhân viên nhiều tuần'],
          ['Nguy cơ mất dữ liệu', 'Rất cao (cháy, ướt, mất sổ)', 'An toàn tuyệt đối trên đám mây Google', 'An toàn, nhưng bị phụ thuộc vào bên cung cấp'],
          ['Khả năng tự động nhắc hẹn', 'Không thể (phải lật từng trang nhớ)', 'Có thể kết nối Zalo/Telegram tự động báo lịch', 'Có sẵn, nhưng quá nhiều tính năng thừa']
        ]
      },
      {
        type: 'h2',
        text: 'Góc nhìn LocalMate: Bán hàng trước - Tự động hóa sau'
      },
      {
        type: 'pov',
        text: '**Nguyên tắc sống còn:** Đừng bao giờ mua phần mềm quản lý khi bạn chưa có quy trình làm việc thủ công thông suốt. Nếu bạn chưa có thói quen xin số điện thoại và ghi lại tên khách hàng sau mỗi đơn hàng, thì dù có cài đặt phần mềm đắt tiền nhất thế giới, hệ thống đó cũng sẽ bị bỏ hoang sau 2 tuần.'
      },
      {
        type: 'p',
        text: 'Để xem một hệ thống CRM tinh gọn chỉ cần giữ lại những tính năng nào, mời bạn đọc tiếp [CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào](/kien-thuc/crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi cung cấp giải pháp [Hệ Thống CRM & Vận Hành Tinh Gọn](/giai-phap/van-hanh-tu-dong-hoa) được thiết kế riêng cho thợ và chủ tiệm, dễ dùng như Zalo, giúp giữ chân 100% khách hàng cũ với chi phí 0đ.'
      }
    ]
  }
];

module.exports = { batch5Articles };
