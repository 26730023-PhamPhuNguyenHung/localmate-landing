import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Wrench, MapPin, KeyRound } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Báo giá trước khi làm',
      subtitle: 'Minh bạch 100%, không chi phí ẩn'
    },
    {
      icon: Wrench,
      title: 'Tận dụng thứ đã có',
      subtitle: 'Không ép mua thêm phần mềm thừa'
    },
    {
      icon: MapPin,
      title: 'Đội ngũ KTV địa phương',
      subtitle: 'Hỗ trợ trực tiếp & xử lý online 24/7'
    },
    {
      icon: KeyRound,
      title: 'Bàn giao 100% tài khoản',
      subtitle: 'Khách hàng toàn quyền làm chủ'
    }
  ];

  return (
    <div className="trust-bar-ribbon" id="cam-ket-nhanh" role="region" aria-label="Cam kết cốt lõi">
      <Container size="lg">
        <div className="trust-bar-container">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={idx}>
                <div className="trust-bar-item">
                  <div className="trust-bar-icon-box">
                    <Icon size={18} className="trust-bar-icon" />
                  </div>
                  <div className="trust-bar-info">
                    <strong className="trust-bar-title">{item.title}</strong>
                    <span className="trust-bar-sub">{item.subtitle}</span>
                  </div>
                </div>
                {idx < trustPoints.length - 1 && (
                  <div className="trust-bar-separator" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Container>

      <style>{`
        .trust-bar-ribbon {
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 0;
          position: relative;
          z-index: 10;
        }

        .trust-bar-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.25rem;
          align-items: center;
        }

        .trust-bar-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .trust-bar-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: var(--color-primary-soft, #f4fbf7);
          border: 1px solid rgba(13, 118, 71, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary, #0d7647);
        }

        .trust-bar-info {
          display: flex;
          flex-direction: column;
          line-height: 1.35;
        }

        .trust-bar-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-navy, #0f172a);
          letter-spacing: -0.01em;
          text-wrap: pretty;
        }

        .trust-bar-sub {
          font-size: 0.75rem;
          color: var(--color-text-muted, #64748b);
          font-weight: 500;
          text-wrap: pretty;
        }

        .trust-bar-separator {
          display: none;
        }

        @media (min-width: 900px) {
          .trust-bar-container {
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
          }

          .trust-bar-item {
            flex: 1;
            justify-content: flex-start;
          }

          .trust-bar-separator {
            display: block;
            width: 1px;
            height: 28px;
            background-color: var(--color-border, #e5e7eb);
            margin: 0 0.75rem;
            flex-shrink: 0;
          }
        }

        @media (max-width: 480px) {
          .trust-bar-ribbon {
            padding: 0.875rem 0;
          }
          .trust-bar-container {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .trust-bar-title {
            font-size: 0.825rem;
          }
          .trust-bar-sub {
            font-size: 0.725rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
