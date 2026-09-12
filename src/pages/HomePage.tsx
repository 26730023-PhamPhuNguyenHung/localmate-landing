import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { ProblemMapperSection } from '../components/sections/ProblemMapperSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PhilosophySection } from '../components/sections/PhilosophySection';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { GrowthFlywheelSection } from '../components/sections/GrowthFlywheelSection';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { TrustSection } from '../components/sections/TrustSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';
import { FAQSection } from '../components/sections/FAQSection';
import { Warranty5YearSection } from '../components/sections/Warranty5YearSection';
import { MarketComparisonSection } from '../components/sections/MarketComparisonSection';
import { FreeAuditSection } from '../components/sections/FreeAuditSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

interface HomePageProps {
  onOpenConsultForm?: (serviceName?: string, businessInput?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultForm }) => {
  return (
    <>
      {/* 0. Dynamic SEO Meta for Homepage */}
      <SEOHead
        title="LocalMate | Người đồng hành số & Đội ngũ triển khai kỹ thuật tại địa phương"
        description="LocalMate đồng hành số cùng doanh nghiệp và hộ kinh doanh: website bán hàng, định vị Google Maps và hỗ trợ kỹ thuật tại địa phương. Báo giá cố định, dựng demo xem thử 0đ, nghiệm thu mới thanh toán."
        canonicalPath="/"
      />

      {/* 1. HERO — Giúp doanh nghiệp nhỏ có website, lên Google và tìm thêm khách */}
      <HeroSection onOpenDemoForm={(storeInput) => onOpenConsultForm && onOpenConsultForm('Tư vấn giải pháp LocalMate', storeInput)} />

      {/* 2. TRUST STRIP — 4 Cam kết cốt lõi tối giản, không card */}
      <TrustBar />

      {/* 3. DỊCH VỤ THEO NHU CẦU — Service Discovery Editorial Split 35/65 */}
      <ProblemMapperSection onSelectTask={(serviceName) => onOpenConsultForm && onOpenConsultForm(serviceName)} />

      {/* 4. CÁCH LOCALMATE LÀM VIỆC — Quy trình 4 bước kể chuyện minh bạch */}
      <ProcessSection />

      {/* 5. VISUAL BREAK — Không cần mua thêm phần mềm đắt đỏ, tận dụng thứ đã có */}
      <PhilosophySection />

      {/* 5.5. ĐỐI CHIẾU THỰC TẾ & MINH CHỨNG — Cách làm cũ vs Giải pháp LocalMate */}
      <BeforeAfterSection onOpenConsultForm={onOpenConsultForm} />

      {/* 5.8. BÁNH ĐÀ TĂNG TRƯỞNG DOANH THU ĐỊA PHƯƠNG — 4 Giai đoạn tự động sinh khách */}
      <GrowthFlywheelSection onOpenConsultForm={onOpenConsultForm} />

      {/* 5.9. SO SÁNH MINH BẠCH THỊ TRƯỜNG — Agency lớn (FastMarketing...) vs LocalMate */}
      <MarketComparisonSection onOpenConsultForm={onOpenConsultForm} />

      {/* 6. BẢNG GIÁ NIÊM YẾT — Asymmetric 3-Package Layout + Drawer tra cứu 41 dịch vụ */}
      <PricingMatrixSection onOpenLeadForm={(srvName) => onOpenConsultForm && onOpenConsultForm(srvName || 'Tư vấn Bảng giá dịch vụ')} />

      {/* 7. XEM TRƯỚC BÀN GIAO — Demo Showcase kiểm chứng thực tế */}
      <DemoShowcaseSection />

      {/* 7.5. CHÍNH SÁCH BẢO HÀNH KỸ THUẬT 5 NĂM & ĐỒNG HÀNH ĐỊA PHƯƠNG */}
      <Warranty5YearSection onOpenConsultForm={onOpenConsultForm} />

      {/* 8.5. CHẨN ĐOÁN MIỄN PHÍ — Instant Business & Website Audit Hook (3 tiêu chí sống còn) */}
      <FreeAuditSection onOpenDemoForm={(storeInput) => onOpenConsultForm && onOpenConsultForm('Chẩn đoán sức khỏe website & Demo 0đ', storeInput)} />

      {/* 9. CẨM NANG & FAQ — Bố cục Tạp chí Editorial & Accordion tối giản */}
      <KnowledgeHubSection />
      <FAQSection onOpenDemoForm={() => onOpenConsultForm && onOpenConsultForm('Hỗ trợ trực tiếp 1-1')} />

      {/* 10. FINAL CTA — Nền Dark Slate Navy & Form tinh gọn 3 trường */}
      <FinalCTASection />
    </>
  );
};

export default HomePage;
