import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA } from '../data/company';
import { submitLead } from '../services/leadService';
import {
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  MessageSquare,
  Sheet,
  BellRing,
  Bot,
  CalendarCheck,
  Database,
  Lock,
  Headphones,
  Check,
  Smartphone,
  Share2
} from 'lucide-react';

interface AutomationPillarPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const AutomationPillarPage: React.FC<AutomationPillarPageProps> = ({ onOpenConsultForm }) => {
  // Extract data from Single Source of Truth (SSOT)
  const automationPillar = COMPANY_DATA.pillars.find((p) => p.slug === 'automation');
  const automationOffer = automationPillar?.offers[0] || COMPANY_DATA.pillars[4].offers[0];
  const guarantees = COMPANY_DATA.guarantees;
  const entity = COMPANY_DATA.entity;

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    preferredChannel: 'Báo đơn qua Zalo & Telegram',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Phần Mềm & Tự Động Hóa', url: '/automation' }
  ];

  const handleCTA = (serviceName?: string) => {
    const selected = serviceName || automationOffer.name;
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      const formEl = document.getElementById('dang-ky-tu-dong-hoa');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `tel:${entity.contact.hotlineTel}`;
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setSubmitSuccess('Vui lòng nhập họ tên và số điện thoại/Zalo để kỹ thuật viên kết nối luồng thử nghiệm.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        businessName: formData.businessName.trim() || 'Chưa cung cấp tên cơ sở',
        serviceInterest: `Automation Pillar: ${automationOffer.name} (${formData.preferredChannel})`,
        message: `Kênh mong muốn: ${formData.preferredChannel} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/automation'
      });
      setSubmitSuccess('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ gửi link demo bắn tin nhắn thử về Zalo/Telegram của bạn trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        preferredChannel: 'Báo đơn qua Zalo & Telegram',
        notes: ''
      });
    } catch {
      setSubmitSuccess('Có lỗi kết nối. Bạn vui lòng liên hệ hotline/Zalo 0834.422.439 để được hỗ trợ tức thì.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Real Features for Automation
  const technicalFeatures = [
    {
      icon: <BellRing className="w-6 h-6 text-[#0d7647]" />,
      title: 'Bắn Chuông Báo Đơn Về Zalo / Telegram Sau 3 Giây',
      desc: 'Khi khách hàng để lại số điện thoại hoặc đặt lịch trên website, một thông báo tức thì chứa đầy đủ họ tên, số điện thoại, nhu cầu sẽ rung chuông điện thoại của bạn ngay lập tức. Giúp bạn gọi lại tư vấn khi khách hàng đang nóng lòng chờ.',
      badge: 'Phản Hồi Thần Tốc'
    },
    {
      icon: <Sheet className="w-6 h-6 text-[#0d7647]" />,
      title: 'Đồng Bộ Tự Động Vào Google Sheets Chuẩn Mini-CRM',
      desc: 'Không cần ghi chép sổ tay hay copy paste thủ công. Từng dòng thông tin khách hàng được lưu trữ trật tự vào Google Sheets cá nhân, tự động gắn ngày giờ, nguồn truy cập và phân loại trạng thái (Mới, Đã gọi, Chốt đơn).',
      badge: '0đ Phí Bản Quyền'
    },
    {
      icon: <Bot className="w-6 h-6 text-[#0d7647]" />,
      title: 'Kịch Bản Chatbot Tự Động Trả Lời Bảng Giá & Menu',
      desc: 'Khi bạn đang bận nấu ăn, bận khám bệnh hay đang thi công ngoài công trình, chatbot thông minh trên Zalo OA hoặc Fanpage sẽ tự động chào hỏi, gửi bảng giá và hướng dẫn khách để lại thông tin mà không để khách phải chờ đợi.',
      badge: 'Trực 24/7'
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#0d7647]" />,
      title: 'Tự Động Đặt Lịch & Nhắc Hẹn Trực Tuyến',
      desc: 'Khách hàng có thể tự chọn khung giờ rảnh phù hợp. Hệ thống tự động kiểm tra lịch trống, khóa giờ đã đặt và gửi tin nhắn Zalo/SMS nhắc lịch cho khách trước giờ hẹn 2 tiếng, giảm thiểu 80% tình trạng khách quên hoặc bùng lịch.',
      badge: 'Giảm Khách Bùng Lịch'
    }
  ];

  // Specific FAQs for SME Automation
  const faqs = [
    {
      question: 'Tôi không rành về máy tính và công nghệ có sử dụng được hệ thống này không?',
      answer: 'Cực kỳ dễ dùng. Kỹ thuật viên LocalMate sẽ cài đặt sẵn toàn bộ luồng tự động. Công việc hàng ngày của bạn chỉ đơn giản là mở điện thoại xem thông báo tin nhắn trên Zalo hoặc Telegram y như cách bạn nhận tin nhắn từ người thân, không cần thao tác phần mềm phức tạp.'
    },
    {
      question: 'Hệ thống này có phải trả phí duy trì hàng tháng cho phần mềm không?',
      answer: 'Không. Đây là điểm khác biệt lớn nhất tại LocalMate: chúng tôi tối ưu giải pháp trên hạ tầng miễn phí của Google (Google Sheets, Google Apps Script) và Telegram/Zalo API. Bạn chỉ thanh toán chi phí cài đặt một lần duy nhất từ 1.900.000đ, không phát sinh bất kỳ khoản phí phần mềm định kỳ nào.'
    },
    {
      question: 'Dữ liệu khách hàng của tôi có an toàn không? Có sợ bị lộ thông tin không?',
      answer: 'An toàn 100%. Toàn bộ dữ liệu khách hàng được chuyển thẳng về tài khoản Google Drive và bảng tính Google Sheets do chính email của bạn quản lý. LocalMate không lưu trữ và không giữ dữ liệu khách hàng của bạn.'
    },
    {
      question: 'Website tôi đang có từ trước có tích hợp được hệ thống tự động này không?',
      answer: 'Có. Chúng tôi có thể nhúng mã Webhook nhẹ nhàng vào bất kỳ website nào (WordPress, Landing Page, Wix, Haravan hoặc web tự code) chỉ trong 30 phút mà không ảnh hưởng đến giao diện hiện tại.'
    },
    {
      question: 'Sau này nếu tôi muốn thêm người nhận thông báo (ví dụ nhân viên bán hàng) có được không?',
      answer: 'Rất đơn giản. Bạn chỉ cần thêm tài khoản nhân viên vào nhóm nhận thông báo trên Telegram hoặc chia sẻ quyền xem Google Sheets. LocalMate có kèm video hướng dẫn 2 phút chi tiết để bạn tự thao tác bất kỳ lúc nào.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0f172a' }}>
      {/* 1. SEO Head Integration */}
      <SEOHead
        title="Hệ Thống Tự Động Hóa Nhận Đơn & CRM Zalo Cho SME | LocalMate"
        description="Tự động hóa thông báo đơn hàng về Zalo/Telegram sau 3 giây, đồng bộ Google Sheets CRM, chatbot tự động báo giá. Chi phí 1 lần từ 1.900.000đ, 0đ phí duy trì hàng tháng."
        canonicalPath="/automation"
        breadcrumbs={breadcrumbs}
        schemaType="Service"
        schemaData={{
          serviceType: 'Business Workflow Automation & CRM',
          provider: {
            '@type': 'LocalBusiness',
            name: entity.legalName,
            telephone: entity.contact.hotlineTel,
            address: {
              '@type': 'PostalAddress',
              streetAddress: entity.headquarters.streetAddress,
              addressLocality: entity.headquarters.addressLocality,
              addressCountry: 'VN'
            }
          },
          offers: {
            '@type': 'Offer',
            price: automationOffer.priceValue,
            priceCurrency: 'VND',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock'
          }
        }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 0' }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* 2. HERO SECTION — Practical SME Automation Value */}
      <section style={{ padding: '3.5rem 0 3rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <Container size="lg">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                color: '#166534',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.25rem'
              }}
            >
              <Cpu className="w-4 h-4 text-[#0d7647]" />
              <span>Trụ Cột 05 · Tự Động Hóa Tinh Gọn 0đ Phí Duy Trì</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: '#0f172a',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}
            >
              Tự Động Hóa Nhận Đơn & Chăm Khách Zalo — Không Sót Đơn, Tiết Kiệm 2h Mỗi Ngày
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '2rem'
              }}
            >
              Khách điền web lập tức thông báo về điện thoại sau 3 giây. Dữ liệu tự động lưu vào Google Sheets chuẩn Mini-CRM,
              chatbot tự động gửi bảng giá khi bạn đang bận làm nghề. Chi phí cài đặt 1 lần duy nhất, 0đ tiền phần mềm hàng tháng.
            </p>

            {/* Core Metrics Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem',
                textAlign: 'left'
              }}
            >
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Chi phí cài đặt trọn gói</span>
                <strong style={{ fontSize: '1.25rem', color: '#0d7647', fontWeight: 800 }}>{automationOffer.priceFormatted}</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Phí duy trì phần mềm</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>0đ / tháng (Vĩnh viễn)</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Tốc độ bắn thông báo</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>Chỉ sau 3 giây</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Thời gian bàn giao</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>2 - 4 ngày làm việc</strong>
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA(automationOffer.name)}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)',
                  minHeight: '48px',
                  padding: '0 1.75rem'
                }}
              >
                Dùng Thử Luồng Bắn Đơn 0đ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href={`tel:${entity.contact.hotlineTel}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem',
                  textDecoration: 'none',
                  minHeight: '48px'
                }}
              >
                <PhoneCall className="w-4 h-4 text-[#0d7647]" />
                <span>Gọi Kỹ Thuật {entity.contact.hotlineDisplay}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ANSWER-FIRST BLOCK (50-80 từ trả lời trực tiếp cho AI & Người đọc theo chuẩn GEO/AEO) */}
      <section style={{ padding: '2.5rem 0', backgroundColor: '#fbfcfb', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="md">
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #0d7647',
              borderRadius: '12px',
              padding: '1.75rem',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Sparkles className="w-5 h-5 text-[#0d7647]" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#0d7647', letterSpacing: '0.05em' }}>
                Answer-First Block (Chuẩn Trích Dẫn AI & Người Đọc Thực Tế)
              </span>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
              Hệ thống tự động hóa nhận đơn và CRM Zalo của LocalMate hoạt động thế nào?
            </h2>

            {/* Exactly 77 words atomic direct answer */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#1e293b',
                backgroundColor: '#f0fdf4',
                padding: '1rem 1.25rem',
                borderRadius: '8px',
                borderLeft: '4px solid #0d7647',
                marginBottom: '1rem',
                fontWeight: 500
              }}
            >
              Hệ thống tự động hóa LocalMate kết nối biểu mẫu website trực tiếp với Zalo hoặc Telegram của chủ cơ sở thông qua Webhook tự động, gửi thông báo khách mới sau đúng 3 giây. Mọi thông tin liên hệ được đồng bộ tự động vào Google Sheets đóng vai trò Mini CRM quản lý tập trung. Hệ thống có chi phí trọn gói 1.900.000đ một lần duy nhất, 0đ phí duy trì phần mềm hàng tháng và khách hàng sở hữu 100% tài khoản dữ liệu.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Báo đơn trong 3 giây
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Tích hợp Google Sheets Mini CRM
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> 0đ phí duy trì phần mềm hàng tháng
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Khách hàng sở hữu 100% dữ liệu
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SUMMARY TABLE — Bảng tóm tắt chuẩn: Bảng giá, Deliverables, Timeline, Ownership, Support, Last Updated */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
              Bảng Tóm Tắt Dịch Vụ Tự Động Hóa Nhận Đơn & CRM
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Thanh toán 1 lần trọn gói, không chi phí ẩn, bàn giao đầy đủ kịch bản và tài khoản quản trị.
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '1.25rem 1.5rem', width: '25%', color: '#0f172a', fontWeight: 700 }}>
                    Hạng Mục Cam Kết
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', width: '75%', color: '#0d7647', fontWeight: 700 }}>
                    Chi Tiết Hệ Thống Tự Động Hóa Tại LocalMate
                  </th>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    1. Bảng Giá Dịch Vụ
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '1.35rem', color: '#0d7647', fontWeight: 800 }}>{automationOffer.priceFormatted}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#64748b' }}>/ trọn gói (Thanh toán 1 lần duy nhất)</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#059669', fontWeight: 600 }}>
                      Phí duy trì phần mềm hàng tháng: 0 đồng (Không phải mua bản quyền phần mềm nước ngoài đắt đỏ).
                    </p>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    2. Deliverables (Hạng Mục Bàn Giao)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'grid', gap: '0.4rem', color: '#334155' }}>
                      {automationOffer.deliverables.map((item, idx) => (
                        <li key={idx} style={{ lineHeight: 1.5 }}>
                          <strong>{item}</strong>
                        </li>
                      ))}
                      <li style={{ lineHeight: 1.5 }}>
                        Tự động phân loại nguồn khách (Google Ads, Facebook, Google Maps) vào bảng tính
                      </li>
                      <li style={{ lineHeight: 1.5 }}>
                        Video 2 phút hướng dẫn nhân viên thêm bớt người nhận chuông báo trên điện thoại
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    3. Timeline (Thời Gian Triển Khai)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{automationOffer.timeline}</strong> — Hoàn tất cấu hình, test luồng bắn đơn thực tế và bàn giao quyền quản trị cho chủ cơ sở.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    4. Ownership (Quyền Sở Hữu)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{automationOffer.ownership}</strong>. Tài khoản Google Drive, bot Telegram và bảng tính CRM 100% thuộc email chính chủ của bạn. LocalMate không giữ bất kỳ quyền quản trị nào sau bàn giao.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    5. Support (Chính Sách Hỗ Trợ)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{automationOffer.support}</strong>. Bảo hành hạ tầng kỹ thuật 12 tháng, hỗ trợ điều chỉnh trường thông tin form hoặc kịch bản tin nhắn hoàn toàn miễn phí.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    6. Last Updated (Cập Nhật Lần Cuối)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#059669', fontWeight: 600 }}>
                    Tháng 09/2026 (Tương thích Webhook bảo mật HTTPS, Zalo OA v3 và Telegram Bot API mới nhất)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5. DETAILED REAL FEATURES & PRACTICAL VALUE FOR SME */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#fbfcfb', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
              Giải Pháp Thực Tế Cho Hộ Kinh Doanh
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              4 Tính Năng Tự Động Hóa Giúp Tăng 200% Tỷ Lệ Chốt Đơn
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Khách hàng không thích chờ đợi. Gọi lại sau 5 phút giúp tăng gấp 4 lần tỷ lệ chốt đơn so với gọi lại sau 1 giờ.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {technicalFeatures.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ padding: '0.6rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
                    {feat.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#334155', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    {feat.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: '#475569', margin: 0 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Practical Comparison: Trước & Sau Khi Tự Động Hóa */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', textAlign: 'center' }}>
              Đối Chiếu Quy Trình Xử Lý Khách Hàng: Thủ Công vs Tự Động Hóa
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#9f1239', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <AlertTriangle className="w-5 h-5 text-[#e11d48]" /> Quy trình thủ công cũ
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#881337', display: 'grid', gap: '0.5rem' }}>
                  <li>Khách điền web gửi về hòm thư điện tử, 2–3 ngày sau chủ quán mới kiểm tra email</li>
                  <li>Lấy sổ tay chép lại số điện thoại khách, dễ làm mất hoặc ghi sai số</li>
                  <li>Khách hỏi bảng giá phải gõ lại từng chữ mất 10–15 phút giữa lúc đang bận việc</li>
                  <li>Đến ngày hẹn khách không tới vì quên, quán bị lãng phí bàn hoặc chỗ trống</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#14532d', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#0d7647]" /> Khi áp dụng luồng tự động LocalMate
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#14532d', display: 'grid', gap: '0.5rem' }}>
                  <li>Điện thoại rung chuông báo đơn sau 3 giây, chủ tiệm bấm gọi tư vấn khi khách vừa xem web xong</li>
                  <li>Google Sheets tự động lưu thông tin khách hàng trật tự, xem được trên điện thoại</li>
                  <li>Chatbot tự động gửi ngay menu & bảng giá chỉ sau 1 giây khi khách nhắn tin</li>
                  <li>Hệ thống tự động nhắc lịch hẹn trước 2 tiếng, giảm thiểu 80% tình trạng khách bùng lịch</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FAQ & QUICK CONSULTATION FORM */}
      <section id="dang-ky-tu-dong-hoa" style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
                  Giải Đáp Thắc Mắc
                </span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginTop: '0.25rem' }}>
                  Câu Hỏi Về Hệ Thống Tự Động Hóa
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        backgroundColor: isOpen ? '#f8fafc' : '#ffffff'
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '1.1rem 1.25rem',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '1rem',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: isOpen ? '#0d7647' : '#0f172a'
                        }}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            padding: '0 1.25rem 1.25rem 1.25rem',
                            color: '#475569',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            borderTop: '1px solid #e2e8f0',
                            backgroundColor: '#ffffff'
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Lead Form */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '12px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
                  Dùng Thử Miễn Phí
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0' }}>
                  Trải Nghiệm Nhận Tin Nhắn Báo Đơn 0đ
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                  Điền số điện thoại bên dưới, kỹ thuật viên sẽ gửi link web demo để bạn bấm thử và cảm nhận tốc độ báo chuông về máy.
                </p>
              </div>

              {submitSuccess && (
                <div
                  style={{
                    backgroundColor: submitSuccess.includes('thành công') ? '#f0fdf4' : '#fff1f2',
                    border: `1px solid ${submitSuccess.includes('thành công') ? '#86efac' : '#fecdd3'}`,
                    color: submitSuccess.includes('thành công') ? '#166534' : '#9f1239',
                    padding: '0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}
                >
                  {submitSuccess}
                </div>
              )}

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Họ tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Phát"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0914123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Tên cơ sở kinh doanh
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Xưởng Mộc Nam Phát hoặc Cửa hàng thời trang"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Kênh bạn muốn nhận chuông thông báo
                  </label>
                  <select
                    value={formData.preferredChannel}
                    onChange={(e) => setFormData({ ...formData, preferredChannel: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Báo đơn qua Zalo cá nhân">Báo đơn qua Zalo cá nhân</option>
                    <option value="Báo đơn qua Telegram (nhanh & ổn định nhất)">Báo đơn qua Telegram (khuyên dùng, không giới hạn)</option>
                    <option value="Cả Zalo và Telegram + Google Sheets">Cả Zalo và Telegram + Lưu Google Sheets</option>
                    <option value="Cần tư vấn giải pháp phù hợp nhất">Cần kỹ thuật viên tư vấn giải pháp</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    fontWeight: 700,
                    padding: '0.85rem',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Đang kết nối...' : 'Gửi Yêu Cầu Nhận Demo Bắn Đơn 0đ'}
                </Button>

                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
                  Thông tin được giữ bí mật 100%. Kỹ thuật viên LocalMate sẽ gửi link demo qua Zalo trong 24h.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. BOTTOM TRUST BANNER */}
      <section style={{ backgroundColor: '#f0fdf4', borderTop: '1px solid #bbf7d0', padding: '2.5rem 0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#166534', margin: 0 }}>
              Cam Kết Triển Khai Tại LocalMate
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dcfce7',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#0d7647]" />
                  <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>{item.title}</strong>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AutomationPillarPage;
