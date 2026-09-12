import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { useRouter, Link } from '../components/layout/Router';
import { CONTACT_INFO } from '../data/landingContent';
import {
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Phone,
  ArrowRight,
  Clock,
  HelpCircle,
  Zap,
  Check,
  X,
  AlertTriangle,
  Globe,
  MessageSquare,
  Activity,
  Database,
  Calendar,
  Layers,
  Award,
  Lock,
  ChevronDown,
  ExternalLink,
  Cpu,
  BarChart3,
  Server,
  Headphones,
  RefreshCw,
  FileText
} from 'lucide-react';

interface CareWorkflowPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const CareWorkflowPage: React.FC<CareWorkflowPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeCycle, setActiveCycle] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCTA = (serviceName: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(serviceName);
    } else {
      navigate('/lien-he');
    }
  };

  const breadcrumbs = [
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Đồng hành chăm sóc', url: '/giai-phap/dong-hanh-cham-soc' },
    { name: 'Quy trình vận hành & chăm sóc định kỳ', url: '/quy-trinh-cham-soc' }
  ];

  // 5 Chu kỳ vận hành chi tiết
  const operationalCycles = [
    {
      id: 'daily',
      periodTag: 'HÀNG NGÀY • REAL-TIME 24/7',
      periodClass: 'cycle-badge-emerald',
      title: 'Giám Sát Uptime 99.9% & Kiểm Soát Cảnh Báo Đơn Hàng Tức Thì',
      subtitle: 'Đảm bảo website luôn trực tuyến thông suốt, không một vị khách hay đơn đặt bàn nào bị bỏ sót.',
      icon: Activity,
      iconColor: '#0d7647',
      iconBg: '#ecfdf5',
      sla: 'Phản ứng sự cố < 15 phút • Kiểm tra ping mỗi 60 giây',
      keyTasks: [
        {
          heading: 'Giám sát Uptime 99.9% tự động',
          detail: 'Hệ thống tự động ping kiểm tra trạng thái website liên tục mỗi 60 giây từ 3 node máy chủ độc lập (Hà Nội, TP.HCM, Singapore).'
        },
        {
          heading: 'Phát hiện cảnh báo quá tải & link hỏng',
          detail: 'Tự động gửi Webhook cảnh báo vào nhóm kỹ thuật ngay lập tức nếu website có dấu hiệu tắc nghẽn traffic, tài nguyên chạm ngưỡng hoặc phát sinh lỗi 404/500.'
        },
        {
          heading: 'Kiểm tra thông báo đơn hàng qua Telegram/Zalo',
          detail: 'Đảm bảo các nút gọi Hotline, form gửi yêu cầu tư vấn, đặt bàn hoặc tin nhắn đổ về Telegram Bot và Zalo OA của chủ tiệm luôn thông suốt trong 3 giây.'
        },
        {
          heading: 'Bảo vệ tường lửa SSL/HTTPS & chống tấn công',
          detail: 'Giám sát chứng chỉ bảo mật SSL tự động gia hạn, kích hoạt bộ lọc Cloudflare WAF chặn bot độc hại quét tìm lỗ hổng.'
        }
      ],
      deliverables: [
        'Hệ thống trực tuyến 24/7 không gián đoạn đón khách',
        'Cảnh báo sự cố tức thời đến kỹ thuật viên LocalMate',
        '100% tin nhắn và cuộc gọi của khách hàng được ghi nhận'
      ],
      toolsTech: ['Uptime Ping Engine', 'Telegram Bot Webhook', 'Zalo OA Webhook', 'Cloudflare WAF']
    },
    {
      id: 'weekly',
      periodTag: 'HÀNG TUẦN • XỬ LÝ 15 - 30 PHÚT',
      periodClass: 'cycle-badge-blue',
      title: 'Sao Lưu Toàn Diện Lên Cloudflare R2 & Đổi Bảng Giá / Banner Siêu Tốc',
      subtitle: 'Lưu trữ dữ liệu độc lập đa vùng an toàn và cập nhật kịp thời các chương trình khuyến mãi cuối tuần.',
      icon: Database,
      iconColor: '#1d4ed8',
      iconBg: '#eff6ff',
      sla: 'Hỗ trợ thay đổi nội dung trong 15 – 30 phút qua Zalo riêng',
      keyTasks: [
        {
          heading: 'Sao lưu dữ liệu tự động lên Cloudflare R2',
          detail: 'Chụp bản sao lưu toàn diện (Full Snapshot) bao gồm mã nguồn, hình ảnh media và cơ sở dữ liệu lên kho lưu trữ đám mây Cloudflare R2, cho phép phục hồi 1-click khi có sự cố.'
        },
        {
          heading: 'Cập nhật các bản vá bảo mật định kỳ',
          detail: 'Quét và cập nhật các gói thư viện dependency, vá lỗi an ninh mạng mới nhất và xóa sạch bộ nhớ đệm (Cache Purge) giúp web luôn tải nhẹ.'
        },
        {
          heading: 'Hỗ trợ đổi bảng giá & banner theo yêu cầu',
          detail: 'Chủ tiệm chỉ cần chụp ảnh menu mới hoặc nhắn nội dung giảm giá vào nhóm Zalo 1-1, kỹ thuật viên LocalMate thay mới trên website chỉ trong 15 - 30 phút.'
        },
        {
          heading: 'Kiểm tra hiển thị đa thiết bị di động',
          detail: 'Audit hiển thị menu, chữ viết và nút bấm trên các dòng iPhone, Samsung đời mới nhất để không bị tràn màn hình hay che nút đặt hẹn.'
        }
      ],
      deliverables: [
        'Bản sao lưu R2 an toàn, sẵn sàng khôi phục trong 5 phút',
        'Bảng giá, menu và khuyến mãi cuối tuần luôn chính xác',
        'Website sạch mã độc, mượt mà trên 100% thiết bị'
      ],
      toolsTech: ['Cloudflare R2 Storage', 'GitHub Automated CI/CD', 'Mobile Viewport Audit', 'Zalo VIP Support Desk']
    },
    {
      id: 'monthly',
      periodTag: 'HÀNG THÁNG • ĐO LƯỜNG TĂNG TRƯỞNG',
      periodClass: 'cycle-badge-amber',
      title: 'Báo Cáo Tăng Trưởng Thực Tế, Tối Ưu Map SEO & Trích Dẫn AI (AEO/GEO)',
      subtitle: 'Minh bạch từng cuộc gọi, lượt chỉ đường và sự hiện diện của cơ sở bạn trên Google Maps và các cỗ máy AI.',
      icon: TrendingUp,
      iconColor: '#b45309',
      iconBg: '#fef3c7',
      sla: 'Gửi báo cáo định kỳ ngày 01 – 03 hàng tháng • Trao đổi 1-1',
      keyTasks: [
        {
          heading: 'Báo cáo chỉ số kinh doanh thực tế',
          detail: 'Gửi báo cáo số liệu minh bạch: Tổng số lượt tìm kiếm Google Maps, số lượt bấm gọi Hotline 1 chạm, số lượt bấm chỉ đường ghé tiệm và lượng khách vào website.'
        },
        {
          heading: 'Rà soát từ khóa & thứ hạng Google Maps',
          detail: 'Đo lường thứ hạng vị trí hiển thị trên bản đồ địa phương trong bán kính 3km - 5km xung quanh tiệm; lọc và cảnh báo spam đánh giá xấu để bảo vệ uy tín.'
        },
        {
          heading: 'Kiểm tra trích dẫn trên các công cụ AI (ChatGPT, Perplexity)',
          detail: 'Kiểm tra xem khi người dùng hỏi các trợ lý AI ("Quán ăn ngon gần đây", "Phòng khám uy tín"), thương hiệu của bạn có được AI trích dẫn và gợi ý làm điểm đến hay không.'
        },
        {
          heading: 'Đề xuất giải pháp cải thiện tỷ lệ chuyển đổi',
          detail: 'Phân tích hành vi cuộn trang để gợi ý dời nút bấm, thêm feedback khách thật hoặc thay đổi câu mời gọi (CTA) nhằm tăng lượng khách liên hệ.'
        }
      ],
      deliverables: [
        'Báo cáo hiệu quả số hóa định dạng PDF & Dashboard tinh gọn',
        'Bản đồ vị trí từ khóa Maps theo bán kính địa phương',
        'Danh sách đề xuất tối ưu chuyển đổi cho tháng tiếp theo'
      ],
      toolsTech: ['Google Maps Performance API', 'Google Search Console', 'AI Citations Audit Engine', 'GA4 Local Events']
    },
    {
      id: 'quarterly',
      periodTag: 'HÀNG QUÝ • TỐI ƯU TOÀN DIỆN',
      periodClass: 'cycle-badge-purple',
      title: 'Kiểm Tra Toàn Diện Core Web Vitals & Đề Xuất Kéo Khách Mùa Vụ Mới',
      subtitle: 'Giữ vững tốc độ tải siêu tốc và chuẩn bị sớm các chiến dịch thu hút khách hàng trước các dịp cao điểm.',
      icon: Zap,
      iconColor: '#7c3aed',
      iconBg: '#f5f3ff',
      sla: 'Báo cáo chuyên sâu quý • Buổi tư vấn định hướng mùa vụ',
      keyTasks: [
        {
          heading: 'Kiểm tra chuyên sâu Core Web Vitals (LCP, CLS, INP)',
          detail: 'Audit toàn bộ trang web bằng Lighthouse và Chrome User Experience Report; tối ưu LCP < 1.2s, CLS = 0 (chống giật layout) và độ trễ phản hồi tương tác INP < 200ms.'
        },
        {
          heading: 'Nén ảnh thế hệ mới & dọn dẹp hạ tầng số',
          detail: 'Chuyển đổi các hình ảnh mới bổ sung sang định dạng AVIF/WebP siêu nhẹ, nén dữ liệu và thanh lọc các mã script không dùng đến.'
        },
        {
          heading: 'Lên ý tưởng chương trình kéo khách mùa vụ',
          detail: 'Đề xuất kế hoạch ưu đãi đón đầu các dịp lễ lớn (Tết Nguyên Đán, Nghỉ hè, Lễ 30/4, Tựu trường, Black Friday) kèm khung banner hoặc popup phù hợp.'
        },
        {
          heading: 'Họp trực tuyến 30 phút định hướng chuyển đổi số',
          detail: 'Trao đổi trực tiếp cùng chủ cơ sở để tổng kết quý cũ, đồng thuận mục tiêu mở rộng dịch vụ, chi nhánh hoặc triển khai thêm tính năng mới.'
        }
      ],
      deliverables: [
        'Điểm số hiệu năng Core Web Vitals xanh đạt 95 – 100/100',
        'Bộ banner và ý tưởng khuyến mãi theo mùa vụ kinh doanh',
        'Kế hoạch hành động số hóa cụ thể cho quý kế tiếp'
      ],
      toolsTech: ['Google Lighthouse Core Web Vitals', 'PageSpeed Insights', 'Squoosh / AVIF Compression', 'Seasonal Campaign Planner']
    },
    {
      id: 'warranty5y',
      periodTag: 'CAM KẾT 5 NĂM • BẢO HÀNH HẠ TẦNG',
      periodClass: 'cycle-badge-gold',
      title: 'Bảo Hành Kỹ Thuật Hạ Tầng 5 Năm — Mã Nguồn & Tên Miền Chính Chủ 100%',
      subtitle: 'Cam kết bằng hợp đồng rõ ràng: Tuyệt đối không có chuyện bỏ rơi khách hàng hay khóa mã nguồn vòi thêm tiền.',
      icon: ShieldCheck,
      iconColor: '#059669',
      iconBg: '#ecfdf5',
      sla: 'Đồng hành hỗ trợ kỹ thuật suốt 5 năm sử dụng',
      keyTasks: [
        {
          heading: 'Cam kết đồng hành kỹ thuật lâu dài không bỏ rơi',
          detail: 'LocalMate ký cam kết bảo hành hạ tầng 5 năm bằng văn bản. Dù sau 1 năm hay 3 năm bạn muốn cập nhật gì, đội ngũ KTV vẫn luôn có mặt hỗ trợ xử lý.'
        },
        {
          heading: '100% Mã nguồn & cấu hình tên miền chính chủ',
          detail: 'Bạn giữ quyền sở hữu tối cao: Tài khoản quản trị tên miền Cloudflare, mã nguồn GitHub và cơ sở dữ liệu đều đăng ký bằng thông tin và email chính chủ của bạn.'
        },
        {
          heading: 'Miễn phí khôi phục hạ tầng khi có sự cố',
          detail: 'Nếu xảy ra sự cố từ nhà mạng viễn thông quốc tế hay người dùng vô tình bấm nhầm cấu hình, KTV LocalMate khôi phục lại nguyên trạng mà không thu thêm phí vô lý.'
        },
        {
          heading: 'Hỗ trợ mở rộng chi nhánh & nâng cấp linh hoạt',
          detail: 'Khi tiệm phát triển mở thêm chi nhánh thứ 2, thứ 3 hoặc mở rộng sang mô hình chuỗi, hệ thống được cấu hình sẵn sàng nhân bản với chi phí kỹ thuật tối thiểu.'
        }
      ],
      deliverables: [
        'Văn bản cam kết bảo hành hạ tầng kỹ thuật 5 năm',
        'Bàn giao đầy đủ thông tin truy cập DNS, hosting, mã nguồn',
        'Quyền yên tâm tuyệt đối để dồn 100% tâm trí kinh doanh'
      ],
      toolsTech: ['Cloudflare Enterprise DNS', 'GitHub Repository Ownership', 'Disaster Recovery Playbook', 'Infrastructure Warranty Contract']
    }
  ];

  // Bảng so sánh trực quan: Tự quản lý vs Có KTV LocalMate
  const comparisonData = [
    {
      criteria: 'Giám sát sự cố & Uptime',
      selfManaged: 'Chỉ biết web sập khi khách gọi phàn nàn; mất khách liên tục cả ngày mà không hề hay biết.',
      localMate: 'Giám sát tự động 60s/lần, bot báo Telegram tức thì, KTV chủ động xử lý trước khi khách kịp nhận ra.',
      winner: 'localmate'
    },
    {
      criteria: 'Tốc độ hỗ trợ đổi bảng giá / banner',
      selfManaged: 'Liên hệ thợ cũ thì mất liên lạc, tự mò mẫm thì làm vỡ giao diện web, đợi cả tuần chưa xong.',
      localMate: 'Nhóm Zalo 1-1 riêng, chỉ cần nhắn ảnh hoặc text, KTV hoàn thành cập nhật chuẩn đẹp trong 15 – 30 phút.',
      winner: 'localmate'
    },
    {
      criteria: 'Sao lưu & Phòng chống mất dữ liệu',
      selfManaged: 'Thường quên sao lưu, nếu hosting bị hacker tấn công hoặc sập ổ cứng thì mất trắng toàn bộ dữ liệu.',
      localMate: 'Tự động sao lưu đa vùng lên Cloudflare R2 hàng tuần, khôi phục 1-click trong 5 phút khi cần.',
      winner: 'localmate'
    },
    {
      criteria: 'Đo lường & Báo cáo số liệu',
      selfManaged: 'Không biết web có bao nhiêu người xem, có ai gọi điện hay bấm chỉ đường trên Google Maps không.',
      localMate: 'Báo cáo hàng tháng minh bạch: số cuộc gọi hotline, số lượt chỉ đường Maps, số khách nhắn tin Zalo.',
      winner: 'localmate'
    },
    {
      criteria: 'Kiểm tra trích dẫn tìm kiếm AI',
      selfManaged: 'Mù mờ trước xu hướng khách hỏi ChatGPT, Perplexity hay Google AI Overviews để tìm quán.',
      localMate: 'Rà soát cấu trúc dữ liệu Schema định kỳ hàng tháng để thương hiệu được các bot AI ghi nhớ và đề xuất.',
      winner: 'localmate'
    },
    {
      criteria: 'Tối ưu tốc độ Core Web Vitals',
      selfManaged: 'Sau 6 tháng web trở nên ì ạch, ảnh nặng làm khách vào 3 giây là thoát, rớt thứ hạng tìm kiếm.',
      localMate: 'Kiểm tra hàng quý, nén ảnh AVIF/WebP, duy trì tốc độ tải trang dưới 1.2s trên mạng 4G di động.',
      winner: 'localmate'
    },
    {
      criteria: 'Quyền sở hữu & Cam kết dài hạn',
      selfManaged: 'Bị đơn vị cũ khóa mã nguồn, ép đóng phí duy trì đắt đỏ hàng năm; sau 1 năm là bị đem con bỏ chợ.',
      localMate: 'Cam kết bảo hành hạ tầng 5 năm, 100% mã nguồn và tên miền thuộc sở hữu của bạn, không thu phí ép buộc.',
      winner: 'localmate'
    }
  ];

  // 4 bước quy trình tiếp nhận & xử lý yêu cầu nhanh
  const workflowSteps = [
    {
      step: '01',
      title: 'Gửi yêu cầu qua Zalo 1-1',
      desc: 'Chủ tiệm chụp ảnh menu giấy mới, gửi file giá mới hoặc nhắn yêu cầu khuyến mại vào nhóm Zalo VIP có KTV trực tiếp phụ trách.',
      time: '1 phút gửi tin'
    },
    {
      step: '02',
      title: 'KTV tiếp nhận & phản hồi',
      desc: 'Kỹ thuật viên xác nhận nhận yêu cầu trong vòng 5 phút, rà soát nội dung và báo giờ hoàn thành dự kiến.',
      time: 'Phản hồi < 5 phút'
    },
    {
      step: '03',
      title: 'Cập nhật & Test di động',
      desc: 'KTV trực tiếp sửa mã nguồn, cập nhật bảng giá/banner mới, kiểm tra hiển thị chuẩn responsive trên các mẫu điện thoại.',
      time: 'Thực hiện 10 - 20 phút'
    },
    {
      step: '04',
      title: 'Bàn giao link nghiệm thu',
      desc: 'KTV gửi link live để chủ tiệm duyệt ngay trên điện thoại; xác nhận hoàn tất quy trình trong vòng 15 – 30 phút.',
      time: 'Hoàn tất trong 30 phút'
    }
  ];

  // FAQ
  const faqs = [
    {
      q: 'Quy trình chăm sóc định kỳ này đã bao gồm trong gói dịch vụ thiết kế web chưa?',
      a: 'Tất cả các gói thiết kế web và giải pháp trọn gói của LocalMate đều ĐÃ BAO GỒM quy trình vận hành chăm sóc và cam kết bảo hành hạ tầng kỹ thuật dài hạn. Đối với các cơ sở đã có sẵn website do đơn vị khác làm nhưng bị bỏ rơi, LocalMate cũng có gói tiếp nhận cứu hộ và chăm sóc vận hành độc lập với chi phí rất tiết kiệm chỉ từ 490.000đ/tháng.'
    },
    {
      q: 'Nếu tôi cần đổi bảng giá hoặc thông báo khuyến mãi gấp vào tối thứ Bảy thì sao?',
      a: 'Nhóm Zalo hỗ trợ kỹ thuật của LocalMate có KTV túc trực theo ca từ 8h00 đến 22h00 tất cả các ngày trong tuần (kể cả thứ Bảy và Chủ Nhật). Các yêu cầu khẩn cấp như đổi giá, thêm món hết hàng hoặc treo banner giờ vàng đều được tiếp nhận và xử lý nhanh chóng trong 15 – 30 phút để không lỡ thời điểm vàng đón khách của quán.'
    },
    {
      q: 'Bản sao lưu dữ liệu Cloudflare R2 bảo vệ website của tôi như thế nào?',
      a: 'Cloudflare R2 là nền tảng lưu trữ đám mây phân tán đa vùng với độ bền dữ liệu 99.999999999% (11 số 9). Bản sao lưu của bạn được lưu tách biệt hoàn toàn khỏi máy chủ chạy web. Ngay cả khi xảy ra thảm họa mạng diện rộng hoặc người dùng lỡ tay xóa nhầm file, KTV LocalMate có thể kéo bản sao lưu về và khôi phục website hoạt động nguyên vẹn chỉ trong 5 phút.'
    },
    {
      q: 'Cam kết bảo hành hạ tầng 5 năm của LocalMate gồm những quyền lợi gì?',
      a: 'Chúng tôi cam kết bằng hợp đồng minh bạch: (1) Mã nguồn sạch và cấu hình tên miền DNS luôn thuộc quyền sở hữu 100% của bạn; (2) Hỗ trợ sửa các lỗi kỹ thuật phát sinh, bảo đảm web tương thích với các phiên bản trình duyệt mới; (3) Hỗ trợ khôi phục dữ liệu miễn phí khi có sự cố hạ tầng; (4) Tư vấn và hỗ trợ di dời, nâng cấp mở rộng không thu phí phạt hay gây khó khăn.'
    },
    {
      q: 'Báo cáo hàng tháng giúp tôi đo lường được những con số thực tế nào?',
      a: 'Chúng tôi loại bỏ các con số ảo không mang lại tiền. Báo cáo tập trung vào 4 chỉ số sinh doanh thu cốt lõi: (1) Số cuộc gọi điện thoại trực tiếp vào Hotline; (2) Số lượt khách bấm chỉ đường trên Google Maps để ghé cơ sở; (3) Lượng tìm kiếm hiển thị thực tế quanh bán kính 3-5km; (4) Tình trạng thương hiệu được các AI như ChatGPT gợi ý khi khách hỏi mua dịch vụ trong khu vực.'
    },
    {
      q: 'Tôi đang có website cũ chạy WordPress hay bị lỗi và tải chậm, LocalMate có nhận chăm sóc không?',
      a: 'Có. Chúng tôi có quy trình "Cứu hộ & Chuyển giao": KTV LocalMate sẽ tiến hành quét mã độc, dọn dẹp các plugin rác, sao lưu cơ sở dữ liệu hiện tại, chuyển hệ thống qua hạ tầng Cloudflare siêu tốc và áp dụng quy trình chăm sóc định kỳ 5 chu kỳ để website vận hành ổn định lâu dài.'
    }
  ];

  const filteredCycles =
    activeCycle === 'all'
      ? operationalCycles
      : operationalCycles.filter((c) => c.id === activeCycle);

  return (
    <div className="care-workflow-page" style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <SEOHead
        title="Quy Trình Vận Hành & Chăm Sóc Số Định Kỳ | Bảo Hành 5 Năm LocalMate"
        description="Chi tiết công việc chăm sóc số định kỳ theo chu kỳ Hàng ngày, Hàng tuần, Hàng tháng, Hàng quý và cam kết bảo hành hạ tầng 5 năm của LocalMate cho doanh nghiệp địa phương."
        canonicalPath="/quy-trinh-cham-soc"
        schemaType="ProfessionalService"
      />

      {/* Hero Section */}
      <section
        className="care-hero-section"
        style={{
          padding: '3.5rem 0 3rem',
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          position: 'relative'
        }}
      >
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Top Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                backgroundColor: 'var(--color-primary-soft)',
                borderRadius: '9999px',
                border: '1px solid var(--color-primary-border)',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={16} style={{ color: 'var(--color-primary)' }} />
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Quy Trình Vận Hành & Chăm Sóc Số Định Kỳ • SLA 15-30 Phút
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                textWrap: 'pretty'
              }}
            >
              Không Bỏ Rơi Sau Bàn Giao: <br />
              <span style={{ color: 'var(--color-primary)' }}>Quy Trình Vận Hành & Chăm Sóc Số Khép Kín</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'var(--color-text-body)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '780px',
                marginInline: 'auto',
                textWrap: 'pretty'
              }}
            >
              Học hỏi tiêu chuẩn dịch vụ chuyên nghiệp, LocalMate thiết lập quy trình chăm sóc số minh bạch theo từng
              chu kỳ <strong>Hàng ngày, Hàng tuần, Hàng tháng, Hàng quý</strong> cùng cam kết{' '}
              <strong>bảo hành hạ tầng 5 năm</strong>. Đội ngũ kỹ thuật viên túc trực hỗ trợ nhanh trong 15-30 phút
              để bạn an tâm tuyệt đối phát triển kinh doanh.
            </p>

            {/* Hero CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA('Đăng ký tư vấn chăm sóc website & hạ tầng')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
                }}
              >
                <span>Đăng ký tư vấn chăm sóc 0đ</span>
                <ArrowRight size={18} />
              </Button>
              <a
                href="#chu-ky-van-hanh"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-navy)',
                  borderRadius: 'var(--btn-radius, 12px)',
                  border: '1px solid var(--color-border-strong)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Clock size={16} style={{ color: 'var(--color-primary)' }} />
                <span>Xem chi tiết 5 chu kỳ</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                backgroundColor: 'var(--color-bg)',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>15 - 30p</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '2px' }}>
                  Phản hồi đổi giá / banner
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)' }}>99.9%</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '2px' }}>
                  Cam kết Uptime trực tuyến
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1d4ed8' }}>100%</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '2px' }}>
                  Backup R2 hàng tuần
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#b45309' }}>5 Năm</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '2px' }}>
                  Bảo hành hạ tầng chính chủ
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 Chu Kỳ Vận Hành Chăm Sóc Số Định Kỳ */}
      <section
        id="chu-ky-van-hanh"
        style={{
          padding: '4rem 0',
          backgroundColor: 'var(--color-bg)'
        }}
      >
        <Container>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              TIÊU CHUẨN VẬN HÀNH KHÉP KÍN
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.3,
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              5 Chu Kỳ Vận Hành & Chăm Sóc Số Chuyên Nghiệp
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, textWrap: 'pretty' }}>
              Mỗi chu kỳ đảm nhiệm một nhiệm vụ chiến lược riêng biệt, bảo đảm hạ tầng số luôn khỏe mạnh, an toàn,
              liên tục cập nhật và kéo khách hàng mới về cho tiệm.
            </p>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginTop: '1.75rem'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveCycle('all')}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: activeCycle === 'all' ? 'var(--color-primary)' : 'var(--color-border)',
                  backgroundColor: activeCycle === 'all' ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: activeCycle === 'all' ? '#ffffff' : 'var(--color-navy)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Tất cả (5 Chu kỳ)
              </button>
              {operationalCycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setActiveCycle(cycle.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    border: '1px solid',
                    borderColor: activeCycle === cycle.id ? 'var(--color-primary)' : 'var(--color-border)',
                    backgroundColor: activeCycle === cycle.id ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: activeCycle === cycle.id ? '#ffffff' : 'var(--color-navy)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cycle.periodTag.split('•')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
          >
            {filteredCycles.map((cycle, index) => {
              const IconComp = cycle.icon;
              return (
                <div
                  key={cycle.id}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: '20px',
                    border: '1px solid var(--color-border)',
                    padding: '2rem',
                    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                    position: 'relative'
                  }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                      borderBottom: '1px solid var(--color-border-subtle)',
                      paddingBottom: '1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          backgroundColor: cycle.iconBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: cycle.iconColor,
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={26} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            color: cycle.iconColor,
                            textTransform: 'uppercase',
                            marginBottom: '4px'
                          }}
                        >
                          {cycle.periodTag}
                        </div>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: 'var(--color-navy)',
                            margin: 0,
                            lineHeight: 1.35
                          }}
                        >
                          {cycle.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '0.4rem 0.85rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        fontSize: '0.8125rem',
                        color: 'var(--color-navy)',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Clock size={14} style={{ color: 'var(--color-primary)' }} />
                      <span>{cycle.sla}</span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-text-body)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      fontStyle: 'italic'
                    }}
                  >
                    "{cycle.subtitle}"
                  </p>

                  {/* Tasks Grid */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-navy)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        marginBottom: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                      <span>Chi tiết các đầu việc kỹ thuật thực hiện:</span>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1rem'
                      }}
                    >
                      {cycle.keyTasks.map((task, tidx) => (
                        <div
                          key={tidx}
                          style={{
                            padding: '1rem',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-border-subtle)'
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 700,
                              color: 'var(--color-navy)',
                              marginBottom: '0.35rem'
                            }}
                          >
                            {task.heading}
                          </div>
                          <div
                            style={{
                              fontSize: '0.825rem',
                              color: 'var(--color-text-body)',
                              lineHeight: 1.55
                            }}
                          >
                            {task.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Tools Footer */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--color-border-subtle)',
                      fontSize: '0.825rem'
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--color-navy)', marginRight: '0.5rem' }}>
                        Kết quả bàn giao:
                      </span>
                      <span style={{ color: 'var(--color-text-body)' }}>
                        {cycle.deliverables.join(' • ')}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {cycle.toolsTech.map((tool, toolIdx) => (
                        <span
                          key={toolIdx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.6rem',
                            backgroundColor: 'var(--color-surface-subtle)',
                            color: 'var(--color-navy)',
                            borderRadius: '6px',
                            fontWeight: 600,
                            border: '1px solid var(--color-border)'
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SLA 15-30 Phút: Quy Trình 4 Bước Tiếp Nhận Nhanh */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <Container>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              HỖ TRỢ SIÊU TỐC QUA ZALO VIP
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.6vw, 2.15rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.3,
                marginBottom: '0.75rem',
                textWrap: 'pretty'
              }}
            >
              Cần Đổi Giá / Đổi Banner? Xong Ngay Trong 15 – 30 Phút
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, textWrap: 'pretty' }}>
              Không cần gửi ticket rườm rà hay gọi điện nhắc nhở. Quy trình 4 bước tinh gọn qua nhóm Zalo 1-1 giúp
              chủ tiệm thay đổi thông tin đón khách ngay lập tức.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {workflowSteps.map((step, sIdx) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  border: '1px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 900,
                      color: 'var(--color-primary)',
                      fontFamily: 'monospace',
                      lineHeight: 1
                    }}
                  >
                    {step.step}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      backgroundColor: 'var(--color-primary-soft)',
                      color: 'var(--color-primary)',
                      borderRadius: '6px',
                      border: '1px solid var(--color-primary-border)'
                    }}
                  >
                    {step.time}
                  </span>
                </div>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.4
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-body)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bảng So Sánh Toàn Diện: Tự Quản Lý vs Có KTV LocalMate */}
      <section
        id="so-sanh"
        style={{
          padding: '4.5rem 0',
          backgroundColor: 'var(--color-bg)'
        }}
      >
        <Container>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              SO SÁNH THỰC TẾ
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.3,
                marginBottom: '0.75rem',
                textWrap: 'pretty'
              }}
            >
              Tự Quản Lý Rời Rạc vs Có Kỹ Thuật Viên LocalMate Đồng Hành
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, textWrap: 'pretty' }}>
              Tại sao 90% chủ cơ sở kinh doanh bỏ cuộc sau 6 tháng tự quản trị website? Hãy xem sự khác biệt giữa hai
              cách tiếp cận.
            </p>
          </div>

          {/* Comparison Table */}
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: 'var(--color-surface)',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
              overflow: 'hidden'
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(240px, 2fr) minmax(260px, 2.2fr)',
                backgroundColor: 'var(--color-surface-subtle)',
                borderBottom: '2px solid var(--color-border)',
                padding: '1.25rem 1.5rem',
                fontWeight: 800,
                fontSize: '0.9rem'
              }}
              className="comparison-grid-header"
            >
              <div style={{ color: 'var(--color-navy)' }}>TIÊU CHÍ VẬN HÀNH</div>
              <div style={{ color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <X size={16} />
                <span>Tự Quản Lý / Thuê Rời Rạc</span>
              </div>
              <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={16} />
                <span>Có KTV LocalMate Chăm Sóc</span>
              </div>
            </div>

            {/* Table Rows */}
            <div>
              {comparisonData.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(240px, 2fr) minmax(260px, 2.2fr)',
                    padding: '1.25rem 1.5rem',
                    borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid var(--color-border)',
                    backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-bg)',
                    gap: '1rem',
                    alignItems: 'center'
                  }}
                  className="comparison-grid-row"
                >
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.9rem' }}>
                    {item.criteria}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-body)',
                      lineHeight: 1.5,
                      backgroundColor: '#fef2f2',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #fee2e2'
                    }}
                  >
                    <span style={{ color: '#dc2626', fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                      Rủi ro & mất thời gian:
                    </span>
                    {item.selfManaged}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-body)',
                      lineHeight: 1.5,
                      backgroundColor: 'var(--color-primary-soft)',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary-border)'
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                      KTV LocalMate đảm bảo:
                    </span>
                    {item.localMate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Cam Kết Bảo Hành Hạ Tầng 5 Năm */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <Container>
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: 'var(--color-bg)',
              borderRadius: '24px',
              border: '2px solid var(--color-primary-border)',
              padding: 'clamp(1.75rem, 3.5vw, 3rem)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--color-primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}
              >
                <Award size={36} />
              </div>

              <div style={{ flex: '1 1 500px' }}>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.35rem'
                  }}
                >
                  CAM KẾT BẰNG VĂN BẢN
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    lineHeight: 1.3,
                    marginBottom: '1rem'
                  }}
                >
                  Bảo Hành Hạ Tầng Kỹ Thuật 5 Năm — Bạn Làm Chủ 100%
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-body)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}
                >
                  Nhiều đơn vị làm web thu tiền xong rồi tính phí duy trì hàng năm đắt đỏ, đến khi khách muốn chuyển
                  host thì giữ tên miền hoặc khóa mã nguồn. Tại LocalMate, triết lý của chúng tôi là{' '}
                  <strong>minh bạch và trao quyền làm chủ tuyệt đối cho chủ cơ sở kinh doanh</strong>.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                      100% Mã nguồn thuộc sở hữu của bạn, bàn giao qua GitHub chính chủ.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                      Tên miền và DNS Cloudflare đứng tên chính chủ, không bị ràng buộc.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                      Hỗ trợ kỹ thuật 5 năm, xử lý sự cố máy chủ và khôi phục dữ liệu miễn phí.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                      Sẵn sàng mở rộng thêm chi nhánh mới với chi phí kỹ thuật nội bộ tối thiểu.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleCTA('Tư vấn quy trình vận hành & bảo hành 5 năm')}
                    style={{ fontWeight: 700 }}
                  >
                    <span>Nhận tư vấn quy trình & hợp đồng mẫu</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: 'var(--color-bg)'
        }}
      >
        <Container>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              GIẢI ĐÁP THẮC MẮC
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.45rem, 2.5vw, 2.1rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.3,
                marginBottom: '0.75rem',
                textWrap: 'pretty'
              }}
            >
              Câu Hỏi Thường Gặp Về Quy Trình Chăm Sóc Số
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, textWrap: 'pretty' }}>
              Những băn khoăn phổ biến nhất của các chủ tiệm khi cân nhắc hợp tác vận hành cùng LocalMate.
            </p>
          </div>

          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: '14px',
                    border: '1px solid var(--color-border)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-navy)',
                        lineHeight: 1.4
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.25rem',
                        fontSize: '0.925rem',
                        color: 'var(--color-text-body)',
                        lineHeight: 1.65,
                        borderTop: '1px solid var(--color-border-subtle)',
                        paddingTop: '1rem'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: 'var(--color-primary)',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <Container>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px'
              }}
            >
              ĐỒNG HÀNH AN TÂM KINH DOANH
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.3,
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              Để Kỹ Thuật Cho LocalMate Lo — Bạn Trọn Vẹn Đón Khách
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                textWrap: 'pretty'
              }}
            >
              Nhận kiểm tra sức khỏe website hiện tại, đánh giá tốc độ Uptime, bảo mật Cloudflare và kiểm tra trích
              dẫn Google Maps hoàn toàn miễn phí.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleCTA('Đăng ký kiểm tra website & tư vấn quy trình vận hành 0đ')}
                style={{
                  backgroundColor: '#ffffff',
                  color: 'var(--color-primary)',
                  fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span>Kiểm tra sức khỏe website 0đ</span>
                <ArrowRight size={18} />
              </Button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  borderRadius: 'var(--btn-radius, 12px)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <Phone size={16} />
                <span>Hotline: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CareWorkflowPage;
