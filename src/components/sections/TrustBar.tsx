import React from 'react';
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
    <section className="trust-strip-section" role="region" aria-label="Cam kết cốt lõi">
      <div className="container">
        <div className="trust-strip">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="trust-strip-item" key={idx}>
                <div className="trust-strip-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <div className="trust-strip-content">
                  <div className="trust-strip-title">{item.title}</div>
                  <div className="trust-strip-desc">{item.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .trust-strip-section {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          position: relative;
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
