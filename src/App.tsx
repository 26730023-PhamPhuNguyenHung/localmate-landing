import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './components/layout/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileFloatingCTA } from './components/layout/MobileFloatingCTA';
import { LeadModal } from './components/conversion/LeadModal';
import { initAttribution, trackPageView } from './analytics/tracker';

// Core Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { HtmlSitemapPage } from './pages/HtmlSitemapPage';
import { AdminPricingPage } from './pages/AdminPricingPage';
import { AdvisorPage } from './pages/AdvisorPage';
import { Landing490kPage } from './pages/Landing490kPage';
import { GeoLandingPage } from './pages/GeoLandingPage';
import { GeoServicePage } from './pages/GeoServicePage';
import { AeoServicePage } from './pages/AeoServicePage';
import { SeoAiServicePage } from './pages/SeoAiServicePage';
import { SeoChatGptServicePage } from './pages/SeoChatGptServicePage';
import { OperationalCareClusterPage } from './pages/OperationalCareClusterPage';
import { LocalSearchClusterPage } from './pages/LocalSearchClusterPage';
import { PresenceSolutionPage } from './pages/solutions/PresenceSolutionPage';
import { SearchSolutionPage } from './pages/solutions/SearchSolutionPage';
import { AcquisitionSolutionPage } from './pages/solutions/AcquisitionSolutionPage';
import { AutomationSolutionPage as AutomationLegacySolutionPage } from './pages/solutions/AutomationSolutionPage';
import { CareSolutionPage } from './pages/CareSolutionPage';
import { WebDesignPillarPage } from './pages/WebDesignPillarPage';
import { GoogleMapsPillarPage } from './pages/GoogleMapsPillarPage';
import { GoogleAdsPillarPage } from './pages/GoogleAdsPillarPage';
import { ContentMarketingPillarPage } from './pages/ContentMarketingPillarPage';
import { AutomationPillarPage } from './pages/AutomationPillarPage';
import { CredentialPage } from './pages/CredentialPage';
import { ProjectBriefPage } from './pages/ProjectBriefPage';
import { CareWorkflowPage } from './pages/CareWorkflowPage';
import { StrategyPhasesPage } from './pages/StrategyPhasesPage';
import { GeoWorkflowPage } from './pages/GeoWorkflowPage';
import { TechnicalAuditStandardsPage } from './pages/TechnicalAuditStandardsPage';

// Modals
import { AdvisorModal } from './components/advisor/AdvisorModal';
import { ConceptModal } from './components/concept/ConceptModal';

