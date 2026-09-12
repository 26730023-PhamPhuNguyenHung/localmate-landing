import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { Link } from '../layout/Router';

interface CapabilityContextBoxProps {
  solutionName?: string;
  solutionUrl?: string;
  customMessage?: string;
}

export const CapabilityContextBox: React.FC<CapabilityContextBoxProps> = ({
  solutionName = 'Được khách hàng tìm thấy trên Google & AI',
  solutionUrl = '/giai-phap/duoc-tim-thay',
  customMessage
}) => {
  return (
    <div
      style={{
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px',
        padding: '0.9rem 1.25rem',
        marginBottom: '1.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.85rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 320px' }}>
        <div
          style={{
            backgroundColor: '#dcfce7',
            color: '#15803d',
            borderRadius: '8px',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Layers size={18} />
        </div>
        <div style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.5 }}>
          {customMessage ? (
            <span>{customMessage}</span>
          ) : (
            <>
              Đây là một năng lực chuyên sâu trực thuộc Giải pháp:{' '}
              <strong style={{ color: '#14532d' }}>[{solutionName}]</strong> của Localmate. Phù hợp khi bạn muốn tối ưu sâu khía cạnh này.
            </>
          )}
        </div>
      </div>
      <Link
        to={solutionUrl}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: '#ffffff',
          border: '1px solid #86efac',
          color: '#166534',
          fontSize: '0.825rem',
          fontWeight: 700,
          padding: '0.45rem 0.95rem',
          borderRadius: '8px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}
      >
        <span>Về giải pháp cha</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
};
