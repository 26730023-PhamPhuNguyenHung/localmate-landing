import React from 'react';
import { Container } from '../ui/Container';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Search, LayoutDashboard, Rocket, Headphones } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      tag: 'BƯỚC 01',
      title: 'Khảo sát & Tư vấn',
      lead: 'Lắng nghe nhu cầu thực tế',
      desc: 'Trao đổi qua Zalo hoặc gặp trực tiếp tại cơ sở để nắm rõ mô hình kinh doanh, tệp khách địa phương và ngân sách thực tế. Tuyệt đối không vẽ thêm tính năng thừa.',
      deliverable: 'Bản tư vấn định hướng 0đ',
      icon: Search
    },
    {
      num: '02',
      tag: 'BƯỚC 02',
      title: 'Lên khung Demo',
      lead: 'Trải nghiệm trực quan',
      desc: 'Dựng bản demo chạy trực tiếp trên điện thoại để bạn xem thử giao diện, menu sản phẩm và các nút bấm liên hệ trước khi quyết định ký hợp đồng.',
      deliverable: 'Xem demo chạy thử 0đ',
      icon: LayoutDashboard
    },
    {
      num: '03',
      tag: 'BƯỚC 03',
      title: 'Tối ưu & Bàn giao',
      lead: 'Chuẩn kỹ thuật & Chính chủ',
      desc: 'Tối ưu tốc độ tải trang dưới 1.5s, chuẩn SEO địa phương, xác minh vị trí Google Maps và bàn giao 100% tài khoản quản trị tối cao vào Gmail của bạn.',
      deliverable: 'Bàn giao 100% quyền quản trị',
      icon: Rocket
    },
    {
      num: '04',
      tag: 'BƯỚC 04',
      title: 'Đồng hành trọn đời',
      lead: 'Hỗ trợ kỹ thuật 24/7',
      desc: 'Kỹ thuật viên địa phương túc trực hỗ trợ dài lâu, gửi kèm video 2 phút hướng dẫn tự cập nhật nội dung dễ hiểu, bảo hành kỹ thuật không thu phí duy trì vô lý.',
      deliverable: 'Bảo hành & Hỗ trợ trọn đời',
      icon: Headphones
    }
  ];

  return (
    <section className="section-component process-story-section" id="quy-trinh" aria-label="Quy trình làm việc 4 bước">
      <Container>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> QUY TRÌNH LÀM VIỆC 4 BƯỚC
          </span>
          <h2 className="process-main-heading">Rõ ràng từng bước — Nghiệm thu mới thanh toán</h2>
          <p className="subtitle">
            Tham chiếu quy trình tinh gọn, minh bạch: từ khảo sát nhu cầu, xem trước demo thực tế đến bàn giao làm chủ 100% và đồng hành kỹ thuật lâu dài.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div className="process-timeline-wrapper">
          {/* Connector Line for Desktop */}
          <div className="process-track-line" aria-hidden="true" />

          <div className="process-cards-grid">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={step.num} className="process-step-card">
                  {/* Step Header with Large Number Badge & Icon */}
                  <div className="step-card-header">
                    <div className="step-badge-cluster">
                      <span className="step-number-display">{step.num}</span>
                      <span className="step-tag-text">{step.tag}</span>
                    </div>
                    <div className="step-icon-bubble" aria-hidden="true">
                      <IconComponent size={20} />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="step-card-content">
                    <span className="step-lead-micro">{step.lead}</span>
                    <h3 className="step-card-title">{step.title}</h3>
                    <p className="step-card-desc">{step.desc}</p>
                  </div>

                  {/* Step Deliverable Pill */}
                  <div className="step-card-footer">
                    <div className="step-deliverable-pill">
                      <CheckCircle2 size={15} className="step-check-icon" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>

                  {/* Horizontal Arrow Indicator between steps (Desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="step-next-arrow" aria-hidden="true">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance Footer Banner */}
        <div className="process-reassurance-card">
          <div className="reassurance-icon-wrap" aria-hidden="true">
            <ShieldCheck size={26} />
          </div>
          <div className="reassurance-text-wrap">
            <h4 className="reassurance-title">Cam kết vàng từ LocalMate</h4>
            <p className="reassurance-desc">
              Bạn luôn được <strong>xem trước demo trực tiếp trên điện thoại</strong>. Chỉ khi trải nghiệm thực tế hài lòng và nghiệm thu từng tính năng, bạn mới tiến hành thanh toán. Không cọc trước rủi ro, không giam tài khoản.
            </p>
          </div>
        </div>
      </Container>

      <style>{`
        .process-story-section {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          padding-top: clamp(3rem, 5vw, 4.5rem);
          padding-bottom: clamp(3rem, 5vw, 4.5rem);
          scrollbar-gutter: stable;
        }

        .process-main-heading {
          text-wrap: pretty;
          font-size: var(--font-size-h2);
          font-weight: 800;
          color: var(--color-navy);
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .process-timeline-wrapper {
          position: relative;
          margin-top: clamp(2.25rem, 4vw, 3.5rem);
          margin-bottom: clamp(2.25rem, 4vw, 3.25rem);
        }

        /* Continuous Connector Line across Desktop */
        .process-track-line {
          display: none;
        }

        @media (min-width: 1024px) {
          .process-track-line {
            display: block;
            position: absolute;
            top: 46px;
            left: calc(12.5% - 20px);
            right: calc(12.5% - 20px);
            height: 2px;
            background: linear-gradient(90deg, var(--color-primary-border) 0%, var(--color-primary) 50%, var(--color-primary-border) 100%);
            z-index: 1;
          }
        }

        /* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */
        .process-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .process-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .process-cards-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
        }

        /* Card Item */
        .process-step-card {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .process-step-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(13, 118, 71, 0.08);
          background-color: #ffffff;
        }

        /* Card Header: Big Number + Tag & Icon */
        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .step-badge-cluster {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .step-number-display {
          font-size: 2.25rem;
          font-weight: 900;
          line-height: 1;
          color: var(--color-primary);
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.04em;
        }

        .step-tag-text {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .step-icon-bubble {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-full);
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          flex-shrink: 0;
        }

        .process-step-card:hover .step-icon-bubble {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          transition: all 0.2s ease;
        }

        /* Content Area */
        .step-card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .step-lead-micro {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
        }

        .step-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.65rem 0;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .step-card-desc {
          font-size: 0.875rem;
          color: var(--ink-soft);
          line-height: 1.6;
          margin: 0 0 1.25rem 0;
          text-wrap: pretty;
        }

        /* Deliverable Pill at Bottom */
        .step-card-footer {
          margin-top: auto;
        }

        .step-deliverable-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-md);
          width: 100%;
        }

        .step-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        /* Desktop Next Arrow */
        .step-next-arrow {
          display: none;
        }

        @media (min-width: 1024px) {
          .step-next-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: -14px;
            top: 50%;
            transform: translateY(-50%);
            width: 26px;
            height: 26px;
            border-radius: var(--radius-full);
            background-color: #ffffff;
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            z-index: 3;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
          }
        }

        /* Reassurance Card */
        .process-reassurance-card {
          background-color: var(--color-bg);
          border: 1px solid var(--color-primary-border);
          border-left: 4px solid var(--color-primary);
          border-radius: var(--radius-xl);
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          max-width: 860px;
          margin: 0 auto;
        }

        @media (max-width: 639px) {
          .process-reassurance-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
            gap: 0.85rem;
          }
        }

        .reassurance-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background-color: var(--color-primary-soft);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reassurance-text-wrap {
          flex: 1;
        }

        .reassurance-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.25rem 0;
        }

        .reassurance-desc {
          font-size: 0.875rem;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
          text-wrap: pretty;
        }

        .reassurance-desc strong {
          color: var(--color-primary-dark);
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
