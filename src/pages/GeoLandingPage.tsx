import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { GeoHeroSection } from '../components/geo/landing/GeoHeroSection';
import { GeoPricingSection } from '../components/geo/landing/GeoPricingSection';
import { GeoValueSection } from '../components/geo/landing/GeoValueSection';

interface GeoLandingPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GeoLandingPage: React.FC<GeoLandingPageProps> = () => {
  const [selectedPackage, setSelectedPackage] = useState('Gói GEO Setup 2.490.000đ');

  const handleScrollToPricing = () => {
    const el = document.getElementById('bang-gia-geo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPackage(planName);
    // Scroll smoothly to the audit form
    const el = document.getElementById('hero-audit-form') || document.getElementById('bottom-audit-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  return (
    <div className="geo-landing-container">
      <SEOHead
        title="Tối Ưu AI Search (GEO) - Xuất Hiện Khi Khách Hỏi ChatGPT"
        description="SEO ChatGPT, GEO, AI Search Optimization: Giúp website doanh nghiệp được ChatGPT, Gemini, Perplexity và Google AI tìm thấy và chủ động đề xuất khi khách hỏi dịch vụ."
        canonicalPath="/geo"
      />

      {/* SECTION 1 — HERO (Khít viewport desktop, 2 cột cân xứng) */}
      <GeoHeroSection onScrollToPricing={handleScrollToPricing} />

      {/* SECTION 2 — BẢNG GIÁ (Khít viewport desktop, 2 gói rõ ràng) */}
      <GeoPricingSection onSelectPlan={handleSelectPlan} />

      {/* SECTION 3 — VALUE & PROOF (Khít viewport desktop, 4 câu hỏi AI + form chốt cuối) */}
      <GeoValueSection selectedPackage={selectedPackage} />

      <style>{`
        .geo-landing-container {
          background-color: #ffffff;
          color: #1e293b;
          font-family: inherit;
          scrollbar-gutter: stable;
          overflow-x: hidden;
          width: 100%;
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};
