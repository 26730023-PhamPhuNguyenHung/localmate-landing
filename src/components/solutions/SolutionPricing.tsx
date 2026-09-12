import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SolutionOffer } from '../../data/solutionsData';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export interface SolutionPricingProps {
  packages?: SolutionOffer[];
  heading?: string;
  subheading?: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SolutionPricing: React.FC<SolutionPricingProps> = ({
  packages,
  heading = 'Bảng Giá Triển Khai Minh Bạch — Tách Rõ Khởi Tạo & Duy Trì',
  subheading = 'Tách biệt rõ ràng giữa chi phí khởi tạo một lần và chi phí duy trì định kỳ. Khảo sát và dựng demo xem trước hoàn toàn miễn phí.',
  onOpenConsultForm
}) => {
  if (!packages || packages.length === 0) return null;

  return (
    <section
      id="bang-gia"
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
            <Sparkles size={14} /> BÁO GIÁ NIÊM YẾT CÔNG KHAI
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

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
            marginBottom: '3rem'
          }}
        >
          {packages.map((pkg) => {
            const isPopular = pkg.isPopular;
            const setupPrice = (pkg as any).setupPrice || pkg.priceDisplay;
            const maintenancePrice = (pkg as any).maintenancePrice || pkg.unit || '0đ / tháng (Không phí bắt buộc)';
            const targetFit = (pkg as any).targetFit || pkg.description;
            const features = (pkg as any).features || pkg.highlights || [];
            const ctaText = pkg.ctaText || 'Nhận Tư Vấn Gói Này';

            return (
              <div
                key={pkg.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: isPopular ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderRadius: '18px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isPopular ? '0 8px 24px rgba(13, 118, 71, 0.12)' : '0 1px 3px rgba(0,0,0,0.02)',
                  position: 'relative',
                  transform: isPopular ? 'translateY(-4px)' : 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 6px rgba(13, 118, 71, 0.3)'
                    }}
                  >
                    {pkg.badge || 'Được Đăng Ký Nhiều Nhất'}
                  </div>
                )}

                <div>
                  {/* Package Badge & Name */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    {!isPopular && pkg.badge && (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--color-primary-dark)',
                          backgroundColor: 'var(--color-primary-soft)',
                          border: '1px solid var(--color-primary-border)',
                          padding: '0.2rem 0.65rem',
                          borderRadius: '6px',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--color-navy)',
                        lineHeight: 1.35,
                        margin: 0
                      }}
                    >
                      {pkg.name}
                    </h3>
                    {targetFit && (
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-muted)',
                          marginTop: '0.4rem',
                          lineHeight: 1.5
                        }}
                      >
                        {targetFit}
                      </p>
                    )}
                  </div>

                  {/* Price Block: Setup & Maintenance clearly split */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      padding: '1.15rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {/* Setup Price */}
                    <div style={{ marginBottom: '0.65rem' }}>
                      <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                        Chi phí triển khai:
                      </span>
                      <div
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 900,
                          color: 'var(--color-navy)',
                          lineHeight: 1.2
                        }}
                      >
                        {setupPrice}
                      </div>
                    </div>

                    {/* Maintenance Price */}
                    <div
                      style={{
                        paddingTop: '0.65rem',
                        borderTop: '1px dashed var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text)' }}>Phí duy trì / chu kỳ:</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                        {maintenancePrice}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: 'var(--color-navy)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em'
                      }}
                    >
                      Bao gồm trọn gói:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {features.map((feat: string, fIdx: number) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.45rem',
                            fontSize: '0.875rem',
                            color: 'var(--color-text)',
                            lineHeight: 1.45
                          }}
                        >
                          <Check
                            size={16}
                            style={{
                              color: 'var(--color-primary)',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={isPopular ? 'primary' : 'white'}
                  size="md"
                  fullWidth
                  onClick={() => onOpenConsultForm && onOpenConsultForm(pkg.name)}
                  style={{
                    minHeight: '48px',
                    fontWeight: 700
                  }}
                >
                  <span>{ctaText}</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Price Transparency Guarantee */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--color-navy)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--color-primary)' }} />
            Cam kết giá cố định theo hợp đồng • Nghiệm thu hài lòng mới thanh toán
          </div>
          <div>
            Cần cấu hình chuyên biệt theo chuỗi nhiều cơ sở? Liên hệ KTV LocalMate để khảo sát tận nơi.
          </div>
        </div>
      </Container>
    </section>
  );
};
