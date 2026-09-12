import {
  Globe,
  Users,
  Zap,
  Briefcase,
  HelpCircle,
  MapPin,
  Laptop,
  Network,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileCode2,
  Layers
} from 'lucide-react';

// ==========================================
// 1. NHÓM CÔNG VIỆC THỰC TẾ (PROBLEM MAPPER)
// ==========================================
export interface TaskGroupItem {
  id: string;
  stepNumber: string;
  title: string;
  categoryBadge: string;
  headline: string;
  description: string;
  priceTag: string;
  serviceNameForLead: string;
  features: string[];
  ctaLabel: string;
  iconName: 'Globe' | 'MapPin' | 'TrendingUp' | 'FileText' | 'HelpCircle' | 'Users' | 'Zap' | 'Briefcase';
}

export const TASK_GROUPS_DATA: TaskGroupItem[] = [
  {
    id: 'need-website',
    stepNumber: '01',
    title: 'Muốn có website giới thiệu / bán hàng ngay',
    categoryBadge: 'Website 24h',
    headline: 'Có trang web chuyên nghiệp, hoạt động trong 24 giờ',
    description: 'Dành cho tiệm, doanh nghiệp cần trang web bán hàng hoặc giới thiệu chuẩn di động. Tích hợp sẵn nút gọi hotline, chat Zalo và bàn giao 100% tài khoản chính chủ.',
    priceTag: 'Từ 490.000đ',
    serviceNameForLead: 'Thiết kế Website giới thiệu & Bán hàng nhanh',
    features: [
      'Website chạy thật ngay trong 24 giờ',
      'Chuẩn di động, tốc độ tải trang nhanh mượt',
      'Tích hợp sẵn nút gọi Hotline & chat Zalo',
      'Bàn giao toàn bộ mã nguồn & tài khoản quản trị'
    ],
    ctaLabel: 'Tạo website ngay',
    iconName: 'Globe'
  },
  {
    id: 'need-maps',
    stepNumber: '02',
    title: 'Muốn đưa tiệm lên Google Maps & tìm kiếm địa phương',
    categoryBadge: 'Google Maps & SEO Local',
    headline: 'Khách tìm quanh đây thấy tiệm ngay trên bản đồ',
    description: 'Xác minh điểm Maps chính chủ, tối ưu danh mục chuẩn SEO Local và tặng bộ mã QR đánh giá 5 sao tại quầy để tiệm nổi bật hơn đối thủ cùng khu vực.',
    priceTag: 'Từ 490.000đ',
    serviceNameForLead: 'Xác minh & Tối ưu Google Maps địa phương',
    features: [
      'Xác minh điểm Google Maps chính chủ thành công',
      'Tối ưu từ khóa & danh mục tìm kiếm địa phương',
      'Tặng file in mã QR Review 5 sao để bàn tại quầy',
      'Hỗ trợ kháng nghị và xử lý khi Maps gặp sự cố'
    ],
    ctaLabel: 'Đưa tiệm lên Maps',
    iconName: 'MapPin'
  },
  {
    id: 'need-ads',
    stepNumber: '03',
    title: 'Muốn chạy quảng cáo Google/Facebook để lấy khách',
    categoryBadge: 'Quảng cáo & Ra Khách',
    headline: 'Kéo khách tiềm năng quanh khu vực gọi điện & nhắn tin',
    description: 'Thiết lập chiến dịch quảng cáo nhắm đúng bán kính khách hàng quanh điểm bán. Đo lường chính xác từng cuộc gọi và tin nhắn, không đốt tiền lãng phí.',
    priceTag: 'Từ 990.000đ',
    serviceNameForLead: 'Quảng cáo Google / Facebook kéo khách',
    features: [
      'Setup chiến dịch nhắm đúng tệp khách quanh khu vực',
      'Viết bài quảng cáo thu hút & thiết kế banner chỉn chu',
      'Đo lường minh bạch: đếm số cuộc gọi & tin nhắn phát sinh',
      'Báo cáo ngân sách chi tiết, tối ưu chi phí mỗi khách'
    ],
    ctaLabel: 'Tư vấn chạy quảng cáo',
    iconName: 'TrendingUp'
  },
  {
    id: 'need-content',
    stepNumber: '04',
    title: 'Muốn chăm sóc bài viết Fanpage & Website định kỳ',
    categoryBadge: 'Chăm sóc nội dung',
    headline: 'Giữ trang luôn sống động, uy tín dù bạn bận rộn',
    description: 'Không để Fanpage hay Website bị bỏ hoang tạo cảm giác ngừng hoạt động. Đội ngũ LocalMate lên bài đều đặn, thiết kế hình ảnh nhận diện và duy trì tương tác.',
    priceTag: 'Từ 1.200.000đ/tháng',
    serviceNameForLead: 'Chăm sóc nội dung Fanpage & Website định kỳ',
    features: [
      'Lên lịch đăng bài định kỳ theo tuần / tháng',
      'Thiết kế hình ảnh đồng bộ chuẩn nhận diện',
      'Nội dung thực tế, giải đáp thắc mắc người mua',
      'Duy trì uy tín vững chắc khi khách vào tìm hiểu'
    ],
    ctaLabel: 'Chăm sóc kênh ngay',
    iconName: 'FileText'
  },
  {
    id: 'need-consultation',
    stepNumber: '05',
    title: 'Cần tư vấn từ đầu chưa biết bắt đầu từ đâu',
    categoryBadge: 'Khảo sát 0đ',
    headline: 'Chưa rõ nên làm gì trước? Hãy để LocalMate khảo sát giúp',
    description: 'Bạn không cần am hiểu công nghệ. Hãy chia sẻ tình trạng hiện tại, LocalMate sẽ kiểm tra, phân tích đối thủ và tư vấn lộ trình đơn giản, tiết kiệm nhất.',
    priceTag: 'Khảo sát & Tư vấn 0đ',
    serviceNameForLead: 'Tư vấn giải pháp từ đầu chưa biết bắt đầu từ đâu',
    features: [
      'Khảo sát hiện trạng số hóa miễn phí 100%',
      'Tư vấn đúng thứ thực sự cần, không ép mua thừa',
      'Báo trước chi phí minh bạch trước khi bắt đầu',
      'Kỹ thuật viên đồng hành hỗ trợ trực tiếp 1-1'
    ],
    ctaLabel: 'Nhận tư vấn miễn phí',
    iconName: 'HelpCircle'
  }
];

