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
import {
  Bot,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe,
  FileCode2,
  Star,
  BarChart3,
  PhoneCall,
  ChevronDown,
  HelpCircle,
  Share2,
  Users,
  Compass
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';
import { submitLead } from '../services/leadService';

interface SeoChatGptServicePageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SeoChatGptServicePage: React.FC<SeoChatGptServicePageProps> = ({ onOpenConsultForm }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    address: '',
    packageChoice: 'SEO ChatGPT Khởi Động Địa Phương (2.900.000đ/tháng)',
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
        businessName: `${formData.businessName} (Địa chỉ: ${formData.address || 'Chưa rõ'})`,
        serviceInterest: `Dịch vụ SEO ChatGPT - ${formData.packageChoice}`,
        message: `Địa chỉ: ${formData.address} | Ghi chú: ${formData.notes}`,
        sourcePage: '/dich-vu/seo-chatgpt'
      });
      setToastMessage('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ quét sự xuất hiện của tiệm bạn trên ChatGPT và gửi báo cáo qua Zalo trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        address: '',
        packageChoice: 'SEO ChatGPT Khởi Động Địa Phương (2.900.000đ/tháng)',
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
      onOpenConsultForm('Dịch vụ SEO ChatGPT - 2.900.000đ/tháng');
    } else {
      window.location.href = `tel:${CONTACT_INFO.phoneRaw}`;
    }
  };

  const chatGptSteps = [
    {
      step: '01',
      title: 'Tạo lập & Cấu hình tệp chuẩn llms.txt & llms-full.txt',
      badge: 'Cổng Dữ Liệu OpenAI',
      icon: <FileCode2 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Tạo file chuẩn văn bản máy đọc đặt trực tiếp tại thư mục gốc website (domain.vn/llms.txt). Tệp chứa toàn bộ tóm tắt dịch vụ, bảng giá, hotline, vị trí và thế mạnh của cơ sở để các bot tìm kiếm của OpenAI (GPTBot) đọc hiểu ngay tức thì.',
      actionPoint: 'ChatGPT nắm trọn vẹn thông tin cốt lõi mà không cần mất công đoán mò.'
    },
    {
      step: '02',
      title: 'Đồng bộ Entity trên các cơ sở dữ liệu mở (Open Data)',
      badge: 'Bộ Nhớ Nền Tảng',
      icon: <Globe className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Mô hình ngôn ngữ của OpenAI được huấn luyện dựa trên các nguồn dữ liệu mở khổng lồ. LocalMate đồng bộ hóa thực thể thương hiệu của bạn trên Wikidata, OpenStreetMap, Bing Places, Apple Maps và danh bạ số quốc gia để củng cố độ tin cậy.',
      actionPoint: 'ChatGPT nhận diện tiệm bạn là một thực thể kinh doanh có thật, hợp pháp và uy tín.'
    },
    {
      step: '03',
      title: 'Tối ưu ngữ nghĩa đàm thoại (Conversational Prompts)',
      badge: 'Bao Phủ 50+ Kịch Bản',
      icon: <MessageSquare className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Khách hàng không gõ từ khóa cộc lốc mà trò chuyện tự nhiên với ChatGPT ("Tìm quán ăn gia đình có chỗ đậu xe gần đây", "Nha khoa nào bọc sứ không đau?"). Chúng tôi thiết lập các ngữ cảnh đối thoại để tiệm bạn luôn là câu trả lời lý tưởng nhất.',
      actionPoint: 'Xuất hiện tự nhiên trong các cuộc hội thoại tư vấn mua sắm của người dùng.'
    },
    {
      step: '04',
      title: 'Chiến lược Review Sentiment (Chấm điểm cảm xúc NLP)',
      badge: 'Cảm Xúc Tích Cực',
      icon: <Star className="w-6 h-6 text-[#0d7647]" />,
      desc: 'ChatGPT sử dụng mô hình phân tích cảm xúc (Sentiment Analysis) để đọc các bài đánh giá trên mạng. LocalMate cung cấp bộ kit QR thông minh và hướng dẫn khách hàng để lại đánh giá chứa các từ khóa ngữ nghĩa tích cực ("phục vụ chu đáo", "bác sĩ tận tâm", "giá cả minh bạch").',
      actionPoint: 'Đưa doanh nghiệp vào danh sách phân loại "Được khuyên dùng cao nhất".'
    },
    {
      step: '05',
      title: 'Đo lường bằng Prompt Benchmark & Bảo hành 5 năm',
      badge: 'Chụp Màn Hình Thật',
      icon: <BarChart3 className="w-6 h-6 text-[#0d7647]" />,
      desc: 'Định kỳ hàng tháng kiểm tra ngẫu nhiên 40–60 truy vấn trên ChatGPT-4o và SearchGPT. Chụp ảnh màn hình thực tế gửi chủ quán xem tiệm được gợi ý ở vị trí số mấy, đi kèm chính sách bảo hành kỹ thuật hạ tầng 5 năm.',
      actionPoint: 'Khách hàng hoàn toàn yên tâm với kết quả minh chứng bằng người thật việc thật.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <SEOHead
        title="Dịch Vụ SEO ChatGPT — Đưa Thương Hiệu Vào Hội Thoại AI | LocalMate"
        description="Dịch vụ SEO ChatGPT chuyên sâu: Tối ưu tệp llms.txt, Entity Open Data, đưa thương hiệu vào đề xuất của 600M người dùng ChatGPT. Giá chỉ từ 2.900.000đ/tháng, bảo hành 5 năm, KTV 1-1 tận nơi."
        canonicalPath="/dich-vu/seo-chatgpt"
      />

      {/* Cluster Nav */}
      <AiSearchClusterNav currentServiceSlug="seo-chatgpt" />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#fcfdfd', borderBottom: '1px solid #e2e8f0', padding: '3.5rem 0 4rem 0' }}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Trang chủ', url: '/' },
              { name: 'Dịch vụ', url: '/dich-vu' },
              { name: 'Tối ưu đề xuất ChatGPT', url: '/dich-vu/seo-chatgpt' }
            ]}
          />

          <div style={{ maxWidth: '850px', margin: '2rem auto 0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ecfdf5',
                border: '1px solid #a7f3d0',
                color: '#065f46',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              <Bot size={16} />
              <span>SEO CHATGPT &amp; SEARCHGPT • 600M+ NGƯỜI DÙNG CHỦ ĐỘNG TƯ VẤN</span>
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
              Đưa thương hiệu vào <span style={{ color: '#0d7647' }}>cuộc hội thoại mua hàng</span> của ChatGPT
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
              Người tiêu dùng trẻ và có thu nhập cao đang chuyển sang hỏi <strong>ChatGPT</strong> trước khi quyết định mua sắm hoặc sử dụng dịch vụ. LocalMate giúp cơ sở của bạn trở thành <strong>đáp án được AI đề xuất tự nhiên nhất</strong>.
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
                  Chi phí trọn gói minh bạch
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0d7647', lineHeight: 1.1 }}>
                  2.900.000đ <span style={{ fontSize: '1rem', fontWeight: 600, color: '#475569' }}>/ tháng</span>
                </div>
              </div>
              <div style={{ width: '1px', height: '38px', backgroundColor: '#e2e8f0', display: 'inline-block' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Cam kết vững chắc</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                  Bảo hành kỹ thuật 5 năm • KTV đồng hành tận nơi
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
                Đăng ký tối ưu ChatGPT ngay
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
                <span>Chuẩn tệp llms.txt &amp; llms-full.txt</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Đồng bộ Wikidata &amp; OpenStreetMap</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Kỹ thuật viên 1-1 hỗ trợ tận nơi</span>
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
              MÔ PHỎNG HỘI THOẠI
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Thử nghiệm cách ChatGPT nhắc tên thương hiệu của bạn
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
              Xem trước câu trả lời của ChatGPT khi người dùng hỏi các câu hỏi tư vấn dịch vụ tại địa phương.
            </p>
          </div>

          <AiPromptSimulator />
        </Container>
      </section>

      {/* 5 Trụ Cột Triển Khai SEO ChatGPT */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ color: '#0d7647', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              PHƯƠNG PHÁP TRIỂN KHAI TẬN GỐC
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              5 Bước đưa thương hiệu vào bộ nhớ đàm thoại của ChatGPT
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
              Không phụ thuộc vào quảng cáo trả phí ngắn hạn. Xây dựng tài sản số vĩnh viễn giúp ChatGPT luôn ưu tiên nhắc tên bạn.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {chatGptSteps.map((step) => (
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#ecfdf5', color: '#065f46', padding: '2px 8px', borderRadius: '4px' }}>
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
      <AiSearchPricingTable onOpenConsultForm={onOpenConsultForm} activeServiceSlug="seo-chatgpt" />

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
                KHẢO SÁT HIỆN DIỆN CHATGPT 0Đ
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Đăng ký Kiểm tra Độ phủ Thương hiệu trên ChatGPT
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }}>
                LocalMate sẽ chạy bộ 30+ prompt đàm thoại mua hàng tại quận/huyện của bạn trên ChatGPT và gửi video/ảnh chụp thực tế qua Zalo trong 24 giờ.
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
                    placeholder="VD: Anh Hoàng"
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
                    placeholder="VD: 0903 123 456"
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
                    Tên cơ sở kinh doanh / Cửa hàng
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="VD: Tiệm Bánh Trà Sữa Mộc"
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
                    Địa chỉ tiệm (Quận / Huyện)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="VD: 123 Lê Lợi, Quận 1"
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
                  Gói dịch vụ bạn quan tâm
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
                  <option value="SEO ChatGPT Khởi Động Địa Phương (2.900.000đ/tháng)">Gói Khởi Động Địa Phương — 2.900.000đ / tháng</option>
                  <option value="SEO ChatGPT Doanh Nghiệp Phủ Vùng (4.900.000đ/tháng)">Gói Doanh Nghiệp Phủ Vùng — 4.900.000đ / tháng</option>
                  <option value="SEO ChatGPT Toàn Diện Cụm AI Search (7.900.000đ/tháng)">Gói Toàn Diện Cụm AI Search — 7.900.000đ / tháng</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Mô tả ngắn dịch vụ hoặc đối thủ bạn muốn so sánh
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="VD: Quán mình bán trà sữa cao cấp, muốn khi khách hỏi ChatGPT tìm quán hẹn hò chill Quận 1 sẽ được gợi ý..."
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
                {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu khảo sát ChatGPT miễn phí'}
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
              Câu hỏi thường gặp về SEO ChatGPT
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Làm thế nào để ChatGPT biết đến cơ sở kinh doanh của tôi?',
                a: 'ChatGPT thu thập thông tin qua hai nguồn: Một là dữ liệu cào web từ các website có tệp llms.txt, Schema cấu trúc dữ liệu và bài viết uy tín; Hai là tìm kiếm trực tiếp thời gian thực (SearchGPT) kết nối với các nguồn danh bạ số và bản đồ.'
              },
              {
                q: 'Sau bao lâu thì ChatGPT bắt đầu nhắc tên tiệm?',
                a: 'Sau khi hoàn tất tích hợp tệp llms.txt, cấu hình Schema và đồng bộ thực thể, bot GPTBot của OpenAI sẽ thu thập dữ liệu trong vòng 2–3 tuần. Tiệm của bạn sẽ bắt đầu xuất hiện trong các phản hồi gợi ý tự nhiên khi người dùng hỏi quanh khu vực.'
              },
              {
                q: 'Chính sách bảo hành kỹ thuật 5 năm có bao gồm cập nhật khi OpenAI đổi thuật toán không?',
                a: 'Hoàn toàn có! OpenAI liên tục nâng cấp các mô hình từ GPT-4o sang GPT-5, SearchGPT. LocalMate cam kết cập nhật chuẩn tệp máy đọc và hạ tầng kỹ thuật miễn phí trong suốt 5 năm theo hợp đồng.'
              },
              {
                q: 'Kỹ thuật viên LocalMate có đến tận nơi hướng dẫn nhân viên xin đánh giá không?',
                a: 'Có! Kỹ thuật viên LocalMate tại địa phương sẽ đến tận cơ sở, bàn giao bộ ấn phẩm mã QR thông minh để bàn và hướng dẫn trực tiếp quy trình giúp khách hàng để lại đánh giá tích cực một cách tự nhiên nhất.'
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
            Đừng để khách hàng hỏi ChatGPT và nhận được tên đối thủ
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#dcfce7', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6, textWrap: 'pretty' }}>
            Hàng triệu người đang tìm kiếm thông qua ChatGPT mỗi ngày. Hãy chiếm trọn cảm tình của AI với giải pháp gốc rễ từ LocalMate.
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
              Đăng ký gói SEO ChatGPT 2.900.000đ/tháng
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

export default SeoChatGptServicePage;
