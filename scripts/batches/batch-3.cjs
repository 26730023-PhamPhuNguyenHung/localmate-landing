/**
 * scripts/batches/batch-3.cjs
 * Dữ liệu bài viết được viết lại chất lượng cao cho Batch 3 (Bài 11 - 15)
 * Cụm 2 & Cụm 3: Uy tín Maps & Đột phá Local SEO khu vực
 */

const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('../content-builder.cjs');

const batch3Articles = [
  // ==========================================
  // BÀI 11 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 11,
    slug: 'cach-tang-danh-gia-google-maps-dung-cach',
    title: 'Cách tăng đánh giá Google Maps đúng cách và bền vững cho hộ kinh doanh',
    category_slug: 'google-maps',
    focus_keyword: 'cách tăng đánh giá google maps',
    search_intent: 'Strategy / Guide - Tăng trưởng uy tín',
    target_customer: 'Chủ cơ sở muốn tăng số lượng review 5 sao nhưng sợ bị Google phạt hoặc tụt sao',
    primary_question: 'Làm thế nào để xin được nhiều đánh giá 5 sao từ khách hàng thật tại cửa hàng mà không bị Google quét xóa?',
    unique_angle: 'Cấm tuyệt đối mua review ảo từ các hội nhóm chéo hoặc dịch vụ giá rẻ. Quy trình 3 bước in mã QR để bàn và kịch bản 3 câu mở lời tự nhiên giúp tiệm thu về 30-50 đánh giá thật mỗi tháng.',
    pillar_id: 7,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Cách duy nhất để tăng đánh giá Google Maps an toàn và không bao giờ bị thuật toán Google quét xóa là **thu thập đánh giá từ chính khách hàng đang có mặt tại tiệm của bạn**. Google xác thực tính xác thực của review thông qua dữ liệu định vị GPS trên điện thoại của người viết và lịch sử tài khoản. Mua 50 review ảo trên mạng với giá vài trăm ngàn đồng sẽ dẫn đến hậu quả bị xóa sạch sau 2 tuần và có nguy cơ bị treo vĩnh viễn hồ sơ. Giải pháp bền vững nhất: In một biển mica mã QR dẫn thẳng đến link đánh giá đặt ngay tại quầy thu ngân và áp dụng kịch bản mở lời đúng thời điểm khách vừa nhận dịch vụ hài lòng.'
      },
      {
        type: 'h2',
        text: 'Cơ chế phát hiện review ảo của trí tuệ nhân tạo Google năm 2026'
      },
      {
        type: 'p',
        text: 'Nhiều chủ cơ sở vẫn ngây thơ nghĩ rằng chỉ cần nhờ bạn bè ở các tỉnh thành khác chấm 5 sao là tiệm sẽ lên top. Thuật toán của Google nhận diện review bất thường qua 3 lớp phòng thủ:'
      },
      {
        type: 'list',
        items: [
          '**Dữ liệu vị trí GPS không khớp:** Một người có tài khoản ở Đà Nẵng nhưng lại viết đánh giá cho một tiệm rửa xe tại quận 12 (TP.HCM) trong khi điện thoại không hề di chuyển vào TP.HCM sẽ bị gắn cờ gian lận.',
          '**Tần suất tăng đột biến bất thường:** Một hồ sơ 6 tháng không có đánh giá nào, bỗng nhiên trong 2 ngày xuất hiện 30 đánh giá 5 sao dồn dập -> Thuật toán khóa hiển thị toàn bộ đánh giá mới.',
          '**Nội dung rập khuôn vô hồn:** Các đánh giá chỉ viết vài từ chung chung như "Dịch vụ rất tốt", "Uy tín 5 sao" mà không nhắc đến món ăn, tên thợ hay kèm ảnh chụp thực tế sẽ bị giảm trọng số uy tín.'
        ]
      },
      {
        type: 'h2',
        text: 'Quy trình 3 bước biến khách ghé tiệm thành người đánh giá 5 sao'
      },
      {
        type: 'table',
        headers: ['Bước thực hiện', 'Thao tác cụ thể của chủ tiệm', 'Kết quả thực tế mang lại'],
        rows: [
          ['Bước 1: Lấy link đánh giá rút gọn', 'Vào Google Business Profile -> Bấm nút "Yêu cầu đánh giá" -> Sao chép đường link chính thức', 'Tạo ra liên kết mở trực tiếp trang viết sao mà khách không phải tìm kiếm'],
          ['Bước 2: In mã QR để bàn', 'Tạo mã QR từ đường link trên, in thành biển mica nhỏ đặt tại bàn tính tiền hoặc bàn chờ', 'Khách chỉ cần bật camera điện thoại quét 1 giây là mở ra trang đánh giá'],
          ['Bước 3: Mở lời đúng thời điểm vàng', 'Nói lời cảm ơn và đề nghị hỗ trợ ngay khi khách vừa khen thợ làm tốt', 'Tỷ lệ khách đồng ý quét mã đạt trên 70%']
        ]
      },
      {
        type: 'h2',
        text: 'Kịch bản 3 câu mở lời tự nhiên tại quầy (Không gây khó xử cho khách)'
      },
      {
        type: 'pov',
        text: '**Kịch bản chuẩn:** "Dạ em cảm ơn anh/chị đã ủng hộ tiệm hôm nay ạ. Nếu anh/chị thấy thợ bên em làm vừa ý, anh/chị quét giúp em cái mã QR này để chấm cho bạn thợ một đánh giá 5 sao nhé ạ. Tiệm nhỏ của tụi em rất cần lời nhận xét của anh/chị để ngày càng phục vụ chu đáo hơn."'
      },
      {
        type: 'p',
        text: 'Nếu rủi ro hồ sơ của bạn bị đối thủ chơi xấu đánh giá 1 sao hoặc bị Google tạm ngưng, hãy xem ngay bài viết [Cách xử lý Google Maps bị đình chỉ](/kien-thuc/google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi hỗ trợ thiết kế biển mã QR chuẩn nhận diện thương hiệu và thiết lập quy trình chăm sóc khách hàng tự động tại [Giải Pháp Tối Ưu Hiện Diện Địa Phương](/giai-phap/duoc-tim-thay).'
      }
    ]
  },

  // ==========================================
  // BÀI 12 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 12,
    slug: 'google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly',
    title: 'Google Maps bị đình chỉ: Nguyên nhân cốt lõi và quy trình kháng nghị khôi phục',
    category_slug: 'google-maps',
    focus_keyword: 'google maps bị đình chỉ',
    search_intent: 'Problem aware / Troubleshooting - Khắc phục sự cố nghiêm trọng',
    target_customer: 'Chủ cơ sở đang hoảng loạn vì hồ sơ Google Business Profile bị gắn nhãn "Đã tạm ngưng"',
    primary_question: 'Tại sao hồ sơ Google Maps đang hoạt động bình thường lại bị Google đình chỉ, và làm thế nào để gửi hồ sơ kháng nghị thành công?',
    unique_angle: 'Đừng bấm nút "Kháng nghị" (Appeal) khi chưa sửa chữa sai phạm trên hồ sơ. Bài viết hướng dẫn chuẩn bị bộ hồ sơ pháp lý gồm hóa đơn điện nước, giấy phép kinh doanh và ảnh thực tế để mở khóa thành công trong 5-7 ngày.',
    pillar_id: 7,
    related_service: '/giai-phap/dong-hanh-duy-tri',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Khi Google Maps bị đình chỉ (Suspended), có 2 nguyên nhân cốt tử: (1) **Chỉnh sửa thông tin nhạy cảm liên tục** (thay đổi tên cơ sở, số điện thoại hoặc địa chỉ nhiều lần trong thời gian ngắn); (2) **Vi phạm chính sách tên doanh nghiệp** (nhồi nhét từ khóa địa phương hoặc ngành nghề không có trên biển hiệu thực tế). **Quy tắc vàng:** Tuyệt đối KHÔNG bấm gửi kháng nghị ngay lập tức. Bạn phải sửa lại tên tiệm đúng 100% theo biển hiệu, chụp lại ảnh mặt tiền có số nhà và chuẩn bị sẵn giấy phép kinh doanh hoặc hóa đơn tiện ích (điện/nước/internet) đứng tên cơ sở rồi mới nộp đơn kháng nghị.'
      },
      {
        type: 'h2',
        text: 'Phân biệt 2 cấp độ đình chỉ của Google Maps'
      },
      {
        type: 'table',
        headers: ['Cấp độ đình chỉ', 'Dấu hiệu nhận biết', 'Khả năng khôi phục'],
        rows: [
          ['Tạm ngưng mềm (Soft Suspension)', 'Hồ sơ vẫn hiện trên bản đồ ngoài đời nhưng bạn bị tước quyền quản trị trong trang điều khiển', 'Rất cao (90%) - Chỉ cần xác minh lại quyền sở hữu chính chủ'],
          ['Tạm ngưng cứng (Hard Suspension)', 'Vị trí biến mất hoàn toàn khỏi Google Maps, khách tìm kiếm không còn thấy', 'Trung bình (60-70%) - Bắt buộc cung cấp đầy đủ giấy tờ pháp lý thực tế']
        ]
      },
      {
        type: 'h2',
        text: 'Bộ hồ sơ bằng chứng cần chuẩn bị trước khi gửi kháng nghị'
      },
      {
        type: 'list',
        items: [
          '**Bằng chứng 1 - Giấy phép kinh doanh:** Bản chụp gốc Giấy chứng nhận đăng ký doanh nghiệp hoặc hộ kinh doanh cá thể có con dấu đỏ.',
          '**Bằng chứng 2 - Hóa đơn tiện ích công cộng:** Hóa đơn tiền điện, nước hoặc hợp đồng thuê mặt bằng có địa chỉ trùng khớp từng chữ với địa chỉ trên Google Maps.',
          '**Bằng chứng 3 - Ảnh chụp thực địa rõ nét:** 1 ảnh chụp biển hiệu nhìn từ bên kia đường thấy rõ số nhà hai bên; 1 ảnh chụp bên trong quầy giao dịch.',
          '**Bằng chứng 4 - Thẻ CCCD của người đại diện:** Trùng với tên trên email quản trị chính.'
        ]
      },
      {
        type: 'h2',
        text: 'Mẫu đơn giải trình kháng nghị bằng tiếng Việt gửi đội ngũ hỗ trợ Google'
      },
      {
        type: 'pov',
        text: '**Nội dung mẫu:** "Kính gửi Đội ngũ Hỗ trợ Google Business Profile, tôi là chủ sở hữu hợp pháp của cơ sở [Tên Tiệm] tại địa chỉ [Địa chỉ chính xác]. Cơ sở của chúng tôi là địa điểm kinh doanh có thật, đang hoạt động phục vụ khách hàng mỗi ngày. Do sơ suất trong quá trình cập nhật thông tin [nêu lý do sửa số hoặc sửa tên], hồ sơ của chúng tôi đã vô tình vi phạm chính sách. Tôi đã điều chỉnh lại thông tin hoàn toàn trùng khớp với thực tế và gửi kèm Giấy phép kinh doanh, hóa đơn tiền điện và ảnh chụp cơ sở. Kính mong Google xem xét mở lại hồ sơ để khách hàng có thể tiếp tục liên hệ. Xin cảm ơn."'
      },
      {
        type: 'p',
        text: 'Sau khi khôi phục thành công, để bảo vệ vị trí bền vững bạn cần xây dựng hệ thống tín hiệu nhất quán trên toàn mạng internet theo bài viết [Entity SEO là gì và có cần thiết cho doanh nghiệp nhỏ](/kien-thuc/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Với các ca đình chỉ phức tạp do dính mã ngành nhạy cảm (sửa khóa, thông tắc, cứu hộ), dịch vụ [Hỗ Trợ Kháng Nghị & Đồng Hành Duy Trì](/giai-phap/dong-hanh-duy-tri) của LocalMate sẽ hỗ trợ làm việc trực tiếp với chuyên viên Google để bảo vệ tài sản của bạn.'
      }
    ]
  },

  // ==========================================
  // BÀI 13 - PILLAR ARTICLE
  // ==========================================
  {
    id: 13,
    slug: 'local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam',
    title: 'Local SEO là gì? Vì sao doanh nghiệp địa phương nên tập trung làm Local SEO?',
    category_slug: 'local-seo',
    focus_keyword: 'local seo là gì',
    search_intent: 'TOFU / Pillar - Định hướng chiến lược',
    target_customer: 'Chủ cơ sở kinh doanh khu vực đang phân vân có nên đầu tư làm SEO website không',
    primary_question: 'Local SEO là gì, khác biệt thế nào với SEO thông thường và tại sao doanh nghiệp nhỏ nên làm Local SEO thay vì cố gắng đua từ khóa toàn quốc?',
    unique_angle: 'Đừng đốt tiền đua các từ khóa chung chung toàn quốc với các tập đoàn lớn. Local SEO giúp bạn độc chiếm nhóm khách hàng có nhu cầu khẩn cấp trong bán kính 10km quanh tiệm — nơi tỷ lệ gọi điện chuyển đổi thành tiền thực tế cao nhất.',
    pillar_id: 13,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **Local SEO (Tối ưu hóa tìm kiếm địa phương)** là tập hợp các kỹ thuật giúp doanh nghiệp của bạn xuất hiện ở những vị trí cao nhất trên Google khi người dùng tìm kiếm sản phẩm/dịch vụ gắn với vị trí địa lý cụ thể (ví dụ: "sửa máy giặt quận Tân Bình", "nha khoa uy tín gần đây"). Khác với SEO thông thường phải cạnh tranh với hàng ngàn website trên toàn quốc, Local SEO chỉ tập trung vào khu vực phục vụ thực tế của bạn. Đây là chiến lược có chi phí thấp nhất nhưng mang lại tỷ lệ ra đơn cao nhất cho hộ kinh doanh nhỏ, vì khách hàng tìm kiếm từ khóa địa phương là những người đã có sẵn tiền trong túi và muốn mua hàng ngay trong ngày.'
      },
      {
        type: 'h2',
        text: 'Bảng so sánh kinh tế: Local SEO Địa Phương vs SEO Toàn Quốc'
      },
      {
        type: 'table',
        headers: ['Tiêu chí so sánh', 'SEO Từ Khóa Toàn Quốc', 'Local SEO Địa Phương (LocalMate)'],
        rows: [
          ['Đối thủ cạnh tranh', 'Hàng nghìn trang tin tức, sàn TMĐT lớn (Shopee, Tiki, Điện Máy Xanh)', 'Chỉ cạnh tranh với 5-10 tiệm cùng nghề trong quận'],
          ['Thời gian thấy kết quả', 'Từ 6 tháng đến 1 năm trở lên', 'Từ 30 đến 60 ngày nếu tối ưu đúng cách'],
          ['Chi phí đầu tư', 'Rất tốn kém (15 - 40 triệu đồng/tháng)', 'Tinh gọn (Chỉ từ 2 - 5 triệu đồng thiết lập một lần)'],
          ['Tỷ lệ chuyển đổi thành khách', 'Thấp (đa phần vào đọc tin tức rồi thoát)', 'Rất cao (khách gọi điện thoại hỏi giá và đặt lịch ngay)']
        ]
      },
      {
        type: 'h2',
        text: '3 Trụ cột cốt lõi của một chiến dịch Local SEO chuẩn chỉnh'
      },
      {
        type: 'list',
        items: [
          '**Trụ cột 1 - Hồ sơ Google Business Profile chuẩn chỉ:** Nền tảng tiếp nhận khách từ bản đồ Google Maps và ô kết quả Local 3-Pack.',
          '**Trụ cột 2 - Các trang dịch vụ theo từng Quận/Huyện (Location Landing Pages):** Website có các trang chuyên sâu cho từng địa bàn phục vụ (xem bài viết [Cách viết Location Pages chuẩn SEO](/kien-thuc/cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong)).',
          '**Trụ cột 3 - Đồng nhất thông tin NAP trên các cổng thông tin:** Tên tiệm, Địa chỉ và Số điện thoại phải trùng khớp từng ký tự trên toàn mạng internet.'
        ]
      },
      {
        type: 'h2',
        text: 'Góc nhìn LocalMate: Thước đo thành công của Local SEO'
      },
      {
        type: 'pov',
        text: '**Bỏ qua số lượt truy cập ảo:** Rất nhiều dịch vụ khoe với khách hàng "website tăng 10.000 lượt truy cập mỗi tháng". Nhưng nếu 10.000 người đó ở tận Cà Mau hay Hà Giang đọc bài blog mẹo vặt, họ không bao giờ gọi thợ sửa ống nước ở quận Cầu Giấy (Hà Nội). Thước đo duy nhất của Local SEO là: **Tháng này có thêm bao nhiêu cuộc gọi và tin nhắn Zalo hỏi việc từ khách hàng sống gần tiệm của bạn.**'
      },
      {
        type: 'p',
        text: 'Để so sánh cụ thể giữa việc dồn lực làm SEO Maps hay SEO Website, mời bạn đọc tiếp bài [So sánh SEO Google Maps và SEO Website](/kien-thuc/seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi chuyên thực thi các gói [Local SEO Thực Chiến Cho Hộ Kinh Doanh](/giai-phap/duoc-tim-thay), cam kết đo lường hiệu quả bằng cuộc gọi thực tế của khách hàng quanh vùng.'
      }
    ]
  },

  // ==========================================
  // BÀI 14 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 14,
    slug: 'seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao',
    title: 'SEO Google Maps và SEO Website khác nhau thế nào? Nên ưu tiên làm cái nào?',
    category_slug: 'local-seo',
    focus_keyword: 'so sánh seo google maps và seo website',
    search_intent: 'Comparison / Decision - Lựa chọn kênh đầu tư',
    target_customer: 'Chủ cơ sở có ngân sách hạn chế, muốn biết nên dồn tiền làm Maps hay làm Web trước',
    primary_question: 'Doanh nghiệp dịch vụ nhỏ nên ưu tiên làm SEO Google Maps hay làm SEO Website trước để nhanh có khách?',
    unique_angle: 'Không có câu trả lời chung chung "nên làm cả hai". Lựa chọn phụ thuộc hoàn toàn vào mức độ khẩn cấp của dịch vụ bạn bán: Dịch vụ cứu hộ, sửa chữa tức thì làm Maps trước; Dịch vụ giá trị cao cần xem mẫu công trình thì làm Website trước.',
    pillar_id: 13,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Sự khác biệt cốt lõi nằm ở hành vi khách hàng: **SEO Google Maps** nhắm vào nhu cầu khẩn cấp, tìm thợ gần nhất để bấm gọi ngay trên điện thoại di động (thích hợp cho sửa xe, sửa khóa, hút hầm cầu, quán ăn, nha khoa). Ngược lại, **SEO Website** nhắm vào nhu cầu nghiên cứu, so sánh kỹ lưỡng các gói dịch vụ có giá trị lớn (thích hợp cho thi công nội thất, xây nhà trọn gói, luật sư, kế toán). Nếu ngân sách hạn hẹp, các cơ sở sửa chữa và dịch vụ khẩn cấp nên ưu tiên làm Google Maps trước để có dòng tiền nhanh trong 30 ngày.'
      },
      {
        type: 'h2',
        text: 'Ma trận so sánh: SEO Maps vs SEO Website'
      },
      {
        type: 'table',
        headers: ['Tiêu chí đánh giá', 'SEO Google Maps (Local 3-Pack)', 'SEO Website Truyền Thống'],
        rows: [
          ['Vị trí hiển thị trên điện thoại', 'Nằm ở đỉnh màn hình (trên cả kết quả web tự nhiên)', 'Nằm ở phía dưới sau khối Bản đồ'],
          ['Hành vi chính của người xem', 'Nhìn điểm sao, khoảng cách -> Bấm gọi hotline ngay', 'Bấm vào đọc bài, xem ảnh dự án, tham khảo bảng giá'],
          ['Yếu tố quyết định thứ hạng', 'Khoảng cách GPS, danh mục chính, số lượng review thật', 'Cấu trúc bài viết, tốc độ tải trang, độ uy tín tên miền'],
          ['Tốc độ có khách đầu tiên', 'Rất nhanh (2 - 4 tuần sau khi xác minh)', 'Cần thời gian xây dựng nội dung (2 - 4 tháng)']
        ]
      },
      {
        type: 'h2',
        text: 'Hướng dẫn lựa chọn kênh đầu tư theo từng ngành nghề'
      },
      {
        type: 'list',
        items: [
          '**Nhóm 1 - Ưu tiên làm Google Maps trước 100%:** Thợ khóa, sửa chữa điện nước gia đình, cứu hộ xe máy/ô tô, quán ăn uống, tiệm giặt sấy, cắt tóc nam nữ. Khách hàng các ngành này ra quyết định trong vòng 3 phút.',
          '**Nhóm 2 - Ưu tiên làm Website trước:** Xưởng may đồng phục công ty, xưởng sản xuất cơ khí lớn, công ty thiết kế kiến trúc, dịch vụ tư vấn thuế doanh nghiệp. Khách hàng cần xem hồ sơ năng lực và bảng báo giá chi tiết.',
          '**Nhóm 3 - Mô hình kết hợp hoàn hảo:** Làm một hồ sơ Google Maps chuẩn chỉ và gắn link trỏ về một Landing Page 1 trang tinh gọn. Cách làm này giúp bổ trợ sức mạnh cho nhau và tăng gấp đôi tỷ lệ khách tin tưởng.'
        ]
      },
      {
        type: 'p',
        text: 'Nếu bạn chọn làm Website, hãy xem cách triển khai các trang phủ sóng từng khu vực tại bài viết [Cách SEO doanh nghiệp tại khu vực địa phương](/kien-thuc/cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong).'
      },
      {
        type: 'pov',
        text: '**Giải pháp tích hợp của LocalMate:** Thay vì bắt khách hàng chọn một trong hai, chúng tôi cung cấp [Gói Khởi Động Đột Phá](/giai-phap/duoc-tim-thay) kết hợp đồng bộ cả Google Maps chính chủ và Website tinh gọn với chi phí bình dân nhất.'
      }
    ]
  },

  // ==========================================
  // BÀI 15 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 15,
    slug: 'cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong',
    title: 'Cách SEO doanh nghiệp lên Google tại khu vực địa phương: Cẩm nang Location Pages',
    category_slug: 'local-seo',
    focus_keyword: 'cách seo từ khóa địa phương',
    search_intent: 'Solution aware / Guide - Kỹ thuật triển khai',
    target_customer: 'Chủ cơ sở muốn phủ sóng từ khóa dịch vụ theo từng quận/huyện quanh khu vực',
    primary_question: 'Làm thế nào để tạo các trang dịch vụ theo từng quận/huyện trên website mà không bị Google phạt lỗi trùng lặp nội dung (duplicate content)?',
    unique_angle: 'Cấm tuyệt đối việc nhân bản hàng loạt 20 trang web bằng cách dùng tool tự động thay mỗi tên quận. Mỗi trang quận huyện phải có địa chỉ công trình thật, thời gian di chuyển thực tế và phản hồi của khách hàng tại chính khu vực đó.',
    pillar_id: 13,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Để SEO từ khóa dịch vụ lên top tìm kiếm tại từng quận/huyện cụ thể (ví dụ: "sửa máy bơm quận 7", "hút hầm cầu huyện Nhà Bè"), phương pháp chuẩn xác nhất là xây dựng **Hệ thống Trang Địa Điểm (Location Pages)** độc lập trên website. Một trang địa điểm đạt chuẩn Google không phải là bài viết nhân bản vô tội vạ, mà phải chứa 4 thông tin thực địa duy nhất: (1) Tên các tuyến đường huyết mạch tại quận đó mà thợ có mặt trong 20 phút; (2) Hình ảnh các công trình thực tế đã thi công tại quận đó; (3) Bảng giá cụ thể có tính phí vận chuyển theo cự ly; (4) Bản đồ hướng dẫn lộ trình thợ di chuyển từ xưởng đến quận.'
      },
      {
        type: 'h2',
        text: 'Cạm bẫy nguy hiểm: Tool tự động nhân bản trang theo quận'
      },
      {
        type: 'p',
        text: 'Nhiều đơn vị SEO giá rẻ thường dùng phần mềm tạo ra 50 trang web cho 50 quận/huyện bằng cách copy nguyên xi 1 bài viết và chỉ thay đổi mỗi từ "quận 1" thành "quận 2", "quận 3".'
      },
      {
        type: 'pov',
        text: '**Cảnh báo thuật toán Google:** Thuật toán SpamBrain của Google sẽ nhận diện đây là hành vi tạo trang ngõ (Doorway Pages) phục vụ thao túng công cụ tìm kiếm. Toàn bộ các trang này sẽ bị xóa khỏi chỉ mục tìm kiếm và website chính sẽ bị tụt hạng thảm hại.'
      },
      {
        type: 'h2',
        text: 'Khung sườn cấu trúc chuẩn của 1 trang Location Page chất lượng cao'
      },
      {
        type: 'table',
        headers: ['Thành phần trang', 'Nội dung chi tiết bắt buộc', 'Ví dụ minh họa thực tế'],
        rows: [
          ['Tiêu đề H1 & Thẻ Title', 'Dịch vụ chính + Tên Quận/Huyện + Cam kết có mặt nhanh', 'Sửa Khóa Tại Nhà Quận Bình Thạnh - Thợ Có Mặt Sau 15 Phút | LocalMate'],
          ['Khu vực phục vụ chi tiết', 'Liệt kê các phường và tuyến đường trọng điểm', 'Phục vụ nhanh tại các tuyến đường: Bạch Đằng, Xô Viết Nghệ Tĩnh, Phan Đăng Lưu...'],
          ['Công trình thực tế tại quận', 'Ảnh chụp thợ đang thao tác kèm địa chỉ thực', 'Ảnh thay ổ khóa cửa cuốn tại Chung cư Richmond City đường Nguyễn Xí'],
          ['Thời gian cam kết', 'Ước lượng thời gian di chuyển từ cơ sở đến quận', 'Đội thợ túc trực tại ngã tư Hàng Xanh di chuyển trong vòng 15-20 phút']
        ]
      },
      {
        type: 'h2',
        text: 'Quy tắc 3 không khi làm SEO trang địa phương'
      },
      {
        type: 'list',
        items: [
          '**Không tạo trang cho những quận quá xa không phục vụ được:** Nếu tiệm ở Hà Nội nhưng tạo trang phục vụ tại Hải Phòng chỉ để lấy traffic ảo, khi khách gọi bạn từ chối sẽ bị đánh giá xấu.',
          '**Không dùng số điện thoại ảo:** Mọi trang địa điểm phải dùng số hotline thật có người nghe máy.',
          '**Không nhồi nhét từ khóa địa phương:** Viết văn phong tự nhiên, mạch lạc, tập trung giải quyết băn khoăn của khách hàng.'
        ]
      },
      {
        type: 'p',
        text: 'Để củng cố độ uy tín thực thể cho các trang dịch vụ này, hãy tìm hiểu tiếp bài viết [Entity SEO là gì và có cần thiết cho doanh nghiệp nhỏ](/kien-thuc/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi chuyên xây dựng cấu trúc [Hệ Thống Trang Địa Điểm Chuẩn Thực Tế](/giai-phap/duoc-tim-thay) giúp cơ sở của bạn đón đầu khách hàng từ các quận lân cận một cách bền vững.'
      }
    ]
  }
];

module.exports = { batch3Articles };
