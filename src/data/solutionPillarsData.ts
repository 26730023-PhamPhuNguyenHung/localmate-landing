import React from 'react';
import {
  Globe,
  MapPin,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Workflow,
  Headphones,
  Search,
  Store,
  Stethoscope,
  Wrench,
  Home
} from 'lucide-react';

export interface SolutionPillar {
  id: string;
  slug: string;
  fullPath: string;
  pillarNumber: string;
  title: string;
  englishTitle: string;
  badge: string;
  tagline: string;
  question: string;
  brandPromise: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  startingPrice: string;
  slaTime: string;
  ownershipCommitment: string;
  color: {
    primary: string;
    bgSoft: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
  iconName: 'Globe' | 'MapPin' | 'TrendingUp' | 'Cpu' | 'ShieldCheck';
}

export interface SolutionPillarItem {
  id: string;
  number: string;
  pillarNumber: string;
  needLabel: string;
  title: string;
  subtitle: string;
  englishTitle: string;
  slug: string;
  deepDiveUrl: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  borderColor: string;
  iconName: string;
  customerQuestion: string;
  painPoint: string;
  outcome: string;
  brandPromise: string;
  startingPrice: string;
  slaTime: string;
  keyDeliverables: string[];
  techModules: string[];
  ownershipCommitment: string;
}

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    id: 'pillar-digital-foundations',
    slug: 'nen-tang-so',
    fullPath: '/giai-phap/nen-tang-so',
    pillarNumber: '01',
    title: 'Xây Dựng Nền Tảng Số',
    englishTitle: 'Digital Foundations',
    badge: 'Khởi Tạo Hiện Diện Số',
    tagline: 'Website chuẩn di động, mở nhanh dưới 1.5s & Sở hữu 100% tài nguyên',
    question: 'Doanh nghiệp tôi chưa có kênh số chính thức, hoặc trang cũ nhìn luộm thuộm, thiếu uy tín.',
    brandPromise: 'Tạo dựng cho doanh nghiệp một ngôi nhà số hoàn chỉnh, tốc độ tải nhanh dưới 1.5 giây trên di động, hiển thị rõ ràng sản phẩm, bảng giá và nút gọi Hotline/Zalo 1 chạm. Khách hàng sở hữu 100% tài nguyên, không bị giữ chân bởi hệ thống đóng.',
    capabilities: [
      {
        title: 'Trang Bán Hàng & Giới Thiệu 1 Trang',
        description: 'Tối ưu thông điệp, hình ảnh thực tế, bảng giá rõ ràng và nút gọi Hotline/Zalo nổi bật.'
      },
      {
        title: 'Website Doanh Nghiệp 3–5 Trang Chuẩn Mực',
        description: 'Đầy đủ Trang chủ, Giới thiệu, Dịch vụ/Sản phẩm, Bảng giá, Liên hệ & Bản đồ chỉ đường.'
      },
      {
        title: 'Tên Miền & Hạ Tầng Cloudflare Tốc Độ Cao',
        description: 'Cấu hình DNS an toàn, chứng chỉ SSL miễn phí trọn đời, tải nhanh trên mọi nhà mạng.'
      },
      {
        title: 'Đo Lường Chuyển Đổi Cơ Bản',
        description: 'Cài đặt Google Tag Manager, GA4 theo dõi chính xác từng lượt bấm gọi và điền form.'
      }
    ],
    deliverables: [
      'Toàn bộ mã nguồn đầy đủ, không mã hóa bí mật',
      'Tài khoản quản trị tên miền chính chủ (đăng ký CCCD/Email của bạn)',
      'Video 2 phút hướng dẫn tự sửa giá và bài viết dễ dàng',
      'Hiệu năng Google PageSpeed 90+ trên điện thoại'
    ],
    startingPrice: 'Từ 490.000đ',
    slaTime: 'Bàn giao trong 24 – 48 giờ',
    ownershipCommitment: '100% tài khoản chính chủ đứng tên khách hàng',
    color: {
      primary: '#0d7647',
      bgSoft: '#f0fdf4',
      border: '#bbf7d0',
      badgeBg: '#dcfce7',
      badgeText: '#166534'
    },
    iconName: 'Globe'
  },
  {
    id: 'pillar-presence-discovery',
    slug: 'duoc-tim-thay',
    fullPath: '/giai-phap/duoc-tim-thay',
    pillarNumber: '02',
    title: 'Được Khách Hàng Tìm Thấy',
    englishTitle: 'Presence & Discovery',
    badge: 'Google Maps & AI Search',
    tagline: 'Chiếm lĩnh Top Google Maps, Local SEO & Đề xuất AI (ChatGPT, Gemini)',
    question: 'Có website rồi nhưng không ai tìm ra; người ta tìm dịch vụ ở gần mà toàn ra đối thủ.',
    brandPromise: 'Đưa thông tin cơ sở kinh doanh xuất hiện chuẩn xác và nổi bật tại nơi khách hàng đang tìm kiếm: từ Google Tìm kiếm, Google Maps bản đồ đến các công cụ AI thế hệ mới (ChatGPT, Gemini, Perplexity).',
    capabilities: [
      {
        title: 'Định Vị Tọa Độ Google Maps Chuẩn GPS',
        description: 'Xác minh hồ sơ Google Business Profile, tối ưu danh mục chính/phụ, đồng bộ thông tin NAP.'
      },
      {
        title: 'SEO Từ Khóa Nhu Cầu Địa Phương',
        description: 'Tối ưu từ khóa ngách có nhu cầu mua cao trong bán kính 3–10km quanh cơ sở.'
      },
      {
        title: 'Cấu Trúc Dữ Liệu Schema LocalBusiness',
        description: 'Nhúng mã dữ liệu có cấu trúc giúp Google và AI Bot hiểu rõ vị trí, giờ mở cửa và dịch vụ.'
      },
      {
        title: 'Tối Ưu Đề Xuất AI Search (GEO & AEO)',
        description: 'Cung cấp tệp llms.txt, bộ FAQ ngữ nghĩa chuẩn để trợ lý AI ưu tiên gợi ý tiệm của bạn.'
      }
    ],
    deliverables: [
      'Toàn quyền sở hữu tài khoản Google Maps chính chủ',
      'Mã QR in để bàn nhận đánh giá 5 sao thật từ khách',
      'Bộ Schema JSON-LD hợp lệ 100% trên Google Rich Results Test',
      'Báo cáo số lượt gọi điện và bấm chỉ đường trên Maps'
    ],
    startingPrice: 'Từ 299.000đ',
    slaTime: 'Hoàn tất trong 24 – 48 giờ',
    ownershipCommitment: 'Email quản trị Maps chuyển giao vào Gmail của bạn',
    color: {
      primary: '#0284c7',
      bgSoft: '#f0f9ff',
      border: '#bae6fd',
      badgeBg: '#e0f2fe',
      badgeText: '#0369a1'
    },
    iconName: 'MapPin'
  },
  {
    id: 'pillar-customer-acquisition',
    slug: 'thu-hut-khach-hang',
    fullPath: '/giai-phap/thu-hut-khach-hang',
    pillarNumber: '03',
    title: 'Thu Hút Khách Hàng & Chuyển Đổi',
    englishTitle: 'Customer Acquisition',
    badge: 'Quảng Cáo Đúng Nhu Cầu',
    tagline: 'Quảng cáo tìm kiếm Google & Meta Ads, 0% kê giá, đo lường từng cuộc gọi',
    question: 'Tôi cần có thêm khách gọi, đặt lịch hoặc nhắn tin ngay trong tuần này nhưng sợ tốn tiền vô ích.',
    brandPromise: 'Thiết lập và quản lý chiến dịch quảng cáo đúng trọng tâm khách hàng có nhu cầu bức thiết tại địa phương. Minh bạch 100% chi phí: tiền chạy trừ thẳng thẻ ngân hàng của bạn, Localmate chỉ thu phí công tối ưu.',
    capabilities: [
      {
        title: 'Quảng Cáo Google Search Địa Phương',
        description: 'Nhắm trúng từ khóa khẩn cấp, lọc sạch click tặc và từ khóa bấm nhầm gây tốn ngân sách.'
      },
      {
        title: 'Quảng Cáo Meta Ads Bán Kính 3–7km',
        description: 'Tiếp cận cư dân xung quanh cơ sở, thúc đẩy nhắn tin Zalo hoặc bấm gọi hotline tức thì.'
      },
      {
        title: 'Tối Ưu Tỷ Lệ Chuyển Đổi (CRO)',
        description: 'Bố cục nút gọi floating action thuận tiện cho ngón tay cái, tối giản form đăng ký.'
      },
      {
        title: 'Xử Lý Chính Sách Kháng Lỗi Ads Chuyên Sâu',
        description: 'Có kinh nghiệm xử lý tài khoản cho ngành sửa thiết bị tại nhà, cơ điện lạnh và dịch vụ gấp.'
      }
    ],
    deliverables: [
      'Tài khoản quảng cáo chính chủ của bạn (0% kê giá)',
      'Bộ từ khóa phủ định đã tinh lọc loại bỏ click rác',
      'Đo lường chính xác số cuộc gọi và tin nhắn phát sinh',
      'Báo cáo ngân sách thực chi xuất trực tiếp từ Google/Meta'
    ],
    startingPrice: 'Từ 390.000đ',
    slaTime: 'Lên chiến dịch trong 24 giờ',
    ownershipCommitment: 'Bạn tự quản lý thẻ thanh toán và ngân sách quảng cáo',
    color: {
      primary: '#d97706',
      bgSoft: '#fffbeb',
      border: '#fde68a',
      badgeBg: '#fef3c7',
      badgeText: '#b45309'
    },
    iconName: 'TrendingUp'
  },
  {
    id: 'pillar-operations-automation',
    slug: 'van-hanh-tu-dong-hoa',
    fullPath: '/giai-phap/van-hanh-tu-dong-hoa',
    pillarNumber: '04',
    title: 'Vận Hành Tự Động Hóa',
    englishTitle: 'Operations & Automation',
    badge: 'Tiết Kiệm Công Sức',
    tagline: 'Báo đơn tức thì về Zalo/Telegram, đồng bộ Sheets CRM, không sót khách',
    question: 'Có khách đăng ký hoặc gọi điện nhưng ghi chép tay lộn xộn, quên chăm sóc, hay sót khách.',
    brandPromise: 'Thay thế các thao tác chép sổ tay, copy paste thủ công bằng quy trình thông báo tức thì về điện thoại qua Zalo hoặc Telegram chỉ sau 3 giây. Tận dụng công cụ sẵn có, chi phí duy trì phần mềm 0 đồng.',
    capabilities: [
      {
        title: 'Thông Báo Khách Mới Tức Thì Qua Zalo / Telegram',
        description: 'Khách điền form trên web lập tức bắn tin nhắn báo về điện thoại của chủ tiệm chỉ sau 3 giây.'
      },
      {
        title: 'Đồng Bộ Tự Động Vào Google Sheets CRM',
        description: 'Tự động lưu trữ thông tin khách, ngày giờ, nguồn liên hệ vào bảng tính tập trung.'
      },
      {
        title: 'Hệ Thống Đặt Lịch Hẹn Trực Tuyến Tinh Gọn',
        description: 'Khách hàng tự chọn khung giờ rảnh, tự động kiểm tra lịch trống và nhắc hẹn tự động.'
      },
      {
        title: 'Kết Nối Dữ Liệu n8n / Make Không Phí Bản Quyền',
        description: 'Tích hợp các luồng dữ liệu mượt mà, không bắt khách hàng mua phần mềm CRM đắt tiền.'
      }
    ],
    deliverables: [
      'Luồng webhook kết nối tự động (Web → Telegram / Zalo / Sheets)',
      'Bảng quản lý dữ liệu khách hàng tinh gọn',
      'Video ngắn hướng dẫn thao tác quản lý đơn giản',
      'Không phát sinh chi phí phần mềm hàng tháng'
    ],
    startingPrice: 'Từ 990.000đ',
    slaTime: 'Thiết lập hoàn tất trong 24 – 48 giờ',
    ownershipCommitment: 'Toàn bộ dữ liệu nằm trên Google Drive / Sheets chính chủ của bạn',
    color: {
      primary: '#7c3aed',
      bgSoft: '#f5f3ff',
      border: '#ddd6fe',
      badgeBg: '#ede9fe',
      badgeText: '#6d28d9'
    },
    iconName: 'Cpu'
  },
  {
    id: 'pillar-care-partnership',
    slug: 'dong-hanh-duy-tri',
    fullPath: '/giai-phap/dong-hanh-duy-tri',
    pillarNumber: '05',
    title: 'Chăm Sóc & Đồng Hành Kỹ Thuật',
    englishTitle: 'Care & Digital Partnership',
    badge: 'Đội Ngũ Kỹ Thuật Riêng',
    tagline: 'Phòng kỹ thuật số ngoài túc trực: Hỗ trợ 1-1 qua Zalo, bảo hành đồng hành 5 năm',
    question: 'Làm xong rồi ai sửa nếu web lỗi? Bận bán hàng không có thời gian viết bài hay chăm sóc.',
    brandPromise: 'Đóng vai trò như một phòng kỹ thuật số ngoài uy tín: có mặt xử lý khi cần, túc trực hỗ trợ 1-1 qua Zalo trong vòng 15 phút, sao lưu định kỳ và cập nhật nội dung đều đặn để bạn yên tâm làm nghề.',
    capabilities: [
      {
        title: 'Gói Chăm Sóc Bài Viết Fanpage & Web Định Kỳ',
        description: 'Soạn bài viết và hình ảnh thiết kế chỉn chu mỗi tuần, giữ trang luôn tươi mới đón khách.'
      },
      {
        title: 'Hỗ Trợ Kỹ Thuật 1-1 Trực Tiếp Qua Zalo',
        description: 'Có kỹ thuật viên trực tiếp nghe máy và hỗ trợ, không qua chatbot hay chờ đợi ticket.'
      },
      {
        title: 'Bảo Mật SSL, Chống Mã Độc & Sao Lưu Định Kỳ',
        description: 'Kiểm tra uptime 99.9%, tự động sao lưu dữ liệu chống thất lạc tài sản kinh doanh.'
      },
      {
        title: 'Cam Kết Đồng Hành Kỹ Thuật 5 Năm',
        description: 'Hỗ trợ thay đổi số hotline, địa chỉ, thực đơn hoặc cập nhật tính năng mới lâu dài.'
      }
    ],
    deliverables: [
      'Nhóm Zalo hỗ trợ kỹ thuật riêng biệt',
      'Lịch xuất bản bài viết và hình ảnh duyệt trước mỗi tháng',
      'Cam kết xử lý sự cố khẩn cấp trong vòng 2 giờ',
      'Báo cáo tình trạng vận hành và lượt liên hệ hàng tháng'
    ],
    startingPrice: 'Từ 990.000đ/tháng',
    slaTime: 'Phản hồi trong 15 phút qua Zalo',
    ownershipCommitment: 'Cam kết đồng hành kỹ thuật 5 năm không thu phụ phí vô lý',
    color: {
      primary: '#0f766e',
      bgSoft: '#f0fdfa',
      border: '#99f6e4',
      badgeBg: '#ccfbf1',
      badgeText: '#115e59'
    },
    iconName: 'ShieldCheck'
  }
];

