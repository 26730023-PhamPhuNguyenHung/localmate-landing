import React from 'react';
import { Container } from '../ui/Container';
import {
  AlertTriangle,
  MapPinOff,
  FileQuestion,
  Percent,
  ShieldAlert,
  CalendarX,
  Wrench,
  HelpCircle,
  Stethoscope,
  XCircle,
  AlertCircle
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  MapPinOff,
  FileQuestion,
  Percent,
  ShieldAlert,
  AlertTriangle,
  CalendarX,
  Wrench,
  HelpCircle,
  Stethoscope,
  AlertCircle
};

export interface ProblemItem {
  id?: string;
  title: string;
  description?: string;
  impact?: string;
  iconName?: string;
}

export interface SolutionProblemsProps {
  problems?: (string | ProblemItem)[];
  heading?: string;
  subheading?: string;
}

export const SolutionProblems: React.FC<SolutionProblemsProps> = ({
  problems,
  heading = 'Những Nút Thắt Đang Khiến Cơ Sở Của Bạn Thất Thoát Khách Hàng',
  subheading = 'Đa số các tiệm và cơ sở kinh doanh địa phương đang gặp phải ít nhất 2 trong số những vấn đề này mỗi ngày.'
}) => {
  if (!problems || problems.length === 0) return null;

  return (
    <section
      id="van-de"
      style={{
        backgroundColor: '#ffffff',
        padding: '4rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#dc2626',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.85rem'
            }}
          >
            <AlertTriangle size={14} /> THỰC TRẠNG PHỔ BIẾN
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
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              textWrap: 'pretty'
            }}
          >
            {subheading}
          </p>
        </div>

        {/* Problems Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {problems.map((prob, index) => {
            const isString = typeof prob === 'string';
            const title = isString ? prob : prob.title;
            const description = !isString ? prob.description : undefined;
            const impact = !isString ? prob.impact : 'Khách hàng phân vân, chuyển sang đối thủ có thông tin rõ ràng hơn';
            const iconName = !isString ? prob.iconName : undefined;
            const IconComp = iconName && ICON_MAP[iconName] ? ICON_MAP[iconName] : AlertCircle;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#fcfdfd',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  {/* Top Header: Badge Number & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: '#fee2e2',
                        color: '#dc2626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 800,
                        color: '#94a3b8',
                        letterSpacing: '0.05em'
                      }}
                    >
                      VẤN ĐỀ 0{index + 1}
                    </span>
                  </div>

                  {/* Problem Title */}
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      lineHeight: 1.45,
                      marginBottom: description ? '0.75rem' : '1.25rem',
                      textWrap: 'pretty'
                    }}
                  >
                    {title}
                  </h3>

                  {/* Problem Description if available */}
                  {description && (
                    <p
                      style={{
                        fontSize: '0.925rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                        textWrap: 'pretty'
                      }}
                    >
                      {description}
                    </p>
                  )}
                </div>

                {/* Practical Impact Box */}
                <div
                  style={{
                    backgroundColor: '#fff5f5',
                    border: '1px solid #fed7d7',
                    borderRadius: '10px',
                    padding: '0.75rem 0.95rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#c53030',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Hệ quả thực tế:
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#9b2c2c',
                      lineHeight: 1.4
                    }}
                  >
                    {impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
