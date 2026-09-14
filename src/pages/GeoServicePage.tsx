import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { GeoTaskChecklistSection } from '../components/sections/GeoTaskChecklistSection';
import { CONTACT_INFO } from '../data/landingContent';
import { useRouter, Link } from '../components/layout/Router';
import { submitLead } from '../services/leadService';
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
  Send,
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
  Phone
} from 'lucide-react';

import { AiSearchClusterNav } from '../components/services/AiSearchClusterNav';
import { CapabilityContextBox } from '../components/ui/CapabilityContextBox';
import { AiVisibilityScanner } from '../components/geo/AiVisibilityScanner';

interface GeoServicePageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GeoServicePage: React.FC<GeoServicePageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeAiTab, setActiveAiTab] = useState<'chatgpt' | 'gemini' | 'perplexity'>('chatgpt');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    location: '',
    packageChoice: 'Local GEO Khởi Động (2.900.000đ/tháng)',
    notes: ''
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCTA = (packageName?: string) => {
    const selected = packageName || 'Gói Local GEO Khởi Động 2.900.000đ/tháng';
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      const formEl = document.getElementById('dang-ky-audit');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/lien-he');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setToastMessage('Vui lòng nhập họ tên và số điện thoại/Zalo để nhận báo cáo.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        businessName: `${formData.businessName || 'Chưa nhập tên quán'} (${formData.location || 'Chưa rõ khu vực'})`,
        serviceInterest: `Dịch vụ GEO Địa Phương 2026 - ${formData.packageChoice}`,
        message: `Khu vực: ${formData.location || 'Chưa nhập'} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/dich-vu/geo'
      });
      setToastMessage('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ quét AI Visibility của quán bạn và gửi báo cáo qua Zalo trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        location: '',
        packageChoice: 'Local GEO Khởi Động (2.900.000đ/tháng)',
        notes: ''
      });
    } catch {
      setToastMessage('Đã có lỗi xảy ra. Bạn vui lòng liên hệ hotline/Zalo 0834.422.439 để được hỗ trợ tức thì.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbs = [
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Được khách hàng tìm thấy', url: '/giai-phap/duoc-tim-thay' },
    { name: 'Dịch vụ GEO Địa Phương', url: '/dich-vu/geo' }
  ];

  // 5 Trụ Cột Triển Khai GEO
  const geoPillars = [
    {
      step: '01',
      title: 'Tối ưu Thực thể số (Entity & Schema LocalBusiness sâu)',
      badge: 'Cốt Lõi Nhận Diện AI',
      icon: <Building2 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Xây dựng mạng lưới liên kết thực thể (Knowledge Graph), chuẩn hóa bộ 3 dữ liệu NAP (Tên quán - Địa chỉ - Số điện thoại). Cấy cấu trúc dữ liệu JSON-LD Schema đa tầng (@type: LocalBusiness, GeoCoordinates, openingHours, hasOfferCatalog, sameAs) nhúng sâu vào mã nguồn giúp crawler AI hiểu tường tận vị trí địa lý, ngành nghề và năng lực phục vụ.',
      actionPoint: 'AI hiểu chính xác bạn là ai, ở đâu, chuyên làm món gì / dịch vụ gì để tự tin đề xuất.'
    },
    {
      step: '02',
      title: 'Xây dựng Prompt Bank (50–80 câu hỏi AI phổ biến nhất trong khu vực)',
      badge: 'Bao Phủ Ý Định Khách Hàng',
      icon: <MessageSquare className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Nghiên cứu bộ 50 đến 80 câu lệnh hỏi tự nhiên mà người dân địa phương thường dùng để trò chuyện với AI (VD: "Quán lẩu gia đình ấm cúng có chỗ đậu ô tô gần đây?", "Phòng khám nha khoa niềng răng uy tín gần tôi"). Tối ưu nội dung ngữ nghĩa (Semantic Content) để khi khách hỏi bất kỳ câu nào trong bộ prompt, cơ sở của bạn đều xuất hiện trong danh sách gợi ý hàng đầu.',
      actionPoint: 'Đón đầu trực tiếp câu hỏi người dùng khi họ mở ChatGPT Voice hoặc Google Gemini trên điện thoại.'
    },
    {
      step: '03',
      title: 'Trích dẫn Đa Nền Tảng (Citations & AI Source of Truth)',
      badge: 'Độ Tin Cậy Chéo (Cross-Verification)',
      icon: <Globe className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Mô hình ngôn ngữ lớn (LLM) không bao giờ tin vào một website đơn độc. Chúng kiểm chứng thông tin chéo qua các nguồn dữ liệu mở. LocalMate chuẩn hóa và đồng bộ hồ sơ quán xá trên 20+ nền tảng: Google Business Profile, Apple Maps, OpenStreetMap, Cốc Cốc Map, Bing Places, Foody, YellowPages VN và danh bạ địa phương uy tín.',
      actionPoint: 'Tạo lập mạng lưới nguồn trích dẫn vững chắc mà AI bắt buộc phải tham chiếu khi trả lời.'
    },
    {
      step: '04',
      title: 'Tối ưu Đánh giá & Cảm xúc AI (Review Sentiment Optimization)',
      badge: 'Chấm Điểm Cảm Xúc NLP',
      icon: <Star className="w-6 h-6 text-[#0d7647]" />,
      desc: 'AI 2026 không chỉ đếm số lượng sao mà dùng xử lý ngôn ngữ tự nhiên (NLP) đọc và phân tích từng sắc thái cảm xúc trong bài đánh giá của khách hàng. LocalMate cung cấp bộ kit mã QR thông minh cùng kịch bản giúp cơ sở thu về những đánh giá giàu từ khóa ngữ nghĩa tích cực ("phục vụ chu đáo", "bác sĩ tận tâm", "giá cả minh bạch").',
      actionPoint: 'Đưa doanh nghiệp vào danh sách phân loại "High Recommendation" của các mô hình AI.'
    },
    {
      step: '05',
      title: 'Đo lường Chỉ số Đề xuất AI (Share of Model Visibility Index)',
      badge: 'Nghiệm Thu Minh Bạch Số Liệu',
      icon: <BarChart3 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Đo lường định kỳ hàng tháng bằng công cụ quét tự động: Tỷ lệ xuất hiện của bạn trên 4 mô hình AI lớn (ChatGPT-4o/Search, Google Gemini, Copilot, Perplexity) trong toàn bộ bộ Prompt Bank khu vực. Báo cáo chi tiết số lần được gợi ý, vị trí thứ hạng, tâm lý đề xuất của AI kèm ảnh chụp màn hình truy vấn thực tế.',
      actionPoint: 'Minh bạch 100% hiệu quả thực tế — Báo cáo rõ ràng từng chỉ số tăng trưởng.'
    }
  ];

  // 4 AI Platforms
  const aiPlatforms = [
    {
      name: 'ChatGPT Search (OpenAI)',
      users: '600M+ người dùng hoạt động',
      role: 'Được hỏi nhiều nhất khi tìm quán ăn, spa, salon & địa điểm ăn uống gia đình.',
      icon: '🟢'
    },
    {
      name: 'Google Gemini & AI Overviews',
      users: 'Tích hợp thẳng vào Google Search',
      role: 'Tóm tắt câu trả lời ngay đầu trang tìm kiếm, quyết định trên 70% cuộc gọi địa phương.',
      icon: '🔵'
    },
    {
      name: 'Microsoft Copilot / Bing AI',
      users: 'Cài sẵn trên hàng triệu máy tính Windows',
      role: 'Được tệp khách văn phòng, công sở tìm kiếm dịch vụ trong giờ làm việc.',
      icon: '🟣'
    },
    {
      name: 'Perplexity AI',
      users: 'Công cụ tìm kiếm thông minh số 1',
      role: 'Trích dẫn nguồn chuẩn xác, tạo độ uy tín cao cho phòng khám & dịch vụ chuyên nghiệp.',
      icon: '🟠'
    }
  ];

  // FAQ
  const faqs = [
    {
      q: 'GEO (Generative Engine Optimization) là gì? Khác gì so với SEO Google truyền thống?',
      a: 'SEO truyền thống giúp website của bạn tranh chấp vị trí trong danh sách 10 đường link xanh trên Google. Nhưng năm 2026, người dùng không còn thời gian bấm vào từng link nữa mà hỏi thẳng AI (ChatGPT, Google Gemini) và nghe AI tóm tắt câu trả lời ngay lập tức. GEO là kỹ thuật tối ưu dữ liệu thực thể, đánh giá và nguồn trích dẫn để AI trực tiếp gọi tên thương hiệu của bạn là lựa chọn tin cậy hàng đầu khi khách hàng đặt câu hỏi.'
    },
    {
      q: 'Tôi là quán ăn, tiệm spa, tiệm tóc hay phòng khám nhỏ thì có cần làm GEO không?',
      a: 'CỰC KỲ CẦN THIẾT! Đây chính là nhóm hưởng lợi lớn nhất từ GEO. Khi một vị khách mới đến khu vực của bạn và hỏi điện thoại: "Gợi ý quán lẩu ngon, sạch sẽ gần đây có chỗ đậu xe", AI sẽ quét dữ liệu bán kính xung quanh. Nếu đối thủ làm GEO trước bạn, AI sẽ chỉ dẫn khách sang quán đối thủ mỗi ngày. Ngược lại, chi phí GEO địa phương tại LocalMate chỉ 2.900.000đ/tháng, chỉ cần kéo thêm 3-5 khách hàng là đã hòa vốn.'
    },
    {
      q: 'Tại sao chi phí dịch vụ GEO tại LocalMate lại hợp lý chỉ từ 2.900.000đ/tháng?',
      a: 'LocalMate tập trung triển khai từ gốc kỹ thuật tại địa phương, tự động hóa quy trình cấy Schema, chuẩn hóa Entity và Prompt Bank cho từng khu vực, loại bỏ chi phí trung gian cồng kềnh để mang lại mức giá hợp lý nhất cho hộ kinh doanh và doanh nghiệp vừa & nhỏ.'
    },
    {
      q: 'Bao lâu thì AI bắt đầu đề xuất thương hiệu của tôi?',
      a: 'Sau khi LocalMate triển khai xong bước Schema, Entity và đồng bộ Citations (khoảng 5-7 ngày), các crawler AI sẽ bắt đầu cập nhật dữ liệu. Thông thường từ tuần thứ 2 đến tuần thứ 4, bạn sẽ bắt đầu thấy thương hiệu của mình xuất hiện trong các câu trả lời của ChatGPT Search, Perplexity và Google Gemini. Chúng tôi nghiệm thu bằng báo cáo đo lường Share of Model thực tế.'
    },
    {
      q: 'Tôi chưa có website thì có triển khai được dịch vụ GEO không?',
      a: 'Hoàn toàn được! LocalMate sẽ tối ưu trước từ hồ sơ Google Business Profile, Apple Maps và hệ thống Citations mạng xã hội. Tuy nhiên, để AI có nguồn trích dẫn chính thức với Schema sâu nhất, chúng tôi khuyên bạn nên kết hợp gói Landing Page tinh gọn 490k của LocalMate để tạo điểm neo thực thể số hoàn hảo cho AI cào dữ liệu.'
    },
    {
      q: 'Sau khi làm xong, các tài khoản và dữ liệu thuộc về ai?',
      a: '100% thuộc về bạn! Toàn bộ tài khoản Google Business Profile, danh bạ dữ liệu, email quản trị và mã nguồn Schema đều được LocalMate bàn giao 100% tài khoản chính chủ cho bạn. Chúng tôi cam kết minh bạch số liệu, không giữ pass, không gây phụ thuộc.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', scrollbarGutter: 'stable' }}>
      {/* Dynamic SEO Meta */}
      <SEOHead
        title="Dịch Vụ GEO Địa Phương 2026 — Chuẩn Bị Dữ Liệu Để AI Trích Dẫn & Đề Xuất | LocalMate"
        description="Giải pháp GEO (Generative Engine Optimization) thực tế chỉ từ 2.900.000đ/tháng cho quán ăn, tiệm spa, phòng khám & cửa hàng địa phương. Chuẩn bị dữ liệu để AI có căn cứ trích dẫn thương hiệu."
        canonicalPath="/dich-vu/geo"
        breadcrumbs={breadcrumbs}
        schemaType="Service"
        schemaData={{
          name: 'Dịch vụ GEO Địa Phương 2026 - Generative Engine Optimization',
          serviceType: 'Generative Engine Optimization',
          provider: {
            '@type': 'LocalBusiness',
            name: 'LocalMate',
            telephone: '+84834422439',
            url: 'https://localmate.vn'
          },
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '2900000',
            highPrice: '4900000',
            priceCurrency: 'VND'
          }
        }}
      />

      {/* Cluster Nav */}
      <AiSearchClusterNav currentServiceSlug="geo" />

      {/* Breadcrumbs Strip */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 0' }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbs} />
          <CapabilityContextBox
            solutionName="Được khách hàng tìm thấy trên Google & AI"
            solutionUrl="/giai-phap/duoc-tim-thay"
          />
        </Container>
      </div>

      {/* ==================== 1. HERO SECTION ==================== */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '3.5rem 0 4rem 0' }}>
        <Container size="lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#e8f5ed',
                  border: '1px solid #a3e635',
                  color: '#0d7647',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                <Sparkles size={16} color="#16a34a" />
                <span>KỶ NGUYÊN TÌM KIẾM 2026 — CHUẨN GEO CHO HỘ KINH DOANH & SME</span>
              </div>

              {/* Main H1 */}
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                  textWrap: 'pretty'
                }}
              >
                Dịch Vụ GEO Địa Phương 2026 — Tối Ưu Hiện Diện Trên <span style={{ color: '#0d7647' }}>ChatGPT, Gemini</span> &amp; Google AI
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  color: '#334155',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem',
                  textWrap: 'pretty'
                }}
              >
                Chuẩn bị dữ liệu chuẩn xác để AI có căn cứ trích dẫn thương hiệu của bạn khi khách hàng mở điện thoại tìm kiếm. Chi phí hợp lý, làm từ gốc kỹ thuật, đo lường bằng số liệu minh bạch, <strong style={{ color: '#0d7647' }}>chỉ từ 2.900.000đ/tháng</strong>.
              </p>

              {/* Value Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.75rem',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                  <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>AI gọi tên quán khi khách hỏi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                  <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>Phủ sóng 4 mô hình AI lớn nhất 2026</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                  <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>50–80 Prompt Bank chuẩn địa phương</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                  <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>Báo cáo Share of Model minh bạch</span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a
                  href="#dang-ky-audit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)'
                  }}
                >
                  <Send size={18} />
                  <span>Nhận Báo Cáo Khảo Sát AI 0đ</span>
                </a>
                <a
                  href="#bang-gia-geo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    border: '1px solid #cbd5e1',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>Xem Báo Giá Từ 2.9Tr/tháng</span>
                  <ArrowRight size={16} color="#0d7647" />
                </a>
              </div>

              {/* Micro Trust Proof */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem', fontSize: '0.825rem', color: '#64748b' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={16} color="#0d7647" /> 100% Tài khoản chính chủ
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <RefreshCw size={16} color="#0d7647" /> Không ràng buộc hợp đồng năm
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Award size={16} color="#0d7647" /> Báo cáo ảnh chụp thực tế
                </span>
              </div>
            </div>

            {/* Right Visual: Interactive AI Mockup */}
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* AI Tab Selector */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.85rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Bot size={20} color="#0d7647" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.05em' }}>
                      Mô Phỏng Đề Xuất Thực Tế
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#f1f5f9', padding: '0.25rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>
                    <button
                      type="button"
                      onClick={() => setActiveAiTab('chatgpt')}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: activeAiTab === 'chatgpt' ? '#ffffff' : 'transparent',
                        color: activeAiTab === 'chatgpt' ? '#0d7647' : '#64748b',
                        fontWeight: activeAiTab === 'chatgpt' ? 800 : 600,
                        boxShadow: activeAiTab === 'chatgpt' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none'
                      }}
                    >
                      ChatGPT
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAiTab('gemini')}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: activeAiTab === 'gemini' ? '#ffffff' : 'transparent',
                        color: activeAiTab === 'gemini' ? '#0d7647' : '#64748b',
                        fontWeight: activeAiTab === 'gemini' ? 800 : 600,
                        boxShadow: activeAiTab === 'gemini' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none'
                      }}
                    >
                      Gemini
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAiTab('perplexity')}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: activeAiTab === 'perplexity' ? '#ffffff' : 'transparent',
                        color: activeAiTab === 'perplexity' ? '#0d7647' : '#64748b',
                        fontWeight: activeAiTab === 'perplexity' ? 800 : 600,
                        boxShadow: activeAiTab === 'perplexity' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none'
                      }}
                    >
                      Perplexity
                    </button>
                  </div>
                </div>

                {/* Prompt Query */}
                <div style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', padding: '0.85rem 1rem', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    Khách hàng hỏi AI trên điện thoại:
                  </div>
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', fontStyle: 'italic' }}>
                    &quot;{activeAiTab === 'chatgpt' 
                      ? 'Gợi ý cho tôi quán phở bò gia truyền ngon, sạch sẽ và có chỗ đậu ô tô gần Hóc Môn / Quận 12?' 
                      : activeAiTab === 'gemini' 
                      ? 'Tìm phòng khám nha khoa niềng răng uy tín, bác sĩ tận tâm có bảo hành minh bạch ở khu vực này?' 
                      : 'Đơn vị thiết kế website và hỗ trợ kỹ thuật tại chỗ uy tín cho hộ kinh doanh địa phương?'}&quot;
                  </p>
                </div>

                {/* AI Answer Box */}
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '1rem', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #bbf7d0', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontWeight: 800, color: '#0d7647', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Sparkles size={16} color="#16a34a" />
                      {activeAiTab === 'chatgpt' ? 'ChatGPT-4o Search trả lời' : activeAiTab === 'gemini' ? 'Google Gemini AI Overview' : 'Perplexity Verified Response'}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#dcfce7', color: '#0d7647', padding: '0.2rem 0.5rem', borderRadius: '9999px' }}>
                      Đề Xuất Hàng Đầu ⭐
                    </span>
                  </div>

                  <p style={{ margin: '0 0 0.75rem 0', color: '#1e293b', lineHeight: 1.5 }}>
                    Dựa trên dữ liệu thực thể số đã xác thực và hơn <strong>120 đánh giá chân thực tích cực</strong> gần đây, tôi đề xuất bạn nên đến ngay:
                  </p>

                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <h4 style={{ margin: 0, fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>
                        {activeAiTab === 'chatgpt' ? 'Quán Phở Bò Ba Gia' : activeAiTab === 'gemini' ? 'Nha Khoa Tâm Đức Sài Gòn' : 'LocalMate — Đồng Hành Số Địa Phương'}
                      </h4>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d97706', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <Star size={14} fill="#d97706" color="#d97706" /> 4.9 (185)
                      </span>
                    </div>
                    <p style={{ margin: '0 0 0.35rem 0', fontSize: '0.8rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} color="#64748b" />
                      Số 12 Đường Lê Lợi, Hóc Môn (Có bãi đậu ô tô rộng rãi miễn phí)
                    </p>
                    <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
                      <strong>Lý do AI đề xuất:</strong> Bảng giá niêm yết minh bạch, phản hồi dịch vụ xuất sắc, dữ liệu đồng bộ xác thực qua Google Business Profile, Apple Maps &amp; Schema LocalBusiness.
                    </p>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#0d7647', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem' }}>
                    <Check size={14} />
                    <span>Được AI trích dẫn từ 14 nguồn tin cậy (Entity Hub Verified).</span>
                  </div>
                </div>

                {/* Score strip */}
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                  <span>Chỉ số Share of Model: <strong style={{ color: '#0d7647' }}>87.5%</strong></span>
                  <span style={{ color: '#0d7647', fontWeight: 700 }}>Tăng 3.4x lượt gọi điện</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== 1.5. CÔNG CỤ QUÉT TẠI CHỖ: AI VISIBILITY SCANNER ==================== */}
      <section style={{ backgroundColor: '#f8fafc', padding: '1rem 0 3rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <AiVisibilityScanner onOpenConsultForm={onOpenConsultForm} />
        </Container>
      </section>

      {/* ==================== 2. THỰC TRẠNG 2026: TRAFFIC GOOGLE GIẢM ==================== */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '0.3rem 0.8rem',
                backgroundColor: '#fee2e2',
                color: '#b91c1c',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                borderRadius: '9999px',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem'
              }}
            >
              THỰC TRẠNG TÌM KIẾM NĂM 2026
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
              Traffic Google Truyền Thống Đang Giảm — Nếu AI Không Biết Bạn, Bạn Vô Hình!
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
              Trong khi bạn vẫn đang dốc tiền mua từ khóa hoặc tối ưu 10 đường link xanh trên Google, hàng triệu người tiêu dùng đã chuyển sang hỏi thẳng các trợ lý AI để xin câu trả lời dứt khoát.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            {/* Box 1 */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Search size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Khách Hỏi Thẳng AI Thay Vì Gõ Google
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Người dùng mở ChatGPT Voice hoặc Google Gemini hỏi: &quot;Gần đây có tiệm nào uy tín?&quot;. AI đưa ra 1–2 đề xuất cụ thể trong 3 giây thay vì trả về danh sách link dài dằng dặc.
              </p>
            </div>

            {/* Box 2 */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Google AI Overviews Chiếm Đoạt Click
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Google tự tóm tắt câu trả lời trực tiếp ở vị trí số 0. Người dùng lấy ngay số điện thoại hoặc địa chỉ mà không bao giờ kéo xuống bấm vào website của bạn nữa.
              </p>
            </div>

            {/* Box 3 */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <AlertCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Đối Thủ Đang Được AI Gợi Ý Mỗi Ngày
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Nếu thực thể số của bạn không được tối ưu theo chuẩn mô hình ngôn ngữ lớn (LLM), AI sẽ coi như bạn không tồn tại và đều đặn dẫn khách sang cho đối thủ.
              </p>
            </div>

            {/* Box 4 */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Agency Lớn Báo Giá &quot;Cắt Cổ&quot; 20–50Tr
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Các agency lớn đang hét giá dịch vụ GEO hàng chục triệu đồng mỗi tháng, biến công nghệ này thành đặc quyền của tập đoàn lớn và bỏ rơi 98% hộ kinh doanh nhỏ lẻ.
              </p>
            </div>
          </div>

          {/* LocalMate Solution Banner */}
          <div
            style={{
              backgroundColor: '#e8f5ed',
              border: '2px solid #a3e635',
              borderRadius: '16px',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.15rem', fontWeight: 800, color: '#0d7647' }}>
                LocalMate phá tan rào cản giá — Đưa công nghệ GEO về đúng giá trị thật!
              </h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.5 }}>
                Chỉ từ <strong style={{ color: '#0f172a' }}>2.900.000đ/tháng</strong>, quán ăn hay cửa hàng địa phương của bạn đã có trọn bộ hạ tầng kỹ thuật chuẩn AI Search 2026, nghiệm thu bằng báo cáo thực tế.
              </p>
            </div>
            <a
              href="#bang-gia-geo"
              style={{
                backgroundColor: '#0d7647',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.875rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              Xem Chi Tiết 2 Gói Dịch Vụ
            </a>
          </div>
        </Container>
      </section>

      {/* ==================== 3. 5 TRỤ CỘT TRIỂN KHAI GEO ==================== */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '0.3rem 0.8rem',
                backgroundColor: '#e8f5ed',
                color: '#0d7647',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                borderRadius: '9999px',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem'
              }}
            >
              PHƯƠNG PHÁP LUẬN KỸ THUẬT CHUẨN XÁC
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
              5 Trụ Cột Triển Khai GEO Địa Phương Tại LocalMate
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
              Không lý thuyết sáo rỗng. Đây là 5 trụ cột kỹ thuật chuẩn xác giúp mô hình AI ghi nhận, phân tích cảm xúc và chủ động tiến cử thương hiệu của bạn.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {geoPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                  {/* Left: Step number, icon, and title */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        minWidth: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        color: '#0d7647',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '1.25rem',
                        flexShrink: 0
                      }}
                    >
                      {pillar.step}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          display: 'inline-block',
                          marginBottom: '0.4rem'
                        }}
                      >
                        {pillar.badge}
                      </span>
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.4 }}>
                        {pillar.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Concrete Outcome Box */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                      alignSelf: 'center'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle2 size={16} />
                      <span>Mục Tiêu Đạt Được:</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5 }}>
                      {pillar.actionPoint}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== 4. PHỦ SÓNG 4 MÔ HÌNH AI LỚN NHẤT ==================== */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
              Tối Ưu Đồng Bộ Trên 4 Mô Hình AI Search Lớn Nhất Thế Giới
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
              Khách hàng dùng rất nhiều ứng dụng khác nhau. LocalMate đảm bảo cơ sở của bạn được AI gọi tên dù khách đang dùng bất kỳ trợ lý nào.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {aiPlatforms.map((plat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{plat.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                  {plat.name}
                </h3>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#0d7647',
                    backgroundColor: '#f0fdf4',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    marginBottom: '0.75rem'
                  }}
                >
                  {plat.users}
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                  {plat.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== 5. 35 ĐẦU VIỆC CHECKLIST KỸ THUẬT ==================== */}
      <GeoTaskChecklistSection onOpenConsultForm={onOpenConsultForm} />

      {/* ==================== 6. BẢNG GIÁ PHÁ ĐẢO THỊ TRƯỜNG ==================== */}
      <section id="bang-gia-geo" style={{ padding: '5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '0.3rem 0.8rem',
                backgroundColor: '#e8f5ed',
                color: '#0d7647',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                borderRadius: '9999px',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem'
              }}
            >
              BẢNG GIÁ NIÊM YẾT MINH BẠCH
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
              Bảng Giá Dịch Vụ GEO Địa Phương — Chỉ Từ 2.900.000đ/Tháng
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
              Chi phí hợp lý, làm từ gốc kỹ thuật thay vì các gói báo giá cồng kềnh. Không phụ phí ẩn, không ép ký hợp đồng năm, nghiệm thu bằng báo cáo đo lường thực tế.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
          >
            {/* GÓI 1: KHỞI ĐỘNG (2.900.000đ) */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '0.75rem'
                  }}
                >
                  Cho 1 Cơ Sở Đơn Lẻ
                </span>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>
                  Local GEO Khởi Động
                </h3>
                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                  Cho quán ăn, tiệm spa, phòng khám, tiệm hoa, salon tóc, cửa hàng bán lẻ 1 cơ sở muốn phủ sóng bán kính 3–5km.
                </p>

                <div style={{ padding: '1.25rem 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                    <span style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0f172a' }}>2.900.000đ</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#64748b' }}>/ tháng</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#0d7647', fontWeight: 700, marginTop: '0.25rem' }}>
                    Thanh toán từng tháng • Nghiệm thu đo lường thực tế
                  </div>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Tối ưu Thực thể số:</strong> Cấy Schema LocalBusiness sâu chuẩn Google &amp; AI Index.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>50 Prompt Bank địa phương:</strong> Bộ câu hỏi tự nhiên theo khu vực bán kính 3–5km.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>10+ Citations Đa Nền Tảng:</strong> Đồng bộ NAP trên Google Maps, Apple Maps, Cốc Cốc, Bing.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Tối ưu Review Sentiment:</strong> Bộ kit QR &amp; kịch bản thu hút review giàu cảm xúc tích cực.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Phủ sóng trên 2 mô hình cốt lõi:</strong> ChatGPT Search &amp; Google Gemini / AI Overviews.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Báo cáo Share of Model:</strong> Đo lường định kỳ hàng tháng với ảnh chụp truy vấn thực tế.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>100% Tài khoản chính chủ:</strong> Bàn giao toàn quyền quản trị cho bạn.</span>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={() => handleCTA('Gói Local GEO Khởi Động (2.900.000đ/tháng)')}
                  style={{
                    width: '100%',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Chọn Gói Khởi Động (2.9Tr)</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* GÓI 2: TĂNG TỐC (4.900.000đ) - KHUYÊN DÙNG */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #0d7647',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Badge Popular */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '24px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '9999px',
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 6px rgba(13, 118, 71, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Sparkles size={14} color="#facc15" />
                <span>ĐƯỢC CHỌN NHIỀU NHẤT ⭐</span>
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    backgroundColor: '#e8f5ed',
                    color: '#0d7647',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '0.75rem'
                  }}
                >
                  Phủ Sóng Toàn Quận / Huyện
                </span>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>
                  Local GEO Tăng Tốc
                </h3>
                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                  Phủ sóng toàn quận/huyện, đẩy mạnh đề xuất trên 4 mô hình AI, phù hợp ngành cạnh tranh gay gắt hoặc chuỗi 2–3 cơ sở.
                </p>

                <div style={{ padding: '1.25rem 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                    <span style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0d7647' }}>4.900.000đ</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#64748b' }}>/ tháng</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#0d7647', fontWeight: 700, marginTop: '0.25rem' }}>
                    Đẩy mạnh đề xuất đồng thời trên 4 mô hình AI lớn nhất
                  </div>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Tất cả quyền lợi của gói Khởi Động.</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Mở rộng 80 Prompt Bank:</strong> Bao phủ các câu hỏi so sánh, tìm kiếm giá trị cao &amp; từ khóa cạnh tranh.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>25+ Citations &amp; Entity Hub Đa Tầng:</strong> Bổ sung danh bạ ngành, trang đánh giá chuyên biệt.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Phủ sóng trên 4 mô hình AI:</strong> ChatGPT-4o Search, Google Gemini Pro, Copilot &amp; Perplexity AI.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Tối ưu Semantic Content chuyên sâu:</strong> Cấu trúc trang web/hồ sơ chuẩn AI Engine đọc hiểu trong 10ms.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Phân tích đối thủ cạnh tranh trên AI:</strong> Báo cáo những đối thủ đang được AI nhắc tên và chiến lược vượt mặt.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span><strong>Hỗ trợ kỹ thuật 1–1 riêng:</strong> Cập nhật dữ liệu định kỳ mỗi 2 tuần qua Zalo riêng.</span>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={() => handleCTA('Gói Local GEO Tăng Tốc (4.900.000đ/tháng)')}
                  style={{
                    width: '100%',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)'
                  }}
                >
                  <Sparkles size={16} color="#facc15" />
                  <span>Chọn Gói Tăng Tốc (4.9Tr)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cam Kết Vàng */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '16px',
              padding: '1.75rem',
              maxWidth: '960px',
              margin: '3rem auto 0 auto'
            }}
          >
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} color="#0d7647" />
              <span>3 Cam Kết Cốt Lõi Của LocalMate Với Doanh Nghiệp Địa Phương:</span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', fontSize: '0.875rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Nghiệm thu Share of Model thực tế:</strong> Cung cấp báo cáo minh chứng bằng ảnh chụp màn hình truy vấn AI thực tế.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>100% Tài khoản chính chủ:</strong> Toàn bộ dữ liệu, email quản trị, quyền ghim vị trí đều thuộc sở hữu 100% chính chủ của bạn.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#0d7647" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Hỗ trợ kỹ thuật 1-1 tại chỗ:</strong> Đội ngũ LocalMate hỗ trợ trực tiếp tại TP.HCM &amp; Đà Nẵng, không để khách bơ vơ.</span>
              </div>
            </div>
          </div>

          {/* ROI Breakeven Justification (Tối Ưu Chuyển Đổi Thực Tế) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #0d7647',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '960px',
              margin: '2rem auto 0 auto',
              boxShadow: '0 4px 15px rgba(13, 118, 71, 0.08)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', backgroundColor: '#e8f5ed', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                  BÀI TOÁN KINH TẾ THỰC TẾ
                </span>
                <h4 style={{ margin: '0.5rem 0 0 0', fontSize: '1.25rem', fontWeight: 900, color: '#0f172a' }}>
                  Điểm Hòa Vốn Dịch Vụ GEO: Cần Bao Nhiêu Khách Mới Mỗi Tháng Để Có Lãi?
                </h4>
              </div>
              <a
                href={`${CONTACT_INFO.zaloUrl}?text=${encodeURIComponent('Chào KTV LocalMate, tôi muốn tính toán điểm hòa vốn và ước tính lượng khách từ GEO cho quán của tôi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={16} />
                <span>Chat Zalo Nhận Tính Toán Miễn Phí</span>
              </a>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: '0 0 1.25rem 0' }}>
              Với chi phí dịch vụ chỉ <strong>2.900.000đ/tháng</strong> (tương đương chưa đến 98.000đ/ngày), bạn không cần hàng nghìn lượt truy cập ảo. Mục tiêu của GEO là chuyển đổi khách hàng có nhu cầu khẩn cấp quanh tiệm:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>F&amp;B / Quán Ăn</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', margin: '0.25rem 0' }}>10–15 Khách/tháng</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Đơn bình quân 200k-300k. AI gợi ý khách du lịch &amp; khách văn phòng quanh tiệm.</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>Spa / Thẩm Mỹ / Salon</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', margin: '0.25rem 0' }}>3–5 Khách/tháng</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Đơn dịch vụ từ 600k-1.500k. Tỷ lệ khách quay lại và giới thiệu cao.</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>Phòng Khám / Nha Khoa</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', margin: '0.25rem 0' }}>1–2 Bệnh nhân/tháng</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Đơn niềng răng / làm răng / khám bệnh từ 2tr-10tr. Hòa vốn ngay từ ca đầu tiên.</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>Gara / Cứu Hộ / Sửa Chữa</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', margin: '0.25rem 0' }}>1–3 Cuộc gọi/tháng</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Khách tìm gấp khi gặp sự cố, tỷ lệ chuyển đổi thành khách hàng thực tế &gt; 80%.</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== 7. FORM ĐĂNG KÝ AUDIT MIỄN PHÍ ==================== */}
      <section id="dang-ky-audit" style={{ padding: '4.5rem 0', backgroundColor: '#f0fdf4', borderBottom: '1px solid #bbf7d0' }}>
        <Container size="md">
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #86efac',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.1)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  backgroundColor: '#dcfce7',
                  color: '#0d7647',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  marginBottom: '0.5rem'
                }}
              >
                ƯU ĐÃI ĐẶC BIỆT 2026
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                Đăng Ký Nhận Báo Cáo Audit Đề Xuất AI Miễn Phí
              </h2>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                Kỹ thuật viên LocalMate sẽ quét trực tiếp quán của bạn trên ChatGPT &amp; Google Gemini, lập báo cáo 7 tiêu chí đo lường và gửi kết quả qua Zalo trong 24 giờ.
              </p>
            </div>

            {toastMessage && (
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: '#e8f5ed',
                  border: '1px solid #a3e635',
                  borderRadius: '10px',
                  color: '#0d7647',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                <span>{toastMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmitAudit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                    Họ và tên của bạn <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Anh Nam, Chị Hương..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                    Số điện thoại / Zalo <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: 0912 345 678"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                    Tên Quán Ăn / Spa / Phòng Khám / Shop
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Phở Ba Gia, Nha Khoa Tâm Đức..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                    Khu vực kinh doanh (Quận/Huyện, Tỉnh/Thành)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Hóc Môn, Quận 12, Thủ Đức..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                  Gói dịch vụ bạn quan tâm
                </label>
                <select
                  name="packageChoice"
                  value={formData.packageChoice}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Local GEO Khởi Động (2.900.000đ/tháng)">
                    Local GEO Khởi Động — 2.900.000đ/tháng (1 cơ sở đơn lẻ)
                  </option>
                  <option value="Local GEO Tăng Tốc (4.900.000đ/tháng)">
                    Local GEO Tăng Tốc — 4.900.000đ/tháng (Phủ sóng toàn quận, 4 mô hình AI)
                  </option>
                  <option value="Cần tư vấn chọn gói phù hợp">
                    Chưa biết chọn gói nào — Cần tư vấn thêm
                  </option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.35rem' }}>
                  Ghi chú hoặc câu hỏi thêm (Tùy chọn)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: Quán tôi đã có Google Maps nhưng chưa thấy ChatGPT nhắc đến..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '1rem',
                  color: '#ffffff',
                  backgroundColor: '#0d7647',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Đang gửi thông tin...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} color="#facc15" />
                    <span>Gửi Đăng Ký — Nhận Báo Cáo Audit Miễn Phí</span>
                  </>
                )}
              </button>

              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', textAlign: 'center', color: '#64748b' }}>
                Cam kết bảo mật thông tin. Không spam quảng cáo. Kỹ thuật viên liên hệ lại trong vòng 2 giờ làm việc.
              </p>
            </form>

            {/* Direct Contact */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: '#475569' }}>
              <span style={{ fontWeight: 700 }}>Cần trao đổi gấp với kỹ thuật viên trưởng?</span>
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#0d7647',
                  fontWeight: 800,
                  textDecoration: 'none'
                }}
              >
                <PhoneCall size={16} />
                <span>Gọi Hotline / Chat Zalo: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== 8. FAQ ACCORDION ==================== */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="md">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                color: '#0d7647',
                fontWeight: 800,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}
            >
              GIẢI ĐÁP THẮC MẮC
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 900, color: '#0f172a' }}>
              Câu Hỏi Thường Gặp Về Dịch Vụ GEO
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', marginTop: '0.5rem' }}>
              Giải đáp cặn kẽ mọi câu hỏi của chủ quán và chủ doanh nghiệp về Generative Engine Optimization.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#0f172a',
                      fontWeight: 800,
                      fontSize: '0.95rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="#0d7647"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, borderTop: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ==================== 9. FINAL CTA FOOTER STRIP ==================== */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#0d7647', color: '#ffffff', textAlign: 'center' }}>
        <Container size="md">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 900, marginBottom: '1rem', color: '#ffffff' }}>
            Đừng Để Đối Thủ Được AI Đề Xuất Trước Bạn!
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#dcfce7', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6, textWrap: 'pretty' }}>
            Thị trường tìm kiếm bằng AI đang ở giai đoạn vàng ban đầu. Cơ sở nào hoàn thiện chuẩn dữ liệu sớm sẽ chiếm trọn niềm tin và sự ưu tiên của các mô hình AI lớn.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTA('Gói Local GEO Khởi Động (2.900.000đ/tháng)')}
              style={{
                backgroundColor: '#ffffff',
                color: '#0d7647',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Sparkles size={18} style={{ marginRight: '0.5rem' }} />
              Đăng ký gói GEO Khởi Động 2.900.000đ/tháng
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: '#ffffff',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              <Phone size={18} />
              <span>Hotline 24/7: 0834 422 439</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GeoServicePage;
