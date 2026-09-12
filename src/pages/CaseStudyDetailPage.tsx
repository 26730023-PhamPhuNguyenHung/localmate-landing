import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getCaseStudyBySlug, getAllCaseStudies } from '../data/caseStudiesData';
import { useRouter, Link } from '../components/layout/Router';
import {
  Sparkles, CheckCircle2, ArrowRight, MapPin,
  Calendar, Quote, Check, Clock, TrendingUp,
  AlertTriangle, ShieldCheck, PhoneCall, Zap,
  ExternalLink, ChevronRight, BarChart3, Star, Layers
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const caseStudy = getCaseStudyBySlug(slug);
  const allCaseStudies = getAllCaseStudies();

  if (!caseStudy) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>
            Dự án không tồn tại hoặc đã được cập nhật đường dẫn
          </h1>
          <p style={{ color: '#64748b', margin: '1rem 0 2rem 0' }}>
            Vui lòng quay lại trang danh sách dự án để xem các kết quả đo lường thực tế khác.
          </p>
          <Button variant="primary" onClick={() => navigate('/du-an')}>
            Xem tất cả dự án
          </Button>
        </Container>
      </div>
    );
  }

  const otherCaseStudies = allCaseStudies
    .filter((cs) => cs.id !== caseStudy.id)
    .slice(0, 3);

  const handleCTA = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(`Khảo sát tiệm: ${caseStudy.clientDisplayName}`);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#fcfdfd', padding: '2rem 0 6rem 0' }}>
      {/* SEO & Structured Data */}
      <SEOHead
        title={`Kịch Bản Ngành: ${caseStudy.clientDisplayName} | LocalMate`}
        description={caseStudy.resultsSummary}
        canonicalPath={`/du-an/${caseStudy.slug}`}
        breadcrumbs={[
          { name: 'Kịch bản & Dự án', url: '/du-an' },
          { name: caseStudy.clientDisplayName, url: `/du-an/${caseStudy.slug}` }
        ]}
      />

      <Container size="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Kịch bản & Dự án', url: '/du-an' },
            { name: caseStudy.clientDisplayName, url: `/du-an/${caseStudy.slug}` }
          ]}
        />

        {/* Hero Case Header - Minh Bạch Kịch Bản & Workflow */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '3.5rem',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#0d7647',
                backgroundColor: '#e6f7ef',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                border: '1px solid #c7eed9'
              }}
            >
              {caseStudy.industry}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
              <MapPin size={14} color="#94a3b8" /> {caseStudy.location}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
              <Calendar size={14} color="#94a3b8" /> {caseStudy.period}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#0284c7',
                backgroundColor: '#f0f9ff',
                padding: '0.35rem 0.8rem',
                borderRadius: '9999px',
                border: '1px solid #bae6fd',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              <ShieldCheck size={13} /> {caseStudy.scenarioType || 'Tình huống giả định minh họa'}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.85rem, 4vw, 2.6rem)',
              color: '#0f172a',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            {caseStudy.clientDisplayName}
          </h1>

          {caseStudy.clientSubtitle && (
            <div style={{ fontSize: '1.1rem', color: '#0d7647', fontWeight: 700, marginBottom: '1.25rem' }}>
              {caseStudy.clientSubtitle}
            </div>
          )}

          {/* Transparency Disclaimer Notice */}
          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              marginBottom: '1.75rem',
              fontSize: '0.875rem',
              color: '#166534',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}
          >
            <ShieldCheck size={20} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Ghi chú minh bạch thương hiệu:</strong> {caseStudy.transparencyNote || 'Đây là kịch bản giả định dựa trên bài toán kinh doanh phổ biến để minh họa quy trình công nghệ và cách LocalMate tháo gỡ điểm nghẽn. Chúng tôi cam kết kỹ thuật thực tế và nói không với các cam kết ảo.'}
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              borderLeft: '4px solid #0d7647',
              borderRadius: '0 12px 12px 0',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
              VÍ DỤ CÁCH LOCALMATE XỬ LÝ
            </div>
            <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              {caseStudy.resultsSummary}
            </p>
          </div>

          {/* Evidence Metric Grid - Thẻ Số Liệu To Rõ */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              GIÁ TRỊ BÀN GIAO KỸ THUẬT &amp; MỤC TIÊU ĐO LƯỜNG
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
              {caseStudy.evidence.map((ev, idx) => {
                const metricColors = ['#ea580c', '#0d7647', '#0284c7', '#7e22ce'];
                const cardColor = metricColors[idx % metricColors.length];
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                      borderTop: `4px solid ${cardColor}`
                    }}
                  >
                    <div style={{ fontSize: '2.25rem', fontWeight: 900, color: cardColor, lineHeight: 1 }}>
                      {ev.value}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginTop: '0.75rem', lineHeight: 1.3 }}>
                      {ev.metric}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.35rem', lineHeight: 1.4 }}>
                      {ev.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4-STAGE STORYTELLING STRUCTURE (FastMarketing Standard) */}

        {/* STAGE 1: BỐI CẢNH & XUẤT PHÁT ĐIỂM */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: '#e6f7ef',
                color: '#0d7647',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem'
              }}
            >
              1
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Bối Cảnh &amp; Xuất Phát Điểm Ban Đầu
            </h2>
          </div>

          <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {caseStudy.context}
          </p>

          <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Mục tiêu của chủ cơ sở khi tìm đến LocalMate:
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              {caseStudy.problem}
            </p>
          </div>
        </div>

        {/* STAGE 2: ĐIỂM NGHẼN CỐT LÕI */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem'
              }}
            >
              2
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Điểm Nghẽn &amp; Khó Khăn Cản Trở Tăng Trưởng
            </h2>
          </div>

          {/* Detailed Bottlenecks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {caseStudy.bottlenecks.map((bn, bnIdx) => (
              <div
                key={bnIdx}
                style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '14px',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <AlertTriangle size={18} color="#dc2626" style={{ flexShrink: 0, marginTop: 2 }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#991b1b', margin: 0, lineHeight: 1.4 }}>
                    {bn.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#7f1d1d', margin: 0, lineHeight: 1.6 }}>
                  {bn.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Starting State Checklist */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
              Hiện trạng trước khi triển khai:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {caseStudy.startingState.map((st, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem'
                  }}
                >
                  <span style={{ color: '#dc2626', fontWeight: 900, fontSize: '1rem', lineHeight: 1, marginTop: 2 }}>✕</span>
                  <span style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>{st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STAGE 3: GIẢI PHÁP KỸ THUẬT LOCALMATE */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: '#e6f7ef',
                color: '#0d7647',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem'
              }}
            >
              3
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Giải Pháp Kỹ Thuật LocalMate Thực Hiện
            </h2>
          </div>

          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '2rem' }}>
            LocalMate áp dụng quy trình chuẩn kỹ thuật cao, tập trung giải quyết đúng nguyên nhân gốc rễ thay vì biện pháp tạm thời.
          </p>

          {/* Technical Solutions Step Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {caseStudy.technicalSolutions.map((ts) => (
              <div
                key={ts.step}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        color: '#0d7647',
                        backgroundColor: '#e6f7ef',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      BƯỚC 0{ts.step}
                    </span>
                    {ts.tag && (
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0284c7', backgroundColor: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {ts.tag}
                      </span>
                    )}
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.4 }}>
                    {ts.title}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {ts.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Services Used Tags */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
              Dịch vụ được phối hợp trong dự án:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {caseStudy.servicesUsed.map((srv, idx) => (
                <Link
                  key={idx}
                  to={`/dich-vu/${srv.serviceSlug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    backgroundColor: '#e6f7ef',
                    border: '1px solid #c7eed9',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0d7647',
                    textDecoration: 'none'
                  }}
                >
                  <span>{srv.serviceName}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* STAGE 4: KẾT QUẢ ĐO LƯỜNG BEFORE / AFTER & VISUAL PROOF */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: '#fef3c7',
                color: '#b45309',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem'
              }}
            >
              4
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Kết Quả Đo Lường Before / After Thực Tế
            </h2>
          </div>

          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '2rem' }}>
            Bảng đối chiếu minh bạch các chỉ số trước và sau khi LocalMate can thiệp kỹ thuật.
          </p>

          {/* Before / After Table */}
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', width: '28%' }}>
                    CHỈ SỐ ĐO LƯỜNG
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#dc2626', width: '24%' }}>
                    TRƯỚC KHI LÀM (BEFORE)
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', width: '24%' }}>
                    SAU TRIỂN KHAI (AFTER)
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0284c7', width: '24%' }}>
                    TÁC ĐỘNG KINH DOANH
                  </th>
                </tr>
              </thead>
              <tbody>
                {caseStudy.beforeAfterComparison.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    style={{
                      borderBottom: '1px solid #f1f5f9',
                      backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#fafafa'
                    }}
                  >
                    <td style={{ padding: '1rem', fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>
                      {row.metric}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b', backgroundColor: '#fff5f5' }}>
                      <span style={{ color: '#dc2626', fontWeight: 700 }}>✕</span> {row.before}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#0d7647', fontWeight: 700, backgroundColor: '#f0fdf4' }}>
                      <span style={{ color: '#0d7647', fontWeight: 900 }}>✓</span> {row.after}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Visual Proof Card (FastMarketing Style) */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '2px dashed #cbd5e1',
              borderRadius: '16px',
              padding: '2rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <BarChart3 size={20} color="#0d7647" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {caseStudy.visualProof.title}
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#e6f7ef',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid #c7eed9'
                }}
              >
                {caseStudy.visualProof.badge}
              </span>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {caseStudy.visualProof.description}
            </p>

            {/* Visual Proof Highlight Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {caseStudy.visualProof.highlightMetrics.map((hm, hmIdx) => (
                <div
                  key={hmIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1rem 1.25rem'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>
                    {hm.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, marginTop: '0.35rem' }}>
                    {hm.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DELIVERABLES & ROI TIMELINE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Deliverables */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={20} color="#0d7647" /> Bàn Giao Thực Tế Sau Dự Án
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {caseStudy.deliverables.map((del, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem'
                  }}
                >
                  <Check size={16} color="#0d7647" style={{ flexShrink: 0 }} />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Timeline Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <TrendingUp size={20} color="#ea580c" /> Tiến Độ Triển Khai Kỹ Thuật
              </h3>
              <div
                style={{
                  backgroundColor: '#fff7ed',
                  border: '1px solid #ffedd5',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#c2410c', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  KẾ HOẠCH BÀN GIAO MẪU
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#9a3412', lineHeight: 1.4 }}>
                  {caseStudy.roiTimeline}
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Thời gian triển khai mẫu: <strong style={{ color: '#0f172a' }}>{caseStudy.period}</strong>. Mọi hạng mục đều được nghiệm thu trực tiếp trên hệ thống thực tế trước khi thanh toán.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px dashed #e2e8f0' }}>
              <Button
                variant="primary"
                size="md"
                onClick={handleCTA}
                style={{ width: '100%', fontWeight: 700 }}
              >
                Khảo sát cơ sở tương tự 0đ →
              </Button>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL / MỤC TIÊU TRẢI NGHIỆM */}
        {caseStudy.testimonial && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderLeft: '6px solid #0d7647',
              borderRadius: '20px',
              padding: '2.5rem',
              marginBottom: '3.5rem',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0d7647', marginBottom: '1rem' }}>
              <Sparkles size={18} color="#0d7647" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginLeft: 4 }}>
                Mục Tiêu Trải Nghiệm Khách Hàng (Customer Expectation Benchmark)
              </span>
            </div>

            <Quote size={32} color="#0d7647" style={{ marginBottom: '0.75rem', opacity: 0.6 }} />

            <p style={{ fontSize: '1.15rem', color: '#0f172a', fontStyle: 'italic', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 500 }}>
              "{caseStudy.testimonial.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              {caseStudy.testimonial.avatarText && (
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: '#e6f7ef',
                    color: '#0d7647',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    border: '2px solid #c7eed9'
                  }}
                >
                  {caseStudy.testimonial.avatarText}
                </div>
              )}
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                  {caseStudy.testimonial.author}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  {caseStudy.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA BOX 100% LIGHT MODE SÁNG SỦA */}
        <div
          style={{
            backgroundColor: '#f0fdf4',
            border: '2px solid #bbf7d0',
            borderRadius: '24px',
            padding: 'clamp(2.5rem, 5vw, 3.5rem)',
            textAlign: 'center',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#ffffff',
              padding: '0.35rem 0.95rem',
              borderRadius: '9999px',
              border: '1px solid #86efac',
              marginBottom: '1.25rem'
            }}
          >
            <PhoneCall size={15} color="#0d7647" /> ĐẶT HẸN KHẢO SÁT TIỆM TẬN NƠI 0Đ
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '0.85rem',
              lineHeight: 1.3
            }}
          >
            Bạn Muốn Triển Khai Giải Pháp Tương Tự Cho Tiệm Của Mình?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#334155',
              maxWidth: '650px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.65
            }}
          >
            Chuyên gia LocalMate sẽ trực tiếp kiểm tra vị trí Google Maps, rà soát đối thủ xung quanh 5km và lên phương án giải pháp chi tiết hoàn toàn miễn phí.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTA}
              style={{
                fontWeight: 800,
                fontSize: '1rem',
                padding: '0.9rem 2.2rem',
                backgroundColor: '#0d7647',
                boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
              }}
            >
              Nhận khảo sát cơ sở 0đ từ kỹ thuật viên →
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/du-an')}
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#0f172a'
              }}
            >
              Xem các kịch bản khác
            </Button>
          </div>
        </div>

        {/* OTHER CASE STUDIES */}
        {otherCaseStudies.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  KỊCH BẢN KHÁC
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  Khám Phá Các Kịch Bản Ngành Khác
                </h3>
              </div>
              <button
                onClick={() => navigate('/du-an')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#0d7647',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Xem tất cả 5 dự án</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {otherCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => navigate(`/du-an/${cs.slug}`)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#0d7647';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#e6f7ef', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                        {cs.industry}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                        {cs.location.split(',')[0]}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                      {cs.clientDisplayName}
                    </h4>

                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, marginBottom: '1rem' }}>
                      {cs.resultsSummary}
                    </p>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ backgroundColor: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1 }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ea580c' }}>{cs.evidence[0]?.value}</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>{cs.evidence[0]?.metric}</div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1 }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0d7647' }}>{cs.evidence[1]?.value}</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>{cs.evidence[1]?.metric}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', marginTop: '1rem', borderTop: '1px dashed #e2e8f0', fontSize: '0.8rem', fontWeight: 700, color: '#0d7647' }}>
                    <span>Xem câu chuyện</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
