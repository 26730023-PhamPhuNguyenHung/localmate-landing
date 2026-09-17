import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleFaqProps {
  faqs?: FaqItem[];
  title?: string;
  description?: string;
}

export const ArticleFaq: React.FC<ArticleFaqProps> = ({
  faqs = [],
  title = 'Câu Hỏi Thường Gặp (FAQ)',
  description = 'Giải đáp ngắn gọn, thực tế cho những băn khoăn hay gặp nhất của chủ cơ sở kinh doanh.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      style={{
        marginTop: '3.5rem',
        padding: '1.5rem 1.75rem',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '12px'
      }}
      aria-labelledby="faq-section-title"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: '#edf7f1',
            color: '#0d7647',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <HelpCircle size={20} />
        </div>
        <h2 id="faq-section-title" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0, textWrap: 'pretty' }}>
          {title}
        </h2>
      </div>

      {description && (
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          {description}
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: isOpen ? '1.5px solid #0d7647' : '1px solid #e2e8f0',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease'
              }}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  backgroundColor: isOpen ? '#fbfcfb' : '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  minHeight: '44px'
                }}
              >
                <span style={{ fontSize: '0.975rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.45, textWrap: 'pretty' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: isOpen ? '#0d7647' : '#64748b',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    flexShrink: 0
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0.5rem 1.25rem 1.25rem 1.25rem',
                    fontSize: '0.95rem',
                    color: '#334155',
                    lineHeight: 1.7,
                    borderTop: '1px solid #f1f5f9',
                    textWrap: 'pretty'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
