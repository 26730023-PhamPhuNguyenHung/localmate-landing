import React from 'react';
import { Icon, Waves } from './MamNonIcons';
import { ROLE_CARDS, DAY_FLOW_ITEMS } from '../../data/mamNonData';

export interface MamNonRolesProps {
  onOpenContact?: () => void;
  className?: string;
}

export const MamNonRoles: React.FC<MamNonRolesProps> = ({
  onOpenContact: _onOpenContact,
  className = '',
}) => {
  return (
    <section
      className={`scene roles ${className}`.trim()}
      id="roles"
      aria-labelledby="roles-title"
    >
      <div className="section-heading">
        <div className="eyebrow">
          <Icon name="sprout" />
          MỖI NGƯỜI MỘT TRẢI NGHIỆM PHÙ HỢP
        </div>
        <h2 id="roles-title">
          Cô giáo dùng dễ. Quản lý nắm được. <br />
          <span>Phụ huynh yên tâm.</span> <b className="heart">♡</b>
        </h2>
        <p className="lead">
          Mỗi người chỉ nhìn thấy thứ mình cần, nên công việc gọn hơn và thông
          tin về bé rõ ràng hơn.
        </p>
      </div>

      <p className="hand roles-note-left">
        Ba mẹ an tâm <br />
        Cô giáo nhẹ nhàng <br />
        Nhà trường vững vàng ♡
      </p>

      <p className="hand roles-note-right">
        Cùng nhau <br />
        vì những ngày bé <br />
        thật hạnh phúc ♡<span className="underline" />
      </p>

      <div className="role-grid">
        {ROLE_CARDS.map((card) => (
          <article key={card.id} className={`role-card ${card.id}`}>
            <div
              className="role-art"
              role="img"
              aria-label={card.artAriaLabel}
            />
            <div className="role-copy">
              <h3>
                <Icon name={card.icon} />
                {card.title}
              </h3>
              <p>{card.description}</p>
              <ul>
                {card.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {card.hasRays && <span className="rays" aria-hidden="true" />}
          </article>
        ))}
      </div>

      <div className="day-flow">
        {DAY_FLOW_ITEMS.map((item, index) => (
          <article key={index}>
            <div className={`flow-picture ${item.badgeColor || ''}`.trim()}>
              <Icon name={item.icon} />
            </div>
            <div>
              <strong>{item.time}</strong>
              <h3>{item.title}</h3>
              <p>
                {item.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};

export default MamNonRoles;
