import React from 'react';
import { Icon, Waves } from './MamNonIcons';

export interface MamNonHeroProps {
  onOpenContact?: () => void;
  onOpenContactModal?: () => void;
  onOpenLeadModal?: () => void;
  className?: string;
}

export const MamNonHero: React.FC<MamNonHeroProps> = ({
  onOpenContact,
  onOpenContactModal,
  onOpenLeadModal,
  className = '',
}) => {
  const handleContactAction = () => {
    if (onOpenContact) {
      onOpenContact();
    } else if (onOpenContactModal) {
      onOpenContactModal();
    } else if (onOpenLeadModal) {
      onOpenLeadModal();
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    <section
      className={`scene hero ${className}`.trim()}
      id="home"
      aria-labelledby="hero-title"
    >
      <img
        className="scene-photo hero-photo"
        src="/assets/mam-non/hero.png"
        alt="Cô giáo cùng các bé vui vẻ khám phá máy tính bảng trong lớp mầm non"
        {...({ fetchpriority: 'high' } as any)}
      />
      <div className="photo-fade" />

      <div className="hero-copy">
        <div className="eyebrow">
          <Icon name="sprout" />
          LOCALMATE MẦM NON
        </div>
        <h1 id="hero-title">
          Một chút công nghệ, <br />
          <span>để các cô có thêm</span> <br />
          thời gian cho các bé.<b className="heart">♡</b>
        </h1>
        <p className="lead">
          Localmate giúp lớp mầm non và trường mầm non quản lý
          <br className="desktop" /> điểm danh, hồ sơ bé, nghỉ học, học phí và
          những việc hằng ngày
          <br className="desktop" /> trong một nơi thật đơn giản.
        </p>
        <p className="trial-caption">
          Dùng thử miễn phí 1 tháng. Sau đó chi phí chỉ từ khoảng 3.000đ/ngày.
        </p>

        <div className="actions">
          <button
            type="button"
            className="button"
            data-contact
            onClick={handleContactAction}
          >
            <Icon name="rocket" />
            Dùng thử cho lớp của mình <span>→</span>
          </button>
          <a
            className="button secondary"
            href="#product-demo"
            onClick={(e) => handleSmoothScroll(e, 'product-demo')}
          >
            <Icon name="play" />
            Xem hệ thống hoạt động
          </a>
        </div>

        <div className="trust">
          <span>
            <Icon name="shield" />
            Bảo hành 5 năm
          </span>
          <span>
            <Icon name="headset" />
            Hỗ trợ kỹ thuật trong tuần
          </span>
          <span>
            <Icon name="settings" />
            Điều chỉnh theo nhu cầu
          </span>
        </div>
      </div>

      <div className="attendance float-card">
        <strong>
          <Icon name="calendar" />
          Điểm danh hôm nay
        </strong>
        <div className="attendance-values">
          <span>
            <b className="face green">☺</b>
            <small>
              Có mặt<em>18</em>
            </small>
          </span>
          <span>
            <b className="face pink">☹</b>
            <small>
              Nghỉ<em>2</em>
            </small>
          </span>
          <span>
            <b className="face orange">☷</b>
            <small>
              Chưa điểm danh<em>1</em>
            </small>
          </span>
        </div>
      </div>

      <div className="free-month float-card">
        <Icon name="calendar" />
        <span>
          Dùng thử <br />
          <b>miễn phí 1 tháng</b>
        </span>
      </div>

      <div className="daily-price float-card">
        <Icon name="coins" />
        <span>
          Từ <br />
          <b>3.000đ/ngày</b>
        </span>
      </div>

      <p className="hand hero-note">
        Vì những <br />
        ngày thơ thật hạnh phúc ♡<span className="underline" />
      </p>

      <p className="hand photo-note">
        Quản lý nhẹ nhàng <br />
        Thêm thời gian yêu thương ♡<span className="doodle-arrow">⤻</span>
      </p>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};

export { Waves };
export default MamNonHero;
