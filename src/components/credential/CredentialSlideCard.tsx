import React from 'react';
import { 
  CredentialSlide 
} from '../../data/credentialData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Zap, 
  ArrowRight, 
  Clock, 
  Users, 
  Globe, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Rocket, 
  TrendingUp, 
  Cpu, 
  Bot, 
  HelpCircle, 
  FileText, 
  Layers, 
  CheckSquare, 
  Key, 
  BarChart3, 
  Compass, 
  Target, 
  AlertTriangle, 
  Flame, 
  Lock, 
  EyeOff, 
  KeyRound, 
  ShieldAlert, 
  FilterX, 
  Crosshair, 
  FileEdit, 
  Headphones, 
  HeartHandshake, 
  Eye, 
  CheckCircle, 
  FileCheck, 
  Search, 
  ListFilter, 
  Star, 
  GitFork, 
  Palette, 
  Smartphone, 
  Maximize2, 
  Code2, 
  BarChart, 
  Share2, 
  Send, 
  Table, 
  Video, 
  FileCheck2, 
  MessageCircle, 
  Quote, 
  Unlock, 
  Activity, 
  RefreshCw, 
  Shield
} from 'lucide-react';

interface CredentialSlideCardProps {
  slide: CredentialSlide;
  totalSlides?: number;
  onOpenConsultForm?: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass size={22} />,
  Target: <Target size={22} />,
  BarChart3: <BarChart3 size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  AlertTriangle: <AlertTriangle size={22} />,
  Flame: <Flame size={22} />,
  Lock: <Lock size={22} />,
  EyeOff: <EyeOff size={22} />,
  CheckCircle2: <CheckCircle2 size={22} />,
  KeyRound: <KeyRound size={22} />,
  Zap: <Zap size={22} />,
  Users: <Users size={22} />,
  FileText: <FileText size={22} />,
  Layers: <Layers size={22} />,
  CheckSquare: <CheckSquare size={22} />,
  Sparkles: <Sparkles size={22} />,
  Rocket: <Rocket size={22} />,
  Globe: <Globe size={22} />,
  TrendingUp: <TrendingUp size={22} />,
  Cpu: <Cpu size={22} />,
  Bot: <Bot size={22} />,
  HelpCircle: <HelpCircle size={22} />,
  Award: <Award size={22} />,
  ShieldAlert: <ShieldAlert size={22} />,
  FilterX: <FilterX size={22} />,
  Crosshair: <Crosshair size={22} />,
  Shield: <Shield size={22} />,
  FileEdit: <FileEdit size={22} />,
  MapPin: <MapPin size={22} />,
  Headphones: <Headphones size={22} />,
  HeartHandshake: <HeartHandshake size={22} />,
  Eye: <Eye size={22} />,
  CheckCircle: <CheckCircle size={22} />,
  FileCheck: <FileCheck size={22} />,
  Search: <Search size={22} />,
  ListFilter: <ListFilter size={22} />,
  Star: <Star size={22} />,
  GitFork: <GitFork size={22} />,
  Palette: <Palette size={22} />,
  Smartphone: <Smartphone size={22} />,
  Maximize2: <Maximize2 size={22} />,
  Code2: <Code2 size={22} />,
  BarChart: <BarChart size={22} />,
  Share2: <Share2 size={22} />,
  Send: <Send size={22} />,
  Table: <Table size={22} />,
  Key: <Key size={22} />,
  Video: <Video size={22} />,
  FileCheck2: <FileCheck2 size={22} />,
  MessageCircle: <MessageCircle size={22} />,
  Quote: <Quote size={22} />,
  Unlock: <Unlock size={22} />,
  Clock: <Clock size={22} />,
  Activity: <Activity size={22} />,
  RefreshCw: <RefreshCw size={22} />
};

