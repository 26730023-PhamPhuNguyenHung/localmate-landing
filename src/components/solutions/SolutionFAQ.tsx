import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SolutionFAQ as SolutionFAQType } from '../../data/solutionsData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export interface SolutionFAQProps {
  faqs?: SolutionFAQType[];
  heading?: string;
  subheading?: string;
}

export const SolutionFAQ: React.FC<SolutionFAQProps> = ({
  faqs,
  heading = 'Giải Đáp Thắc Mắc Thường Gặp Về Giải Pháp',
  subheading = 'Những câu hỏi thực tế nhất mà các chủ cửa hàng và doanh nghiệp địa phương thường trao đổi cùng LocalMate.'
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#ffffff',
        padding: '4.5rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="md">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-soft)',
              border: '1px solid var(--color-primary-border)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.85rem'
            }}
          >
            <HelpCircle size={14} /> CÂU HỎI THƯỜNG GẶP
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.8vw, 2.15rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              lineHeight: 1.3,
              marginBottom: '0.85rem',
              textWrap: 'pretty'
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text)',
              lineHeight: 1.6,
              textWrap: 'pretty'
            }}
          >
            {subheading}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  border: isOpen ? '1px solid var(--color-primary-border)' : '1px solid var(--color-border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: isOpen ? '0 2px 8px rgba(13, 118, 71, 0.05)' : 'none'
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleIndex(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.25rem 1.35rem',
                    backgroundColor: isOpen ? 'var(--color-primary-soft)' : '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease'
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isOpen ? 'var(--color-primary-dark)' : 'var(--color-navy)',
                      lineHeight: 1.45,
                      textWrap: 'pretty'
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#ffffff' : 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    <ChevronDown size={16} style={{ color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)' }} />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    style={{
                      padding: '1.25rem 1.35rem',
                      backgroundColor: '#ffffff',
                      borderTop: '1px solid var(--color-border)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.65,
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

        {/* Still have questions note */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <span>Còn câu hỏi khác chưa được giải đáp? </span>
          <a
            href="https://zalo.me/0834422439"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              textDecoration: 'underline'
            }}
          >
            Nhắn tin Zalo trực tiếp với kỹ thuật viên
          </a>
        </div>
      </Container>
    </section>
  );
};
