import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { CONTACT_INFO } from '../data/landingContent';
import { useRouter, Link } from '../components/layout/Router';
import {
  MapPin,
  Globe,
  Search,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  PhoneCall,
  Check,
  ChevronDown,
  ChevronUp,
  Cpu,
  BarChart3,
  MessageSquare,
  Bot,
  Database,
  Layers,
  Award,
  QrCode,
  FileCheck,
  HelpCircle,
  TrendingUp,
  ExternalLink,
  Target
} from 'lucide-react';

interface StrategyPhasesPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const StrategyPhasesPage: React.FC<StrategyPhasesPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [selectedDiagnostic, setSelectedDiagnostic] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Chiến lược phát triển số', url: '/chien-luoc-5-giai-doan' }
  ];

  const handleCTA = (serviceName?: string) => {
    const title = serviceName || 'Tư vấn Lộ trình 5 Giai đoạn';
    if (onOpenConsultForm) {
      onOpenConsultForm(title);
    } else {
      navigate('/lien-he');
    }
  };

  // Dữ liệu chi tiết 5 giai đoạn
  const phases = [
    {
      id: 1,
      phaseNumber: '01',
      title: 'Chuẩn Hóa Định Danh & Google Maps',
      shortTitle: 'Chuẩn Hóa Maps & Định Danh',
      subtitle: 'Xác minh chính chủ, dọn sạch thông tin rác & gắn bảng QR tích lũy 5 sao',
      tag: 'Giai Đoạn Nền Tảng',
      badgeColor: '#0d7647',
      badgeBg: '#edf7f1',
      icon: MapPin,
      duration: '3 – 5 ngày làm việc',
      coreGoal:
        'Khẳng định quyền sở hữu thực thể doanh nghiệp trên Google, đồng bộ dữ liệu địa danh (NAP: Tên - Địa chỉ - Điện thoại), loại bỏ nguy cơ bị đối thủ chiếm đoạt địa điểm và kích hoạt hệ thống tích lũy đánh giá 5 sao từ khách hàng thực.',
      ktvTasks: [
        'Khảo sát thực địa vị trí cơ sở, tọa độ GPS chuẩn xác, mặt tiền và biển hiệu kinh doanh thực tế.',
        'Xác minh chính chủ Google Business Profile (GBP) bằng video/thư xác thực, gắn thẳng vào email cá nhân/công ty của bạn (bạn nắm 100% quyền sở hữu vĩnh viễn, không ai lấy lại được).',
        'Quét và dọn sạch các địa điểm rác, gộp địa điểm trùng lặp, chỉnh sửa sai sót về tên đường, số nhà, phường xã.',
        'Đồng bộ thông tin thương hiệu (NAP) trên bản đồ Google Maps, Apple Maps, Facebook và các danh bạ địa phương.',
        'Thiết kế và in ấn bảng QR Code để bàn mica cao cấp: Khách hàng quét mã là mở ngay biểu mẫu đánh giá 5 sao, kèm gợi ý từ khóa dịch vụ tăng tín hiệu đề xuất.'
      ],
      deliverables: [
        'Quyền Chủ sở hữu duy nhất (Primary Owner) Google Business Profile trên Gmail chính chủ của bạn.',
        'Bảng mã QR Code Mica để bàn chống trầy xước chuyên nghiệp dùng tại quầy thanh toán/đón khách.',
        'Hồ sơ Audit định danh số (Local NAP Entity Checklist) đồng bộ 100% trên không gian mạng.',
        'Tài liệu hướng dẫn nhân viên xin review tự nhiên, không gây phản cảm cho khách.'
      ],
      practicalAdvice:
        'Đừng vội chạy quảng cáo khi Google Maps chưa chuẩn. Một địa điểm xác minh chính chủ có 20-30 đánh giá 5 sao sẽ giúp tăng 300% tỷ lệ khách bấm gọi điện khi họ nhìn thấy bạn trên bản đồ.',
      nextStepBridge: 'Sau khi có địa danh chính chủ vững vàng, bước tiếp theo là xây dựng Sales Hub để hứng trọn traffic.'
    },
    {
      id: 2,
      phaseNumber: '02',
      title: 'Xây Dựng Sales Hub & Khung Dữ Liệu AI',
      shortTitle: 'Sales Hub & Dữ Liệu AI',
      subtitle: 'Website siêu tốc < 0.8s, Schema LocalBusiness & tệp llms.txt cho AI',
      tag: 'Giai Đoạn Tài Sản Số',
      badgeColor: '#0284c7',
      badgeBg: '#e0f2fe',
      icon: Globe,
      duration: '5 – 7 ngày làm việc',
      coreGoal:
        'Sở hữu tài sản số độc lập (không phụ thuộc thuật toán mạng xã hội), tải trang tức thì dưới 0.8 giây trên mạng di động 4G, cấu trúc chuẩn dữ liệu có cấu trúc để các công cụ AI (ChatGPT, Gemini, Perplexity) hiểu sâu và trích dẫn thương hiệu của bạn.',
      ktvTasks: [
        'Lập trình giao diện Web / Sales Hub chuyên biệt cho doanh nghiệp địa phương trên hạ tầng Cloudflare Edge CDN toàn cầu, cam kết tốc độ tải dưới 0.8s.',
        'Tối ưu trải nghiệm bấm gọi điện thoại và nhắn tin Zalo chỉ với 1 chạm (Mobile-First Thumb Friendly).',
        'Khai báo Schema JSON-LD LocalBusiness chuẩn W3C: định vị tọa độ, giờ mở cửa, menu dịch vụ, dải giá, khu vực phục vụ (areaServed).',
        'Khởi tạo và cấu hình tệp `llms.txt` và `robots.txt` chuyên dụng, cho phép AI bots (GPTBot, ClaudeBot, Google-Extended) thu thập dữ liệu uy tín của cơ sở.',
        'Cài đặt chứng chỉ bảo mật SSL/HTTPS, thiết lập tường lửa Cloudflare ngăn chặn spam form và tấn công bot độc hại.'
      ],
      deliverables: [
        'Website Sales Hub hoàn thiện, độc lập 100%, bảo hành kỹ thuật 5 năm.',
        'Báo cáo Google PageSpeed Insights đạt 90 – 100 điểm xanh lá trên thiết bị di động.',
        'Đoạn mã Schema LocalBusiness đã vượt qua công cụ Google Rich Results Test không cảnh báo lỗi.',
        'Tệp `llms.txt` trực tiếp tại root domain sẵn sàng cho các mô hình ngôn ngữ lớn đọc dữ liệu.',
        'Toàn bộ mã nguồn, tài khoản quản trị Cloudflare và tên miền bàn giao chính chủ 100%.'
      ],
      practicalAdvice:
        'Khách hàng địa phương lướt web trên điện thoại trong lúc di chuyển hoặc cần gấp. Nếu web load quá 2 giây, hơn 53% khách sẽ thoát sang đối thủ ngay lập tức. Tốc độ < 0.8s là lợi thế cạnh tranh sống còn.',
      nextStepBridge: 'Khi Sales Hub đã sẵn sàng chuyển đổi, ta chuyển sang phủ từ khóa để gom trọn nhu cầu tìm kiếm.'
    },
    {
      id: 3,
      phaseNumber: '03',
      title: 'Phủ Từ Khóa Nhu Cầu Địa Phương',
      shortTitle: 'Phủ Từ Khóa & AI Overviews',
      subtitle: 'Chiếm lĩnh cụm từ "gần đây", quận/huyện, khẩn cấp trên Google & AI Search',
      tag: 'Giai Đoạn Đón Đầu Nhu Cầu',
      badgeColor: '#7c3aed',
      badgeBg: '#f3e8ff',
      icon: Search,
      duration: '15 – 30 ngày triển khai',
      coreGoal:
        'Chiếm lĩnh trang 1 Google và khung bản đồ Top 3 Local Pack cho toàn bộ từ khóa có ý định mua hàng cao trong bán kính hoạt động, đồng thời xuất hiện nổi bật trong các tóm tắt Google AI Overviews.',
      ktvTasks: [
        'Nghiên cứu ma trận 50 - 150 từ khóa tìm kiếm thực tế của người dân địa phương (dịch vụ + quận/huyện/phường, từ khóa "gần đây", "khẩn cấp", "tận nơi", "24/7").',
        'Viết và tối ưu Onpage ngữ nghĩa địa phương (Local Semantic Content): thẻ tiêu đề, mô tả, thẻ định dạng H1-H3, ảnh chụp thật đính kèm tọa độ Exif Geo-tag.',
        'Xây dựng các trang dịch vụ cụ thể cho từng khu vực địa lý lân cận để mở rộng phạm vi hiển thị (Geo-targeting Pages).',
        'Tối ưu chuẩn trả lời trực tiếp AEO (Answer Engine Optimization): bảng giá minh bạch, bảng đối chiếu, FAQ ngắn gọn khớp đúng thắc mắc khách hay hỏi AI.',
        'Đăng tải bài cập nhật Google Updates (GBP Posts) hàng tuần theo lịch trình kỹ thuật, tăng điểm tương tác với thuật toán Maps.'
      ],
      deliverables: [
        'Bảng ma trận từ khóa nhu cầu địa phương phân loại theo mức độ ưu tiên và khối lượng tìm kiếm.',
        'Bộ trang đích dịch vụ chuẩn SEO & AEO được Google Index và xếp hạng.',
        'Báo cáo đo lường thứ hạng từ khóa Local Pack Top 3 và Organic Search hàng tháng.',
        'Kế hoạch bài viết cập nhật nội dung duy trì đà tăng trưởng tín hiệu địa phương.'
      ],
      practicalAdvice:
        'Đừng cạnh tranh các từ khóa chung chung toàn quốc. Doanh nghiệp địa phương thắng nhờ tập trung vào các từ khóa mang tính hành động cao: "sửa máy giặt tại nhà quận Cẩm Lệ", "nha khoa uy tín gần đây", "thợ khóa mở cửa gấp".',
      nextStepBridge: 'Để có ngay khách hàng trong ngày mà không phải chờ SEO ngấm, bước thứ 4 là kích hoạt quảng cáo bán kính.'
    },
    {
      id: 4,
      phaseNumber: '04',
      title: 'Thu Hút Khách & Kéo Chuyển Đổi Thực',
      shortTitle: 'Kéo Khách & Đo Lường Thực',
      subtitle: 'Quảng cáo Google Search/Meta chuẩn bán kính 3-7km, đo từng cuộc gọi & Zalo',
      tag: 'Giai Đoạn Tăng Tốc Doanh Thu',
      badgeColor: '#d97706',
      badgeBg: '#fef3c7',
      icon: Zap,
      duration: '2 – 4 ngày setup & tối ưu 30 ngày',
      coreGoal:
        'Khai thác dòng khách hàng chủ động đang có nhu cầu ngay lập tức, quảng cáo tiếp cận đúng người trong phạm vi di chuyển, tối ưu chi phí từng cuộc gọi và triệt tiêu 100% tình trạng lãng phí ngân sách.',
      ktvTasks: [
        'Khởi tạo chiến dịch Google Search Ads hoặc Meta Ads trên tài khoản chính chủ của bạn (tự nạp tiền vào thẻ Visa riêng, LocalMate chỉ lấy phí dịch vụ kỹ thuật minh bạch, 0% phí chênh lệch).',
        'Khoanh vùng vị trí chính xác (Radius Geo-targeting) từ 3km đến 7km quanh cơ sở kinh doanh, không đốt tiền ra ngoài địa bàn phục vụ.',
        'Thêm danh sách 200+ từ khóa phủ định (Negative Keywords) để chặn click rác: "tìm việc", "học nghề", "miễn phí", "ở Hà Nội/Hồ Chí Minh", "phần mềm crack".',
        'Cài đặt hệ thống đo lường chuyển đổi chuẩn xác bằng Google Tag Manager (GTM) và GA4: ghi nhận sự kiện click gọi điện, click chat Zalo, submit form.',
        'Tối ưu mẫu quảng cáo với các tiện ích mở rộng: số điện thoại bấm gọi ngay, nút chỉ đường Google Maps, bảng giá khởi điểm rõ ràng.'
      ],
      deliverables: [
        'Chiến dịch quảng cáo hoạt động ổn định trên tài khoản của khách, bạn nắm toàn quyền chi tiêu.',
        'Bộ lọc từ khóa phủ định ngăn chặn click ảo và tiết kiệm từ 30% đến 50% ngân sách mỗi tháng.',
        'Bảng theo dõi số liệu thời gian thực (Real-time Analytics Dashboard) đo lường chi phí trên mỗi cuộc gọi/tin nhắn.',
        'Biên bản bàn giao và hướng dẫn đọc báo cáo hiệu quả chiến dịch hàng tuần.'
      ],
      practicalAdvice:
        'Chạy quảng cáo địa phương không cần ngân sách khổng lồ. Chỉ cần 50.000đ – 100.000đ/ngày nhưng ngắm đúng bán kính 5km vào khung giờ vàng, bạn đã có từ 3 đến 8 cuộc gọi của khách cần làm ngay.',
      nextStepBridge: 'Khách đổ về nhiều cần quy trình tiếp nhận trơn tru, không bỏ sót — đây là lúc bước 5 phát huy sức mạnh.'
    },
    {
      id: 5,
      phaseNumber: '05',
      title: 'Vận Hành Tự Động & Bảo Hành Hạ Tầng 5 Năm',
      shortTitle: 'Tự Động Hóa & Bảo Hành 5 Năm',
      subtitle: 'Đồng bộ đơn về Google Sheets, chuông báo Telegram tức thì, KTV đồng hành lâu dài',
      tag: 'Giai Đoạn Vận Hành Bền Vững',
      badgeColor: '#059669',
      badgeBg: '#ecfdf5',
      icon: ShieldCheck,
      duration: 'Bàn giao 2 ngày & đồng hành 5 năm',
      coreGoal:
        'Tự động hóa 100% khâu tiếp nhận thông tin khách hàng, báo chuông điện thoại trong vòng 3 giây khi có khách mới, loại bỏ hoàn toàn tình trạng mất đơn và cam kết bảo hành hạ tầng kỹ thuật xuyên suốt 5 năm.',
      ktvTasks: [
        'Lập trình Webhook kết nối Form đăng ký và Nút gọi trên Web/Landing Page thẳng vào Google Sheets cá nhân của bạn để lưu trữ data vĩnh viễn.',
        'Tích hợp Bot thông báo Telegram / Zalo tự động: ngay khi khách điền số điện thoại hoặc yêu cầu gọi lại, điện thoại của bạn reo chuông báo tin nhắn tức thì.',
        'Cấu hình hệ thống giám sát hoạt động máy chủ (Uptime Monitoring 24/7): nếu website gặp sự cố quá 60 giây, KTV LocalMate nhận cảnh báo và xử lý ngay.',
        'Đào tạo 1-1 cho chủ cơ sở hoặc nhân viên trực hotline cách xử lý data khách nhanh trong "5 phút vàng" để chốt đơn thành công.',
        'Phân công Kỹ thuật viên (KTV) chuyên trách đồng hành: định kỳ sao lưu dữ liệu, gia hạn chứng chỉ bảo mật SSL, cập nhật bảng giá và hình ảnh miễn phí trong 5 năm.'
      ],
      deliverables: [
        'Bảng Google Sheets quản lý khách hàng (Mini CRM) tự động ghi nhận tên, số điện thoại, nhu cầu và nguồn quảng cáo.',
        'Kênh Telegram nhận thông báo tức thì (thời gian trễ < 3 giây).',
        'Chứng thư bảo hành hạ tầng kỹ thuật 5 năm có pháp nhân Công ty TNHH LocalMate bảo chứng.',
        'Kênh Zalo/Hotline hỗ trợ kỹ thuật trực tiếp 1-1 với KTV phụ trách, không qua tổng đài chờ đợi.'
      ],
      practicalAdvice:
        'Gọi lại cho khách trong vòng 5 phút đầu tiên tăng tỷ lệ chốt đơn lên gấp 4 lần so với sau 30 phút. Tự động hóa thông báo giúp bạn không bao giờ bỏ rơi khách hàng tiềm năng kể cả khi đang bận tiếp khách tại quầy.',
      nextStepBridge: 'Doanh nghiệp của bạn đã có một cỗ máy tự sinh khách bền vững, khép kín và an tâm phát triển dài hạn.'
    }
  ];

  // Chẩn đoán hiện trạng doanh nghiệp
  const diagnosticItems = [
    {
      id: 1,
      question: 'Cơ sở của tôi chưa có trên Google Maps hoặc chưa xác minh chính chủ, thông tin lộn xộn.',
      recommendPhase: 'Giai Đoạn 01: Chuẩn Hóa Định Danh & Google Maps',
      recommendedIndex: 0,
      description: 'Bạn cần định danh chuẩn chỉ trước tiên. Có vị trí chính chủ thì khách tìm quanh tiệm mới tin tưởng ghé qua.'
    },
    {
      id: 2,
      question: 'Đã có Google Maps nhưng chưa có website riêng, hoặc web cũ chạy quá chậm, không có cấu trúc AI.',
      recommendPhase: 'Giai Đoạn 02: Xây Dựng Sales Hub & Khung Dữ Liệu AI',
      recommendedIndex: 1,
      description: 'Bạn đang bỏ phí lượt khách tìm kiếm chi tiết. Cần xây dựng Sales Hub siêu tốc < 0.8s để giữ chân và chốt đơn.'
    },
    {
      id: 3,
      question: 'Đã có website nhưng gõ từ khóa dịch vụ quanh quận/huyện không thấy xuất hiện trên Google.',
      recommendPhase: 'Giai Đoạn 03: Phủ Từ Khóa Nhu Cầu Địa Phương',
      recommendedIndex: 2,
      description: 'Bạn đang bị các đối thủ khác chiếm mất thị phần. Cần phủ chùm từ khóa địa phương để đón đầu nhu cầu thực.'
    },
    {
      id: 4,
      question: 'Tôi cần có khách ngay trong tuần này nhưng sợ chạy quảng cáo tốn tiền, bị click ảo vô bổ.',
      recommendPhase: 'Giai Đoạn 04: Thu Hút Khách & Kéo Chuyển Đổi Thực',
      recommendedIndex: 3,
      description: 'Chạy ads chuẩn bán kính 3-7km với danh sách 200+ từ khóa phủ định và đo lường từng cuộc gọi là chìa khóa.'
    },
    {
      id: 5,
      question: 'Khách nhắn tin/để lại số điện thoại nhưng tôi hay quên, check chậm làm mất khách, web hay lỗi vặt.',
      recommendPhase: 'Giai Đoạn 05: Vận Hành Tự Động & Bảo Hành 5 Năm',
      recommendedIndex: 4,
      description: 'Tự động hóa đơn về Google Sheets và chuông báo Telegram tức thì sẽ giải phóng bạn và tăng gấp đôi tỷ lệ chốt.'
    }
  ];

  // FAQ
  const faqs = [
    {
      q: 'Doanh nghiệp của tôi có bắt buộc phải triển khai lần lượt từ Giai đoạn 1 đến 5 không?',
      a: 'Không bắt buộc. Lộ trình 5 giai đoạn là khung chuẩn mực để một cơ sở từ con số 0 trở thành một doanh nghiệp số tự vận hành bền vững. Nếu cơ sở của bạn đã có sẵn Google Maps chính chủ và website chuẩn tốc độ, LocalMate sẽ kiểm tra nghiệm thu hạ tầng đó và bạn có thể bắt đầu ngay từ Giai đoạn 3 (Phủ từ khóa) hoặc Giai đoạn 4 (Chạy kéo khách tức thì).'
    },
    {
      q: 'Tại sao LocalMate cam kết 100% tài khoản Google Maps và Ads thuộc sở hữu chính chủ của tôi?',
      a: 'Nhiều đơn vị dịch vụ thường tạo tài khoản trên Gmail của họ để "trói" khách hàng, khi dừng hợp đồng thì khách mất sạch dữ liệu và vị trí Maps. Triết lý của LocalMate là tôn trọng tài sản số của bạn: mọi tài khoản (Google Business Profile, Google Ads, Cloudflare, Domain) đều được thiết lập trên chính email của bạn, bạn nắm toàn quyền Admin cao nhất. KTV LocalMate chỉ đóng vai trò hỗ trợ kỹ thuật.'
    },
    {
      q: 'Chính sách bảo hành hạ tầng kỹ thuật 5 năm bao gồm những gì?',
      a: 'Bảo hành 5 năm của LocalMate là cam kết bằng văn bản có dấu pháp nhân Công ty TNHH LocalMate. Bao gồm: Đảm bảo website hoạt động liên tục 24/7 trên hạ tầng Cloudflare, tự động gia hạn chứng chỉ bảo mật SSL, sửa chữa miễn phí các lỗi kỹ thuật phát sinh, hỗ trợ cập nhật thông tin liên hệ, bảng giá và hình ảnh định kỳ theo yêu cầu.'
    },
    {
      q: 'Thời gian từ lúc bắt đầu làm đến khi có khách hàng thực tế mất bao lâu?',
      a: 'Nếu bạn cần khách ngay lập tức, khi triển khai Giai đoạn 1 + 2 + 4, bạn có thể nhận được những cuộc gọi và tin nhắn Zalo đầu tiên chỉ sau 3 – 5 ngày làm việc nhờ chiến dịch quảng cáo chuẩn bán kính. Với luồng tự nhiên từ SEO Maps và Google Search (Giai đoạn 3), lượng khách sẽ tăng trưởng đều đặn và duy trì miễn phí sau 3 – 6 tuần.'
    },
    {
      q: 'Chi phí triển khai từng giai đoạn như thế nào? Có phát sinh thêm không?',
      a: 'LocalMate áp dụng chính sách báo giá trọn gói minh bạch trước khi làm. Mỗi hạng mục công việc đều có biên bản bàn giao và nghiệm thu rõ ràng. Bạn chỉ thanh toán khi sản phẩm hoàn thành đúng cam kết kỹ thuật. Hoàn toàn không có chi phí ẩn hay phí duy trì vô lý hàng tháng.'
    }
  ];

  const currentPhase = phases[activePhaseIndex];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: 'var(--color-text-main)', minHeight: '100vh', scrollbarGutter: 'stable' }}>
      <SEOHead
        title="Lộ Trình Phát Triển Số 5 Giai Đoạn Cho Doanh Nghiệp Địa Phương | LocalMate"
        description="Chiến lược phát triển số 5 giai đoạn thực chiến từ số 0 đến tự vận hành sinh khách bền vững: Chuẩn hóa Google Maps, Sales Hub <0.8s, Phủ từ khóa địa phương, Kéo khách bán kính và Bảo hành 5 năm."
        canonicalPath="/chien-luoc-5-giai-doan"
      />

      {/* 1. HERO SECTION */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)', paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbs} />

          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                border: '1px solid var(--color-primary-border)'
              }}
            >
              <Sparkles size={16} />
              <span>Khung Chiến Lược Thực Chiến Cho Doanh Nghiệp Địa Phương 2026</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                textWrap: 'pretty'
              }}
            >
              Lộ Trình Phát Triển Số 5 Giai Đoạn Dành Cho Doanh Nghiệp Địa Phương
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: 'var(--color-text-body)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                textWrap: 'pretty'
              }}
            >
              Đưa cơ sở kinh doanh từ <strong>con số 0</strong> bước lên môi trường số bài bản, sở hữu tài sản độc lập, phủ sóng Google Maps, kéo khách hàng thực trong bán kính và <strong>tự động hóa vận hành với cam kết bảo hành kỹ thuật 5 năm</strong>.
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
                backgroundColor: '#f8fafc',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>5 Giai Đoạn</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Lộ trình khép kín rõ ràng</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)' }}>&lt; 0.8 Giây</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Tốc độ tải Sales Hub</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>100% Chính Chủ</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Khách nắm toàn bộ tài khoản</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d97706' }}>5 Năm Cam Kết</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Bảo hành hạ tầng kỹ thuật</div>
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA('Khảo sát lộ trình 5 giai đoạn 0đ')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  padding: '0.85rem 1.85rem',
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
                }}
              >
                <span>Đăng Ký Khảo Sát Lộ Trình 0đ</span>
                <ArrowRight size={18} />
              </Button>

              <a
                href={`tel:${CONTACT_INFO.hotline.replace(/\./g, '')}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  color: 'var(--color-navy)',
                  border: '1px solid var(--color-border-strong)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                <PhoneCall size={18} style={{ color: 'var(--color-primary)' }} />
                <span>Hotline: {CONTACT_INFO.hotline}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. BẢNG SO SÁNH: CÁCH LÀM CŨ MANH MÚN VS LỘ TRÌNH 5 GIAI ĐOẠN LOCALMATE */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.15rem)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              Tại Sao 80% Doanh Nghiệp Địa Phương Làm Số Thất Bại?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)' }}>
              Sự khác biệt giữa cách làm manh mún, thử sai tốn kém và một lộ trình chiến lược có quy chuẩn kỹ thuật đồng hành lâu dài.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Cột Cách Cũ */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #fed7aa',
                padding: '2rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c2410c', fontWeight: 700, marginBottom: '1rem' }}>
                <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ea580c' }} />
                <span>CÁCH LÀM TỰ PHÁT & MANH MÚN TRƯỚC ĐÂY</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#ef4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
                  <span><strong>Tạo Maps tự phát:</strong> Không xác minh chính chủ, dễ bị đối thủ cướp quyền hoặc Google vô hiệu hóa bất ngờ.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#ef4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
                  <span><strong>Thuê web giá rẻ rỗng tuếch:</strong> Mã nguồn nặng nề, tải chậm 4–5 giây, không ai tìm thấy, không khai báo Schema AI.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#ef4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
                  <span><strong>Chạy quảng cáo bị kê giá:</strong> Agency giữ tài khoản, không minh bạch sao kê, dính hàng loạt click ảo của thợ cạnh tranh.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#ef4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
                  <span><strong>Khách điền form bị thất lạc:</strong> Không có chuông báo tự động, vài tiếng sau mới check thì khách đã gọi chỗ khác.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#ef4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
                  <span><strong>Bàn giao xong là "đem con bỏ chợ":</strong> Web lỗi không ai sửa, domain hết hạn bị cướp, tốn tiền làm lại từ đầu.</span>
                </li>
              </ul>
            </div>

            {/* Cột Lộ Trình LocalMate */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '2px solid var(--color-primary)',
                padding: '2rem',
                boxShadow: '0 6px 20px rgba(13, 118, 71, 0.08)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Chuẩn Mực Thực Chiến
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 800, marginBottom: '1rem' }}>
                <CheckCircle2 size={20} />
                <span>LỘ TRÌNH 5 GIAI ĐOẠN ĐỒNG BỘ LOCALMATE</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>G1. Chuẩn hóa Maps chính chủ:</strong> Xác minh vào Gmail của bạn, dọn sạch Maps rác, bảng QR để bàn đón review 5 sao liên tục.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>G2. Sales Hub & Khung Dữ Liệu AI:</strong> Tải siêu tốc &lt; 0.8s Cloudflare, tích hợp Schema LocalBusiness và tệp llms.txt.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>G3. Phủ từ khóa địa phương:</strong> Đón đầu cụm từ "gần đây", quận/huyện, khẩn cấp và hiển thị trên Google AI Overviews.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>G4. Kéo khách bán kính 3-7km:</strong> Chạy ads 0% kê giá, lọc 200+ từ khóa rác, đo chuẩn từng cuộc gọi & tin nhắn Zalo.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>G5. Vận hành tự động & Bảo hành 5 năm:</strong> Lead đổ về Google Sheets + chuông Telegram 3s, KTV đồng hành lâu dài.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CHI TIẾT 5 GIAI ĐOẠN — INTERACTIVE TIMELINE & TAB VIEW */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
            <span
              style={{
                color: 'var(--color-primary)',
                fontWeight: 800,
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Quy Trình Chi Tiết Từng Bước
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.35rem)', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Khám Phá Chi Tiết 5 Giai Đoạn Phát Triển Số
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)' }}>
              Mỗi giai đoạn giải quyết một bài toán cụ thể, có đầu việc KTV thực thi rõ ràng, sản phẩm bàn giao sờ thấy được và thời gian dự kiến minh bạch.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
              marginBottom: '2.5rem',
              scrollbarWidth: 'thin'
            }}
          >
            {phases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const IconComp = phase.icon;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  style={{
                    flex: '1 0 200px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    backgroundColor: isActive ? 'var(--color-primary-soft)' : '#f8fafc',
                    border: isActive ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 12px rgba(13, 118, 71, 0.12)' : 'none'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'var(--color-primary)' : '#e2e8f0',
                      color: isActive ? '#ffffff' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? 'var(--color-primary)' : '#64748b' }}>
                      GIAI ĐOẠN {phase.phaseNumber}
                    </div>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--color-navy)' : 'var(--color-text-main)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '160px'
                      }}
                    >
                      {phase.shortTitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Card Detail */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden'
            }}
          >
            {/* Header Thẻ Giai Đoạn */}
            <div
              style={{
                padding: '2rem 2.5rem',
                borderBottom: '1px solid var(--color-border)',
                backgroundColor: '#fbfcfb',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      backgroundColor: currentPhase.badgeBg,
                      color: currentPhase.badgeColor,
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Giai Đoạn {currentPhase.phaseNumber} • {currentPhase.tag}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                    <Clock size={15} />
                    <span>Thời gian: {currentPhase.duration}</span>
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                  {currentPhase.title}
                </h3>
                <p style={{ margin: '0.4rem 0 0', color: 'var(--color-text-body)', fontSize: '1.05rem', fontWeight: 500 }}>
                  {currentPhase.subtitle}
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => handleCTA(`Đăng ký tư vấn Giai đoạn ${currentPhase.phaseNumber}: ${currentPhase.shortTitle}`)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 700,
                  boxShadow: '0 3px 10px rgba(13, 118, 71, 0.2)'
                }}
              >
                <span>Nhận Tư Vấn Giai Đoạn Này</span>
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Nội Dung Thân Thẻ Giai Đoạn */}
            <div style={{ padding: '2.5rem' }}>
              {/* Mục tiêu cốt lõi */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  borderLeft: `4px solid ${currentPhase.badgeColor}`,
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '2.5rem'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: currentPhase.badgeColor, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  🎯 Mục Tiêu Cốt Lõi
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--color-navy)', lineHeight: 1.6, fontWeight: 500 }}>
                  {currentPhase.coreGoal}
                </div>
              </div>

              {/* Grid 2 Cột: Công Việc KTV Làm & Sản Phẩm Bàn Giao */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2.5rem'
                }}
              >
                {/* Cột 1: Công việc KTV làm */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    padding: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy)' }}>
                      <Cpu size={18} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                      Kỹ Thuật Viên Sẽ Thực Hiện Gì?
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {currentPhase.ktvTasks.map((task, tIdx) => (
                      <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.55 }}>
                        <span
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-primary-soft)',
                            color: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          {tIdx + 1}
                        </span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cột 2: Sản phẩm bàn giao (Deliverables) */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    padding: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                      Sản Phẩm Bàn Giao Thật (Deliverables)
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {currentPhase.deliverables.map((item, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.55 }}>
                        <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontWeight: 600 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lời khuyên thực chiến & Cầu nối giai đoạn */}
              <div
                style={{
                  backgroundColor: '#fefce8',
                  border: '1px solid #fef08a',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ color: '#ca8a04', flexShrink: 0, marginTop: '2px' }}>
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#854d0e', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                    💡 LỜI KHUYÊN THỰC CHIẾN TỪ KỸ THUẬT VIÊN TRƯỞNG
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#713f12', lineHeight: 1.55 }}>
                    {currentPhase.practicalAdvice}
                  </div>
                </div>
              </div>

              {/* Footer điều hướng giai đoạn */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border)'
                }}
              >
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  <span>Kế tiếp: </span>
                  <strong style={{ color: 'var(--color-navy)' }}>{currentPhase.nextStepBridge}</strong>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    disabled={activePhaseIndex === 0}
                    onClick={() => setActivePhaseIndex(prev => Math.max(0, prev - 1))}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border)',
                      backgroundColor: activePhaseIndex === 0 ? '#f1f5f9' : '#ffffff',
                      color: activePhaseIndex === 0 ? '#94a3b8' : 'var(--color-navy)',
                      cursor: activePhaseIndex === 0 ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    ← Giai đoạn trước
                  </button>

                  <button
                    disabled={activePhaseIndex === phases.length - 1}
                    onClick={() => setActivePhaseIndex(prev => Math.min(phases.length - 1, prev + 1))}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary)',
                      backgroundColor: activePhaseIndex === phases.length - 1 ? '#f1f5f9' : 'var(--color-primary)',
                      color: activePhaseIndex === phases.length - 1 ? '#94a3b8' : '#ffffff',
                      cursor: activePhaseIndex === phases.length - 1 ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    Giai đoạn kế tiếp →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CÔNG CỤ TỰ CHẨN ĐOÁN: BẠN ĐANG Ở GIAI ĐOẠN NÀO? */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Tự Đánh Giá Nhanh Trong 30 Giây
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              Cơ Sở Của Bạn Nên Bắt Đầu Từ Giai Đoạn Nào?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)' }}>
              Hãy chọn tình trạng thực tế gần nhất với bạn hiện tại để nhận gợi ý điểm xuất phát tối ưu nhất, không lãng phí ngân sách.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {diagnosticItems.map((item) => {
              const isSelected = selectedDiagnostic === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedDiagnostic(item.id);
                    setActivePhaseIndex(item.recommendedIndex);
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 15px rgba(13, 118, 71, 0.12)' : '0 1px 3px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: isSelected ? '7px solid var(--color-primary)' : '2px solid #cbd5e1',
                          backgroundColor: '#ffffff',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                          {item.question}
                        </div>
                        {isSelected && (
                          <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--color-border)' }}>
                            <div style={{ display: 'inline-block', backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 800, padding: '0.25rem 0.6rem', borderRadius: '6px', marginBottom: '0.4rem' }}>
                              Đề Xuất Phù Hợp: {item.recommendPhase}
                            </div>
                            <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      style={{
                        backgroundColor: isSelected ? 'var(--color-primary)' : '#f1f5f9',
                        color: isSelected ? '#ffffff' : '#64748b',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {isSelected ? 'Đang chọn' : 'Xem đề xuất'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. MA TRẬN TỔNG HỢP 5 GIAI ĐOẠN */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Bảng Tổng Hợp So Sánh
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              Ma Trận Triển Khai 5 Giai Đoạn
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)' }}>
              Đối chiếu nhanh các chỉ số cốt lõi, sản phẩm bàn giao và giá trị nhận được ở từng mốc phát triển.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '760px', backgroundColor: '#ffffff' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--color-navy)', fontWeight: 800, fontSize: '0.9rem' }}>Giai Đoạn</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--color-navy)', fontWeight: 800, fontSize: '0.9rem' }}>Mục Tiêu Trọng Tâm</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--color-navy)', fontWeight: 800, fontSize: '0.9rem' }}>Thời Gian</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--color-navy)', fontWeight: 800, fontSize: '0.9rem' }}>Sản Phẩm Cốt Lõi</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--color-navy)', fontWeight: 800, fontSize: '0.9rem' }}>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((p, idx) => (
                  <tr
                    key={p.id}
                    style={{
                      borderBottom: idx === phases.length - 1 ? 'none' : '1px solid var(--color-border)',
                      backgroundColor: activePhaseIndex === idx ? '#fbfcfb' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '1.15rem 1.25rem', verticalAlign: 'top' }}>
                      <div style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '0.85rem' }}>GIAI ĐOẠN {p.phaseNumber}</div>
                      <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem' }}>{p.shortTitle}</div>
                    </td>
                    <td style={{ padding: '1.15rem 1.25rem', color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.5, verticalAlign: 'top' }}>
                      {p.subtitle}
                    </td>
                    <td style={{ padding: '1.15rem 1.25rem', color: '#475569', fontSize: '0.875rem', fontWeight: 600, verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                      {p.duration}
                    </td>
                    <td style={{ padding: '1.15rem 1.25rem', color: 'var(--color-text-main)', fontSize: '0.875rem', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                        <Check size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                        <span>{p.deliverables[0]}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.15rem 1.25rem', verticalAlign: 'top' }}>
                      <button
                        onClick={() => {
                          setActivePhaseIndex(idx);
                          window.scrollTo({ top: 600, behavior: 'smooth' });
                        }}
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--color-primary)',
                          border: '1px solid var(--color-primary)',
                          borderRadius: '6px',
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Xem chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 6. CAM KẾT VÀNG & TRIẾT LÝ HỢP TÁC */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Nguyên Tắc Làm Nghề
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              4 Cam Kết Bảo Vệ Quyền Lợi Khách Hàng
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)' }}>
              LocalMate lấy sự trung thực và minh bạch làm nền tảng cốt lõi trong mọi hợp tác kỹ thuật.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                100% Thuộc Về Bạn
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.55, margin: 0 }}>
                Mọi tài khoản (Google Business Profile, Google Ads, Domain, Source code) đều đứng tên chính chủ của bạn. Bạn nắm chìa khóa gốc, không ai có thể can thiệp hay đòi lại.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', marginBottom: '1rem' }}>
                <BarChart3 size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                0% Kê Giá Quảng Cáo
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.55, margin: 0 }}>
                Bạn tự gắn thẻ thanh toán trực tiếp cho Google / Meta. Tiền chạy trừ thẳng vào sao kê ngân hàng của bạn, LocalMate chỉ thu phí kỹ thuật minh bạch đúng thỏa thuận.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', marginBottom: '1rem' }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Nghiệm Thu Mới Thanh Toán
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.55, margin: 0 }}>
                Bạn được xem trước bản Demo thực tế, kiểm tra đúng tốc độ, đúng thông tin bàn giao mới cần thanh toán. Không thu tiền khi chưa đạt đúng cam kết kỹ thuật.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', marginBottom: '1rem' }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Bảo Hành Kỹ Thuật 5 Năm
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.55, margin: 0 }}>
                Cam kết bằng văn bản có dấu đỏ pháp nhân Công ty TNHH LocalMate. KTV trực tiếp hỗ trợ 1-1 qua Zalo, không chuyển giao qua tổng đài vô cảm.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FAQ — CÂU HỎI THƯỜNG GẶP */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
        <Container size="md">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Giải Đáp Thắc Mắc
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              Câu Hỏi Thường Gặp Về Lộ Trình 5 Giai Đoạn
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      padding: '1.15rem 1.25rem',
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
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#64748b', flexShrink: 0 }} />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.25rem 1.25rem', fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.6, borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. CTA CUỐI TRANG — ĐẶT LỊCH TƯ VẤN 1-1 */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
        <Container size="md">
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '2px solid var(--color-primary)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              textAlign: 'center',
              boxShadow: '0 10px 35px rgba(13, 118, 71, 0.08)'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Target size={28} />
            </div>

            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              Bắt Đầu Lộ Trình Phát Triển Số Của Bạn Ngay Hôm Nay
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.65, maxWidth: '640px', margin: '0 auto 2rem' }}>
              Hãy để Kỹ thuật viên LocalMate khảo sát hiện trạng vị trí và tài sản số hiện tại của bạn hoàn toàn <strong>miễn phí 0đ</strong>. Chúng tôi sẽ vạch rõ điểm nghẽn và đưa ra kế hoạch triển khai phù hợp nhất với ngân sách của bạn.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA('Đăng ký tư vấn 1-1 Lộ trình 5 giai đoạn')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  padding: '0.9rem 2rem',
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.28)'
                }}
              >
                <span>Đăng Ký Tư Vấn 1-1 Với KTV Trưởng</span>
                <ArrowRight size={18} />
              </Button>

              <a
                href={`https://zalo.me/${CONTACT_INFO.hotline.replace(/\./g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 1.6rem',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  color: 'var(--color-navy)',
                  border: '1px solid var(--color-border-strong)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                <MessageSquare size={18} style={{ color: '#0284c7' }} />
                <span>Nhắn Zalo Kỹ Thuật Viên</span>
              </a>
            </div>

            <div style={{ marginTop: '1.75rem', fontSize: '0.85rem', color: '#64748b' }}>
              <span>Địa chỉ văn phòng: {CONTACT_INFO.address} • Hotline: {CONTACT_INFO.hotline}</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default StrategyPhasesPage;