const NEED_LABELS: Record<string, string> = {
  'pillar-digital-foundations': 'Chưa có web / Cần web chuẩn di động',
  'pillar-presence-discovery': 'Chưa có trên Google Maps / AI Search',
  'pillar-customer-acquisition': 'Cần thêm cuộc gọi & khách hỏi giá',
  'pillar-operations-automation': 'Báo đơn Zalo / Quản lý khách tự động',
  'pillar-care-partnership': 'Cần kỹ thuật viên đồng hành lâu dài'
};

export const SOLUTION_PILLARS_DATA: SolutionPillarItem[] = SOLUTION_PILLARS.map((p) => ({
  id: p.id,
  number: p.pillarNumber,
  pillarNumber: p.pillarNumber,
  needLabel: NEED_LABELS[p.id] || p.badge,
  title: p.title,
  subtitle: p.tagline,
  englishTitle: p.englishTitle,
  slug: p.slug,
  deepDiveUrl: p.fullPath,
  badge: p.badge,
  badgeBg: p.color.badgeBg,
  badgeColor: p.color.badgeText,
  borderColor: p.color.border,
  iconName: p.iconName,
  customerQuestion: p.question,
  painPoint: p.question,
  outcome: p.brandPromise,
  brandPromise: p.brandPromise,
  startingPrice: p.startingPrice,
  slaTime: p.slaTime,
  keyDeliverables: p.capabilities.map((c) => `${c.title}: ${c.description}`),
  techModules: p.capabilities.map((c) => c.title),
  ownershipCommitment: p.ownershipCommitment
}));

