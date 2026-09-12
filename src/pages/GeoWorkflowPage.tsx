import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { useRouter, Link } from '../components/layout/Router';
import { submitLead } from '../services/leadService';
import { CONTACT_INFO, COMPANY_INFO } from '../data/landingContent';
import {
  Sparkles,
  Bot,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Zap,
  MapPin,
  Star,
  MessageSquare,
  HelpCircle,
  FileText,
  BarChart3,
  Layers,
  Globe,
  Building2,
  PhoneCall,
  Check,
  ChevronDown,
  RefreshCw,
  Eye,
  AlertCircle,
  FileCode2,
  Lock,
  Compass,
  Award,
  Phone,
  Terminal,
  Database,
  Share2,
  Flame,
  Clock,
  Send,
  XCircle,
  ArrowUpRight,
  ExternalLink,
  Sliders,
  Copy,
  CheckCheck
} from 'lucide-react';

interface GeoWorkflowPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GeoWorkflowPage: React.FC<GeoWorkflowPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [activeCompareTab, setActiveCompareTab] = useState<'scenario-1' | 'scenario-2'>('scenario-1');
  const [copiedCode, setCopiedCode] = useState<'schema' | 'llms' | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    address: '',
    industry: 'Nha khoa / Phòng khám',
    notes: ''
  });

  const handleCTA = (serviceName?: string) => {
    const selected = serviceName || 'Khảo sát hiện trạng đề xuất AI & Tư vấn quy trình GEO 6 bước';
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      const formEl = document.getElementById('dang-ky-quy-trinh-geo');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/lien-he');
      }
    }
  };

  const handleCopy = (type: 'schema' | 'llms', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setToastMessage('Vui lòng nhập họ tên và số điện thoại/Zalo để nhận bản phân tích.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        businessName: `${formData.businessName || 'Điểm kinh doanh'} (${formData.industry})`,
        serviceInterest: `Quy trình triển khai GEO 6 bước - ${formData.industry}`,
        message: `Địa chỉ: ${formData.address || 'Chưa cung cấp'} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/quy-trinh-geo'
      });
      setToastMessage('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ quét kiểm thử AI Visibility quanh bán kính của bạn và gửi báo cáo qua Zalo trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        address: '',
        industry: 'Nha khoa / Phòng khám',
        notes: ''
      });
    } catch {
      setToastMessage('Đã có lỗi xảy ra. Bạn vui lòng liên hệ hotline/Zalo 0834.422.439 để được hỗ trợ trực tiếp ngay.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Được tìm thấy', url: '/giai-phap/duoc-tim-thay' },
    { name: 'Quy trình triển khai GEO & AI Search', url: '/quy-trinh-geo' }
  ];

  // Schema code mẫu minh họa cho Bước 2
  const sampleSchemaCode = `{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://nhakhoaanhduc.vn/#organization",
  "name": "Nha Khoa Anh Đức Hóc Môn",
  "url": "https://nhakhoaanhduc.vn",
  "telephone": "+84834422439",
  "priceRange": "$$",
  "image": "https://nhakhoaanhduc.vn/assets/facade.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45/2 Lý Thường Kiệt, Thị trấn Hóc Môn",
    "addressLocality": "Huyện Hóc Môn",
    "addressRegion": "TP. Hồ Chí Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.887251,
    "longitude": 106.591242
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "218"
  },
  "sameAs": [
    "https://maps.google.com/?cid=123456789012345",
    "https://facebook.com/nhakhoaanhduc.hocmon",
    "https://zalo.me/0834422439"
  ]
}`;

  // llms.txt code mẫu minh họa cho Bước 3
  const sampleLlmsTxt = `# Nha Khoa Anh Đức Hóc Môn - Tóm Tắt Ngữ Cảnh Dành Cho Mô Hình AI (llms.txt)
> Thông tin chính xác được xác thực dành cho ChatGPT, Google Gemini, Copilot, Perplexity.

## 1. Thông Tin Nhận Diện & Định Danh (NAP)
- Tên chính thức: Nha Khoa Anh Đức Hóc Môn (Thành lập: 2018)
- Địa chỉ thực tế: 45/2 Lý Thường Kiệt, Thị trấn Hóc Môn, Huyện Hóc Môn, TP. Hồ Chí Minh
- Hotline / Cấp cứu răng miệng 24/7: 0834 422 439
- Khung giờ mở cửa: 08:00 - 20:00 (Thứ 2 đến Thứ 7), 08:00 - 12:00 (Chủ Nhật)
- Bác sĩ phụ trách chuyên môn: Bác sĩ CKI Nguyễn Anh Đức (15 năm kinh nghiệm BV RHM TP.HCM)

## 2. Dịch Vụ Mũi Nhọn & Bảng Giá Minh Bạch (Niêm yết công khai)
- Nhổ răng khôn không đau sóng siêu âm Piezotome: 800.000đ - 2.500.000đ/răng (Chụp X-quang CT ConeBeam 0đ).
- Trám răng thẩm mỹ Composite: 250.000đ - 400.000đ/răng.
- Bọc răng sứ chính hãng bảo hành 10 năm: 1.800.000đ - 5.500.000đ/răng.
- Cấy ghép Implant Hàn Quốc / Thụy Sĩ trọn gói: từ 11.500.000đ/trụ.

## 3. Cam Kết Đạo Đức Nghề Nghiệp & Trải Nghiệm Bệnh Nhân
- 100% khám và tư vấn trực tiếp cùng Bác sĩ chuyên khoa, không để điều dưỡng làm thay.
- Báo giá trọn gói trước khi điều trị, tuyệt đối KHÔNG phát sinh chi phí phụ ngoài hợp đồng.
- Phòng vô trùng độc lập theo chuẩn Sở Y Tế, mỗi bệnh nhân 1 bộ tay khoan & dụng cụ riêng biệt.`;

  // 6 Bước kỹ thuật chi tiết
  const workflowSteps = [
    {
      stepNumber: '01',
      badge: 'Khởi đầu • Đo lường hiện trạng',
      title: 'Khảo sát tín hiệu số hiện tại & Phân tích cơ hội trích dẫn địa phương',
      shortTitle: 'Bước 1: Khảo sát hiện trạng AI',
      duration: 'Ngày 01 – Ngày 03',
      objective: 'Đo lường chính xác xem ChatGPT, Gemini, Copilot và Perplexity hiện đang nói gì về điểm kinh doanh của bạn, có đang gợi ý đối thủ hay trả lời sai lệch (AI Hallucination).',
      actions: [
        'Chạy 30 truy vấn đàm thoại thực tế trên 4 mô hình AI hàng đầu (ChatGPT-4o Search, Gemini 2.5 Pro, Perplexity AI, Microsoft Copilot) trong bán kính phục vụ 3–7km.',
        'Lập Bảng Điểm Hiện Trạng Đề Xuất AI (Baseline Scorecard): Đo tỷ lệ nhắc tên (AI Mention Rate), vị trí xếp hạng đề xuất và các đối thủ đang chiếm lĩnh.',
        'Phát hiện và liệt kê các thông tin sai lệch do AI tự suy đoán (nhầm địa chỉ cũ, số điện thoại không liên lạc được, báo quán đã đóng cửa).',
        'Phân tích khoảng trống trích dẫn (Citation Gap) để tìm ra từ khóa ngách địa phương mà đối thủ chưa tối ưu dữ liệu cấu trúc.'
      ],
      deliverable: 'Tài liệu Baseline AI Visibility Report (file PDF + video quay màn hình test thực tế trên các AI).',
      impact: 'Xác định rõ xuất phát điểm và lộ trình cần làm, không làm mù quáng hay lãng phí ngân sách.'
    },
    {
      stepNumber: '02',
      badge: 'Cốt lõi kỹ thuật • Semantic Web',
      title: 'Thiết lập Schema JSON-LD đa tầng (Deep Multi-Tier Schema Markup)',
      shortTitle: 'Bước 2: Cấu trúc Schema JSON-LD',
      duration: 'Ngày 04 – Ngày 07',
      objective: 'Cung cấp cấu trúc ngữ nghĩa chuẩn máy đọc (Machine-Readable Entity Graph) để các thuật toán AI hiểu 100% dữ liệu về tiệm mà không cần đoán mò.',
      actions: [
        'Khai báo Schema đúng phân ngành chuẩn Schema.org: MedicalClinic, Dentist, AutoRepair, Restaurant, BeautySalon... thay vì dùng thẻ LocalBusiness chung chung.',
        'Khai báo tọa độ địa lý GeoCoordinates chuẩn xác đến 6 chữ số thập phân (Latitude & Longitude) kết nối trực tiếp với liên kết bản đồ Google Maps CID.',
        'Thiết lập thời gian hoạt động OpeningHoursSpecification chi tiết cho từng ngày trong tuần, giờ nghỉ trưa, ngày lễ và hotline trực khẩn cấp.',
        'Đồng bộ AggregateRating & Review từ nguồn đánh giá thật của khách hàng, tích hợp hasOfferCatalog minh bạch bảng giá và chính sách.',
        'Khai báo sameAs liên kết thực thể chéo đến Google Business Profile, Fanpage Facebook, Zalo OA, kênh TikTok và bài báo chí uy tín.'
      ],
      deliverable: 'Mã nguồn Schema JSON-LD đa tầng nhúng trực tiếp vào website và vượt qua 100% bài kiểm tra của Google Rich Results Test & Schema.org Validator.',
      impact: 'Xóa bỏ 100% nguy cơ AI bịa đặt thông tin (Hallucination), giúp bot AI tự tin trích dẫn tiệm vào câu trả lời.'
    },
    {
      stepNumber: '03',
      badge: 'Chuẩn OpenSearch 2026',
      title: 'Xuất bản và cấu hình tệp llms.txt chuẩn OpenSearch cho các bot AI thu thập',
      shortTitle: 'Bước 3: Xuất bản llms.txt',
      duration: 'Ngày 08 – Ngày 09',
      objective: 'Đón đầu tiêu chuẩn dữ liệu mở mới nhất của các tập đoàn AI, tạo tệp văn bản tinh gọn để bot AI quét trực tiếp trong 0.2 giây mà không tốn token đọc mã web rườm rà.',
      actions: [
        'Khởi tạo tệp https://ten-mien.vn/llms.txt và https://ten-mien.vn/llms-full.txt theo đặc tả kỹ thuật Markdown chuẩn Answer Engine.',
        'Tổng hợp bản tóm tắt thực thể: Tên thương hiệu, địa chỉ chuẩn, hotline gọi nhanh, tóm tắt thế mạnh khác biệt, bảng giá niêm yết và chính sách bảo hành.',
        'Bổ sung bộ FAQ câu hỏi - câu trả lời ngắn gọn giải đáp trực tiếp các nhu cầu cốt lõi của người mua quanh vùng.',
        'Cấu hình Web Server trả về Content-Type: text/plain; charset=utf-8 chuẩn xác, mở quyền truy cập trong robots.txt cho GPTBot, PerplexityBot, ClaudeBot, Google-Extended.',
        'Khai báo thẻ liên kết <link rel="alternate" type="text/plain" href="/llms.txt" /> vào phần <head> trang web để bot nhận diện tự động.'
      ],
      deliverable: 'Tệp llms.txt và llms-full.txt hoạt động trực tiếp trên tên miền chính chủ, đạt chuẩn kiểm định cú pháp OpenSearch.',
      impact: 'Tiết kiệm 95% chi phí đọc dữ liệu của AI Crawler, biến tiệm thành "sách giáo khoa số" sẵn sàng được trích dẫn.'
    },
    {
      stepNumber: '04',
      badge: 'Thực chiến địa phương • Intent Matrix',
      title: 'Xây dựng Prompt Bank thực tế (50–80 câu hỏi mua sắm người địa phương thường dùng)',
      shortTitle: 'Bước 4: Bộ Prompt Bank 50-80 câu',
      duration: 'Ngày 10 – Ngày 13',
      objective: 'Thu thập ngôn ngữ đời thường tự nhiên của khách hàng tại địa phương để tạo thành bộ kịch bản đo lường và tối ưu nội dung xoay quanh nhu cầu thật.',
      actions: [
        'Nghiên cứu văn phong hỏi đáp địa phương theo 4 cụm ý định tìm kiếm chính (Search Intent Clusters): Khẩn cấp quanh đây, So sánh chất lượng & đạo đức, Báo giá minh bạch, Kỹ thuật ngách chuyên sâu.',
        'Soạn thảo chi tiết 50 đến 80 câu hỏi bằng tiếng Việt có dấu và không dấu gắn với các mốc địa danh quen thuộc (tên chợ, ngã tư, bệnh viện, khu dân cư, tuyến đường huyết mạch).',
        'Ví dụ thực tế: "Gần chợ Hóc Môn có tiệm làm răng nào nhổ răng khôn không đau, có chụp phim trước và báo giá rõ ràng không?", "Gara nào gần ngã 4 An Sương sửa xe tay ga uy tín không vẽ thêm bệnh?".',
        'Tạo ma trận đối chiếu câu trả lời kỳ vọng (Ideal AI Response Mapping) để làm tiêu chuẩn nghiệm thu chất lượng trích dẫn.'
      ],
      deliverable: 'File Excel / Google Sheets chuyên sâu chứa 50–80 câu hỏi Prompt Bank thực chiến kèm phân loại Intent và chỉ số kiểm thử định kỳ.',
      impact: 'Chủ tiệm có bộ công cụ tự kiểm tra kết quả bất cứ lúc nào, thấy ngay sự thay đổi của AI trước và sau triển khai.'
    },
    {
      stepNumber: '05',
      badge: 'Nhất quán thực thể số • NAP Consistency',
      title: 'Đồng bộ NAP (Tên - Địa chỉ - Điện thoại) & Kiểm tra các nguồn Citation tin cậy',
      shortTitle: 'Bước 5: Đồng bộ NAP & Citation',
      duration: 'Ngày 14 – Ngày 17',
      objective: 'Loại bỏ mọi dị bản thông tin, xây dựng mạng lưới trích dẫn chéo uy tín (Cross-Citation Signals) để thuật toán AI tin cậy 100% vào sự tồn tại và uy tín của cơ sở.',
      actions: [
        'Chuẩn hóa công thức NAP (Name - Address - Phone) duy nhất cho cơ sở kinh doanh, triệt tiêu các địa chỉ cũ, số điện thoại nhân viên cũ hoặc sai lệch phường/xã.',
        'Đồng bộ dữ liệu NAP trên Google Business Profile (Google Maps), Fanpage Facebook chính thức, Zalo OA doanh nghiệp, Apple Maps và Bing Places.',
        'Rà soát và củng cố tín hiệu Citation trên các nguồn uy tín: Danh bạ doanh nghiệp địa phương, báo chí khu vực, diễn đàn cư dân, Foody/ShopeeFood (đối với F&B).',
        'Gắn thẻ địa lý Geotag và cập nhật bộ ảnh thực tế điểm kinh doanh (biển hiệu rõ số nhà, không gian bên trong, đội ngũ nhân sự thật) lên toàn bộ hồ sơ số.'
      ],
      deliverable: 'Bảng theo dõi Citation Audit Matrix với 30+ liên kết số đồng nhất NAP 100% và không còn bất kỳ thông tin mâu thuẫn nào.',
      impact: 'Thuật toán tìm kiếm ngữ nghĩa của Google và OpenAI xác thực cơ sở của bạn là thực thể có thật và uy tín nhất khu vực.'
    },
    {
      stepNumber: '06',
      badge: 'Nghiệm thu • Bàn giao chính chủ',
      title: 'Giám sát đo lường AI Visibility và bàn giao tài liệu quản trị cho chủ tiệm',
      shortTitle: 'Bước 6: Đo lường & Bàn giao 5 năm',
      duration: 'Ngày 18 – Ngày 21',
      objective: 'Kiểm thử thực tế trên toàn bộ Prompt Bank, bàn giao 100% tài nguyên chính chủ và kích hoạt chế độ đồng hành bảo hành kỹ thuật 5 năm cùng LocalMate.',
      actions: [
        'Chạy chu kỳ kiểm tra tự động trên 50–80 câu hỏi trong Prompt Bank: Ghi nhận tỷ lệ trích dẫn thực tế (mục tiêu đạt 60% – 85%+ xuất hiện ở vị trí Top đề xuất).',
        'Kiểm tra đường dẫn nguồn (Source Citation Links): Đảm bảo người dùng bấm vào câu trả lời AI sẽ dẫn thẳng về trang web hoặc bản đồ của tiệm.',
        'Bàn giao 100% quyền sở hữu: Mã nguồn, file cấu hình llms.txt, tài khoản Google Maps, Hosting Cloudflare và tên miền thuộc về khách hàng.',
        'Cung cấp Cẩm Nang Quản Trị GEO Tinh Gọn: Hướng dẫn chủ tiệm cách đăng bài viết mới, cập nhật ưu đãi sao cho bot AI tiếp tục học và duy trì vị trí.',
        'Ký văn bản cam kết bảo hành kỹ thuật 5 năm: Hỗ trợ kỹ thuật 1-1 qua nhóm Zalo riêng, xử lý sự cố trong vòng 2–4 giờ làm việc.'
      ],
      deliverable: 'Bộ tài liệu bàn giao đầy đủ (Final Delivery Package) gồm Dashboard kết quả đo lường, biên bản bàn giao tài khoản và cẩm nang duy trì thứ hạng AI.',
      impact: 'Chủ tiệm hoàn toàn làm chủ tài sản số của mình, không bị phụ thuộc vào agency, khách hàng tự tìm đến đều đặn qua AI.'
    }
  ];

  // Danh mục câu hỏi thường gặp
  const faqs = [
    {
      q: 'Quy trình GEO khác gì so với dịch vụ SEO Google Maps truyền thống?',
      a: 'SEO Google Maps truyền thống tập trung tối ưu để bạn hiển thị trong Top 3 bản đồ khi người dùng gõ cụm từ khóa ngắn trên Google Search. Trong khi đó, GEO (Generative Engine Optimization) tối ưu toàn diện dữ liệu cấu trúc (Schema, llms.txt, Semantic Content) để khi khách hàng đặt câu hỏi hội thoại dài hoặc phức tạp với ChatGPT, Gemini, Copilot hay Google AI Overviews, các AI này có đủ dữ liệu đáng tin cậy để đề xuất tên tiệm, số hotline, bảng giá và thế mạnh của bạn như một lời khuyên chân thành.'
    },
    {
      q: 'Sau bao lâu thì ChatGPT và Gemini bắt đầu đề xuất tiệm của tôi?',
      a: 'Khác với SEO website truyền thống thường mất từ 4–6 tháng, quy trình GEO của LocalMate tạo ra các tệp máy đọc trực tiếp (Schema JSON-LD và llms.txt). Thông thường sau 14 đến 25 ngày kể từ khi các bot AI (GPTBot, PerplexityBot, Google-Extended) thu thập dữ liệu mới và cập nhật chỉ mục (Index Refresh), bạn sẽ bắt đầu thấy thương hiệu của mình xuất hiện trong các câu trả lời của AI cho các truy vấn tại địa phương.'
    },
    {
      q: 'Tiệm của tôi là mô hình nhỏ (quán ăn, gara, salon, phòng khám tư), có cần làm GEO không?',
      a: 'Rất cần, và đây chính là thời điểm vàng! Hiện nay hơn 95% các cửa tiệm địa phương chưa hề biết đến GEO và vẫn chỉ phụ thuộc vào chạy quảng cáo tốn kém. Khi bạn triển khai chuẩn chỉnh 6 bước này, bạn sẽ là người đầu tiên trong phường/quận chiếm lĩnh toàn bộ câu trả lời của AI. Khách hàng hỏi AI về tiệm uy tín quanh vùng sẽ chỉ nhận được gợi ý về bạn thay vì đối thủ.'
    },
    {
      q: 'Tệp llms.txt là gì và tại sao bot AI lại ưu tiên đọc tệp này hơn mã nguồn web thông thường?',
      a: 'Các mô hình ngôn ngữ lớn (LLMs) hoạt động dựa trên việc tính toán token văn bản. Một trang web thông thường chứa hàng nghìn dòng mã HTML, CSS, JavaScript gây tốn tài nguyên xử lý của AI. Tệp llms.txt là chuẩn mới ra đời năm 2024–2025, trình bày toàn bộ thông tin quan trọng nhất của doanh nghiệp dưới dạng Markdown cô đọng, giúp bot AI hiểu trọn vẹn bản chất tiệm của bạn chỉ trong 0.2 giây mà không bị nhiễu thông tin.'
    },
    {
      q: 'Sau khi hoàn thành 6 bước, nếu tôi đổi bảng giá hoặc dời địa chỉ thì làm thế nào?',
      a: 'Toàn bộ dữ liệu được lưu trữ có cấu trúc rõ ràng. Bạn chỉ cần cập nhật thông tin mới trong 1 file cấu hình duy nhất, hệ thống sẽ tự động đồng bộ sang cả Schema JSON-LD và tệp llms.txt. Đặc biệt với chính sách đồng hành kỹ thuật 5 năm của LocalMate, bạn chỉ cần nhắn thông tin qua nhóm Zalo riêng, kỹ thuật viên sẽ hỗ trợ cập nhật chuẩn xác trong vòng vài giờ làm việc.'
    },
    {
      q: 'LocalMate có bàn giao đầy đủ tài khoản chính chủ cho tôi không?',
      a: '100% chính chủ. Triết lý của LocalMate là "Tài sản số của bạn thuộc về bạn". Chúng tôi bàn giao toàn bộ mã nguồn, tài khoản Google Business Profile, tên miền, Cloudflare và hướng dẫn quản trị. Bạn hoàn toàn làm chủ dữ liệu của mình mà không bị ràng buộc bất kỳ chi phí ẩn nào.'
    }
  ];

  return (
    <div className="geo-workflow-page" style={{ backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', scrollbarGutter: 'stable' }}>
      <SEOHead
        title="Quy Trình Triển Khai GEO & AI Search Cho Điểm Kinh Doanh Địa Phương"
        description="Khám phá quy trình 6 bước kỹ thuật tối ưu hóa công cụ tìm kiếm tạo sinh (GEO) cho cửa tiệm, phòng khám, gara. Giúp ChatGPT, Gemini, Copilot và Google AI Overviews trích dẫn thương hiệu của bạn đầu tiên."
        canonicalPath="/quy-trinh-geo"
        breadcrumbs={breadcrumbs}
        schemaType="Service"
        schemaData={{
          serviceType: 'Generative Engine Optimization (GEO) Workflow for Local Business',
          provider: COMPANY_INFO.legalName,
          areaServed: 'Việt Nam',
          description: 'Quy trình 6 bước kỹ thuật chuẩn OpenSearch & Schema đa tầng giúp điểm kinh doanh địa phương được các mô hình AI lớn trích dẫn chính xác.'
        }}
      />

      {/* TOP SUB-NAV BAR: Cụm Dịch Vụ AI Search */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 0' }}>
        <Container size="lg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
              <Sparkles size={16} color="#0d7647" />
              <span style={{ fontWeight: 600, color: '#0f172a' }}>Hệ sinh thái AI Search LocalMate:</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link
                to="/dich-vu/geo"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#edf7f1',
                  color: '#0d7647',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid #c6ebd4'
                }}
              >
                Dịch Vụ GEO Tổng Thể
              </Link>
              <Link
                to="/quy-trinh-geo"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Quy Trình 6 Bước (Bạn đang xem)
              </Link>
              <Link
                to="/dich-vu/aeo"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: '1px solid #e2e8f0'
                }}
              >
                Dịch Vụ AEO Citations
              </Link>
              <Link
                to="/dich-vu/seo-ai"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: '1px solid #e2e8f0'
                }}
              >
                Google AI Overviews
              </Link>
              <Link
                to="/dich-vu/seo-chatgpt"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: '1px solid #e2e8f0'
                }}
              >
                SEO ChatGPT
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '3.5rem 0 4rem 0' }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbs} />

          <div style={{ maxWidth: '920px', marginTop: '1.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#edf7f1',
                border: '1px solid #c6ebd4',
                color: '#0d7647',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={15} />
              <span>QUY TRÌNH KỸ THUẬT CHUYÊN SÂU 2026 • ĐỊA BÀN ĐỊA PHƯƠNG</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.22,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}
            >
              Quy Trình Triển Khai GEO &amp; AI Search Cho Điểm Kinh Doanh Địa Phương
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: '#334155',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}
            >
              Làm thế nào để quán ăn, phòng khám, gara hay cửa tiệm của bạn được <strong>ChatGPT, Gemini, Copilot và Google AI Overviews</strong> trích dẫn đầu tiên khi người dân địa phương hỏi tìm dịch vụ quanh vùng? Khám phá 6 bước kỹ thuật chuẩn xác, thực tế và minh bạch từ LocalMate.
            </p>

            {/* 3 Metric Pills */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#edf7f1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0d7647',
                    flexShrink: 0
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Thời gian triển khai</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>14 – 21 Ngày Hoàn Tất</div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#fef3c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d97706',
                    flexShrink: 0
                  }}
                >
                  <Database size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Bộ câu hỏi kiểm thử</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>50 – 80 Prompt Thực Tế</div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Bảo hành &amp; Đồng hành</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>5 Năm Kỹ Thuật 1-1</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA('Khảo sát AI Visibility miễn phí cho quán')}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Nhận Khảo Sát Hiện Trạng AI Miễn Phí (24h)</span>
                <ArrowRight size={18} />
              </Button>

              <a
                href="#sau-buoc-ky-thuat"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#1e293b',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none'
                }}
              >
                <span>Xem chi tiết 6 bước kỹ thuật</span>
                <ChevronDown size={18} />
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  color: '#0d7647',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.5rem'
                }}
              >
                <Phone size={16} />
                <span>Hotline: 0834 422 439</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1: BẢN CHẤT CỦA GEO & AI SEARCH (DEEP DIVE NHƯNG DỄ HIỂU) */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}
            >
              <Bot size={15} />
              <span>BẢN CHẤT VẬN HÀNH</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              GEO Là Gì? Tại Sao Tìm Kiếm 2026 Không Còn Dừng Lại Ở 10 Đường Link Xanh?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
              Khách hàng không còn gõ từ khóa vụn vặt và bấm vào từng trang quảng cáo nữa. Họ đang trò chuyện trực tiếp với ChatGPT, Gemini hoặc nhìn vào hộp Google AI Overviews để nhận câu trả lời tổng hợp ngay tức thì.
            </p>
          </div>

          {/* Sơ đồ nguyên lý 3 chặng AI thu thập & trích dẫn */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              marginBottom: '3rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>
              Cơ Chế 3 Chặng Thuật Toán AI Đề Xuất Một Cửa Hàng Địa Phương
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
                position: 'relative'
              }}
            >
              {/* Chặng 1 */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.875rem'
                    }}
                  >
                    1
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
                    Entity Ingestion
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Thu Thập Tín Hiệu Thực Thể (Entity)
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                  Các AI Bot (GPTBot, PerplexityBot, Google-Extended) đọc tệp <code>llms.txt</code> và cấu trúc <code>Schema JSON-LD</code>. Chúng không đọc lướt HTML mà ghi nhớ trực tiếp: Tên tiệm, tọa độ GPS, hotline, bảng giá niêm yết và khung giờ phục vụ.
                </p>
              </div>

              {/* Chặng 2 */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.875rem'
                    }}
                  >
                    2
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>
                    Trust &amp; Consistency
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Đối Chiếu &amp; Xác Thực Độ Tin Cậy (NAP)
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                  AI kiểm tra chéo (Cross-Verification) xem tên, số điện thoại và địa chỉ trên website có khớp 100% với Google Maps, Fanpage và các đánh giá thực tế của cư dân hay không. Càng nhất quán, điểm tin cậy E-E-A-T càng cao.
                </p>
              </div>

              {/* Chặng 3 */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#d97706',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.875rem'
                    }}
                  >
                    3
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase' }}>
                    Citation Generation
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Sinh Câu Trả Lời &amp; Gắn Thẻ Trích Dẫn
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                  Khi người dùng đặt câu hỏi gần khu vực, mô hình AI tự tin trích xuất tên tiệm bạn vào danh sách khuyên dùng đầu tiên, đính kèm số điện thoại gọi ngay và dẫn liên kết nguồn (Source Citation) về website chính chủ.
                </p>
              </div>
            </div>
          </div>

          {/* Bảng so sánh 2 cột: SEO truyền thống vs GEO hiện đại */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ padding: '1.5rem 2rem', backgroundColor: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                So Sánh Cơ Chế Hoạt Động: SEO Truyền Thống vs. GEO Cùng LocalMate
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {/* Cột SEO cũ */}
              <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      fontWeight: 700,
                      fontSize: '0.75rem'
                    }}
                  >
                    CÁCH LÀM CŨ
                  </span>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    SEO Từ Khóa Truyền Thống
                  </h4>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#475569' }}>
                    <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Mục tiêu:</strong> Cố gắng chen chân vào 10 đường link xanh trên Google Search bằng cách nhồi nhét từ khóa.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#475569' }}>
                    <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Trải nghiệm khách:</strong> Phải bấm vào từng đường link, đọc qua nhiều website rườm rà để tìm số điện thoại hoặc so sánh giá.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#475569' }}>
                    <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Đối với AI:</strong> AI không thể đọc hiểu dữ liệu phân mảnh, dễ dẫn đến hiện tượng trả lời sai lệch (AI Hallucination) hoặc bỏ qua tiệm bạn.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#475569' }}>
                    <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Thời gian:</strong> Thường mất từ 4 đến 6 tháng, tốn nhiều chi phí mua backlink và viết bài tràn lan.</span>
                  </li>
                </ul>
              </div>

              {/* Cột GEO LocalMate */}
              <div style={{ padding: '2rem', backgroundColor: '#edf7f1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.75rem'
                    }}
                  >
                    CHUẨN MỚI 2026
                  </span>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    GEO &amp; AI Search Cùng LocalMate
                  </h4>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#1e293b' }}>
                    <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Mục tiêu:</strong> Trở thành nguồn dữ liệu chính thống được ChatGPT, Gemini, Copilot và Google AI Overviews trích dẫn trực tiếp.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#1e293b' }}>
                    <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Trải nghiệm khách:</strong> AI đưa ra câu trả lời dứt khoát: Tên tiệm, địa chỉ gần nhất, hotline gọi ngay và lý do tại sao nên chọn quán.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#1e293b' }}>
                    <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Đối với AI:</strong> Schema JSON-LD đa tầng + tệp <code>llms.txt</code> chuẩn OpenSearch giúp bot nạp dữ liệu sạch trong 0.2s.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#1e293b' }}>
                    <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Thời gian:</strong> 14 đến 21 ngày hoàn tất kỹ thuật, duy trì ổn định và bảo hành đồng hành 5 năm.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: BẢNG SO SÁNH TRỰC QUAN TRƯỚC VÀ SAU KHI TỐI ƯU GEO (LIVE AI SIMULATION) */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 2.5rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#fef3c7',
                color: '#d97706',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}
            >
              <Eye size={15} />
              <span>MINH CHỨNG TRỰC QUAN</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              Đối Chiếu Trực Tiếp: Trước vs. Sau Khi Tối Ưu GEO
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
              Xem cách các mô hình AI lớn thay đổi phản hồi 180 độ khi người dùng khu vực tìm kiếm dịch vụ thực tế.
            </p>

            {/* Scenario Tabs */}
            <div
              style={{
                display: 'inline-flex',
                gap: '0.5rem',
                backgroundColor: '#f1f5f9',
                padding: '0.35rem',
                borderRadius: '10px',
                marginTop: '1rem'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveCompareTab('scenario-1')}
                style={{
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCompareTab === 'scenario-1' ? '#ffffff' : 'transparent',
                  color: activeCompareTab === 'scenario-1' ? '#0d7647' : '#64748b',
                  boxShadow: activeCompareTab === 'scenario-1' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'
                }}
              >
                Tình huống 1: Phòng khám nha khoa Hóc Môn
              </button>
              <button
                type="button"
                onClick={() => setActiveCompareTab('scenario-2')}
                style={{
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCompareTab === 'scenario-2' ? '#ffffff' : 'transparent',
                  color: activeCompareTab === 'scenario-2' ? '#0d7647' : '#64748b',
                  boxShadow: activeCompareTab === 'scenario-2' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'
                }}
              >
                Tình huống 2: Gara sửa xe máy / cứu hộ gần An Sương
              </button>
            </div>
          </div>

          {/* Chat Container Mockup */}
          {activeCompareTab === 'scenario-1' ? (
            <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
              {/* Question Box */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    flexShrink: 0
                  }}
                >
                  U
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748b', marginBottom: '0.25rem' }}>
                    Khách hàng hỏi ChatGPT / Gemini (Tìm kiếm hội thoại):
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.5 }}>
                    &ldquo;Tôi ở gần chợ Hóc Môn đang bị đau răng khôn mọc lệch. Quanh đây có phòng khám nha khoa nào uy tín, nhổ nhẹ nhàng không đau, có chụp phim CT kiểm tra trước và báo giá minh bạch không phát sinh không?&rdquo;
                  </div>
                </div>
              </div>

              {/* Side-by-side Response Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {/* TRƯỚC KHI TỐI ƯU */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #fecaca',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span
                        style={{
                          backgroundColor: '#fee2e2',
                          color: '#dc2626',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        ❌ TRƯỚC KHI TỐI ƯU GEO
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>AI không có căn cứ xác thực</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                      <Bot size={16} />
                      <span>ChatGPT-4o phản hồi mơ hồ:</span>
                    </div>

                    <div style={{ fontSize: '0.9375rem', color: '#334155', lineHeight: 1.6, backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                      <p style={{ margin: '0 0 0.75rem 0' }}>
                        &ldquo;Chào bạn, tại khu vực Hóc Môn có nhiều phòng khám nha khoa khác nhau. Bạn có thể tham khảo một số cơ sở lớn như Nha Khoa Kim, Nha Khoa Paris hoặc Bệnh viện Răng Hàm Mặt tại trung tâm Quận 1 để đảm bảo chuyên môn.&rdquo;
                      </p>
                      <p style={{ margin: '0 0 0.75rem 0' }}>
                        &ldquo;Ngoài ra, bạn nên mở Google Maps và gõ &apos;nha khoa gần đây&apos; để đọc review của từng nơi trước khi đến. Giá nhổ răng khôn thường dao động từ 1.000.000đ đến 5.000.000đ tùy mức độ khó.&rdquo;
                      </p>
                      <p style={{ margin: 0, fontStyle: 'italic', color: '#64748b' }}>
                        (AI không nhắc tới phòng khám của bạn dù quán bạn chỉ cách chợ Hóc Môn 300 mét!)
                      </p>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #e2e8f0', fontSize: '0.8125rem', color: '#dc2626', fontWeight: 600 }}>
                    ⚠️ Kết quả: 0% khách ghé quán. Khách hàng tiếp tục tìm kiếm hoặc chạy vào chuỗi lớn ở xa.
                  </div>
                </div>

                {/* SAU KHI TỐI ƯU CÙNG LOCALMATE */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #86efac',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px rgba(13, 118, 71, 0.08)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span
                        style={{
                          backgroundColor: '#0d7647',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        ✅ SAU KHI TRIỂN KHAI GEO CÙNG LOCALMATE
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: '#0d7647', fontWeight: 600 }}>Trích dẫn chính xác 100%</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0d7647', fontSize: '0.875rem', fontWeight: 600 }}>
                      <Sparkles size={16} />
                      <span>ChatGPT &amp; Gemini trích dẫn trực tiếp:</span>
                    </div>

                    <div style={{ fontSize: '0.9375rem', color: '#0f172a', lineHeight: 1.6, backgroundColor: '#edf7f1', padding: '1rem', borderRadius: '8px', border: '1px solid #c6ebd4' }}>
                      <p style={{ margin: '0 0 0.75rem 0' }}>
                        &ldquo;Gần chợ Hóc Môn, bạn nên ghé ngay <strong>Nha Khoa Anh Đức</strong> (cách chợ khoảng 250m tại 45/2 Lý Thường Kiệt). Đây là phòng khám uy tín được người địa phương đánh giá rất cao về nhổ răng khôn:&rdquo;
                      </p>
                      <ul style={{ margin: '0 0 0.75rem 0', paddingLeft: '1.25rem' }}>
                        <li><strong>Công nghệ:</strong> Máy nhổ sóng siêu âm Piezotome không đau, máy chụp CT ConeBeam 3D khảo sát dây thần kinh miễn phí.</li>
                        <li><strong>Bác sĩ:</strong> Bác sĩ CKI Nguyễn Anh Đức (15 năm kinh nghiệm BV RHM) trực tiếp thực hiện.</li>
                        <li><strong>Bảng giá niêm yết:</strong> 800.000đ – 2.200.000đ/răng, báo giá trọn gói trước khi nhổ, không phát sinh phụ thu.</li>
                        <li><strong>Hotline đặt lịch ngay:</strong> 0834 422 439 (Mở cửa 8:00 – 20:00).</li>
                      </ul>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#ffffff', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#0d7647', fontWeight: 600, border: '1px solid #c6ebd4' }}>
                        <CheckCheck size={14} />
                        <span>Nguồn trích dẫn: Website chính thức nhakhoaanhduc.vn &amp; Google Maps xác thực</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #86efac', fontSize: '0.8125rem', color: '#0d7647', fontWeight: 700 }}>
                    🎯 Kết quả: Khách hàng ấn tượng về sự chuyên nghiệp và bấm nút gọi hotline hoặc chỉ đường ngay lập tức!
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
              {/* Question Box 2 */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    flexShrink: 0
                  }}
                >
                  U
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748b', marginBottom: '0.25rem' }}>
                    Khách hàng hỏi AI Overviews / Copilot khi gặp sự cố trên đường:
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.5 }}>
                    &ldquo;Xe SH của tôi bị tắt máy không đề được gần ngã tư An Sương, quanh đây có tiệm sửa xe máy nào đang mở cửa tối, làm ăn trung thực không vẽ bệnh phụ tùng không?&rdquo;
                  </div>
                </div>
              </div>

              {/* Side-by-side Response Grid 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {/* TRƯỚC KHI TỐI ƯU */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #fecaca',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span
                        style={{
                          backgroundColor: '#fee2e2',
                          color: '#dc2626',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        ❌ TRƯỚC KHI TỐI ƯU GEO
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Dữ liệu mù mờ</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                      <Bot size={16} />
                      <span>Copilot / Google AI trả lời chung chung:</span>
                    </div>

                    <div style={{ fontSize: '0.9375rem', color: '#334155', lineHeight: 1.6, backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                      <p style={{ margin: '0 0 0.75rem 0' }}>
                        &ldquo;Khu vực ngã tư An Sương có nhiều tiệm sửa xe vỉa hè dọc tuyến Quốc Lộ 22 và Quốc Lộ 1A. Bạn nên cẩn thận hỏi giá trước khi sửa để tránh bị chặt chém hoặc thay bình ắc quy cũ.&rdquo;
                      </p>
                      <p style={{ margin: 0 }}>
                        &ldquo;Nếu cần an tâm hơn, bạn có thể gọi đội cứu hộ của HEAD Honda gần nhất trong giờ hành chính.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #e2e8f0', fontSize: '0.8125rem', color: '#dc2626', fontWeight: 600 }}>
                    ⚠️ Tiệm của bạn cách ngã tư chỉ 200m nhưng AI không biết thông tin nên không thể gợi ý.
                  </div>
                </div>

                {/* SAU KHI TỐI ƯU */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #86efac',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px rgba(13, 118, 71, 0.08)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span
                        style={{
                          backgroundColor: '#0d7647',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        ✅ SAU KHI TRIỂN KHAI GEO CÙNG LOCALMATE
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: '#0d7647', fontWeight: 600 }}>Chỉ điểm ngay lập tức</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0d7647', fontSize: '0.875rem', fontWeight: 600 }}>
                      <Sparkles size={16} />
                      <span>Google AI Overviews đề xuất:</span>
                    </div>

                    <div style={{ fontSize: '0.9375rem', color: '#0f172a', lineHeight: 1.6, backgroundColor: '#edf7f1', padding: '1rem', borderRadius: '8px', border: '1px solid #c6ebd4' }}>
                      <p style={{ margin: '0 0 0.75rem 0' }}>
                        &ldquo;Ngay ngã tư An Sương, bạn có thể liên hệ ngay <strong>Gara Sửa Xe Máy Hoàng Kim</strong> (địa chỉ: 18 Quốc Lộ 22, cách chân cầu vượt 150m):&rdquo;
                      </p>
                      <ul style={{ margin: '0 0 0.75rem 0', paddingLeft: '1.25rem' }}>
                        <li><strong>Dịch vụ:</strong> Chuyên trị xe tay ga SH, AirBlade bị lỗi fi điện tử, kiểm tra miễn phí tiền công.</li>
                        <li><strong>Cứu hộ tận nơi:</strong> Đội thợ hỗ trợ đẩy xe / kích bình lưu động trong bán kính 3km.</li>
                        <li><strong>Khung giờ:</strong> Mở cửa đến 21:30 tối cả tuần.</li>
                        <li><strong>Hotline cứu hộ:</strong> 0908 xxx xxx (Thợ chính nghe máy trực tiếp).</li>
                      </ul>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#ffffff', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#0d7647', fontWeight: 600, border: '1px solid #c6ebd4' }}>
                        <CheckCheck size={14} />
                        <span>Nguồn: File llms.txt &amp; Schema LocalBusiness chính chủ</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #86efac', fontSize: '0.8125rem', color: '#0d7647', fontWeight: 700 }}>
                    🎯 Khách hàng bấm gọi ngay hotline cứu hộ, giải quyết sự cố tức thì mà không lo bị chặt chém!
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* SECTION 3: CHI TIẾT QUY TRÌNH 6 BƯỚC KỸ THUẬT (INTERACTIVE WORKFLOW DEEP-DIVE) */}
      <section id="sau-buoc-ky-thuat" style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}
            >
              <Sliders size={15} />
              <span>LỘ TRÌNH 6 BƯỚC KỸ THUẬT CHUẨN XÁC</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              Quy Trình Triển Khai GEO 6 Bước Cho Điểm Kinh Doanh
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
              Không nói lý thuyết chung chung. Từng bước đều có đầu mục công việc cụ thể, sản phẩm bàn giao minh bạch và cam kết chất lượng rõ ràng.
            </p>
          </div>

          {/* Workflow Step Navigation Pills */}
          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0.5rem',
              paddingBottom: '0.75rem',
              marginBottom: '2rem',
              scrollbarWidth: 'thin'
            }}
          >
            {workflowSteps.map((step, idx) => {
              const stepIndex = idx + 1;
              const isActive = activeStepTab === stepIndex;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStepTab(stepIndex)}
                  style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1rem',
                    borderRadius: '10px',
                    border: isActive ? '2px solid #0d7647' : '1px solid #cbd5e1',
                    backgroundColor: isActive ? '#0d7647' : '#ffffff',
                    color: isActive ? '#ffffff' : '#334155',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#ffffff' : '#edf7f1',
                      color: isActive ? '#0d7647' : '#0d7647',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 800
                    }}
                  >
                    {step.stepNumber}
                  </span>
                  <span>{step.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          {(() => {
            const current = workflowSteps[activeStepTab - 1];
            return (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                }}
              >
                {/* Header of Step Card */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '1.5rem',
                    marginBottom: '2rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 900,
                          color: '#0d7647',
                          backgroundColor: '#edf7f1',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '8px'
                        }}
                      >
                        BƯỚC {current.stepNumber}
                      </span>
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: '#64748b',
                          backgroundColor: '#f1f5f9',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        {current.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      {current.title}
                    </h3>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      color: '#475569',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    <Clock size={16} color="#0d7647" />
                    <span>Thời gian thực hiện: <strong>{current.duration}</strong></span>
                  </div>
                </div>

                {/* Objective */}
                <div
                  style={{
                    backgroundColor: '#edf7f1',
                    borderLeft: '4px solid #0d7647',
                    padding: '1rem 1.25rem',
                    borderRadius: '0 8px 8px 0',
                    marginBottom: '2rem'
                  }}
                >
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Mục Tiêu Cốt Lõi Của Bước Này:
                  </div>
                  <div style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 500, lineHeight: 1.5 }}>
                    {current.objective}
                  </div>
                </div>

                {/* 2-Column Details: Actions & Deliverable */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                  {/* Cột trái: Đầu mục công việc kỹ thuật */}
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sliders size={18} color="#0d7647" />
                      <span>Các Đầu Việc Kỹ Thuật Triển Khai:</span>
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                      {current.actions.map((act, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#334155', lineHeight: 1.55 }}>
                          <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cột phải: Sản phẩm bàn giao & Tác động */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.25rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                        <FileText size={18} color="#2563eb" />
                        <span>Sản Phẩm Bàn Giao Thật (Deliverables):</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                        {current.deliverable}
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.25rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                        <TrendingUp size={18} color="#d97706" />
                        <span>Giá Trị Kinh Doanh Nhận Được:</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                        {current.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Special Code Demonstration for Step 2 & Step 3 */}
                {activeStepTab === 2 && (
                  <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <FileCode2 size={16} color="#0d7647" />
                        <span>Mẫu Cấu Trúc Schema JSON-LD Đa Tầng Nhúng Thực Tế Cho Cơ Sở:</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy('schema', sampleSchemaCode)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          border: '1px solid #cbd5e1',
                          backgroundColor: '#ffffff',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          color: '#334155'
                        }}
                      >
                        {copiedCode === 'schema' ? <Check size={14} color="#0d7647" /> : <Copy size={14} />}
                        <span>{copiedCode === 'schema' ? 'Đã sao chép!' : 'Sao chép mẫu'}</span>
                      </button>
                    </div>
                    <pre
                      style={{
                        backgroundColor: '#0f172a',
                        color: '#e2e8f0',
                        padding: '1.25rem',
                        borderRadius: '10px',
                        overflowX: 'auto',
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        fontFamily: 'Consolas, Monaco, "Courier New", monospace'
                      }}
                    >
                      <code>{sampleSchemaCode}</code>
                    </pre>
                  </div>
                )}

                {activeStepTab === 3 && (
                  <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Terminal size={16} color="#0d7647" />
                        <span>Mẫu Cấu Trúc Tệp llms.txt Chuẩn Định Dạng Markdown Cho Bot AI:</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy('llms', sampleLlmsTxt)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          border: '1px solid #cbd5e1',
                          backgroundColor: '#ffffff',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          color: '#334155'
                        }}
                      >
                        {copiedCode === 'llms' ? <Check size={14} color="#0d7647" /> : <Copy size={14} />}
                        <span>{copiedCode === 'llms' ? 'Đã sao chép!' : 'Sao chép mẫu'}</span>
                      </button>
                    </div>
                    <pre
                      style={{
                        backgroundColor: '#0f172a',
                        color: '#cbd5e1',
                        padding: '1.25rem',
                        borderRadius: '10px',
                        overflowX: 'auto',
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        fontFamily: 'Consolas, Monaco, "Courier New", monospace'
                      }}
                    >
                      <code>{sampleLlmsTxt}</code>
                    </pre>
                  </div>
                )}

                {/* Navigation Buttons for Steps */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
                  <button
                    type="button"
                    disabled={activeStepTab === 1}
                    onClick={() => setActiveStepTab((prev) => Math.max(1, prev - 1))}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: activeStepTab === 1 ? '#f1f5f9' : '#ffffff',
                      color: activeStepTab === 1 ? '#94a3b8' : '#334155',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: activeStepTab === 1 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    ← Bước trước đó
                  </button>

                  <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600 }}>
                    Bước {activeStepTab} / {workflowSteps.length}
                  </span>

                  <button
                    type="button"
                    disabled={activeStepTab === workflowSteps.length}
                    onClick={() => setActiveStepTab((prev) => Math.min(workflowSteps.length, prev + 1))}
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activeStepTab === workflowSteps.length ? '#f1f5f9' : '#0d7647',
                      color: activeStepTab === workflowSteps.length ? '#94a3b8' : '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      cursor: activeStepTab === workflowSteps.length ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Bước tiếp theo →
                  </button>
                </div>
              </div>
            );
          })()}
        </Container>
      </section>

      {/* SECTION 4: BỘ DELIVERABLES CHECKLIST BÀN GIAO CHO CHỦ TIỆM */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}
            >
              <Award size={15} />
              <span>MINH BẠCH &amp; THỰC CHẤT</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              Chủ Tiệm Nhận Được Gì Khi Nghiệm Thu Hoàn Tất?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
              Tại LocalMate, chúng tôi không bán những báo cáo chữ vô thưởng vô phạt. Bạn sẽ nhận được trọn bộ tài sản số thực tế được chuyển giao 100% quyền sở hữu.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Box 1 */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#edf7f1', color: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <FileCode2 size={22} />
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                1. Mã Nguồn Schema Đa Tầng Hợp Lệ 100%
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                Được nhúng trực tiếp vào website và vượt qua hoàn toàn các bài test chuẩn của Google Rich Results Test &amp; Schema Validator.
              </p>
            </div>

            {/* Box 2 */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Terminal size={22} />
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                2. Tệp llms.txt Chuẩn OpenSearch Hoạt Động Sống
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                Địa chỉ tệp công khai trên tên miền chính chủ (domain.vn/llms.txt), được mở quyền thu thập cho tất cả các bot AI lớn trên thế giới.
              </p>
            </div>

            {/* Box 3 */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Database size={22} />
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                3. Bộ Prompt Bank 50–80 Câu Hỏi Độc Quyền
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                File tổng hợp bộ câu hỏi mua sắm sát sườn của cư dân địa phương kèm phân loại Intent để chủ tiệm tự kiểm tra thứ hạng định kỳ.
              </p>
            </div>

            {/* Box 4 */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Share2 size={22} />
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                4. Bảng Danh Mục Citation Matrix Đồng Bộ NAP
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                Liên kết đối chiếu 30+ nguồn trích dẫn chéo trên Maps, mạng xã hội và danh bạ với tính nhất quán 100% từng số điện thoại và địa chỉ.
              </p>
            </div>

            {/* Box 5 */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <BarChart3 size={22} />
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                5. Dashboard Đo Lường AI Visibility Ban Đầu
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                Báo cáo tỷ lệ xuất hiện (AI Mention Rate), đường link trích dẫn và các khuyến nghị mở rộng thị phần trong 6 tháng tiếp theo.
              </p>
            </div>

            {/* Box 6 */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                6. Cam Kết Bảo Hành Kỹ Thuật 5 Năm &amp; Hỗ Trợ 1-1
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                Nhóm Zalo riêng với kỹ thuật viên in-house, hỗ trợ cập nhật dữ liệu, đổi bảng giá hoặc xử lý sự cố trong vòng 2–4 giờ.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: FAQ CHUYÊN SÂU VỀ QUY TRÌNH TRIỂN KHAI GEO */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}
            >
              <HelpCircle size={15} />
              <span>GIẢI ĐÁP THẮC MẮC</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              Câu Hỏi Thường Gặp Về Quy Trình GEO Địa Phương
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
              Những băn khoăn thực tế của chủ tiệm khi bắt đầu tối ưu dữ liệu cho ChatGPT, Gemini và Google AI Overviews.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="#0d7647"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, borderTop: '1px solid #f1f5f9' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 6: FORM ĐĂNG KÝ KHẢO SÁT HIỆN TRẠNG AI (LEAD CAPTURE) */}
      <section id="dang-ky-quy-trinh-geo" style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: '#f8fafc',
              border: '2px solid #c6ebd4',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(13, 118, 71, 0.08)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#edf7f1',
                  color: '#0d7647',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem'
                }}
              >
                <Sparkles size={15} />
                <span>KHẢO SÁT HIỆN TRẠNG 0Đ • GỬI BÁO CÁO QUA ZALO</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Kiểm Tra Ngay: ChatGPT &amp; Gemini Đang Nói Gì Về Quán Bạn?
              </h2>
              <p style={{ fontSize: '0.975rem', color: '#475569', lineHeight: 1.55 }}>
                Điền thông tin điểm kinh doanh của bạn dưới đây. Kỹ thuật viên LocalMate sẽ trực tiếp chạy 20 truy vấn thử nghiệm trên các AI lớn và gửi bạn bảng điểm Baseline Scorecard trong 24 giờ.
              </p>
            </div>

            {toastMessage && (
              <div
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '10px',
                  backgroundColor: toastMessage.includes('thành công') ? '#edf7f1' : '#fee2e2',
                  color: toastMessage.includes('thành công') ? '#0d7647' : '#b91c1c',
                  border: `1px solid ${toastMessage.includes('thành công') ? '#c6ebd4' : '#fecaca'}`,
                  marginBottom: '1.5rem',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textAlign: 'center'
                }}
              >
                {toastMessage}
              </div>
            )}

            <form onSubmit={handleSubmitAudit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Họ và tên của bạn <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ví dụ: Anh Hoàng / Chị Mai"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9375rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Số điện thoại / Zalo nhận báo cáo <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Ví dụ: 0908 123 456"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9375rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Tên quán / Shop / Cơ sở kinh doanh
                </label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Ví dụ: Nha Khoa Anh Đức / Gara Hoàng Kim"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9375rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Ngành nghề kinh doanh
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9375rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a'
                  }}
                >
                  <option value="Nha khoa / Phòng khám">Nha khoa / Phòng khám tư / Nhà thuốc</option>
                  <option value="Gara ô tô / Sửa chữa xe máy">Gara ô tô / Sửa chữa xe máy / Cứu hộ</option>
                  <option value="Nhà hàng / Quán Cafe / F&B">Nhà hàng / Quán ăn / Cafe / F&B</option>
                  <option value="Thẩm mỹ viện / Spa / Salon">Thẩm mỹ viện / Spa / Salon tóc</option>
                  <option value="Dịch vụ tại nhà / Điện nước / Điện lạnh">Dịch vụ tại nhà / Sửa điện lạnh / Thông cống</option>
                  <option value="Bán lẻ / Cửa hàng thời trang / Nội thất">Bán lẻ / Cửa hàng thời trang / Nội thất</option>
                  <option value="Ngành nghề khác">Ngành nghề dịch vụ khác</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Địa chỉ hiện tại &amp; Khu vực phục vụ
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Ví dụ: 45/2 Lý Thường Kiệt, TT. Hóc Môn (hoặc link Google Maps nếu có)"
                  value={formData.address}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9375rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a'
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '0.5rem' }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    fontWeight: 700,
                    padding: '0.875rem 1.5rem',
                    fontSize: '1.05rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <span>Đang khởi tạo bài quét...</span>
                  ) : (
                    <>
                      <span>Gửi Yêu Cầu Khảo Sát AI Visibility 0đ</span>
                      <Send size={18} />
                    </>
                  )}
                </Button>
                <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.75rem' }}>
                  🔒 Bảo mật tuyệt đối. Chúng tôi không chia sẻ số điện thoại của bạn cho bên thứ ba.
                </div>
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* FOOTER CTA BAR */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '2.5rem 0' }}>
        <Container size="lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                Bạn Cần Tư Vấn Trực Tiếp 1-1 Tận Nơi?
              </div>
              <div style={{ fontSize: '0.9375rem', color: '#94a3b8' }}>
                Kỹ thuật viên LocalMate sẵn sàng hẹn gặp trực tiếp tại Hóc Môn, Quận 12 &amp; khu vực lân cận để khảo sát cơ sở.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(13, 118, 71, 0.3)'
                }}
              >
                <Phone size={18} />
                <span>Gọi Hotline: 0834 422 439</span>
              </a>

              <a
                href="https://zalo.me/0834422439"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={18} color="#2563eb" />
                <span>Nhắn Zalo Kỹ Thuật Viên</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
