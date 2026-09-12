import React from 'react';
import { getSolutionBySlug } from '../../data/solutionsData';
import { SolutionPageTemplate } from '../../components/solutions/SolutionPageTemplate';
import { SEOHead } from '../../components/seo/SEOHead';
import { Container } from '../../components/ui/Container';

interface SearchSolutionPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SearchSolutionPage: React.FC<SearchSolutionPageProps> = ({ onOpenConsultForm }) => {
  const solution = getSolutionBySlug('duoc-tim-thay');

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
        title="Giải Pháp Được Khách Hàng Tìm Thấy Trên Google & AI Search | LocalMate"
        description="Giải pháp đưa vị trí cửa hàng lên Google Maps Top 3, SEO từ khóa địa phương và tối ưu đề xuất AI Search (ChatGPT, Gemini, GEO/AEO), thu hút khách quanh tiệm."
        canonicalPath="/giai-phap/duoc-tim-thay"
      />
      <SolutionPageTemplate solution={solution} onOpenConsultForm={onOpenConsultForm} />
    </>
  );
};

export default SearchSolutionPage;
