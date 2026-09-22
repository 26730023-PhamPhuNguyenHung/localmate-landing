import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './components/layout/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileFloatingCTA } from './components/layout/MobileFloatingCTA';
import { initAttribution, trackPageView } from './analytics/tracker';

// Lazy load LeadModal on demand
const LeadModal = React.lazy(() => import('./components/conversion/LeadModal').then(m => ({ default: m.LeadModal })));

// Core Public Page (Eager for instant LCP)
import { HomePage } from './pages/HomeReferencePage';

// Secondary Public Pages (Lazy Loaded to protect homepage bundle size)
const MamNonPage = React.lazy(() => import('./pages/mam-non/MamNonPage').then(m => ({ default: m.MamNonPage })));
const GeoLandingPage = React.lazy(() => import('./pages/GeoLandingPage').then(m => ({ default: m.GeoLandingPage })));
const LegalPage = React.lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const ArticlesIndexPage = React.lazy(() => import('./pages/ArticlesIndexPage').then(m => ({ default: m.ArticlesIndexPage })));
const ArticleDetailPage = React.lazy(() => import('./pages/ArticleDetailPage').then(m => ({ default: m.ArticleDetailPage })));

// Admin CMS & Draft Preview Pages (Lazy Loaded)
const DashboardPage = React.lazy(() => import('./admin/pages/DashboardPage').then(m => ({ default: m.DashboardPage })));
const PostsListPage = React.lazy(() => import('./admin/pages/PostsListPage').then(m => ({ default: m.PostsListPage })));
const PostEditorPage = React.lazy(() => import('./admin/editor/PostEditorPage').then(m => ({ default: m.PostEditorPage })));
const CategoriesPage = React.lazy(() => import('./admin/pages/CategoriesPage').then(m => ({ default: m.CategoriesPage })));
const TagsPage = React.lazy(() => import('./admin/pages/TagsPage').then(m => ({ default: m.TagsPage })));
const MediaLibraryPage = React.lazy(() => import('./admin/pages/MediaLibraryPage').then(m => ({ default: m.MediaLibraryPage })));
const RedirectsPage = React.lazy(() => import('./admin/pages/RedirectsPage').then(m => ({ default: m.RedirectsPage })));
const SettingsPage = React.lazy(() => import('./admin/pages/SettingsPage').then(m => ({ default: m.SettingsPage })));
const BackupPage = React.lazy(() => import('./admin/pages/BackupPage').then(m => ({ default: m.BackupPage })));
const SeoGeoAuditPage = React.lazy(() => import('./admin/pages/SeoGeoAuditPage').then(m => ({ default: m.SeoGeoAuditPage })));
const CtasPage = React.lazy(() => import('./admin/pages/CtasPage').then(m => ({ default: m.CtasPage })));
const PostPreviewPage = React.lazy(() => import('./pages/PostPreviewPage').then(m => ({ default: m.PostPreviewPage })));

