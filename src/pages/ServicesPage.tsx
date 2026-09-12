import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { useRouter } from '../components/layout/Router';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Search,
  Zap,
  Globe,
  TrendingUp,
  Clock,
  PhoneCall,
  MessageSquare,
  Store,
  Stethoscope,
  Wrench,
  Home,
  X,
  Layers
} from 'lucide-react';

export interface SolutionPillarHubItem {
  id: string; // 'pillar-01' to 'pillar-05'
  number: string; // '01' - '05'
  title: string;
  subtitle: string;
  needLabel: string;
  slug: string;
  deepDiveUrl: string;
  painPoint: string;
  outcome: string;
  keyDeliverables: string[];
  techModules: string[];
  startingPrice: string;
  slaTime: string;
  badge: string;
  iconName: 'Globe' | 'Search' | 'TrendingUp' | 'Zap' | 'ShieldCheck';
}

const SOLUTION_PILLARS_HUB: SolutionPillarHubItem[] = [
  {
    id: 'pillar-01',
    number: '01',
    title: 'Thiết Lập Hiện Diện Số Chuẩn Xác',
    subtitle: 'Xây dựng mặt tiền kinh doanh uy tín trên Internet & Di động — Đầy đủ bảng giá và nút liên hệ nhanh',
    needLabel: 'Có mặt trên môi trường số',
    slug: 'nen-tang-so',
    deepDiveUrl: '/giai-phap/nen-tang-so',
    painPoint: 'Chưa có website hoặc website cũ vỡ nát trên điện thoại; bảng giá gửi qua tin nhắn Zalo lộn xộn; cơ sở chưa có trên Google Maps khiến khách nghi ngờ độ uy tín.',
    outcome: 'Sở hữu website chuẩn di động tải nhanh < 1.2s, hiển thị rõ ràng bảng giá & dịch vụ, tích hợp nút gọi/Zalo 1-chạm, định vị Google Maps chuẩn xác giúp khách tin tưởng liên hệ ngay.',
    keyDeliverables: [
      'Thiết kế Website / Trang giới thiệu dịch vụ chuẩn di động, tối ưu trải nghiệm xem bảng giá rõ ràng',
      'Khởi tạo & chuẩn hóa địa chỉ cơ sở trên Google Maps (đầy đủ ảnh mặt tiền, giờ mở cửa, số hotline)',
      'Tích hợp cụm nút liên hệ nhanh (Gọi Hotline, Nhắn Zalo, Chỉ đường Maps) cố định thông minh',
      'Bàn giao 100% mã nguồn sạch, tên miền chính chủ & tài khoản quản trị trực quan, dễ dàng tự cập nhật'
    ],
    techModules: [
      'Landing Page',
      'Website Mobile-First',
      'Google Maps Setup',
      'Schema LocalBusiness',
      'Nút gọi Hotline & Zalo',
      'Tốc độ tải < 1.5s',
      'Bảo mật SSL Cloudflare'
    ],
    startingPrice: 'Từ 490.000đ',
    slaTime: 'Bàn giao trong 24 – 48 giờ',
    badge: 'Nền tảng khởi đầu bắt buộc',
    iconName: 'Globe'
  },
  {
    id: 'pillar-02',
    number: '02',
    title: 'Tối Ưu Tìm Kiếm Cục Bộ & Đề Xuất AI',
    subtitle: 'Chiếm lĩnh Top 3 Google Maps & Trở thành lựa chọn ưu tiên trên ChatGPT, Gemini & Perplexity',
    needLabel: 'Được nhiều khách tìm thấy hơn',
    slug: 'duoc-tim-thay',
    deepDiveUrl: '/giai-phap/duoc-tim-thay',
    painPoint: 'Khách xung quanh mở Google Maps hoặc hỏi trợ lý AI không thấy tiệm đâu; đối thủ cùng khu vực đứng top đầu cướp hết khách quen lẫn khách mới ghé qua.',
    outcome: 'Xuất hiện vững chắc trong Top 3 Google Maps khi khách tìm kiếm trong bán kính 3-10km; được AI Overviews, ChatGPT & Gemini chủ động trích dẫn và gợi ý thương hiệu đầu tiên.',
    keyDeliverables: [
      'Tối ưu toàn diện hồ sơ Google Business Profile (đồng nhất tên, địa chỉ, số điện thoại NAP, định vị GPS chuẩn)',
      'Cấu hình Schema.org JSON-LD chuyên sâu (LocalBusiness, GeoCoordinates) giúp AI đọc hiểu dịch vụ',
      'Triển khai kỹ thuật GEO / AEO giúp thương hiệu được AI Overviews & ChatGPT trích dẫn làm nguồn uy tín',
      'Thiết lập mã QR và quy trình tự động thu thập đánh giá 5 sao thực tế từ khách quen tại quầy'
    ],
    techModules: [
      'Google Maps Top 3',
      'GEO (Generative Engine)',
      'AEO (Answer Engine)',
      'Schema.org JSON-LD',
      'AI Overviews',
      'Local Citations',
      'Mã QR Đánh Giá 5 Sao'
    ],
    startingPrice: 'Từ 299.000đ',
    slaTime: 'Hoàn tất trong 24 – 48 giờ',
    badge: 'Tăng trưởng khách tự nhiên',
    iconName: 'Search'
  },
  {
    id: 'pillar-03',
    number: '03',
    title: 'Thu Hút Khách Hàng & Chuyển Đổi Thực',
    subtitle: 'Chiến dịch Google Ads tìm kiếm nhắm đúng khách đang có nhu cầu gấp — 0% kê giá, đo lường từng cuộc gọi',
    needLabel: 'Có thêm khách hàng & liên hệ',
    slug: 'thu-hut-khach-hang',
    deepDiveUrl: '/giai-phap/thu-hut-khach-hang',
    painPoint: 'Tự chạy quảng cáo bị cắn tiền đắt đỏ, click tặc phá hoại; khách vào xem trang rồi thoát ra không để lại liên hệ; chi phí mỗi khách quá cao.',
    outcome: 'Dòng khách hàng tiềm năng liên tục gọi điện và nhắn Zalo mỗi ngày; tối ưu từng đồng ngân sách chi trả trực tiếp cho Google với tỷ lệ chuyển đổi cao.',
    keyDeliverables: [
      'Cài đặt chiến dịch Google Ads tìm kiếm nhắm chuẩn xác từ khóa có ý định mua cao nhất tại địa phương',
      'Lọc sạch 100% từ khóa rác & phủ định click tặc, quản lý tài khoản trực tiếp 0% kê giá',
      'Tối ưu trang đích chuyển đổi cao (CTA gọi nổi bật, form tư vấn 2 bước tinh gọn, chính sách cam kết minh bạch)',
      'Cài đặt hệ thống đo lường chuyển đổi chính xác (đo từng lượt click gọi, lượt mở chat Zalo, gửi thông tin)'
    ],
    techModules: [
      'Google Search Ads',
      'Lọc Chống Click Tặc',
      'Tối Ưu Chuyển Đổi (CRO)',
      'Call Tracking',
      'Zalo Conversion',
      'Tài Khoản Khách Làm Chủ 100%'
    ],
    startingPrice: 'Từ 390.000đ',
    slaTime: 'Lên chiến dịch trong 24 giờ',
    badge: 'Tạo dòng khách ngay lập tức',
    iconName: 'TrendingUp'
  },
  {
    id: 'pillar-04',
    number: '04',
    title: 'Tự Động Hóa Vận Hành & Tiếp Nhận Khách',
    subtitle: 'Đồng bộ dữ liệu khách hàng 24/7 về Google Sheets & Telegram — Không sót liên hệ, giảm 80% việc làm tay',
    needLabel: 'Giảm việc làm thủ công',
    slug: 'van-hanh-tu-dong-hoa',
    deepDiveUrl: '/giai-phap/van-hanh-tu-dong-hoa',
    painPoint: 'Đang bận làm nghề không kịp nghe máy/trả lời tin nhắn làm mất khách; ghi chép sổ sách thủ công dễ thất lạc số khách; khách quên lịch hẹn đã đặt.',
    outcome: '100% số điện thoại & tin nhắn tự động đổ về Google Sheets/CRM và bắn thông báo ngay về Telegram/Zalo; trợ lý ảo phản hồi bảng giá và đặt lịch 24/7.',
    keyDeliverables: [
      'Tự động đồng bộ toàn bộ liên hệ và số điện thoại từ website về Google Sheets / CRM tập trung',
      'Cài đặt bot thông báo tức thì qua Telegram hoặc Zalo của chủ tiệm ngay khi có khách mới đăng ký',
      'Thiết lập kịch bản tự động phản hồi tin nhắn 24/7, gửi bảng giá và giải đáp câu hỏi thường gặp',
      'Tự động gửi tin nhắn xác nhận và nhắc lịch hẹn cho khách trước giờ đến, giảm 80% tỷ lệ hủy hẹn'
    ],
    techModules: [
      'Google Sheets CRM',
      'Telegram Instant Alert',
      'Tự Động Trả Lời 24/7',
      'Webhook Đồng Bộ Dữ Liệu',
      'Nhắc Lịch Hẹn Tự Động',
      'Form Đăng Ký 2 Bước'
    ],
    startingPrice: 'Từ 990.000đ',
    slaTime: 'Thiết lập hoàn tất trong 24 – 48 giờ',
    badge: 'Tiết kiệm thời gian & công sức',
    iconName: 'Zap'
  },
  {
    id: 'pillar-05',
    number: '05',
    title: 'Đồng Hành Kỹ Thuật & Bảo Trì Hệ Thống Dài Lâu',
    subtitle: 'Kỹ thuật viên phụ trách riêng trực Zalo & Cam kết bảo hành hạ tầng 5 năm — An tâm tuyệt đối',
    needLabel: 'Có người duy trì hệ thống',
    slug: 'dong-hanh-duy-tri',
    deepDiveUrl: '/giai-phap/dong-hanh-duy-tri',
    painPoint: 'Đơn vị làm web xong phủi tay; khi web lỗi, muốn đổi số hotline hay thay đổi bảng giá không biết nhờ ai; mỗi lần nhờ sửa việc nhỏ lại bị đòi tiền triệu.',
    outcome: 'Có riêng kỹ thuật viên phụ trách túc trực qua Zalo, xử lý mọi thay đổi nội dung từ 15-30 phút; bảo hành hạ tầng 5 năm không lo sập mạng hay phát sinh chi phí vô lý.',
    keyDeliverables: [
      'Giám sát an toàn và sao lưu dữ liệu tự động định kỳ trên hạ tầng đám mây Cloudflare tốc độ cao',
      'Kỹ thuật viên hỗ trợ trực tiếp qua nhóm Zalo 1-1, hỗ trợ đổi bảng giá, thêm ảnh, sửa thông tin nhanh',
      'Cam kết bảo hành hạ tầng kỹ thuật 5 năm, miễn phí xử lý mọi sự cố lỗi phát sinh trong quá trình vận hành',
      'Định kỳ kiểm tra chứng chỉ bảo mật SSL, chỉ số tốc độ trang web và tư vấn cải tiến hiệu năng'
    ],
    techModules: [
      'Bảo Hành Hạ Tầng 5 Năm',
      'Kỹ Thuật Viên Trực Zalo 1-1',
      'Cloudflare CDN Uptime 99.9%',
      'Hỗ Trợ Nhanh 15-30 Phút',
      'Sao Lưu Dữ Liệu Định Kỳ',
      'Không Chi Phí Ẩn'
    ],
    startingPrice: 'Từ 990.000đ/tháng',
    slaTime: 'Phản hồi trong 15 phút qua Zalo',
    badge: 'Đồng hành dài lâu an tâm',
    iconName: 'ShieldCheck'
  }
];

