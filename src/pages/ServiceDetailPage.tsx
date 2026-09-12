import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getServiceBySlug, getAllServices, ServiceEntity } from '../data/servicesData';
import { getOperationServiceBySlug, ALL_15_SERVICES_DATA, OperationServiceItem } from '../data/operationsData';
import { getCaseStudyBySlug } from '../data/caseStudiesData';
import { getArticleBySlug, ArticleEntity } from '../data/articlesData';
import { useRouter, Link } from '../components/layout/Router';
import {
  Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck,
  Clock, HelpCircle, FileText, Check, Phone, MessageSquare,
  Zap, Award, AlertCircle
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';
import { Warranty5YearSection } from '../components/sections/Warranty5YearSection';

interface ServiceDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();

  // 1. Resolve service from operationsData (15 Services SSOT) or fallback to servicesData
  const opService = getOperationServiceBySlug(slug);
  const legacyService = getServiceBySlug(slug);

  const service = opService ? {
    id: opService.id,
    slug: opService.slug,
    name: opService.name,
    shortName: opService.shortName,
    category: opService.category,
    categorySlug: opService.categorySlug,
    badge: opService.badge,
    headline: opService.headline,
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: opService.problem,
    outcome: opService.outcome,
    promise: opService.promise,
    description: opService.description,
    startingPrice: opService.startingPrice,
    priceNote: opService.priceNote,
    sla: opService.slaTime,
    warranty: opService.warranty,
    suitableFor: opService.suitableFor,
    notSuitableFor: opService.notSuitableFor,
    deliverables: opService.deliverables,
    process: opService.process,
    requirements: opService.requirements || [
      'Thông tin dịch vụ / sản phẩm chủ lực của cơ sở',
      'Số điện thoại nhận cuộc gọi hoặc số Zalo tiếp nhận khách'
    ],
    proofCaseStudySlug: undefined,
    proofHighlight: undefined,
    faqs: opService.faqs,
    relatedServiceSlugs: opService.relatedServiceSlugs || [],
    relatedArticleSlugs: [] as string[],
    primaryCTA: opService.ctaText,
    secondaryCTA: 'Chat Zalo Tư Vấn 0đ',
    status: 'ACTIVE' as const
  } : legacyService ? {
    ...legacyService,
    headline: legacyService.outcome,
    warranty: 'Cam kết bảo hành kỹ thuật lên đến 5 năm'
  } : undefined;

  if (!service) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>
            Dịch vụ không tồn tại hoặc đang được cập nhật
          </h1>
          <p style={{ color: '#64748b', margin: '1rem 0 2rem 0' }}>
            Vui lòng quay lại trang danh mục dịch vụ để khám phá toàn bộ 15 giải pháp thực chiến của LocalMate.
          </p>
          <Button variant="primary" onClick={() => navigate('/dich-vu')}>
            Xem tất cả 15 dịch vụ
          </Button>
        </Container>
      </div>
    );
  }

  const proofCaseStudy = service.proofCaseStudySlug ? getCaseStudyBySlug(service.proofCaseStudySlug) : undefined;
  
  // Resolve related services dynamically from 15 services list or legacy
  const relatedServices = service.relatedServiceSlugs
    .map((sSlug) => {
      const op = getOperationServiceBySlug(sSlug);
      if (op) {
        return {
          id: op.id,
          slug: op.slug,
          name: op.name,
          shortName: op.shortName,
          category: op.category,
          badge: op.badge,
          startingPrice: op.startingPrice,
          outcome: op.outcome,
          deliverables: op.deliverables
        };
      }
      const leg = getServiceBySlug(sSlug);
      if (leg) {
        return {
          id: leg.id,
          slug: leg.slug,
          name: leg.name,
          shortName: leg.shortName,
          category: leg.category,
          badge: leg.badge,
          startingPrice: leg.startingPrice,
          outcome: leg.outcome,
          deliverables: leg.deliverables
        };
      }
      return undefined;
    })
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedArticles = service.relatedArticleSlugs
    .map((aSlug) => getArticleBySlug(aSlug))
    .filter((a): a is ArticleEntity => Boolean(a));

  const handleCTA = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(service.name);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      {/* SEO & Structured Data */}
      <SEOHead
        title={`${service.name} | LocalMate`}
        description={service.description}
        canonicalPath={`/dich-vu/${service.slug}`}
        breadcrumbs={[
          { name: 'Dịch vụ', url: '/dich-vu' },
          { name: service.shortName, url: `/dich-vu/${service.slug}` }
        ]}
        schemaType="Service"
        schemaData={{
          name: service.name,
          serviceType: service.category,
          provider: {
            '@type': 'ProfessionalService',
            name: 'LocalMate',
            url: 'https://localmate.vn'
          },
          offers: {
            '@type': 'Offer',
            price: service.startingPrice.replace(/[^0-9]/g, '') || '490000',
            priceCurrency: 'VND'
          },
          description: service.description
        }}
      />

      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Dịch vụ', url: '/dich-vu' },
            { name: service.shortName, url: `/dich-vu/${service.slug}` }
          ]}
        />

        {/* 1. Hero Section (Clear Outcome, Price, Warranty & CTA) */}
        <div
          style={{
            backgroundColor: '#f8fbfa',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            {service.badge && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#0d7647',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #bbf7d0',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1rem'
                }}
              >
                <Sparkles size={14} color="#0d7647" /> {service.badge}
              </span>
            )}

            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
                color: '#0f172a',
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: '1rem'
              }}
            >
              {service.name}
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem', textWrap: 'pretty' }}>
              {service.outcome}
            </p>

            {/* Price & Turnaround Badge & 5-Year Warranty Pill */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Chi phí khởi điểm</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#b45309' }}>{service.startingPrice}</span>
              </div>

              <div style={{ width: 1, height: 36, backgroundColor: '#e2e8f0' }} />

              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Thời gian triển khai</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>{service.sla}</span>
              </div>

              <div style={{ width: 1, height: 36, backgroundColor: '#e2e8f0' }} />

              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Chính sách bảo hành</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0d7647', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={16} /> {service.warranty || 'Bảo hành lên đến 5 năm'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Button variant="primary" size="lg" onClick={handleCTA} style={{ fontWeight: 700 }}>
                {service.primaryCTA}
              </Button>
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #bbf7d0',
                  borderRadius: '9999px',
                  color: '#0d7647',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={16} /> Chat Zalo Tư Vấn
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0d7647'
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Cam Kết Vàng Từ LocalMate
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Đồng hành số tại địa phương</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
              {service.promise}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.75rem', borderTop: '1px dashed #e2e8f0', fontSize: '0.85rem', color: '#1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#0d7647" />
                <span>Nghiệm thu đạt chuẩn mới thanh toán</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#0d7647" />
                <span>Bàn giao 100% tài khoản chính chủ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#0d7647" />
                <span>Kỹ thuật viên túc trực Zalo 1-1 hỗ trợ</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Problem / Symptoms & Who This Is For */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {/* Who This Is For */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <CheckCircle2 size={22} color="#0d7647" /> Phù hợp nhất với:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.suitableFor.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: '#1e293b', lineHeight: 1.55 }}>
                  <Check size={16} color="#0d7647" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It Is NOT For */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <XCircle size={22} color="#dc2626" /> Chưa cần thiết nếu:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.notSuitableFor.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: '#64748b', lineHeight: 1.55 }}>
                  <XCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. What Customer Receives (Deliverables) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            marginBottom: '3.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              KẾT QUẢ BÀN GIAO THỰC TẾ
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
              Bạn Sẽ Nhận Được Những Gì Khi Nghiệm Thu?
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Mọi hạng mục công việc đều được kiểm tra kỹ lưỡng và bàn giao 100% tài khoản chính chủ cho bạn.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Check size={15} color="#0d7647" />
                </div>
                <span style={{ fontSize: '0.925rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Process & Timeline */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              QUY TRÌNH THỰC HIỆN
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
              Quy Trình Làm Việc Minh Bạch &amp; Nhanh Gọn
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {service.process.map((step) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0d7647' }}>
                  {step.step}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. What Customer Needs To Prepare */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            marginBottom: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              Bạn cần chuẩn bị những gì trước khi bắt đầu?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {service.requirements.map((req, idx) => (
                <li key={idx} style={{ fontSize: '0.9rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#b45309', fontWeight: 800 }}>•</span> {req}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button variant="primary" size="md" onClick={handleCTA} style={{ fontWeight: 700 }}>
              Gửi thông tin cho LocalMate
            </Button>
          </div>
        </div>

        {/* 6. Proof & Case Study Highlight (if available) */}
        {proofCaseStudy && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              marginBottom: '3.5rem'
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#ecfdf5', padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>
              KỊCH BẢN GIẢ ĐỊNH &amp; WORKFLOW MINH HỌA
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              {proofCaseStudy.clientDisplayName}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {service.proofHighlight || proofCaseStudy.resultsSummary}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {proofCaseStudy.evidence.map((ev, idx) => (
                <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#b45309' }}>{ev.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{ev.metric}</div>
                </div>
              ))}
            </div>

            <Link
              to={`/du-an/${proofCaseStudy.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0d7647',
                textDecoration: 'none'
              }}
            >
              <span>Xem chi tiết kịch bản &amp; workflow này</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* 7. FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div style={{ marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>
              Giải Đáp Thắc Mắc Về {service.shortName}
            </h3>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.5rem'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HelpCircle size={18} color="#0d7647" /> {faq.question}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0, paddingLeft: '1.6rem' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Related Services (Seamless Navigation) */}
        {relatedServices.length > 0 && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                HỆ SINH THÁI DỊCH VỤ LIÊN QUAN
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
                Khám Phá Các Dịch Vụ Kết Hợp Hiệu Quả
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/dich-vu/${rel.slug}`)}
                  className="interactive-card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#ecfdf5', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                        {rel.badge}
                      </span>
                      <span style={{ fontSize: '1rem', fontWeight: 900, color: '#b45309' }}>
                        {rel.startingPrice}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                      {rel.name}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                      {rel.outcome}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', fontWeight: 700, color: '#0d7647', paddingTop: '0.75rem', borderTop: '1px dashed #e2e8f0' }}>
                    <span>Xem chi tiết</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8.5. Related Knowledge Articles */}
        {relatedArticles.length > 0 && (
          <div style={{ marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              Bài Viết Hướng Dẫn Liên Quan
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  to={`/kien-thuc/${art.slug}`}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d7647' }}>{art.category}</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem', lineHeight: 1.4 }}>
                      {art.title}
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', display: 'flex', alignItems: 'center', gap: 4 }}>
                    Đọc hướng dẫn <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* 9. CHÍNH SÁCH BẢO HÀNH KỸ THUẬT 5 NĂM & ĐỒNG HÀNH ĐỊA PHƯƠNG */}
      <Warranty5YearSection onOpenConsultForm={onOpenConsultForm} />

      <Container size="lg" style={{ marginTop: '3.5rem' }}>
        {/* 10. Final CTA Box */}
        <div
          style={{
            backgroundColor: '#0d7647',
            backgroundImage: 'linear-gradient(135deg, #074e2e 0%, #0d7647 100%)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(13, 118, 71, 0.2)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Bắt Đầu Với Dịch Vụ {service.shortName} Cùng LocalMate
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Bàn giao nghiệm thu thực tế rồi mới thanh toán. 100% tài khoản chính chủ bàn giao cho bạn. Cam kết bảo hành kỹ thuật lên đến 5 năm.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button
              variant="white"
              size="lg"
              onClick={handleCTA}
              style={{ fontWeight: 700, color: '#0d7647', backgroundColor: '#ffffff' }}
            >
              {service.primaryCTA}
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.75rem 1.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '9999px',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.925rem',
                textDecoration: 'none'
              }}
            >
              <Phone size={16} /> Gọi {CONTACT_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
