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
  
  // Minh bạch thương hiệu: Tình huống giả định & Workflow chuẩn hóa
  scenarioType: string;
  workflowTitle: string;
  transparencyNote: string;
  
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
  
  claimStatus: 'HYPOTHETICAL_SCENARIO';
  relatedServiceSlugs: string[];
}

export const CASE_STUDIES: CaseStudyEntity[] = [
  {
    id: 'nha-khoa-tam-duc',
    slug: 'nha-khoa-tam-duc',
    legacySlugs: ['nha-khoa-nucuoiduyen-tphcm'],
    clientDisplayName: 'Tình Huống Giả Định: Phòng Khám Nha Khoa Mở Cơ Sở Mới',
    clientSubtitle: 'Workflow minh họa: Định danh Google Maps & Xây dựng Landing Page Y tế chuyên sâu',
    anonymized: true,
    industry: 'Y Tế & Nha Khoa',
    industryKey: 'y-te-nha-khoa',
    location: 'Khu vực đô thị (Ví dụ minh họa: Quận 10, TP. Hồ Chí Minh)',
    heroImage: '/assets/illustrations/hero-store-phone.png',
    
    scenarioType: 'Tình huống giả định thường gặp',
    workflowTitle: 'Workflow minh họa: Định danh Maps & Landing Page Y tế',
    transparencyNote: 'Lưu ý minh bạch: Đây là kịch bản giả định mô phỏng bài toán phòng khám mới mở ít khách vãng lai, minh họa cách LocalMate phân tích kỹ thuật chuẩn Schema Y tế và Local SEO. Chúng tôi không đưa ra các số liệu cam kết thứ hạng hay doanh thu cố định.',
    
    // 1. Bối cảnh
    context: 'Một phòng khám nha khoa mới mở cơ sở tại trục đường nhánh thuộc khu dân cư đông đúc. Cơ sở đầu tư hệ thống máy chụp CT ConeBeam và ghế nha kỹ thuật cao, nhưng vị trí khuất khiến lượng người qua lại tự nhiên rất mỏng. Bán kính 3-5km xung quanh có nhiều phòng khám lâu năm đã có sẵn thương hiệu.',
    
    // 2. Điểm nghẽn
    problem: 'Tình huống thường gặp: Cơ sở mới mở chưa xuất hiện trên bản đồ tìm kiếm địa phương, thông tin dịch vụ chưa khai báo Schema chuẩn y tế và ngân sách quảng cáo mạng xã hội dễ bị phân tán nếu không hướng đúng khách hàng có nhu cầu khám răng cấp thiết gần cơ sở.',
    startingState: [
      'Chưa xuất hiện trong nhóm kết quả địa phương khi người dân tìm "nha khoa gần đây" hay "nhổ răng khôn"',
      'Chưa khai báo Schema Y tế (MedicalBusiness/Dentist), công cụ tìm kiếm không xác định được danh mục chuyên môn và giấy phép',
      'Chi phí quảng cáo mạng xã hội phân tán, nhận nhiều tin nhắn hỏi giá vu vơ không phát sinh cuộc hẹn thật',
      'Đội ngũ y bác sĩ thường xuyên trống lịch hẹn vào các khung giờ sáng và giữa tuần'
    ],
    bottlenecks: [
      {
        title: 'Chưa tối ưu hiển thị bản đồ trong bán kính phục vụ 3-5km',
        desc: 'Khách hàng có vấn đề về răng miệng luôn ưu tiên tìm kiếm phòng khám gần nhà để di chuyển thuận tiện. Thiếu hồ sơ Google Maps được định danh chuẩn xác khiến cơ sở đánh mất tệp khách hàng cấp thiết này.'
      },
      {
        title: 'Thiếu dữ liệu cấu trúc Schema Y tế có thẩm quyền',
        desc: 'Google xếp lĩnh vực y tế vào nhóm YMYL (Your Money Your Life) khắt khe. Nếu không có đánh dấu Schema chuẩn xác, trang web khó được công nhận là nguồn thông tin y khoa đáng tin cậy.'
      },
      {
        title: 'Trang đích cũ thiếu nút bấm gọi đặt lịch trực tiếp',
        desc: 'Website quá nhiều chữ, tải chậm trên điện thoại và thiếu bảng giá thủ thuật niêm yết rõ ràng khiến người xem nhanh chóng thoát trang.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Tối Ưu Hiển Thị Google Maps Cấp Địa Phương', serviceSlug: 'google-maps' },
      { serviceName: 'Thiết Kế Landing Page Y Tế Tối Ưu Tốc Độ', serviceSlug: 'website-landing-page' },
      { serviceName: 'Cài Đặt Schema Y Tế Chuẩn JSON-LD & Tracking', serviceSlug: 'analytics-tracking' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Chuẩn hóa & Định danh hồ sơ Google Maps (Local Pack)',
        detail: 'Cập nhật tọa độ GPS chuẩn xác, cấu hình danh mục chính "Dentist" và phụ "Dental Clinic", bổ sung hình ảnh không gian điều trị thực tế và danh mục dịch vụ chi tiết.',
        tag: 'Google Maps SEO'
      },
      {
        step: 2,
        title: 'Triển khai cấu trúc Schema JSON-LD y tế chuyên sâu',
        detail: 'Cấu hình @type: Dentist với các thuộc tính y tế đặc thù: medicalSpecialty, openingHoursSpecification, priceRange, hasOfferCatalog (nhổ răng khôn, niềng răng, cạo vôi răng).',
        tag: 'Medical Schema'
      },
      {
        step: 3,
        title: 'Xây dựng Landing Page Mobile-First tốc độ < 1 giây',
        detail: 'Thiết kế giao diện sáng sủa (Light Mode), thanh điều hướng cố định chân màn hình với 2 nút to rõ: "Gọi Hotline Tư Vấn" và "Đặt Hẹn Khám", tích hợp thông báo về Zalo phòng khám.',
        tag: 'High-Converting UI'
      },
      {
        step: 4,
        title: 'Chiến dịch từ khóa định vị bán kính trọng điểm',
        detail: 'Thiết lập danh sách cụm từ khóa định vị địa phương chính xác kết hợp phủ định triệt để các truy vấn tìm kiếm rác không tạo ra chuyển đổi.',
        tag: 'Geo Local Search'
      }
    ],
    workDone: [
      'Xác minh và chuẩn hóa 100% thông tin cơ sở trên Google Maps & Apple Maps',
      'Nhúng mã Schema y tế MedicalBusiness chuẩn hóa theo khuyến nghị Google Search Central',
      'Thiết kế trang đích đặt lịch khám nhẹ, tải trang dưới 1 giây trên mạng 4G/5G',
      'Cấu hình luồng chuyển đổi đo lường cuộc gọi thực tế qua Google Tag Manager'
    ],
    deliverables: [
      '01 Hồ sơ Google Maps chuẩn hóa danh mục với chứng nhận chính chủ',
      '01 Landing Page y khoa chuyển đổi cao có bảng giá niêm yết minh bạch',
      'Hệ thống theo dõi cuộc gọi và tin nhắn đặt lịch tự động đẩy về Zalo của cơ sở',
      'Bộ tài liệu quy trình hướng dẫn thu thập đánh giá văn minh từ bệnh nhân sau điều trị'
    ],

    period: 'Kế hoạch triển khai mẫu: 7 ngày làm việc',
    roiTimeline: 'Đồng bộ kỹ thuật hoàn tất sau 7-14 ngày, theo dõi dữ liệu hiển thị bản đồ định kỳ',
    evidence: [
      { metric: 'Mục tiêu hiển thị', value: 'Local Pack', label: 'Tối ưu bán kính 3-5km quanh cơ sở' },
      { metric: 'Kênh tiếp nhận', value: 'Hotline + Zalo', label: 'Chuyển đổi cuộc gọi trực tiếp' },
      { metric: 'Tốc độ tải trang', value: '< 1.0 Giây', label: 'Chuẩn Core Web Vitals y tế' },
      { metric: 'Cấu trúc Schema', value: 'Chuẩn 100%', label: 'Khai báo @type: Dentist đầy đủ' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Trạng thái hiển thị trên Google Maps',
        before: 'Chưa có hồ sơ định danh chính chủ, bị chìm giữa các cơ sở cũ',
        after: 'Hồ sơ xác minh đầy đủ danh mục, giờ mở cửa và tọa độ chuẩn',
        impact: 'Người dân quanh khu vực dễ dàng tìm thấy địa chỉ và số điện thoại'
      },
      {
        metric: 'Thao tác liên hệ trên điện thoại',
        before: 'Website cũ không có nút gọi nhanh, tải chậm trên di động',
        after: 'Nút Hotline & Zalo cố định, bấm là kết nối cuộc gọi tức thì',
        impact: 'Loại bỏ rào cản thao tác cho người bệnh cần khám gấp'
      },
      {
        metric: 'Tính minh bạch thông tin dịch vụ',
        before: 'Không có bảng giá niêm yết, người xem e ngại bị phát sinh chi phí',
        after: 'Bảng giá công khai từng dịch vụ (nhổ răng, trám răng, lấy cao)',
        impact: 'Tạo dựng sự tin tưởng và an tâm ngay từ lần tiếp cận đầu'
      },
      {
        metric: 'Hạ tầng tiếp nhận thông báo đặt lịch',
        before: 'Dễ bỏ sót tin nhắn và cuộc gọi của khách khi bận việc',
        after: 'Thông báo đổ chuông Zalo phòng khám ngay khi có lịch hẹn mới',
        impact: 'Đội ngũ phụ trách phản hồi lại người bệnh trong vòng vài phút'
      }
    ],

    visualProof: {
      type: 'google_maps',
      badge: 'Minh Họa Tối Ưu Local Pack',
      title: 'Mô Phỏng Tối Ưu Hiển Thị Bản Đồ Địa Phương & Schema',
      description: 'Thiết lập chuẩn hóa thông tin cơ sở kinh doanh trên bản đồ kết hợp Schema Y tế JSON-LD, đảm bảo Google nhận diện chính xác chuyên môn, thời gian làm việc và khu vực phục vụ.',
      highlightMetrics: [
        { label: 'Chuẩn hóa tọa độ', value: '100% Chính chủ' },
        { label: 'Tương thích di động', value: 'Mobile-First' },
        { label: 'Tốc độ phản hồi Zalo', value: 'Tức thì' }
      ]
    },

    resultsSummary: 'Ví dụ cách LocalMate xử lý: Định danh chuẩn xác hồ sơ Google Maps, khai báo Schema y tế có thẩm quyền và xây dựng Landing Page tốc độ cao với bảng giá rõ ràng giúp cơ sở nha khoa mới giải quyết triệt để bài toán nhận diện địa phương.',
    testimonial: {
      quote: 'Kịch bản mục tiêu: Khi cơ sở y tế cung cấp thông tin minh bạch, có bảng giá rõ ràng và nút liên hệ tiện lợi trên điện thoại, người bệnh quanh khu vực sẽ tin tưởng và chủ động liên hệ đặt lịch.',
      author: 'Mục tiêu giải pháp kịch bản y tế',
      role: 'Định hướng chuẩn hóa dịch vụ phòng khám'
    },

    claimStatus: 'HYPOTHETICAL_SCENARIO',
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'analytics-tracking']
  },
  {
    id: 'tiem-ca-phe-moc-hoi-an',
    slug: 'tiem-ca-phe-moc-hoi-an',
    legacySlugs: ['quan-an-ong-tam-saigon'],
    clientDisplayName: 'Tình Huống Giả Định: Quán Cà Phê & Điểm Ẩm Thực Trong Ngõ',
    clientSubtitle: 'Workflow minh họa: Hệ thống mã QR xin review văn minh & Tối ưu Maps song ngữ',
    anonymized: true,
    industry: 'Cà Phê & Nhà Hàng F&B',
    industryKey: 'nha-hang-cafe',
    location: 'Điểm du lịch / phố cổ (Ví dụ minh họa: Phố Cổ Hội An)',
    heroImage: '/assets/illustrations/mascot-local-map.png',

    scenarioType: 'Tình huống giả định thường gặp',
    workflowTitle: 'Workflow minh họa: Mã QR Review văn minh & Local SEO F&B',
    transparencyNote: 'Lưu ý minh bạch: Đây là kịch bản giả định mô phỏng bài toán quán cà phê, nhà hàng trong ngõ thiếu nhận diện và ít lượt đánh giá, minh họa giải pháp thu thập phản hồi văn minh bằng mã QR và tối ưu Maps song ngữ.',

    // 1. Bối cảnh
    context: 'Một quán cà phê sân vườn có không gian đặc sắc và thức uống thảo mộc thủ công, nằm trong một con ngõ thanh bình gần khu phố du lịch. Thực khách từng ghé đều đánh giá cao, nhưng vì không nằm ở mặt tiền các trục phố lớn nên lượng khách vãng lai tự nhiên vào ban ngày rất khiêm tốn.',

    // 2. Điểm nghẽn
    problem: 'Tình huống thường gặp: Quán chỉ có ít lượt đánh giá cũ trên Google Maps, bị chìm nghỉm giữa hàng chục điểm ăn uống lân cận. Chi phí quảng cáo mạng xã hội kém hiệu quả vì du khách khi đói hoặc mỏi chân chỉ có thói quen mở Google Maps để chọn quán có nhiều đánh giá tích cực.',
    startingState: [
      'Chỉ có ít đánh giá cũ trên Google Maps, chưa có luồng thu thập phản hồi tích cực đều đặn',
      'Du khách tìm kiếm "coffee near me" hay quán cà phê gần đây khó thấy quán xuất hiện',
      'Chạy quảng cáo mạng xã hội tốn kém nhưng tỷ lệ khách thực tế ghé quán rất thấp',
      'Nhân viên chưa có công cụ và kịch bản thuận tiện để khuyến khích khách hàng để lại cảm nhận'
    ],
    bottlenecks: [
      {
        title: 'Hồ sơ Google Maps thiếu tín hiệu uy tín xã hội (Social Proof)',
        desc: 'Hồ sơ bản đồ ít lượt tương tác và đánh giá mới khiến thuật toán tìm kiếm địa phương xem địa điểm này là ít hoạt động.'
      },
      {
        title: 'Thực khách ngại thao tác tìm kiếm tên quán trên điện thoại',
        desc: 'Nhiều khách hàng ưng ý với trải nghiệm nhưng thấy phiền khi phải tự mở ứng dụng, gõ tìm tên quán và thực hiện nhiều bước để đánh giá.'
      },
      {
        title: 'Chi tiêu tiếp thị phân tán vào kênh không đúng thời điểm',
        desc: 'Du khách đưa ra quyết định ghé quán ngay tại khoảnh khắc họ đang dạo phố và cần chỗ dừng chân, chứ không phải lúc đang lướt mạng xã hội ở khách sạn.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Bộ Công Cụ Mã QR Để Bàn Xin Review Văn Minh', serviceSlug: 'google-maps' },
      { serviceName: 'Khôi Phục & Tối Ưu Google Business Profile Song Ngữ', serviceSlug: 'google-maps' },
      { serviceName: 'Thiết Kế Menu Số (Digital Menu) Chuẩn Mobile', serviceSlug: 'website-landing-page' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Bộ Standee Mã QR Thông Minh "1 Chạm Tới Đánh Giá"',
        detail: 'Thiết kế ấn phẩm để bàn nhã nhặn, tích hợp mã QR thông minh có cơ chế deep-link mở thẳng màn hình viết đánh giá trên ứng dụng Google Maps của khách hàng.',
        tag: 'Smart QR Review'
      },
      {
        step: 2,
        title: 'Cơ chế tiếp nhận góp ý 2 tầng văn minh',
        detail: 'Xây dựng luồng quét linh hoạt: Khách hàng hài lòng có thể đánh giá nhanh trên Maps. Khách có điều chưa ưng ý có thể gửi góp ý riêng trực tiếp tới chủ quán để khắc phục kịp thời.',
        tag: 'Sentiment Routing'
      },
      {
        step: 3,
        title: 'Tối ưu hóa hồ sơ Google Maps song ngữ Anh - Việt',
        detail: 'Cập nhật danh mục ẩm thực, hình ảnh món nước chân thực sắc nét và thiết lập menu số hiển thị rõ ràng giá niêm yết bằng cả VNĐ và USD.',
        tag: 'Bilingual SEO'
      },
      {
        step: 4,
        title: 'Chiến lược tập trung vào lưu lượng tìm kiếm hữu cơ',
        detail: 'Dồn nguồn lực xây dựng danh tiếng thực tế từ trải nghiệm khách hàng tại quán thay vì đốt tiền vào quảng cáo thụ động trên mạng xã hội.',
        tag: 'Zero-Ads Strategy'
      }
    ],
    workDone: [
      'Gia công và triển khai bộ ấn phẩm mã QR để bàn bằng chất liệu thẩm mỹ, phù hợp không gian quán',
      'Đào tạo nhân viên phục vụ kịch bản chào mời đánh giá tự nhiên, nhẹ nhàng chỉ mất 15 giây',
      'Tối ưu hóa toàn diện thông tin, menu, danh mục và từ khóa song ngữ Anh - Việt trên Google Maps',
      'Thiết lập hệ thống thông báo khi có đánh giá mới để quản lý gửi lời cảm ơn khách kịp thời'
    ],
    deliverables: [
      'Bộ ấn phẩm mã QR để bàn cao cấp tích hợp luồng điều hướng đánh giá thông minh',
      'Hồ sơ Google Maps chính chủ chuẩn hóa thông tin, hình ảnh và danh mục dịch vụ',
      'Menu số điện tử tải siêu tốc không cần cài ứng dụng, xem trực tiếp qua trình duyệt web',
      'Tài liệu hướng dẫn xử lý khủng hoảng phản hồi tiêu cực một cách văn minh, chuyên nghiệp'
    ],

    period: 'Kế hoạch triển khai mẫu: 5 ngày làm việc',
    roiTimeline: 'Thiết lập quy trình trong 5 ngày, tích lũy lượng đánh giá thật đều đặn theo thời gian',
    evidence: [
      { metric: 'Phương thức xin review', value: 'QR Code 1 Chạm', label: 'Quét tại bàn mở thẳng ứng dụng Maps' },
      { metric: 'Cơ chế phản hồi', value: '2 Tầng Tự Động', label: 'Ý kiến chưa ưng chuyển về Zalo chủ quán' },
      { metric: 'Ngôn ngữ hiển thị', value: 'Song Ngữ Anh-Việt', label: 'Phục vụ cả khách trong nước và quốc tế' },
      { metric: 'Kênh tiếp cận', value: '100% Tự Nhiên', label: 'Tối ưu danh tiếng thực tế, giảm phụ thuộc ads' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Quy trình thu thập ý kiến khách hàng',
        before: 'Thực khách ngại tìm tên quán, hiếm khi để lại đánh giá sau khi dùng nước',
        after: 'Quét mã QR tại bàn dẫn thẳng vào trang đánh giá chỉ mất vài giây thao tác',
        impact: 'Gia tăng tỷ lệ khách hàng vui vẻ để lại lời khen và hình ảnh thực tế'
      },
      {
        metric: 'Khả năng tiếp nhận góp ý chưa hài lòng',
        before: 'Khách bức xúc tự viết bài chê lên mạng xã hội gây ảnh hưởng hình ảnh',
        after: 'Form góp ý nhanh chuyển thẳng về Zalo quản lý để xử lý và xin lỗi kịp thời',
        impact: 'Ngăn ngừa rủi ro khủng hoảng đánh giá xấu trên không gian mạng'
      },
      {
        metric: 'Trải nghiệm của du khách nước ngoài',
        before: 'Menu chỉ có tiếng Việt, du khách gặp khó khăn khi chọn đồ uống',
        after: 'Menu số và hồ sơ Google Maps hỗ trợ song ngữ Anh - Việt trực quan',
        impact: 'Du khách quốc tế tự tin gọi món và dễ dàng giới thiệu cho bạn bè'
      },
      {
        metric: 'Chiến lược phân bổ chi phí tiếp thị',
        before: 'Chạy quảng cáo mạng xã hội dàn trải, không đo lường được hiệu quả',
        after: 'Đầu tư một lần vào hệ thống QR để bàn và tối ưu danh tiếng tự nhiên',
        impact: 'Tiết kiệm chi phí vận hành lâu dài, thương hiệu phát triển bền vững'
      }
    ],

    visualProof: {
      type: 'qr_review',
      badge: 'Minh Họa Hệ Thống Review Thông Minh',
      title: 'Hệ Thống Thu Thập Đánh Giá Tại Bàn Qua Mã QR',
      description: 'Mô phỏng giải pháp standee QR đặt tại bàn kết hợp kịch bản phục vụ chu đáo, giúp khách hàng thuận tiện chia sẻ cảm nhận tích cực và hình ảnh thực tế về không gian quán.',
      highlightMetrics: [
        { label: 'Thao tác quét mã', value: '1 chạm trên điện thoại' },
        { label: 'Điều hướng góp ý', value: 'Tự động phân luồng' },
        { label: 'Hỗ trợ du khách', value: 'Song ngữ Anh - Việt' }
      ]
    },

    resultsSummary: 'Ví dụ cách LocalMate xử lý: Ứng dụng bộ mã QR để bàn thông minh và chuẩn hóa Google Maps song ngữ giúp các cơ sở F&B trong ngõ xây dựng uy tín thực tế từ chính thực khách mà không cần đốt tiền vào quảng cáo.',
    testimonial: {
      quote: 'Kịch bản mục tiêu: Biến trải nghiệm hài lòng của khách hàng tại quán thành sự hiện diện uy tín trên bản đồ bằng một công cụ đơn giản, dễ thao tác và văn minh.',
      author: 'Mục tiêu giải pháp kịch bản F&B',
      role: 'Định hướng phát triển danh tiếng ẩm thực'
    },

    claimStatus: 'HYPOTHETICAL_SCENARIO',
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'content-marketing']
  },
  {
    id: 'gara-o-to-dai-nam',
    slug: 'gara-o-to-dai-nam',
    legacySlugs: ['gara-o-to-autocare-thuduc'],
    clientDisplayName: 'Tình Huống Giả Định: Gara Sửa Chữa & Đội Xe Cứu Hộ 24/7',
    clientSubtitle: 'Workflow minh họa: Trang đích phản ứng nhanh (Call-Only) & Lọc từ khóa khẩn cấp',
    anonymized: true,
    industry: 'Gara Ô Tô & Cứu Hộ',
    industryKey: 'gara-cuu-ho',
    location: 'Trục giao thông huyết mạch (Ví dụ minh họa: TP. Thủ Đức & Bình Dương)',
    heroImage: '/assets/illustrations/pricing-laptop-analytics.png',

    scenarioType: 'Tình huống giả định thường gặp',
    workflowTitle: 'Workflow minh họa: Landing Page Cứu Hộ Khẩn Cấp & Google Ads',
    transparencyNote: 'Lưu ý minh bạch: Đây là kịch bản giả định mô phỏng bài toán dịch vụ cứu hộ khẩn cấp cần tối ưu nút gọi tức thì và lọc từ khóa chính xác, minh họa giải pháp kỹ thuật Mobile-First và quản trị ngân sách quảng cáo không bị click ảo.',

    // 1. Bối cảnh
    context: 'Một gara sửa chữa ô tô có sẵn xe cứu hộ cẩu kéo chuyên dụng cùng xưởng sửa chữa trang bị cầu nâng và máy đọc lỗi. Đội ngũ thợ túc trực sẵn sàng hỗ trợ các phương tiện gặp sự cố chết máy, nổ lốp trên các tuyến đường huyết mạch.',

    // 2. Điểm nghẽn
    problem: 'Tình huống thường gặp: Tài xế gặp nạn giữa đường cần gọi cứu hộ ngay lập tức, nhưng trang web cũ của gara quá dài dòng, nút gọi hotline khó tìm trên di động. Chiến dịch quảng cáo cài từ khóa quá rộng khiến ngân sách tiêu hao nhanh mà không nhận được cuộc gọi kéo xe nào.',
    startingState: [
      'Trang web cũ chứa bài viết giới thiệu chung chung, số điện thoại để ở chân trang mờ nhạt khó bấm',
      'Chiến dịch quảng cáo chạy từ khóa quá rộng như "sửa xe", "phụ tùng", tốn tiền bấm nhưng không có cuộc gọi cứu hộ',
      'Xe cứu hộ ít có việc chạy trong tuần vì người gặp sự cố không tìm thấy số liên hệ kịp thời',
      'Không phân loại được cuộc gọi nào đến từ quảng cáo và cuộc gọi nào từ khách vãng lai'
    ],
    bottlenecks: [
      {
        title: 'Tâm lý khẩn cấp của tài xế cần nút gọi ngay trong 2 giây',
        desc: 'Khi xe chết máy giữa đường cao tốc, tài xế không có thời gian đọc bài viết hay điền form đăng ký. Giao diện tải chậm hoặc nút bấm khó thao tác sẽ khiến họ lập tức bấm số điện thoại khác.'
      },
      {
        title: 'Lãng phí ngân sách vào các truy vấn tìm kiếm không cấp bách',
        desc: 'Các từ khóa chung chung có giá thầu đắt đỏ nhưng không tạo ra nhu cầu kéo xe khẩn cấp.'
      },
      {
        title: 'Thiếu định vị bán kính phục vụ phản ứng nhanh',
        desc: 'Quảng cáo phân bổ ra toàn tỉnh/thành phố trong khi năng lực ứng cứu hiệu quả nhất chỉ trong vòng bán kính 10-15km để đảm bảo thời gian tiếp cận phương tiện nhanh chóng.'
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
        title: 'Thiết kế trang đích phản ứng nhanh (Tải < 0.6s)',
        detail: 'Cấu trúc cô đọng: Tiêu đề khẩn cấp "XE GẶP SỰ CỐ? ĐỘI CỨU HỘ SẴN SÀNG CÓ MẶT", kèm nút "GỌI CỨU HỘ NGAY 24/7" kích thước lớn, dính cố định chân màn hình điện thoại.',
        tag: 'Emergency UI'
      },
      {
        step: 2,
        title: 'Cụm chiến dịch Google Search Ads tập trung 100% từ khóa khẩn cấp',
        detail: 'Cấu hình danh mục từ khóa có tính cấp bách cao: "cứu hộ ô tô gần đây", "xe kéo ô tô khẩn cấp", "kích bình ắc quy lưu động".',
        tag: 'High-Intent Ads'
      },
      {
        step: 3,
        title: 'Bộ lọc 250+ từ khóa phủ định loại bỏ click rác',
        detail: 'Phủ định triệt để các truy vấn tiêu tốn ngân sách: "video xe ô tô", "game cứu hộ", "học nghề sửa xe", "tự sửa xe tại nhà", "giá xe mới".',
        tag: 'Negative Filtering'
      },
      {
        step: 4,
        title: 'Cấu hình tiện ích cuộc gọi Call Extension & Tracking',
        detail: 'Tích hợp số hotline trực tiếp trên mẫu quảng cáo để tài xế có thể bấm gọi ngay từ trang tìm kiếm mà không bắt buộc phải chờ tải trang.',
        tag: 'Call-Only Ads'
      }
    ],
    workDone: [
      'Thiết kế và triển khai Landing Page cứu hộ ô tô tối ưu tải trang cực nhanh trên sóng di động 3G/4G yếu',
      'Tái cấu trúc tài khoản quảng cáo tìm kiếm, chia tách nhóm chiến dịch theo từng tuyến đường và bán kính phục vụ',
      'Gắn mã theo dõi chuyển đổi cuộc gọi trực tiếp từ điện thoại vào hệ thống đo lường',
      'Điều chỉnh lịch hiển thị chiến dịch: Đẩy mạnh hiển thị vào các khung giờ đêm và giờ cao điểm giao thông'
    ],
    deliverables: [
      'Trang đích cứu hộ ô tô tốc độ cao chuẩn chuyển đổi cuộc gọi khẩn cấp',
      'Chiến dịch Google Search Ads nhắm mục tiêu chuẩn bán kính quanh vị trí gara',
      'Bảng theo dõi số lượng cuộc gọi phát sinh theo thời gian thực',
      'Quy trình tiếp nhận và phân luồng thông tin khẩn cấp về điện thoại của thợ trực'
    ],

    period: 'Kế hoạch triển khai mẫu: 4 ngày làm việc',
    roiTimeline: 'Hoàn thiện hạ tầng trong 4 ngày, theo dõi lưu lượng cuộc gọi phát sinh theo tuần',
    evidence: [
      { metric: 'Tốc độ trang đích', value: '< 0.6 Giây', label: 'Tối ưu tải tức thì trên mạng di động 4G' },
      { metric: 'Nút gọi cứu hộ', value: 'Cố Định 100%', label: 'Dính đáy màn hình, bấm gọi trong 1 chạm' },
      { metric: 'Bộ lọc phủ định', value: '250+ Từ Khóa', label: 'Loại bỏ hoàn toàn tìm kiếm rác' },
      { metric: 'Bán kính chiến dịch', value: '10km Trọng Tâm', label: 'Đảm bảo thời gian di chuyển ứng cứu nhanh' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Thao tác liên hệ của người gặp sự cố',
        before: 'Website dài dòng, phải cuộn tìm số hotline ở chân trang',
        after: 'Nút gọi nổi bật dính sát đáy màn hình, bấm gọi ngay trong 1 chạm',
        impact: 'Giảm thiểu tỷ lệ người dùng thoát trang vì không tìm thấy số liên hệ'
      },
      {
        metric: 'Chất lượng truy vấn tìm kiếm nhận được',
        before: 'Quảng cáo cắn tiền vì các từ khóa rộng không liên quan đến cứu hộ',
        after: '100% lượt bấm đến từ các từ khóa khẩn cấp có nhu cầu kéo xe thật',
        impact: 'Ngân sách quảng cáo được sử dụng đúng mục đích, giảm lãng phí'
      },
      {
        metric: 'Bán kính tiếp nhận yêu cầu dịch vụ',
        before: 'Hiển thị dàn trải toàn thành phố khiến thợ không thể đến kịp',
        after: 'Giới hạn bán kính trong vùng gara có thể tiếp cận trong 15-30 phút',
        impact: 'Nâng cao chất lượng phục vụ và uy tín xử lý sự cố kịp thời'
      },
      {
        metric: 'Khả năng đo lường dữ liệu chiến dịch',
        before: 'Không biết cuộc gọi nào đến từ quảng cáo và cuộc nào là khách cũ',
        after: 'Ghi nhận chính xác số cuộc gọi tạo ra từ từng cụm từ khóa',
        impact: 'Dễ dàng tối ưu và phân bổ ngân sách cho các khung giờ hiệu quả'
      }
    ],

    visualProof: {
      type: 'emergency_call',
      badge: 'Minh Họa Giao Diện Khẩn Cấp',
      title: 'Thiết Kế Trang Đích Phản Ứng Nhanh Cho Dịch Vụ Cấp Thiết',
      description: 'Mô phỏng cấu trúc Landing Page chuyên biệt cho dịch vụ cứu hộ: tốc độ tải trang tối ưu, nút bấm gọi hotline dính đáy màn hình và thông điệp minh bạch về giá kéo xe.',
      highlightMetrics: [
        { label: 'Tốc độ tải trang', value: '< 0.6s' },
        { label: 'Vị trí nút gọi', value: 'Cố định chân màn hình' },
        { label: 'Bộ lọc click rác', value: 'Chặt chẽ' }
      ]
    },

    resultsSummary: 'Ví dụ cách LocalMate xử lý: Thiết kế trang đích cứu hộ khẩn cấp với nút gọi một chạm kết hợp chiến dịch Google Search Ads lọc sạch click rác giúp gara tiếp nhận đúng khách hàng gặp sự cố trong khu vực phục vụ.',
    testimonial: {
      quote: 'Kịch bản mục tiêu: Đối với các dịch vụ cứu hộ khẩn cấp, sự đơn giản và tốc độ là yếu tố quyết định. Nút gọi rõ ràng và đúng thời điểm sẽ kết nối người gặp nạn với đội cứu trợ nhanh nhất.',
      author: 'Mục tiêu giải pháp kịch bản cứu hộ',
      role: 'Định hướng tối ưu chuyển đổi khẩn cấp'
    },

    claimStatus: 'HYPOTHETICAL_SCENARIO',
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'analytics-tracking']
  },
  {
    id: 'thiet-bi-am-thanh-dien-tu',
    slug: 'thiet-bi-am-thanh-dien-tu',
    legacySlugs: ['nha-thau-nhom-kinh-binh-duong'],
    clientDisplayName: 'Tình Huống Giả Định: Showroom Phân Phối Thiết Bị Âm Thanh',
    clientSubtitle: 'Workflow minh họa: Khắc phục lỗi chính sách tài khoản & Đồng bộ Google Merchant',
    anonymized: true,
    industry: 'Thiết Bị Âm Thanh & Điện Tử',
    industryKey: 'dien-tu-showroom',
    location: 'Trung tâm bán lẻ (Ví dụ minh họa: Quận Đống Đa, Hà Nội)',
    heroImage: '/assets/illustrations/mascot-ga4-gtm-ads.png',

    scenarioType: 'Tình huống giả định thường gặp',
    workflowTitle: 'Workflow minh họa: Xử lý vi phạm chính sách & Google Shopping',
    transparencyNote: 'Lưu ý minh bạch: Đây là kịch bản giả định mô phỏng bài toán showroom điện tử gặp sự cố chính sách nhãn hiệu quảng cáo và giải pháp chuẩn hóa nguồn cấp dữ liệu sản phẩm lên Google Merchant Center.',

    // 1. Bối cảnh
    context: 'Một cửa hàng phân phối dàn âm thanh, loa nghe nhạc và micro chính hãng có phòng trải nghiệm cách âm chuyên nghiệp. Đặc thù của ngành âm thanh là khách hàng muốn nghe thử chất âm và so sánh thông số trước khi đưa ra quyết định mua sắm giá trị cao.',

    // 2. Điểm nghẽn
    problem: 'Tình huống thường gặp: Tài khoản quảng cáo bị tạm ngưng do vi phạm chính sách nhãn hiệu khi nhắc đến tên các thương hiệu lớn. Cửa hàng gặp khó khăn trong việc tiếp cận khách hàng trực tuyến và chưa khai thác kênh Google Shopping hiển thị sản phẩm trực quan.',
    startingState: [
      'Tài khoản quảng cáo bị cảnh báo hoặc tạm ngưng vì lỗi chính sách nhãn hiệu khi đăng tải tên hãng',
      'Kháng nghị qua các mẫu văn bản tự động chưa đáp ứng yêu cầu thẩm định của nền tảng',
      'Khách hàng mua thiết bị âm thanh e ngại mua online nếu không có điểm trải nghiệm thực tế',
      'Chưa chuẩn hóa nguồn cấp dữ liệu sản phẩm (Product Feed) để hiển thị trên Google Shopping'
    ],
    bottlenecks: [
      {
        title: 'Thiếu hồ sơ ủy quyền và chứng từ nguồn gốc rõ ràng',
        desc: 'Các nền tảng công nghệ kiểm duyệt tự động rất nghiêm ngặt đối với sản phẩm có thương hiệu nếu người bán không cung cấp đủ hợp đồng đại lý, hóa đơn và văn bản chứng minh tính chính hãng.'
      },
      {
        title: 'Sản phẩm âm thanh đòi hỏi trải nghiệm nghe nhìn thực tế',
        desc: 'Nếu chỉ bán hàng trực tuyến đơn thuần mà không có điểm thử máy thì khách hàng khó đưa ra quyết định mua các bộ dàn cao cấp.'
      },
      {
        title: 'Bỏ quên kênh Google Shopping hiển thị thông số và giá niêm yết',
        desc: 'Người tiêu dùng tìm kiếm model sản phẩm có xu hướng so sánh hình ảnh, thông số kỹ thuật và giá bán ngay trên khung kết quả mua sắm của Google.'
      }
    ],

    servicesUsed: [
      { serviceName: 'Kháng Cáo Tài Khoản & Chuẩn Hóa Chính Sách Quảng Cáo', serviceSlug: 'google-ads' },
      { serviceName: 'Triển Khai Google Merchant Center & Google Shopping', serviceSlug: 'google-ads' },
      { serviceName: 'Chiến Dịch Bản Đồ Kéo Khách Trải Nghiệm Showroom', serviceSlug: 'google-maps' }
    ],

    // 3. Giải pháp kỹ thuật LocalMate thực hiện
    technicalSolutions: [
      {
        step: 1,
        title: 'Chuẩn bị hồ sơ minh bạch & Kháng nghị chính sách White-Hat',
        detail: 'Rà soát hợp đồng phân phối, hóa đơn chứng từ và thư ủy quyền từ nhà phân phối chính thức; lập hồ sơ giải trình kỹ thuật gửi trực tiếp bộ phận kiểm duyệt chính sách.',
        tag: 'Policy Clearance'
      },
      {
        step: 2,
        title: 'Thiết lập nguồn dữ liệu chuẩn Google Merchant Center',
        detail: 'Chuẩn hóa Product Feed cho danh mục sản phẩm âm thanh: mã GTIN chuẩn, thông số kỹ thuật, tình trạng tồn kho, chính sách bảo hành và đổi trả rõ ràng.',
        tag: 'Google Shopping'
      },
      {
        step: 3,
        title: 'Tích hợp tính năng đặt lịch trải nghiệm phòng nghe thử',
        detail: 'Bổ sung nút "Đặt Lịch Nghe Thử Tại Showroom" trên website, cho phép khách hàng chọn khung giờ và model loa muốn trải nghiệm trước khi tới.',
        tag: 'Store Visits'
      },
      {
        step: 4,
        title: 'Tối ưu Google Maps Showroom & Hình ảnh thực tế',
        detail: 'Cập nhật bộ ảnh phòng thử âm thanh cách âm, địa chỉ có chỗ đậu xe và lịch mở cửa showroom phục vụ khách trải nghiệm.',
        tag: 'Maps Showroom'
      }
    ],
    workDone: [
      'Rà soát và xử lý các nội dung vi phạm chính sách nhãn hiệu trên trang đích và tài khoản',
      'Đồng bộ dữ liệu sản phẩm, giá bán và tình trạng tồn kho giữa website và Google Merchant Center',
      'Cấu hình chiến dịch Google Shopping tối ưu hiển thị danh mục sản phẩm chủ lực',
      'Tối ưu hồ sơ bản đồ showroom hỗ trợ khách hàng tìm đường đến trải nghiệm trực tiếp'
    ],
    deliverables: [
      'Tài khoản quảng cáo hoạt động ổn định, tuân thủ đúng chính sách của nền tảng',
      'Hệ thống Google Shopping hiển thị danh mục sản phẩm có giá và đánh giá minh bạch',
      'Hồ sơ Google Maps showroom thu hút khách hàng đến trải nghiệm phòng nghe thử',
      'Quy trình chuẩn bị hồ sơ chứng từ để phòng tránh nguy cơ gián đoạn tài khoản trong tương lai'
    ],

    period: 'Kế hoạch triển khai mẫu: 6 ngày làm việc',
    roiTimeline: 'Xử lý hồ sơ trong 3-5 ngày, đồng bộ nguồn cấp dữ liệu sản phẩm và vận hành chiến dịch',
    evidence: [
      { metric: 'Hồ sơ chính sách', value: 'Chuẩn White-Hat', label: 'Minh bạch chứng từ đại lý và nguồn gốc hàng' },
      { metric: 'Google Merchant', value: 'Đồng Bộ Feed', label: 'Chuẩn hóa mã GTIN và thông số sản phẩm' },
      { metric: 'Trải nghiệm tại tiệm', value: 'Book Lịch Demo', label: 'Đặt trước phòng nghe thử cách âm' },
      { metric: 'Hiển thị mua sắm', value: 'Google Shopping', label: 'Hiển thị ảnh sản phẩm kèm giá niêm yết' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Trạng thái tuân thủ chính sách quảng cáo',
        before: 'Tài khoản thường xuyên bị cảnh báo hoặc gián đoạn do lỗi nhãn hiệu',
        after: 'Chuẩn hóa toàn diện hồ sơ chứng từ đại lý, tuân thủ chính sách nền tảng',
        impact: 'Kênh tiếp cận khách hàng trực tuyến hoạt động ổn định, không bị đứt gãy'
      },
      {
        metric: 'Hình thức hiển thị sản phẩm trên Google',
        before: 'Chỉ hiển thị liên kết văn bản đơn điệu, khách hàng khó hình dung mẫu mã',
        after: 'Hiển thị thẻ Google Shopping trực quan với hình ảnh, giá và thông số',
        impact: 'Người mua dễ dàng so sánh và chọn đúng model phù hợp với nhu cầu'
      },
      {
        metric: 'Cầu nối giữa trải nghiệm online và offline',
        before: 'Khách xem trên mạng rồi bỏ đi vì chưa được nghe thử chất âm',
        after: 'Website có tính năng đặt lịch ghé showroom nghe thử tại phòng cách âm',
        impact: 'Tăng lượng khách hàng tiềm năng đến trực tiếp cửa hàng trải nghiệm'
      },
      {
        metric: 'Hệ thống quản lý nguồn dữ liệu sản phẩm',
        before: 'Giá bán và tình trạng tồn kho phải cập nhật thủ công rời rạc',
        after: 'Tự động đồng bộ nguồn dữ liệu giữa website và Merchant Center',
        impact: 'Giảm thiểu sai lệch giá bán và tình trạng hết hàng trên quảng cáo'
      }
    ],

    visualProof: {
      type: 'merchant_shopping',
      badge: 'Minh Họa Google Merchant & Shopping',
      title: 'Đồng Bộ Nguồn Dữ Liệu Sản Phẩm Chuẩn Google Shopping',
      description: 'Mô phỏng quy trình cấp dữ liệu sản phẩm chuẩn mực: đầy đủ mã định danh, tình trạng hàng hóa, chính sách bảo hành và tích hợp tính năng đặt lịch trải nghiệm thực tế.',
      highlightMetrics: [
        { label: 'Chuẩn hóa dữ liệu', value: 'Mã GTIN đầy đủ' },
        { label: 'Kênh hiển thị', value: 'Google Shopping' },
        { label: 'Trải nghiệm offline', value: 'Hẹn lịch demo' }
      ]
    },

    resultsSummary: 'Ví dụ cách LocalMate xử lý: Chuẩn hóa hồ sơ đại lý tuân thủ chính sách, đồng bộ nguồn dữ liệu sản phẩm lên Google Shopping và xây dựng luồng đặt lịch nghe thử tại showroom giúp giải quyết triệt để rào cản tâm lý của người mua hàng điện tử.',
    testimonial: {
      quote: 'Kịch bản mục tiêu: Minh bạch về nguồn gốc hàng hóa và tạo điều kiện thuận lợi nhất để khách hàng trải nghiệm sản phẩm thực tế là chìa khóa bền vững cho các showroom bán lẻ.',
      author: 'Mục tiêu giải pháp kịch bản bán lẻ',
      role: 'Định hướng đồng bộ trải nghiệm mua sắm'
    },

    claimStatus: 'HYPOTHETICAL_SCENARIO',
    relatedServiceSlugs: ['google-ads', 'google-maps', 'analytics-tracking']
  },
  {
    id: 'sua-chua-dien-lanh-tai-nha',
    slug: 'sua-chua-dien-lanh-tai-nha',
    legacySlugs: ['mam-non-tu-thuc-tphcm', 'tiem-banh-tiem-hoa-an-nhien'],
    clientDisplayName: 'Tình Huống Giả Định: Mạng Lưới Sửa Chữa Điện Lạnh Tại Nhà',
    clientSubtitle: 'Workflow minh họa: Sales Hub công khai bảng giá & Tem bảo hành điện tử QR',
    anonymized: true,
    industry: 'Điện Lạnh & Kỹ Thuật Tại Nhà',
    industryKey: 'dien-lanh-dich-vu',
    location: 'Khu dân cư & Cụm chung cư đô thị (Ví dụ minh họa: TP. Hà Nội)',
    heroImage: '/assets/illustrations/roadmap-flag-path.png',

    scenarioType: 'Tình huống giả định thường gặp',
    workflowTitle: 'Workflow minh họa: Sales Hub Bảng Giá Công Khai & Bảo Hành QR',
    transparencyNote: 'Lưu ý minh bạch: Đây là kịch bản giả định mô phỏng bài toán dịch vụ kỹ thuật tại nhà bị khách hàng e ngại về phụ phí và báo giá mập mờ, minh họa giải pháp công khai bảng giá trên trang web và quản lý bảo hành bằng mã QR.',

    // 1. Bối cảnh
    context: 'Một đội ngũ kỹ thuật chuyên cung cấp dịch vụ bảo dưỡng, sửa chữa điều hòa, máy giặt, tủ lạnh tại các khu dân cư và tòa nhà chung cư. Tay nghề thợ vững vàng, tuy nhiên ngành dịch vụ tại nhà thường gặp trở ngại do tâm lý e ngại bị "chặt chém" hoặc báo phát sinh phụ phí vô lý.',

    // 2. Điểm nghẽn
    problem: 'Tình huống thường gặp: Khách hàng có tâm lý phòng thủ cao, khi gọi hỏi giá thường e ngại thợ đến nhà sẽ nói một đằng làm một nẻo. Việc thiếu bảng giá niêm yết công khai và thiếu quy trình bảo hành lưu vết khiến khách hàng chần chừ đưa ra quyết định.',
    startingState: [
      'Chưa có bảng giá niêm yết chuẩn mực trên web, khách hỏi giá qua điện thoại thì mỗi thợ giải thích một kiểu',
      'Tỷ lệ khách hàng e ngại từ chối ngay sau bước hỏi giá sơ bộ khá cao',
      'Phiếu bảo hành bằng giấy dễ thất lạc, khách hàng lo lắng khi có sự cố sau khi sửa xong',
      'Phụ thuộc vào các bài đăng nhóm chung cư mạng xã hội với sự cạnh tranh phá giá phức tạp'
    ],
    bottlenecks: [
      {
        title: 'Nỗi sợ phát sinh chi phí mập mờ là rào cản lớn nhất',
        desc: 'Khách hàng ngại gọi thợ lạ trên mạng vì lo sợ hiện tượng "vẽ bệnh" hoặc thu tiền công không đúng với thực tế hư hỏng.'
      },
      {
        title: 'Thiếu công cụ tra cứu mã lỗi và biểu phí chuẩn trực tuyến',
        desc: 'Không có hệ thống công khai đơn giá từng loại linh kiện (tụ điều hòa, rơ le, bo mạch) khiến khách hàng cảm thấy thiếu minh bạch.'
      },
      {
        title: 'Không có bằng chứng lưu vết bảo hành điện tử',
        desc: 'Biên lai giấy dễ rách nát hoặc thất lạc khiến gia chủ cảm thấy bất an về dịch vụ hậu mãi sau khi thợ rời khỏi nhà.'
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
        title: 'Xây dựng Sales Hub tra cứu bảng giá điện lạnh công khai',
        detail: 'Phân loại chi tiết bảng giá theo từng mã lỗi cụ thể (Điều hòa: nạp ga, thay tụ, hàn ống; Máy giặt: thay van xả, xử lý bo mạch). Cam kết báo giá trước khi thực hiện, kiểm tra 0đ nếu khách không đồng ý làm.',
        tag: 'Sales Hub Pricing'
      },
      {
        step: 2,
        title: 'Triển khai Tem Bảo Hành Điện Tử QR Code',
        detail: 'Mỗi thiết bị sau khi bảo dưỡng, sửa chữa được dán tem QR. Gia chủ chỉ cần quét mã bằng điện thoại là xem được ngày làm, hạng mục linh kiện thay thế và thời hạn bảo hành rõ ràng.',
        tag: 'E-Warranty QR'
      },
      {
        step: 3,
        title: 'Giao diện đặt lịch chọn khung giờ hẹn linh hoạt',
        detail: 'Giao diện trên điện thoại cho phép gia chủ chọn loại máy, mô tả hiện tượng và khung giờ thuận tiện để thợ có mặt, tự động chuyển thông tin về Zalo điều phối.',
        tag: 'Smart Dispatch'
      },
      {
        step: 4,
        title: 'Chiến dịch từ khóa sự cố thiết bị nhắm đúng khu dân cư',
        detail: 'Cấu hình từ khóa gắn liền với các mã lỗi sự cố phổ biến của thiết bị, tập trung theo khu vực cụm tòa nhà và khu đô thị lân cận.',
        tag: 'Troubleshooting Ads'
      }
    ],
    workDone: [
      'Xây dựng hệ thống Sales Hub Bảng Giá Niêm Yết với công cụ ước tính chi phí sửa chữa dự toán',
      'Thiết lập giải pháp bảo hành điện tử qua quét mã QR dán trên thân thiết bị',
      'Đào tạo đội ngũ thợ quy trình gửi liên kết bảng giá chính thức cho khách xem trước khi nhận việc',
      'Tích hợp luồng tiếp nhận phản hồi và đánh giá thái độ phục vụ của thợ sau khi hoàn tất công việc'
    ],
    deliverables: [
      'Website Sales Hub bảng giá chuẩn mực có công cụ tra cứu mã lỗi thông minh',
      'Quy trình quản lý tem bảo hành điện tử QR Code lưu vết lịch sử dịch vụ',
      'Chiến dịch Google Search Ads nhắm mục tiêu khu vực dân cư trọng điểm',
      'Bộ tài liệu quy trình giao tiếp chuẩn mực, văn minh dành cho thợ kỹ thuật'
    ],

    period: 'Kế hoạch triển khai mẫu: 5 ngày làm việc',
    roiTimeline: 'Hoàn thiện hệ thống bảng giá và tem QR trong 5 ngày, vận hành luồng đặt hẹn minh bạch',
    evidence: [
      { metric: 'Bảng giá niêm yết', value: '100% Công Khai', label: 'Chi tiết linh kiện và tiền công từng mã lỗi' },
      { metric: 'Bảo hành điện tử', value: 'QR Code Số', label: 'Lưu vết thợ sửa và thời hạn bảo hành minh bạch' },
      { metric: 'Đặt hẹn trực tuyến', value: 'Khung Giờ Rõ', label: 'Chọn loại máy và mô tả lỗi trước khi thợ đến' },
      { metric: 'Cam kết dịch vụ', value: 'Báo Giá Trước', label: 'Khách duyệt giá mới làm, không lo phụ phí' }
    ],

    // 4. Kết quả Before / After
    beforeAfterComparison: [
      {
        metric: 'Tính minh bạch về giá dịch vụ',
        before: 'Báo giá qua điện thoại mập mờ, mỗi thợ giải thích một kiểu',
        after: 'Gửi link bảng giá niêm yết trên web rõ ràng chi tiết từng linh kiện',
        impact: 'Xóa bỏ hoàn toàn tâm lý e ngại bị kê giá của khách hàng'
      },
      {
        metric: 'Quy trình nghiệm thu và bảo hành',
        before: 'Phiếu bảo hành bằng giấy dễ rách nát, khách hàng sợ mất liên lạc',
        after: 'Tem bảo hành QR dán trên thân máy, quét là thấy thời hạn và lịch sử sửa',
        impact: 'Gia chủ an tâm tuyệt đối về trách nhiệm hậu mãi lâu dài'
      },
      {
        metric: 'Thao tác đặt lịch hẹn dịch vụ',
        before: 'Phải gọi điện mô tả dài dòng, dễ nhầm lẫn địa chỉ và giờ giấc',
        after: 'Form chọn giờ hẹn trên di động, hệ thống điều phối thợ gần nhất',
        impact: 'Thợ có mặt đúng giờ, quản lý nắm rõ tiến độ từng đơn hàng'
      },
      {
        metric: 'Mối quan hệ lâu dài với khách hàng',
        before: 'Sửa xong một lần rồi đứt đoạn liên lạc, khách không nhớ tên',
        after: 'Tem QR lưu lại số liên hệ chính thức, khách dễ dàng gọi lại khi cần bảo dưỡng',
        impact: 'Xây dựng tệp khách hàng quen thuộc định kỳ tại các tòa chung cư'
      }
    ],

    visualProof: {
      type: 'transparent_pricing',
      badge: 'Minh Họa Bảng Giá & Tem QR',
      title: 'Sales Hub Tra Cứu Biểu Phí & Tem Bảo Hành QR Điện Tử',
      description: 'Mô phỏng giải pháp công khai biểu phí sửa chữa linh kiện kết hợp dán tem bảo hành điện tử QR, giúp tạo dựng niềm tin vững chắc và nâng cao uy tín cho các đội thợ kỹ thuật tại nhà.',
      highlightMetrics: [
        { label: 'Niêm yết giá', value: 'Rõ ràng từng mã lỗi' },
        { label: 'Tem bảo hành', value: 'Quét mã QR di động' },
        { label: 'Báo giá', value: 'Trước khi thực hiện' }
      ]
    },

    resultsSummary: 'Ví dụ cách LocalMate xử lý: Xây dựng bảng giá công khai trên Sales Hub và triển khai tem bảo hành điện tử QR Code giúp các đơn vị kỹ thuật tại nhà xóa bỏ nỗi lo chặt chém và xây dựng lòng tin vững chắc với gia chủ.',
    testimonial: {
      quote: 'Kịch bản mục tiêu: Minh bạch và tử tế là cách duy nhất để dịch vụ kỹ thuật tại nhà tồn tại lâu dài. Khách hàng thấy giá rõ ràng đến từng chi tiết và có tem bảo hành lưu vết thì họ sẽ an tâm hợp tác.',
      author: 'Mục tiêu giải pháp kịch bản dịch vụ tại nhà',
      role: 'Định hướng chuẩn hóa dịch vụ kỹ thuật'
    },

    claimStatus: 'HYPOTHETICAL_SCENARIO',
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
