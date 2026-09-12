import React from 'react';
import { getSolutionBySlug } from '../../data/solutionsData';
import { SolutionPageTemplate } from '../../components/solutions/SolutionPageTemplate';
import { SEOHead } from '../../components/seo/SEOHead';
import { Container } from '../../components/ui/Container';

interface AcquisitionSolutionPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const AcquisitionSolutionPage: React.FC<AcquisitionSolutionPageProps> = ({ onOpenConsultForm }) => {
  const solution = getSolutionBySlug('thu-hut-khach-hang');

  if (!solution) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#fbfcfb' }}>
        <Container size="md">
          <h2 style={{ color: 'var(--color-navy)', marginBottom: '1rem' }}>Không tìm thấy thông tin giải pháp</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Vui lòng quay lại trang danh mục giải pháp.</p>
        </Container>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Giải Pháp Thu Hút Khách Hàng & Quảng Cáo Chuyển Đổi Thực | LocalMate"
        description="Chiến dịch quảng cáo Google Ads & Meta Ads 0% kê giá, landing page chuyển đổi cao, lọc sạch click tặc, đo lường từng cuộc gọi và tin nhắn Zalo của khách."
        canonicalPath="/giai-phap/thu-hut-khach-hang"
      />
      <SolutionPageTemplate solution={solution} onOpenConsultForm={onOpenConsultForm} />
    </>
  );
};

export default AcquisitionSolutionPage;
