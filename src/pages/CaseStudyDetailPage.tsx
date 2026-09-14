import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA, CaseStudyItem } from '../data/company';
import { getCaseStudyBySlug, getAllCaseStudies, CaseStudyEntity } from '../data/caseStudiesData';
import { useRouter, Link } from '../components/layout/Router';
import {
  Sparkles, CheckCircle2, ArrowRight, MapPin,
  Calendar, Quote, Check, Clock, TrendingUp,
  AlertTriangle, ShieldCheck, PhoneCall, Zap,
  ExternalLink, ChevronRight, BarChart3, Star, Layers,
  Gauge, HardDrive, Search, Award, Cpu, FileText
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();

  // Normalize slug
  const normalizedSlug = slug.replace(/^du-an\//, '').replace(/^\//, '').replace(/\/$/, '');

  // 1. Check real project from COMPANY_DATA.caseStudies
  const realProject = COMPANY_DATA.caseStudies.find(
    (cs) => cs.slug === normalizedSlug || cs.id === normalizedSlug || cs.canonicalPath.endsWith(normalizedSlug)
  );

  // 2. Check hypothetical scenario from caseStudiesData.ts as fallback
  const scenarioProject = getCaseStudyBySlug(normalizedSlug);

  const allRealProjects = COMPANY_DATA.caseStudies;
  const allScenarios = getAllCaseStudies();

  const handleCTA = (clientTitle: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(`Khảo sát tiệm / tư vấn: ${clientTitle}`);
    } else {
      navigate('/lien-he');
    }
  };

  // -------------------------------------------------------------
  // TRƯỜNG HỢP 1: DỰ ÁN THỰC TẾ (REAL VERIFIED CASE STUDY)
  // -------------------------------------------------------------
  if (realProject) {
    const otherReal = allRealProjects.filter((p) => p.slug !== realProject.slug);

    // Schema CreativeWork / Article với Breadcrumbs
    const articleSchema = {
      headline: realProject.title,
      description: `${realProject.clientName} — ${realProject.solution}`,
      image: 'https://localmate.vn/logo.png',
      datePublished: '2024-06-01T08:00:00+07:00',
      dateModified: '2026-03-15T10:00:00+07:00',
      author: {
        '@type': 'Organization',
        name: 'LocalMate',
        url: 'https://localmate.vn'
      },
      publisher: {
        '@type': 'Organization',
        name: 'LocalMate',
        logo: {
          '@type': 'ImageObject',
          url: 'https://localmate.vn/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://localmate.vn${realProject.canonicalPath}`
      },
      about: {
        '@type': 'LocalBusiness',
        name: realProject.clientName,
        address: realProject.location
      }
    };

    return (
      <div style={{ backgroundColor: '#fcfdfd', padding: '2rem 0 6rem 0' }}>
        <SEOHead
          title={`${realProject.clientName} — Case Study Thực Tế | LocalMate`}
          description={`Case study thực tế của ${realProject.clientName}: Vấn đề ban đầu, giải pháp triển khai, công nghệ bàn giao và các chỉ số đo lường thực tế PageSpeed ${realProject.metrics.lighthouseScore}/100, Tải ${realProject.metrics.pageSpeedMobile}, Dung lượng ${realProject.metrics.pageWeight}.`}
          canonicalPath={realProject.canonicalPath}
          breadcrumbs={[
            { name: 'Dự án thực tế', url: '/du-an' },
            { name: realProject.clientName, url: realProject.canonicalPath }
          ]}
          schemaType="Article"
          schemaData={articleSchema}
        />

        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Dự án thực tế', url: '/du-an' },
              { name: realProject.clientName, url: realProject.canonicalPath }
            ]}
          />

          {/* Top Hero Banner */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '3rem',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
            }}
          >
            {/* Meta tags */}
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
                {realProject.industry}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                <MapPin size={14} color="#0d7647" /> {realProject.location}
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
                <Award size={13} /> Dự án thực tế đã nghiệm thu
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#b45309',
                  backgroundColor: '#fef3c7',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  border: '1px solid #fde68a',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <Clock size={13} /> {realProject.timeline}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.85rem, 4vw, 2.65rem)',
                color: '#0f172a',
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                textWrap: 'pretty'
              }}
            >
              {realProject.title}
            </h1>

            <div style={{ fontSize: '1.15rem', color: '#0d7647', fontWeight: 800, marginBottom: '1.5rem' }}>
              Khách hàng: {realProject.clientName}
            </div>

            {/* Transparency Note */}
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '12px',
                padding: '0.9rem 1.25rem',
                marginBottom: '2rem',
                fontSize: '0.875rem',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <ShieldCheck size={20} color="#0d7647" style={{ flexShrink: 0 }} />
              <div>
                <strong>Dự án nghiệm thu thực tế:</strong> Hệ thống đã được triển khai hoàn chỉnh trên hạ tầng Cloudflare Edge và đồng bộ Google Business Profile cho khách hàng. Bàn giao 100% quyền quản trị trước khi thanh toán.
              </div>
            </div>

            {/* Highlight Real-World Metrics Bar (5 Metrics) */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                5 CHỈ SỐ ĐO LƯỜNG THỰC TẾ (REAL-WORLD METRICS)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                {/* 1. Lighthouse */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderTop: '4px solid #0d7647', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)' }}>
                  <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0d7647', lineHeight: 1 }}>
                    {realProject.metrics.lighthouseScore} <span style={{ fontSize: '1rem', color: '#64748b' }}>/ 100</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
                    Google Lighthouse
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Điểm hiệu năng thiết bị di động
                  </div>
                </div>

                {/* 2. PageSpeed Time */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderTop: '4px solid #d97706', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)' }}>
                  <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>
                    {realProject.metrics.pageSpeedMobile}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
                    Tốc độ tải trang
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Tải trang thực tế dưới 0.8 giây
                  </div>
                </div>

                {/* 3. Page Weight */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderTop: '4px solid #0284c7', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)' }}>
                  <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>
                    {realProject.metrics.pageWeight}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
                    Dung lượng trang
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Tối ưu nén ảnh &amp; code &lt; 500KB
                  </div>
                </div>

                {/* 4. Google Indexing */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderTop: '4px solid #7e22ce', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)' }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#7e22ce', lineHeight: 1.3 }}>
                    {realProject.metrics.googleIndexing}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
                    Lập chỉ mục Google
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Khai báo thực thể &amp; Sitemap
                  </div>
                </div>

                {/* 5. Maps Rank */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderTop: '4px solid #e11d48', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#e11d48', lineHeight: 1.3 }}>
                    {realProject.metrics.mapRank}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
                    Thứ hạng Google Maps
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Bán kính tìm kiếm địa phương
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CẤU TRÚC 7 BƯỚC BÀI CASE STUDY CHUẨN MỰC                  */}
          {/* ======================================================== */}

          {/* 1. KHÁCH HÀNG & VẤN ĐỀ BAN ĐẦU (PROBLEM BEFORE) */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#fee2e2',
                  color: '#dc2626',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                1
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Khách Hàng &amp; Vấn Đề Ban Đầu
              </h2>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Bối cảnh &amp; Đơn vị kinh doanh:
              </div>
              <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                <strong>{realProject.clientName}</strong> hoạt động trong lĩnh vực <strong>{realProject.industry}</strong> tại <strong>{realProject.location}</strong>.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '14px',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <AlertTriangle size={20} color="#dc2626" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#991b1b', margin: 0 }}>
                  Điểm nghẽn gây thất thoát khách hàng trước khi LocalMate hỗ trợ:
                </h3>
              </div>
              <p style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: 1.7, margin: 0 }}>
                {realProject.problemBefore}
              </p>
            </div>
          </div>

          {/* 2. GIẢI PHÁP TRIỂN KHAI (SOLUTION) */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#e6f7ef',
                  color: '#0d7647',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                2
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Giải Pháp Triển Khai Từ LocalMate
              </h2>
            </div>

            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              LocalMate thực hiện giải pháp trọn gói, giải quyết dứt điểm các cản trở kỹ thuật để biến hiện diện số của cơ sở thành kênh thu hút khách hàng đều đặn:
            </p>

            <div
              style={{
                backgroundColor: '#f0fdf4',
                borderLeft: '4px solid #0d7647',
                borderRadius: '0 14px 14px 0',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                CHIẾN LƯỢC KỸ THUẬT CỐT LÕI
              </div>
              <p style={{ fontSize: '1.05rem', color: '#166534', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                {realProject.solution}
              </p>
            </div>
          </div>

          {/* 3. CÔNG NGHỆ & HẠNG MỤC BÀN GIAO (TECH STACK & DELIVERABLES) */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#e0f2fe',
                  color: '#0284c7',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                3
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Công Nghệ Ứng Dụng &amp; Hạng Mục Bàn Giao
              </h2>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Cpu size={18} color="#0284c7" /> Công nghệ &amp; Hạ tầng triển khai:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {realProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      backgroundColor: '#f1f5f9',
                      color: '#0f172a',
                      padding: '0.45rem 0.95rem',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    ✓ {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <FileText size={18} color="#0d7647" /> Danh sách hạng mục bàn giao 100% quyền sở hữu:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                {realProject.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <CheckCircle2 size={20} color="#0d7647" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. THỜI GIAN THỰC HIỆN (TIMELINE) */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                4
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Thời Gian Thực Hiện &amp; Tiến Độ Bàn Giao
              </h2>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: '16px',
                padding: '1.5rem 2rem',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  TIẾN ĐỘ NGHIỆM THU
                </div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#92400e' }}>
                  {realProject.timeline}
                </div>
              </div>
              <div style={{ maxWidth: '480px', fontSize: '0.9rem', color: '#78350f', lineHeight: 1.6 }}>
                Triển khai khẩn trương, bàn giao phiên bản chạy thử trên tên miền phụ trong 24-48 giờ để khách hàng duyệt trước. Nghiệm thu hoàn thiện mới trỏ tên miền chính và phát hành.
              </div>
            </div>
          </div>

          {/* 5. CHỈ SỐ ĐO LƯỜNG THỰC TẾ (REAL-WORLD METRICS COMPARISON) */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#f3e8ff',
                  color: '#7e22ce',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                5
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Chỉ Số Đo Lường Thực Tế Được Ghi Nhận
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '1.75rem' }}>
              Các số liệu dưới đây được chụp và kiểm tra trực tiếp từ các công cụ độc lập của Google:
            </p>

            {/* 5 Real Metrics Detailed Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '0.9rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', width: '35%' }}>TIÊU CHÍ ĐO LƯỜNG</th>
                    <th style={{ padding: '0.9rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', width: '35%' }}>KẾT QUẢ THỰC TẾ</th>
                    <th style={{ padding: '0.9rem 1rem', fontSize: '0.85rem', fontWeight: 800, color: '#64748b', width: '30%' }}>CÔNG CỤ KIỂM CHỨNG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Google PageSpeed Score</td>
                    <td style={{ padding: '1rem', fontWeight: 900, fontSize: '1.25rem', color: '#0d7647' }}>
                      {realProject.metrics.lighthouseScore} / 100
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>Google PageSpeed Insights</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Thời gian tải trang (Mobile)</td>
                    <td style={{ padding: '1rem', fontWeight: 900, fontSize: '1.25rem', color: '#d97706' }}>
                      {realProject.metrics.pageSpeedMobile} (&lt; 0.8s)
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>Chrome DevTools Waterfall</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Dung lượng trang tối ưu</td>
                    <td style={{ padding: '1rem', fontWeight: 900, fontSize: '1.25rem', color: '#0284c7' }}>
                      {realProject.metrics.pageWeight} (&lt; 500KB)
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>Network Payload Analysis</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Lập chỉ mục Google Search</td>
                    <td style={{ padding: '1rem', fontWeight: 800, fontSize: '1.05rem', color: '#7e22ce' }}>
                      {realProject.metrics.googleIndexing}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>Google Search Console</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Thứ hạng Google Maps địa phương</td>
                    <td style={{ padding: '1rem', fontWeight: 800, fontSize: '1.05rem', color: '#e11d48' }}>
                      {realProject.metrics.mapRank}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>Google Maps Geo Grid Search</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. ĐÁNH GIÁ CỦA KHÁCH HÀNG (TESTIMONIAL) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderLeft: '6px solid #0d7647',
              borderRadius: '20px',
              padding: '2.5rem',
              marginBottom: '3rem',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0d7647', marginBottom: '1rem' }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#e6f7ef',
                  color: '#0d7647',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                6
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Đánh Giá Thực Tế Của Khách Hàng
              </h2>
            </div>

            <Quote size={32} color="#0d7647" style={{ marginBottom: '0.75rem', opacity: 0.6 }} />

            <p style={{ fontSize: '1.18rem', color: '#0f172a', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 500 }}>
              "{realProject.testimonial.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#e6f7ef',
                  color: '#0d7647',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  border: '2px solid #c7eed9'
                }}
              >
                {realProject.testimonial.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>
                  {realProject.testimonial.author}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
                  {realProject.testimonial.role} — {realProject.clientName}
                </div>
              </div>
            </div>
          </div>

          {/* 7. CTA (KÊU GỌI HÀNH ĐỘNG - 100% LIGHT MODE) */}
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
              Bạn Muốn Đạt Được Hiệu Quả Tương Tự Cho Cơ Sở Của Mình?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#334155',
                maxWidth: '680px',
                margin: '0 auto 2rem auto',
                lineHeight: 1.65
              }}
            >
              Chuyên viên LocalMate sẽ trực tiếp kiểm tra vị trí Google Maps, đo tốc độ website và đề xuất giải pháp kỹ thuật phù hợp với mô hình kinh doanh của bạn. Bàn giao chạy thử nghiệm thu hài lòng mới thanh toán.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTA(realProject.clientName)}
                style={{
                  fontWeight: 800,
                  fontSize: '1rem',
                  padding: '0.9rem 2.2rem',
                  backgroundColor: '#0d7647',
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
                }}
              >
                Khảo sát cơ sở 0đ cùng kỹ thuật viên →
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
                Xem các dự án khác
              </Button>
            </div>
          </div>

          {/* OTHER REAL PROJECTS NAVIGATION */}
          {otherReal.length > 0 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    DỰ ÁN KHÁC
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                    Khám Phá Các Dự Án Thực Tế Khác
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
                  <span>Xem tất cả dự án</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
                {otherReal.map((op) => (
                  <div
                    key={op.id}
                    onClick={() => navigate(op.canonicalPath)}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '1.75rem',
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
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#e6f7ef', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                          {op.industry}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {op.location}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                        {op.clientName}
                      </h4>

                      <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, marginBottom: '1rem' }}>
                        {op.title}
                      </p>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div style={{ backgroundColor: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1 }}>
                          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0d7647' }}>
                            {op.metrics.lighthouseScore}/100
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>PageSpeed</div>
                        </div>
                        <div style={{ backgroundColor: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1 }}>
                          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#d97706' }}>
                            {op.metrics.pageSpeedMobile}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Tốc độ tải</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', marginTop: '1rem', borderTop: '1px dashed #e2e8f0', fontSize: '0.85rem', fontWeight: 700, color: '#0d7647' }}>
                      <span>Xem case study này</span>
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
  }

  // -------------------------------------------------------------
  // TRƯỜNG HỢP 2: KỊCH BẢN GIẢ ĐỊNH (HYPOTHETICAL SCENARIO FALLBACK)
  // -------------------------------------------------------------
  if (scenarioProject) {
    const otherScenarios = allScenarios.filter((cs) => cs.id !== scenarioProject.id).slice(0, 3);

    return (
      <div style={{ backgroundColor: '#fcfdfd', padding: '2rem 0 6rem 0' }}>
        <SEOHead
          title={`Kịch Bản Ngành: ${scenarioProject.clientDisplayName} | LocalMate`}
          description={scenarioProject.resultsSummary}
          canonicalPath={`/du-an/${scenarioProject.slug}`}
          breadcrumbs={[
            { name: 'Kịch bản & Dự án', url: '/du-an' },
            { name: scenarioProject.clientDisplayName, url: `/du-an/${scenarioProject.slug}` }
          ]}
          schemaType="Article"
        />

        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Kịch bản & Dự án', url: '/du-an' },
              { name: scenarioProject.clientDisplayName, url: `/du-an/${scenarioProject.slug}` }
            ]}
          />

          {/* Hero Case Header */}
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
                {scenarioProject.industry}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                <MapPin size={14} color="#94a3b8" /> {scenarioProject.location}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                <Calendar size={14} color="#94a3b8" /> {scenarioProject.period}
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
                <ShieldCheck size={13} /> {scenarioProject.scenarioType || 'Tình huống giả định minh họa'}
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
              {scenarioProject.clientDisplayName}
            </h1>

            {scenarioProject.clientSubtitle && (
              <div style={{ fontSize: '1.1rem', color: '#0d7647', fontWeight: 700, marginBottom: '1.25rem' }}>
                {scenarioProject.clientSubtitle}
              </div>
            )}

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
                <strong>Ghi chú minh bạch thương hiệu:</strong> {scenarioProject.transparencyNote}
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
                {scenarioProject.resultsSummary}
              </p>
            </div>

            {/* Evidence Metric Grid */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                GIÁ TRỊ BÀN GIAO KỸ THUẬT &amp; MỤC TIÊU ĐO LƯỜNG
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
                {scenarioProject.evidence.map((ev, idx) => {
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

          {/* Context & Bottlenecks */}
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
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              Bối Cảnh &amp; Điểm Nghẽn Thường Gặp
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              {scenarioProject.context}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {scenarioProject.bottlenecks.map((bn, idx) => (
                <div key={idx} style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ fontWeight: 800, color: '#991b1b', marginBottom: '0.4rem' }}>{bn.title}</div>
                  <div style={{ fontSize: '0.88rem', color: '#7f1d1d', lineHeight: 1.6 }}>{bn.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions & Deliverables */}
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
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
              Quy Trình Kỹ Thuật Xử Lý
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {scenarioProject.technicalSolutions.map((ts) => (
                <div key={ts.step} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', marginBottom: '0.5rem' }}>BƯỚC 0{ts.step}</div>
                  <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>{ts.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>{ts.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '2px solid #bbf7d0',
              borderRadius: '24px',
              padding: '2.5rem',
              textAlign: 'center',
              marginBottom: '4rem'
            }}
          >
            <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem' }}>
              Bạn Đang Gặp Bài Toán Tương Tự?
            </h2>
            <p style={{ color: '#334155', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: 1.65 }}>
              Liên hệ ngay để nhận phương án rà soát kỹ thuật và khảo sát vị trí Maps miễn phí từ kỹ thuật viên LocalMate.
            </p>
            <Button variant="primary" size="lg" onClick={() => handleCTA(scenarioProject.clientDisplayName)} style={{ fontWeight: 800 }}>
              Khảo sát cơ sở 0đ cùng chuyên gia →
            </Button>
          </div>

          {/* Other Scenarios */}
          {otherScenarios.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                Kịch Bản Ngành Khác
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
                {otherScenarios.map((cs) => (
                  <div
                    key={cs.id}
                    onClick={() => navigate(`/du-an/${cs.slug}`)}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', marginBottom: '0.5rem' }}>{cs.industry}</div>
                    <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>{cs.clientDisplayName}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{cs.resultsSummary.slice(0, 100)}...</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    );
  }

  // -------------------------------------------------------------
  // TRƯỜNG HỢP 3: KHÔNG TÌM THẤY DỰ ÁN (NOT FOUND)
  // -------------------------------------------------------------
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
          Xem tất cả dự án thực tế
        </Button>
      </Container>
    </div>
  );
};
