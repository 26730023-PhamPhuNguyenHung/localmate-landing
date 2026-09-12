import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { STARTER_PACKAGE } from '../../data/landingContent';
import { CheckCircle2, Clock, RotateCcw, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';

interface StarterPackageSectionProps {
  onOpenDemoForm?: () => void;
}

export const StarterPackageSection: React.FC<StarterPackageSectionProps> = ({ onOpenDemoForm }) => {
  const { navigate } = useRouter();

  const handleAction = () => {
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section id="goi-khoi-tao" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#fafbfa', borderBottom: '1px solid #e5e7eb' }}>
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto clamp(2rem, 4vw, 3rem) auto', textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            <Sparkles size={14} /> GÓI KHỞI TẠO TOÀN DIỆN
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800, margin: '0 0 0.6rem 0', letterSpacing: '-0.02em', textWrap: 'balance', overflowWrap: 'break-word' }}>
            Bảng giá khởi tạo trọn gói, không chi phí ẩn
          </h2>
          <p className="subtitle" style={{ fontSize: 'var(--font-size-subtitle)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0, textWrap: 'pretty', overflowWrap: 'break-word' }}>
            Giải pháp trọn gói giúp cửa hàng và doanh nghiệp nhỏ hiện diện uy tín chỉ trong 3 đến 7 ngày.
          </p>
        </div>

        {/* Main Clean Light Card Box */}
        <div className="starter-main-card">
          <div className="starter-pricing-grid">
            {/* Left Column: Pricing & Preview */}
            <div className="starter-left-col">
              <div>
                {/* Badge Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="starter-package-badge">
                    <Sparkles size={12} /> {STARTER_PACKAGE.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0d7647', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {STARTER_PACKAGE.name}
                </div>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <h3 style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)', color: '#0f172a', fontWeight: 900, lineHeight: 1, margin: 0, letterSpacing: '-0.02em' }}>
                    {STARTER_PACKAGE.price}
                  </h3>
                  <span style={{ fontSize: '0.925rem', color: '#64748b', fontWeight: 600 }}>
                    {STARTER_PACKAGE.unit}
                  </span>
                </div>

                {/* Transparent Dual-Tier Hint */}
                <div className="starter-tier-hint">
                  <span className="tier-dot" />
                  <span>Gói khởi điểm trọn gói • Nâng cấp tính năng theo nhu cầu</span>
                </div>

                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.55, margin: '0.75rem 0 1.25rem 0' }}>
                  {STARTER_PACKAGE.subtitle}
                </p>

                {/* Duration & Revisions Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span className="starter-meta-pill">
                    <Clock size={13} color="#0d7647" /> Bàn giao: {STARTER_PACKAGE.timeline}
                  </span>
                  <span className="starter-meta-pill">
                    <RotateCcw size={13} color="#0d7647" /> {STARTER_PACKAGE.revisions}
                  </span>
                </div>
              </div>

              {/* Action Button & Guarantee */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button variant="primary" size="lg" onClick={handleAction} fullWidth style={{ fontWeight: 700, minHeight: 48, borderRadius: 10 }}>
                  <span>Nhận website demo 0đ trước</span>
                  <ArrowRight size={16} />
                </Button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    fontSize: '0.825rem',
                    color: '#0d7647',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                >
                  <ShieldCheck size={16} color="#0d7647" />
                  <span>Nghiệm thu hài lòng rồi mới thanh toán</span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist */}
            <div className="starter-right-col">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                Những gì bạn nhận được trong gói {STARTER_PACKAGE.name}:
              </h3>

              {STARTER_PACKAGE.groups.map((group, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="starter-group-num">
                      {idx + 1}
                    </span>
                    <h4 style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                      {group.title}
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingLeft: '1.85rem', margin: 0 }}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                        <CheckCircle2 size={15} color="#0d7647" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .starter-main-card {
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .starter-main-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.07), 0 4px 10px -2px rgba(15, 23, 42, 0.03);
          border-color: #cbd5e1;
        }

        .starter-pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 900px) {
          .starter-pricing-grid {
            grid-template-columns: 5fr 7fr;
          }
        }

        .starter-left-col {
          background-color: #f8fafc;
          padding: clamp(1.5rem, 3.5vw, 2.25rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          border-right: 1px solid #e5e7eb;
        }

        .starter-right-col {
          padding: clamp(1.5rem, 3.5vw, 2.25rem);
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.25rem;
        }

        .starter-package-badge {
          font-size: 0.75rem;
          font-weight: 700;
          background-color: #ecfdf5;
          color: #0d7647;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid #d1fae5;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .starter-tier-hint {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 600;
          color: #0d7647;
          line-height: 1.3;
        }

        .tier-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #10b981;
          flex-shrink: 0;
        }

        .starter-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          background-color: #ffffff;
          color: #334155;
          padding: 0.3rem 0.65rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          font-weight: 600;
        }

        .starter-group-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ecfdf5;
          color: #0d7647;
          border: 1px solid #d1fae5;
          font-size: 0.725rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