// ==========================================
// 2. NĂM GÓI GIẢI PHÁP CHIẾN LƯỢC (CORE OFFERS)
// ==========================================
export interface CoreOfferItem {
  id: string;
  badge: string;
  name: string;
  targetAudience: string;
  description: string;
  pricingDisplay: string;
  priceNote: string;
  slaTime: string;
  workflowSteps: string[];
  deliverables: string[];
  serviceNameForLead: string;
  ctaText: string;
  highlighted?: boolean;
}

export const CORE_OFFERS_DATA: CoreOfferItem[] = [
  {
    id: 'offer-local-deployment',
    badge: 'TRIỂN KHAI TẠI CHỖ',
    name: 'Local Deployment',
    targetAudience: 'Nhà cung cấp POS, Camera, Thiết bị IoT, Mạng & Phần cứng',
    description: 'Dành cho các công việc cần kỹ thuật viên trực tiếp đến địa điểm khách hàng để khảo sát, setup, cài đặt, test và bàn giao.',
    pricingDisplay: 'Từ 500.000đ',
    priceNote: 'Remote từ 500k/job • Onsite từ 1.000k/job',
    slaTime: 'Phản hồi trong 2 giờ • Nghiệm thu có ảnh chụp',
    workflowSteps: [
      'Đối tác tạo ticket yêu cầu',
      'LocalMate phân bổ KTV địa phương',
      'Khảo sát & Lắp đặt tại chỗ',
      'Kiểm thử & Upload bằng chứng hình ảnh',
      'Khách hàng nghiệm thu & Đóng ticket'
    ],
    deliverables: [
      'Biên bản nghiệm thu & ảnh chụp thực địa',
      'Hỗ trợ kỹ thuật trực tiếp cho người dùng',
      'Cam kết thời gian phản hồi theo SLA'
    ],
    serviceNameForLead: 'Dịch vụ Local Deployment (Kỹ thuật tại chỗ)',
    ctaText: 'Gửi job nhận báo giá'
  },
  {
    id: 'offer-software-onboarding',
    badge: 'ONBOARDING SAAS',
    name: 'Software Onboarding',
    targetAudience: 'Công ty SaaS, Phần mềm CRM, ERP, Quản lý bán hàng & Kế toán',
    description: 'LocalMate thay đối tác onboarding khách hàng mới: import dữ liệu, cấu hình pipeline, tạo user, phân quyền và training nhân sự khách hàng.',
    pricingDisplay: '1 – 3 triệu',
    priceNote: 'Tính theo từng khách hàng hoặc gói số lượng lớn',
    slaTime: 'Bàn giao & Nghiệm thu từ 2 – 5 ngày',
    workflowSteps: [
      'Tiếp nhận thông tin khách hàng từ Sales',
      'Tạo tài khoản & Làm sạch, import dữ liệu',
      'Cấu hình quy trình, form & phân quyền',
      'Hướng dẫn 1-1 cho nhân sự khách hàng',
      'Nghiệm thu và bàn giao tài khoản hoàn tất'
    ],
    deliverables: [
      'Dữ liệu khách hàng được làm sạch & import chuẩn',
      'Tài liệu hướng dẫn sử dụng nhanh',
      'Khách hàng thực sự sử dụng được phần mềm'
    ],
    serviceNameForLead: 'Dịch vụ Software Onboarding cho SaaS',
    ctaText: 'Thuê LocalMate onboarding khách',
    highlighted: true
  },
  {
    id: 'offer-integration-automation',
    badge: 'TỰ ĐỘNG HÓA HỆ THỐNG',
    name: 'Integration & Automation',
    targetAudience: 'Doanh nghiệp dùng nhiều phần mềm rời rạc & Đội ngũ kinh doanh',
    description: 'Xử lý phần kết nối giữa các hệ thống: Website → CRM → Zalo → Email → Google Sheets → Kế toán bằng n8n, Make hoặc API chuyên dụng.',
    pricingDisplay: 'Từ 1.000.000đ',
    priceNote: 'Quy trình đơn giản: 1tr • Tiêu chuẩn: 2–5tr',
    slaTime: 'Hoàn thành từ 1 – 3 ngày làm việc',
    workflowSteps: [
      'Khảo sát luồng công việc đang làm thủ công',
      'Lập sơ đồ kết nối dữ liệu giữa các công cụ',
      'Cấu hình Webhook, n8n/Make hoặc API',
      'Test chạy thử nghiệm luồng dữ liệu 48h',
      'Bàn giao và hướng dẫn vận hành'
    ],
    deliverables: [
      'Dữ liệu tự động đồng bộ thời gian thực',
      'Thông báo tức thì qua Zalo / Telegram',
      'Không còn thao tác copy-paste thủ công'
    ],
    serviceNameForLead: 'Dịch vụ Integration & Automation',
    ctaText: 'Gửi quy trình muốn tự động hóa'
  },
  {
    id: 'offer-white-label-dev',
    badge: 'ĐỘI DEV PHÍA SAU',
    name: 'White-label Technical Team',
    targetAudience: 'Marketing, Ads, Branding & SEO Agency',
    description: 'LocalMate hoạt động như đội kỹ thuật phía sau agency. Khách cuối không cần biết LocalMate tồn tại. Bạn bán dịch vụ, LocalMate lo thực thi.',
    pricingDisplay: '3 – 10 triệu/th',
    priceNote: 'Theo khối lượng công việc hoặc tính theo từng ticket',
    slaTime: 'Có mặt ngay khi có ticket • Hỗ trợ liên tục',
    workflowSteps: [
      'Ký thỏa thuận bảo mật & White-label',
      'Agency giao việc (Landing page, CRM, Tracking...)',
      'LocalMate triển khai kỹ thuật chuẩn chỉnh',
      'QA kiểm thử kỹ lưỡng trước khi đưa khách',
      'Bảo trì và sửa lỗi xuyên suốt chiến dịch'
    ],
    deliverables: [
      'Toàn quyền thương hiệu thuộc về Agency',
      'Landing page, Tracking GA4/CAPI, Form, API',
      'Không phải đau đầu tuyển dụng và quản lý dev'
    ],
    serviceNameForLead: 'Dịch vụ White-label Technical Team cho Agency',
    ctaText: 'Có đội kỹ thuật mà không cần tuyển dev',
    highlighted: true
  },
  {
    id: 'offer-deployment-network',
    badge: 'MẠNG LƯỚI TOÀN QUỐC',
    name: 'LocalMate Deployment Network',
    targetAudience: 'Tập đoàn công nghệ, Chuỗi bán lẻ & Đơn vị mở rộng toàn quốc',
    description: 'Ký một hợp đồng duy nhất với LocalMate để gửi các job triển khai tại 63 tỉnh thành. LocalMate điều phối, giám sát SLA và nghiệm thu.',
    pricingDisplay: 'Theo hợp đồng khung',
    priceNote: 'Retainer quản trị + Phí theo đầu việc thực tế',
    slaTime: 'Độ phủ toàn quốc • SLA cam kết bằng hợp đồng',
    workflowSteps: [
      'Ký hợp đồng khung và quy chuẩn nghiệm thu',
      'Tích hợp hệ thống tiếp nhận ticket',
      'Điều phối kỹ thuật viên địa phương tiếp nhận',
      'Giám sát tiến độ & Kiểm soát chất lượng (QA)',
      'Tổng hợp báo cáo và đối soát định kỳ'
    ],
    deliverables: [
      'Một đầu mối quản lý duy nhất cho toàn quốc',
      'Tiết kiệm 60% chi phí so với tự mở chi nhánh',
      'Chất lượng triển khai đồng bộ ở mọi tỉnh thành'
    ],
    serviceNameForLead: 'Mạng lưới LocalMate Deployment Network',
    ctaText: 'Hợp tác mạng lưới toàn quốc'
  }
];

