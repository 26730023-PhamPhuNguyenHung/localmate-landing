import React from 'react';
import { Icon, Waves } from './MamNonIcons';

export interface MamNonScaleProps {
  onOpenContact?: () => void;
  className?: string;
}

export const MamNonScale: React.FC<MamNonScaleProps> = ({
  onOpenContact,
  className = '',
}) => {
  return (
    <section
      className={`scene scale ${className}`.trim()}
      id="scale"
      aria-labelledby="scale-title"
    >
      <img
        className="scene-photo scale-photo"
        src="/assets/mam-non/hero.png"
        alt="Một lớp học nhỏ với cô giáo và các bé"
        loading="lazy"
      />
      <div className="photo-fade" />

      <div className="scale-copy">
        <div className="eyebrow">
          <Icon name="sprout" />
          PHÙ HỢP MỌI QUY MÔ
        </div>
        <h2 id="scale-title">
          Lớp nhỏ cũng xứng đáng <br />
          <span>có một hệ thống tử tế.</span> <b className="heart">♡</b>
        </h2>
        <p className="lead">
          Không nhất thiết phải có hàng trăm học sinh mới cần phần mềm quản lý. <br />
          Localmate bắt đầu nhẹ nhàng và có thể điều chỉnh theo cách trường đang làm việc.
        </p>
      </div>

      <p className="hand scale-top-note">
        Từ lớp nhỏ <br />
        đến những ước mơ lớn ♡<span className="underline" />
      </p>

      <div className="scale-grid">
        {/* Card 01: Nhóm trẻ / lớp mầm non độc lập */}
        <article className="scale-card">
          <b className="step">01</b>
          <div
            className="school-art classroom"
            role="img"
            aria-label="Lớp học nhỏ với bàn ghế gỗ, cây xanh và đồ chơi"
          >
            <span className="classroom-note hand">
              Lớp nhỏ <br />
              Những niềm vui lớn <br />
              ♡
            </span>
          </div>
          <div className="scale-card-copy">
            <Icon name="home" />
            <h3>
              Nhóm trẻ / lớp mầm non <br />
              độc lập
            </h3>
            <p>
              Bắt đầu đơn giản với danh sách bé, <br />
              điểm danh, nghỉ học và học phí.
            </p>
          </div>
        </article>

        {/* Card 02: Trường mầm non nhỏ */}
        <article className="scale-card">
          <b className="step">02</b>
          <div
            className="school-art school"
            role="img"
            aria-label="Ngôi trường mầm non nhỏ mái xanh với sân chơi"
          >
            <span className="school-label">TRƯỜNG MẦM NON</span>
          </div>
          <div className="scale-card-copy">
            <Icon name="school" />
            <h3>Trường mầm non nhỏ</h3>
            <p>
              Thêm nhiều lớp, giáo viên, phân <br />
              quyền và báo cáo cho quản lý.
            </p>
          </div>
        </article>

        {/* Card 03: Trường đang có cách làm riêng */}
        <article className="scale-card">
          <b className="step">03</b>
          <div
            className="laptop-art"
            role="img"
            aria-label="Minh họa giao diện quản lý lớp học trên laptop"
          >
            <div className="laptop-screen">
              <b>🌱 localmate</b>
              <div className="mini-app">
                <div>
                  Trẻ <br />
                  Điểm danh <br />
                  Học phí <br />
                  Giáo viên <br />
                  Báo cáo <br />
                  Cài đặt
                </div>
                <div className="mini-tiles">
                  <span>
                    <Icon name="school" />
                    Lớp học
                  </span>
                  <span>
                    <Icon name="coins" />
                    Học phí
                  </span>
                  <span>
                    <Icon name="chart" />
                    Báo cáo
                  </span>
                  <span>
                    <Icon name="users" />
                    Phân quyền
                  </span>
                </div>
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="scale-card-copy">
            <Icon name="settings" />
            <h3>Trường đang có cách làm riêng</h3>
            <p>
              Cùng xem lại quy trình hiện tại và <br />
              điều chỉnh theo nhu cầu thực tế.
            </p>
          </div>
        </article>
      </div>

      <blockquote className="hand">
        <b>“</b>Không bắt các cô học cách vận hành của phần mềm. <br />
        Phần mềm nên được điều chỉnh để phù hợp với cách nhà trường làm việc. ♡
        <span className="underline" />
      </blockquote>

      <p className="hand scale-bottom-note">
        <Icon name="sprout" />
        Dù quy mô thế nào, <br />
        chúng tôi luôn đồng hành cùng bạn ♡
      </p>

      <div className="wood-sign hand">
        Những <br />
        bước đi nhỏ <br />
        tạo nên thay đổi lớn <br />
        ♡
      </div>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};
