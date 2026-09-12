import React from 'react';
import { Container } from '../ui/Container';
import { COMPANY_INFO, CONTACT_INFO } from '../../data/landingContent';
import { ShieldCheck, Building2, CheckCircle2, FileText, Phone, MapPin } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const handoverItems = [
    {
      title: 'Tên miền & Máy chủ chính chủ 100%',
      desc: 'Đăng ký bằng CCCD và số điện thoại của bạn. Bạn nắm chìa khóa gốc, không sợ bị giữ quyền kiểm soát.'
    },
    {
      title: 'Google Business Profile (Maps)',
      desc: 'Bàn giao quyền Chủ sở hữu chính (Primary Owner) vào Gmail của bạn ngay khi hoàn tất xác minh.'
    },
    {
      title: 'Bộ mã QR Review 5 sao để bàn',
      desc: 'File thiết kế chuẩn in ấn sắc nét đặt tại quầy thu ngân để khách hàng quét đánh giá 5 sao tức thì.'
    },
    {
      title: 'Video hướng dẫn tự sửa chữ & ảnh 2 phút',
      desc: 'Quay màn hình thực tế trên chính website của bạn: tự sửa giá, đổi ảnh món ăn hoặc thêm bài viết dễ dàng.'
    },
    {
      title: 'Hỗ trợ kỹ thuật viên Zalo 1-1',
      desc: 'Cần sửa đổi hay website gặp sự cố, chỉ cần nhắn tin vào nhóm Zalo riêng, kỹ thuật xử lý nhanh trong ngày.'
    }
  ];

  return (
    <section className="section-component trust-legal-section" id="cam-ket" aria-label="Pháp nhân và Bàn giao minh bạch">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">
            <ShieldCheck size={14} /> BẢO CHỨNG MINH BẠCH &amp; PHÁP NHÂN
          </span>
          <h2>Bạn Luôn Biết Mình Đang Trả Tiền Cho Gì</h2>
          <p className="subtitle">
            LocalMate hoạt động với tư cách pháp nhân doanh nghiệp đầy đủ. Mọi hợp đồng, nghiệm thu và tài khoản đều được bàn giao rõ ràng cho bạn.
          </p>
        </div>

        <div className="trust-split-grid">
          {/* LEFT: Handover Checklist */}
          <div className="handover-checklist-card">
            <div className="checklist-header">
              <span className="checklist-badge">MINH BẠCH BÀN GIAO</span>
              <h3 className="checklist-title">5 Thứ Bạn Cầm Tay Khi Nghiệm Thu</h3>
            </div>

            <div className="checklist-items-list">
              {handoverItems.map((item, idx) => (
                <div key={idx} className="checklist-item-row">
                  <div className="item-check-icon-wrap" aria-hidden="true">
                    <CheckCircle2 size={18} className="item-check-icon" />
                  </div>
                  <div className="item-content">
                    <h4 className="item-heading">{item.title}</h4>
                    <p className="item-detail">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Legal Identity Box */}
          <div className="legal-identity-panel">
            <div className="legal-panel-header">
              <div className="legal-icon-wrap">
                <Building2 size={24} />
              </div>
              <div>
                <span className="legal-eyebrow">PHÁP NHÂN DOANH NGHIỆP</span>
                <h3 className="legal-company-name">{COMPANY_INFO.legalName}</h3>
              </div>
            </div>

            <div className="legal-info-table">
              <div className="legal-table-row">
                <span className="legal-table-label">Mã số thuế</span>
                <strong className="legal-table-value">{COMPANY_INFO.taxCode}</strong>
              </div>
              <div className="legal-table-row">
                <span className="legal-table-label">Trạng thái</span>
                <span className="legal-table-value">{COMPANY_INFO.status}</span>
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

            <div className="legal-contact-callout">
              <div className="callout-hotline-label">Đội ngũ kỹ thuật viên trực tiếp:</div>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="callout-hotline-link">
                <Phone size={18} /> {CONTACT_INFO.phoneDisplay}
              </a>
              <p className="callout-note">Hỗ trợ trao đổi trực tiếp tại văn phòng của bạn hoặc online qua Zalo.</p>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .trust-legal-section {
          background-color: var(--color-surface-subtle);
          border-bottom: 1px solid var(--color-border);
        }

        .trust-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        @media (min-width: 1024px) {
          .trust-split-grid {
            grid-template-columns: 1.25fr 1fr;
            gap: 2.5rem;
          }
        }

        /* LEFT HANDOVER CARD */
        .handover-checklist-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 3vw, 2.5rem);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .checklist-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .checklist-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0;
          line-height: 1.25;
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

        .item-heading {
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 0.25rem 0;
        }

        .item-detail {
          font-size: 0.875rem;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
        }

        /* RIGHT LEGAL PANEL */
        .legal-identity-panel {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 3vw, 2.5rem);
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
        }

        .legal-info-table {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
          padding: 1.25rem 0;
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
          font-weight: 500;
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
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