// ==========================================
// 3. BỐN TRỤ CỘT TRIẾT LÝ VẬN HÀNH (PHILOSOPHY)
// ==========================================
export interface PhilosophyPillarItem {
  id: string;
  iconName: 'BadgePercent' | 'KeyRound' | 'PhoneCall' | 'ShieldCheck' | 'Clock' | 'Layers' | 'Zap';
  title: string;
  summary: string;
  detail: string;
}

export const PHILOSOPHY_PILLARS_DATA: PhilosophyPillarItem[] = [
  {
    id: 'phil-cost-saving',
    iconName: 'BadgePercent',
    title: 'Tiết kiệm chi phí',
    summary: 'Chỉ làm những thứ đem lại khách hàng thật',
    detail: 'Loại bỏ những tính năng rườm rà, phần mềm cồng kềnh gây lãng phí. Mọi chi phí đều tập trung vào giao diện thực chiến, tốc độ mở trang siêu nhanh dưới 1 giây và các nút liên hệ trực tiếp đem về doanh thu.'
  },
  {
    id: 'phil-ownership',
    iconName: 'KeyRound',
    title: 'Minh bạch quyền sở hữu',
    summary: 'Tài khoản, dữ liệu, tên miền là của khách',
    detail: 'Không dùng chiêu trò khóa tài khoản hay giấu mã nguồn để giữ chân. Toàn bộ tên miền, hosting, fanpage, dữ liệu khách hàng và quyền quản trị đều được bàn giao đứng tên chính chủ của bạn 100%.'
  },
  {
    id: 'phil-direct-support',
    iconName: 'PhoneCall',
    title: 'Hỗ trợ trực tiếp',
    summary: 'Có người nghe máy và hỗ trợ khi phát sinh vấn đề',
    detail: 'Nói không với hệ thống ticket chậm chạp hay chatbot trả lời vòng vo. Khi cần hỗ trợ, bạn gọi hotline hoặc nhắn Zalo là có kỹ thuật viên nghe máy và xử lý ngay lập tức, không làm gián đoạn kinh doanh.'
  },
  {
    id: 'phil-longterm-companion',
    iconName: 'ShieldCheck',
    title: 'Đồng hành dài lâu',
    summary: 'Bàn giao xong vẫn có kỹ thuật viên túc trực',
    detail: 'LocalMate không bàn giao xong rồi bỏ mặc khách hàng. Đội ngũ tiếp tục đồng hành bảo trì kỹ thuật, sao lưu định kỳ và sẵn sàng hỗ trợ nâng cấp thêm tính năng khi tiệm hay doanh nghiệp của bạn mở rộng.'
  }
];

