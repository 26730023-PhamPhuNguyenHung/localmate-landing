import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { InteractiveCostEstimator } from '../components/pricing/InteractiveCostEstimator';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
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
        title="Bảng Giá Dịch Vụ & Dự Toán ROI Marketing Cho Doanh Nghiệp Nhỏ | LocalMate"
        description="Bảng tính chi phí và dự toán ROI tự động của LocalMate: Chọn quy mô 1 cơ sở hoặc chuỗi, tính ngay chi phí setup, duy trì hàng tháng và số đơn hòa vốn đầu tư."
        canonicalPath="/bang-gia"
        breadcrumbs={[
          { name: 'Bảng giá', url: '/bang-gia' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Bảng giá', url: '/bang-gia' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-primary)" /> BẢNG GIÁ CÔNG KHAI &amp; DỰ TOÁN ROI
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ &amp; Công Cụ Dự Toán ROI
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Không chi phí ẩn. Báo giá trước rõ ràng từng đầu việc. Khách hàng kiểm tra nghiệm thu hài lòng rồi mới thanh toán.
          </p>
        </div>
      </Container>

      {/* Interactive Cost & ROI Estimator Widget */}
      <InteractiveCostEstimator onOpenConsultForm={onOpenConsultForm} />

      {/* 40 Services Catalogue Section */}
      <PricingMatrixSection />

      {/* Service #40 LocalMate Digital Care Modular Tiers */}
      <DigitalCareSection />

      {/* Original Starter & Content Package Summaries */}
      <StarterPackageSection />
      <ContentPackageSection />
    </div>
  );
};

