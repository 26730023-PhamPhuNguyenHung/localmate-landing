import React from 'react';
import { Container } from '../ui/Container';
import {
  ShieldCheck,
  Clock,
  Layers,
  Zap,
  CheckCircle2,
  Phone,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { PHILOSOPHY_PILLARS_DATA } from '../../data/operationsData';
import { CONTACT_INFO } from '../../data/landingContent';

const iconMap: Record<string, any> = {
  Clock,
  Layers,
  Zap,
  ShieldCheck
};

export const PhilosophySection: React.FC = () => {
  return (
    <section className="philosophy-section" id="triet-ly">
      <Container size="lg">
        <div className="philosophy-split-wrapper">
          {/* Left Column: Editorial Manifesto (Sticky on Desktop) */}
          <div className="philosophy-left-col">
            <div className="philosophy-sticky-box">
              <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem' }}>
                <ShieldCheck size={14} /> TRIẾT LÝ VẬN HÀNH THỰC TẾ
              </span>

              <h2 className="philosophy-main-title">
                Không cố bán thêm phần mềm. Tập trung làm việc được hoàn thành.
              </h2>

              <p className="philosophy-lead-desc">
                Doanh nghiệp nhỏ và các đội ngũ kinh doanh không cần mua thêm những phần mềm đắt đỏ để rồi bỏ xó. Bạn chỉ cần tận dụng đúng công cụ, đúng người hỗ trợ và triển khai dứt điểm đến tận cùng.
              </p>

              {/* Manifesto Card */}
              <div className="manifesto-card">
                <div className="manifesto-tag">
                  <Sparkles size={14} color="var(--color-primary)" />
                  <span>NGUYÊN TẮC CỐT LÕI</span>
                </div>
                <p className="manifesto-quote">
                  “Bạn bán sản phẩm &amp; tìm kiếm khách hàng. Localmate lo trọn gói phần kỹ thuật, kết nối công cụ và hiện diện địa phương phía sau.”
                </p>
                <div className="manifesto-meta">
                  <CheckCircle2 size={15} color="var(--color-primary)" />
                  <span>Nghiệm thu hài lòng mới thanh toán — Bàn giao 100% tài khoản</span>
                </div>
              </div>

              {/* Direct Action Link */}
              <div className="philosophy-cta-row">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="philosophy-hotline-btn"
                  title="Gọi trực tiếp cho đội ngũ kỹ thuật"
                >
                  <Phone size={16} />
                  <span>Trao đổi trực tiếp: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Architectural Rows */}
          <div className="philosophy-right-col">
            <div className="philosophy-rows-container">
              {PHILOSOPHY_PILLARS_DATA.map((item, index) => {
                const IconComponent = iconMap[item.iconName] || ShieldCheck;
                const num = `0${index + 1}`;

                return (
                  <div key={item.id} className="philosophy-row-item">
                    <div className="row-item-header">
                      <div className="row-item-num-wrap">
                        <span className="row-num">{num}</span>
                        <div className="row-icon-pill">
                          <IconComponent size={18} color="var(--color-primary)" />
                        </div>
                      </div>
                      <div className="row-title-wrap">
                        <h3 className="row-title">{item.title}</h3>
                        <span className="row-summary">{item.summary}</span>
                      </div>
                    </div>

                    <div className="row-item-body">
                      <p className="row-detail">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .philosophy-section {
          padding: clamp(3.5rem, 5.5vw, 5.5rem) 0;
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
        }

        .philosophy-split-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        @media (min-width: 992px) {
          .philosophy-split-wrapper {
            grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
            gap: 3.5rem;
          }
        }

        /* Left Column */
        .philosophy-left-col {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 992px) {
          .philosophy-sticky-box {
            position: sticky;
            top: 96px;
          }
        }

        .philosophy-main-title {
          font-size: clamp(1.75rem, 3.2vw, 2.35rem);
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.25;
          letter-spacing: -0.02em;
          text-wrap: balance;
          margin: 0 0 1rem 0;
        }

        .philosophy-lead-desc {
          font-size: clamp(0.925rem, 1.1vw, 1.025rem);
          color: var(--color-text-muted);
          line-height: 1.65;
          text-wrap: pretty;
          margin: 0 0 1.5rem 0;
        }

        /* Manifesto Card */
        .manifesto-card {
          background-color: #f8faf9;
          border: 1px solid #d1fae5;
          border-left: 4px solid var(--color-primary);
          border-radius: 12px;
          padding: 1.25rem 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .manifesto-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.725rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--color-primary-dark);
        }

        .manifesto-quote {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.5;
          margin: 0;
        }

        .manifesto-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-top: 0.25rem;
        }

        .philosophy-cta-row {
          display: flex;
          align-items: center;
        }

        .philosophy-hotline-btn {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--color-primary);
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 700;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 2px 6px rgba(13, 118, 71, 0.15);
        }

        .philosophy-hotline-btn:hover {
          background-color: var(--color-primary-hover);
          transform: translateY(-1px);
        }

        /* Right Column Numbered Items */
        .philosophy-rows-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid var(--color-border);
        }

        .philosophy-row-item {
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          transition: background-color 0.2s ease, padding-left 0.2s ease;
        }

        .philosophy-row-item:hover {
          padding-left: 0.5rem;
        }

        .row-item-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        @media (min-width: 640px) {
          .row-item-header {
            flex-direction: row;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        .row-item-num-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .row-num {
          font-size: 1.5rem;
          font-weight: 900;
          color: #94a3b8;
          line-height: 1;
          letter-spacing: -0.02em;
          min-width: 2.25rem;
        }

        .row-icon-pill {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .row-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .row-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.3;
          margin: 0;
        }

        .row-summary {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          line-height: 1.4;
        }

        .row-item-body {
          padding-left: 0;
        }

        @media (min-width: 640px) {
          .row-item-body {
            padding-left: calc(2.25rem + 0.75rem + 36px + 1rem);
          }
        }

        .row-detail {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          text-wrap: pretty;
          margin: 0;
        }
      `}</style>
    </section>
  );
};
