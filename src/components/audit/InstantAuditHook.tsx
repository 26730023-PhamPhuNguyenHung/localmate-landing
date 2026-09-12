import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Store, Globe, CheckCircle2 } from 'lucide-react';
import { InstantAuditModal } from './InstantAuditModal';

interface InstantAuditHookProps {
  onOpenDetailedLeadModal?: (storeName: string) => void;
  variant?: 'hero' | 'standalone';
}

const SAMPLE_SUGGESTIONS = [
  'Tiệm Cà Phê Mộc',
  'Nha Khoa Tâm Đức',
  'Tiệm Bánh An An',
  'Spa Thẩm Mỹ Lan Hương'
];

export const InstantAuditHook: React.FC<InstantAuditHookProps> = ({
  onOpenDetailedLeadModal,
  variant = 'hero'
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedInput, setSubmittedInput] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputValue.trim();
    if (!clean) {
      setInputError(true);
      return;
    }
    setInputError(false);
    setSubmittedInput(clean);
    setIsModalOpen(true);
  };

  const handlePickSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    setInputError(false);
    setSubmittedInput(suggestion);
    setIsModalOpen(true);
  };

  return (
    <div className={`instant-audit-hook-container ${variant === 'standalone' ? 'variant-standalone' : 'variant-hero'}`}>
      {/* Form Bar Hook */}
      <form onSubmit={handleSubmit} className={`audit-input-bar ${inputError ? 'has-error' : ''}`}>
        <div className="audit-input-wrapper">
          <Store size={18} className="audit-input-icon" />
          <input
            type="text"
            aria-label="Tên cửa hàng, đường link Facebook hoặc Website"
            placeholder="Nhập tên tiệm, link Facebook hoặc Website hiện có..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (inputError && e.target.value.trim()) setInputError(false);
            }}
            className="audit-text-input"
          />
        </div>

        <button
          type="submit"
          className="audit-cta-btn"
          aria-label="Nhận phân tích và demo không đồng"
        >
          <Sparkles size={16} className="btn-icon" />
          <span className="btn-text">Nhận phân tích &amp; Demo 0đ</span>
          <ArrowRight size={16} className="btn-arrow" />
        </button>
      </form>

      {/* Input Error Message */}
      {inputError && (
        <div className="audit-error-tip">
          Vui lòng nhập tên tiệm, link Facebook hoặc web để hệ thống quét dữ liệu (hoặc chọn gợi ý bên dưới).
        </div>
      )}

      {/* Suggestion Chips & Trust Strip */}
      <div className="audit-footer-strip">
        <div className="audit-suggestions">
          <span className="suggestions-label">Gợi ý thử nhanh:</span>
          {SAMPLE_SUGGESTIONS.map((sug) => (
            <button
              key={sug}
              type="button"
              onClick={() => handlePickSuggestion(sug)}
              className="suggestion-chip"
            >
              {sug}
            </button>
          ))}
        </div>

        <div className="audit-trust-strip">
          <span className="trust-item">
            <CheckCircle2 size={13} className="trust-check" /> Quét 3 tiêu chí cốt lõi trong 30s
          </span>
          <span className="trust-dot">•</span>
          <span className="trust-item">
            <CheckCircle2 size={13} className="trust-check" /> Dựng demo 0đ xem trước
          </span>
          <span className="trust-dot">•</span>
          <span className="trust-item">
            <CheckCircle2 size={13} className="trust-check" /> KTV địa phương hỗ trợ 1-1
          </span>
        </div>
      </div>

      {/* Modal Dialog for Results & KTV Hook */}
      <InstantAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rawInput={submittedInput}
        onOpenDetailedLeadModal={onOpenDetailedLeadModal}
      />

      {/* Scoped CSS (Light mode, Strict NO glassmorphism, Mobile >= 48px touch targets) */}
      <style>{`
        .instant-audit-hook-container {
          width: 100%;
          max-width: 680px;
          margin-bottom: 1.25rem;
        }

        .variant-standalone {
          margin: 0 auto;
          background-color: #ffffff;
          padding: 1.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        .audit-input-bar {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background-color: #ffffff;
          border: 2px solid #cbd5e1;
          border-radius: 12px;
          padding: 0.35rem;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        @media (min-width: 600px) {
          .audit-input-bar {
            flex-direction: row;
            align-items: center;
            border-radius: 9999px;
            padding: 0.35rem 0.45rem 0.35rem 0.75rem;
          }
        }

        .audit-input-bar:focus-within {
          border-color: #0d7647;
          box-shadow: 0 0 0 4px rgba(13, 118, 71, 0.12);
        }

        .audit-input-bar.has-error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
        }

        .audit-input-wrapper {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex: 1;
          min-width: 0;
          padding: 0 0.5rem;
        }

        .audit-input-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .audit-text-input {
          width: 100%;
          min-height: 48px;
          border: none;
          background: transparent;
          font-size: 0.95rem;
          font-weight: 500;
          color: #0f172a;
          outline: none;
          box-sizing: border-box;
        }

        .audit-text-input::placeholder {
          color: #64748b;
          font-size: 0.9rem;
        }

        .audit-cta-btn {
          min-height: 48px;
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 0.75rem 1.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(13, 118, 71, 0.3);
          transition: background-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
        }

        @media (min-width: 600px) {
          .audit-cta-btn {
            border-radius: 9999px;
            min-height: 46px;
          }
        }

        .audit-cta-btn:hover {
          background-color: #095935;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.4);
        }

        .audit-cta-btn:active {
          transform: translateY(0);
        }

        .btn-icon {
          color: #a7f3d0;
          flex-shrink: 0;
        }

        .btn-arrow {
          transition: transform 0.15s ease;
          flex-shrink: 0;
        }

        .audit-cta-btn:hover .btn-arrow {
          transform: translateX(3px);
        }

        .audit-error-tip {
          font-size: 0.8rem;
          font-weight: 600;
          color: #dc2626;
          margin-top: 0.35rem;
          padding-left: 0.5rem;
        }

        /* FOOTER STRIP */
        .audit-footer-strip {
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .audit-suggestions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .suggestions-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
        }

        .suggestion-chip {
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          border-radius: 9999px;
          padding: 0.2rem 0.65rem;
          font-size: 0.74rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }

        .suggestion-chip:hover {
          background-color: #e2e8f0;
          border-color: #94a3b8;
          color: #0f172a;
        }

        .audit-trust-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          font-size: 0.76rem;
          color: #475569;
          font-weight: 500;
          margin-top: 0.15rem;
        }

        .trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .trust-check {
          color: #0d7647;
          flex-shrink: 0;
        }

        .trust-dot {
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};
