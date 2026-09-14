export interface CredentialSection {
  id: number;
  title: string;
  shortTitle: string;
  range: [number, number]; // [startSlide, endSlide]
  description: string;
  badge: string;
}

export type SlideLayoutType = 
  | 'cover'
  | 'letter'
  | 'metrics'
  | 'grid4'
  | 'comparison'
  | 'checklist'
  | 'casestudy'
  | 'process'
  | 'table'
  | 'contact'
  | 'pillars';

export interface SlideMetric {
  value: string;
  label: string;
  description?: string;
  highlight?: boolean;
}

export interface SlideCardItem {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  tag?: string;
}

export interface ComparisonRow {
  criteria: string;
  traditional: string;
  localmate: string;
  advantage: string;
}

export interface ChecklistTask {
  id: number;
  category: string;
  task: string;
  standard: string;
  status: 'passed' | 'standard';
}

export interface CaseStudyData {
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string; diff: string }[];
  quote: string;
}

export interface CredentialSlide {
  id: number; // 1 to 40
  sectionId: number; // 1 to 4
  sectionTitle: string;
  slideTag: string;
  title: string;
  subtitle?: string;
  layout: SlideLayoutType;
  
  // Dynamic layout contents
  coverData?: {
    edition: string;
    targetAudience: string;
    tagline: string;
    author: string;
    releaseDate: string;
  };
  letterData?: {
    recipient: string;
    paragraphs: string[];
    signOff: string;
    authorName: string;
    authorRole: string;
    corePledge: string;
  };
  metricsData?: {
    headline: string;
    leftColumn: {
      title: string;
      metrics: SlideMetric[];
    };
    rightColumn: {
      title: string;
      content: string;
      keyPoints: string[];
    };
  };
  grid4Data?: {
    headline?: string;
    cards: SlideCardItem[];
  };
  comparisonData?: {
    headers: [string, string, string, string];
    rows: ComparisonRow[];
    summaryNote?: string;
  };
  checklistData?: {
    phaseName: string;
    totalTasksLabel: string;
    tasks: ChecklistTask[];
  };
  caseStudyData?: CaseStudyData;
  processData?: {
    steps: { stepNumber: string; name: string; duration: string; output: string; desc: string }[];
  };
  contactData?: {
    hotline: string;
    zalo: string;
    email: string;
    address: string;
    mst: string;
    consultOffer: string;
    guarantee: string;
  };
  customDetails?: {
    intro?: string;
    bullets?: string[];
    highlightBox?: { title: string; desc: string };
  };
}

export const CREDENTIAL_SECTIONS: CredentialSection[] = [
  {
    id: 1,
    title: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    shortTitle: '1. Năng Lực & Tầm Nhìn',
    range: [1, 8],
    description: 'Vị thế, triết lý "Chống lãng phí số" và 4 nguyên tắc vàng trong hợp tác số cùng SME',
    badge: 'Tổng Quan & Triết Lý'
  },
  {
    id: 2,
    title: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    shortTitle: '2. 5 Trụ Cột Giải Pháp',
    range: [9, 22],
    description: 'Xây Nền tảng số, Được tìm thấy, Thu hút khách hàng, Vận hành tự động và Đồng hành chăm sóc',
    badge: 'Giải Pháp Chuyên Sâu'
  },
  {
    id: 3,
    title: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    shortTitle: '3. Quy Trình & 35 Task',
    range: [23, 30],
    description: 'Bộ quy chuẩn bàn giao nghiêm ngặt: Kiểm thử hiệu năng, SEO, bảo mật, đo lường chuyển đổi',
    badge: 'Quy Trình & Tiêu Chuẩn'
  },
  {
    id: 4,
    title: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    shortTitle: '4. Case Studies & Kết Nối',
    range: [31, 40],
    description: 'Số liệu tăng trưởng thực tế, đánh giá từ chủ doanh nghiệp đối tác và ưu đãi tư vấn 1:1',
    badge: 'Thực Chứng & Hành Động'
  }
];

