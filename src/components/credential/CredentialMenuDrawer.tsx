import React, { useState } from 'react';
import { 
  X, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  PhoneCall, 
  Layers
} from 'lucide-react';
import { 
  CREDENTIAL_SECTIONS, 
  CREDENTIAL_SLIDES 
} from '../../data/credentialData';

interface CredentialMenuDrawerProps {
  isOpen: boolean;
  currentSlide: number;
  onClose: () => void;
  onSelectSlide: (slideId: number) => void;
  onOpenConsultForm: () => void;
}

export const CredentialMenuDrawer: React.FC<CredentialMenuDrawerProps> = ({
  isOpen,
  currentSlide,
  onClose,
  onSelectSlide,
  onOpenConsultForm
}) => {
  // Expand section containing current slide by default
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true
  });

  if (!isOpen) return null;

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <>
      {/* Backdrop (Dark Overlay, no glassmorphism) */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.45)',
          zIndex: 90,
          transition: 'opacity 0.2s ease'
        }}
      />

      {/* Drawer Container */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#ffffff',
          boxShadow: '-6px 0 25px rgba(15, 23, 42, 0.15)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid #e2e8f0',
          animation: 'slideInRight 0.25s ease-out'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8fafc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Layers size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Mục Lục 40 Slide
              </h2>
              <span style={{ fontSize: '12px', color: '#64748b' }}>
                Đang xem Slide {currentSlide} / 40
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng menu"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Slide List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          scrollbarGutter: 'stable'
        }}>
          {CREDENTIAL_SECTIONS.map((section) => {
            const isExpanded = !!expandedSections[section.id];
            const sectionSlides = CREDENTIAL_SLIDES.filter(s => s.sectionId === section.id);
            const isCurrentSection = currentSlide >= section.range[0] && currentSlide <= section.range[1];

            return (
              <div
                key={section.id}
                style={{
                  marginBottom: '16px',
                  border: isCurrentSection ? '1px solid #c6ebd4' : '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff'
                }}
              >
                {/* Section Accordion Trigger */}
                <button
                  onClick={() => toggleSection(section.id)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: isCurrentSection ? '#edf7f1' : '#f8fafc',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderBottom: isExpanded ? '1px solid #e2e8f0' : 'none'
                  }}
                >
                  <div>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: isCurrentSection ? '#0d7647' : '#64748b',
                      textTransform: 'uppercase',
                      marginBottom: '2px'
                    }}>
                      {section.badge}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.3
                    }}>
                      {section.shortTitle}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: isCurrentSection ? '#0d7647' : '#94a3b8',
                      backgroundColor: '#ffffff',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {section.range[0]} - {section.range[1]}
                    </span>
                    {isExpanded ? (
                      <ChevronDown size={16} color="#64748b" />
                    ) : (
                      <ChevronRight size={16} color="#64748b" />
                    )}
                  </div>
                </button>

                {/* Slides inside Section */}
                {isExpanded && (
                  <div style={{ padding: '6px' }}>
                    {sectionSlides.map((slide) => {
                      const isActive = slide.id === currentSlide;
                      return (
                        <button
                          key={slide.id}
                          onClick={() => {
                            onSelectSlide(slide.id);
                            onClose();
                          }}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 10px',
                            borderRadius: '8px',
                            border: isActive ? '1px solid #c6ebd4' : '1px solid transparent',
                            backgroundColor: isActive ? '#edf7f1' : 'transparent',
                            color: isActive ? '#095935' : '#1e293b',
                            cursor: 'pointer',
                            textAlign: 'left',
                            marginBottom: '2px',
                            transition: 'background-color 0.15s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                            <span style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: isActive ? '#0d7647' : '#64748b',
                              fontVariantNumeric: 'tabular-nums',
                              minWidth: '22px'
                            }}>
                              {String(slide.id).padStart(2, '0')}
                            </span>
                            <span style={{
                              fontSize: '12px',
                              fontWeight: isActive ? 700 : 500,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              flex: 1
                            }}>
                              {slide.title}
                            </span>
                          </div>

                          <span style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: isActive ? '#0d7647' : '#94a3b8',
                            backgroundColor: isActive ? '#ffffff' : '#f1f5f9',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            marginLeft: '8px',
                            flexShrink: 0
                          }}>
                            {slide.slideTag}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <button
            onClick={() => {
              onClose();
              onOpenConsultForm();
            }}
            style={{
              backgroundColor: '#0d7647',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '12px',
              fontWeight: 700,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(13, 118, 71, 0.2)'
            }}
          >
            <Sparkles size={16} />
            <span>Kể việc bạn đang cần • Demo 0đ</span>
          </button>

          <a
            href="tel:0834422439"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#0f172a',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0'
            }}
          >
            <PhoneCall size={15} color="#0d7647" />
            <span>Hotline Trực Tiếp: 0834.422.439</span>
          </a>
        </div>
      </aside>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