// ==========================================
// 4. QUY TRÌNH 5 BƯỚC MINH BẠCH (PROCESS STEPS)
// ==========================================
export interface OperationalStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  evidence: string;
}

export const OPERATIONAL_STEPS_DATA: OperationalStepItem[] = [
  {
    step: '01',
    title: 'Trao đổi nhanh nhu cầu',
    subtitle: 'Không cần biết kỹ thuật, chỉ cần nói điều bạn muốn làm',
    description: 'Bạn chỉ cần chia sẻ mục tiêu kinh doanh hoặc mẫu web bạn thích bằng ngôn ngữ đời thường. LocalMate lắng nghe và đề xuất giải pháp gọn gàng, tiết kiệm nhất.',
    evidence: 'Phản hồi trong 15 phút qua Zalo hoặc Hotline 0984.739.060'
  },
  {
    step: '02',
    title: 'Dựng web demo thực tế 0đ',
    subtitle: 'Bạn duyệt giao diện và tính năng trên điện thoại trước',
    description: 'LocalMate tạo bản web demo trực quan chạy thử nghiệm. Bạn trực tiếp mở xem trên smartphone, bấm thử từng nút, duyệt ưng ý rồi mới quyết định làm.',
    evidence: 'Có link chạy thử trong 24h • 0đ chi phí rủi ro'
  },
  {
    step: '03',
    title: 'Báo giá trọn gói minh bạch',
    subtitle: 'Chốt giá cố định, không phụ phí phát sinh',
    description: 'Báo giá rõ ràng từng hạng mục trước khi thực hiện. Cam kết mức giá trọn gói cố định theo thỏa thuận, tuyệt đối không có bất kỳ chi phí ẩn nào.',
    evidence: 'Báo giá cố định kèm checklist hạng mục nghiệm thu'
  },
  {
    step: '04',
    title: 'Hoàn thiện & Nghiệm thu',
    subtitle: 'Kiểm tra tốc độ, kết nối tên miền và hotline',
    description: 'Thi công hoàn thiện, kiểm tra tốc độ tải trang dưới 1 giây, kết nối tên miền riêng, kích hoạt hotline gọi nhanh, nút Zalo và vị trí Google Maps.',
    evidence: 'Kiểm tra PageSpeed > 90đ & test trực tiếp cuộc gọi'
  },
  {
    step: '05',
    title: 'Bàn giao 100% tài khoản & Hỗ trợ',
    subtitle: 'Khách hàng làm chủ toàn bộ tài khoản',
    description: 'Bàn giao toàn bộ tài khoản quản trị tên miền, hosting và mã nguồn. Hướng dẫn sử dụng chi tiết 1-1 và kỹ thuật viên luôn túc trực hỗ trợ khi cần.',
    evidence: 'Khách hàng nắm 100% tài khoản chính chủ + Hỗ trợ kỹ thuật'
  }
];

