import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

export const PhilosophySection: React.FC = () => {
  const scenarios = [
    {
      label: 'Đã có tên miền hoặc hosting cũ?',
      solution: 'Giữ lại tiếp tục sử dụng',
      desc: 'LocalMate kiểm tra và tận dụng ngay máy chủ/tên miền bạn đang trả phí, không ép mua mới tốn kém.'
    },
    {
      label: 'Đã có trang Fanpage hoặc Zalo?',
      solution: 'Kết nối đón khách về một mối',
      desc: 'Tích hợp nút nhắn tin Zalo và gọi điện trực tiếp lên website để khách mở lên là bấm gọi ngay.'
    },
    {
      label: 'Website hiện tại chạy chậm hoặc lỗi?',
      solution: 'Kiểm tra và sửa trước khi xây mới',
      desc: 'Nếu cấu trúc cũ vẫn tốt, chúng tôi tư vấn sửa lỗi và tăng tốc tải trang, không cố tình vẽ việc xây mới.'
    },
    {
      label: 'Sau khi làm xong, ai làm chủ tài khoản?',
      solution: 'Bạn toàn quyền nắm giữ 100%',
      desc: 'Tên miền, hosting và vị trí Google Maps đều được tạo hoặc chuyển giao quyền cao nhất vào Gmail/SĐT của bạn.'
    }
  ];

  return (
    <section className="section-component visual-break-section" id="triet-ly" aria-label="Triết lý tận dụng thứ đã có">
      <Container>
        <div className="editorial-split">
          {/* Left Column: Manifesto */}
          <div className="editorial-split-sticky">
            <span className="section-eyebrow">
              <ShieldCheck size={14} /> TRIẾT LÝ VẬN HÀNH THỰC TẾ
            </span>
            <h2 className="philosophy-title">
              Không cần mua thêm phần mềm đắt đỏ rồi bỏ xó. LocalMate tận dụng thứ bạn đã có.
            </h2>
            <p className="philosophy-lead">
              Doanh nghiệp nhỏ và hộ kinh doanh không cần những hệ sinh thái cồng kềnh hàng chục triệu đồng. Chúng tôi đứng về phía người làm nghề: tập trung tạo ra khách hàng thật và chi phí thấp nhất.
            </p>

            <div className="philosophy-contact-box">
              <span className="contact-box-label">Cần tư vấn trực tiếp với kỹ thuật viên địa phương?</span>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="contact-box-link">
                Gọi Hotline: {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: 4 Real Scenarios */}
          <div className="philosophy-scenarios-list">
            {scenarios.map((item, idx) => (
              <div key={idx} className="scenario-card">
                <div className="scenario-header">
                  <span className="scenario-question">{item.label}</span>
                  <div className="scenario-solution-tag">
                    <CheckCircle2 size={15} className="solution-check-icon" />
                    <span>{item.solution}</span>
                  </div>
                </div>
                <p className="scenario-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        .philosophy-title {
          font-size: var(--font-size-h2);
          color: var(--ink);
          font-weight: 800;
          line-height: var(--line-height-h2);
          margin-bottom: 1.25rem;
          text-wrap: balance;
        }

        .philosophy-lead {
          font-size: var(--font-size-body);
          color: var(--ink-soft);
          line-height: var(--line-height-body);
          margin-bottom: 2rem;
          text-wrap: pretty;
        }

        .philosophy-contact-box {
          padding: 1.25rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .contact-box-label {
          font-size: 0.8125rem;
          color: var(--ink-muted);
        }

        .contact-box-link {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
        }

        .contact-box-link:hover {
          text-decoration: underline;
        }

        .philosophy-scenarios-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .scenario-card {
          padding: clamp(1.25rem, 2vw, 1.75rem);
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: border-color var(--transition-fast);
        }

        .scenario-card:hover {
          border-color: var(--color-primary-border);
        }

        .scenario-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        .scenario-question {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--ink);
        }

        .scenario-solution-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .solution-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .scenario-desc {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;
