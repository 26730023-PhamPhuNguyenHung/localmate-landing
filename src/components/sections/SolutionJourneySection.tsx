import React from 'react';
import { Container } from '../ui/Container';
import { Sparkles, CheckCircle2, Globe, MapPin, TrendingUp, ArrowRight } from 'lucide-react';

export const SolutionJourneySection: React.FC = () => {
  const journeySteps = [
    {
      num: '01',
      tag: 'BƯỚC 01',
      title: 'Làm rõ thông tin & Nền móng',
      lead: 'Khách xem là hiểu ngay',
      desc: 'Xây dựng website bán hàng hoặc trang giới thiệu dịch vụ rõ ràng, minh bạch bảng giá để khách hàng ghé qua là tin tưởng và hiểu ngay bạn kinh doanh gì.',
      outcome: 'Nền tảng số chuyên nghiệp, xem là hiểu',
      icon: Globe
    },
    {
      num: '02',
      tag: 'BƯỚC 02',
      title: 'Phủ sóng tìm kiếm địa phương',
      lead: 'Khách tìm là thấy ngay',
      desc: 'Chuẩn hóa và xác minh vị trí Google Maps, kết nối chỉ đường 1 chạm và hiển thị top đầu khi khách xung quanh tìm kiếm sản phẩm dịch vụ của bạn.',
      outcome: 'Google Maps định vị chuẩn, tìm là thấy',
      icon: MapPin
    },
    {
      num: '03',
      tag: 'BƯỚC 03',
      title: 'Tăng trưởng & Tiếp thị số',
      lead: 'Chi ngân sách đúng lúc',
      desc: 'Khi nền tảng và niềm tin đã vững, triển khai chiến dịch quảng cáo ra số thực tế và tối ưu nội dung đều đặn, không đốt tiền vô ích.',
      outcome: 'Đo lường rõ ràng, sinh lời bền vững',
      icon: TrendingUp
    }
  ];

  return (
    <section className="section-component journey-story-section" id="lo-trinh" aria-label="Lộ trình giải pháp từng bước">
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> LỘ TRÌNH ĐẦU TƯ THÔNG MINH
          </span>
          <h2 className="journey-main-heading">Không cần làm tất cả cùng lúc</h2>
          <p className="subtitle">
            LocalMate giúp bạn đi từng bước vững chắc theo đúng nhu cầu và ngân sách hiện có — làm đâu chắc đó, sinh lời đến đấy.
          </p>
        </div>

        {/* 3-Step Clean Interactive Journey Grid */}
        <div className="journey-track-wrapper">
          <div className="journey-track-line" aria-hidden="true" />

          <div className="journey-cards-grid">
            {journeySteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={step.num} className="journey-step-card">
                  {/* Step Header */}
                  <div className="journey-card-header">
                    <div className="journey-badge-cluster">
                      <span className="journey-number-display">{step.num}</span>
                      <span className="journey-tag-text">{step.tag}</span>
                    </div>
                    <div className="journey-icon-bubble" aria-hidden="true">
                      <IconComponent size={22} />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="journey-card-content">
                    <span className="journey-lead-micro">{step.lead}</span>
                    <h3 className="journey-card-title">{step.title}</h3>
                    <p className="journey-card-desc">{step.desc}</p>
                  </div>

                  {/* Step Outcome Box */}
                  <div className="journey-card-footer">
                    <div className="journey-outcome-pill">
                      <CheckCircle2 size={16} className="journey-check-icon" />
                      <span>{step.outcome}</span>
                    </div>
                  </div>

                  {/* Connector Arrow on Desktop */}
                  {idx < journeySteps.length - 1 && (
                    <div className="journey-next-arrow" aria-hidden="true">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <style>{`
        .journey-story-section {
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
          padding-top: clamp(3.25rem, 5vw, 5rem);
          padding-bottom: clamp(3.25rem, 5vw, 5rem);
          scrollbar-gutter: stable;
        }

        .journey-main-heading {
          text-wrap: pretty;
          font-size: var(--font-size-h2);
          font-weight: 800;
          color: var(--color-navy);
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .journey-track-wrapper {
          position: relative;
          margin-top: clamp(2.25rem, 4vw, 3.5rem);
        }

        /* Connector Line on Desktop */
        .journey-track-line {
          display: none;
        }

        @media (min-width: 768px) {
          .journey-track-line {
            display: block;
            position: absolute;
            top: 48px;
            left: calc(16.66% - 20px);
            right: calc(16.66% - 20px);
            height: 2px;
            background: linear-gradient(90deg, var(--color-primary-border) 0%, var(--color-primary) 50%, var(--color-primary-border) 100%);
            z-index: 1;
          }
        }

        .journey-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .journey-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        /* Card Container */
        .journey-step-card {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .journey-step-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 28px rgba(13, 118, 71, 0.08);
          background-color: #ffffff;
        }

        /* Header: Big Number Badge & Icon */
        .journey-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .journey-badge-cluster {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .journey-number-display {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          color: var(--color-primary);
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.04em;
        }

        .journey-tag-text {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .journey-icon-bubble {
          width: 44px;
          height: 44px;
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

        .journey-step-card:hover .journey-icon-bubble {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          transition: all 0.2s ease;
        }

        /* Content */
        .journey-card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .journey-lead-micro {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
        }

        .journey-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.65rem 0;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .journey-card-desc {
          font-size: 0.8875rem;
          color: var(--ink-soft);
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          text-wrap: pretty;
        }

        /* Outcome Box at Footer */
        .journey-card-footer {
          margin-top: auto;
        }

        .journey-outcome-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          text-wrap: pretty;
        }

        .journey-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        /* Desktop Next Arrow */
        .journey-next-arrow {
          display: none;
        }

        @media (min-width: 768px) {
          .journey-next-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: -14px;
            top: 50%;
            transform: translateY(-50%);
            width: 28px;
            height: 28px;
            border-radius: var(--radius-full);
            background-color: #ffffff;
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            z-index: 3;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionJourneySection;