// ==========================================
// 5. SẢN PHẨM BÀN GIAO THỰC TẾ (DELIVERABLES)
// ==========================================
export interface DeliverableDetail {
  label: string;
  value: string;
  isHighlight?: boolean;
}

export interface DeliverableItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  checklist: string[];
  mockup: {
    type: 'website' | 'admin' | 'maps' | 'content' | 'ads';
    headerTitle: string;
    subtext: string;
    details: DeliverableDetail[];
    actionLabel?: string;
  };
}

export const DELIVERABLES_DATA: DeliverableItem[] = [
  {
    id: 'deliv-website',
    number: '01',
    badge: 'Bàn giao thực tế',
    title: 'Website hoàn chỉnh chuẩn SEO & Di động',
    tagline: 'Tốc độ mở trang < 1s, chuẩn SEO on-page, nút gọi Hotline & Zalo 1 chạm',
    description: 'Trang web được thiết kế tỉ mỉ, tối ưu hiển thị 100% trên điện thoại thông minh, máy tính bảng và laptop. Tích hợp đầy đủ nút gọi hotline, nhắn Zalo trực tiếp, bảng giá/thực đơn và bản đồ chỉ đường.',
    checklist: [
      'Giao diện tương thích 100% mọi màn hình điện thoại & laptop',
      'Nút gọi Hotline và chat Zalo nổi bật, bấm là liên hệ ngay',
      'Cấu hình chuẩn thẻ SEO Google, OpenGraph mạng xã hội và sitemap',
      'Bàn giao toàn bộ mã nguồn hoặc quyền quản trị tên miền & hosting'
    ],
    mockup: {
      type: 'website',
      headerTitle: 'https://tiem-cua-ban.localmate.vn',
      subtext: 'Bản xem trước website di động tối ưu chuyển đổi',
      details: [
        { label: 'Tốc độ tải trang', value: '< 0.8 giây (Google PageSpeed 95+)', isHighlight: true },
        { label: 'Nút liên hệ nhanh', value: 'Hotline 1-chạm & Chat Zalo tích hợp', isHighlight: true },
        { label: 'Cấu trúc nội dung', value: 'Giới thiệu + Bảng giá + Đặt hẹn/Menu' },
        { label: 'Quyền sở hữu', value: '100% tài khoản chính chủ của khách' }
      ],
      actionLabel: 'Xem website thật đang chạy'
    }
  },
  {
    id: 'deliv-admin',
    number: '02',
    badge: 'Bàn giao thực tế',
    title: 'Bàn giao trang quản trị tiếng Việt đơn giản',
    tagline: 'Giao diện trực quan, tự sửa bài viết và cập nhật giá trong 3 phút',
    description: 'Bảng điều khiển quản trị được Việt hóa hoàn toàn, giao diện trực quan như dùng mạng xã hội. Chủ quán hay nhân viên đều có thể tự sửa giá món, thêm hình ảnh thực tế hay viết bài mới chỉ trong 3 phút.',
    checklist: [
      'Giao diện 100% tiếng Việt, loại bỏ toàn bộ thuật ngữ kỹ thuật phức tạp',
      'Thao tác sửa giá, đổi ảnh thực đơn, thêm dịch vụ chỉ trong 3 phút',
      'Video ngắn (1-2 phút) quay màn hình hướng dẫn riêng theo từng cơ sở',
      'Cấp tài khoản quản trị riêng biệt, phân quyền và bảo mật 2 lớp'
    ],
    mockup: {
      type: 'admin',
      headerTitle: 'Trang quản trị: admin.tiem-cua-ban.vn',
      subtext: 'Bảng điều khiển trực quan dành riêng cho chủ cơ sở',
      details: [
        { label: 'Sửa bảng giá / thực đơn', value: 'Mở form → Nhập giá mới → Bấm Lưu (30 giây)', isHighlight: true },
        { label: 'Đăng bài viết / ưu đãi', value: 'Soạn tiêu đề, tải ảnh và xuất bản tức thì' },
        { label: 'Thời gian làm quen', value: 'Dưới 3 phút nhờ giao diện tối giản' },
        { label: 'Hỗ trợ kỹ thuật', value: 'LocalMate kèm video clip 1-2 phút riêng biệt' }
      ]
    }
  },
  {
    id: 'deliv-maps',
    number: '03',
    badge: 'Bàn giao thực tế',
    title: 'Hồ sơ Google Business & Google Maps',
    tagline: 'Địa chỉ tiệm xác minh chính chủ, hiển thị số hotline & hình ảnh cửa hàng',
    description: 'Vị trí cơ sở kinh doanh được ghim chính xác trên bản đồ Google Maps và bàn giao quyền sở hữu vào Gmail của chính bạn. Khách hàng tìm kiếm quanh khu vực sẽ thấy ngay số điện thoại, giờ mở cửa và đánh giá.',
    checklist: [
      'Xác minh chính chủ liên kết trực tiếp vào tài khoản Google của bạn',
      'Ghim định vị chính xác vị trí cơ sở trên bản đồ Google Maps',
      'Cập nhật đầy đủ số hotline, giờ mở cửa, menu và hình ảnh thực tế',
      'Cung cấp mã QR để bàn giúp khách quét đánh giá 5 sao nhanh chóng'
    ],
    mockup: {
      type: 'maps',
      headerTitle: 'Google Maps: Doanh nghiệp đã xác minh',
      subtext: 'Hiện diện trực tiếp trên bản đồ tìm kiếm địa phương',
      details: [
        { label: 'Tình trạng hồ sơ', value: 'Đã xác minh chính chủ (Owner: Gmail của bạn)', isHighlight: true },
        { label: 'Thông tin hiển thị', value: 'Địa chỉ chuẩn, Số điện thoại, Giờ mở cửa hàng ngày' },
        { label: 'Hành động nhanh', value: 'Nút Chỉ đường Maps + Nút Gọi điện thoại trực tiếp' },
        { label: 'Bộ công cụ kèm theo', value: 'Mã QR in để bàn nhận đánh giá 5 sao từ khách' }
      ]
    }
  },
  {
    id: 'deliv-content',
    number: '04',
    badge: 'Bàn giao thực tế',
    title: 'Lịch biên tập nội dung & Kế hoạch bài viết',
    tagline: 'Kế hoạch bài viết Facebook / Web theo tháng rõ ràng từng tiêu đề & ngày đăng',
    description: 'Bảng kế hoạch bài viết chi tiết được chia sẻ trực tiếp qua Google Sheets. Từng tiêu đề, góc tiếp cận (giới thiệu dịch vụ, tư vấn khách, chia sẻ bí quyết, ưu đãi) và ngày đăng đều được bạn duyệt trước khi xuất bản.',
    checklist: [
      'Kế hoạch nội dung theo tháng lập trên Google Sheets rõ ràng, minh bạch',
      'Chi tiết từng tiêu đề, góc tiếp cận, thông điệp và ngày đăng cụ thể',
      'Nội dung bám sát dịch vụ thực tế, tuyệt đối không dùng văn mẫu AI sáo rỗng',
      'Khách hàng xem duyệt và chỉnh sửa trước khi bài được đăng lên Fanpage/Web'
    ],
    mockup: {
      type: 'content',
      headerTitle: 'Lịch biên tập: Google Sheets đồng bộ realtime',
      subtext: 'Bảng theo dõi kế hoạch xuất bản nội dung minh bạch theo tháng',
      details: [
        { label: 'Tần suất xuất bản', value: '8 - 12 bài viết chuẩn hóa / tháng', isHighlight: true },
        { label: 'Phân loại bài viết', value: '30% Bài chuyên môn • 40% Dịch vụ thật • 30% Ưu đãi' },
        { label: 'Quy trình kiểm duyệt', value: 'Lên bài → Khách duyệt → Đăng đúng giờ hẹn' },
        { label: 'Cam kết nội dung', value: 'Viết đúng thực tế cơ sở, không copy đối thủ' }
      ]
    }
  },
  {
    id: 'deliv-ads',
    number: '05',
    badge: 'Bàn giao thực tế',
    title: 'Báo cáo quảng cáo minh bạch 100%',
    tagline: 'Số liệu lượt nhấp & chi phí thật trên tài khoản quảng cáo của chính khách hàng',
    description: 'Chiến dịch quảng cáo Facebook hoặc Google Ads được cài đặt trực tiếp trên Trình quản lý quảng cáo của chính bạn. Tiền quảng cáo trừ thẳng vào thẻ ngân hàng của bạn, LocalMate thu phí quản lý cố định, 0% kê giá.',
    checklist: [
      'Cài đặt trực tiếp trên Tài khoản Quảng cáo thuộc quyền sở hữu của bạn',
      'Tiền quảng cáo thanh toán thẳng cho Meta / Google từ thẻ của bạn',
      'Báo cáo minh bạch số lượt tiếp cận, lượt click, chi phí trên mỗi tin nhắn',
      'Tuyệt đối không kê giá, không ăn chênh lệch ngân sách quảng cáo'
    ],
    mockup: {
      type: 'ads',
      headerTitle: 'Báo cáo: Trình quản lý quảng cáo chính chủ',
      subtext: 'Minh bạch 100% ngân sách và số liệu chuyển đổi thực tế',
      details: [
        { label: 'Chủ tài khoản Ads', value: 'Tài khoản của bạn (Bạn tự nắm quyền & giữ thẻ thanh toán)', isHighlight: true },
        { label: 'Ngân sách thực tế', value: '0% kê giá • Hóa đơn trừ tiền xuất từ Facebook/Google' },
        { label: 'Chỉ số đo lường thật', value: 'Lượt tiếp cận, Click website, Cuộc gọi & Tin nhắn' },
        { label: 'Hình thức tính phí', value: 'Phí dịch vụ kỹ thuật cố định, không ăn % ngân sách' }
      ]
    }
  }
];