export interface IndustryScenarioHubItem {
  id: string;
  name: string;
  badge: string;
  iconType: 'Store' | 'Stethoscope' | 'Wrench' | 'Home';
  problem: string;
  recommendedPillars: {
    pillarNumber: string;
    name: string;
  }[];
  expectedOutcome: string;
  recommendedBudget: string;
  ctaText: string;
}

const INDUSTRY_SCENARIOS_HUB: IndustryScenarioHubItem[] = [
  {
    id: 'retail-store',
    name: 'Cửa Hàng Bán Lẻ & Thời Trang',
    badge: 'Cửa hàng & Bán lẻ',
    iconType: 'Store',
    problem: 'Khách muốn xem trước mẫu mã và địa chỉ gần nhất để ghé thử trực tiếp; nhắn tin hỏi size/giá qua Facebook hay bị sót tin.',
    recommendedPillars: [
      { pillarNumber: '01', name: 'Hiện diện số: Website danh mục mẫu mã' },
      { pillarNumber: '02', name: 'Top 3 Google Maps chỉ đường ghé tiệm' }
    ],
    expectedOutcome: 'Tăng 40% lượng khách ghé cửa hàng trực tiếp, khách chủ động nhắn Zalo giữ đồ theo mã sản phẩm.',
    recommendedBudget: 'Chỉ từ 1.290.000đ trọn gói',
    ctaText: 'Xem giải pháp cho Cửa hàng'
  },
  {
    id: 'clinic-spa',
    name: 'Phòng Khám Chuyên Khoa, Nha Khoa & Spa',
    badge: 'Y tế & Chăm sóc sắc đẹp',
    iconType: 'Stethoscope',
    problem: 'Khách hàng cần thông tin minh bạch về chứng chỉ bác sĩ, bảng giá điều trị và cần đặt lịch hẹn trước để không phải xếp hàng chờ đợi.',
    recommendedPillars: [
      { pillarNumber: '01', name: 'Website chuyên nghiệp giới thiệu bác sĩ & bảng giá' },
      { pillarNumber: '04', name: 'Form đặt hẹn tự động gửi nhắc lịch qua Zalo' },
      { pillarNumber: '02', name: 'SEO Google Maps khẳng định uy tín địa phương' }
    ],
    expectedOutcome: 'Giảm 85% tình trạng khách đặt lịch rồi bỏ, tỷ lệ khách chuyển đổi thành ca điều trị tăng rõ rệt.',
    recommendedBudget: 'Đầu tư 1 lần, duy trì dòng khách lâu dài',
    ctaText: 'Xem giải pháp cho Phòng khám / Spa'
  },
  {
    id: 'auto-garage',
    name: 'Gara Ô Tô, Xưởng Cơ Khí & Cứu Hộ',
    badge: 'Kỹ thuật ô tô & Cứu hộ',
    iconType: 'Wrench',
    problem: 'Chủ xe gặp sự cố trên đường cần tìm nơi sửa chữa gần nhất ngay lập tức; gọi điện hỏi giá nhưng gara không có bảng giá công khai.',
    recommendedPillars: [
      { pillarNumber: '02', name: 'SEO Google Maps vị trí nổi bật bán kính 5km' },
      { pillarNumber: '03', name: 'Google Ads từ khóa khẩn cấp kèm nút gọi Hotline' }
    ],
    expectedOutcome: 'Tiếp cận ngay khách tài xế đang cần cứu hộ trong vòng 5km, khách bấm gọi thẳng cho thợ chính.',
    recommendedBudget: 'Từ 1.990.000đ đầu tư hiệu quả cao',
    ctaText: 'Xem giải pháp cho Gara / Cứu hộ'
  },
  {
    id: 'local-services',
    name: 'Dịch Vụ Gia Đình & Địa Phương (Điện Lạnh, Sửa Chữa)',
    badge: 'Dịch vụ tại nhà',
    iconType: 'Home',
    problem: 'Khách hàng chỉ tìm kiếm khi máy lạnh hỏng hoặc cần thợ gấp; cạnh tranh gay gắt bởi nhiều thợ vãng lai không rõ danh tính.',
    recommendedPillars: [
      { pillarNumber: '01', name: 'Landing page chuyển đổi kèm hồ sơ thợ & cam kết' },
      { pillarNumber: '03', name: 'Quảng cáo Google từ khóa tìm kiếm khu vực' },
      { pillarNumber: '05', name: 'Bảo hành hạ tầng kỹ thuật dài hạn' }
    ],
    expectedOutcome: 'Nhận cuộc gọi đều đặn mỗi ngày từ khách quanh quận/huyện, tiết kiệm 50% chi phí quảng cáo nhờ lọc sạch từ khóa rác.',
    recommendedBudget: 'Từ 990.000đ khởi tạo nhanh',
    ctaText: 'Xem giải pháp Dịch vụ địa phương'
  }
];