export const CredentialSlideCard: React.FC<CredentialSlideCardProps> = ({
  slide,
  totalSlides = 40,
  onOpenConsultForm
}) => {
  const slideNumberFormatted = String(slide.id).padStart(2, '0');
  const totalSlidesFormatted = String(totalSlides).padStart(2, '0');

  // Render Header of each Slide
  const renderSlideHeader = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '14px',
      marginBottom: '20px',
      gap: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{
          backgroundColor: '#0d7647',
          color: '#ffffff',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.05em',
          padding: '4px 10px',
          borderRadius: '6px',
          textTransform: 'uppercase'
        }}>
          {slide.slideTag}
        </span>
        <span style={{
          color: '#64748b',
          fontSize: '13px',
          fontWeight: 500
        }}>
          {slide.sectionTitle}
        </span>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        padding: '3px 10px',
        borderRadius: '8px'
      }}>
        <span style={{
          color: '#0d7647',
          fontSize: '14px',
          fontWeight: 800,
          fontVariantNumeric: 'tabular-nums'
        }}>
          {slideNumberFormatted}
        </span>
        <span style={{ color: '#94a3b8', fontSize: '12px' }}>/</span>
        <span style={{
          color: '#64748b',
          fontSize: '13px',
          fontWeight: 600,
          fontVariantNumeric: 'tabular-nums'
        }}>
          {totalSlidesFormatted}
        </span>
      </div>
    </div>
  );

  // Layout: Cover Slide
  const renderCover = () => {
    const isFinalSlide = slide.id === 40;
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '10px 0'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#edf7f1',
            color: '#0d7647',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '13px',
            marginBottom: '20px',
            border: '1px solid #c6ebd4'
          }}>
            <Sparkles size={16} />
            {slide.coverData?.edition || 'Hồ Sơ Năng Lực 2026'}
          </div>

          <h1 style={{
            fontSize: 'clamp(26px, 3.2vw, 38px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.25,
            marginBottom: '16px',
            textWrap: 'balance'
          }}>
            {slide.title}
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: '#334155',
            lineHeight: 1.6,
            maxWidth: '820px',
            marginBottom: '28px'
          }}>
            {slide.subtitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}>
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '16px 20px',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                Đối Tượng Hướng Đến
              </div>
              <div style={{ fontSize: '14px', color: '#0f172a', fontWeight: 600, lineHeight: 1.5 }}>
                {slide.coverData?.targetAudience}
              </div>
            </div>

            <div style={{
              backgroundColor: '#edf7f1',
              border: '1px solid #c6ebd4',
              padding: '16px 20px',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '11px', color: '#0d7647', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                Tôn Chỉ Thực Thi
              </div>
              <div style={{ fontSize: '14px', color: '#095935', fontWeight: 700, lineHeight: 1.5 }}>
                {slide.coverData?.tagline}
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          borderTop: '1px solid #e2e8f0',
          paddingTop: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '18px'
            }}>
              LM
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>
                {slide.coverData?.author}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                {slide.coverData?.releaseDate}
              </div>
            </div>
          </div>

          {!isFinalSlide ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0d7647'
            }}>
              <span>Cuộn xuống hoặc bấm phím → để xem chi tiết</span>
              <ArrowRight size={16} />
            </div>
          ) : (
            <button
              onClick={() => onOpenConsultForm && onOpenConsultForm('Tư vấn giải pháp từ Hồ sơ năng lực')}
              style={{
                backgroundColor: '#0d7647',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Liên Hệ Hợp Tác Ngay</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    );
  };

  // Layout: Letter Slide
  const renderLetter = () => {
    const data = slide.letterData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '8px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '22px 26px',
            lineHeight: 1.7,
            color: '#1e293b',
            fontSize: '15px'
          }}>
            <p style={{ fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>
              {data.recipient}
            </p>
            {data.paragraphs.map((p, idx) => (
              <p key={idx} style={{ marginBottom: idx === data.paragraphs.length - 1 ? '0' : '14px' }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
          marginTop: '18px',
          borderTop: '1px solid #e2e8f0',
          paddingTop: '14px'
        }}>
          <div style={{
            backgroundColor: '#edf7f1',
            border: '1px solid #c6ebd4',
            padding: '10px 16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '520px'
          }}>
            <ShieldCheck size={20} color="#0d7647" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#095935' }}>
              {data.corePledge}
            </span>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic', marginBottom: '4px' }}>
              {data.signOff}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
              {data.authorName}
            </div>
            <div style={{ fontSize: '12px', color: '#0d7647', fontWeight: 600 }}>
              {data.authorRole}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Layout: Metrics Slide
  const renderMetrics = () => {
    const data = slide.metricsData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {/* Cột trái: Số liệu */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '18px 20px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#64748b',
                letterSpacing: '0.05em',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <BarChart3 size={16} color="#0d7647" />
                {data.leftColumn.title}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px'
              }}>
                {data.leftColumn.metrics.map((metric, idx) => (
                  <div key={idx} style={{
                    backgroundColor: metric.highlight ? '#edf7f1' : '#ffffff',
                    border: metric.highlight ? '1px solid #c6ebd4' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '12px 14px'
                  }}>
                    <div style={{
                      fontSize: 'clamp(20px, 2.4vw, 28px)',
                      fontWeight: 900,
                      color: metric.highlight ? '#0d7647' : '#0f172a',
                      lineHeight: 1.1,
                      marginBottom: '4px'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: metric.highlight ? '#095935' : '#334155',
                      marginBottom: '3px'
                    }}>
                      {metric.label}
                    </div>
                    {metric.description && (
                      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.35 }}>
                        {metric.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cột phải: Phân tích & Điểm mấu chốt */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#64748b',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Award size={16} color="#0d7647" />
                  {data.rightColumn.title}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: '#334155',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {data.rightColumn.content}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {data.rightColumn.keyPoints.map((pt, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '13px',
                      color: '#1e293b'
                    }}>
                      <CheckCircle2 size={16} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #f1f5f9',
                fontSize: '12px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Zap size={15} color="#d97706" />
                <span>Số liệu được đo lường thực tế từ hệ thống giám sát LocalMate Analytics</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '18px',
          padding: '10px 16px',
          backgroundColor: '#edf7f1',
          border: '1px solid #c6ebd4',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#095935' }}>
            {data.headline}
          </span>
          <span style={{ fontSize: '12px', color: '#0d7647', fontWeight: 700 }}>
            Tiêu Chuẩn Thực Thi 2026
          </span>
        </div>
      </div>
    );
  };

  // Layout: Grid 4 Cards
  const renderGrid4 = () => {
    const data = slide.grid4Data;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            {data.cards.map((card, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                position: 'relative'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#edf7f1',
                      color: '#0d7647',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {card.icon && iconMap[card.icon] ? iconMap[card.icon] : <Sparkles size={20} />}
                    </div>

                    {card.tag && (
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        letterSpacing: '0.04em'
                      }}>
                        {card.tag}
                      </span>
                    )}
                  </div>

                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '8px',
                    lineHeight: 1.4
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.55
                  }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#64748b'
        }}>
          <span>Được tinh chỉnh độc quyền bởi LocalMate Solution Framework</span>
          <span style={{ fontWeight: 600, color: '#0d7647' }}>Cam kết chuẩn hóa 100%</span>
        </div>
      </div>
    );
  };

  // Layout: Comparison Table
  const renderComparison = () => {
    const data = slide.comparisonData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            overflowX: 'auto',
            border: '1px solid #e2e8f0',
            borderRadius: '12px'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontSize: '13px',
              lineHeight: 1.4
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: '#0f172a', width: '22%' }}>
                    {data.headers[0]}
                  </th>
                  <th style={{ padding: '12px 14px', fontWeight: 600, color: '#64748b', width: '26%' }}>
                    {data.headers[1]}
                  </th>
                  <th style={{ padding: '12px 14px', fontWeight: 800, color: '#0d7647', backgroundColor: '#edf7f1', width: '28%' }}>
                    {data.headers[2]}
                  </th>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: '#0f172a', width: '24%' }}>
                    {data.headers[3]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: idx === data.rows.length - 1 ? 'none' : '1px solid #f1f5f9',
                    backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa'
                  }}>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: '#0f172a' }}>
                      {row.criteria}
                    </td>
                    <td style={{ padding: '12px 14px', color: '#64748b' }}>
                      {row.traditional}
                    </td>
                    <td style={{ padding: '12px 14px', fontWeight: 600, color: '#095935', backgroundColor: '#f4fbf7' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={15} color="#0d7647" style={{ flexShrink: 0 }} />
                        <span>{row.localmate}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px', fontWeight: 600, color: '#0d7647' }}>
                      {row.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {data.summaryNote && (
          <div style={{
            marginTop: '14px',
            padding: '10px 16px',
            backgroundColor: '#edf7f1',
            border: '1px solid #c6ebd4',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#095935',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <ShieldCheck size={18} color="#0d7647" />
            <span>{data.summaryNote}</span>
          </div>
        )}
      </div>
    );
  };

  // Layout: Checklist 35 Task
  const renderChecklist = () => {
    const data = slide.checklistData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <h2 style={{
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontWeight: 800,
              color: '#0f172a'
            }}>
              {slide.title}
            </h2>
            <span style={{
              backgroundColor: '#edf7f1',
              border: '1px solid #c6ebd4',
              color: '#0d7647',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 700
            }}>
              {data.totalTasksLabel}
            </span>
          </div>

          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '14px' }}>
            {data.phaseName}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '8px',
            maxHeight: '440px',
            overflowY: 'auto',
            paddingRight: '6px',
            scrollbarGutter: 'stable'
          }}>
            {data.tasks.map((task) => (
              <div key={task.id} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                  <span style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: '#edf7f1',
                    color: '#0d7647',
                    fontWeight: 700,
                    fontSize: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {task.id}
                  </span>
                  <span style={{ color: '#1e293b', fontWeight: 500, lineHeight: 1.3 }}>
                    {task.task}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  <span style={{
                    fontSize: '11px',
                    color: '#0d7647',
                    backgroundColor: '#edf7f1',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 600
                  }}>
                    {task.standard}
                  </span>
                  <CheckCircle2 size={16} color="#0d7647" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '12px',
          paddingTop: '10px',
          borderTop: '1px solid #e2e8f0',
          fontSize: '12px',
          color: '#64748b',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Mỗi task đều có biên bản kiểm thử xác nhận trước khi nghiệm thu</span>
          <span style={{ color: '#0d7647', fontWeight: 600 }}>Tỷ lệ đạt chuẩn: 100%</span>
        </div>
      </div>
    );
  };

  // Layout: Case Study
  const renderCaseStudy = () => {
    const data = slide.caseStudyData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '18px'
          }}>
            {/* Cột trái: Thông tin & Thách thức */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                    Khách Hàng Đối Tác
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                    {data.client}
                  </div>
                  <div style={{ fontSize: '12px', color: '#0d7647', fontWeight: 600 }}>
                    {data.industry} • {data.location}
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '11px', color: '#ef4444', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Thách Thức Ban Đầu
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                    {data.challenge}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: '#0d7647', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Giải Pháp Của LocalMate
                  </div>
                  <p style={{ fontSize: '13px', color: '#1e293b', lineHeight: 1.5 }}>
                    {data.solution}
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #e2e8f0',
                fontStyle: 'italic',
                fontSize: '12px',
                color: '#475569',
                lineHeight: 1.5
              }}>
                {data.quote}
              </div>
            </div>

            {/* Cột phải: 3 Chỉ số tăng trưởng */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#64748b',
                letterSpacing: '0.05em'
              }}>
                Kết Quả Thực Tế Đạt Được
              </div>

              {data.metrics.map((m, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#0f172a' }}>
                      {m.value}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: '#edf7f1',
                    border: '1px solid #c6ebd4',
                    color: '#0d7647',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 800
                  }}>
                    {m.diff}
                  </div>
                </div>
              ))}

              <button
                onClick={() => onOpenConsultForm && onOpenConsultForm(`Tư vấn ca tương tự ${data.industry}`)}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Nhận Tư Vấn Mô Hình Cho Ngành Của Bạn</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '14px',
          paddingTop: '10px',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: '#64748b'
        }}>
          <span>Số liệu được khách hàng xác nhận nghiệm thu thực tế</span>
          <span style={{ color: '#0d7647', fontWeight: 600 }}>Hiệu quả bền vững</span>
        </div>
      </div>
    );
  };

  // Layout: Process 5 Steps
  const renderProcess = () => {
    const data = slide.processData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            gap: '12px'
          }}>
            {data.steps.map((step, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <span style={{
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '12px',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      {step.stepNumber}
                    </span>
                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
                      {step.duration}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '6px',
                    lineHeight: 1.4
                  }}>
                    {step.name}
                  </h3>

                  <p style={{
                    fontSize: '12px',
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: '10px'
                  }}>
                    {step.desc}
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#edf7f1',
                  border: '1px solid #c6ebd4',
                  padding: '6px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  color: '#095935',
                  fontWeight: 600
                }}>
                  Đầu ra: {step.output}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '16px',
          padding: '10px 16px',
          backgroundColor: '#edf7f1',
          border: '1px solid #c6ebd4',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#095935',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <CheckCircle2 size={18} color="#0d7647" />
          <span>Cam kết tiến độ bàn giao đúng hạn trong hợp đồng — Trễ hạn hoàn tiền 100%</span>
        </div>
      </div>
    );
  };

  // Layout: Pillars Map
  const renderPillars = () => {
    const details = slide.customDetails;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '18px 20px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>
              {details?.intro}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {details?.bullets?.map((b, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#1e293b'
                }}>
                  <span style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {details?.highlightBox && (
          <div style={{
            padding: '12px 18px',
            backgroundColor: '#edf7f1',
            border: '1px solid #c6ebd4',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Sparkles size={22} color="#0d7647" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#095935' }}>
                {details.highlightBox.title}
              </div>
              <div style={{ fontSize: '12px', color: '#334155' }}>
                {details.highlightBox.desc}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Layout: Contact & Final CTA
  const renderContact = () => {
    const data = slide.contactData;
    if (!data) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px'
          }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
            {slide.subtitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {/* Cột trái: Thông tin liên hệ trực tiếp */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#0d7647',
                  letterSpacing: '0.05em',
                  marginBottom: '14px'
                }}>
                  Kênh Hỗ Trợ Trực Tiếp 24/7
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href={`tel:${data.hotline.replace(/\./g, '')}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '15px'
                  }}>
                    <PhoneCall size={20} color="#0d7647" />
                    <span>Hotline: {data.hotline}</span>
                  </a>

                  <a href={`https://zalo.me/${data.zalo.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '15px'
                  }}>
                    <MessageSquare size={20} color="#0d7647" />
                    <span>Zalo Tư Vấn: {data.zalo}</span>
                  </a>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '13px',
                    color: '#475569',
                    padding: '8px 4px'
                  }}>
                    <MapPin size={18} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{data.address}</span>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #e2e8f0',
                fontSize: '12px',
                color: '#64748b'
              }}>
                CÔNG TY TNHH LOCALMATE — MST: {data.mst}
              </div>
            </div>

            {/* Cột phải: Ưu đãi & Nút đăng ký */}
            <div style={{
              backgroundColor: '#edf7f1',
              border: '1px solid #c6ebd4',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  <Sparkles size={14} />
                  Ưu Đãi Đặc Quyền
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#095935',
                  marginBottom: '10px',
                  lineHeight: 1.4
                }}>
                  {data.consultOffer}
                </h3>

                <p style={{
                  fontSize: '13px',
                  color: '#1e293b',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}>
                  {data.guarantee}
                </p>
              </div>

              <button
                onClick={() => onOpenConsultForm && onOpenConsultForm('Kể việc bạn đang cần từ Slide 39')}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px 20px',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)'
                }}
              >
                <span>Kể việc bạn đang cần • Nhận tư vấn 1:1</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '16px',
          paddingTop: '10px',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: '#64748b'
        }}>
          <span>Phản hồi thông tin trong vòng 15 phút qua Zalo</span>
          <span style={{ color: '#0d7647', fontWeight: 600 }}>Tận tâm • Nhanh chóng • Chuẩn chỉ</span>
        </div>
      </div>
    );
  };

  // Switch renderer by layout type
  const renderSlideBody = () => {
    switch (slide.layout) {
      case 'cover':
        return renderCover();
      case 'letter':
        return renderLetter();
      case 'metrics':
        return renderMetrics();
      case 'grid4':
        return renderGrid4();
      case 'comparison':
        return renderComparison();
      case 'checklist':
        return renderChecklist();
      case 'casestudy':
        return renderCaseStudy();
      case 'process':
        return renderProcess();
      case 'pillars':
        return renderPillars();
      case 'contact':
        return renderContact();
      default:
        return renderGrid4();
    }
  };

  return (
    <div
      id={`slide-${slide.id}`}
      data-slide-index={slide.id}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(20px, 3.5vw, 36px)',
        boxSizing: 'border-box',
        aspectRatio: '16 / 9',
        minHeight: '560px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Không render Header thông thường cho Slide bìa mở đầu và slide kết */}
      {slide.layout !== 'cover' && renderSlideHeader()}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {renderSlideBody()}
      </div>
    </div>
  );
};