// ==========================================
// 6. MINH CHỨNG NĂNG LỰC "BUILD & TEST CÔNG KHAI"
// ==========================================
export interface ProofShowcaseItem {
  id: string;
  tag: string;
  title: string;
  context: string;
  solutionBuilt: string;
  executionTime: string;
  metrics: string;
}

export const PROOF_SHOWCASE_DATA: ProofShowcaseItem[] = [
  {
    id: 'case-lead-automation',
    tag: 'WORKFLOW TỰ ĐỘNG HÓA',
    title: 'Hệ thống gom lead tự động không cần mua CRM đắt tiền',
    context: 'Một tiệm dịch vụ tiếp nhận khách từ cả Form Website, Zalo và tin nhắn Fanpage. Trước đây chủ quán phải mở 3 tab, thường xuyên sót khách vào giờ cao điểm.',
    solutionBuilt: 'Xây dựng luồng tự động (n8n): Khách để lại thông tin ở bất kỳ đâu → Đẩy ngay về 1 Google Sheet quản lý chung + Bắn tin nhắn thông báo tức thì vào Zalo chủ tiệm.',
    executionTime: 'Triển khai trong 2 giờ làm việc',
    metrics: '0 lead bị bỏ sót • Giảm 100% thao tác copy-paste'
  },
  {
    id: 'case-website-24h',
    tag: 'HIỆN DIỆN SỐ 24H',
    title: 'Website giới thiệu dịch vụ chuẩn UX mở siêu nhanh trong 24 giờ',
    context: 'Một cơ sở kinh doanh dịch vụ cần trang web gấp để gửi cho đối tác và chạy quảng cáo ngay trong tuần, nhưng ngại các agency báo giá hàng chục triệu và làm mất 1 tháng.',
    solutionBuilt: 'Sử dụng cấu trúc chuẩn hóa: Tên miền riêng, hosting tốc độ cao, bảng giá công khai, mã QR Maps 5 sao và nút gọi điện thoại/Zalo nổi bật trên di động.',
    executionTime: 'Hoàn thành và bàn giao trong đúng 24 giờ',
    metrics: 'Tốc độ tải trang < 0.8s • Bàn giao 100% tài khoản'
  },
  {
    id: 'case-saas-onboarding',
    tag: 'TRIỂN KHAI ĐỐI TÁC SAAS',
    title: 'Onboarding và cấu hình phần mềm bán hàng cho 12 chi nhánh tỉnh',
    context: 'Một công ty SaaS tại TP.HCM ký được hợp đồng với chuỗi cửa hàng tại Đà Nẵng và Quảng Nam nhưng không thể cử nhân sự kỹ thuật bay ra để cài đặt từng điểm.',
    solutionBuilt: 'Kỹ thuật viên LocalMate tại địa phương tiếp nhận ticket: Đến từng cửa hàng khảo sát mạng, cài đặt phần mềm lên máy POS, import danh mục 2.000 sản phẩm và training cho thu ngân.',
    executionTime: 'Hoàn tất toàn bộ 12 điểm trong 3 ngày',
    metrics: 'Nghiệm thu 100% kèm ảnh thực tế • Tỷ lệ active 100%'
  }
];

