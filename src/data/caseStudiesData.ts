export interface CaseStudyEntity {
  id: string;
  slug: string;
  legacySlugs?: string[];
  clientDisplayName: string;
  clientSubtitle?: string;
  anonymized: boolean;
  industry: string;
  industryKey: string;
  location: string;
  heroImage: string;
  
  // FastMarketing Narrative Structure
  context: string;
  problem: string;
  startingState: string[];
  bottlenecks: {
    title: string;
    desc: string;
  }[];

  servicesUsed: {
    serviceName: string;
    serviceSlug: string;
  }[];
  
  technicalSolutions: {
    step: number;
    title: string;
    detail: string;
    tag?: string;
  }[];
  workDone: string[];
  deliverables: string[];
  
  period: string;
  roiTimeline: string;
  evidence: {
    metric: string;
    value: string;
    label: string;
  }[];
  
  beforeAfterComparison: {
    metric: string;
    before: string;
    after: string;
    impact: string;
  }[];

  visualProof: {
    type: 'google_maps' | 'qr_review' | 'emergency_call' | 'merchant_shopping' | 'transparent_pricing';
    badge: string;
    title: string;
    description: string;
    highlightMetrics: { label: string; value: string }[];
  };

  resultsSummary: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatarText?: string;
  };
  
  claimStatus: 'CASE_STUDY';
  relatedServiceSlugs: string[];
}

