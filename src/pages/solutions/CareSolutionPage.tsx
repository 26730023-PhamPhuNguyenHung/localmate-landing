import React from 'react';
import { getSolutionBySlug } from '../../data/solutionsData';
import { SolutionPageTemplate } from '../../components/solutions/SolutionPageTemplate';
import { SEOHead } from '../../components/seo/SEOHead';
import { Container } from '../../components/ui/Container';

interface CareSolutionPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const CareSolutionPage: React.FC<CareSolutionPageProps> = ({ onOpenConsultForm }) => {
  const solution = getSolutionBySlug('dong-hanh-cham-soc');

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
        title="Giải Pháp Chăm Sóc & Đồng Hành Kỹ Thuật Bảo Trì 5 Năm | LocalMate"
        description="Đội ngũ kỹ thuật viên phụ trách 1-1 qua Zalo, xử lý yêu cầu nhanh 15-30 phút, sao lưu dữ liệu, bảo mật Cloudflare, bảo hành hạ tầng kỹ thuật lên đến 5 năm."
        canonicalPath="/giai-phap/dong-hanh-cham-soc"
      />
      <SolutionPageTemplate solution={solution} onOpenConsultForm={onOpenConsultForm} />
    </>
  );
};

export default CareSolutionPage;
