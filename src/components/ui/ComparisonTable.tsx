import React from 'react';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';
import { ComparisonTableBlockData } from '../../cms/types';

interface ComparisonTableProps {
  data?: ComparisonTableBlockData;
  title?: string;
  description?: string;
  recommendationSummary?: string;
  stickyFirstColumn?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  data,
  title,
  description,
  recommendationSummary,
  stickyFirstColumn = true,
  className = '',
  children
}) => {
  // If custom raw children (e.g., standard HTML table or markdown output) are passed
  if (!data) {
    return (
      <div className={`table-responsive-wrapper ${className}`}>
        {/* Mobile scroll hint */}
        <div className="table-scroll-hint" aria-hidden="true">
          <span>👈 Vuốt sang ngang để xem đầy đủ bảng so sánh 👉</span>
        </div>
        <div className={`table-responsive ${stickyFirstColumn ? 'table-sticky-first' : ''}`}>
          {children}
        </div>
      </div>
    );
  }

  const { options, criteria } = data;
  const displayTitle = title || data.title;
  const displayDesc = description || data.description;
  const displaySummary = recommendationSummary || data.recommendationSummary;

  const renderCellValue = (val: string) => {
    if (!val) return <span className="cell-muted">—</span>;
    const lower = val.trim().toLowerCase();

    // Positive check indicators
    if (lower === 'có' || lower === 'yes' || lower === 'true' || lower === '✓') {
      return (
        <span className="cell-icon-badge cell-badge-positive" title="Có hỗ trợ">
          <Check size={16} strokeWidth={2.5} />
          <span className="sr-only">Có</span>
        </span>
      );
    }

    // Negative indicators
    if (lower === 'không' || lower === 'no' || lower === 'false' || lower === 'x' || lower === '✕') {
      return (
        <span className="cell-icon-badge cell-badge-negative" title="Không hỗ trợ">
          <X size={16} strokeWidth={2.5} />
          <span className="sr-only">Không</span>
        </span>
      );
    }

    return <span>{val}</span>;
  };

  return (
    <div className={`table-responsive-wrapper comparison-block-wrapper ${className}`}>
      {/* Table Header Section */}
      {(displayTitle || displayDesc) && (
        <div className="comparison-header">
          {displayTitle && <h3 className="comparison-title">{displayTitle}</h3>}
          {displayDesc && <p className="comparison-description">{displayDesc}</p>}
        </div>
      )}

      {/* Mobile Scroll Hint Banner */}
      <div className="table-scroll-hint" aria-hidden="true">
        <span>👈 Vuốt sang ngang để xem đối chiếu các gói 👉</span>
      </div>

      {/* Responsive Horizontal Scroll Container */}
      <div className={`table-responsive ${stickyFirstColumn ? 'table-sticky-first' : ''}`}>
        <table className="table-comparison" role="table">
          <thead>
            <tr>
              <th scope="col" className="col-criterion-header">
                Tiêu chí so sánh
              </th>
              {options.map((opt) => (
                <th
                  key={opt.id}
                  scope="col"
                  className={`col-option-header ${opt.isRecommended ? 'is-recommended' : ''}`}
                >
                  {opt.isRecommended && (
                    <div className="recommended-badge">
                      <Sparkles size={13} />
                      <span>{opt.badge || 'Khuyên dùng'}</span>
                    </div>
                  )}
                  {!opt.isRecommended && opt.badge && (
                    <div className="option-badge">{opt.badge}</div>
                  )}
                  <div className="option-name">{opt.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((crit, idx) => (
              <tr key={crit.id || idx} className={crit.isHighlight ? 'row-highlight' : ''}>
                <th scope="row" className="cell-criterion">
                  <div className="criterion-content">
                    <span>{crit.name}</span>
                    {crit.isHighlight && (
                      <span className="criterion-pill">Quan trọng</span>
                    )}
                  </div>
                </th>
                {options.map((opt) => {
                  const val = crit.values[opt.id] || '';
                  return (
                    <td
                      key={opt.id}
                      className={`cell-option-value ${opt.isRecommended ? 'is-recommended' : ''}`}
                    >
                      {renderCellValue(val)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendation Summary Note */}
      {displaySummary && (
        <div className="comparison-summary-card">
          <div className="summary-card-icon">
            <Sparkles size={18} />
          </div>
          <div className="summary-card-body">
            <strong className="summary-card-title">Kết luận & Khuyến nghị:</strong>
            <p className="summary-card-text">{displaySummary}</p>
          </div>
        </div>
      )}
    </div>
  );
};