export const CREDENTIAL_SLIDES: CredentialSlide[] = [
  // ==========================================
  // PHẦN 1: GIỚI THIỆU & NĂNG LỰC CỐT LÕI (1 - 8)
  // ==========================================
  {
    id: 1,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'BÌA CHÍNH HỒ SƠ',
    title: 'HỒ SƠ NĂNG LỰC & ĐỀ XUẤT GIẢI PHÁP SỐ TOÀN DIỆN 2026',
    subtitle: 'Đối tác công nghệ & tăng trưởng số chuyên biệt cho doanh nghiệp địa phương & SME Việt Nam',
    layout: 'cover',
    coverData: {
      edition: 'Bản Phát Hành 2026 — Dành Riêng Cho Quý Chủ Doanh Nghiệp',
      targetAudience: 'Doanh Nghiệp Dịch Vụ, Hộ Kinh Doanh, Chuỗi Bán Lẻ & Doanh Nghiệp Vừa và Nhỏ (SME)',
      tagline: 'Làm thật — Đo lường thật — Bàn giao rồi mới thanh toán',
      author: 'Đội Ngũ Kiến Trúc Giải Pháp LocalMate',
      releaseDate: 'Tháng 09/2026'
    }
  },
  {
    id: 2,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'THƯ NGỎ TỪ BAN SÁNG LẬP',
    title: 'Kính Gửi Quý Chủ Doanh Nghiệp & Nhà Lãnh Đạo',
    subtitle: 'Lời cam kết chân thành từ đội ngũ sáng lập LocalMate về một giải pháp số thực tế và minh bạch',
    layout: 'letter',
    letterData: {
      recipient: 'Quý Anh/Chị Chủ Doanh Nghiệp,',
      paragraphs: [
        'Trong hơn 5 năm đồng hành cùng hàng trăm doanh nghiệp tại Đà Nẵng, Hà Nội, TP.HCM và các tỉnh thành, chúng tôi chứng kiến một nghịch lý đau lòng: 70% doanh nghiệp nhỏ chi tiền làm website nhưng không có khách hàng, thuê đơn vị chạy quảng cáo bị cạn kiệt ngân sách mà không biết tiền đi đâu, hoặc website bị bỏ hoang nhiều năm vì không có người chăm sóc.',
        'LocalMate ra đời để chấm dứt tình trạng lãng phí ấy. Chúng tôi không phải là một agency bán dịch vụ rời rạc; chúng tôi là Phòng Công Nghệ & Marketing số thuê ngoài của bạn — với một nguyên tắc bất di bất dịch: Bàn giao nghiệm thu hài lòng rồi mới thanh toán.',
        'Hồ sơ này đúc kết toàn bộ phương pháp luận, 5 trụ cột giải pháp và bộ tiêu chuẩn 35 task kiểm thử mà chúng tôi áp dụng cho mọi khách hàng. Rất mong có cơ hội được cùng bạn đồng hành kiến tạo tăng trưởng bền vững.'
      ],
      signOff: 'Trân trọng & Đồng hành,',
      authorName: 'Ban Điều Hành LocalMate Việt Nam',
      authorRole: 'CEO & Trưởng Ban Kiến Trúc Giải Pháp Số',
      corePledge: 'Cam kết minh bạch 100% — Khách hàng nắm toàn quyền sở hữu mã nguồn và tài sản số'
    }
  },
  {
    id: 3,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'TẦM NHÌN & SỨ MỆNH',
    title: 'Tầm Nhìn, Sứ Mệnh & 3 Giá Trị Cốt Lõi',
    subtitle: 'Định vị người đồng hành số tin cậy nhất cho 10.000+ doanh nghiệp nhỏ và vừa tại Việt Nam',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Tầm Nhìn 2030',
          description: 'Trở thành nền tảng giải pháp số địa phương được tin dùng số 1 tại Việt Nam, chuẩn hóa hạ tầng số cho 10.000+ SME.',
          icon: 'Compass',
          tag: 'TẦM NHÌN'
        },
        {
          title: 'Sứ Mệnh Phụng Sự',
          description: 'Giúp mọi chủ doanh nghiệp có được website chuẩn chỉ, xuất hiện vị trí top Google và tự động hóa vận hành với chi phí hợp lý nhất.',
          icon: 'Target',
          tag: 'SỨ MỆNH'
        },
        {
          title: 'Thực Tế & Đo Lường',
          description: 'Nói không với số liệu ảo hay báo cáo rỗng. Mọi chiến dịch đều hướng đến số cuộc gọi, tin nhắn và khách hàng thực tế.',
          icon: 'BarChart3',
          tag: 'GIÁ TRỊ 1'
        },
        {
          title: 'Bàn Giao Trọn Quyền',
          description: '100% tài khoản Google Ads, Analytics, Search Console, Hosting & Tên miền thuộc sở hữu hợp pháp của khách hàng.',
          icon: 'ShieldCheck',
          tag: 'GIÁ TRỊ 2'
        }
      ]
    }
  },
  {
    id: 4,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'QUY MÔ & CHỈ SỐ VẬN HÀNH',
    title: 'Năng Lực Triển Khai & Quy Mô Hoạt Động',
    subtitle: 'Đội ngũ chuyên trách, hạ tầng hiện đại và cam kết SLA phản hồi kỹ thuật dưới 15 phút',
    layout: 'metrics',
    metricsData: {
      headline: 'Hệ thống vận hành số tinh gọn với hiệu suất đã được chứng minh',
      leftColumn: {
        title: 'Chỉ Số Năng Lực Trực Quan',
        metrics: [
          { value: '150+', label: 'Doanh Nghiệp Đồng Hành', description: 'Đang vận hành hệ thống số ổn định mỗi ngày', highlight: true },
          { value: '99.98%', label: 'Uptime Hạ Tầng Cloudflare', description: 'Website tải mượt mà, không gián đoạn kinh doanh' },
          { value: '< 1.2s', label: 'Tốc Độ Tải Trang Trung Bình', description: 'Tối ưu Core Web Vitals chuẩn Google PageSpeed 90+' },
          { value: '15 Phút', label: 'SLA Phản Hồi Kỹ Thuật', description: 'Đội ngũ trực Zalo hỗ trợ giải quyết sự cố tức thì', highlight: true }
        ]
      },
      rightColumn: {
        title: 'Năng Lực Nhân Sự & Công Nghệ',
        content: 'LocalMate kết hợp giữa các kỹ sư lập trình Web thế hệ mới (React, Next.js, Cloudflare Workers) và các chuyên gia tăng trưởng địa phương am hiểu hành vi tiêu dùng từng thị trường.',
        keyPoints: [
          'Đội ngũ Fullstack Web & Cloudflare Serverless chuyên nghiệp',
          'Chuyên viên SEO Local & Quản trị thực thể Google Maps được xác minh',
          'Hệ thống quản lý Lead tự động gửi thông báo qua Zalo/Telegram cá nhân',
          'Đầy đủ pháp nhân Công Ty TNHH LocalMate, MST 4001337934'
        ]
      }
    }
  },
  {
    id: 5,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'TRIẾT LÝ VẬN HÀNH',
    title: 'Triết Lý: "Chống Lãng Phí Số" Cho Doanh Nghiệp Nhỏ',
    subtitle: 'Nhận diện 4 cái bẫy tốn tiền phổ biến nhất khi doanh nghiệp tự làm hoặc thuê đơn vị thiếu tâm',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Cái bẫy 1: Website Bỏ Hoang',
          description: 'Làm web 10-20 triệu xong không ai cập nhật, không có bảo mật, sau 6 tháng bị lỗi hoặc spam rác.',
          icon: 'AlertTriangle',
          tag: 'LÃNG PHÍ HẠ TẦNG'
        },
        {
          title: 'Cái bẫy 2: Quảng Cáo Đốt Tiền',
          description: 'Chạy ads nhưng website tải chậm > 5 giây, tỷ lệ thoát 80%, ngân sách bay mất mà không có cuộc gọi nào.',
          icon: 'Flame',
          tag: 'LÃNG PHÍ NGÂN SÁCH'
        },
        {
          title: 'Cái bẫy 3: Phụ Thuộc Tài Khoản',
          description: 'Nhiều bên giữ quyền admin tên miền, fanpage, tài khoản ads. Khi ngừng hợp tác thì mất sạch dữ liệu.',
          icon: 'Lock',
          tag: 'RỦI RO QUYỀN LỢI'
        },
        {
          title: 'Cái bẫy 4: Báo Cáo Số Ảo',
          description: 'Hàng ngàn lượt hiển thị và tương tác ảo, nhưng cuối tháng doanh thu không tăng, không chốt được đơn.',
          icon: 'EyeOff',
          tag: 'LÃNG PHÍ NIỀM TIN'
        }
      ]
    }
  },
  {
    id: 6,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'NGUYÊN TẮC HỢP TÁC',
    title: '4 Nguyên Tắc Vàng Tạo Nên Sự Khác Biệt Của LocalMate',
    subtitle: 'Bộ quy chuẩn ứng xử và bảo vệ quyền lợi tối đa cho khách hàng trong suốt vòng đời dự án',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: '1. Bàn Giao Xong Mới Thanh Toán',
          description: 'Khách hàng duyệt thiết kế, kiểm thử đầy đủ tính năng trên môi trường thực tế mới phải thanh toán tiền.',
          icon: 'CheckCircle2',
          tag: 'CAM KẾT TÀI CHÍNH'
        },
        {
          title: '2. 100% Sở Hữu & Minh Bạch',
          description: 'Bàn giao trọn gói mã nguồn, tài khoản quản trị, DNS tên miền. Không cài cắm mã độc hay thu phí gia hạn ẩn.',
          icon: 'KeyRound',
          tag: 'QUYỀN SỞ HỮU'
        },
        {
          title: '3. Tốc Độ Đỉnh Cao < 1.5 Giây',
          description: 'Công nghệ thuần nhẹ, không dùng plugin WordPress nặng nề, trải nghiệm mở tức thì trên điện thoại 4G.',
          icon: 'Zap',
          tag: 'HIỆU NĂNG SỐ'
        },
        {
          title: '4. Hỗ Trợ 1-kèm-1 Trực Tiếp',
          description: 'Mỗi doanh nghiệp có một nhóm Zalo riêng với kỹ sư phụ trách, không qua bộ phận trung gian phức tạp.',
          icon: 'Users',
          tag: 'CHĂM SÓC KHÁCH HÀNG'
        }
      ]
    }
  },
  {
    id: 7,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'BẢN ĐỒ CHIẾN LƯỢC',
    title: 'Bản Đồ 5 Trụ Cột Tăng Trưởng Số Toàn Diện',
    subtitle: 'Mô hình liên hoàn khép kín giúp biến người lạ trên mạng thành khách hàng trung thành',
    layout: 'pillars',
    customDetails: {
      intro: 'LocalMate không làm một chiếc website đơn độc, mà xây dựng một cỗ máy kinh doanh số tuần hoàn gồm 5 mắt xích:',
      bullets: [
        'Trụ cột 1: Nền Tảng Số (Website tốc độ cao, nhận diện thương hiệu chuẩn chỉ, mobile-first)',
        'Trụ cột 2: Được Tìm Thấy (Google Maps Top 3, SEO Local, hiện diện trên AEO & ChatGPT)',
        'Trụ cột 3: Thu Hút Khách Hàng (Google Ads, Meta Ads tối ưu phễu chuyển đổi ra cuộc gọi)',
        'Trụ cột 4: Vận Hành Tự Động Hóa (Thông báo lead tức thì qua Zalo, bảng quản lý Google Sheets)',
        'Trụ cột 5: Đồng Hành Chăm Sóc (Digital Care bảo trì hệ thống, đăng bài, bảo vệ an toàn 365 ngày)'
      ],
      highlightBox: {
        title: 'Giá trị tích hợp đồng bộ',
        desc: 'Tất cả 5 trụ cột được xây dựng trên cùng một cơ chế đo lường chuẩn, giúp chủ doanh nghiệp dễ dàng kiểm soát chi phí và tối ưu ROI.'
      }
    }
  },
  {
    id: 8,
    sectionId: 1,
    sectionTitle: 'Phần 1: Giới Thiệu & Năng Lực Cốt Lõi LocalMate',
    slideTag: 'MỤC LỤC CHI TIẾT',
    title: 'Mục Lục Tổng Quan 40 Slide & Lộ Trình Khám Phá',
    subtitle: 'Cấu trúc tài liệu giúp quý vị nắm bắt nhanh toàn bộ năng lực và quy trình làm việc chuẩn mực',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Phần 1: Slide 01 – 08',
          description: 'Năng lực, tầm nhìn, triết lý Chống lãng phí số và 4 nguyên tắc vàng trong hợp tác.',
          icon: 'FileText',
          tag: 'PHẦN 1'
        },
        {
          title: 'Phần 2: Slide 09 – 22',
          description: 'Chi tiết 5 Trụ Cột Giải Pháp Số, bảng so sánh công nghệ, bảng giá minh bạch và chính sách cam kết.',
          icon: 'Layers',
          tag: 'PHẦN 2'
        },
        {
          title: 'Phần 3: Slide 23 – 30',
          description: 'Quy trình triển khai 5 bước tinh gọn và Checklist 35 Task nghiệm thu chất lượng trước khi bàn giao.',
          icon: 'CheckSquare',
          tag: 'PHẦN 3'
        },
        {
          title: 'Phần 4: Slide 31 – 40',
          description: 'Dự án tiêu biểu, số liệu tăng trưởng thực tế, đánh giá của khách hàng và đăng ký tư vấn 1:1.',
          icon: 'Sparkles',
          tag: 'PHẦN 4'
        }
      ]
    }
  },

  // ==========================================
  // PHẦN 2: 5 TRỤ CỘT GIẢI PHÁP SỐ TOÀN DIỆN (9 - 22)
  // ==========================================
  {
    id: 9,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'CHU KỲ DOANH NGHIỆP',
    title: 'Giải Pháp Phù Hợp Cho Từng Giai Đoạn Doanh Nghiệp',
    subtitle: 'Định hình gói giải pháp tương ứng với quy mô để tối ưu hiệu quả đầu tư',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Giai Đoạn 1: Mới Khởi Nghiệp',
          description: 'Cần có mặt online ngay với chi phí thấp nhất: Landing Page 490k + Xác minh Google Maps cơ bản.',
          icon: 'Rocket',
          tag: 'TIẾT KIỆM TỐI ĐA'
        },
        {
          title: 'Giai Đoạn 2: Xây Thương Hiệu',
          description: 'Website Doanh Nghiệp Đa Trang, đồng bộ thương hiệu, đầy đủ bảng giá và danh mục dịch vụ.',
          icon: 'Globe',
          tag: 'CHUẨN NHẬN DIỆN'
        },
        {
          title: 'Giai Đoạn 3: Tăng Trưởng Nóng',
          description: 'SEO Google Maps Top 3 khu vực + Quảng cáo Google Ads nhắm trúng khách hàng có nhu cầu gấp.',
          icon: 'TrendingUp',
          tag: 'ĐÓN KHÁCH HÀNG'
        },
        {
          title: 'Giai Đoạn 4: Tự Động & Bền Vững',
          description: 'Gói Digital Care chăm sóc toàn diện hàng tháng kết hợp CRM Mini tự động quản lý khách hàng.',
          icon: 'Cpu',
          tag: 'VẬN HÀNH RẢNH TAY'
        }
      ]
    }
  },
  {
    id: 10,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'TRỤ CỘT 1 - NỀN TẢNG SỐ',
    title: 'Trụ Cột 1: Xây Nền Tảng Số Đẳng Cấp & Tốc Độ Cao',
    subtitle: 'Thiết kế website doanh nghiệp, landing page chuyển đổi và trải nghiệm di động mượt mà',
    layout: 'metrics',
    metricsData: {
      headline: 'Website không chỉ để trưng bày, mà là nhân viên kinh doanh làm việc 24/7',
      leftColumn: {
        title: 'Tiêu Chuẩn Kỹ Thuật Bắt Buộc',
        metrics: [
          { value: '100/100', label: 'Điểm SEO Google Lighthouse', description: 'Cấu trúc schema chuẩn giúp Google lập chỉ mục nhanh' },
          { value: '< 1.2s', label: 'Tốc độ hiển thị nội dung (LCP)', description: 'Khách hàng không phải chờ đợi dù dùng 4G yếu', highlight: true },
          { value: '100%', label: 'Thân Thiện Màn Hình Di Động', description: 'Tối ưu nút bấm, thanh điều hướng và form gọi điện' },
          { value: '0đ', label: 'Chi Phí Bản Quyền Phát Sinh', description: 'Không phụ thuộc theme hay plugin trả phí hàng năm', highlight: true }
        ]
      },
      rightColumn: {
        title: 'Các Hạng Mục Triển Khai',
        content: 'LocalMate xây dựng giao diện dựa trên nghiên cứu hành vi khách hàng ngành nghề cụ thể, với ngôn ngữ thiết kế Light Mode sáng sủa, độ tương phản cao, rõ ràng và uy tín.',
        keyPoints: [
          'Website Giới Thiệu Doanh Nghiệp & Hồ Sơ Năng Lực số',
          'Landing Page bán hàng chuyên sâu tập trung tỷ lệ chốt đơn',
          'Hệ thống Mini-Web dịch vụ địa phương (Nha khoa, Spa, Xây dựng, Nhà hàng...)',
          'Tích hợp nút Gọi, Zalo, Chỉ đường Maps và Form đăng ký tức thì'
        ]
      }
    }
  },
  {
    id: 11,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'SO SÁNH CÔNG NGHỆ',
    title: 'So Sánh: Website Truyền Thống vs Nền Tảng Số LocalMate',
    subtitle: 'Sự khác biệt cốt lõi tạo nên lợi thế cạnh tranh vượt trội cho doanh nghiệp của bạn',
    layout: 'comparison',
    comparisonData: {
      headers: ['Tiêu chí đánh giá', 'Website truyền thống / WordPress cũ', 'Giải pháp số LocalMate Modern', 'Lợi ích khách hàng'],
      rows: [
        {
          criteria: 'Tốc độ tải trang',
          traditional: '3 – 6 giây (nhiều plugin nặng, dễ lag)',
          localmate: 'Dưới 1.2 giây (Clean React & Serverless)',
          advantage: 'Giảm 50% tỷ lệ khách thoát trang'
        },
        {
          criteria: 'Bảo mật & Ổn định',
          traditional: 'Dễ bị hack, nhiễm mã độc qua plugin',
          localmate: 'Bảo vệ qua Cloudflare Enterprise WAF',
          advantage: 'An tâm tuyệt đối, không lo sập web'
        },
        {
          criteria: 'Giao diện hiển thị',
          traditional: 'Theme mẫu chung chung, co giật khi lướt',
          localmate: 'Thiết kế đo ni đóng giày, chuẩn Light Mode',
          advantage: 'Tạo uy tín cao, hình ảnh chuyên nghiệp'
        },
        {
          criteria: 'Chi phí duy trì',
          traditional: 'Hosting đắt đỏ, phí gia hạn plugin cao',
          localmate: 'Tối ưu hạ tầng, chi phí duy trì tối thiểu',
          advantage: 'Tiết kiệm 60% chi phí vận hành hàng năm'
        },
        {
          criteria: 'Quyền sở hữu',
          traditional: 'Bị giữ code hoặc phụ thuộc nhà cung cấp',
          localmate: 'Bàn giao 100% mã nguồn và toàn quyền quản trị',
          advantage: 'Chủ động hoàn toàn trong tương lai'
        }
      ],
      summaryNote: 'LocalMate cam kết giải pháp bền vững không gây rủi ro phụ thuộc công nghệ cho khách hàng.'
    }
  },
  {
    id: 12,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'TRỤ CỘT 2 - ĐƯỢC TÌM THẤY',
    title: 'Trụ Cột 2: Được Tìm Thấy — SEO Google & Thống Trị Bản Đồ',
    subtitle: 'Đưa thương hiệu xuất hiện ngay trước mắt khách hàng khi họ tìm kiếm dịch vụ quanh khu vực',
    layout: 'metrics',
    metricsData: {
      headline: '82% khách hàng tìm kiếm địa phương sẽ gọi điện hoặc đến cửa hàng trong 24 giờ',
      leftColumn: {
        title: 'Chỉ Tiêu Tăng Trưởng SEO Local',
        metrics: [
          { value: 'Top 3', label: 'Vị Trí Google Maps (Local 3-Pack)', description: 'Xuất hiện trực quan kèm nút Gọi & Chỉ đường', highlight: true },
          { value: '+180%', label: 'Lượt Gọi Điện Trực Tiếp Trung Bình', description: 'Đo lường trực tiếp từ hồ sơ Google Doanh Nghiệp' },
          { value: '100%', label: 'Xác Minh Doanh Nghiệp Chính Chủ', description: 'Đảm bảo tích xanh xác thực, chống bị cướp địa điểm', highlight: true },
          { value: '0đ Ads', label: 'Lượng Khách Đều Đặn Hàng Tháng', description: 'Lưu lượng truy cập tự nhiên, không mất tiền theo click' }
        ]
      },
      rightColumn: {
        title: 'Phương Pháp Triển Khai Bài Bản',
        content: 'Chúng tôi tối ưu hóa đồng bộ Thực Thể Số (Entity SEO) giúp các công cụ tìm kiếm hiểu rõ doanh nghiệp của bạn là đơn vị uy tín hàng đầu trong khu vực.',
        keyPoints: [
          'Chuẩn hóa thông tin NAP (Name, Address, Phone) trên 30+ danh bạ uy tín',
          'Tối ưu danh mục chính và danh mục phụ theo thuật toán Google Maps',
          'Xây dựng chiến lược phản hồi đánh giá và tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google',
          'Tối ưu hóa Schema LocalBusiness, Geotag hình ảnh chuẩn tọa độ GPS'
        ]
      }
    }
  },
  {
    id: 13,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'SEO THẾ HỆ MỚI (GEO & AEO)',
    title: 'Đón Đầu Xu Hướng Tìm Kiếm AI: GEO & ChatGPT SEO',
    subtitle: 'Đảm bảo doanh nghiệp được đề xuất khi người dùng hỏi các trợ lý AI thông minh',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Google AI Overviews',
          description: 'Tối ưu cấu trúc câu trả lời cô đọng để được trích dẫn trực tiếp trong khung câu trả lời AI của Google.',
          icon: 'Sparkles',
          tag: 'AEO CHUẨN'
        },
        {
          title: 'Đề Xuất Trên ChatGPT & Perplexity',
          description: 'Định vị thương hiệu là nguồn tin cậy khi người dùng hỏi các câu hỏi như "Dịch vụ uy tín nhất gần tôi".',
          icon: 'Bot',
          tag: 'AI ENGINE OPTIMIZATION'
        },
        {
          title: 'Cấu Trúc Hỏi Đáp FAQ Schema',
          description: 'Nhúng dữ liệu có cấu trúc hỏi đáp thực tế, giúp tăng gấp đôi diện tích hiển thị trên trang kết quả tìm kiếm.',
          icon: 'HelpCircle',
          tag: 'RICH SNIPPETS'
        },
        {
          title: 'Thực Thể Uy Tín (E-E-A-T)',
          description: 'Xây dựng hồ sơ chuyên môn, chứng chỉ hành nghề và trích dẫn báo chí để củng cố độ tin cậy của doanh nghiệp.',
          icon: 'Award',
          tag: 'AUTHORITY'
        }
      ]
    }
  },
  {
    id: 14,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'TRỤ CỘT 3 - THU HÚT KHÁCH',
    title: 'Trụ Cột 3: Thu Hút Khách Hàng — Quảng Cáo Chuẩn Chuyển Đổi',
    subtitle: 'Tối ưu từng đồng ngân sách Google Ads & Meta Ads, tập trung tạo ra cuộc gọi và tin nhắn chất lượng',
    layout: 'metrics',
    metricsData: {
      headline: 'Chỉ chi tiền cho những từ khóa và đối tượng thực sự có ý định mua hàng',
      leftColumn: {
        title: 'Chỉ Số Hiệu Suất Chiến Dịch',
        metrics: [
          { value: '-35%', label: 'Chi Phí Cho Mỗi Khách (CPA)', description: 'Tối ưu điểm chất lượng trang đích giúp giảm giá thầu', highlight: true },
          { value: '> 15%', label: 'Tỷ Lệ Chuyển Đổi (Conversion Rate)', description: 'Khách vào trang thực hiện hành động gọi hoặc nhắn tin' },
          { value: '100%', label: 'Minh Bạch Tài Khoản Khách Hàng', description: 'Khách hàng thanh toán trực tiếp cho Google / Meta', highlight: true },
          { value: '24/7', label: 'Hệ Thống Chặn Click Tặc Tự Động', description: 'Loại bỏ truy cập ảo từ đối thủ và bot độc hại' }
        ]
      },
      rightColumn: {
        title: 'Quy Trình Quản Trị Chiến Dịch',
        content: 'LocalMate không nhận % ngân sách để ép khách hàng chi tiêu nhiều. Chúng tôi tính phí quản trị cố định, tạo động lực tối đa hóa số khách hàng thu về.',
        keyPoints: [
          'Nghiên cứu bộ từ khóa có ý định mua hàng cao (High Commercial Intent)',
          'Thiết kế trang đích chuyên biệt cho từng nhóm dịch vụ',
          'Cài đặt đo lường chuẩn xác: Click gọi điện, Form submit, Chat Zalo',
          'Báo cáo hiệu quả định kỳ hàng tuần kèm đề xuất tối ưu cụ thể'
        ]
      }
    }
  },
  {
    id: 15,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'CHỐNG THẤT THOÁT NGÂN SÁCH',
    title: 'Kiểm Soát & Bảo Vệ Ngân Sách Quảng Cáo',
    subtitle: 'Giải pháp phòng chống click tặc và theo dõi nguồn gốc từng khách hàng liên hệ',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Lọc IP Đối Thủ & Bot Phá Hoại',
          description: 'Tự động phát hiện và chặn các địa chỉ IP bấm quảng cáo lặp lại nhiều lần mà không tạo chuyển đổi.',
          icon: 'ShieldAlert',
          tag: 'BẢO VỆ NGÂN SÁCH'
        },
        {
          title: 'Phủ Định Từ Khóa Rác',
          description: 'Liên tục rà soát và loại bỏ các truy vấn tìm kiếm không liên quan như "miễn phí", "tuyển dụng", "hướng dẫn tự làm".',
          icon: 'FilterX',
          tag: 'TỐI ƯU TỪ KHÓA'
        },
        {
          title: 'Theo Dõi Nguồn Khách Hàng (UTM)',
          description: 'Biết chính xác khách hàng gọi đến từ chiến dịch nào, từ khóa nào, mẫu quảng cáo nào để tái đầu tư đúng chỗ.',
          icon: 'Crosshair',
          tag: 'ATTRIBUTION'
        },
        {
          title: 'Trang Đích Tải Siêu Tốc',
          description: 'Trang đích tải dưới 1 giây giúp điểm chất lượng quảng cáo đạt 8/10 đến 10/10, giảm tối đa giá thầu mỗi lượt click.',
          icon: 'Zap',
          tag: 'TIẾT KIỆM GIÁ THẦU'
        }
      ]
    }
  },
  {
    id: 16,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'TRỤ CỘT 4 - VẬN HÀNH TỰ ĐỘNG',
    title: 'Trụ Cột 4: Vận Hành Tự Động Hóa — Không Bỏ Sót Lead',
    subtitle: 'Hệ thống kết nối tự động giúp nhận thông báo khách hàng mới trong vòng 3 giây',
    layout: 'metrics',
    metricsData: {
      headline: 'Phản hồi khách hàng trong 5 phút đầu tiên tăng 391% cơ hội chốt hợp đồng',
      leftColumn: {
        title: 'Chỉ Số Vận Hành Tức Thì',
        metrics: [
          { value: '3 Giây', label: 'Thời Gian Nhận Tin Khách Hàng', description: 'Thông báo đổ về Zalo / Telegram / Email của chủ', highlight: true },
          { value: '100%', label: 'Lưu Trữ Dữ Liệu Tự Động', description: 'Tự động ghi vào Google Sheets bảo mật, không sợ mất' },
          { value: '0đ', label: 'Phí Mua Phần Mềm CRM Đắt Đỏ', description: 'Sử dụng công cụ sẵn có, dễ dùng cho nhân viên', highlight: true },
          { value: '24/7/365', label: 'Tiếp Nhận Thông Tin Liên Tục', description: 'Khách hàng gửi yêu cầu lúc nửa đêm vẫn được ghi nhận' }
        ]
      },
      rightColumn: {
        title: 'Quy Trình Tự Động Hóa Khép Kín',
        content: 'LocalMate xây dựng luồng tự động hóa thông minh giúp giải phóng chủ doanh nghiệp khỏi các thao tác thủ công rườm rà.',
        keyPoints: [
          'Khách điền form trên website → Ngay lập tức thông báo về Zalo cá nhân',
          'Tự động đồng bộ số điện thoại và nhu cầu vào Google Sheets chuẩn CRM',
          'Khách bấm gọi hotline → Hệ thống tự động ghi nhận nguồn chiến dịch',
          'Cài đặt kịch bản gửi tin nhắn cảm ơn và hướng dẫn sơ bộ cho khách'
        ]
      }
    }
  },
  {
    id: 17,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'MÔ HÌNH THÔNG BÁO THỰC TẾ',
    title: 'Quy Trình Chuyển Tiếp Lead Tự Động Của LocalMate',
    subtitle: 'Cách thức thông tin khách hàng tiềm năng di chuyển từ màn hình điện thoại vào sổ bán hàng',
    layout: 'process',
    processData: {
      steps: [
        {
          stepNumber: '01',
          name: 'Khách Hàng Tương Tác',
          duration: 'Thời điểm T0',
          output: 'Hành động người dùng',
          desc: 'Khách điền form nhận báo giá hoặc bấm nút Chat Zalo/Gọi điện trên website.'
        },
        {
          stepNumber: '02',
          name: 'Hệ Thống Phân Tích',
          duration: 'T0 + 0.5s',
          output: 'Dữ liệu sạch',
          desc: 'Hệ thống kiểm tra tính hợp lệ số điện thoại, ghi nhận nguồn chiến dịch và thời gian.'
        },
        {
          stepNumber: '03',
          name: 'Bắn Tin Nhắn Về Zalo / Telegram',
          duration: 'T0 + 2.0s',
          output: 'Thông báo rung chuông',
          desc: 'Điện thoại của chủ hoặc nhân viên sale báo tin có khách kèm tên, SĐT và dịch vụ cần tư vấn.'
        },
        {
          stepNumber: '04',
          name: 'Ghi Danh Sách Vào Google Sheets',
          duration: 'T0 + 3.0s',
          output: 'Bảng CRM quản lý',
          desc: 'Dữ liệu được lưu trữ vĩnh viễn vào Google Sheets bảo mật để theo dõi tiến độ chốt đơn.'
        }
      ]
    }
  },
  {
    id: 18,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'TRỤ CỘT 5 - ĐỒNG HÀNH CHĂM SÓC',
    title: 'Trụ Cột 5: Đồng Hành & Chăm Sóc — Gói Digital Care Toàn Diện',
    subtitle: 'Giải pháp duy trì, bảo trì kỹ thuật và phát triển nội dung số đều đặn cho doanh nghiệp',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Bảo Trì Kỹ Thuật & Sao Lưu',
          description: 'Sao lưu dữ liệu định kỳ, cập nhật bản vá bảo mật, kiểm tra tốc độ và giữ uptime luôn trên 99.9%.',
          icon: 'ShieldCheck',
          tag: 'AN TOÀN HỆ THỐNG'
        },
        {
          title: 'Cập Nhật Nội Dung & Hình Ảnh',
          description: 'Thay đổi banner khuyến mãi, đăng bài giới thiệu dịch vụ mới, cập nhật bảng giá nhanh chóng trong 24h.',
          icon: 'FileEdit',
          tag: 'NỘI DUNG TƯƠI MỚI'
        },
        {
          title: 'Chăm Sóc & Đăng Bài Google Maps',
          description: 'Đăng hình ảnh hoạt động thực tế, viết bài post định kỳ trên Google Doanh Nghiệp để giữ vững vị trí Top.',
          icon: 'MapPin',
          tag: 'CHĂM SÓC MAPS'
        },
        {
          title: 'Hỗ Trợ Kỹ Thuật 1-1 Qua Zalo',
          description: 'Hỗ trợ xử lý sự cố, tạo email doanh nghiệp, cấu hình tên miền và tư vấn chiến lược số không giới hạn.',
          icon: 'Headphones',
          tag: 'ĐỒNG HÀNH LIÊN TỤC'
        }
      ]
    }
  },
  {
    id: 19,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'SO SÁNH MÔ HÌNH VẬN HÀNH',
    title: 'Bảng So Sánh Các Phương Án Nhân Sự & Vận Hành Số',
    subtitle: 'Phân tích chi phí và hiệu quả giữa Tự tuyển dụng vs Agency lớn vs Đồng hành cùng LocalMate',
    layout: 'comparison',
    comparisonData: {
      headers: ['Hạng mục so sánh', 'Tự tuyển nhân sự In-house', 'Thuê Agency truyền thống', 'Đồng hành cùng LocalMate'],
      rows: [
        {
          criteria: 'Chi phí hàng tháng',
          traditional: '12 – 20 triệu/nhân sự (lương + BHXH)',
          localmate: 'Từ 990.000đ – 3.000.000đ/tháng',
          advantage: 'Tiết kiệm tới 85% chi phí cố định'
        },
        {
          criteria: 'Chuyên môn đa năng',
          traditional: '1 người thường chỉ làm được viết bài hoặc code',
          localmate: 'Nguyên một đội ngũ chuyên gia (Code, Ads, Maps, UI)',
          advantage: 'Đa nhiệm toàn diện không lo thiếu kỹ năng'
        },
        {
          criteria: 'Rủi ro nghỉ việc',
          traditional: 'Nhân viên nghỉ phải tuyển lại và bàn giao từ đầu',
          localmate: 'Cam kết SLA dịch vụ liên tục không gián đoạn',
          advantage: 'Hệ thống vận hành trơn tru 365 ngày'
        },
        {
          criteria: 'Trách nhiệm cam kết',
          traditional: 'Hưởng lương cố định dù hiệu quả kinh doanh thấp',
          localmate: 'Gắn liền với chất lượng vận hành và tăng trưởng thật',
          advantage: 'Tối ưu hóa dòng tiền tối đa cho SME'
        }
      ],
      summaryNote: 'LocalMate đóng vai trò là Phòng Công Nghệ & Tăng Trưởng Số tinh gọn nhất cho doanh nghiệp của bạn.'
    }
  },
  {
    id: 20,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'BẢNG GIÁ MINH BẠCH',
    title: 'Bảng Giá Niêm Yết Minh Bạch — Không Chi Phí Ẩn',
    subtitle: 'Chính sách giá rõ ràng, phù hợp từng giai đoạn ngân sách của doanh nghiệp vừa và nhỏ',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Landing Page Khởi Động',
          description: 'Chỉ 490.000đ — Sở hữu ngay trang bán hàng chuẩn di động, tích hợp nút gọi, form lead, bàn giao trong 24 giờ.',
          icon: 'Sparkles',
          tag: '490.000 Đ'
        },
        {
          title: 'Website Doanh Nghiệp Pro',
          description: 'Từ 2.900.000đ – 4.900.000đ — Đa trang chuẩn nhận diện, chuẩn SEO Lighthouse 100/100, bảo hành vĩnh viễn.',
          icon: 'Globe',
          tag: 'TỪ 2.900.000 Đ'
        },
        {
          title: 'Gói SEO Google Maps Top 3',
          description: 'Từ 2.000.000đ/tháng — Tối ưu thực thể địa phương, xác minh chính chủ, đưa từ khóa dịch vụ lên Top Maps.',
          icon: 'MapPin',
          tag: '2.000.000 Đ/TH'
        },
        {
          title: 'Chăm Sóc Số Digital Care',
          description: 'Từ 990.000đ/tháng — Toàn bộ việc bảo mật, sao lưu, viết bài, cập nhật sản phẩm và hỗ trợ kỹ thuật 1-1.',
          icon: 'HeartHandshake',
          tag: '990.000 Đ/TH'
        }
      ]
    }
  },
  {
    id: 21,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'CHÍNH SÁCH BẢO HÀNH & CAM KẾT',
    title: 'Chính Sách Độc Quyền: Bàn Giao Xong Mới Thanh Toán',
    subtitle: 'Bảo vệ quyền lợi tối thượng của khách hàng và xóa bỏ hoàn toàn rủi ro hợp tác',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Duyệt Bản Demo 0đ',
          description: 'Chúng tôi dựng bản demo thực tế cho ngành nghề của bạn xem trước. Bạn hoàn toàn không mất bất kỳ chi phí nào.',
          icon: 'Eye',
          tag: '0Đ RỦI RO'
        },
        {
          title: 'Kiểm Thử Hài Lòng Mới Trả Tiền',
          description: 'Website chạy thử nghiệm trên môi trường thật, kiểm tra tốc độ và độ sắc nét trên điện thoại ưng ý mới nghiệm thu.',
          icon: 'CheckCircle',
          tag: 'NGHIỆM THU THẬT'
        },
        {
          title: 'Bảo Hành Kỹ Thuật Trọn Đời',
          description: 'Bảo hành miễn phí toàn bộ lỗi kỹ thuật, lỗi hiển thị hoặc xung đột code trong suốt thời gian website vận hành.',
          icon: 'ShieldCheck',
          tag: 'BẢO HÀNH TRỌN ĐỜI'
        },
        {
          title: 'Hợp Đồng Pháp Nhân Đầy Đủ',
          description: 'Hợp đồng dịch vụ rõ ràng, xuất hóa đơn VAT điện tử hợp lệ từ Công ty TNHH LocalMate.',
          icon: 'FileCheck',
          tag: 'PHÁP LÝ RÕ RÀNG'
        }
      ]
    }
  },
  {
    id: 22,
    sectionId: 2,
    sectionTitle: 'Phần 2: Hệ Sinh Thái 5 Trụ Cột Giải Pháp Số Toàn Diện',
    slideTag: 'HẠ TẦNG CÔNG NGHỆ',
    title: 'Hạ Tầng Cloudflare Toàn Cầu — Siêu Tốc & Bất Khả Xâm Phạm',
    subtitle: 'Website của bạn được vận hành trên mạng lưới máy chủ phân tán hàng đầu thế giới',
    layout: 'metrics',
    metricsData: {
      headline: 'Công nghệ điện toán đám mây tiên tiến bảo vệ trang web khỏi mọi mối đe dọa trực tuyến',
      leftColumn: {
        title: 'Chỉ Số Hạ Tầng Điện Toán',
        metrics: [
          { value: '300+', label: 'Thành Phố Toàn Cầu Đặt CDN', description: 'Bao gồm trung tâm máy chủ tại Hà Nội & TP.HCM', highlight: true },
          { value: '99.99%', label: 'Cam Kết Thời Gian Uptime', description: 'Website không bao giờ bị nghẽn hay gián đoạn' },
          { value: 'SSL 256-bit', label: 'Mã Hóa Bảo Mật Tiêu Chuẩn', description: 'Khóa xanh bảo vệ thông tin khách hàng tuyệt đối' },
          { value: 'Zero Hack', label: 'Tỷ Lệ Bị Tấn Công Mã Độc', description: 'Chống DDOS và chặn đứng 100% mã độc đào coin', highlight: true }
        ]
      },
      rightColumn: {
        title: 'Lợi Ích Trực Tiếp Cho Doanh Nghiệp',
        content: 'Không cần lo lắng về việc máy chủ bị quá tải khi có lượng truy cập đột biến. Hạ tầng Cloudflare tự động mở rộng tài nguyên tức thì.',
        keyPoints: [
          'Hệ thống nén ảnh thế hệ mới (WebP, AVIF) tự động giảm 70% dung lượng',
          'Độ trễ truy cập tại Việt Nam chỉ từ 10ms – 25ms',
          'Tự động sao lưu dữ liệu phân tán trên nhiều cụm máy chủ an toàn',
          'Tiết kiệm 100% chi phí mua chứng chỉ SSL bảo mật hàng năm'
        ]
      }
    }
  },

  // ==========================================
  // PHẦN 3: QUY TRÌNH TRIỂN KHAI & CHECKLIST 35 TASK (23 - 30)
  // ==========================================
  {
    id: 23,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'QUY TRÌNH 5 BƯỚC',
    title: 'Quy Trình 5 Bước Tinh Gọn Từ Khảo Sát Đến Chuyển Giao',
    subtitle: 'Mô hình triển khai chuẩn hóa giúp hoàn thiện dự án đúng hạn trong 3 – 7 ngày làm việc',
    layout: 'process',
    processData: {
      steps: [
        {
          stepNumber: 'B1',
          name: 'Khảo Sát & Tư Vấn Giải Pháp',
          duration: 'Ngày 1',
          output: 'Bản đề xuất giải pháp số',
          desc: 'Phỏng vấn nhu cầu, khảo sát đối thủ cùng khu vực và chốt cấu trúc nội dung phù hợp.'
        },
        {
          stepNumber: 'B2',
          name: 'Dựng Demo & Duyệt Giao Diện',
          duration: 'Ngày 2 – 3',
          output: 'Bản Web Demo 0đ xem trước',
          desc: 'Thiết kế bố cục trang, viết nội dung sơ bộ và gửi khách hàng trải nghiệm trực tiếp.'
        },
        {
          stepNumber: 'B3',
          name: 'Lập Trình & Tích Hợp Hệ Thống',
          duration: 'Ngày 4 – 5',
          output: 'Hệ thống số hoàn chỉnh',
          desc: 'Tối ưu tốc độ, gắn mã tracking, cấu hình gửi tin Zalo và chuẩn hóa SEO Onpage.'
        },
        {
          stepNumber: 'B4',
          name: 'Chạy Bộ 35 Task Nghiệm Thu',
          duration: 'Ngày 6',
          output: 'Biên bản nghiệm thu chất lượng',
          desc: 'Kiểm thử toàn diện trên iPhone, Android, iPad, laptop, kiểm tra lỗi form và tốc độ.'
        },
        {
          stepNumber: 'B5',
          name: 'Bàn Giao & Đào Tạo Vận Hành',
          duration: 'Ngày 7',
          output: 'Toàn quyền sở hữu tài sản số',
          desc: 'Chuyển giao tài khoản quản trị, hướng dẫn sử dụng qua video và kích hoạt bảo hành.'
        }
      ]
    }
  },
  {
    id: 24,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'GIAI ĐOẠN 1 - KHẢO SÁT',
    title: 'Giai Đoạn 1: Khảo Sát Hiện Trạng & Nghiên Cứu Địa Phương',
    subtitle: 'Nền tảng của một dự án thành công bắt đầu từ sự thấu hiểu sâu sắc thị trường mục tiêu',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Phân Tích 5 Đối Thủ Quanh Khu Vực',
          description: 'Xem đối thủ đang làm gì, giá cả thế nào, website họ đang thiếu sót những gì để tạo sự khác biệt vượt trội.',
          icon: 'Search',
          tag: 'ĐỐI THỦ'
        },
        {
          title: 'Bộ Từ Khóa Tìm Kiếm Địa Phương',
          description: 'Xác định chính xác những câu từ mà người dân địa phương gõ khi tìm dịch vụ của bạn.',
          icon: 'ListFilter',
          tag: 'TỪ KHÓA THỰC'
        },
        {
          title: 'Định Vị Điểm Bán Độc Nhất (USP)',
          description: 'Làm nổi bật lý do khách hàng nên chọn bạn thay vì đối thủ (giá tốt hơn, bảo hành lâu hơn, có mặt nhanh hơn).',
          icon: 'Star',
          tag: 'LỢI THẾ CẠNH TRANH'
        },
        {
          title: 'Xác Định Cấu Trúc Trang Phù Hợp',
          description: 'Lên sơ đồ trang tinh gọn, không dàn trải rườm rà, tập trung dẫn dắt khách hàng đến hành động gọi điện.',
          icon: 'GitFork',
          tag: 'SƠ ĐỒ TRANG'
        }
      ]
    }
  },
  {
    id: 25,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'GIAI ĐOẠN 2 - THIẾT KẾ & CODE',
    title: 'Giai Đoạn 2: Thiết Kế Trải Nghiệm & Lập Trình Hiệu Năng',
    subtitle: 'Biến ý tưởng thành sản phẩm số sắc nét, tinh tế và tối ưu tuyệt đối cho người dùng',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Ngôn Ngữ Light Mode Cao Cấp',
          description: 'Tone màu xanh thương hiệu tạo cảm giác tin cậy, nền sáng sạch sẽ, chữ đậm sắc nét, chống mỏi mắt.',
          icon: 'Palette',
          tag: 'GIAO DIỆN UY TÍN'
        },
        {
          title: 'Tối Ưu Tương Tác Chạm (Mobile-First)',
          description: 'Các nút Gọi Hotline, Chat Zalo luôn nằm trong tầm với ngón tay cái, kích thước tối thiểu đạt chuẩn 48px.',
          icon: 'Smartphone',
          tag: 'DỄ DÀNG THAO TÁC'
        },
        {
          title: 'Chống Co Giật Khung Hình (Zero CLS)',
          description: 'Áp dụng scrollbar-gutter stable và thiết lập kích thước ảnh cố định, loại bỏ hoàn toàn hiện tượng nhảy chữ.',
          icon: 'Maximize2',
          tag: 'TRẢI NGHIỆM MƯỢT'
        },
        {
          title: 'Kiến Trúc Component Hiện Đại',
          description: 'Mã nguồn module hóa sạch sẽ, dễ dàng mở rộng thêm tính năng hoặc nâng cấp trong tương lai mà không cần đập đi xây lại.',
          icon: 'Code2',
          tag: 'MÃ NGUỒN SẠCH'
        }
      ]
    }
  },
  {
    id: 26,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'GIAI ĐOẠN 3 - TRACKING & AUTOMATION',
    title: 'Giai Đoạn 3: Thiết Lập Đo Lường & Tự Động Hóa Vận Hành',
    subtitle: 'Cài đặt hệ thần kinh dữ liệu giúp theo dõi từng chuyển đổi và chuyển phát lead tức thì',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Gắn Google Analytics 4 (GA4)',
          description: 'Theo dõi chi tiết số người truy cập, thời gian xem trang, tỷ lệ thoát và hành trình người dùng trên web.',
          icon: 'BarChart',
          tag: 'PHÂN TÍCH TRUY CẬP'
        },
        {
          title: 'Cài Đặt Meta Pixel & Conversion API',
          description: 'Đo lường chính xác các tương tác để phục vụ cho các chiến dịch chạy quảng cáo bám đuổi (Retargeting).',
          icon: 'Share2',
          tag: 'DỮ LIỆU ADS'
        },
        {
          title: 'Kết Nối Bot Bắn Tin Zalo / Telegram',
          description: 'Cấu hình webhook tự động bắn thông báo khi có khách điền form, đảm bảo không bỏ lỡ khách hàng.',
          icon: 'Send',
          tag: 'BÁO ĐỘNG LEAD'
        },
        {
          title: 'Bảng Quản Trị Google Sheets Tự Động',
          description: 'Dữ liệu khách hàng tự động chảy vào bảng tính Google Sheets của doanh nghiệp để quản lý và chăm sóc.',
          icon: 'Table',
          tag: 'CRM MINI'
        }
      ]
    }
  },
  {
    id: 27,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'GIAI ĐOẠN 4 - BÀN GIAO SỞ HỮU',
    title: 'Giai Đoạn 4: Đào Tạo Vận Hành & Bàn Giao Toàn Quyền',
    subtitle: 'Chuyển giao đầy đủ tài sản công nghệ, giúp khách hàng hoàn toàn làm chủ hệ thống của mình',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Bàn Giao Tài Khoản Quản Trị',
          description: 'Bàn giao email chính chủ, tài khoản tên miền, tài khoản máy chủ Cloudflare, tài khoản Google Analytics.',
          icon: 'Key',
          tag: '100% QUYỀN SỞ HỮU'
        },
        {
          title: 'Video Hướng Dẫn Chi Tiết 1-kèm-1',
          description: 'Ghi hình video hướng dẫn riêng cho doanh nghiệp: Cách xem khách, cách sửa bài viết, cách đổi số hotline.',
          icon: 'Video',
          tag: 'DỄ HIỂU DỄ DÙNG'
        },
        {
          title: 'Biên Bản Bàn Giao Nghiệm Thu',
          description: 'Ký kết biên bản xác nhận hoàn thành đầy đủ các hạng mục cam kết trong hợp đồng hợp tác.',
          icon: 'FileCheck2',
          tag: 'MINH BẠCH PHÁP LÝ'
        },
        {
          title: 'Kích Hoạt Bảo Hành & Hỗ Trợ 1-1',
          description: 'Thêm toàn bộ nhân sự phụ trách vào nhóm Zalo hỗ trợ kỹ thuật trực tiếp để đồng hành lâu dài.',
          icon: 'MessageCircle',
          tag: 'HỖ TRỢ LIÊN TỤC'
        }
      ]
    }
  },
  {
    id: 28,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'GIAI ĐOẠN 5 - ĐỒNG HÀNH PHÁT TRIỂN',
    title: 'Giai Đoạn 5: Đo Lường Hiệu Quả & Nâng Cấp Tăng Trưởng',
    subtitle: 'Đồng hành tối ưu liên tục giúp website ngày càng mang lại nhiều giá trị kinh doanh hơn',
    layout: 'metrics',
    metricsData: {
      headline: 'Một sản phẩm số không dừng lại ở ngày bàn giao, mà liên tục tiến hóa theo nhu cầu thị trường',
      leftColumn: {
        title: 'Quy Chuẩn Báo Cáo Định Kỳ',
        metrics: [
          { value: 'Hàng Tuần', label: 'Báo Cáo Nhanh Số Lượng Lead', description: 'Nắm bắt biến động khách hàng và phản hồi của thị trường' },
          { value: 'Hàng Tháng', label: 'Báo Cáo Tổng Hợp Thứ Hạng SEO', description: 'Theo dõi độ tăng trưởng từ khóa trên Google Search & Maps', highlight: true },
          { value: 'Mỗi Quý', label: 'Đánh Giá & Đề Xuất Chiến Lược Mới', description: 'Cải tiến giao diện hoặc tung ra các gói ưu đãi mới' },
          { value: '0 Gián Đoạn', label: 'An Toàn Kỹ Thuật Suốt Năm', description: 'Đội ngũ kỹ thuật giám sát 24/7 ngăn ngừa rủi ro', highlight: true }
        ]
      },
      rightColumn: {
        title: 'Các Hoạt Động Cải Tiến Thường Xuyên',
        content: 'Chúng tôi liên tục theo dõi hành vi cuộn trang, click chuột của người dùng để đưa ra những cải tiến nhỏ nhưng mang lại bước nhảy lớn về doanh thu.',
        keyPoints: [
          'Tối ưu lại vị trí các nút kêu gọi hành động dựa trên dữ liệu cuộn trang',
          'Viết thêm các bài viết giải đáp thắc mắc khách hàng thường hỏi',
          'Cập nhật các hình ảnh công trình, sản phẩm thực tế mới nhất',
          'Điều chỉnh giá thầu quảng cáo theo giờ cao điểm phát sinh cuộc gọi'
        ]
      }
    }
  },
  {
    id: 29,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'CHECKLIST NGHIỆM THU (PHẦN 1)',
    title: 'Checklist 35 Task Tiêu Chuẩn Vàng (Task 01 – 18)',
    subtitle: 'Bộ quy chuẩn kỹ thuật nghiêm ngặt kiểm tra trước khi bàn giao bất kỳ trang web nào',
    layout: 'checklist',
    checklistData: {
      phaseName: 'GIAI ĐOẠN 1: KIẾN TRÚC GIAO DIỆN, HIỆU NĂNG & TRẢI NGHIỆM DI ĐỘNG',
      totalTasksLabel: '18/18 Tiêu Chuẩn Đạt Chuẩn Xuất Sắc',
      tasks: [
        { id: 1, category: 'Tốc độ', task: 'Tốc độ tải trang First Contentful Paint (FCP) dưới 1.0 giây', standard: '< 1.0s', status: 'passed' },
        { id: 2, category: 'Tốc độ', task: 'Largest Contentful Paint (LCP) dưới 1.8 giây trên mạng 4G', standard: '< 1.8s', status: 'passed' },
        { id: 3, category: 'Trải nghiệm', task: 'Cumulative Layout Shift (CLS) bằng 0.000 (Không co giật khung hình)', standard: 'CLS 0.00', status: 'passed' },
        { id: 4, category: 'Trải nghiệm', task: 'First Input Delay (FID / INP) phản hồi dưới 50ms khi click', standard: '< 50ms', status: 'passed' },
        { id: 5, category: 'Responsive', task: 'Hiển thị hoàn hảo trên iPhone (390px, 430px)', standard: 'Pixel-perfect', status: 'passed' },
        { id: 6, category: 'Responsive', task: 'Hiển thị hoàn hảo trên Android (360px, 412px)', standard: 'Pixel-perfect', status: 'passed' },
        { id: 7, category: 'Responsive', task: 'Hiển thị hoàn hảo trên iPad và Tablet (768px, 1024px)', standard: 'Pixel-perfect', status: 'passed' },
        { id: 8, category: 'Responsive', task: 'Hiển thị chuẩn Desktop & Laptop (1366px, 1440px, 1920px)', standard: 'Pixel-perfect', status: 'passed' },
        { id: 9, category: 'Nút bấm', task: 'Vùng chạm cảm ứng tối thiểu 48px x 48px chống bấm nhầm', standard: '>= 48px', status: 'passed' },
        { id: 10, category: 'Nút bấm', task: 'Nút gọi Hotline cố định phản hồi ngay khi bấm', standard: 'Click-to-call', status: 'passed' },
        { id: 11, category: 'Nút bấm', task: 'Nút Chat Zalo mở ứng dụng trực tiếp kèm lời chào mẫu', standard: 'Direct-Zalo', status: 'passed' },
        { id: 12, category: 'Nút bấm', task: 'Nút chỉ đường Google Maps mở đúng tọa độ cửa hàng', standard: 'GPS-mapped', status: 'passed' },
        { id: 13, category: 'Typography', task: 'Font chữ Be Vietnam Pro hiển thị sắc nét, không lỗi dấu tiếng Việt', standard: 'Unicode 100%', status: 'passed' },
        { id: 14, category: 'Typography', task: 'Độ tương phản chữ đạt chuẩn WCAG AA (Chữ đậm trên nền sáng)', standard: 'Ratio >= 4.5:1', status: 'passed' },
        { id: 15, category: 'Typography', task: 'Áp dụng text-wrap: pretty chống rớt một chữ xuống dòng đơn độc', standard: 'Pretty text', status: 'passed' },
        { id: 16, category: 'Hình ảnh', task: '100% hình ảnh nén chuẩn WebP/AVIF dung lượng dưới 150KB', standard: '< 150KB/ảnh', status: 'passed' },
        { id: 17, category: 'Hình ảnh', task: 'Thiết lập đầy đủ thuộc tính alt mô tả hình ảnh cho SEO', standard: 'Alt SEO', status: 'passed' },
        { id: 18, category: 'Giao diện', task: 'Tuyệt đối không dùng glassmorphism gây mờ đục chữ', standard: 'Zero-glass', status: 'passed' }
      ]
    }
  },
  {
    id: 30,
    sectionId: 3,
    sectionTitle: 'Phần 3: Quy Trình Triển Khai & Chuẩn Hóa 35 Task Nghiệm Thu',
    slideTag: 'CHECKLIST NGHIỆM THU (PHẦN 2)',
    title: 'Checklist 35 Task Tiêu Chuẩn Vàng (Task 19 – 35)',
    subtitle: 'Bộ tiêu chuẩn SEO kỹ thuật, bảo mật hạ tầng và tích hợp tự động hóa chuyển đổi',
    layout: 'checklist',
    checklistData: {
      phaseName: 'GIAI ĐOẠN 2: SEO ONPAGE, BẢO MẬT, ĐO LƯỜNG & VẬN HÀNH TỰ ĐỘNG',
      totalTasksLabel: '17/17 Tiêu Chuẩn Đạt Chuẩn Hoàn Hảo',
      tasks: [
        { id: 19, category: 'SEO Onpage', task: 'Cấu hình thẻ Tiêu đề (Title) & Mô tả (Meta Description) hấp dẫn', standard: 'SEO Snippet', status: 'passed' },
        { id: 20, category: 'SEO Onpage', task: 'Cấu trúc thẻ tiêu đề phân cấp chuẩn H1, H2, H3 duy nhất logic', standard: 'Hierarchy H1-H3', status: 'passed' },
        { id: 21, category: 'SEO Onpage', task: 'Khai báo Schema.org LocalBusiness & Organization đầy đủ', standard: 'Rich Snippets', status: 'passed' },
        { id: 22, category: 'SEO Onpage', task: 'Khai báo Schema FAQPage cho phần câu hỏi thường gặp', standard: 'FAQ Schema', status: 'passed' },
        { id: 23, category: 'SEO Onpage', task: 'Tạo sitemap.xml tự động và khai báo file robots.txt chuẩn', standard: 'Indexable', status: 'passed' },
        { id: 24, category: 'SEO Onpage', task: 'Khai báo thẻ Canonical URL chống trùng lặp nội dung', standard: 'Canonical', status: 'passed' },
        { id: 25, category: 'SEO Onpage', task: 'Đầy đủ OpenGraph (OG Image, OG Title) khi chia sẻ lên Zalo/Facebook', standard: 'Social Sharing', status: 'passed' },
        { id: 26, category: 'Bảo mật', task: 'Cài đặt chứng chỉ SSL HTTPS 256-bit mã hóa toàn bộ dữ liệu', standard: 'HTTPS Secure', status: 'passed' },
        { id: 27, category: 'Bảo mật', task: 'Bảo vệ qua tường lửa đám mây Cloudflare WAF chống tấn công DDoS', standard: 'Cloudflare WAF', status: 'passed' },
        { id: 28, category: 'Bảo mật', task: 'Chống spam form gửi rác bằng cơ chế honeypot và rate limit', standard: 'Anti-spam', status: 'passed' },
        { id: 29, category: 'Đo lường', task: 'Gắn mã Google Tag Manager & Google Analytics 4 chính xác', standard: 'GA4 Verified', status: 'passed' },
        { id: 30, category: 'Đo lường', task: 'Thiết lập sự kiện đo lường hành vi bấm nút Gọi & Chat Zalo', standard: 'Event Tracking', status: 'passed' },
        { id: 31, category: 'Đo lường', task: 'Khai báo và xác minh quyền sở hữu trên Google Search Console', standard: 'GSC Verified', status: 'passed' },
        { id: 32, category: 'Automation', task: 'Form liên hệ gửi dữ liệu thông báo tức thì về Zalo/Telegram cá nhân', standard: '< 3 giây', status: 'passed' },
        { id: 33, category: 'Automation', task: 'Tự động lưu trữ thông tin khách vào Google Sheets bảo mật', standard: 'Auto-sync', status: 'passed' },
        { id: 34, category: 'Pháp lý', task: 'Hiển thị đầy đủ thông tin doanh nghiệp, MST và liên kết chính sách', standard: 'Pháp nhân rõ ràng', status: 'passed' },
        { id: 35, category: 'Bàn giao', task: 'Cung cấp video hướng dẫn quản trị và bàn giao 100% mật khẩu', standard: 'Full Ownership', status: 'passed' }
      ]
    }
  },

  // ==========================================
  // PHẦN 4: DỰ ÁN TIÊU BIỂU & KẾT NỐI (31 - 40)
  // ==========================================
  {
    id: 31,
    sectionId: 4,
    sectionTitle: 'Phần 4: Kịch Bản Minh Họa, Giải Pháp Kỹ Thuật & Quy Trình Bàn Giao',
    slideTag: 'MÔ HÌNH TĂNG TRƯỞNG SỐ',
    title: 'Mô Hình Tăng Trưởng Số Chuẩn Hóa Cho Doanh Nghiệp Địa Phương',
    subtitle: 'Các chỉ số mục tiêu và quy trình công nghệ giải quyết bài toán tiếp cận khách hàng địa phương',
    layout: 'metrics',
    metricsData: {
      headline: 'Tập trung vào giá trị kỹ thuật thực tế và khả năng tiếp cận khách hàng tự nhiên',
      leftColumn: {
        title: 'Mục Tiêu Chuẩn Hóa Hạ Tầng',
        metrics: [
          { value: 'Đồng Bộ', label: 'Tối Ưu Đa Kênh Địa Phương', description: 'Đồng bộ Google Maps, Web di động và Schema dữ liệu', highlight: true },
          { value: 'Local Pack', label: 'Mục Tiêu Hiển Thị Bản Đồ', description: 'Tối ưu bán kính phục vụ trọng điểm quanh cơ sở' },
          { value: '< 1.0s', label: 'Tốc Độ Tải Trang Di Động', description: 'Tối ưu Core Web Vitals, không làm khách thoát trang', highlight: true },
          { value: '100%', label: 'Nghiệm Thu Mới Thanh Toán', description: 'Xem demo và kiểm tra đạt chuẩn trước khi thanh toán' }
        ]
      },
      rightColumn: {
        title: 'Các Ngành Nghề Đã Triển Khai Thành Công',
        content: 'Phương pháp luận của LocalMate được tinh chỉnh phù hợp với đặc thù kinh doanh thực tế của các lĩnh vực địa phương:',
        keyPoints: [
          'Y tế, Phòng Khám Chuyên Khoa, Nha Khoa Thẩm Mỹ',
          'Xây Dựng, Thiết Kế Thi Công Nội Thất, Cửa Nhôm Kính',
          'Khách Sạn, Homestay, Nhà Hàng, Quán Cà Phê Chuỗi',
          'Dịch Vụ Sửa Chữa Tại Nhà, Vận Chuyển, Cứu Hộ',
          'Công Ty Luật, Kế Toán Thuế, Đại Lý Bảo Hiểm'
        ]
      }
    }
  },
  {
    id: 32,
    sectionId: 4,
    sectionTitle: 'Phần 4: Kịch Bản Minh Họa, Giải Pháp Kỹ Thuật & Quy Trình Bàn Giao',
    slideTag: 'KỊCH BẢN MINH HỌA 1 - NHA KHOA',
    title: 'Kịch Bản Minh Họa 1: Phòng Khám Nha Khoa Cơ Sở Mới',
    subtitle: 'Mô phỏng cách cơ sở y tế chuẩn hóa hiển thị địa phương và tối ưu trang đặt lịch',
    layout: 'casestudy',
    caseStudyData: {
      client: 'Kịch bản giả định: Phòng khám Nha khoa Địa phương',
      industry: 'Y Tế & Dịch Vụ Nha Khoa',
      location: 'Khu vực đô thị (Ví dụ minh họa: Quận Hải Châu, Đà Nẵng)',
      challenge: 'Website cũ chạy chậm, không có nút đặt hẹn nhanh trên di động, Google Maps chưa được xác minh chính chủ, người dân tìm kiếm nha khoa gần đây khó thấy phòng khám.',
      solution: 'Xây lại Website Light Mode tải < 1.0s với bảng giá dịch vụ rõ ràng, chuẩn hóa hồ sơ Google Maps chính chủ, tích hợp nút gọi hotline và form đặt hẹn chuyển thẳng về Zalo lễ tân.',
      metrics: [
        { label: 'Kênh tiếp nhận hẹn', value: 'Hotline + Zalo', diff: 'Bấm gọi tức thì' },
        { label: 'Hiển thị Google Maps', value: 'Local 3-Pack', diff: 'Chuẩn hóa danh mục' },
        { label: 'Tốc độ tải trang', value: '< 1.0 giây', diff: 'Chuẩn Core Web Vitals' }
      ],
      quote: '"Kịch bản giải pháp: Khi phòng khám cung cấp bảng giá niêm yết rõ ràng và nút gọi hotline tiện lợi trên điện thoại, bệnh nhân quanh khu vực sẽ tin tưởng và chủ động liên hệ khám răng."'
    }
  },
  {
    id: 33,
    sectionId: 4,
    sectionTitle: 'Phần 4: Kịch Bản Minh Họa, Giải Pháp Kỹ Thuật & Quy Trình Bàn Giao',
    slideTag: 'KỊCH BẢN MINH HỌA 2 - NỘI THẤT',
    title: 'Kịch Bản Minh Họa 2: Doanh Nghiệp Xưởng Nhôm Kính & Nội Thất',
    subtitle: 'Tối ưu trang đích chuyên sâu kết hợp chặn click ảo để bảo vệ ngân sách',
    layout: 'casestudy',
    caseStudyData: {
      client: 'Kịch bản giả định: Xưởng Gia Công Nhôm Kính & Nội Thất',
      industry: 'Cơ Khí, Xây Dựng & Nội Thất',
      location: 'Khu vực công nghiệp / ngoại thành (Ví dụ minh họa: Thanh Khê, Đà Nẵng)',
      challenge: 'Chạy quảng cáo tìm kiếm tốn kém vì click ảo từ đối thủ, khách vào xem trang rồi thoát ra ngay do trang đích không có hình ảnh công trình thực tế.',
      solution: 'Thiết kế Landing Page riêng biệt cho từng dịch vụ chủ lực kèm album công trình đã bàn giao, cài đặt bộ lọc từ khóa phủ định và biểu mẫu dự toán chi phí tự động.',
      metrics: [
        { label: 'Chất lượng trang đích', value: 'Mobile-First', diff: 'Tải nhanh trên di động' },
        { label: 'Bộ lọc từ khóa', value: 'Lọc Click Rác', diff: 'Tiết kiệm ngân sách' },
        { label: 'Báo giá sơ bộ', value: 'Minh Bạch', diff: 'Dễ dàng ước tính' }
      ],
      quote: '"Kịch bản giải pháp: Khách hàng xem hình ảnh công trình thực tế với bảng vật liệu rõ ràng sẽ nhanh chóng đưa ra quyết định liên hệ để được đo đạc và tư vấn trực tiếp."'
    }
  },
  {
    id: 34,
    sectionId: 4,
    sectionTitle: 'Phần 4: Kịch Bản Minh Họa, Giải Pháp Kỹ Thuật & Quy Trình Bàn Giao',
    slideTag: 'KỊCH BẢN MINH HỌA 3 - F&B',
    title: 'Kịch Bản Minh Họa 3: Nhà Hàng Đặc Sản & Dịch Vụ Ăn Uống',
    subtitle: 'Chuẩn hóa hồ sơ bản đồ và menu số đón đầu lượng khách du lịch',
    layout: 'casestudy',
    caseStudyData: {
      client: 'Kịch bản giả định: Nhà Hàng Ẩm Thực Du Lịch',
      industry: 'F&B, Nhà Hàng & Ẩm Thực',
      location: 'Điểm du lịch (Ví dụ minh họa: Sơn Trà, TP. Đà Nẵng)',
      challenge: 'Phụ thuộc vào môi giới tour, du khách tự tìm kiếm trên Google Maps không thấy quán hoặc thông tin menu trên mạng bị sai lệch, thiếu hình ảnh món ăn thực tế.',
      solution: 'Chuẩn hóa hồ sơ Google Maps chính chủ, đồng bộ menu số hiển thị song ngữ Anh - Việt kèm giá niêm yết rõ ràng và triển khai mã QR tại bàn xin đánh giá văn minh.',
      metrics: [
        { label: 'Menu hiển thị', value: 'Digital Menu', diff: 'Song ngữ Anh - Việt' },
        { label: 'Thu thập đánh giá', value: 'QR Code Để Bàn', diff: 'Khách tự nguyện review' },
        { label: 'Kênh tiếp cận', value: 'Google Maps', diff: 'Tự chủ không qua trung gian' }
      ],
      quote: '"Kịch bản giải pháp: Du khách mở Google Maps thấy địa điểm có hình ảnh món ăn thực tế, menu song ngữ và giá niêm yết minh bạch sẽ tự tin ghé quán thưởng thức."'
    }
  },
  {
    id: 35,
    sectionId: 4,
    sectionTitle: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    slideTag: 'ĐÁNH GIÁ TỪ ĐỐI TÁC',
    title: 'Phản Hồi Thực Tế Từ Các Chủ Doanh Nghiệp',
    subtitle: 'Sự hài lòng và tin tưởng của khách hàng là thước đo giá trị chuẩn mực nhất của chúng tôi',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Anh Tuấn — Giám Đốc Cty Vận Tải',
          description: '"Làm việc với LocalMate rất thoải mái vì chính sách làm demo ưng ý mới thanh toán. Các bạn làm việc nhanh, chuẩn chỉ và hỗ trợ kỹ thuật rất có tâm."',
          icon: 'Quote',
          tag: 'ĐỐI TÁC 3 NĂM'
        },
        {
          title: 'Chị Mai — Chủ Thẩm Mỹ Viện Lan Beauty',
          description: '"Website chạy rất nhẹ và sang trọng. Nút nhắn tin Zalo tiện lắm, khách bấm vào là đổ chuông ngay trên điện thoại tôi để tư vấn kịp thời."',
          icon: 'Quote',
          tag: 'HÀI LÒNG 100%'
        },
        {
          title: 'Bác Sĩ Dũng — Phòng Khám Cơ Xương Khớp',
          description: '"Tôi không rành về công nghệ nhưng đội ngũ LocalMate hướng dẫn rất dễ hiểu. Bàn giao đầy đủ tài khoản mật khẩu không thiếu một thứ gì."',
          icon: 'Quote',
          tag: 'TIN CẬY TUYỆT ĐỐI'
        },
        {
          title: 'Anh Hoàng — Giám Đốc Chuỗi Cửa Hàng Xe',
          description: '"Gói Digital Care 990k/tháng của LocalMate giúp tôi tiết kiệm được cả chục triệu tiền thuê nhân sự IT, cần sửa gì nhắn Zalo 15 phút sau là xong."',
          icon: 'Quote',
          tag: 'ĐỒNG HÀNH LÂU DÀI'
        }
      ]
    }
  },
  {
    id: 36,
    sectionId: 4,
    sectionTitle: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    slideTag: 'TIÊU CHUẨN BẢO HỘ TÀI SẢN',
    title: 'Cam Kết Bảo Vệ Quyền Lợi & Bảo Mật Tuyệt Đối',
    subtitle: 'Chính sách pháp lý nghiêm ngặt giúp quý doanh nghiệp an tâm 100% khi hợp tác',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Hợp Đồng Kinh Tế Đầy Đủ',
          description: 'Hợp đồng dịch vụ chi tiết điều khoản cam kết, thời gian bàn giao, phạm vi công việc và hóa đơn VAT hợp pháp.',
          icon: 'FileText',
          tag: 'PHÁP NHÂN CHÍNH THỨC'
        },
        {
          title: 'Thỏa Thuận Bảo Mật Dữ Liệu (NDA)',
          description: 'Cam kết bảo mật 100% thông tin khách hàng, số liệu kinh doanh và danh sách lead của quý doanh nghiệp.',
          icon: 'Lock',
          tag: 'BẢO MẬT DỮ LIỆU'
        },
        {
          title: 'Không Giữ Mã Nguồn Làm Con Tin',
          description: 'Khách hàng nắm giữ tài khoản cấp cao nhất. Bạn có toàn quyền chuyển đổi nhà cung cấp bất kỳ lúc nào nếu muốn.',
          icon: 'Unlock',
          tag: 'TỰ DO TỐI ĐA'
        },
        {
          title: 'Hỗ Trợ Kỹ Thuật Cam Kết SLA',
          description: 'Sự cố khẩn cấp tiếp nhận và xử lý trong 15 phút. Luôn có đội ngũ kỹ thuật thường trực hỗ trợ.',
          icon: 'Clock',
          tag: 'SLA < 15 PHÚT'
        }
      ]
    }
  },
  {
    id: 37,
    sectionId: 4,
    sectionTitle: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    slideTag: 'QUÀ TẶNG ĐẶC BIỆT',
    title: 'Gói Quà Tặng: Khảo Sát & Audit Hiện Diện Số (Trị Giá 3.000.000đ)',
    subtitle: 'Dành riêng cho 20 doanh nghiệp đăng ký đầu tiên trong tháng này — Hoàn toàn miễn phí',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Audit Tốc Độ & Mã Lỗi Website',
          description: 'Kiểm tra chi tiết điểm hiệu năng Google PageSpeed, phát hiện các đoạn mã làm chậm trang và lỗi hiển thị.',
          icon: 'Activity',
          tag: 'TRỊ GIÁ 800.000 Đ'
        },
        {
          title: 'Đo Lường Sức Khỏe Google Maps',
          description: 'Rà soát thứ hạng từ khóa địa phương, phát hiện các điểm vi phạm chính sách có thể khiến địa điểm bị tạm ngưng.',
          icon: 'MapPin',
          tag: 'TRỊ GIÁ 1.000.000 Đ'
        },
        {
          title: 'So Sánh Chuyên Sâu Với 3 Đối Thủ',
          description: 'Chỉ ra khoảng trống thị trường mà đối thủ đang bỏ quên để doanh nghiệp của bạn khai thác và chiếm lĩnh.',
          icon: 'TrendingUp',
          tag: 'TRỊ GIÁ 1.200.000 Đ'
        },
        {
          title: 'Bản Đề Xuất Giải Pháp Số Chi Tiết',
          description: 'Báo cáo PDF gửi riêng cho lãnh đạo kèm lộ trình hành động cụ thể từng bước, không ép buộc mua dịch vụ.',
          icon: 'FileCheck',
          tag: 'HOÀN TOÀN MIỄN PHÍ'
        }
      ]
    }
  },
  {
    id: 38,
    sectionId: 4,
    sectionTitle: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    slideTag: 'CÂU HỎI THƯỜNG GẶP (FAQ)',
    title: 'Giải Đáp Các Thắc Mắc Phổ Biến Nhất',
    subtitle: 'Những câu hỏi khách hàng thường quan tâm trước khi bắt đầu triển khai dự án',
    layout: 'grid4',
    grid4Data: {
      cards: [
        {
          title: 'Tôi chưa có nội dung, hình ảnh thì làm sao?',
          description: 'Đội ngũ LocalMate sẽ hỗ trợ biên tập nội dung chuẩn chỉnh và chọn lọc hình ảnh bản quyền đẹp mắt cho bạn.',
          icon: 'HelpCircle',
          tag: 'NỘI DUNG SẴN CÓ'
        },
        {
          title: 'Website làm xong mất bao lâu để hoàn thành?',
          description: 'Landing Page khởi động chỉ mất 24h. Website Doanh nghiệp trọn gói mất từ 3 đến 5 ngày làm việc.',
          icon: 'Clock',
          tag: '3 - 5 NGÀY'
        },
        {
          title: 'Sau này tôi muốn đổi số điện thoại thì làm sao?',
          description: 'Chỉ cần nhắn tin vào nhóm Zalo riêng, kỹ thuật viên LocalMate sẽ hỗ trợ cập nhật tức thì trong 15 phút.',
          icon: 'RefreshCw',
          tag: 'HỖ TRỢ NHANH'
        },
        {
          title: 'Nếu tôi không ưng ý bản demo thì sao?',
          description: 'Bạn hoàn toàn không phải trả bất kỳ khoản tiền nào. Chúng tôi tôn trọng quyết định và sự thoải mái của bạn.',
          icon: 'Shield',
          tag: '0Đ RỦI RO'
        }
      ]
    }
  },
  {
    id: 39,
    sectionId: 4,
    sectionTitle: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    slideTag: 'HÀNH ĐỘNG NGAY',
    title: 'Đăng Ký Tư Vấn 1:1 & Nhận Bản Web Demo 0đ',
    subtitle: 'Hãy để chúng tôi chứng minh năng lực thực tế bằng sản phẩm thật cho ngành nghề của bạn',
    layout: 'contact',
    contactData: {
      hotline: '0834.422.439',
      zalo: '0834.422.439',
      email: 'contact@localmate.vn',
      address: '03 Trường Chinh, P. Hội An Tây, TP. Đà Nẵng',
      mst: '4001337934',
      consultOffer: 'Nhận bản phác thảo giao diện Web Demo 0đ dành riêng cho ngành nghề của bạn trong 24 giờ.',
      guarantee: 'Bàn giao nghiệm thu hài lòng rồi mới thanh toán — Cam kết minh bạch 100% mã nguồn.'
    }
  },
  {
    id: 40,
    sectionId: 4,
    sectionTitle: 'Phần 4: Dự Án Tiêu Biểu, Bằng Chứng & Kết Nối Hợp Tác',
    slideTag: 'LỜI KẾT & THÔNG TIN KẾT NỐI',
    title: 'LOCALMATE — NGƯỜI ĐỒNG HÀNH SỐ TIN CẬY CỦA DOANH NGHIỆP',
    subtitle: 'Chân thành cảm ơn Quý Doanh Nghiệp đã dành thời gian theo dõi Hồ Sơ Năng Lực 2026',
    layout: 'cover',
    coverData: {
      edition: 'CÔNG TY TNHH LOCALMATE — MÃ SỐ THUẾ: 4001337934',
      targetAudience: 'Hotline / Zalo: 0834.422.439 — Website: localmate.vn',
      tagline: 'Đồng hành kiên định — Tối ưu từng đồng chi phí — Tăng trưởng thực tế',
      author: 'Trụ sở: 03 Trường Chinh, P. Hội An Tây, TP. Đà Nẵng, Việt Nam',
      releaseDate: 'Bản quyền © 2026 LocalMate. Bảo lưu mọi quyền.'
    }
  }
];
