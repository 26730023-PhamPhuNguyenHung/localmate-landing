import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { DEMO_SHOWCASES } from '../../data/landingContent';
import { PROOF_SHOWCASE_DATA, DELIVERABLES_DATA, DeliverableItem } from '../../data/operationsData';
import {
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Zap,
  Clock,
  Laptop,
  LayoutDashboard,
  MapPin,
  CalendarDays,
  BarChart3,
  Lock,
  PhoneCall,
  MessageSquare,
  FileSpreadsheet,
  ReceiptText,
  Check,
  ArrowRight
} from 'lucide-react';

export const DemoShowcaseSection: React.FC = () => {
  const [viewType, setViewType] = useState<'deliverables' | 'websites' | 'workflows'>('deliverables');

  // Helper render deliverable icon based on ID
  const renderDeliverableIcon = (id: string) => {
    switch (id) {
      case 'deliv-website':
        return <Laptop size={22} color="var(--color-primary)" />;
      case 'deliv-admin':
        return <LayoutDashboard size={22} color="var(--color-primary)" />;
      case 'deliv-maps':
        return <MapPin size={22} color="var(--color-primary)" />;
      case 'deliv-content':
        return <CalendarDays size={22} color="var(--color-primary)" />;
      case 'deliv-ads':
        return <BarChart3 size={22} color="var(--color-primary)" />;
      default:
        return <CheckCircle2 size={22} color="var(--color-primary)" />;
    }
  };

  return (
    <section
      id="demo-showcase"
      style={{
        padding: 'clamp(3.5rem, 5vw, 5.5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        <SectionHeader
          eyebrow="XEM TRƯỚC THỨ BẠN SẼ NHẬN • MINH BẠCH 100%"
          title="Sản phẩm bàn giao thực tế & Website đang hoạt động"
          subtitle="Tuyệt đối không dùng số liệu ảo hay review tự vẽ. Dưới đây là 5 sản phẩm bàn giao cụ thể mà bạn sẽ nhận được và các website thật đang vận hành trên hệ thống LocalMate."
        />

        {/* View Switcher Tabs: 3 Chế độ xem thực tế */}
        <div className="showcase-tabs-wrapper">
          <div className="showcase-tabs-row" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={viewType === 'deliverables'}
              onClick={() => setViewType('deliverables')}
              className={`showcase-tab-btn ${viewType === 'deliverables' ? 'active' : ''}`}
            >
              <ShieldCheck size={16} />
              <span>5 Sản phẩm bàn giao thực tế</span>
              <span className="tab-count-pill">5</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={viewType === 'websites'}
              onClick={() => setViewType('websites')}
              className={`showcase-tab-btn ${viewType === 'websites' ? 'active' : ''}`}
            >
              <Globe size={16} />
              <span>Website thật đang hoạt động</span>
              <span className="tab-count-pill">{DEMO_SHOWCASES.length}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={viewType === 'workflows'}
              onClick={() => setViewType('workflows')}
              className={`showcase-tab-btn ${viewType === 'workflows' ? 'active' : ''}`}
            >
              <Zap size={16} />
              <span>Workflow &amp; Tự động hóa kiểm chứng</span>
              <span className="tab-count-pill">{PROOF_SHOWCASE_DATA.length}</span>
            </button>
          </div>
        </div>

        {/* ==================================================== */}
        {/* VIEW 1: 5 SẢN PHẨM BÀN GIAO THỰC TẾ (CHÍNH)           */}
        {/* ==================================================== */}
        {viewType === 'deliverables' && (
          <div className="deliverables-container">
            {/* Cam kết bàn giao minh bạch Bar */}
            <div className="deliv-trust-banner">
              <div className="deliv-trust-header">
                <ShieldCheck size={20} color="var(--color-primary)" />
                <span className="deliv-trust-title">
                  Cam kết chất lượng: Nghiệm thu hài lòng từng hạng mục mới thanh toán
                </span>
              </div>
              <div className="deliv-trust-badges">
                <span className="deliv-trust-pill">
                  <Check size={13} color="var(--color-primary)" /> 100% tài khoản chính chủ của bạn
                </span>
                <span className="deliv-trust-pill">
                  <Check size={13} color="var(--color-primary)" /> 0% kê giá quảng cáo
                </span>
                <span className="deliv-trust-pill">
                  <Check size={13} color="var(--color-primary)" /> Hướng dẫn 1-1 kèm video chi tiết
                </span>
              </div>
            </div>

            {/* Grid 5 Deliverable Cards */}
            <div className="deliverables-grid">
              {DELIVERABLES_DATA.map((item: DeliverableItem) => (
                <div key={item.id} className="deliv-card">
                  {/* Card Top Header */}
                  <div className="deliv-card-header">
                    <div className="deliv-number-badge">
                      <span className="deliv-icon-wrap">{renderDeliverableIcon(item.id)}</span>
                      <span className="deliv-seq-num">Mục {item.number}</span>
                    </div>
                    <span className="deliv-status-badge">
                      <ShieldCheck size={13} />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="deliv-title-box">
                    <h3 className="deliv-title">{item.title}</h3>
                    <p className="deliv-tagline">{item.tagline}</p>
                    <p className="deliv-desc">{item.description}</p>
                  </div>

                  {/* Mockup Visual Preview Container */}
                  <div className="deliv-mockup-box">
                    <div className="mockup-window-header">
                      <div className="mockup-dots" aria-hidden="true">
                        <span className="mockup-dot" style={{ backgroundColor: '#f87171' }} />
                        <span className="mockup-dot" style={{ backgroundColor: '#fbbf24' }} />
                        <span className="mockup-dot" style={{ backgroundColor: '#34d399' }} />
                      </div>
                      <div className="mockup-title-bar">
                        <Lock size={11} color="var(--color-primary)" />
                        <span className="mockup-url">{item.mockup.headerTitle}</span>
                      </div>
                    </div>

                    <div className="mockup-body">
                      <div className="mockup-subtext">{item.mockup.subtext}</div>

                      {/* Mockup Details Key-Values */}
                      <div className="mockup-details-list">
                        {item.mockup.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className={`mockup-detail-row ${detail.isHighlight ? 'highlight' : ''}`}
                          >
                            <span className="detail-label">{detail.label}:</span>
                            <span className="detail-value">{detail.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specialized Interactive Visual for Each Mockup */}
                      {item.id === 'deliv-website' && (
                        <div className="mockup-action-box">
                          <button
                            type="button"
                            onClick={() => setViewType('websites')}
                            className="mockup-action-btn"
                          >
                            <span>Xem 3 website thật đang chạy</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      )}

                      {item.id === 'deliv-admin' && (
                        <div className="mockup-cms-quick-actions">
                          <span className="mockup-quick-chip">✏️ Sửa bảng giá (30s)</span>
                          <span className="mockup-quick-chip">📝 Đăng bài viết mới</span>
                          <span className="mockup-quick-chip">🖼️ Đổi ảnh thực đơn</span>
                        </div>
                      )}

                      {item.id === 'deliv-maps' && (
                        <div className="mockup-maps-interactive">
                          <div className="mockup-maps-pin">
                            <MapPin size={15} color="#dc2626" />
                            <span>Vị trí ghim chính xác trên Google Maps • 5.0 ⭐</span>
                          </div>
                          <div className="mockup-maps-buttons">
                            <span className="mockup-map-btn">📍 Chỉ đường</span>
                            <span className="mockup-map-btn">📞 Gọi điện</span>
                            <span className="mockup-map-btn qr">Mã QR 5 sao</span>
                          </div>
                        </div>
                      )}

                      {item.id === 'deliv-content' && (
                        <div className="mockup-content-table">
                          <div className="content-table-row header">
                            <span>Lịch đăng</span>
                            <span>Chủ đề bài viết</span>
                            <span>Trạng thái</span>
                          </div>
                          <div className="content-table-row">
                            <span className="date-col">Tuần 1</span>
                            <span className="topic-col">Dịch vụ thực tế &amp; Cam kết của cơ sở</span>
                            <span className="status-col approved">✓ Đã duyệt</span>
                          </div>
                          <div className="content-table-row">
                            <span className="date-col">Tuần 2</span>
                            <span className="topic-col">Hướng dẫn khách lựa chọn gói phù hợp</span>
                            <span className="status-col approved">✓ Đã duyệt</span>
                          </div>
                        </div>
                      )}

                      {item.id === 'deliv-ads' && (
                        <div className="mockup-ads-transparency">
                          <div className="ads-pill">
                            <ReceiptText size={14} color="var(--color-primary)" />
                            <span>Hóa đơn trừ tiền trực tiếp từ Meta/Google (0đ kê giá)</span>
                          </div>
                          <div className="ads-stats-row">
                            <div className="ads-stat-box">
                              <span className="ads-stat-label">Lượt nhấp thật</span>
                              <span className="ads-stat-val">100% Real</span>
                            </div>
                            <div className="ads-stat-box">
                              <span className="ads-stat-label">Chủ thẻ Ads</span>
                              <span className="ads-stat-val">Chính bạn</span>
                            </div>
                            <div className="ads-stat-box">
                              <span className="ads-stat-label">Phí dịch vụ</span>
                              <span className="ads-stat-val">Cố định</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Checklist Tiêu Chuẩn Nghiệm Thu */}
                  <div className="deliv-checklist-box">
                    <div className="deliv-checklist-title">Tiêu chuẩn nghiệm thu bàn giao:</div>
                    <ul className="deliv-checklist">
                      {item.checklist.map((chk, idx) => (
                        <li key={idx} className="deliv-check-item">
                          <CheckCircle2 size={15} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{chk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* VIEW 2: WEBSITE THẬT ĐANG HOẠT ĐỘNG                  */}
        {/* ==================================================== */}
        {viewType === 'websites' && (
          <div>
            <div className="proof-banner-hint">
              <Globe size={18} color="var(--color-primary)" />
              <span>
                Toàn bộ website dưới đây được LocalMate xây dựng và vận hành thật. Bạn có thể bấm để trực tiếp trải nghiệm tốc độ và giao diện trên điện thoại.
              </span>
            </div>

            <div className="proof-cards-grid">
              {DEMO_SHOWCASES.map((demo) => (
                <Card
                  key={demo.id}
                  variant="surface"
                  hoverable
                  className="proof-web-card"
                >
                  <div>
                    {/* Header Tag & Industry */}
                    <div className="proof-card-top-row">
                      <span className="proof-industry-tag">
                        {demo.industry}
                      </span>
                      <span className="proof-active-status">
                        <ShieldCheck size={14} color="var(--color-primary)" /> Đang hoạt động thật
                      </span>
                    </div>

                    {/* Project Title & Link */}
                    <h3 className="proof-project-title">
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proof-title-link"
                      >
                        <span>{demo.title}</span>
                        <ArrowUpRight size={17} color="var(--color-primary)" />
                      </a>
                    </h3>

                    {/* Domain Pill */}
                    <div style={{ marginBottom: '0.85rem' }}>
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proof-domain-pill"
                      >
                        <Globe size={13} color="var(--color-primary)" />
                        <span>https://{demo.domain}</span>
                      </a>
                    </div>

                    {/* Summary text */}
                    <p className="proof-demo-summary">{demo.summary}</p>

                    {/* Key Highlights Checklist */}
                    <ul className="proof-features-list">
                      {demo.features.map((feat, idx) => (
                        <li key={idx} className="proof-feature-item">
                          <CheckCircle2 size={14} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-open-btn"
                  >
                    <span>Mở xem website thực tế</span>
                    <ExternalLink size={15} />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* VIEW 3: WORKFLOWS & AUTOMATION KIỂM CHỨNG            */}
        {/* ==================================================== */}
        {viewType === 'workflows' && (
          <div className="proof-cards-grid">
            {PROOF_SHOWCASE_DATA.map((wf) => (
              <div key={wf.id} className="proof-wf-card">
                <div>
                  <div className="proof-card-top-row">
                    <span className="proof-wf-tag">{wf.tag}</span>
                    <span className="proof-active-status">
                      <Zap size={14} color="var(--color-primary)" /> Đã test chạy thật
                    </span>
                  </div>

                  <h3 className="proof-wf-title">{wf.title}</h3>

                  <div className="proof-wf-block">
                    <div className="proof-wf-label">Bài toán thực tế:</div>
                    <p className="proof-wf-text">{wf.context}</p>
                  </div>

                  <div className="proof-wf-block" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
                    <div className="proof-wf-label" style={{ color: 'var(--color-primary-dark)' }}>Cách LocalMate xử lý:</div>
                    <p className="proof-wf-text" style={{ color: '#166534' }}>{wf.solutionBuilt}</p>
                  </div>
                </div>

                <div className="proof-wf-footer">
                  <div className="proof-wf-time">
                    <Clock size={13} color="var(--color-primary)" />
                    <span>{wf.executionTime}</span>
                  </div>
                  <div className="proof-wf-metric">
                    <strong>Kết quả:</strong> {wf.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>

      <style>{`
        /* View Switcher Tabs */
        .showcase-tabs-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2.25rem;
        }

        .showcase-tabs-row {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #f1f5f9;
          padding: 0.35rem;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          flex-wrap: wrap;
          justify-content: center;
          max-width: 100%;
        }

        .showcase-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.15rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 700;
          border: 1px solid transparent;
          background-color: transparent;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 42px;
        }

        .showcase-tab-btn:hover {
          color: var(--color-primary);
          background-color: #ffffff;
        }

        .showcase-tab-btn.active {
          background-color: #ffffff;
          color: var(--color-primary-dark);
          border-color: var(--color-border);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
        }

        .tab-count-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.1rem 0.45rem;
          border-radius: 999px;
          border: 1px solid var(--color-primary-border);
        }

        .showcase-tab-btn.active .tab-count-pill {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        /* Deliverables Container & Trust Banner */
        .deliverables-container {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .deliv-trust-banner {
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-primary);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .deliv-trust-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .deliv-trust-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .deliv-trust-title {
          font-size: 0.925rem;
          font-weight: 700;
          color: var(--color-navy);
        }

        .deliv-trust-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .deliv-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 600;
          color: #1e293b;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        /* Deliverables Grid */
        .deliverables-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .deliverables-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          /* Fifth card spans full width or centers cleanly */
          .deliverables-grid > .deliv-card:last-child:nth-child(odd) {
            grid-column: 1 / -1;
            max-width: 820px;
            margin: 0 auto;
            width: 100%;
          }
        }

        /* Single Deliverable Card */
        .deliv-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          min-width: 0;
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
        }

        .deliv-card:hover {
          border-color: var(--color-primary-border);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
        }

        .deliv-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .deliv-number-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .deliv-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
        }

        .deliv-seq-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .deliv-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #166534;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
        }

        .deliv-title-box {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .deliv-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.35;
        }

        .deliv-tagline {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary);
          margin: 0;
          line-height: 1.45;
        }

        .deliv-desc {
          font-size: 0.85rem;
          color: #475569;
          margin: 0.25rem 0 0 0;
          line-height: 1.55;
        }

        /* Mockup Box */
        .deliv-mockup-box {
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
        }

        .mockup-window-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0.85rem;
          background-color: #f1f5f9;
          border-bottom: 1px solid var(--color-border);
        }

        .mockup-dots {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .mockup-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .mockup-title-bar {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background-color: #ffffff;
          padding: 0.2rem 0.65rem;
          border-radius: 6px;
          border: 1px solid var(--color-border);
          font-family: monospace;
          font-size: 0.725rem;
          color: #334155;
          font-weight: 600;
          max-width: calc(100% - 40px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .mockup-body {
          padding: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mockup-subtext {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .mockup-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .mockup-detail-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.8rem;
          padding: 0.35rem 0.5rem;
          border-radius: 6px;
          background-color: #ffffff;
          border: 1px solid #f1f5f9;
        }

        .mockup-detail-row.highlight {
          background-color: #f0fdf4;
          border-color: #dcfce7;
        }

        .detail-label {
          font-weight: 600;
          color: #64748b;
          flex-shrink: 0;
        }

        .detail-value {
          font-weight: 700;
          color: #1e293b;
          text-align: right;
          word-break: break-word;
        }

        .mockup-detail-row.highlight .detail-value {
          color: var(--color-primary-dark);
        }

        /* Mockup Interactive Simulation Elements */
        .mockup-action-box {
          margin-top: 0.25rem;
        }

        .mockup-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          font-size: 0.775rem;
          font-weight: 700;
          background-color: var(--color-primary);
          color: #ffffff;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .mockup-action-btn:hover {
          background-color: var(--color-primary-hover);
        }

        .mockup-cms-quick-actions {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .mockup-quick-chip {
          font-size: 0.725rem;
          font-weight: 700;
          color: #0f172a;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
        }

        .mockup-maps-interactive {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          background-color: #ffffff;
          padding: 0.6rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }

        .mockup-maps-pin {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #1e293b;
        }

        .mockup-maps-buttons {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .mockup-map-btn {
          font-size: 0.725rem;
          font-weight: 600;
          color: #475569;
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
        }

        .mockup-map-btn.qr {
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          border-color: var(--color-primary-border);
          font-weight: 700;
        }

        .mockup-content-table {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          overflow: hidden;
          font-size: 0.725rem;
        }

        .content-table-row {
          display: grid;
          grid-template-columns: 55px 1fr 75px;
          gap: 0.5rem;
          padding: 0.4rem 0.6rem;
          border-bottom: 1px solid #f1f5f9;
          align-items: center;
        }

        .content-table-row.header {
          background-color: #f8fafc;
          font-weight: 700;
          color: #64748b;
          border-bottom: 1px solid var(--color-border);
        }

        .content-table-row:last-child {
          border-bottom: none;
        }

        .date-col {
          font-weight: 700;
          color: #334155;
        }

        .topic-col {
          color: #1e293b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .status-col.approved {
          color: #166534;
          font-weight: 700;
          text-align: right;
        }

        .mockup-ads-transparency {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ads-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #166534;
          background-color: #f0fdf4;
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          border: 1px solid #bbf7d0;
        }

        .ads-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }

        .ads-stat-box {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 0.4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .ads-stat-label {
          font-size: 0.675rem;
          color: #64748b;
          font-weight: 600;
        }

        .ads-stat-val {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-navy);
        }

        /* Checklist */
        .deliv-checklist-box {
          border-top: 1px solid var(--color-border);
          padding-top: 0.85rem;
        }

        .deliv-checklist-title {
          font-size: 0.775rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.55rem;
        }

        .deliv-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .deliv-check-item {
          font-size: 0.825rem;
          color: #334155;
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          line-height: 1.45;
        }

        /* Banner hint for live websites */
        .proof-banner-hint {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-primary);
          border-radius: 12px;
          padding: 0.85rem 1.25rem;
          margin-bottom: 1.75rem;
          font-size: 0.875rem;
          color: #334155;
          line-height: 1.5;
        }

        /* View 2 & 3 Cards Grid */
        .proof-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .proof-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .proof-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .proof-web-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.6rem;
          gap: 1.25rem;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          background-color: #ffffff;
          box-shadow: var(--shadow-sm);
        }

        .proof-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }

        .proof-industry-tag {
          font-size: 0.725rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        .proof-active-status {
          font-size: 0.75rem;
          color: #166534;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
        }

        .proof-project-title {
          font-size: 1.2rem;
          color: var(--color-navy);
          margin: 0 0 0.5rem 0;
          font-weight: 800;
          line-height: 1.35;
        }

        .proof-title-link {
          color: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .proof-title-link:hover {
          color: var(--color-primary);
        }

        .proof-domain-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          text-decoration: none;
        }

        .proof-domain-pill:hover {
          background-color: var(--color-primary-border);
        }

        .proof-demo-summary {
          font-size: 0.825rem;
          color: #475569;
          margin: 0 0 0.85rem 0;
          line-height: 1.5;
        }

        .proof-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .proof-feature-item {
          font-size: 0.825rem;
          color: #374151;
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          line-height: 1.4;
        }

        .proof-open-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 800;
          background-color: var(--color-primary);
          color: #ffffff;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .proof-open-btn:hover {
          background-color: var(--color-primary-hover);
          transform: translateY(-1px);
        }

        /* Workflow Card */
        .proof-wf-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          box-shadow: var(--shadow-sm);
        }

        .proof-wf-tag {
          font-size: 0.725rem;
          font-weight: 800;
          color: var(--color-orange-dark);
          background-color: var(--color-orange-soft);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .proof-wf-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.85rem 0;
          line-height: 1.35;
        }

        .proof-wf-block {
          background-color: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 0.75rem 0.85rem;
          margin-bottom: 0.65rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .proof-wf-label {
          font-size: 0.725rem;
          font-weight: 800;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .proof-wf-text {
          font-size: 0.825rem;
          color: #374151;
          margin: 0;
          line-height: 1.5;
        }

        .proof-wf-footer {
          border-top: 1px dashed var(--color-border);
          padding-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .proof-wf-time {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }

        .proof-wf-metric {
          font-size: 0.8rem;
          color: #1f2937;
          line-height: 1.4;
        }

        @media (max-width: 640px) {
          .showcase-tabs-row {
            flex-direction: column;
            width: 100%;
            border-radius: 16px;
            gap: 0.25rem;
          }
          .showcase-tab-btn {
            width: 100%;
            justify-content: center;
          }
          .deliv-card {
            padding: 1rem;
          }
          .deliv-trust-banner {
            padding: 0.85rem;
          }
          .deliv-trust-badges {
            flex-direction: column;
            align-items: flex-start;
          }
          .content-table-row {
            grid-template-columns: 46px 1fr 60px;
            gap: 0.3rem;
            padding: 0.35rem 0.4rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DemoShowcaseSection;
