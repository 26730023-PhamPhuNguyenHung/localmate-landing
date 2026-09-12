import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  Menu, 
  PhoneCall, 
  ChevronDown,
  Layers
} from 'lucide-react';
import { CREDENTIAL_SECTIONS, CredentialSection } from '../../data/credentialData';

interface CredentialToolbarProps {
  currentSlide: number;
  totalSlides: number;
  zoomLevel: number;
  isFullscreen: boolean;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (slideIndex: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onToggleFullscreen: () => void;
  onToggleMenuDrawer: () => void;
  onOpenConsultForm: () => void;
}

export const CredentialToolbar: React.FC<CredentialToolbarProps> = ({
  currentSlide,
  totalSlides,
  zoomLevel,
  isFullscreen,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onToggleFullscreen,
  onToggleMenuDrawer,
  onOpenConsultForm
}) => {
  const [inputVal, setInputVal] = useState<string>(String(currentSlide));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync input value when currentSlide changes from external scroll
  useEffect(() => {
    setInputVal(String(currentSlide));
  }, [currentSlide]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(inputVal, 10);
    if (!isNaN(num) && num >= 1 && num <= totalSlides) {
      onGoToSlide(num);
    } else {
      setInputVal(String(currentSlide));
    }
  };

  const handleSectionSelect = (section: CredentialSection) => {
    onGoToSlide(section.range[0]);
    setIsDropdownOpen(false);
  };

  // Find active section
  const activeSection = CREDENTIAL_SECTIONS.find(
    s => currentSlide >= s.range[0] && currentSlide <= s.range[1]
  ) || CREDENTIAL_SECTIONS[0];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 2px 10px rgba(15, 23, 42, 0.05)',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        gap: '12px'
      }}>
        {/* Left: Brand Logo + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: '#0f172a'
            }}
          >
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '16px'
            }}>
              LM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                LocalMate
              </span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#0d7647' }}>
                Hồ Sơ Năng Lực 2026
              </span>
            </div>
          </a>

          {/* Section Selector Dropdown (Desktop) */}
          <div ref={dropdownRef} style={{ position: 'relative', display: 'none' }} className="credential-desktop-only">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1e293b',
                cursor: 'pointer'
              }}
            >
              <Layers size={15} color="#0d7647" />
              <span>{activeSection.shortTitle}</span>
              <ChevronDown size={14} color="#64748b" />
            </button>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                width: '320px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                boxShadow: '0 10px 25px rgba(15, 23, 42, 0.1)',
                padding: '6px',
                zIndex: 60
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#64748b',
                  padding: '6px 10px',
                  textTransform: 'uppercase'
                }}>
                  Mục Lục 4 Phần Hồ Sơ
                </div>
                {CREDENTIAL_SECTIONS.map((sec) => {
                  const isActive = sec.id === activeSection.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleSectionSelect(sec)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '8px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: isActive ? '#edf7f1' : 'transparent',
                        color: isActive ? '#095935' : '#1e293b',
                        cursor: 'pointer',
                        marginBottom: '2px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', fontWeight: isActive ? 700 : 600 }}>
                          {sec.shortTitle}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          color: isActive ? '#0d7647' : '#94a3b8',
                          fontWeight: 600
                        }}>
                          Slide {sec.range[0]} - {sec.range[1]}
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                        {sec.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Center: Slide Navigation & Direct Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onPrevSlide}
            disabled={currentSlide <= 1}
            title="Slide trước (Phím ←)"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: currentSlide <= 1 ? '#f8fafc' : '#ffffff',
              color: currentSlide <= 1 ? '#cbd5e1' : '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlide <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Form Direct Page Input */}
          <form onSubmit={handleInputSubmit} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onBlur={handleInputSubmit}
              title="Nhập số slide và bấm Enter"
              style={{
                width: '38px',
                height: '32px',
                textAlign: 'center',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontWeight: 700,
                fontSize: '13px',
                color: '#0f172a',
                outline: 'none',
                backgroundColor: '#ffffff'
              }}
            />
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>
              / {totalSlides}
            </span>
          </form>

          <button
            onClick={onNextSlide}
            disabled={currentSlide >= totalSlides}
            title="Slide tiếp (Phím →)"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: currentSlide >= totalSlides ? '#f8fafc' : '#ffffff',
              color: currentSlide >= totalSlides ? '#cbd5e1' : '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlide >= totalSlides ? 'not-allowed' : 'pointer'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Right: Zoom Control + Fullscreen + CTA + Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Zoom controls (Desktop) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '2px'
          }} className="credential-desktop-only">
            <button
              onClick={onZoomOut}
              disabled={zoomLevel <= 70}
              title="Thu nhỏ"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: zoomLevel <= 70 ? 'not-allowed' : 'pointer',
                color: zoomLevel <= 70 ? '#cbd5e1' : '#475569'
              }}
            >
              <ZoomOut size={16} />
            </button>

            <button
              onClick={onResetZoom}
              title="Khôi phục 100%"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0f172a',
                padding: '0 6px',
                cursor: 'pointer',
                minWidth: '42px',
                textAlign: 'center'
              }}
            >
              {zoomLevel}%
            </button>

            <button
              onClick={onZoomIn}
              disabled={zoomLevel >= 150}
              title="Phóng to"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: zoomLevel >= 150 ? 'not-allowed' : 'pointer',
                color: zoomLevel >= 150 ? '#cbd5e1' : '#475569'
              }}
            >
              <ZoomIn size={16} />
            </button>
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Thoát toàn màn hình (Phím F hoặc Esc)' : 'Bật toàn màn hình (Phím F)'}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {isFullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
          </button>

          {/* CTA Consult 1:1 Button */}
          <button
            onClick={onOpenConsultForm}
            style={{
              backgroundColor: '#0d7647',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 14px',
              fontWeight: 700,
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <PhoneCall size={14} />
            <span>Tư Vấn 1:1</span>
          </button>

          {/* Menu Drawer Toggle Button */}
          <button
            onClick={onToggleMenuDrawer}
            title="Mục lục 40 Slide"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .credential-desktop-only {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
