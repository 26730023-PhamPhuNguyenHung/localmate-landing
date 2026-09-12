import React, { useState } from 'react';
import { Container } from '../ui/Container';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  Globe,
  Zap,
  TrendingUp,
  FileText,
  HelpCircle,
  Filter
} from 'lucide-react';
import { useRouter } from '../layout/Router';
import { TASK_GROUPS_DATA, TaskGroupItem } from '../../data/operationsData';

interface ProblemMapperSectionProps {
  onSelectTask?: (serviceName: string) => void;
}

type FilterCategory = 'all' | 'no-web' | 'has-web-no-leads' | 'growth-ads' | 'maintenance';

export const ProblemMapperSection: React.FC<ProblemMapperSectionProps> = ({ onSelectTask }) => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterButtons: { key: FilterCategory; label: string; badge?: string }[] = [
    { key: 'all', label: 'Tất cả bài toán' },
    { key: 'no-web', label: '1. Chưa có website', badge: 'Web 24h' },
    { key: 'has-web-no-leads', label: '2. Có web chưa ra khách', badge: 'Tối ưu <1s' },
    { key: 'growth-ads', label: '3. Muốn chạy Ads / SEO', badge: '0% kê giá' },
    { key: 'maintenance', label: '4. Đội kỹ thuật túc trực', badge: 'Hỗ trợ 2h' },
  ];

  const filteredTasks = activeFilter === 'all'
    ? TASK_GROUPS_DATA
    : TASK_GROUPS_DATA.filter((item) => item.problemType === activeFilter || item.problemType === 'consultation');

  const handleTaskAction = (item: TaskGroupItem) => {
    if (onSelectTask) {
      onSelectTask(item.serviceNameForLead);
    } else {
      navigate('/lien-he');
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={18} />;
      case 'Zap':
        return <Zap size={18} />;
      case 'TrendingUp':
        return <TrendingUp size={18} />;
      case 'FileText':
        return <FileText size={18} />;
      case 'HelpCircle':
      default:
        return <HelpCircle size={18} />;
    }
  };

  return (
    <section className="section-component problem-mapper-section" id="can-lam-gi" aria-label="Phân loại bài toán theo nhu cầu thực tế">
      <Container>
        <div className="editorial-split">
          {/* CỘT TRÁI: Heading & Định hướng phân loại */}
          <div className="editorial-split-sticky">
            <span className="section-eyebrow">
              <Sparkles size={14} /> PHÂN LOẠI BÀI TOÁN THỰC TẾ
            </span>
            <h2 className="editorial-heading">
              Bạn đang gặp khó khăn ở giai đoạn nào?
            </h2>
            <p className="editorial-sub">
              Không cần nhớ thuật ngữ lập trình hay kỹ thuật phức tạp. Hãy chọn đúng tình trạng thực tế của cơ sở kinh doanh, LocalMate sẽ cử nhân sự phụ trách phương án và báo giá cố định trong 24 giờ.
            </p>

            <div className="problem-filter-nav" role="tablist" aria-label="Bộ lọc phân loại bài toán">
              {filterButtons.map((btn) => {
                const isActive = activeFilter === btn.key;
                return (
                  <button
                    key={btn.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-pill-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFilter(btn.key)}
                  >
                    <span className="filter-pill-label">{btn.label}</span>
                    {btn.badge && <span className="filter-pill-badge">{btn.badge}</span>}
                  </button>
                );
              })}
            </div>

            <div className="editorial-support-note">
              <div className="editorial-dot" />
              <span>Dựng web demo 0đ duyệt trực tiếp trên điện thoại trước khi ký kết.</span>
            </div>
          </div>

          {/* CỘT PHẢI: Danh sách giải pháp theo bài toán */}
          <div className="editorial-solutions-wrap" role="list">
            {filteredTasks.map((item, index) => {
              const stepFormatted = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={item.id}
                  className="problem-solution-card"
                  role="listitem"
                  aria-label={`${item.title} - ${item.priceTag}`}
                >
                  {/* Top Bar: Step + Title + Price Tag */}
                  <div className="card-top-bar">
                    <div className="card-identity">
                      <span className="card-step-num" aria-hidden="true">{stepFormatted}</span>
                      <div className="card-title-group">
                        <div className="card-badge-row">
                          <span className="card-category-badge">
                            {renderIcon(item.iconName)}
                            {item.categoryBadge}
                          </span>
                          <span className="card-sla-badge">
                            <Clock size={12} /> {item.slaTime}
                          </span>
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                      </div>
                    </div>

                    <div className="card-price-box">
                      <span className="card-price-label">Chi phí trọn gói</span>
                      <span className="card-price-val">{item.priceTag}</span>
                    </div>
                  </div>

                  {/* Nỗi đau thực tế (Pain Point) */}
                  <div className="card-painpoint-box">
                    <div className="painpoint-label">
                      <AlertCircle size={15} className="painpoint-icon" />
                      <span>Vấn đề thường gặp:</span>
                    </div>
                    <p className="painpoint-text">{item.painPoint}</p>
                  </div>

                  {/* Giải pháp thực thi cụ thể */}
                  <div className="card-solution-body">
                    <h4 className="solution-headline">{item.headline}</h4>
                    <p className="solution-desc">{item.description}</p>

                    <ul className="solution-features-list">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="solution-feature-item">
                          <CheckCircle2 size={16} className="feature-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Row */}
                  <div className="card-action-footer">
                    <button
                      type="button"
                      className="btn btn-primary problem-cta-btn"
                      onClick={() => handleTaskAction(item)}
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight size={16} />
                    </button>
                    <span className="action-guarantee-note">
                      Nghiệm thu thực tế mới thanh toán • Báo giá cố định 100%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <style>{`
        .problem-mapper-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          scrollbar-gutter: stable;
        }

        .editorial-heading {
          font-size: var(--font-size-h2);
          color: var(--ink);
          font-weight: 800;
          line-height: var(--line-height-h2);
          margin-bottom: 1rem;
          text-wrap: balance;
        }

        .editorial-sub {
          font-size: var(--font-size-body);
          color: var(--ink-soft);
          line-height: var(--line-height-body);
          margin-bottom: 1.5rem;
          text-wrap: pretty;
        }

        /* Filter Pills Nav */
        .problem-filter-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .filter-pill-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--ink-body);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .filter-pill-btn:hover {
          background-color: var(--color-surface-subtle);
          border-color: var(--color-border-strong);
        }

        .filter-pill-btn.active {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary);
          color: var(--color-primary-dark);
          font-weight: 700;
        }

        .filter-pill-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-xs);
          background-color: var(--color-surface-subtle);
          color: var(--ink-muted);
        }

        .filter-pill-btn.active .filter-pill-badge {
          background-color: #ffffff;
          color: var(--color-primary);
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
          text-wrap: pretty;
        }

        .editorial-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-primary);
          flex-shrink: 0;
        }

        /* Solutions Wrap */
        .editorial-solutions-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
        }

        .problem-solution-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.25rem, 2.5vw, 1.75rem);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .problem-solution-card:hover {
          border-color: var(--color-primary-border);
          box-shadow: 0 6px 20px rgba(13, 118, 71, 0.06);
        }

        /* Top Bar */
        .card-top-bar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 1.15rem;
          border-bottom: 1px solid var(--color-border);
          flex-wrap: wrap;
        }

        .card-identity {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          flex: 1 1 280px;
        }

        .card-step-num {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-variant-numeric: tabular-nums;
        }

        .card-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .card-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .card-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-xs);
        }

        .card-sla-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--ink-soft);
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-xs);
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .card-price-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        .card-price-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .card-price-val {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.02em;
        }

        /* Pain Point Box */
        .card-painpoint-box {
          margin-top: 1rem;
          background-color: #fff7ed;
          border-left: 3px solid #f97316;
          padding: 0.75rem 1rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        .painpoint-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78125rem;
          font-weight: 700;
          color: #c2410c;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .painpoint-icon {
          color: #ea580c;
          flex-shrink: 0;
        }

        .painpoint-text {
          font-size: 0.875rem;
          color: #9a3412;
          margin: 0;
          line-height: 1.45;
          text-wrap: pretty;
        }

        /* Solution Body */
        .card-solution-body {
          margin-top: 1rem;
        }

        .solution-headline {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          margin: 0 0 0.35rem 0;
          text-wrap: pretty;
        }

        .solution-desc {
          font-size: 0.9375rem;
          color: var(--ink-body);
          line-height: 1.55;
          margin: 0 0 1rem 0;
          text-wrap: pretty;
        }

        .solution-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
        }

        @media (min-width: 640px) {
          .solution-features-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .solution-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--ink-body);
          line-height: 1.4;
        }

        .feature-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        /* Action Footer */
        .card-action-footer {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .problem-cta-btn {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-guarantee-note {
          font-size: 0.8125rem;
          color: var(--ink-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .card-price-box {
            align-items: flex-start;
            text-align: left;
            width: 100%;
          }

          .card-action-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .problem-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .action-guarantee-note {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemMapperSection;
