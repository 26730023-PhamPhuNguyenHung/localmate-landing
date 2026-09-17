import React from 'react';
import { Container } from '../../ui/Container';
import { Bot, Sparkles } from 'lucide-react';
import { GeoLeadFormCard } from './GeoLeadFormCard';

interface GeoValueSectionProps {
  selectedPackage?: string;
}

export const GeoValueSection: React.FC<GeoValueSectionProps> = ({
  selectedPackage = 'Gói GEO Setup 2.490.000đ'
}) => {
  const prompts = [
    {
      engine: 'Khách hỏi ChatGPT',
      text: '“Công ty thiết kế website cho trường mầm non nào tốt?”'
    },
    {
      engine: 'Khách hỏi Gemini',
      text: '“Agency chạy Google Ads cho doanh nghiệp nhỏ?”'
    },
    {
      engine: 'Khách hỏi Perplexity',
      text: '“Dịch vụ kế toán cho startup tại TP.HCM?”'
    },
    {
      engine: 'Khách hỏi AI Overviews',
      text: '“Nên chọn đơn vị nào để làm website bán hàng?”'
    }
  ];

  const outcomes = [
    {
      num: '01',
      title: 'AI đang nói gì về bạn',
      desc: 'Thương hiệu có xuất hiện không, xuất hiện ở đâu và được mô tả thế nào.'
    },
    {
      num: '02',
      title: 'Đối thủ nào đang được AI nhắc đến',
      desc: 'Và họ đang có những tín hiệu nào mà website bạn đang thiếu.'
    },
    {
      num: '03',
      title: 'Cần làm gì trước',
      desc: 'Không làm hàng trăm đầu việc SEO dàn trải. Tập trung vào các trang và tín hiệu giá trị nhất.'
    },
    {
      num: '04',
      title: 'Có cải thiện hay không',
      desc: 'Theo dõi cùng một bộ truy vấn theo thời gian thay vì chỉ gửi ảnh chụp màn hình đẹp mắt.'
    }
  ];

  return (
    <section className="geo-value-viewport" id="gia-tri-geo">
      <Container size="wide">
        <div className="gv-wrapper">
          {/* Header */}
          <div className="gv-header">
            <div className="gv-badge">
              <Sparkles size={14} />
              <span>KHÔNG CHỈ “LÊN AI” · MỤC TIÊU LÀ TẠO RA KHÁCH HÀNG</span>
            </div>
            <h2 className="gv-title">
              MỤC TIÊU LÀ XUẤT HIỆN ĐÚNG LÚC KHÁCH ĐANG CHỌN NHÀ CUNG CẤP
            </h2>
            <p className="gv-desc">
              Chúng tôi xác định những câu hỏi có ý định mua hàng cao nhất với ngành nghề của bạn, sau đó tối ưu website và dữ liệu thực thể để thương hiệu có cơ hội được AI trích dẫn khi trả lời.
            </p>
          </div>

          {/* 2 Balanced Columns: Prompts vs Outcomes */}
          <div className="gv-grid">
            {/* Left Column: Simulated Prompts */}
            <div className="gv-prompts-col">
              <div className="gv-col-tag">Ví dụ các câu hỏi khách hàng hay hỏi AI:</div>
              <div className="gv-prompts-list">
                {prompts.map((item, idx) => (
                  <div key={idx} className="gv-prompt-card">
                    <div className="gv-prompt-avatar">
                      <Bot size={17} />
                    </div>
                    <div className="gv-prompt-content">
                      <span className="gv-prompt-engine">{item.engine}</span>
                      <p className="gv-prompt-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Outcomes (01 to 04) */}
            <div className="gv-outcomes-col">
              <div className="gv-col-tag">Bạn sẽ biết được rõ ràng:</div>
              <div className="gv-outcomes-grid">
                {outcomes.map((item, idx) => (
                  <div key={idx} className="gv-outcome-card">
                    <div className="gv-outcome-header">
                      <span className="gv-outcome-num">{item.num}</span>
                      <h3 className="gv-outcome-title">{item.title}</h3>
                    </div>
                    <p className="gv-outcome-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Lead Form Closer Card (Dark Contrast Anchor) */}
          <div className="gv-closer-card" id="audit-form-bottom">
            <GeoLeadFormCard
              id="bottom-audit-form"
              variant="dark"
              title="KIỂM TRA WEBSITE TRƯỚC KHI QUYẾT ĐỊNH"
              subtitle="Không cần mua ngay. Kiểm tra hiện trạng trước. Báo cáo gửi riêng qua Zalo trong 2-4h."
              ctaText="NHẬN AI VISIBILITY AUDIT MIỄN PHÍ"
              sourceContext="bottom_value_section"
              selectedPackage={selectedPackage}
              checkpoints={[
                'Đo độ nhận diện thương hiệu trên 4 nền tảng AI',
                'So sánh trực tiếp với 3 đối thủ cùng ngành',
                'Chỉ rõ trang web đang thiếu thẻ Schema/Entity nào',
                'Báo cáo hoàn toàn miễn phí 0đ — không phát sinh phí ẩn'
              ]}
            />
          </div>
        </div>
      </Container>

      <style>{`
        .geo-value-viewport {
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          padding-top: clamp(28px, 4vh, 56px);
          padding-bottom: clamp(28px, 4vh, 56px);
          box-sizing: border-box;
        }

        .gv-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: clamp(18px, 2.5vh, 28px);
        }

        .gv-header {
          text-align: center;
          max-width: 880px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .gv-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 800;
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          padding: 4px 12px;
          border-radius: 9999px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .gv-title {
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.01em;
          word-break: keep-all;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gv-desc {
          font-size: clamp(14px, 1.1vw, 16px);
          color: #475569;
          line-height: 1.55;
          margin: 0;
          max-width: 820px;
          text-wrap: pretty;
        }

        .gv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(20px, 3vw, 36px);
          width: 100%;
          max-width: 1120px;
        }

        @media (max-width: 860px) {
          .geo-value-viewport {
            min-height: auto;
            padding-top: 40px;
            padding-bottom: 48px;
          }
          .gv-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .gv-col-tag {
          font-size: 12.5px;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
        }

        .gv-prompts-col,
        .gv-outcomes-col {
          display: flex;
          flex-direction: column;
        }

        .gv-prompts-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gv-prompt-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 4px solid #0d7647;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          box-shadow: 0 2px 4px rgba(15, 23, 42, 0.03);
        }

        .gv-prompt-avatar {
          width: 30px;
          height: 30px;
          background-color: #edf7f1;
          color: #0d7647;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .gv-prompt-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gv-prompt-engine {
          font-size: 11px;
          font-weight: 750;
          color: #64748b;
          text-transform: uppercase;
        }

        .gv-prompt-text {
          font-size: 13.5px;
          font-weight: 650;
          color: #0f172a;
          margin: 0;
          line-height: 1.4;
          font-style: italic;
        }

        .gv-outcomes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        @media (max-width: 520px) {
          .gv-outcomes-grid {
            grid-template-columns: 1fr;
          }
        }

        .gv-outcome-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .gv-outcome-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gv-outcome-num {
          font-size: 12.5px;
          font-weight: 900;
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .gv-outcome-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
        }

        .gv-outcome-desc {
          font-size: 12.5px;
          line-height: 1.45;
          color: #475569;
          margin: 0;
        }

        .gv-closer-card {
          width: 100%;
          max-width: 860px;
        }
      `}</style>
    </section>
  );
};
