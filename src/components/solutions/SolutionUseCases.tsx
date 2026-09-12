import React from 'react';
import { Container } from '../ui/Container';
import { SolutionUseCase } from '../../data/solutionsData';
import {
  Briefcase,
  Store,
  Utensils,
  Stethoscope,
  Wrench,
  Coffee,
  Flame,
  Smile,
  HeartPulse,
  Truck,
  Car,
  Check,
  Building2
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Utensils,
  Coffee,
  Flame,
  Stethoscope,
  Smile,
  HeartPulse,
  Wrench,
  Truck,
  Car,
  Store,
  Building2,
  Briefcase
};

export interface SolutionUseCasesProps {
  useCases?: SolutionUseCase[];
  heading?: string;
  subheading?: string;
}

export const SolutionUseCases: React.FC<SolutionUseCasesProps> = ({
  useCases,
  heading = 'Kịch Bản Ứng Dụng Thực Tế Cho Từng Ngành Nghề',
  subheading = 'Dù bạn vận hành cửa hàng ăn uống, cơ sở dịch vụ, phòng khám hay xưởng gia công, giải pháp đều được tinh chỉnh sát với hành vi mua hàng của khách địa phương.'
}) => {
  if (!useCases || useCases.length === 0) return null;

  return (
    <section
      id="nganh-nghe"
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
            <Briefcase size={14} /> TÌNH HUỐNG THỰC CHIẾN
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

        {/* Use Cases Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {useCases.map((uc, idx) => {
            const customer = uc.targetCustomer || (uc as any).industryName || 'Cơ sở kinh doanh';
            const iconName = (uc as any).iconName;
            const IconComp = iconName && ICON_MAP[iconName] ? ICON_MAP[iconName] : Store;
            const keySetup: string[] = (uc as any).keySetup || [
              'Khởi tạo và ghim định vị chuẩn xác',
              'Chuẩn hóa bảng giá & thông tin liên hệ',
              'Tối ưu nút gọi Hotline và Chat Zalo'
            ];
            const result = uc.result || (uc as any).resultHighlight || '';

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
                  {/* Top Bar: Icon & Name */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-primary-soft)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--color-navy)',
                        margin: 0
                      }}
                    >
                      {customer}
                    </h3>
                  </div>

                  {/* Scenario */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Bối cảnh thực tế:
                    </span>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.6,
                        margin: 0
                      }}
                    >
                      {uc.scenario}
                    </p>
                  </div>

                  {/* Key Setup Items */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Thiết lập cốt lõi:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {keySetup.map((item, sIdx) => (
                        <div
                          key={sIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.4rem',
                            fontSize: '0.825rem',
                            color: 'var(--color-navy)',
                            lineHeight: 1.45
                          }}
                        >
                          <Check
                            size={14}
                            style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result Highlight Box */}
                {result && (
                  <div
                    style={{
                      backgroundColor: 'var(--color-primary-soft)',
                      border: '1px solid var(--color-primary-border)',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem'
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.25rem'
                      }}
                    >
                      Kết quả chuyển đổi:
                    </span>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-primary-dark)',
                        lineHeight: 1.45
                      }}
                    >
                      {result}
                    </span>
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
