import React, { useState } from 'react';
import { Icon } from './MamNonIcons';
import { MamNonDemoModal } from './MamNonDemoModal';
import {
  STUDENT_DEMO_ITEMS,
  PROFILE_DEMO_DATA,
  DEMO_TUITION,
  RECENT_ABSENCES_DEMO,
  ATTENDANCE_CHART_DEMO,
} from '../../data/mamNonData';

export interface MamNonProductDemoProps {
  onOpenContact?: () => void;
  onOpenDemo?: () => void;
  className?: string;
}

type ProfileTabKey = 'child' | 'parent' | 'health' | 'notes';

interface TabConfig {
  key: ProfileTabKey;
  label: string;
}

const PROFILE_TABS: TabConfig[] = [
  { key: 'child', label: 'Thông tin chung' },
  { key: 'parent', label: 'Phụ huynh' },
  { key: 'health', label: 'Sức khỏe' },
  { key: 'notes', label: 'Ghi chú' },
];

export const MamNonProductDemo: React.FC<MamNonProductDemoProps> = ({
  onOpenContact,
  onOpenDemo,
  className = '',
}) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<ProfileTabKey>('child');

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % PROFILE_TABS.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + PROFILE_TABS.length) % PROFILE_TABS.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = PROFILE_TABS.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      const targetTab = PROFILE_TABS[nextIndex];
      setActiveTab(targetTab.key);
      const targetEl = document.getElementById(`tab-${targetTab.key}`);
      if (targetEl) {
        targetEl.focus();
      }
    }
  };

  return (
    <section
      className={`scene product-demo ${className}`.trim()}
      id="product-demo"
      aria-labelledby="demo-title"
    >
      <img
        className="section-backdrop"
        src="/assets/mam-non/demo-background.png"
        alt=""
        loading="lazy"
      />

      {/* Copy & Call to actions */}
      <div className="new-copy demo-copy">
        <div className="eyebrow">
          <Icon name="monitor" />
          GIAO DIỆN THỰC TẾ
        </div>
        <h2 id="demo-title">
          Không phải phần mềm <br />
          để ngắm. <br />
          <span>
            Đây là những gì các cô <br />
            dùng mỗi ngày.
          </span>{' '}
          <b className="heart">♡</b>
        </h2>
        <p className="lead">
          Giao diện được làm để cô giáo có thể dùng ngay <br />
          trên điện thoại hoặc laptop, không cần học <br />
          một phần mềm phức tạp.
        </p>
        <div className="actions">
          <button
            type="button"
            className="button"
            data-demo
            onClick={() => {
              if (onOpenDemo) {
                onOpenDemo();
              } else {
                setIsDemoModalOpen(true);
              }
            }}
          >
            <Icon name="play" />
            Xem demo hệ thống <span>→</span>
          </button>
          <button
            type="button"
            className="button secondary"
            data-contact
            onClick={onOpenContact}
          >
            <Icon name="gift" />
            Dùng thử miễn phí 1 tháng
          </button>
        </div>
        <div className="demo-benefits">
          <span>
            <Icon name="phone" />
            Dùng được <br />
            trên điện thoại
          </span>
          <span>
            <Icon name="touch" />
            Dễ nhìn, dễ chạm
          </span>
          <span>
            <Icon name="shield" />
            Không cần <br />
            đào tạo phức tạp
          </span>
        </div>
      </div>

      {/* Phone Screen Heading */}
      <div className="phone-heading screen-heading">
        <Icon name="users" />
        <div>
          <h3>Điểm danh bé</h3>
          <p>Điểm danh nhanh, rõ ràng</p>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="demo-phone" aria-label="Minh họa màn hình điểm danh">
        <div className="phone-notch" />
        <div className="phone-status">
          9:41 <span>▮▮▮ ▰</span>
        </div>
        <img
          src="/assets/mam-non/logo.png"
          alt="Localmate"
          className="device-logo"
        />
        <strong className="device-title">Điểm danh hôm nay</strong>
        <div className="device-date">
          Thứ 3, 18/09/2024 <span>Lớp Lá 1 ⌄</span>
        </div>
        <div className="phone-totals">
          <span>
            <b>☺</b>
            <strong>18</strong>Có mặt
          </span>
          <span>
            <b>☹</b>
            <strong>2</strong>Nghỉ
          </span>
          <span>
            <b>☺</b>
            <strong>1</strong>Chưa điểm danh
          </span>
        </div>
        <div className="phone-students" data-student-preview>
          {STUDENT_DEMO_ITEMS.map((student) => (
            <div key={student.name} className="student-preview-row">
              {student.girl ? (
                <img
                  className="avatar"
                  src="/assets/mam-non/child-avatar.png"
                  alt={student.name}
                />
              ) : (
                <span className="avatar avatar-boy">{student.initial}</span>
              )}
              <span>{student.name}</span>
              <small
                className={`status-chip ${student.present ? '' : 'absent'}`}
              >
                {student.present ? 'Có mặt' : 'Nghỉ'}
              </small>
              <em>{student.present ? '☑' : '□'}</em>
            </div>
          ))}
        </div>
        <span className="phone-home" />
      </div>

      {/* Laptop Screen Heading */}
      <div className="profile-heading screen-heading">
        <Icon name="child" />
        <div>
          <h3>Hồ sơ bé</h3>
          <p>Quản lý thông tin bé, phụ huynh, lớp và ghi chú</p>
        </div>
      </div>

      {/* Laptop Mockup */}
      <div className="demo-laptop">
        <div className="profile-screen">
          <aside>
            <img src="/assets/mam-non/logo.png" alt="Localmate" />
            <span>⌂ Tổng quan</span>
            <span className="selected">♧ Trẻ em</span>
            <span>▣ Lớp học</span>
            <span>▤ Học phí</span>
            <span>▧ Báo nghỉ</span>
            <span>▥ Báo cáo</span>
            <span>⚙ Cài đặt</span>
          </aside>
          <div className="child-profile">
            <div className="child-profile-top">
              <img
                src="/assets/mam-non/child-avatar.png"
                alt="Ảnh bé trong mẫu giao diện"
              />
              <div>
                <h4>Nguyễn Minh Anh</h4>
                <p>28/08/2021</p>
                <span>Lớp Lá 1</span>
              </div>
            </div>

            {/* Profile Tabs */}
            <div
              className="profile-tabs"
              role="tablist"
              aria-label="Hồ sơ minh họa"
            >
              {PROFILE_TABS.map((tab, idx) => {
                const isSelected = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    id={`tab-${tab.key}`}
                    type="button"
                    className={isSelected ? 'selected' : ''}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls="profile-panel"
                    tabIndex={isSelected ? 0 : -1}
                    data-profile-tab={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Profile Panel Content */}
            <div
              id="profile-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              tabIndex={0}
            >
              {activeTab === 'child' ? (
                <dl>
                  {PROFILE_DEMO_DATA.child.map(([label, value]) => (
                    <React.Fragment key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              ) : (
                <p>{PROFILE_DEMO_DATA[activeTab]}</p>
              )}
            </div>
          </div>
        </div>
        <div className="demo-laptop-base" />
      </div>

      <div className="profile-note">
        <h4>Ghi chú</h4>
        <p>
          Bé ăn tốt, rất ngoan. <br />
          Thích vẽ tranh và hoạt động ngoài trời.
        </p>
      </div>

      {/* Tuition Preview Card */}
      <article className="tuition-preview preview-card">
        <div className="screen-heading">
          <Icon name="coins" />
          <div>
            <h3>Học phí</h3>
            <p>Theo dõi đóng học phí dễ dàng</p>
          </div>
        </div>
        <div className="tiny-filters">
          <span>Tháng 9/2024 ⌄</span>
          <span>Lớp Lá 1 ⌄</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody data-tuition-preview>
            {STUDENT_DEMO_ITEMS.map((student) => (
              <tr key={student.name}>
                <td>
                  {student.girl ? (
                    <img
                      className="avatar"
                      src="/assets/mam-non/child-avatar.png"
                      alt={student.name}
                    />
                  ) : (
                    <span className="avatar avatar-boy">{student.initial}</span>
                  )}
                  {student.name}
                </td>
                <td>{DEMO_TUITION}</td>
                <td>
                  <span
                    className={`status-chip ${student.paid ? '' : 'absent'}`}
                  >
                    {student.paid ? '◉ Đã đóng' : 'Chưa đóng'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {/* Reports Preview Card */}
      <article className="reports-preview preview-card">
        <div className="screen-heading">
          <Icon name="chart" />
          <div>
            <h3>Báo nghỉ & báo cáo</h3>
            <p>Quản lý đơn xin nghỉ và xem báo cáo nhanh</p>
          </div>
        </div>
        <div className="reports-columns">
          <div className="absence-list">
            <h4>Đơn xin nghỉ gần đây</h4>
            {RECENT_ABSENCES_DEMO.map((item) => (
              <div key={item.name}>
                {item.avatarSrc ? (
                  <img
                    className="avatar"
                    src="/assets/mam-non/child-avatar.png"
                    alt={item.name}
                  />
                ) : (
                  <span className="avatar avatar-boy">{item.initial}</span>
                )}
                <p>
                  <b>{item.name}</b> <br />
                  {item.days} <br />
                  ({item.dateRange})
                </p>
                <small className={item.isPending ? 'pending' : ''}>
                  {item.status}
                </small>
              </div>
            ))}
          </div>

          <div className="report-chart">
            <h4>Thống kê tháng 9/2024</h4>
            <div
              className="chart-bars"
              role="img"
              aria-label="Biểu đồ minh họa: Có mặt 22, Nghỉ 5, Xin nghỉ 3"
            >
              {ATTENDANCE_CHART_DEMO.map((stat) => (
                <span
                  key={stat.label}
                  style={
                    {
                      '--bar': stat.barPercent,
                      '--bar-color': stat.color,
                    } as React.CSSProperties
                  }
                >
                  <b>{stat.count}</b>
                  <i />
                  <small>{stat.label}</small>
                </span>
              ))}
            </div>

            <div className="report-export">
              <Icon name="file" />
              <span>
                <b>Xuất báo cáo nhanh</b> <br />
                Điểm danh, học phí, tình hình nghỉ học...
              </span>
              <span>→</span>
            </div>
          </div>
        </div>
      </article>

      <p className="hand demo-note">
        Công nghệ thật giản đơn <br />
        để cô có thêm thời gian <br />
        cho những điều ý nghĩa ♡<span className="underline" />
      </p>

      {/* Interactive Demo Dialog Modal */}
      <MamNonDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
