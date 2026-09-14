import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { CorePillarsSection } from '../components/sections/CorePillarsSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { TrustSection } from '../components/sections/TrustSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

interface HomePageProps {
  onOpenConsultForm?: (serviceName?: string, businessInput?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultForm }) => {
  return (
    <>
      {/* 0. Dynamic SEO Meta for Homepage Entity Hub */}
      <SEOHead
        title="LocalMate — Xây Hiện Diện Số Cho Hộ Kinh Doanh & Doanh Nghiệp Nhỏ"
        description="LocalMate giúp hộ kinh doanh và doanh nghiệp nhỏ xây hiện diện số: website, Google Maps, quảng cáo và hệ thống nhận khách — triển khai nhanh, báo giá trước và bàn giao tài khoản cho khách."
        canonicalPath="/"
      />

      {/* 1. Hero định vị thương hiệu + Instant Audit Hook */}
      <HeroSection
        onOpenDemoForm={(storeInput) =>
          onOpenConsultForm && onOpenConsultForm('Tư vấn giải pháp hiện diện số LocalMate', storeInput)
        }
      />

      {/* 2. 4 Cam kết vàng: Bàn giao mới thanh toán, 100% chính chủ, Báo giá trước không phí ẩn, Đồng hành 5 năm */}
      <TrustBar />

      {/* 3. 5 Nhóm Dịch Vụ Cốt Lõi (dẫn link trực tiếp sang 5 Pillar pages: /thiet-ke-website, /google-maps-local-seo, /google-ads, /content-marketing, /automation) và banner lớn dẫn tới /bang-gia */}
      <CorePillarsSection
        onOpenConsultForm={(serviceName) =>
          onOpenConsultForm && onOpenConsultForm(serviceName)
        }
      />

      {/* 4. 3 Dự án thực tế tiêu biểu (link sang /du-an/xeo-restaurant, nam-phat, huong-sen) */}
      <FeaturedProjectsSection
        onOpenConsultForm={(serviceName) =>
          onOpenConsultForm && onOpenConsultForm(serviceName)
        }
      />

      {/* 5. Thông tin thực thể minh bạch: CÔNG TY TNHH LOCALMATE, MST 4001337934, địa chỉ, hotline & 5 tài sản bàn giao */}
      <TrustSection />

      {/* 6. FAQ & Form đăng ký nhận demo 0đ */}
      <FAQSection
        onOpenDemoForm={() =>
          onOpenConsultForm && onOpenConsultForm('Đăng ký nhận demo website 0đ')
        }
      />
      <FinalCTASection />
    </>
  );
};

export default HomePage;
