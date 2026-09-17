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
      {/* Top Header info */}
      <div className="gpc-header-row">
        <div>
          <div className={`gpc-top-tag ${isFeatured ? 'featured-tag' : 'neutral-tag'}`}>
            {badge}
          </div>
          <h3 className="gpc-name">{name}</h3>
        </div>
        <div className="gpc-price-wrap">
          <span className="gpc-price">{price}</span>
          <span className="gpc-unit">{unit}</span>
        </div>
      </div>

      <p className="gpc-audience">{audience}</p>

      <div className="gpc-divider" />

      {/* Deliverables Checklist — 2 Columns on Desktop to fit viewport without overflow */}
      <div className="gpc-features-box">
        <div className="gpc-features-title">Hạng mục triển khai:</div>
        <ul className="gpc-features-grid">
          {features.map((item, idx) => (
            <li key={idx} className="gpc-feature-item">
              <Check size={15} className="gpc-check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Actions & CTA */}
      <div className="gpc-footer">
        <div className="gpc-footer-meta">
          {priceNote && <span className="gpc-price-note">{priceNote}</span>}
          {footerBadge && (
            <span className="gpc-footer-badge">
              <ShieldCheck size={14} />
              <span>{footerBadge}</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onSelect}
          className={`gpc-cta-btn ${isFeatured ? 'primary' : 'secondary'}`}
        >
          <span>{ctaText}</span>
          {isFeatured ? <ArrowRight size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      <style>{`
        .geo-pricing-card {
          background-color: #ffffff;
          border-radius: 18px;
          padding: clamp(14px, 1.8vh, 22px);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .geo-pricing-card.featured {
          border: 2px solid #0d7647;
          box-shadow: 0 12px 28px -6px rgba(13, 118, 71, 0.16), 0 4px 10px -2px rgba(13, 118, 71, 0.05);
        }

        .geo-pricing-card.standard {
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .geo-pricing-card:hover {
          transform: translateY(-2px);
        }

        .gpc-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 6px;
        }

        .gpc-top-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 4px;
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
          font-size: clamp(20px, 1.6vw, 24px);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .gpc-price-wrap {
          text-align: right;
          flex-shrink: 0;
        }

        .gpc-price {
          font-size: clamp(22px, 2vw, 30px);
          font-weight: 800;
          color: #0d7647;
          line-height: 1.1;
          display: block;
        }

        .gpc-unit {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          display: block;
        }

        .gpc-audience {
          font-size: 13px;
          line-height: 1.45;
          color: #334155;
          margin: 0 0 10px 0;
        }

        .gpc-divider {
          height: 1px;
          background-color: #e2e8f0;
          margin-bottom: 12px;
        }

        .gpc-features-box {
          flex-grow: 1;
          margin-bottom: 14px;
        }

        .gpc-features-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
        }

        /* 2 Columns Checklist — Compact & Screen Fitting */
        .gpc-features-grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 14px;
        }

        @media (max-width: 640px) {
          .gpc-features-grid {
            grid-template-columns: 1fr;
            gap: 7px;
          }
        }

        .gpc-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 12.5px;
          line-height: 1.35;
          color: #1e293b;
        }

        .gpc-check-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .gpc-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
        }

        .gpc-footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 6px;
          min-height: 24px;
        }

        .gpc-price-note {
          font-size: 12px;
          font-weight: 700;
          color: #0d7647;
          background-color: #edf7f1;
          border-radius: 6px;
          padding: 3px 8px;
        }

        .gpc-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          color: #047857;
          background-color: #ecfdf5;
          border-radius: 6px;
          padding: 3px 8px;
        }

        .gpc-cta-btn {
          width: 100%;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.15s ease;
          padding: 10px 16px;
          box-sizing: border-box;
          border: none;
        }

        .gpc-cta-btn.primary {
          background-color: #0d7647;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(13, 118, 71, 0.2);
        }

        .gpc-cta-btn.primary:hover {
          background-color: #095935;
        }

        .gpc-cta-btn.secondary {
          background-color: #ffffff;
          color: #0f172a;
          border: 1.5px solid #0f172a;
        }

        .gpc-cta-btn.secondary:hover {
          background-color: #0f172a;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};
