import React from 'react';
import { getSolutionBySlug } from '../../data/solutionsData';
import { SolutionPageTemplate } from '../../components/solutions/SolutionPageTemplate';
import { SEOHead } from '../../components/seo/SEOHead';
import { Container } from '../../components/ui/Container';

interface PresenceSolutionPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const PresenceSolutionPage: React.FC<PresenceSolutionPageProps> = ({ onOpenConsultForm }) => {
  const solution = getSolutionBySlug('xay-nen-tang-so');

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
        title="Giải Pháp Xây Dựng Nền Tảng Số & Website Bán Hàng Chuẩn Di Động | LocalMate"
        description="LocalMate triển khai giải pháp xây dựng nền tảng số, website bán hàng tải tức thì dưới 1.2s, bảng giá minh bạch, nút gọi Zalo 1 chạm, bàn giao 100% tài khoản chính chủ."
        canonicalPath="/giai-phap/xay-nen-tang-so"
      />
      <SolutionPageTemplate solution={solution} onOpenConsultForm={onOpenConsultForm} />
    </>
  );
};

export default PresenceSolutionPage;
