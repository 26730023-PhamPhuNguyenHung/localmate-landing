import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  MapPin,
  Globe,
  Phone,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Cpu,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { useRouter, Link } from './Router';
import { CONTACT_INFO } from '../../data/landingContent';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

interface SolutionPillarItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  badge: string;
  icon: LucideIcon;
  colorClass: string;
}

const SOLUTION_PILLARS: SolutionPillarItem[] = [
  {
    id: 'xay-nen-tang-so',
    step: '01',
    title: 'Xây nền tảng số',
    subtitle: 'Website & Hồ sơ số',
    desc: 'Website bán hàng, hồ sơ năng lực số chuẩn di động, rõ ràng bảng giá.',
    href: '/giai-phap/xay-nen-tang-so',
    badge: 'Khởi tạo',
    icon: Globe,
    colorClass: 'pillar-emerald'
  },
  {
    id: 'duoc-tim-thay',
    step: '02',
    title: 'Được tìm thấy',
    subtitle: 'Google Maps & AI Search',
    desc: 'Xác minh Google Maps chính chủ, tối ưu GEO để AI đề xuất đầu tiên.',
    href: '/giai-phap/duoc-tim-thay',
    badge: 'Hot 2026',
    icon: MapPin,
    colorClass: 'pillar-amber'
  },
  {
    id: 'thu-hut-khach-hang',
    step: '03',
    title: 'Thu hút khách',
    subtitle: 'Quảng cáo & Tìm lead',
    desc: 'Google Ads 0% kê giá, lọc click ảo và tối ưu cuộc gọi từ khách gần.',
    href: '/giai-phap/thu-hut-khach-hang',
    badge: 'Ra lead',
    icon: TrendingUp,
    colorClass: 'pillar-blue'
  },
  {
    id: 'van-hanh-tu-dong-hoa',
    step: '04',
    title: 'Vận hành hiệu quả',
    subtitle: 'CRM & Tự động hóa',
    desc: 'Quản lý khách hàng tinh gọn, Mini App Zalo & chăm sóc tự động.',
    href: '/giai-phap/van-hanh-tu-dong-hoa',
    badge: 'Tinh gọn',
    icon: Cpu,
    colorClass: 'pillar-purple'
  },
  {
    id: 'dong-hanh-cham-soc',
    step: '05',
    title: 'Chăm sóc đồng hành',
    subtitle: 'Bảo trì & Kỹ thuật',
    desc: 'Đội ngũ IT riêng hỗ trợ 1-1 qua Zalo, bảo hành kỹ thuật 5 năm.',
    href: '/giai-phap/dong-hanh-cham-soc',
    badge: 'Bảo hành 5 năm',
    icon: ShieldCheck,
    colorClass: 'pillar-teal'
  }
];

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { currentPath, navigate } = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  // Close drawer & dropdown on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSolutionsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setSolutionsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 160);
  };

  const closeMenus = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleActionClick = () => {
    closeMenus();
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  const isSolutionsActive =
    currentPath.startsWith('/giai-phap') ||
    currentPath.startsWith('/dich-vu') ||
    currentPath.startsWith('/landing-490k');

  const isAboutActive =
    currentPath.startsWith('/ve-localmate') ||
    currentPath.startsWith('/gioi-thieu');

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${scrolled ? 'header-scrolled' : ''}`}
      >
        <Container size="lg">
          <div className="header-inner">
            {/* 1. Logo */}
            <Link
              to="/"
              className="header-logo-wrap"
              onClick={closeMenus}
              title="LocalMate - Người đồng hành số tại địa phương"
            >
              <img
                src="/logo.png"
                alt="LocalMate"
                width="150"
                height="38"
                className="header-logo-img"
              />
            </Link>

            {/* 2. Desktop Navigation: [Giải pháp] [Bảng giá] [Kiến thức] [Về Localmate] [Liên hệ] */}
            <nav className="header-desktop-nav" aria-label="Điều hướng chính">
              {/* Giải pháp Dropdown & Smart Mega Menu */}
              <div
                className="nav-dropdown-wrapper"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  type="button"
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                  className={`nav-link-btn ${isSolutionsActive ? 'active' : ''}`}
                  aria-expanded={solutionsDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Giải pháp</span>
                  <ChevronDown
                    size={14}
                    className={`dropdown-caret ${solutionsDropdownOpen ? 'open' : ''}`}
                  />
                </button>

                {/* Smart Mega Menu Panel: 5 Pillars */}
                {solutionsDropdownOpen && (
                  <div
                    className="mega-menu-wrapper"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <div className="mega-menu-card">
                      {/* Mega Menu Top Header Banner */}
                      <div className="mega-header-bar">
                        <div className="mega-header-info">
                          <span className="mega-kicker">HỆ THỐNG GIẢI PHÁP CHUYỂN ĐỔI SỐ</span>
                          <h3 className="mega-headline">5 Trụ Cột Tăng Trưởng Bền Vững Cho Kinh Doanh Địa Phương</h3>
                        </div>
                        <Link
                          to="/giai-phap"
                          onClick={closeMenus}
                          className="mega-view-all-header-btn"
                        >
                          <span>Xem tất cả giải pháp</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* 5 Pillars Horizontal Grid */}
                      <div className="mega-pillars-grid">
                        {SOLUTION_PILLARS.map((pillar) => {
                          const IconComp = pillar.icon;
                          const isActivePillar = currentPath === pillar.href;
                          return (
                            <Link
                              key={pillar.id}
                              to={pillar.href}
                              onClick={closeMenus}
                              className={`mega-pillar-card ${pillar.colorClass} ${isActivePillar ? 'active-pillar' : ''}`}
                            >
                              <div className="pillar-card-header">
                                <span className="pillar-step-number">{pillar.step}</span>
                                <div className="pillar-icon-box">
                                  <IconComp size={18} />
                                </div>
                                <span className="pillar-badge-pill">{pillar.badge}</span>
                              </div>

                              <div className="pillar-card-body">
                                <h4 className="pillar-title">{pillar.title}</h4>
                                <span className="pillar-subtitle">{pillar.subtitle}</span>
                                <p className="pillar-desc">{pillar.desc}</p>
                              </div>

                              <div className="pillar-card-footer">
                                <span className="pillar-link-text">Chi tiết giải pháp</span>
                                <ArrowRight size={12} className="pillar-arrow" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Mega Menu Bottom Bar */}
                      <div className="mega-bottom-bar">
                        <div className="mega-bottom-left">
                          <div className="mega-recommend-pill">
                            <Sparkles size={13} />
                            <span>Gợi ý cho người mới:</span>
                          </div>
                          <Link
                            to="/landing-490k"
                            onClick={closeMenus}
                            className="mega-recommend-link"
                          >
                            <strong>Gói Website 1 Trang 490.000đ</strong> — Khởi tạo hiện diện số, có Zalo &amp; Maps ngay
                          </Link>
                        </div>

                        <div className="mega-bottom-right">
                          <a
                            href={`tel:${CONTACT_INFO.phoneRaw}`}
                            className="mega-direct-hotline"
                            title="Gọi Hotline tư vấn nhanh"
                          >
                            <Phone size={13} className="mega-phone-icon" />
                            <span>Hotline tư vấn: <strong>0834 422 439</strong></span>
                          </a>
                          <Link
                            to="/giai-phap"
                            onClick={closeMenus}
                            className="mega-main-all-link"
                          >
                            <span>Xem tất cả giải pháp →</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bảng giá */}
              <Link
                to="/bang-gia"
                onClick={closeMenus}
                className={`nav-link ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
              >
                <span>Bảng giá</span>
              </Link>

              {/* Kiến thức */}
              <Link
                to="/kien-thuc"
                onClick={closeMenus}
                className={`nav-link ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
              >
                <span>Kiến thức</span>
              </Link>

              {/* Về Localmate */}
              <Link
                to="/ve-localmate"
                onClick={closeMenus}
                className={`nav-link ${isAboutActive ? 'active' : ''}`}
              >
                <span>Về Localmate</span>
              </Link>

              {/* Hồ sơ năng lực 2026 */}
              <Link
                to="/ho-so-nang-luc"
                onClick={closeMenus}
                className={`nav-link ${currentPath.startsWith('/ho-so-nang-luc') || currentPath.startsWith('/credential') ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Hồ sơ năng lực</span>
                <span style={{ fontSize: '10px', backgroundColor: '#edf7f1', color: '#0d7647', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>2026</span>
              </Link>

              {/* Liên hệ */}
              <Link
                to="/lien-he"
                onClick={closeMenus}
                className={`nav-link ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
              >
                <span>Liên hệ</span>
              </Link>
            </nav>

            {/* 3. Desktop Actions: [Hotline Gọi tư vấn] [CTA Đăng ký tư vấn] */}
            <div className="header-desktop-actions">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="header-hotline-link"
                title="Gọi tư vấn 0834 422 439"
              >
                <div className="hotline-icon-wrap">
                  <Phone size={16} className="header-hotline-icon" />
                </div>
                <div className="hotline-content">
                  <span className="hotline-label">Gọi tư vấn</span>
                  <span className="hotline-num">0834 422 439</span>
                </div>
              </a>

              <button
                type="button"
                onClick={handleActionClick}
                className="header-cta-button"
                title="Đăng ký tư vấn & Nhận Demo Web"
              >
                <Sparkles size={15} />
                <span>Đăng ký tư vấn</span>
              </button>
            </div>

            {/* 4. Mobile Actions: [Hotline gọi nhanh] [CTA Tư vấn] [Menu Hamburger] */}
            <div className="header-mobile-actions">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="header-mobile-call-btn"
                title="Gọi hotline 0834 422 439"
                aria-label="Gọi hotline tư vấn"
              >
                <Phone size={15} />
                <span className="mobile-call-text">Gọi ngay</span>
              </a>

              <button
                type="button"
                onClick={handleActionClick}
                className="header-mobile-cta"
                title="Đăng ký tư vấn"
              >
                <Sparkles size={13} />
                <span>Tư vấn</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
                aria-expanded={mobileMenuOpen}
                className="mobile-hamburger-btn"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer (Smooth Slide-In, Clear Flat Structure, Tap Target >= 44px) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer-backdrop" onClick={closeMenus} />
          <div className="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="Menu điều hướng">
            {/* Drawer Header */}
            <div className="drawer-header">
              <div className="drawer-brand">
                <img src="/logo.png" alt="LocalMate" className="drawer-logo-img" />
              </div>
              <button
                type="button"
                onClick={closeMenus}
                aria-label="Đóng menu"
                className="drawer-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Scroll Body */}
            <div className="drawer-scroll-body">
              {/* Section 1: 5 Trụ Cột Giải Pháp (Structured & Tap-Friendly >= 44px) */}
              <div className="drawer-section">
                <div className="drawer-section-header">
                  <span className="drawer-section-label">5 TRỤ CỘT GIẢI PHÁP</span>
                  <span className="drawer-section-sub">Kiến trúc tăng trưởng</span>
                </div>

                <div className="drawer-pillars-list">
                  {SOLUTION_PILLARS.map((pillar) => {
                    const IconComp = pillar.icon;
                    const isActive = currentPath === pillar.href;
                    return (
                      <Link
                        key={pillar.id}
                        to={pillar.href}
                        onClick={closeMenus}
                        className={`drawer-pillar-item ${pillar.colorClass} ${isActive ? 'active' : ''}`}
                      >
                        <div className="drawer-pillar-step">{pillar.step}</div>
                        <div className="drawer-pillar-icon">
                          <IconComp size={17} />
                        </div>
                        <div className="drawer-pillar-content">
                          <div className="drawer-pillar-title-row">
                            <span className="drawer-pillar-title">{pillar.title}</span>
                            <span className="drawer-pillar-badge">{pillar.badge}</span>
                          </div>
                          <span className="drawer-pillar-desc">{pillar.subtitle}</span>
                        </div>
                        <ArrowRight size={14} className="drawer-pillar-arrow" />
                      </Link>
                    );
                  })}

                  {/* Link nổi bật: Xem tất cả giải pháp */}
                  <Link
                    to="/giai-phap"
                    onClick={closeMenus}
                    className="drawer-all-solutions-link"
                  >
                    <span>Xem tất cả giải pháp &amp; dịch vụ</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Section 2: Điều hướng chính */}
              <div className="drawer-section">
                <div className="drawer-section-header">
                  <span className="drawer-section-label">ĐIỀU HƯỚNG CHÍNH</span>
                </div>

                <div className="drawer-nav-list">
                  <Link
                    to="/"
                    onClick={closeMenus}
                    className={`drawer-nav-link ${currentPath === '/' ? 'active' : ''}`}
                  >
                    <span>Trang chủ</span>
                  </Link>
                  <Link
                    to="/bang-gia"
                    onClick={closeMenus}
                    className={`drawer-nav-link ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
                  >
                    <span>Bảng giá niêm yết</span>
                    <span className="drawer-nav-badge">Minh bạch</span>
                  </Link>
                  <Link
                    to="/kien-thuc"
                    onClick={closeMenus}
                    className={`drawer-nav-link ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
                  >
                    <span>Kiến thức</span>
                  </Link>
                  <Link
                    to="/ve-localmate"
                    onClick={closeMenus}
                    className={`drawer-nav-link ${isAboutActive ? 'active' : ''}`}
                  >
                    <span>Về Localmate</span>
                  </Link>
                  <Link
                    to="/ho-so-nang-luc"
                    onClick={closeMenus}
                    className={`drawer-nav-link ${currentPath.startsWith('/ho-so-nang-luc') || currentPath.startsWith('/credential') ? 'active' : ''}`}
                  >
                    <span>Hồ sơ năng lực</span>
                    <span className="drawer-nav-badge" style={{ backgroundColor: '#edf7f1', color: '#0d7647' }}>40 Slide</span>
                  </Link>
                  <Link
                    to="/lien-he"
                    onClick={closeMenus}
                    className={`drawer-nav-link ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
                  >
                    <span>Liên hệ tư vấn</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="drawer-footer">
              <button
                type="button"
                onClick={handleActionClick}
                className="drawer-primary-cta"
              >
                <Sparkles size={16} />
                <span>Đăng ký tư vấn / Nhận Demo Web</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="drawer-hotline-card"
                title="Gọi hotline tư vấn 0834 422 439"
              >
                <div className="drawer-hotline-icon">
                  <Phone size={16} />
                </div>
                <div className="drawer-hotline-content">
                  <span className="drawer-hotline-sub">Tư vấn trực tiếp 24/7</span>
                  <span className="drawer-hotline-num">0834 422 439</span>
                </div>
              </a>

              <p className="drawer-footer-note">
                Tư vấn &amp; khảo sát 1-1 tận nơi tại Hóc Môn, TP.HCM &amp; Toàn quốc
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ==========================================================================
           HEADER COMPONENT STYLES
           Theme: MISA Light Theme, Crisp Contrast, Absolutely No Glassmorphism
           ========================================================================== */
        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 70px;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          scrollbar-gutter: stable;
        }

        .site-header.header-scrolled {
          border-bottom: 1px solid #cbd5e1;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* 1. Logo */
        .header-logo-wrap {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-logo-img {
          height: 38px;
          max-height: 40px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* 2. Desktop Nav */
        .header-desktop-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link,
        .nav-link-btn {
          font-size: 0.9375rem;
          font-weight: 550;
          color: #334155;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.15s ease, background-color 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          white-space: nowrap;
          box-sizing: border-box;
          min-height: 40px;
        }

        .nav-link:hover,
        .nav-link-btn:hover {
          color: #0d7647;
          background-color: #f0fdf4;
        }

        .nav-link.active,
        .nav-link-btn.active {
          color: #0d7647;
          font-weight: 650;
          background-color: #edf7f1;
        }

        .nav-dropdown-wrapper {
          position: relative;
        }

        .dropdown-caret {
          color: #64748b;
          transition: transform 0.2s ease, color 0.15s ease;
        }

        .dropdown-caret.open {
          transform: rotate(180deg);
          color: #0d7647;
        }

        /* ==========================================================================
           MEGA MENU PANEL (5 PILLARS ARCHITECTURE)
           ========================================================================== */
        .mega-menu-wrapper {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, 94vw);
          z-index: 1050;
          animation: headerFadeIn 0.18s ease-out;
        }

        @keyframes headerFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .mega-menu-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-sizing: border-box;
        }

        /* Mega Header Bar */
        .mega-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 0.85rem;
        }

        .mega-header-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .mega-kicker {
          font-size: 0.6875rem;
          font-weight: 750;
          color: #0d7647;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .mega-headline {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
        }

        .mega-view-all-header-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #0d7647;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .mega-view-all-header-btn:hover {
          background-color: #0d7647;
          color: #ffffff;
        }

        /* 5 Pillars Grid */
        .mega-pillars-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.9rem;
        }

        .mega-pillar-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem 0.9rem;
          border-radius: 12px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          text-decoration: none;
          transition: all 0.18s ease;
          min-height: 195px;
          box-sizing: border-box;
        }

        .mega-pillar-card:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
        }

        /* Color thematic accents for pillars */
        .pillar-emerald:hover, .pillar-emerald.active-pillar {
          border-color: #0d7647;
        }
        .pillar-emerald .pillar-icon-box {
          background-color: #edf7f1;
          color: #0d7647;
        }
        .pillar-emerald .pillar-step-number {
          color: #0d7647;
        }

        .pillar-amber:hover, .pillar-amber.active-pillar {
          border-color: #d97706;
        }
        .pillar-amber .pillar-icon-box {
          background-color: #fef3c7;
          color: #b45309;
        }
        .pillar-amber .pillar-step-number {
          color: #b45309;
        }

        .pillar-blue:hover, .pillar-blue.active-pillar {
          border-color: #2563eb;
        }
        .pillar-blue .pillar-icon-box {
          background-color: #eff6ff;
          color: #1d4ed8;
        }
        .pillar-blue .pillar-step-number {
          color: #1d4ed8;
        }

        .pillar-purple:hover, .pillar-purple.active-pillar {
          border-color: #7c3aed;
        }
        .pillar-purple .pillar-icon-box {
          background-color: #f5f3ff;
          color: #6d28d9;
        }
        .pillar-purple .pillar-step-number {
          color: #6d28d9;
        }

        .pillar-teal:hover, .pillar-teal.active-pillar {
          border-color: #0f766e;
        }
        .pillar-teal .pillar-icon-box {
          background-color: #f0fdfa;
          color: #0f766e;
        }
        .pillar-teal .pillar-step-number {
          color: #0f766e;
        }

        .pillar-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }

        .pillar-step-number {
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .pillar-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-badge-pill {
          font-size: 0.625rem;
          font-weight: 700;
          color: #475569;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 0.12rem 0.4rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .pillar-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
        }

        .pillar-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.25;
        }

        .pillar-subtitle {
          font-size: 0.725rem;
          font-weight: 600;
          color: #0d7647;
          line-height: 1.25;
        }

        .pillar-desc {
          font-size: 0.725rem;
          color: #475569;
          line-height: 1.4;
          margin: 0.35rem 0 0 0;
          text-wrap: pretty;
        }

        .pillar-card-footer {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 0.75rem;
          font-size: 0.75rem;
          font-weight: 650;
          color: #0d7647;
          border-top: 1px dashed #e2e8f0;
          padding-top: 0.5rem;
        }

        .pillar-arrow {
          transition: transform 0.15s ease;
        }

        .mega-pillar-card:hover .pillar-arrow {
          transform: translateX(3px);
        }

        /* Mega Bottom Bar */
        .mega-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 0.85rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .mega-bottom-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8125rem;
        }

        .mega-recommend-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.6875rem;
          font-weight: 700;
          color: #15803d;
          background-color: #dcfce7;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .mega-recommend-link {
          color: #334155;
          text-decoration: none;
          line-height: 1.3;
        }

        .mega-recommend-link strong {
          color: #0d7647;
        }

        .mega-recommend-link:hover {
          text-decoration: underline;
        }

        .mega-bottom-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .mega-direct-hotline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          color: #475569;
          text-decoration: none;
        }

        .mega-direct-hotline strong {
          color: #0d7647;
          font-size: 0.875rem;
        }

        .mega-direct-hotline:hover {
          color: #0d7647;
        }

        .mega-phone-icon {
          color: #0d7647;
        }

        .mega-main-all-link {
          font-size: 0.8125rem;
          font-weight: 700;
          color: #0d7647;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 6px;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          transition: background-color 0.15s ease, color 0.15s ease;
          white-space: nowrap;
        }

        .mega-main-all-link:hover {
          background-color: #0d7647;
          color: #ffffff;
        }

        /* 3. Desktop Actions: Hotline & CTA */
        .header-desktop-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .header-hotline-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          padding: 4px 10px 4px 6px;
          border-radius: 10px;
          transition: all 0.15s ease;
        }

        .header-hotline-link:hover {
          background-color: #f8fafc;
        }

        .hotline-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d7647;
          flex-shrink: 0;
          transition: all 0.18s ease;
        }

        .header-hotline-link:hover .hotline-icon-wrap {
          background-color: #dcfce7;
          border-color: #0d7647;
          transform: scale(1.05);
        }

        .header-hotline-icon {
          color: #0d7647;
        }

        .hotline-content {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .hotline-label {
          font-size: 0.6875rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.15;
        }

        .hotline-num {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
          font-variant-numeric: tabular-nums;
          transition: color 0.15s ease;
        }

        .header-hotline-link:hover .hotline-num {
          color: #0d7647;
        }

        .header-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          height: 42px;
          padding: 0 20px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.22);
          transition: all 0.15s ease;
          white-space: nowrap;
          font-family: inherit;
        }

        .header-cta-button:hover {
          background-color: #095935;
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.32);
          transform: translateY(-1px);
        }

        /* 4. Mobile Actions inside Header Bar */
        .header-mobile-actions {
          display: none;
          align-items: center;
          gap: 8px;
        }

        .header-mobile-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          min-height: 40px;
          padding: 0 12px;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          border-radius: 9999px;
          color: #0d7647;
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .header-mobile-call-btn:hover {
          background-color: #dcfce7;
          border-color: #0d7647;
        }

        .header-mobile-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 0 14px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          min-height: 40px;
          white-space: nowrap;
          font-family: inherit;
          box-shadow: 0 2px 6px rgba(13, 118, 71, 0.2);
          transition: all 0.15s ease;
        }

        .header-mobile-cta:hover {
          background-color: #095935;
        }

        .mobile-hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          min-height: 44px;
          padding: 8px;
          background: transparent;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #0f172a;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .mobile-hamburger-btn:hover {
          background-color: #f1f5f9;
        }

        @media (max-width: 400px) {
          .mobile-call-text {
            display: none;
          }
          .header-mobile-call-btn {
            width: 40px;
            height: 40px;
            padding: 0;
            justify-content: center;
            border-radius: 50%;
          }
        }

        /* Breakpoint 1024px: Switch to Mobile */
        @media (max-width: 1024px) {
          .header-desktop-nav,
          .header-desktop-actions,
          .mega-menu-wrapper {
            display: none !important;
          }
          .header-mobile-actions {
            display: flex !important;
          }
        }

        /* Laptop Zoom 125% adjustment (1025px - 1240px) */
        @media (min-width: 1025px) and (max-width: 1240px) {
          .mega-pillars-grid {
            gap: 0.6rem;
          }
          .mega-pillar-card {
            padding: 0.85rem 0.75rem;
            min-height: 185px;
          }
          .pillar-title {
            font-size: 0.8125rem;
          }
          .pillar-subtitle {
            font-size: 0.6875rem;
          }
          .pillar-desc {
            font-size: 0.6875rem;
          }
          .nav-link, .nav-link-btn {
            padding: 8px 10px;
            font-size: 0.875rem;
          }
        }

        /* ==========================================================================
           MOBILE DRAWER (FULL ACCESSIBILITY, TOUCH TARGET >= 44PX)
           ========================================================================== */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-drawer-backdrop {
          position: absolute;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.5);
          animation: drawerBackdropFade 0.2s ease-out;
        }

        @keyframes drawerBackdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-drawer-panel {
          position: relative;
          width: min(390px, 92vw);
          height: 100%;
          background-color: #ffffff;
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.14);
          display: flex;
          flex-direction: column;
          z-index: 1110;
          animation: drawerSlideIn 0.24s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        @keyframes drawerSlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .drawer-header {
          height: 64px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1f5f9;
          flex-shrink: 0;
        }

        .drawer-brand {
          display: flex;
          align-items: center;
        }

        .drawer-logo-img {
          height: 32px;
          width: auto;
          object-fit: contain;
        }

        .drawer-close-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: #f8fafc;
          border-radius: 8px;
          color: #334155;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .drawer-close-btn:hover {
          background-color: #fee2e2;
          color: #dc2626;
        }

        .drawer-scroll-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          scrollbar-gutter: stable;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-sizing: border-box;
        }

        .drawer-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .drawer-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
        }

        .drawer-section-label {
          font-size: 0.6875rem;
          font-weight: 750;
          color: #0d7647;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .drawer-section-sub {
          font-size: 0.6875rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Drawer Pillars List */
        .drawer-pillars-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .drawer-pillar-item {
          min-height: 52px;
          padding: 8px 12px;
          border-radius: 10px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background-color 0.15s ease, border-color 0.15s ease;
          box-sizing: border-box;
        }

        .drawer-pillar-item:hover,
        .drawer-pillar-item.active {
          background-color: #f0fdf4;
          border-color: #a7f3d0;
        }

        .drawer-pillar-step {
          font-size: 0.75rem;
          font-weight: 800;
          color: #0d7647;
          width: 20px;
          flex-shrink: 0;
        }

        .drawer-pillar-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d7647;
          flex-shrink: 0;
        }

        .drawer-pillar-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .drawer-pillar-title-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .drawer-pillar-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
        }

        .drawer-pillar-badge {
          font-size: 0.5875rem;
          font-weight: 700;
          color: #15803d;
          background-color: #dcfce7;
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .drawer-pillar-desc {
          font-size: 0.725rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .drawer-pillar-arrow {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .drawer-all-solutions-link {
          min-height: 44px;
          padding: 10px 14px;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          border-radius: 10px;
          color: #0d7647;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2px;
          transition: background-color 0.15s ease;
        }

        .drawer-all-solutions-link:hover {
          background-color: #dcfce7;
        }

        /* Drawer Nav List */
        .drawer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .drawer-nav-link {
          min-height: 46px;
          padding: 10px 14px;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #0f172a;
          text-decoration: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .drawer-nav-link:hover {
          background-color: #f8fafc;
          color: #0d7647;
        }

        .drawer-nav-link.active {
          background-color: #edf7f1;
          color: #0d7647;
          font-weight: 700;
        }

        .drawer-nav-badge {
          font-size: 0.65rem;
          font-weight: 600;
          background-color: #dcfce7;
          color: #15803d;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
        }

        /* Drawer Footer */
        .drawer-footer {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }

        .drawer-primary-cta {
          min-height: 48px;
          width: 100%;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 0.9375rem;
          font-weight: 650;
          border: none;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.25);
          font-family: inherit;
          transition: background-color 0.15s ease, transform 0.15s ease;
        }

        .drawer-primary-cta:hover {
          background-color: #095935;
          transform: translateY(-1px);
        }

        .drawer-hotline-card {
          min-height: 48px;
          width: 100%;
          background-color: #f0fdf4;
          border: 1px solid #c6ebd4;
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          box-sizing: border-box;
          transition: all 0.15s ease;
        }

        .drawer-hotline-card:hover {
          background-color: #dcfce7;
          border-color: #0d7647;
        }

        .drawer-hotline-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #0d7647;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .drawer-hotline-content {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .drawer-hotline-sub {
          font-size: 0.6875rem;
          font-weight: 600;
          color: #065f46;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.15;
        }

        .drawer-hotline-num {
          font-size: 0.975rem;
          font-weight: 700;
          color: #063d24;
          line-height: 1.25;
          font-variant-numeric: tabular-nums;
        }

        .drawer-footer-note {
          font-size: 0.725rem;
          color: #64748b;
          text-align: center;
          margin: 0;
          line-height: 1.35;
        }
      `}</style>
    </>
  );
};

export default Header;
