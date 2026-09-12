import React from 'react';
import { Container } from '../ui/Container';
import { SolutionOutcome } from '../../data/solutionsData';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export interface SolutionOutcomesProps {
  outcomes?: (SolutionOutcome | { metric: string; label?: string; title?: string; description: string; highlight?: string })[];
  heading?: string;
  subheading?: string;
}

export const SolutionOutcomes: React.FC<SolutionOutcomesProps> = ({
  outcomes,
  heading = 'Kết Quả Thực Tế Hướng Tới Sau Khi Chuẩn Hóa Giải Pháp',
  subheading = 'Không phải là những lời hứa mơ hồ, đây là những chỉ số đo lường được trực tiếp bằng doanh thu và cuộc gọi thật của khách hàng.'
}) => {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section
      id="ket-qua"
      style={{
        backgroundColor: '#fbfcfb',
        padding: '4.5rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
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
            <TrendingUp size={14} /> HIỆU QUẢ ĐO LƯỜNG ĐƯỢC
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

        {/* Outcomes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {outcomes.map((item, index) => {
            const title = (item as any).title || (item as any).label || '';
            const highlight = (item as any).highlight;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Metric Big Number */}
                  <div
                    style={{
                      fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)',
                      fontWeight: 900,
                      color: 'var(--color-primary)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {item.metric}
                  </div>

                  {/* Outcome Title / Label */}
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      lineHeight: 1.4,
                      marginBottom: '0.75rem',
                      textWrap: 'pretty'
                    }}
                  >
                    {title}
                  </h3>

                  {/* Outcome Description */}
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.6,
                      marginBottom: highlight ? '1.25rem' : '0',
                      textWrap: 'pretty'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                {highlight && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-primary-dark)',
                      backgroundColor: 'var(--color-primary-soft)',
                      border: '1px solid var(--color-primary-border)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '8px',
                      alignSelf: 'flex-start',
                      marginTop: '1rem'
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--color-primary)' }} />
                    <span>{highlight}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
