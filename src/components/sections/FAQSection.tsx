import React, { useState } from 'react';
import { OPERATION_FAQS_DATA } from '../../data/operationsData';
import { ChevronDown, Plus, Minus, PhoneCall, Sparkles, MessageCircleQuestion } from 'lucide-react';
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

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'chi-phi':
        return 'Chi phí trọn gói';
      case 'mo-hinh':
        return 'Quy trình & Triển khai';
      case 'bao-hanh':
        return 'Sở hữu & Hỗ trợ';
      default:
        return 'Cam kết thực tế';
    }
  };

  return (
    <section className="section-component faq-saosang-section" id="faq" aria-label="Giải đáp thắc mắc thực tế">
      <div className="container-narrow">
        {/* Header tối giản theo phong cách SaosangEdu */}
        <div className="section-header text-center">
          <span className="section-eyebrow">
            <Sparkles size={14} /> GIẢI ĐÁP MINH BẠCH 100%
          </span>
          <h2 className="faq-main-heading">
            Những Băn Khoăn Của Chủ Kinh Doanh
          </h2>
          <p className="subtitle mx-auto">
            Không dùng thuật ngữ kỹ thuật phức tạp. Trả lời trực diện, minh bạch về quyền sở hữu tài khoản, chi phí duy trì và quy trình bàn giao thực tế.
          </p>
        </div>

        {/* Accordion List tối giản */}
        <div className="faq-accordion-list" role="region" aria-label="Danh sách câu hỏi thường gặp">
          {OPERATION_FAQS_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={faq.id}
                className={`faq-accordion-item ${isOpen ? 'active-item' : ''}`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                >
                  <div className="faq-q-left">
                    <span className="faq-q-index" aria-hidden="true">
                      {indexFormatted}
                    </span>
                    <div className="faq-q-content">
                      <span className="faq-category-chip">{getCategoryName(faq.category)}</span>
                      <h3 className="faq-q-title">{faq.question}</h3>
                    </div>
                  </div>

                  <div className={`faq-toggle-icon ${isOpen ? 'open' : ''}`} aria-hidden="true">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="faq-answer-container"
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support 1-1 Callout Box tinh tế */}
        <div className="faq-callout-card">
          <div className="callout-content-group">
            <div className="callout-badge-row">
              <span className="callout-pill">
                <MessageCircleQuestion size={13} /> Kỹ thuật viên đồng hành
              </span>
            </div>
            <h4 className="callout-headline">Bạn có mô hình kinh doanh đặc thù cần giải đáp riêng?</h4>
            <p className="callout-desc">
              Kỹ thuật viên LocalMate luôn sẵn sàng nghe máy và trao đổi trực tiếp qua Zalo hoặc Hotline mà không ép mua, không chèo kéo dịch vụ thừa.
            </p>
          </div>

          <div className="callout-cta-group">
            <button
              type="button"
              onClick={handleAction}
              className="btn btn-primary callout-primary-btn"
            >
              <PhoneCall size={16} /> Nhận Tư Vấn Demo 0đ
            </button>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="callout-phone-pill">
              Hotline: <strong>{CONTACT_INFO.phoneDisplay}</strong>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .faq-saosang-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          scrollbar-gutter: stable;
        }

        .faq-main-heading {
          font-size: var(--font-size-h2);
          font-weight: 800;
          color: var(--ink);
          line-height: var(--line-height-h2);
          margin-bottom: 0.75rem;
          text-wrap: balance;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }

        .faq-accordion-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          overflow: hidden;
        }

        .faq-accordion-item:hover {
          border-color: var(--color-border-strong);
        }

        .faq-accordion-item.active-item {
          border-color: var(--color-primary-border);
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.05);
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          transition: background-color var(--transition-fast);
        }

        .faq-question-btn:hover {
          background-color: #f8faf9;
        }

        .faq-q-left {
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
          flex: 1;
        }

        .faq-q-index {
          font-size: 0.875rem;
          font-weight: 800;
          color: var(--ink-muted);
          font-variant-numeric: tabular-nums;
          padding-top: 0.25rem;
          min-width: 22px;
        }

        .faq-accordion-item.active-item .faq-q-index {
          color: var(--color-primary);
        }

        .faq-q-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .faq-category-chip {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-xs);
          display: inline-block;
          width: fit-content;
        }

        .faq-q-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.4;
          margin: 0;
          text-wrap: pretty;
        }

        .faq-accordion-item.active-item .faq-q-title {
          color: var(--color-primary-dark);
        }

        .faq-toggle-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-soft);
          flex-shrink: 0;
          transition: transform var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);
        }

        .faq-accordion-item.active-item .faq-toggle-icon {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
        }

        .faq-answer-container {
          padding: 0 1.5rem 1.35rem 3.5rem;
          animation: faqFadeIn 0.2s ease-in-out;
        }

        @keyframes faqFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-answer-inner {
          border-top: 1px solid var(--color-border);
          padding-top: 1rem;
        }

        .faq-answer-text {
          font-size: 0.9375rem;
          color: var(--ink-body);
          line-height: 1.65;
          margin: 0;
          text-wrap: pretty;
        }

        /* Callout Card */
        .faq-callout-card {
          background-color: #ffffff;
          border: 1px solid var(--color-primary-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 3vw, 2.25rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .callout-content-group {
          flex: 1 1 340px;
          min-width: 0;
        }

        .callout-badge-row {
          margin-bottom: 0.5rem;
        }

        .callout-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .callout-headline {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 0.4rem 0;
          text-wrap: pretty;
        }

        .callout-desc {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
          text-wrap: pretty;
        }

        .callout-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .callout-primary-btn {
          min-height: 46px;
        }

        .callout-phone-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          font-size: 0.9375rem;
          color: var(--ink);
          text-decoration: none;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .callout-phone-pill strong {
          color: var(--color-primary);
          margin-left: 0.25rem;
        }

        .callout-phone-pill:hover {
          background-color: var(--color-surface);
          border-color: var(--color-primary-border);
        }

        @media (max-width: 640px) {
          .faq-question-btn {
            padding: 1rem;
            gap: 0.75rem;
          }

          .faq-q-left {
            gap: 0.75rem;
          }

          .faq-answer-container {
            padding: 0 1rem 1.15rem 1rem;
          }

          .callout-cta-group {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .callout-primary-btn, .callout-phone-pill {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
