import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion } from '../ui/Accordion';
import { OPERATION_FAQS_DATA } from '../../data/operationsData';
import { MessageSquare, PhoneCall, HelpCircle, ArrowRight } from 'lucide-react';
import { useRouter } from '../layout/Router';
import { CONTACT_INFO } from '../../data/landingContent';

interface FAQSectionProps {
  onOpenDemoForm?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenDemoForm }) => {
  const { navigate } = useRouter();

  const handleAction = () => {
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  const accordionItems = OPERATION_FAQS_DATA.map(f => ({
    id: f.id,
    question: f.question,
    answer: f.answer
  }));

  return (
    <section
      id="faq"
      style={{
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        <SectionHeader
          eyebrow="GIẢI ĐÁP THẮC MẮC THỰC TẾ"
          title="Những câu hỏi chủ doanh nghiệp thường quan tâm nhất"
          subtitle="Giải đáp minh bạch, thẳng thắn về quy trình làm web demo 0đ, quyền sở hữu tài khoản và chính sách hỗ trợ sau bàn giao."
        />

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Accordion items={accordionItems} />
        </div>

        {/* Support callout box */}
        <div className="faq-callout-box">
          <div className="faq-callout-left">
            <div className="faq-icon-circle">
              <MessageSquare size={22} color="var(--color-primary)" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                Bạn có câu hỏi riêng cho ngành nghề của mình?
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                Đội ngũ LocalMate sẵn sàng giải đáp 1-1 trực tiếp và tư vấn phương án phù hợp nhất qua Zalo hoặc Hotline.
              </p>
            </div>
          </div>

          <div className="faq-callout-actions">
            <button
              type="button"
              onClick={handleAction}
              className="faq-action-btn"
            >
              <PhoneCall size={16} />
              <span>Nhận tư vấn &amp; Demo 0đ</span>
            </button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="faq-hotline-link"
              title="Gọi hotline trực tiếp"
            >
              Hotline: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </Container>

      <style>{`
        .faq-callout-box {
          max-width: 860px;
          margin: 2.5rem auto 0 auto;
          padding: 1.5rem 1.75rem;
          background-color: #ffffff;
          border: 1px solid #bbf7d0;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.06);
        }

        .faq-callout-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 280px;
        }

        .faq-icon-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .faq-callout-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .faq-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 44px;
          background-color: var(--color-primary);
          color: #ffffff;
          padding: 0.75rem 1.4rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }

        .faq-action-btn:hover {
          background-color: var(--color-primary-hover);
          transform: translateY(-1px);
        }

        .faq-hotline-link {
          font-size: 0.875rem;
          font-weight: 700;
          color: #0f172a;
          text-decoration: none;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .faq-hotline-link:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

