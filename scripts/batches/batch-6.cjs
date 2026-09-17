/**
 * scripts/batches/batch-6.cjs
 * Dữ liệu bài viết được viết lại chất lượng cao cho Batch 6 (Bài 26 - 30)
 * Cụm 5 & Cụm Chiến Lược Tối Cao: Tự Động Hóa Vận Hành & Lộ Trình Chuyển Đổi Số Bình Dân
 */

const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('../content-builder.cjs');

const batch6Articles = [
  // ==========================================
  // BÀI 26 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 26,
    slug: 'crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao',
    title: 'CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào? (Bảng lọc thực chiến)',
    category_slug: 'crm-automation',
    focus_keyword: 'tính năng crm cho doanh nghiệp nhỏ',
    search_intent: 'Solution aware / Feature breakdown - Lọc tính năng thiết yếu',
    target_customer: 'Chủ tiệm đang tìm kiếm giải pháp quản lý khách nhưng bị ngợp bởi các phần mềm quá nhiều nút',
    primary_question: 'Một hệ thống quản lý khách hàng cho tiệm dịch vụ địa phương chỉ cần đúng những tính năng nào và cần dẹp bỏ những tính năng thừa thãi nào?',
    unique_angle: 'Gọt giũa 80% tính năng thừa thãi của phần mềm quản trị doanh nghiệp lớn. Một tiệm nhỏ chỉ cần đúng 4 tính năng: Danh bạ số điện thoại tập trung, Lịch sử dịch vụ/bảo hành, Nhắc hẹn qua Zalo và Báo cáo doanh thu đơn giản theo ngày.',
    pillar_id: 25,
    related_service: '/giai-phap/van-hanh-tu-dong-hoa',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Một hệ thống CRM hiệu quả cho cơ sở dịch vụ nhỏ dưới 10 người chỉ cần tập trung vào **đúng 4 tính năng cốt lõi**: (1) **Lưu danh bạ khách hàng tập trung** gồm Họ tên, Số điện thoại và Địa chỉ nhà; (2) **Ghi chú lịch sử dịch vụ** (ngày sửa, thợ nào làm, phụ tùng đã thay, thời hạn bảo hành); (3) **Tự động gửi tin nhắn Zalo/SMS nhắc lịch bảo dưỡng định kỳ**; (4) **Bảng tổng kết doanh thu và công nợ đơn giản**. Toàn bộ các tính năng như phễu bán hàng đa tầng, chấm điểm khách hàng tiềm năng hay phân tích biểu đồ tài chính phức tạp đều là tính năng thừa thãi làm rối mắt nhân viên và khiến hệ thống bị bỏ xó.'
      },
      {
        type: 'h2',
        text: 'Bảng đối chiếu tính năng: Bắt buộc phải có vs Tính năng thừa cần gạch bỏ'
      },
      {
        type: 'table',
        headers: ['Nhóm tính năng', 'Bắt buộc phải có (Must Have)', 'Tính năng thừa gây rối (Nice-to-have / Bloat)'],
        rows: [
          ['Quản lý thông tin', 'Tên, Số điện thoại, Địa chỉ tiệm/nhà khách, Biển số xe/Mã thiết bị', 'Phân loại chức danh giám đốc, sở thích cá nhân, thu nhập hàng năm'],
          ['Theo dõi công việc', 'Ngày tiếp nhận, ngày bàn giao, tình trạng sửa chữa, thợ phụ trách', 'Sơ đồ Gantt tiến độ dự án, chấm điểm KPI nhân viên theo giờ'],
          ['Chăm sóc sau bán', 'Tự động nhắc lịch bảo dưỡng sau 3 tháng / 6 tháng qua Zalo', 'Chiến dịch email marketing tự động 7 bước (khách địa phương ít đọc email)'],
          ['Báo cáo số liệu', 'Hôm nay thu bao nhiêu tiền mặt, còn ai nợ tiền chưa trả', 'Dự báo tăng trưởng kinh tế lượng học, biểu đồ tỷ suất sinh lời đa biến']
        ]
      },
      {
        type: 'h2',
        text: 'Nguyên lý thiết kế giao diện cho thợ và nhân viên cửa hàng'
      },
      {
        type: 'pov',
        text: '**Nguyên lý 3 lần chạm tay:** Thợ sửa xe hay nhân viên nha khoa tay thường dính bụi bẩn hoặc bận rộn thao tác kỹ thuật. Giao diện quản lý phải chạy mượt trên điện thoại thông minh, chữ to rõ ràng, thao tác tạo một phiếu khách hàng mới không được vượt quá 3 lần chạm tay trong vòng 30 giây.'
      },
      {
        type: 'p',
        text: 'Sau khi đã có nơi lưu trữ thông tin, bạn có thể thiết lập các quy trình tự động hóa không tốn tiền theo bài viết [7 việc nên tự động hóa ngay cho doanh nghiệp nhỏ](/kien-thuc/automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi thiết lập sẵn [Bản Mẫu Quản Lý Khách Hàng Tinh Gọn](/giai-phap/van-hanh-tu-dong-hoa) trên nền tảng Google Workspace kết hợp Zalo OA, dễ dùng như gửi tin nhắn và không thu phí phần mềm hàng tháng.'
      }
    ]
  },

  // ==========================================
  // BÀI 27 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 27,
    slug: 'automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa',
    title: 'Automation cho doanh nghiệp nhỏ: 7 việc thủ công nên tự động hóa ngay (Chi phí 0đ)',
    category_slug: 'crm-automation',
    focus_keyword: 'tự động hóa cho doanh nghiệp nhỏ',
    search_intent: 'Solution aware / How-to - Tự động hóa quy trình',
    target_customer: 'Chủ tiệm quá bận rộn với các việc lặp đi lặp lại: trực tin nhắn, nhắc hẹn, ghi sổ sách',
    primary_question: 'Những công việc thủ công lặp đi lặp lại nào một chủ tiệm nhỏ có thể tự động hóa ngay bằng công cụ miễn phí để giải phóng thời gian?',
    unique_angle: 'Tự động hóa không cần robot hay phần mềm triệu đô. Bằng cách kết hợp Google Form, Google Sheet, Webhook và Zalo/Telegram, chủ tiệm có thể tự động hóa 7 khâu vận hành tốn thời gian nhất mà không mất một đồng chi phí phần mềm.',
    pillar_id: 25,
    related_service: '/giai-phap/van-hanh-tu-dong-hoa',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Tự động hóa (Automation) cho hộ kinh doanh nhỏ không phải là việc gì xa vời. Đó là việc dùng các công cụ miễn phí sẵn có để **máy móc tự động làm thay bạn 7 công việc nhàm chán lặp đi lặp lại mỗi ngày**: (1) Tự động đẩy thông báo khách đặt lịch trên website về tin nhắn điện thoại của chủ tiệm tức thì; (2) Tự động lưu số điện thoại khách vào bảng tính Google Sheet; (3) Tự động gửi tin nhắn xác nhận lịch hẹn kèm định vị tiệm qua Zalo; (4) Tự động gửi tin nhắn nhắc khách mang xe/máy đến bảo dưỡng sau 6 tháng; (5) Tự động gửi link xin đánh giá 5 sao sau khi hoàn thành dịch vụ; (6) Tự động tổng kết doanh thu ngày vào 21h tối; (7) Tự động trả lời nhanh các câu hỏi về địa chỉ và bảng giá khi chủ tiệm đang bận tay làm việc.'
      },
      {
        type: 'h2',
        text: 'Bảng bóc tách 7 quy trình tự động hóa 0đ cho tiệm địa phương'
      },
      {
        type: 'table',
        headers: ['Quy trình tự động hóa', 'Cách làm thủ công cũ (Tốn sức)', 'Hệ thống tự động mới (0đ qua LocalMate)'],
        rows: [
          ['1. Báo chuông khi có khách mới', 'Phải mở máy tính F5 kiểm tra email hoặc web', 'Tự động nảy thông báo rung trên Telegram/Zalo của chủ tiệm trong 2 giây'],
          ['2. Lưu trữ danh bạ khách', 'Gõ từng số điện thoại vào sổ tay hoặc danh bạ máy', 'Dữ liệu tự động điền vào một dòng mới trên Google Sheet đám mây'],
          ['3. Xác nhận lịch hẹn & Bản đồ', 'Nhân viên gọi điện thoại đọc địa chỉ, khách ghi nhầm', 'Tự động gửi tin nhắn Zalo kèm vị trí ghim Google Maps chuẩn xác'],
          ['4. Nhắc lịch bảo dưỡng định kỳ', 'Quên bẵng đi, mất luôn khách hàng quen vào tay tiệm khác', 'Hệ thống tự quét lịch sử và báo tin nhắn Zalo: "Xe anh đã đến kỳ thay nhớt"'],
          ['5. Xin đánh giá Google Maps', 'Ngại mở lời hoặc quên không xin review', 'Tự động gửi tin nhắn cảm ơn kèm mã QR đánh giá sau khi thanh toán 2 tiếng'],
          ['6. Tin nhắn trả lời tự động ngoài giờ', 'Khách nhắn đêm không ai trả lời -> Sáng hôm sau khách đi chỗ khác', 'Bot trả lời nhã nhặn kèm bảng giá và hẹn giờ thợ liên hệ lại vào 7h30 sáng'],
          ['7. Báo cáo doanh thu cuối ngày', 'Ngồi đếm từng mẩu hóa đơn giấy cộng trừ mỏi mắt', 'Tự động tổng kết tổng tiền thu được gửi về điện thoại lúc 21h00']
        ]
      },
      {
        type: 'h2',
        text: 'Ví dụ thực tế: Tiệm giặt sấy cao cấp tại quận Phú Nhuận'
      },
      {
        type: 'p',
        text: 'Chị Lan, chủ một tiệm giặt ủi và vệ sinh giày tại đường Phan Xích Long (quận Phú Nhuận, TP.HCM), trước đây mỗi ngày phải mất hơn 2 tiếng đồng hồ chỉ để nhắn tin Zalo cho từng khách báo: "Đồ của bạn đã giặt xong, mời bạn ghé lấy". Nhiều hôm đông khách, nhân viên quên nhắn khiến quần áo chất đống trong tiệm.'
      },
      {
        type: 'p',
        text: 'Sau khi thiết lập hệ thống tự động hóa tinh gọn: Nhân viên chỉ cần tích chọn ô "Đã xong" trên điện thoại, hệ thống tự động gửi 1 tin nhắn Zalo thông báo cho khách kèm mã đơn hàng và số tiền cần thanh toán. Tiệm tiết kiệm được hoàn toàn 2 tiếng làm việc mỗi ngày, khách hàng khen ngợi tiệm chuyên nghiệp như các chuỗi giặt là lớn.'
      },
      {
        type: 'p',
        text: 'Để gom toàn bộ tin nhắn từ các mạng xã hội về một đầu mối điện thoại, hãy xem tiếp bài viết [Cách quản lý khách hàng từ Facebook, Zalo và Website trên một hệ thống](/kien-thuc/cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi hỗ trợ cài đặt trọn gói [Hệ Thống Tự Động Hóa Vận Hành Tinh Gọn](/giai-phap/van-hanh-tu-dong-hoa) giúp chủ cơ sở rảnh tay tập trung vào chuyên môn tay nghề.'
      }
    ]
  },

  // ==========================================
  // BÀI 28 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 28,
    slug: 'cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong',
    title: 'Cách quản lý khách hàng từ Facebook, Zalo và Website tập trung trên một điện thoại',
    category_slug: 'crm-automation',
    focus_keyword: 'quản lý tin nhắn facebook zalo website tập trung',
    search_intent: 'Solution aware / Guide - Đồng bộ đa kênh',
    target_customer: 'Chủ tiệm bị phân tán tin nhắn khách: khách nhắn Fanpage, khách nhắn Zalo, khách gọi web khiến nhân viên bỏ sót',
    primary_question: 'Làm thế nào để gom toàn bộ tin nhắn và cuộc gọi của khách hàng từ Website, Facebook Fanpage và Zalo về duy nhất một ứng dụng trên điện thoại?',
    unique_angle: 'Không cần thuê các phần mềm quản lý chat đa kênh đắt đỏ vài triệu mỗi tháng. Hướng dẫn thiết lập luồng thông báo trung tâm về ứng dụng Telegram hoặc Zalo cá nhân của chủ tiệm giúp bạn không bao giờ bỏ sót một cuộc gọi mua hàng nào.',
    pillar_id: 25,
    related_service: '/giai-phap/van-hanh-tu-dong-hoa',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Tình trạng phổ biến nhất của các chủ tiệm nhỏ hiện nay là **"loạn kênh tiếp nhận"**: Khách hỏi giá trên bình luận Facebook, khách nhắn vào Zalo cá nhân, khách điền thông tin trên website và khách gọi điện trực tiếp. Khi nhân viên bận làm tay chân, tin nhắn bị trôi và khách hàng chờ quá 15 phút sẽ lập tức bấm sang tiệm đối thủ. Giải pháp tinh gọn nhất là **xây dựng một "Trạm thông báo trung tâm" (Notification Hub) sử dụng Webhook miễn phí**. Bất kể khách liên hệ từ kênh nào (Website, Fanpage hay Zalo OA), một thông báo rung kèm đầy đủ Tên, Số điện thoại và Nhu cầu của khách sẽ được đẩy thẳng về 01 nhóm Telegram hoặc Zalo trên điện thoại của chủ tiệm trong vòng 3 giây.'
      },
      {
        type: 'h2',
        text: 'Sơ đồ luồng thông báo khách hàng tập trung (Notification Hub)'
      },
      {
        type: 'table',
        headers: ['Kênh khách liên hệ', 'Công cụ trung chuyển dữ liệu', 'Đích đến duy nhất trên tay bạn'],
        rows: [
          ['Khách bấm nút trên Website', 'Webhook API gửi dữ liệu tức thì', 'Nhóm Telegram / Zalo riêng của tiệm: Rung chuông kèm số điện thoại'],
          ['Khách nhắn tin Fanpage Facebook', 'Meta Business Suite Webhook', 'Thông báo nổi trên màn hình khóa điện thoại'],
          ['Khách nhắn tin Zalo OA', 'Zalo Open Platform Webhook', 'Tin nhắn thông báo tự động chuyển tiếp đến Zalo cá nhân'],
          ['Khách bấm gọi Hotline', 'Chuyển hướng cuộc gọi trực tiếp (Call Forwarding)', 'Điện thoại đổ chuông nghe máy ngay lập tức']
        ]
      },
      {
        type: 'h2',
        text: '3 Lợi ích sống còn của việc gom thông báo về một nơi'
      },
      {
        type: 'list',
        items: [
          '**Tốc độ phản hồi dưới 5 phút:** 78% khách hàng địa phương sẽ chốt đơn với đơn vị đầu tiên nhấc máy hoặc nhắn tin lại cho họ.',
          '**Không bao giờ bị sót khách:** Mọi thông tin khách hỏi đều được lưu trữ lại trong lịch sử nhóm chat, cuối tuần có thể đối soát xem ai chưa được chăm sóc.',
          '**Nhiều thợ cùng phối hợp:** Bạn có thể thêm các thợ chính vào nhóm chung. Thợ nào đang rảnh tay gần khu vực đó có thể nhận việc và gọi lại cho khách ngay lập tức.'
        ]
      },
      {
        type: 'p',
        text: 'Để thu hút thêm nhiều người liên hệ tự nhiên từ các kênh này, mời bạn tìm hiểu cách làm nội dung gần gũi tại [Content marketing cho doanh nghiệp địa phương bắt đầu từ đâu](/kien-thuc/content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi cài đặt sẵn luồng thông báo gom tin nhắn đa kênh tại [Giải Pháp Vận Hành Tự Động Hóa](/giai-phap/van-hanh-tu-dong-hoa), giúp bạn kiểm soát toàn bộ công việc kinh doanh ngay trên chiếc điện thoại bỏ túi.'
      }
    ]
  },

  // ==========================================
  // BÀI 29 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 29,
    slug: 'content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau',
    title: 'Content marketing cho doanh nghiệp địa phương: Bắt đầu từ đâu mà không cần viết văn hoa?',
    category_slug: 'content',
    focus_keyword: 'content marketing cho doanh nghiệp địa phương',
    search_intent: 'Solution aware / Content strategy - Chiến lược nội dung thực tế',
    target_customer: 'Chủ tiệm, thợ lành nghề không biết viết văn, sợ làm nội dung tiếp thị',
    primary_question: 'Chủ tiệm nhỏ không biết viết văn thì làm nội dung thế nào để khách hàng quanh khu vực tin tưởng và ghé quán?',
    unique_angle: 'Bỏ qua các bài viết triết lý dài dòng. Khách hàng địa phương tin vào bằng chứng thực tế: Chụp ảnh cận cảnh sản phẩm hoàn thiện mỗi ngày, quay video thợ đang thao tác thật và giải đáp công khai các thắc mắc về giá cả, độ bền phụ tùng.',
    pillar_id: 1,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Làm nội dung (Content marketing) cho tiệm địa phương **hoàn toàn không cần tài năng viết văn hoa mỹ**. Khách hàng cần tìm thợ sửa nhà, sửa xe hay khám răng không vào mạng để đọc thơ ca hay triết lý kinh doanh. Họ chỉ muốn nhìn thấy **bằng chứng về tay nghề thật của bạn**. Công thức làm nội dung đơn giản nhất cho người bận rộn gồm 3 dạng tư liệu hàng ngày: (1) **Ảnh chụp Trước & Sau (Before - After)** khi hoàn thành công việc; (2) **Video ngắn 30 giây cận cảnh thao tác thợ** đang làm việc tại xưởng; (3) **Giải đáp thẳng thắn câu hỏi về giá tiền và cách phân biệt phụ tùng thật/giả**. Chỉ cần dùng điện thoại chụp ảnh thật và viết 3 dòng mô tả mộc mạc là bạn đã vượt trội hơn 90% đối thủ quanh vùng.'
      },
      {
        type: 'h2',
        text: 'Lịch nội dung 4 tuần thực chiến cho chủ cơ sở bận rộn'
      },
      {
        type: 'table',
        headers: ['Ngày trong tuần', 'Chủ đề nội dung đăng tải', 'Hình thức thể hiện bằng điện thoại'],
        rows: [
          ['Thứ Hai', 'Công trình thực tế đầu tuần: Bàn giao sản phẩm cho khách', 'Chụp 3 bức ảnh thành phẩm kèm lời cảm ơn khách hàng tại địa phương'],
          ['Thứ Tư', 'Mẹo vặt nghề nghiệp: Cách tự kiểm tra lỗi đơn giản tại nhà', 'Viết 4 dòng hướng dẫn ngắn: "3 dấu hiệu nhận biết ắc quy sắp hết điện"'],
          ['Thứ Sáu', 'Hậu trường thợ làm việc: Đồ nghề ngăn nắp, phụ tùng chính hãng', '1 bức ảnh chụp kệ đồ nghề sạch sẽ hoặc kho hàng nguyên tem mác'],
          ['Chủ Nhật', 'Giải đáp thắc mắc về bảng giá và chính sách bảo hành', 'Công khai mức giá rõ ràng cho dịch vụ được hỏi nhiều nhất trong tuần']
        ]
      },
      {
        type: 'h2',
        text: '3 Nguyên tắc "Nói thực - Làm thực" khi đăng bài'
      },
      {
        type: 'list',
        items: [
          '**Không dùng ảnh mạng quốc tế:** Tuyệt đối không lấy ảnh thợ nước ngoài da trắng mắt xanh tải từ Google về đăng. Khách nhìn thấy sẽ biết ngay tiệm thiếu năng lực thật.',
          '**Giữ nguyên giọng điệu chân chất:** Viết như cách bạn nói chuyện với khách hàng ngoài đời: "Hôm nay em vừa xử lý xong bộ khóa cửa cuốn cho anh Hùng bên ngõ 12...".',
          '**Luôn kèm số điện thoại và địa chỉ ở cuối bài:** Mọi bài viết phải giúp khách biết ngay tiệm ở đâu và gọi số nào.'
        ]
      },
      {
        type: 'p',
        text: 'Nội dung thực tế này chính là nguyên liệu tốt nhất để phục vụ lộ trình chuyển đổi toàn diện cho cơ sở của bạn trong bài viết tối cao [Chuyển đổi số cho doanh nghiệp nhỏ: Bắt đầu từ 5 việc đơn giản](/kien-thuc/chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi hướng dẫn chủ cơ sở cách xây dựng kho tư liệu hình ảnh chân thực và thiết lập hệ thống bài viết chuẩn SEO địa phương tại [Giải Pháp Hiện Diện Số Đột Phá](/giai-phap/duoc-tim-thay).'
      }
    ]
  },

  // ==========================================
  // BÀI 30 - MASTER MACRO PILLAR ARTICLE
  // ==========================================
  {
    id: 30,
    slug: 'chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian',
    title: 'Chuyển đổi số cho doanh nghiệp nhỏ: Lộ trình 5 bước thực tế từ 0 đến có khách',
    category_slug: 'kinh-doanh-dia-phuong',
    focus_keyword: 'chuyển đổi số cho doanh nghiệp nhỏ',
    search_intent: 'Pillar / Macro Roadmap - Lộ trình tổng thể thực chiến',
    target_customer: 'Chủ tiệm, hộ kinh doanh, xưởng nhỏ muốn ứng dụng công nghệ bài bản nhưng không biết bắt đầu từ đâu',
    primary_question: 'Chuyển đổi số cho một hộ kinh doanh nhỏ thực chất là làm những gì, theo thứ tự nào để nhanh có khách và không bị tốn tiền lãng phí?',
    unique_angle: 'Bỏ qua các khái niệm cao siêu như AI, Big Data, Cloud ERP. Chuyển đổi số bình dân của LocalMate là lộ trình 5 bước thực dụng: Mặt tiền Maps -> Website tư vấn chính chủ -> Đánh giá thật -> Quảng cáo ngách -> Giữ chân khách cũ bằng bảng tính.',
    pillar_id: 30,
    related_service: '/giai-phap/nen-tang-so',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **Chuyển đổi số cho doanh nghiệp nhỏ** hoàn toàn không phải là những dự án phần mềm tiền tỷ hay những thuật ngữ trí tuệ nhân tạo xa vời. Đối với một hộ kinh doanh cá thể hay một cơ sở dịch vụ dưới 10 nhân sự, chuyển đổi số chỉ đơn giản là **đưa công việc buôn bán thực tế ngoài đời của bạn lên môi trường internet một cách bài bản, giúp khách hàng quanh vùng dễ tìm thấy, dễ tin tưởng và bấm gọi mua hàng nhanh nhất**. Lộ trình chuẩn xác gồm đúng 5 bước tuần tự: (1) Chiếm lĩnh mặt tiền bản đồ Google Maps miễn phí; (2) Sở hữu một website tinh gọn gắn tên miền chính chủ; (3) Tích lũy đánh giá 5 sao từ khách hàng thật; (4) Khởi chạy quảng cáo tìm kiếm ngách với ngân sách nhỏ; (5) Quản lý và chăm sóc khách hàng cũ bằng bảng tính tự động 0đ.'
      },
      {
        type: 'h2',
        text: 'Bản đồ lộ trình 5 giai đoạn chuyển đổi số bền vững (Macro Roadmap)'
      },
      {
        type: 'table',
        headers: ['Giai đoạn', 'Nhiệm vụ trọng tâm', 'Tài sản số xây dựng được', 'Bài hướng dẫn chi tiết'],
        rows: [
          ['Bước 1: Được tìm thấy tại chỗ', 'Xác minh vị trí cửa hàng trên Google Maps chuẩn chỉ', 'Hồ sơ Google Business Profile chính chủ có tích xác minh', '[Hướng dẫn Google Maps A-Z](/kien-thuc/google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z)'],
          ['Bước 2: Xây dựng niềm tin', 'Thiết lập website tinh gọn 4 trang nêu rõ bảng giá', 'Tên miền thương hiệu chính chủ 100%, không bị phụ thuộc MXH', '[Website doanh nghiệp là gì](/kien-thuc/website-doanh-nghiep-la-gi-doanh-nghiep-nho-co-can-website)'],
          ['Bước 3: Tích lũy uy tín số', 'Xin đánh giá 5 sao từ khách hàng hài lòng tại quầy', 'Tấm khiên uy tín ngăn chặn đối thủ chơi xấu, tăng tỷ lệ chốt đơn', '[Cách tăng đánh giá Google Maps](/kien-thuc/cach-tang-danh-gia-google-maps-dung-cach)'],
          ['Bước 4: Bứt phá doanh số', 'Chạy Google Search Ads vào các từ khóa nhu cầu khẩn cấp', 'Dòng tiền cuộc gọi chủ động hàng ngày từ khách có sẵn nhu cầu', '[Google Ads cho doanh nghiệp nhỏ](/kien-thuc/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau)'],
          ['Bước 5: Vận hành thảnh thơi', 'Lưu trữ thông tin và tự động nhắc lịch bảo dưỡng qua Zalo', 'Hệ thống CRM tinh gọn 0đ giữ chân 100% khách hàng cũ quay lại', '[CRM là gì và ứng dụng tinh gọn](/kien-thuc/crm-la-gi-doanh-nghiep-nho-co-can-crm-khong)']
        ]
      },
      {
        type: 'h2',
        text: '5 Sai lầm chết người khiến hộ kinh doanh "sợ hãi công nghệ"'
      },
      {
        type: 'list',
        items: [
          '**Sai lầm 1 - Đốt cháy giai đoạn:** Chưa có website rõ bảng giá và chưa có đánh giá nào trên Google Maps đã vội vàng nạp tiền chạy quảng cáo -> Khách vào xem thấy sơ sài nên thoát ra, mất trắng tiền quảng cáo.',
          '**Sai lầm 2 - Giao khoán toàn bộ tài sản cho người ngoài:** Để đơn vị dịch vụ tự đứng tên tên miền, tự quản lý tài khoản Google Maps và trang Fanpage. Đến khi có bất đồng thì bị tống tiền hoặc mất sạch khách quen.',
          '**Sai lầm 3 - Mua phần mềm cồng kềnh vượt quá quy mô:** Cơ sở chỉ có 5 thợ nhưng mua phần mềm quản lý ERP hàng chục triệu với hàng trăm tính năng phức tạp, cuối cùng nhân viên không ai dùng.',
          '**Sai lầm 4 - Dùng mánh khóe đen:** Mua review ảo, dùng tool spam link rác để rồi bị Google trừng phạt khóa tài khoản vĩnh viễn.',
          '**Sai lầm 5 - Thiếu kiên trì:** Đăng bài hay làm web được 1 tuần chưa thấy khách đã vội nản lòng từ bỏ. Uy tín trên môi trường số cần sự tích lũy đều đặn.'
        ]
      },
      {
        type: 'h2',
        text: 'Triết lý bất biến của LocalMate: Nói thực - Làm thực - Tận nơi'
      },
      {
        type: 'pov',
        text: '**Thông điệp gửi tới các chủ cơ sở:** Công nghệ sinh ra là để phục vụ con người, không phải để làm cho cuộc sống của bạn phức tạp hơn. Bạn không cần phải trở thành một lập trình viên để đưa tiệm của mình lên mạng. Điều quan trọng nhất là bạn có một người đồng hành trung thực, hỗ trợ bạn từng bước, bàn giao tài sản chính chủ 100% và chỉ nhận thù lao khi công việc thực sự mang lại kết quả.'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Khám phá hệ sinh thái toàn diện của chúng tôi từ [Nền Tảng Website](/giai-phap/nen-tang-so), [Được Tìm Thấy Trên Bản Đồ](/giai-phap/duoc-tim-thay), [Thu Hút Khách Hàng](/giai-phap/thu-hut-khach-hang) đến [Vận Hành Tự Động Hóa](/giai-phap/van-hanh-tu-dong-hoa). Chúng tôi luôn sẵn sàng hỗ trợ tư vấn trực tiếp tận nơi và cho phép bạn xem trước các bản mẫu giải pháp 0đ trước khi bắt đầu.'
      }
    ]
  }
];

module.exports = { batch6Articles };
