import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { SolutionPillarsSection } from '../components/sections/SolutionPillarsSection';
import { GrowthFlywheelSection } from '../components/sections/GrowthFlywheelSection';
import { PhilosophySection } from '../components/sections/PhilosophySection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { MarketComparisonSection } from '../components/sections/MarketComparisonSection';
import { Warranty5YearSection } from '../components/sections/Warranty5YearSection';
import { LocalTeamSection } from '../components/sections/LocalTeamSection';
import { FreeAuditSection } from '../components/sections/FreeAuditSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';
import { FAQSection } from '../components/sections/FAQSection';
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
        description="LocalMate đồng hành số cùng doanh nghiệp địa phương: xây dựng nền tảng số, định vị Google Maps, tối ưu AI Search, tự động hóa gom lead và kỹ thuật viên túc trực hỗ trợ 5 năm. Dựng demo 0đ, báo giá cố định, nghiệm thu mới thanh toán."
        canonicalPath="/"
      />

      {/* 1. HERO — Hướng vấn đề + 2. Instant Business Audit Hook (Tích hợp trong Hero) */}
      <HeroSection
        onOpenDemoForm={(storeInput) =>
          onOpenConsultForm && onOpenConsultForm('Tư vấn giải pháp LocalMate', storeInput)
        }
      />

      {/* 2. TRUST STRIP — 4 Cam kết cốt lõi tối giản */}
      <TrustBar />

      {/* 3. SOLUTION PILLARS SECTION — 5 Nhóm Giải Pháp Trọng Tâm kết nối trực tiếp đến /giai-phap/{slug} */}
      <SolutionPillarsSection
        onOpenConsultForm={(serviceName) =>
          onOpenConsultForm && onOpenConsultForm(serviceName)
        }
      />

      {/* 4. LOCAL GROWTH FLYWHEEL — Vòng tròn bánh đà tăng trưởng 4 giai đoạn liên kết trực tiếp giải pháp */}
      <GrowthFlywheelSection onOpenConsultForm={onOpenConsultForm} />

      {/* 5. WHY LOCALMATE — Bốn cam kết trung thực, tôn trọng (Tài khoản của bạn, Báo giá cố định, Nghiệm thu mới trả tiền, Đồng hành 5 năm) */}
      <PhilosophySection />

      {/* 6. DELIVERABLES & MINH CHỨNG THẬT — Quy trình 4 bước minh bạch + Đối chiếu thực tế Trước/Sau + Demo Showcase */}
      <ProcessSection />
      <BeforeAfterSection onOpenConsultForm={onOpenConsultForm} />
      <DemoShowcaseSection />

      {/* 6.5. BẢNG GIÁ NIÊM YẾT & SO SÁNH THỊ TRƯỜNG */}
      <PricingMatrixSection
        onOpenLeadForm={(srvName) =>
          onOpenConsultForm && onOpenConsultForm(srvName || 'Tư vấn Bảng giá dịch vụ')
        }
      />
      <MarketComparisonSection onOpenConsultForm={onOpenConsultForm} />

      {/* 6.8. CHÍNH SÁCH BẢO HÀNH KỸ THUẬT 5 NĂM & ĐỒNG HÀNH ĐỊA PHƯƠNG */}
      <Warranty5YearSection onOpenConsultForm={onOpenConsultForm} />

      {/* 6.9. ĐỘI NGŨ KỸ THUẬT VIÊN THỰC CHIẾN IN-HOUSE & CAM KẾT 3 KHÔNG (TÓM TẮT) */}
      <LocalTeamSection
        isSummary={true}
        onOpenConsultForm={(srvName) =>
          onOpenConsultForm && onOpenConsultForm(srvName || 'Trao đổi cùng Kỹ thuật viên In-house')
        }
      />

      {/* 7. INSTANT BUSINESS AUDIT DỰ PHÒNG */}
      <FreeAuditSection
        onOpenDemoForm={(storeInput) =>
          onOpenConsultForm && onOpenConsultForm('Chẩn đoán sức khỏe website & Demo 0đ', storeInput)
        }
      />

      {/* 8. KNOWLEDGE HUB & FAQ — Bộ câu hỏi thường gặp thực tế */}
      <KnowledgeHubSection />
      <FAQSection
        onOpenDemoForm={() =>
          onOpenConsultForm && onOpenConsultForm('Hỗ trợ trực tiếp 1-1')
        }
      />

      {/* 9. FINAL CTA — Nói cho Localmate biết việc bạn đang cần giải quyết */}
      <FinalCTASection />
    </>
  );
};

export default HomePage;
