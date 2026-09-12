import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SolutionProcessStep } from '../../data/solutionsData';
import { Compass, Clock, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

export interface SolutionProcessProps {
  steps?: SolutionProcessStep[];
  heading?: string;
  subheading?: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SolutionProcess: React.FC<SolutionProcessProps> = ({
  steps,
  heading = 'Quy Trình Triển Khai Gọn Gàng Từ A Đến Z',
  subheading = 'Rõ ràng từng mốc thời gian, có sản phẩm xem trước miễn phí trước khi bạn quyết định chi trả bất kỳ khoản phí nào.',
  onOpenConsultForm
}) => {
  if (!steps || steps.length === 0) return null;

  const handleStart = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm('Quy trình triển khai giải pháp');
    } else {
      const el = document.getElementById('tu-van-giai-phap');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/lien-he';
      }
    }
  };

  return (
    <section
      id="quy-trinh"
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
            <Compass size={14} /> LỘ TRÌNH RÕ RÀNG
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

        {/* Process Stepper Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {steps.map((item, index) => {
            const stepNum = item.step || `0${index + 1}`;
            const title = item.title;
            const time = item.duration;
            const deliverable = (item as any).deliverable || 'Nghiệm thu đạt chuẩn yêu cầu';

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  {/* Header: Step Number & Time */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {stepNum}
                    </div>

                    {time && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.775rem',
                          fontWeight: 700,
                          color: 'var(--color-primary-dark)',
                          backgroundColor: 'var(--color-primary-soft)',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '6px'
                        }}
                      >
                        <Clock size={12} />
                        {time}
                      </span>
                    )}
                  </div>

                  {/* Step Name */}
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      lineHeight: 1.4,
                      marginBottom: '0.65rem'
                    }}
                  >
                    {title}
                  </h3>

                  {/* Step Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    padding: '0.75rem 0.9rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.45rem',
                    fontSize: '0.825rem'
                  }}
                >
                  <CheckCircle2
                    size={14}
                    style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }}
                  />
                  <span style={{ color: 'var(--color-navy)', lineHeight: 1.45 }}>
                    <strong>Mục tiêu:</strong> {deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Callout */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-primary-border)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto',
            boxShadow: '0 4px 14px rgba(13, 118, 71, 0.08)'
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: 'var(--color-navy)',
              marginBottom: '0.5rem'
            }}
          >
            Bắt Đầu Bằng Bản Demo Xem Trước 0đ
          </h3>
          <p
            style={{
              fontSize: '0.925rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              marginBottom: '1.25rem'
            }}
          >
            Không ràng buộc hợp đồng. Kỹ thuật viên LocalMate sẽ khảo sát, định vị và gửi demo trực quan qua Zalo trong 24h để bạn duyệt trước.
          </p>
          <Button variant="primary" size="md" onClick={handleStart}>
            <PhoneCall size={16} />
            <span>Đăng ký nhận Demo 0đ ngay</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
};
