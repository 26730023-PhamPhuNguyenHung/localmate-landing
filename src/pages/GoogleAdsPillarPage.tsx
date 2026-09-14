import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA } from '../data/company';
import { submitLead } from '../services/leadService';
import {
  TrendingUp,
  Search,
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
  BadgePercent,
  Check,
  ExternalLink,
  Target,
  FilterX,
  CreditCard,
  LineChart,
  Lock,
  Headphones,
  Users,
  Building2,
  HelpCircle,
  CalendarCheck
} from 'lucide-react';

interface GoogleAdsPillarPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GoogleAdsPillarPage: React.FC<GoogleAdsPillarPageProps> = ({ onOpenConsultForm }) => {
  // Extract data directly from Single Source of Truth (SSOT)
  const adsPillar = COMPANY_DATA.pillars.find((p) => p.slug === 'google-ads');
  const starterOffer = adsPillar?.offers[0] || COMPANY_DATA.pillars[2].offers[0];
  const guarantees = COMPANY_DATA.guarantees;
  const entity = COMPANY_DATA.entity;

  // State for FAQ accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // State for Quick Consultation Form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    industry: 'Dịch vụ tại nhà / Sửa chữa',
    monthlyBudget: 'Dưới 5 triệu/tháng',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Google Ads & Tìm Kiếm', url: '/google-ads' }
  ];

  const handleCTA = (serviceName?: string) => {
    const selected = serviceName || starterOffer.name;
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      const formEl = document.getElementById('dang-ky-quang-cao');
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
      setSubmitSuccess('Vui lòng điền họ tên và số điện thoại/Zalo để nhận kế hoạch từ khóa.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        businessName: formData.businessName.trim() || 'Chưa cung cấp tên tiệm',
        serviceInterest: `Google Ads Pillar: ${starterOffer.name} (Ngân sách: ${formData.monthlyBudget})`,
        message: `Ngành nghề: ${formData.industry} | Ngân sách: ${formData.monthlyBudget} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/google-ads'
      });
      setSubmitSuccess('Gửi yêu cầu thành công! Kỹ thuật viên LocalMate sẽ gửi danh sách từ khóa gợi ý qua Zalo trong 24 giờ.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        industry: 'Dịch vụ tại nhà / Sửa chữa',
        monthlyBudget: 'Dưới 5 triệu/tháng',
        notes: ''
      });
    } catch {
      setSubmitSuccess('Có lỗi kết nối. Bạn vui lòng liên hệ hotline/Zalo 0834.422.439 để được hỗ trợ tức thì.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Real Features for Google Ads
  const technicalFeatures = [
    {
      icon: <Target className="w-6 h-6 text-[#0d7647]" />,
      title: 'Nghiên Cứu Bộ Từ Khóa Ý Định Cao (High Intent)',
      desc: 'Tập trung 100% ngân sách vào các từ khóa khẩn cấp có khả năng chốt đơn ngay (Ví dụ: "sửa máy giặt tại nhà đà nẵng", "nha khoa uy tín gần đây", "hút hầm cầu hội an giá rẻ"). Tuyệt đối không chi tiền cho từ khóa chung chung, thông tin tham khảo hay tự học.',
      badge: 'Đúng Nhu Cầu'
    },
    {
      icon: <FilterX className="w-6 h-6 text-[#0d7647]" />,
      title: 'Hệ Thống Chặn Từ Khóa Phủ Định & Chống Click Ảo',
      desc: 'Cài đặt danh sách hơn 200+ từ khóa phủ định loại trừ các tìm kiếm rác ("miễn phí", "tuyển dụng", "tự làm", "video"). Thiết lập bán kính địa lý chuẩn xác 3–10km quanh cơ sở và IP exclusion để chặn đối thủ nhấp chuột phá hoại.',
      badge: 'Tiết Kiệm Tối Đa'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#0d7647]" />,
      title: '0% Kê Giá — Khách Hàng Tự Trả Tiền Cho Google',
      desc: 'LocalMate không thu tiền quảng cáo chung với phí dịch vụ. Bạn tự gắn thẻ Visa/Mastercard cá nhân vào tài khoản Google Ads chính chủ. Chi tiêu bao nhiêu hiển thị rõ ràng từng xu trên hóa đơn VAT của Google.',
      badge: '100% Minh Bạch'
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#0d7647]" />,
      title: 'Cài Đặt Đo Lường Chuyển Đổi Cuộc Gọi & Zalo',
      desc: 'Gắn thẻ Google Tag Manager theo dõi chính xác từng lượt bấm gọi hotline, click nhắn Zalo và gửi form trên website. Báo cáo hàng tuần gửi về Zalo cho biết chính xác bao nhiêu tiền ra được một cuộc gọi của khách.',
      badge: 'Đo Bằng Khách Thật'
    }
  ];

  // Specific FAQs for SME Google Ads
  const faqs = [
    {
      question: 'Tiền chạy quảng cáo tôi trả cho ai? LocalMate có giữ tiền ads không?',
      answer: 'Bạn trả tiền quảng cáo trực tiếp cho Google thông qua thẻ Visa/Mastercard hoặc ví điện tử chính chủ của bạn. LocalMate tuyệt đối KHÔNG thu gộp tiền quảng cáo và cam kết 0% kê giá. LocalMate chỉ thu phí dịch vụ kỹ thuật tối ưu niêm yết cố định 1.500.000đ/tháng.'
    },
    {
      question: 'Ngân sách chạy quảng cáo tối thiểu mỗi ngày là bao nhiêu?',
      answer: 'Với doanh nghiệp địa phương và hộ kinh doanh nhỏ, bạn có thể bắt đầu với ngân sách rất linh hoạt từ 50.000đ đến 150.000đ/ngày. Đội ngũ LocalMate sẽ tư vấn mức ngân sách phù hợp nhất theo từng ngành nghề để đảm bảo có khách gọi mà không bị lãng phí.'
    },
    {
      question: 'Nếu tôi dừng hợp đồng thì tài khoản quảng cáo và lịch sử chiến dịch có bị mất không?',
      answer: 'Không. Toàn bộ tài khoản Google Ads được lập trên email chính chủ của bạn ngay từ ngày đầu tiên. Toàn bộ lịch sử từ khóa, dữ liệu khách hàng và điểm chất lượng chiến dịch thuộc 100% quyền sở hữu của bạn trọn đời.'
    },
    {
      question: 'Sau bao lâu kể từ khi kích hoạt chiến dịch thì có khách gọi điện?',
      answer: 'Google Ads là kênh tiếp cận nhanh nhất: ngay sau khi chiến dịch được Google phê duyệt (thường từ 2–6 giờ), quảng cáo của bạn đã xuất hiện ở vị trí đầu kết quả tìm kiếm khi khách hàng gõ từ khóa. Đa số khách hàng nhận được cuộc gọi đầu tiên ngay trong 24–48 giờ đầu tiên.'
    },
    {
      question: 'LocalMate có hỗ trợ tối ưu lại trang đích (Landing Page) không?',
      answer: 'Có. Một chiến dịch quảng cáo thành công phụ thuộc 50% vào từ khóa và 50% vào trang đích. Kỹ thuật viên LocalMate sẽ kiểm tra tốc độ tải trang, vị trí nút gọi Hotline/Zalo và câu từ trên website của bạn để đảm bảo khách bấm vào là muốn gọi ngay.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0f172a' }}>
      {/* 1. SEO Head Integration with ProfessionalService and Service schema */}
      <SEOHead
        title="Dịch Vụ Quản Trị Google Ads Doanh Nghiệp Địa Phương | LocalMate"
        description="Quản trị Google Search Ads cho SME & hộ kinh doanh địa phương. Nhắm trúng từ khóa ý định cao, chặn click ảo, 0% kê giá, khách tự giữ tài khoản. Chỉ từ 1.500.000đ/tháng."
        canonicalPath="/google-ads"
        breadcrumbs={breadcrumbs}
        schemaType="Service"
        schemaData={{
          serviceType: 'Google Ads Management',
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
            price: starterOffer.priceValue,
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

      {/* 2. HERO SECTION — Practical SME Value Proposition */}
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
              <TrendingUp className="w-4 h-4 text-[#0d7647]" />
              <span>Trụ Cột 03 · Dịch Vụ Quảng Cáo Tìm Kiếm Minh Bạch</span>
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
              Google Ads Doanh Nghiệp Địa Phương — Tiếp Cận Đúng Khách Cần Gấp, 0% Kê Giá
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '2rem'
              }}
            >
              Bạn tự quản lý thẻ ngân hàng và ngân sách quảng cáo với Google. LocalMate chịu trách nhiệm thiết lập,
              nghiên cứu bộ từ khóa có nhu cầu mua cao, chặn đứng click ảo và đo lường từng cuộc gọi hotline thực tế.
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
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Phí quản trị cố định</span>
                <strong style={{ fontSize: '1.25rem', color: '#0d7647', fontWeight: 800 }}>{starterOffer.priceFormatted}</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Thời gian triển khai</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>Setup trong 24h</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Quyền sở hữu tài khoản</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>100% Chính chủ bạn</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Báo cáo hiệu quả</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>Minh bạch hàng tuần</strong>
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA(starterOffer.name)}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)',
                  minHeight: '48px',
                  padding: '0 1.75rem'
                }}
              >
                Đăng Ký Khảo Sát Từ Khóa 0đ
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
                <span>Gọi Hotline {entity.contact.hotlineDisplay}</span>
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
              Dịch vụ quản trị Google Ads cho doanh nghiệp nhỏ tại LocalMate hoạt động như thế nào?
            </h2>

            {/* Exactly 74 words atomic direct answer */}
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
              Google Ads cho doanh nghiệp địa phương tại LocalMate tập trung vào quảng cáo tìm kiếm (Search Ads) nhắm trực tiếp vào các từ khóa có ý định mua hàng tức thì trong bán kính phục vụ. Khách hàng tự nạp tiền trực tiếp vào Google qua thẻ ngân hàng cá nhân mà không bị kê giá hay giữ tài khoản. Đội ngũ kỹ thuật viên LocalMate chịu trách nhiệm lọc từ khóa phủ định, chặn click ảo và tối ưu tỷ lệ chuyển đổi cuộc gọi/Zalo với phí quản trị từ 1.500.000đ/tháng.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> 0% kê giá tiền ads
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Tài khoản chính chủ khách hàng
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Đo lường cuộc gọi & Zalo thực tế
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Hỗ trợ kỹ thuật 1-1 tại Đà Nẵng, Hội An & Toàn quốc
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
              Bảng Tóm Tắt Thông Tin Dịch Vụ Google Ads
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Toàn bộ điều khoản triển khai, quyền lợi bàn giao và cam kết kỹ thuật được niêm yết công khai, không chi phí ẩn.
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
                    Tiêu Chí Cam Kết
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', width: '75%', color: '#0d7647', fontWeight: 700 }}>
                    Thông Số Chi Tiết Dịch Vụ Tại LocalMate
                  </th>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    1. Bảng Giá Dịch Vụ
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '1.35rem', color: '#0d7647', fontWeight: 800 }}>{starterOffer.priceFormatted}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#64748b' }}>/ tháng (Phí công kỹ thuật tối ưu)</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569' }}>
                      Tiền nạp vào Google bạn tự thanh toán qua thẻ ngân hàng cá nhân. Ngân sách đề xuất: từ 50.000đ – 150.000đ/ngày.
                    </p>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    2. Deliverables (Hạng Mục Bàn Giao)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'grid', gap: '0.4rem', color: '#334155' }}>
                      {starterOffer.deliverables.map((item, idx) => (
                        <li key={idx} style={{ lineHeight: 1.5 }}>
                          <strong>{item}</strong>
                        </li>
                      ))}
                      <li style={{ lineHeight: 1.5 }}>
                        Tối ưu nội dung trang đích (Landing Page CRO) tăng tỉ lệ khách bấm gọi
                      </li>
                      <li style={{ lineHeight: 1.5 }}>
                        Cấu hình tiện ích mở rộng: Nút gọi hotline, địa chỉ bản đồ, đoạn thông tin nổi bật
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    3. Timeline (Thời Gian Triển Khai)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{starterOffer.timeline}</strong> — Nghiên cứu từ khóa và khởi tạo chiến dịch trong 24h làm việc; theo dõi, lọc click ảo và tối ưu từ khóa hàng ngày.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    4. Ownership (Quyền Sở Hữu)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{starterOffer.ownership}</strong>. Email quản trị chính chủ của bạn, khách hàng giữ toàn quyền phân quyền, tạm dừng hoặc chuyển đổi đơn vị quản lý bất kỳ lúc nào.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    5. Support (Chính Sách Hỗ Trợ)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{starterOffer.support}</strong>. Nhóm Zalo kỹ thuật 1-1 túc trực phản hồi trong 15–30 phút, điều chỉnh từ khóa, bật tắt chiến dịch theo lịch nghỉ lễ/đóng cửa của tiệm.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    6. Last Updated (Cập Nhật Lần Cuối)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#059669', fontWeight: 600 }}>
                    Tháng 09/2026 (Cập nhật bộ lọc click tặc và thuật toán Smart Bidding tối ưu hóa chuyển đổi mới nhất của Google)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5. DETAILED TECHNICAL FEATURES & PRACTICAL SME COMPARISON */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#fbfcfb', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
              Năng Lực Triển Khai Thực Chiến
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              Chi Tiết 4 Trọng Tâm Quản Trị Google Ads Tại LocalMate
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Không hứa hẹn số lượt hiển thị ảo — LocalMate chỉ tập trung vào việc biến lượt click thành khách gọi điện thật.
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

          {/* Comparison Table: Cách làm cũ vs LocalMate */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '2rem',
              marginTop: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', textAlign: 'center' }}>
              So Sánh: Cách Làm Cũ vs Chuẩn Minh Bạch Tại LocalMate
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#9f1239', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <AlertTriangle className="w-5 h-5 text-[#e11d48]" /> Cách thuê chạy quảng cáo cũ
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#881337', display: 'grid', gap: '0.5rem' }}>
                  <li>Agency thu gộp tiền ads + phí dịch vụ, không biết thực tế Google trừ bao nhiêu</li>
                  <li>Dùng tài khoản của agency, khi dừng dịch vụ mất sạch toàn bộ lịch sử</li>
                  <li>Chỉ báo cáo lượt xem (impressions) và nhấp chuột (clicks) chung chung</li>
                  <li>Không cài từ khóa phủ định khiến ngân sách bị đốt cho click rác</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#14532d', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#0d7647]" /> Chuẩn minh bạch tại LocalMate
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#14532d', display: 'grid', gap: '0.5rem' }}>
                  <li>Tự nạp tiền vào Google bằng thẻ cá nhân, xem hóa đơn gốc 100% minh bạch</li>
                  <li>Tài khoản chính chủ đứng tên email bạn, sở hữu dữ liệu vĩnh viễn</li>
                  <li>Đo lường trực tiếp số cuộc gọi hotline và tin nhắn Zalo phát sinh</li>
                  <li>Lọc từ khóa phủ định đa tầng, loại bỏ hoàn toàn click rác và click tặc</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FAQ & QUICK CONSULTATION FORM (Hỏi đáp & CTA Nhận tư vấn) */}
      <section id="dang-ky-quang-cao" style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
                  Giải Đáp Thắc Mắc Thường Gặp
                </span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginTop: '0.25rem' }}>
                  Hỏi Đáp Về Quảng Cáo Google Ads
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
                  Kế Hoạch Từ Khóa 0đ
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0' }}>
                  Nhận Danh Sách Từ Khóa & Dự Toán Ngân Sách
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                  Kỹ thuật viên sẽ phân tích ngành nghề của bạn và gửi bảng danh sách từ khóa có lượt tìm kiếm thực tế.
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
                    placeholder="Ví dụ: Anh Tuấn"
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
                    placeholder="Ví dụ: 0905123456"
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
                    Tên cơ sở / Ngành nghề
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Sửa điện lạnh Nam Phát hoặc Quán ăn XÈO"
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
                    Dự kiến ngân sách chạy Google Ads / tháng
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
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
                    <option value="Dưới 3 triệu/tháng (100k/ngày)">Dưới 3 triệu/tháng (khoảng 100k/ngày)</option>
                    <option value="Từ 3 - 6 triệu/tháng (100k-200k/ngày)">Từ 3 - 6 triệu/tháng (100k - 200k/ngày)</option>
                    <option value="Từ 6 - 15 triệu/tháng">Từ 6 - 15 triệu/tháng</option>
                    <option value="Trên 15 triệu/tháng">Trên 15 triệu/tháng</option>
                    <option value="Chưa biết, cần tư vấn">Chưa biết, cần tư vấn</option>
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
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Nhận Báo Giá Từ Khóa'}
                </Button>

                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
                  Cam kết bảo mật thông tin. Kỹ thuật viên LocalMate sẽ phản hồi trong 15–30 phút.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. BOTTOM TRUST BANNER (Cam kết cốt lõi từ Single Source of Truth) */}
      <section style={{ backgroundColor: '#f0fdf4', borderTop: '1px solid #bbf7d0', padding: '2.5rem 0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#166534', margin: 0 }}>
              4 Cam Kết Cốt Lõi Tại LocalMate
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

export default GoogleAdsPillarPage;
