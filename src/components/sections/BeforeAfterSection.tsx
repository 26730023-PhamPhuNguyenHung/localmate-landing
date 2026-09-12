import React from 'react';
import { Container } from '../ui/Container';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Sparkles, 
  DollarSign, 
  Clock, 
  KeyRound, 
  Layers, 
  Headphones, 
  ShieldCheck, 
  Award, 
  Zap 
} from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenConsultForm }) => {
  const comparisons = [
    {
      category: 'Chi phí đầu tư',
      icon: DollarSign,
      before: {
        headline: 'Chi phí mập mờ, dễ phát sinh',
        desc: 'Báo giá ban đầu rẻ nhưng phát sinh đủ loại phí cài đặt, module, bảo trì hàng tháng. Tốn từ 8 – 15 triệu mà không rõ hiệu quả.'
      },
      after: {
        headline: 'Trọn gói từ 2.900.000đ – Cố định 100%',
        desc: 'Báo giá minh bạch một lần duy nhất, cam kết 0đ chi phí ẩn. Hoàn thành nghiệm thu ưng ý mới phải thanh toán.'
      }
    },
    {
      category: 'Thời gian & Tiến độ',
      icon: Clock,
      before: {
        headline: 'Mất 1 – 2 tháng chờ đợi mệt mỏi',
        desc: 'Trao đổi qua lại lòng vòng với các agency xa xôi. Hẹn tới hẹn lui, lỡ mất kế hoạch khai trương hay mùa cao điểm bán hàng.'
      },
      after: {
        headline: 'Bàn giao nhanh trong 3 – 7 ngày',
        desc: 'Dựng sẵn bản demo thực tế trên chính thông tin của tiệm để xem thử 0đ. Triển khai thần tốc, đúng tiến độ cam kết.'
      }
    },
    {
      category: 'Quyền sở hữu tài khoản',
      icon: KeyRound,
      before: {
        headline: 'Bị giam quyền, phụ thuộc hoàn toàn',
        desc: 'Agency đứng tên miền, hosting và trang Maps. Muốn đổi số điện thoại, đổi giá món hay lấy lại tài khoản phải xin phép và tốn tiền.'
      },
      after: {
        headline: 'Chính chủ 100% – Toàn quyền làm chủ',
        desc: 'Đăng ký bằng CCCD và Gmail chính chủ của bạn. Bạn nắm giữ chìa khóa gốc, tự do toàn quyền quản lý 100% lâu dài.'
      }
    },
    {
      category: 'Hệ thống vận hành',
      icon: Layers,
      before: {
        headline: 'Bị ép mua phần mềm cồng kềnh',
        desc: 'Tư vấn các hệ thống CRM, ERP phức tạp vượt quá nhu cầu thực tế. Nhân viên khó dùng, tốn tiền duy trì rồi bỏ xó lãng phí.'
      },
      after: {
        headline: 'Tận dụng tối đa thứ tiệm đã có',
        desc: 'Tích hợp mượt mà với Zalo, Google Drive, Fanpage sẵn có. Video 2 phút hướng dẫn tự sửa chữ, đổi ảnh cực kỳ dễ dàng.'
      }
    },
    {
      category: 'Hỗ trợ kỹ thuật khi có sự cố',
      icon: Headphones,
      before: {
        headline: 'Gọi tổng đài đùn đẩy, không ai ở gần',
        desc: 'Website gặp lỗi hoặc Maps bị đối thủ chơi xấu chỉ biết gửi vé hỗ trợ chờ cả tuần. Không có ai trực tiếp tới kiểm tra.'
      },
      after: {
        headline: 'Kỹ thuật viên địa phương xử lý 1-1',
        desc: 'Có mặt hỗ trợ trực tiếp tại cửa hàng hoặc giải quyết qua nhóm Zalo riêng trong 15 – 30 phút. Đồng hành dài lâu như người nhà.'
      }
    }
  ];

  const guarantees = [
    {
      icon: Award,
      title: 'Cam kết chất lượng',
      desc: 'Dựng demo thực tế xem trước 0đ. Khách hàng nghiệm thu ưng ý 100% mới tiến hành thanh toán.'
    },
    {
      icon: ShieldCheck,
      title: 'Bảo hành kỹ thuật',
      desc: 'Bảo hành vận hành website & Google Maps. Kỹ thuật viên đồng hành 1-1 qua nhóm Zalo riêng.'
    },
    {
      icon: Zap,
      title: 'Không phát sinh chi phí',
      desc: 'Báo giá niêm yết trong hợp đồng là con số cuối cùng. Tuyệt đối không phụ phí cài đặt hay bảo trì ẩn.'
    }
  ];

  return (
    <section className="section-component before-after-section" id="so-sanh" aria-label="So sánh cách làm cũ và giải pháp LocalMate">
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} className="eyebrow-icon" /> ĐỐI CHIẾU THỰC TẾ &amp; MINH CHỨNG
          </span>
          <h2 className="section-title">
            Cách Làm Cũ Tốn Kém, Phụ Thuộc <br className="hidden md:inline" />
            <span className="text-primary">VS Trải Nghiệm Tinh Gọn Cùng LocalMate</span>
          </h2>
          <p className="subtitle">
            Không lý thuyết xa vời, không vẽ thêm phần mềm phức tạp. Dưới đây là sự khác biệt đo đếm được ngay sau 3 – 7 ngày làm việc.
          </p>
        </div>

        {/* Transition Process Ribbon */}
        <div className="transformation-ribbon">
          <div className="ribbon-step step-old">
            <span className="ribbon-dot dot-red" />
            <span>01. Mù mờ kỹ thuật &amp; Chi phí</span>
          </div>
          <ArrowRight size={16} className="ribbon-arrow" />
          <div className="ribbon-step step-mid">
            <span className="ribbon-dot dot-amber" />
            <span>02. Xem trước bản Demo 0đ</span>
          </div>
          <ArrowRight size={16} className="ribbon-arrow" />
          <div className="ribbon-step step-new">
            <span className="ribbon-dot dot-green" />
            <span>03. Bàn giao 100% chính chủ</span>
          </div>
          <ArrowRight size={16} className="ribbon-arrow" />
          <div className="ribbon-step step-highlight">
            <span className="ribbon-badge">KẾT QUẢ</span>
            <span>04. Tự tin đón khách &amp; Tăng doanh thu</span>
          </div>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="comparison-matrix-wrapper">
          <div className="comparison-header-row">
            <div className="comp-col-category">Tiêu chí so sánh</div>
            <div className="comp-col-before">
              <div className="col-header-badge badge-before">
                <ShieldAlert size={14} /> CÁCH LÀM CŨ / TỰ MÀY MÒ
              </div>
              <div className="col-header-sub">Tốn kém, chậm chạp, dễ bị phụ thuộc</div>
            </div>
            <div className="comp-col-after">
              <div className="col-header-badge badge-after">
                <CheckCircle2 size={14} /> CÙNG LOCALMATE TINH GỌN
              </div>
              <div className="col-header-sub">Chủ động, tiết kiệm, KTV hỗ trợ tận nơi</div>
            </div>
          </div>

          <div className="comparison-body">
            {comparisons.map((item, idx) => {
              const CatIcon = item.icon;
              return (
                <div className="comparison-row" key={idx}>
                  {/* Category Title */}
                  <div className="comp-cell comp-cell-category">
                    <div className="category-icon-wrap" aria-hidden="true">
                      <CatIcon size={16} />
                    </div>
                    <span className="category-title">{item.category}</span>
                  </div>

                  {/* Before (Old Way) */}
                  <div className="comp-cell comp-cell-before">
                    <div className="cell-indicator indicator-red">
                      <XCircle size={18} className="icon-cross" />
                    </div>
                    <div className="cell-content">
                      <h4 className="cell-headline headline-red">{item.before.headline}</h4>
                      <p className="cell-desc">{item.before.desc}</p>
                    </div>
                  </div>

                  {/* After (LocalMate) */}
                  <div className="comp-cell comp-cell-after">
                    <div className="cell-indicator indicator-green">
                      <CheckCircle2 size={18} className="icon-check" />
                    </div>
                    <div className="cell-content">
                      <h4 className="cell-headline headline-green">{item.after.headline}</h4>
                      <p className="cell-desc">{item.after.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Trust Guarantees Cards (Thẻ cam kết uy tín - Tham chiếu chuẩn saosangedu) */}
        <div className="guarantees-grid">
          {guarantees.map((g, idx) => {
            const GIcon = g.icon;
            return (
              <div className="guarantee-card" key={idx}>
                <div className="guarantee-icon-box" aria-hidden="true">
                  <GIcon size={22} strokeWidth={2.4} />
                </div>
                <div className="guarantee-text">
                  <h3 className="guarantee-title">{g.title}</h3>
                  <p className="guarantee-desc">{g.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="comparison-action-bar">
          <div className="action-bar-text">
            <span className="action-bar-title">Bạn muốn kiểm tra giải pháp phù hợp nhất cho quán của mình?</span>
            <span className="action-bar-desc">Kỹ thuật viên LocalMate sẽ tư vấn và lên phác thảo demo 0đ trong 24h.</span>
          </div>
          <button 
            type="button"
            className="btn btn-primary action-bar-btn"
            onClick={() => onOpenConsultForm && onOpenConsultForm('Nhận tư vấn 0đ từ kỹ thuật viên')}
          >
            Nhận tư vấn 0đ từ kỹ thuật viên <ArrowRight size={18} />
          </button>
        </div>
      </Container>

      <style>{`
        .before-after-section {
          background-color: var(--color-bg);
          padding: clamp(3.5rem, 6vw, 5.5rem) 0;
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        /* Ribbon */
        .transformation-ribbon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.75rem;
          flex-wrap: wrap;
        }

        .ribbon-step {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 600;
          line-height: 1.2;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--ink-soft);
        }

        .ribbon-arrow {
          color: var(--color-primary);
          opacity: 0.6;
        }

        .ribbon-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background-color: #ef4444; }
        .dot-amber { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .step-highlight {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary-border);
          color: var(--color-primary-dark);
          font-weight: 700;
        }

        .ribbon-badge {
          background-color: var(--color-primary);
          color: #ffffff;
          font-size: 0.65rem;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        /* Comparison Matrix */
        .comparison-matrix-wrapper {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: 2.5rem;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
        }

        .comparison-header-row {
          display: grid;
          grid-template-columns: 1fr;
          background-color: var(--color-surface-subtle);
          border-bottom: 1px solid var(--color-border);
        }

        @media (min-width: 768px) {
          .comparison-header-row {
            grid-template-columns: 180px 1fr 1fr;
          }
        }

        .comp-col-category {
          display: none;
          padding: 1.25rem 1.5rem;
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-right: 1px solid var(--color-border);
          align-items: center;
        }

        @media (min-width: 768px) {
          .comp-col-category {
            display: flex;
          }
        }

        .comp-col-before {
          padding: 1.25rem 1.5rem;
          border-right: 1px solid var(--color-border);
          background-color: #fffaf9;
        }

        .comp-col-after {
          padding: 1.25rem 1.5rem;
          background-color: #f4fbf7;
        }

        .col-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.35rem;
        }

        .badge-before {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .badge-after {
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
        }

        .col-header-sub {
          font-size: 0.8125rem;
          color: var(--ink-muted);
        }

        /* Comparison Body Rows */
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr;
          border-bottom: 1px solid var(--color-border-subtle);
          transition: background-color 0.15s ease;
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        @media (min-width: 768px) {
          .comparison-row {
            grid-template-columns: 180px 1fr 1fr;
          }
        }

        .comp-cell {
          padding: 1.25rem 1.5rem;
        }

        .comp-cell-category {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border-right: 1px solid var(--color-border-subtle);
          background-color: var(--color-surface-subtle);
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--ink);
        }

        .category-icon-wrap {
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .comp-cell-before {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          border-right: 1px solid var(--color-border-subtle);
          background-color: #ffffff;
        }

        .comp-cell-after {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background-color: #ffffff;
        }

        .cell-indicator {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .icon-cross {
          color: #dc2626;
        }

        .icon-check {
          color: var(--color-primary);
        }

        .cell-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .cell-headline {
          font-size: 0.9375rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .headline-red {
          color: #991b1b;
        }

        .headline-green {
          color: var(--color-primary-dark);
        }

        .cell-desc {
          font-size: 0.8125rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.5;
          text-wrap: pretty;
        }

        /* Guarantees Cards (3 Thẻ Cam Kết) */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 768px) {
          .guarantees-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .guarantee-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .guarantee-card:hover {
          border-color: var(--color-primary-border);
          box-shadow: 0 4px 16px -2px rgba(13, 118, 71, 0.08);
          transform: translateY(-2px);
        }

        .guarantee-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .guarantee-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 0.35rem 0;
          line-height: 1.3;
          text-wrap: pretty;
        }

        .guarantee-desc {
          font-size: 0.8125rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.5;
          text-wrap: pretty;
        }

        /* Action Bar */
        .comparison-action-bar {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-primary);
          border-radius: var(--radius-lg);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: flex-start;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .comparison-action-bar {
            flex-direction: row;
            align-items: center;
          }
        }

        .action-bar-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .action-bar-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--ink);
          text-wrap: pretty;
        }

        .action-bar-desc {
          font-size: 0.875rem;
          color: var(--ink-soft);
          text-wrap: pretty;
        }

        .action-bar-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterSection;
