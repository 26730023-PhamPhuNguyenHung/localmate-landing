import React, { useRef, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  Sparkles,
  Lock,
  Zap,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Navigation,
  Bell,
  TrendingUp,
  Check,
  Users,
  Clock,
  Headphones,
  ShieldCheck
} from 'lucide-react';
import { useRouter } from '../layout/Router';
import { InstantAuditHook } from '../audit/InstantAuditHook';

interface HeroSectionProps {
  onOpenDemoForm?: (serviceOrStore?: string) => void;
  showTrustStrip?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDemoForm,
  showTrustStrip = false
}) => {
  const { navigate } = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setHalfSpeed = () => {
      if (video) {
        video.playbackRate = 0.5;
      }
    };

    setHalfSpeed();
    video.addEventListener('loadedmetadata', setHalfSpeed);
    video.addEventListener('canplay', setHalfSpeed);
    video.addEventListener('play', setHalfSpeed);

    // Accessibility: check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotion = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
        setHalfSpeed();
      }
    };

    if (mediaQuery.matches) {
      video.pause();
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleReducedMotion);
    } else {
      mediaQuery.addListener(handleReducedMotion);
    }

    return () => {
      video.removeEventListener('loadedmetadata', setHalfSpeed);
      video.removeEventListener('canplay', setHalfSpeed);
      video.removeEventListener('play', setHalfSpeed);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleReducedMotion);
      } else {
        mediaQuery.removeListener(handleReducedMotion);
      }
    };
  }, []);

  const handleOpenDemo = (storeName?: string) => {
    if (onOpenDemoForm) {
      onOpenDemoForm(storeName);
    } else {
      navigate('/lien-he');
    }
  };

  const handleScrollToServices = () => {
    const el =
      document.getElementById('can-lam-gi') ||
      document.getElementById('cac-goi-trien-khai') ||
      document.getElementById('bang-gia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/bang-gia');
    }
  };

  const trustMetrics = [
    {
      icon: Users,
      value: '250+',
      label: 'Khách hàng địa phương',
      desc: 'Hộ kinh doanh & SMB tin chọn'
    },
    {
      icon: Clock,
      value: '48 Giờ',
      label: 'Bàn giao demo xem trước',
      desc: 'Trải nghiệm 0đ trước khi làm'
    },
    {
      icon: Headphones,
      value: '1 - 1',
      label: 'Hỗ trợ kỹ thuật tại chỗ',
      desc: 'KTV địa phương đồng hành'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Chính chủ tài khoản',
      desc: 'Báo giá cố định, không phí ẩn'
    }
  ];

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundColor: '#edf5f1',
        paddingTop: 'clamp(2.5rem, 4.5vw, 4.25rem)',
        paddingBottom: 'clamp(2.5rem, 4.5vw, 4.25rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background Video Animation — Subtle Ambient Wave */}
      <div className="hero-bg-video-wrapper" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
          className="hero-bg-video"
        >
          <source src="/assets/videos/hero-wave-loop.webm" type="video/webm" />
          <source src="/assets/videos/hero-wave-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay" />
      </div>

      <Container size="lg" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* CỘT TRÁI (Content): Bố cục 54% Desktop */}
          <div className="hero-content">
            {/* Sub-badge nhỏ phía trên tiêu đề rõ ràng, màu sắc nhẹ nhàng (saosangedu style) */}
            <div className="hero-subbadge-wrapper">
              <span className="hero-subbadge">
                <Sparkles size={13} className="subbadge-icon" />
                <span>Đồng hành số địa phương • Bàn giao demo trong 48h</span>
              </span>
            </div>

            {/* H1 lớn, tinh gọn, nhắm trúng insight khách hàng địa phương & SMB */}
            <h1 className="hero-headline">
              Giúp doanh nghiệp địa phương<br className="hero-desktop-br" />
              {' '}có website chuẩn, lên Google<br className="hero-desktop-br" />
              {' '}và <span className="hero-highlight">thu hút thêm khách.</span>
            </h1>

            {/* Body text: Ngắn gọn, giải quyết trực tiếp nhu cầu */}
            <p className="hero-body">
              Giải pháp số thực tế cho hộ kinh doanh và doanh nghiệp vừa &amp; nhỏ: từ website bán hàng tải siêu tốc, định vị Google Maps đến quảng cáo đa kênh. Dựng demo xem trước 0đ, báo giá cố định, nghiệm thu hài lòng mới thanh toán.
            </p>

            {/* INSTANT AUDIT HOOK (WebFX Style) — Cho phép nhập tên tiệm/link web và nhận phân tích + Demo 0đ tức thì */}
            <div className="hero-audit-hook-wrapper">
              <InstantAuditHook
                onOpenDetailedLeadModal={handleOpenDemo}
                variant="hero"
              />
            </div>

            {/* Quick Secondary Actions */}
            <div className="hero-secondary-links">
              <button
                type="button"
                onClick={handleScrollToServices}
                className="hero-secondary-link-btn"
              >
                <span>Xem bảng giá 41 dịch vụ niêm yết</span>
                <ArrowRight size={13} />
              </button>
              <span className="hero-link-divider">•</span>
              <button
                type="button"
                onClick={() => handleOpenDemo('Cần chuyên viên khảo sát 1-1')}
                className="hero-secondary-link-btn"
              >
                <span>Khảo sát 1-1 tại cơ sở</span>
              </button>
            </div>
          </div>

          {/* CỘT PHẢI (Visual Business Growth Stack): Bố cục 46% Desktop */}
          <div className="hero-visual-column">
            <div className="hero-visual-stack">
              {/* Floating Chip 1: Lead Notification (Đơn hàng / Đặt lịch mới) */}
              <div className="hero-card-lead">
                <div className="lead-icon-box">
                  <Bell size={15} className="lead-bell" />
                  <span className="lead-pulse" />
                </div>
                <div className="lead-details">
                  <div className="lead-title-row">
                    <span className="lead-tag">Khách hàng mới</span>
                    <span className="lead-time">2 phút trước</span>
                  </div>
                  <div className="lead-msg">
                    <strong>Chị Lan</strong> vừa đặt lịch qua Website
                  </div>
                  <div className="lead-status">
                    ✓ Đã tự động gửi Zalo thông báo
                  </div>
                </div>
              </div>

              {/* Card Chính: Website preview mô phỏng trên Laptop & Mobile */}
              <div className="hero-card-main">
                {/* Browser Topbar */}
                <div className="mockup-browser-bar">
                  <div className="mockup-window-dots" aria-hidden="true">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>

                  <div className="mockup-url-bar">
                    <Lock size={11} className="url-lock" />
                    <span className="url-domain">https://tiemcuaban.vn</span>
                    <span className="url-badge">SSL</span>
                  </div>

                  <div className="mockup-pagespeed-chip" title="Điểm Google PageSpeed Insights">
                    <Zap size={11} className="pagespeed-icon" />
                    <span>PageSpeed <strong>98/100</strong></span>
                  </div>
                </div>

                {/* Mockup Website Screen */}
                <div className="mockup-screen">
                  {/* Mini Nav */}
                  <div className="screen-nav">
                    <div className="screen-brand">
                      <span className="screen-logo-badge">☕</span>
                      <span className="screen-brand-title">Tiệm Của Bạn</span>
                    </div>
                    <div className="screen-nav-items">
                      <span className="screen-nav-item active">Trang chủ</span>
                      <span className="screen-nav-item">Thực đơn</span>
                      <span className="screen-nav-item">Đặt bàn</span>
                    </div>
                  </div>

                  {/* Mini Hero */}
                  <div className="screen-hero">
                    <div className="screen-hero-pill">
                      <span className="screen-live-dot" />
                      <span>Đang mở cửa • Đặt giao tận nơi</span>
                    </div>
                    <div className="screen-hero-heading">
                      Cà Phê Nguyên Bản &amp; Không Gian Xanh
                    </div>
                    <div className="screen-hero-desc">
                      Tối ưu chuyển đổi khách địa phương • Tải trang cực nhanh
                    </div>
                    <div className="screen-hero-actions">
                      <div className="screen-btn screen-btn-call">
                        <Phone size={11} />
                        <span>Gọi &amp; Đặt hàng</span>
                      </div>
                      <div className="screen-btn screen-btn-zalo">
                        <MessageCircle size={11} />
                        <span>Chat Zalo</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Offer Grid */}
                  <div className="screen-grid">
                    <div className="screen-card">
                      <span className="screen-card-icon">⚡</span>
                      <div>
                        <div className="screen-card-title">Tải trang 0.8s</div>
                        <div className="screen-card-sub">Chuẩn Mobile First</div>
                      </div>
                    </div>
                    <div className="screen-card">
                      <span className="screen-card-icon">📍</span>
                      <div>
                        <div className="screen-card-title">Lên Top Google</div>
                        <div className="screen-card-sub">SEO Maps địa phương</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-cards Group (Google Maps Card & Analytics Card) */}
              <div className="hero-subcards-group">
                {/* Floating Chip 2: Google Maps Business Profile Card */}
                <div className="hero-card-maps">
                  <div className="maps-top">
                    <div className="maps-pin-box">
                      <MapPin size={13} />
                    </div>
                    <div className="maps-verify-badge">
                      <Check size={11} strokeWidth={3} />
                      <span>Đã xác minh Google Maps</span>
                    </div>
                  </div>

                  <div className="maps-content">
                    <div className="maps-title">Tiệm Cà Phê &amp; Điểm Tâm Phố Xanh</div>
                    <div className="maps-rating-row">
                      <span className="maps-score">5.0</span>
                      <div className="maps-stars" aria-label="5 sao">
                        <Star size={11} fill="#f59e0b" color="#f59e0b" />
                        <Star size={11} fill="#f59e0b" color="#f59e0b" />
                        <Star size={11} fill="#f59e0b" color="#f59e0b" />
                        <Star size={11} fill="#f59e0b" color="#f59e0b" />
                        <Star size={11} fill="#f59e0b" color="#f59e0b" />
                      </div>
                      <span className="maps-reviews">(128 đánh giá)</span>
                    </div>
                    <div className="maps-status-line">
                      <span className="maps-open-dot">🟢</span>
                      <span>Đang mở cửa • Đóng 22:30</span>
                    </div>
                  </div>

                  <div className="maps-actions">
                    <button type="button" className="maps-btn maps-btn-dir" onClick={handleScrollToServices}>
                      <Navigation size={11} />
                      <span>Chỉ đường</span>
                    </button>
                    <button type="button" className="maps-btn maps-btn-call" onClick={() => handleOpenDemo()}>
                      <Phone size={11} />
                      <span>Gọi điện</span>
                    </button>
                  </div>
                </div>

                {/* Floating Chip 3: Analytics Growth Badge */}
                <div className="hero-card-analytics">
                  <div className="analytics-header">
                    <div className="analytics-icon">
                      <TrendingUp size={14} />
                    </div>
                    <div className="analytics-stat">
                      <span className="analytics-value">+185%</span>
                    </div>
                  </div>
                  <div className="analytics-text">
                    khách ghé tiệm từ Google
                  </div>
                  <div className="analytics-chart" aria-hidden="true">
                    <span className="chart-bar bar-1" />
                    <span className="chart-bar bar-2" />
                    <span className="chart-bar bar-3" />
                    <span className="chart-bar bar-4" />
                    <span className="chart-bar bar-5" />
                    <span className="chart-bar bar-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST METRICS / STATS STRIP: Trình bày gãy gọn, thẻ số liệu có icon và nhãn súc tích */}
        <div className="hero-trust-metrics-strip" role="region" aria-label="Thống kê uy tín LocalMate">
          {trustMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="hero-metric-card">
                <div className="hero-metric-icon-box" aria-hidden="true">
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <div className="hero-metric-info">
                  <div className="hero-metric-value">{item.value}</div>
                  <div className="hero-metric-label">{item.label}</div>
                  <div className="hero-metric-desc">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional legacy trust strip preserved for explicit prop */}
        {showTrustStrip && (
          <div className="hero-trust-strip">
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Báo giá trước khi làm</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Tận dụng thứ đã có</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Đội ngũ KTV địa phương</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Bàn giao 100% tài khoản</span>
            </div>
          </div>
        )}
      </Container>

      <style>{`
        /* Background Video & Subtle Clean Overlay */
        .hero-bg-video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
          opacity: 0.95;
          filter: saturate(1.05) contrast(1.02);
          display: block;
          z-index: 0;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.08) 45%,
            rgba(255, 255, 255, 0.35) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* 2-Column Desktop Grid */
        .hero-grid {
          display: grid;
          grid-template-columns: 54fr 46fr;
          gap: clamp(2rem, 3.5vw, 3.5rem);
          align-items: center;
        }

        /* Left Column Content */
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Sub-badge phía trên tiêu đề rõ ràng, màu sắc nhẹ nhàng (saosangedu style) */
        .hero-subbadge-wrapper {
          margin-bottom: 1.15rem;
        }

        .hero-subbadge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 12.5px;
          font-weight: 700;
          color: #065f46;
          background-color: #e8f5e9;
          border: 1px solid #c6ebd4;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          letter-spacing: 0.01em;
          white-space: nowrap;
          box-shadow: 0 1px 2px rgba(13, 118, 71, 0.06);
        }

        .subbadge-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        /* Headline: clamp(2.35rem, 3.8vw, 3.5rem), line-height: 1.12, letter-spacing: -0.03em */
        .hero-headline {
          font-size: clamp(2.25rem, 3.6vw, 3.4rem);
          color: #0f172a;
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.03em;
          margin: 0 0 1.15rem 0;
          text-wrap: balance;
        }

        .hero-highlight {
          color: #0d7647;
          display: inline;
        }

        .hero-desktop-br {
          display: inline;
        }

        /* Body: 1.05rem, #475569, line-height: 1.62, max-width: 54ch */
        .hero-body {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.62;
          max-width: 52ch;
          margin: 0 0 1.65rem 0;
          text-wrap: pretty;
        }

        /* INSTANT AUDIT HOOK & SECONDARY ACTIONS */
        .hero-audit-hook-wrapper {
          width: 100%;
          margin-bottom: 0.85rem;
        }

        .hero-secondary-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          font-size: 0.86rem;
          margin-bottom: 0.5rem;
        }

        .hero-secondary-link-btn {
          background: transparent;
          border: none;
          padding: 0;
          color: #1e293b;
          font-weight: 600;
          font-size: 0.86rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          text-decoration: underline;
          text-decoration-color: #94a3b8;
          text-underline-offset: 3px;
          transition: color 0.15s ease, text-decoration-color 0.15s ease;
        }

        .hero-secondary-link-btn:hover {
          color: #0d7647;
          text-decoration-color: #0d7647;
        }

        .hero-link-divider {
          color: #cbd5e1;
          font-size: 0.85rem;
        }

        /* CTA Buttons fallback */
        .hero-cta-group {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.15rem;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          background-color: #0d7647 !important;
          color: #ffffff !important;
          border: none !important;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          box-shadow: 0 2px 10px rgba(13, 118, 71, 0.25);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .hero-btn-primary:hover {
          background-color: #095935 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.35);
        }

        .hero-btn-secondary {
          background-color: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          color: #1e293b !important;
          font-weight: 600;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }

        .hero-btn-secondary:hover {
          background-color: #f8fafc !important;
          border-color: #94a3b8 !important;
        }

        /* Micro-copy: 13.5px, #64748b */
        .hero-microcopy {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
          line-height: 1.4;
          flex-wrap: wrap;
        }

        .microcopy-check {
          color: #0d7647;
          font-weight: 700;
        }

        .microcopy-dot {
          color: #cbd5e1;
        }

        /* ========================================================
           RIGHT COLUMN: VISUAL BUSINESS GROWTH STACK
           (Pure White, Layered depth, Crisp 1px borders, No Glassmorphism)
           ======================================================== */
        .hero-visual-column {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-visual-stack {
          position: relative;
          width: 100%;
          max-width: 530px;
          min-height: 410px;
        }

        .hero-subcards-group {
          display: contents;
        }

        /* Card Chính: Mockup Browser Laptop/Desktop */
        .hero-card-main {
          position: relative;
          width: 92%;
          margin: 18px auto 0 auto;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          box-shadow:
            0 12px 28px -6px rgba(15, 23, 42, 0.09),
            0 4px 10px -2px rgba(15, 23, 42, 0.04);
          overflow: hidden;
          z-index: 2;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hero-card-main:hover {
          transform: translateY(-2px);
          box-shadow:
            0 16px 36px -6px rgba(15, 23, 42, 0.12),
            0 6px 14px -2px rgba(15, 23, 42, 0.05);
        }

        /* Browser Chrome Bar */
        .mockup-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          gap: 8px;
        }

        .mockup-window-dots {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .mockup-url-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 3px 10px;
          font-size: 11.5px;
          color: #334155;
          flex: 1;
          max-width: 220px;
        }

        .url-lock {
          color: #0d7647;
          flex-shrink: 0;
        }

        .url-domain {
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .url-badge {
          font-size: 9px;
          font-weight: 700;
          color: #0d7647;
          background: #edf7f1;
          padding: 1px 4px;
          border-radius: 4px;
          margin-left: auto;
        }

        .mockup-pagespeed-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background-color: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
          border-radius: 9999px;
          padding: 2px 8px;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .pagespeed-icon {
          color: #16a34a;
        }

        /* Mockup Screen Content */
        .mockup-screen {
          padding: 12px 14px 14px 14px;
          background-color: #ffffff;
        }

        .screen-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 10px;
        }

        .screen-brand {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .screen-logo-badge {
          font-size: 13px;
        }

        .screen-brand-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
        }

        .screen-nav-items {
          display: flex;
          gap: 10px;
          font-size: 10.5px;
          color: #64748b;
        }

        .screen-nav-item.active {
          color: #0d7647;
          font-weight: 600;
        }

        .screen-hero {
          background: linear-gradient(180deg, #f0fdf4 0%, #fafdfb 100%);
          border: 1px solid #dcfce7;
          border-radius: 10px;
          padding: 10px 12px;
          margin-bottom: 10px;
        }

        .screen-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #ffffff;
          border: 1px solid #c6ebd4;
          border-radius: 9999px;
          padding: 2px 7px;
          font-size: 9.5px;
          font-weight: 600;
          color: #0d7647;
          margin-bottom: 6px;
        }

        .screen-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #16a34a;
        }

        .screen-hero-heading {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 3px;
        }

        .screen-hero-desc {
          font-size: 10.5px;
          color: #64748b;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .screen-hero-actions {
          display: flex;
          gap: 6px;
        }

        .screen-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10.5px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: default;
        }

        .screen-btn-call {
          background-color: #0d7647;
          color: #ffffff;
        }

        .screen-btn-zalo {
          background-color: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
        }

        .screen-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .screen-card {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 7px;
          padding: 6px 8px;
        }

        .screen-card-icon {
          font-size: 13px;
          flex-shrink: 0;
        }

        .screen-card-title {
          font-size: 10.5px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
        }

        .screen-card-sub {
          font-size: 9.5px;
          color: #64748b;
          line-height: 1.2;
        }

        /* Floating Chip 1: Lead Notification (Floating Top Right) */
        .hero-card-lead {
          position: absolute;
          top: -12px;
          right: -4px;
          z-index: 10;
          background: #ffffff;
          border: 1px solid #bbf7d0;
          border-radius: 12px;
          box-shadow:
            0 10px 24px -4px rgba(13, 118, 71, 0.16),
            0 2px 8px -2px rgba(13, 118, 71, 0.08);
          padding: 8px 12px;
          display: flex;
          align-items: flex-start;
          gap: 9px;
          max-width: 290px;
          transition: transform 0.2s ease;
        }

        .hero-card-lead:hover {
          transform: translateY(-2px);
        }

        .lead-icon-box {
          position: relative;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background-color: #edf7f1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d7647;
          flex-shrink: 0;
        }

        .lead-pulse {
          position: absolute;
          top: 3px;
          right: 3px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #ef4444;
          box-shadow: 0 0 0 2px #ffffff;
        }

        .lead-details {
          flex: 1;
        }

        .lead-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 2px;
        }

        .lead-tag {
          font-size: 10.5px;
          font-weight: 700;
          color: #0d7647;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .lead-time {
          font-size: 10px;
          color: #94a3b8;
        }

        .lead-msg {
          font-size: 11.5px;
          color: #0f172a;
          line-height: 1.35;
          margin-bottom: 2px;
        }

        .lead-status {
          font-size: 10px;
          color: #15803d;
          font-weight: 600;
        }

        /* Floating Chip 2: Google Maps Profile Card (Floating Bottom Left) */
        .hero-card-maps {
          position: absolute;
          bottom: -18px;
          left: -10px;
          z-index: 9;
          width: 58%;
          max-width: 295px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow:
            0 12px 28px -4px rgba(15, 23, 42, 0.12),
            0 4px 10px -2px rgba(15, 23, 42, 0.05);
          padding: 10px 12px;
          transition: transform 0.2s ease;
        }

        .hero-card-maps:hover {
          transform: translateY(-2px);
        }

        .maps-top {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .maps-pin-box {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background-color: #fee2e2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .maps-verify-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 10px;
          font-weight: 700;
          color: #1d4ed8;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 4px;
          padding: 1px 6px;
        }

        .maps-content {
          margin-bottom: 8px;
        }

        .maps-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 3px;
          line-height: 1.25;
        }

        .maps-rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .maps-score {
          font-weight: 700;
          color: #d97706;
        }

        .maps-stars {
          display: flex;
          gap: 1px;
        }

        .maps-reviews {
          color: #64748b;
          font-size: 10.5px;
        }

        .maps-status-line {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: #475569;
        }

        .maps-open-dot {
          font-size: 8px;
        }

        .maps-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .maps-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          font-size: 10.5px;
          font-weight: 600;
          padding: 5px 6px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .maps-btn-dir {
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #1e293b;
        }

        .maps-btn-dir:hover {
          background-color: #e2e8f0;
        }

        .maps-btn-call {
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          color: #0d7647;
        }

        .maps-btn-call:hover {
          background-color: #dcfce7;
        }

        /* Floating Chip 3: Analytics Growth Badge */
        .hero-card-analytics {
          position: absolute;
          bottom: -14px;
          right: -8px;
          z-index: 9;
          width: 40%;
          min-width: 175px;
          max-width: 205px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow:
            0 10px 24px -4px rgba(15, 23, 42, 0.1),
            0 3px 8px -2px rgba(15, 23, 42, 0.04);
          padding: 9px 12px;
          transition: transform 0.2s ease;
        }

        .hero-card-analytics:hover {
          transform: translateY(-2px);
        }

        .analytics-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
        }

        .analytics-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background-color: #dcfce7;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .analytics-stat {
          display: flex;
          align-items: baseline;
        }

        .analytics-value {
          font-size: 16px;
          font-weight: 800;
          color: #0d7647;
          letter-spacing: -0.02em;
        }

        .analytics-text {
          font-size: 10.5px;
          font-weight: 600;
          color: #334155;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        /* Sparkline mini chart */
        .analytics-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 16px;
          padding-top: 2px;
        }

        .chart-bar {
          flex: 1;
          background-color: #bbf7d0;
          border-radius: 2px;
        }

        .chart-bar.bar-1 { height: 30%; }
        .chart-bar.bar-2 { height: 45%; }
        .chart-bar.bar-3 { height: 40%; }
        .chart-bar.bar-4 { height: 65%; }
        .chart-bar.bar-5 { height: 80%; }
        .chart-bar.bar-6 { height: 100%; background-color: #16a34a; }

        /* ========================================================
           TRUST METRICS / STATS STRIP (Saosangedu inspired)
           Trình bày gãy gọn, thẻ số liệu có icon và nhãn súc tích
           ======================================================== */
        .hero-trust-metrics-strip {
          margin-top: clamp(2.25rem, 4vw, 3.25rem);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          width: 100%;
        }

        .hero-metric-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.95rem 1.15rem;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-metric-card:hover {
          transform: translateY(-2px);
          border-color: #cbd5e1;
          box-shadow: 0 6px 18px -4px rgba(15, 23, 42, 0.08);
        }

        .hero-metric-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background-color: #edf7f1;
          color: #0d7647;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-metric-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .hero-metric-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .hero-metric-label {
          font-size: 0.825rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.3;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hero-metric-desc {
          font-size: 0.725rem;
          color: #64748b;
          line-height: 1.25;
          margin-top: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Legacy Trust Strip (If enabled via prop) */
        .hero-trust-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem 0.85rem;
          padding: 0.85rem 1rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-navy);
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 720px;
          margin: 1.5rem auto 0 auto;
          box-sizing: border-box;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          justify-content: flex-start;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .trust-icon {
          flex-shrink: 0;
        }

        .trust-divider {
          display: none;
        }

        @media (min-width: 768px) {
          .hero-trust-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            font-size: 0.85rem;
          }
          .trust-strip-item {
            justify-content: center;
          }
          .trust-divider {
            display: block;
            width: 1px;
            height: 14px;
            background-color: var(--color-border);
          }
        }

        /* ========================================================
           RESPONSIVE DESIGN (Mobile & Tablet Specs)
           ======================================================== */
        @media (max-width: 991px) {
          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
          }

          .hero-content {
            align-items: flex-start;
            text-align: left;
          }

          .hero-desktop-br {
            display: none;
          }

          .hero-headline {
            font-size: clamp(2rem, 6.8vw, 2.65rem);
            line-height: 1.16;
            letter-spacing: -0.025em;
            margin-bottom: 1rem;
          }

          .hero-body {
            font-size: 1rem;
            line-height: 1.55;
            margin-bottom: 1.35rem;
          }

          /* Mobile CTAs: Primary full-width, Secondary full-width */
          .hero-cta-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.65rem;
            margin-bottom: 0.85rem;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }

          .hero-microcopy {
            justify-content: flex-start;
            margin-bottom: 0.5rem;
          }

          /* Visual Growth Stack on Mobile */
          .hero-visual-column {
            width: 100%;
            margin-top: 0.5rem;
          }

          .hero-visual-stack {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            min-height: auto;
            max-width: 100%;
          }

          /* Static positioning for cards on mobile to avoid overflow */
          .hero-card-lead {
            position: static;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .hero-card-main {
            position: static;
            width: 100%;
            margin: 0;
            box-sizing: border-box;
          }

          .hero-subcards-group {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
            width: 100%;
          }

          .hero-card-maps {
            position: static;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .hero-card-analytics {
            position: static;
            width: 100%;
            min-width: 0;
            max-width: 100%;
            box-sizing: border-box;
          }

          .mockup-browser-bar {
            padding: 6px 8px;
            gap: 4px;
            flex-wrap: nowrap;
          }

          .mockup-url-bar {
            max-width: 150px;
            min-width: 0;
            padding: 2px 6px;
            font-size: 11px;
          }

          .mockup-pagespeed-chip {
            padding: 2px 6px;
            font-size: 10px;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .screen-hero-actions {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 6px;
          }

          .screen-btn {
            flex: 1 1 auto;
            justify-content: center;
          }

          .screen-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }

          /* Trust metrics on tablet/mobile: 2 columns */
          .hero-trust-metrics-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            margin-top: 1.75rem;
          }

          .hero-metric-card {
            padding: 0.75rem 0.85rem;
            gap: 0.65rem;
          }

          .hero-metric-icon-box {
            width: 34px;
            height: 34px;
          }

          .hero-metric-value {
            font-size: 1.1rem;
          }

          .hero-metric-label {
            font-size: 0.75rem;
            white-space: normal;
          }

          .hero-metric-desc {
            display: none;
          }
        }

        @media (min-width: 560px) and (max-width: 991px) {
          .hero-subcards-group {
            grid-template-columns: 1.35fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-subbadge {
            font-size: 11px;
            padding: 0.3rem 0.7rem;
            white-space: normal;
            line-height: 1.3;
          }

          .hero-trust-metrics-strip {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }

          .hero-metric-card {
            padding: 0.65rem 0.65rem;
            gap: 0.5rem;
          }

          .hero-metric-icon-box {
            width: 30px;
            height: 30px;
          }

          .hero-metric-value {
            font-size: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-video {
            transform: none;
          }
          .hero-card-main,
          .hero-card-maps,
          .hero-card-lead,
          .hero-card-analytics,
          .hero-metric-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
