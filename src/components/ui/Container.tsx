import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'wide' | 'full';
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  style = {}
}) => {
  const maxWidths: Record<string, string> = {
    sm: '800px',
    md: '1020px',
    lg: 'var(--container-max, 1440px)',
    wide: 'var(--container-wide, 1440px)',
    full: '100%'
  };

  return (
    <div
      style={{
        maxWidth: maxWidths[size] || maxWidths.lg,
        width: '100%',
        marginInline: 'auto',
        paddingInline: 'var(--space-container-px, 32px)',
        boxSizing: 'border-box',
        ...style
      }}
      className={`container-box ${className}`}
    >
      {children}
    </div>
  );
};
