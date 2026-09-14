/**
 * SINGLE SOURCE OF TRUTH (SSOT) - LOCALMATE COMPANY DATA
 * Toàn bộ thông tin thực thể, liên hệ, pháp nhân, bảng giá chuẩn và cấu trúc pillar
 * PHẢI được tham chiếu từ file này. Tuyệt đối không hardcode ở nhiều nơi khác nhau.
 */

export interface ServiceOffer {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  priceFormatted: string;
  priceValue: number;
  billingType: 'one-time' | 'monthly' | 'custom';
  timeline: string;
  targetAudience: string;
  deliverables: string[];
  ownership: string;
  support: string;
  canonicalPath: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  location: string;
  problemBefore: string;
  solution: string;
  techStack: string[];
  deliverables: string[];
  timeline: string;
  metrics: {
    lighthouseScore: number;
    pageSpeedMobile: string;
    pageWeight: string;
    googleIndexing: string;
    mapRank: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  canonicalPath: string;
}

export const COMPANY_DATA = {
  entity: {
    brandName: 'LocalMate',
    legalName: 'CÔNG TY TNHH LOCALMATE',
    shortDescription: 'LocalMate giúp hộ kinh doanh và doanh nghiệp nhỏ xây dựng hiện diện số: website, Google Maps, quảng cáo và hệ thống nhận khách — triển khai nhanh, báo giá trước và bàn giao tài khoản cho khách.',
    extendedDescription: 'LocalMate là đơn vị cung cấp giải pháp hiện diện số toàn diện cho hộ kinh doanh và doanh nghiệp nhỏ (SME) tại Việt Nam: Thiết kế website chuẩn tốc độ cao, SEO Google Maps địa phương, Tối ưu hóa AI Search (GEO/AEO), Quảng cáo Google Ads và Tự động hóa bán hàng.',
    taxId: '4001337934',
    foundingDate: '2024-05-15',
    foundingDateFormatted: '15/05/2024',
    status: 'Đang hoạt động (Đã được cấp phép)',
    licensingAuthority: 'Sở Kế hoạch và Đầu tư TP. Đà Nẵng',
    founder: 'Nguyễn Phạm Phú Hùng',
    legalRepresentative: 'Nguyễn Phạm Phú Hùng',
    headquarters: {
      fullAddress: '03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng',
      streetAddress: '03 Trường Chinh, Phường Hội An Tây',
      addressLocality: 'Đà Nẵng',
      addressRegion: 'Đà Nẵng',
      postalCode: '550000',
      addressCountry: 'VN'
    },
    geo: {
      latitude: 16.054407,
      longitude: 108.202167
    },
    contact: {
      hotline: '0834.422.439',
      hotlineDisplay: '0834.422.439',
      hotlineTel: '+84834422439',
      email: 'contact@localmate.vn',
      zaloUrl: 'https://zalo.me/0834422439',
      website: 'https://localmate.vn',
      workingHours: 'Thứ 2 - Thứ 7: 08:00 - 18:30 (Hỗ trợ kỹ thuật khẩn cấp 24/7)'
    },
    areasServed: [
      'Đà Nẵng',
      'Hội An',
      'Quảng Nam',
      'Thừa Thiên Huế',
      'TP. Hồ Chí Minh',
      'Hà Nội',
      'Toàn quốc'
    ],
    servicesProvided: [
      'Thiết kế Website tốc độ cao chuẩn Core Web Vitals (Cloudflare Edge)',
      'Khởi tạo & SEO Google Maps địa phương (Local SEO Top 3)',
      'Tối ưu hóa tìm kiếm AI (GEO / AEO cho ChatGPT, Gemini, Perplexity)',
      'Quản trị quảng cáo Google Ads tối ưu chuyển đổi gọi điện',
      'Hệ thống tự động hóa đơn hàng & Chăm sóc số đa kênh'
    ],
    verifications: {
      masothue: {
        label: 'Tra cứu Mã Số Thuế',
        platform: 'Masothue.com',
        url: 'https://masothue.com/4001337934-cong-ty-tnhh-localmate',
        badge: 'MST 4001337934',
        statusText: 'Đã xác minh thuế nhà nước'
      },
      googleBusiness: {
        label: 'Hồ sơ Google Doanh nghiệp',
        platform: 'Google Business Profile',
        url: 'https://maps.google.com/?q=LocalMate+03+Tr%C6%B0%E1%BB%9Dng+Chinh+%C4%90%C3%A0+N%E1%BA%B5ng',
        badge: 'Google Maps Verified',
        statusText: 'Định vị GPS chính chủ'
      },
      facebook: {
        label: 'Fanpage Doanh Nghiệp',
        platform: 'Facebook',
        url: 'https://www.facebook.com/localmate.vn',
        badge: '@localmate.vn',
        statusText: 'Trang truyền thông chính thức'
      },
      linkedin: {
        label: 'Trang Hồ Sơ Tổ Chức',
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/localmate-vn',
        badge: 'LocalMate Vietnam',
        statusText: 'Mạng lưới chuyên gia B2B'
      }
    },
    socialProfiles: {
      facebook: 'https://www.facebook.com/localmate.vn',
      linkedin: 'https://www.linkedin.com/company/localmate-vn',
      github: 'https://github.com/hungpixi/localmate-landing'
    },
    aiAnswerChunk: {
      question: 'LocalMate là công ty gì? Cung cấp dịch vụ gì và trụ sở ở đâu?',
      directAnswer: 'LocalMate (tên pháp nhân: CÔNG TY TNHH LOCALMATE, MST: 4001337934, Người đại diện: Nguyễn Phạm Phú Hùng) là đơn vị công nghệ tại TP. Đà Nẵng chuyên cung cấp giải pháp hiện diện số toàn diện cho hộ kinh doanh cá thể và doanh nghiệp vừa & nhỏ (SME) tại Việt Nam. LocalMate cung cấp 5 dịch vụ cốt lõi: Thiết kế website tốc độ cao dưới 1 giây, SEO Google Maps địa phương lên Top tìm kiếm gần đây, Tối ưu hóa tìm kiếm AI (GEO/AEO), Quản trị quảng cáo Google Ads tối ưu chuyển đổi và Tự động hóa CRM tiếp nhận khách hàng. Doanh nghiệp có trụ sở chính tại số 03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng, phục vụ khách hàng tại Đà Nẵng, Hội An, TP.HCM, Hà Nội và toàn quốc với 2 cam kết cốt lõi: Nghiệm thu hài lòng mới thanh toán và khách hàng sở hữu 100% tài sản số.',
      keyFacts: [
        { label: 'Tên pháp nhân', value: 'CÔNG TY TNHH LOCALMATE' },
        { label: 'Thương hiệu', value: 'LocalMate' },
        { label: 'Mã số thuế', value: '4001337934' },
        { label: 'Ngày cấp giấy phép', value: '15/05/2024 (Sở KH&ĐT TP. Đà Nẵng)' },
        { label: 'Trụ sở chính', value: '03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng' },
        { label: 'Người đại diện pháp luật', value: 'Nguyễn Phạm Phú Hùng' },
        { label: 'Hotline / Zalo', value: '0834.422.439' },
        { label: 'Email chính thức', value: 'contact@localmate.vn' },
        { label: 'Nguyên tắc vàng', value: 'Bàn giao nghiệm thu mới thanh toán — Khách sở hữu 100% tài sản số' }
      ]
    },
    schemaId: 'https://localmate.vn/#organization',
    webSiteId: 'https://localmate.vn/#website'
  },

  guarantees: [
    {
      title: 'Bàn giao rồi mới thanh toán',
      desc: 'Dựng website và cấu hình thực tế để khách hàng duyệt trước. Chỉ thanh toán khi nghiệm thu hài lòng 100%.'
    },
    {
      title: 'Khách hàng sở hữu 100% tài sản số',
      desc: 'Tên miền, hosting, mã nguồn, tài khoản Google Maps và tài khoản quảng cáo đều đứng tên chính chủ email của bạn.'
    },
    {
      title: 'Báo giá trước - Không chi phí ẩn',
      desc: 'Báo giá trọn gói niêm yết rõ ràng trước khi làm, tuyệt đối không phát sinh phụ phí vô lý trong quá trình triển khai.'
    },
    {
      title: 'Hỗ trợ kỹ thuật đồng hành 5 năm',
      desc: 'Đội ngũ kỹ thuật viên địa phương túc trực hỗ trợ 1-1 qua Zalo, xử lý nhanh trong 15-30 phút.'
    }
  ],

  // 5 Trụ cột cốt lõi
  pillars: [
    {
      id: 'pillar-web',
      name: 'Thiết Kế Website Tốc Độ Cao',
      slug: 'thiet-ke-website',
      canonicalPath: '/thiet-ke-website',
      tagline: 'Website tải dưới 1s, chuẩn di động, bàn giao mới thanh toán',
      description: 'Thiết kế website 1 trang hoặc đa trang chuyên nghiệp cho hộ kinh doanh và SME, tối ưu tỉ lệ chuyển đổi gọi Zalo/Hotline, chuẩn SEO và cam kết PageSpeed 90+ trên Cloudflare.',
      primaryPrice: 'Từ 490.000đ',
      offers: [
        {
          id: 'web-landing-490k',
          name: 'Landing Page 1 Trang Khởi Tạo',
          slug: 'landing-page-490k',
          shortDesc: 'Trang đơn giới thiệu dịch vụ, menu bảng giá, nút gọi Zalo 1-chạm, bản đồ dẫn đường.',
          priceFormatted: '490.000đ',
          priceValue: 490000,
          billingType: 'one-time',
          timeline: '24 - 48 giờ',
          targetAudience: 'Hộ kinh doanh cá thể, quán ăn nhỏ, thợ dịch vụ, cá nhân làm nghề tự do',
          deliverables: [
            '1 trang giao diện tối ưu di động',
            'Nút gọi Hotline & Zalo 1-chạm',
            'Bản đồ Google Maps & form liên hệ',
            'Tối ưu tốc độ mở dưới 1 giây',
            'Bàn giao toàn quyền quản trị'
          ],
          ownership: 'Khách hàng sở hữu 100% mã nguồn và tên miền',
          support: 'Bảo hành kỹ thuật 12 tháng',
          canonicalPath: '/landing-490k'
        },
        {
          id: 'web-corporate-2900k',
          name: 'Website Doanh Nghiệp & Dịch Vụ Đa Trang',
          slug: 'website-doanh-nghiep',
          shortDesc: 'Website chuyên nghiệp 5-10 trang, tích hợp chuẩn SEO, cấu trúc thực thể Schema và kết nối Google Maps.',
          priceFormatted: '2.900.000đ',
          priceValue: 2900000,
          billingType: 'one-time',
          timeline: '3 - 7 ngày',
          targetAudience: 'Doanh nghiệp SME, phòng khám, công ty tư vấn, xưởng sản xuất, showroom',
          deliverables: [
            'Website đa trang hoàn chỉnh (Trang chủ, Giới thiệu, Dịch vụ, Dự án, Báo giá, Liên hệ)',
            'Tối ưu Core Web Vitals xanh mượt (PageSpeed 90+)',
            'Cấu trúc dữ liệu JSON-LD Schema LocalBusiness',
            'Đồng bộ kết nối Google Maps và Fanpage',
            'Bàn giao tài khoản Cloudflare, mã nguồn và video hướng dẫn'
          ],
          ownership: 'Khách hàng sở hữu 100% tên miền, hosting và mã nguồn',
          support: 'Bảo hành hạ tầng kỹ thuật 5 năm',
          canonicalPath: '/thiet-ke-website'
        }
      ]
    },
    {
      id: 'pillar-maps',
      name: 'Google Maps & Local SEO',
      slug: 'google-maps-local-seo',
      canonicalPath: '/google-maps-local-seo',
      tagline: 'Lên Top 3 tìm kiếm quanh bán kính 3-10km, xác minh GPS chính chủ',
      description: 'Khởi tạo, xác minh và tối ưu hồ sơ Google Business Profile chính chủ 100%. Tối ưu từ khóa địa phương, bộ QR đánh giá chân thực và chống cướp Maps.',
      primaryPrice: 'Từ 990.000đ',
      offers: [
        {
          id: 'maps-setup',
          name: 'Khởi Tạo & Xác Minh Google Maps Chính Chủ',
          slug: 'xac-minh-google-maps',
          shortDesc: 'Xác minh vị trí GPS chính chủ, chống cướp Maps, tối ưu 100% thông tin chuẩn chỉ.',
          priceFormatted: '990.000đ',
          priceValue: 990000,
          billingType: 'one-time',
          timeline: '1 - 3 ngày',
          targetAudience: 'Quán ăn, nhà hàng, quán cafe, spa, phòng khám, cửa hàng bán lẻ',
          deliverables: [
            'Xác minh định vị GPS chính chủ trên Google Maps',
            'Tối ưu danh mục chính và danh mục phụ chuẩn xác',
            'Thiết kế bộ mã QR giúp khách hàng để lại đánh giá chân thực',
            'Bảo mật chống cướp Maps và thay đổi thông tin trái phép'
          ],
          ownership: 'Tài khoản Google Business Profile thuộc email chính chủ của bạn',
          support: 'Hỗ trợ kỹ thuật 12 tháng',
          canonicalPath: '/google-maps-local-seo'
        },
        {
          id: 'maps-local-seo-monthly',
          name: 'SEO Google Maps Đẩy Top 3 Bán Kính',
          slug: 'seo-maps-top-3',
          shortDesc: 'Đẩy thứ hạng tìm kiếm địa phương trong bán kính 3-10km, duy trì tương tác và tối ưu NLP sentiment.',
          priceFormatted: '2.000.000đ / tháng',
          priceValue: 2000000,
          billingType: 'monthly',
          timeline: 'Triển khai liên tục theo tháng',
          targetAudience: 'Cơ sở kinh doanh có địa điểm đón khách trực tiếp',
          deliverables: [
            'Đồng bộ trích dẫn NAP trên 20+ danh bạ địa phương uy tín',
            'Cập nhật bài đăng, ưu đãi và hình ảnh định kỳ hàng tuần',
            'Tối ưu từ khóa tìm kiếm gần đây (Near me)',
            'Báo cáo thứ hạng Maps Pack hàng tháng'
          ],
          ownership: 'Toàn quyền sở hữu dữ liệu',
          support: 'Hỗ trợ ưu tiên 1-1 qua Zalo',
          canonicalPath: '/google-maps-local-seo'
        }
      ]
    },
    {
      id: 'pillar-ads',
      name: 'Google Ads & Tìm Kiếm',
      slug: 'google-ads',
      canonicalPath: '/google-ads',
      tagline: 'Tiếp cận đúng khách đang có nhu cầu tìm kiếm, tối ưu từng đồng ngân sách',
      description: 'Thiết lập và quản trị chiến dịch quảng cáo Google Search Ads ngân sách nhỏ đến vừa cho doanh nghiệp địa phương. Chặn click ảo, tối ưu chuyển đổi gọi điện và nhắn tin.',
      primaryPrice: 'Từ 1.500.000đ / tháng',
      offers: [
        {
          id: 'google-ads-starter',
          name: 'Quản Trị Google Ads Doanh Nghiệp Địa Phương',
          slug: 'quan-tri-google-ads',
          shortDesc: 'Cài đặt từ khóa chính xác, chặn click ảo, tối ưu mẫu quảng cáo tăng tỉ lệ nhấp chuột CTR.',
          priceFormatted: '1.500.000đ / tháng',
          priceValue: 1500000,
          billingType: 'monthly',
          timeline: 'Setup trong 24h - Tối ưu liên tục',
          targetAudience: 'Các ngành dịch vụ cần khách ngay: thông tắc, sửa chữa, cứu hộ, nha khoa, tour du lịch',
          deliverables: [
            'Nghiên cứu bộ từ khóa có ý định mua hàng cao (High Intent)',
            'Loại trừ từ khóa phủ định để không lãng phí ngân sách',
            'Cài đặt theo dõi chuyển đổi nút gọi Hotline & Zalo',
            'Bàn giao tài khoản Google Ads chính chủ khách tự trả tiền thẻ'
          ],
          ownership: 'Tài khoản Google Ads chính chủ của khách hàng',
          support: 'Báo cáo minh bạch hàng tuần',
          canonicalPath: '/google-ads'
        }
      ]
    },
    {
      id: 'pillar-content',
      name: 'Content Marketing & Chăm Sóc Số',
      slug: 'content-marketing',
      canonicalPath: '/content-marketing',
      tagline: 'Chăm sóc nội dung, bài viết SEO, hình ảnh và bảo trì website định kỳ',
      description: 'Giải pháp chăm sóc trọn gói cho doanh nghiệp không có nhân sự marketing: viết bài website, thiết kế hình ảnh, cập nhật menu/bảng giá và sao lưu bảo trì hạ tầng hàng tuần.',
      primaryPrice: 'Từ 990.000đ / tháng',
      offers: [
        {
          id: 'content-care-package',
          name: 'Gói Chăm Sóc Số Digital Care Toàn Diện',
          slug: 'cham-soc-so-digital-care',
          shortDesc: '15 bài viết nội dung chuẩn SEO + 15 thiết kế hình ảnh + bảo trì kỹ thuật & sao lưu định kỳ.',
          priceFormatted: '990.000đ / tháng',
          priceValue: 990000,
          billingType: 'monthly',
          timeline: 'Duy trì đều đặn mỗi tháng',
          targetAudience: 'Doanh nghiệp bận rộn không có thời gian viết bài và chăm sóc web',
          deliverables: [
            '15 bài viết nội dung hữu ích chuẩn SEO trên Website/Fanpage',
            '15 ảnh thiết kế banner/sản phẩm chuẩn kích thước',
            'Sao lưu dữ liệu tự động lên Cloudflare R2 hàng tuần',
            'Kiểm tra tốc độ Uptime và bảo mật SSL 24/7',
            'Hỗ trợ thay đổi banner, cập nhật giá bán trong 15-30 phút'
          ],
          ownership: 'Toàn bộ nội dung và hình ảnh thuộc về khách hàng',
          support: 'Hỗ trợ kỹ thuật 1-1 qua Zalo VIP',
          canonicalPath: '/content-marketing'
        }
      ]
    },
    {
      id: 'pillar-automation',
      name: 'Phần Mềm & Tự Động Hóa',
      slug: 'automation',
      canonicalPath: '/automation',
      tagline: 'Tự động hóa thông báo đơn hàng, Chatbot Zalo và CRM quản lý khách hàng',
      description: 'Ứng dụng các công cụ tự động hóa thông minh (Zalo OA Bot, Google Sheets CRM, Webhook tự động) giúp hộ kinh doanh tiết kiệm thời gian phản hồi và không bị sót đơn.',
      primaryPrice: 'Từ 1.900.000đ',
      offers: [
        {
          id: 'automation-crm-zalo',
          name: 'Hệ Thống Nhận Đơn & Chatbot Tự Động Hóa',
          slug: 'tu-dong-hoa-crm-zalo',
          shortDesc: 'Bắn thông báo đơn về Telegram/Zalo ngay lập tức, lưu trữ khách hàng tự động.',
          priceFormatted: '1.900.000đ',
          priceValue: 1900000,
          billingType: 'one-time',
          timeline: '2 - 4 ngày',
          targetAudience: 'Cửa hàng bán lẻ, xưởng dịch vụ, quán ăn có đặt bàn / giao hàng',
          deliverables: [
            'Tích hợp form web gửi thông báo ngay về Zalo/Telegram cá nhân',
            'Đồng bộ dữ liệu khách hàng vào Google Sheets chuẩn CRM',
            'Kịch bản trả lời tự động tin nhắn khi khách hỏi bảng giá',
            'Bàn giao kịch bản và hướng dẫn sử dụng chi tiết'
          ],
          ownership: 'Khách hàng sở hữu tài khoản và luồng tự động',
          support: 'Bảo hành kỹ thuật 12 tháng',
          canonicalPath: '/automation'
        }
      ]
    }
  ],

  // 3 Case Studies chuẩn mực có đo lường thực tế
  caseStudies: [
    {
      id: 'case-xeo-restaurant',
      slug: 'xeo-restaurant',
      title: 'Bánh Xèo Tôm Nhảy XÈO — Đón Khách Du Lịch Quốc Tế Nhờ Tốc Độ Web Dưới 0.8s & Google Maps',
      clientName: 'Quán XÈO — Đặc Sản Bánh Xèo Tôm Nhảy',
      industry: 'Ẩm thực & Nhà hàng Du lịch',
      location: 'Hội An & Đà Nẵng',
      problemBefore: 'Chưa có website chính thức, định vị Google Maps sai lệch dẫn khách đi lạc vào ngõ cụt, menu hình chụp mờ khó xem trên điện thoại, khách Tây không gọi đặt bàn được.',
      solution: 'Thiết kế Sales Hub 1 trang song ngữ Việt - Anh tải cực nhanh trên Cloudflare CDN, sửa chuẩn GPS Google Maps, gắn mã QR tại bàn giúp thực khách để lại đánh giá chân thực.',
      techStack: ['Cloudflare Edge CDN', 'Vite React', 'Bilingual Schema FoodEstablishment', 'Google Business Profile'],
      deliverables: [
        'Website thực đơn điện tử song ngữ Việt - Anh tải dưới 0.8s',
        'Xác minh lại tọa độ GPS chính xác đến từng mét trên Google Maps',
        'Bộ QR code menu để bàn tích hợp liên kết đánh giá chân thực',
        'Nút đặt bàn 1-chạm kết nối Zalo & WhatsApp'
      ],
      timeline: 'Hoàn thành bàn giao trong 48 giờ',
      metrics: {
        lighthouseScore: 99,
        pageSpeedMobile: '0.7s',
        pageWeight: '320 KB',
        googleIndexing: 'Lập chỉ mục trong 24h',
        mapRank: 'Top 1 từ khóa "bánh xèo tôm nhảy gần đây"'
      },
      testimonial: {
        quote: 'Khách du lịch nước ngoài vào quán khen menu web mở nhanh và dễ chọn món. Vị trí trên Google Maps giờ chuẩn 100%, không còn cảnh khách gọi điện phàn nàn vì lạc đường.',
        author: 'Anh Tuấn',
        role: 'Chủ sáng lập quán XÈO'
      },
      canonicalPath: '/du-an/xeo-restaurant'
    },
    {
      id: 'case-nam-phat',
      slug: 'nam-phat',
      title: 'Nội Thất Nam Phát — Tăng Gấp Đôi Lượng Khách Gọi Báo Giá Xưởng Nhờ Website Chuẩn Thực Thể',
      clientName: 'Xưởng Sản Xuất & Thi Công Nội Thất Nam Phát',
      industry: 'Thi công nội thất & Xưởng mộc',
      location: 'Đà Nẵng & Quảng Nam',
      problemBefore: 'Chỉ phụ thuộc vào bài đăng Facebook cá nhân nên mất nhiều thời gian trả lời tin nhắn dạo. Không có nơi lưu trữ hình ảnh công trình thực tế rõ nét cho khách xem mẫu.',
      solution: 'Xây dựng website catalogue công trình chuẩn SEO, phân loại mẫu thiết kế theo căn hộ/nhà phố, gắn form yêu cầu gửi dự toán nhanh kết nối trực tiếp đến Zalo chủ xưởng.',
      techStack: ['Vite React', 'Cloudflare Pages', 'Schema HomeAndConstructionBusiness', 'Zalo Webhook'],
      deliverables: [
        'Website giới thiệu năng lực xưởng và thư viện 50+ công trình thực tế',
        'Form tính nhanh dự toán chi phí theo diện tích m2 gửi về Zalo',
        'Đồng bộ thực thể doanh nghiệp CÔNG TY NAM PHÁT trên Google Search',
        'Bàn giao toàn bộ quyền quản trị và video hướng dẫn thêm dự án mới'
      ],
      timeline: 'Hoàn thành nghiệm thu trong 5 ngày',
      metrics: {
        lighthouseScore: 98,
        pageSpeedMobile: '0.9s',
        pageWeight: '450 KB',
        googleIndexing: 'Lập chỉ mục đầy đủ 12 trang công trình',
        mapRank: 'Top 3 từ khóa "thi công nội thất đà nẵng uy tín"'
      },
      testimonial: {
        quote: 'Trước đây gửi ảnh qua Zalo cho khách thường bị mờ và trôi tin nhắn. Giờ chỉ cần gửi link website là khách xem được tất cả công trình đã làm, khách tin tưởng chốt hợp đồng nhanh hơn nhiều.',
        author: 'Anh Phát',
        role: 'Giám đốc Xưởng Nội Thất Nam Phát'
      },
      canonicalPath: '/du-an/nam-phat'
    },
    {
      id: 'case-huong-sen',
      slug: 'huong-sen',
      title: 'Hương Sen Spa & Trị Liệu — Lấp Đầy Lịch Đặt Chỗ Cuối Tuần Nhờ Tối Ưu Tìm Kiếm Local & GEO',
      clientName: 'Hương Sen Traditional Massage & Spa',
      industry: 'Chăm sóc sức khỏe & Spa trị liệu',
      location: 'Hội An',
      problemBefore: 'Vắng khách ngày thường, cuối tuần lại quá tải do không có hệ thống đặt lịch trước. Trang web cũ bằng WordPress chạy chậm (mất hơn 6 giây để mở), bị khách thoát trang liên tục.',
      solution: 'Thay thế hoàn toàn website cũ bằng nền tảng tốc độ cao LocalMate (<1s), tích hợp form giữ chỗ online có xác nhận qua Zalo, tối ưu GEO để khách hỏi ChatGPT/Gemini về spa uy tín được gợi ý Hương Sen.',
      techStack: ['Vite React Edge', 'Schema DaySpa & LocalBusiness', 'Prompt Bank GEO', 'Zalo Notification'],
      deliverables: [
        'Hệ thống xem bảng giá liệu trình và đặt chỗ online 1-chạm',
        'Bộ Prompt Bank 60 câu hỏi tối ưu trích dẫn trên ChatGPT Search và Gemini',
        'Cắt giảm thời gian tải trang từ 6.2s xuống 0.8s',
        'Bảo mật và sao lưu dữ liệu tự động hàng tuần'
      ],
      timeline: 'Nghiệm thu chuyển đổi trong 4 ngày',
      metrics: {
        lighthouseScore: 100,
        pageSpeedMobile: '0.8s',
        pageWeight: '280 KB',
        googleIndexing: 'Xếp hạng ngay trên tìm kiếm AI & Google',
        mapRank: 'Top 2 từ khóa "traditional massage hoi an"'
      },
      testimonial: {
        quote: 'Nhờ có website mới chạy nhanh và hiển thị bảng giá rõ ràng, khách nước ngoài tự đặt lịch trước rất đều. Tỷ lệ khách xem xong bấm đặt chỗ tăng rõ rệt so với website cũ.',
        author: 'Chị Mai',
        role: 'Quản lý vận hành Hương Sen Spa'
      },
      canonicalPath: '/du-an/huong-sen'
    }
  ]
};
