import React from 'react';
import { getSolutionBySlug } from '../../data/solutionsData';
import { SolutionPageTemplate } from '../../components/solutions/SolutionPageTemplate';
import { SEOHead } from '../../components/seo/SEOHead';
import { Container } from '../../components/ui/Container';

interface AutomationSolutionPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const AutomationSolutionPage: React.FC<AutomationSolutionPageProps> = ({ onOpenConsultForm }) => {
  const solution = getSolutionBySlug('van-hanh-tu-dong-hoa');

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
        title="Giải Pháp Quản Lý & Tự Động Hóa Vận Hành Doanh Nghiệp | LocalMate"
        description="Hệ thống tự động hóa đồng bộ liên hệ khách về Google Sheets CRM, gửi thông báo tức thì qua Telegram/Zalo, nhắc lịch hẹn tự động, giảm 80% công việc thủ công."
        canonicalPath="/giai-phap/van-hanh-tu-dong-hoa"
      />
      <SolutionPageTemplate solution={solution} onOpenConsultForm={onOpenConsultForm} />
    </>
  );
};

export default AutomationSolutionPage;
