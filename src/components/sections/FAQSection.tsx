import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { OPERATION_FAQS_DATA } from '../../data/operationsData';
import { HelpCircle, ChevronDown, PhoneCall, Phone, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';
import { CONTACT_INFO } from '../../data/landingContent';

interface FAQSectionProps {
  onOpenDemoForm?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenDemoForm }) => {
  const { navigate } = useRouter();
  const [openId, setOpenId] = useState<string | null>(OPERATION_FAQS_DATA[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleAction = () => {
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section className="section-component faq-premium-section" id="faq" aria-label="Giải đáp thắc mắc thực tế">
      <div className="container-narrow">
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> GIẢI ĐÁP THẮC MẮC THỰC TẾ
          </span>
          <h2>Những Câu Hỏi Thường Gặp</h2>
          <p className="subtitle">
            Giải đáp minh bạch, thẳng thắn về quy trình làm web demo 0đ, quyền sở hữu tài khoản và chính sách đồng hành sau bàn giao.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="Danh sách câu hỏi thường gặp">
          {OPERATION_FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-row-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger-btn"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <div className={`faq-arrow-circle ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support 1-1 Callout Box */}
        <div className="faq-callout-panel">
          <div className="callout-left-content">
            <h4 className="callout-title">Bạn có thắc mắc riêng cho mô hình tiệm của mình?</h4>
            <p className="callout-sub">
              Đội ngũ kỹ thuật viên LocalMate luôn sẵn sàng trao đổi trực tiếp qua Zalo hoặc Hotline mà không chèo kéo hay thu phụ phí.
            </p>
          </div>

          <div className="callout-actions-row">
            <button
              type="button"
              onClick={handleAction}
              className="btn btn-primary callout-cta-btn"
            >
              <PhoneCall size={16} /> Nhận Tư Vấn Demo 0đ
            </button>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="callout-phone-link">
              Hotline: {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .faq-premium-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-border);
          margin-bottom: 3rem;
        }

        .faq-row-item {
          border-bottom: 1px solid var(--color-border);
          transition: background-color var(--transition-fast);
        }

        .faq-trigger-btn {
          width: 100%;
          padding: 1.5rem 0.5rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-question-text {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.35;
        }

        .faq-row-item.open .faq-question-text {
          color: var(--color-primary-dark);
        }

        .faq-arrow-circle {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background-color: var(--color-surface-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-muted);
          flex-shrink: 0;
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .faq-arrow-circle.rotated {
          transform: rotate(180deg);
          background-color: var(--color-primary-soft);
          color: var(--color-primary);
        }

        .faq-answer-panel {
          padding: 0 0.5rem 1.5rem 0.5rem;
        }

        .faq-answer-text {
          font-size: 1rem;
          color: var(--ink-body);
          line-height: 1.65;
          margin: 0;
        }

        /* Callout Box */
        .faq-callout-panel {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 3vw, 2rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.75rem;
          flex-wrap: wrap;
          box-shadow: var(--shadow-sm);
        }

        .callout-left-content {
          flex: 1 1 300px;
          min-width: 0;
        }

        .callout-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 0.35rem 0;
        }

        .callout-sub {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
        }

        .callout-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .callout-cta-btn {
          min-height: 48px;
        }

        .callout-phone-link {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
        }

        .callout-phone-link:hover {
          text-decoration: underline;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-arrow-circle {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
