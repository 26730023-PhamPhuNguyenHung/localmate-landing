import React from 'react';
import { Container } from '../ui/Container';
import { InstantAuditHook } from '../audit/InstantAuditHook';
import { Zap, MapPin, Smartphone, Sparkles, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface FreeAuditSectionProps {
  onOpenDemoForm?: (storeName?: string) => void;
}

export const FreeAuditSection: React.FC<FreeAuditSectionProps> = ({ onOpenDemoForm }) => {
  return (
    <section
      id="free-audit"
      className="free-audit-section"
      style={{
        padding: 'clamp(3.5rem, 5.5vw, 5rem) 0',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="audit-section-header">
          <div className="audit-section-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>INSTANT BUSINESS &amp; WEBSITE AUDIT</span>
          </div>
          <h2 className="audit-section-title">
            Chẩn Đoán Sức Khỏe Số &amp; Nhận Demo 0đ Tức Thì
          </h2>
          <p className="audit-section-desc">
            Không cần đăng ký phức tạp. Nhập tên cửa hàng, đường link Facebook hoặc Website hiện có để LocalMate tự động quét <strong>3 tiêu chí sống còn</strong> giúp bạn thu hút khách địa phương.
          </p>
        </div>

        {/* Audit Input Hook Card */}
        <div className="audit-hook-card-wrapper">
          <InstantAuditHook onOpenDetailedLeadModal={onOpenDemoForm} variant="standalone" />
        </div>

        {/* 3 Core Pillars Explainers Grid */}
        <div className="audit-pillars-grid">
          {/* Pillar 1: Tốc độ mở trang */}
          <div className="audit-pillar-card">
            <div className="pillar-icon-box pillar-speed">
              <Zap size={22} />
            </div>
            <h3 className="pillar-title">1. Tốc Độ Mở Trang</h3>
            <p className="pillar-text">
              Khách hàng địa phương lướt 4G trên điện thoại. Nếu website hoặc trang đích tải chậm quá 3 giây, 53% khách hàng sẽ thoát ra ngay lập tức.
            </p>
            <div className="pillar-stat">
              <span className="stat-highlight">Dưới 1.0 giây</span>
              <span className="stat-sub">chuẩn tốc độ LocalMate cam kết</span>
            </div>
          </div>

          {/* Pillar 2: Thứ hạng Google Maps */}
          <div className="audit-pillar-card">
            <div className="pillar-icon-box pillar-map">
              <MapPin size={22} />
            </div>
            <h3 className="pillar-title">2. Thứ Hạng Google Maps</h3>
            <p className="pillar-text">
              Hơn 70% khách tìm quán ăn, spa, phòng khám hoặc cửa hàng bằng Google Maps. Hồ sơ chưa tối ưu từ khóa sẽ bị đối thủ lân cận lấn át.
            </p>
            <div className="pillar-stat">
              <span className="stat-highlight">Top 3 Map Pack</span>
              <span className="stat-sub">mục tiêu định vị bán kính 2-5km</span>
            </div>
          </div>

          {/* Pillar 3: Trải nghiệm di động */}
          <div className="audit-pillar-card">
            <div className="pillar-icon-box pillar-mobile">
              <Smartphone size={22} />
            </div>
            <h3 className="pillar-title">3. Trải Nghiệm Trên Điện Thoại</h3>
            <p className="pillar-text">
              Website phải có nút gọi Hotline và nhắn Zalo 1-chạm dính chân màn hình. Menu và bảng giá rõ ràng để khách quyết định gọi đặt lịch trong 10 giây.
            </p>
            <div className="pillar-stat">
              <span className="stat-highlight">Tăng 2.5x</span>
              <span className="stat-sub">tỷ lệ bấm gọi đặt hàng thực tế</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scoped CSS (Light mode, clean, no glassmorphism) */}
      <style>{`
        .audit-section-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 2.5rem auto;
        }

        .audit-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: #065f46;
          background-color: #e8f5e9;
          border: 1px solid #c6ebd4;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 0.85rem;
          letter-spacing: 0.03em;
        }

        .badge-icon {
          color: #0d7647;
        }

        .audit-section-title {
          font-size: clamp(1.85rem, 3.2vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0 0 0.85rem 0;
          text-wrap: balance;
        }

        .audit-section-desc {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          text-wrap: pretty;
        }

        .audit-hook-card-wrapper {
          max-width: 720px;
          margin: 0 auto 3rem auto;
        }

        .audit-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .audit-pillars-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .audit-pillar-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }

        .audit-pillar-card:hover {
          transform: translateY(-2px);
          border-color: #cbd5e1;
        }

        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.15rem;
        }

        .pillar-speed {
          background-color: #fef3c7;
          color: #d97706;
        }

        .pillar-map {
          background-color: #e0f2fe;
          color: #0284c7;
        }

        .pillar-mobile {
          background-color: #f3e8ff;
          color: #9333ea;
        }

        .pillar-title {
          font-size: 1.12rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.65rem 0;
        }

        .pillar-text {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.55;
          margin: 0 0 1.25rem 0;
          flex: 1;
        }

        .pillar-stat {
          border-top: 1px dashed #e2e8f0;
          padding-top: 0.85rem;
          display: flex;
          flex-direction: column;
        }

        .stat-highlight {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0d7647;
          line-height: 1.2;
        }

        .stat-sub {
          font-size: 0.76rem;
          color: #64748b;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
export default FreeAuditSection;
