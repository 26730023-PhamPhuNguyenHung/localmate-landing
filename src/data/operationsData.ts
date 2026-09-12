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

export interface TaskGroupItem {
  id: string;
  stepNumber: string;
  title: string;
  categoryBadge: string;
  problemType: 'no-web' | 'has-web-no-leads' | 'growth-ads' | 'maintenance' | 'consultation';
  problemLabel: string;
  painPoint: string;
  headline: string;
  description: string;
  priceTag: string;
  serviceNameForLead: string;
  features: string[];
  slaTime: string;
  ctaLabel: string;
  iconName: 'Globe' | 'MapPin' | 'TrendingUp' | 'FileText' | 'HelpCircle' | 'Users' | 'Zap' | 'Briefcase';
}

export const TASK_GROUPS_DATA: TaskGroupItem[] = [
  {
    id: 'need-website',
    stepNumber: '01',
    title: 'Chưa có website & Chưa có mặt trên Google Maps',
    categoryBadge: 'Khởi tạo hiện diện số',
    problemType: 'no-web',
    problemLabel: 'Chưa có web',
    painPoint: 'Khách tìm kiếm trên Google/Zalo không thấy tiệm, chưa có bảng giá uy tín để gửi khách xem nhanh.',
    headline: 'Website chuẩn di động hoạt động ngay trong 24 giờ',
    description: 'Dành cho cơ sở kinh doanh cần trang web giới thiệu dịch vụ hoặc bán hàng ngay. Bàn giao 100% tài khoản chính chủ, ghim chuẩn tọa độ Google Maps GPS và gắn sẵn nút gọi Hotline, Zalo 1 chạm. Cam kết đồng hành kỹ thuật 5 năm.',
    priceTag: 'Từ 490.000đ',
    serviceNameForLead: 'Làm website mới & Định vị Google Maps 24h',
    features: [
      'Website chạy thật ngay trong 24 giờ',
      'Định vị tọa độ Google Maps GPS chính xác',
      'Nút gọi Hotline & chat Zalo 1 chạm ra khách ngay',
      'Bàn giao 100% tài khoản chính chủ & đồng hành kỹ thuật 5 năm'
    ],
    slaTime: 'Bàn giao trong 24 giờ',
    ctaLabel: 'Nhận web demo 0đ',
    iconName: 'Globe'
  },
  {
    id: 'has-web-no-leads',
    stepNumber: '02',
    title: 'Đã có website nhưng tải chậm, không ra khách',
    categoryBadge: 'Cải tổ & Tối ưu chuyển đổi',
    problemType: 'has-web-no-leads',
    problemLabel: 'Có web chưa ra khách',
    painPoint: 'Web cũ mở chậm trên 3 giây, vỡ khung trên điện thoại, khách vào rồi thoát ra mà không gọi điện hay nhắn tin.',
    headline: 'Thiết kế lại giao diện tối ưu chuyển đổi, tốc độ mở trang < 1s',
    description: 'Cải tạo toàn diện web cũ: tăng tốc độ tải trang đạt 95+ điểm Google PageSpeed, tích hợp cấu trúc dữ liệu Schema JSON-LD LocalBusiness, sắp xếp lại bảng giá rõ ràng và cài đặt đo lường chính xác từng cuộc gọi của khách.',
    priceTag: 'Từ 990.000đ',
    serviceNameForLead: 'Tối ưu website cũ & Tăng tỉ lệ chuyển đổi ra khách',
    features: [
      'Tốc độ mở trang dưới 1 giây (PageSpeed 95+)',
      'Giao diện chuẩn di động tối ưu nút gọi Hotline & Zalo',
      'Cấu trúc dữ liệu Schema JSON-LD LocalBusiness chuẩn SEO',
      'Đo lường chính xác số cuộc gọi & tin nhắn phát sinh'
    ],
    slaTime: 'Hoàn thiện trong 48 giờ',
    ctaLabel: 'Audit web miễn phí',
    iconName: 'Zap'
  },
  {
    id: 'growth-ads-seo',
    stepNumber: '03',
    title: 'Muốn chạy quảng cáo & SEO Local để kéo khách ngay',
    categoryBadge: 'Quảng cáo & Kéo khách',
    problemType: 'growth-ads',
    problemLabel: 'Quảng cáo & SEO',
    painPoint: 'Cần kéo khách mới quanh bán kính 3-10km gọi điện ghé tiệm, nhưng sợ bị đơn vị ngoài kê giá, click tặc hoặc bị khóa tài khoản quảng cáo sửa chữa.',
    headline: 'Chiến dịch Google & Facebook nhắm đúng khách quanh điểm bán',
    description: 'Thiết lập quảng cáo trực tiếp trên tài khoản của chính bạn (0% kê giá, tiền trừ thẳng thẻ ngân hàng). Có sẵn giải pháp kháng lỗi Ads dịch vụ sửa thiết bị/điện lạnh tại nhà, tối ưu từ khóa thực chiến đem về cuộc gọi và khách ghé tiệm thật.',
    priceTag: 'Từ 990.000đ',
    serviceNameForLead: 'Quảng cáo Google / Facebook kéo khách địa phương',
    features: [
      'Quảng cáo trên chính tài khoản của bạn (0% kê giá)',
      'Chuyên môn kháng lỗi Ads sửa thiết bị & dịch vụ tại nhà',
      'Nhắm đúng bán kính 3-10km khách hàng quanh tiệm',
      'Báo cáo minh bạch chi phí trên từng cuộc gọi & lượt ghé tiệm'
    ],
    slaTime: 'Lên chiến dịch trong 24 giờ',
    ctaLabel: 'Tư vấn chạy quảng cáo',
    iconName: 'TrendingUp'
  },
  {
    id: 'need-maintenance',
    stepNumber: '04',
    title: 'Cần đội kỹ thuật túc trực & Chăm sóc nội dung định kỳ',
    categoryBadge: 'Đội kỹ thuật đồng hành',
    problemType: 'maintenance',
    problemLabel: 'Kỹ thuật & Chăm sóc',
    painPoint: 'Bận bán hàng không có thời gian viết bài cập nhật web/fanpage; khi web gặp trục trặc không có ai xử lý ngay.',
    headline: 'Phòng kỹ thuật số ngoài: Có mặt xử lý trong 2 giờ',
    description: 'LocalMate túc trực như đội IT riêng với cam kết đồng hành kỹ thuật 5 năm: cập nhật bài viết và ưu đãi định kỳ, bảo trì hệ thống an toàn, sao lưu dữ liệu và xử lý sự cố tức thì qua Zalo/Hotline.',
    priceTag: 'Từ 1.200.000đ/tháng',
    serviceNameForLead: 'Thuê phòng kỹ thuật số & Chăm sóc nội dung định kỳ',
    features: [
      'Cam kết đồng hành kỹ thuật 5 năm bền vững',
      'Xử lý sự cố kỹ thuật trong vòng 2 giờ',
      'Đăng bài viết & banner ưu đãi đều đặn hàng tuần',
      'Kỹ thuật viên túc trực hỗ trợ 1-1 trực tiếp qua Zalo'
    ],
    slaTime: 'Phản hồi trong 15 phút',
    ctaLabel: 'Đăng ký đồng hành',
    iconName: 'FileText'
  },
  {
    id: 'need-consultation',
    stepNumber: '05',
    title: 'Chưa biết bắt đầu từ đâu, cần khảo sát giải pháp 0đ',
    categoryBadge: 'Khảo sát giải pháp 0đ',
    problemType: 'consultation',
    problemLabel: 'Tư vấn từ đầu',
    painPoint: 'Không rành về công nghệ, sợ mua phải phần mềm cồng kềnh tốn kém mà không dùng đến.',
    headline: 'Khảo sát hiện trạng & Lập phương án tiết kiệm nhất',
    description: 'Bạn chỉ cần chia sẻ loại hình kinh doanh và ngân sách dự kiến. Kỹ thuật viên LocalMate sẽ khảo sát, gợi ý gói dịch vụ giá gốc chỉ từ 490k - 2.9tr/tháng và dựng bản demo xem trước hoàn toàn 0 đồng.',
    priceTag: 'Khảo sát 0đ',
    serviceNameForLead: 'Khảo sát hiện trạng & Tư vấn giải pháp 0đ',
    features: [
      'Khảo sát hiện trạng số hóa miễn phí 100%',
      'Tư vấn đúng việc cần làm, mức giá từ gốc chỉ từ 490k - 2.9tr/tháng',
      'Báo giá cố định minh bạch trước khi bắt đầu',
      'Dựng bản web demo xem thử trên điện thoại không ràng buộc'
    ],
    slaTime: 'Phản hồi trong 15 phút',
    ctaLabel: 'Nhận tư vấn 0đ',
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
    id: 'geo-local',
    badge: 'ĐỀ XUẤT AI & GEO LOCAL',
    name: 'Tối ưu đề xuất AI (GEO Local)',
    targetAudience: 'Cơ sở kinh doanh, quán ăn, nha khoa, thẩm mỹ, gara & dịch vụ địa phương',
    description: 'Tối ưu hóa khả năng được các mô hình AI thế hệ mới (ChatGPT, Google Gemini, Perplexity, Copilot) nhận diện và ưu tiên đề xuất đầu tiên khi khách hàng địa phương hỏi mua dịch vụ.',
    pricingDisplay: '2.900.000đ/tháng',
    priceNote: 'Gói định kỳ hàng tháng • Báo cáo xuất hiện AI minh bạch',
    slaTime: 'Cấu hình hoàn tất trong 48 giờ • Giám sát & đo lường liên tục',
    workflowSteps: [
      'Prompt Benchmark: Đo lường tỷ lệ xuất hiện hiện tại trên ChatGPT, Gemini, Perplexity',
      'Chuẩn hóa cấu trúc dữ liệu Schema.org LocalBusiness (JSON-LD) chuyên sâu cho AI crawlers',
      'Tạo & kích hoạt tệp llms.txt, llms-full.txt để các AI Bots nạp dữ liệu chính xác',
      'Đồng bộ NAP (Tên - Địa chỉ - Hotline) & thực thể Entity trên Google Maps và danh bạ địa phương',
      'Xây dựng bộ câu hỏi ngữ nghĩa (FAQ Schema) chuẩn văn phong đối thoại của người dùng hỏi AI',
      'Đo lường định kỳ, kiểm tra thứ hạng đề xuất và gửi báo cáo kết quả thực tế'
    ],
    deliverables: [
      'Báo cáo kiểm toán (Audit) tỷ lệ được AI đề xuất trên 4 nền tảng lớn (ChatGPT, Gemini, Perplexity, Copilot)',
      'Cấu hình bộ Schema JSON-LD LocalBusiness & GeoCoordinates nâng cao giúp AI bots đọc hiểu 100%',
      'Thiết lập tệp llms.txt & llms-full.txt trên tên miền chính thức để cung cấp dữ liệu sạch cho AI',
      'Đồng bộ thực thể thương hiệu (Entity Alignment) và chuẩn hóa thông tin NAP trên toàn bộ kênh số',
      'Tối ưu hồ sơ Google Business Profile liên kết chặt chẽ với thực thể doanh nghiệp trên Knowledge Graph',
      'Xây dựng bộ nội dung hỏi - đáp ngữ nghĩa (FAQ Conversational Content) mô phỏng câu hỏi khách hàng',
      'Chiến lược trích dẫn thực thể (Citation Boost) tại các nguồn tham chiếu mà AI tin cậy',
      'Báo cáo đo lường định kỳ hàng tháng về tần suất xuất hiện và vị thế thương hiệu khi AI trả lời'
    ],
    serviceNameForLead: 'Gói Tối ưu đề xuất AI (GEO Local) 2.900.000đ/tháng',
    ctaText: 'Đăng ký tối ưu đề xuất AI',
    highlighted: true
  },
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
    title: 'Cam kết đồng hành kỹ thuật 5 năm',
    summary: 'Bàn giao xong vẫn có kỹ thuật viên túc trực hỗ trợ suốt 5 năm',
    detail: 'LocalMate không bàn giao xong rồi bỏ mặc khách hàng. Đội ngũ cam kết đồng hành kỹ thuật 5 năm: túc trực bảo trì hệ thống, sao lưu định kỳ, bảo vệ an toàn tài khoản chính chủ và hỗ trợ 1-1 trực tiếp qua Hotline/Zalo. Mức giá từ gốc chỉ từ 490k đến 2.9tr/tháng, tuyệt đối không có chi phí ẩn.'
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
    tagline: 'Tốc độ mở trang < 1s, cấu trúc Schema JSON-LD LocalBusiness, nút gọi Hotline & Zalo 1 chạm',
    description: 'Trang web được thiết kế tỉ mỉ, tối ưu hiển thị 100% trên điện thoại thông minh, máy tính bảng và laptop. Tích hợp đầy đủ nút gọi hotline, nhắn Zalo trực tiếp, bảng giá/thực đơn, bản đồ chỉ đường và cấu trúc dữ liệu Schema JSON-LD để Google xếp hạng cao. Đi kèm cam kết đồng hành kỹ thuật 5 năm.',
    checklist: [
      'Giao diện tương thích 100% mọi màn hình điện thoại & laptop, tải nhanh < 1s',
      'Nút gọi Hotline và chat Zalo nổi bật bấm là kết nối ngay khách hàng',
      'Cấu hình mã Schema.org LocalBusiness & sitemap chuẩn SEO Google',
      'Bàn giao 100% tài khoản chính chủ kèm cam kết đồng hành kỹ thuật 5 năm'
    ],
    mockup: {
      type: 'website',
      headerTitle: 'https://tiem-cua-ban.localmate.vn',
      subtext: 'Bản xem trước website di động tối ưu chuyển đổi',
      details: [
        { label: 'Tốc độ tải trang', value: '< 0.8 giây (Google PageSpeed 95+)', isHighlight: true },
        { label: 'Nút liên hệ nhanh', value: 'Hotline 1-chạm & Chat Zalo tích hợp', isHighlight: true },
        { label: 'Cấu trúc Schema', value: 'LocalBusiness + GeoCoordinates + Service' },
        { label: 'Quyền sở hữu', value: '100% tài khoản chính chủ • Đồng hành 5 năm' }
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
    description: 'Bảng điều khiển quản trị được Việt hóa hoàn toàn, giao diện trực quan như dùng mạng xã hội. Chủ quán hay nhân viên đều có thể tự sửa giá món, thêm hình ảnh thực tế hay viết bài mới chỉ trong 3 phút mà không cần biết code.',
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
        { label: 'Hỗ trợ kỹ thuật', value: 'LocalMate túc trực hỗ trợ 1-1 qua Zalo suốt 5 năm' }
      ]
    }
  },
  {
    id: 'deliv-maps',
    number: '03',
    badge: 'Bàn giao thực tế',
    title: 'Hồ sơ Google Business & Google Maps GPS Chuẩn Xác',
    tagline: 'Tọa độ GPS chính xác từng mét, đồng bộ thực thể Entity NAP với Knowledge Graph, mã QR Review 5 sao thật',
    description: 'Vị trí cơ sở được ghim đúng tọa độ GPS thực tế trên bản đồ Google Maps, đồng bộ chuẩn xác Tên - Địa chỉ - Số điện thoại (NAP) với mạng lưới thực thể Entity. Bàn giao quyền sở hữu vào Gmail của bạn, hướng dẫn xin đánh giá 5 sao thật (nói KHÔNG với review ảo).',
    checklist: [
      'Định vị tọa độ Google Maps GPS chính xác 100% từng mét thực địa',
      'Đồng bộ thực thể Entity NAP trên Google Knowledge Graph & Local Pack',
      'Xác minh chính chủ liên kết trực tiếp vào tài khoản Google của bạn',
      'Cung cấp mã QR để bàn giúp khách quét đánh giá 5 sao thật nhanh chóng'
    ],
    mockup: {
      type: 'maps',
      headerTitle: 'Google Maps: Doanh nghiệp đã xác minh GPS',
      subtext: 'Hiện diện trực tiếp trên bản đồ tìm kiếm địa phương',
      details: [
        { label: 'Định vị tọa độ', value: 'GPS chính xác thực địa • Khớp chỉ đường Maps', isHighlight: true },
        { label: 'Tình trạng hồ sơ', value: 'Đã xác minh chính chủ (Owner: Gmail của bạn)' },
        { label: 'Đồng bộ Entity', value: 'Khớp NAP trên Knowledge Graph & Danh bạ uy tín' },
        { label: 'Mã QR Review', value: 'Mã QR in để bàn nhận đánh giá 5 sao thật từ khách' }
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
    title: 'Báo cáo quảng cáo minh bạch 100% & Kháng lỗi Ads chuyên sâu',
    tagline: 'Số liệu lượt nhấp & chi phí thật trên tài khoản của bạn, có sẵn giải pháp kháng lỗi Ads sửa thiết bị',
    description: 'Chiến dịch Google & Facebook Ads được cài đặt trực tiếp trên Trình quản lý quảng cáo chính chủ của bạn (tiền trừ thẻ ngân hàng của bạn, 0% kê giá). Đặc biệt có chuyên môn xử lý chính sách kháng lỗi tạm ngưng tài khoản Google Ads cho ngành dịch vụ sửa chữa thiết bị, điện lạnh, sửa khóa tại nhà.',
    checklist: [
      'Cài đặt trực tiếp trên Tài khoản Quảng cáo thuộc quyền sở hữu của bạn',
      'Kỹ thuật kháng lỗi Ads dịch vụ sửa thiết bị tại nhà (vượt qua bộ lọc chính sách)',
      'Tiền quảng cáo thanh toán thẳng cho Google / Meta, 0% kê giá',
      'Báo cáo minh bạch số cuộc gọi phát sinh, lượt nhắn tin và lượt chỉ đường ghé tiệm'
    ],
    mockup: {
      type: 'ads',
      headerTitle: 'Báo cáo: Trình quản lý quảng cáo chính chủ',
      subtext: 'Minh bạch 100% ngân sách và số liệu chuyển đổi thực tế',
      details: [
        { label: 'Chủ tài khoản Ads', value: 'Tài khoản của bạn (Bạn tự nắm quyền & giữ thẻ thanh toán)', isHighlight: true },
        { label: 'Kháng lỗi chính sách', value: 'Xử lý chuẩn cho ngành sửa thiết bị/điện lạnh tại nhà' },
        { label: 'Ngân sách thực tế', value: '0% kê giá • Hóa đơn trừ tiền xuất từ Facebook/Google' },
        { label: 'Chỉ số đo lường thật', value: 'Đo lường chính xác từng cuộc gọi & khách bấm chỉ đường' }
      ]
    }
  },
  {
    id: 'deliv-geo',
    number: '06',
    badge: 'Bàn giao thực tế',
    title: 'Hệ thống tối ưu đề xuất AI (GEO Local & Google AI Overviews)',
    tagline: 'Cấu hình Schema JSON-LD, file llms.txt, bộ Prompt Bank 30+ câu hỏi và báo cáo xuất hiện trên ChatGPT / Gemini',
    description: 'Toàn bộ dữ liệu doanh nghiệp được cấu hình chuẩn định dạng máy đọc hiểu của các mô hình AI lớn. Kèm bộ Prompt Bank 30+ câu hỏi benchmark thực tế đo lường tỷ lệ gợi ý và Answer Capsule tối ưu cho Google AI Overviews khi khách quanh vùng hỏi tìm dịch vụ.',
    checklist: [
      'File llms.txt & llms-full.txt chuẩn cấu trúc nạp thông tin cho AI bots',
      'Mã nguồn Schema.org LocalBusiness & GeoCoordinates nhúng sẵn trên web',
      'Bộ Prompt Bank 30+ câu hỏi đo lường xuất hiện trên ChatGPT, Gemini, Perplexity',
      'Đoạn trả lời Answer Capsule 45-60 từ chuẩn Google AI Overviews (AIO)',
      'Báo cáo định kỳ hàng tháng kèm ảnh chụp màn hình AI trả lời thực tế'
    ],
    mockup: {
      type: 'admin',
      headerTitle: 'GEO Dashboard: Báo cáo xuất hiện trên AI Search',
      subtext: 'Đo lường tần suất đề xuất từ ChatGPT, Gemini & Perplexity',
      details: [
        { label: 'Nền tảng kiểm tra', value: 'ChatGPT Search, Google Gemini, Perplexity AI, Copilot', isHighlight: true },
        { label: 'Bộ Prompt Bank', value: '30+ câu hỏi ngách địa phương benchmark định kỳ' },
        { label: 'Tệp dữ liệu AI', value: 'llms.txt & llms-full.txt kích hoạt trực tiếp trên domain' },
        { label: 'Cấu trúc Schema', value: 'LocalBusiness, GeoCoordinates, FAQPage, Service' },
        { label: 'Tỷ lệ đề xuất', value: 'Top 1-3 câu trả lời khi hỏi dịch vụ tại khu vực' }
      ],
      actionLabel: 'Xem báo cáo AI đề xuất'
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
    id: 'faq-cost',
    question: 'Chi phí báo giá đã là trọn gói chưa, có phát sinh chi phí gì không?',
    answer: 'Báo giá của LocalMate là trọn gói cố định 100%, cam kết không có bất kỳ chi phí ẩn nào. Giá đã bao gồm thiết kế hoàn chỉnh, tên miền, hosting tốc độ cao, chứng chỉ bảo mật SSL và bảo hành kỹ thuật. Tuyệt đối không phát sinh chi phí ngoài thỏa thuận.',
    category: 'chi-phi'
  },
  {
    id: 'faq-tech-skill',
    question: 'Tôi không biết code hay kỹ thuật công nghệ thì có tự dùng được không?',
    answer: 'Bạn hoàn toàn không cần biết code hay công nghệ. Trang quản trị 100% tiếng Việt tối giản như dùng mạng xã hội, có kèm video 2 phút hướng dẫn riêng cho bạn. Cần đổi giá, sửa số điện thoại hay thêm ảnh chỉ mất 3 phút thao tác trên điện thoại.',
    category: 'mo-hinh'
  },
  {
    id: 'faq-support',
    question: 'Ai sẽ hỗ trợ khi website gặp sự cố hoặc khi tôi cần đổi nội dung?',
    answer: 'Kỹ thuật viên LocalMate hỗ trợ trực tiếp 1-1 qua Hotline và Zalo, không qua chatbot hay tạo ticket chờ đợi. Khi gặp sự cố kỹ thuật, chúng tôi xử lý trong vòng 1-2 giờ. Khi bạn bận rộn, chỉ cần gửi qua Zalo là kỹ thuật viên hỗ trợ cập nhật thay bạn.',
    category: 'bao-hanh'
  },
  {
    id: 'faq-timeline',
    question: 'Mất bao lâu để hoàn thành một website và đưa vào hoạt động?',
    answer: 'Chỉ từ 24 đến 48 giờ đối với website bán hàng và giới thiệu dịch vụ chuẩn di động. Với các hệ thống có tính năng tự động hóa quy trình hoặc kết nối phần mềm CRM, thời gian hoàn tất từ 3 đến 5 ngày. Mọi mốc thời gian đều cam kết rõ ràng trước khi làm.',
    category: 'mo-hinh'
  },
  {
    id: 'faq-demo',
    question: 'Làm web demo 0đ xem thử trước có bị ràng buộc hay ép ký hợp đồng không?',
    answer: 'Hoàn toàn không. LocalMate dựng website demo chạy thực tế 0 đồng để bạn duyệt trực tiếp trên điện thoại. Bạn ưng ý giao diện và tốc độ tải trang thì mới quyết định hợp tác. Nếu không hài lòng, bạn không phải trả bất kỳ chi phí nào.',
    category: 'mo-hinh'
  },
  {
    id: 'faq-ownership',
    question: 'Sau khi bàn giao, ai là người đứng tên sở hữu tài khoản và dữ liệu?',
    answer: '100% tài khoản chính chủ thuộc về bạn. Khi bàn giao, LocalMate chuyển giao toàn bộ quyền quản trị cao nhất: tên miền, hosting, mã nguồn, Google Maps và fanpage. Dữ liệu kinh doanh là tài sản riêng của bạn, không bị phụ thuộc kỹ thuật vào LocalMate.',
    category: 'bao-hanh'
  },
  {
    id: 'faq-warranty-5years',
    question: 'Cam kết đồng hành kỹ thuật 5 năm của LocalMate hoạt động như thế nào?',
    answer: 'LocalMate không làm theo kiểu "bàn giao xong phủi tay". Trong suốt 5 năm, chúng tôi cam kết túc trực hỗ trợ 1-1 qua nhóm Zalo: bảo trì kỹ thuật định kỳ, sao lưu dữ liệu chống thất lạc, bảo vệ tài khoản Google Maps & Website an toàn trước các đợt cập nhật thuật toán. Khi bạn cần cập nhật giá hoặc đổi số điện thoại, kỹ thuật viên hỗ trợ ngay trong 15-30 phút.',
    category: 'bao-hanh'
  },
  {
    id: 'faq-ads-policy-repair',
    question: 'Với ngành thợ sửa chữa (điện lạnh, điện thoại, laptop, khóa) hay bị Google Ads khóa tài khoản thì LocalMate xử lý thế nào?',
    answer: 'Ngành sửa chữa thiết bị tại nhà thường bị Google gắn cờ chính sách "Dịch vụ kỹ thuật bên thứ ba" hoặc "Tránh né hệ thống". LocalMate có quy trình kỹ thuật chuyên sâu: tái cấu trúc Landing Page bổ sung Independent Disclaimer, gỡ bỏ vi phạm thương hiệu, chuẩn hóa hồ sơ ĐKKD và gửi hồ sơ kháng nghị chính ngạch lên Google Trust & Safety để tài khoản chạy bền vững 100%.',
    category: 'mo-hinh'
  },
  {
    id: 'faq-root-pricing',
    question: 'Vì sao mức giá tại LocalMate lại rẻ từ gốc chỉ từ 490k đến 2.9tr/tháng?',
    answer: 'LocalMate cắt bỏ hoàn toàn các tầng trung gian cồng kềnh, không vẽ vời những tính năng phần mềm thừa thãi mà người dùng không bao giờ động tới. Chúng tôi chuẩn hóa quy trình triển khai công nghệ tinh gọn (Website < 1s trên Cloudflare, Entity NAP, Schema JSON-LD, Prompt Bank) và làm việc trực tiếp với kỹ thuật viên tại địa phương, mang lại mức giá gốc thực tế cho bà con kinh doanh.',
    category: 'chi-phi'
  }
];

// ==========================================
// 7. GÓI DỊCH VỤ TỐI ƯU ĐỀ XUẤT AI (GEO LOCAL)
// ==========================================
export interface GeoPackageItem {
  id: string; // 'geo-local'
  code: string; // 'geo-local'
  name: string; // 'Tối ưu đề xuất AI (GEO Local)'
  pricingDisplay: string; // '2.900.000đ/tháng'
  priceNumeric: number; // 2900000
  unit: string; // 'tháng'
  badge: string;
  tagline: string;
  description: string;
  targetAudience: string;
  slaTime: string;
  deliverables: string[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  features: string[];
  serviceNameForLead: string;
  ctaLabel: string;
}

export const GEO_SERVICE_PACKAGE: GeoPackageItem = {
  id: 'geo-local',
  code: 'geo-local',
  name: 'Tối ưu đề xuất AI (GEO Local)',
  pricingDisplay: '2.900.000đ/tháng',
  priceNumeric: 2900000,
  unit: 'tháng',
  badge: 'ĐÓN ĐẦU XU HƯỚNG AI SEARCH',
  tagline: 'Để ChatGPT, Gemini & Perplexity tự động gọi tên tiệm của bạn đầu tiên',
  description: 'Dịch vụ tối ưu hóa công cụ tạo sinh (Generative Engine Optimization - GEO) dành riêng cho doanh nghiệp và cơ sở địa phương. Đưa tên tuổi, dịch vụ và số hotline của bạn vào nguồn dữ liệu trích dẫn trực tiếp của các mô hình AI lớn khi khách hàng quanh khu vực hỏi tìm kiếm.',
  targetAudience: 'Nhà hàng, quán ăn, nha khoa, thẩm mỹ viện, gara ô tô, nhà thầu thi công và các cửa hàng dịch vụ địa phương.',
  slaTime: 'Cấu hình hoàn tất trong 48 giờ • Giám sát & báo cáo định kỳ hàng tháng',
  deliverables: [
    'Audit toàn diện hiện diện thương hiệu trên 4 nền tảng AI lớn (ChatGPT, Gemini, Perplexity, Copilot)',
    'Cấu hình bộ Schema JSON-LD LocalBusiness & GeoCoordinates nâng cao giúp AI bots đọc hiểu 100%',
    'Tạo lập & triển khai tệp llms.txt và llms-full.txt chuẩn hóa dữ liệu cho AI crawlers',
    'Đồng bộ thực thể thương hiệu (Entity Alignment) và chuẩn hóa thông tin NAP trên toàn bộ kênh số',
    'Tối ưu hồ sơ Google Business Profile liên kết chặt chẽ với thực thể doanh nghiệp trên Knowledge Graph',
    'Xây dựng bộ nội dung hỏi - đáp ngữ nghĩa (FAQ Conversational Content) mô phỏng câu hỏi khách hàng',
    'Chiến lược trích dẫn thực thể (Citation Boost) tại các nguồn tham chiếu mà AI tin cậy',
    'Báo cáo đo lường định kỳ hàng tháng về tần suất xuất hiện và vị thế thương hiệu khi AI trả lời'
  ],
  workflowSteps: [
    {
      step: '01',
      title: 'Prompt Benchmark & Khảo sát',
      description: 'Chạy bộ 30+ câu hỏi kiểm tra ngẫu nhiên trên ChatGPT, Gemini, Perplexity để đánh giá tỷ lệ xuất hiện ban đầu.'
    },
    {
      step: '02',
      title: 'Triển khai Schema & llms.txt',
      description: 'Cài đặt mã Schema.org chuẩn hóa và tệp llms.txt lên tên miền chính để AI bot truy quét thông tin chính xác.'
    },
    {
      step: '03',
      title: 'Đồng bộ thực thể & NAP',
      description: 'Khớp nối Tên tiệm, Địa chỉ, Số điện thoại và dịch vụ chủ lực trên Google Maps, Mạng xã hội và Danh bạ uy tín.'
    },
    {
      step: '04',
      title: 'Tối ưu nội dung đối thoại (FAQ)',
      description: 'Biên tập hệ thống câu hỏi giải đáp thực tế bám sát nhu cầu tìm kiếm tự nhiên của người dùng khi trò chuyện với AI.'
    },
    {
      step: '05',
      title: 'Kiểm thử & Bàn giao báo cáo',
      description: 'Tái kiểm tra truy vấn thực tế, chụp ảnh bằng chứng gợi ý từ AI và gửi báo cáo đo lường minh bạch.'
    }
  ],
  features: [
    'Khách hỏi ChatGPT/Gemini quán ngon, dịch vụ tốt quanh vùng → AI đề xuất tiệm của bạn',
    'Được trang bị tệp llms.txt chuẩn quốc tế dành riêng cho LLM bots',
    'Không phụ thuộc vào chiêu trò spam, xây dựng trên nền tảng dữ liệu thực thể bền vững',
    'Báo cáo minh chứng thực tế bằng hình ảnh truy vấn thật mỗi tháng'
  ],
  serviceNameForLead: 'Dịch vụ Tối ưu đề xuất AI (GEO Local) 2.900.000đ/tháng',
  ctaLabel: 'Đăng ký tối ưu đề xuất AI ngay'
};

// ==========================================
// 8. BỘ 15 DỊCH VỤ TIÊU CHUẨN (CATALOG HUB SSOT)
// ==========================================
export interface OperationServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  shortName: string;
  category: string;
  categorySlug: string;
  badge: string;
  headline: string;
  problem: string;
  outcome: string;
  promise: string;
  description: string;
  startingPrice: string;
  priceNote: string;
  warranty: string; // Cam kết bảo hành kỹ thuật lên đến 5 năm
  slaTime: string;
  suitableFor: string[];
  notSuitableFor: string[];
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  features: string[];
  requirements?: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  serviceNameForLead: string;
  ctaText: string;
  relatedServiceSlugs: string[];
  highlighted?: boolean;
}

export const ALL_15_SERVICES_DATA: OperationServiceItem[] = [
  {
    id: 'srv-geo',
    slug: 'geo',
    aliases: ['dich-vu-geo', 'toi-uu-ai-geo', 'geo-local'],
    name: 'Dịch vụ GEO — Tối ưu đề xuất AI (ChatGPT & Gemini)',
    shortName: 'Tối Ưu Đề Xuất AI (GEO)',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'ai-search',
    badge: 'Độc Quyền AI 2026 ⭐',
    headline: 'Đưa doanh nghiệp của bạn thành gợi ý số 1 khi khách hàng hỏi AI',
    problem: 'Người tiêu dùng ngày càng chuyển sang hỏi trực tiếp ChatGPT, Google Gemini hoặc Perplexity để tìm kiếm nhà hàng, nha khoa, spa hay dịch vụ gần nhất. Nếu AI không nhận diện được bạn, bạn hoàn toàn vô hình.',
    outcome: 'Cơ sở kinh doanh của bạn xuất hiện trong top gợi ý tin cậy nhất kèm số điện thoại và địa chỉ chuẩn xác mỗi khi AI trả lời người dùng trong khu vực.',
    promise: 'Cấu hình chuẩn Schema JSON-LD, tạo file llms.txt, đồng bộ thực thể Entity và bàn giao báo cáo kiểm chứng kết quả từ các mô hình AI lớn hàng tháng.',
    description: 'LocalMate triển khai kỹ thuật Generative Engine Optimization (GEO) chuẩn quốc tế dành riêng cho điểm bán địa phương. Chúng tôi đưa dữ liệu tiệm vào nguồn tham chiếu uy tín của các mô hình ngôn ngữ lớn (LLMs), tối ưu Share of Model với chi phí bình dân chỉ từ 2.900.000đ/tháng.',
    startingPrice: 'Từ 2.900.000đ / tháng',
    priceNote: 'Gói duy trì tối ưu định kỳ • Minh bạch chi phí, 0% phát sinh',
    warranty: 'Cam kết bảo hành cấu trúc dữ liệu AI & Entity lên đến 5 năm',
    slaTime: 'Hoàn tất cấu hình trong 48 giờ • Giám sát 24/7',
    suitableFor: [
      'Quán ăn, nhà hàng, cafe muốn được AI khuyên ghé thăm khi khách hỏi quán ngon quanh vùng',
      'Phòng khám, nha khoa, thẩm mỹ viện, spa cần xây dựng vị thế số 1 trên AI Search',
      'Gara ô tô, tiệm sửa chữa, nhà thầu thi công muốn đón đầu xu hướng khách hàng hỏi AI'
    ],
    notSuitableFor: [
      'Cơ sở chưa có địa điểm thực tế hoặc chưa ghim tọa độ cơ bản trên Google Maps',
      'Đơn vị muốn có kết quả tức thì trong 1 giờ bằng chiêu trò gian lận'
    ],
    deliverables: [
      'Kiểm toán (Audit) hiện diện thương hiệu trên 4 nền tảng AI lớn (ChatGPT, Gemini, Perplexity, Copilot)',
      'Cấu hình bộ Schema JSON-LD LocalBusiness & GeoCoordinates nâng cao giúp AI bots đọc hiểu 100%',
      'Tạo lập & triển khai tệp llms.txt và llms-full.txt chuẩn hóa dữ liệu cho AI crawlers',
      'Đồng bộ thực thể thương hiệu (Entity Alignment) và chuẩn hóa thông tin NAP trên toàn bộ kênh số',
      'Xây dựng bộ Prompt Bank 50–80 câu hỏi tự nhiên khách hay hỏi AI quanh khu vực',
      'Chiến lược trích dẫn thực thể (Citation Boost) tại các nguồn tham chiếu mà AI tin cậy',
      'Báo cáo đo lường định kỳ hàng tháng về tần suất xuất hiện và vị thế thương hiệu khi AI trả lời'
    ],
    process: [
      { step: '01', title: 'Prompt Benchmark', description: 'Chạy 30+ câu hỏi tự nhiên trên ChatGPT, Gemini, Perplexity đo tỷ lệ xuất hiện ban đầu.' },
      { step: '02', title: 'Cài đặt Schema & llms.txt', description: 'Triển khai cấu trúc dữ liệu máy đọc hiểu và tệp llms.txt lên tên miền website.' },
      { step: '03', title: 'Đồng bộ thực thể NAP', description: 'Chuẩn hóa Tên tiệm, Địa chỉ, Hotline trên Google Maps và các danh bạ uy tín.' },
      { step: '04', title: 'Tối ưu ngữ nghĩa đối thoại', description: 'Xây dựng bộ câu hỏi - đáp thực tế bám sát hành vi người dùng tương tác với AI.' },
      { step: '05', title: 'Bàn giao báo cáo minh chứng', description: 'Xuất báo cáo định kỳ kèm ảnh chụp kết quả gợi ý thực tế từ các công cụ AI.' }
    ],
    features: [
      'Khách hỏi ChatGPT/Gemini địa chỉ uy tín quanh vùng → AI tự động đề xuất tiệm của bạn',
      'Trang bị tệp llms.txt chuẩn quốc tế dành riêng cho LLM bots',
      'Bảo hành kỹ thuật và đồng hành duy trì dữ liệu lên đến 5 năm'
    ],
    faqs: [
      {
        question: 'Dịch vụ GEO khác gì so với SEO Google Maps truyền thống?',
        answer: 'SEO Google Maps tập trung vào thứ hạng bản đồ khi tìm kiếm từ khóa. GEO tập trung vào việc làm cho AI (ChatGPT, Gemini) hiểu rõ uy tín của bạn để tự động khuyên người dùng chọn tiệm của bạn khi họ đặt câu hỏi phức tạp.'
      },
      {
        question: 'Bao lâu thì thấy cơ sở xuất hiện trên câu trả lời của AI?',
        answer: 'Sau khi cấu hình Schema, llms.txt và đồng bộ thực thể từ 2 đến 4 tuần, các AI crawler sẽ nạp dữ liệu bộ nhớ và bắt đầu xuất hiện trong các câu trả lời đề xuất khi người dùng hỏi quanh khu vực.'
      }
    ],
    serviceNameForLead: 'Dịch vụ GEO (Tối ưu đề xuất AI) 2.900.000đ/tháng',
    ctaText: 'Đăng ký tối ưu đề xuất AI',
    relatedServiceSlugs: ['aeo', 'seo-ai', 'seo-chatgpt', 'google-maps'],
    highlighted: true
  },
  {
    id: 'srv-aeo',
    slug: 'aeo',
    aliases: ['dich-vu-aeo'],
    name: 'Dịch vụ AEO — Tối ưu câu trả lời AI Search (Answer Engine Optimization)',
    shortName: 'Tối Ưu Câu Trả Lời AI (AEO)',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'ai-search',
    badge: 'Xu Hướng Mới 2026 🚀',
    headline: 'Biến website thành nguồn trích dẫn trực tiếp của các cỗ máy trả lời AI',
    problem: 'Người dùng không còn kiên nhẫn bấm từng link xanh trên Google mà muốn nhận câu trả lời súc tích ngay lập tức. Nếu website của bạn viết lan man, các công cụ trả lời AI sẽ bỏ qua bạn để trích dẫn đối thủ.',
    outcome: 'Mọi thông tin về giá cả, dịch vụ và giải pháp của bạn được AI trích dẫn nguyên văn vào hộp câu trả lời trực tiếp cho khách hàng.',
    promise: 'Cấu hình FAQPage Schema, HowTo Schema, cấu trúc văn bản Direct Answer chuẩn ngữ nghĩa máy học, cam kết bảo hành kỹ thuật 5 năm.',
    description: 'AEO (Answer Engine Optimization) là kỹ thuật tối ưu nội dung để được chọn làm câu trả lời tốt nhất cho các câu hỏi dạng: Ở đâu tốt nhất? Giá bao nhiêu? Quy trình thế nào? LocalMate giúp bạn thống trị các câu trả lời trực tiếp trên Perplexity, Gemini và Siri/Copilot.',
    startingPrice: 'Từ 2.490.000đ / tháng',
    priceNote: 'Tối ưu chuyên sâu theo cụm chủ đề • Báo cáo trích dẫn định kỳ',
    warranty: 'Cam kết bảo hành cấu trúc câu trả lời & Schema lên đến 5 năm',
    slaTime: 'Triển khai cấu trúc trong 3–5 ngày làm việc',
    suitableFor: [
      'Doanh nghiệp dịch vụ kỹ thuật, sửa chữa, tư vấn chuyên môn',
      'Các trung tâm đào tạo, thẩm mỹ, y tế cần giải đáp thắc mắc chuyên sâu của người bệnh',
      'Đơn vị kinh doanh có bảng giá minh bạch muốn được AI trích dẫn so sánh giá'
    ],
    notSuitableFor: [
      'Website không có nội dung hữu ích, chỉ đăng hình ảnh quảng cáo sơ sài'
    ],
    deliverables: [
      'Cấu hình FAQPage Schema, HowTo Schema & Speakable Schema chuẩn Google Rich Results',
      'Tái cấu trúc nội dung website theo mô hình Direct Answer (trả lời trực diện dưới 50 từ)',
      'Tối ưu bảng dữ liệu so sánh (Comparison Tables) giúp Perplexity/Gemini trích dẫn nguyên khối',
      'Khớp nối Knowledge Base doanh nghiệp vào cơ sở dữ liệu mở Wikidata/DBpedia',
      'Báo cáo tỷ lệ Featured Snippet & AI Direct Citations hàng tháng'
    ],
    process: [
      { step: '01', title: 'Thu thập truy vấn hỏi đáp', description: 'Nghiên cứu 50+ câu hỏi khách hàng thường gõ nhất về sản phẩm dịch vụ của bạn.' },
      { step: '02', title: 'Soạn nội dung Direct Answer', description: 'Viết các câu trả lời súc tích, khách quan, giàu dữ liệu số liệu cụ thể.' },
      { step: '03', title: 'Nhúng Schema đánh dấu dữ liệu', description: 'Gắn mã cấu trúc giúp máy chủ tìm kiếm hiểu chính xác ngữ nghĩa từng phần.' },
      { step: '04', title: 'Kiểm thử trích dẫn AI', description: 'Đặt câu hỏi trên Perplexity, Gemini, Copilot để xác thực tỷ lệ trích dẫn.' }
    ],
    features: [
      'Được trích dẫn làm nguồn dữ liệu chính xác khi khách hàng tìm kiếm',
      'Tăng tỷ lệ nhấp chuột tự nhiên chất lượng cao từ khách hàng có nhu cầu mua',
      'Bảo hành kỹ thuật lâu dài 5 năm, không lo thuật toán cập nhật'
    ],
    faqs: [
      {
        question: 'AEO khác GEO như thế nào?',
        answer: 'GEO tối ưu hóa tổng thể sự nhận diện thương hiệu trong hội thoại AI. AEO tập trung sâu vào việc biến nội dung của bạn thành câu trả lời chính xác nhất cho các câu hỏi cụ thể của người dùng.'
      }
    ],
    serviceNameForLead: 'Dịch vụ AEO (Tối ưu câu trả lời AI) 2.490.000đ/tháng',
    ctaText: 'Tối ưu câu trả lời AI ngay',
    relatedServiceSlugs: ['geo', 'seo-ai', 'seo-chatgpt'],
    highlighted: false
  },
  {
    id: 'srv-seo-ai',
    slug: 'seo-ai',
    aliases: ['dich-vu-seo-ai', 'seo-google-ai-overview'],
    name: 'Dịch vụ SEO AI — Chinh phục Google AI Overviews 2026',
    shortName: 'SEO Google AI Overviews',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'ai-search',
    badge: 'Công Nghệ Đột Phá 🔥',
    headline: 'Xuất hiện nổi bật ngay trong khung tóm tắt thông minh của Google',
    problem: 'Google AI Overviews đang chiếm trọn màn hình đầu tiên của kết quả tìm kiếm, đẩy các website top 1-3 truyền thống xuống dưới nếp gấp. Nếu không tối ưu cho AI Overviews, lượng truy cập của bạn sẽ sụt giảm 40–60%.',
    outcome: 'Website của bạn xuất hiện ngay trong khung AI Overview màu tím của Google kèm đường link trích dẫn nổi bật nhất.',
    promise: 'Tối ưu hóa nội dung theo chuẩn E-E-A-T và cấu trúc ngữ nghĩa Semantic Topic Clusters, bảo hành kỹ thuật 5 năm.',
    description: 'Dịch vụ SEO AI của LocalMate thiết kế riêng để vượt qua bộ lọc khắt khe của Google AI Overviews. Chúng tôi tối ưu cấu trúc bài viết, dữ liệu thực tế và độ tin cậy của tác giả để thuật toán Google tự tin lựa chọn website của bạn làm nguồn tóm tắt.',
    startingPrice: 'Từ 2.900.000đ / tháng',
    priceNote: 'Tối ưu theo gói từ khóa chiến lược • Cam kết tỷ lệ xuất hiện AI',
    warranty: 'Cam kết bảo hành cấu trúc dữ liệu & liên kết thực thể 5 năm',
    slaTime: 'Hoàn thiện cấu trúc sau 3–5 ngày',
    suitableFor: [
      'Doanh nghiệp bị sụt giảm traffic do khung tóm tắt Google AI che khuất',
      'Cơ sở kinh doanh muốn đón đầu xu hướng tìm kiếm thế hệ mới trước đối thủ',
      'Các website bán hàng và dịch vụ tại thị trường có độ cạnh tranh cao'
    ],
    notSuitableFor: [
      'Website có nội dung sao chép, spam hoặc sử dụng văn mẫu dịch thuật thô ráp'
    ],
    deliverables: [
      'Kiểm toán mức độ sẵn sàng của website đối với thuật toán Google AI Overviews',
      'Xây dựng hệ thống Semantic Topic Clusters (Cụm chủ đề ngữ nghĩa chuyên sâu)',
      'Tối ưu tín hiệu E-E-A-T (Chuyên môn, Trải nghiệm, Thẩm quyền, Đáng tin cậy)',
      'Bố trí dữ liệu bảng biểu, bullet points và trích dẫn chuẩn máy đọc',
      'Báo cáo tần suất xuất hiện trong khung tóm tắt Google AI hàng tháng'
    ],
    process: [
      { step: '01', title: 'Audit AI Overviews', description: 'Phân tích các từ khóa ngành đã kích hoạt khung tóm tắt AI trên Google.' },
      { step: '02', title: 'Cấu trúc lại nội dung', description: 'Tối ưu lại tiêu đề, định dạng câu trả lời ngắn và bổ sung bằng chứng chuyên môn.' },
      { step: '03', title: 'Đánh dấu dữ liệu thực thể', description: 'Cài đặt Schema Organization, Author và Medical/Technical Entity chuẩn mực.' },
      { step: '04', title: 'Theo dõi & Hiệu chỉnh', description: 'Quan sát sự thay đổi giao diện SERP của Google và tinh chỉnh liên tục.' }
    ],
    features: [
      'Chiếm vị trí độc tôn trên cùng trước mọi kết quả tìm kiếm tự nhiên khác',
      'Thu hút khách hàng chất lượng cao tin tưởng vào đề xuất của Google',
      'Được kỹ thuật viên bảo hành và tinh chỉnh thuật toán suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Google AI Overviews đã hoạt động tại Việt Nam chưa?',
        answer: 'Google đang triển khai mạnh mẽ AI Overviews bằng tiếng Việt trên cả máy tính và di động. Chuẩn bị ngay từ hôm nay giúp bạn chiếm ưu thế tuyệt đối khi đối thủ chưa kịp thích ứng.'
      }
    ],
    serviceNameForLead: 'Dịch vụ SEO AI Overviews 2.900.000đ/tháng',
    ctaText: 'Chinh phục Google AI Overviews',
    relatedServiceSlugs: ['geo', 'aeo', 'seo-tong-the', 'toi-uu-toc-do-web'],
    highlighted: false
  },
  {
    id: 'srv-seo-chatgpt',
    slug: 'seo-chatgpt',
    aliases: ['dich-vu-seo-chatgpt'],
    name: 'Dịch vụ SEO ChatGPT — Tối ưu hiện diện thương hiệu trên AI đàm thoại',
    shortName: 'SEO ChatGPT & SearchGPT',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'ai-search',
    badge: 'Đón Đầu SearchGPT ⭐',
    headline: 'Để ChatGPT nhớ mặt đặt tên và nhiệt tình khuyên khách hàng chọn bạn',
    problem: 'Hàng triệu người đang sử dụng ChatGPT thay thế hoàn toàn thanh tìm kiếm để hỏi xin lời khuyên mua hàng. Khi khách hỏi: "Tôi nên làm dịch vụ ở đâu uy tín tại khu vực này?", ChatGPT hoàn toàn không biết bạn là ai.',
    outcome: 'Thương hiệu của bạn được ChatGPT lưu giữ trong bộ nhớ ngữ cảnh và liên tục đưa ra như một địa chỉ đáng tin cậy hàng đầu.',
    promise: 'Xây dựng hồ sơ thực thể số, tối ưu dữ liệu tham chiếu bên thứ ba và cấu hình Brand Sentiment tích cực, bảo hành 5 năm.',
    description: 'SEO ChatGPT là giải pháp tối ưu hóa dữ liệu số để các mô hình của OpenAI (ChatGPT Plus, SearchGPT, GPT-4o) trích dẫn tiệm của bạn. LocalMate xử lý từ gốc: từ dữ liệu website chính chủ đến các bài đánh giá độc lập để tạo niềm tin tuyệt đối cho AI.',
    startingPrice: 'Từ 2.900.000đ / tháng',
    priceNote: 'Gói tối ưu hội thoại AI • Báo cáo trích dẫn minh chứng thực tế',
    warranty: 'Bảo hành duy trì dữ liệu huấn luyện & trích dẫn AI 5 năm',
    slaTime: 'Hoàn thiện tích hợp trong 48–72 giờ',
    suitableFor: [
      'Thương hiệu địa phương muốn xuất hiện khi khách hàng tìm kiếm qua ứng dụng ChatGPT di động',
      'Chủ doanh nghiệp muốn bảo vệ uy tín thương hiệu khỏi những tóm tắt tiêu cực của AI',
      'Đơn vị kinh doanh dịch vụ chất lượng cao muốn thu hút tệp khách hàng am hiểu công nghệ'
    ],
    notSuitableFor: [
      'Doanh nghiệp có quá nhiều đánh giá tiêu cực chưa xử lý trên mạng xã hội'
    ],
    deliverables: [
      'Kiểm thử 40+ kịch bản đối thoại người dùng tìm kiếm theo nhu cầu thực tế trên ChatGPT',
      'Tối ưu các nguồn dữ liệu tham chiếu bên thứ ba mà OpenAI hay thu thập (Reddit, Review uy tín, Báo chí)',
      'Cấu hình tệp llms.txt chuyên sâu với định dạng ngữ nghĩa riêng cho ChatGPT',
      'Xây dựng Brand Sentiment tích cực, làm nổi bật điểm mạnh và sự an tâm khi sử dụng dịch vụ',
      'Báo cáo trích dẫn URL và tần suất thương hiệu được ChatGPT khuyên dùng'
    ],
    process: [
      { step: '01', title: 'Thử nghiệm truy vấn ChatGPT', description: 'Đo lường các câu trả lời hiện tại của ChatGPT khi hỏi về dịch vụ của bạn trong vùng.' },
      { step: '02', title: 'Làm sạch và bổ sung trích dẫn', description: 'Tạo các bài đánh giá khách quan và dữ liệu thực tế tại các nền tảng AI tin cậy.' },
      { step: '03', title: 'Tối ưu hồ sơ thương hiệu', description: 'Đồng bộ hóa tên tuổi, lịch sử thành lập, giấy phép và các cam kết bảo hành.' },
      { step: '04', title: 'Xác thực lại với AI', description: 'Chạy lại bộ kiểm thử và theo dõi tần suất thương hiệu được giới thiệu.' }
    ],
    features: [
      'Tiếp cận tệp khách hàng trẻ, hiện đại, có thu nhập tốt và thói quen dùng AI hàng ngày',
      'Bảo vệ uy tín thương hiệu trên không gian mạng đàm thoại',
      'Đồng hành kỹ thuật 5 năm cùng đội ngũ LocalMate'
    ],
    faqs: [
      {
        question: 'ChatGPT có lấy dữ liệu trực tiếp từ website không?',
        answer: 'Có, tính năng SearchGPT và ChatGPT Browse lấy dữ liệu trực tiếp từ website theo thời gian thực nếu website có cấu hình tệp robots.txt và llms.txt thân thiện với AI bots.'
      }
    ],
    serviceNameForLead: 'Dịch vụ SEO ChatGPT 2.490.000đ/tháng',
    ctaText: 'Đăng ký tối ưu trên ChatGPT',
    relatedServiceSlugs: ['geo', 'aeo', 'seo-ai'],
    highlighted: false
  },
  {
    id: 'srv-thiet-ke-website',
    slug: 'thiet-ke-website',
    aliases: ['website-landing-page', 'thiet-ke-web', 'landing-page'],
    name: 'Thiết Kế Website Chuyên Nghiệp — Chuẩn Di Động, Tốc Độ < 1s',
    shortName: 'Thiết Kế Website',
    category: 'Website & Bán Hàng',
    categorySlug: 'website-landing',
    badge: 'Giá Gốc Bình Dân ⚡',
    headline: 'Website bán hàng thực chiến, tải siêu tốc, có khách gọi ngay trong 24 giờ',
    problem: 'Nhiều nơi làm web với giá hàng chục triệu nhưng web tải chậm như rùa, menu rối rắm, khách vào điện thoại là tắt đi vì khó bấm. Quan trọng nhất là bàn giao xong bỏ mặc, khách muốn sửa một dòng chữ cũng mất cả tuần.',
    outcome: 'Một trang web đẹp mắt, tải cực nhanh dưới 1 giây, nút gọi Hotline và nhắn Zalo to rõ trên điện thoại, tự tay sửa giá hay đổi ảnh chỉ trong 3 phút.',
    promise: 'Dựng bản demo thực tế 0đ duyệt trước trên điện thoại, bàn giao 100% tài khoản chính chủ, cam kết bảo hành kỹ thuật lên đến 5 năm.',
    description: 'LocalMate thiết kế website từ gốc: loại bỏ mã nguồn cồng kềnh, tập trung 100% vào tốc độ mở trang và chuyển đổi ra cuộc gọi. Bàn giao đầy đủ mã nguồn, tài khoản tên miền, hosting mang tên chính bạn kèm video hướng dẫn 2 phút trực quan.',
    startingPrice: 'Từ 490.000đ (Trọn gói)',
    priceNote: '1 Trang gọn gàng: 490k • Doanh nghiệp 3–5 trang: từ 1.490k',
    warranty: 'Cam kết bảo hành kỹ thuật, bảo mật SSL và sao lưu lên đến 5 năm',
    slaTime: 'Bàn giao bản chạy thật trong 24–48 giờ',
    suitableFor: [
      'Quán ăn, nhà hàng, quán cafe cần thực đơn online đẹp mắt và nút chỉ đường Google Maps',
      'Tiệm sửa chữa, thợ lắp đặt, dịch vụ tại nhà cần khách bấm gọi Hotline 1 chạm',
      'Công ty, phòng khám, văn phòng đại diện cần website uy tín đầy đủ hồ sơ năng lực'
    ],
    notSuitableFor: [
      'Sàn thương mại điện tử đa nhà cung cấp quy mô như Shopee / Lazada'
    ],
    deliverables: [
      'Website tương thích 100% mọi dòng smartphone, máy tính bảng và máy tính',
      'Tốc độ mở trang cực nhanh dưới 1 giây (Google PageSpeed đạt 90–98 điểm)',
      'Nút gọi Hotline, chat Zalo 24/7 và bản đồ Google Maps ghim sẵn vị trí',
      'Trang quản trị tiếng Việt tối giản, tự sửa giá và đăng bài trong 3 phút',
      'Bàn giao 100% tài khoản chính chủ (Tên miền, hosting, mã nguồn thuộc quyền bạn)',
      'Cấu hình đầy đủ thẻ SEO Google, bảo mật SSL xanh lá và mã đo lường chuyển đổi'
    ],
    process: [
      { step: '01', title: 'Lắng nghe nhu cầu', description: 'Bạn chỉ cần nói tiệm bạn bán gì và gửi vài tấm hình đẹp, không cần biết code.' },
      { step: '02', title: 'Dựng bản demo 0đ', description: 'LocalMate lên bản web chạy thật trên điện thoại để bạn bấm thử ưng ý.' },
      { step: '03', title: 'Báo giá cố định', description: 'Chốt giá trọn gói minh bạch, cam kết tuyệt đối không phát sinh phụ phí.' },
      { step: '04', title: 'Gắn tên miền & Bàn giao', description: 'Kết nối tên miền riêng, kiểm tra tốc độ và chuyển giao toàn quyền quản trị.' },
      { step: '05', title: 'Đồng hành kỹ thuật 5 năm', description: 'Có nhóm Zalo kỹ thuật viên túc trực hỗ trợ bảo trì, sao lưu định kỳ.' }
    ],
    features: [
      'Xem demo thực tế trên điện thoại trước, ưng ý mới quyết định làm',
      'Bàn giao 100% tài khoản chính chủ, không bị phụ thuộc vào đơn vị kỹ thuật',
      'Bảo hành kỹ thuật toàn diện lên đến 5 năm'
    ],
    faqs: [
      {
        question: 'Tôi không rành máy tính thì có tự cập nhật bài viết hay đổi giá được không?',
        answer: 'Hoàn toàn được. Bảng quản trị 100% tiếng Việt đơn giản như lướt Facebook. LocalMate tặng kèm video 2 phút quay màn hình hướng dẫn riêng cho bạn, sửa giá hay đổi ảnh chỉ mất 3 phút trên điện thoại.'
      },
      {
        question: 'Báo giá 490k đã gồm tên miền và hosting chưa?',
        answer: 'Gói 490k là gói khởi tạo website chuẩn di động chạy trên hạ tầng siêu tốc. Bạn có thể sử dụng tên miền phụ miễn phí hoặc chúng tôi hỗ trợ mua tên miền .vn chính chủ đứng tên bạn với giá gốc nhà đăng ký.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Thiết kế Website chuẩn di động từ 490.000đ',
    ctaText: 'Nhận web demo 0đ xem trước',
    relatedServiceSlugs: ['google-maps', 'toi-uu-toc-do-web', 'cham-soc-website', 'google-ads'],
    highlighted: true
  },
  {
    id: 'srv-seo-tong-the',
    slug: 'seo-tong-the',
    aliases: ['dich-vu-seo-tong-the', 'seo-tong-the-dia-phuong'],
    name: 'Dịch vụ SEO Tổng Thể Địa Phương — Thu Hút Khách Hàng Bán Kính 3–10km',
    shortName: 'SEO Tổng Thể Địa Phương',
    category: 'Tìm Kiếm & Bản Đồ',
    categorySlug: 'google-seo',
    badge: 'Bền Vững Lâu Dài 📈',
    headline: 'Phủ kín từ khóa ngành nghề để khách hàng quanh khu vực gõ là thấy bạn',
    problem: 'Bạn bỏ tiền chạy quảng cáo thì có khách, ngưng tiền là im ắng. Trong khi đó, đối thủ cùng khu vực đứng vững trên Google năm này qua năm khác và nhận cuộc gọi miễn phí mỗi ngày.',
    outcome: 'Website và Google Maps của bạn leo lên trang 1 Google với hàng trăm từ khóa địa phương có dấu và không dấu, mang về lượng khách gọi ổn định lâu dài.',
    promise: 'Nói không với backlink rác hay thủ thuật bẩn; tập trung vào nội dung thực tế, tối ưu cấu trúc On-page và bảo hành thứ hạng vững chắc 5 năm.',
    description: 'Dịch vụ SEO Tổng Thể của LocalMate nhắm thẳng vào khách hàng thực tế trong bán kính 3–10km quanh điểm bán. Chúng tôi tối ưu toàn diện từ kỹ thuật website, bài viết giải đáp nhu cầu đến thực thể Google Maps để cơ sở của bạn trở thành thương hiệu quen thuộc nhất trong khu vực.',
    startingPrice: 'Từ 1.990.000đ / tháng',
    priceNote: 'Gói đồng hành bền vững • Báo cáo thứ hạng & cuộc gọi minh bạch hàng tuần',
    warranty: 'Cam kết bảo hành cấu trúc SEO On-page & Entity bền vững 5 năm',
    slaTime: 'Lên chiến lược từ khóa trong 48h • Tăng trưởng đều đặn',
    suitableFor: [
      'Cơ sở kinh doanh muốn có nguồn khách hàng tự nhiên ổn định, không phụ thuộc vào tiền ads',
      'Trung tâm nha khoa, phòng khám, trường mầm non, spa muốn xây dựng uy tín thương hiệu lâu dài',
      'Nhà thầu thi công nội thất, nhôm kính, thợ sửa chữa phục vụ theo khu vực địa bàn'
    ],
    notSuitableFor: [
      'Các dự án cờ bạc, tiền ảo hoặc sản phẩm vi phạm pháp luật'
    ],
    deliverables: [
      'Bộ từ khóa địa phương bao phủ toàn bộ nhu cầu tìm kiếm của khách hàng quanh bán kính 3–10km',
      'Tối ưu chuẩn hóa 100% kỹ thuật On-page (Tiêu đề, Meta description, cấu trúc thẻ H1-H3, Alt ảnh)',
      'Biên tập bài viết dịch vụ chuẩn thực tế cơ sở, không dùng văn mẫu AI rập khuôn',
      'Đồng bộ tín hiệu mạng xã hội và Local Citations tại các danh bạ số uy tín nhất',
      'Báo cáo minh bạch số lượng khách truy cập và số cuộc gọi phát sinh định kỳ hàng tuần'
    ],
    process: [
      { step: '01', title: 'Khảo sát từ khóa khu vực', description: 'Tìm kiếm những từ khóa khách hay gõ kèm tên quận huyện, phường xã quanh điểm bán.' },
      { step: '02', title: 'Tối ưu kỹ thuật On-page', description: 'Sửa toàn bộ lỗi kỹ thuật, gắn thẻ tiêu đề và tăng tốc độ tải trang dưới 1 giây.' },
      { step: '03', title: 'Viết bài dịch vụ thật', description: 'Biên soạn nội dung sát với thực tế tiệm, có bảng giá rõ ràng và hình ảnh thực tế.' },
      { step: '04', title: 'Xây dựng trích dẫn địa phương', description: 'Đưa thông tin cơ sở lên các bản đồ, trang vàng doanh nghiệp và mạng xã hội.' },
      { step: '05', title: 'Báo cáo & Giám sát', description: 'Theo dõi sự tăng trưởng thứ hạng và bảo hành kỹ thuật lâu dài.' }
    ],
    features: [
      'Có khách hàng tìm kiếm tự nhiên bền vững nhiều năm, chi phí tính trên mỗi khách rẻ dần theo thời gian',
      'Báo cáo minh bạch từng cuộc gọi và lượt khách xem thông tin',
      'Bảo hành kỹ thuật và đồng hành trọn đời 5 năm'
    ],
    faqs: [
      {
        question: 'Làm SEO mất bao lâu thì bắt đầu có khách gọi?',
        answer: 'Với SEO địa phương (Local SEO), các từ khóa ngách và vị trí Google Maps thường bắt đầu lên top và mang lại cuộc gọi sau 4 đến 8 tuần triển khai. LocalMate luôn ưu tiên tối ưu những từ khóa có người cần gấp để ra số nhanh nhất.'
      }
    ],
    serviceNameForLead: 'Dịch vụ SEO Tổng Thể Địa Phương từ 1.990.000đ/tháng',
    ctaText: 'Nhận kế hoạch từ khóa 0đ',
    relatedServiceSlugs: ['google-maps', 'thiet-ke-website', 'dich-vu-entity', 'seo-audit'],
    highlighted: false
  },
  {
    id: 'srv-google-maps',
    slug: 'google-maps',
    aliases: ['dich-vu-google-map', 'seo-google-maps'],
    name: 'Dịch vụ Google Maps — Xác Minh GPS Chính Chủ & SEO Lên Top Local 3-Pack',
    shortName: 'Xác Minh & SEO Google Maps',
    category: 'Tìm Kiếm & Bản Đồ',
    categorySlug: 'google-seo',
    badge: 'Khách Gọi Ngay 📍',
    headline: 'Khách gõ tìm kiếm quanh đây là thấy tiệm bạn ngay trên đầu bản đồ',
    problem: 'Khách hàng ở ngay con hẻm bên cạnh mở Google Maps tìm quán ăn, tiệm sửa xe hay phòng khám nhưng chỉ thấy đối thủ. Vị trí của bạn chưa có ghim, hoặc bị đối thủ chơi xấu đổi số điện thoại, cướp quyền sở hữu.',
    outcome: 'Điểm Google Maps của bạn hiện rõ ràng trên bản đồ với huy hiệu đã xác minh chính chủ, hiển thị số hotline gọi ngay và bộ ảnh thực tế bắt mắt.',
    promise: 'Bàn giao quyền quản trị Primary Owner trực tiếp vào Gmail của bạn, tặng bộ mã QR để bàn xin đánh giá 5 sao, cam kết bảo hành chống mất maps 5 năm.',
    description: 'LocalMate trực tiếp hỗ trợ xác minh điểm Google Maps chính chủ, chuẩn hóa thông tin giờ mở cửa, danh mục dịch vụ và tối ưu kỹ thuật Local SEO để điểm bán của bạn lọt vào Top 3 tìm kiếm nổi bật (Local 3-Pack) khi khách hàng tìm quanh khu vực.',
    startingPrice: 'Từ 299.000đ (Khởi tạo)',
    priceNote: 'Khởi tạo ghim chuẩn: 299k • SEO Top Maps trọn gói: 1.490k',
    warranty: 'Cam kết bảo hành quyền sở hữu & hỗ trợ kháng nghị Maps lên đến 5 năm',
    slaTime: '24–48 giờ hoàn tất xác minh vị trí',
    suitableFor: [
      'Tất cả quán ăn, nhà hàng, quán nước, tiệm tạp hóa, cửa hàng bán lẻ',
      'Thợ sửa xe, phòng khám nha khoa, tiệm cắt tóc, spa, cơ sở kinh doanh có mặt bằng đón khách',
      'Doanh nghiệp có nhiều chi nhánh muốn quản trị đồng bộ trên toàn quốc'
    ],
    notSuitableFor: [
      'Địa chỉ ma không có thật hoặc dùng địa chỉ bưu điện ảo'
    ],
    deliverables: [
      'Xác minh ghim vị trí chính xác trên bản đồ Google Maps, đứng tên chính Gmail của bạn',
      'Bàn giao 100% quyền Quản trị viên chính (Primary Owner), không giữ con tin kỹ thuật',
      'Cập nhật đầy đủ số hotline, giờ mở cửa hàng ngày, menu dịch vụ và hình ảnh thực tế',
      'Chống đối thủ chơi xấu: Đổi số điện thoại lén lút, đổi tên tiệm hoặc báo đóng cửa',
      'Tặng kèm file in mã QR để bàn (Mica / Decal) giúp khách quét đánh giá 5 sao tức thì',
      'Kỹ thuật tối ưu đẩy top 3 tìm kiếm khi khách gõ "gần đây"'
    ],
    process: [
      { step: '01', title: 'Thu thập thông tin tiệm', description: 'Gửi địa chỉ chính xác, ảnh biển hiệu mặt tiền và số điện thoại nhận cuộc gọi.' },
      { step: '02', title: 'Ghim vị trí & Xác minh', description: 'Kỹ thuật viên ghim tọa độ GPS chính xác và tiến hành quy trình xác minh chính chủ.' },
      { step: '03', title: 'Tối ưu hồ sơ chuẩn SEO', description: 'Điền đầy đủ danh mục ngành, bài đăng giới thiệu, sản phẩm và album ảnh sắc nét.' },
      { step: '04', title: 'Thiết kế mã QR 5 sao', description: 'Tạo mã QR riêng biệt trỏ thẳng vào form đánh giá 5 sao để bạn in để quầy thu ngân.' },
      { step: '05', title: 'Bàn giao tài khoản & Bảo hành', description: 'Chuyển giao quyền sở hữu tối cao vào Gmail của bạn và kích hoạt bảo hành 5 năm.' }
    ],
    features: [
      'Khách tìm quanh khu vực thấy tiệm đầu tiên, bấm nút gọi điện thoại hoặc bấm chỉ đường ngay',
      'Tài khoản chính chủ 100%, tự tin tích lũy đánh giá 5 sao bền vững theo năm tháng',
      'Bảo hành quyền sở hữu và kỹ thuật bảo vệ Maps suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Nếu bị đối thủ bấm báo cáo đã đóng cửa thì LocalMate có hỗ trợ không?',
        answer: 'Có. Trong suốt thời gian bảo hành 5 năm, nếu Maps của bạn gặp trục trặc bị đối thủ chơi xấu báo đóng cửa hoặc đổi thông tin, kỹ thuật viên LocalMate sẽ trực tiếp hỗ trợ kháng nghị khôi phục hoàn toàn miễn phí.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Xác minh & SEO Google Maps từ 299.000đ',
    ctaText: 'Đưa tiệm lên Google Maps ngay',
    relatedServiceSlugs: ['geo', 'thiet-ke-website', 'seo-tong-the', 'google-ads'],
    highlighted: true
  },
  {
    id: 'srv-toi-uu-toc-do-web',
    slug: 'toi-uu-toc-do-web',
    aliases: ['dich-vu-toi-uu-toc-do-web', 'tang-toc-website'],
    name: 'Dịch vụ Tối Ưu Tốc Độ Website — Cam Kết PageSpeed > 90, Mở Dưới 1 Giây',
    shortName: 'Tăng Tốc Độ Website',
    category: 'Kỹ Thuật & Tối Ưu',
    categorySlug: 'website-fix',
    badge: 'Cam Kết PageSpeed 90+ ⚡',
    headline: 'Khách bấm là mở trang ngay tức thì, giảm tỷ lệ thoát trang, tăng gấp đôi khách gọi',
    problem: 'Website của bạn mất hơn 3–5 giây để tải xong. Khách hàng bấm vào từ quảng cáo hoặc Facebook thấy xoay vòng vòng liền bấm quay lại ngay. Bạn vừa mất tiền quảng cáo, vừa mất đi khách hàng tiềm năng.',
    outcome: 'Website mở trang mượt mà trong chớp mắt (dưới 1 giây), điểm Google PageSpeed đạt 90–100 điểm cả trên điện thoại lẫn máy tính.',
    promise: 'Nghiệm thu bằng công cụ Google PageSpeed Insights công khai, bảo hành tốc độ và độ mượt mà ổn định suốt 5 năm.',
    description: 'LocalMate tối ưu chuyên sâu mã nguồn: nén ảnh sang định dạng WebP siêu nhẹ mà không vỡ nét, dọn dẹp mã lệnh JavaScript thừa, kích hoạt bộ nhớ đệm Cache và định tuyến qua CDN Cloudflare máy chủ đặt tại Việt Nam. Cam kết web tải siêu tốc.',
    startingPrice: 'Từ 490.000đ / website',
    priceNote: 'Tối ưu trọn gói 1 lần • Đạt chuẩn PageSpeed 90+ mới thanh toán',
    warranty: 'Cam kết bảo hành tốc độ tải trang & độ ổn định hạ tầng 5 năm',
    slaTime: 'Hoàn tất tối ưu trong 24 giờ làm việc',
    suitableFor: [
      'Mọi website đang chạy quảng cáo Google Ads hoặc Facebook Ads để tiết kiệm ngân sách click',
      'Website bán hàng, giới thiệu dịch vụ bị khách phàn nàn tải chậm trên điện thoại',
      'Website làm bằng WordPress, PHP hoặc mã nguồn cũ bị phình to dữ liệu'
    ],
    notSuitableFor: [
      'Website chạy trên nền tảng đóng hoàn toàn không cho can thiệp mã nguồn hoặc máy chủ'
    ],
    deliverables: [
      'Nén toàn bộ thư viện hình ảnh sang chuẩn WebP/AVIF giảm 70% dung lượng mà ảnh vẫn cực nét',
      'Dọn dẹp mã CSS, JavaScript không dùng đến (Unused CSS/JS), trì hoãn tải file nặng',
      'Cấu hình bộ nhớ đệm trình duyệt (Browser Caching) giúp khách vào lần 2 mở ngay 0.1 giây',
      'Tích hợp mạng phân phối nội dung Cloudflare CDN máy chủ đặt tại Việt Nam',
      'Triệt tiêu hiện tượng giật khung hình khi cuộn (CLS = 0.000) và rút ngắn độ trễ tương tác (INP)',
      'Biên bản nghiệm thu chụp màn hình điểm Google PageSpeed Insights đạt trên 90 điểm'
    ],
    process: [
      { step: '01', title: 'Đo lường hiện trạng 0đ', description: 'Chạy kiểm tra điểm số thực tế trên Google PageSpeed Insights và gửi bạn xem.' },
      { step: '02', title: 'Sao lưu dữ liệu an toàn', description: 'Tạo bản sao lưu nguyên trạng website trước khi can thiệp kỹ thuật.' },
      { step: '03', title: 'Xử lý hình ảnh & Mã nguồn', description: 'Nén ảnh, làm sạch mã thừa và cấu hình bộ nhớ đệm.' },
      { step: '04', title: 'Đo lại & Nghiệm thu', description: 'Chạy lại công cụ của Google, điểm số đạt trên 90 điểm bạn mới thanh toán.' },
      { step: '05', title: 'Kích hoạt bảo hành 5 năm', description: 'Đội ngũ kỹ thuật túc trực đảm bảo web luôn chạy mượt mà ổn định.' }
    ],
    features: [
      'Trải nghiệm lướt web mượt mà như ứng dụng di động, khách không còn bấm thoát',
      'Giảm giá thầu quảng cáo Google Ads nhờ điểm chất lượng trang đích tăng cao',
      'Bảo hành tốc độ lâu dài 5 năm'
    ],
    faqs: [
      {
        question: 'Tối ưu tốc độ có làm thay đổi giao diện hay mất dữ liệu của tôi không?',
        answer: 'Tuyệt đối không. Kỹ thuật viên LocalMate luôn tạo bản backup an toàn trước khi làm và chỉ tối ưu cách thức tải dữ liệu ngầm của trình duyệt, giao diện và bài viết của bạn giữ nguyên vẹn 100%.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Tối ưu tốc độ Website PageSpeed > 90',
    ctaText: 'Đo tốc độ web miễn phí',
    relatedServiceSlugs: ['thiet-ke-website', 'seo-tong-the', 'cham-soc-website'],
    highlighted: false
  },
  {
    id: 'srv-dich-vu-entity',
    slug: 'dich-vu-entity',
    aliases: ['dich-vu-entity-so', 'xay-dung-thuc-the-so'],
    name: 'Dịch vụ Entity — Xây Dựng Thực Thể Số Doanh Nghiệp Trên Google & AI',
    shortName: 'Xây Dựng Thực Thể Số (Entity)',
    category: 'Kỹ Thuật & Tối Ưu',
    categorySlug: 'google-seo',
    badge: 'Nền Tảng Uy Tín 🏛️',
    headline: 'Khẳng định doanh nghiệp thật, người thật, địa chỉ thật trên Knowledge Graph của Google & AI',
    problem: 'Google và các hệ thống AI nghi ngờ website của bạn là trang web ảo hoặc thông tin trôi nổi không đáng tin. Do đó website rất khó lên top các từ khóa cạnh tranh và không bao giờ được AI trích dẫn.',
    outcome: 'Doanh nghiệp của bạn được định danh là một Thực thể có thật (Entity) với đầy đủ mã số thuế, địa chỉ, người đại diện và hồ sơ liên kết đồng bộ trên toàn bộ Internet.',
    promise: 'Cấu hình Schema JSON-LD chuyên sâu, tạo dựng mạng lưới hồ sơ định danh đồng nhất 100% NAP, cam kết bảo hành thực thể số 5 năm.',
    description: 'Dịch vụ Entity của LocalMate xây dựng nền móng uy tín vững chắc nhất cho thương hiệu: chúng tôi kết nối website của bạn với Google Business Profile, mạng xã hội chính thức, các danh bạ uy tín và sơ đồ tri thức (Knowledge Graph) giúp website miễn nhiễm trước các đợt bão cập nhật thuật toán.',
    startingPrice: 'Từ 1.490.000đ (Trọn gói)',
    priceNote: 'Xây dựng thực thể số trọn đời • Hồ sơ bàn giao chính chủ 100%',
    warranty: 'Cam kết bảo hành liên kết thực thể số & Schema vĩnh viễn lên đến 5 năm',
    slaTime: 'Bàn giao hoàn tất trong 5–7 ngày làm việc',
    suitableFor: [
      'Doanh nghiệp mới mở cần định danh thương hiệu nhanh chóng trên Google',
      'Cơ sở kinh doanh làm SEO lâu năm nhưng bị kẹt thứ hạng do thiếu độ tin cậy Trust',
      'Đơn vị muốn xuất hiện trên câu trả lời của các mô hình AI lớn như ChatGPT, Gemini'
    ],
    notSuitableFor: [
      'Đơn vị kinh doanh sản phẩm không rõ nguồn gốc xuất xứ hoặc cố tình dùng thông tin giả'
    ],
    deliverables: [
      'Cấu hình bộ Schema.org JSON-LD chuyên sâu (Organization, LocalBusiness, Person, SameAs)',
      'Khởi tạo và đồng bộ 50+ hồ sơ thương hiệu trên các mạng xã hội và danh bạ uy tín hàng đầu',
      'Khớp nối thông tin NAP (Tên - Địa chỉ - Hotline) chính xác 100% không sai lệch dù chỉ 1 chữ',
      'Tạo lập hồ sơ định danh người sáng lập (Founder Entity) liên kết chặt chẽ với thương hiệu',
      'File báo cáo Excel chi tiết toàn bộ tài khoản, mật khẩu và liên kết hồ sơ đã tạo'
    ],
    process: [
      { step: '01', title: 'Chuẩn hóa dữ liệu gốc', description: 'Thu thập thông tin chính xác về Tên tiệm, Địa chỉ, Số điện thoại, MST và người đại diện.' },
      { step: '02', title: 'Cài đặt mã Schema', description: 'Nhúng mã cấu trúc dữ liệu JSON-LD liên kết mạng lưới thực thể vào website.' },
      { step: '03', title: 'Xây dựng hồ sơ đa kênh', description: 'Đăng ký và xác thực profile trên 50+ nền tảng mạng xã hội và danh bạ số.' },
      { step: '04', title: 'Bàn giao toàn bộ tài khoản', description: 'Bàn giao 100% tài khoản đăng nhập để bạn toàn quyền làm chủ vĩnh viễn.' }
    ],
    features: [
      'Tạo lá chắn uy tín vững chắc bảo vệ website trước các đợt càn quét thuật toán của Google',
      'Giúp AI nhận diện chính xác ngành nghề và địa bàn phục vụ của bạn',
      'Bảo hành thực thể số lâu dài 5 năm'
    ],
    faqs: [
      {
        question: 'Entity có giúp website lên top từ khóa nhanh hơn không?',
        answer: 'Có. Khi Google đã tin tưởng website của bạn là một thực thể doanh nghiệp có thật và uy tín, các bài viết mới xuất bản sẽ được index nhanh hơn và thứ hạng từ khóa cải thiện rõ rệt so với website vô danh.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Xây dựng Thực thể số Entity 1.490.000đ',
    ctaText: 'Định danh thực thể số ngay',
    relatedServiceSlugs: ['geo', 'seo-tong-the', 'google-maps'],
    highlighted: false
  },
  {
    id: 'srv-seo-audit',
    slug: 'seo-audit',
    aliases: ['dich-vu-seo-audit', 'kiem-toan-seo-website'],
    name: 'Dịch vụ SEO Audit — Khảo Sát & Kiểm Toán Toàn Diện Website 0đ',
    shortName: 'SEO Audit & Kiểm Toán Web',
    category: 'Tìm Kiếm & Bản Đồ',
    categorySlug: 'google-seo',
    badge: 'Khảo Sát 0đ Miễn Phí 🔍',
    headline: 'Bắt đúng bệnh vì sao website không ra đơn, chỉ ra giải pháp tiết kiệm nhất',
    problem: 'Website có người vào xem nhưng không ai gọi điện mua hàng. Hoặc bạn đã bỏ tiền làm web cả năm trời nhưng gõ tên dịch vụ trên Google không thấy đâu. Bạn không biết vấn đề nằm ở code, ở nội dung hay do bị phạt.',
    outcome: 'Bản báo cáo kiểm toán rõ ràng từng lỗi sai, kèm checklist hành động cụ thể để khắc phục ngay những điểm nghẽn chuyển đổi mà không phải đập đi xây lại tốn kém.',
    promise: 'Khảo sát hiện trạng hoàn toàn 0 đồng, tư vấn thật thà bằng ngôn ngữ đời thường, không hù dọa ép mua phần mềm.',
    description: 'LocalMate trực tiếp rà soát toàn diện website của bạn: từ tốc độ mở trang, trải nghiệm bấm nút trên điện thoại di động, cấu trúc thẻ SEO đến khả năng đọc hiểu của các bot AI. Bạn nhận ngay bản chẩn đoán thực tế để tự sửa hoặc nhờ chúng tôi hỗ trợ.',
    startingPrice: 'Khảo sát ban đầu 0đ',
    priceNote: 'Bản khảo sát nhanh: 0đ • Gói Audit chuyên sâu: 990.000đ',
    warranty: 'Cam kết bảo hành hiệu quả các giải pháp kỹ thuật đề xuất 5 năm',
    slaTime: 'Xuất bản báo cáo trong 24 giờ',
    suitableFor: [
      'Chủ cơ sở có sẵn website nhưng không biết web của mình hoạt động tốt hay kém',
      'Người đang chạy quảng cáo nhưng tỷ lệ chuyển đổi thấp, muốn tìm nguyên nhân rò rỉ khách',
      'Doanh nghiệp chuẩn bị đầu tư làm SEO hoặc nâng cấp website muốn có căn cứ đánh giá'
    ],
    notSuitableFor: [
      'Đơn vị chưa có website hoặc tên miền riêng'
    ],
    deliverables: [
      'Bảng kiểm toán 50+ tiêu chí kỹ thuật: Link hỏng 404, trùng lặp thẻ, thiếu SSL, tốc độ tải trang',
      'Đánh giá trải nghiệm người dùng di động: Nút gọi có dễ bấm không, cỡ chữ có bị nhỏ không',
      'Phân tích đối thủ trực tiếp cùng khu vực đang lấy khách hàng của bạn bằng cách nào',
      'Bảng checklist hành động cụ thể xếp theo thứ tự ưu tiên (việc cần làm ngay trong 24h)',
      'Cuộc gọi tư vấn 1-1 trực tiếp giải thích từng số liệu bằng ngôn ngữ bình dân dễ hiểu'
    ],
    process: [
      { step: '01', title: 'Tiếp nhận đường link web', description: 'Bạn chỉ cần gửi địa chỉ website hoặc fanpage hiện tại của tiệm.' },
      { step: '02', title: 'Chạy công cụ chẩn đoán', description: 'Kỹ thuật viên sử dụng bộ công cụ chuyên sâu rà soát toàn bộ cấu trúc mã nguồn.' },
      { step: '03', title: 'Lập bảng phân tích', description: 'Tổng hợp các điểm nghẽn làm rớt khách và đề xuất phương án xử lý tiết kiệm nhất.' },
      { step: '04', title: 'Gửi báo cáo & Tư vấn', description: 'Gửi file báo cáo qua Zalo và gọi điện thoại giải đáp tận tình cho bạn.' }
    ],
    features: [
      'Khảo sát hoàn toàn 0 đồng, không có bất kỳ ràng buộc phải mua dịch vụ',
      'Tư vấn trung thực, tận dụng tối đa những gì bạn đã có để tiết kiệm chi phí',
      'Bảo hành giải pháp kỹ thuật dài lâu 5 năm'
    ],
    faqs: [
      {
        question: 'Nhận bản Audit 0đ xong tôi có bắt buộc phải thuê LocalMate sửa không?',
        answer: 'Hoàn toàn không. Bản báo cáo là tài sản của bạn, bạn có thể tự sửa hoặc đưa cho bất kỳ bạn IT nào làm theo checklist. LocalMate chỉ hỗ trợ thi công khi bạn thực sự tin tưởng và yêu cầu.'
      }
    ],
    serviceNameForLead: 'Khảo sát SEO Audit Website 0đ',
    ctaText: 'Nhận bản kiểm toán web 0đ',
    relatedServiceSlugs: ['toi-uu-toc-do-web', 'thiet-ke-website', 'seo-tong-the'],
    highlighted: false
  },
  {
    id: 'srv-google-ads',
    slug: 'google-ads',
    aliases: ['quang-cao-google-ads', 'quang-cao-google', 'google-ads-dia-phuong'],
    name: 'Dịch vụ Quảng Cáo Google Ads — Tiếp Cận Đúng Khách Đang Tìm, 0% Kê Giá',
    shortName: 'Quảng Cáo Google Ads',
    category: 'Quảng Cáo & Kéo Khách',
    categorySlug: 'ads-conversion',
    badge: '0% Kê Giá Minh Bạch 🎯',
    headline: 'Quảng cáo nhắm đúng người đang cần mua, tiền trừ thẳng thẻ ngân hàng của bạn',
    problem: 'Bạn từng thuê đơn vị chạy quảng cáo và nghi ngờ họ kê giá ăn chênh lệch ngân sách, hoặc chạy đốt tiền vào những từ khóa linh tinh khiến cả ngày chỉ toàn người bấm nhầm mà không có cuộc gọi nào.',
    outcome: 'Mẫu quảng cáo hiển thị ngay trước mắt người đang chủ động tìm kiếm dịch vụ trong khu vực, đo lường chính xác từng cuộc gọi và tin nhắn phát sinh.',
    promise: 'Cài đặt trực tiếp trên tài khoản quảng cáo thuộc quyền sở hữu của chính bạn, 0% kê giá, bảo hành kỹ thuật tài khoản 5 năm.',
    description: 'LocalMate thiết lập chiến dịch Google Ads minh bạch 100%: bạn tự giữ thẻ ngân hàng thanh toán trực tiếp cho Google, LocalMate chỉ thu phí kỹ thuật cài đặt hoặc tối ưu cố định. Chúng tôi lọc sạch từ khóa rác, cài đặt nút gọi điện thoại trực tiếp để từng đồng chi phí đều đem lại khách thật.',
    startingPrice: 'Từ 390.000đ (Cài đặt)',
    priceNote: 'Cài đặt chiến dịch chuẩn: 390k • Chăm sóc tối ưu theo tháng: từ 990k',
    warranty: 'Cam kết bảo hành kỹ thuật tài khoản & lọc click tặc lên đến 5 năm',
    slaTime: 'Chiến dịch chạy thật trong 24 giờ làm việc',
    suitableFor: [
      'Doanh nghiệp dịch vụ, thợ sửa chữa, phòng khám, vận tải cần khách gọi ngay lập tức',
      'Người muốn kiểm soát ngân sách minh bạch từ 50.000đ – 100.000đ/ngày',
      'Cơ sở từng tự chạy ads bị lỗ do click ảo và từ khóa không đúng mục tiêu'
    ],
    notSuitableFor: [
      'Cơ sở chưa có số hotline trực tiếp hoặc không có người túc trực nghe máy'
    ],
    deliverables: [
      'Khảo sát và chọn lọc danh sách từ khóa có nhu cầu mua hàng thật trong khu vực',
      'Cài đặt danh sách chặn 200+ từ khóa tìm việc, tìm tài liệu miễn phí tránh mất tiền oan',
      'Viết 03–05 mẫu quảng cáo rõ giá, rõ ưu đãi và lời mời gọi điện thoại trực tiếp',
      'Gắn tiện ích cuộc gọi Hotline và vị trí Google Maps hiển thị ngay trong mẫu quảng cáo',
      'Cài đặt mã đo lường chuyển đổi đếm chính xác số cuộc gọi phát sinh từ quảng cáo',
      'Bàn giao 100% tài khoản chính chủ mang tên bạn, thẻ ngân hàng bạn tự giữ'
    ],
    process: [
      { step: '01', title: 'Khảo sát dịch vụ & Từ khóa', description: 'Tìm những câu khách hàng hay gõ trên Google khi cần thuê dịch vụ của bạn.' },
      { step: '02', title: 'Cài đặt chiến dịch chính chủ', description: 'Tạo quảng cáo trực tiếp trên Gmail của bạn và hướng dẫn bạn nạp tiền thẳng cho Google.' },
      { step: '03', title: 'Cài nút gọi & Đo lường', description: 'Gắn số hotline và thiết lập hệ thống đếm số cuộc gọi phát sinh.' },
      { step: '04', title: 'Bật chạy & Chặn click ảo', description: 'Theo dõi các từ khóa khách vừa gõ để loại bỏ ngay những lượt bấm nhầm.' },
      { step: '05', title: 'Báo cáo chi phí trên cuộc gọi', description: 'Gửi bảng tổng kết minh bạch chi phí thực tế chia cho số cuộc gọi nhận được.' }
    ],
    features: [
      'Minh bạch tuyệt đối: 0% kê giá, hóa đơn tiền quảng cáo gửi thẳng từ Google về email bạn',
      'Khách bấm vào là gọi điện trực tiếp cho bạn, không phải qua khâu trung gian',
      'Bảo hành kỹ thuật tài khoản và chống gian lận suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Tôi cần chuẩn bị bao nhiêu tiền để bắt đầu chạy quảng cáo Google?',
        answer: 'Bạn hoàn toàn có thể bắt đầu với ngân sách rất nhỏ từ 50.000đ đến 100.000đ mỗi ngày trả cho Google. Khi thấy có khách gọi điện mang lại lợi nhuận, bạn mới chủ động tăng ngân sách theo ý muốn.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Quảng cáo Google Ads minh bạch từ 390.000đ',
    ctaText: 'Tư vấn chạy Google Ads ra số',
    relatedServiceSlugs: ['khac-phuc-loi-google-ads', 'thiet-ke-website', 'facebook-ads'],
    highlighted: true
  },
  {
    id: 'srv-khac-phuc-loi-google-ads',
    slug: 'khac-phuc-loi-google-ads',
    aliases: ['loi-google-ads-sua-chua', 'khang-nghi-google-ads', 'khac-phuc-loi-google-ads-sua-chua', 'go-loi-google-ads-sua-chua', 'google-ads-sua-dien-thoai-laptop', 'khac-phuc-google-ads-sua-chua'],
    name: 'Khắc Phục Lỗi Google Ads — Chuyên Sửa Chữa Điện Thoại, Laptop, Điện Lạnh & Ngành Nhạy Cảm',
    shortName: 'Khắc Phục Lỗi Google Ads',
    category: 'Quảng Cáo & Kéo Khách',
    categorySlug: 'ads-conversion',
    badge: 'Chuyên Trị Ca Khó 🛠️',
    headline: 'Gỡ lệnh tạm ngưng tài khoản, vượt qua chính sách dịch vụ kỹ thuật bên thứ ba',
    problem: 'Bạn làm nghề sửa điện thoại, sửa laptop, điện lạnh, thông cống hoặc dịch vụ tại nhà bị Google Ads quét tạm ngưng tài khoản vì lý do: "Dịch vụ kỹ thuật bên thứ ba không được phê duyệt" hoặc "Né tránh hệ thống". Bạn tạo tài khoản mới cũng bị khóa theo.',
    outcome: 'Tài khoản quảng cáo và trang đích của bạn được kháng nghị thành công, chiến dịch hoạt động ổn định trở lại mà không sợ bị quét oan.',
    promise: 'Chuẩn hóa trang đích đáp ứng 100% chính sách của Google, soạn đơn kháng nghị chính thống, cam kết bảo hành tài khoản 5 năm.',
    description: 'LocalMate có kinh nghiệm thực chiến xử lý hàng trăm ca khó cho các thợ kỹ thuật tại địa phương. Chúng tôi sửa lại bố cục website, bổ sung các thông tin pháp lý bắt buộc và làm việc trực tiếp với đội ngũ xét duyệt Google để bảo vệ quyền được quảng cáo chính đáng của bạn.',
    startingPrice: 'Từ 990.000đ / lần xử lý',
    priceNote: 'Kháng nghị không thành công hoàn lại 100% chi phí',
    warranty: 'Cam kết bảo hành tài khoản & kháng nghị miễn phí nếu bị quét lại trong 5 năm',
    slaTime: 'Xử lý và gửi đơn kháng nghị trong 24–48 giờ',
    suitableFor: [
      'Cơ sở sửa chữa điện thoại, ép kính, thay pin iPhone/Samsung/Laptop',
      'Đội ngũ thợ điện lạnh, sửa máy giặt, điều hòa, tủ lạnh, thông hút bể phốt',
      'Doanh nghiệp bị tạm ngưng tài khoản Google Ads vì lỗi phương thức thanh toán đáng ngờ'
    ],
    notSuitableFor: [
      'Các hành vi lừa đảo giả mạo tổng đài chính hãng của Apple, Samsung để chiếm đoạt tài sản'
    ],
    deliverables: [
      'Rà soát toàn bộ mã nguồn và câu chữ trên Landing Page gây kích hoạt bộ lọc quét của Google',
      'Bổ sung trang Tuyên bố từ chối trách nhiệm độc lập (Disclaimer) và chính sách bảo hành rõ ràng',
      'Chuẩn hóa thông tin liên hệ, địa chỉ cơ sở và biểu phí minh bạch vượt qua kiểm duyệt thủ công',
      'Soạn thảo hồ sơ kháng nghị gửi riêng cho bộ phận Trust & Safety của Google',
      'Cấu hình tài khoản dự phòng và hướng dẫn quy trình nuôi tài khoản an toàn chống bão'
    ],
    process: [
      { step: '01', title: 'Chẩn đoán nguyên nhân phạt', description: 'Đọc chi tiết thông báo lỗi và kiểm tra lịch sử thao tác trên tài khoản quảng cáo.' },
      { step: '02', title: 'Chuẩn hóa lại trang đích', description: 'Sửa các câu từ nhạy cảm và thêm các trang chính sách bắt buộc theo luật Google.' },
      { step: '03', title: 'Lập hồ sơ kháng nghị', description: 'Soạn thảo đơn giải trình kèm hình ảnh cửa hàng thực tế và giấy tờ xác thực.' },
      { step: '04', title: 'Gửi kháng & Theo dõi', description: 'Làm việc với đội hỗ trợ Google đến khi tài khoản được mở khóa chạy lại.' },
      { step: '05', title: 'Bảo hành chống quét 5 năm', description: 'Hỗ trợ kỹ thuật liên tục giúp tài khoản luôn ở trạng thái an toàn.' }
    ],
    features: [
      'Giải quyết dứt điểm các ca khóa tài khoản oan uổng cho anh em thợ kỹ thuật',
      'Nghiệm thu tài khoản xanh chạy được mới thu phí, cam kết hoàn tiền 100% nếu không đạt',
      'Bảo hành hỗ trợ kỹ thuật và kháng nghị dự phòng suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Ngành sửa chữa điện thoại laptop có chạy quảng cáo Google được nữa không?',
        answer: 'Hoàn toàn được nếu bạn tuân thủ đúng chính sách minh bạch của Google: tuyên bố rõ bạn là đơn vị sửa chữa độc lập, không giả mạo trung tâm ủy quyền chính hãng và công khai bảng giá rõ ràng. LocalMate sẽ chuẩn hóa mọi thứ thay bạn.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Khắc phục lỗi Google Ads sửa chữa từ 990.000đ',
    ctaText: 'Kháng tài khoản Google Ads ngay',
    relatedServiceSlugs: ['google-ads', 'thiet-ke-website', 'cham-soc-website'],
    highlighted: false
  },
  {
    id: 'srv-facebook-ads',
    slug: 'facebook-ads',
    aliases: ['quang-cao-facebook', 'chay-ads-facebook', 'facebook-ads-dia-phuong', 'facebook-ads-5km'],
    name: 'Dịch vụ Facebook Ads — Nhắm Trúng Khách Hàng Quanh Bán Kính Điểm Bán',
    shortName: 'Quảng Cáo Facebook Ads',
    category: 'Quảng Cáo & Kéo Khách',
    categorySlug: 'ads-conversion',
    badge: 'Thu Hút Khách Quanh Tiệm 👥',
    headline: 'Quảng cáo nhắm trúng cư dân quanh bán kính 3–10km, khách nhắn tin hỏi giá liên tục',
    problem: 'Tự bấm nút "Quảng cáo bài viết" trên Fanpage nhưng chỉ toàn người bấm like dạo hoặc nick ảo ở tỉnh xa nhắn tin hỏi rồi im lặng. Bạn tốn tiền mà tiệm vẫn vắng khách.',
    outcome: 'Chiến dịch quảng cáo chuyên nghiệp nhắm đúng khách hàng sinh sống quanh khu vực cửa tiệm, thu hút tin nhắn hỏi đặt bàn, đặt lịch hẹn và ghé mua trực tiếp.',
    promise: 'Cài đặt trực tiếp trên Trình quản lý quảng cáo chính chủ của bạn, 0% kê giá, tối ưu tin nhắn thật, cam kết bảo hành kỹ thuật tài khoản 5 năm.',
    description: 'LocalMate thiết lập chiến dịch Facebook Ads bài bản: thiết kế banner đẹp mắt, viết nội dung đánh trúng tâm lý thèm ăn, cần làm đẹp hay cần dịch vụ của người dân địa phương. Tích hợp nút nhắn Zalo/Messenger tự động phản hồi để bạn chốt đơn nhanh nhất.',
    startingPrice: 'Từ 490.000đ (Cài đặt)',
    priceNote: 'Cài đặt chiến dịch chuẩn: 490k • Quản trị chăm sóc hàng tháng: từ 990k',
    warranty: 'Cam kết bảo hành kỹ thuật tài khoản BM & Pixel CAPI lên đến 5 năm',
    slaTime: 'Lên mẫu và gửi duyệt trong 24 giờ',
    suitableFor: [
      'Quán ăn, quán cafe, trà sữa muốn kéo khách đông đúc vào giờ trưa/tối hoặc cuối tuần',
      'Spa, thẩm mỹ viện, salon tóc, tiệm nail cần khách đặt lịch hẹn trải nghiệm',
      'Cửa hàng thời trang, đồ gia dụng, nông sản địa phương muốn tăng đơn giao tận nơi'
    ],
    notSuitableFor: [
      'Sản phẩm kém chất lượng, hàng giả hàng nhái vi phạm chính sách thương hiệu của Meta'
    ],
    deliverables: [
      'Cài đặt chiến dịch trực tiếp trên Trình quản lý quảng cáo thuộc quyền sở hữu của bạn',
      'Nhắm chuẩn bán kính 3–10km quanh tọa độ cửa hàng, loại bỏ đối tượng ảo ngoài tỉnh',
      'Thiết kế 02–03 banner hình ảnh món ăn/dịch vụ bắt mắt kích thích thị giác',
      'Biên soạn bài viết ngắn gọn, rõ giá ưu đãi và lời kêu gọi nhắn tin đặt lịch',
      'Cấu hình bộ câu hỏi tự động (Quick Replies) giúp khách bấm 1 chạm là gửi tin nhắn hỏi ngay',
      'Báo cáo minh bạch chi phí trên từng tin nhắn khách hàng mới mỗi tuần'
    ],
    process: [
      { step: '01', title: 'Chọn ưu đãi hút khách', description: 'Chọn ra 1 món ăn hoặc 1 dịch vụ tốt nhất của tiệm kèm ưu đãi hấp dẫn để kéo khách thử.' },
      { step: '02', title: 'Thiết kế ảnh & Viết bài', description: 'Chụp ảnh thật tại quán, thiết kế banner chuyên nghiệp và soạn lời mời gọi tự nhiên.' },
      { step: '03', title: 'Cài đặt khoanh vùng bán kính', description: 'Thả ghim đúng vị trí tiệm trên bản đồ Facebook và quét bán kính khách hàng tiềm năng.' },
      { step: '04', title: 'Bật quảng cáo & Phản hồi', description: 'Quảng cáo xuất hiện trên bảng tin cư dân quanh vùng, tin nhắn đổ về hộp thư tiệm.' },
      { step: '05', title: 'Tối ưu chi phí tin nhắn', description: 'Theo dõi mẫu quảng cáo hiệu quả nhất để tập trung ngân sách đem lại khách rẻ nhất.' }
    ],
    features: [
      'Kéo khách quanh khu vực ghé tiệm ngay trong tuần, tạo không khí nhộn nhịp',
      'Bạn tự giữ quyền quản trị và thẻ thanh toán, không sợ bị ăn chặn chi phí ads',
      'Bảo hành kỹ thuật tài khoản và Pixel suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Chạy Facebook Ads bao lâu thì bắt đầu có khách nhắn tin?',
        answer: 'Sau khi Facebook phê duyệt chiến dịch (khoảng 2 đến 4 giờ), bài quảng cáo sẽ bắt đầu xuất hiện trên newsfeed của khách hàng quanh tiệm và tin nhắn thường đổ về ngay trong ngày đầu tiên.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Quảng cáo Facebook Ads từ 490.000đ',
    ctaText: 'Kéo khách ghé tiệm ngay',
    relatedServiceSlugs: ['google-ads', 'cham-soc-website', 'thiet-ke-website'],
    highlighted: false
  },
  {
    id: 'srv-cham-soc-website',
    slug: 'cham-soc-website',
    aliases: ['quan-tri-website', 'bao-tri-website', 'cham-soc-website-chuan-seo'],
    name: 'Dịch Vụ Chăm Sóc & Vận Hành Website — Có Đội IT Riêng, Bảo Hành 5 Năm',
    shortName: 'Chăm Sóc & Bảo Trì Website',
    category: 'Vận Hành & Đồng Hành',
    categorySlug: 'digital-care',
    badge: 'Đồng Hành 5 Năm 🛡️',
    headline: 'Có nguyên phòng kỹ thuật số túc trực thay bạn, chi phí chỉ bằng 1 ngày lương thợ',
    problem: 'Bạn bận rộn bán hàng cả ngày nên không có thời gian viết bài mới, đổi bảng giá hay thay banner khuyến mãi. Khi website bỗng dưng báo lỗi hoặc bị khóa vì hết hạn tên miền, bạn loay hoay không biết gọi ai xử lý.',
    outcome: 'Website luôn tươi mới, bài viết đăng đều đặn mỗi tuần, dữ liệu được sao lưu hàng tuần an toàn và có kỹ thuật viên nghe máy hỗ trợ ngay lập tức.',
    promise: 'Xử lý sự cố trong vòng 2 giờ, hỗ trợ trực tiếp 1-1 qua nhóm Zalo riêng, cam kết đồng hành bảo hành kỹ thuật lên đến 5 năm.',
    description: 'LocalMate hoạt động như phòng IT ngoài của tiệm: chúng tôi túc trực chăm sóc nội dung, cập nhật hình ảnh, quét mã độc, gia hạn tên miền và tối ưu tốc độ thường xuyên. Bạn chỉ cần tập trung phục vụ khách, việc kỹ thuật đã có LocalMate lo.',
    startingPrice: 'Từ 990.000đ / tháng',
    priceNote: 'Gói đồng hành linh hoạt • Không ràng buộc hợp đồng dài hạn',
    warranty: 'Cam kết bảo hành toàn diện hạ tầng, lỗi code & bảo mật lên đến 5 năm',
    slaTime: 'Phản hồi trong 15 phút • Xử lý sự cố trong 2 giờ',
    suitableFor: [
      'Chủ cơ sở bận rộn không có thời gian chăm chút bài viết và kỹ thuật website',
      'Doanh nghiệp không muốn tốn 10–15 triệu/tháng để thuê một nhân viên IT ngồi không',
      'Cửa hàng cần cập nhật món mới, bảng giá và chương trình khuyến mãi hàng tuần'
    ],
    notSuitableFor: [
      'Hệ thống phần mềm tài chính lớn yêu cầu kỹ sư IT túc trực 24/7 tại văn phòng'
    ],
    deliverables: [
      'Đăng 08–12 bài viết chuẩn SEO và thiết kế banner ưu đãi mới đều đặn hàng tháng',
      'Tự động sao lưu (backup) toàn bộ dữ liệu website hàng tuần lên đám mây an toàn',
      'Kiểm tra định kỳ và gia hạn kịp thời chứng chỉ bảo mật SSL, tên miền, hosting',
      'Quét dọn mã độc, chống tấn công từ chối dịch vụ và xử lý lỗi phát sinh trong 2 giờ',
      'Tối ưu tốc độ tải trang định kỳ đảm bảo web luôn mở dưới 1 giây',
      'Kỹ thuật viên đồng hành riêng biệt qua nhóm Zalo 1-1, gửi yêu cầu là làm ngay'
    ],
    process: [
      { step: '01', title: 'Tạo nhóm Zalo riêng', description: 'Thiết lập nhóm trao đổi trực tiếp giữa chủ cơ sở và kỹ thuật viên LocalMate.' },
      { step: '02', title: 'Lên lịch biên tập tháng', description: 'Thống nhất các bài viết, chương trình ưu đãi và hình ảnh cần đăng trong tháng.' },
      { step: '03', title: 'Thực thi & Đăng tải', description: 'Kỹ thuật viên tự động viết bài, thiết kế ảnh và xuất bản đúng lịch hẹn.' },
      { step: '04', title: 'Bảo trì & Sao lưu tuần', description: 'Hệ thống tự động sao lưu dữ liệu và kiểm tra an ninh mạng hàng tuần.' },
      { step: '05', title: 'Báo cáo vận hành tháng', description: 'Gửi bảng tổng kết lượng khách truy cập và các đầu việc đã hoàn thành.' }
    ],
    features: [
      'Tiết kiệm 85% chi phí so với việc tự thuê nhân sự kỹ thuật riêng tại cơ sở',
      'Website luôn mới mẻ, tạo độ tin cậy cao nhất khi khách hàng ghé thăm tìm hiểu',
      'Yên tâm kinh doanh với chính sách bảo hành toàn diện suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Khi tôi cần sửa giá hoặc đổi số điện thoại gấp thì bao lâu được làm xong?',
        answer: 'Chỉ cần bạn nhắn vào nhóm Zalo, kỹ thuật viên LocalMate phản hồi trong 15 phút và hoàn tất việc cập nhật trên website trong vòng 30 phút đến 1 giờ.'
      }
    ],
    serviceNameForLead: 'Dịch vụ Chăm sóc & Vận hành Website 990.000đ/tháng',
    ctaText: 'Thuê đội IT ngoài ngay',
    relatedServiceSlugs: ['thiet-ke-website', 'toi-uu-toc-do-web', 'seo-tong-the'],
    highlighted: true
  },
  {
    id: 'srv-khoa-hoc-geo-ai',
    slug: 'khoa-hoc-geo-ai',
    aliases: ['dao-tao-geo-ai', 'khoa-hoc-seo-ai'],
    name: 'Khóa Đào Tạo Chuyển Giao GEO & SEO AI — Tự Làm Chủ Đề Xuất AI Cho Cơ Sở Địa Phương',
    shortName: 'Đào Tạo Chuyển Giao GEO & AI',
    category: 'Đào Tạo & Chuyển Giao',
    categorySlug: 'ai-software',
    badge: 'Chuyển Giao Thực Chiến 🎓',
    headline: 'Học 1 lần dùng cả đời, tự tay tối ưu cơ sở lên ChatGPT, Gemini mà không cần thuê ngoài',
    problem: 'Bạn muốn ứng dụng AI để kéo khách cho tiệm nhưng sợ các khóa học lý thuyết sáo rỗng hàng chục triệu của các diễn giả không có kiến thức kỹ thuật thực tế.',
    outcome: 'Tự tay cài đặt Schema JSON-LD, kích hoạt file llms.txt và sở hữu Prompt Bank 100+ câu lệnh chuẩn xác để điều khiển AI đề xuất tiệm của bạn.',
    promise: 'Cầm tay chỉ việc 1 kèm 1, học thực chiến trên chính cơ sở kinh doanh của bạn, cam kết đồng hành giải đáp kỹ thuật 5 năm.',
    description: 'Chương trình đào tạo chuyển giao công nghệ GEO & SEO AI thực chiến của LocalMate dành riêng cho chủ cơ sở và nhân sự nội bộ. Chúng tôi chia sẻ trọn bộ quy trình, biểu mẫu và công cụ kỹ thuật từ gốc giúp bạn làm chủ hoàn toàn hiện diện của tiệm trên các cỗ máy tìm kiếm AI thế hệ mới.',
    startingPrice: 'Từ 1.990.000đ / khóa',
    priceNote: 'Đào tạo 1 kèm 1 (Trực tiếp hoặc Online) • Tặng kèm trọn bộ tài liệu & Prompt Bank',
    warranty: 'Cam kết hỗ trợ hỏi đáp kỹ thuật & cập nhật tài liệu AI mới trong 5 năm',
    slaTime: 'Khai giảng linh hoạt theo thời gian rảnh của học viên',
    suitableFor: [
      'Chủ cơ sở kinh doanh muốn tự mình nắm vững công nghệ AI để quản lý cửa hàng',
      'Nhân sự marketing hoặc người thân phụ trách kênh online của gia đình',
      'Freelancer, thợ kỹ thuật muốn bổ sung kỹ năng triển khai GEO để phục vụ khách hàng'
    ],
    notSuitableFor: [
      'Người chỉ muốn học lý thuyết suông để đi chém gió mà không chịu thực hành'
    ],
    deliverables: [
      'Trọn bộ giáo trình thực chiến từng bước tối ưu Schema JSON-LD và file llms.txt chuẩn quốc tế',
      'Bộ Prompt Bank 100+ câu hỏi kiểm thử và kích hoạt nhận diện thương hiệu trên ChatGPT/Gemini',
      'Quy trình chuẩn hóa Google Maps và thực thể số Entity không tốn chi phí',
      'Video quay màn hình thao tác từng bước lưu trữ trọn đời để xem lại bất kỳ lúc nào',
      'Quyền truy cập nhóm hỗ trợ kỹ thuật 1 kèm 1 giải đáp thắc mắc suốt 5 năm'
    ],
    process: [
      { step: '01', title: 'Khảo sát hiện trạng cơ sở', description: 'Đánh giá điểm mạnh yếu của website và Maps hiện tại của học viên.' },
      { step: '02', title: 'Buổi 1: Nền tảng thực thể', description: 'Thực hành chuẩn hóa thông tin NAP và cấu hình Schema LocalBusiness.' },
      { step: '03', title: 'Buổi 2: Làm chủ GEO & llms.txt', description: 'Tự tay tạo tệp dữ liệu sạch và nạp thông tin tiệm cho các mô hình AI.' },
      { step: '04', title: 'Buổi 3: Prompt Bank & Kiểm chứng', description: 'Chạy kiểm thử thực tế và quy trình duy trì thứ hạng đề xuất hàng tháng.' },
      { step: '05', title: 'Chuyển giao & Đồng hành 5 năm', description: 'Bàn giao tài liệu và hỗ trợ kỹ thuật trọn đời trong quá trình kinh doanh.' }
    ],
    features: [
      'Học trên chính bài toán thực tế của tiệm, làm đến đâu có kết quả đến đó',
      'Nắm vững bản chất công nghệ, không bị các agency bên ngoài hét giá',
      'Được chuyên gia kỹ thuật LocalMate đồng hành giải đáp suốt 5 năm'
    ],
    faqs: [
      {
        question: 'Tôi lớn tuổi không rành công nghệ có học được không?',
        answer: 'Hoàn toàn học được. Giáo trình được thiết kế theo dạng cầm tay chỉ việc, từng bước bấm chuột cụ thể như hướng dẫn dùng smartphone, không dùng thuật ngữ tiếng Anh phức tạp.'
      }
    ],
    serviceNameForLead: 'Khóa Đào tạo Chuyển giao GEO & AI 1.990.000đ',
    ctaText: 'Đăng ký học 1 kèm 1',
    relatedServiceSlugs: ['geo', 'aeo', 'seo-ai', 'thiet-ke-website'],
    highlighted: false
  }
];

export const getAllOperationServices = (): OperationServiceItem[] => {
  return ALL_15_SERVICES_DATA;
};

export const getOperationServiceBySlug = (slug: string): OperationServiceItem | undefined => {
  const normalized = slug.trim().toLowerCase();
  
  // Direct slug match
  const direct = ALL_15_SERVICES_DATA.find((s) => s.slug === normalized);
  if (direct) return direct;

  // Alias match
  const aliasMatch = ALL_15_SERVICES_DATA.find((s) => s.aliases && s.aliases.includes(normalized));
  if (aliasMatch) return aliasMatch;

  return undefined;
};
