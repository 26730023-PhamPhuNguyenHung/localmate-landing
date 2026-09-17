import React from 'react';
import { Container } from '../../ui/Container';
import { GeoPricingCard } from './GeoPricingCard';
import { ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface GeoPricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const GeoPricingSection: React.FC<GeoPricingSectionProps> = ({ onSelectPlan }) => {
  const setupFeatures = [
    'Audit ChatGPT, Gemini, Perplexity & Google AI',
    'Kiểm tra câu hỏi khách thực sự hỏi AI',
    'So sánh thương hiệu với 3 đối thủ',
    'Tối ưu entity & thông tin doanh nghiệp',
    'Tối ưu cấu trúc website cho AI crawler',
    'Schema & structured data cần thiết',
    'Tối ưu 5 trang quan trọng',
    'Xây dựng FAQ / Answer-first content',
    'Bộ 20 truy vấn AI để theo dõi',
    'Báo cáo trước & sau triển khai'
  ];

  const growthFeatures = [
    'Theo dõi AI Visibility hàng tháng',
    'Kiểm tra ChatGPT / Gemini / Perplexity',
    'Theo dõi đối thủ cạnh tranh',
    'Tối ưu nội dung hiện có',
    'Xây dựng nội dung theo câu hỏi mua hàng',
    'Củng cố Brand Mention & Entity',
    'Theo dõi Citation / Brand Mention',
    'Báo cáo thay đổi hàng tháng'
  ];

  return (
    <section className="geo-pricing-viewport" id="bang-gia-geo">
      <Container size="wide">
        <div className="gp-wrapper">
          {/* Header */}
          <div className="gp-header">
            <div className="gp-pre-badge">
              <Sparkles size={14} />
              <span>BƯỚC ĐẦU 0Đ · BẮT ĐẦU NHỎ · THẤY PHÙ HỢP MỚI MỞ RỘNG</span>
            </div>
            <h2 className="gp-title">BẮT ĐẦU NHỎ. THẤY PHÙ HỢP RỒI MỚI MỞ RỘNG.</h2>
            <p className="gp-desc">
              Không bắt buộc duy trì dài hạn. Khởi động bằng gói Setup chuẩn hóa nền tảng một lần, chỉ mở rộng sang gói duy trì khi bạn đã thấy rõ tín hiệu và kết quả đề xuất trên AI.
            </p>
          </div>

          {/* 2 Pricing Cards Grid */}
          <div className="gp-cards-grid">
            <GeoPricingCard
              name="GEO SETUP"
              price="2.490.000"
              unit="đ / lần"
              badge="GÓI KHỞI ĐỘNG NỀN TẢNG · ĐƯỢC CHỌN NHIỀU NHẤT"
              isFeatured={true}
              audience="Dành cho doanh nghiệp đã có website và muốn bắt đầu xuất hiện tốt hơn trên AI Search."
              features={setupFeatures}
              priceNote="2.490.000đ — thanh toán một lần"
              ctaText="BẮT ĐẦU GEO SETUP"
              onSelect={() => onSelectPlan('Gói GEO Setup 2.490.000đ')}
            />

            <GeoPricingCard
              name="GEO GROWTH"
              price="Từ 2.990.000"
              unit="đ / tháng"
              badge="GÓI DUY TRÌ & MỞ RỘNG ĐỘ PHỦ HÀNG THÁNG"
              isFeatured={false}
              audience="Dành cho doanh nghiệp muốn tiếp tục tăng độ phủ sau khi hoàn thành GEO Setup."
              features={growthFeatures}
              footerBadge="Không bắt buộc duy trì hàng tháng."
              ctaText="XEM WEBSITE PHÙ HỢP GÓI NÀO"
              onSelect={() => onSelectPlan('Gói GEO Growth từ 2.990.000đ/tháng')}
            />
          </div>

          {/* Bottom Transparency Bar */}
          <div className="gp-transparency-bar">
            <div className="gp-transparency-item">
              <ShieldCheck size={16} className="gp-transparency-icon" />
              <span>Không cam kết ảo “ép ChatGPT lên Top 1”. Chúng tôi đo lường và tối ưu các yếu tố kỹ thuật tác động được.</span>
            </div>
            <div className="gp-transparency-item">
              <HelpCircle size={16} className="gp-transparency-icon" />
              <span>Chưa có website? Chúng tôi hỗ trợ khởi tạo landing page bán hàng từ 490k để bắt đầu.</span>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .geo-pricing-viewport {
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding-top: clamp(16px, 2.5vh, 36px);
          padding-bottom: clamp(16px, 2.5vh, 36px);
          box-sizing: border-box;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gp-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: clamp(12px, 1.8vh, 22px);
        }

        .gp-header {
          text-align: center;
          max-width: 920px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .gp-pre-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          padding: 3px 10px;
          border-radius: 9999px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .gp-title {
          font-size: clamp(20px, 2.1vw, 30px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.01em;
          word-break: keep-all;
          text-wrap: balance;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gp-desc {
          font-size: clamp(13px, 1.05vw, 15px);
          color: #475569;
          line-height: 1.5;
          margin: 0;
          max-width: 760px;
          text-wrap: pretty;
        }

        .gp-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(16px, 2vw, 28px);
          align-items: stretch;
          max-width: 1080px;
          width: 100%;
        }

        @media (max-width: 860px) {
          .geo-pricing-viewport {
            min-height: auto;
            padding-top: 36px;
            padding-bottom: 44px;
          }
          .gp-cards-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
          }
        }

        .gp-transparency-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 24px;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 8px 18px;
          max-width: 1080px;
          width: 100%;
          box-sizing: border-box;
        }

        .gp-transparency-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #475569;
          line-height: 1.35;
          font-weight: 500;
        }

        .gp-transparency-icon {
          color: #0d7647;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
