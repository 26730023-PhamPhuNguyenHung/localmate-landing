import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { BreadcrumbItem } from '../seo/SEOHead';
import { Solution } from '../../data/solutionsData';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  PhoneCall,
  Compass
} from 'lucide-react';

export interface SolutionHeroProps {
  solution?: Solution;
  title?: string;
  demandTitle?: string;
  badge?: string;
  painPointPill?: string;
  description?: string;
  targetAudience?: string[];
  breadcrumbs?: BreadcrumbItem[];
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SolutionHero: React.FC<SolutionHeroProps> = ({
  solution,
  title: propTitle,
  demandTitle: propDemandTitle,
  badge: propBadge,
  painPointPill: propPainPointPill,
  description: propDescription,
  targetAudience: propTargetAudience,
  breadcrumbs: propBreadcrumbs,
  onOpenConsultForm
}) => {
  const title = propTitle || solution?.title || 'Giải Pháp LocalMate';
  const demandTitle = propDemandTitle || solution?.promise || propTitle || solution?.title || '';
  const badge = propBadge || solution?.badge || 'Giải Pháp Cốt Lõi';
  const painPointPill = propPainPointPill || solution?.customerProblem || 'Khách hàng khó tìm thấy hoặc thiếu tin cậy';
  const description = propDescription || solution?.summary || solution?.subtitle || '';
  
  const targetAudience = propTargetAudience || [
    'Hộ kinh doanh cá thể & cửa hàng bán lẻ',
    'Cơ sở dịch vụ, phòng khám & xưởng sản xuất',
    'Doanh nghiệp vừa và nhỏ (SME) tại địa phương'
  ];

  const breadcrumbs: BreadcrumbItem[] = propBreadcrumbs || [
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: title, url: solution?.slug || '/giai-phap' }
  ];

  const handleConsult = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(title);
    } else {
      const el = document.getElementById('tu-van-giai-phap');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/lien-he';
      }
    }
  };

  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('quy-trinh');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#fbfcfb',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: '1.75rem',
        paddingBottom: '3.5rem',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} />

        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge & Pain-point Pill Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1.25rem'
            }}
          >
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
                borderRadius: 'var(--radius-full)'
              }}
            >
              <Sparkles size={14} />
              {badge}
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#991b1b',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                maxWidth: '100%',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}
            >
              <AlertCircle size={14} style={{ color: '#dc2626', flexShrink: 0 }} />
              <span>Điểm đau: {painPointPill}</span>
            </span>
          </div>

          {/* Solution Demand-Driven Headline */}
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3.4vw, 2.65rem)',
              lineHeight: 1.25,
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              textWrap: 'pretty'
            }}
          >
            {demandTitle}
          </h1>

          {/* Subtitle / Description */}
          {description && (
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                lineHeight: 1.65,
                color: 'var(--color-text)',
                maxWidth: '820px',
                margin: '0 auto 1.75rem auto',
                textWrap: 'pretty'
              }}
            >
              {description}
            </p>
          )}

          {/* Target Audience Chips */}
          {targetAudience.length > 0 && (
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                padding: '0.9rem 1.25rem',
                marginBottom: '2rem',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                maxWidth: '100%',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
              }}
            >
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Phù hợp với cơ sở & mô hình:
              </span>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}
              >
                {targetAudience.map((aud, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '8px'
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--color-primary)' }} />
                    {aud}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem'
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleConsult}
              style={{
                minHeight: '52px',
                padding: '0 1.75rem',
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
              }}
            >
              <PhoneCall size={18} />
              <span>Trao đổi việc bạn đang cần</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="white"
              size="lg"
              onClick={handleScrollToProcess}
              style={{
                minHeight: '52px',
                padding: '0 1.5rem',
                fontSize: '0.95rem'
              }}
            >
              <Compass size={18} style={{ color: 'var(--color-primary)' }} />
              <span>Xem quy trình triển khai</span>
            </Button>
          </div>

          {/* Trust Guarantees Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '0.85rem',
              color: 'var(--color-text-muted)',
              paddingTop: '1rem',
              borderTop: '1px dashed var(--color-border)'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--color-text)' }}>
              <Clock size={15} style={{ color: 'var(--color-primary)' }} />
              Demo xem trước 0đ trong 24h
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--color-text)' }}>
              <ShieldCheck size={15} style={{ color: 'var(--color-primary)' }} />
              Kỹ thuật viên 1-1 hỗ trợ tại chỗ
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--color-text)' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--color-primary)' }} />
              Bàn giao 100% tài khoản chính chủ
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
