import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA } from '../data/company';
import { submitLead } from '../services/leadService';
import {
  FileText,
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
  Image as ImageIcon,
  Database,
  Lock,
  Headphones,
  Check,
  RefreshCw,
  Layers,
  HeartHandshake
} from 'lucide-react';

interface ContentMarketingPillarPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ContentMarketingPillarPage: React.FC<ContentMarketingPillarPageProps> = ({ onOpenConsultForm }) => {
  // Extract data from Single Source of Truth (SSOT)
  const contentPillar = COMPANY_DATA.pillars.find((p) => p.slug === 'content-marketing');
  const careOffer = contentPillar?.offers[0] || COMPANY_DATA.pillars[3].offers[0];
  const guarantees = COMPANY_DATA.guarantees;
  const entity = COMPANY_DATA.entity;

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    currentWebsite: '',
    frequencyChoice: 'Gói Chăm Sóc Số 990.000đ/tháng',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Content Marketing & Chăm Sóc Số', url: '/content-marketing' }
  ];

  const handleCTA = (serviceName?: string) => {
    const selected = serviceName || careOffer.name;
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      const formEl = document.getElementById('dang-ky-cham-soc');
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
      setSubmitSuccess('Vui lòng nhập họ tên và số điện thoại/Zalo để nhận kế hoạch nội dung mẫu.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        businessName: formData.businessName.trim() || 'Chưa cung cấp tên cơ sở',
        serviceInterest: `Content Marketing: ${careOffer.name}`,
        message: `Website hiện tại: ${formData.currentWebsite || 'Chưa có'} | Lựa chọn: ${formData.frequencyChoice} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/content-marketing'
      });
      setSubmitSuccess('Đăng ký thành công! Kỹ thuật viên LocalMate sẽ gửi kế hoạch 15 chủ đề bài viết mẫu qua Zalo trong 24h.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        currentWebsite: '',
        frequencyChoice: 'Gói Chăm Sóc Số 990.000đ/tháng',
        notes: ''
      });
    } catch {
      setSubmitSuccess('Có lỗi kết nối. Bạn vui lòng liên hệ hotline/Zalo 0834.422.439 để được hỗ trợ tức thì.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Real Features for Content Marketing & Care
  const technicalFeatures = [
    {
      icon: <FileText className="w-6 h-6 text-[#0d7647]" />,
      title: '15 Bài Viết Hữu Ích Chuẩn SEO & E-E-A-T Hàng Tháng',
      desc: 'Nội dung thực tế, tập trung trả lời đúng thắc mắc thường gặp của khách hàng trong ngành (báo giá dịch vụ, kinh nghiệm chọn đồ, phân biệt thật giả). Tối ưu thẻ Heading, thẻ meta, chuẩn văn phong tiếng Việt tự nhiên và được Google đánh giá cao.',
      badge: 'Chuẩn SEO Google'
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-[#0d7647]" />,
      title: '15 Thiết Kế Đồ Họa & Banner Sản Phẩm Sạch Sẽ',
      desc: 'Thiết kế banner chương trình khuyến mãi, ảnh sản phẩm hoặc infographic giải thích bảng giá. Đồng bộ màu sắc thương hiệu, hình ảnh sắc nét, kích thước chuẩn di động và tối ưu dung lượng WebP tải dưới 0.5 giây.',
      badge: 'Đồng Bộ Nhận Diện'
    },
    {
      icon: <Database className="w-6 h-6 text-[#0d7647]" />,
      title: 'Sao Lưu Tự Động Cloudflare R2 & Bảo Trì Kỹ Thuật 24/7',
      desc: 'Toàn bộ dữ liệu website, hình ảnh và bài viết được sao lưu hàng tuần lên kho lưu trữ đám mây Cloudflare R2. Túc trực theo dõi Uptime 99.9%, tự động gia hạn chứng chỉ bảo mật SSL, đảm bảo website luôn mượt mà.',
      badge: 'An Toàn Tuyệt Đối'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0d7647]" />,
      title: 'Hỗ Trợ Cập Nhật Giá & Banner Trong 15–30 Phút',
      desc: 'Khi quán đổi thực đơn, xưởng đổi bảng giá thi công hay có chương trình lễ Tết, chỉ cần nhắn ảnh hoặc tin nhắn vào nhóm Zalo VIP. Kỹ thuật viên LocalMate thay bạn cập nhật lên website ngay trong vòng 15–30 phút.',
      badge: 'Xử Lý Hỏa Tốc'
    }
  ];

  // Specific FAQs for SME Content Care
  const faqs = [
    {
      question: 'Tôi có phải ký hợp đồng cam kết cả năm không? Có thể dừng bất kỳ lúc nào không?',
      answer: 'Không. Gói Chăm Sóc Số Digital Care của LocalMate thanh toán linh hoạt theo từng tháng. Bạn có thể sử dụng và đánh giá hiệu quả từng tháng mà không bị ràng buộc hợp đồng dài hạn. Bất cứ lúc nào muốn dừng, bạn chỉ cần báo trước 7 ngày.'
    },
    {
      question: 'Tôi có được xem và duyệt nội dung, hình ảnh trước khi đăng lên website không?',
      answer: 'Chắc chắn có. Vào đầu mỗi tháng, LocalMate gửi bảng kế hoạch 15 chủ đề bài viết và bản thảo thiết kế hình ảnh qua Zalo để bạn xem và duyệt trước. Chỉ khi bạn đồng ý 100% về câu từ và giá cả, kỹ thuật viên mới xuất bản lên website.'
    },
    {
      question: 'Nếu website của tôi do đơn vị khác làm từ trước, LocalMate có nhận chăm sóc không?',
      answer: 'Có. LocalMate nhận tiếp quản và chăm sóc cả các website sẵn có của khách hàng (WordPress, Custom code, HTML tĩnh...). Kỹ thuật viên sẽ thực hiện quét kiểm tra mã độc, tối ưu lại tốc độ tải trang trước khi nhận bàn giao chăm sóc.'
    },
    {
      question: 'Gói này có hỗ trợ đăng bài viết lên Fanpage Facebook không?',
      answer: 'Có. Ngoài việc xuất bản bài viết chuẩn SEO trên website để giữ nhịp Google index, LocalMate đồng thời hỗ trợ đồng bộ các nội dung và hình ảnh nổi bật lên Fanpage chính thức của cơ sở để giữ tương tác với khách hàng quen.'
    },
    {
      question: 'Nếu website bị lỗi hoặc sập máy chủ trong đêm thì xử lý như thế nào?',
      answer: 'Hệ thống giám sát Uptime của LocalMate hoạt động tự động 24/7. Nếu website gặp sự cố mạng hoặc lỗi máy chủ, cảnh báo lập tức gửi về điện thoại kỹ thuật viên túc trực để can thiệp xử lý ngay mà bạn không cần phải thức đêm kiểm tra.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0f172a' }}>
      {/* 1. SEO Head Integration */}
      <SEOHead
        title="Dịch Vụ Chăm Sóc Nội Dung & Bảo Trì Số Digital Care | LocalMate"
        description="Chăm sóc nội dung website cho SME: 15 bài chuẩn SEO, 15 ảnh thiết kế, sao lưu định kỳ Cloudflare R2, bảo trì Uptime & SSL 24/7. Giá chỉ 990.000đ/tháng."
        canonicalPath="/content-marketing"
        breadcrumbs={breadcrumbs}
        schemaType="Service"
        schemaData={{
          serviceType: 'Content Marketing & Website Care',
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
            price: careOffer.priceValue,
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

      {/* 2. HERO SECTION — Practical SME Content & Digital Care */}
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
              <FileText className="w-4 h-4 text-[#0d7647]" />
              <span>Trụ Cột 04 · Phòng Marketing & Kỹ Thuật Số Thu Nhỏ</span>
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
              Chăm Sóc Nội Dung Chuẩn SEO & Bảo Trì Số — Duy Trì Nhịp Thở Cho Doanh Nghiệp
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '2rem'
              }}
            >
              Doanh nghiệp bạn bận bán hàng, không có thời gian viết bài hay thuê nhân viên marketing riêng?
              LocalMate đồng hành trọn gói: 15 bài viết chuẩn SEO, 15 thiết kế đồ họa, sao lưu dữ liệu tự động
              và kỹ thuật viên túc trực hỗ trợ đổi bảng giá trong 15 phút.
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
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Chi phí trọn gói</span>
                <strong style={{ fontSize: '1.25rem', color: '#0d7647', fontWeight: 800 }}>{careOffer.priceFormatted}</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Sản lượng mỗi tháng</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>15 bài SEO + 15 ảnh</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Sao lưu dữ liệu</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>Hàng tuần Cloudflare R2</strong>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 500 }}>Hỗ trợ sửa nội dung</span>
                <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>Xử lý trong 15–30p</strong>
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA(careOffer.name)}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)',
                  minHeight: '48px',
                  padding: '0 1.75rem'
                }}
              >
                Nhận Kế Hoạch 15 Bài Viết Mẫu 0đ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href={entity.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                <Headphones className="w-4 h-4 text-[#0d7647]" />
                <span>Chat Trực Tiếp Zalo Kỹ Thuật</span>
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
              Dịch vụ chăm sóc nội dung và bảo trì số Digital Care là gì?
            </h2>

            {/* Exactly 76 words atomic direct answer */}
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
              Dịch vụ chăm sóc nội dung và bảo trì số Digital Care tại LocalMate là giải pháp phòng kỹ thuật số thuê ngoài dành cho SME với chi phí 990.000đ/tháng. Hàng tháng, LocalMate sản xuất 15 bài viết chuẩn SEO giải đáp đúng nhu cầu khách hàng, 15 thiết kế hình ảnh đồng bộ nhận diện, tự động sao lưu website lên Cloudflare R2 và kiểm tra an ninh SSL 24/7. Toàn bộ nội dung được duyệt trước và bàn giao 100% bản quyền cho doanh nghiệp.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> 15 bài viết SEO + 15 ảnh/tháng
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Sao lưu đám mây R2 định kỳ
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Không ràng buộc hợp đồng dài hạn
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 className="w-4 h-4 text-[#0d7647]" /> Hỗ trợ cập nhật giá bán trong 15 phút
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
              Bảng Tóm Tắt Gói Chăm Sóc Số Digital Care
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Báo giá cố định trọn gói, cam kết khối lượng sản phẩm bàn giao minh bạch mỗi tháng.
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
                    Chi Tiết Quyền Lợi Gói Digital Care Tại LocalMate
                  </th>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    1. Bảng Giá Dịch Vụ
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '1.35rem', color: '#0d7647', fontWeight: 800 }}>{careOffer.priceFormatted}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#64748b' }}>/ tháng (Thanh toán theo tháng linh hoạt)</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569' }}>
                      Tiết kiệm hơn 85% so với thuê một nhân sự content marketing toàn thời gian (8-12 triệu/tháng).
                    </p>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    2. Deliverables (Hạng Mục Bàn Giao)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'grid', gap: '0.4rem', color: '#334155' }}>
                      {careOffer.deliverables.map((item, idx) => (
                        <li key={idx} style={{ lineHeight: 1.5 }}>
                          <strong>{item}</strong>
                        </li>
                      ))}
                      <li style={{ lineHeight: 1.5 }}>
                        Đồng bộ bài viết và hình ảnh nổi bật lên Fanpage Facebook chính thức
                      </li>
                      <li style={{ lineHeight: 1.5 }}>
                        Báo cáo lượt xem website và chỉ số tìm kiếm Google Search Console hàng tháng
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    3. Timeline (Thời Gian Triển Khai)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{careOffer.timeline}</strong> — Ngày 01-05 hàng tháng gửi lịch biên tập duyệt trước; sản xuất và đăng đều đặn 3–4 bài/tuần để website luôn tươi mới.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    4. Ownership (Quyền Sở Hữu)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{careOffer.ownership}</strong>. Khách hàng nắm giữ 100% bản quyền bài viết, file thiết kế gốc và cơ sở dữ liệu đã sao lưu trên máy chủ của bạn.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    5. Support (Chính Sách Hỗ Trợ)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#0f172a' }}>
                    <strong>{careOffer.support}</strong>. Nhóm Zalo kỹ thuật riêng biệt, hỗ trợ thay thế hotline, sửa giá món, cập nhật ảnh banner ưu đãi khẩn cấp trong 15–30 phút.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#334155', backgroundColor: '#fafafa' }}>
                    6. Last Updated (Cập Nhật Lần Cuối)
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#059669', fontWeight: 600 }}>
                    Tháng 09/2026 (Tối ưu chuẩn Google Helpful Content & cấu trúc E-E-A-T mới nhất cho thị trường Việt Nam)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5. DETAILED TECHNICAL FEATURES & REAL VALUE FOR SME */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#fbfcfb', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
              Chuyên Nghiệp & Tiết Kiệm
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              Chi Tiết 4 Trụ Cột Chăm Sóc Số Tại LocalMate
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Giải phóng hoàn toàn thời gian của chủ tiệm, để bạn tập trung làm nghề và phục vụ khách hàng.
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

          {/* Practical Calculation Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', textAlign: 'center' }}>
              Bài Toán Chi Phí: Tự Làm, Thuê Nhân Sự Full-Time hay Dùng Digital Care?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#475569', fontWeight: 700, marginBottom: '0.5rem' }}>Phương án 1: Chủ tiệm tự viết bài</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  Tốn 2-3 tiếng mỗi ngày ngồi nghĩ bài, câu từ luộm thuộm không chuẩn SEO, làm được vài ngày lại bỏ dở vì quá bận việc quán.
                </p>
                <div style={{ color: '#e11d48', fontWeight: 700, fontSize: '0.95rem' }}>→ Mất thời gian, thiếu chuyên nghiệp</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#475569', fontWeight: 700, marginBottom: '0.5rem' }}>Phương án 2: Thuê nhân viên Marketing</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  Lương cứng từ 7 - 10 triệu/tháng + chỗ ngồi + máy móc, khó quản lý hiệu quả công việc và hay nhảy việc sau vài tháng.
                </p>
                <div style={{ color: '#e11d48', fontWeight: 700, fontSize: '0.95rem' }}>→ Chi phí quá cao cho quy mô SME</div>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #0d7647', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ color: '#0d7647', fontWeight: 800, marginBottom: '0.5rem' }}>Phương án 3: Gói Digital Care LocalMate</h4>
                <p style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  Chỉ 990.000đ/tháng có ngay đội ngũ chuyên nghiệp lo 15 bài chuẩn SEO, 15 ảnh đẹp, sao lưu và kỹ thuật viên bảo trì website 24/7.
                </p>
                <div style={{ color: '#0d7647', fontWeight: 800, fontSize: '1rem' }}>→ Tiết kiệm 85% chi phí, an tâm dài hạn</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FAQ & QUICK CONSULTATION FORM */}
      <section id="dang-ky-cham-soc" style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* FAQ Accordion */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase' }}>
                  Giải Đáp Thắc Mắc
                </span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginTop: '0.25rem' }}>
                  Câu Hỏi Thường Gặp Về Gói Chăm Sóc Số
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
                  Kế Hoạch Mẫu Miễn Phí
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0' }}>
                  Đăng Ký Nhận Kế Hoạch 15 Bài Viết Mẫu
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                  Kỹ thuật viên sẽ phân tích ngành nghề và đề xuất 15 tiêu đề bài viết đúng nhu cầu tìm kiếm của khách hàng bạn.
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
                    placeholder="Ví dụ: Chị Mai"
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
                    placeholder="Ví dụ: 0988123456"
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
                    placeholder="Ví dụ: Hương Sen Spa Hội An hoặc Nha Khoa Smile"
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
                    Link website hiện tại (nếu có)
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: huongsenspa.vn (hoặc để trống nếu chưa có)"
                    value={formData.currentWebsite}
                    onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
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
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Nhận Kế Hoạch 15 Bài Viết'}
                </Button>

                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
                  Thông tin được bảo mật hoàn toàn. Kỹ thuật viên LocalMate sẽ hỗ trợ nhanh qua Zalo.
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
              Cam Kết Đồng Hành Kỹ Thuật Tại LocalMate
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

export default ContentMarketingPillarPage;
