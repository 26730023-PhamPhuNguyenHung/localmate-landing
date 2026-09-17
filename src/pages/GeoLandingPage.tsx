import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { GeoHeader } from '../components/geo/landing/GeoShared';
import { GeoHeroSection } from '../components/geo/landing/GeoHeroSection';
import { GeoPricingSection } from '../components/geo/landing/GeoPricingSection';
import { GeoValueSection } from '../components/geo/landing/GeoValueSection';
import { GeoFinalSection } from '../components/geo/landing/GeoFinalSection';
import '../styles/geo-landing.css';
export const GeoLandingPage: React.FC<{ onOpenConsultForm?: (name?: string) => void }> = () => {
 const [selectedPackage, setSelectedPackage] = useState('AI Visibility Audit miễn phí');
 const selectPlan = (name: string) => {
  setSelectedPackage(name);
  document.querySelector<HTMLInputElement>('#bottom-audit-form-website')?.focus({ preventScroll: true });
  document.getElementById('bottom-audit-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
 };
 return <div className="geo-page">
 <SEOHead title="SEO ChatGPT & GEO — Để AI nhắc đến doanh nghiệp của bạn | Localmate" description="Tối ưu hiện diện thương hiệu trên ChatGPT, Gemini, Perplexity và Google AI. Nhận AI Visibility Audit miễn phí cùng Localmate." canonicalPath="/geo"/>
 <GeoHeader/><GeoHeroSection/><GeoPricingSection onSelectPlan={selectPlan}/>
 <GeoValueSection onAudit={() => selectPlan('AI Visibility Audit miễn phí')}/>
 <GeoFinalSection selectedPackage={selectedPackage}/>
 </div>;
};