// ==========================================
// 6. CÂU HỎI THƯỜNG GẶP THỰC TẾ (FAQ)
// ==========================================
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'mo-hinh' | 'chi-phi' | 'bao-hanh';
}

export const OPERATION_FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Tôi chưa có website và không rành công nghệ thì bắt đầu thế nào?',
    answer: 'Bạn hoàn toàn không cần hiểu kỹ thuật hay chuẩn bị tài liệu phức tạp. Bạn chỉ cần nói cho LocalMate biết: bạn đang kinh doanh dịch vụ gì, địa chỉ ở đâu, số hotline/Zalo nhận khách và bảng giá cơ bản. Đội ngũ LocalMate sẽ thay bạn làm toàn bộ: từ gợi ý bố cục, viết nội dung dễ hiểu, chọn hình ảnh phù hợp đến dựng bản web chạy thử để bạn duyệt trực tiếp.',
    category: 'mo-hinh'
  },
  {
    id: 'faq-2',
    question: 'Dựng web demo 0đ trước có bị mất phí hay ép ký hợp đồng không?',
    answer: 'Hoàn toàn KHÔNG. LocalMate dựng website demo xem trước hoàn toàn 0 đồng. Bạn được bấm thử giao diện hoạt động thực tế trên cả máy tính và điện thoại. Nếu bạn hài lòng và thấy ưng ý thì mới tiến hành ký hợp đồng triển khai chính thức. Nếu không thích, bạn hoàn toàn không phải trả bất kỳ chi phí nào và không có bất kỳ ràng buộc nào.',
    category: 'mo-hinh'
  },
  {
    id: 'faq-3',
    question: 'Sau khi làm xong, tôi có được giữ toàn quyền tài khoản không?',
    answer: '100% tài khoản chính chủ thuộc về bạn. Khi bàn giao, LocalMate chuyển giao toàn bộ quyền quản trị cao nhất: tên miền (Domain), hosting, tài khoản Google Maps Business, fanpage và mã nguồn website. Bạn là chủ sở hữu hợp pháp duy nhất và có thể tự do chuyển đổi, nâng cấp hoặc mang đi nơi khác bất cứ lúc nào mà không bao giờ bị phụ thuộc kỹ thuật vào LocalMate.',
    category: 'bao-hanh'
  },
  {
    id: 'faq-4',
    question: 'Giá báo đã là trọn gói chưa, có phát sinh chi phí gì khác không?',
    answer: 'Giá báo của LocalMate là giá TRỌN GÓI NIÊM YẾT MINH BẠCH, tuyệt đối không có chi phí ẩn. Báo giá đã bao gồm toàn bộ: thiết kế giao diện, cấu hình tên miền, chứng chỉ bảo mật SSL, tối ưu hiển thị di động và bảo hành kỹ thuật. Chỉ khi bạn chủ động yêu cầu mở rộng thêm tính năng mới ngoài phạm vi ban đầu, hai bên mới trao đổi báo giá rõ ràng trước khi làm.',
    category: 'chi-phi'
  },
  {
    id: 'faq-5',
    question: 'Nếu cần chỉnh sửa nội dung sau khi bàn giao thì sao?',
    answer: 'Website được thiết kế với cấu trúc tinh gọn, dễ quản lý. LocalMate sẽ gửi video hướng dẫn ngắn (2–3 phút) chỉ bạn cách thay đổi số điện thoại, đổi giá dịch vụ, thêm hình ảnh mới. Ngoài ra, tất cả các gói dịch vụ luôn bao gồm hỗ trợ kỹ thuật trực tiếp qua Zalo/Hotline. Khi bạn bận rộn, chỉ cần nhắn tin yêu cầu, đội ngũ kỹ thuật LocalMate sẽ hỗ trợ cập nhật nhanh cho bạn.',
    category: 'bao-hanh'
  },
  {
    id: 'faq-6',
    question: 'Thời gian hoàn thành một website thường mất bao lâu?',
    answer: 'Với gói hiện diện số và website bán dịch vụ chuẩn, LocalMate hoàn thiện và bàn giao chạy thực tế chỉ trong vòng 24 đến 48 giờ kể từ khi nhận đủ thông tin cơ bản. Với các dự án có thêm tính năng tự động hóa quy trình hoặc kết nối phần mềm quản lý (CRM), thời gian triển khai từ 3 đến 5 ngày làm việc. Mọi mốc thời gian đều được cam kết rõ ràng bằng văn bản.',
    category: 'mo-hinh'
  }
];
