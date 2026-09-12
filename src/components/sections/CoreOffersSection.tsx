import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Clock,
  Briefcase,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CORE_OFFERS_DATA, CoreOfferItem } from '../../data/operationsData';

interface CoreOffersSectionProps {
  onOpenLeadForm?: (serviceName: string) => void;
}

export const CoreOffersSection: React.FC<CoreOffersSectionProps> = ({ onOpenLeadForm }) => {
  const handleActionClick = (serviceName: string) => {
    if (onOpenLeadForm) {
      onOpenLeadForm(serviceName);
    }
  };

  return (
    <section
      style={{
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#f8faf9',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="cac-goi-trien-khai"
    >
      <Container size="lg">
        {/* Header */}
        <div style={{ maxWidth: '720px', margin: '0 auto clamp(2rem, 4vw, 3rem) auto', textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            <Layers size={14} /> DÀNH CHO DOANH NGHIỆP &amp; ĐỐI TÁC CÔNG NGHỆ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800, margin: '0 0 0.6rem 0', letterSpacing: '-0.02em', textWrap: 'balance', overflowWrap: 'break-word' }}>
            5 Giải pháp triển khai &amp; vận hành cốt lõi
          </h2>
          <p className="subtitle" style={{ fontSize: 'var(--font-size-subtitle)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0, textWrap: 'pretty', overflowWrap: 'break-word' }}>
            Bạn bán sản phẩm và phát triển kinh doanh. LocalMate trở thành đội ngũ kỹ thuật và triển khai phía sau giúp khách hàng thực sự sử dụng được.
          </p>
        </div>

        {/* 5 Core Offers Grid: 3 top + 2 bottom */}
        <div className="offers-grid-container">
          {CORE_OFFERS_DATA.map((offer) => {
            return (
              <div
                key={offer.id}
                className={`offer-card ${offer.highlighted ? 'offer-card-highlighted' : ''}`}
              >
                {/* Header of Card */}
                <div className="offer-header">
                  <div className="offer-badge-row">
                    <span className="offer-type-badge">{offer.badge}</span>
                    {offer.highlighted && (
                      <span className="offer-hot-pill">
                        <Sparkles size={12} /> Ưu tiên hợp tác
                      </span>
                    )}
                  </div>
                  <h3 className="offer-title">{offer.name}</h3>
                  <div className="offer-target-box">
                    <Briefcase size={14} color="var(--color-primary)" className="offer-target-icon" />
                    <span>{offer.targetAudience}</span>
                  </div>
                  <p className="offer-description">{offer.description}</p>
                </div>

                {/* Pricing & SLA Block */}
                <div className="offer-pricing-box">
                  <div className="offer-price-main">
                    <span className="offer-price-val">{offer.pricingDisplay}</span>
                    <span className="offer-price-sub">{offer.priceNote}</span>
                  </div>
                  <div className="offer-sla-row">
                    <Clock size={13} color="var(--color-primary-dark)" />
                    <span>{offer.slaTime}</span>
                  </div>
                </div>

                {/* Workflow steps */}
                <div className="offer-steps-block">
                  <div className="offer-steps-title">Quy trình thực thi:</div>
                  <ol className="offer-steps-list">
                    {offer.workflowSteps.map((st, i) => (
                      <li key={i} className="offer-step-item">
                        <span className="offer-step-num">{i + 1}</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Deliverables / Cam kết */}
                <div className="offer-deliverables-block">
                  <div className="offer-deliverables-title">Cam kết bàn giao:</div>
                  <ul className="offer-deliv-list">
                    {offer.deliverables.map((deliv, idx) => (
                      <li key={idx} className="offer-deliv-item">
                        <CheckCircle2 size={14} color="var(--color-primary)" className="offer-check-icon" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="offer-action-box">
                  <Button
                    variant={offer.highlighted ? 'primary' : 'secondary'}
                    size="md"
                    fullWidth
                    onClick={() => handleActionClick(offer.serviceNameForLead)}
                    style={{ fontWeight: 700, minHeight: 44 }}
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Big Enterprises */}
        <div className="offers-footer-banner">
          <div className="banner-text-group">
            <div className="banner-title">
              <ShieldCheck size={18} color="var(--color-primary)" />
              <span>Bạn cần bảng giá triển khai cho toàn bộ hệ thống hoặc theo hợp đồng khung?</span>
            </div>
            <p className="banner-desc">
              LocalMate cung cấp hợp đồng pháp nhân, xuất hóa đơn VAT và cam kết điều khoản bảo mật (NDA) nghiêm ngặt cho đối tác công nghệ.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => handleActionClick('Yêu cầu bảng giá triển khai toàn quốc & Hợp đồng khung')}
            className="banner-cta-btn"
          >
            <span>Yêu cầu bảng giá đối tác</span>
            <ArrowRight size={15} />
          </Button>
        </div>
      </Container>

      <style>{`
        .offers-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 768px) {
          .offers-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) and (max-width: 1099px) {
          .offers-grid-container > :nth-child(5) {
            grid-column: 1 / -1;
            max-width: 560px;
            width: 100%;
            margin-inline: auto;
          }
        }

        @media (min-width: 1100px) {
          .offers-grid-container {
            grid-template-columns: repeat(6, 1fr);
          }
          /* Row 1: 3 cards x span 2 = 6 cols */
          .offers-grid-container > :nth-child(1),
          .offers-grid-container > :nth-child(2),
          .offers-grid-container > :nth-child(3) {
            grid-column: span 2;
          }
          /* Row 2: 2 cards x span 3 = 6 cols, perfectly balanced! */
          .offers-grid-container > :nth-child(4),
          .offers-grid-container > :nth-child(5) {
            grid-column: span 3;
          }
        }

        .offer-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }

        .offer-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          border-color: var(--color-primary-light);
        }

        .offer-card-highlighted {
          border-color: #86efac;
          background: linear-gradient(180deg, #f7fdf9 0%, #ffffff 100%);
          box-shadow: 0 4px 16px rgba(13, 118, 71, 0.08);
        }

        .offer-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
        }

        .offer-type-badge {
          font-size: 0.725rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .offer-hot-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.725rem;
          font-weight: 800;
          color: #b45309;
          background-color: #fef3c7;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
        }

        .offer-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .offer-target-box {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #374151;
          background-color: #f9fafb;
          border: 1px solid #f3f4f6;
          padding: 0.4rem 0.65rem;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .offer-target-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .offer-description {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }

        .offer-pricing-box {
          background-color: #f9fafb;
          border: 1px dashed var(--color-border);
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .offer-price-main {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .offer-price-val {
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--color-primary);
        }

        .offer-price-sub {
          font-size: 0.775rem;
          font-weight: 600;
          color: #6b7280;
        }

        .offer-sla-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }

        .offer-steps-block {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .offer-steps-title,
        .offer-deliverables-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: #1f2937;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .offer-steps-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .offer-step-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: #4b5563;
          line-height: 1.4;
        }

        .offer-step-num {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background-color: #e5e7eb;
          font-size: 0.65rem;
          font-weight: 800;
          color: #374151;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .offer-deliverables-block {
          border-top: 1px dashed var(--color-border);
          padding-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .offer-deliv-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .offer-deliv-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: #374151;
          font-weight: 600;
          line-height: 1.4;
        }

        .offer-check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .offer-action-box {
          margin-top: 0.5rem;
        }

        /* Bottom Banner */
        .offers-footer-banner {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          box-shadow: var(--shadow-sm);
        }

        @media (min-width: 768px) {
          .offers-footer-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .banner-text-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          max-width: 700px;
        }

        .banner-title {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-navy);
        }

        .banner-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.5;
        }

        .banner-cta-btn {
          flex-shrink: 0;
          font-weight: 700;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export { ServiceCardsSection } from './ServiceCardsSection';