const MainContent: React.FC = () => {
  const { currentPath } = useRouter();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Tư vấn giải pháp Website & Marketing');
  const [leadBusinessInput, setLeadBusinessInput] = useState('');

  // Initialize attribution and track page view on path change
  useEffect(() => {
    initAttribution();
    trackPageView(currentPath);

    // Smooth scroll for anchor routes
    if (currentPath === '/cach-lam-viec' || currentPath.startsWith('/cach-lam-viec') || currentPath === '/quy-trinh') {
      setTimeout(() => {
        const el = document.getElementById('process') || document.getElementById('cach-lam-viec');
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

    // 1. Root Homepage & Quy trình anchor aliases
    if (normalizedPath === '/' || normalizedPath === '/cach-lam-viec' || normalizedPath === '/quy-trinh') {
      return <HomePage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 2. Mam Non Preschool Vertical Landing Page (/mam-non)
    if (normalizedPath === '/mam-non' || normalizedPath === '/mam-non/') {
      return <MamNonPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 3. High-Converting Landing Page for GEO / AI Visibility (/geo)
    if (
      normalizedPath === '/geo' ||
      normalizedPath === '/geo-ads' ||
      normalizedPath === '/landing-geo'
    ) {
      return <GeoLandingPage onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 3. Knowledge Base & Articles (/kien-thuc and /kien-thuc/:slug)
    if (normalizedPath === '/kien-thuc' || normalizedPath === '/blog' || normalizedPath === '/bai-viet') {
      return <ArticlesIndexPage onOpenConsultForm={handleOpenLeadForm} />;
    }
    if (normalizedPath.startsWith('/kien-thuc/')) {
      const slug = normalizedPath.replace('/kien-thuc/', '').split('/')[0];
      return <ArticleDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 3. Legal & Compliance Policies
    if (normalizedPath === '/chinh-sach-bao-mat') {
      return <LegalPage policyKey="chinh-sach-bao-mat" />;
    }
    if (normalizedPath === '/dieu-khoan') {
      return <LegalPage policyKey="dieu-khoan" />;
    }
    if (normalizedPath === '/chinh-sach-dich-vu') {
      return <LegalPage policyKey="chinh-sach-dich-vu" />;
    }

    // 4. Draft Preview Route for CMS Posts
    if (normalizedPath.startsWith('/preview/post/')) {
      const postIdStr = normalizedPath.replace('/preview/post/', '').split('/')[0];
      const postId = parseInt(postIdStr, 10);
      return <PostPreviewPage postId={postId} />;
    }

    // 5. LocalMate WordPress-like CMS Routes
    if (normalizedPath === '/admin' || normalizedPath === '/admin/dashboard') {
      return <DashboardPage />;
    }
    if (normalizedPath === '/admin/posts/new') {
      return <PostEditorPage />;
    }
    if (normalizedPath.startsWith('/admin/posts/') && normalizedPath.endsWith('/edit')) {
      const parts = normalizedPath.split('/');
      const postId = parseInt(parts[3], 10);
      return <PostEditorPage postId={isNaN(postId) ? undefined : postId} />;
    }
    if (normalizedPath === '/admin/posts' || normalizedPath.startsWith('/admin/posts')) {
      return <PostsListPage />;
    }
    if (normalizedPath.startsWith('/admin/categories')) {
      return <CategoriesPage />;
    }
    if (normalizedPath.startsWith('/admin/tags')) {
      return <TagsPage />;
    }
    if (normalizedPath.startsWith('/admin/media')) {
      return <MediaLibraryPage />;
    }
    if (normalizedPath.startsWith('/admin/audit')) {
      return <SeoGeoAuditPage />;
    }
    if (normalizedPath.startsWith('/admin/ctas')) {
      return <CtasPage />;
    }
    if (normalizedPath.startsWith('/admin/redirects')) {
      return <RedirectsPage />;
    }
    if (normalizedPath.startsWith('/admin/settings')) {
      return <SettingsPage />;
    }
    if (normalizedPath.startsWith('/admin/backup')) {
      return <BackupPage />;
    }

    // Fallback: 404 Not Found (Eliminates soft-404 penalty)
    return <NotFoundPage />;
  };

  const normalizedPath = currentPath.replace(/\/$/, '') || '/';
  const isGeoLandingView =
    normalizedPath === '/geo' ||
    normalizedPath === '/geo-ads' ||
    normalizedPath === '/landing-geo';

  const isAdminView = normalizedPath.startsWith('/admin');
  const isPreviewView = normalizedPath.startsWith('/preview');

  const isReferenceHome = ['/', '/cach-lam-viec', '/quy-trinh'].includes(normalizedPath);
  const hideDefaultLayout = isReferenceHome || isGeoLandingView || isAdminView || isPreviewView;

  return (
    <div className="localmate-app">
      {!hideDefaultLayout && (
        <Header onOpenDemoForm={(service) => handleOpenLeadForm(service || 'Tư vấn Web Demo 0đ')} />
      )}
      <main id="main-content">
        <React.Suspense
          fallback={
            <div style={{ padding: '4rem', textAlign: 'center', color: '#64748b', fontSize: '0.95rem' }}>
              Đang tải giao diện...
            </div>
          }
        >
          {renderPage()}
        </React.Suspense>
      </main>
      {!hideDefaultLayout && <Footer />}

      {/* Mobile Floating Sticky CTA */}
      {!hideDefaultLayout && (
        <MobileFloatingCTA onOpenConsultForm={() => handleOpenLeadForm('Tư vấn Web Demo 0đ')} />
      )}

      {/* Global Lead Form Modal (Lazy loaded on demand) */}
      {isLeadModalOpen && (
        <React.Suspense fallback={null}>
          <LeadModal
            isOpen={isLeadModalOpen}
            onClose={() => setIsLeadModalOpen(false)}
            defaultServiceName={selectedServiceName}
            initialBusinessInput={leadBusinessInput}
          />
        </React.Suspense>
      )}
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
