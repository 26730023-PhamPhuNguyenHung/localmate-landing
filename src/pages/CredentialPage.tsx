import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { CredentialToolbar } from '../components/credential/CredentialToolbar';
import { CredentialSlideCard } from '../components/credential/CredentialSlideCard';
import { CredentialMenuDrawer } from '../components/credential/CredentialMenuDrawer';
import { 
  CREDENTIAL_SLIDES, 
  CREDENTIAL_SECTIONS, 
  CredentialSlide 
} from '../data/credentialData';
import { 
  ChevronUp, 
  ChevronDown, 
  SlidersHorizontal, 
  Presentation, 
  List, 
  Sparkles, 
  PhoneCall,
  ArrowRight
} from 'lucide-react';

interface CredentialPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const CredentialPage: React.FC<CredentialPageProps> = ({ onOpenConsultForm }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'scroll' | 'present'>('scroll');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingByCode = useRef<boolean>(false);

  const totalSlides = CREDENTIAL_SLIDES.length;

  // Scroll to slide smoothly
  const scrollToSlide = useCallback((slideIndex: number) => {
    if (slideIndex < 1 || slideIndex > totalSlides) return;
    setCurrentSlideIndex(slideIndex);

    if (viewMode === 'present') {
      // In present mode, simply update state and window scroll top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(`slide-${slideIndex}`);
    if (targetEl) {
      isScrollingByCode.current = true;
      const toolbarHeight = 74;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - toolbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingByCode.current = false;
      }, 700);
    }
  }, [totalSlides, viewMode]);

  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 1) {
      scrollToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, scrollToSlide]);

  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides) {
      scrollToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, totalSlides, scrollToSlide]);

  // Fullscreen toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Error attempting to enable full-screen mode:', err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  }, []);

  // Listen for fullscreen change events
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(totalSlides);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'Escape') {
        if (isMenuDrawerOpen) {
          setIsMenuDrawerOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, scrollToSlide, totalSlides, handleToggleFullscreen, isMenuDrawerOpen]);

  // Sync current slide index when scrolling down in scroll view
  useEffect(() => {
    if (viewMode !== 'scroll') return;

    const handleScroll = () => {
      if (isScrollingByCode.current) return;

      const slideElements = CREDENTIAL_SLIDES.map(s => document.getElementById(`slide-${s.id}`));
      const scrollPosition = window.scrollY + 200; // Offset from top

      for (let i = slideElements.length - 1; i >= 0; i--) {
        const el = slideElements[i];
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentSlideIndex(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(150, prev + 10));
  };
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(70, prev - 10));
  };
  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const currentSlideData: CredentialSlide = CREDENTIAL_SLIDES[currentSlideIndex - 1] || CREDENTIAL_SLIDES[0];

  // Active Section Info
  const activeSection = CREDENTIAL_SECTIONS.find(
    s => currentSlideIndex >= s.range[0] && currentSlideIndex <= s.range[1]
  ) || CREDENTIAL_SECTIONS[0];

  // Reading progress percentage
  const readingProgress = Math.round((currentSlideIndex / totalSlides) * 100);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        color: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* SEO Head Specification */}
      <SEOHead
        title="Hồ Sơ Năng Lực & Đề Xuất Giải Pháp Số 2026 | LocalMate"
        description="Khám phá chi tiết Hồ sơ năng lực 40 slide của LocalMate: Hệ sinh thái 5 trụ cột giải pháp số, quy trình chuẩn hóa 35 task nghiệm thu và chính sách bàn giao rồi mới thanh toán dành riêng cho SME."
        canonicalPath="/ho-so-nang-luc"
        schemaType="ProfessionalService"
      />

      {/* Sticky Credential Toolbar */}
      <CredentialToolbar
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        zoomLevel={zoomLevel}
        isFullscreen={isFullscreen}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onGoToSlide={scrollToSlide}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        onToggleFullscreen={handleToggleFullscreen}
        onToggleMenuDrawer={() => setIsMenuDrawerOpen(true)}
        onOpenConsultForm={() => onOpenConsultForm && onOpenConsultForm('Tư vấn trực tiếp từ Hồ sơ năng lực 40 Slide')}
      />

      {/* Reading Progress Indicator Bar */}
      <div style={{
        height: '3px',
        width: '100%',
        backgroundColor: '#e2e8f0',
        position: 'sticky',
        top: '64px',
        zIndex: 49
      }}>
        <div style={{
          height: '100%',
          width: `${readingProgress}%`,
          backgroundColor: '#0d7647',
          transition: 'width 0.2s ease'
        }} />
      </div>

      {/* Sub-bar: Current Section Badge & View Mode Toggle */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        position: 'sticky',
        top: '67px',
        zIndex: 48,
        fontSize: '13px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: '#edf7f1',
            color: '#0d7647',
            padding: '3px 8px',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '11px'
          }}>
            {activeSection.shortTitle}
          </span>
          <span style={{ color: '#64748b' }}>
            {activeSection.description}
          </span>
        </div>

        {/* Mode Switch: Continuous Scroll vs Presentation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f1f5f9',
          borderRadius: '8px',
          padding: '2px'
        }}>
          <button
            onClick={() => setViewMode('scroll')}
            title="Chế độ cuộn liên tục (Xem tài liệu)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: viewMode === 'scroll' ? '#ffffff' : 'transparent',
              color: viewMode === 'scroll' ? '#0f172a' : '#64748b',
              fontWeight: viewMode === 'scroll' ? 700 : 500,
              fontSize: '12px',
              cursor: 'pointer',
              boxShadow: viewMode === 'scroll' ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'
            }}
          >
            <List size={14} />
            <span>Cuộn liên tục</span>
          </button>

          <button
            onClick={() => setViewMode('present')}
            title="Chế độ thuyết trình từng slide (Trình chiếu)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: viewMode === 'present' ? '#ffffff' : 'transparent',
              color: viewMode === 'present' ? '#0f172a' : '#64748b',
              fontWeight: viewMode === 'present' ? 700 : 500,
              fontSize: '12px',
              cursor: 'pointer',
              boxShadow: viewMode === 'present' ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'
            }}
          >
            <Presentation size={14} />
            <span>Thuyết trình</span>
          </button>
        </div>
      </div>

      {/* Main Presentation Body */}
      <main
        style={{
          flex: 1,
          padding: '24px 16px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Zoom wrapper container */}
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : 'none',
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease'
          }}
        >
          {viewMode === 'scroll' ? (
            /* Mode 1: Continuous Vertical Deck */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
              {CREDENTIAL_SLIDES.map((slide) => (
                <CredentialSlideCard
                  key={slide.id}
                  slide={slide}
                  totalSlides={totalSlides}
                  onOpenConsultForm={onOpenConsultForm}
                />
              ))}
            </div>
          ) : (
            /* Mode 2: Presentation Single Slide View */
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CredentialSlideCard
                slide={currentSlideData}
                totalSlides={totalSlides}
                onOpenConsultForm={onOpenConsultForm}
              />

              {/* Bottom Quick Presentation Navigator */}
              <div style={{
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                padding: '10px 20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)'
              }}>
                <button
                  onClick={handlePrevSlide}
                  disabled={currentSlideIndex <= 1}
                  style={{
                    backgroundColor: currentSlideIndex <= 1 ? '#f1f5f9' : '#0d7647',
                    color: currentSlideIndex <= 1 ? '#94a3b8' : '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: currentSlideIndex <= 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  ← Slide Trước
                </button>

                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                  Slide {String(currentSlideIndex).padStart(2, '0')} / {totalSlides}
                </div>

                <button
                  onClick={handleNextSlide}
                  disabled={currentSlideIndex >= totalSlides}
                  style={{
                    backgroundColor: currentSlideIndex >= totalSlides ? '#f1f5f9' : '#0d7647',
                    color: currentSlideIndex >= totalSlides ? '#94a3b8' : '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: currentSlideIndex >= totalSlides ? 'not-allowed' : 'pointer'
                  }}
                >
                  Slide Kế Tiếp →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Floating Bottom Quick Jump Bar (For Mobile & Fast Navigation) */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 40
      }}>
        <button
          onClick={() => scrollToSlide(Math.max(1, currentSlideIndex - 1))}
          title="Lên slide trước"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          <ChevronUp size={20} />
        </button>

        <button
          onClick={() => scrollToSlide(Math.min(totalSlides, currentSlideIndex + 1))}
          title="Xuống slide kế tiếp"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Side Slide Menu Drawer */}
      <CredentialMenuDrawer
        isOpen={isMenuDrawerOpen}
        currentSlide={currentSlideIndex}
        onClose={() => setIsMenuDrawerOpen(false)}
        onSelectSlide={scrollToSlide}
        onOpenConsultForm={() => onOpenConsultForm && onOpenConsultForm('Đăng ký từ Drawer Mục lục 40 Slide')}
      />
    </div>
  );
};

export default CredentialPage;
