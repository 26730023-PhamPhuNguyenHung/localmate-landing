import React from 'react';
import { Container } from '../ui/Container';
import { SolutionCapability } from '../../data/solutionsData';
import {
  Cpu,
  MapPin,
  Zap,
  PhoneCall,
  Code,
  Star,
  ShieldCheck,
  FileText,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Smartphone,
  Layout,
  Globe,
  Layers
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  MapPin,
  Zap,
  PhoneCall,
  Code,
  Star,
  ShieldCheck,
  FileText,
  Cpu,
  Smartphone,
  Layout,
  Globe,
  Layers,
  Sparkles
};

export interface SolutionCapabilitiesProps {
  capabilities?: SolutionCapability[];
  heading?: string;
  subheading?: string;
}

export const SolutionCapabilities: React.FC<SolutionCapabilitiesProps> = ({
  capabilities,
  heading = 'Khối Năng Lực & Modules Kỹ Thuật — Giải Thích Bằng Tiếng Người',
  subheading = 'Chúng tôi biến những thuật ngữ công nghệ phức tạp (Schema, Cloudflare, Maps API...) thành những lợi ích cụ thể, đời thường mà bạn hiểu và nắm bắt được ngay.'
}) => {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section
      id="nang-luc"
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
            <Cpu size={14} /> MODULES KỸ THUẬT THỰC CHIẾN
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

        {/* Capabilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {capabilities.map((cap, idx) => {
            const iconName = cap.iconName;
            const IconComp = iconName && ICON_MAP[iconName] ? ICON_MAP[iconName] : Sparkles;
            const badge = cap.badge;
            const title = cap.name;
            const plainMeaning = cap.shortDescription;
            const detailDesc = cap.description;

            return (
              <div
                key={cap.id || idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  {/* Top Header: Tag & Icon */}
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
                        backgroundColor: 'var(--color-primary-soft)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={22} />
                    </div>

                    {badge && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--color-navy)',
                          backgroundColor: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px'
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Technical Name */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      lineHeight: 1.4,
                      marginBottom: '0.85rem'
                    }}
                  >
                    {title}
                  </h3>

                  {/* Plain Language Explanation Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        marginBottom: '0.3rem'
                      }}
                    >
                      <HelpCircle size={13} style={{ color: 'var(--color-primary)' }} />
                      <span>Nghĩa là gì cho cơ sở của bạn?</span>
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-navy)',
                        lineHeight: 1.55,
                        margin: 0
                      }}
                    >
                      {plainMeaning}
                    </p>
                  </div>
                </div>

                {/* Practical Benefit / Detail */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.45rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.5,
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed var(--color-border)'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    <strong style={{ color: 'var(--color-navy)' }}>Hiệu quả:</strong> {detailDesc}
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
