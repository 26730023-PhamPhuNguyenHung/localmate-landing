import React from 'react';
import { Container } from '../ui/Container';
import {
  ArrowRight,
  HelpCircle,
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  Users,
  Zap,
  Briefcase,
  CheckCircle2,
  Sparkles,
  type LucideIcon
} from 'lucide-react';
import { useRouter } from '../layout/Router';
import { TASK_GROUPS_DATA, TaskGroupItem } from '../../data/operationsData';

interface ProblemMapperSectionProps {
  onSelectTask?: (serviceName: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  HelpCircle,
  Users,
  Zap,
  Briefcase
};

export const ProblemMapperSection: React.FC<ProblemMapperSectionProps> = ({ onSelectTask }) => {
  const { navigate } = useRouter();

  const handleCardClick = (item: TaskGroupItem) => {
    if (onSelectTask) {
      onSelectTask(item.serviceNameForLead);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section
      style={{
        padding: 'clamp(3rem, 5vw, 4.5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="can-lam-gi"
      aria-label="Chọn nhu cầu thực tế"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto clamp(2rem, 4vw, 3rem) auto', textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            <Sparkles size={14} /> CHỌN THEO NHU CẦU THỰC TẾ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800, margin: '0 0 0.6rem 0', letterSpacing: '-0.02em', textWrap: 'balance', overflowWrap: 'break-word' }}>
            Bạn đang cần giải quyết công việc gì?
          </h2>
          <p className="subtitle" style={{ fontSize: 'var(--font-size-subtitle)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0, textWrap: 'pretty', overflowWrap: 'break-word' }}>
            Không cần biết tên công nghệ hay từ ngữ lập trình phức tạp. Hãy chọn đúng tình trạng bạn đang cần xử lý để nhận giải pháp và mức giá phù hợp nhất.
          </p>
        </div>

        {/* 5 Task Cards Grid */}
        <div className="task-grid-container">
          {TASK_GROUPS_DATA.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || HelpCircle;
            const isWideOnDesktop = index >= 3;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} - ${item.priceTag}`}
                onClick={() => handleCardClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(item);
                  }
                }}
                className={`task-card ${isWideOnDesktop ? 'task-card-span-3' : 'task-card-span-2'}`}
              >
                {/* Top Bar: Step Number, Badge & Price */}
                <div className="task-card-top">
                  <div className="task-badge-group">
                    <span className="task-step-number">{item.stepNumber}</span>
                    <span className="task-category-badge">{item.categoryBadge}</span>
                  </div>
                  <span className="task-price-pill">{item.priceTag}</span>
                </div>

                {/* Main Content */}
                <div className="task-card-body">
                  <div className="task-title-row">
                    <div className="task-icon-box" aria-hidden="true">
                      <IconComponent size={20} color="var(--color-primary)" />
                    </div>
                    <h3 className="task-title">{item.title}</h3>
                  </div>

                  <h4 className="task-headline">{item.headline}</h4>
                  <p className="task-desc">{item.description}</p>

                  {/* Bullet points */}
                  <ul className="task-features-list">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="task-feature-item">
                        <CheckCircle2 size={15} color="var(--color-primary)" className="task-check-icon" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="task-card-action">
                  <span className="task-action-text">{item.ctaLabel}</span>
                  <div className="task-arrow-circle" aria-hidden="true">
                    <ArrowRight size={14} color="var(--color-primary)" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <style>{`
        .task-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .task-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .task-grid-container {
            grid-template-columns: repeat(6, 1fr);
            gap: 1.5rem;
          }

          .task-card-span-2 {
            grid-column: span 2;
          }

          .task-card-span-3 {
            grid-column: span 3;
          }
        }

        .task-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: clamp(1.25rem, 2.5vw, 1.5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
          box-sizing: border-box;
          min-width: 0;
          outline: none;
        }

        .task-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.06);
          border-color: #86efac;
        }

        .task-card:focus-visible {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-soft);
        }

        .task-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .task-badge-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .task-step-number {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          line-height: 1.2;
        }

        .task-category-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #374151;
          background-color: #f3f4f6;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          line-height: 1.2;
        }

        .task-price-pill {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-orange-dark);
          background-color: var(--color-orange-soft);
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          white-space: nowrap;
          border: 1px solid #ffd8be;
          line-height: 1.2;
        }

        .task-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .task-title-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .task-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .task-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.35;
          text-wrap: pretty;
          overflow-wrap: break-word;
        }

        .task-headline {
          font-size: 0.925rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0.2rem 0 0 0;
          line-height: 1.45;
          text-wrap: pretty;
        }

        .task-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
          text-wrap: pretty;
        }

        .task-features-list {
          list-style: none;
          padding: 0;
          margin: 0.65rem 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          border-top: 1px dashed var(--color-border);
          padding-top: 0.75rem;
        }

        .task-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: #374151;
          font-weight: 500;
          line-height: 1.4;
          text-wrap: pretty;
        }

        .task-check-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .task-card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid #f3f4f6;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary);
          transition: color 0.2s ease;
        }

        .task-card:hover .task-card-action {
          color: var(--color-primary-dark);
        }

        .task-arrow-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background-color 0.2s ease;
          flex-shrink: 0;
        }

        .task-card:hover .task-arrow-circle {
          transform: translateX(4px);
          background-color: #bbf7d0;
        }
      `}</style>
    </section>
  );
};

export default ProblemMapperSection;
