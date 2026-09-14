import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { LocalTeamSection } from '../components/sections/LocalTeamSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { useRouter } from '../components/layout/Router';
import { COMPANY_DATA } from '../data/company';
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Calendar,
  UserCheck,
  Globe2,
  Layers,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const { entity, guarantees, pillars } = COMPANY_DATA;

  // Organization Schema Data for Structured Canonical SEO
  const orgSchemaData = {
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    name: entity.legalName,
    alternateName: entity.brandName,
    url: entity.contact.website,
    logo: 'https://localmate.vn/logo.png',
    telephone: entity.contact.hotlineTel,
    email: entity.contact.email,
    taxID: entity.taxId,
    foundingDate: entity.foundingDate,
    founder: {
      '@type': 'Person',
      name: entity.founder
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: entity.headquarters.streetAddress,
      addressLocality: entity.headquarters.addressLocality,
      addressRegion: entity.headquarters.addressRegion,
      postalCode: entity.headquarters.postalCode,
      addressCountry: entity.headquarters.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: entity.geo.latitude,
      longitude: entity.geo.longitude
    },
    sameAs: [
      entity.verifications.masothue.url,
      entity.verifications.googleBusiness.url,
      entity.socialProfiles.facebook,
      entity.socialProfiles.linkedin,
      entity.socialProfiles.github
    ],
    areaServed: entity.areasServed.map(area => ({
      '@type': 'AdministrativeArea',
      name: area
    })),
    knowsAbout: entity.servicesProvided,
    slogan: 'Nghiệm thu mới thanh toán — Khách hàng sở hữu 100% tài sản số'
  };

  return (
    <div className="about-canonical-page" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <SEOHead
        title="Về LocalMate — Pháp Nhân Minh Bạch & Đơn Vị Hiện Diện Số Thực Chiến"
        description="LocalMate (CÔNG TY TNHH LOCALMATE - MST: 4001337934) cung cấp giải pháp Website, SEO Google Maps, AI Search GEO và Tự động hóa CRM cho hộ kinh doanh & SME. Bàn giao mới thanh toán."
        canonicalPath="/ve-localmate"
        breadcrumbs={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Về LocalMate', url: '/ve-localmate' }
        ]}
        schemaType="Organization"
        schemaData={orgSchemaData}
      />

      {/* 1. Header & Breadcrumb */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '1.25rem 0 2.5rem 0' }}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Trang chủ', url: '/' },
              { name: 'Về LocalMate', url: '/ve-localmate' }
            ]}
          />

          <div style={{ maxWidth: '880px', margin: '1.5rem auto 0 auto', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#166534',
                backgroundColor: '#dcfce7',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                marginBottom: '1rem',
                border: '1px solid #bbf7d0'
              }}
            >
              <ShieldCheck size={16} color="#16a34a" /> HỒ SƠ PHÁP NHÂN &amp; NĂNG LỰC THỰC CHIẾN
            </span>

            <h1
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              Về LocalMate — Người Đồng Hành Số Đáng Tin Cậy Tại Địa Phương
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                color: '#475569',
                lineHeight: 1.7,
                margin: '0 auto 1.75rem auto',
                textWrap: 'pretty'
              }}
            >
              Hoạt động với tư cách pháp nhân <strong>{entity.legalName}</strong> (MST: {entity.taxId}). Chúng tôi xóa bỏ mọi rủi ro của cách làm cũ bằng 2 nguyên tắc cốt lõi: <strong>Bàn giao rồi mới thanh toán</strong> và <strong>Khách hàng sở hữu 100% tài sản số</strong>.
            </p>

            {/* Quick Action Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                href={`tel:${entity.contact.hotlineTel}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 4px rgba(22, 163, 74, 0.2)'
                }}
              >
                <Phone size={16} /> Gọi Hotline: {entity.contact.hotlineDisplay}
              </a>

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
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={16} color="#0284c7" /> Chat Zalo Kỹ Thuật Viên
              </a>

              <button
                type="button"
                onClick={() => onOpenConsultForm ? onOpenConsultForm('Tư vấn Doanh Nghiệp & Thực Thể') : navigate('/khao-sat-du-an')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#f1f5f9',
                  color: '#334155',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
              >
                <Zap size={15} color="#d97706" /> Nhận Tư Vấn Trực Tiếp
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container size="lg" style={{ padding: '3.5rem 1rem' }}>
        {/* 2. ANSWER-FIRST CHUNK CHO AI SEARCH (GEO/AEO OPTIMIZED) */}
        <section
          aria-labelledby="ai-answer-heading"
          style={{
            backgroundColor: '#f0fdf4',
            border: '2px solid #86efac',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '3.5rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: '#15803d',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              <Bot size={14} /> AI Search &amp; GEO Verified Chunk
            </span>
            <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 600 }}>
              Dữ liệu cấu trúc chuẩn xác cho Tìm kiếm AI &amp; Khách hàng
            </span>
          </div>

          <h2
            id="ai-answer-heading"
            style={{
              fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '1rem',
              lineHeight: 1.35
            }}
          >
            {entity.aiAnswerChunk.question}
          </h2>

          <div
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: '#1e293b',
              backgroundColor: '#ffffff',
              padding: '1.25rem 1.5rem',
              borderRadius: '10px',
              border: '1px solid #bbf7d0',
              marginBottom: '1.5rem',
              textWrap: 'pretty'
            }}
          >
            <strong>Trả lời trực tiếp (Answer-First): </strong>
            {entity.aiAnswerChunk.directAnswer}
          </div>

          {/* Key Facts Data Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0.75rem'
            }}
          >
            {entity.aiAnswerChunk.keyFacts.map((fact, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  backgroundColor: '#ffffff',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #dcfce7'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  {fact.label}
                </span>
                <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0f172a' }}>
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. THÔNG TIN PHÁP LÝ CHI TIẾT & KẾT NỐI XÁC MINH (VERIFICATIONS) */}
        <section aria-labelledby="legal-entity-heading" style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#0369a1',
                backgroundColor: '#e0f2fe',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                marginBottom: '0.75rem'
              }}
            >
              <Building2 size={15} /> MINH BẠCH DOANH NGHIỆP 100%
            </span>
            <h2
              id="legal-entity-heading"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}
            >
              Hồ Sơ Pháp Lý Doanh Nghiệp &amp; Cổng Tra Cứu Độc Lập
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
              Khách hàng hoàn toàn có thể kiểm tra chéo pháp nhân của chúng tôi qua các cổng dữ liệu quốc gia và nền tảng chính thức.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}
          >
            {/* Cột Trái: Bảng Dữ Liệu Pháp Lý SSOT */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#16a34a'
                  }}
                >
                  <Building2 size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Tư Cách Pháp Nhân Đầy Đủ
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {entity.legalName}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f8fafc' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <FileCheck2 size={16} /> Mã số thuế doanh nghiệp
                  </span>
                  <strong style={{ fontSize: '0.95rem', color: '#0f172a', fontFamily: 'monospace', backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {entity.taxId}
                  </strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f8fafc' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={16} /> Ngày cấp / hoạt động
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                    {entity.foundingDateFormatted}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f8fafc' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={16} /> Tình trạng hoạt động
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', backgroundColor: '#dcfce7', padding: '0.25rem 0.6rem', borderRadius: '9999px' }}>
                    {entity.status}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f8fafc' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <UserCheck size={16} /> Đại diện pháp luật
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                    {entity.legalRepresentative}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f8fafc' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={16} /> Trụ sở chính đăng ký
                  </span>
                  <span style={{ fontSize: '0.925rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.5 }}>
                    {entity.headquarters.fullAddress}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f8fafc' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Mail size={16} /> Email tiếp nhận văn bản
                  </span>
                  <a href={`mailto:${entity.contact.email}`} style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0284c7', textDecoration: 'none' }}>
                    {entity.contact.email}
                  </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={16} /> Hotline hỗ trợ 24/7
                  </span>
                  <a href={`tel:${entity.contact.hotlineTel}`} style={{ fontSize: '0.95rem', fontWeight: 800, color: '#16a34a', textDecoration: 'none' }}>
                    {entity.contact.hotlineDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Cột Phải: 4 Kênh Xác Minh Độc Lập (Verification Links) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '0.5rem 0 0.5rem 0' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Kênh Kết Nối &amp; Xác Minh Chính Thức
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
                  Bấm vào từng liên kết để tra cứu trực tiếp hồ sơ công khai của LocalMate trên các cổng uy tín:
                </p>
              </div>

              {/* 1. Masothue */}
              <a
                href={entity.verifications.masothue.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.15rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#16a34a';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(22, 163, 74, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}
                  >
                    MST
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                      {entity.verifications.masothue.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {entity.verifications.masothue.platform} • {entity.verifications.masothue.statusText}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', backgroundColor: '#dcfce7', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {entity.verifications.masothue.badge}
                  </span>
                  <ExternalLink size={16} color="#94a3b8" />
                </div>
              </a>

              {/* 2. Google Business Profile */}
              <a
                href={entity.verifications.googleBusiness.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.15rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#16a34a';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(22, 163, 74, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#fef3c7',
                      color: '#d97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                      {entity.verifications.googleBusiness.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {entity.verifications.googleBusiness.platform} • {entity.verifications.googleBusiness.statusText}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e40af', backgroundColor: '#dbeafe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {entity.verifications.googleBusiness.badge}
                  </span>
                  <ExternalLink size={16} color="#94a3b8" />
                </div>
              </a>

              {/* 3. Facebook Fanpage */}
              <a
                href={entity.verifications.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.15rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#16a34a';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(22, 163, 74, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#e0e7ff',
                      color: '#4338ca',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}
                  >
                    FB
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                      {entity.verifications.facebook.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {entity.verifications.facebook.platform} • {entity.verifications.facebook.statusText}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3730a3', backgroundColor: '#e0e7ff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {entity.verifications.facebook.badge}
                  </span>
                  <ExternalLink size={16} color="#94a3b8" />
                </div>
              </a>

              {/* 4. LinkedIn Company */}
              <a
                href={entity.verifications.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.15rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#16a34a';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(22, 163, 74, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#e0f2fe',
                      color: '#0369a1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}
                  >
                    in
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                      {entity.verifications.linkedin.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {entity.verifications.linkedin.platform} • {entity.verifications.linkedin.statusText}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0369a1', backgroundColor: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {entity.verifications.linkedin.badge}
                  </span>
                  <ExternalLink size={16} color="#94a3b8" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 4. CAM KẾT VÀNG: BÀN GIAO MỚI THANH TOÁN & KHÁCH SỞ HỮU 100% TÀI SẢN SỐ */}
        <section aria-labelledby="guarantees-heading" style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#166534',
                backgroundColor: '#dcfce7',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                marginBottom: '0.75rem'
              }}
            >
              <CheckCircle2 size={15} /> NGUYÊN TẮC HỢP TÁC KHÔNG RỦI RO
            </span>
            <h2
              id="guarantees-heading"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}
            >
              Cam Kết Cốt Lõi Khi Làm Việc Cùng LocalMate
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
              Chúng tôi bảo vệ quyền lợi tài chính và tài sản trí tuệ của chủ hộ kinh doanh bằng các cam kết cụ thể:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: idx < 2 ? '2px solid #16a34a' : '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                {idx < 2 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '1.5rem',
                      backgroundColor: '#16a34a',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Cam Kết Vàng #{idx + 1}
                  </span>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. LĨNH VỰC HOẠT ĐỘNG & KHU VỰC PHỤC VỤ */}
        <section aria-labelledby="scope-heading" style={{ marginBottom: '4.5rem' }}>
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: 'clamp(1.75rem, 3vw, 3rem)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem'
              }}
            >
              {/* Cột Trái: Lĩnh vực hoạt động */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Layers size={20} color="#16a34a" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                    Năng Lực Triển Khai
                  </span>
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  Lĩnh Vực Hoạt Động Cốt Lõi
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  LocalMate tập trung giải quyết trọn gói bài toán hiện diện số cho các chủ tiệm, cơ sở dịch vụ và doanh nghiệp vừa &amp; nhỏ:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {entity.servicesProvided.map((service, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        backgroundColor: '#ffffff',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#1e293b'
                      }}
                    >
                      <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <button
                    type="button"
                    onClick={() => navigate('/dich-vu')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '0.65rem 1.2rem',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Xem chi tiết 5 trụ cột dịch vụ</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Cột Phải: Khu vực phục vụ */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Globe2 size={20} color="#0284c7" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase' }}>
                    Mạng Lưới Địa Phương
                  </span>
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  Khu Vực Phục Vụ &amp; Hỗ Trợ Tận Nơi
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Kỹ thuật viên in-house sẵn sàng gặp mặt trực tiếp tại cơ sở kinh doanh, khảo sát thực tế và thiết lập hệ thống:
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {entity.areasServed.map((area, aIdx) => (
                    <span
                      key={aIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '9999px',
                        padding: '0.45rem 0.95rem',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: '#1e293b'
                      }}
                    >
                      <MapPin size={14} color="#0284c7" />
                      {area}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0f172a' }}>
                    Thời gian làm việc &amp; Trực kỹ thuật:
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>
                    {entity.contact.workingHours}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#16a34a', fontWeight: 700 }}>
                    ✓ Tiếp nhận và xử lý sự cố gấp qua Zalo Hotline trong 15-30 phút
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* 6. ĐỘI NGŨ KỸ THUẬT VIÊN IN-HOUSE & CAM KẾT 3 KHÔNG */}
      <LocalTeamSection onOpenConsultForm={onOpenConsultForm} />

      {/* 7. BẢO CHỨNG PHÁP NHÂN & 5 TÀI SẢN BÀN GIAO */}
      <TrustSection />

      {/* 8. QUY TRÌNH LÀM VIỆC MINH BẠCH 5 BƯỚC */}
      <ProcessSection />
    </div>
  );
};
