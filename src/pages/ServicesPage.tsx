import React, { useState, useMemo } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { ALL_15_SERVICES_DATA, OperationServiceItem } from '../data/operationsData';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { Warranty5YearSection } from '../components/sections/Warranty5YearSection';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Search,
  Check,
  Cpu,
  Globe,
  MapPin,
  TrendingUp,
  Zap,
  GraduationCap
} from 'lucide-react';
import { useRouter } from '../components/layout/Router';

type CategoryFilter = 'all' | 'ai-search' | 'website-landing' | 'google-seo' | 'ads-conversion' | 'ai-software';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { key: CategoryFilter; label: string; count: number }[] = [
    { key: 'all', label: 'Tất Cả 15 Dịch Vụ', count: 15 },
    { key: 'ai-search', label: 'Đề Xuất AI & GEO', count: 4 },
    { key: 'website-landing', label: 'Website & Tối Ưu', count: 3 },
    { key: 'google-seo', label: 'Google Maps & SEO', count: 4 },
    { key: 'ads-conversion', label: 'Quảng Cáo & Kéo Khách', count: 3 },
    { key: 'ai-software', label: 'Đào Tạo & Chuyển Giao', count: 1 }
  ];

  const filteredServices = useMemo(() => {
    return ALL_15_SERVICES_DATA.filter((service) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        service.categorySlug === selectedCategory ||
        (selectedCategory === 'website-landing' && (service.categorySlug === 'website-landing' || service.categorySlug === 'website-fix' || service.categorySlug === 'digital-care')) ||
        (selectedCategory === 'google-seo' && (service.categorySlug === 'google-seo' || service.categorySlug === 'website-fix'));

      // Search query
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        service.name.toLowerCase().includes(query) ||
        service.shortName.toLowerCase().includes(query) ||
        service.problem.toLowerCase().includes(query) ||
        service.outcome.toLowerCase().includes(query) ||
        service.deliverables.some((d) => d.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Danh Mục 15 Dịch Vụ Website, GEO AI & Marketing Địa Phương | LocalMate"
        description="Khám phá toàn bộ 15 dịch vụ trọng điểm của LocalMate: Tối ưu đề xuất AI (GEO, AEO, SEO AI), Thiết kế Website 490k, Đưa tiệm lên Google Maps, Quảng cáo Google Ads 0% kê giá, bảo hành kỹ thuật lên đến 5 năm."
        canonicalPath="/dich-vu"
        breadcrumbs={[
          { name: 'Dịch vụ', url: '/dich-vu' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Dịch vụ', url: '/dich-vu' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#ecfdf5',
              border: '1px solid #bbf7d0',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="#0d7647" /> HỆ SINH THÁI 15 DỊCH VỤ THỰC CHIẾN
          </span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.25 }}>
            Danh Mục 15 Dịch Vụ Số Hóa &amp; Kéo Khách Địa Phương
          </h1>
          <p style={{ marginTop: '1rem', color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, textWrap: 'pretty' }}>
            Làm từ gốc, giá bình dân minh bạch, tuyệt đối 0% phụ phí phát sinh. Cam kết đồng hành kỹ thuật và <strong>bảo hành lên đến 5 năm</strong> cho mọi cơ sở kinh doanh, hộ kinh doanh và doanh nghiệp SME.
          </p>

          {/* Quick Value Pillars */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
              fontSize: '0.85rem',
              color: '#334155'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#f8fafc', padding: '0.4rem 0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <ShieldCheck size={16} color="#0d7647" />
              <span>Bảo hành kỹ thuật lên đến 5 năm</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#f8fafc', padding: '0.4rem 0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <CheckCircle2 size={16} color="#0d7647" />
              <span>100% Bàn giao tài khoản chính chủ</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#f8fafc', padding: '0.4rem 0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <CheckCircle2 size={16} color="#0d7647" />
              <span>Nghiệm thu hài lòng mới thanh toán</span>
            </div>
          </div>

          {/* 2 Featured Cluster Banners */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {/* Cluster 1: Local Search & Google Maps & Technical */}
            <div
              onClick={() => navigate('/dich-vu/local-search')}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                backgroundColor: '#edf7f1',
                border: '1.5px solid #a7f3d0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                boxShadow: '0 2px 8px rgba(13,118,71,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #c6ebd4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="#0d7647" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#063d24' }}>
                      Cụm Local Search &amp; Google Maps
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, backgroundColor: '#0d7647', color: '#ffffff', padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>
                      Bảo Hành 5 Năm
                    </span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#047857', marginTop: '0.2rem' }}>
                    Xác minh GPS chính chủ 100% • Chống cướp Maps • QR Review 5 sao • SEO 3-10km • PageSpeed 90+ Cloudflare • Audit 0đ.
                  </div>
                </div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', fontWeight: 700, color: '#0d7647', flexShrink: 0 }}>
                <span>Khám phá</span>
                <ArrowRight size={15} />
              </div>
            </div>

            {/* Cluster 2: Chạy Khách & Chăm Sóc Vận Hành */}
            <div
              onClick={() => navigate('/dich-vu/chay-khach-cham-soc')}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Zap size={22} color="#16a34a" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b' }}>
                      Cụm Chạy Khách &amp; Vận Hành
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#475569', padding: '0.15rem 0.5rem', borderRadius: '9999px', border: '1px solid #cbd5e1' }}>
                      Chuẩn Hóa
                    </span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b', marginTop: '0.2rem' }}>
                    Google Ads 0% kê giá • Khắc phục lỗi Ads sửa điện thoại/laptop • Facebook Ads 5km • Chăm sóc web chuẩn SEO.
                  </div>
                </div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', fontWeight: 700, color: '#475569', flexShrink: 0 }}>
                <span>Khám phá</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div style={{ marginBottom: '2.5rem' }}>
          {/* Search Bar */}
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto 1.5rem auto',
              position: 'relative'
            }}
          >
            <Search
              size={18}
              color="#64748b"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm dịch vụ (ví dụ: GEO, Website 490k, Google Maps, Lỗi Ads, PageSpeed...)"
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                fontSize: '0.95rem',
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                outline: 'none',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                color: '#0f172a'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '4px 8px'
                }}
              >
                Xóa
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedCategory(tab.key)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    border: isActive ? '1px solid #0d7647' : '1px solid #e2e8f0',
                    backgroundColor: isActive ? '#0d7647' : '#ffffff',
                    color: isActive ? '#ffffff' : '#334155'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 15 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem'
          }}
        >
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => navigate(`/dich-vu/${srv.slug}`)}
              className="interactive-card"
              style={{
                backgroundColor: '#ffffff',
                border: srv.highlighted ? '2px solid #86efac' : '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                boxShadow: srv.highlighted ? '0 4px 20px rgba(13, 118, 71, 0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
                position: 'relative',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                {/* Header Row: Badge & Price */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0d7647',
                      backgroundColor: '#ecfdf5',
                      border: '1px solid #bbf7d0',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      display: 'inline-block'
                    }}
                  >
                    {srv.badge}
                  </span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#b45309' }}>
                      {srv.startingPrice}
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h2
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '0.65rem',
                    lineHeight: 1.35
                  }}
                >
                  {srv.name}
                </h2>

                {/* Problem / Headline */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem'
                  }}
                >
                  {srv.headline || srv.problem}
                </p>

                {/* 5-Year Warranty Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#047857',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    padding: '0.25rem 0.55rem',
                    borderRadius: '6px',
                    marginBottom: '1.25rem'
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>{srv.warranty}</span>
                </div>

                {/* Deliverables Checklist (3 items) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {srv.deliverables.slice(0, 3).map((del, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.825rem',
                        color: '#1e293b',
                        lineHeight: 1.45
                      }}
                    >
                      <CheckCircle2 size={15} color="#0d7647" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px dashed #e2e8f0',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#0d7647'
                }}
              >
                <span>Xem chi tiết dịch vụ &amp; báo giá</span>
                <ArrowRight size={16} color="#0d7647" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3.5rem 1rem',
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              marginBottom: '4rem'
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#475569', fontWeight: 600 }}>
              Không tìm thấy dịch vụ phù hợp với từ khóa "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1.25rem',
                backgroundColor: '#0d7647',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Xem tất cả 15 dịch vụ
            </button>
          </div>
        )}
      </Container>

      {/* 5-Year Warranty Commitment Section */}
      <Warranty5YearSection />

      {/* 41 Services Fine-Grained Pricing Matrix */}
      <Container size="lg">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '4rem auto 2.5rem auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            TRA CỨU BẢNG GIÁ CHI TIẾT
          </span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginTop: '0.4rem' }}>
            Bảng Giá Niêm Yết Toàn Bộ 41 Đầu Việc Kỹ Thuật
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Tra cứu nhanh từng việc kỹ thuật nhỏ từ 99k đến các gói website và quảng cáo hoàn chỉnh.
          </p>
        </div>
      </Container>

      {/* Interactive Catalogue */}
      <PricingMatrixSection />
    </div>
  );
};
