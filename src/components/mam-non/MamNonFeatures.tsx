import React from 'react';
import { Icon, Waves } from './MamNonIcons';
import { FEATURE_CARDS } from '../../data/mamNonData';

export interface MamNonFeaturesProps {
  onOpenContact: () => void;
  className?: string;
}

export const MamNonFeatures: React.FC<MamNonFeaturesProps> = ({
  onOpenContact,
  className = '',
}) => {
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
      className={`scene features ${className}`.trim()}
      id="features"
      aria-labelledby="features-title"
    >
      <img
        className="scene-photo features-photo"
        src="/assets/mam-non/features.png"
        alt="Cô giáo và các bé bên bàn học đầy màu sắc"
        loading="lazy"
      />
      <div className="photo-fade" />

      <div className="features-copy">
        <div className="eyebrow">
          <Icon name="sprout" />
          TÍNH NĂNG NỔI BẬT
        </div>
        <h2 id="features-title">
          Sổ sách ít đi. <br />
          <span>Thông tin về bé</span> <br />
          lại rõ hơn. <b className="heart">♡</b>
        </h2>
        <p className="lead">
          Không cần mở nhiều file Excel, sổ giấy hay
          <br className="desktop" /> tìm lại tin nhắn trong Zalo. Những việc hằng ngày
          <br className="desktop" /> được gom lại trong một nơi thật đơn giản.
        </p>

        <div className="actions">
          <button
            type="button"
            className="button"
            data-contact
            onClick={onOpenContact}
          >
            Dùng thử miễn phí 1 tháng <span>→</span>
          </button>
          <a
            className="button secondary"
            href="#roles"
            onClick={(e) => handleSmoothScroll(e, 'roles')}
          >
            <Icon name="play" />
            Khám phá trải nghiệm
          </a>
        </div>

        <div className="trust">
          <span>
            <Icon name="shield" />
            Bảo hành 5 năm
          </span>
          <span>
            <Icon name="headset" />
            Hỗ trợ tận tình
          </span>
          <span>
            <Icon name="settings" />
            Dễ sử dụng
          </span>
        </div>
      </div>

      <div className="feature-grid">
        {FEATURE_CARDS.map((card) => (
          <article key={card.id} className={`feature-card ${card.id}`}>
            <div className={`icon-disc ${card.iconColor ? card.iconColor : ''}`.trim()}>
              <Icon name={card.icon} />
            </div>
            <h3>{card.title}</h3>
            <p>
              {card.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </p>
          </article>
        ))}
      </div>

      <p className="hand features-note">
        Nhiều thời gian hơn <br />
        cho những điều thật ý nghĩa ♡<span className="underline" />
      </p>

      <p className="hand features-end">
        <Icon name="sprout" />
        Công nghệ giản dị <br />
        cho một tuổi thơ trọn vẹn ♡<span className="underline" />
      </p>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};

export default MamNonFeatures;