export interface ComparisonRowHubItem {
  criterion: string;
  highlight: string;
  localmateAdvantage: string;
  traditionalWay: string;
}

const COMPARISON_TABLE_HUB: ComparisonRowHubItem[] = [
  {
    criterion: 'Quyền Sở Hữu Tài Khoản & Dữ Liệu',
    highlight: 'Chính chủ 100%',
    localmateAdvantage: 'Khách hàng làm chủ 100% email, tên miền, tài khoản Google Maps và tài khoản quảng cáo. Toàn quyền nắm giữ vĩnh viễn.',
    traditionalWay: 'Đại lý giữ tài khoản quản trị; khi dừng hợp tác khách hàng bị mất tài khoản hoặc phải trả phí chuộc lại.'
  },
  {
    criterion: 'Chi Phí & Tính Minh Bạch',
    highlight: 'Chia nhỏ vừa vặn',
    localmateAdvantage: 'Bóc tách chi phí theo từng việc thực tế (từ vài trăm nghìn). Quảng cáo trả thẳng cho Google 0% kê giá, xem báo cáo minh bạch.',
    traditionalWay: 'Báo giá trọn gói đắt đỏ hàng chục triệu, phí duy trì định kỳ cao, nhiều phụ phí ẩn phát sinh sau bàn giao.'
  },
  {
    criterion: 'Đội Ngũ Kỹ Thuật Viên Hỗ Trợ',
    highlight: 'Hỗ trợ 1-1 trực Zalo',
    localmateAdvantage: 'Có kỹ thuật viên phụ trách trực tiếp qua nhóm Zalo riêng 1-1. Xử lý yêu cầu thay đổi nội dung, bảng giá chỉ từ 15 - 30 phút.',
    traditionalWay: 'Phải gửi ticket rườm rà, chuyển tiếp qua nhiều tầng sales - CSKH - kỹ thuật, chờ đợi nhiều ngày mới được sửa.'
  },
  {
    criterion: 'Cam Kết Bảo Hành Hạ Tầng',
    highlight: 'Bảo hành 5 năm',
    localmateAdvantage: 'Cam kết bảo hành hạ tầng kỹ thuật 5 năm trên nền tảng Cloudflare tốc độ cao. Miễn phí khắc phục sự cố phát sinh.',
    traditionalWay: 'Bàn giao xong từ 6 tháng đến 1 năm là hết trách nhiệm. Website gặp lỗi sập mạng phải tự xoay xở hoặc tốn phí lớn.'
  }
];

