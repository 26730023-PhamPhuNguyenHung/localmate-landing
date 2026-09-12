import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
  pill?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  href,
  pill = false,
  className = '',
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--btn-primary-bg)',
          color: 'var(--btn-primary-text)',
          border: 'none',
          boxShadow: 'var(--btn-primary-shadow)',
          fontWeight: 700
        };
      case 'secondary':
      case 'outline':
        return {
          backgroundColor: 'var(--btn-secondary-bg)',
          color: 'var(--btn-secondary-text)',
          border: '1px solid var(--btn-secondary-border)',
          fontWeight: 600
        };
      case 'white':
        return {
          backgroundColor: '#ffffff',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          fontWeight: 600,
          boxShadow: 'var(--shadow-sm)'
        };
      case 'ghost':
        return {
          backgroundColor: 'var(--btn-ghost-bg)',
          color: 'var(--btn-ghost-text)',
          border: '1px solid transparent',
          fontWeight: 600
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.45rem 1rem',
          fontSize: 'var(--font-size-sm, 0.875rem)',
          minHeight: 'var(--btn-tap-target, 44px)'
        };
      case 'lg':
        return {
          padding: '0.85rem 1.65rem',
          fontSize: 'var(--font-size-body-lg, 1.05rem)',
          minHeight: 'var(--btn-height-desktop, 52px)'
        };
      case 'md':
      default:
        return {
          padding: '0.65rem 1.35rem',
          fontSize: 'var(--font-size-body, 0.9375rem)',
          minHeight: 'var(--btn-min-height, 48px)'
        };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: pill ? 'var(--radius-full)' : 'var(--btn-radius, 12px)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    maxWidth: '100%',
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    lineHeight: 1.2,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style
  };

  if (href) {
    return (
      <a href={href} style={combinedStyles} className={`btn-custom btn-${variant} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button style={combinedStyles} className={`btn-custom btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};
