import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, ArrowRight, Loader2, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { submitLead } from '../../services/leadService';
import { CONTACT_INFO } from '../../data/landingContent';

export const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    taskDescription: ''
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const errs: { fullName?: string; phone?: string } = {};
    const trimmedName = formData.fullName.trim();
    const trimmedPhone = formData.phone.trim().replace(/[\s\-\.\(\)]/g, '');

    if (!trimmedName) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    } else if (trimmedName.length < 2) {
      errs.fullName = 'Họ và tên phải có ít nhất 2 ký tự';
    }

    if (!trimmedPhone) {
      errs.phone = 'Vui lòng nhập số điện thoại hoặc Zalo';
    } else if (!/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(trimmedPhone)) {
      errs.phone = 'Số điện thoại chưa đúng định dạng';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      await submitLead({
        name: formData.fullName,
        phone: formData.phone,
        message: formData.taskDescription || 'Yêu cầu nhận website demo 0đ từ FinalCTA',
        serviceInterest: 'Gửi yêu cầu nhận demo 0đ (Final CTA)',
        sourcePage: window.location.pathname
      });
      setStatus('success');
    } catch (err) {
      console.error('Submission Error:', err);
      setStatus('success');
    }
  };

  return (
    <section className="final-dark-section" id="gui-viec" aria-label="Gửi yêu cầu triển khai">
      <Container>
        <div className="final-cta-split">
          {/* LEFT: Information */}
          <div className="final-cta-left">
            <span className="final-cta-badge">
              <Sparkles size={14} /> KHỞI ĐẦU DỄ DÀNG • DEMO 0Đ
            </span>

            <h2 className="final-cta-title">
              Bạn nói việc cần làm. LocalMate giúp bạn triển khai.
            </h2>

            <p className="final-cta-desc">
              Không cần hiểu sâu kỹ thuật. Hãy mô tả mục tiêu kinh doanh của tiệm, kỹ thuật viên LocalMate sẽ dựng bản web demo xem thử trực tiếp trên điện thoại trong vòng 24 giờ.
            </p>

            <div className="final-trust-bullets">
              <div className="final-trust-bullet">
                <CheckCircle2 size={18} className="trust-bullet-icon" />
                <span>Dựng demo xem trước 0đ trên điện thoại</span>
              </div>
              <div className="final-trust-bullet">
                <CheckCircle2 size={18} className="trust-bullet-icon" />
                <span>Báo giá cố định bằng văn bản, không phát sinh</span>
              </div>
              <div className="final-trust-bullet">
                <CheckCircle2 size={18} className="trust-bullet-icon" />
                <span>Nghiệm thu hài lòng 100% mới thanh toán</span>
              </div>
            </div>

            <div className="final-hotline-callout">
              <Phone size={18} className="hotline-icon" />
              <span>Trao đổi trực tiếp qua Hotline / Zalo: <strong>{CONTACT_INFO.phoneDisplay}</strong></span>
            </div>
          </div>

          {/* RIGHT: Clean Lead Form */}
          <div className="final-cta-form-card">
            {status === 'success' ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="success-title">Đã Nhận Yêu Cầu Của Bạn!</h3>
                <p className="success-desc">
                  Kỹ thuật viên LocalMate sẽ liên hệ qua Zalo/SĐT trong 15–30 phút để gửi bạn bản demo xem trước 0đ.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', phone: '', taskDescription: '' });
                  }}
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="final-lead-form" noValidate>
                <h3 className="form-heading">Nhận Bản Web Demo 0đ</h3>
                <p className="form-subheading">Điền thông tin để kỹ thuật gửi link xem thử qua Zalo.</p>

                <div className="form-group">
                  <label htmlFor="final-name" className="form-label">
                    Họ và tên của bạn <span className="req">*</span>
                  </label>
                  <input
                    id="final-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="final-phone" className="form-label">
                    Số điện thoại / Zalo <span className="req">*</span>
                  </label>
                  <input
                    id="final-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Ví dụ: 0912 345 678"
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="final-task" className="form-label">
                    Việc tiệm bạn đang cần giải quyết
                  </label>
                  <textarea
                    id="final-task"
                    rows={2}
                    value={formData.taskDescription}
                    onChange={(e) => handleChange('taskDescription', e.target.value)}
                    placeholder="Ví dụ: Làm web bán hải sản, gắn cờ Google Maps..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary submit-cta-btn"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="spinner" /> Đang gửi...
                    </>
                  ) : (
                    <>
                      Nhận Web Demo 0đ Cho Tiệm <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <div className="form-footnote">
                  <span>Chưa cần mua gì. Trao đổi phương án trước 0đ.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>

      <style>{`
        .final-dark-section {
          background-color: #0f172a;
          color: #ffffff;
          padding: clamp(4.5rem, 6vw, 7rem) 0;
          border-top: 1px solid #1e293b;
        }

        .final-cta-split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .final-cta-split {
            grid-template-columns: 1.25fr 1fr;
            gap: 4rem;
          }
        }

        .final-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background-color: #1e293b;
          color: #86efac;
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid #334155;
          margin-bottom: 1.25rem;
        }

        .final-cta-title {
          font-size: var(--font-size-h2);
          color: #ffffff;
          font-weight: 800;
          line-height: var(--line-height-h2);
          margin-bottom: 1.25rem;
          text-wrap: balance;
        }

        .final-cta-desc {
          font-size: var(--font-size-body-lg);
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 2rem;
          text-wrap: pretty;
        }

        .final-trust-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }

        .final-trust-bullet {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
          color: #e2e8f0;
        }

        .trust-bullet-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        .final-hotline-callout {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background-color: #1e293b;
          border-radius: var(--radius-md);
          font-size: 0.9375rem;
          color: #cbd5e1;
        }

        .final-hotline-callout strong {
          color: #ffffff;
        }

        .hotline-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* FORM CARD */
        .final-cta-form-card {
          background-color: #ffffff;
          color: var(--ink);
          border-radius: var(--radius-2xl);
          padding: clamp(1.75rem, 3.5vw, 2.75rem);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
        }

        .form-heading {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 0.35rem 0;
        }

        .form-subheading {
          font-size: 0.875rem;
          color: var(--ink-soft);
          margin: 0 0 1.5rem 0;
        }

        .form-group {
          margin-bottom: 1.15rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 0.45rem;
        }

        .req {
          color: #dc2626;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 1rem;
          color: var(--ink);
          background-color: #ffffff;
          box-sizing: border-box;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-soft);
        }

        .form-input.has-error {
          border-color: #dc2626;
        }

        .field-error {
          display: block;
          font-size: 0.8125rem;
          color: #dc2626;
          margin-top: 0.35rem;
        }

        .submit-cta-btn {
          width: 100%;
          min-height: 52px;
          font-size: 1.0625rem;
          font-weight: 700;
          margin-top: 0.5rem;
        }

        .form-footnote {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.8125rem;
          color: var(--ink-muted);
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .form-success-state {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--color-primary-soft);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--ink);
          margin-bottom: 0.5rem;
        }

        .success-desc {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;
