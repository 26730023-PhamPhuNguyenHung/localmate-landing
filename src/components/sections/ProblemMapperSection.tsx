import React from 'react';
import { Container } from '../ui/Container';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';
import { TASK_GROUPS_DATA, TaskGroupItem } from '../../data/operationsData';

interface ProblemMapperSectionProps {
  onSelectTask?: (serviceName: string) => void;
}

export const ProblemMapperSection: React.FC<ProblemMapperSectionProps> = ({ onSelectTask }) => {
  const { navigate } = useRouter();

  const handleRowClick = (item: TaskGroupItem) => {
    if (onSelectTask) {
      onSelectTask(item.serviceNameForLead);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section className="section-component problem-discovery-section" id="can-lam-gi" aria-label="Khám phá dịch vụ theo nhu cầu">
      <Container>
        <div className="editorial-split">
          {/* LEFT: Large sticky heading */}
          <div className="editorial-split-sticky">
            <span className="section-eyebrow">
              <Sparkles size={14} /> CHỌN THEO NHU CẦU THỰC TẾ
            </span>
            <h2 className="editorial-heading">
              Bạn đang cần giải quyết công việc gì?
            </h2>
            <p className="editorial-sub">
              Không cần nhớ thuật ngữ lập trình hay công nghệ phức tạp. Hãy chọn đúng nhu cầu thực tế của tiệm, LocalMate sẽ cử nhân sự phụ trách phương án và báo giá cố định trong 24 giờ.
            </p>
            <div className="editorial-support-note">
              <div className="editorial-dot" />
              <span>Khảo sát phương án & dựng bản web demo 0đ trước khi ký kết.</span>
            </div>
          </div>

          {/* RIGHT: Editorial Rows */}
          <div className="editorial-rows-list" role="list">
            {TASK_GROUPS_DATA.map((item, index) => {
              const stepFormatted = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  className="editorial-service-row"
                  onClick={() => handleRowClick(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRowClick(item);
                    }
                  }}
                  aria-label={`${item.title}: ${item.headline} - Giá ${item.priceTag}`}
                >
                  <div className="row-step-num">{stepFormatted}</div>

                  <div className="row-main-info">
                    <div className="row-title-wrap">
                      <h3 className="row-title">{item.title}</h3>
                      <span className="row-badge">{item.categoryBadge}</span>
                    </div>
                    <p className="row-desc">{item.description}</p>
                  </div>

                  <div className="row-pricing-wrap">
                    <span className="row-price">{item.priceTag}</span>
                    <span className="row-sla">{item.features[0]}</span>
                  </div>

                  <div className="row-arrow-wrap" aria-hidden="true">
                    <ArrowRight size={18} className="row-arrow-icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <style>{`
        .problem-discovery-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }

        .editorial-heading {
          font-size: var(--font-size-h2);
          color: var(--ink);
          font-weight: 800;
          line-height: var(--line-height-h2);
          margin-bottom: 1.25rem;
          text-wrap: balance;
        }

        .editorial-sub {
          font-size: var(--font-size-body);
          color: var(--ink-soft);
          line-height: var(--line-height-body);
          margin-bottom: 2rem;
          text-wrap: pretty;
        }

        .editorial-support-note {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.15rem;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          color: var(--color-primary-dark);
          font-weight: 500;
        }

        .editorial-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-primary);
          flex-shrink: 0;
        }

        .editorial-rows-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          width: 100%;
        }

        .editorial-service-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.875rem;
          padding: clamp(1.25rem, 2vw, 1.6rem);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: transform var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
          cursor: pointer;
          outline: none;
        }

        .editorial-service-row:hover {
          background-color: var(--color-surface-subtle);
          border-color: var(--color-primary-border);
          transform: translateX(4px);
        }

        .editorial-service-row:focus-visible {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-soft);
        }

        @media (min-width: 768px) {
          .editorial-service-row {
            grid-template-columns: 36px 1.4fr 1fr auto;
            align-items: center;
            gap: 1.5rem;
          }
        }

        .row-step-num {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--ink-muted);
          font-variant-numeric: tabular-nums;
        }

        .row-main-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .row-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .row-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
        }

        .row-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .row-desc {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.5;
        }

        .row-pricing-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .row-price {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
        }

        .row-sla {
          font-size: 0.8125rem;
          color: var(--ink-muted);
        }

        .row-arrow-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-soft);
          transition: transform var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);
          flex-shrink: 0;
        }

        .editorial-service-row:hover .row-arrow-wrap {
          transform: translateX(4px);
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        .editorial-service-row:hover .row-arrow-icon {
          color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default ProblemMapperSection;
