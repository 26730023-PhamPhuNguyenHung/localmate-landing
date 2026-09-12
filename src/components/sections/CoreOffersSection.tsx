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
        backgroundColor: '#fafbfa',
        borderBottom: '1px solid #e5e7eb'
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
                        <Sparkles size={11} /> Ưu tiên hợp tác
                      </span>
                    )}
                  </div>
                  <h3 className="offer-title">{offer.name}</h3>
                  <div className="offer-target-box">
                    <Briefcase size={14} color="#0d7647" className="offer-target-icon" />
                    <span>{offer.targetAudience}</span>
                  </div>
                  <p className="offer-description">{offer.description}</p>
                </div>

                {/* Pricing & SLA Block */}
                <div className="offer-pricing-box">
                  <div className="offer-price-main">
                    <span className="offer-price-label">Định mức chi phí:</span>
                    <span className="offer-price-val">{offer.pricingDisplay}</span>
                    <span className="offer-price-sub">{offer.priceNote}</span>
                  </div>
                  <div className="offer-sla-row">
                    <Clock size={13} color="#0d7647" />
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
                        <CheckCircle2 size={15} color="#0d7647" className="offer-check-icon" />
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
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
          position: relative;
        }

        .offer-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.07), 0 4px 10px -2px rgba(15, 23, 42, 0.03);
          border-color: #cbd5e1;
        }

        .offer-card-highlighted {
          border-color: #a7f3d0;
          background: #ffffff;
          box-shadow: 0 2px 10px 0 rgba(13, 118, 71, 0.06);
        }

        .offer-card-highlighted:hover {
          border-color: #6ee7b7;
          box-shadow: 0 12px 24px -6px rgba(13, 118, 71, 0.1), 0 4px 10px -2px rgba(15, 23, 42, 0.03);
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
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #0d7647;
          background-color: #ecfdf5;
          border: 1px solid #d1fae5;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          text-transform: uppercase;
        }

        .offer-hot-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.725rem;
          font-weight: 700;
          color: #b45309;
          background-color: #fef3c7;
          border: 1px solid #fde68a;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }

        .offer-title {
          font-size: 1.22rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .offer-target-box {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          line-height: 1.45;
        }

        .offer-target-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .offer-description {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        .offer-pricing-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
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

        .offer-price-label {
          font-size: 0.725rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .offer-price-val {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
        }

        .offer-price-sub {
          font-size: 0.775rem;
          font-weight: 600;
          color: #64748b;
        }

        .offer-sla-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d7647;
        }

        .offer-steps-block {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .offer-steps-title,
        .offer-deliverables-title {
          font-size: 0.775rem;
          font-weight: 700;
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
          font-size: 0.825rem;
          color: #475569;
          line-height: 1.45;
        }

        .offer-step-num {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #ecfdf5;
          border: 1px solid #d1fae5;
          font-size: 0.65rem;
          font-weight: 800;
          color: #0d7647;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .offer-deliverables-block {
          border-top: 1px solid #e2e8f0;
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
          font-size: 0.825rem;
          color: #334155;
          font-weight: 600;
          line-height: 1.45;
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
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
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
          color: #0f172a;
        }

        .banner-desc {
          font-size: 0.825rem;
          color: #64748b;
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