export const COMPARISON_TABLE_DATA = [
  {
    criterion: 'Quyền sở hữu tài khoản & mã nguồn',
    highlight: 'Sở hữu 100%',
    localmateAdvantage: 'Bàn giao 100% tài khoản chính chủ (tên miền, hosting, Maps) đứng tên email của bạn. Không giữ chìa khóa, không khóa mã nguồn.',
    traditionalWay: 'Nhiều agency giữ quyền sở hữu tên miền, tài khoản quảng cáo hoặc bắt dùng mã nguồn đóng để ép trả phí hàng năm.'
  },
  {
    criterion: 'Minh bạch chi phí & báo giá',
    highlight: 'Cố định trước khi làm',
    localmateAdvantage: 'Báo giá trọn gói bằng văn bản rõ ràng trước khi thực hiện. Cam kết tuyệt đối 0đ chi phí ẩn, không vẽ thêm việc.',
    traditionalWay: 'Báo giá ban đầu rất thấp để chốt hợp đồng, sau đó liên tục phát sinh chi phí bảo trì, hosting, chỉnh sửa.',
    traditionalAgency: 'Báo giá rẻ ban đầu, sau đó phát sinh chi phí duy trì, phí đổi nội dung, phí bảo trì hàng tháng đắt đỏ.'
  },
  {
    criterion: 'Quy trình nghiệm thu & thanh toán',
    highlight: 'Nghiệm thu mới thanh toán',
    localmateAdvantage: 'Dựng bản web demo chạy thật trên điện thoại để bạn xem trước 0đ. Nghiệm thu hài lòng tốc độ và tính năng mới thanh toán.',
    traditionalWay: 'Bắt đặt cọc 50-100% từ đầu nhưng bàn giao chậm trễ, giao diện không như kỳ vọng và khó đòi lại tiền.',
    traditionalAgency: 'Bắt đặt cọc lớn từ đầu nhưng bàn giao chậm trễ, phát sinh nhiều lỗi.'
  },
  {
    criterion: 'Hỗ trợ kỹ thuật sau bàn giao',
    highlight: 'Đồng hành 5 năm',
    localmateAdvantage: 'Kỹ thuật viên túc trực hỗ trợ 1-1 qua nhóm Zalo, phản hồi trong 15 phút, xử lý sự cố trong 2 giờ. Cam kết đồng hành 5 năm.',
    traditionalWay: 'Bàn giao xong là phủi trách nhiệm; khi web lỗi bắt gửi ticket chờ đợi nhiều ngày hoặc đòi thu thêm phí sửa.',
    traditionalAgency: 'Hết hợp đồng 6-12 tháng là cắt đứt hỗ trợ, phát sinh lỗi phải ký hợp đồng mới tốn kém.'
  }
];

