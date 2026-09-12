import React, { useState } from 'react';
import { Container } from '../ui/Container';
import {
  Globe,
  MapPin,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  KeyRound,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { useRouter, Link } from '../layout/Router';
import { SOLUTION_PILLARS, SolutionPillar } from '../../data/solutionPillarsData';

interface SolutionPillarsSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SolutionPillarsSection: React.FC<SolutionPillarsSectionProps> = ({
  onOpenConsultForm
}) => {
  const { navigate } = useRouter();
  const [activePillarId, setActivePillarId] = useState<string>(SOLUTION_PILLARS[0].id);

  const renderIcon = (iconName: SolutionPillar['iconName'], color: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={22} color={color} />;
      case 'MapPin':
        return <MapPin size={22} color={color} />;
      case 'TrendingUp':
        return <TrendingUp size={22} color={color} />;
      case 'Cpu':
        return <Cpu size={22} color={color} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={22} color={color} />;
    }
  };

  const handleConsult = (pillar: SolutionPillar) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(`Tư vấn Gói Giải Pháp: ${pillar.title}`);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section
      className="solution-pillars-section"
      id="giai-phap-trong-tam"
      aria-label="5 Nhóm Giải Pháp Trọng Tâm của Localmate"
      style={{
        backgroundColor: '#fbfcfb',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        borderBottom: '1px solid var(--color-border)',
        scrollbarGutter: 'stable'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} color="var(--color-teal)" />
            <span>5 TRỤ CỘT GIẢI PHÁP SỐ TOÀN DIỆN</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem',
              textWrap: 'balance'
            }}
          >
            Bạn Đang Cần Giải Quyết Việc Gì?
          </h2>

          <p
            style={{
              fontSize: '1.025rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.65,
              textWrap: 'pretty',
              margin: '0 auto'
            }}
          >
            LocalMate không bán những thứ phức tạp bạn không cần. Hãy chọn đúng bài toán kinh doanh đang gặp phải để xem quy trình xử lý thực chiến và hạng mục bàn giao minh bạch.
          </p>
        </div>

        {/* Quick Horizontal Pillar Selector on Mobile/Tablet */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2.5rem'
          }}
          role="tablist"
          aria-label="Danh sách 5 Trụ Cột Giải Pháp"
        >
          {SOLUTION_PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 600,
                  backgroundColor: isActive ? 'var(--color-navy)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-navy)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-navy)' : 'var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.12)' : 'none'
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    opacity: isActive ? 0.9 : 0.6
                  }}
                >
                  {pillar.pillarNumber}
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* 5 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {SOLUTION_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;

            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.slug}`}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-xl)',
                  border: `1.5px solid ${isSelected ? pillar.color.primary : 'var(--color-border)'}`,
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isSelected
                    ? '0 10px 30px -10px rgba(13, 118, 71, 0.18)'
                    : '0 2px 10px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                {/* Top Row: Number + Badge + Price */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1.25rem',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: pillar.color.bgSoft,
                          border: `1px solid ${pillar.color.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {renderIcon(pillar.iconName, pillar.color.primary)}
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: 800,
                            letterSpacing: '0.05em',
                            color: pillar.color.primary,
                            textTransform: 'uppercase'
                          }}
                        >
                          Trụ Cột {pillar.pillarNumber}
                        </span>
                        <h3
                          style={{
                            fontSize: '1.225rem',
                            fontWeight: 800,
                            color: 'var(--color-navy)',
                            lineHeight: 1.3,
                            marginTop: '0.15rem'
                          }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: pillar.color.badgeText,
                        backgroundColor: pillar.color.badgeBg,
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-md)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {pillar.startingPrice}
                    </span>
                  </div>

                  {/* Problem & Question Statement */}
                  <div
                    style={{
                      backgroundColor: '#f8faf9',
                      borderLeft: `3px solid ${pillar.color.primary}`,
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      padding: '0.85rem 1rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.3rem'
                      }}
                    >
                      <HelpCircle size={13} />
                      <span>Bài toán của bạn:</span>
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-navy)',
                        fontStyle: 'italic',
                        lineHeight: 1.45,
                        margin: 0
                      }}
                    >
                      "{pillar.question}"
                    </p>
                  </div>

                  {/* Tagline / Value Proposition */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.55,
                      marginBottom: '1.35rem',
                      fontWeight: 500
                    }}
                  >
                    {pillar.tagline}
                  </p>

                  {/* Capabilities List */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.65rem'
                      }}
                    >
                      Năng lực triển khai cốt lõi:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {pillar.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.85rem',
                            color: 'var(--color-navy)',
                            lineHeight: 1.4
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color={pillar.color.primary}
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <div>
                            <strong style={{ fontWeight: 700 }}>{cap.title}:</strong>{' '}
                            <span style={{ color: 'var(--color-text-muted)' }}>{cap.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable Highlights Pill */}
                  <div
                    style={{
                      padding: '0.75rem 0.95rem',
                      backgroundColor: pillar.color.bgSoft,
                      border: `1px dashed ${pillar.color.border}`,
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '1.5rem',
                      fontSize: '0.8rem',
                      color: pillar.color.badgeText,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <KeyRound size={15} style={{ flexShrink: 0 }} />
                    <span><strong>Cam kết bàn giao:</strong> {pillar.deliverables[0]}</span>
                  </div>
                </div>

                {/* Bottom Action Row: View Detail + Consult CTA */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--color-border)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => navigate(pillar.fullPath)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      backgroundColor: 'var(--color-navy)',
                      color: '#ffffff',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background-color 0.15s ease'
                    }}
                  >
                    <span>Xem chi tiết giải pháp {pillar.pillarNumber}</span>
                    <ArrowRight size={15} />
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => handleConsult(pillar)}
                      style={{
                        flex: 1,
                        padding: '0.65rem 0.75rem',
                        backgroundColor: '#ffffff',
                        color: pillar.color.primary,
                        borderRadius: 'var(--radius-md)',
                        border: `1px solid ${pillar.color.border}`,
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <PhoneCall size={13} />
                      <span>Nhận tư vấn 0đ</span>
                    </button>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        padding: '0.5rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Clock size={12} /> {pillar.slaTime}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Assurance Banner */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.25rem 1.75rem',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: 'var(--color-teal-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShieldCheck size={20} color="var(--color-teal-dark)" />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                Cam kết minh bạch: Nghiệm thu hài lòng mới tiến hành thanh toán
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Báo giá cố định trọn gói trước khi làm • 100% tài khoản chính chủ thuộc về bạn • Không phí phát sinh
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/giai-phap')}
            style={{
              padding: '0.65rem 1.25rem',
              backgroundColor: 'var(--color-teal-soft)',
              color: 'var(--color-teal-dark)',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>Khám phá Trung tâm Giải Pháp</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </Container>
    </section>
  );
};
