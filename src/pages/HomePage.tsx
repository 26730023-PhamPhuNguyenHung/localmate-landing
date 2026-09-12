import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { ProblemMapperSection } from '../components/sections/ProblemMapperSection';
import { ServiceCardsSection } from '../components/sections/ServiceCardsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PhilosophySection } from '../components/sections/PhilosophySection';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { TrustSection } from '../components/sections/TrustSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

interface HomePageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultForm }) => {
  return (
    <>
      {/* 0. Dynamic SEO Meta for Homepage (Optimized for Customer Search Intent) */}
      <SEOHead
        title="LocalMate | Người đồng hành số & Đội ngũ triển khai kỹ thuật tại địa phương"
        description="LocalMate đồng hành số cùng doanh nghiệp, agency và đối tác SaaS: website 24h, tự động hóa quy trình, gom lead CRM và triển khai kỹ thuật tại địa phương. Báo giá minh bạch, nghiệm thu mới thanh toán."
        canonicalPath="/"
      />

      {/* 1. HERO (HeroSection) — Bạn tập trung bán hàng. LocalMate lo phần công nghệ. */}
      <HeroSection onOpenDemoForm={() => onOpenConsultForm && onOpenConsultForm('Tư vấn giải pháp LocalMate')} />

      {/* 2. TRUST BAR (TrustBar 4 điểm nhẹ) — Minh bạch, thực tế, làm chủ tài khoản */}
      <TrustBar />

      {/* 3. “BẠN ĐANG CẦN VIỆC GÌ?” (ProblemMapperSection) — Chọn theo nhu cầu thực tế */}
      <ProblemMapperSection onSelectTask={(serviceName) => onOpenConsultForm && onOpenConsultForm(serviceName)} />

      {/* 4. 4 DỊCH VỤ CHÍNH (ServiceCardsSection) — 4 Dịch vụ trọng điểm cho SME & Doanh nghiệp */}
      <ServiceCardsSection onOpenLeadForm={(serviceName) => onOpenConsultForm && onOpenConsultForm(serviceName)} />

      {/* 5. CÁCH LOCALMATE LÀM VIỆC (ProcessSection & PhilosophySection) — Quy trình 5 bước & Triết lý vận hành */}
      <ProcessSection />
      <PhilosophySection />

      {/* 6. "XEM TRƯỚC THỨ BẠN SẼ NHẬN" (DemoShowcaseSection) — Build & Test công khai */}
      <DemoShowcaseSection />

      {/* 7. BẢNG GIÁ DỊCH VỤ (PricingMatrixSection) — Toàn bộ dịch vụ niêm yết công khai */}
      <PricingMatrixSection onOpenLeadForm={(srvName) => onOpenConsultForm && onOpenConsultForm(srvName || 'Tư vấn Bảng giá dịch vụ')} />

      {/* 8. PHÁP NHÂN & CAM KẾT MINH BẠCH (TrustSection) — CÔNG TY TNHH LOCALMATE */}
      <TrustSection />

      {/* 9. KIẾN THỨC & FAQ (KnowledgeHubSection & FAQSection) — Hướng dẫn thực tế & Giải đáp thắc mắc */}
      <KnowledgeHubSection />
      <FAQSection onOpenDemoForm={() => onOpenConsultForm && onOpenConsultForm('Hỗ trợ trực tiếp 1-1')} />

      {/* 10. CTA CUỐI TRANG (FinalCTASection) — Gửi yêu cầu triển khai kỹ thuật */}
      <FinalCTASection />

      {/* 11. FOOTER (Footer được render từ App.tsx bao bọc toàn bộ trang) */}
    </>
  );
};

export default HomePage;
