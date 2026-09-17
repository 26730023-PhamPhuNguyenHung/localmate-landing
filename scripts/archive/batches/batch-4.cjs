/**
 * scripts/batches/batch-4.cjs
 * Dữ liệu bài viết được viết lại chất lượng cao cho Batch 4 (Bài 16 - 20)
 * Cụm 3 & Cụm 4: Thực Thể Số (Entity) & Khởi Chạy Search Ads
 */

const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('../content-builder.cjs');

const batch4Articles = [
  // ==========================================
  // BÀI 16 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 16,
    slug: 'entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho',
    title: 'Entity SEO là gì? Doanh nghiệp nhỏ có cần bỏ tiền mua các gói Entity không?',
    category_slug: 'local-seo',
    focus_keyword: 'entity seo cho doanh nghiệp nhỏ',
    search_intent: 'Reality check / Commercial investigation - Giải ảo dịch vụ',
    target_customer: 'Chủ cơ sở được chào mời các gói "Xây dựng Entity 300 profile mạng xã hội giá 3 - 5 triệu"',
    primary_question: 'Entity SEO thực chất là gì và một tiệm kinh doanh địa phương có cần chi tiền mua các gói tạo hàng trăm tài khoản mạng xã hội ảo không?',
    unique_angle: 'Bóc trần sự thật về các gói Entity 300 backlink rác từ nước ngoài. Doanh nghiệp nhỏ chỉ cần làm đúng 3 việc: Đồng nhất thông tin pháp lý trên các cổng chính thống của Việt Nam, khai báo mã Schema địa phương và giữ thông tin NAP nhất quán 100%.',
    pillar_id: 13,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **Entity (Thực thể số)** là cách công cụ tìm kiếm Google nhận diện doanh nghiệp của bạn như một thực thể có thật ngoài đời (có tên tiệm, người đại diện, số điện thoại, mã số thuế và địa chỉ cụ thể), thay vì chỉ nhìn nhận bạn qua các từ khóa vô hồn. Tuy nhiên, **doanh nghiệp nhỏ TUYỆT ĐỐI KHÔNG NÊN mua các gói "Entity 300 mạng xã hội"** được rao bán tràn lan với giá vài triệu đồng. 99% các tài khoản đó được tạo bằng tool tự động trên các diễn đàn nước ngoài bỏ hoang (không ai vào xem), hoàn toàn không mang lại giá trị nhận diện tại Việt Nam. Điều bạn cần là sự hiện diện trên 10-15 nền tảng có thật tại Việt Nam như Google Maps, Trang Vàng, Cốc Cốc, Zalo OA và Facebook chính chủ.'
      },
      {
        type: 'h2',
        text: 'Bảng đối chiếu: Entity Thực Chiến vs Gói Entity Ảo'
      },
      {
        type: 'table',
        headers: ['Tiêu chí so sánh', 'Gói Entity Ảo (Agency trôi nổi chào bán)', 'Entity Thực Chiến Địa Phương (LocalMate)'],
        rows: [
          ['Bản chất triển khai', 'Dùng phần mềm tự động tạo 200 - 300 tài khoản rác trên các web nước ngoài', 'Đăng ký và xác thực thủ công trên 15 danh bạ và bản đồ lớn tại Việt Nam'],
          ['Người xem thật', 'Không có ai truy cập (0 lượt xem)', 'Hàng ngàn người dùng thật tìm kiếm trên Trang Vàng, Cốc Cốc Map, Google'],
          ['Rủi ro với website', 'Dễ bị thuật toán Penguin của Google phạt vì spam link rác hàng loạt', 'An toàn tuyệt đối, gia tăng độ tin cậy (E-E-A-T) cho thương hiệu'],
          ['Chi phí thực hiện', 'Thu phí định kỳ 3 - 7 triệu đồng vô bổ', 'Tích hợp sẵn trong quy trình thiết lập nền tảng số tinh gọn']
        ]
      },
      {
        type: 'h2',
        text: '3 Việc cốt lõi để xây dựng Thực Thể Số vững chắc cho tiệm nhỏ'
      },
      {
        type: 'list',
        items: [
          '**Việc 1 - Chuẩn hóa bộ dữ liệu NAP:** Đảm bảo Tên cơ sở, Địa chỉ số nhà và Số điện thoại giống hệt nhau từng dấu chấm, dấu phẩy trên Website, Google Maps, Facebook Fanpage và Zalo Doanh Nghiệp.',
          '**Việc 2 - Cài đặt mã Schema LocalBusiness trên website:** Nhúng đoạn mã vi dữ liệu (JSON-LD) vào website để báo cho "bot" của Google biết chính xác tọa độ GPS, giờ mở cửa và phạm vi phục vụ của bạn.',
          '**Việc 3 - Đăng ký trên các cổng thông tin chính thống:** Đưa thông tin cơ sở lên Cổng thông tin doanh nghiệp quốc gia (nếu có công ty) và các trang danh bạ uy tín theo bài hướng dẫn [Citation trong Local SEO](/kien-thuc/citation-trong-local-seo-la-gi).'
        ]
      },
      {
        type: 'pov',
        text: '**Góc nhìn LocalMate:** Đừng để các thuật ngữ công nghệ đao to búa lớn làm bạn tốn tiền vô ích. Sự uy tín của một hộ kinh doanh không đến từ 300 đường link mạng xã hội ở Nga hay Mỹ, mà đến từ việc khách hàng tại địa phương tìm thấy thông tin chính xác và gọi được người thật phục vụ.'
      },
      {
        type: 'p',
        text: 'Để tự mình kiểm tra toàn bộ các yếu tố kỹ thuật này, hãy tham khảo [Checklist Local SEO 2026 cho doanh nghiệp địa phương](/kien-thuc/checklist-local-seo-cho-doanh-nghiep-dia-phuong).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi chuẩn hóa toàn bộ thực thể số của bạn một cách minh bạch, an toàn tại [Giải Pháp Được Tìm Thấy Trên Mạng](/giai-phap/duoc-tim-thay).'
      }
    ]
  },

  // ==========================================
  // BÀI 17 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 17,
    slug: 'citation-trong-local-seo-la-gi',
    title: 'Citation trong Local SEO là gì và cách xây dựng chuẩn xác tại Việt Nam',
    category_slug: 'local-seo',
    focus_keyword: 'citation trong local seo là gì',
    search_intent: 'Guide / Implementation - Hướng dẫn thực hành',
    target_customer: 'Chủ tiệm muốn tự xây dựng mạng lưới danh bạ để củng cố thứ hạng Maps và Web',
    primary_question: 'Citation là gì, tại sao sự trùng khớp thông tin NAP lại quyết định thứ hạng tìm kiếm và danh sách các trang danh bạ uy tín nhất tại Việt Nam là gì?',
    unique_angle: 'Cung cấp danh bạ 15 nền tảng trích dẫn thực tế có lượng người dùng lớn tại Việt Nam (Trang Vàng, Cốc Cốc Map, Diadiem, Foody...) và quy chuẩn viết thông tin NAP không sai lệch một ký tự.',
    pillar_id: 13,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** **Citation (Trích dẫn doanh nghiệp)** trong Local SEO là bất kỳ nơi nào trên mạng internet xuất hiện bộ 3 thông tin cốt lõi của bạn: **Tên cơ sở (Name) - Địa chỉ (Address) - Số điện thoại (Phone)**, viết tắt là **NAP**. Google đối soát thông tin NAP của bạn trên khắp các trang danh bạ trực tuyến để xác nhận bạn có phải là một cơ sở kinh doanh hợp pháp và đáng tin cậy hay không. Nếu tiệm của bạn có mặt đồng nhất trên 15 trang danh bạ lớn tại Việt Nam, Google sẽ chấm điểm uy tín cao hơn nhiều so với một tiệm chỉ có mỗi một trang web đơn độc.'
      },
      {
        type: 'h2',
        text: 'Tầm quan trọng sống còn của nguyên tắc "Đồng Nhất NAP 100%"'
      },
      {
        type: 'p',
        text: 'Sai lầm phổ biến nhất của các chủ tiệm là viết địa chỉ và tên tiệm mỗi nơi một kiểu:'
      },
      {
        type: 'table',
        headers: ['Kênh hiển thị', 'Cách viết SAI (Không đồng nhất)', 'Cách viết ĐÚNG CHUẨN DUY NHẤT'],
        rows: [
          ['Trên Google Maps', 'Gara Sửa Xe Minh Phát - 123 Lê Trọng Tấn, P. Tây Thạnh, Tân Phú', 'Gara Ô Tô Minh Phát - 123 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP.HCM'],
          ['Trên Website', 'Xưởng Minh Phát - 123 Lê Trọng Tấn, Tân Phú', 'Gara Ô Tô Minh Phát - 123 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP.HCM'],
          ['Trên Facebook', 'Cứu Hộ Ô Tô Minh Phát - Số 123 đường Lê Trọng Tấn', 'Gara Ô Tô Minh Phát - 123 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP.HCM'],
          ['Hậu quả với Google', 'Google hiểu lầm đây là 3 cơ sở khác nhau -> Không tích lũy điểm uy tín', 'Google hiểu đây là 1 thực thể vững mạnh duy nhất -> Đẩy lên Top 3']
        ]
      },
      {
        type: 'h2',
        text: 'Danh sách 10 trang danh bạ và bản đồ uy tín nhất tại Việt Nam'
      },
      {
        type: 'list',
        items: [
          '1. **Google Business Profile / Google Maps:** Mặt tiền số quan trọng số 1.',
          '2. **Cốc Cốc Map (Bản đồ Cốc Cốc):** Có lượng người dùng tìm kiếm tại Việt Nam rất lớn trên trình duyệt máy tính.',
          '3. **Trang Vàng Doanh Nghiệp Việt Nam (yp.vn / trangvangvietnam.com):** Cổng dữ liệu được Google tin cậy bậc nhất.',
          '4. **Facebook Fanpage chính chủ:** Cần khai báo đầy đủ vị trí check-in và giờ mở cửa.',
          '5. **Zalo Official Account (Zalo OA):** Nền tảng liên lạc phổ biến của người dân địa phương.',
          '6. **Cổng thông tin doanh nghiệp Thongtindoanhnghiep.co / Masothue:** Tự động đối soát mã số thuế.',
          '7. **Foody / ShopeeFood / Grab:** Dành riêng cho quán ăn uống, cafe, tiệm bánh.',
          '8. **Toplist / Riviu:** Nền tảng đánh giá trải nghiệm địa phương.',
          '9. **Mạng xã hội việc làm Vietnamworks / Timviecnhanh:** Khai báo hồ sơ tuyển dụng thực tế.',
          '10. **Danh bạ ngành nghề chuyên biệt:** Các diễn đàn ô tô (Otosaigon), hội thợ xây dựng (Kientruc).'
        ]
      },
      {
        type: 'h2',
        text: 'Quy trình 3 bước tự đăng ký Citation miễn phí'
      },
      {
        type: 'list',
        items: [
          '**Bước 1:** Soạn thảo 1 file văn bản mẫu chứa đúng tên tiệm, số điện thoại, địa chỉ chuẩn và đoạn mô tả 100 từ về dịch vụ.',
          '**Bước 2:** Lần lượt truy cập các trang danh bạ miễn phí ở trên, tạo tài khoản và copy-paste chính xác đoạn văn bản mẫu.',
          '**Bước 3:** Lưu lại danh sách các đường link đăng ký vào bảng tính để kiểm tra và cập nhật khi có thay đổi số điện thoại.'
        ]
      },
      {
        type: 'p',
        text: 'Nắm vững kỹ thuật Citation là một phần quan trọng trong [Checklist Local SEO 2026 cho doanh nghiệp địa phương](/kien-thuc/checklist-local-seo-cho-doanh-nghiep-dia-phuong).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi cung cấp gói đồng bộ dữ liệu NAP đa kênh tại [Dịch Vụ Local SEO Tinh Gọn](/giai-phap/duoc-tim-thay), đảm bảo thông tin của bạn xuất hiện chuẩn xác và bền vững.'
      }
    ]
  },

  // ==========================================
  // BÀI 18 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 18,
    slug: 'checklist-local-seo-cho-doanh-nghiep-dia-phuong',
    title: 'Checklist Local SEO 2026: 20 việc chủ tiệm tự làm để lên top tìm kiếm',
    category_slug: 'local-seo',
    focus_keyword: 'checklist local seo',
    search_intent: 'Actionable Checklist - Hướng dẫn tự kiểm tra',
    target_customer: 'Chủ cơ sở muốn tự tay rà soát và tối ưu hiện diện số của tiệm mà không cần thuê ngoài',
    primary_question: 'Những đầu mục công việc cụ thể nào chủ tiệm có thể tự làm trong 30 phút mỗi tuần để duy trì thứ hạng Google Maps và Website tại địa phương?',
    unique_angle: 'Bảng kiểm toán 20 tiêu chí phân loại theo thời gian thực hiện: Việc làm 1 lần duy nhất, việc làm hàng tuần và việc làm hàng tháng. Nói không với các thủ thuật phức tạp đòi hỏi biết lập trình.',
    pillar_id: 13,
    related_service: '/giai-phap/duoc-tim-thay',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Làm Local SEO cho tiệm địa phương không cần bạn phải là một kỹ sư tin học giỏi. Hơn 80% kết quả đến từ **sự kiên trì hoàn thành 20 đầu việc thực tế** được chia làm 3 nhóm: (1) **Nhóm Thiết lập 1 lần**: Xác minh Maps chính chủ, chuẩn hóa thông tin NAP, nhúng bản đồ lên website, khai báo danh mục chính xác; (2) **Nhóm Duy trì hàng tuần**: Chụp 3-5 ảnh đồ nghề/công trình thật tải lên Maps, trả lời 100% đánh giá của khách; (3) **Nhóm Rà soát hàng tháng**: Kiểm tra báo cáo cuộc gọi, cập nhật giờ làm việc ngày lễ và rà soát số điện thoại hotline.'
      },
      {
        type: 'h2',
        text: 'Bảng kiểm toán 20 tiêu chuẩn vàng Local SEO 2026'
      },
      {
        type: 'table',
        headers: ['Giai đoạn', 'Đầu mục công việc kiểm tra', 'Tiêu chuẩn hoàn thành'],
        rows: [
          ['Thiết lập 1 lần', '1. Xác minh Google Business Profile chính chủ', 'Đã có tích xanh xác minh bằng video thực địa'],
          ['Thiết lập 1 lần', '2. Tên tiệm đúng biển hiệu 100%', 'Tuyệt đối không nhồi từ khóa lậu vào tên tiệm'],
          ['Thiết lập 1 lần', '3. Chọn danh mục chính chuẩn xác', 'Đúng ngành nghề kinh doanh mũi nhọn'],
          ['Thiết lập 1 lần', '4. Đồng nhất thông tin NAP trên website', 'Địa chỉ trên web khớp từng chữ với trên Google Maps'],
          ['Thiết lập 1 lần', '5. Nút bấm gọi điện thoại nổi bật trên web', 'Ấn tay vào số là tự động mở bàn phím cuộc gọi'],
          ['Thiết lập 1 lần', '6. Tốc độ web di động dưới 2 giây', 'Tải mượt mà trên mạng 4G bình dân'],
          ['Thiết lập 1 lần', '7. Đăng ký trên 10 trang danh bạ lớn', 'Có mặt trên Trang Vàng, Cốc Cốc, Masothue...'],
          ['Hàng tuần', '8. Đăng 3 ảnh thực tế xưởng/tiệm mới', 'Ảnh thợ thật làm việc thật, không lấy ảnh mạng'],
          ['Hàng tuần', '9. Trả lời toàn bộ đánh giá của khách', 'Cảm ơn review 5 sao và giải thích nhã nhặn review 1 sao'],
          ['Hàng tuần', '10. Xin 2-3 đánh giá từ khách quen tại quầy', 'Quét mã QR mica để bàn ngay khi thanh toán'],
          ['Hàng tuần', '11. Đăng 1 bài cập nhật (Update post) trên Maps', 'Thông báo dịch vụ hoặc mẹo vặt hữu ích'],
          ['Hàng tháng', '12. Kiểm tra thông số cuộc gọi trong Dashboard', 'Xem số lượng cuộc gọi tăng hay giảm so với tháng trước'],
          ['Hàng tháng', '13. Tìm kiếm tên tiệm trên chế độ ẩn danh', 'Kiểm tra xem tiệm có còn đứng trong Top 3 bản đồ không'],
          ['Hàng tháng', '14. Cập nhật bảng giá dịch vụ mới', 'Nếu có thay đổi giá phụ tùng/vật liệu cần sửa ngay'],
          ['Hàng tháng', '15. Rà soát thông tin ngày nghỉ lễ', 'Thông báo giờ mở cửa Tết/Lễ để khách không đến hớ']
        ]
      },
      {
        type: 'h2',
        text: '3 Thói quen đơn giản giúp tiệm luôn dẫn đầu khu vực'
      },
      {
        type: 'list',
        items: [
          '**Thói quen 1 - Chụp ảnh trước khi giao sản phẩm:** Thợ làm xong bộ cửa nhôm hay sửa xong chiếc xe, bỏ ra 30 giây chụp 1 tấm ảnh bằng điện thoại. Cuối tuần gom lại tải lên Google Maps.',
          '**Thói quen 2 - Biến khách hài lòng thành đại sứ:** Khi khách khen "bác thợ sửa êm quá", hãy cười tươi và đưa ngay mã QR xin một đánh giá 5 sao.',
          '**Thói quen 3 - Trả lời đánh giá chân thành:** Trả lời bằng giọng điệu người thật, xưng hô anh/chị, không dùng các câu trả lời tự động vô cảm.'
        ]
      },
      {
        type: 'p',
        text: 'Khi đã làm tốt Local SEO nhưng muốn bứt phá doanh số tức thì trong những mùa cao điểm, bạn có thể cân nhắc chạy thêm quảng cáo theo bài viết [Google Ads cho doanh nghiệp nhỏ bắt đầu từ đâu](/kien-thuc/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Bạn không có thời gian tự làm mỗi tuần? Gói [Đồng Hành Duy Trì Hiện Diện Số](/giai-phap/dong-hanh-duy-tri) của LocalMate sẽ cử kỹ thuật viên chăm sóc hồ sơ định kỳ cho bạn.'
      }
    ]
  },

  // ==========================================
  // BÀI 19 - PILLAR ARTICLE
  // ==========================================
  {
    id: 19,
    slug: 'google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau',
    title: 'Google Ads cho doanh nghiệp nhỏ: Bắt đầu từ đâu để không bị đốt tiền oan?',
    category_slug: 'google-ads',
    focus_keyword: 'google ads cho doanh nghiệp nhỏ',
    search_intent: 'TOFU / Pillar - Tổng quan khởi động',
    target_customer: 'Chủ cơ sở chuẩn bị bỏ tiền chạy quảng cáo tìm khách nhưng chưa hiểu cơ chế',
    primary_question: 'Doanh nghiệp dịch vụ nhỏ ít vốn có nên chạy quảng cáo Google Ads không, và cần chuẩn bị những gì để chạy ra cuộc gọi thực tế?',
    unique_angle: 'Google Ads không phải là canh bạc may rủi. Với tiệm địa phương, chỉ chạy duy nhất định dạng Google Search Ads (Tìm kiếm chủ động) vào các cụm từ khóa chính xác quanh bán kính 10km; cấm tuyệt đối chạy mạng hiển thị banner tràn lan gây lãng phí ngân sách.',
    pillar_id: 19,
    related_service: '/giai-phap/thu-hut-khach-hang',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Doanh nghiệp nhỏ hoàn toàn NÊN chạy Google Ads nếu bạn cung cấp các dịch vụ có nhu cầu cấp bách (sửa nhà, cứu hộ xe, nha khoa, thông tắc, sửa điều hòa). Khác với Facebook là quảng cáo ép người lướt mạng xem, Google Search Ads chỉ xuất hiện đúng lúc khách hàng đang có nhu cầu và chủ động gõ tìm kiếm trên điện thoại. Để không bị "đốt tiền vô ích", bạn cần nắm vững **3 nguyên tắc thép**: (1) Chỉ chạy chiến dịch Tìm kiếm (Search), tắt sạch mạng hiển thị (Display Network); (2) Cài đặt bán kính định vị chuẩn xác trong phạm vi thợ của bạn phục vụ được (dưới 15km); (3) Dùng từ khóa đối sánh khớp cụm từ hoặc chính xác, loại bỏ ngay các từ khóa tìm kiếm rác.'
      },
      {
        type: 'h2',
        text: 'Khung kiểm tra 4 điều kiện sẵn sàng trước khi nạp tiền vào Google Ads'
      },
      {
        type: 'table',
        headers: ['Điều kiện kiểm tra', 'Yêu cầu đạt chuẩn', 'Nếu chưa đạt thì hậu quả là gì?'],
        rows: [
          ['1. Trang đích (Landing page)', 'Tải dưới 2 giây trên 4G, có bảng giá và nút gọi nổi bật', 'Khách bấm vào web nhưng thoát ngay -> Tốn tiền click vô ích'],
          ['2. Người nghe máy trực hotline', 'Luôn có người nghe điện thoại trong vòng 3 tiếng chuông', 'Khách gọi nhỡ 1 cuộc là họ bấm sang tiệm khác ngay lập tức'],
          ['3. Biên lợi nhuận đơn hàng', 'Giá trị lãi một đơn hàng tối thiểu từ 300.000đ trở lên', 'Nếu dịch vụ lãi quá mỏng (dưới 100k) sẽ không đủ bù tiền click'],
          ['4. Ngân sách thử nghiệm', 'Sẵn sàng bỏ ra 1.500.000đ - 3.000.000đ để đo lường trong tháng đầu', 'Nạp vài chục ngàn chạy ngắt quãng sẽ không đủ dữ liệu tối ưu']
        ]
      },
      {
        type: 'h2',
        text: 'Sự thật agency ít khi nói: Bẫy "Đối sánh rộng" (Broad Match)'
      },
      {
        type: 'p',
        text: 'Khi bạn mới tạo tài khoản, giao diện của Google Ads sẽ liên tục gợi ý bạn dùng "Đối sánh rộng" để tiếp cận nhiều khách hàng hơn.'
      },
      {
        type: 'pov',
        text: '**Bẫy đốt tiền:** Nếu bạn kinh doanh dịch vụ "sửa máy lạnh tại nhà" và để đối sánh rộng, quảng cáo của bạn sẽ hiển thị cho cả những người tìm kiếm: "tải sách hướng dẫn tự sửa máy lạnh", "hình ảnh máy lạnh đẹp", hay "học nghề sửa máy lạnh ở đâu". Bạn phải trả tiền cho những lượt click vô bổ đó mà không bao giờ có khách thuê dịch vụ!'
      },
      {
        type: 'h2',
        text: 'Quy trình khởi chạy chiến dịch Google Ads đầu tiên cho tiệm nhỏ'
      },
      {
        type: 'list',
        items: [
          '**Bước 1:** Chuẩn bị 1 Landing Page tinh gọn phục vụ chuyển đổi (tham khảo bài viết [Thiết kế Landing page chạy Google Ads](/kien-thuc/landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao)).',
          '**Bước 2:** Lựa chọn danh sách 10-15 từ khóa mua hàng cụ thể (ví dụ: "thợ sửa khóa quận...", "giá trám răng...").',
          '**Bước 3:** Cài đặt giá thầu tối đa và ngân sách hàng ngày ở mức khiêm tốn (xem bài viết [Chạy Google Ads bao nhiêu tiền một ngày](/kien-thuc/chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly)).',
          '**Bước 4:** Bật tính năng theo dõi lượt bấm gọi điện thoại để đo lường chính xác hiệu quả.'
        ]
      },
      {
        type: 'p',
        text: 'Để hiểu sâu cơ chế tính tiền của từng lượt nhấp chuột, mời bạn đọc tiếp bài phân tích kỹ thuật [Google Search Ads hoạt động như thế nào](/kien-thuc/google-search-ads-hoat-dong-nhu-the-nao).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi cung cấp dịch vụ [Quản Trị Quảng Cáo Google Ads Thực Chiến](/giai-phap/thu-hut-khach-hang), cam kết tối ưu từng đồng ngân sách nhắm đúng khách quanh khu vực và minh bạch 100% tài khoản.'
      }
    ]
  },

  // ==========================================
  // BÀI 20 - SUPPORTING ARTICLE
  // ==========================================
  {
    id: 20,
    slug: 'google-search-ads-hoat-dong-nhu-the-nao',
    title: 'Google Search Ads hoạt động như thế nào? Cơ chế đấu giá và cách giảm tiền click',
    category_slug: 'google-ads',
    focus_keyword: 'google search ads hoạt động như thế nào',
    search_intent: 'Technical / Educational - Giải phẫu cơ chế đấu thầu',
    target_customer: 'Chủ cơ sở đang tự chạy hoặc thuê chạy Ads nhưng thấy giá mỗi lượt click quá đắt',
    primary_question: 'Google quyết định vị trí hiển thị quảng cáo như thế nào và làm sao để tiệm nhỏ trả ít tiền hơn đối thủ mà vẫn đứng ở vị trí đầu?',
    unique_angle: 'Không phải cứ ai nhiều tiền hơn là thắng thầu. Công thức Ad Rank = Giá thầu x Điểm chất lượng (Quality Score). Tối ưu trang đích tải nhanh và viết mẫu quảng cáo bám sát từ khóa giúp bạn giảm tới 40% chi phí mỗi cú click.',
    pillar_id: 19,
    related_service: '/giai-phap/thu-hut-khach-hang',
    blocks: [
      {
        type: 'tldr',
        text: '**Trả lời nhanh (Answer First):** Mỗi khi có một người dùng gõ từ khóa tìm kiếm trên Google, một cuộc đấu giá chớp nhoáng diễn ra trong vòng 0.1 giây để quyết định quảng cáo nào được hiển thị ở 4 vị trí trên cùng. Vị trí quảng cáo (Ad Rank) được tính theo công thức cốt lõi: **Xếp hạng = Giá thầu tối đa (Max CPC) x Điểm chất lượng (Quality Score)**. Điều này đồng nghĩa: Một đối thủ giàu tiền sẵn sàng trả 20.000đ/click nhưng website tải chậm và nội dung sơ sài (Điểm chất lượng 3/10) sẽ có thứ hạng THẤP HƠN tiệm của bạn chỉ trả 10.000đ/click nhưng website tải tức thì và thông tin cực kỳ chính xác (Điểm chất lượng 9/10). Tiệm nhỏ hoàn toàn có thể thắng lớn nhờ tối ưu kỹ thuật chuẩn chỉ.'
      },
      {
        type: 'h2',
        text: '3 Thành phần cấu tạo nên Điểm Chất Lượng (Quality Score)'
      },
      {
        type: 'table',
        headers: ['Thành phần', 'Trọng số đánh giá của Google', 'Cách tối ưu thực tế cho chủ tiệm'],
        rows: [
          ['1. Tỷ lệ nhấp dự kiến (Expected CTR)', 'Khoảng cách thu hút của mẫu quảng cáo', 'Viết tiêu đề đánh trúng nỗi đau: Báo giá minh bạch, Có mặt sau 15 phút'],
          ['2. Mức độ liên quan của quảng cáo', 'Sự trùng khớp giữa từ khóa và văn bản quảng cáo', 'Từ khóa người dùng gõ phải xuất hiện ngay trong dòng tiêu đề 1'],
          ['3. Trải nghiệm trang đích (Landing page)', 'Tốc độ tải, độ thân thiện di động, nội dung minh bạch', 'Trang đích tải dưới 1.5s trên 4G, có số điện thoại bấm gọi ngay']
        ]
      },
      {
        type: 'h2',
        text: '3 Bí quyết giảm 40% chi phí click cho doanh nghiệp nhỏ'
      },
      {
        type: 'list',
        items: [
          '**Bí quyết 1 - Sử dụng Đối sánh Cụm từ (Phrase Match) kèm ngoặc kép:** Ví dụ đặt từ khóa `"sửa khóa bình thạnh"`. Quảng cáo chỉ kích hoạt khi người dùng gõ cụm từ này kèm các từ bổ trợ, ngăn chặn tìm kiếm rác.',
          '**Bí quyết 2 - Thiết lập Danh sách từ khóa phủ định (Negative Keywords) mỗi tuần:** Loại bỏ ngay các từ như "miễn phí", "hướng dẫn tự làm", "tuyển dụng", "thanh lý".',
          '**Bí quyết 3 - Tối ưu tốc độ tải trang di động:** Tốc độ trang web càng nhanh, điểm trải nghiệm trang đích càng cao, Google sẽ tự động giảm giá tiền thực tế bạn phải trả cho mỗi lượt nhấp.'
        ]
      },
      {
        type: 'pov',
        text: '**Góc nhìn LocalMate:** Cuộc chiến trên Google Ads không phải là cuộc đua xem ai đốt nhiều tiền hơn, mà là cuộc đua xem ai thấu hiểu khách hàng quanh khu vực hơn và ai có trang đón tiếp khách hàng nhanh nhẹn hơn.'
      },
      {
        type: 'p',
        text: 'Để tính toán mức tiền cần nạp hàng ngày phù hợp với túi tiền của bạn, hãy xem bài viết [Chạy Google Ads bao nhiêu tiền một ngày là hợp lý](/kien-thuc/chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly).'
      },
      {
        type: 'pov',
        text: '**Đồng hành cùng LocalMate:** Chúng tôi tối ưu kỹ thuật trang đích đạt Điểm Chất Lượng 9-10/10 tại [Dịch Vụ Thiết Lập Google Ads Tinh Gọn](/giai-phap/thu-hut-khach-hang), giúp bạn tiết kiệm tối đa ngân sách quảng cáo.'
      }
    ]
  }
];

module.exports = { batch4Articles };
