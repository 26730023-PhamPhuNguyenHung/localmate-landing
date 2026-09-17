import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../layout/Router';
import { BreadcrumbItem } from '../seo/SEOHead';

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  noMargin?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maxTitleWidth?: string | number;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  noMargin = false,
  className = '',
  style,
  maxTitleWidth
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`breadcrumbs-nav ${className}`.trim()}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.35rem 0.45rem',
        fontSize: '0.8125rem',
        color: 'var(--color-text-muted)',
        marginBottom: noMargin ? 0 : '1.25rem',
        lineHeight: 1.4,
        ...style
      }}
    >
      <Link
        to="/"
        className="breadcrumb-item-link"
        title="Quay lại Trang chủ"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          textDecoration: 'none',
          fontWeight: 500
        }}
      >
        <Home size={13} style={{ flexShrink: 0 }} />
        <span>Trang chủ</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={item.url + idx}>
            <ChevronRight
              size={12}
              style={{ color: '#cbd5e1', flexShrink: 0 }}
              aria-hidden="true"
            />
            {isLast ? (
              <span
                aria-current="page"
                className="breadcrumb-current-title"
                title={item.name}
                style={{
                  color: 'var(--color-navy)',
                  fontWeight: 600,
                  ...(maxTitleWidth ? { maxWidth: maxTitleWidth } : {})
                }}
              >
                {item.name}
              </span>
            ) : (
              <Link
                to={item.url}
                className="breadcrumb-item-link"
                title={item.name}
                style={{
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
