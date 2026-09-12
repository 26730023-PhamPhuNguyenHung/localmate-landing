import React, { useState } from 'react';
import { Solution } from '../../data/solutionsData';
import { SEOHead } from '../seo/SEOHead';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SolutionHero } from './SolutionHero';
import { SolutionProblems } from './SolutionProblems';
import { SolutionOutcomes } from './SolutionOutcomes';
import { SolutionWorkflow } from './SolutionWorkflow';
import { SolutionCapabilities } from './SolutionCapabilities';
import { SolutionDeliverables } from './SolutionDeliverables';
import { SolutionProcess } from './SolutionProcess';
import { SolutionUseCases } from './SolutionUseCases';
import { SolutionPricing } from './SolutionPricing';
import { SolutionFAQ } from './SolutionFAQ';
import { submitLead } from '../../services/leadService';
import {
  PhoneCall,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export interface SolutionPageTemplateProps {
  solution: Solution;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SolutionPageTemplate: React.FC<SolutionPageTemplateProps> = ({
  solution,
  onOpenConsultForm
}) => {
  // Fast lead form state
  const [leadPhone, setLeadPhone] = useState('');
  const [leadStoreName, setLeadStoreName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleQuickLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone.trim()) {
      setSubmitMessage('Vui lòng nhập số điện thoại hoặc Zalo để nhận tư vấn.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: leadStoreName.trim() ? `Chủ cơ sở: ${leadStoreName.trim()}` : 'Khách quan tâm giải pháp',
        phone: leadPhone.trim(),
        businessName: leadStoreName.trim() || 'Chưa nhập tên quán',
        serviceInterest: solution.title,
        message: `Đăng ký tư vấn giải pháp: ${solution.promise || solution.title}`,
        sourcePage: solution.slug
      });
      setSubmitMessage('Đã nhận thông tin! Kỹ thuật viên LocalMate sẽ gửi link demo qua Zalo trong 24h.');
      setLeadPhone('');
      setLeadStoreName('');
    } catch {
      setSubmitMessage('Có lỗi xảy ra, bạn vui lòng gọi trực tiếp hotline 0834.422.439 để được hỗ trợ.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Nav links for fast jumping
  const navSections = [
    { id: 'van-de', label: 'Vấn Đề' },
    { id: 'ket-qua', label: 'Kết Quả' },
    { id: 'phan-cong-workflow', label: 'Phân Công Việc' },
    { id: 'nang-luc', label: 'Năng Lực Kỹ Thuật' },
    { id: 'ban-giao', label: 'Bàn Giao' },
    { id: 'quy-trinh', label: 'Quy Trình' },
    { id: 'nganh-nghe', label: 'Tình Huống' },
    { id: 'bang-gia', label: 'Bảng Giá' },
    { id: 'faq', label: 'Hỏi Đáp' }
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. SEO Head Integration */}
      <SEOHead
        title={`${solution.title} | Giải Pháp Tăng Trưởng LocalMate`}
        description={solution.summary || solution.promise}
        canonicalPath={solution.slug}
        breadcrumbs={[
          { name: 'Giải pháp', url: '/giai-phap' },
          { name: solution.title, url: solution.slug }
        ]}
        schemaType="Service"
        schemaData={{
          serviceType: solution.title,
          provider: {
            '@type': 'LocalBusiness',
            name: 'CÔNG TY TNHH LOCALMATE',
            telephone: '0834422439',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '03 Trường Chinh, Phường Hội An Tây',
              addressLocality: 'TP. Đà Nẵng',
              addressCountry: 'VN'
            }
          },
          areaServed: 'Toàn quốc',
          description: solution.summary
        }}
      />

      {/* 2. Hero Component */}
      <SolutionHero
        solution={solution}
        onOpenConsultForm={onOpenConsultForm}
      />

      {/* 3. Sticky Quick Navigation Bar */}
      <div
        style={{
          position: 'sticky',
          top: '72px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none'
        }}
      >
        <Container size="lg">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 0'
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginRight: '0.5rem',
                flexShrink: 0
              }}
            >
              Mục lục giải pháp:
            </span>
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--color-navy)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none',
                  flexShrink: 0,
                  transition: 'all 0.15s ease'
                }}
              >
                {sec.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* 4. Problems Component */}
      <SolutionProblems problems={solution.commonProblems} />

      {/* 5. Outcomes Component */}
      <SolutionOutcomes outcomes={solution.outcomes} />

      {/* 6. Workflow / Division of Responsibilities */}
      <SolutionWorkflow whatWeDo={solution.whatWeDo} />

      {/* 7. Capabilities (Plain Language) */}
      <SolutionCapabilities capabilities={solution.capabilities} />

      {/* 8. Deliverables & Ownership */}
      <SolutionDeliverables deliverables={solution.deliverables} />

      {/* 9. Process Stepper */}
      <SolutionProcess steps={solution.process} onOpenConsultForm={onOpenConsultForm} />

      {/* 10. Industry Use Cases */}
      <SolutionUseCases useCases={solution.useCases} />

      {/* 11. Transparent Pricing */}
      <SolutionPricing packages={solution.pricing} onOpenConsultForm={onOpenConsultForm} />

      {/* 12. Fast Consultation Hook Block */}
      <section
        id="tu-van-giai-phap"
        style={{
          backgroundColor: 'var(--color-primary-soft)',
          borderTop: '1px solid var(--color-primary-border)',
          borderBottom: '1px solid var(--color-primary-border)',
          padding: '4.5rem 0'
        }}
      >
        <Container size="md">
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-primary-border)',
              borderRadius: '20px',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              boxShadow: '0 8px 30px rgba(13, 118, 71, 0.08)',
              textAlign: 'center'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-soft)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={14} /> KHẢO SÁT 1-1 TẬN NƠI HOẶC ONLINE
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.3,
                marginBottom: '0.75rem',
                textWrap: 'pretty'
              }}
            >
              Nhận Demo 0đ Cho Cơ Sở Của Bạn Trong 24 Giờ
            </h2>

            <p
              style={{
                fontSize: '0.975rem',
                color: 'var(--color-text)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto 2rem auto',
                textWrap: 'pretty'
              }}
            >
              Để lại số điện thoại hoặc Zalo. Kỹ thuật viên LocalMate sẽ định vị tọa độ, dựng demo giao diện mẫu và gửi riêng cho bạn xem thử trước.
            </p>

            <form
              onSubmit={handleQuickLeadSubmit}
              style={{
                maxWidth: '560px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '0.75rem'
                }}
              >
                <input
                  type="text"
                  placeholder="Tên quán / cơ sở kinh doanh"
                  value={leadStoreName}
                  onChange={(e) => setLeadStoreName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    fontSize: '0.95rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    color: 'var(--color-navy)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />

                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Zalo nhận Demo *"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    fontSize: '0.95rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    color: 'var(--color-navy)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                style={{
                  minHeight: '50px',
                  fontSize: '1rem',
                  fontWeight: 700
                }}
              >
                <PhoneCall size={18} />
                <span>{isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Dựng Demo 0đ'}</span>
                <ArrowRight size={18} />
              </Button>

              {submitMessage && (
                <div
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    backgroundColor: submitMessage.includes('lỗi') ? '#fef2f2' : 'var(--color-primary-soft)',
                    color: submitMessage.includes('lỗi') ? '#dc2626' : 'var(--color-primary-dark)',
                    border: submitMessage.includes('lỗi') ? '1px solid #fecaca' : '1px solid var(--color-primary-border)'
                  }}
                >
                  {submitMessage}
                </div>
              )}
            </form>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.25rem',
                marginTop: '1.5rem',
                fontSize: '0.825rem',
                color: 'var(--color-text-muted)'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--color-primary)' }} />
                Không bắt buộc ký hợp đồng
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--color-primary)' }} />
                Bảo mật thông tin kinh doanh
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--color-primary)' }} />
                KTV phản hồi trong 15 phút
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 13. FAQ Component */}
      <SolutionFAQ faqs={solution.faqs} />

      {/* 14. Bottom Final Call-to-Action Bar */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '3rem 0',
          borderTop: '1px solid var(--color-border)'
        }}
      >
        <Container size="lg">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '1.75rem 2rem'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginBottom: '0.35rem'
                }}
              >
                Sẵn Sàng Chuẩn Hóa Giải Pháp Cho Doanh Nghiệp Của Bạn?
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}
              >
                Trải nghiệm sự khác biệt với quy trình làm việc chuẩn mực, tận nơi từ LocalMate.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenConsultForm && onOpenConsultForm(solution.title)}
              >
                <PhoneCall size={16} />
                <span>Nhận Tư Vấn Miễn Phí</span>
              </Button>
              <a
                href="tel:0834422439"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 1.25rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--btn-radius, 12px)',
                  color: 'var(--color-navy)',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                Hotline: 0834.422.439
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
