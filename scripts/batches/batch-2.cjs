/**
 * scripts/batches/batch-2.cjs
 * Dữ liệu bài viết được viết lại chất lượng cao cho Batch 2 (Bài 06 - 10)
 * Cụm 1 & Cụm 2: Trải nghiệm Web & Thiết lập Google Maps chuẩn chỉ
 */

const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('../content-builder.cjs');

const batch2Articles = [
  // ==========================================
  // BÀI 06 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 6,
    slug: '10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach',
    title: 'Vì sao website doanh nghiệp có người vào xem nhưng không có ai gọi điện?',
    category_slug: 'website',
    focus_keyword: 'lỗi khiến website không có khách',
    search_intent: 'Problem aware - Chẩn đoán điểm nghẽn chuyển đổi',
    target_customer: 'Chủ tiệm đã có website nhưng hàng tháng không nhận được cuộc gọi nào từ web',
    primary_question: 'Tại sao website có lượt truy cập nhưng khách xem xong thoát ra ngay mà không gọi điện thoại hay nhắn tin Zalo?',
    unique_angle: 'Đừng vội đổ lỗi cho việc website không đẹp hay thiếu hiệu ứng bắt mắt. Lý do lớn nhất khiến khách không gọi là: Nút hotline bị giấu, tải quá chậm trên mạng 4G di động, giấu bảng giá và không có địa chỉ thực tế tạo lòng tin.',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Nếu website của bạn có người vào xem nhưng không phát sinh cuộc gọi, 90% nguyên nhân nằm ở 3 điểm nghẽn trải nghiệm di động: (1) **Nút gọi điện thoại không bấm được trực tiếp** hoặc bị giấu ở chân trang buộc khách phải nhớ số; (2) **Giấu bảng giá**, bắt khách phải điền form để "nhận báo giá" trong khi họ đang cần so sánh giá gấp; (3) **Tốc độ tải trang trên 3 giây** khiến khách mất kiên nhẫn bấm quay lại tìm tiệm khác trên Google. Khách hàng địa phương cần sự nhanh chóng và minh bạch, không cần chiêm ngưỡng hiệu ứng nghệ thuật.'
      },
      {
        type: 'h2',
        text: 'Bảng chẩn đoán 6 điểm nghẽn khiến website "chết lâm sàng"'
      },
      {
        type: 'table',
        headers: ['Lỗi điểm nghẽn', 'Hiện tượng thực tế', 'Tác động tâm lý khách hàng', 'Cách sửa dứt điểm ngay'],
        rows: [
          ['1. Số điện thoại chỉ là ảnh/chữ thường', 'Khách dùng ngón tay ấn vào số điện thoại nhưng máy không tự mở bàn phím cuộc gọi', 'Khó chịu vì phải tìm giấy bút ghi chép -> Thoát ra', 'Gắn liên kết `tel:09xxxx` vào nút bấm nổi bật'],
          ['2. Giấu bảng giá', 'Trang web ghi "Giá liên hệ" hoặc yêu cầu điền form để xem giá', 'Nghi ngờ tiệm chặt chém hoặc báo giá tùy mặt khách', 'Công khai mức giá khởi điểm cho các dịch vụ phổ biến'],
          ['3. Bắt điền form quá nhiều thông tin', 'Bắt khách nhập Họ tên, Email, Địa chỉ, Nhu cầu chi tiết', 'Ngại gõ phím trên điện thoại, sợ bị spam quảng cáo', 'Chỉ để 1 nút "Nhắn Zalo Nhận Báo Giá Trong 5 Phút"'],
          ['4. Tải chậm trên sóng 4G', 'Website nhồi video nặng, banner trượt khiến máy giật lag', 'Khách tắt trang trước khi nội dung kịp hiển thị', 'Nén toàn bộ ảnh dưới 150KB, bỏ hiệu ứng trượt rườm rà'],
          ['5. Ảnh cơ sở lấy trên mạng', 'Dùng ảnh người mẫu Tây mặc đồ thợ sửa chữa trong phòng máy', 'Nhận diện ngay là cơ sở ảo/môi giới trung gian', 'Thay bằng ảnh chụp thợ và đồ nghề thật tại xưởng'],
          ['6. Không có địa chỉ và bản đồ', 'Chỉ để số di động, không có số nhà cụ thể tại địa phương', 'Sợ gặp phải đơn vị lừa đảo nhận tiền cọc', 'Nhúng bản đồ Google Maps và ghi rõ số nhà thực tế']
        ]
      },
      {
        type: 'h2',
        text: 'Góc nhìn LocalMate: Sự nguy hiểm của việc "bắt khách điền form"'
      },
      {
        type: 'pov',
        text: '**Sự thật hiện trường:** Nhiều agency tiếp thị thích đặt các biểu mẫu thu thập thông tin (form lead) dài dòng trên website tiệm sửa nhà, sửa xe. Họ không hiểu rằng khi khách bị hỏng xe giữa đường hoặc vỡ ống nước ngập nhà, họ cần bấm gọi nghe tiếng người thợ ngay lập tức trong 5 giây, chứ không ai rảnh ngồi điền email chờ nhân viên gửi báo giá sau 24 giờ.'
      },
      {
        type: 'h2',
        text: 'Ví dụ thực tế: Phòng khám nha khoa tại quận Gò Vấp'
      },
      {
        type: 'p',
        text: 'Một phòng khám nha khoa tại đường Quang Trung (quận Gò Vấp, TP.HCM) từng chạy quảng cáo Google Ads tốn 5 triệu đồng/tháng nhưng chỉ có 2-3 khách đặt hẹn. Kiểm tra website trên điện thoại cho thấy: Nút "Đặt Lịch" mở ra một form yêu cầu điền cả số CMND và tình trạng răng miệng, trong khi nút gọi hotline lại đặt ẩn trong mục "Giới thiệu".'
      },
      {
        type: 'p',
        text: 'Sau khi đơn giản hóa trang: Đưa nút "Gọi Bác Sĩ Tư Vấn Miễn Phí" và nút "Gửi Ảnh Răng Qua Zalo" ghim cố định ở đáy màn hình điện thoại, đồng thời niêm yết bảng giá trám răng - cạo vôi răng rõ ràng, số lượng cuộc gọi và tin nhắn hỏi dịch vụ tăng lên 14-18 lượt mỗi tuần với cùng một mức ngân sách quảng cáo.'
      },
      {
        type: 'h2',
        text: 'Checklist 3 bước tự kiểm tra website của bạn trong 2 phút'
      },
      {
        type: 'list',
        items: [
          '**Bước 1:** Cầm điện thoại cá nhân, tắt Wifi, bật 4G và gõ tên miền website của bạn. Đếm xem trang web có hiện đầy đủ trong vòng 2 giây không.',
          '**Bước 2:** Lấy ngón tay cái chạm vào số điện thoại trên màn hình. Màn hình có tự động nhảy sang ứng dụng gọi điện thoại với số đã nhập sẵn không?',
          '**Bước 3:** Xem bạn có tìm thấy bảng giá và địa chỉ cửa hàng trong vòng 3 lần vuốt màn hình không?'
        ]
      },
      {
        type: 'p',
        text: 'Nếu website của bạn chưa đạt các tiêu chí trên, hãy xem lại tiêu chuẩn [Cấu trúc website giới thiệu công ty nên có những trang nào](/kien-thuc/website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi cung cấp dịch vụ [Kiểm Toán & Tối Ưu Website Thực Chiến](/giai-phap/nen-tang-so), giúp chuyển đổi những website ì ạch thành cỗ máy đón tiếp khách hàng nhanh nhẹn, tải tức thì trên mọi thiết bị di động.'
      }
    ]
  },

  // ==========================================
  // BÀI 07 - PILLAR ARTICLE
  // ==========================================
  {
    id: 7,
    slug: 'google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z',
    title: 'Google Maps cho doanh nghiệp: Hướng dẫn từ A đến Z cho hộ kinh doanh',
    category_slug: 'google-maps',
    focus_keyword: 'google maps cho doanh nghiệp',
    search_intent: 'TOFU / Pillar - Cẩm nang nền tảng',
    target_customer: 'Chủ tiệm, chủ cơ sở kinh doanh dịch vụ địa phương muốn đưa cửa hàng lên bản đồ Google',
    primary_question: 'Google Maps (Google Business Profile) hoạt động như thế nào và làm sao để tiệm xuất hiện khi khách tìm kiếm quanh khu vực?',
    unique_angle: 'Google Maps chính là "mặt tiền số" đắt giá nhất của hộ kinh doanh địa phương trong bán kính 10-15km. Không cần ngân sách quảng cáo lớn, một hồ sơ Maps chuẩn mực và đánh giá thật mang lại khách hàng bền vững mỗi ngày.',
    pillar_id: 7,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Google Maps cho doanh nghiệp (tên chính thức: Google Business Profile) là công cụ hoàn toàn miễn phí từ Google, cho phép cơ sở của bạn xuất hiện nổi bật ở vị trí Top 3 Bản đồ (Local 3-Pack) khi khách hàng tìm kiếm các dịch vụ như "tiệm sửa xe gần đây", "phòng khám nha khoa quận...", hay "thợ khóa quanh đây". Điểm mấu chốt để thành công trên Google Maps không phải là dùng mánh khóe hay mua review ảo, mà là: (1) Xác minh chính chủ bằng video thực địa; (2) Chọn đúng danh mục kinh doanh chính; (3) Đồng nhất thông tin Tên - Địa chỉ - Điện thoại (NAP); và (4) Tích lũy đánh giá 5 sao từ khách hàng thật tại quầy.'
      },
      {
        type: 'h2',
        text: 'Vì sao Google Maps quan trọng hơn Website đối với dịch vụ địa phương?'
      },
      {
        type: 'p',
        text: 'Khi một khách hàng gặp sự cố hỏng khóa cửa lúc nửa đêm, hay một người mẹ tìm phòng khám tai mũi họng cho con trong bán kính 3km, hành vi đầu tiên của họ là mở ứng dụng Google Maps hoặc gõ tìm kiếm trên điện thoại. Họ không có thời gian đọc các bài viết dài 2.000 từ trên website.'
      },
      {
        type: 'p',
        text: 'Trên giao diện điện thoại di động, khối **Google Maps Local 3-Pack** chiếm toàn bộ màn hình đầu tiên, nằm ngay phía trên các kết quả website tự nhiên. Khách hàng chỉ nhìn 3 yếu tố: Vị trí cách đây bao xa? Đang mở cửa hay đóng cửa? Đánh giá mấy sao? Và bấm ngay nút "Gọi" hoặc "Chỉ đường".'
      },
      {
        type: 'h2',
        text: '3 Nguyên lý xếp hạng cốt lõi của Google Maps'
      },
      {
        type: 'table',
        headers: ['Nguyên lý xếp hạng', 'Giải thích thuật toán Google', 'Cách làm đúng của chủ tiệm'],
        rows: [
          ['1. Khoảng cách (Distance)', 'Google ưu tiên hiển thị cơ sở ở gần vị trí thực tế của người tìm kiếm nhất', 'Ghim vị trí chuẩn xác đến từng số nhà, không khai gian địa chỉ'],
          ['2. Sự liên quan (Relevance)', 'Mức độ khớp giữa từ khóa người tìm gõ và danh mục kinh doanh của tiệm', 'Chọn đúng danh mục chính (Primary Category), không chọn lan man'],
          ['3. Mức độ nổi bật (Prominence)', 'Mức độ uy tín của cơ sở dựa trên số lượng đánh giá, điểm sao và hoạt động', 'Xin đánh giá đều đặn từ khách thật và trả lời 100% đánh giá']
        ]
      },
      {
        type: 'h2',
        text: 'Góc nhìn LocalMate: Tránh xa dịch vụ "hack Top Maps" và "buff review giá rẻ"'
      },
      {
        type: 'pov',
        text: '**Cảnh báo sống còn:** Thị trường hiện có rất nhiều cá nhân chào mời "ghim map không cần xác minh 300k" hoặc "bán 100 review 5 sao bằng nick ảo". Thuật toán AI của Google năm 2026 cực kỳ thông minh trong việc phát hiện định vị GPS của người viết đánh giá. Nếu tài khoản đánh giá không thực sự di chuyển đến gần tiệm của bạn, toàn bộ review sẽ bị xóa sạch, và tệ hơn là hồ sơ Google Maps của bạn sẽ bị tạm ngưng (suspended) vĩnh viễn.'
      },
      {
        type: 'h2',
        text: 'Quy trình 5 bước xây dựng mặt tiền Google Maps bền vững'
      },
      {
        type: 'list',
        items: [
          '**Bước 1:** Đăng ký tài khoản Google Business Profile bằng email chính chủ của cơ sở.',
          '**Bước 2:** Xác minh thực địa theo quy định mới của Google (tham khảo hướng dẫn chi tiết tại bài viết [Cách đưa doanh nghiệp lên Google Maps](/kien-thuc/cach-dua-doanh-nghiep-len-google-maps)).',
          '**Bước 3:** Hoàn thiện 100% hồ sơ: Giờ mở cửa, số hotline nghe máy, bảng giá và ảnh chụp xưởng thật (tham khảo bài viết [Tối ưu Google Business Profile](/kien-thuc/cach-toi-uu-google-business-profile-de-khach-de-tim-thay)).',
          '**Bước 4:** Xây dựng quy trình xin đánh giá tự nhiên tại quầy (xem bài viết [Cách tăng đánh giá Google Maps đúng cách](/kien-thuc/cach-tang-danh-gia-google-maps-dung-cach)).',
          '**Bước 5:** Theo dõi chỉ số cuộc gọi và lượt chỉ đường hàng tháng trong trang tổng quan quản trị.'
        ]
      },
      {
        type: 'h2',
        text: 'Ví dụ thực tế: Tiệm cứu hộ ắc quy tại quận Đống Đa'
      },
      {
        type: 'p',
        text: 'Anh Hưng kinh doanh dịch vụ cứu hộ ắc quy và câu bình ô tô tại khu vực Ô Chợ Dừa (Đống Đa, Hà Nội). Trước đây anh không có mặt trên Google Maps, khách hàng chỉ biết đến anh qua người quen giới thiệu. Sau khi thiết lập hồ sơ Google Business Profile chuẩn chỉnh với danh mục chính là "Dịch vụ cứu hộ ô tô", đăng tải 20 bức ảnh thợ mang thiết bị kích bình cho các dòng xe và gắn hotline 24/7:'
      },
      {
        type: 'p',
        text: 'Mỗi tháng hồ sơ của anh ghi nhận hơn 180 cuộc gọi trực tiếp từ các tài xế gặp sự cố chết bình trên các tuyến đường Xã Đàn, Tôn Đức Thắng và Đê La Thành. Doanh thu tăng trưởng ổn định hoàn toàn từ lưu lượng tìm kiếm miễn phí của Google Maps.'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Nếu bạn chưa có hồ sơ Maps hoặc hồ sơ đang bị đối thủ chơi xấu, hãy tham khảo [Dịch Vụ Xác Minh & Tối Ưu Google Maps Chính Chủ](/giai-phap/duoc-tim-thay). Chúng tôi hỗ trợ xác minh trực tiếp tại tiệm, bàn giao quyền quản trị cao nhất và cam kết không dùng thủ thuật đen.'
      }
    ]
  },

  // ==========================================
  // BÀI 08 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 8,
    slug: 'cach-dua-doanh-nghiep-len-google-maps',
    title: 'Cách đưa doanh nghiệp lên Google Maps: Hướng dẫn xác minh video thực địa 2026',
    category_slug: 'google-maps',
    focus_keyword: 'cách đưa doanh nghiệp lên google maps',
    search_intent: 'MOFU - Hướng dẫn thao tác kỹ thuật thực tế',
    target_customer: 'Chủ tiệm mới mở hoặc chưa có vị trí trên bản đồ, gặp khó khăn khi xác minh',
    primary_question: 'Làm thế nào để tạo vị trí cửa hàng trên Google Maps và vượt qua bước xác minh video của Google năm 2026 ngay lần đầu tiên?',
    unique_angle: 'Google đã bãi bỏ gần như hoàn toàn hình thức gửi thư mã PIN qua đường bưu điện tại Việt Nam. Bài viết hướng dẫn kịch bản quay video thực địa 1 khung hình trong 90 giây để được Google AI phê duyệt tự động.',
    pillar_id: 7,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Năm 2026, cách duy nhất và nhanh nhất để đưa doanh nghiệp lên Google Maps là **Xác minh qua Video thực địa (Video Verification)**. Bạn không thể chờ mã thư bưu điện vì tỷ lệ thất lạc tại Việt Nam lên tới hơn 95%. Để quay video đạt chuẩn được duyệt trong vòng 24-48 giờ, bạn cần chuẩn bị sẵn 3 bằng chứng trong một cảnh quay liên tục không ngắt quãng (dưới 90 giây): (1) Tên đường và số nhà xung quanh; (2) Biển hiệu cửa hàng có gắn cố định; (3) Thao tác mở khóa cửa tiệm hoặc cho thấy thiết bị làm việc bên trong khu vực nhân viên.'
      },
      {
        type: 'h2',
        text: 'Chuẩn bị trước khi bấm nút quay video xác minh'
      },
      {
        type: 'p',
        text: 'Nhiều chủ tiệm bấm quay video theo cảm tính dẫn đến việc bị Google từ chối và khóa luôn tính năng xác minh. Hãy chuẩn bị kỹ 4 yếu tố sau:'
      },
      {
        type: 'list',
        items: [
          '**Biển hiệu cố định:** Biển hiệu phải có tên cửa hàng trùng khớp 100% với tên bạn đăng ký trên Google Business Profile, ghi rõ địa chỉ và số điện thoại. Biển bạt tạm bợ treo tạm dễ bị AI từ chối.',
          '**Giấy phép kinh doanh hoặc hóa đơn tiện ích:** Chuẩn bị sẵn giấy chứng nhận đăng ký hộ kinh doanh cá thể, hoặc hóa đơn tiền điện/nước có tên và địa chỉ của cơ sở.',
          '**Chìa khóa cửa tiệm:** Cầm sẵn chìa khóa để thực hiện thao tác mở cửa trước ống kính máy quay.',
          '**Điện thoại kết nối mạng 4G khỏe:** Tránh dùng Wifi chập chờn khiến video bị lỗi gián đoạn khi đang tải lên máy chủ Google.'
        ]
      },
      {
        type: 'h2',
        text: 'Kịch bản 90 giây quay video thực địa chuẩn xác (1 cú bấm máy)'
      },
      {
        type: 'table',
        headers: ['Thời lượng', 'Góc quay ống kính', 'Mục tiêu chứng minh với Google AI'],
        rows: [
          ['00s - 20s', 'Đứng ngoài đường quay biển tên phố, số nhà hàng xóm bên cạnh và ngã tư gần nhất', 'Chứng minh vị trí địa lý ngoài đời thực khớp với tọa độ GPS'],
          ['20s - 40s', 'Đi bộ hướng vào tiệm, quay cận cảnh biển hiệu chính của cửa hàng', 'Chứng minh cơ sở tồn tại cố định, không phải địa chỉ ảo'],
          ['40s - 65s', 'Dùng chìa khóa mở cửa chính, bước vào bên trong không gian tiệm', 'Chứng minh bạn là chủ sở hữu hoặc quản lý có quyền hạn'],
          ['65s - 90s', 'Quay bàn làm việc, máy in, dụng cụ đồ nghề hoặc máy tính đang mở hóa đơn', 'Chứng minh hoạt động kinh doanh đang diễn ra thực tế']
        ]
      },
      {
        type: 'pov',
        text: '**Lưu ý sống còn:** Toàn bộ video phải là một đoạn quay liền mạch, không được cắt ghép, không dùng bộ lọc chỉnh màu, không quay mặt khách hàng để bảo vệ quyền riêng tư.'
      },
      {
        type: 'h2',
        text: 'Những lỗi ngớ ngẩn khiến video xác minh bị từ chối'
      },
      {
        type: 'list',
        items: [
          '**Tên trên Google khác tên trên biển hiệu:** Ví dụ trên biển ghi "Nha Khoa Minh Tâm" nhưng trên Google lại đặt là "Nha Khoa Minh Tâm - Nhổ Răng Giá Rẻ Quận 5". Thuật toán so khớp ký tự quang học (OCR) của Google sẽ đánh dấu vi phạm ngay lập tức.',
          '**Chỉ quay bên trong phòng kín:** Video không có cảnh quay ngoài đường và biển hiệu sẽ bị coi là dịch vụ ảo hoặc văn phòng ma.',
          '**Đăng ký tại địa chỉ chung cư không có biển hiệu:** Google Maps cấm đặt địa chỉ doanh nghiệp đón tiếp khách tại các căn hộ chung cư cấm kinh doanh.'
        ]
      },
      {
        type: 'p',
        text: 'Sau khi xác minh thành công, bạn cần bắt tay vào thiết lập các thông tin chi tiết theo bài viết [Cách tối ưu Google Business Profile để khách hàng dễ tìm thấy](/kien-thuc/cach-toi-uu-google-business-profile-de-khach-de-tim-thay).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Nếu bạn thử quay video nhiều lần nhưng vẫn bị treo trạng thái "Đang xử lý xác minh", đội ngũ kỹ thuật của chúng tôi có thể [Hỗ Trợ Xác Minh Thực Địa 1-1](/giai-phap/duoc-tim-thay) tận nơi cho bạn.'
      }
    ]
  },

  // ==========================================
  // BÀI 09 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 9,
    slug: 'cach-toi-uu-google-business-profile-de-khach-de-tim-thay',
    title: 'Cách tối ưu Google Business Profile để khách hàng quanh đây dễ tìm thấy',
    category_slug: 'google-maps',
    focus_keyword: 'tối ưu google business profile',
    search_intent: 'Solution aware / Guide - Tối ưu hóa hồ sơ',
    target_customer: 'Chủ tiệm đã có vị trí Maps nhưng thứ hạng còn thấp, ít người gọi',
    primary_question: 'Cần điền và cài đặt những mục nào trong Google Business Profile để cửa hàng hiển thị lên Top 3 khi khách tìm quanh đây?',
    unique_angle: 'Tối ưu Maps không phải là nhồi nhét từ khóa vào tên cửa hàng để rồi bị khóa tài khoản. Tối ưu đúng là cấu hình chuẩn Danh mục chính, cập nhật menu sản phẩm có giá và giữ tỷ lệ phản hồi tin nhắn 100%.',
    pillar_id: 7,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Để đưa tiệm của bạn lên nhóm 3 vị trí hàng đầu trên Google Maps, có **3 yếu tố kỹ thuật mang tính quyết định**: (1) **Danh mục kinh doanh chính (Primary Category)** phải chọn đúng danh mục chuẩn xác nhất do Google cung cấp (chiếm tới 60% trọng số thuật toán liên quan); (2) **Thêm đầy đủ danh mục phụ (Secondary Categories)** để mở rộng phạm vi tìm kiếm; (3) **Tải lên tối thiểu 30 bức ảnh thực tế** gồm mặt tiền, không gian bên trong và sản phẩm hoàn thiện. Tuyệt đối không thêm địa chỉ quận hay tính từ "giá rẻ, uy tín" vào tên doanh nghiệp nếu trên giấy tờ không có.'
      },
      {
        type: 'h2',
        text: 'Checklist 8 hạng mục tối ưu hồ sơ Google Maps chuẩn SEO'
      },
      {
        type: 'table',
        headers: ['Hạng mục cài đặt', 'Quy chuẩn tối ưu chuẩn xác', 'Lỗi thường gặp cần tránh'],
        rows: [
          ['1. Tên doanh nghiệp', 'Đúng 100% theo biển hiệu thực tế (Ví dụ: Sửa Xe Hoàng Long)', 'Nhồi nhét: Sửa Xe Hoàng Long Quận 1 Giá Rẻ Uy Tín -> Dễ bị khóa'],
          ['2. Danh mục chính', 'Chọn danh mục sát nhất (Ví dụ: Tiệm sửa xe máy)', 'Chọn chung chung: Dịch vụ sửa chữa'],
          ['3. Danh mục phụ', 'Thêm 3-5 danh mục liên quan (Cứu hộ xe máy, Thay nhớt xe)', 'Bỏ trống danh mục phụ làm mất 40% lượt hiển thị'],
          ['4. Giờ hoạt động', 'Khai báo chính xác từng ngày, cập nhật ngày lễ tết', 'Để mở cửa 24/7 trong khi đêm đóng cửa -> Bị khách khiếu nại'],
          ['5. Số điện thoại', 'Số hotline chính chủ nghe máy được ngay', 'Dùng số bàn bỏ hoang không người trực'],
          ['6. Trang web liên kết', 'Trỏ trực tiếp về trang chủ hoặc landing page chính', 'Trỏ về link Facebook cá nhân không có bảo mật'],
          ['7. Danh mục dịch vụ', 'Tạo từng gói dịch vụ kèm mô tả ngắn và mức giá cụ thể', 'Để trống phần dịch vụ'],
          ['8. Khu vực phục vụ', 'Khai báo 3-5 quận huyện lân cận trong bán kính 15km', 'Khai báo phục vụ toàn quốc trong khi chỉ là tiệm địa phương']
        ]
      },
      {
        type: 'h2',
        text: 'Nghệ thuật đăng ảnh để kích hoạt thuật toán Google Lens'
      },
      {
        type: 'p',
        text: 'Thuật toán của Google Maps hiện sử dụng trí tuệ nhân tạo để quét các chi tiết bên trong ảnh chụp. Đăng ảnh đúng cách giúp hồ sơ của bạn được đề xuất nhiều hơn gấp 3 lần:'
      },
      {
        type: 'list',
        items: [
          '**Ảnh chụp thực tế có người:** Chụp cảnh nhân viên mặc đồng phục đang phục vụ khách hàng.',
          '**Ảnh bảng giá tại quầy:** Google sẽ nhận diện ký tự giá tiền để hiển thị khi người dùng tìm kiếm từ khóa liên quan đến giá.',
          '**Đăng bài cập nhật (Google Updates) mỗi tuần 1 lần:** Đăng một bức ảnh công việc trong tuần kèm 3 dòng mô tả ngắn và nút bấm "Gọi ngay". Hồ sơ hoạt động tích cực luôn được Google ưu tiên xếp hạng cao hơn hồ sơ bỏ hoang.'
        ]
      },
      {
        type: 'h2',
        text: 'Nếu tiệm của bạn đã tối ưu nhưng vẫn không thấy hiển thị?'
      },
      {
        type: 'p',
        text: 'Nhiều trường hợp chủ tiệm đứng ngay tại quán tìm kiếm nhưng không thấy tên mình. Hãy đọc ngay bài phân tích chuyên sâu [Vì sao doanh nghiệp không xuất hiện trên Google Maps](/kien-thuc/vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps) để xử lý các nguyên nhân lọc vị trí ẩn.'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi có quy trình tối ưu 20 tiêu chuẩn vàng cho hồ sơ Google Business Profile tại [Giải Pháp Được Tìm Thấy](/giai-phap/duoc-tim-thay), giúp cửa hàng của bạn luôn sẵn sàng đón khách quanh vùng.'
      }
    ]
  },

  // ==========================================
  // BÀI 10 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 10,
    slug: 'vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps',
    title: 'Vì sao doanh nghiệp không xuất hiện trên Google Maps? Cách khắc phục nhanh',
    category_slug: 'google-maps',
    focus_keyword: 'tại sao doanh nghiệp không hiện trên google maps',
    search_intent: 'Problem aware / Troubleshooting - Khắc phục sự cố',
    target_customer: 'Chủ cơ sở đã tạo Maps nhưng tìm kiếm không thấy, hoặc hồ sơ bị tụt mất tích',
    primary_question: 'Tại sao cửa hàng của tôi đã xác minh thành công nhưng khi tìm kiếm trên điện thoại lại không thấy hiển thị trên bản đồ?',
    unique_angle: 'Phân biệt rạch ròi giữa việc "Hồ sơ bị Google phạt ẩn" và việc "Người tìm kiếm đứng ngoài bán kính hiển thị thuật toán". Hướng dẫn kiểm tra bộ lọc vị trí và dọn dẹp các hồ sơ trùng lặp (duplicate listings).',
    pillar_id: 7,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Nếu tiệm của bạn đã xác minh nhưng không hiển thị trên Google Maps, có **4 nguyên nhân thực tế phổ biến nhất**: (1) **Thuật toán bán kính vị trí (Proximity Filter)**: Google ưu tiên hiển thị cơ sở gần người tìm kiếm; nếu bạn đứng cách tiệm trên 5km hoặc ở khu vực có mật độ đối thủ quá dày đặc, tiệm sẽ bị ẩn bớt; (2) **Hồ sơ chưa đủ độ uy tín (Prominence thấp)**: Chưa có đánh giá 5 sao nào hoặc chưa cập nhật thông tin trong 30 ngày qua; (3) **Bị trùng lặp địa chỉ (Duplicate Listing)**: Có một hồ sơ cũ của chủ nhà trước đó tại cùng tọa độ; (4) **Bị khóa ngầm (Soft Suspension)**: Do đổi tên hoặc đổi số điện thoại liên tục khiến Google nghi ngờ gian lận.'
      },
      {
        type: 'h2',
        text: 'Lưu đồ chẩn đoán 4 bước tìm ra thủ phạm khiến Maps biến mất'
      },
      {
        type: 'table',
        headers: ['Bước kiểm tra', 'Thao tác thực tế', 'Kết quả & Hướng xử lý'],
        rows: [
          ['1. Kiểm tra trạng thái tài khoản', 'Đăng nhập vào trang quản trị Google Business Profile', 'Nếu thấy dòng chữ đỏ "Bị tạm ngưng" -> Xem bài [Khôi phục Google Maps bị đình chỉ](/kien-thuc/google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly)'],
          ['2. Tìm kiếm bằng tên thương hiệu chính xác', 'Gõ đúng tên tiệm kèm số nhà trên Google Maps', 'Nếu hiện ra -> Hồ sơ vẫn bình thường, chỉ là chưa đủ mạnh để lên top từ khóa chung'],
          ['3. Kiểm tra hồ sơ rác trùng lặp', 'Phóng to bản đồ vào đúng vị trí số nhà của bạn', 'Nếu thấy hiện tên tiệm cũ trước đây -> Báo cáo "Địa điểm này đã đóng cửa vĩnh viễn"'],
          ['4. Kiểm tra bán kính thực tế', 'Đi bộ ra trước cửa tiệm trong vòng bán kính 50m và gõ tìm từ khóa dịch vụ', 'Nếu đứng ngay tại cửa mà vẫn không hiện -> Hồ sơ đang thiếu điểm uy tín nghiêm trọng']
        ]
      },
      {
        type: 'h2',
        text: 'Hiểu đúng về "Bán kính hiển thị" của Google Maps'
      },
      {
        type: 'p',
        text: 'Rất nhiều chủ tiệm phàn nàn: "Tại sao tôi ngồi ở nhà cách tiệm 10km tìm không thấy quán của tôi?".'
      },
      {
        type: 'pov',
        text: '**Quy luật vật lý của Google Maps:** Google sinh ra bản đồ để phục vụ người dùng tìm chỗ gần họ nhất. Nếu bạn mở tiệm sửa khóa ở quận Tân Bình, Google sẽ không bao giờ hiển thị tiệm của bạn cho một người đang đứng ở TP. Thủ Đức gõ từ "sửa khóa gần đây". Thay vì cố gắng phủ sóng toàn thành phố, hãy tập trung chiếm lĩnh vị trí số 1 trong bán kính 3-5km xung quanh cửa hàng.'
      },
      {
        type: 'h2',
        text: 'Cách khắc phục nhanh để tiệm nổi lên trên bản đồ'
      },
      {
        type: 'list',
        items: [
          '**Cách 1 - Kích hoạt đánh giá thực tế:** Nhờ 3-5 khách quen vừa ghé tiệm mở ứng dụng Google Maps trên máy họ và để lại đánh giá 5 sao kèm 1 bức ảnh chụp sản phẩm.',
          '**Cách 2 - Kết nối liên kết Website chính chủ:** Điền địa chỉ website có chứa thông tin NAP trùng khớp vào hồ sơ Google Business Profile.',
          '**Cách 3 - Đăng ảnh hoạt động mới:** Chụp 3 bức ảnh rõ nét thợ đang làm việc tại tiệm và tải lên mục ảnh chụp bởi chủ sở hữu.'
        ]
      },
      {
        type: 'p',
        text: 'Để duy trì lượng đánh giá ổn định kéo tiệm lên top, hãy đọc tiếp bài viết [Cách tăng đánh giá Google Maps đúng cách và bền vững](/kien-thuc/cach-tang-danh-gia-google-maps-dung-cach).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi giúp chẩn đoán nguyên nhân hồ sơ Maps bị chìm và khôi phục hiển thị chính ngạch tại [Giải Pháp Được Tìm Thấy Trên Bản Đồ](/giai-phap/duoc-tim-thay).'
      }
    ]
  }
];

module.exports = { batch2Articles };
