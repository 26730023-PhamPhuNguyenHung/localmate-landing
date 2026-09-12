import React from 'react';
import { Container } from '../ui/Container';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Hiểu việc cần làm',
      lead: 'Lắng nghe nhu cầu thực tế',
      desc: 'Trao đổi qua Zalo hoặc gặp trực tiếp tại địa phương. LocalMate làm rõ tiệm cần website bán hàng, vị trí Google Maps hay quảng cáo ra số — tuyệt đối không vẽ thêm tính năng thừa.',
      deliverable: 'Bản phân tích nhu cầu 0đ'
    },
    {
      num: '02',
      title: 'Chốt phạm vi & giá',
      lead: 'Báo giá cố định trọn gói',
      desc: 'Báo giá minh bạch kèm phạm vi công việc chi tiết. Dựng bản demo xem trước 0đ chạy trực tiếp trên điện thoại của bạn để kiểm chứng giao diện trước khi quyết định.',
      deliverable: 'Xem demo chạy thử 0đ'
    },
    {
      num: '03',
      title: 'Triển khai & Kiểm thử',
      lead: 'Kỷ luật kỹ thuật chuẩn mực',
      desc: 'Thiết kế giao diện sắc nét, tối ưu tốc độ tải trang dưới 1.5s, cài đặt nút gọi hotline & chat Zalo 1 chạm, xác minh vị trí cửa hàng trên Google Maps.',
      deliverable: 'PageSpeed 95+ & Mobile Ready'
    },
    {
      num: '04',
      title: 'Bàn giao & Hỗ trợ',
      lead: 'Bạn làm chủ 100% tài khoản',
      desc: 'Bàn giao quyền quản trị tối cao (tên miền, máy chủ, Google Maps) vào Gmail của bạn. Video 2 phút hướng dẫn tự sửa nội dung và KTV địa phương đồng hành 24/7.',
      deliverable: 'Nghiệm thu ưng ý mới thanh toán'
    }
  ];

  return (
    <section className="section-component process-story-section" id="quy-trinh" aria-label="Cách LocalMate làm việc">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> QUY TRÌNH MINH BẠCH 4 BƯỚC
          </span>
          <h2>Cách LocalMate làm việc cùng bạn</h2>
          <p className="subtitle">
            Không mập mờ, không giam tài khoản, không chi phí phát sinh. Mọi giai đoạn triển khai đều được kiểm chứng và nghiệm thu thực tế.
          </p>
        </div>

        {/* 4-Step Horizontal Process on Desktop, Vertical Timeline on Mobile */}
        <div className="process-timeline-track">
          <div className="process-line-connector" aria-hidden="true" />
          
          <div className="process-steps-grid">
            {steps.map((step) => (
              <div key={step.num} className="process-step-column">
                <div className="process-step-node">
                  <span className="process-step-number">{step.num}</span>
                </div>

                <div className="process-step-body">
                  <div className="process-step-lead-badge">{step.lead}</div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                  
                  <div className="process-step-deliverable">
                    <CheckCircle2 size={15} className="step-check-icon" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance Footer Banner */}
        <div className="process-reassurance-banner">
          <div className="reassurance-text">
            <strong>Cam kết thanh toán:</strong> Bạn luôn được xem trước demo trên điện thoại, nghiệm thu hài lòng từng tính năng mới tiến hành thanh toán.
          </div>
        </div>
      </Container>

      <style>{`
        .process-story-section {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .process-timeline-track {
          position: relative;
          margin-top: clamp(2rem, 3.5vw, 3.5rem);
          margin-bottom: clamp(2.5rem, 4vw, 4rem);
        }

        .process-line-connector {
          display: none;
        }

        @media (min-width: 1024px) {
          .process-line-connector {
            display: block;
            position: absolute;
            top: 28px;
            left: 5%;
            right: 5%;
            height: 2px;
            background: linear-gradient(90deg, var(--color-primary-border) 0%, var(--color-primary) 50%, var(--color-primary-border) 100%);
            z-index: 1;
          }
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .process-steps-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        .process-step-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }

        .process-step-node {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background-color: #ffffff;
          border: 2px solid var(--color-primary);
          box-shadow: 0 0 0 4px var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          flex-shrink: 0;
        }

        .process-step-number {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          font-variant-numeric: tabular-nums;
        }

        .process-step-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .process-step-lead-badge {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .process-step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
          line-height: 1.25;
        }

        .process-step-desc {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          line-height: 1.6;
          margin: 0.25rem 0 0.75rem 0;
        }

        .process-step-deliverable {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .step-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .process-reassurance-banner {
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.75rem;
          text-align: center;
          font-size: var(--font-size-body);
          color: var(--ink);
          max-width: 860px;
          margin: 0 auto;
        }

        .reassurance-text strong {
          color: var(--color-primary-dark);
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
