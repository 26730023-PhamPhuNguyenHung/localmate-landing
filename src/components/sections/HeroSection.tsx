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
  Check
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface HeroSectionProps {
  onOpenDemoForm?: () => void;
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

  const handleOpenDemo = () => {
    if (onOpenDemoForm) {
      onOpenDemoForm();
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

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundColor: '#edf5f1',
        paddingTop: 'clamp(2rem, 3.8vw, 3.5rem)',
        paddingBottom: 'clamp(2.25rem, 4.2vw, 3.75rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background Video Animation — Seamless Boomerang Loop */}
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
          {/* CỘT TRÁI (Content): Bố cục 56% Desktop */}
          <div className="hero-content">
            {/* Eyebrow Badge: WEBSITE • GOOGLE • QUẢNG CÁO • NỘI DUNG */}
            <div className="hero-eyebrow-container">
              <span className="hero-eyebrow-badge">
                <Sparkles size={13} className="eyebrow-icon" />
                <span>WEBSITE • GOOGLE • QUẢNG CÁO • NỘI DUNG</span>
              </span>
            </div>

            {/* H1 lớn: clamp(2.35rem, 3.8vw, 3.5rem), line-height: 1.12, letter-spacing: -0.03em */}
            <h1 className="hero-headline">
              Giúp doanh nghiệp nhỏ<br className="hero-desktop-br" />
              {' '}có website, lên Google<br className="hero-desktop-br" />
              {' '}và <span className="hero-highlight">tìm thêm khách.</span>
            </h1>

            {/* Body text: 1.05rem, #475569, line-height: 1.62, max-width: 54ch */}
            <p className="hero-body">
              Chọn đúng việc bạn cần — từ website, Google Maps đến quảng cáo và nội dung. Localmate triển khai nhanh, bàn giao rõ ràng và hỗ trợ sau khi hoàn thành.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <Button
                variant="primary"
                size="lg"
                onClick={handleOpenDemo}
                className="hero-btn-primary"
              >
                <span>Nhận website demo 0đ</span>
                <ArrowRight size={17} />
              </Button>

              <Button
                variant="white"
                size="lg"
                onClick={handleScrollToServices}
                className="hero-btn-secondary"
              >
                <span>Xem dịch vụ &amp; giá</span>
              </Button>
            </div>

            {/* Micro-copy Desktop */}
            <div className="hero-microcopy hero-microcopy-desktop">
              <span className="microcopy-check">✓</span>
              <span className="microcopy-text">Không cần ký hợp đồng</span>
              <span className="microcopy-dot">•</span>
              <span className="microcopy-text">Xem trước rồi quyết định</span>
            </div>
          </div>

          {/* CỘT PHẢI (Visual Business Growth Stack): Bố cục 44% Desktop */}
          <div className="hero-visual-column">
            <div className="hero-visual-stack">
              {/* Card 3: Lead Notification Chip */}
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
                    ✓ Đã tự động gửi Zalo
                  </div>
                </div>
              </div>

              {/* Card 1 (Main Mockup): Website preview mô phỏng trên smartphone & laptop card */}
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
                      <span className="screen-nav-item">Menu</span>
                      <span className="screen-nav-item">Đặt chỗ</span>
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

              {/* Sub-cards Group (Card 2: Google Maps & Card 4: Analytics) */}
              <div className="hero-subcards-group">
                {/* Card 2: Google Maps Business profile card */}
                <div className="hero-card-maps">
                  <div className="maps-top">
                    <div className="maps-pin-box">
                      <MapPin size={14} />
                    </div>
                    <div className="maps-verify-badge">
                      <Check size={11} strokeWidth={3} />
                      <span>Tiệm đã xác minh trên Google Maps</span>
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
                    <button type="button" className="maps-btn maps-btn-call" onClick={handleOpenDemo}>
                      <Phone size={11} />
                      <span>Gọi điện</span>
                    </button>
                  </div>
                </div>

                {/* Card 4: Analytics badge */}
                <div className="hero-card-analytics">
                  <div className="analytics-header">
                    <div className="analytics-icon">
                      <TrendingUp size={15} />
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

            {/* Micro-copy Mobile (Placed after Visual Growth Stack) */}
            <div className="hero-microcopy hero-microcopy-mobile">
              <span className="microcopy-check">✓</span>
              <span className="microcopy-text">Không cần ký hợp đồng</span>
              <span className="microcopy-dot">•</span>
              <span className="microcopy-text">Xem trước rồi quyết định</span>
            </div>
          </div>
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
          opacity: 0.96;
          filter: saturate(1.05) contrast(1.02);
          display: block;
          z-index: 0;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.06) 45%,
            rgba(255, 255, 255, 0.22) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* 2-Column Desktop Grid (56 / 44) */
        .hero-grid {
          display: grid;
          grid-template-columns: 56fr 44fr;
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

        .hero-eyebrow-container {
          margin-bottom: 1.15rem;
        }

        .hero-eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 12px;
          font-weight: 700;
          color: #063d24;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .eyebrow-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        /* Headline: clamp(2.35rem, 3.8vw, 3.5rem), line-height: 1.12, letter-spacing: -0.03em */
        .hero-headline {
          font-size: clamp(2.35rem, 3.8vw, 3.5rem);
          color: #0f172a;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 0 0 1.25rem 0;
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
          max-width: 54ch;
          margin: 0 0 1.75rem 0;
          text-wrap: pretty;
        }

        /* CTA Buttons */
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
          font-size: 13.5px;
          color: #64748b;
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-microcopy-desktop {
          display: flex;
        }

        .hero-microcopy-mobile {
          display: none;
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
          min-height: 430px;
        }

        /* Subcards Group on Desktop uses display: contents */
        .hero-subcards-group {
          display: contents;
        }

        /* Card 1: Main Mockup (Desktop / Laptop Browser) */
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
          font-size: 13.5px;
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

        /* Card 3: Lead Notification Chip (Floating Top Right) */
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

        /* Card 2: Google Maps Profile Card (Floating Bottom Left) */
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

        /* Card 4: Analytics Badge (Floating Bottom Right) */
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

          /* Mobile H1: 36-44px */
          .hero-headline {
            font-size: clamp(2.25rem, 7vw, 2.75rem);
            line-height: 1.15;
            letter-spacing: -0.025em;
            margin-bottom: 1rem;
          }

          .hero-body {
            font-size: 1rem;
            line-height: 1.55;
            margin-bottom: 1.5rem;
          }

          /* Mobile CTAs: Primary full-width, Secondary full-width */
          .hero-cta-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.65rem;
            margin-bottom: 0;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }

          /* Hide Desktop Micro-copy on Mobile */
          .hero-microcopy-desktop {
            display: none;
          }

          /* Visual Growth Stack on Mobile */
          .hero-visual-column {
            width: 100%;
            margin-top: 1rem;
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

          /* Tối ưu browser mockup trên mobile nhỏ chống tràn */
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

          /* Show Mobile Micro-copy after Visual Stack */
          .hero-microcopy-mobile {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            text-align: center;
            width: 100%;
          }
        }

        @media (min-width: 560px) and (max-width: 991px) {
          .hero-subcards-group {
            grid-template-columns: 1.35fr 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-video {
            transform: none;
          }
          .hero-card-main,
          .hero-card-maps,
          .hero-card-lead,
          .hero-card-analytics {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};
