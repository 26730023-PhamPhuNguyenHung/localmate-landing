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
          padding-top: clamp(28px, 4vh, 56px);
          padding-bottom: clamp(28px, 4vh, 56px);
          box-sizing: border-box;
        }

        .gp-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: clamp(18px, 2.5vh, 28px);
        }

        .gp-header {
          text-align: center;
          max-width: 960px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .gp-pre-badge {
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

        .gp-title {
          font-size: clamp(21px, 2.2vw, 32px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.02em;
          word-break: keep-all;
          text-wrap: balance;
        }

        .gp-desc {
          font-size: clamp(14px, 1.1vw, 16px);
          color: #475569;
          line-height: 1.55;
          margin: 0;
          max-width: 780px;
          text-wrap: pretty;
        }

        .gp-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(20px, 2.5vw, 32px);
          align-items: stretch;
          max-width: 1060px;
          width: 100%;
        }

        @media (max-width: 840px) {
          .geo-pricing-viewport {
            min-height: auto;
            padding-top: 40px;
            padding-bottom: 48px;
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
          gap: 16px 28px;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 10px 20px;
          max-width: 1060px;
          width: 100%;
          box-sizing: border-box;
        }

        .gp-transparency-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #475569;
          line-height: 1.4;
          font-weight: 550;
        }

        .gp-transparency-icon {
          color: #0d7647;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