interface ServicesPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [highlightedPillar, setHighlightedPillar] = useState<string | null>(null);

  // Cuộn mượt và làm nổi bật thẻ trụ cột khi click vào bộ chọn nhu cầu nhanh
  const handleSelectNeed = (pillarId: string) => {
    setHighlightedPillar(pillarId);
    const element = document.getElementById(pillarId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      setHighlightedPillar(null);
    }, 2800);
  };

  const handleOpenConsult = (serviceTitle?: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(serviceTitle || 'Tư vấn giải pháp Localmate');
    } else {
      navigate('/lien-he');
    }
  };

  const renderIndustryIcon = (iconType: string) => {
    switch (iconType) {
      case 'Store':
        return <Store size={22} color="#0d7647" />;
      case 'Stethoscope':
        return <Stethoscope size={22} color="#0284c7" />;
      case 'Wrench':
        return <Wrench size={22} color="#d97706" />;
      case 'Home':
        return <Home size={22} color="#16a34a" />;
      default:
        return <Store size={22} color="#0d7647" />;
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', scrollbarGutter: 'stable' }}>
      <SEOHead
        title="Bạn Cần Giải Quyết Việc Gì? | 5 Nhóm Giải Pháp Chuyển Đổi Số LocalMate"
        description="Từ website, tìm kiếm khách hàng đến tự động hóa vận hành — Localmate giúp bạn chọn đúng giải pháp và đồng hành triển khai từ đầu đến khi sử dụng được."
        canonicalPath="/dich-vu"
        breadcrumbs={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Giải pháp & Dịch vụ', url: '/dich-vu' }
        ]}
      />

      {/* =========================================================================
          1. HERO SECTION: Trả lời trong 5 giây
          ========================================================================= */}
      <section
        style={{
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          paddingTop: '2.5rem',
          paddingBottom: '3.5rem'
        }}
      >
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Trang chủ', url: '/' },
              { name: 'Giải pháp & Dịch vụ', url: '/dich-vu' }
            ]}
          />

          <div style={{ maxWidth: '860px', margin: '1.5rem auto 0 auto', textAlign: 'center' }}>
            {/* Value Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0d7647',
                backgroundColor: '#ecfdf5',
                border: '1px solid #bbf7d0',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={15} color="#0d7647" />
              <span>HỆ THỐNG GIẢI PHÁP SỐ THỰC CHIẾN CHO CƠ SỞ ĐỊA PHƯƠNG</span>
            </div>

            {/* H1 Headline */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
                textWrap: 'pretty'
              }}
            >
              Bạn cần giải quyết việc gì?
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#334155',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '750px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textWrap: 'pretty'
              }}
            >
              Từ website, tìm khách hàng đến tự động hóa vận hành — Localmate giúp bạn chọn đúng giải pháp
              và triển khai từ đầu đến khi sử dụng được.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem'
              }}
            >
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('solution-pillars');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  backgroundColor: '#0d7647',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Xem 5 nhóm giải pháp</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => handleOpenConsult()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  backgroundColor: '#ffffff',
                  borderRadius: '0.5rem',
                  border: '1px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <MessageSquare size={18} color="#0d7647" />
                <span>Trao đổi việc bạn đang cần</span>
              </button>
            </div>

            {/* 3 Cam kết cốt lõi */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#475569'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#0d7647" />
                <span>Tài khoản chính chủ 100%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#0d7647" />
                <span>Triển khai 3 - 5 ngày dùng được</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#0d7647" />
                <span>Bảo hành hạ tầng 5 năm</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BỘ CHỌN NHU CẦU NHANH ("Tôi đang cần...")
          ========================================================================= */}
      <section
        style={{
          padding: '2.5rem 0',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontSize: '0.925rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#64748b',
                marginBottom: '1rem'
              }}
            >
              Hoặc chọn nhanh theo nhu cầu cấp thiết nhất của bạn:
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center'
              }}
            >
              {SOLUTION_PILLARS_HUB.map((pillar: SolutionPillarHubItem) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => handleSelectNeed(pillar.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    fontSize: '0.925rem',
                    fontWeight: 700,
                    color: highlightedPillar === pillar.id ? '#ffffff' : '#1e293b',
                    backgroundColor: highlightedPillar === pillar.id ? '#0d7647' : '#f8fafc',
                    border:
                      highlightedPillar === pillar.id
                        ? '1px solid #0d7647'
                        : '1px solid #e2e8f0',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow:
                      highlightedPillar === pillar.id
                        ? '0 4px 12px rgba(13, 118, 71, 0.2)'
                        : 'none'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor:
                        highlightedPillar === pillar.id ? '#ffffff' : '#e2e8f0',
                      color: highlightedPillar === pillar.id ? '#0d7647' : '#475569',
                      fontSize: '0.72rem',
                      fontWeight: 800
                    }}
                  >
                    {pillar.number}
                  </span>
                  <span>[ {pillar.needLabel} ]</span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. 5 THẺ GIẢI PHÁP TRỤ CỘT (SOLUTION PILLARS)
          ========================================================================= */}
      <section
        id="solution-pillars"
        style={{
          padding: '4rem 0 5rem 0',
          backgroundColor: '#fbfcfb'
        }}
      >
        <Container size="lg">
          {/* Section Heading */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#0d7647',
                backgroundColor: '#ecfdf5',
                border: '1px solid #bbf7d0',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                display: 'inline-block',
                marginBottom: '0.85rem'
              }}
            >
              KIẾN TRÚC 5 TRỤ CỘT SỐ HOÁ
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              5 Nhóm Giải Pháp Trọng Tâm Cho Doanh Nghiệp Địa Phương
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                textWrap: 'pretty'
              }}
            >
              Không chia nhỏ thành hàng chục dịch vụ rời rạc gây bối rối. Mỗi trụ cột giải quyết dứt điểm
              một bài toán thực tế và mang lại kết quả kinh doanh rõ ràng.
            </p>
          </div>

          {/* Pillars List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {SOLUTION_PILLARS_HUB.map((pillar: SolutionPillarHubItem) => {
              const isSelected = highlightedPillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: isSelected ? '2px solid #0d7647' : '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    boxShadow: isSelected
                      ? '0 12px 32px rgba(13, 118, 71, 0.15)'
                      : '0 2px 10px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {/* Header Row: Pillar Number, Need Badge, Icon, and Titles */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '1.25rem',
                      borderBottom: '1px solid #f1f5f9',
                      paddingBottom: '1.5rem',
                      marginBottom: '1.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                      {/* Number Badge */}
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '0.75rem',
                          backgroundColor: '#ecfdf5',
                          border: '1px solid #a7f3d0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <span
                          style={{
                            fontSize: '1.4rem',
                            fontWeight: 900,
                            color: '#0d7647',
                            lineHeight: 1
                          }}
                        >
                          {pillar.number}
                        </span>
                      </div>

                      <div>
                        {/* Need Tag */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: '#0d7647',
                            backgroundColor: '#f0fdf4',
                            border: '1px solid #dcfce7',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '9999px',
                            marginBottom: '0.5rem'
                          }}
                        >
                          <span>Tôi đang cần:</span>
                          <strong>[ {pillar.needLabel} ]</strong>
                        </div>

                        <h3
                          style={{
                            fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                            fontWeight: 800,
                            color: '#0f172a',
                            lineHeight: 1.3,
                            marginBottom: '0.35rem',
                            textWrap: 'pretty'
                          }}
                        >
                          {pillar.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.95rem',
                            color: '#64748b',
                            lineHeight: 1.5,
                            margin: 0
                          }}
                        >
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Badge right */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#475569',
                          backgroundColor: '#f1f5f9',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '0.375rem'
                        }}
                      >
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* 2 Comparison Boxes: Pain Point vs Desired Outcome */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '1.25rem',
                      marginBottom: '1.75rem'
                    }}
                  >
                    {/* Pain Point Box */}
                    <div
                      style={{
                        backgroundColor: '#fff7ed',
                        border: '1px solid #ffedd5',
                        borderRadius: '0.75rem',
                        padding: '1.25rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: '#c2410c',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <AlertCircle size={17} color="#ea580c" />
                        <span>Vấn đề khách hàng thường gặp (Pain Point)</span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.925rem',
                          color: '#7c2d12',
                          lineHeight: 1.6,
                          margin: 0,
                          textWrap: 'pretty'
                        }}
                      >
                        {pillar.painPoint}
                      </p>
                    </div>

                    {/* Outcome Box */}
                    <div
                      style={{
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #dcfce7',
                        borderRadius: '0.75rem',
                        padding: '1.25rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: '#15803d',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <CheckCircle2 size={17} color="#16a34a" />
                        <span>Kết quả hướng tới (Outcome)</span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.925rem',
                          color: '#14532d',
                          lineHeight: 1.6,
                          margin: 0,
                          textWrap: 'pretty'
                        }}
                      >
                        {pillar.outcome}
                      </p>
                    </div>
                  </div>

                  {/* 3-4 Key Deliverables Localmate does */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <Layers size={18} color="#0d7647" />
                      <span>Công việc chính Localmate triển khai thực tế:</span>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '0.85rem'
                      }}
                    >
                      {pillar.keyDeliverables.map((task: string, idx: number) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #f1f5f9',
                            borderRadius: '0.5rem',
                            padding: '0.85rem 1rem',
                            fontSize: '0.9rem',
                            color: '#334155',
                            lineHeight: 1.5
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            color="#0d7647"
                            style={{ flexShrink: 0, marginTop: '0.15rem' }}
                          />
                          <span style={{ textWrap: 'pretty' }}>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech / Module Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1.75rem',
                      paddingTop: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#64748b',
                        marginRight: '0.25rem'
                      }}
                    >
                      Kỹ thuật &amp; Module bên trong:
                    </span>
                    {pillar.techModules.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: '#334155',
                          backgroundColor: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '0.25rem'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Footer */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>
                          Mức đầu tư tham khảo:
                        </span>
                        <strong style={{ fontSize: '1.15rem', color: '#0d7647', fontWeight: 800 }}>
                          {pillar.startingPrice}
                        </strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.85rem' }}>
                        <Clock size={15} />
                        <span>{pillar.slaTime}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => handleOpenConsult(pillar.title)}
                        style={{
                          padding: '0.65rem 1.15rem',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: '#0d7647',
                          backgroundColor: '#f0fdf4',
                          border: '1px solid #bbf7d0',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Trao đổi giải pháp này
                      </button>

                      <button
                        type="button"
                        onClick={() => navigate(pillar.deepDiveUrl)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          padding: '0.65rem 1.25rem',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          backgroundColor: '#0f172a',
                          borderRadius: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>Xem chi tiết giải pháp</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. KHỐI SO SÁNH NHANH: BẢNG ĐỐI CHIẾU "LÀM VIỆC CÙNG LOCALMATE"
          ========================================================================= */}
      <section
        style={{
          padding: '4.5rem 0',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#0d7647',
                backgroundColor: '#ecfdf5',
                border: '1px solid #bbf7d0',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                display: 'inline-block',
                marginBottom: '0.85rem'
              }}
            >
              MINH BẠCH &amp; ĐỐI CHIẾU THỰC TẾ
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              Tại Sao Nên Làm Việc Cùng Localmate?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                textWrap: 'pretty'
              }}
            >
              Chúng tôi không bán những gói giải pháp đắt đỏ vượt quá nhu cầu thực tế. Hãy cùng đối chiếu
              4 tiêu chuẩn làm việc cốt lõi tạo nên sự khác biệt của Localmate.
            </p>
          </div>

          {/* Comparison Table / Grid */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(200px, 1.2fr) minmax(280px, 2fr) minmax(250px, 1.8fr)',
                backgroundColor: '#f8fafc',
                borderBottom: '2px solid #e2e8f0',
                padding: '1.25rem 1.5rem',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}
              className="comparison-header-row"
            >
              <div style={{ color: '#0f172a' }}>Tiêu chí đối chiếu</div>
              <div
                style={{
                  color: '#0d7647',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <CheckCircle2 size={18} color="#0d7647" />
                <span>Làm việc cùng Localmate</span>
              </div>
              <div
                style={{
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <X size={18} color="#94a3b8" />
                <span>Cách làm thông thường / Agency lớn</span>
              </div>
            </div>

            {/* Table Rows */}
            {COMPARISON_TABLE_HUB.map((row: ComparisonRowHubItem, idx: number) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(200px, 1.2fr) minmax(280px, 2fr) minmax(250px, 1.8fr)',
                  borderBottom:
                    idx < COMPARISON_TABLE_HUB.length - 1 ? '1px solid #f1f5f9' : 'none',
                  padding: '1.5rem',
                  alignItems: 'center',
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fcfdfd'
                }}
                className="comparison-data-row"
              >
                {/* Criterion */}
                <div style={{ paddingRight: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                    {row.criterion}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0d7647',
                      backgroundColor: '#ecfdf5',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                      display: 'inline-block'
                    }}
                  >
                    {row.highlight}
                  </span>
                </div>

                {/* Localmate Advantage */}
                <div
                  style={{
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #dcfce7',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    marginRight: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2
                      size={18}
                      color="#16a34a"
                      style={{ flexShrink: 0, marginTop: '0.15rem' }}
                    />
                    <span
                      style={{
                        fontSize: '0.925rem',
                        color: '#166534',
                        fontWeight: 600,
                        lineHeight: 1.55,
                        textWrap: 'pretty'
                      }}
                    >
                      {row.localmateAdvantage}
                    </span>
                  </div>
                </div>

                {/* Traditional Agency */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem',
                    padding: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <X
                      size={18}
                      color="#94a3b8"
                      style={{ flexShrink: 0, marginTop: '0.15rem' }}
                    />
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: '#64748b',
                        lineHeight: 1.5,
                        textWrap: 'pretty'
                      }}
                    >
                      {row.traditionalWay}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. KHỐI GỢI Ý TÌNH HUỐNG THEO NGÀNH
          ========================================================================= */}
      <section
        style={{
          padding: '4.5rem 0 5rem 0',
          backgroundColor: '#fbfcfb'
        }}
      >
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#0d7647',
                backgroundColor: '#ecfdf5',
                border: '1px solid #bbf7d0',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                display: 'inline-block',
                marginBottom: '0.85rem'
              }}
            >
              GIẢI PHÁP MAY ĐO THEO NGÀNH
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              Tình Huống Thực Tế Theo Từng Ngành Nghề
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                textWrap: 'pretty'
              }}
            >
              Mỗi ngành kinh doanh có hành vi mua sắm riêng của khách hàng. Dưới đây là bộ phối hợp giải pháp
              được tối ưu hóa dựa trên kinh nghiệm triển khai thực tế của Localmate.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {INDUSTRY_SCENARIOS_HUB.map((scenario: IndustryScenarioHubItem) => (
              <div
                key={scenario.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '0.65rem',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #dcfce7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {renderIndustryIcon(scenario.iconType)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: '#0d7647',
                        backgroundColor: '#ecfdf5',
                        border: '1px solid #bbf7d0',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px'
                      }}
                    >
                      {scenario.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35,
                      textWrap: 'pretty'
                    }}
                  >
                    {scenario.name}
                  </h3>

                  {/* Problem */}
                  <div
                    style={{
                      backgroundColor: '#fff7ed',
                      border: '1px solid #fed7aa',
                      borderRadius: '0.5rem',
                      padding: '0.75rem 0.85rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: '#c2410c',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.2rem'
                      }}
                    >
                      Tình huống thường gặp:
                    </span>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#7c2d12',
                        lineHeight: 1.5,
                        margin: 0,
                        textWrap: 'pretty'
                      }}
                    >
                      {scenario.problem}
                    </p>
                  </div>

                  {/* Recommended Pillars */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: '#334155',
                        display: 'block',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Bộ giải pháp phối hợp khuyên dùng:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {scenario.recommendedPillars.map((p: { pillarNumber: string; name: string }, pIdx: number) => (
                        <div
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            fontSize: '0.85rem',
                            color: '#0f172a',
                            fontWeight: 600
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '18px',
                              height: '18px',
                              borderRadius: '4px',
                              backgroundColor: '#ecfdf5',
                              color: '#0d7647',
                              fontSize: '0.7rem',
                              fontWeight: 800,
                              flexShrink: 0
                            }}
                          >
                            {p.pillarNumber}
                          </span>
                          <span>{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Outcome */}
                  <div
                    style={{
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #dcfce7',
                      borderRadius: '0.5rem',
                      padding: '0.75rem 0.85rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: '#15803d',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.2rem'
                      }}
                    >
                      Kết quả mong đợi:
                    </span>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#14532d',
                        lineHeight: 1.5,
                        margin: 0,
                        fontWeight: 600,
                        textWrap: 'pretty'
                      }}
                    >
                      {scenario.expectedOutcome}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Chi phí ước tính:</span>
                    <strong style={{ fontSize: '0.88rem', color: '#0d7647', fontWeight: 800 }}>
                      {scenario.recommendedBudget}
                    </strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenConsult(scenario.name)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{scenario.ctaText}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. KHỐI CHỐT CHẶN: KÊU GỌI HÀNH ĐỘNG & KẾT NỐI KỸ THUẬT VIÊN
          ========================================================================= */}
      <section
        style={{
          padding: '4.5rem 0',
          backgroundColor: '#0f172a',
          color: '#ffffff'
        }}
      >
        <Container size="md">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#86efac',
                backgroundColor: 'rgba(134, 239, 172, 0.12)',
                border: '1px solid rgba(134, 239, 172, 0.25)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={15} color="#86efac" />
              <span>HỖ TRỢ ĐÁNH GIÁ HIỆN TRẠNG 0Đ</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: '#ffffff',
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              Bạn vẫn đang phân vân giải pháp nào phù hợp nhất?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                textWrap: 'pretty'
              }}
            >
              Kỹ thuật viên Localmate sẵn sàng trao đổi nhanh trong 15 phút, lắng nghe mô hình kinh doanh của bạn
              và tư vấn phương án tinh gọn, tiết kiệm chi phí nhất — không ép bán, không chèo kéo.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <button
                type="button"
                onClick={() => handleOpenConsult('Tư vấn giải pháp phù hợp 0đ')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.85rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  backgroundColor: '#0d7647',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(13, 118, 71, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Đăng ký tư vấn 0đ cùng Kỹ thuật viên</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="tel:0961803737"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.6rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <PhoneCall size={17} />
                <span>Hotline: 0961.803.737</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .comparison-header-row {
            display: none !important;
          }
          .comparison-data-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.85rem !important;
            padding: 1.25rem 1rem !important;
          }
          .comparison-data-row > div {
            margin-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
