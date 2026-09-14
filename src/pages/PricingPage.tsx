import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { InteractiveCostEstimator } from '../components/pricing/InteractiveCostEstimator';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { FullServicesCatalogSection } from '../components/sections/FullServicesCatalogSection';
import { DigitalCareSection } from '../components/sections/DigitalCareSection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { Sparkles } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

interface PricingPageProps {
  onOpenConsultForm?: (serviceName?: string, note?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Bảng Giá Dịch Vụ & Catalog 41+ Micro-Services Marketing | LocalMate"
        description="Bảng giá công khai toàn diện của LocalMate: Tra cứu 41+ micro-services theo 5 trụ cột (Website, Google Maps, Google Ads, Chăm sóc số, Tự động hóa) từ 99k, không chi phí ẩn, nghiệm thu hài lòng mới thanh toán."
        canonicalPath="/bang-gia"
        breadcrumbs={[
          { name: 'Bảng giá', url: '/bang-gia' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Bảng giá & Catalog dịch vụ', url: '/bang-gia' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 2.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#e6f7ef',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              marginBottom: '1rem',
              border: '1px solid #bbf7d0'
            }}
          >
            <Sparkles size={15} color="#0d7647" /> BẢNG GIÁ NIÊM YẾT &amp; CATALOG TOÀN DIỆN
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#0f172a', fontWeight: 900, lineHeight: 1.25 }}>
            Bảng Giá Toàn Diện &amp; Danh Mục Micro-Services
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: '#475569' }}>
            Báo giá trước minh bạch từng đầu việc từ 99k. Không chi phí ẩn. Khách hàng kiểm tra nghiệm thu hài lòng trên điện thoại rồi mới thanh toán.
          </p>
        </div>
      </Container>

      {/* 3 Core Packages & WebFX Deliverables Comparison Matrix */}
      <PricingMatrixSection onOpenLeadForm={onOpenConsultForm} />

      {/* Comprehensive 41+ Micro-Services Catalog Grouped by 5 Solution Pillars */}
      <FullServicesCatalogSection onOpenConsultForm={onOpenConsultForm} />

      {/* Interactive Cost & ROI Estimator Widget */}
      <InteractiveCostEstimator onOpenConsultForm={onOpenConsultForm} />

      {/* Service #40 LocalMate Digital Care Modular Tiers */}
      <DigitalCareSection />

      {/* Original Starter & Content Package Summaries */}
      <StarterPackageSection />
      <ContentPackageSection />
    </div>
  );
};

