import React from 'react';
import { Icon, Waves } from './MamNonIcons';
import { PRICING_INCLUDED_FEATURES } from '../../data/mamNonData';

export interface MamNonPricingProps {
  onOpenContact: () => void;
  className?: string;
}

export const MamNonPricing: React.FC<MamNonPricingProps> = ({
  onOpenContact,
  className = '',
}) => {
  return (
    <section
      className={`scene pricing-detail ${className}`.trim()}
      id="pricing-detail"
      aria-labelledby="pricing-title"
    >
      <img
        className="section-backdrop"
        src="/assets/mam-non/pricing-background.png"
        alt="Cô giáo giúp bé khám phá khối gỗ màu vàng"
        loading="lazy"
      />

      <div className="new-copy pricing-copy">
        <div className="eyebrow">
          <Icon name="sprout" />
          BẮT ĐẦU THẬT NHẸ
        </div>
        <h2 id="pricing-title">
          Giá rõ ràng để các cô <br />
          <span>dễ bắt đầu.</span> <b className="heart">♡</b>
        </h2>
        <p className="lead">
          Không cần chọn gói phức tạp. Cứ dùng thử trước, <br className="desktop" />
          nếu phù hợp thì bắt đầu từ mức chi phí rất nhẹ.
        </p>
        <div className="included-features">
          <h3>Đã bao gồm các tính năng cần thiết</h3>
          <ul>
            {PRICING_INCLUDED_FEATURES.map((feature, idx) => (
              <li key={idx}>
                <Icon name={feature.icon} />
                {feature.title === 'Tiếp nhận yêu cầu điều chỉnh' ? (
                  <>
                    Tiếp nhận yêu cầu <br />
                    điều chỉnh
                  </>
                ) : (
                  feature.title
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <article className="full-price-card">
        <h3>
          <Icon name="gift" />
          Dùng thử không rủi ro
        </h3>
        <div className="full-price-body">
          <div className="zero-price">
            <p>30 ngày đầu:</p>
            <strong>0đ</strong>
          </div>
          <div className="after-trial">
            <p>Sau dùng thử:</p>
            <strong>
              <small>từ</small> 3.000đ<span> / ngày</span>
            </strong>
            <div>
              <Icon name="coffee" />
              Chưa bằng một cốc cà phê mỗi tuần ♡
            </div>
          </div>
          <p className="pricing-terms">
            Chi phí thực tế có thể thay đổi theo số lớp và nhu cầu bổ sung. Localmate sẽ báo rõ trước khi triển khai.
          </p>
          <button
            type="button"
            className="button"
            data-contact
            onClick={onOpenContact}
          >
            Dùng thử trước, chưa cần quyết định <span>→</span>
          </button>
          <button
            type="button"
            className="button secondary"
            data-contact
            onClick={onOpenContact}
          >
            <Icon name="chat" />
            Trao đổi với Localmate
          </button>
        </div>
      </article>

      <p className="hand pricing-note-top">
        Bước nhỏ hôm nay <br />
        cho hành trình lớn mai sau ♡
        <span className="underline" />
      </p>

      <div className="sun-doodle" aria-hidden="true">
        <Icon name="sun" />
      </div>

      <p className="hand pricing-note-bottom">
        Cùng nhau <br />
        nuôi những mầm non hạnh phúc ♡
        <span className="underline" />
      </p>

      <p className="hand pricing-note-end">
        Vì một thế hệ <br />
        trẻ thơ hạnh phúc hơn ♡
      </p>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};

export default MamNonPricing;