export interface IndustryScenarioItem {
  id: string;
  badge: string;
  iconType: string;
  name: string;
  title: string;
  problem: string;
  description: string;
  recommendedPillars: { pillarNumber: string; name: string }[];
  expectedOutcome: string;
  recommendedBudget: string;
  keyDeliverables?: string[];
  recommendedPackage?: string;
}

export const INDUSTRY_SCENARIOS_DATA: IndustryScenarioItem[] = [
  {
    id: 'scenario-fnb',
    badge: 'Ẩm thực & Nhà hàng',
    iconType: 'Store',
    name: 'Quán Ăn, Nhà Hàng & Cafe Địa Phương',
    title: 'Nhà Hàng, Quán Ăn & Cafe Địa Phương',
    problem: 'Khách hàng quanh bán kính 2-5km mở Google Maps không thấy quán hoặc menu mờ nhạt, phụ thuộc chiết khấu cao của ứng dụng giao hàng.',
    description: 'Khách hàng quanh bán kính 2-5km mở Google Maps là thấy thực đơn đẹp mắt, hình ảnh món ăn rõ nét và bấm gọi đặt bàn chỉ với 1 chạm.',
    recommendedPillars: [
      { pillarNumber: '02', name: 'Được Khách Hàng Tìm Thấy (Google Maps)' },
      { pillarNumber: '01', name: 'Xây Dựng Nền Tảng Số (Menu Điện Tử)' }
    ],
    expectedOutcome: 'Tăng 150-250% lượt khách tìm đường ghé quán và gọi đặt bàn trực tiếp không mất phí hoa hồng trung gian.',
    recommendedBudget: '1.490.000đ - 2.990.000đ',
    keyDeliverables: ['Định vị Google Maps GPS chuẩn xác', 'Menu điện tử mở nhanh < 1s', 'Mã QR xin đánh giá 5 sao tại bàn'],
    recommendedPackage: 'Website quán ăn 1.990k + Google Maps 299k'
  },
  {
    id: 'scenario-clinic',
    badge: 'Y tế & Phòng khám',
    iconType: 'Stethoscope',
    name: 'Phòng Khám, Nha Khoa & Spa Thẩm Mỹ',
    title: 'Phòng Khám, Nha Khoa & Spa Thẩm Mỹ',
    problem: 'Bệnh nhân e ngại bảng giá mập mờ, thiếu uy tín chuyên môn trên mạng, phòng khám lúc vắng lúc quá tải vì khách không hẹn trước.',
    description: 'Tạo dựng uy tín chuyên môn y tế, công khai bảng giá minh bạch và tích hợp nút đặt lịch hẹn chọn giờ trực tuyến tránh chờ đợi.',
    recommendedPillars: [
      { pillarNumber: '01', name: 'Xây Dựng Nền Tảng Số (Hồ Sơ Bác Sĩ & Bảng Giá)' },
      { pillarNumber: '03', name: 'Thu Hút Khách Hàng (Đặt Lịch 1 Chạm)' }
    ],
    expectedOutcome: 'Tăng 180% lượt đặt lịch khám trước qua Zalo, giảm 50% áp lực điều phối phòng chờ.',
    recommendedBudget: '2.490.000đ - 3.990.000đ',
    keyDeliverables: ['Hồ sơ chuyên môn bác sĩ/kỹ thuật viên', 'Đặt lịch hẹn tự động nhắc qua tin nhắn', 'Tối ưu đề xuất AI Search Local'],
    recommendedPackage: 'Website phòng khám 2.490k + Tối ưu GEO AI 2.9tr/th'
  },
  {
    id: 'scenario-construction',
    badge: 'Xây dựng & Thợ cơ khí',
    iconType: 'Wrench',
    name: 'Nhà Thầu Xây Dựng, Cơ Điện & Thợ Sửa Chữa',
    title: 'Nhà Thầu Xây Dựng, Cơ Điện & Thợ Sửa Chữa',
    problem: 'Gửi ảnh công trình qua Zalo bị trôi, khách hàng hoài nghi năng lực; tài khoản quảng cáo sửa thiết bị thường xuyên bị khóa oan.',
    description: 'Trưng bày bộ ảnh công trình thực tế đã thi công, bảng giá dự toán và giải pháp kháng lỗi chính sách quảng cáo sửa thiết bị tại nhà.',
    recommendedPillars: [
      { pillarNumber: '01', name: 'Xây Dựng Nền Tảng Số (Sales Hub Hồ Sơ Năng Lực)' },
      { pillarNumber: '03', name: 'Thu Hút Khách Hàng (Quảng Cáo Đúng Bán Kính)' }
    ],
    expectedOutcome: 'Tăng 3-5x tỷ lệ chốt đơn báo giá công trình nhờ hồ sơ hình ảnh và quy trình minh bạch.',
    recommendedBudget: '1.990.000đ - 3.490.000đ',
    keyDeliverables: ['Hồ sơ năng lực công trình trực quan', 'Form nhận báo giá dự toán nhanh', 'Kháng lỗi chính sách Google Ads'],
    recommendedPackage: 'Website nhà thầu 1.990k + Quảng cáo Google Ads'
  },
  {
    id: 'scenario-realestate',
    badge: 'Dịch vụ lưu trú & Bán lẻ',
    iconType: 'Home',
    name: 'Homestay, Khách Sạn & Cửa Hàng Bán Lẻ',
    title: 'Homestay, Khách Sạn & Cửa Hàng Bán Lẻ',
    problem: 'Khó tiếp cận khách du lịch và cư dân địa phương mới dọn tới; chưa có chuông báo đơn tự động nên hay phản hồi chậm trễ.',
    description: 'Tiếp cận khách du lịch và cư dân địa phương, hiển thị phòng trống, hỗ trợ chỉ đường Maps chính xác và gom lead về Zalo tức thì.',
    recommendedPillars: [
      { pillarNumber: '01', name: 'Xây Dựng Nền Tảng Số (Website Chuẩn Di Động)' },
      { pillarNumber: '04', name: 'Vận Hành Tự Động Hóa (Báo Đơn Telegram 3s)' }
    ],
    expectedOutcome: 'Không sót khách, chuông điện thoại reo tức thì khi có người cần đặt phòng hoặc hỏi mua hàng.',
    recommendedBudget: '1.290.000đ - 2.280.000đ',
    keyDeliverables: ['Hình ảnh không gian phòng 360 độ', 'Nút gọi Hotline & chat Zalo nổi bật', 'Đồng bộ Google Sheets CRM tự động'],
  }
];