const MainContent: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [isConceptModalOpen, setIsConceptModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Tư vấn giải pháp Website & Marketing');
  const [leadBusinessInput, setLeadBusinessInput] = useState('');

  // Initialize attribution and track page view on path change
  useEffect(() => {
    initAttribution();
    trackPageView(currentPath);
    if (currentPath === '/cach-lam-viec' || currentPath.startsWith('/cach-lam-viec') || currentPath === '/quy-trinh') {
      setTimeout(() => {
        const el = document.getElementById('cach-lam-viec');
        if (el) {
          const headerHeight = 84;
          const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentPath]);

  const handleOpenLeadForm = (serviceName?: string, businessInput?: string) => {
    if (serviceName) {
      setSelectedServiceName(serviceName);
    }
    setLeadBusinessInput(businessInput || '');
    setIsLeadModalOpen(true);
  };

  const renderPage = () => {
    const normalizedPath = currentPath.replace(/\/$/, '') || '/';

    // 1. Root Homepage & Cách làm việc
    if (normalizedPath === '/' || normalizedPath === '/cach-lam-viec' || normalizedPath === '/quy-trinh') {
      return <HomePage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 2. Standalone Landing 490k
    if (normalizedPath.startsWith('/landing-490k') || normalizedPath.startsWith('/goi-490k')) {
      return <Landing490kPage />;
    }

    // 2.5 Credential Deck Viewer (Hồ Sơ Năng Lực 40 Slide)
    if (
      normalizedPath === '/ho-so-nang-luc' ||
      normalizedPath === '/credential' ||
      normalizedPath.startsWith('/ho-so-nang-luc') ||
      normalizedPath.startsWith('/credential')
    ) {
      return <CredentialPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 2.6 Interactive Project Brief & Survey Routes (/khao-sat-du-an, /brief, /brief-du-an)
    if (
      normalizedPath === '/khao-sat-du-an' ||
      normalizedPath === '/brief' ||
      normalizedPath === '/brief-du-an' ||
      normalizedPath === '/brief-geo-seo' ||
      normalizedPath.startsWith('/khao-sat-du-an') ||
      normalizedPath.startsWith('/brief')
    ) {
      return <ProjectBriefPage />;
    }
    if (
      normalizedPath === '/chien-luoc-5-giai-doan' ||
      normalizedPath === '/lo-trinh-5-giai-doan' ||
      normalizedPath === '/chien-luoc-seo-5-giai-doan' ||
      normalizedPath === '/lo-trinh-phat-trien-so' ||
      normalizedPath.startsWith('/chien-luoc-5-giai-doan')
    ) {
      return <StrategyPhasesPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/quy-trinh-geo' ||
      normalizedPath === '/quy-trinh-trien-khai-geo' ||
      normalizedPath.startsWith('/quy-trinh-geo')
    ) {
      return <GeoWorkflowPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/tieu-chuan-audit' ||
      normalizedPath === '/tieu-chuan-audit-ky-thuat' ||
      normalizedPath === '/technical-audit-standards' ||
      normalizedPath === '/tieu-chuan-website-2026' ||
      normalizedPath.startsWith('/tieu-chuan-audit')
    ) {
      return <TechnicalAuditStandardsPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/quy-trinh-cham-soc' ||
      normalizedPath === '/quy-trinh-van-hanh-cham-soc' ||
      normalizedPath.startsWith('/quy-trinh-cham-soc')
    ) {
      return <CareWorkflowPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 3. Admin & Advisor
    if (normalizedPath.startsWith('/advisor')) {
      return <AdvisorPage />;
    }
    if (normalizedPath.startsWith('/admin/pricing')) {
      return <AdminPricingPage />;
    }

    // 4. Five Canonical Solution Pillars & Convenient Aliases
    // Pillar 1: Thiết Kế Website Tốc Độ Cao
    if (
      normalizedPath === '/thiet-ke-website' ||
      normalizedPath === '/dich-vu/thiet-ke-website'
    ) {
      return <WebDesignPillarPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/giai-phap/xay-nen-tang-so' ||
      normalizedPath === '/giai-phap/nen-tang-so' ||
      normalizedPath === '/dich-vu/xay-nen-tang-so' ||
      normalizedPath === '/dich-vu/nen-tang-so'
    ) {
      return <PresenceSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Pillar 2: Google Maps & Local SEO
    if (
      normalizedPath === '/google-maps-local-seo' ||
      normalizedPath === '/dich-vu/google-maps-local-seo'
    ) {
      return <GoogleMapsPillarPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/giai-phap/duoc-tim-thay' ||
      normalizedPath === '/dich-vu/duoc-tim-thay'
    ) {
      return <SearchSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Pillar 3: Google Ads & Tìm Kiếm
    if (
      normalizedPath === '/google-ads' ||
      normalizedPath === '/dich-vu/google-ads' ||
      normalizedPath.startsWith('/google-ads')
    ) {
      return <GoogleAdsPillarPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Pillar 4: Content Marketing & Chăm Sóc Số
    if (
      normalizedPath === '/content-marketing' ||
      normalizedPath === '/dich-vu/content-marketing' ||
      normalizedPath === '/cham-soc-noi-dung' ||
      normalizedPath.startsWith('/content-marketing')
    ) {
      return <ContentMarketingPillarPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Pillar 5: Phần Mềm & Tự Động Hóa
    if (
      normalizedPath === '/automation' ||
      normalizedPath === '/dich-vu/automation' ||
      normalizedPath === '/tu-dong-hoa' ||
      normalizedPath === '/phan-mem-tu-dong-hoa' ||
      normalizedPath.startsWith('/automation')
    ) {
      return <AutomationPillarPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Legacy / Convenient Aliases for Solutions
    if (
      normalizedPath === '/giai-phap/thu-hut-khach-hang' ||
      normalizedPath === '/dich-vu/thu-hut-khach-hang'
    ) {
      return <AcquisitionSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/giai-phap/dong-hanh-cham-soc' ||
      normalizedPath === '/giai-phap/dong-hanh-duy-tri' ||
      normalizedPath === '/dich-vu/dong-hanh-cham-soc' ||
      normalizedPath === '/dich-vu/dong-hanh-duy-tri'
    ) {
      return <CareSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/giai-phap/van-hanh-tu-dong-hoa' ||
      normalizedPath === '/dich-vu/van-hanh-tu-dong-hoa'
    ) {
      return <AutomationLegacySolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Quy Trình Vận Hành & Chăm Sóc Số Định Kỳ
    if (
      normalizedPath === '/quy-trinh-cham-soc' ||
      normalizedPath === '/quy-trinh-cham-soc-website' ||
      normalizedPath === '/quy-trinh-van-hanh' ||
      normalizedPath === '/cham-soc-website'
    ) {
      return <CareWorkflowPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // Solution Hub & Legacy Services Hub: /giai-phap and /dich-vu
    if (normalizedPath === '/giai-phap' || normalizedPath === '/dich-vu') {
      return <ServicesPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 5. Deep Service Clusters & Specialized Routes
    if (
      normalizedPath === '/dich-vu/local-search' ||
      normalizedPath === '/dich-vu/google-maps-seo' ||
      normalizedPath === '/dich-vu/seo-maps' ||
      normalizedPath === '/local-search' ||
      normalizedPath.startsWith('/dich-vu/local-search') ||
      normalizedPath.startsWith('/dich-vu/google-maps-seo') ||
      normalizedPath.startsWith('/dich-vu/seo-maps')
    ) {
      return <LocalSearchClusterPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/dich-vu/chay-khach-cham-soc' ||
      normalizedPath === '/dich-vu/chay-khach-van-hanh' ||
      normalizedPath === '/chay-khach-van-hanh' ||
      normalizedPath === '/chay-khach-cham-soc' ||
      normalizedPath.startsWith('/dich-vu/chay-khach')
    ) {
      return <OperationalCareClusterPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    // Dedicated Mobile Ads High-Converting Landing Page for /geo
    if (
      normalizedPath === '/geo' ||
      normalizedPath === '/geo-ads' ||
      normalizedPath === '/landing-geo'
    ) {
      return <GeoLandingPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    if (
      normalizedPath === '/dich-vu/geo' ||
      normalizedPath === '/dich-vu-geo' ||
      normalizedPath.startsWith('/dich-vu/toi-uu-ai-geo') ||
      normalizedPath.startsWith('/dich-vu/geo') ||
      normalizedPath.startsWith('/dich-vu-geo')
    ) {
      return <GeoServicePage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/dich-vu/aeo' ||
      normalizedPath === '/dich-vu-aeo' ||
      normalizedPath === '/aeo' ||
      normalizedPath.startsWith('/dich-vu/toi-uu-aeo') ||
      normalizedPath.startsWith('/dich-vu/aeo')
    ) {
      return <AeoServicePage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/dich-vu/seo-ai' ||
      normalizedPath === '/dich-vu-seo-ai' ||
      normalizedPath === '/seo-ai' ||
      normalizedPath.startsWith('/dich-vu/google-ai-overviews') ||
      normalizedPath.startsWith('/dich-vu/seo-ai')
    ) {
      return <SeoAiServicePage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (
      normalizedPath === '/dich-vu/seo-chatgpt' ||
      normalizedPath === '/dich-vu-seo-chatgpt' ||
      normalizedPath === '/seo-chatgpt' ||
      normalizedPath.startsWith('/dich-vu/chatgpt-seo') ||
      normalizedPath.startsWith('/dich-vu/seo-chatgpt')
    ) {
      return <SeoChatGptServicePage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath.startsWith('/dich-vu/')) {
      const slug = normalizedPath.replace('/dich-vu/', '');
      if (slug === 'local-search' || slug === 'google-maps-seo' || slug === 'seo-maps') {
        return <LocalSearchClusterPage onOpenConsultForm={handleOpenLeadForm} />;
      }
      if (slug === 'geo' || slug === 'toi-uu-ai-geo' || slug === 'toi-uu-de-xuat-ai') {
        return <GeoServicePage onOpenConsultForm={handleOpenLeadForm} />;
      }
      if (slug === 'aeo' || slug === 'toi-uu-aeo' || slug === 'dich-vu-aeo') {
        return <AeoServicePage onOpenConsultForm={handleOpenLeadForm} />;
      }
      if (slug === 'seo-ai' || slug === 'google-ai-overviews' || slug === 'seo-google-ai') {
        return <SeoAiServicePage onOpenConsultForm={handleOpenLeadForm} />;
      }
      if (slug === 'seo-chatgpt' || slug === 'chatgpt-seo' || slug === 'seo-ai-chatgpt') {
        return <SeoChatGptServicePage onOpenConsultForm={handleOpenLeadForm} />;
      }
      return <ServiceDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 6. Knowledge Hub Hierarchy
    if (normalizedPath === '/kien-thuc') {
      return <KnowledgePage />;
    }
    if (normalizedPath.startsWith('/kien-thuc/')) {
      const slug = normalizedPath.replace('/kien-thuc/', '');
      return <ArticleDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 7. Case Studies / Projects Hierarchy
    if (normalizedPath === '/du-an') {
      return <ProjectsPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath.startsWith('/du-an/')) {
      const slug = normalizedPath.replace('/du-an/', '');
      return <CaseStudyDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 8. Pricing
    if (normalizedPath.startsWith('/bang-gia')) {
      return <PricingPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 9. Industry & Pillar Solutions
    if (normalizedPath === '/giai-phap') {
      return <ServicesPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath === '/giai-phap/nen-tang-so' || normalizedPath === '/giai-phap/hien-dien-so') {
      return <PresenceSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath === '/giai-phap/duoc-tim-thay' || normalizedPath === '/giai-phap/tim-kiem-cuc-bo-ai') {
      return <SearchSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath === '/giai-phap/thu-hut-khach-hang') {
      return <AcquisitionSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath === '/giai-phap/van-hanh-tu-dong-hoa' || normalizedPath === '/giai-phap/tu-dong-hoa-van-hanh') {
      return <AutomationLegacySolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath === '/giai-phap/dong-hanh-duy-tri' || normalizedPath === '/giai-phap/dong-hanh-bao-tri') {
      return <CareSolutionPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath.startsWith('/giai-phap')) {
      return <SolutionsPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 9. About & Contact
    if (currentPath.startsWith('/gioi-thieu') || currentPath.startsWith('/ve-localmate')) {
      return <AboutPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (currentPath.startsWith('/lien-he')) {
      return <ContactPage />;
    }

    // 10. Legal & Compliance Policies
    if (currentPath.startsWith('/chinh-sach-bao-mat')) {
      return <LegalPage policyKey="chinh-sach-bao-mat" />;
    }
    if (currentPath.startsWith('/dieu-khoan')) {
      return <LegalPage policyKey="dieu-khoan" />;
    }
    if (currentPath.startsWith('/chinh-sach-dich-vu')) {
      return <LegalPage policyKey="chinh-sach-dich-vu" />;
    }

    // 11. HTML Sitemap
    if (currentPath.startsWith('/sitemap')) {
      return <HtmlSitemapPage />;
    }

    // Fallback to HomePage
    return <HomePage onOpenConsultForm={handleOpenLeadForm} />;
  };

  const normalizedPath = currentPath.replace(/\/$/, '') || '/';
  const isCredentialView =
    normalizedPath === '/ho-so-nang-luc' ||
    normalizedPath === '/credential' ||
    normalizedPath.startsWith('/ho-so-nang-luc') ||
    normalizedPath.startsWith('/credential');

  const isGeoLandingView =
    normalizedPath === '/geo' ||
    normalizedPath === '/geo-ads' ||
    normalizedPath === '/landing-geo' ||
    normalizedPath.startsWith('/geo');

  return (
    <div className="localmate-app">
      {!isCredentialView && !isGeoLandingView && (
        <Header onOpenDemoForm={() => handleOpenLeadForm('Tư vấn Web Demo 0đ')} />
      )}
      <main id="main-content">{renderPage()}</main>
      {!isCredentialView && !isGeoLandingView && <Footer />}

      {/* Mobile Floating Sticky CTA */}
      {!isCredentialView && !isGeoLandingView && (
        <MobileFloatingCTA onOpenConsultForm={() => handleOpenLeadForm('Tư vấn Web Demo 0đ')} />
      )}

      {/* Global Modals */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultServiceName={selectedServiceName}
        initialBusinessInput={leadBusinessInput}
      />
      <AdvisorModal isOpen={isAdvisorModalOpen} onClose={() => setIsAdvisorModalOpen(false)} />
      <ConceptModal isOpen={isConceptModalOpen} onClose={() => setIsConceptModalOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <MainContent />
    </RouterProvider>
  );
};

export default App;
