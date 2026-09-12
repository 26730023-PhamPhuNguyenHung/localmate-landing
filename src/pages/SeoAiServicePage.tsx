import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { AiSearchClusterNav } from '../components/services/AiSearchClusterNav';
import { AiSearchPricingTable } from '../components/services/AiSearchPricingTable';
import { AiPromptSimulator } from '../components/services/AiPromptSimulator';
import { Warranty5YearSection } from '../components/sections/Warranty5YearSection';
import { CapabilityContextBox } from '../components/ui/CapabilityContextBox';
import {
  Sparkles,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  FileText,
  Layers,
  BarChart3,
  PhoneCall,
  Check,
  ChevronDown,
  Building2,
  Share2,
  Award,
  BookOpen,
  Cpu,
  Target,
  HelpCircle
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';
import { submitLead } from '../services/leadService';

interface SeoAiServicePageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SeoAiServicePage: React.FC<SeoAiServicePageProps> = ({ onOpenConsultForm }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    websiteUrl: '',
    packageChoice: 'SEO AI Khởi Động (2.900.000đ/tháng)',
    notes: ''
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
        businessName: `${formData.businessName} (Web: ${formData.websiteUrl || 'Chưa có'})`,
        serviceInterest: `Dịch vụ SEO Google AI Overviews - ${formData.packageChoice}`,
        message: `Website: ${formData.websiteUrl} | Ghi chú: ${formData.notes}`,
        sourcePage: '/dich-vu/seo-ai'
      });
      setToastMessage('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ quét khả năng xuất hiện trong Google AI của website bạn và gửi báo cáo qua Zalo trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        websiteUrl: '',
        packageChoice: 'SEO AI Khởi Động (2.900.000đ/tháng)',
        notes: ''
      });
    } catch {
      setToastMessage('Đã có lỗi xảy ra. Bạn vui lòng liên hệ hotline/Zalo 0834.422.439 để được hỗ trợ tức thì.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCTA = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm('Dịch vụ SEO Google AI Overviews - 2.900.000đ/tháng');
    } else {
      window.location.href = `tel:${CONTACT_INFO.phoneRaw}`;
    }
  };

  // 5 Trụ cột kỹ thuật SEO Google AI
  const seoAiSteps = [
    {
      step: '01',
      title: 'Tối Ưu Chỉ Số Giá Trị Thông Tin Mới (Information Gain)',
      badge: 'Độc Quyền & Dữ Liệu Thật',
      icon: <FileText className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Google AI Overviews ghét nội dung xào nấu lặp lại. Thuật toán ưu tiên các trang có thông tin bổ sung độc nhất (Unique Information Gain): bảng giá dịch vụ thực tế, hình ảnh dự án chính chủ, số liệu khảo sát tại địa phương hoặc phản hồi của khách hàng thật.',
      actionPoint: 'Nội dung có giá trị khác biệt, được thuật toán AI chọn đưa vào phần trích dẫn.'
    },
    {
      step: '02',
      title: 'Nhúng Schema Trích Dẫn & Phân Đoạn Ngữ Nghĩa (Passage Indexing)',
      badge: 'Cấu Trúc Rõ Ràng',
      icon: <Layers className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Phân đoạn nội dung thành từng khối độc lập (Modular Content Blocks) kết hợp Schema FAQPage và HowTo. Cung cấp câu trả lời cô đọng 50 từ ngay dưới thẻ tiêu đề H2/H3 để Google AI bốc trọn đoạn văn đưa vào khung tóm tắt đầu trang.',
      actionPoint: 'Xuất hiện trong khung tóm tắt AI nổi bật nhất trên màn hình điện thoại người dùng.'
    },
    {
      step: '03',
      title: 'Tối Ưu Thực Thể Địa Phương (Local Entity Knowledge Graph)',
      badge: 'Xác Thực Doanh Nghiệp',
      icon: <Building2 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Liên kết thực thể website với Google Knowledge Graph và Google Business Profile. Khi người dùng tìm kiếm câu hỏi có yếu tố vị trí hoặc dịch vụ tại địa bàn, AI Overviews sẽ trích dẫn hồ sơ kèm bản đồ chỉ đường và số điện thoại liên hệ.',
      actionPoint: 'Kéo khách hàng có nhu cầu thực tế ghé tiệm hoặc gọi điện trực tiếp.'
    },
    {
      step: '04',
      title: 'Tối Ưu Tốc Độ Tải Dưới 1s & Trải Nghiệm Tương Tác Cực Nhanh',
      badge: 'Kỹ Thuật Thuần Túy',
      icon: <Cpu className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Google AI ưu tiên trích dẫn các trang có độ trễ thấp và điểm Core Web Vitals xanh mượt. LocalMate tinh giản mã nguồn bằng kiến trúc hiện đại, nén ảnh thế hệ mới và CDN Cloudflare để bot AI cào dữ liệu nhanh gấp 3 lần website thông thường.',
      actionPoint: 'Đảm bảo bot Google quét và cập nhật nội dung mới tức thì trong vài giờ.'
    },
    {
      step: '05',
      title: 'Theo Dõi Độ Phủ SGE Định Kỳ (AI Overviews Presence Tracker)',
      badge: 'Đo Lường Minh Bạch',
      icon: <BarChart3 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Quét tự động bộ từ khóa ngành hàng trên Google Search xem trang của bạn có xuất hiện trong khung tóm tắt AI hay không. Xuất báo cáo tỷ lệ hiển thị và lượt click thực tế từ Google Search Console.',
      actionPoint: 'Minh bạch 100% kết quả — Bạn nhìn thấy tận mắt hình ảnh hiển thị trên Google.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <SEOHead
        title="Dịch Vụ SEO AI Google Overviews — Tối Ưu Hiện Diện Vị Trí AI | LocalMate"
        description="Dịch vụ tối ưu xuất hiện trong khung Google AI Overviews (SGE): Tiếp cận khách hàng tự nhiên, tối ưu Information Gain, tốc độ tải dưới 1s. Giá chỉ từ 2.900.000đ/tháng, bảo hành kỹ thuật 5 năm."
        canonicalPath="/dich-vu/seo-ai"
      />

      {/* Cluster Nav */}
      <AiSearchClusterNav currentServiceSlug="seo-ai" />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#fcfdfd', borderBottom: '1px solid #e2e8f0', padding: '3.5rem 0 4rem 0' }}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Giải pháp', url: '/giai-phap' },
              { name: 'Được khách hàng tìm thấy', url: '/giai-phap/duoc-tim-thay' },
              { name: 'Tối ưu Google AI Overviews', url: '/dich-vu/seo-ai' }
            ]}
          />

          <CapabilityContextBox
            solutionName="Được khách hàng tìm thấy trên Google & AI"
            solutionUrl="/giai-phap/duoc-tim-thay"
          />

          <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#fef3c7',
                border: '1px solid #fde68a',
                color: '#b45309',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              <Search size={16} />
              <span>GOOGLE AI OVERVIEWS (SGE) • TỐI ƯU HIỆN DIỆN VỊ TRÍ TỔNG QUAN AI</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                textWrap: 'pretty'
              }}
            >
              Tối ưu xuất hiện trên <span style={{ color: '#0d7647' }}>Google AI Overviews</span> — Tiếp cận khách hàng tự nhiên
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                color: '#334155',
                lineHeight: 1.6,
                marginBottom: '2rem',
                textWrap: 'pretty'
              }}
            >
              Khung tóm tắt AI của Google hiện đã chiếm trọn màn hình điện thoại, đẩy kết quả SEO truyền thống tụt sâu. LocalMate tối ưu chuẩn <strong>Information Gain &amp; Helpful Content 2026</strong> để đưa thương hiệu của bạn vào <strong>khung nguồn tham chiếu hàng đầu</strong>.
            </p>

            {/* Pricing Tag Box */}
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                backgroundColor: '#ffffff',
                border: '2px solid #0d7647',
                borderRadius: '12px',
                padding: '1rem 2rem',
                boxShadow: '0 4px 12px rgba(13, 118, 71, 0.08)',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                  Gói dịch vụ định kỳ
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0d7647', lineHeight: 1.1 }}>
                  2.900.000đ <span style={{ fontSize: '1rem', fontWeight: 600, color: '#475569' }}>/ tháng</span>
                </div>
              </div>
              <div style={{ width: '1px', height: '38px', backgroundColor: '#e2e8f0', display: 'inline-block' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Chính sách vững chắc</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                  Bảo hành kỹ thuật 5 năm • KTV ghé tận nơi
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleCTA}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
                }}
              >
                <Sparkles size={18} style={{ marginRight: '0.5rem' }} />
                Đăng ký tối ưu Google AI Overviews ngay
              </Button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  color: '#0f172a',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                <PhoneCall size={18} color="#0d7647" />
                <span>Hotline tư vấn: 0834 422 439</span>
              </a>
            </div>

            {/* Trust highlights under CTA */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '1.75rem',
                fontSize: '0.875rem',
                color: '#475569'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Hiện diện vị trí tổng quan AI đầu Google</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Tối ưu Information Gain độc quyền</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Tốc độ trang dưới 1.2 giây</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Simulator Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ color: '#0d7647', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              MÔ PHỎNG THỰC TẾ
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              So sánh hiển thị trong Google AI Overviews
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
              Khám phá sự khác biệt khi người dùng tìm kiếm trên Google và AI trả lời trích dẫn thương hiệu của bạn.
            </p>
          </div>

          <AiPromptSimulator />
        </Container>
      </section>

      {/* 5 Bước Triển Khai SEO AI */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ color: '#0d7647', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              QUY TRÌNH CHUẨN GOOGLE
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              5 Bước chinh phục khung tóm tắt Google AI Overviews
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
              Quy trình chuẩn hóa dữ liệu từ gốc: giúp bot tìm kiếm nhận diện bài viết của bạn là nguồn thông tin hữu ích và nguyên bản nhất.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {seoAiSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#cbd5e1' }}>{step.step}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '4px' }}>
                    {step.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '0.5rem', borderRadius: '8px' }}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {step.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
                  {step.desc}
                </p>

                <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid #0d7647', fontSize: '0.825rem', color: '#0f172a', fontWeight: 600 }}>
                  Hiệu quả: {step.actionPoint}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Table Component */}
      <AiSearchPricingTable onOpenConsultForm={onOpenConsultForm} activeServiceSlug="seo-ai" />

      {/* 5-Year Warranty Section */}
      <Warranty5YearSection onOpenConsultForm={onOpenConsultForm} />

      {/* Form Nhận Báo Cáo Khảo Sát */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="md">
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '2px solid #0d7647',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ backgroundColor: '#dcfce7', color: '#0d7647', padding: '3px 10px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800 }}>
                QUÉT TỪ KHÓA AI MIỄN PHÍ 0Đ
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Đăng ký Kiểm tra Từ khóa Google AI Overviews
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }}>
                Kỹ thuật viên LocalMate sẽ quét danh sách từ khóa ngành của bạn trên Google AI và gửi báo cáo phân tích đối thủ qua Zalo trong 24 giờ.
              </p>
            </div>

            {toastMessage && (
              <div
                style={{
                  backgroundColor: toastMessage.includes('thành công') ? '#f0fdf4' : '#fef2f2',
                  border: `1px solid ${toastMessage.includes('thành công') ? '#86efac' : '#fca5a5'}`,
                  color: toastMessage.includes('thành công') ? '#166534' : '#991b1b',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                {toastMessage}
              </div>
            )}

            <form onSubmit={handleSubmitAudit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="VD: Chị Lan"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="VD: 0988 776 655"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Tên cơ sở / Ngành nghề hoạt động
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="VD: Phòng khám Cơ Xương Khớp Tâm Bình"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Website hoặc Fanpage hiện có
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="VD: tambinhclinic.vn"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Gói dịch vụ dự kiến
                </label>
                <select
                  name="packageChoice"
                  value={formData.packageChoice}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="SEO AI Khởi Động Địa Phương (2.900.000đ/tháng)">Gói Khởi Động Địa Phương — 2.900.000đ / tháng</option>
                  <option value="SEO AI Doanh Nghiệp Phủ Vùng (4.900.000đ/tháng)">Gói Doanh Nghiệp Phủ Vùng — 4.900.000đ / tháng</option>
                  <option value="SEO AI Toàn Diện Cụm AI Search (7.900.000đ/tháng)">Gói Toàn Diện Cụm AI Search — 7.900.000đ / tháng</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Những từ khóa bạn quan tâm nhất
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="VD: 'khám cơ xương khớp ở đâu tốt tại TPHCM', 'chi phí mổ thoái hóa khớp'..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  fontWeight: 800,
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  padding: '1rem',
                  fontSize: '1.05rem'
                }}
              >
                {isSubmitting ? 'Đang kiểm tra...' : 'Gửi yêu cầu kiểm tra Google AI Overviews 0đ'}
              </Button>
            </form>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="md">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#0d7647', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              GIẢI ĐÁP THẮC MẮC
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Câu hỏi thường gặp về SEO Google AI Overviews
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Google AI Overviews đã hiển thị tại Việt Nam chưa?',
                a: 'Có! Google đã chính thức kích hoạt AI Overviews cho người dùng tìm kiếm tại Việt Nam. Rất nhiều truy vấn liên quan đến y tế, làm đẹp, ăn uống, kỹ thuật và xây dựng đã xuất hiện khung AI snapshot ở đầu trang.'
              },
              {
                q: 'Nếu website của tôi đã đứng Top 1 từ trước thì có cần làm SEO AI không?',
                a: 'Cực kỳ cần thiết. Vì khung AI Overviews chiếm đến 70% chiều cao màn hình điện thoại, che khuất hoàn toàn vị trí Top 1 truyền thống. Người dùng có xu hướng đọc tóm tắt và bấm link nguồn trong khung AI trước khi cuộn tới vị trí Top 1 cũ.'
              },
              {
                q: 'Chính sách bảo hành kỹ thuật 5 năm của LocalMate cam kết những gì?',
                a: 'LocalMate cam kết duy trì mã nguồn website luôn đạt chuẩn Web Vitals cao nhất, tự động điều chỉnh thẻ Schema và cấu trúc dữ liệu tương thích với các bản cập nhật mới nhất của Google Search mà không phụ thu bất kỳ chi phí ẩn nào.'
              },
              {
                q: 'Kỹ thuật viên LocalMate có ghé tận nơi hỗ trợ không?',
                a: 'Có! LocalMate hoạt động theo tôn chỉ Người đồng hành số tại địa phương. Nhân viên kỹ thuật của chúng tôi sẵn sàng ghé tận cơ sở của bạn để cùng chụp hình thực tế, phỏng vấn chuyên môn và cấu hình tài khoản trực tiếp.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#f8fafc'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '1rem'
                  }}
                >
                  <span>{faq.q}</span>
                  <HelpCircle size={18} color="#0d7647" style={{ flexShrink: 0, marginLeft: '1rem' }} />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', color: '#475569', fontSize: '0.925rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Banner */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#0d7647', color: '#ffffff', textAlign: 'center' }}>
        <Container size="md">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
            Đón đầu xu hướng tìm kiếm AI trước khi đối thủ nhận ra
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#dcfce7', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6, textWrap: 'pretty' }}>
            Làn sóng Google AI Overviews đang thay đổi toàn diện bản đồ tìm kiếm. Hãy để LocalMate giúp bạn đón đầu xu thế với chi phí bình dân nhất.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleCTA}
              style={{
                backgroundColor: '#ffffff',
                color: '#0d7647',
                fontWeight: 800,
                fontSize: '1.05rem',
                border: 'none'
              }}
            >
              <Sparkles size={18} style={{ marginRight: '0.5rem' }} />
              Đăng ký gói SEO AI 2.900.000đ/tháng
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
              <PhoneCall size={18} />
              <span>Hotline 24/7: 0834 422 439</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SeoAiServicePage;
