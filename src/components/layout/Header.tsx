import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from './Router';
import { ArtCrop } from '../ui/ArtCrop';
import {
  Globe,
  MapPin,
  Sparkles,
  FileText,
  Layout,
  TrendingUp,
  Briefcase,
  Star,
  Target,
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  type LucideIcon
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

interface ServiceItem {
  title: string;
  desc: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
  iconBg: string;
  iconColor: string;
}

interface ServiceGroup {
  groupTitle: string;
  items: ServiceItem[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    groupTitle: 'WEBSITE',
    items: [
      {
        title: 'Website 1 Trang',
        desc: 'Ra mắt nhanh, nhận khách sớm',
        path: '/landing-490k',
        icon: Layout,
        badge: 'Từ 490k',
        iconBg: '#edf7f1',
        iconColor: '#0d7647'
      },
      {
        title: 'Website Doanh Nghiệp',
        desc: 'Giới thiệu doanh nghiệp chuyên nghiệp',
        path: '/thiet-ke-website',
        icon: Globe,
        iconBg: '#eff6ff',
        iconColor: '#2563eb'
      },
      {
        title: 'Nâng Cấp Website',
        desc: 'Sửa giao diện, tốc độ & chuyển đổi',
        path: '/thiet-ke-website',
        icon: Sparkles,
        iconBg: '#f5f3ff',
        iconColor: '#7c3aed'
      }
    ]
  },
  {
    groupTitle: 'HIỆN DIỆN ĐỊA PHƯƠNG',
    items: [
      {
        title: 'Google Maps',
        desc: 'Đưa doanh nghiệp lên Google',
        path: '/google-maps-local-seo',
        icon: MapPin,
        badge: 'Từ 299k',
        iconBg: '#fff4eb',
        iconColor: '#d97706'
      },
      {
        title: 'Local SEO',
        desc: 'Tăng khả năng được tìm thấy',
        path: '/google-maps-local-seo',
        icon: TrendingUp,
        iconBg: '#edf7f1',
        iconColor: '#0d7647'
      },
      {
        title: 'Đánh Giá Google',
        desc: 'Tăng uy tín từ khách thật',
        path: '/google-maps-local-seo',
        icon: Star,
        iconBg: '#eff6ff',
        iconColor: '#2563eb'
      }
    ]
  },
  {
    groupTitle: 'TĂNG TRƯỞNG',
    items: [
      {
        title: 'Google Ads',
        desc: 'Tiếp cận khách đang cần',
        path: '/google-ads',
        icon: Target,
        iconBg: '#fff4eb',
        iconColor: '#d97706'
      },
      {
        title: 'Content',
        desc: 'Duy trì hiện diện đều đặn',
        path: '/content-marketing',
        icon: FileText,
        iconBg: '#fdf2f8',
        iconColor: '#db2777'
      },
      {
        title: 'CRM & Automation',
        desc: 'Theo dõi và chăm sóc lead',
        path: '/automation',
        icon: Briefcase,
        iconBg: '#f5f3ff',
        iconColor: '#7c3aed'
      }
    ]
  }
];

interface HeaderProps {
  onOpenDemoForm?: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const { currentPath, navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const isHome = currentPath === '/' || currentPath === '/cach-lam-viec' || currentPath === '/quy-trinh';

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Section observer when on homepage
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll('main section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -65% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Anti-flicker hover handlers with small delay
  const handleMouseEnterDropdown = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown('services');
  };

  const handleMouseLeaveDropdown = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 140);
  };

  const closeMenus = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string, fallbackPath: string) => {
    e.preventDefault();
    closeMenus();

    if (isHome) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const headerHeight = 85;
        const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
        setActiveSection(targetId);
        return;
      }
    }

    // If on another page, navigate
    navigate(fallbackPath);
    if (hash) {
      setTimeout(() => {
        const targetId = hash.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
          const headerHeight = 85;
          const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenus();
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      handleNavClick(e as any, '#contact', '/#contact');
    }
  };

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      ref={dropdownRef}
    >
      <div className="header-inner">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '#home', '/')}
          className="brand"
          aria-label="Localmate — Trang chủ"
        >
          <ArtCrop
            image={1}
            box={[72, 4, 213, 83]}
            className="logo"
            role="img"
            ariaLabel="Localmate — Người đồng hành số"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="header-nav-desktop" aria-label="Điều hướng chính">
          {/* 1. Trang chủ */}
          <a
            className={`nav-link ${isHome && activeSection === 'home' ? 'active' : ''}`}
            href="/"
            onClick={(e) => handleNavClick(e, '#home', '/')}
          >
            Trang chủ
          </a>

          {/* 2. Dịch vụ (Redesigned 3-Column Studio Mega Menu) */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              className={`nav-dropdown-btn ${(isHome && activeSection === 'services') || currentPath.startsWith('/dich-vu') || currentPath.startsWith('/thiet-ke-website') || currentPath.startsWith('/google-maps') || currentPath.startsWith('/google-ads') || currentPath === '/giai-phap' ? 'active' : ''}`}
              aria-expanded={activeDropdown === 'services'}
            >
              <span>Dịch vụ</span>
              <ChevronDown
                size={14}
                className={`dropdown-arrow ${activeDropdown === 'services' ? 'open' : ''}`}
              />
            </button>

            {/* Mega Menu Dropdown Panel */}
            {activeDropdown === 'services' && (
              <div
                className="mega-menu-overlay"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <div className="mega-menu-container">
                  {/* Top 3 Columns: Streamlined Studio Layout */}
                  <div className="mega-menu-grid">
                    {SERVICE_GROUPS.map((group) => (
                      <div key={group.groupTitle} className="mega-col">
                        <div className="mega-col-header">
                          <span>{group.groupTitle}</span>
                        </div>
                        <div className="mega-items-list">
                          {group.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.title}
                                href="#services"
                                onClick={(e) => {
                                  e.preventDefault();
                                  closeMenus();
                                  handleNavClick(e, '#services', '/#services');
                                  if (onOpenDemoForm) {
                                    onOpenDemoForm(item.title);
                                  }
                                }}
                                className="mega-card"
                              >
                                <div
                                  className="mega-card-icon"
                                  style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                                >
                                  <IconComponent size={15} />
                                </div>
                                <div className="mega-card-content">
                                  <div className="mega-card-title">
                                    <span>{item.title}</span>
                                    {item.badge && (
                                      <span className="mega-tag">{item.badge}</span>
                                    )}
                                  </div>
                                  <p className="mega-card-desc">{item.desc}</p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Horizontal Sleek Footer Bar */}
                  <div className="mega-footer-bar">
                    <div className="mega-footer-left">
                      <span>Chưa biết nên bắt đầu từ đâu?</span>
                    </div>
                    <div className="mega-footer-right">
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          closeMenus();
                          handleNavClick(e, '#services', '/#services');
                        }}
                        className="mega-footer-link"
                      >
                        <span>Xem chi tiết dịch vụ</span>
                        <ArrowRight size={13} />
                      </a>
                      <button
                        type="button"
                        onClick={handleCtaClick}
                        className="mega-footer-cta"
                      >
                        Nhận tư vấn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Bảng giá */}
          <a
            className="nav-link"
            href="#services"
            onClick={(e) => handleNavClick(e, '#services', '/#services')}
          >
            Bảng giá
          </a>

          {/* 4. Câu chuyện */}
          <a
            className={`nav-link ${isHome && activeSection === 'stories' ? 'active' : ''}`}
            href="#stories"
            onClick={(e) => handleNavClick(e, '#stories', '/#stories')}
          >
            Câu chuyện
          </a>

          {/* 5. Quy trình */}
          <a
            className={`nav-link ${isHome && activeSection === 'process' ? 'active' : ''}`}
            href="#process"
            onClick={(e) => handleNavClick(e, '#process', '/#process')}
          >
            Quy trình
          </a>

          {/* 6. Kiến thức */}
          <a
            className={`nav-link ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
            href="/kien-thuc"
            onClick={(e) => {
              e.preventDefault();
              closeMenus();
              navigate('/kien-thuc');
            }}
          >
            Kiến thức
          </a>

          {/* 7. Về Localmate */}
          <a
            className="nav-link"
            href="#about"
            onClick={(e) => handleNavClick(e, '#about', '/#about')}
          >
            Về Localmate
          </a>

          {/* 7. Liên hệ */}
          <a
            className={`nav-link ${isHome && activeSection === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', '/#contact')}
          >
            Liên hệ
          </a>
        </nav>

        {/* Right Desktop Actions: Phone + CTA Button */}
        <div className="header-actions-desktop">
          <a className="phone" href="tel:0834422439" aria-label="Gọi 0834 422 439">
            <span className="phone-icon">
              <Phone size={15} color="#ed8506" />
            </span>
            <span className="phone-text">0834.422.439</span>
          </a>

          <button
            type="button"
            className="header-cta-btn"
            onClick={handleCtaClick}
            aria-label="Nhận báo giá nhanh"
          >
            ✧ &nbsp; Báo giá nhanh
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-mobile"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (Streamlined Accordion Style) */}
      {isMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer-body">
            <div className="mobile-nav-links">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, '#home', '/')}
                className={`mobile-nav-item ${isHome && activeSection === 'home' ? 'active' : ''}`}
              >
                Trang chủ
              </a>

              {/* Mobile Dịch Vụ Streamlined Accordion */}
              <div className="mobile-accordion">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="mobile-accordion-toggle"
                >
                  <span>Dịch vụ</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s'
                    }}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mobile-accordion-content">
                    {SERVICE_GROUPS.map((group) => (
                      <div key={group.groupTitle} className="mobile-group-block">
                        <div className="mobile-group-title">{group.groupTitle}</div>
                        {group.items.map((item) => (
                          <a
                            key={item.title}
                            href="#services"
                            onClick={(e) => {
                              e.preventDefault();
                              closeMenus();
                              handleNavClick(e, '#services', '/#services');
                              if (onOpenDemoForm) {
                                onOpenDemoForm(item.title);
                              }
                            }}
                            className="mobile-sub-link"
                          >
                            <span>{item.title}</span>
                          </a>
                        ))}
                      </div>
                    ))}

                    <div className="mobile-services-actions">
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          closeMenus();
                          handleNavClick(e, '#services', '/#services');
                        }}
                        className="mobile-view-all-link"
                      >
                        Xem tất cả dịch vụ →
                      </a>
                      <button
                        type="button"
                        onClick={handleCtaClick}
                        className="mobile-consult-btn"
                      >
                        Nhận tư vấn
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenus();
                  handleNavClick(e, '#services', '/#services');
                }}
                className="mobile-nav-item"
              >
                Bảng giá niêm yết
              </a>

              <a
                href="#stories"
                onClick={(e) => handleNavClick(e, '#stories', '/#stories')}
                className={`mobile-nav-item ${isHome && activeSection === 'stories' ? 'active' : ''}`}
              >
                Câu chuyện
              </a>

              <a
                href="#process"
                onClick={(e) => handleNavClick(e, '#process', '/#process')}
                className={`mobile-nav-item ${isHome && activeSection === 'process' ? 'active' : ''}`}
              >
                Quy trình
              </a>

              <a
                href="/kien-thuc"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenus();
                  navigate('/kien-thuc');
                }}
                className={`mobile-nav-item ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
              >
                Kiến thức
              </a>

              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about', '/#about')}
                className="mobile-nav-item"
              >
                Về Localmate
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact', '/#contact')}
                className={`mobile-nav-item ${isHome && activeSection === 'contact' ? 'active' : ''}`}
              >
                Liên hệ
              </a>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="header-cta-btn"
                style={{ width: '100%', minHeight: 48 }}
                onClick={handleCtaClick}
              >
                ✧ &nbsp; Báo giá &amp; Tư vấn nhanh
              </button>
              <a
                href="tel:0834422439"
                className="mobile-drawer-hotline"
              >
                <Phone size={16} color="#ea580c" />
                <span>Hotline: 0834.422.439</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          width: 100%;
          scrollbar-gutter: stable;
        }

        .site-header.scrolled {
          box-shadow: 0 4px 18px rgba(13, 118, 71, 0.08);
          border-bottom-color: #d1fae5;
        }

        .site-header .header-inner {
          max-width: 1440px;
          height: clamp(68px, 6vw, 82px);
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.2vw, 20px);
          padding: 0 clamp(16px, 2vw, 32px);
          box-sizing: border-box;
          justify-content: space-between;
        }

        .site-header .brand {
          display: block;
          flex-shrink: 0;
          text-decoration: none;
        }

        .site-header .logo {
          width: clamp(148px, 11vw, 185px);
          aspect-ratio: 213/83;
        }

        /* Desktop Nav */
        .header-nav-desktop {
          display: flex;
          gap: clamp(10px, 1.2vw, 22px);
          align-items: center;
          margin-left: auto;
          margin-right: clamp(8px, 1vw, 16px);
          font-size: clamp(13.5px, 0.95vw, 15px);
          font-weight: 700;
          color: #10263d;
          white-space: nowrap;
        }

        .nav-link {
          padding: 16px 0;
          position: relative;
          text-decoration: none;
          color: #10263d;
          transition: color 0.15s ease;
        }

        .nav-link:hover,
        .nav-dropdown-btn:hover {
          color: #0d7647;
        }

        .nav-link.active,
        .nav-dropdown-btn.active {
          color: #0d7647;
        }

        .nav-link.active:after,
        .nav-dropdown-btn.active:after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 10%;
          right: 10%;
          height: 2.5px;
          background: #0d7647;
          border-radius: 2px;
        }

        /* Nav Dropdown Parent */
        .nav-dropdown-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .nav-dropdown-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          font-weight: 700;
          color: #10263d;
          padding: 16px 0;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          position: relative;
          transition: color 0.15s ease;
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
          color: #64748b;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
          color: #0d7647;
        }

        /* ===================================================
           REDESIGNED MEGA MENU PANEL (Clean, Studio, 3-Col)
           Strictly Light Mode, No Glassmorphism, Fast Scan
           =================================================== */
        .mega-menu-overlay {
          position: fixed;
          top: 84px;
          left: 0;
          right: 0;
          width: 100%;
          background-color: transparent;
          pointer-events: none;
          display: flex;
          justify-content: center;
          z-index: 1200;
          padding: 0.4rem 1.5rem 1.5rem;
          box-sizing: border-box;
        }

        .site-header.scrolled .mega-menu-overlay {
          top: 76px;
        }

        @keyframes megaFadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mega-menu-container {
          pointer-events: auto;
          width: 100%;
          max-width: 1020px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.03);
          padding: 22px 24px 16px 24px;
          box-sizing: border-box;
          animation: megaFadeIn 0.16s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 3 Columns Grid */
        .mega-menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .mega-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mega-col-header {
          padding: 0 8px 6px 8px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 2px;
        }

        .mega-col-header span {
          font-size: 11.5px;
          font-weight: 800;
          color: #095935;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .mega-items-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        /* Service Item: Clean, No Default Border, Fast Scan */
        .mega-card {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 8px 10px;
          border-radius: 11px;
          text-decoration: none;
          background-color: transparent;
          transition: background-color 0.12s ease, transform 0.12s ease;
        }

        .mega-card:hover {
          background-color: #f4faf6;
          transform: translateY(-1px);
        }

        .mega-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .mega-card-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .mega-card-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.25;
          text-wrap: pretty;
        }

        .mega-card:hover .mega-card-title {
          color: #0d7647;
        }

        .mega-card-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.35;
          margin: 0;
          text-wrap: pretty;
        }

        /* Subtle Entry Price Badge (Max 2 across menu) */
        .mega-tag {
          font-size: 11px;
          font-weight: 700;
          background-color: #edf7f1;
          color: #0d7647;
          padding: 1.5px 6px;
          border-radius: 999px;
          line-height: 1.1;
          white-space: nowrap;
          border: 1px solid #d1fae5;
        }

        /* ===================================================
           SLIM HORIZONTAL FOOTER BAR (Replaces Promo Column)
           =================================================== */
        .mega-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 10px 2px 10px;
          margin-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .mega-footer-left span {
          font-size: 13.5px;
          font-weight: 600;
          color: #334155;
        }

        .mega-footer-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mega-footer-link {
          font-size: 13.5px;
          font-weight: 700;
          color: #0d7647;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.15s ease;
        }

        .mega-footer-link:hover {
          color: #095935;
          text-decoration: underline;
        }

        .mega-footer-cta {
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: background-color 0.15s ease, transform 0.12s ease;
        }

        .mega-footer-cta:hover {
          background-color: #095935;
          transform: translateY(-1px);
        }

        /* Desktop Actions: Hotline + Button */
        .header-actions-desktop {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1vw, 12px);
          flex-shrink: 0;
        }

        .site-header .phone {
          padding: 9px 15px;
          border: 1px solid #dce6ec;
          border-radius: 50px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          color: #10263d;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ffffff;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        .site-header .phone:hover {
          border-color: #0d7647;
          color: #0d7647;
        }

        .site-header .phone-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .site-header .header-cta-btn {
          display: inline-flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
          padding: clamp(9px, 1vw, 12px) clamp(12px, 1.2vw, 18px);
          color: #ffffff;
          border: 1px solid #0d7647;
          border-radius: 12px;
          background: linear-gradient(125deg, #078555, #05754f);
          font-weight: 700;
          font-size: clamp(13.5px, 0.95vw, 15px);
          box-shadow: 0 4px 10px rgba(6, 119, 74, 0.12);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          cursor: pointer;
          white-space: nowrap;
          font-family: inherit;
          flex-shrink: 0;
        }

        .site-header .header-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(6, 119, 74, 0.22);
        }

        .site-header .menu-toggle {
          display: none;
        }

        @media (max-width: 1366px) {
          .site-header .phone {
            display: none !important;
          }
          .header-nav-desktop {
            gap: 12px;
            margin-right: 10px;
          }
        }

        @media (max-width: 1120px) {
          .header-nav-desktop,
          .header-actions-desktop {
            display: none !important;
          }
          .site-header .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8fafc;
            border: 1px solid #d8e7df;
            border-radius: 9px;
            color: #087653;
            width: 44px;
            height: 44px;
            min-width: 44px;
            min-height: 44px;
            cursor: pointer;
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .site-header .header-inner {
            height: 64px;
            padding: 0 16px;
            gap: 10px;
          }
          .site-header .logo {
            width: 140px;
          }
        }

        /* Mobile Drawer Streamlined */
        .mobile-drawer-overlay {
          position: fixed;
          top: 84px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ffffff;
          z-index: 1100;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .site-header.scrolled .mobile-drawer-overlay {
          top: 72px;
        }

        .mobile-drawer-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 84px);
          justify-content: space-between;
          box-sizing: border-box;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mobile-nav-item {
          padding: 0.75rem 0.85rem;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          text-decoration: none;
          border-radius: 8px;
        }

        .mobile-nav-item.active {
          background-color: #edf7f1;
          color: #0d7647;
        }

        .mobile-accordion {
          border-radius: 10px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          margin: 0.35rem 0;
        }

        .mobile-accordion-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          cursor: pointer;
        }

        .mobile-accordion-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 0.75rem 1rem 1rem;
          border-top: 1px solid #e2e8f0;
          background-color: #ffffff;
        }

        .mobile-group-block {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-group-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: #0d7647;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.35rem;
          margin-bottom: 0.15rem;
        }

        .mobile-sub-link {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          text-decoration: none;
          padding: 0.4rem 0;
          transition: color 0.15s;
        }

        .mobile-sub-link:hover {
          color: #0d7647;
        }

        .mobile-services-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.5rem;
          border-top: 1px dashed #e2e8f0;
        }

        .mobile-view-all-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0d7647;
          text-decoration: none;
        }

        .mobile-consult-btn {
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.825rem;
          font-weight: 700;
          cursor: pointer;
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid #e2e8f0;
        }

        .mobile-drawer-hotline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          background-color: #fff7ed;
          border: 1px solid #fed7aa;
          border-radius: 12px;
          color: #9a3412;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
