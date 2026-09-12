import React from 'react';
import { Container } from '../ui/Container';
import { COMPANY_INFO, CONTACT_INFO } from '../../data/landingContent';
import { ShieldCheck, Building2, CheckCircle2, Phone, Award, Users, Receipt, FileCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const handoverItems = [
    {
      badge: 'Tài sản 01',
      title: 'Tên miền & Máy chủ chính chủ 100%',
      desc: 'Đăng ký bằng CCCD và số điện thoại của bạn. Bạn nắm chìa khóa gốc, không lo bị giữ quyền kiểm soát hay tống tiền chuộc tên miền.'
    },
    {
      badge: 'Tài sản 02',
      title: 'Google Business Profile (Google Maps)',
      desc: 'Bàn giao quyền Chủ sở hữu chính (Primary Owner) vào Gmail của bạn ngay khi hoàn tất xác minh vị trí địa phương.'
    },
    {
      badge: 'Tài sản 03',
      title: 'Bộ mã QR Review 5 sao & Bảng giá để bàn',
      desc: 'File thiết kế chuẩn in ấn sắc nét đặt tại quầy thu ngân để khách hàng ghé tiệm quét đánh giá 5 sao tức thì.'
    },
    {
      badge: 'Tài sản 04',
      title: 'Video hướng dẫn tự sửa chữ & ảnh 2 phút',
      desc: 'Quay video màn hình thực tế trên chính trang web của bạn: tự sửa giá món, đổi số điện thoại hoặc thêm bài viết mới trong tích tắc.'
    },
    {
      badge: 'Tài sản 05',
      title: 'Hỗ trợ kỹ thuật viên Zalo 1-1 không giới hạn',
      desc: 'Cần cập nhật hay trang web gặp sự cố, chỉ cần nhắn tin vào nhóm Zalo riêng, kỹ thuật viên địa phương xử lý nhanh trong ngày.'
    }
  ];

  const socialStats = [
    {
      icon: Users,
      value: '150+',
      label: 'Cửa hàng & Tiệm địa phương tin tưởng'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Khách hàng toàn quyền sở hữu tài khoản'
    },
    {
      icon: Receipt,
      value: '0đ',
      label: 'Chi phí phát sinh ngoài hợp đồng'
    }
  ];

  return (
    <section className="section-component trust-legal-section" id="cam-ket" aria-label="Pháp nhân và Bàn giao minh bạch">
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <ShieldCheck size={14} className="eyebrow-icon" /> BẢO CHỨNG MINH BẠCH &amp; PHÁP NHÂN
          </span>
          <h2 className="section-title">Bạn Luôn Biết Mình Đang Trả Tiền Cho Gì</h2>
          <p className="subtitle">
            LocalMate hoạt động với tư cách pháp nhân doanh nghiệp đầy đủ. Hợp đồng kinh tế có giá trị pháp lý, nghiệm thu cầm tay chỉ việc và bàn giao 100% quyền kiểm soát cho bạn.
          </p>
        </div>

        {/* Social Proof Stats Bar */}
        <div className="trust-stats-bar">
          {socialStats.map((stat, idx) => {
            const SIcon = stat.icon;
            return (
              <div className="trust-stat-item" key={idx}>
                <div className="stat-icon-wrapper" aria-hidden="true">
                  <SIcon size={20} />
                </div>
                <div className="stat-text">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="trust-split-grid">
          {/* LEFT: Handover Checklist */}
          <div className="handover-checklist-card">
            <div className="checklist-header">
              <span className="checklist-badge">
                <FileCheck size={13} /> NGHIỆM THU MINH BẠCH
              </span>
              <h3 className="checklist-title">5 Tài Sản Thực Tế Cầm Tay Khi Nghiệm Thu</h3>
              <p className="checklist-subtitle">
                Chúng tôi không bàn giao mã nguồn thô khó hiểu. Bạn nhận được toàn bộ tài sản số vận hành ngay:
              </p>
            </div>

            <div className="checklist-items-list">
              {handoverItems.map((item, idx) => (
                <div key={idx} className="checklist-item-row">
                  <div className="item-check-icon-wrap" aria-hidden="true">
                    <CheckCircle2 size={18} className="item-check-icon" />
                  </div>
                  <div className="item-content">
                    <div className="item-header-meta">
                      <span className="item-tag">{item.badge}</span>
                      <h4 className="item-heading">{item.title}</h4>
                    </div>
                    <p className="item-detail">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Legal Identity Box & Direct Team */}
          <div className="legal-identity-panel">
            <div>
              <div className="legal-panel-header">
                <div className="legal-icon-wrap" aria-hidden="true">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="legal-eyebrow">PHÁP NHÂN DOANH NGHIỆP RÕ RÀNG</span>
                  <h3 className="legal-company-name">{COMPANY_INFO.legalName}</h3>
                </div>
              </div>

              <div className="legal-info-table">
                <div className="legal-table-row">
                  <span className="legal-table-label">Mã số thuế</span>
                  <strong className="legal-table-value">{COMPANY_INFO.taxCode}</strong>
                </div>
                <div className="legal-table-row">
                  <span className="legal-table-label">Tình trạng hoạt động</span>
                  <span className="legal-table-value legal-badge-active">{COMPANY_INFO.status}</span>
                </div>
                <div className="legal-table-row">
                  <span className="legal-table-label">Địa chỉ trụ sở</span>
                  <span className="legal-table-value">{COMPANY_INFO.taxAddress}</span>
                </div>
                <div className="legal-table-row">
                  <span className="legal-table-label">Hợp đồng &amp; Hóa đơn</span>
                  <span className="legal-table-value legal-badge-highlight">Có xuất hóa đơn VAT điện tử</span>
                </div>
              </div>
            </div>

            {/* Local Tech Hotline Box */}
            <div className="legal-contact-callout">
              <div className="callout-hotline-label">Đội ngũ kỹ thuật viên trực tiếp tại địa phương:</div>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="callout-hotline-link">
                <Phone size={18} /> {CONTACT_INFO.phoneDisplay}
              </a>
              <p className="callout-note">
                Sẵn sàng trao đổi trực tiếp tại cửa hàng của bạn hoặc giải quyết sự cố kỹ thuật qua Zalo 24/7.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .trust-legal-section {
          background-color: var(--color-surface-subtle);
          border-bottom: 1px solid var(--color-border);
          padding: clamp(3.5rem, 6vw, 5.5rem) 0;
        }

        /* Social Proof Stats Bar */
        .trust-stats-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.75rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) {
          .trust-stats-bar {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .trust-stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: var(--color-primary-soft);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--ink);
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.8125rem;
          color: var(--ink-soft);
          line-height: 1.35;
          text-wrap: pretty;
        }

        /* Split Grid */
        .trust-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        @media (min-width: 1024px) {
          .trust-split-grid {
            grid-template-columns: 1.35fr 1fr;
            gap: 2.5rem;
          }
        }

        /* LEFT HANDOVER CARD */
        .handover-checklist-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 3vw, 2.25rem);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .checklist-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.5rem;
        }

        .checklist-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 0.4rem 0;
          line-height: 1.3;
          text-wrap: pretty;
        }

        .checklist-subtitle {
          font-size: 0.875rem;
          color: var(--ink-muted);
          margin: 0;
          line-height: 1.45;
          text-wrap: pretty;
        }

        .checklist-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .checklist-item-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .item-check-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .item-check-icon {
          color: var(--color-primary);
        }

        .item-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .item-header-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .item-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
        }

        .item-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
          text-wrap: pretty;
        }

        .item-detail {
          font-size: 0.8125rem;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
        }

        /* RIGHT LEGAL PANEL */
        .legal-identity-panel {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 3vw, 2.25rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.75rem;
        }

        .legal-panel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .legal-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-lg);
          background-color: var(--color-primary-soft);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .legal-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .legal-company-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0.2rem 0 0 0;
          line-height: 1.3;
          text-wrap: pretty;
        }

        .legal-info-table {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
          padding: 1.25rem 0;
          margin-top: 1.25rem;
        }

        .legal-table-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          font-size: 0.875rem;
        }

        .legal-table-label {
          color: var(--ink-muted);
          flex-shrink: 0;
        }

        .legal-table-value {
          color: var(--ink);
          text-align: right;
          font-weight: 600;
        }

        .legal-badge-active {
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
        }

        .legal-badge-highlight {
          color: var(--color-primary-dark);
          font-weight: 700;
        }

        .legal-contact-callout {
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .callout-hotline-label {
          font-size: 0.8125rem;
          color: var(--ink-muted);
        }

        .callout-hotline-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-primary);
          text-decoration: none;
        }

        .callout-hotline-link:hover {
          text-decoration: underline;
        }

        .callout-note {
          font-size: 0.8125rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.45;
          text-wrap: pretty;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
