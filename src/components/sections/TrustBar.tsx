import React from 'react';
import { ShieldCheck, KeyRound, CheckCircle2, Clock, Check } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: CheckCircle2,
      badge: 'Cam kết 01',
      title: 'Bàn giao mới thanh toán',
      subtitle: 'Xem demo trước 0đ, nghiệm thu hài lòng mới trả tiền'
    },
    {
      icon: KeyRound,
      badge: 'Cam kết 02',
      title: '100% chính chủ',
      subtitle: 'Tên miền, hosting, code, tài khoản Maps & Ads thuộc về bạn'
    },
    {
      icon: ShieldCheck,
      badge: 'Cam kết 03',
      title: 'Báo giá trước không phí ẩn',
      subtitle: 'Báo giá trọn gói niêm yết rõ ràng, không phát sinh phụ phí'
    },
    {
      icon: Clock,
      badge: 'Cam kết 04',
      title: 'Đồng hành 5 năm',
      subtitle: 'Kỹ thuật viên địa phương hỗ trợ 1-1, bảo hành hạ tầng lâu dài'
    }
  ];

  return (
    <section className="trust-strip-section" role="region" aria-label="Cam kết cốt lõi LocalMate">
      <div className="container">
        <div className="trust-strip-grid">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="trust-strip-card" key={idx}>
                <div className="trust-strip-icon-wrapper" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.4} className="trust-icon" />
                </div>
                <div className="trust-strip-text">
                  <div className="trust-strip-header">
                    <span className="trust-strip-badge">
                      <CheckCircle2 size={11} strokeWidth={2.5} />
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="trust-strip-title">{item.title}</h3>
                  <p className="trust-strip-desc">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .trust-strip-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border);
          padding: 1.25rem 0;
          position: relative;
          z-index: 10;
        }

        .trust-strip-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .trust-strip-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        .trust-strip-card {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          padding: 0.875rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-surface);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .trust-strip-card:hover {
          background-color: var(--color-surface-subtle);
          border-color: var(--color-border-subtle);
        }

        .trust-strip-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary);
        }

        .trust-strip-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 0;
        }

        .trust-strip-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .trust-strip-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .trust-strip-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .trust-strip-desc {
          font-size: 0.8125rem;
          color: var(--ink-muted);
          margin: 0;
          line-height: 1.4;
          text-wrap: pretty;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
