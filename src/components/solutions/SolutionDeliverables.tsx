import React from 'react';
import { Container } from '../ui/Container';
import { SolutionDeliverable } from '../../data/solutionsData';
import {
  PackageCheck,
  ShieldCheck,
  CheckCircle2,
  KeyRound
} from 'lucide-react';

export interface SolutionDeliverablesProps {
  deliverables?: SolutionDeliverable[];
  heading?: string;
  subheading?: string;
}

export const SolutionDeliverables: React.FC<SolutionDeliverablesProps> = ({
  deliverables,
  heading = 'Những Gì Bạn Thực Sự Nhận Được Khi Bàn Giao',
  subheading = 'Minh bạch 100% về tài sản số. Toàn bộ tài khoản, dữ liệu và công cụ đều thuộc về quyền làm chủ 100% tài khoản chính chủ của bạn.'
}) => {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section
      id="ban-giao"
      style={{
        backgroundColor: '#ffffff',
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
            <PackageCheck size={14} /> TÀI SẢN BÀN GIAO THỰC TẾ
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

        {/* Deliverables Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {deliverables.map((item, idx) => {
            const ownershipTag = (item as any).ownershipTag || 'Bàn giao quyền sở hữu chính chủ 100%';

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  {/* Ownership Badge */}
                  <div style={{ marginBottom: '1rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        backgroundColor: 'var(--color-primary-soft)',
                        border: '1px solid var(--color-primary-border)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      <KeyRound size={12} />
                      {ownershipTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      lineHeight: 1.4,
                      marginBottom: '0.65rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.55,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {item.items && item.items.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.45rem',
                          fontSize: '0.85rem',
                          color: 'var(--color-text)',
                          lineHeight: 1.45
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }}
                        />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ownership Commitment Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: '14px',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                Cam Kết Không Giam Giữ Tài Khoản — 100% Thuộc Về Bạn
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Email của bạn là người sở hữu cao nhất. LocalMate chỉ giữ vai trò kỹ thuật viên hỗ trợ theo yêu cầu.
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: '0.825rem',
              fontWeight: 700,
              color: 'var(--color-primary-dark)',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            Biên Bản Bàn Giao Ký Kết Rõ Ràng
          </div>
        </div>
      </Container>
    </section>
  );
};
