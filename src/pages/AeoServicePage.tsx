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
  HelpCircle,
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
  BookOpen
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';
import { submitLead } from '../services/leadService';

interface AeoServicePageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const AeoServicePage: React.FC<AeoServicePageProps> = ({ onOpenConsultForm }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    websiteUrl: '',
    packageChoice: 'AEO Khởi Động Địa Phương (2.900.000đ/tháng)',
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
        serviceInterest: `Dịch vụ AEO - ${formData.packageChoice}`,
        message: `Website: ${formData.websiteUrl} | Ghi chú: ${formData.notes}`,
        sourcePage: '/dich-vu/aeo'
      });
      setToastMessage('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ quét khả năng trích dẫn AI của website bạn và gửi báo cáo qua Zalo trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        websiteUrl: '',
        packageChoice: 'AEO Khởi Động Địa Phương (2.900.000đ/tháng)',
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
      onOpenConsultForm('Dịch vụ Tối ưu Trích dẫn AI (AEO) - 2.900.000đ/tháng');
    } else {
      window.location.href = `tel:${CONTACT_INFO.phoneRaw}`;
    }
  };

  // 5 Trụ cột kỹ thuật AEO
  const aeoPillars = [
    {
      step: '01',
      title: 'Tái Cấu Trúc Nội Dung Nguyên Tử (Atomic Q&A)',
      badge: 'Cấu Trúc Tối Giản',
      icon: <FileText className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Answer Engines như Perplexity và SearchGPT chỉ trích xuất các đoạn văn ngắn gọn, súc tích 40–60 từ có câu trả lời trực tiếp. LocalMate tái cấu trúc lại toàn bộ nội dung theo mô hình Kim tự tháp ngược: Đưa câu trả lời dứt khoát lên đầu mục, kèm số liệu cụ thể và dẫn chứng thực tế.',
      actionPoint: 'AI trích xuất được ngay đáp án mà không bị lẫn lộn giữa hàng ngàn chữ lan man.'
    },
    {
      step: '02',
      title: 'Nhúng Hệ Thống Schema Trích Dẫn Đa Tầng',
      badge: 'Chuẩn Máy Đọc 100%',
      icon: <Layers className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Triển khai toàn diện bộ Schema.org chuyên dụng cho Answer Engine: FAQPage, HowTo, TechArticle, DefinedTerm và LocalBusiness. Từng câu hỏi và câu trả lời được gắn nhãn ngữ nghĩa chính xác, giúp bot thu thập dữ liệu hiểu lập tức đây là nguồn thông tin chính thức có bản quyền.',
      actionPoint: 'Gia tăng độ tin cậy để bot AI công nhận là nguồn tham chiếu chuẩn xác.'
    },
    {
      step: '03',
      title: 'Tối Ưu Điểm Uy Tín Nguồn (Answer Authority Score & E-E-A-T)',
      badge: 'Chuyên Môn & Xác Thực',
      icon: <Award className="w-6 h-6 text-[#0d7647]" />,
      desc: 'AI không bao giờ trích dẫn một website vô danh. LocalMate liên kết website của bạn với hồ sơ chuyên gia (Author Schema), bằng cấp hành nghề, chứng nhận chất lượng, giấy phép kinh doanh và các nguồn báo chí địa phương uy tín để gia tăng điểm thẩm quyền E-E-A-T tuyệt đối.',
      actionPoint: 'Website trở thành "Primary Citation Source" mà AI tin tưởng dẫn đường link.'
    },
    {
      step: '04',
      title: 'Tối Ưu Định Dạng Trực Quan & Bảng Đối Sánh (Data Tables)',
      badge: 'Số Liệu Rõ Ràng',
      icon: <BarChart3 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'AI rất ưu tiên trích xuất dữ liệu từ các bảng so sánh giá, danh sách bullet points và biểu đồ có cấu trúc rõ ràng. Chúng tôi định dạng lại toàn bộ bảng giá và quy trình dịch vụ sang định dạng bảng HTML chuẩn ngữ nghĩa, giúp AI dễ dàng đọc và đưa nguyên bảng vào câu trả lời.',
      actionPoint: 'Khách hàng thấy ngay bảng giá minh bạch của cơ sở trong câu trả lời của AI.'
    },
    {
      step: '05',
      title: 'Đo Lường Tỷ Lệ Trích Dẫn (Citation Rate Tracker)',
      badge: 'Minh Bạch Kết Quả',
      icon: <Share2 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Định kỳ quét kiểm tra trên Perplexity, ChatGPT Search, Bing Copilot và Google Snippets để đếm số lần website của bạn được trích dẫn làm link tham khảo. Xuất báo cáo trực quan cho chủ quán thấy rõ nguồn truy cập chất lượng cao chuyển đổi thành cuộc gọi.',
      actionPoint: 'Báo cáo minh bạch bằng ảnh chụp thật và dữ liệu Google Search Console thực tế.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <SEOHead
        title="Dịch Vụ AEO (Answer Engine Optimization) — Tối Ưu Trích Dẫn Nguồn AI | LocalMate"
        description="Dịch vụ AEO chuyên sâu: Đưa website trở thành nguồn trích dẫn uy tín trên Perplexity, ChatGPT Search, Google Snippets. Giá chỉ từ 2.900.000đ/tháng, bảo hành kỹ thuật 5 năm, KTV 1-1 tận nơi."
        canonicalPath="/dich-vu/aeo"
      />

      {/* Cluster Nav */}
      <AiSearchClusterNav currentServiceSlug="aeo" />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#fcfdfd', borderBottom: '1px solid #e2e8f0', padding: '3.5rem 0 4rem 0' }}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Giải pháp', url: '/giai-phap' },
              { name: 'Được khách hàng tìm thấy', url: '/giai-phap/duoc-tim-thay' },
              { name: 'Tối ưu Trích dẫn AI (AEO)', url: '/dich-vu/aeo' }
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
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#1d4ed8',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              <HelpCircle size={16} />
              <span>ANSWER ENGINE OPTIMIZATION (AEO) • ĐÓN ĐẦU ZERO-CLICK SEARCH</span>
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
              Đưa website trở thành <span style={{ color: '#0d7647' }}>nguồn trích dẫn tin cậy hàng đầu</span> của AI
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
              Khi người dùng hỏi câu hỏi trên <strong>Perplexity, ChatGPT Search hay Google Direct Answers</strong>, AI sẽ tóm tắt ngay lập tức và dẫn nguồn link uy tín. LocalMate giúp website của bạn được AI chọn làm <strong>link nguồn chính thức</strong> kèm nút bấm chuyển đổi.
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
                  Chi phí tối ưu trọn gói
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0d7647', lineHeight: 1.1 }}>
                  2.900.000đ <span style={{ fontSize: '1rem', fontWeight: 600, color: '#475569' }}>/ tháng</span>
                </div>
              </div>
              <div style={{ width: '1px', height: '38px', backgroundColor: '#e2e8f0', display: 'inline-block' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Cam kết đồng hành</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                  Bảo hành kỹ thuật 5 năm • Hỗ trợ 1-1 tận nơi
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
                Đăng ký dịch vụ AEO ngay
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
                <span>Gọi tư vấn: 0834 422 439</span>
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
                <span>Cấu trúc Atomic Q&A nguyên tử</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Schema FAQPage &amp; HowTo chuẩn W3C</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Kỹ thuật viên địa phương ghé tận nơi</span>
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
              TRẢI NGHIỆM THỰC TẾ
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Xem cách Answer Engines trích dẫn nguồn website của bạn
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
              Thử nghiệm giả lập cách AI trả lời khi website được tối ưu chuẩn trích dẫn AEO so với khi để nội dung sơ sài.
            </p>
          </div>

          <AiPromptSimulator />
        </Container>
      </section>

      {/* 5 Trụ Cột Triển Khai AEO */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ color: '#0d7647', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              PHƯƠNG PHÁP TRIỂN KHAI TỪ GỐC
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              5 Bước tối ưu giúp AI bắt buộc phải trích dẫn bạn
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
              Không dùng thủ thuật spam. LocalMate xây dựng cấu trúc thông tin nguyên tử và dữ liệu máy đọc theo chuẩn của Google, Perplexity và OpenAI.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {aeoPillars.map((pillar) => (
              <div
                key={pillar.step}
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
                  <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#cbd5e1' }}>{pillar.step}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#dcfce7', color: '#0d7647', padding: '2px 8px', borderRadius: '4px' }}>
                    {pillar.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '0.5rem', borderRadius: '8px' }}>
                    {pillar.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {pillar.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
                  {pillar.desc}
                </p>

                <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid #0d7647', fontSize: '0.825rem', color: '#0f172a', fontWeight: 600 }}>
                  Kết quả: {pillar.actionPoint}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Table Component */}
      <AiSearchPricingTable onOpenConsultForm={onOpenConsultForm} activeServiceSlug="aeo" />

      {/* 5-Year Warranty Section */}
      <Warranty5YearSection onOpenConsultForm={onOpenConsultForm} />

      {/* Form Nhận Báo Cáo Khảo Sát AEO */}
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
                QUÉT HIỆN TRẠNG MIỄN PHÍ 0Đ
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Đăng ký nhận Báo cáo Khảo sát Trích dẫn AEO
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }}>
                Kỹ thuật viên LocalMate sẽ kiểm tra website của bạn trên Perplexity, ChatGPT Search và gửi báo cáo chi tiết qua Zalo trong 24 giờ.
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
                    placeholder="VD: Anh Minh"
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
                    placeholder="VD: 0912 345 678"
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
                    Tên cơ sở kinh doanh / Doanh nghiệp
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="VD: Nha Khoa An Tâm"
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
                    Địa chỉ website hiện tại (nếu có)
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="VD: nhakhoaantam.vn"
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
                  Gói dịch vụ quan tâm
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
                  <option value="AEO Khởi Động Địa Phương (2.900.000đ/tháng)">Gói Khởi Động Địa Phương — 2.900.000đ / tháng</option>
                  <option value="AEO Doanh Nghiệp Phủ Vùng (4.900.000đ/tháng)">Gói Doanh Nghiệp Phủ Vùng — 4.900.000đ / tháng</option>
                  <option value="AEO Toàn Diện Cụm AI Search (7.900.000đ/tháng)">Gói Toàn Diện Cụm AI Search — 7.900.000đ / tháng</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Ghi chú hoặc câu hỏi bạn muốn kiểm tra trên AI
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="VD: Muốn kiểm tra khi khách hỏi 'Nha khoa niềng răng trả góp Thủ Đức' xem website có được trích dẫn không..."
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
                {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi yêu cầu khảo sát trích dẫn AI miễn phí (0đ)'}
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
              Câu hỏi thường gặp về Dịch vụ AEO
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Dịch vụ AEO khác gì so với SEO truyền thống và GEO?',
                a: 'SEO truyền thống tối ưu để lên top 10 đường link xanh của Google. GEO tối ưu để được trợ lý AI nhắc tên cơ sở khi người dùng trò chuyện. Còn AEO tập trung tối ưu để website của bạn trở thành nguồn tài liệu tin cậy (Primary Citation) được AI trích dẫn đường link bấm trực tiếp vào trong câu trả lời.'
              },
              {
                q: 'Tại sao Perplexity và ChatGPT Search lại ngày càng quan trọng?',
                a: 'Vì tệp người dùng tìm câu trả lời chuyên môn, giải pháp kỹ thuật, so sánh dịch vụ và tìm bác sĩ, luật sư đang chuyển dịch ồ ạt sang Perplexity và ChatGPT Search. Khách hàng đến từ nguồn trích dẫn của AI có độ tin tưởng cực cao và tỷ lệ chốt hợp đồng vượt trội.'
              },
              {
                q: 'Cơ sở của tôi chưa có website thì có làm AEO được không?',
                a: 'AEO bắt buộc cần một website để chứa mã Schema và nội dung nguyên tử cho AI trích dẫn. Nếu bạn chưa có web, LocalMate có giải pháp tạo web chuẩn di động trọn gói cực rẻ (chỉ từ 490k) và tích hợp sẵn cấu trúc AEO ngay từ đầu.'
              },
              {
                q: 'Chính sách bảo hành kỹ thuật 5 năm áp dụng như thế nào?',
                a: 'LocalMate cam kết bảo hành và cập nhật toàn bộ cấu trúc mã Schema, file tệp dữ liệu máy đọc trong suốt 5 năm. Khi các chuẩn kỹ thuật của OpenAI, Perplexity hay Google thay đổi, kỹ thuật viên LocalMate sẽ tự động cập nhật miễn phí cho website của bạn.'
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
            Biến website của bạn thành câu trả lời chính thức của AI
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#dcfce7', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6, textWrap: 'pretty' }}>
            Đừng để AI tự bịa câu trả lời hoặc trích dẫn website của đối thủ. Hãy để LocalMate chuẩn hóa dữ liệu từ gốc và đồng hành cùng bạn tại địa phương.
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
              Đăng ký gói AEO 2.900.000đ/tháng
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

export default AeoServicePage;
