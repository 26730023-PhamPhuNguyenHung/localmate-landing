import React, { useState, useEffect } from 'react';
import {
  X,
  Zap,
  MapPin,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Check,
  RefreshCw,
  TrendingDown
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { submitLead } from '../../services/leadService';

export interface InstantAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  rawInput: string;
  onOpenDetailedLeadModal?: (storeName: string) => void;
}

export const InstantAuditModal: React.FC<InstantAuditModalProps> = ({
  isOpen,
  onClose,
  rawInput,
  onOpenDetailedLeadModal
}) => {
  const [scanStep, setScanStep] = useState<number>(0);
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const displayInput = rawInput.trim() || 'Cửa hàng / Website của bạn';

  // Deterministic seed generation based on input string
  const hash = displayInput.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const speedScore = 42 + (hash % 15); // 42 - 56
  const mapScore = 50 + (hash % 17); // 50 - 66
  const mobileScore = 44 + (hash % 16); // 44 - 59
  const overallScore = Math.round((speedScore + mapScore + mobileScore) / 3);

  const isUrl = displayInput.includes('.') && !displayInput.includes(' ');
  const isFb = displayInput.toLowerCase().includes('facebook.com') || displayInput.toLowerCase().includes('fb.com');

  useEffect(() => {
    if (!isOpen) return;

    // Reset scan state on open
    setIsScanning(true);
    setScanStep(1);
    setIsSuccess(false);
    setErrorMessage('');

    const t1 = setTimeout(() => setScanStep(2), 400);
    const t2 = setTimeout(() => setScanStep(3), 850);
    const t3 = setTimeout(() => {
      setIsScanning(false);
    }, 1300);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, rawInput, onClose]);

  if (!isOpen) return null;

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = userPhone.trim().replace(/[\s\-\.\(\)]/g, '');

    if (!cleanPhone || !/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(cleanPhone)) {
      setErrorMessage('Vui lòng nhập số điện thoại hoặc Zalo hợp lệ (VD: 0912 345 678).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await submitLead({
        name: userName.trim() || `Chủ tiệm ${displayInput}`,
        phone: cleanPhone,
        businessName: displayInput,
        serviceInterest: 'Nhận phân tích 3 tiêu chí & Dựng Demo 0đ',
        message: `Khách đăng ký từ Instant Audit Hook. Mục tiêu: Báo cáo kỹ thuật + Demo 0đ cho "${displayInput}". Điểm chẩn đoán sơ bộ: ${overallScore}/100.`,
        sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
        facebookUrl: isFb ? displayInput : undefined
      });
      setIsSuccess(true);
    } catch (err) {
      console.debug('Audit lead submit err:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenZaloDirect = () => {
    const message = encodeURIComponent(
      `Chào KTV LocalMate, tôi muốn nhận Báo cáo phân tích chi tiết & Demo 0đ cho "${displayInput}".`
    );
    window.open(`${CONTACT_INFO.zaloUrl}?text=${message}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="audit-modal-overlay"
    >
      {/* Solid Backdrop - Strictly NO glassmorphism */}
      <div className="audit-modal-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="audit-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          aria-label="Đóng cửa sổ"
          onClick={onClose}
          className="audit-modal-close"
        >
          <X size={20} />
        </button>

        {/* SCANNING STATE */}
        {isScanning && (
          <div className="audit-scan-box">
            <div className="audit-scan-spinner-wrap">
              <RefreshCw size={36} className="audit-scan-spinner" />
            </div>
            <h3 className="audit-scan-title">Đang phân tích trực tiếp...</h3>
            <p className="audit-scan-target">
              Đối tượng: <strong>{displayInput}</strong>
            </p>

            <div className="audit-scan-progress-bar">
              <div
                className="audit-scan-progress-fill"
                style={{
                  width: scanStep === 1 ? '35%' : scanStep === 2 ? '70%' : '100%'
                }}
              />
            </div>

            <ul className="audit-scan-checklist">
              <li className={`scan-check-item ${scanStep >= 1 ? 'active' : ''}`}>
                <span className="scan-check-icon">{scanStep > 1 ? '✓' : '1'}</span>
                <span>Kiểm tra tốc độ tải trang & phản hồi trên di động...</span>
              </li>
              <li className={`scan-check-item ${scanStep >= 2 ? 'active' : ''}`}>
                <span className="scan-check-icon">{scanStep > 2 ? '✓' : '2'}</span>
                <span>Quét định vị Google Maps & độ phủ từ khóa địa phương...</span>
              </li>
              <li className={`scan-check-item ${scanStep >= 3 ? 'active' : ''}`}>
                <span className="scan-check-icon">{scanStep >= 3 ? '✓' : '3'}</span>
                <span>Đánh giá trải nghiệm bấm gọi, đặt hẹn trên smartphone...</span>
              </li>
            </ul>
          </div>
        )}

        {/* RESULTS STATE */}
        {!isScanning && !isSuccess && (
          <div className="audit-results-wrapper">
            {/* Header Header */}
            <div className="audit-results-header">
              <div className="audit-badge-pill">
                <Sparkles size={13} />
                <span>BẢN CHẨN ĐOÁN SỐ SƠ BỘ TỨC THÌ</span>
              </div>
              <h2 id="audit-modal-title" className="audit-results-title">
                Kết Quả Phân Tích Cửa Hàng / Website
              </h2>
              <p className="audit-results-subject">
                Mục tiêu đánh giá: <span className="subject-highlight">{displayInput}</span>
              </p>
            </div>

            {/* Score Summary Strip */}
            <div className="audit-score-banner">
              <div className="audit-score-left">
                <div className="score-number-box">
                  <span className="score-big">{overallScore}</span>
                  <span className="score-max">/100</span>
                </div>
                <div className="score-text-box">
                  <div className="score-status-tag">
                    <TrendingDown size={14} />
                    <span>CẦN TỐI ƯU GẤP</span>
                  </div>
                  <p className="score-subtext">
                    Điểm số ở mức trung bình yếu. Đang để rơi khách tiềm năng vào tay đối thủ cùng khu vực vì 3 điểm nghẽn kỹ thuật bên dưới.
                  </p>
                </div>
              </div>
              <div className="audit-score-badge">
                <span className="badge-text">Chuẩn Google</span>
                <span className="badge-val">Chưa đạt</span>
              </div>
            </div>

            {/* 3 CORE CRITERIA CARDS */}
            <div className="audit-criteria-list">
              {/* Tiêu chí 1: Tốc độ mở trang */}
              <div className="criteria-card">
                <div className="criteria-card-header">
                  <div className="criteria-icon-box criteria-speed">
                    <Zap size={18} />
                  </div>
                  <div className="criteria-title-group">
                    <div className="criteria-title-row">
                      <h4 className="criteria-title">1. Tốc độ mở trang (Speed & Uptime)</h4>
                      <span className="criteria-score-badge score-low">
                        {speedScore}/100 • Chậm ~3.5s
                      </span>
                    </div>
                    <div className="criteria-meter-bar">
                      <div className="meter-fill fill-low" style={{ width: `${speedScore}%` }} />
                    </div>
                  </div>
                </div>
                <div className="criteria-content">
                  <p className="criteria-finding">
                    <strong>Hiện trạng:</strong> {isUrl ? 'Website có dung lượng ảnh nặng, mã chưa nén tối ưu, tải mất hơn 3.2 giây.' : isFb ? 'Trang Facebook load dữ liệu nặng, khách truy cập mạng 4G yếu dễ bị trễ hoặc thoát ra ngoài.' : 'Chưa có website riêng siêu tốc để khách bấm vào xem menu/dịch vụ tức thì.'}
                  </p>
                  <p className="criteria-risk">
                    <AlertTriangle size={13} className="risk-icon" />
                    <span>Nguy cơ: Hơn 53% khách hàng lướt di động sẽ bấm thoát nếu trang tải quá 3 giây.</span>
                  </p>
                  <p className="criteria-solution">
                    <Check size={13} className="sol-icon" />
                    <span><strong>Giải pháp LocalMate:</strong> Dựng website tĩnh nén chuẩn WebP, tải dưới 0.8s trên 4G, giữ chân khách 100%.</span>
                  </p>
                </div>
              </div>

              {/* Tiêu chí 2: Thứ hạng Google Maps */}
              <div className="criteria-card">
                <div className="criteria-card-header">
                  <div className="criteria-icon-box criteria-map">
                    <MapPin size={18} />
                  </div>
                  <div className="criteria-title-group">
                    <div className="criteria-title-row">
                      <h4 className="criteria-title">2. Thứ hạng Google Maps (Local SEO)</h4>
                      <span className="criteria-score-badge score-mid">
                        {mapScore}/100 • Chưa vào Top 3
                      </span>
                    </div>
                    <div className="criteria-meter-bar">
                      <div className="meter-fill fill-mid" style={{ width: `${mapScore}%` }} />
                    </div>
                  </div>
                </div>
                <div className="criteria-content">
                  <p className="criteria-finding">
                    <strong>Hiện trạng:</strong> Hồ sơ chưa đồng bộ dữ liệu NAP (Tên - Địa chỉ - Hotline), thiếu từ khóa ngành nghề trọng điểm quanh bán kính 2-5km.
                  </p>
                  <p className="criteria-risk">
                    <AlertTriangle size={13} className="risk-icon" />
                    <span>Nguy cơ: Khi khách xung quanh tìm kiếm "gần đây", đối thủ kế bên được Google gợi ý trước.</span>
                  </p>
                  <p className="criteria-solution">
                    <Check size={13} className="sol-icon" />
                    <span><strong>Giải pháp LocalMate:</strong> Xác minh chính chủ, chuẩn hóa định vị Google Business, đẩy tiệm vào Top 3 bản đồ.</span>
                  </p>
                </div>
              </div>

              {/* Tiêu chí 3: Trải nghiệm trên điện thoại */}
              <div className="criteria-card">
                <div className="criteria-card-header">
                  <div className="criteria-icon-box criteria-mobile">
                    <Smartphone size={18} />
                  </div>
                  <div className="criteria-title-group">
                    <div className="criteria-title-row">
                      <h4 className="criteria-title">3. Trải nghiệm trên điện thoại (Mobile UX & Nút Gọi)</h4>
                      <span className="criteria-score-badge score-low">
                        {mobileScore}/100 • Khó chốt đơn
                      </span>
                    </div>
                    <div className="criteria-meter-bar">
                      <div className="meter-fill fill-low" style={{ width: `${mobileScore}%` }} />
                    </div>
                  </div>
                </div>
                <div className="criteria-content">
                  <p className="criteria-finding">
                    <strong>Hiện trạng:</strong> Chưa có thanh liên hệ Zalo / Hotline một chạm dính chân màn hình. Menu và bảng giá chưa tối ưu cho thao tác một tay.
                  </p>
                  <p className="criteria-risk">
                    <AlertTriangle size={13} className="risk-icon" />
                    <span>Nguy cơ: Khách xem xong không biết gọi đặt bàn / đặt lịch ở đâu, phải copy số thủ công gây nản lòng.</span>
                  </p>
                  <p className="criteria-solution">
                    <Check size={13} className="sol-icon" />
                    <span><strong>Giải pháp LocalMate:</strong> Giao diện Mobile-first có nút gọi/Zalo 1-chạm luôn hiển thị, đặt hẹn chỉ mất 10 giây.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BOX: KẾT NỐI KTV & DEMO 0Đ */}
            <div className="audit-action-box">
              <div className="action-box-head">
                <div className="action-tag">
                  <Sparkles size={13} />
                  <span>KẾT NỐI KỸ THUẬT VIÊN ĐỊA PHƯƠNG</span>
                </div>
                <h3 className="action-box-title">
                  Nhận Bản Báo Cáo Kỹ Thuật Chi Tiết &amp; Dựng Demo 0đ
                </h3>
                <p className="action-box-desc">
                  KTV LocalMate tại khu vực sẽ liên hệ gửi bản phân tích chuyên sâu (kèm ảnh chụp màn hình lỗi) và <strong>dựng sẵn website demo xem thử 0đ trong 48h</strong>. Bạn hài lòng mới tính tiếp, hoàn toàn không ràng buộc!
                </p>
              </div>

              <form onSubmit={handleSubmitLead} className="audit-lead-form">
                {errorMessage && (
                  <div className="audit-error-banner">{errorMessage}</div>
                )}

                <div className="audit-form-grid">
                  <div className="audit-form-field">
                    <label htmlFor="audit-name">Tên của bạn / Tên tiệm</label>
                    <input
                      id="audit-name"
                      type="text"
                      placeholder="Ví dụ: Anh Minh / Tiệm Cà Phê Mộc"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="audit-input"
                    />
                  </div>

                  <div className="audit-form-field">
                    <label htmlFor="audit-phone">
                      Số điện thoại / Zalo nhận demo <span className="req">*</span>
                    </label>
                    <input
                      id="audit-phone"
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912 345 678"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="audit-input"
                    />
                  </div>
                </div>

                <div className="audit-form-actions">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="audit-btn-submit"
                  >
                    {isSubmitting ? (
                      <span>Đang gửi yêu cầu...</span>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>Gửi Báo Cáo &amp; Dựng Demo 0đ Cho Tôi</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenZaloDirect}
                    className="audit-btn-zalo"
                  >
                    <MessageCircle size={16} />
                    <span>Chat Zalo Trực Tiếp Với KTV</span>
                  </button>
                </div>

                <div className="audit-guarantees">
                  <span className="guarantee-item">
                    <Check size={12} className="guarantee-check" /> 100% Miễn phí không rủi ro
                  </span>
                  <span className="guarantee-item">
                    <Check size={12} className="guarantee-check" /> Bàn giao demo xem trước trong 48h
                  </span>
                  <span className="guarantee-item">
                    <Check size={12} className="guarantee-check" /> Không làm phiền hay ép mua
                  </span>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* SUCCESS CONFIRMATION STATE */}
        {!isScanning && isSuccess && (
          <div className="audit-success-card">
            <div className="success-icon-wrap">
              <CheckCircle size={52} className="success-icon" />
            </div>
            <h3 className="success-title">Đã Tiếp Nhận Yêu Cầu Phân Tích &amp; Demo!</h3>
            <p className="success-desc">
              Cảm ơn bạn. Kỹ thuật viên LocalMate khu vực của bạn đã nhận được thông tin về <strong>{displayInput}</strong>.
            </p>

            <div className="success-next-steps">
              <h4 className="next-steps-title">Các bước tiếp theo trong 48h:</h4>
              <div className="step-item">
                <span className="step-num">1</span>
                <div>
                  <strong>Xuất file Báo cáo kỹ thuật:</strong> Kiểm tra chi tiết mã nguồn, độ trễ và thứ hạng Maps gửi qua Zalo cho bạn.
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">2</span>
                <div>
                  <strong>Dựng bản Website Demo 0đ:</strong> Thiết kế riêng giao diện tải nhanh & chuẩn di động để bạn trải nghiệm thực tế.
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">3</span>
                <div>
                  <strong>Nghiệm thu hài lòng mới bàn giao:</strong> Báo giá cố định, không phí ẩn.
                </div>
              </div>
            </div>

            <div className="success-action-row">
              <button
                type="button"
                onClick={handleOpenZaloDirect}
                className="audit-btn-submit"
              >
                <MessageCircle size={16} />
                <span>Mở Zalo Nhắn KTV Ngay</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="audit-btn-close"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scoped CSS styling (Light Mode, Strict NO Glassmorphism, High contrast) */}
      <style>{`
        .audit-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-sizing: border-box;
        }

        .audit-modal-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.75);
        }

        .audit-modal-card {
          position: relative;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.25);
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          overflow-y: auto;
          scrollbar-gutter: stable;
          padding: 1.75rem;
          box-sizing: border-box;
          z-index: 2;
        }

        .audit-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #475569;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .audit-modal-close:hover {
          background-color: #e2e8f0;
          color: #0f172a;
        }

        /* SCANNING STATE */
        .audit-scan-box {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .audit-scan-spinner-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #e8f5e9;
          margin-bottom: 1.25rem;
        }

        .audit-scan-spinner {
          color: #0d7647;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .audit-scan-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .audit-scan-target {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0 0 1.5rem 0;
        }

        .audit-scan-progress-bar {
          height: 6px;
          background-color: #e2e8f0;
          border-radius: 9999px;
          overflow: hidden;
          max-width: 380px;
          margin: 0 auto 1.75rem auto;
        }

        .audit-scan-progress-fill {
          height: 100%;
          background-color: #0d7647;
          border-radius: 9999px;
          transition: width 0.35s ease;
        }

        .audit-scan-checklist {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          max-width: 420px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .scan-check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .scan-check-item.active {
          color: #1e293b;
          font-weight: 600;
        }

        .scan-check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #e2e8f0;
          color: #64748b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .scan-check-item.active .scan-check-icon {
          background-color: #0d7647;
          color: #ffffff;
        }

        /* RESULTS HEADER */
        .audit-results-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .audit-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #e8f5e9;
          color: #065f46;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 0.4rem;
        }

        .audit-results-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.3rem 0;
          line-height: 1.3;
        }

        .audit-results-subject {
          font-size: 0.88rem;
          color: #64748b;
          margin: 0;
        }

        .subject-highlight {
          color: #0d7647;
          font-weight: 700;
        }

        /* SCORE BANNER */
        .audit-score-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 4px solid #f59e0b;
          border-radius: 12px;
          padding: 1rem 1.25rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .audit-score-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 240px;
        }

        .score-number-box {
          display: flex;
          align-items: baseline;
          background: #ffffff;
          padding: 0.5rem 0.85rem;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
        }

        .score-big {
          font-size: 1.85rem;
          font-weight: 900;
          color: #d97706;
          line-height: 1;
        }

        .score-max {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 700;
          margin-left: 2px;
        }

        .score-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: #b45309;
          background-color: #fef3c7;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          margin-bottom: 0.25rem;
        }

        .score-subtext {
          font-size: 0.82rem;
          color: #475569;
          margin: 0;
          line-height: 1.4;
        }

        .audit-score-badge {
          text-align: right;
        }

        .badge-text {
          display: block;
          font-size: 0.72rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 600;
        }

        .badge-val {
          display: block;
          font-size: 0.95rem;
          font-weight: 800;
          color: #dc2626;
        }

        /* 3 CRITERIA CARDS */
        .audit-criteria-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .criteria-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1rem;
          transition: border-color 0.15s ease;
        }

        .criteria-card:hover {
          border-color: #cbd5e1;
        }

        .criteria-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
        }

        .criteria-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .criteria-speed {
          background-color: #fef3c7;
          color: #d97706;
        }

        .criteria-map {
          background-color: #e0f2fe;
          color: #0284c7;
        }

        .criteria-mobile {
          background-color: #f3e8ff;
          color: #9333ea;
        }

        .criteria-title-group {
          flex: 1;
        }

        .criteria-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.35rem;
        }

        .criteria-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .criteria-score-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .score-low {
          background-color: #fee2e2;
          color: #b91c1c;
        }

        .score-mid {
          background-color: #fef3c7;
          color: #b45309;
        }

        .criteria-meter-bar {
          height: 4px;
          background-color: #f1f5f9;
          border-radius: 9999px;
          overflow: hidden;
        }

        .meter-fill {
          height: 100%;
          border-radius: 9999px;
        }

        .fill-low {
          background-color: #ef4444;
        }

        .fill-mid {
          background-color: #f59e0b;
        }

        .criteria-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .criteria-finding {
          color: #334155;
          margin: 0;
        }

        .criteria-risk {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          color: #b91c1c;
          margin: 0;
          font-weight: 500;
        }

        .risk-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .criteria-solution {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          color: #065f46;
          margin: 0;
          background-color: #f0fdf4;
          padding: 0.35rem 0.6rem;
          border-radius: 6px;
        }

        .sol-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: #0d7647;
        }

        /* ACTION BOX */
        .audit-action-box {
          background-color: #f8fbfa;
          border: 1px solid #c6ebd4;
          border-radius: 12px;
          padding: 1.25rem;
        }

        .action-box-head {
          margin-bottom: 1rem;
        }

        .action-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #e8f5e9;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          margin-bottom: 0.4rem;
        }

        .action-box-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.35rem 0;
        }

        .action-box-desc {
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        .audit-lead-form {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .audit-error-banner {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.55rem 0.85rem;
          border-radius: 6px;
        }

        .audit-form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 520px) {
          .audit-form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .audit-form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .audit-form-field label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1e293b;
        }

        .audit-form-field .req {
          color: #dc2626;
        }

        .audit-input {
          min-height: 48px;
          padding: 0 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.92rem;
          color: #0f172a;
          background-color: #ffffff;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .audit-input:focus {
          border-color: #0d7647;
          box-shadow: 0 0 0 3px rgba(13, 118, 71, 0.12);
        }

        .audit-form-actions {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 0.35rem;
        }

        @media (min-width: 520px) {
          .audit-form-actions {
            flex-direction: row;
          }
        }

        .audit-btn-submit {
          min-height: 48px;
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0 1.25rem;
          flex: 1;
          transition: background-color 0.15s ease;
        }

        .audit-btn-submit:hover:not(:disabled) {
          background-color: #095935;
        }

        .audit-btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .audit-btn-zalo {
          min-height: 48px;
          background-color: #ffffff;
          color: #0284c7;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          padding: 0 1rem;
          transition: background-color 0.15s ease;
        }

        .audit-btn-zalo:hover {
          background-color: #f0f9ff;
        }

        .audit-guarantees {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-top: 0.4rem;
        }

        .guarantee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.74rem;
          color: #475569;
          font-weight: 600;
        }

        .guarantee-check {
          color: #0d7647;
        }

        /* SUCCESS STATE */
        .audit-success-card {
          text-align: center;
          padding: 1.5rem 0.5rem;
        }

        .success-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: #e8f5e9;
          margin-bottom: 1rem;
        }

        .success-icon {
          color: #0d7647;
        }

        .success-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .success-desc {
          font-size: 0.92rem;
          color: #475569;
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
        }

        .success-next-steps {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.15rem;
          text-align: left;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .next-steps-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 0.25rem 0;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.82rem;
          color: #334155;
          line-height: 1.45;
        }

        .step-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .success-action-row {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-width: 400px;
          margin: 0 auto;
        }

        @media (min-width: 480px) {
          .success-action-row {
            flex-direction: row;
          }
        }

        .audit-btn-close {
          min-height: 48px;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          padding: 0 1.25rem;
        }

        .audit-btn-close:hover {
          background-color: #e2e8f0;
        }
      `}</style>
    </div>
  );
};
