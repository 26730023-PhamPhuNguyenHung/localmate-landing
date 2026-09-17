/**
 * scripts/batches/batch-1.cjs
 * Dữ liệu bài viết được viết lại chất lượng cao cho Batch 1 (Bài 01 - 05)
 * Cụm 1: Nền tảng Website & Quyết định đầu tư số
 */

const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('../content-builder.cjs');

const batch1Articles = [
  // ==========================================
  // BÀI 01 - PILLAR ARTICLE
  // ==========================================
  {
    id: 1,
    slug: 'website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website',
    title: 'Website doanh nghiệp là gì? Doanh nghiệp nhỏ có thực sự cần website?',
    category_slug: 'website',
    focus_keyword: 'website doanh nghiệp là gì',
    search_intent: 'TOFU - Định nghĩa & Nhận thức thực tế',
    target_customer: 'Chủ cơ sở dịch vụ, cửa hàng nhỏ, xưởng sản xuất đang đắn đo có nên làm web hay chỉ dùng Fanpage/Zalo',
    primary_question: 'Doanh nghiệp nhỏ dưới 10 người có thực sự cần làm website không, hay chỉ cần Fanpage và Zalo là đủ?',
    unique_angle: 'Website không phải là tấm danh thiếp online để trang trí, mà là tài sản số chính chủ duy nhất giúp khách hàng xác minh bạn là cơ sở có thật sau khi họ nhìn thấy bạn trên mạng xã hội.',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Doanh nghiệp nhỏ không bắt buộc phải có website 20-30 trang tốn kém. Tuy nhiên, bạn BẮT BUỘC cần một website tinh gọn 1-3 trang nếu bạn cung cấp dịch vụ có giá trị từ 500.000đ trở lên hoặc khách hàng cần kiểm chứng uy tín trước khi gọi thợ. Mạng xã hội như Facebook hay TikTok giúp bạn tiếp cận người lạ, nhưng website chính chủ với tên miền riêng là nơi duy nhất khách hàng đối chiếu bảng giá, địa chỉ pháp lý và năng lực thực tế mà không bị thuật toán bóp tương tác hay đối thủ nhảy vào chào giá ngay dưới bình luận.'
      },
      {
        type: 'h2',
        text: 'Bản chất: Website doanh nghiệp nhỏ thực chất là gì?'
      },
      {
        type: 'p',
        text: 'Nhiều đơn vị tiếp thị thường mô tả website bằng những từ ngữ hoa mỹ như "bộ mặt thương hiệu toàn cầu" hay "vũ khí số thời đại 4.0". Với một xưởng cơ khí, một tiệm nhôm kính hay một phòng khám nha khoa địa phương, cách hiểu đó hoàn toàn xa rời thực tế.'
      },
      {
        type: 'p',
        text: 'Thực chất, **website doanh nghiệp nhỏ là một văn phòng số chính chủ hoạt động 24/7**. Tại đó, khách hàng chỉ tìm kiếm đúng 4 thông tin cốt lõi: Bạn là ai và tiệm ở đâu? Bạn làm dịch vụ gì cụ thể? Giá cả áng chừng bao nhiêu? Và làm sao để gọi điện hoặc nhắn tin cho bạn nhanh nhất mà không phải chờ đợi.'
      },
      {
        type: 'h2',
        text: 'Góc nhìn LocalMate: Sự khác biệt sống còn giữa Website và Mạng xã hội'
      },
      {
        type: 'pov',
        text: '**Luận điểm LocalMate:** Xây dựng kinh doanh hoàn toàn trên Facebook hay TikTok giống như bạn xây nhà trên đất thuê. Nền tảng có thể đổi thuật toán, khóa trang hoặc bóp tương tác bất kỳ lúc nào. Website gắn với tên miền chính chủ là mảnh đất thổ cư thuộc quyền sở hữu 100% của bạn.'
      },
      {
        type: 'p',
        text: 'Hãy xem xét bảng đối chiếu quyền kiểm soát giữa website độc lập và trang mạng xã hội:'
      },
      {
        type: 'table',
        headers: ['Tiêu chí so sánh', 'Trang Mạng Xã Hội (Facebook, TikTok)', 'Website Chính Chủ (LocalMate)'],
        rows: [
          ['Quyền sở hữu dữ liệu', 'Nền tảng nắm giữ; có thể bị khóa trang bất kỳ lúc nào', 'Chủ cơ sở sở hữu 100% tên miền và dữ liệu mã nguồn'],
          ['Hiển thị bảng giá & dịch vụ', 'Bị trôi bài liên tục, khách phải nhắn tin hỏi đi hỏi lại', 'Cố định, rõ ràng, khách đọc trong 30 giây là hiểu'],
          ['Canh tranh ngay tại chỗ', 'Đối thủ chạy quảng cáo đè lên bình luận của khách', 'Không gian riêng tư 100%, không bị xao nhãng'],
          ['Tìm kiếm trên Google', 'Rất khó xuất hiện khi khách tìm dịch vụ quanh khu vực', 'Tối ưu chuẩn xác cho từ khóa địa phương và bản đồ']
        ]
      },
      {
        type: 'h2',
        text: 'Khi nào doanh nghiệp nhỏ NÊN và CHƯA NÊN làm website?'
      },
      {
        type: 'p',
        text: 'LocalMate không khuyến khích mọi cơ sở đều vội vàng chi tiền làm website. Việc đầu tư phải dựa trên mô hình kinh doanh và nguồn lực thực tế:'
      },
      {
        type: 'h3',
        text: 'Trường hợp NÊN làm website ngay:'
      },
      {
        type: 'list',
        items: [
          '**Dịch vụ có giá trị đơn hàng trên 1 triệu đồng:** Khách hàng sửa nhà, bọc ghế sofa, làm răng sứ hay sửa điều hòa luôn cần xác minh địa chỉ cơ sở trước khi mời thợ về nhà.',
          '**Khách hàng đến từ Google Tìm kiếm & Maps:** Khi khách gõ tìm thợ quanh quận, một liên kết website đi kèm hồ sơ Google Maps giúp tăng tỷ lệ gọi điện lên gấp đôi so với hồ sơ không có web.',
          '**Doanh nghiệp chuẩn bị chạy quảng cáo Google Ads:** Website hoặc Landing page chuyên nghiệp giúp giảm giá thầu mỗi lượt click và tăng tỷ lệ khách để lại số điện thoại.'
        ]
      },
      {
        type: 'h3',
        text: 'Trường hợp CHƯA NÊN làm website:'
      },
      {
        type: 'list',
        items: [
          '**Quán ăn vặt, tiệm trà sữa vỉa hè:** Khách hàng ra quyết định dựa trên mắt thấy tai nghe tại chỗ hoặc đặt qua app giao đồ ăn (Grab, ShopeeFood). Một hồ sơ Google Maps chuẩn chỉ là đủ.',
          '**Chưa xác định rõ dịch vụ cốt lõi và bảng giá:** Nếu bạn chưa biết mình bán cho ai và thu bao nhiêu tiền, làm website chỉ tạo ra một trang giới thiệu chung chung vô tác dụng.'
        ]
      },
      {
        type: 'h2',
        text: 'Ví dụ thực tế: Câu chuyện xưởng nhôm kính tại quận Bình Tân'
      },
      {
        type: 'p',
        text: 'Anh Tuấn, chủ một xưởng nhôm kính tại đường Mã Lò (quận Bình Tân, TP.HCM), trước đây chỉ dùng trang Facebook cá nhân để đăng ảnh công trình. Khi khách hàng từ quận 7 và quận 11 xem ảnh trên mạng xã hội, họ tỏ ý e ngại vì không biết xưởng thật ở đâu, sợ thợ nhận cọc rồi làm việc thiếu trách nhiệm.'
      },
      {
        type: 'p',
        text: 'Sau khi thiết lập một trang web tinh gọn gồm: Ảnh xưởng thật có địa chỉ rõ ràng, bảng báo giá cửa nhôm Xingfa theo mét vuông minh bạch và quy trình bảo hành 3 năm có cam kết, khách hàng chỉ mất 2 phút đọc web là chủ động bấm nút gọi hẹn lịch đo đạc. Tỷ lệ chốt đơn của xưởng tăng rõ rệt nhờ giải tỏa được nỗi sợ lừa đảo của khách mua nhà.'
      },
      {
        type: 'h2',
        text: 'Sai lầm phổ biến khiến website trở thành "khoản chi lãng phí"'
      },
      {
        type: 'list',
        items: [
          '**Tham làm website quá nhiều trang:** Bỏ hàng chục triệu làm web 30 trang với các mục "Sứ mệnh - Tầm nhìn" mà khách hàng địa phương không bao giờ đọc đến.',
          '**Để bên thiết kế đứng tên tên miền:** Khi có tranh chấp hoặc muốn chuyển đổi kỹ thuật, chủ cơ sở bị đòi phí chuyển nhượng hoặc mất trắng tên miền đã kinh doanh nhiều năm.',
          '**Không tối ưu nút bấm trên điện thoại di động:** Hơn 85% người tìm dịch vụ địa phương sử dụng điện thoại thông minh. Nút bấm gọi điện hay nhắn Zalo bị giấu kín hoặc chữ quá nhỏ khiến khách thoát ra ngay.'
        ]
      },
      {
        type: 'h2',
        text: 'Lộ trình hành động tinh gọn trong 7 ngày'
      },
      {
        type: 'p',
        text: 'Để sở hữu một website mang lại khách hàng thực tế mà không lãng phí ngân sách, bạn nên thực hiện theo 3 bước sau:'
      },
      {
        type: 'list',
        items: [
          '**Bước 1:** Chuẩn bị bảng giá dịch vụ và 10 bức ảnh chụp thực tế xưởng/cửa hàng của chính bạn (tham khảo bài viết [Làm website cần chuẩn bị những gì](/kien-thuc/lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi)).',
          '**Bước 2:** Bóc tách các khoản chi phí bắt buộc và tránh bẫy giá rẻ (tham khảo bài viết [Chi phí làm website năm 2026](/kien-thuc/chi-phi-lam-website-doanh-nghiep-nho-2026)).',
          '**Bước 3:** Lựa chọn giải pháp thiết kế tinh gọn bàn giao chính chủ 100%, cho phép xem trước mẫu thực tế trước khi chi tiền.'
        ]
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Bạn không cần phải là chuyên gia công nghệ để có một trang web bài bản. LocalMate hỗ trợ chủ cơ sở xây dựng [Nền Tảng Website Tinh Gọn](/giai-phap/nen-tang-so), tốc độ tải dưới 1 giây trên mạng 4G, bàn giao tài khoản tên miền chính chủ 100% và cho phép xem trước bản mẫu thiết kế 0đ trước khi bạn quyết định.'
      }
    ]
  },

  // ==========================================
  // BÀI 02 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 2,
    slug: 'lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi',
    title: 'Làm website cho doanh nghiệp nhỏ cần chuẩn bị những gì? (Checklist thực chiến)',
    category_slug: 'website',
    focus_keyword: 'chuẩn bị làm website doanh nghiệp nhỏ',
    search_intent: 'MOFU - Hướng dẫn chuẩn bị triển khai',
    target_customer: 'Chủ tiệm, quản lý cơ sở chuẩn bị thuê đơn vị thiết kế web',
    primary_question: 'Chủ cơ sở cần tự tay chuẩn bị những giấy tờ, tư liệu và hình ảnh nào trước khi làm website để không bị thợ ép giá hoặc kéo dài thời gian?',
    unique_angle: 'Đừng giao phó toàn bộ cho đơn vị thiết kế. Nếu bạn không chuẩn bị trước hình ảnh thật, bảng giá và tự đăng ký tên miền chính chủ, bạn sẽ nhận về một website toàn ảnh nước ngoài giả tạo và dễ bị mất quyền kiểm soát tên miền sau 1 năm.',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Để hoàn thành một website doanh nghiệp nhỏ trong vòng 3 đến 5 ngày mà không bị phát sinh chi phí, chủ cơ sở chỉ cần tự chuẩn bị đúng 4 nhóm tư liệu thực tế: (1) Tên miền đăng ký bằng số CCCD chính chủ; (2) Tối thiểu 15 bức ảnh chụp rõ nét cơ sở, thợ thuyền và đồ nghề thật; (3) Bảng giá niêm yết rõ ràng của 3-5 dịch vụ mũi nhọn; (4) Thông tin liên hệ minh bạch gồm hotline cố định, số Zalo tư vấn và địa chỉ tiệm có gắn vị trí Google Maps.'
      },
      {
        type: 'h2',
        text: 'Checklist 4 nhóm tư liệu cốt lõi chủ cơ sở cần nắm trong tay'
      },
      {
        type: 'table',
        headers: ['Nhóm tư liệu', 'Nội dung chi tiết bắt buộc', 'Lưu ý thực tế từ LocalMate'],
        rows: [
          ['1. Tên miền & Pháp lý', 'Tên miền .com hoặc .vn gắn với tên thương hiệu/ngành nghề', 'Bắt buộc chủ tiệm tự đứng tên sở hữu qua email cá nhân'],
          ['2. Hình ảnh thực địa', 'Ảnh mặt tiền biển hiệu, xưởng làm việc, thợ đang thao tác', 'Tuyệt đối không lấy ảnh mạng châu Âu/Mỹ gây mất lòng tin'],
          ['3. Bảng giá & Dịch vụ', '3-5 gói dịch vụ chủ lực kèm mức giá khởi điểm cụ thể', 'Giúp lọc khách vãng lai và giải tỏa tâm lý sợ bị chặt chém'],
          ['4. Luồng tiếp nhận khách', 'Số hotline nghe máy ban ngày, số Zalo trực chốt đơn', 'Số điện thoại phải bấm được trực tiếp trên màn hình di động']
        ]
      },
      {
        type: 'h2',
        text: 'Cạm bẫy nguy hiểm: Đơn vị thiết kế đứng tên hộ tên miền'
      },
      {
        type: 'pov',
        text: '**Cảnh báo thực chiến:** Rất nhiều agency hoặc thợ làm web tự do thường nói với khách: "Bác cứ để bên em mua hộ tên miền cho tiện". Đến năm thứ hai, khi website đã in lên biển hiệu và danh thiếp, họ đòi phí duy trì gấp 3-5 lần giá gốc. Nếu không trả, họ khóa trang web hoặc bán tên miền cho đối thủ.'
      },
      {
        type: 'p',
        text: 'Quy tắc bất biến: Tên miền là tài sản pháp lý của bạn. Hãy yêu cầu đơn vị thiết kế hướng dẫn bạn đăng ký tại các nhà cấp phát uy tín của Việt Nam (PA Việt Nam, Mắt Bão, INET) bằng chính CCCD và số điện thoại của bạn.'
      },
      {
        type: 'h2',
        text: 'Hướng dẫn tự chụp ảnh cơ sở bằng điện thoại thông thường'
      },
      {
        type: 'p',
        text: 'Bạn không cần thuê thợ chụp ảnh chuyên nghiệp tốn kém tiền triệu. Khách hàng địa phương tin vào sự chân thật hơn là ảnh đã qua chỉnh sửa photoshop lung linh:'
      },
      {
        type: 'list',
        items: [
          '**Ảnh 1 - Mặt tiền cửa hàng ban ngày:** Chụp rõ biển hiệu, số nhà và lối vào xe cộ dễ dàng.',
          '**Ảnh 2 & 3 - Không gian làm việc bên trong:** Máy móc ngăn nắp, kệ phụ tùng sạch sẽ thể hiện tính chuyên nghiệp.',
          '**Ảnh 4 & 5 - Thợ đang thao tác:** Chụp khoảnh khắc nhân viên đang tư vấn hoặc sửa chữa cho khách.',
          '**Ảnh 6 đến 10 - Sản phẩm hoàn thiện:** Ảnh chụp cận cảnh các công trình hoặc sản phẩm đã bàn giao thành công.'
        ]
      },
      {
        type: 'h2',
        text: 'Những câu hỏi bắt buộc phải hỏi đơn vị thiết kế trước khi đặt cọc'
      },
      {
        type: 'list',
        items: [
          '1. "Website này chạy trên máy chủ (hosting) nào, hàng năm tôi phải trả bao nhiêu tiền duy trì cố định?"',
          '2. "Tôi có được toàn quyền truy cập tài khoản quản trị cao nhất để đổi số điện thoại và cập nhật giá không?"',
          '3. "Nếu sau này tôi không thuê bên bạn nữa, tôi có được tải toàn bộ dữ liệu mã nguồn về máy tính cá nhân không?"'
        ]
      },
      {
        type: 'p',
        text: 'Hiểu rõ các câu hỏi trên sẽ giúp bạn định hình rõ [Chi phí làm website năm 2026](/kien-thuc/chi-phi-lam-website-doanh-nghiep-nho-2026) mà không lo bị rơi vào các khoản phụ phí bất ngờ.'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi luôn cung cấp biểu mẫu chuẩn bị tư liệu tinh gọn và hướng dẫn chủ cơ sở tự tay xác thực quyền sở hữu tên miền 100%. Tham khảo quy trình triển khai [Nền Tảng Số LocalMate](/giai-phap/nen-tang-so) với cam kết xem trước bản mẫu thiết kế 0đ trước khi chi tiền.'
      }
    ]
  },

  // ==========================================
  // BÀI 03 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 3,
    slug: 'chi-phi-lam-website-doanh-nghiep-nho-2026',
    title: 'Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì? (Bóc tách minh bạch)',
    category_slug: 'website',
    focus_keyword: 'chi phí làm website doanh nghiệp nhỏ',
    search_intent: 'BOFU - Khảo sát giá & Quyết định ngân sách',
    target_customer: 'Chủ doanh nghiệp nhỏ, hộ kinh doanh đang tìm hiểu báo giá thiết kế website',
    primary_question: 'Làm một website hoàn chỉnh cho doanh nghiệp nhỏ hết bao nhiêu tiền trong năm 2026, và chi phí duy trì hàng năm thực sự là bao nhiêu?',
    unique_angle: 'Bóc tách rạch ròi giữa Chi phí Cố định Bắt buộc nộp cho hạ tầng (Domain, Hosting) và Chi phí Dịch vụ Thiết kế. Cảnh báo chiêu trò "Web 500k" câu khách năm đầu rồi ép trả phí duy trì bất hợp lý ở năm thứ hai.',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Trong năm 2026, tổng chi phí trọn gói hợp lý để một doanh nghiệp nhỏ sở hữu website tinh gọn hoàn chỉnh dao động từ **2.500.000đ đến 4.500.000đ** cho năm đầu tiên. Chi phí này bao gồm: Tên miền quốc tế hoặc Việt Nam (khoảng 300.000đ - 750.000đ/năm), hạ tầng lưu trữ Cloudflare/Cloud Serverless ổn định (khoảng 500.000đ - 1.200.000đ/năm) và công thợ thiết kế tối ưu chuyển đổi một lần. Từ năm thứ hai trở đi, chi phí duy trì cố định chỉ rơi vào khoảng **800.000đ đến 1.500.000đ/năm**, tuyệt đối không có chuyện phải trả thêm hàng chục triệu nếu bạn nắm giữ tài khoản chính chủ.'
      },
      {
        type: 'h2',
        text: 'Bảng bóc tách chi phí thực tế: Năm thứ 1 vs Năm thứ 2 trở đi'
      },
      {
        type: 'table',
        headers: ['Hạng mục chi phí', 'Mức giá năm đầu tiên (VNĐ)', 'Mức giá gia hạn hàng năm (VNĐ)', 'Bản chất thanh toán'],
        rows: [
          ['Tên miền (.com / .vn)', '300.000đ - 750.000đ', '350.000đ - 550.000đ', 'Bắt buộc trả cho Nhà đăng ký tên miền (VNNIC)'],
          ['Hạ tầng lưu trữ (Cloud Hosting)', '500.000đ - 1.200.000đ', '500.000đ - 1.200.000đ', 'Chi phí duy trì máy chủ điện toán đám mây'],
          ['Chứng chỉ bảo mật SSL (HTTPS)', '0đ (Miễn phí qua Cloudflare)', '0đ (Tự động gia hạn)', 'Bảo mật dữ liệu đường truyền cho khách vào web'],
          ['Công thiết kế giao diện & Tối ưu di động', '1.500.000đ - 2.500.000đ', '0đ (Chỉ trả khi yêu cầu làm mới lớn)', 'Chi phí thanh toán 1 lần duy nhất cho kỹ thuật viên'],
          ['Tổng ngân sách dự toán', '2.500.000đ - 4.500.000đ', '850.000đ - 1.750.000đ', 'Minh bạch 100%, không phát sinh phí ẩn']
        ]
      },
      {
        type: 'h2',
        text: 'Vạch trần chiêu trò "Làm website trọn gói 500.000đ"'
      },
      {
        type: 'p',
        text: 'Nhiều chủ cửa hàng vì muốn tiết kiệm đã đăng ký các gói dịch vụ quảng cáo "Thiết kế website 500k" trên mạng xã hội. Đây là mô hình bẫy phí điển hình mà các đơn vị kém uy tín thường áp dụng:'
      },
      {
        type: 'list',
        items: [
          '**Năm 1 thu tượng trưng:** Đơn vị lấy mã nguồn có sẵn, nhân bản hàng loạt trong 10 phút và thu 500.000đ để câu khách.',
          '**Giữ kín tài khoản quản trị:** Họ tự đứng tên tên miền và đặt trang web trên một máy chủ dùng chung (shared hosting) cấu hình thấp, tốc độ tải cực kỳ ì ạch.',
          '**Năm 2 ép phí gia hạn cao:** Khi khách hàng đã in website lên danh thiếp, bảng hiệu và tờ rơi, đơn vị này yêu cầu phí gia hạn từ 3.000.000đ đến 5.000.000đ. Nếu không trả, trang web sẽ bị cắt ngay lập tức.'
        ]
      },
      {
        type: 'pov',
        text: '**Góc nhìn LocalMate:** Một website tạo ra khách hàng thật sự phải giúp bạn kiếm được tiền, chứ không phải là món hàng rẻ mạt để rồi trở thành gánh nặng phụ phí mỗi năm. Hãy đọc kỹ hợp đồng và chỉ hợp tác với đơn vị bàn giao tài khoản máy chủ và tên miền chính chủ cho bạn quản lý.'
      },
      {
        type: 'h2',
        text: 'Khung ngân sách phù hợp cho từng giai đoạn kinh doanh'
      },
      {
        type: 'list',
        items: [
          '**Gói Khởi động (2.5 - 3.5 triệu đồng):** Phù hợp tiệm sửa chữa, gara, tiệm cắt tóc, cơ sở nha khoa địa phương. Bao gồm 1 landing page tối ưu chuyển đổi, nút gọi điện thoại tức thì, bản đồ chỉ đường và tích hợp mã Zalo.',
          '**Gói Chuyên nghiệp (4.5 - 7 triệu đồng):** Phù hợp cơ sở có nhiều chi nhánh, xưởng nội thất, công ty dịch vụ pháp lý/kế toán cần trình bày danh mục 5-10 dịch vụ chi tiết và hệ thống form đặt lịch.',
          '**Không nên chi trên 10 triệu đồng nếu là tiệm nhỏ:** Trừ khi bạn xây dựng sàn thương mại điện tử đồng bộ kho hàng phức tạp, một cơ sở dịch vụ thông thường chi trên 10 triệu đồng cho trang giới thiệu là lãng phí nguồn lực.'
        ]
      },
      {
        type: 'p',
        text: 'Để nắm rõ các trang cần thiết trong gói ngân sách của bạn, hãy xem tiếp bài viết [Website giới thiệu công ty nên có những trang nào](/kien-thuc/website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao).'
      },
      {
        type: 'pov',
        text: '**Chính sách minh bạch của LocalMate:** Chúng tôi công khai rõ ràng [Bảng Giá Gói Khởi Động](/giai-phap/nen-tang-so) trọn gói chỉ từ 2.900.000đ năm đầu và phí duy trì năm sau đúng giá gốc hạ tầng máy chủ. Đặc biệt: Khách hàng luôn được xem trước bản mẫu thiết kế 0đ trước khi ký hợp đồng.'
      }
    ]
  },

  // ==========================================
  // BÀI 04 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 4,
    slug: 'website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao',
    title: 'Website giới thiệu công ty nên có những trang nào để chốt khách hiệu quả?',
    category_slug: 'website',
    focus_keyword: 'các trang cần có trên website công ty',
    search_intent: 'TOFU / MOFU - Kiến trúc thông tin tinh gọn',
    target_customer: 'Chủ doanh nghiệp, người quản lý chuẩn bị lên cấu trúc menu cho website dịch vụ',
    primary_question: 'Một website giới thiệu doanh nghiệp địa phương cần tối thiểu những trang nào để khách vào web hiểu ngay và bấm gọi đặt lịch?',
    unique_angle: 'Đừng sao chép cấu trúc của các tập đoàn lớn. Khách hàng địa phương không cần đọc "Sứ mệnh - Giá trị cốt lõi". Họ chỉ cần 4 trang cốt lõi tập trung giải quyết đúng băn khoăn về giá cả, năng lực và cách liên hệ.',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Một website giới thiệu doanh nghiệp dịch vụ nhỏ chỉ cần đúng **4 trang cốt lõi** để tối ưu hóa tỷ lệ chuyển đổi: (1) **Trang Chủ (Homepage)** nêu bật ngay dịch vụ bạn làm và khu vực bạn phục vụ trong 3 giây đầu; (2) **Trang Dịch Vụ Chi Tiết** phân tích rõ quy trình làm việc và bảng giá minh bạch; (3) **Trang Hồ Sơ Năng Lực / Hình Ảnh Thật** chứng minh xưởng thật thợ thật qua các công trình đã làm; (4) **Trang Liên Hệ & Bản Đồ** có nút bấm gọi điện thoại và hướng dẫn chỉ đường Google Maps rõ ràng.'
      },
      {
        type: 'h2',
        text: 'Cấu trúc 4 trang tinh gọn: Mục tiêu và thành phần bắt buộc'
      },
      {
        type: 'table',
        headers: ['Tên trang', 'Mục tiêu kinh doanh cốt lõi', 'Thành phần không thể thiếu'],
        rows: [
          ['1. Trang Chủ', 'Giữ chân khách trong 3 giây đầu, khẳng định vị trí tiệm', 'Tiêu đề rõ dịch vụ + Quận/Huyện, Nút gọi Hotline, Nút Zalo'],
          ['2. Dịch Vụ & Bảng Giá', 'Giải đáp thắc mắc về giá cả, lọc đúng khách tiềm năng', 'Bảng giá khởi điểm, quy trình 4 bước, cam kết bảo hành'],
          ['3. Dự Án / Hình Ảnh Thật', 'Xây dựng niềm tin vững chắc, xóa tan nỗi sợ lừa đảo', 'Ảnh trước/sau khi sửa, video ngắn thực tế tại xưởng'],
          ['4. Liên Hệ & Vị Trí', 'Dẫn đường khách đến tận tiệm hoặc bấm gọi thợ', 'Bản đồ Google Maps nhúng, địa chỉ số nhà, số tài khoản chính chủ']
        ]
      },
      {
        type: 'h2',
        text: 'Những trang thừa thãi làm loãng quyết định của khách hàng'
      },
      {
        type: 'p',
        text: 'Nhiều đơn vị thiết kế hay đưa thêm các trang mẫu của doanh nghiệp nước ngoài vào website của hộ kinh doanh cá thể. Đây là những trang không mang lại giá trị chuyển đổi:'
      },
      {
        type: 'list',
        items: [
          '**Trang "Tầm nhìn & Sứ mệnh":** Viết những khẩu hiệu to tát như "trở thành tập đoàn số một Đông Nam Á" chỉ tạo cảm giác giả tạo đối với một tiệm sửa điện nước hay một gara ô tô tư nhân.',
          '**Trang "Tin tức nội bộ":** Các bài viết như "Công ty tổ chức sinh nhật cho nhân viên tháng 5" chỉ làm khách hàng phân tâm khi đang muốn tìm thợ sửa chữa gấp.',
          '**Trang "Tuyển dụng":** Nếu cơ sở không tuyển dụng liên tục quanh năm, hãy bỏ trang này khỏi thanh menu chính để tránh làm rối mắt người dùng trên điện thoại.'
        ]
      },
      {
        type: 'h2',
        text: 'Nguyên tắc thiết kế menu trên màn hình điện thoại'
      },
      {
        type: 'pov',
        text: '**Quy tắc ngón tay cái:** Trên màn hình di động, menu điều hướng không được vượt quá 4 mục. Đặc biệt, thanh chân trang (bottom bar) luôn phải ghim cố định 2 nút bấm nổi bật: "Gọi Ngay" (màu xanh lá) và "Chat Zalo" (màu xanh dương). Khách hàng không cần phải vuốt tìm kiếm số điện thoại ở cuối trang.'
      },
      {
        type: 'p',
        text: 'Nếu bạn đang phân vân giữa việc làm trang giới thiệu tư vấn hay làm một trang thương mại điện tử có giỏ hàng, hãy đọc tiếp bài phân tích [So sánh website bán hàng và website giới thiệu](/kien-thuc/website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi chuyên chuẩn hóa cấu trúc trang theo chuẩn chuyển đổi thực tế cho từng ngành nghề tại địa phương. Khám phá các mẫu giao diện thực tế tại [Giải Pháp Nền Tảng Số LocalMate](/giai-phap/nen-tang-so).'
      }
    ]
  },

  // ==========================================
  // BÀI 05 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 5,
    slug: 'website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao',
    title: 'Website bán hàng và website giới thiệu khác nhau thế nào? Nên chọn loại nào?',
    category_slug: 'website',
    focus_keyword: 'so sánh website bán hàng và website giới thiệu',
    search_intent: 'TOFU / MOFU - So sánh & Ra quyết định kinh tế',
    target_customer: 'Chủ cơ sở phân vân không biết nên làm website có giỏ hàng online hay web giới thiệu tư vấn',
    primary_question: 'Doanh nghiệp dịch vụ địa phương nên đầu tư website bán hàng có giỏ hàng thanh toán hay website giới thiệu tư vấn gọi điện?',
    unique_angle: 'Đừng nhầm lẫn giữa việc bán hàng online và tạo khách hàng tiềm năng. Hơn 90% dịch vụ địa phương thất bại khi cố nhồi nhét giỏ hàng online vì khách hàng chỉ muốn gọi điện tư vấn và khảo sát trực tiếp trước khi chi tiền.',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **Website bán hàng (E-commerce)** dành riêng cho sản phẩm chuẩn hóa có giá dưới 1 triệu đồng mà khách có thể tự bấm "Thêm vào giỏ" và thanh toán thẻ ngay (như mỹ phẩm, quần áo, phụ kiện). Ngược lại, **Website giới thiệu dịch vụ (Lead Generation)** dành cho 90% ngành nghề địa phương (sửa chữa, xây dựng, nha khoa, gara, tiệm spa) — nơi giá cả phụ thuộc vào hiện trường và khách hàng bắt buộc phải gọi điện thoại hoặc nhắn Zalo để được khảo sát và tư vấn trước. Đối với tiệm dịch vụ, việc làm giỏ hàng thanh toán rườm rà chỉ làm tăng chi phí vận hành và khiến khách bỏ đi vì quy trình phức tạp.'
      },
      {
        type: 'h2',
        text: 'Bảng đối chiếu toàn diện: Website Bán Hàng vs Website Giới Thiệu'
      },
      {
        type: 'table',
        headers: ['Tiêu chí so sánh', 'Website Bán Hàng (E-commerce)', 'Website Giới Thiệu Tư Vấn (Lead-Gen)'],
        rows: [
          ['Hành động chính của khách', 'Bấm nút "Mua Ngay" -> Chọn số lượng -> Thanh toán online', 'Bấm nút "Gọi Điện" hoặc "Nhắn Zalo" để được báo giá'],
          ['Tính năng kỹ thuật', 'Giỏ hàng, cổng thanh toán ngân hàng, quản lý tồn kho, tính ship', 'Trình bày dịch vụ, bảng giá tham khảo, bản đồ tiệm, form tư vấn'],
          ['Chi phí làm ban đầu', 'Từ 8.000.000đ - 25.000.000đ trở lên', 'Từ 2.500.000đ - 4.500.000đ'],
          ['Chi phí vận hành hàng tháng', 'Cao (Cần người trực kho, xử lý đơn hủy, đối soát cổng thanh toán)', 'Gần như bằng 0 (Chủ tiệm trực tiếp nhận cuộc gọi trên điện thoại)'],
          ['Tốc độ tải trang di động', 'Thường chậm (nhiều plugin giỏ hàng và script nặng)', 'Cực kỳ nhanh (dưới 1 giây trên mạng di động 4G)']
        ]
      },
      {
        type: 'h2',
        text: 'Cây quyết định (Decision Tree): Doanh nghiệp bạn nên chọn loại nào?'
      },
      {
        type: 'p',
        text: 'Hãy tự trả lời 3 câu hỏi sau để xác định chính xác mô hình website bạn cần:'
      },
      {
        type: 'list',
        items: [
          '**Câu hỏi 1: Khách hàng có tự bấm mua mà không cần gọi hỏi bạn trước không?**\n- Nếu CÓ (hàng tiêu dùng đóng hộp, phụ kiện nhỏ): Chọn **Website Bán Hàng**.\n- Nếu KHÔNG (phải đo đạc, xem xe, khám răng, khảo sát nhà): Chọn **Website Giới Thiệu Tư Vấn**.',
          '**Câu hỏi 2: Bạn có đội ngũ nhân sự túc trực để cập nhật tồn kho mỗi ngày không?**\n- Nếu KHÔNG: Tuyệt đối tránh làm website giỏ hàng. Khách đặt hàng online nhưng gọi lại báo "hết hàng" sẽ hủy hoại uy tín của tiệm.',
          '**Câu hỏi 3: Khu vực phục vụ chính của bạn ở đâu?**\n- Nếu chủ yếu phục vụ khách trong bán kính 15-20km: Website giới thiệu kết hợp Google Maps có hiệu quả kinh tế (ROI) cao gấp 5 lần so với làm sàn thương mại điện tử.'
        ]
      },
      {
        type: 'h2',
        text: 'Sai lầm thực tế: Cửa hàng rèm cửa tại TP. Thủ Đức'
      },
      {
        type: 'p',
        text: 'Một xưởng may rèm cửa tại TP. Thủ Đức từng chi gần 18 triệu đồng để thuê một công ty làm website thương mại điện tử với đầy đủ tính năng chọn mẫu vải, tính tiền theo mét và giỏ hàng thanh toán Momo/VNPay. Trong suốt 6 tháng vận hành, không có một đơn hàng nào được thanh toán qua giỏ hàng.'
      },
      {
        type: 'p',
        text: 'Lý do rất đơn giản: Khách làm rèm muốn thợ mang bảng mẫu vải đến tận nhà đo đạc khung cửa sổ và tư vấn màu sắc hợp phong thủy. Sau khi chuyển đổi website về dạng **Trang Tư Vấn Tinh Gọn** — nêu rõ mức giá từ 450.000đ/m ngang và nút "Đặt Lịch Mang Mẫu Vải Đến Nhà Khảo Sát Miễn Phí", xưởng nhận trung bình 3-5 cuộc gọi mỗi tuần từ khách hàng quanh khu vực.'
      },
      {
        type: 'h2',
        text: 'Lời khuyên từ LocalMate'
      },
      {
        type: 'pov',
        text: '**Đừng phức tạp hóa công nghệ:** Hãy bắt đầu từ việc tạo ra cuộc hội thoại với khách hàng trước. Một website giới thiệu tinh gọn, tải nhanh và số điện thoại luôn sẵn sàng phục vụ là giải pháp hiệu quả nhất cho doanh nghiệp nhỏ.'
      },
      {
        type: 'p',
        text: 'Để tìm hiểu sâu hơn về cách website phục vụ kinh doanh địa phương, hãy xem bài viết nền tảng [Website doanh nghiệp là gì và vai trò tài sản số](/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi tư vấn đúng nhu cầu thực tế, không vẽ vời tính năng thừa. Tham khảo gói thiết kế [Nền Tảng Số Chuẩn Chuyển Đổi](/giai-phap/nen-tang-so) tối ưu riêng cho cơ sở dịch vụ địa phương.'
      }
    ]
  }
];

module.exports = { batch1Articles };