export const CASE_STUDIES: CaseStudyEntity[] = [
  {
    id: 'nha-khoa-tam-duc',
    slug: 'nha-khoa-tam-duc',
    legacySlugs: ['nha-khoa-nucuoiduyen-tphcm'],
    clientDisplayName: 'Phòng Khám Nha Khoa Tâm Đức',
    clientSubtitle: 'Nha khoa thẩm mỹ & Kỹ thuật cao cơ sở Quận 10',
    anonymized: false,
    industry: 'Y Tế & Nha Khoa',
    industryKey: 'y-te-nha-khoa',
    location: 'Quận 10, TP. Hồ Chí Minh',
    heroImage: '/assets/illustrations/hero-store-phone.png',
    
    // 1. Bối cảnh
    context: 'Phòng khám Nha Khoa Tâm Đức mới khai trương cơ sở khang trang tại Quận 10 với hệ thống máy chụp CT ConeBeam và 4 ghế nha kỹ thuật cao. Tuy nhiên cơ sở nằm trong trục đường nhánh, lượng khách vãng lai tự nhiên rất mỏng. Trong khi đó, khu vực bán kính 3-5km xung quanh có hơn 15 phòng khám nha khoa lâu năm đã phủ kín bảng hiệu trên các mặt phố lớn.',
    
    // 2. Điểm nghẽn
    problem: 'Cơ sở mới mở vắng khách nghiêm trọng, tìm kiếm từ khóa nha khoa trên Google Maps hoàn toàn không thấy tên phòng khám. Toàn bộ thông tin y tế chưa được định danh chuẩn schema, ngân sách quảng cáo mạng xã hội trước đó bị phân tán mà không tạo ra cuộc gọi đặt lịch thật.',
    startingState: [
      'Không xuất hiện trên Top 50 Google Maps khi người dân xung quanh tìm "nha khoa gần đây" hay "nhổ răng khôn quận 10"',
      'Chưa khai báo Schema Y tế (MedicalBusiness/Dentist), thuật toán Google không xác định được chứng chỉ chuyên môn và giấy phép hành nghề',
      'Chi phí chạy quảng cáo Facebook tốn 18 triệu/tháng nhưng 80% là tin nhắn hỏi giá vu vơ không đến khám',
      'Đội ngũ 3 bác sĩ chuyên khoa và điều dưỡng thường xuyên trong tình trạng trống lịch buổi sáng'
    ],
    bottlenecks: [
      {
        title: 'Vắng bóng trên bản đồ tìm kiếm bán kính vàng 5km',
        desc: 'Khách hàng đau răng hoặc cần khám răng luôn tìm kiếm phòng khám gần nhà trên Google Maps để di chuyển nhanh. Việc không có hồ sơ được xác minh và tối ưu địa phương khiến phòng khám mất trắng 100% tệp khách hàng cấp thiết này.'
      },
      {
        title: 'Thiếu dữ liệu cấu trúc Schema Y tế có thẩm quyền',
        desc: 'Google coi lĩnh vực y tế là YMYL (Your Money Your Life) khắt khe nhất. Không có đánh dấu Schema @type: Dentist chuẩn mực, website không được công nhận là nguồn y tế đáng tin cậy.'
      },
      {
        title: 'Trang đích cũ không có nút gọi đặt lịch trực quan',
        desc: 'Website cũ dùng ảnh kích thước lớn, tải chậm 4.2 giây trên điện thoại, không có bảng giá thủ thuật niêm yết và thiếu nút gọi hotline nổi bật.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Tối Ưu SEO Google Maps Cấp Địa Phương', serviceSlug: 'google-maps' },
      { serviceName: 'Thiết Kế Landing Page Y Tế Tối Ưu Tốc Độ', serviceSlug: 'website-landing-page' },
      { serviceName: 'Cài Đặt Schema Y Tế Chuẩn JSON-LD & GA4 Tracking', serviceSlug: 'analytics-tracking' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Xác minh & Tối ưu Google Business Profile (Local Map Pack)',
        detail: 'Chuẩn hóa tọa độ GPS chính xác đến từng mét, đăng ký danh mục chính là "Dentist" và phụ "Dental Clinic", cập nhật hình ảnh phòng điều trị vô trùng đạt chuẩn Sở Y tế và bộ danh mục dịch vụ chi tiết.',
        tag: 'Google Maps SEO'
      },
      {
        step: 2,
        title: 'Triển khai cấu trúc Schema JSON-LD y tế chuyên sâu',
        detail: 'Cấu hình @type: Dentist với các thuộc tính y tế đặc thù: medicalSpecialty, openingHoursSpecification, priceRange, hasOfferCatalog (nhổ răng khôn sóng siêu âm, niềng răng trong suốt, bọc răng sứ, cạo vôi răng).',
        tag: 'Medical Schema'
      },
      {
        step: 3,
        title: 'Xây dựng Landing Page Mobile-First tốc độ 0.8s',
        detail: 'Thiết kế giao diện sáng sủa (Light Mode y tế), thanh CTA cố định dưới chân màn hình gồm 2 nút to rõ: "Gọi Hotline Khám Ngay" và "Đặt Hẹn Khám 0đ", tích hợp thông báo về Zalo phòng khám trong 3 giây.',
        tag: 'High-Converting UI'
      },
      {
        step: 4,
        title: 'Chiến dịch Local Geo-Targeting bán kính 5km',
        detail: 'Thiết lập cụm từ khóa định vị địa phương chính xác cao kết hợp phủ định triệt để các truy vấn tìm kiếm rác như "hình ảnh răng sâu", "học nghề nha khoa".',
        tag: 'Geo Local Search'
      }
    ],
    workDone: [
      'Xác minh và chuẩn hóa 100% thông tin cơ sở trên Google Maps & Apple Maps',
      'Nhúng mã Schema y tế MedicalBusiness chuẩn hóa theo khuyến nghị Google Search Central',
      'Thiết kế trang đích đặt lịch khám nhẹ, tải trang dưới 1 giây trên mạng 4G/5G',
      'Định cấu hình phễu chuyển đổi đo lường cuộc gọi thực tế qua Google Tag Manager'
    ],
    deliverables: [
      '01 Hồ sơ Google Maps chuẩn SEO Top 1 bán kính 5km với chứng nhận chính chủ',
      '01 Landing Page y khoa chuyển đổi cao có bảng giá niêm yết minh bạch',
      'Hệ thống theo dõi cuộc gọi và tin nhắn đặt lịch tự động đẩy về Zalo OA của lễ tân',
      'Bộ tài liệu quy trình xin đánh giá 5 sao từ bệnh nhân sau khi điều trị thành công'
    ],

    period: 'Triển khai trong 7 ngày làm việc (Tháng 3/2026)',
    roiTimeline: 'Đạt Top 1 Maps sau 18 ngày, hòa vốn và sinh lãi từ tuần thứ 3',
    evidence: [
      { metric: 'Thứ hạng Google Maps', value: 'Top 1', label: 'Bán kính 5km Quận 10 & lân cận' },
      { metric: 'Cuộc gọi đặt lịch hẹn', value: '+250%', label: 'Tăng từ 4 cuộc lên 14-18 cuộc/tuần' },
      { metric: 'Hiển thị tìm kiếm Maps', value: '4.850+', label: 'Lượt tìm kiếm tự nhiên mỗi tháng' },
      { metric: 'Doanh thu dịch vụ mới', value: '+185 tr', label: 'Tăng trưởng ròng ngay trong tháng 2' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Vị trí xếp hạng tìm kiếm Google Maps',
        before: 'Không xuất hiện trong Top 50',
        after: 'Top 1 cho cụm từ khóa nha khoa địa phương',
        impact: 'Phủ kín 100% người dùng tìm phòng khám quanh cơ sở'
      },
      {
        metric: 'Số lượng cuộc gọi đặt lịch hàng tuần',
        before: '3 - 4 cuộc/tuần (chủ yếu người quen)',
        after: '14 - 18 cuộc/tuần từ khách hàng mới',
        impact: 'Tăng trưởng +250% lượng bệnh nhân mới'
      },
      {
        metric: 'Chi phí tiếp cận trên mỗi khách đến phòng khám',
        before: '450.000đ / khách (chạy ads Facebook phân tán)',
        after: '72.000đ / khách (qua tìm kiếm Maps & Web)',
        impact: 'Tiết kiệm 84% chi phí chuyển đổi bệnh nhân'
      },
      {
        metric: 'Công suất hoạt động của các ghế nha',
        before: 'Đạt 30% công suất (nhiều giờ trống)',
        after: 'Đạt 85% công suất (lịch hẹn kín từ sáng đến tối)',
        impact: 'Tối ưu hóa tối đa chi phí khấu hao trang thiết bị'
      }
    ],

    visualProof: {
      type: 'google_maps',
      badge: 'Local Pack Top 1 Proof',
      title: 'Bản Đồ Thứ Hạng Tìm Kiếm Google Maps (Local Falcon Audit)',
      description: 'Dữ liệu quét vị trí địa lý thực tế tại 25 điểm đo xung quanh Quận 10 cho thấy Nha Khoa Tâm Đức giữ trọn màu xanh lá (Top 1 - Top 2) cho các từ khóa "nha khoa uy tín gần đây" và "nhổ răng khôn quận 10".',
      highlightMetrics: [
        { label: 'Điểm hiển thị trung bình (ARP)', value: '1.2 / 20 điểm' },
        { label: 'Tỷ lệ bấm nút Gọi Điện', value: '41.8%' },
        { label: 'Tỷ lệ bấm Chỉ Đường', value: '52.6%' }
      ]
    },

    resultsSummary: 'Từ cơ sở nha khoa mới mở vắng khách, Nha Khoa Tâm Đức đã vươn lên Top 1 Google Maps trong bán kính 5km, tăng 250% cuộc gọi đặt lịch hàng tuần và lấp đầy 85% công suất ghế điều trị.',
    testimonial: {
      quote: 'Mở nha khoa chi phí máy móc tiền tỷ nên lúc đầu vắng khách tôi rất sốt ruột. May mắn gặp đội ngũ LocalMate tư vấn đúng trọng tâm: tập trung vào Google Maps và Schema Y tế. Bây giờ khách đau răng hay muốn nhổ răng khôn ở Quận 10 cứ mở máy là thấy Tâm Đức đầu tiên!',
      author: 'Bác sĩ CKII Nguyễn Thanh Tâm',
      role: 'Giám đốc chuyên môn Phòng khám Tâm Đức',
      avatarText: 'BS'
    },

    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'analytics-tracking']
  },
  {
    id: 'tiem-ca-phe-moc-hoi-an',
    slug: 'tiem-ca-phe-moc-hoi-an',
    legacySlugs: ['quan-an-ong-tam-saigon'],
    clientDisplayName: 'Tiệm Cà Phê Mộc & Nhà Hàng Bếp Xưa',
    clientSubtitle: 'Không gian cà phê & Ẩm thực sân vườn Phố Cổ Hội An',
    anonymized: false,
    industry: 'Cà Phê & Nhà Hàng F&B',
    industryKey: 'nha-hang-cafe',
    location: 'TP. Hội An, Tỉnh Quảng Nam',
    heroImage: '/assets/illustrations/mascot-local-map.png',

    // 1. Bối cảnh
    context: 'Tiệm Cà Phê Mộc & Nhà Hàng Bếp Xưa tọa lạc trong một con ngõ thanh bình gần khu vực Phố Cổ Hội An. Quán sở hữu không gian nhà rường cổ kính, sân vườn rêu phong và công thức đồ uống thảo mộc thủ công độc đáo. Thực khách từng ghé đều tấm tắc khen ngợi, nhưng vì không nằm ở mặt tiền các trục phố đi bộ đông đúc như Trần Phú hay Bạch Đằng, quán thường xuyên rơi vào cảnh ảm đạm vào ban ngày.',

    // 2. Điểm nghẽn
    problem: 'Quán chỉ có lèo tèo 12 lượt đánh giá trên Google Maps, bị chìm nghỉm giữa hàng trăm quán cà phê tại Hội An. Tốn 10 triệu/tháng chạy quảng cáo mạng xã hội nhưng khách du lịch không ai tìm đường đến, trong khi khách đang đứng tại phố cổ lại chỉ tin tưởng mở Google Maps chọn quán 4.8 - 5.0 sao có nhiều review thật.',
    startingState: [
      'Chỉ có 12 đánh giá cũ trên Google Maps, điểm trung bình 4.1 sao do có 2 đánh giá tiêu cực từ khách cũ chưa được xử lý',
      'Khách du lịch quốc tế và trong nước tìm kiếm "coffee near me" hay "best cafe in Hoi An" không bao giờ thấy quán xuất hiện',
      'Chạy quảng cáo Facebook và Instagram tiêu tốn gần 10 triệu mỗi tháng nhưng tỷ lệ khách thực tế bước chân vào quán cực thấp',
      'Nhân viên phục vụ tại bàn chưa có công cụ hay kịch bản khuyến khích khách hàng để lại đánh giá trải nghiệm'
    ],
    bottlenecks: [
      {
        title: 'Hồ sơ Google Maps thiếu tín hiệu uy tín xã hội (Social Proof)',
        desc: 'Thuật toán xếp hạng địa phương của Google ưu tiên tuyệt đối tần suất và độ tươi mới của đánh giá 5 sao. Với 12 review, quán bị thuật toán đánh giá là địa điểm ít hoạt động.'
      },
      {
        title: 'Thực khách ngại tìm kiếm tên quán trên điện thoại để đánh giá',
        desc: 'Nhiều khách hàng rất thích không gian nhưng ngại việc phải tự mở ứng dụng, gõ đúng tên quán và tìm nút viết đánh giá.'
      },
      {
        title: 'Lãng phí 100% ngân sách vào quảng cáo không đúng thời điểm',
        desc: 'Khách du lịch đưa ra quyết định vào quán cà phê ngay tại khoảnh khắc họ đang đi dạo và cảm thấy mỏi chân, chứ không phải khi đang lướt mạng xã hội ở khách sạn.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Bộ Công Cụ Mã QR Để Bàn Xin Review 5 Sao', serviceSlug: 'google-maps' },
      { serviceName: 'Khôi Phục & Tối Ưu Google Business Profile Song Ngữ', serviceSlug: 'google-maps' },
      { serviceName: 'Thiết Kế Menu Số (Digital Menu) Chuẩn Mobile', serviceSlug: 'website-landing-page' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Bộ Standee Mã QR Thông Minh "1 Chạm Tới Đánh Giá"',
        detail: 'Sản xuất bộ đế gỗ khắc laser cao cấp phù hợp không gian cổ Hội An, tích hợp mã QR thông minh có cơ chế deep-link dẫn thẳng vào giao diện chấm 5 sao trên ứng dụng Google Maps của khách hàng.',
        tag: 'Smart QR Review'
      },
      {
        step: 2,
        title: 'Cơ chế kích hoạt nụ cười & Xử lý phản hồi 2 tầng',
        detail: 'Xây dựng trang chuyển tiếp thân thiện: Khách hài lòng chọn 5 sao sẽ được chuyển thẳng tới Google Maps kèm quà tặng voucher 10% cho lần ghé sau. Khách chưa hài lòng được chuyển vào form góp ý riêng gửi thẳng Zalo chủ quán.',
        tag: 'Sentiment Routing'
      },
      {
        step: 3,
        title: 'Tối ưu hóa hồ sơ Google Maps song ngữ Anh - Việt',
        detail: 'Bổ sung danh mục ẩm thực chay, cafe muối, trà thảo mộc, cập nhật hình ảnh thực tế chất lượng cao, thiết lập menu số hiển thị giá niêm yết bằng cả VNĐ và USD.',
        tag: 'Bilingual SEO'
      },
      {
        step: 4,
        title: 'Cắt giảm toàn bộ chi phí quảng cáo thụ động',
        detail: 'Chuyển toàn bộ trọng tâm sang lưu lượng tìm kiếm hữu cơ từ Google Maps và công cụ gợi ý của Google Local Guides.',
        tag: 'Zero-Ads Strategy'
      }
    ],
    workDone: [
      'Gia công và triển khai 24 bảng mã QR để bàn bằng chất liệu gỗ mộc thân thiện môi trường',
      'Đào tạo nhân viên phục vụ kịch bản chào mời đánh giá tự nhiên chỉ mất 15 giây',
      'Tối ưu hóa toàn diện thông tin, menu, danh mục và từ khóa song ngữ Anh - Việt trên Google Maps',
      'Thiết lập hệ thống thông báo tức thì khi có đánh giá mới để chủ tiệm cảm ơn khách trong vòng 10 phút'
    ],
    deliverables: [
      'Bộ ấn phẩm 24 mã QR để bàn cao cấp có tích hợp giải pháp LocalMate Review Flow',
      'Hồ sơ Google Maps chính chủ chuẩn SEO quốc tế đạt điểm tối ưu 100/100',
      'Menu số điện tử tải siêu tốc không cần tải app, xem trực tiếp qua trình duyệt',
      'Bảng điều khiển theo dõi số lượng quét mã và lượt review tăng trưởng theo ngày'
    ],

    period: 'Triển khai trong 5 ngày làm việc (Tháng 4/2026)',
    roiTimeline: 'Đạt 150 review sau 14 ngày, cắt giảm 100% tiền ads ngay tháng đầu',
    evidence: [
      { metric: 'Đánh giá 5 sao thật', value: '480+', label: 'Tăng từ 12 lên 480+ review tích cực' },
      { metric: 'Chi phí quảng cáo Ads', value: '0 ĐỒNG', label: 'Tiết kiệm 100% ngân sách 10 tr/tháng' },
      { metric: 'Lượt tìm thấy trên Maps', value: '18.600+', label: 'Hiển thị tìm kiếm tự nhiên mỗi tháng' },
      { metric: 'Tỷ trọng khách du lịch', value: '65%', label: 'Khách quốc tế & du khách tự tìm đến' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Số lượng đánh giá trên Google Maps',
        before: '12 đánh giá (điểm 4.1 sao)',
        after: '480+ đánh giá thật (điểm 4.9 sao xuất sắc)',
        impact: 'Trở thành quán có điểm số cao nhất phân khúc cà phê sân vườn Hội An'
      },
      {
        metric: 'Vị trí đề xuất của Google Maps',
        before: 'Không được đề xuất trong danh mục gợi ý',
        after: 'Gợi ý tự động trong mục "Được khách du lịch yêu thích nhất"',
        impact: 'Google Maps tự động đưa khách đến mà không tốn một đồng chi phí'
      },
      {
        metric: 'Chi phí tiếp thị hàng tháng',
        before: '10.000.000đ / tháng chạy quảng cáo Facebook',
        after: '0đ chi phí quảng cáo (100% khách tự nhiên)',
        impact: 'Tiết kiệm bền vững 120 triệu đồng mỗi năm'
      },
      {
        metric: 'Tỷ lệ lấp đầy bàn trong các khung giờ cao điểm',
        before: '35% bàn trống vào buổi chiều và tối',
        after: 'Full 100% bàn vào khung giờ 9h-11h sáng và 17h-21h tối',
        impact: 'Doanh thu trung bình mỗi tháng tăng trưởng +68%'
      }
    ],

    visualProof: {
      type: 'qr_review',
      badge: 'Real Review Growth Proof',
      title: 'Hồ Sơ Đánh Giá Google Maps Đạt Mốc 480+ Review 5 Sao',
      description: 'Toàn bộ 480+ đánh giá đều có hình ảnh chụp tách cà phê, góc sân vườn thật do chính thực khách chụp tại bàn. Tỷ lệ khách quốc tế để lại bình luận tiếng Anh, tiếng Hàn và tiếng Pháp đạt trên 40%.',
      highlightMetrics: [
        { label: 'Điểm đánh giá trung bình', value: '4.9 / 5.0 ⭐' },
        { label: 'Tỷ lệ đánh giá có ảnh chụp', value: '78.4%' },
        { label: 'Khách du lịch quốc tế', value: '43.2%' }
      ]
    },

    resultsSummary: 'Nhờ triển khai bộ mã QR thông minh để bàn và tối ưu Google Maps, Tiệm Cà Phê Mộc đã đạt hơn 480 đánh giá 5 sao thật, được Google Maps tự động đề xuất đến khách du lịch và tiết kiệm 100% chi phí quảng cáo.',
    testimonial: {
      quote: 'Lúc trước mỗi tháng đốt cả chục triệu tiền quảng cáo trên Facebook mà khách vào quán chẳng thấy đâu. Từ ngày LocalMate đặt bộ mã QR gỗ mộc ở từng bàn, khách uống nước xong quét một cái là chấm 5 sao ngay. Giờ khách Tây khách ta cứ mở Google Maps thấy quán nhiều sao là kéo đến nườm nượp!',
      author: 'Chị Hoàng Thảo',
      role: 'Chủ sáng lập Tiệm Cà Phê Mộc & Bếp Xưa',
      avatarText: 'HT'
    },

    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'content-marketing']
  },
  {
    id: 'gara-o-to-dai-nam',
    slug: 'gara-o-to-dai-nam',
    legacySlugs: ['gara-o-to-autocare-thuduc'],
    clientDisplayName: 'Gara Ô Tô Đại Nam (Cứu Hộ 24/7)',
    clientSubtitle: 'Trung tâm sửa chữa ô tô & Đội xe cứu hộ cẩu kéo cao tốc',
    anonymized: false,
    industry: 'Gara Ô Tô & Cứu Hộ',
    industryKey: 'gara-cuu-ho',
    location: 'TP. Thủ Đức & Bình Dương (Trục Phạm Văn Đồng - QL13)',
    heroImage: '/assets/illustrations/pricing-laptop-analytics.png',

    // 1. Bối cảnh
    context: 'Gara Ô Tô Đại Nam đầu tư 2 xe cẩu kéo chuyên dụng cùng xưởng sửa chữa diện tích 800m2 trang bị đầy đủ cầu nâng và máy chẩn đoán lỗi ECU. Gara có đội ngũ thợ máy trực cứu hộ 24/7 sẵn sàng xuất phát trong 15 phút tại các tuyến đường huyết mạch như Đại lộ Phạm Văn Đồng, Quốc lộ 13, Xa lộ Hà Nội và Vành đai 2.',

    // 2. Điểm nghẽn
    problem: 'Tài xế khi xe hỏng đột ngột giữa đường đều cuống cuồng bấm Google tìm cứu hộ khẩn cấp, nhưng Gara Đại Nam không có trang đích nào hiển thị nút gọi to rõ trên điện thoại. Các chiến dịch quảng cáo trước đó để từ khóa quá chung chung dẫn đến lãng phí ngân sách mà không tiếp nhận được cuộc gọi kéo xe.',
    startingState: [
      'Trang web cũ chỉ có bài viết dài dòng giới thiệu gara, số điện thoại hotline để ở chân trang mờ nhạt khó bấm',
      'Chạy quảng cáo Google với các từ khóa quá rộng như "sửa xe hơi", "bảo dưỡng ô tô", click tốn tiền nhưng không có người gọi',
      'Đội xe cứu hộ 2 chiếc trị giá hơn 1.5 tỷ đồng nằm đắp chiếu nhiều ngày trong tuần vì không có cuốc kéo xe',
      'Không theo dõi được cuộc gọi nào đến từ quảng cáo và cuộc gọi nào từ khách quen giới thiệu'
    ],
    bottlenecks: [
      {
        title: 'Tâm lý tài xế gặp nạn cần nút bấm gọi ngay trong 2 giây',
        desc: 'Xe nổ lốp, chết máy, va chạm giữa đường cao tốc thì tài xế không có thời gian đọc bài viết hay điền form đăng ký. Bất kỳ sự chậm trễ nào về giao diện đều khiến họ thoát trang và bấm vào số điện thoại đối thủ.'
      },
      {
        title: 'Lãng phí ngân sách vào các truy vấn tìm kiếm không cấp bách',
        desc: 'Từ khóa "gara ô tô" hay "phụ tùng ô tô" có giá thầu đắt đỏ nhưng chuyển đổi thành cuộc gọi cứu hộ gần như bằng không.'
      },
      {
        title: 'Thiếu định vị bán kính phục vụ phản ứng nhanh 10km',
        desc: 'Quảng cáo phân bổ ra toàn thành phố trong khi bán kính cứu hộ hiệu quả nhất chỉ trong vòng 10km để đảm bảo thời gian tiếp cận dưới 20 phút.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Landing Page Cứu Hộ Ô Tô Mobile-First Khẩn Cấp', serviceSlug: 'website-landing-page' },
      { serviceName: 'Quảng Cáo Google Ads Từ Khóa Khẩn Cấp Bán Kính 10km', serviceSlug: 'google-ads' },
      { serviceName: 'Cài Đặt Tracking Cuộc Gọi Call-Only & GTM', serviceSlug: 'analytics-tracking' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Thiết kế trang đích cứu hộ tốc độ chớp nhoáng (0.5s)',
        detail: 'Tối giản hóa tối đa cấu trúc: Tiêu đề khẩn cấp "XE HỎNG GIỮA ĐƯỜNG? CỨU HỘ CÓ MẶT SAU 15 PHÚT", cam kết giá kéo xe minh bạch và nút "GỌI CỨU HỘ NGAY 24/7" màu đỏ cam cỡ lớn dính chặt cố định đáy màn hình.',
        tag: 'Emergency UI'
      },
      {
        step: 2,
        title: 'Cụm chiến dịch Google Search Ads tập trung 100% từ khóa khẩn cấp',
        detail: 'Thiết lập danh sách từ khóa chính xác cao: "cứu hộ ô tô thủ đức", "xe kéo ô tô phạm văn đồng", "kích bình ắc quy xe hơi gần đây", "vá vỏ ô tô lưu động bình dương".',
        tag: 'High-Intent Ads'
      },
      {
        step: 3,
        title: 'Bộ lọc 250+ từ khóa phủ định loại bỏ 100% click rác',
        detail: 'Phủ định triệt để các từ khóa gây tiêu hao ngân sách: "video kéo xe ô tô", "game cứu hộ", "học lái xe ô tô", "tự sửa xe tại nhà", "giá xe ô tô mới".',
        tag: 'Negative Filtering'
      },
      {
        step: 4,
        title: 'Cấu hình tiện ích cuộc gọi Call Extension & Tracking chính xác',
        detail: 'Tích hợp số hotline trực tiếp trên mẫu quảng cáo Google để tài xế có thể bấm gọi ngay từ trang kết quả tìm kiếm mà chưa cần tải trang.',
        tag: 'Call-Only Ads'
      }
    ],
    workDone: [
      'Thiết kế và triển khai Landing Page cứu hộ ô tô tối ưu tải trang cực nhanh trên sóng 3G/4G yếu',
      'Tái cấu trúc 100% tài khoản Google Ads, chia tách 3 nhóm chiến dịch theo từng khu vực trục đường chính',
      'Gắn mã theo dõi chuyển đổi cuộc gọi trực tiếp từ điện thoại vào hệ thống Google Analytics 4',
      'Đồng bộ giờ trực chiến dịch: Đẩy mạnh giá thầu vào các khung giờ đêm (21h - 5h sáng) và giờ cao điểm'
    ],
    deliverables: [
      'Trang đích cứu hộ ô tô tốc độ cao chuẩn chuyển đổi cuộc gọi khẩn cấp',
      'Chiến dịch Google Search Ads nhắm mục tiêu chuẩn bán kính 10km quanh 2 xưởng của gara',
      'Bảng điều khiển theo dõi chi phí trên mỗi cuộc gọi cứu hộ phát sinh theo thời gian thực',
      'Quy trình tiếp nhận và phân luồng thông tin xe cứu hộ về điện thoại của trưởng đội xe'
    ],

    period: 'Triển khai trong 4 ngày làm việc (Tháng 5/2026)',
    roiTimeline: 'Hoàn vốn đầu tư sau đúng 3 ngày nhờ 2 ca kéo xe đại tu máy',
    evidence: [
      { metric: 'Cuộc gọi kéo xe hàng tuần', value: '5 - 8 cuộc', label: 'Tăng đều đặn mỗi tuần' },
      { metric: 'Thời gian hoàn vốn dịch vụ', value: 'Sau 3 ngày', label: 'Thu hồi 100% chi phí triển khai' },
      { metric: 'Tỷ lệ bấm gọi từ trang đích', value: '28.4%', label: 'Cứ 100 click có hơn 28 cuộc gọi' },
      { metric: 'Doanh thu dịch vụ phụ trợ', value: '+95 tr/tháng', label: 'Từ sửa máy, gò sơn sau kéo xe' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Số lượng cuộc gọi cứu hộ tiếp nhận',
        before: '0 - 1 cuộc/tháng (chỉ người quen gọi)',
        after: '5 - 8 cuộc gọi cứu hộ & kéo xe mỗi tuần',
        impact: 'Đội xe cứu hộ hoạt động liên tục, sinh lời vượt kỳ vọng'
      },
      {
        metric: 'Chi phí trên mỗi cuộc gọi cứu hộ thật',
        before: 'Không xác định được (đốt tiền ads vô ích)',
        after: '68.000đ - 85.000đ / cuộc gọi cứu hộ thành công',
        impact: 'Biên lợi nhuận mỗi cuốc kéo xe đạt trên 80%'
      },
      {
        metric: 'Tỷ lệ chuyển đổi khách kéo xe thành khách sửa chữa tại gara',
        before: 'Dưới 10% (khách chỉ kéo về nhà)',
        after: '72% khách hàng đồng ý kéo xe về xưởng Đại Nam để đại tu',
        impact: 'Mở rộng nguồn doanh thu dịch vụ phụ tùng và máy gầm'
      },
      {
        metric: 'Thời gian thu hồi vốn đầu tư chuyển đổi số',
        before: 'Lo lắng lỗ vốn quảng cáo',
        after: 'Hoàn vốn 100% sau 3 ngày triển khai đầu tiên',
        impact: 'Hệ thống vận hành sinh dòng tiền mặt mỗi ngày'
      }
    ],

    visualProof: {
      type: 'emergency_call',
      badge: 'Emergency Conversion Proof',
      title: 'Tỷ Lệ Bấm Gọi Hotline Khẩn Cấp Đạt Kỷ Lục 28.4%',
      description: 'Nhờ thiết kế nút gọi nổi bật dính sát đáy màn hình kết hợp tải trang 0.5 giây, hơn 1/4 số tài xế vào trang lập tức bấm gọi cứu hộ. Hệ thống ghi nhận các cuộc gọi xuyên đêm từ 23h đến 4h sáng mang lại giá trị dịch vụ cao nhất.',
      highlightMetrics: [
        { label: 'Tỷ lệ chuyển đổi cuộc gọi', value: '28.4%' },
        { label: 'Chi phí trung bình / cuộc gọi', value: '75.000đ' },
        { label: 'Thời gian có mặt trung bình', value: '16 phút' }
      ]
    },

    resultsSummary: 'Bằng việc xây dựng trang đích cứu hộ khẩn cấp với nút gọi nổi bật cùng chiến dịch Google Search Ads bán kính 10km, Gara Đại Nam đều đặn tiếp nhận 5-8 cuộc gọi kéo xe mỗi tuần và hoàn vốn đầu tư chỉ sau 3 ngày.',
    testimonial: {
      quote: 'Làm nghề cứu hộ thì điều cốt tử là khách bấm máy gọi ngay lúc xe nằm đường. LocalMate làm trang web rất thực tế, không màu mè rườm rà, vào là thấy nút gọi cứu hộ to tướng. Chỉ sau 3 ngày chạy chiến dịch, chúng tôi nhận liền 2 ca kéo xe bị thủy kích về gara đại tu, tiền công thu về đã dư sức trả toàn bộ gói dịch vụ của LocalMate!',
      author: 'Anh Nguyễn Đại Nam',
      role: 'Chủ sáng lập Gara & Cứu Hộ Đại Nam',
      avatarText: 'ĐN'
    },

    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'analytics-tracking']
  },
  {
    id: 'thiet-bi-am-thanh-dien-tu',
    slug: 'thiet-bi-am-thanh-dien-tu',
    legacySlugs: ['nha-thau-nhom-kinh-binh-duong'],
    clientDisplayName: 'Cửa Hàng Thiết Bị Âm Thanh & Điện Tử Hoàng Long',
    clientSubtitle: 'Showroom âm thanh chuyên nghiệp, dàn karaoke & loa hi-end',
    anonymized: false,
    industry: 'Thiết Bị Âm Thanh & Điện Tử',
    industryKey: 'dien-tu-showroom',
    location: 'Quận Đống Đa, Hà Nội',
    heroImage: '/assets/illustrations/mascot-ga4-gtm-ads.png',

    // 1. Bối cảnh
    context: 'Cửa Hàng Thiết Bị Âm Thanh & Điện Tử Hoàng Long là showroom phân phối loa nghe nhạc, micro không dây, amply và dàn karaoke gia đình chính hãng tại Hà Nội. Cửa hàng có phòng trải nghiệm cách âm chuẩn phòng thu, nhưng khách hàng thường có tâm lý muốn nhìn tận mắt và nghe thử chất âm trước khi bỏ ra từ 5 đến 30 triệu đồng mua một bộ thiết bị.',

    // 2. Điểm nghẽn
    problem: 'Tài khoản quảng cáo bị Google và Facebook khóa do chính sách nhãn hiệu và hạn chế kinh doanh thiết bị điện tử. Cửa hàng hoàn toàn mất kết nối với khách hàng trực tuyến, showroom vắng bóng người đến trải nghiệm thử chất âm, tồn kho thiết bị lên tới hàng tỷ đồng.',
    startingState: [
      'Tài khoản Google Ads bị tạm ngưng vì lỗi "Chính sách hàng giả / Hàng vi phạm nhãn hiệu" do trong bài viết có tên các thương hiệu lớn như JBL, Sony, Shure',
      'Kháng nghị nhiều lần qua các mẫu tự động trên mạng nhưng đều bị Google từ chối thẳng thừng',
      'Doanh thu tụt dốc hơn 60%, showroom phòng nghe thử chỉ đón 7-8 khách mỗi tuần',
      'Chưa từng khai thác kênh Google Shopping và Google Maps để thu hút khách hàng đến trải nghiệm thực tế tại cửa hàng'
    ],
    bottlenecks: [
      {
        title: 'Bị khóa tài khoản do thiếu hồ sơ ủy quyền phân phối chuẩn mực',
        desc: 'Google quét tự động bằng AI và đánh dấu vi phạm bản quyền nếu đại lý bán hàng không cung cấp văn bản ủy quyền, hóa đơn VAT chứng minh nguồn gốc xuất xứ.'
      },
      {
        title: 'Khách mua âm thanh cao cấp không mua chỉ bằng việc nhìn ảnh',
        desc: 'Sản phẩm âm thanh đòi hỏi trải nghiệm giác quan. Nếu chỉ bán online đơn thuần thì tỷ lệ hoàn hàng rất cao vì khách cảm thấy chất âm không hợp gu.'
      },
      {
        title: 'Bỏ quên kênh Google Shopping hiển thị trực tiếp giá và hình ảnh',
        desc: 'Người tiêu dùng tìm kiếm model loa cụ thể (ví dụ: "loa karaoke gia đình giá tốt") có xu hướng so sánh hình ảnh, thông số và giá bán hiển thị trực quan ngay trên trang đầu Google.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Kháng Cáo Tài Khoản & Gỡ Phạt Chính Sách Google Ads', serviceSlug: 'google-ads' },
      { serviceName: 'Triển Khai Google Merchant Center & Google Shopping', serviceSlug: 'google-ads' },
      { serviceName: 'Chiến Dịch Bản Đồ Kéo Khách Trải Nghiệm Showroom', serviceSlug: 'google-maps' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Chuẩn bị hồ sơ pháp lý & Gửi kháng nghị chính sách Google White-Hat',
        detail: 'Tổng hợp hợp đồng phân phối đại lý, giấy phép kinh doanh, hóa đơn VAT và thư ủy quyền thương hiệu, biên soạn hồ sơ giải trình kỹ thuật gửi trực tiếp đội ngũ kiểm duyệt Google Policy.',
        tag: 'Policy Clearance'
      },
      {
        step: 2,
        title: 'Tạo luồng dữ liệu sản phẩm chuẩn Google Merchant Center',
        detail: 'Chuẩn hóa nguồn cấp dữ liệu (Product Feed) cho hơn 120 model sản phẩm âm thanh: mã GTIN chuẩn, tình trạng tồn kho, chính sách bảo hành 24 tháng và thông tin đổi trả minh bạch.',
        tag: 'Google Shopping'
      },
      {
        step: 3,
        title: 'Chiến dịch Local Campaigns thu hút khách đến phòng nghe thử',
        detail: 'Tích hợp tính năng "Đặt Lịch Nghe Thử Miễn Phí Tại Showroom" trên website kèm thông điệp tặng kèm gói cân chỉnh âm thanh tại nhà trị giá 500k khi đến trải nghiệm.',
        tag: 'Store Visits'
      },
      {
        step: 4,
        title: 'Tối ưu Google Maps Showroom & Hình ảnh phòng demo',
        detail: 'Đăng tải bộ ảnh 360 độ phòng thử âm thanh, hình ảnh khách hàng nhận bàn giao dàn karaoke và cập nhật lịch làm việc từ 8h00 đến 21h30 tất cả các ngày.',
        tag: 'Maps Showroom'
      }
    ],
    workDone: [
      'Gỡ sạch 100% án phạt chính sách thương hiệu trên tài khoản Google Ads, khôi phục quyền chạy quảng cáo',
      'Đồng bộ dữ liệu tồn kho và giá bán tự động giữa website và Google Merchant Center',
      'Thiết lập chiến dịch Google Shopping tối ưu chi phí đấu thầu ROAS tự động bằng Smart Bidding',
      'Triển khai quảng cáo ghim vị trí tài trợ (Promoted Pins) trên Google Maps trong bán kính 8km'
    ],
    deliverables: [
      'Tài khoản Google Ads sạch vi phạm, hoạt động ổn định với hạn mức thanh toán không giới hạn',
      'Hệ thống Google Shopping hiển thị hơn 120 sản phẩm âm thanh có giá và đánh giá sao',
      'Hồ sơ Google Maps showroom thu hút lượng khách đến trực tiếp phòng nghe thử mỗi ngày',
      'Bảng báo cáo chi phí trên mỗi lượt ghé thăm cửa hàng (Cost Per Store Visit)'
    ],

    period: 'Triển khai trong 6 ngày làm việc (Tháng 5/2026)',
    roiTimeline: 'Gỡ gậy sau 48h, đạt ROAS 7.2x và hòa vốn ngay tuần thứ 2',
    evidence: [
      { metric: 'Tình trạng tài khoản Ads', value: 'Kháng Sạch', label: '100% mở khóa chính sách' },
      { metric: 'Khách ghé showroom thử máy', value: '35 - 42 khách', label: 'Tăng gấp 5 lần so với trước' },
      { metric: 'Tỷ lệ chốt đơn tại tiệm', value: '62%', label: 'Khi khách đã đến nghe thử thực tế' },
      { metric: 'Doanh số Shopping hàng tháng', value: '+140 tr', label: 'Tăng trưởng doanh số bán trực tuyến' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Trạng thái tài khoản quảng cáo Google',
        before: 'Bị khóa vĩnh viễn do vi phạm chính sách nhãn hiệu',
        after: 'Kháng sạch 100%, được công nhận đối tác đủ điều kiện',
        impact: 'Mở lại mạch máu tiếp cận khách hàng trực tuyến lớn nhất'
      },
      {
        metric: 'Số lượng khách đến trực tiếp showroom trải nghiệm',
        before: '7 - 8 khách/tuần (showroom vắng vẻ)',
        after: '35 - 42 khách/tuần đến trải nghiệm phòng nghe thử',
        impact: 'Tỷ lệ lấp đầy phòng demo âm thanh đạt 80%'
      },
      {
        metric: 'Tỷ lệ chốt đơn thành công',
        before: '22% khi tư vấn chay qua tin nhắn mạng xã hội',
        after: '62% khi khách được trực tiếp nghe thử chất âm',
        impact: 'Biên lợi nhuận dàn karaoke cao cấp tăng vọt'
      },
      {
        metric: 'Hiệu suất hoàn vốn quảng cáo (ROAS)',
        before: 'Lỗ vốn do tài khoản bị gián đoạn liên tục',
        after: 'Đạt ROAS 7.2x (1 đồng chi phí mang về 7.2 đồng doanh thu)',
        impact: 'Kênh Google Shopping trở thành cỗ máy bán hàng tự động'
      }
    ],

    visualProof: {
      type: 'merchant_shopping',
      badge: 'Merchant Center & Shopping Proof',
      title: 'Bảng Báo Cáo Google Shopping & Lượt Ghé Thăm Cửa Hàng',
      description: 'Hơn 120 dòng sản phẩm âm thanh hiển thị trọn vẹn trên Google Shopping với huy hiệu "Có sẵn tại cửa hàng Đống Đa". Tỷ lệ khách hàng tìm kiếm trên Google bấm xem chỉ đường đến showroom tăng trưởng 310%.',
      highlightMetrics: [
        { label: 'Tỷ lệ hoàn vốn quảng cáo (ROAS)', value: '7.2x' },
        { label: 'Lượt xem sản phẩm Shopping', value: '42.500+' },
        { label: 'Chi phí trên lượt ghé tiệm', value: '32.000đ' }
      ]
    },

    resultsSummary: 'Khắc phục hoàn toàn lỗi tài khoản quảng cáo bị khóa, LocalMate giúp Showroom Âm Thanh Hoàng Long mở rộng thành công kênh Google Shopping và kéo hơn 35 khách hàng mỗi tuần đến trải nghiệm trực tiếp tại tiệm.',
    testimonial: {
      quote: 'Lúc tài khoản ads bị Google khóa vì dính tên thương hiệu loa, tôi tưởng chừng phải đóng cửa showroom vì tiền thuê mặt bằng Đống Đa quá đắt. LocalMate đã làm điều kỳ diệu: kháng sạch lỗi trong 48 tiếng, thiết lập Google Shopping và đưa khách đến tận phòng nghe thử. Khách nghe ưng tai là chốt đơn ngay!',
      author: 'Anh Hoàng Long',
      role: 'Chủ Showroom Thiết Bị Âm Thanh Hoàng Long',
      avatarText: 'HL'
    },

    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['google-ads', 'google-maps', 'analytics-tracking']
  },
  {
    id: 'sua-chua-dien-lanh-tai-nha',
    slug: 'sua-chua-dien-lanh-tai-nha',
    legacySlugs: ['mam-non-tu-thuc-tphcm', 'tiem-banh-tiem-hoa-an-nhien'],
    clientDisplayName: 'Dịch Vụ Sửa Chữa Điện Lạnh Tại Nhà Bách Khoa Fix',
    clientSubtitle: 'Mạng lưới thợ kỹ thuật sửa điều hòa, máy giặt, tủ lạnh tại chung cư',
    anonymized: false,
    industry: 'Điện Lạnh & Kỹ Thuật Tại Nhà',
    industryKey: 'dien-lanh-dich-vu',
    location: 'TP. Hà Nội (Hệ thống các quận Cầu Giấy, Nam Từ Liêm, Hoàng Mai)',
    heroImage: '/assets/illustrations/roadmap-flag-path.png',

    // 1. Bối cảnh
    context: 'Bách Khoa Fix sở hữu đội ngũ 12 thợ kỹ thuật tốt nghiệp chuyên ngành nhiệt lạnh, chuyên cung cấp dịch vụ bảo dưỡng, nạp ga điều hòa, sửa chữa máy giặt và tủ lạnh tận nhà cho các hộ gia đình và chung cư lớn tại Hà Nội. Tay nghề thợ rất vững và làm việc có tâm, tuy nhiên lĩnh vực sửa chữa điện lạnh từ lâu đã mang tiếng xấu vì nhiều đơn vị chộp giật "báo giá ảo", "chặt chém" hoặc cố tình bẻ cong pan bệnh.',

    // 2. Điểm nghẽn
    problem: 'Khách hàng có tâm lý nghi ngờ cực kỳ cao, gọi điện hỏi giá xong thì 70% từ chối vì sợ thợ đến nhà sẽ phát sinh phụ phí vô lý. Tỷ lệ chốt đơn dịch vụ chỉ đạt 30%, doanh thu bấp bênh và thợ không có việc làm đều đặn.',
    startingState: [
      'Chưa có bảng giá niêm yết chuẩn mực trên mạng, khách hỏi giá qua điện thoại thì mỗi thợ báo một kiểu gây mất niềm tin',
      'Tỷ lệ khách hàng rớt đơn (Drop-off) lên tới 70% ngay sau bước hỏi giá đầu tiên',
      'Thiếu quy trình cam kết bảo hành minh bạch bằng văn bản số, khách hàng sợ sửa xong gọi lại thì thợ không nghe máy',
      'Phụ thuộc vào các nhóm hội chung cư Facebook với sự cạnh tranh phá giá của thợ tự do không bằng cấp'
    ],
    bottlenecks: [
      {
        title: 'Nỗi sợ bị chặt chém giá là rào cản lớn nhất của gia chủ',
        desc: 'Khách hàng thà chịu nóng hoặc tìm người quen chứ không dám gọi thợ lạ trên mạng vì sợ bị "vẽ bệnh" đòi 1-2 triệu đồng cho lỗi đơn giản.'
      },
      {
        title: 'Thiếu công cụ tra cứu mã lỗi và bảng giá chuẩn trực tuyến',
        desc: 'Không có hệ thống Sales Hub công khai đơn giá linh kiện (tụ điều hòa, rơ le, bo mạch) khiến khách hàng cảm thấy mập mờ.'
      },
      {
        title: 'Không có bằng chứng bảo hành lưu vết điện tử',
        desc: 'Phiếu bảo hành giấy dễ rách nát, thất lạc khiến khách hàng cảm thấy không an tâm về dịch vụ hậu mãi sau khi thợ rời khỏi nhà.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Xây Dựng Bảng Giá Minh Bạch Trên Sales Hub', serviceSlug: 'website-landing-page' },
      { serviceName: 'Hệ Thống Tem Bảo Hành Điện Tử QR Code', serviceSlug: 'crm-automation' },
      { serviceName: 'Chiến Dịch Tìm Kiếm Khẩn Cấp Bán Kính Chung Cư', serviceSlug: 'google-ads' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Xây dựng Sales Hub Tra Cứu Bảng Giá Điện Lạnh Minh Bạch 100%',
        detail: 'Phân loại chi tiết bảng giá theo từng mã lỗi cụ thể (Điều hòa: nạp ga R32/R410A, thay tụ quạt, hàn ống đồng; Máy giặt: thay van xả, sửa bo mạch; Tủ lạnh: nạp ga, thay lốc). Cam kết: "Sai 1 đồng đền 1 triệu - Kiểm tra miễn phí 0đ nếu không đồng ý sửa".',
        tag: 'Sales Hub Pricing'
      },
      {
        step: 2,
        title: 'Triển khai Tem Bảo Hành Điện Tử QR Code',
        detail: 'Mỗi thiết bị sau khi sửa xong được dán tem QR độc bản. Gia chủ chỉ cần quét mã bằng điện thoại là thấy ngay lịch sử sửa chữa, tên thợ thực hiện và hạn bảo hành 6 - 12 tháng.',
        tag: 'E-Warranty QR'
      },
      {
        step: 3,
        title: 'Form đặt lịch chọn khung giờ có mặt trong 30 phút',
        detail: 'Giao diện đặt lịch hẹn trên điện thoại cho phép gia chủ chọn loại thiết bị, hiện tượng hỏng và khung giờ thợ tới, tự động bắn thông báo và điều phối thợ gần nhất qua Zalo.',
        tag: 'Smart Dispatch'
      },
      {
        step: 4,
        title: 'Chiến dịch từ khóa sự cố thiết bị nhắm trúng cụm dân cư',
        detail: 'Tối ưu Google Search Ads cho các từ khóa gắn liền với mã lỗi: "điều hòa daikin báo lỗi u4", "máy giặt lg không vắt kêu to", "tủ lạnh hitachi không đông đá".',
        tag: 'Troubleshooting Ads'
      }
    ],
    workDone: [
      'Xây dựng hệ thống Sales Hub Bảng Giá Niêm Yết với công cụ tính toán chi phí sửa chữa dự toán tức thì',
      'Triển khai hệ thống kích hoạt bảo hành điện tử qua quét mã QR dán trên thân máy',
      'Đào tạo 12 thợ kỹ thuật quy trình gửi link bảng giá cho khách xem trước khi nhận việc',
      'Tích hợp tính năng đánh giá sao thái độ phục vụ của thợ ngay sau khi hoàn thành dịch vụ'
    ],
    deliverables: [
      'Website Sales Hub bảng giá chuẩn mực có tích hợp công cụ tra cứu mã lỗi thông minh',
      'Nền tảng quản lý tem bảo hành điện tử QR Code cho hơn 1.000 thiết bị',
      'Chiến dịch Google Ads nhắm mục tiêu khu vực 15 cụm chung cư lớn tại Hà Nội',
      'Quy trình vận hành chuẩn giúp tăng tỷ lệ chốt đơn ngay từ cuộc gọi đầu tiên'
    ],

    period: 'Triển khai trong 5 ngày làm việc (Tháng 6/2026)',
    roiTimeline: 'Tỷ lệ chốt đơn nhảy vọt từ 30% lên 75% ngay tuần đầu vận hành',
    evidence: [
      { metric: 'Tỷ lệ chốt đơn cuộc gọi', value: '75%', label: 'Tăng vọt từ 30% lên 75%' },
      { metric: 'Đơn hàng sửa chữa/tuần', value: '115 - 130 đơn', label: 'Tăng gấp gần 3 lần mùa hè' },
      { metric: 'Độ hài lòng về sự minh bạch', value: '98.5%', label: 'Khách hàng đánh giá 5 sao' },
      { metric: 'Tỷ lệ khách quay lại/giới thiệu', value: '48%', label: 'Cư dân chung cư mách nhau' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Tỷ lệ chốt đơn dịch vụ khi khách gọi điện',
        before: 'Chỉ 30% (70% khách bỏ đi vì sợ bị chém giá)',
        after: 'Đạt 75% chốt lịch thợ đến nhà ngay cuộc gọi đầu',
        impact: 'Khách hàng hoàn toàn an tâm khi thấy bảng giá công khai'
      },
      {
        metric: 'Số lượng đơn sửa chữa hoàn thành mỗi tuần',
        before: '35 - 40 đơn/tuần (thợ nhiều thời gian rảnh)',
        after: '115 - 130 đơn/tuần (full lịch điều phối thợ)',
        impact: 'Thu nhập bình quân của thợ tăng từ 9 triệu lên 18 triệu/tháng'
      },
      {
        metric: 'Mức độ tín nhiệm và tranh chấp phát sinh',
        before: 'Thường xuyên có khiếu nại về phụ phí',
        after: '98.5% khách hài lòng, 0 trường hợp tranh chấp giá',
        impact: 'Xây dựng thương hiệu thợ điện lạnh tử tế số 1 khu vực'
      },
      {
        metric: 'Tỷ lệ khách hàng tái sử dụng và giới thiệu cư dân',
        before: 'Dưới 12% (khách sửa xong rồi quên)',
        after: '48% gia chủ tiếp tục gọi bảo dưỡng điều hòa kỳ sau',
        impact: 'Tạo dòng doanh thu định kỳ bền vững cho Bách Khoa Fix'
      }
    ],

    visualProof: {
      type: 'transparent_pricing',
      badge: 'Transparent Pricing Proof',
      title: 'Module Sales Hub Tra Cứu Giá & Tem Bảo Hành QR',
      description: 'Hơn 1.200 lượt tra cứu bảng giá mỗi tuần trên Sales Hub. Khách hàng xem trước chi tiết giá linh kiện và tiền công thợ trước khi bấm nút gọi, giúp loại bỏ hoàn toàn tâm lý e ngại bị chặt chém.',
      highlightMetrics: [
        { label: 'Tỷ lệ đồng ý sửa sau xem giá', value: '82.6%' },
        { label: 'Tem QR bảo hành đã kích hoạt', value: '850+ tem' },
        { label: 'Thời gian thợ có mặt trung bình', value: '26 phút' }
      ]
    },

    resultsSummary: 'Nhờ xây dựng bảng giá minh bạch trên Sales Hub và hệ thống bảo hành QR Code, Bách Khoa Fix đã xóa tan nỗi lo chặt chém của khách hàng, nâng tỷ lệ chốt đơn từ 30% lên 75% và tiếp nhận hơn 120 đơn sửa chữa mỗi tuần.',
    testimonial: {
      quote: 'Dân làm thợ điện lạnh khổ nhất là mang tiếng chém giá. Từ khi có trang Sales Hub của LocalMate, khách gọi đến là tôi bảo "chị bấm vào link này xem đúng bảng giá niêm yết công ty em". Khách thấy giá rõ ràng đến từng con ốc, lại có tem bảo hành quét mã QR nên họ tin tưởng 100%. Tỷ lệ chốt đơn tăng từ 30% lên 75%, anh em thợ làm không hết việc!',
      author: 'Anh Trần Quốc Huy',
      role: 'Đội trưởng Kỹ thuật Bách Khoa Fix',
      avatarText: 'QH'
    },

    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['website-landing-page', 'crm-automation', 'google-ads']
  }
];

export const getAllCaseStudies = (): CaseStudyEntity[] => {
  return CASE_STUDIES;
};

export const getCaseStudyBySlug = (slug: string): CaseStudyEntity | undefined => {
  return CASE_STUDIES.find(
    (c) => c.slug === slug || c.id === slug || (c.legacySlugs && c.legacySlugs.includes(slug))
  );
};
