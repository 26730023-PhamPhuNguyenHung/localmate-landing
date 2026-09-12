import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import {
  MessageSquareQuote,
  Smartphone,
  Receipt,
  Gauge,
  KeyRound,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { OPERATIONAL_STEPS_DATA } from '../../data/operationsData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <MessageSquareQuote key="1" size={18} aria-hidden="true" />,
    <Smartphone key="2" size={18} aria-hidden="true" />,
    <Receipt key="3" size={18} aria-hidden="true" />,
    <Gauge key="4" size={18} aria-hidden="true" />,
    <KeyRound key="5" size={18} aria-hidden="true" />
  ];

  return (
    <section className="process-section" id="quy-trinh" aria-label="Cách Localmate làm việc">
      <Container size="lg">
        <SectionHeader
          eyebrow="QUY TRÌNH MINH BẠCH 5 BƯỚC"
          title="Cách Localmate làm việc cùng bạn"
          subtitle="Trải nghiệm web demo 0đ trước ngay trên điện thoại. Hài lòng từng tính năng mới tiến hành, nghiệm thu 100% mới thanh toán."
        />

        {/* Timeline Flow: Horizontal on Desktop, Vertical Stepper on Mobile */}
        <div className="process-flow-wrapper">
          <ol className="process-pipeline-list" aria-label="5 bước triển khai">
            {OPERATIONAL_STEPS_DATA.map((step, idx) => {
              const isLast = idx === OPERATIONAL_STEPS_DATA.length - 1;
              const stepNumber = step.step;

              return (
                <li
                  key={step.step}
                  className={`process-step-item ${isLast ? 'step-item-final' : ''}`}
                >
                  {/* Stepper Node (Timeline Tracker) */}
                  <div className="step-tracker-header">
                    <div className={`step-badge-node ${isLast ? 'badge-node-final' : ''}`}>
                      <span className="step-num-text">{stepNumber}</span>
                    </div>

                    {/* Desktop Connector Line */}
                    {!isLast && (
                      <div className="step-connector-desktop" aria-hidden="true">
                        <span className="connector-line-fill" />
                        <ChevronRight size={15} className="connector-arrow-icon" />
                      </div>
                    )}

                    {/* Mobile Connector Spine Line */}
                    {!isLast && (
                      <div className="step-connector-mobile-spine" aria-hidden="true" />
                    )}
                  </div>

                  {/* Step Card Box */}
                  <div className={`step-content-card ${isLast ? 'card-final-highlight' : ''}`}>
                    <div className="card-header-bar">
                      <div className={`step-icon-bubble ${isLast ? 'icon-bubble-final' : ''}`}>
                        {stepIcons[idx]}
                      </div>
                      <span className="step-badge-code">
                        BƯỚC {stepNumber}
                        {isLast && <span className="final-tag">BÀN GIAO</span>}
                      </span>
                    </div>

                    <h3 className="step-card-title">{step.title}</h3>
                    <h4 className="step-card-subtitle">{step.subtitle}</h4>
                    <p className="step-card-desc">{step.description}</p>

                    <div className="step-card-footer">
                      <div className="step-evidence-pill">
                        <CheckCircle2 size={13} className="pill-check-icon" aria-hidden="true" />
                        <span>{step.evidence}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Trust Callout Banner */}
        <div className="process-trust-banner">
          <div className="trust-banner-badge">
            <Sparkles size={16} className="trust-sparkle-icon" aria-hidden="true" />
            <span>CAM KẾT 3 KHÔNG TẠI LOCALMATE</span>
          </div>
          <p className="trust-banner-text">
            <strong>Không bắt buộc biết kỹ thuật</strong> — <strong>Không phát sinh phụ phí ẩn</strong> — <strong>Không giữ tài khoản của khách hàng</strong>. Nghiệm thu hài lòng 100% mới thanh toán.
          </p>
        </div>
      </Container>

      <style>{`
        .process-section {
          padding: clamp(3.5rem, 5.5vw, 5.5rem) 0;
          background-color: #fbfcfb;
          border-bottom: 1px solid #e5e7eb;
          position: relative;
        }

        .process-flow-wrapper {
          margin-bottom: 2.75rem;
          position: relative;
        }

        .process-pipeline-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
        }

        /* Responsive Desktop: Horizontal Timeline */
        @media (min-width: 1024px) {
          .process-pipeline-list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
            align-items: stretch;
          }
        }

        .process-step-item {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          position: relative;
        }

        @media (min-width: 1024px) {
          .process-step-item {
            flex-direction: column;
            gap: 0.85rem;
          }
        }

        /* Stepper Node & Connector */
        .step-tracker-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          position: relative;
        }

        @media (min-width: 1024px) {
          .step-tracker-header {
            flex-direction: row;
            width: 100%;
            margin-bottom: 0.25rem;
          }
        }

        .step-badge-node {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.95rem;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.12);
          z-index: 2;
          flex-shrink: 0;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .step-step-item:hover .step-badge-node {
          transform: scale(1.06);
        }

        .badge-node-final {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary-dark);
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.28);
        }

        /* Desktop horizontal connector */
        .step-connector-desktop {
          display: none;
        }

        @media (min-width: 1024px) {
          .step-connector-desktop {
            display: flex;
            align-items: center;
            flex: 1;
            margin: 0 0.35rem;
            position: relative;
          }

          .connector-line-fill {
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, #86efac 0%, #bbf7d0 100%);
            border-radius: 2px;
          }

          .connector-arrow-icon {
            color: var(--color-primary);
            margin-left: -2px;
            opacity: 0.75;
          }
        }

        /* Mobile vertical connector spine */
        .step-connector-mobile-spine {
          display: block;
          width: 2px;
          flex: 1;
          background: linear-gradient(180deg, #86efac 0%, #dcfce7 100%);
          margin-top: 0.35rem;
          margin-bottom: -0.35rem;
          border-radius: 2px;
        }

        @media (min-width: 1024px) {
          .step-connector-mobile-spine {
            display: none;
          }
        }

        /* Step Card */
        .step-content-card {
          flex: 1;
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 1.25rem 1.15rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .step-content-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(13, 118, 71, 0.07);
          border-color: #86efac;
        }

        .card-final-highlight {
          background: linear-gradient(180deg, #ffffff 0%, #f6fcf8 100%);
          border: 2px solid var(--color-primary);
          box-shadow: 0 3px 12px rgba(13, 118, 71, 0.1);
        }

        .card-final-highlight:hover {
          border-color: var(--color-primary);
          box-shadow: 0 8px 22px rgba(13, 118, 71, 0.15);
        }

        /* Card Header Bar */
        .card-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .step-icon-bubble {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          border: 1px solid var(--color-primary-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-bubble-final {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary-dark);
        }

        .step-badge-code {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.725rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #64748b;
        }

        .final-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: #dcfce7;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          letter-spacing: 0.02em;
        }

        /* Card Typography */
        .step-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0 0 0.35rem 0;
          letter-spacing: -0.01em;
          text-wrap: balance;
        }

        .step-card-subtitle {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          line-height: 1.45;
          margin: 0 0 0.65rem 0;
          text-wrap: pretty;
        }

        .step-card-desc {
          font-size: 0.835rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0 0 1rem 0;
          text-wrap: pretty;
          flex: 1;
        }

        /* Footer & Evidence Pill */
        .step-card-footer {
          margin-top: auto;
        }

        .step-evidence-pill {
          font-size: 0.75rem;
          font-weight: 600;
          color: #334155;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 3px solid var(--color-primary);
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          line-height: 1.4;
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          text-wrap: pretty;
        }

        .pill-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Trust Banner Callout */
        .process-trust-banner {
          max-width: 860px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #bbf7d0;
          border-radius: 14px;
          padding: 1.15rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.65rem;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.05);
        }

        @media (min-width: 640px) {
          .process-trust-banner {
            border-radius: 999px;
            padding: 0.95rem 2rem;
            flex-direction: row;
            text-align: left;
            gap: 1.15rem;
          }
        }

        .trust-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: var(--color-primary-dark);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          white-space: nowrap;
          flex-shrink: 0;
          letter-spacing: 0.03em;
        }

        .trust-sparkle-icon {
          color: var(--color-primary);
        }

        .trust-banner-text {
          font-size: 0.875rem;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.5;
          text-wrap: pretty;
        }

        .trust-banner-text strong {
          color: var(--color-navy);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};
