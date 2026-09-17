import React from 'react';
import { Check, ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

interface GeoPricingCardProps {
  name: string;
  price: string;
  unit: string;
  badge: string;
  isFeatured?: boolean;
  audience: string;
  features: string[];
  priceNote?: string;
  footerBadge?: string;
  ctaText: string;
  onSelect: () => void;
}

export const GeoPricingCard: React.FC<GeoPricingCardProps> = ({
  name,
  price,
  unit,
  badge,
  isFeatured = false,
  audience,
  features,
  priceNote,
  footerBadge,
  ctaText,
  onSelect
}) => {
  return (
    <div className={`geo-pricing-card ${isFeatured ? 'featured' : 'standard'}`}>
      {/* Top Badge */}
      <div className={`gpc-top-tag ${isFeatured ? 'featured-tag' : 'neutral-tag'}`}>
        <span>{badge}</span>
      </div>

      {/* Main Info */}
      <div className="gpc-main-info">
        <h3 className="gpc-name">{name}</h3>
        <div className="gpc-price">
          {price} <span className="gpc-unit">{unit}</span>
        </div>
        <p className="gpc-audience">{audience}</p>
      </div>

      <div className="gpc-divider" />

      {/* Deliverables Checklist */}
      <div className="gpc-features-box">
        <div className="gpc-features-title">Bao gồm:</div>
        <ul className="gpc-features-list">
          {features.map((item, idx) => (
            <li key={idx}>
              <Check size={16} className="gpc-check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Actions */}
      <div className="gpc-footer">
        {priceNote && <div className="gpc-price-note">{priceNote}</div>}
        {footerBadge && (
          <div className="gpc-footer-badge">
            <ShieldCheck size={15} />
            <span>{footerBadge}</span>
          </div>
        )}

        <button
          type="button"
          onClick={onSelect}
          className={`gpc-cta-btn ${isFeatured ? 'primary' : 'secondary'}`}
        >
          <span>{ctaText}</span>
          {isFeatured ? <ArrowRight size={17} /> : <ChevronRight size={17} />}
        </button>
      </div>

      <style>{`
        .geo-pricing-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: clamp(22px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          position: relative;
          box-sizing: border-box;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .geo-pricing-card.featured {
          border: 2px solid #0d7647;
          box-shadow: 0 16px 36px -8px rgba(13, 118, 71, 0.18), 0 4px 10px -2px rgba(13, 118, 71, 0.06);
        }

        .geo-pricing-card.standard {
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .geo-pricing-card:hover {
          transform: translateY(-2px);
        }

        .gpc-top-tag {
          align-self: flex-start;
          font-size: 11.5px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 14px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .featured-tag {
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
        }

        .neutral-tag {
          color: #475569;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
        }

        .gpc-name {
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .gpc-price {
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 900;
          color: #0d7647;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .gpc-unit {
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
        }

        .gpc-audience {
          font-size: 14px;
          line-height: 1.5;
          color: #334155;
          margin: 0;
          min-height: 42px;
        }

        .gpc-divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 18px 0;
        }

        .gpc-features-box {
          flex-grow: 1;
          margin-bottom: 20px;
        }

        .gpc-features-title {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
        }

        .gpc-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .gpc-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          line-height: 1.4;
          color: #1e293b;
        }

        .gpc-check-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .gpc-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .gpc-price-note {
          font-size: 13px;
          font-weight: 750;
          color: #0d7647;
          background-color: #edf7f1;
          border-radius: 8px;
          padding: 6px 10px;
          text-align: center;
        }

        .gpc-footer-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 650;
          color: #047857;
          background-color: #ecfdf5;
          border-radius: 6px;
          padding: 6px 10px;
        }

        .gpc-cta-btn {
          width: 100%;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 12px;
          font-size: 14.5px;
          font-weight: 850;
          cursor: pointer;
          transition: all 0.15s ease;
          padding: 10px 18px;
          box-sizing: border-box;
          border: none;
        }

        .gpc-cta-btn.primary {
          background-color: #0d7647;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.22);
        }

        .gpc-cta-btn.primary:hover {
          background-color: #095935;
          transform: translateY(-1px);
        }

        .gpc-cta-btn.secondary {
          background-color: #ffffff;
          color: #0f172a;
          border: 2px solid #0f172a;
        }

        .gpc-cta-btn.secondary:hover {
          background-color: #0f172a;
          color: #ffffff;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};
