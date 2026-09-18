import React from 'react';
import { Icon, Waves } from './MamNonIcons';

export interface MamNonTrialProps {
  onOpenContact: () => void;
  className?: string;
}

export const MamNonTrial: React.FC<MamNonTrialProps> = ({
  onOpenContact,
  className = '',
}) => {
  return (
    <section
      className={`scene trial ${className}`.trim()}
      id="trial"
      aria-labelledby="trial-title"
    >
      <img
        className="scene-photo trial-photo"
        src="/assets/mam-non/trial.png"
        alt="Cô giáo, phụ huynh và bé cùng xem máy tính bảng"
        loading="lazy"
      />
      <div className="photo-fade" />

      <div className="trial-copy">
        <div className="eyebrow">
          <Icon name="gift" />
          DÙNG THỬ MIỄN PHÍ 1 THÁNG
        </div>
        <h2 id="trial-title">
          Một tháng <span>để</span> các cô <br />
          <span>thử thật với lớp</span> của mình.
        </h2>
        <p className="lead">
          Không cần quyết định ngay. Cứ để lớp mình dùng thử trước, <br />
          rồi nếu phù hợp mới dùng tiếp.
        </p>

        {/* 4 thẻ cam kết hỗ trợ */}
        <div className="support-grid">
          <article>
            <Icon name="shield" />
            <div>
              <h3>Bảo hành 5 năm</h3>
              <p>Yên tâm sử dụng lâu dài</p>
            </div>
          </article>
          <article>
            <Icon name="headset" />
            <div>
              <h3>
                Hỗ trợ kỹ thuật <br />
                các ngày trong tuần
              </h3>
              <p>Luôn có người đồng hành</p>
            </div>
          </article>
          <article>
            <Icon name="users" />
            <div>
              <h3>
                Hướng dẫn cô giáo <br />
                và người quản lý sử dụng
              </h3>
              <p>Dễ hiểu, dễ áp dụng</p>
            </div>
          </article>
          <article>
            <Icon name="settings" />
            <div>
              <h3>
                Nhận bổ sung và <br />
                điều chỉnh theo nhu cầu
              </h3>
              <p>Linh hoạt theo thực tế của lớp</p>
            </div>
          </article>
        </div>

        {/* Nút hành động chính trigger onOpenContact */}
        <button
          type="button"
          className="button trial-button"
          onClick={onOpenContact}
        >
          <Icon name="rocket" />
          Cho lớp mình dùng thử 1 tháng <span>→</span>
        </button>

        <div className="trial-trust">
          <Icon name="shield" />
          Không cần thẻ tín dụng <span>|</span> Dễ dàng đăng ký <span>|</span> Hỗ trợ tận tình
        </div>
      </div>

      {/* Thẻ giá dùng thử */}
      <div className="price-card">
        <h3>
          <Icon name="gift" />
          30 ngày dùng thử miễn phí
        </h3>
        <div className="price-body">
          <p>Từ khoảng</p>
          <strong>
            3.000đ<span> / ngày</span>
          </strong>
          <div className="price-under" />
          <small>
            <Icon name="coffee" />
            Chưa bằng một cốc cà phê mỗi tuần ♡
          </small>
        </div>
      </div>

      {/* Ghi chú chữ viết tay (hand notes) */}
      <p className="hand trial-top-note">
        Cùng nhau <br />
        vì những ngày thơ <br />
        thật hạnh phúc ♡<span className="underline" />
      </p>
      <p className="hand trial-bottom-note">
        Công nghệ đồng hành <br />
        cùng những người gieo hạnh phúc ♡<span className="underline" />
      </p>
      <p className="hand trial-end-note">
        Vì một thế hệ <br />
        trẻ thơ hạnh phúc hơn ♡
      </p>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};
