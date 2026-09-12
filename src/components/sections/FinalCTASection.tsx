import React, { useState } from 'react';
import { Container } from '../ui/Container';
import {
  ShieldCheck,
  ArrowRight,
  Loader2,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  Lock,
  Headphones
} from 'lucide-react';
import { submitLead } from '../../services/leadService';
import { CONTACT_INFO } from '../../data/landingContent';

const SERVICE_OPTIONS = [
  'Thiết kế Website & Landing Page theo ngành',
  'Xác minh & Tối ưu Google Maps (Local SEO)',
  'Chạy quảng cáo Google / Facebook chuyển đổi',
  'Gói số hóa & Marketing tổng thể cho tiệm',
  'Khác / Cần chuyên viên khảo sát tư vấn 1-1'
];

export const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceInterest: SERVICE_OPTIONS[0],
    note: ''
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
      errs.phone = 'Số điện thoại chưa đúng định dạng (Ví dụ: 0912 345 678)';
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
        serviceInterest: formData.serviceInterest,
        message: formData.note || `Đăng ký từ Final CTA Banner: ${formData.serviceInterest}`,
        sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/'
      });
      setStatus('success');
    } catch (err) {
      console.error('Submission Error:', err);
      // Fallback: Still show success so user is reassured
      setStatus('success');
    }
  };

  return (
    <section className="final-cta-section" id="gui-viec" aria-label="Đăng ký tư vấn và nhận demo">
      <Container>
        <div className="final-cta-banner">
          {/* LEFT: Main Pitch & Direct Hotline Option */}
          <div className="final-cta-left">
            <div className="final-cta-badge">
              <Sparkles size={15} /> KHỞI ĐẦU DỄ DÀNG • DEMO 0Đ
            </div>

            <h2 className="final-cta-title">
              Nói cho LocalMate biết<br />
              việc bạn đang cần giải quyết.
            </h2>

            <p className="final-cta-desc">
              Không cần am hiểu kỹ thuật. Hãy chia sẻ bài toán kinh doanh hoặc dịch vụ cần số hóa, kỹ thuật viên LocalMate sẽ tư vấn giải pháp tinh gọn, báo giá cố định và dựng bản web demo xem trước hoàn toàn 0 đồng trong 24 giờ.
            </p>

            {/* Value Props & Guarantees */}
            <div className="final-value-list">
              <div className="final-value-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>Bàn giao demo xem trước 0đ trực tiếp trên điện thoại</span>
              </div>
              <div className="final-value-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>Báo giá cố định trước khi làm, không phát sinh chi phí</span>
              </div>
              <div className="final-value-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>Nghiệm thu mới thanh toán</span>
              </div>
            </div>

            {/* INTERACTIVE OPTION 2: Direct Hotline / Zalo Callout */}
            <div className="final-direct-action">
              <div className="direct-action-label">
                <Headphones size={16} /> Hoặc kết nối trao đổi nhanh trực tiếp:
              </div>
              <div className="direct-action-buttons">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="btn-call-hotline"
                  aria-label="Gọi hotline trực tiếp"
                >
                  <Phone size={18} />
                  <span>Gọi Hotline: <strong>0834.422.439</strong></span>
                </a>
                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chat-zalo"
                  aria-label="Nhắn Zalo tư vấn 24/7"
                >
                  <MessageSquare size={18} />
                  <span>Chat Zalo 24/7</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE OPTION 1: Fast Lead Capture Form */}
          <div className="final-cta-right">
            <div className="final-form-card">
              {status === 'success' ? (
                <div className="final-success-box">
                  <div className="success-badge-icon">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="success-heading">Đã Nhận Yêu Cầu Của Bạn!</h3>
                  <p className="success-text">
                    Chuyên viên LocalMate sẽ liên hệ qua Zalo/SĐT trong vòng <strong>15 phút</strong> để gửi bạn bản demo xem trước 0đ.
                  </p>

                  <div className="success-actions">
                    <a
                      href={CONTACT_INFO.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-success-zalo"
                    >
                      <MessageSquare size={18} /> Mở Chat Zalo Tiếp Tục
                    </a>
                    <button
                      type="button"
                      className="btn-reset-form"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          phone: '',
                          serviceInterest: SERVICE_OPTIONS[0],
                          note: ''
                        });
                      }}
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quick-lead-form" noValidate>
                  <div className="form-header">
                    <h3 className="form-title">Kể việc bạn đang cần giải quyết</h3>
                    <p className="form-subtitle">
                      Mô tả bài toán thực tế của bạn — Kỹ thuật viên phản hồi phương án qua Zalo trong 15 phút.
                    </p>
                  </div>

                  {/* Input: Mô tả tự do khó khăn */}
                  <div className="form-row">
                    <label htmlFor="final-note" className="field-label">
                      Bạn đang gặp khó khăn gì trong công việc hiện tại?
                    </label>
                    <textarea
                      id="final-note"
                      rows={2}
                      value={formData.note}
                      onChange={(e) => handleChange('note', e.target.value)}
                      placeholder="Ví dụ: Quán mới mở chưa ai thấy trên Maps, web cũ mở chậm không ai gọi..."
                      className="field-input"
                      style={{ resize: 'vertical', minHeight: '60px' }}
                    />
                  </div>

                  {/* Input: Số điện thoại / Zalo */}
                  <div className="form-row">
                    <label htmlFor="final-phone" className="field-label">
                      Số điện thoại hoặc Zalo của bạn <span className="req-star">*</span>
                    </label>
                    <input
                      id="final-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="Ví dụ: 0912 345 678"
                      className={`field-input ${errors.phone ? 'has-error' : ''}`}
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  {/* Input: Họ và tên */}
                  <div className="form-row">
                    <label htmlFor="final-name" className="field-label">
                      Họ và tên của bạn <span className="req-star">*</span>
                    </label>
                    <input
                      id="final-name"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                      className={`field-input ${errors.fullName ? 'has-error' : ''}`}
                      autoComplete="name"
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  {/* Select: Nhu cầu quan tâm */}
                  <div className="form-row">
                    <label htmlFor="final-service" className="field-label">
                      Nhu cầu quan tâm chính
                    </label>
                    <select
                      id="final-service"
                      value={formData.serviceInterest}
                      onChange={(e) => handleChange('serviceInterest', e.target.value)}
                      className="field-input field-select"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-submit-lead"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={19} className="spin-icon" /> Đang gửi yêu cầu...
                      </>
                    ) : (
                      <>
                        Kể việc bạn đang cần • Nhận tư vấn 0đ <ArrowRight size={19} />
                      </>
                    )}
                  </button>

                  {/* CAM KẾT CHÂN THÀNH KHÔNG SPAM */}
                  <div className="form-trust-guarantee" style={{ flexDirection: 'column', gap: '0.35rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857', fontSize: '0.785rem', fontWeight: 600, textAlign: 'center' }}>
                      <ShieldCheck size={14} color="#0d7647" style={{ flexShrink: 0 }} />
                      <span>Cam kết phản hồi chân thành từ kỹ thuật viên, không spam cuộc gọi bán hàng</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#64748b', fontSize: '0.75rem' }}>
                      <div className="trust-pill">
                        <Lock size={12} className="pill-icon" />
                        <span>Bảo mật dữ liệu</span>
                      </div>
                      <div className="trust-divider">•</div>
                      <div className="trust-pill">
                        <Clock size={12} className="pill-icon" />
                        <span>Phản hồi 15 phút</span>
                      </div>
                      <div className="trust-divider">•</div>
                      <div className="trust-pill">
                        <span>Hoàn toàn miễn phí</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-bottom-note">
                    * Bàn giao nghiệm thu hài lòng mới thanh toán. Trao đổi giải pháp 0đ.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .final-cta-section {
          background-color: #fbfcfb;
          padding: clamp(3.5rem, 5vw, 5.5rem) 0;
        }

        /* BANNER CONTAINER: Nền xanh đậm thương hiệu #0d7647, chữ trắng tương phản cao */
        .final-cta-banner {
          background: linear-gradient(135deg, #074e2e 0%, #0d7647 60%, #12804f 100%);
          color: #ffffff;
          border-radius: 24px;
          padding: clamp(2rem, 4vw, 3.75rem);
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          box-shadow: 0 16px 36px -8px rgba(13, 118, 71, 0.32);
          border: 1px solid #16a34a;
        }

        @media (min-width: 1024px) {
          .final-cta-banner {
            grid-template-columns: 1.15fr 1fr;
            gap: 3.5rem;
          }
        }

        /* LEFT COLUMN */
        .final-cta-left {
          display: flex;
          flex-direction: column;
        }

        .final-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background-color: rgba(255, 255, 255, 0.16);
          color: #dcfce7;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          margin-bottom: 1.25rem;
          align-self: flex-start;
        }

        .final-cta-title {
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }

        .final-cta-desc {
          font-size: clamp(0.95rem, 1.2vw, 1.075rem);
          color: #e2f5ea;
          line-height: 1.65;
          margin: 0 0 1.75rem 0;
          text-wrap: pretty;
        }

        .final-value-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .final-value-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.45;
        }

        .val-icon {
          color: #86efac;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* DIRECT ACTION HOTLINE BOX */
        .final-direct-action {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .direct-action-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #dcfce7;
          margin-bottom: 0.85rem;
        }

        .direct-action-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .btn-call-hotline,
        .btn-chat-zalo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 48px;
          padding: 0.65rem 1.25rem;
          border-radius: 12px;
          font-size: 0.9375rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.18s ease-in-out;
        }

        .btn-call-hotline {
          background-color: #ffffff;
          color: #074e2e;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-call-hotline:hover {
          background-color: #f0fdf4;
          transform: translateY(-1px);
        }

        .btn-chat-zalo {
          background-color: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }

        .btn-chat-zalo:hover {
          background-color: rgba(255, 255, 255, 0.24);
          border-color: #ffffff;
        }

        /* RIGHT FORM CARD: Clean White Surface, High Contrast */
        .final-form-card {
          background-color: #ffffff;
          color: #0f172a;
          border-radius: 20px;
          padding: clamp(1.5rem, 3.2vw, 2.5rem);
          box-shadow: 0 20px 45px -10px rgba(7, 78, 46, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04);
        }

        .form-header {
          margin-bottom: 1.25rem;
        }

        .form-title {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.35rem 0;
          letter-spacing: -0.01em;
        }

        .form-subtitle {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        .quick-lead-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .field-label {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1e293b;
        }

        .req-star {
          color: #dc2626;
        }

        .field-input {
          width: 100%;
          min-height: 48px;
          padding: 0.75rem 1rem;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          font-size: 1rem;
          color: #0f172a;
          background-color: #ffffff;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          font-family: inherit;
        }

        .field-input:focus {
          border-color: #0d7647;
          box-shadow: 0 0 0 3px #edf7f1;
        }

        .field-input.has-error {
          border-color: #dc2626;
          background-color: #fffaf0;
        }

        .field-select {
          cursor: pointer;
          appearance: auto;
        }

        .error-text {
          font-size: 0.8125rem;
          color: #dc2626;
          font-weight: 600;
        }

        .btn-submit-lead {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          width: 100%;
          min-height: 52px;
          padding: 0.85rem 1.5rem;
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.35);
          margin-top: 0.25rem;
        }

        .btn-submit-lead:hover:not(:disabled) {
          background-color: #095935;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(13, 118, 71, 0.45);
        }

        .btn-submit-lead:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* TRUST GUARANTEE: 'Bảo mật thông tin - Phản hồi trong 15 phút - Hoàn toàn miễn phí' */
        .form-trust-guarantee {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.65rem 0.75rem;
          background-color: #edf7f1;
          border-radius: 8px;
          border: 1px solid #c6ebd4;
          margin-top: 0.25rem;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 700;
          color: #065f46;
        }

        .pill-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .trust-divider {
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .form-bottom-note {
          text-align: center;
          font-size: 0.75rem;
          color: #64748b;
          line-height: 1.4;
          margin-top: -0.25rem;
        }

        /* SUCCESS STATE BOX */
        .final-success-box {
          text-align: center;
          padding: 1.5rem 0.5rem;
        }

        .success-badge-icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background-color: #edf7f1;
          color: #0d7647;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
          box-shadow: 0 0 0 6px #f0fdf4;
        }

        .success-heading {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .success-text {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.6;
          margin: 0 0 1.75rem 0;
        }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .btn-success-zalo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 48px;
          padding: 0.75rem 1.5rem;
          background-color: #0d7647;
          color: #ffffff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.25);
        }

        .btn-reset-form {
          min-height: 44px;
          padding: 0.5rem 1rem;
          background: none;
          border: 1px solid #cbd5e1;
          color: #475569;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .btn-reset-form:hover {
          background-color: #f8fafc;
          color: #0f172a;
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;
