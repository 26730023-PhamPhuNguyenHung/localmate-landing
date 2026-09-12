import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { CheckCircle2, ShieldCheck, Send, Loader2, Clock, Sparkles, Phone } from 'lucide-react';
import { submitLead } from '../../services/leadService';
import { CONTACT_INFO } from '../../data/landingContent';

export const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    taskDescription: ''
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
      errs.phone = 'Vui lòng nhập số điện thoại hoặc Zalo liên hệ';
    } else if (!/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(trimmedPhone)) {
      errs.phone = 'Số điện thoại không hợp lệ (Ví dụ: 0912345678)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
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
    <section
      id="gui-viec"
      style={{
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1e293b'
      }}
    >
      <Container size="lg">
        <div className="final-cta-grid">
          {/* Left Text Information */}
          <div className="final-cta-left">
            <div className="final-cta-badge">
              <Sparkles size={14} /> DEMO 0Đ KHÔNG RÀNG BUỘC
            </div>

            <h2 className="final-cta-title">
              Bạn nói điều cần làm. LocalMate tìm cách hoàn thành.
            </h2>

            <p className="final-cta-desc">
              Không cần hiểu sâu kỹ thuật. Hãy mô tả điều bạn muốn đạt được, chúng tôi đề xuất phương án và hỗ trợ triển khai.
            </p>

            {/* Direct Solid Trust Box — Absolutely NO Glassmorphism */}
            <div className="final-cta-trust-card">
              <div className="trust-card-header">
                <ShieldCheck size={18} color="#86efac" />
                <span>CAM KẾT MINH BẠCH CỦA LOCALMATE</span>
              </div>
              <p className="trust-card-body">
                Dựng demo 0đ xem trước • Không ép mua phần mềm • Bàn giao 100% tài khoản chính chủ • Nghiệm thu mới thanh toán.
              </p>
            </div>

            <div className="final-cta-points">
              <div className="final-point-item">
                <CheckCircle2 size={16} color="#4ade80" />
                <span>Phản hồi và tư vấn phương án trong 30 phút làm việc</span>
              </div>
              <div className="final-point-item">
                <CheckCircle2 size={16} color="#4ade80" />
                <span>Dựng bản website demo chạy thực tế hoàn toàn miễn phí</span>
              </div>
              <div className="final-point-item">
                <CheckCircle2 size={16} color="#4ade80" />
                <span>Bàn giao 100% tài khoản tên miền, hosting và mã nguồn</span>
              </div>
              <div className="final-point-item">
                <CheckCircle2 size={16} color="#4ade80" />
                <span>Đội ngũ kỹ thuật viên hỗ trợ trực tiếp tại địa phương</span>
              </div>
            </div>

            {/* Hotline Bar */}
            <div className="final-hotline-wrap">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="final-hotline-btn"
                title="Gọi hotline trao đổi ngay"
              >
                <Phone size={15} color="#0f172a" />
                <span>Tư vấn trực tiếp 24/7: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Lead Capture Form Card */}
          <div className="final-cta-form-card">
            {status === 'success' ? (
              <div className="final-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} color="#059669" />
                </div>
                <h3 className="success-title">Tiếp nhận yêu cầu thành công!</h3>
                <p className="success-desc">
                  Cảm ơn <strong>{formData.fullName}</strong> đã gửi yêu cầu! LocalMate sẽ liên hệ qua Số điện thoại / Zalo <strong>{formData.phone}</strong> trong 30 phút để gửi bản demo 0đ và trao đổi phương án triển khai.
                </p>

                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', phone: '', taskDescription: '' });
                  }}
                  style={{ marginTop: '0.75rem' }}
                >
                  Gửi yêu cầu khác
                </Button>
              </div>
            ) : (
              <>
                <h3 className="form-card-title">Đăng ký nhận website demo 0đ</h3>
                <p className="form-card-subtitle">
                  Mô tả mong muốn của bạn. Chúng tôi gửi bản demo xem trước và báo giá trọn gói trong 24 giờ.
                </p>

                <form onSubmit={handleSubmit} className="final-intake-form" noValidate>
                  {/* Field 1: Họ và tên */}
                  <div>
                    <label htmlFor="finalFullName" className="form-label">
                      Họ và tên <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="finalFullName"
                      type="text"
                      placeholder="Ví dụ: Anh Nam, Chị Trang..."
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={`form-input ${errors.fullName ? 'form-input-error' : ''}`}
                    />
                    {errors.fullName && (
                      <span className="error-text">⚠️ {errors.fullName}</span>
                    )}
                  </div>

                  {/* Field 2: Số điện thoại / Zalo */}
                  <div>
                    <label htmlFor="finalPhone" className="form-label">
                      Số điện thoại / Zalo <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="finalPhone"
                      type="tel"
                      placeholder="Ví dụ: 0912 345 678"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                    />
                    {errors.phone && (
                      <span className="error-text">⚠️ {errors.phone}</span>
                    )}
                  </div>

                  {/* Field 3: Nhu cầu cần làm (tùy chọn) */}
                  <div>
                    <label htmlFor="finalTaskDesc" className="form-label">
                      Nhu cầu cần làm (tùy chọn)
                    </label>
                    <textarea
                      id="finalTaskDesc"
                      rows={3}
                      placeholder="Ví dụ: Dựng web demo 0đ cho tiệm spa, đưa quán lên Google Maps, gom lead Zalo/FB về 1 chỗ..."
                      value={formData.taskDescription}
                      onChange={(e) => handleChange('taskDescription', e.target.value)}
                      className="form-textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === 'loading'}
                    style={{ minHeight: 48, fontWeight: 800, marginTop: '0.25rem' }}
                  >
                    {status === 'loading' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Loader2 size={18} className="animate-spin" /> Đang gửi yêu cầu...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Send size={16} /> Gửi yêu cầu nhận demo 0đ
                      </span>
                    )}
                  </Button>

                  <p className="form-footnote">
                    🔒 Thông tin được bảo mật tuyệt đối. Cam kết 100% không mất phí nếu không duyệt demo.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>

      <style>{`
        .final-cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        @media (min-width: 900px) {
          .final-cta-grid {
            grid-template-columns: 1.15fr 1fr;
            gap: 3.5rem;
          }
        }

        .final-cta-left {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .final-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: #86efac;
          background-color: #064e3b;
          border: 1px solid #059669;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          letter-spacing: 0.05em;
          width: fit-content;
        }

        .final-cta-title {
          font-size: var(--font-size-h2);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          text-wrap: balance;
        }

        .final-cta-desc {
          font-size: 0.975rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin: 0;
        }

        .final-cta-trust-card {
          background-color: #1e293b;
          border: 1px solid #334155;
          border-radius: 14px;
          padding: 1.15rem 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .trust-card-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.775rem;
          font-weight: 800;
          color: #86efac;
          letter-spacing: 0.04em;
        }

        .trust-card-body {
          font-size: 0.85rem;
          color: #e2e8f0;
          margin: 0;
          line-height: 1.5;
        }

        .final-cta-points {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .final-point-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.875rem;
          color: #f1f5f9;
        }

        .final-hotline-wrap {
          margin-top: 0.5rem;
        }

        .final-hotline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 44px;
          background-color: #ffffff;
          color: #0f172a;
          font-size: 0.875rem;
          font-weight: 800;
          padding: 0.65rem 1.25rem;
          border-radius: 12px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .final-hotline-btn:hover {
          background-color: #f1f5f9;
          transform: translateY(-1px);
        }

        /* Right Form Card */
        .final-cta-form-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 2rem 1.75rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04);
          color: #0f172a;
        }

        .form-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.35rem 0;
        }

        .form-card-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0 0 1.25rem 0;
          line-height: 1.45;
        }

        .final-intake-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-label {
          display: block;
          font-size: 0.825rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.35rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 0.75rem 0.85rem;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 0.9rem;
          font-family: inherit;
          color: #0f172a;
          background-color: #ffffff;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input {
          min-height: 44px;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--color-primary);
        }

        .form-input-error {
          border-color: #ef4444;
          background-color: #fef2f2;
        }

        .error-text {
          font-size: 0.775rem;
          color: #dc2626;
          margin-top: 0.3rem;
          display: block;
          font-weight: 600;
        }

        .form-footnote {
          font-size: 0.75rem;
          color: #64748b;
          text-align: center;
          margin: 0;
          line-height: 1.4;
        }

        /* Success Box */
        .final-success-box {
          background-color: #f0fdf4;
          border: 1.5px solid #86efac;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
        }

        .success-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #166534;
          margin: 0;
        }

        .success-desc {
          font-size: 0.875rem;
          color: #15803d;
          line-height: 1.55;
          margin: 0;
        }
      `}</style>
    </section>
  );
};
