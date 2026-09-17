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
  CheckCircle2,
  Phone,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const { currentPath, navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
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

  const closeMenus = () => {
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

          {/* 2. Dịch vụ (Interactive Mega Menu Dropdown) */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
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
              <div className="mega-menu-overlay">
                <div className="mega-menu-container">
                  {/* Left 3 Columns: Categorized Services */}
                  <div className="mega-menu-main">
                    {/* Col 1: Website & Bán Hàng */}
                    <div className="mega-col">
                      <div className="mega-col-header">
                        <Globe size={15} color="#0d7647" />
                        <span>Website &amp; Bán Hàng</span>
                      </div>
                      <div className="mega-items-list">
                        <a
                          href="/landing-490k"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/landing-490k');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-green">
                            <Layout size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Website 1 Trang</span>
                              <span className="mega-tag tag-hot">490k</span>
                            </div>
                            <p className="mega-card-desc">Gọn gàng, rõ giá, có nút gọi Zalo ngay.</p>
                          </div>
                        </a>

                        <a
                          href="/thiet-ke-website"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/thiet-ke-website');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-blue">
                            <Globe size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Web Doanh Nghiệp</span>
                              <span className="mega-tag tag-standard">3–5 trang</span>
                            </div>
                            <p className="mega-card-desc">Đầy đủ giới thiệu, dịch vụ và bảng giá.</p>
                          </div>
                        </a>

                        <a
                          href="/thiet-ke-website"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/thiet-ke-website');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-purple">
                            <Sparkles size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Chỉnh Sửa &amp; Nâng Cấp Web</span>
                            </div>
                            <p className="mega-card-desc">Sửa lỗi, đổi banner, tối ưu tốc độ nhanh.</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Col 2: Google Maps & Local SEO */}
                    <div className="mega-col">
                      <div className="mega-col-header">
                        <MapPin size={15} color="#0d7647" />
                        <span>Google Maps &amp; Tìm Kiếm</span>
                      </div>
                      <div className="mega-items-list">
                        <a
                          href="/google-maps-local-seo"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/google-maps-local-seo');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-orange">
                            <MapPin size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Đưa Tiệm Lên Maps</span>
                              <span className="mega-tag tag-save">Từ 299k</span>
                            </div>
                            <p className="mega-card-desc">Khách tìm quanh khu vực thấy tiệm ngay.</p>
                          </div>
                        </a>

                        <a
                          href="/google-maps-local-seo"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/google-maps-local-seo');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-green">
                            <TrendingUp size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Tối Ưu &amp; SEO Local Maps</span>
                            </div>
                            <p className="mega-card-desc">Đẩy top 3 tìm kiếm khách hàng địa phương.</p>
                          </div>
                        </a>

                        <a
                          href="/google-maps-local-seo"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/google-maps-local-seo');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-blue">
                            <Sparkles size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Mã QR Đánh Giá 5 Sao</span>
                            </div>
                            <p className="mega-card-desc">In để bàn giúp khách quét đánh giá dễ dàng.</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Col 3: Quảng Cáo & Chăm Sóc Số */}
                    <div className="mega-col">
                      <div className="mega-col-header">
                        <Sparkles size={15} color="#0d7647" />
                        <span>Quảng Cáo &amp; Hệ Thống</span>
                      </div>
                      <div className="mega-items-list">
                        <a
                          href="/google-ads"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/google-ads');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-orange">
                            <Sparkles size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Quảng Cáo Google Ads</span>
                              <span className="mega-tag tag-hot">Từ 390k</span>
                            </div>
                            <p className="mega-card-desc">Nhắm đúng người đang cần mua, gọi ngay.</p>
                          </div>
                        </a>

                        <a
                          href="/content-marketing"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/content-marketing');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-pink">
                            <FileText size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>Chăm Sóc Kênh &amp; Content</span>
                              <span className="mega-tag tag-save">990k/th</span>
                            </div>
                            <p className="mega-card-desc">15 bài viết chuẩn SEO + thiết kế ảnh đẹp mắt.</p>
                          </div>
                        </a>

                        <a
                          href="/automation"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            navigate('/automation');
                          }}
                          className="mega-card"
                        >
                          <div className="mega-card-icon icon-purple">
                            <Briefcase size={16} />
                          </div>
                          <div className="mega-card-content">
                            <div className="mega-card-title">
                              <span>CRM &amp; Tự Động Hóa</span>
                            </div>
                            <p className="mega-card-desc">Báo lead về Zalo/Telegram chỉ sau 3 giây.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Promo Rail */}
                  <div className="mega-promo-rail">
                    <div className="mega-promo-box">
                      <span className="promo-badge">GÓI NỔI BẬT KHUYÊN DÙNG</span>
                      <h4 className="promo-title">Gói Khởi Tạo 490.000đ</h4>
                      <p className="promo-desc">
                        Website 1 trang chuẩn + Google Maps + Nút gọi Zalo trực tiếp.
                      </p>
                      <div className="promo-points">
                        <div className="promo-point-item">
                          <CheckCircle2 size={13} color="#16a34a" />
                          <span>Báo giá rõ, không phụ phí</span>
                        </div>
                        <div className="promo-point-item">
                          <CheckCircle2 size={13} color="#16a34a" />
                          <span>Bàn giao 100% tài khoản</span>
                        </div>
                      </div>
                      <a
                        href="/landing-490k"
                        onClick={(e) => {
                          e.preventDefault();
                          closeMenus();
                          navigate('/landing-490k');
                        }}
                        className="promo-btn"
                      >
                        Xem chi tiết gói 490k →
                      </a>
                    </div>

                    {/* Compact Hotline Card */}
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="mega-hotline-card"
                      title="Gọi hotline tư vấn trực tiếp"
                    >
                      <div className="hotline-icon-box">
                        <Phone size={15} color="#ffffff" />
                      </div>
                      <div className="hotline-meta">
                        <span className="hotline-label">Tư vấn trực tiếp 24/7</span>
                        <span className="hotline-num">0834.422.439</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Bảng giá */}
          <a
            className={`nav-link ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
            href="/bang-gia"
            onClick={(e) => {
              e.preventDefault();
              closeMenus();
              navigate('/bang-gia');
            }}
          >
            Bảng giá
          </a>

          {/* 4. Câu chuyện */}
          <a
            className={`nav-link ${(isHome && activeSection === 'stories') || currentPath.startsWith('/du-an') ? 'active' : ''}`}
            href="/du-an"
            onClick={(e) => handleNavClick(e, '#stories', '/du-an')}
          >
            Câu chuyện
          </a>

          {/* 5. Quy trình */}
          <a
            className={`nav-link ${(isHome && activeSection === 'process') || currentPath.startsWith('/quy-trinh') ? 'active' : ''}`}
            href="/quy-trinh"
            onClick={(e) => handleNavClick(e, '#process', '/quy-trinh')}
          >
            Quy trình
          </a>

          {/* 6. Về Localmate */}
          <a
            className={`nav-link ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
            href="/gioi-thieu"
            onClick={(e) => handleNavClick(e, '#about', '/gioi-thieu')}
          >
            Về Localmate
          </a>

          {/* 7. Liên hệ */}
          <a
            className={`nav-link ${(isHome && activeSection === 'contact') || currentPath.startsWith('/lien-he') ? 'active' : ''}`}
            href="/lien-he"
            onClick={(e) => handleNavClick(e, '#contact', '/lien-he')}
          >
            Liên hệ
          </a>
        </nav>

        {/* Right Desktop Actions: Phone + CTA Button */}
        <div className="header-actions-desktop">
          <a className="phone" href="tel:0834422439" aria-label="Gọi 0834 422 439">
            <span>
              <Phone size={15} color="#ed8506" />
            </span>{' '}
            0834.422.439
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

      {/* Mobile Drawer (Accordion Style) */}
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

              {/* Mobile Dịch Vụ Accordion */}
              <div className="mobile-accordion">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="mobile-accordion-toggle"
                >
                  <span>Dịch vụ chính</span>
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
                    <a
                      href="/landing-490k"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenus();
                        navigate('/landing-490k');
                      }}
                      className="mobile-sub-link"
                    >
                      <Layout size={15} color="#0d7647" />
                      <span>Website 1 Trang (490k)</span>
                    </a>
                    <a
                      href="/google-maps-local-seo"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenus();
                        navigate('/google-maps-local-seo');
                      }}
                      className="mobile-sub-link"
                    >
                      <MapPin size={15} color="#d97706" />
                      <span>Đưa Tiệm Lên Google Maps (Từ 299k)</span>
                    </a>
                    <a
                      href="/google-ads"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenus();
                        navigate('/google-ads');
                      }}
                      className="mobile-sub-link"
                    >
                      <Sparkles size={15} color="#2563eb" />
                      <span>Quảng Cáo Google Ads (Từ 390k)</span>
                    </a>
                    <a
                      href="/content-marketing"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenus();
                        navigate('/content-marketing');
                      }}
                      className="mobile-sub-link"
                    >
                      <FileText size={15} color="#db2777" />
                      <span>Chăm Sóc Kênh &amp; Content (990k/th)</span>
                    </a>
                    <a
                      href="/thiet-ke-website"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenus();
                        navigate('/thiet-ke-website');
                      }}
                      className="mobile-sub-link"
                    >
                      <Globe size={15} color="#0d7647" />
                      <span>Website Doanh Nghiệp 3–5 Trang</span>
                    </a>
                    <a
                      href="/automation"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenus();
                        navigate('/automation');
                      }}
                      className="mobile-sub-link"
                    >
                      <Briefcase size={15} color="#7c3aed" />
                      <span>CRM &amp; Tự Động Hóa Thông Báo</span>
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/bang-gia"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenus();
                  navigate('/bang-gia');
                }}
                className={`mobile-nav-item ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
              >
                Bảng giá niêm yết
              </a>

              <a
                href="/du-an"
                onClick={(e) => handleNavClick(e, '#stories', '/du-an')}
                className={`mobile-nav-item ${(isHome && activeSection === 'stories') || currentPath.startsWith('/du-an') ? 'active' : ''}`}
              >
                Câu chuyện thành công
              </a>

              <a
                href="/quy-trinh"
                onClick={(e) => handleNavClick(e, '#process', '/quy-trinh')}
                className={`mobile-nav-item ${(isHome && activeSection === 'process') || currentPath.startsWith('/quy-trinh') ? 'active' : ''}`}
              >
                Quy trình làm việc
              </a>

              <a
                href="/gioi-thieu"
                onClick={(e) => handleNavClick(e, '#about', '/gioi-thieu')}
                className={`mobile-nav-item ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
              >
                Về Localmate
              </a>

              <a
                href="/lien-he"
                onClick={(e) => handleNavClick(e, '#contact', '/lien-he')}
                className={`mobile-nav-item ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
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
          box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          width: 100%;
          scrollbar-gutter: stable;
        }

        .site-header.scrolled {
          box-shadow: 0 4px 20px rgba(7, 137, 108, 0.08);
          border-bottom-color: #d1fae5;
        }

        .site-header .header-inner {
          max-width: 1672px;
          height: 90px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 0 3.5%;
          box-sizing: border-box;
          justify-content: space-between;
        }

        .site-header .brand {
          display: block;
          flex-shrink: 0;
          text-decoration: none;
        }

        .site-header .logo {
          width: 207px;
          aspect-ratio: 213/83;
        }

        /* Desktop Nav */
        .header-nav-desktop {
          display: flex;
          gap: 26px;
          align-items: center;
          margin-left: auto;
          margin-right: 20px;
          font-size: 16px;
          font-weight: 700;
          color: #10263d;
          white-space: nowrap;
        }

        .nav-link {
          padding: 28px 0;
          position: relative;
          text-decoration: none;
          color: #10263d;
          transition: color 0.2s;
        }

        .nav-link:hover,
        .nav-dropdown-btn:hover {
          color: #087d54;
        }

        .nav-link.active,
        .nav-dropdown-btn.active {
          color: #087d54;
        }

        .nav-link.active:after,
        .nav-dropdown-btn.active:after {
          content: '';
          position: absolute;
          bottom: 14px;
          left: 15%;
          right: 15%;
          height: 3px;
          background: #087d54;
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
          font-size: 16px;
          font-weight: 700;
          color: #10263d;
          padding: 28px 0;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          position: relative;
          transition: color 0.2s;
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
          color: #64748b;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
          color: #087d54;
        }

        /* Mega Menu Panel (Strictly Solid Light, NO Glassmorphism) */
        .mega-menu-overlay {
          position: fixed;
          top: 90px;
          left: 0;
          right: 0;
          width: 100vw;
          background-color: transparent;
          pointer-events: none;
          display: flex;
          justify-content: center;
          z-index: 1200;
          padding: 0.5rem 1.5rem 1.5rem;
          box-sizing: border-box;
        }

        .site-header.scrolled .mega-menu-overlay {
          top: 80px;
        }

        @keyframes megaFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mega-menu-container {
          pointer-events: auto;
          width: 100%;
          max-width: 1260px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
          padding: 1.5rem 1.75rem;
          display: grid;
          grid-template-columns: 1fr 290px;
          gap: 1.75rem;
          align-items: stretch;
          box-sizing: border-box;
          animation: megaFadeIn 0.18s ease-out;
        }

        .mega-menu-main {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .mega-col {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .mega-col-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: #063d24;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-bottom: 0.45rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .mega-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mega-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.55rem 0.7rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.15s ease;
        }

        .mega-card:hover {
          background-color: #edf7f1;
          border-color: #c6ebd4;
          transform: translateY(-1px);
        }

        .mega-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .icon-green { background-color: #edf7f1; color: #0d7647; }
        .icon-orange { background-color: #fff4eb; color: #d97706; }
        .icon-blue { background-color: #eff6ff; color: #2563eb; }
        .icon-purple { background-color: #f5f3ff; color: #7c3aed; }
        .icon-pink { background-color: #fdf2f8; color: #db2777; }

        .mega-card-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .mega-card-title {
          font-size: 0.875rem;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
          line-height: 1.3;
        }

        .mega-card-desc {
          font-size: 0.725rem;
          color: #64748b;
          line-height: 1.35;
          margin: 0;
        }

        .mega-tag {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          line-height: 1;
          white-space: nowrap;
        }

        .tag-hot { background-color: #fee2e2; color: #dc2626; }
        .tag-save { background-color: #edf7f1; color: #063d24; }
        .tag-standard { background-color: #f3f4f6; color: #4b5563; }

        /* Right Promo Rail */
        .mega-promo-rail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.1rem;
          box-sizing: border-box;
        }

        .mega-promo-box {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .promo-badge {
          align-self: flex-start;
          font-size: 0.65rem;
          font-weight: 800;
          background-color: #edf7f1;
          color: #0d7647;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          letter-spacing: 0.04em;
        }

        .promo-title {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.25;
        }

        .promo-desc {
          font-size: 0.775rem;
          color: #475569;
          line-height: 1.4;
          margin: 0;
        }

        .promo-points {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #334155;
          margin-top: 0.2rem;
        }

        .promo-point-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .promo-btn {
          margin-top: 0.4rem;
          background: linear-gradient(125deg, #078555, #05754f);
          color: #ffffff;
          font-size: 0.825rem;
          font-weight: 800;
          text-align: center;
          padding: 0.6rem 0.85rem;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.15s ease;
        }

        .promo-btn:hover {
          transform: translateY(-1px);
        }

        .mega-hotline-card {
          background-color: #ffffff;
          border: 1px solid #fed7aa;
          border-radius: 12px;
          padding: 0.65rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .mega-hotline-card:hover {
          border-color: #ea580c;
          background-color: #fff7ed;
        }

        .hotline-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #ea580c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hotline-meta {
          display: flex;
          flex-direction: column;
        }

        .hotline-label {
          font-size: 0.675rem;
          color: #64748b;
          font-weight: 600;
          line-height: 1.2;
        }

        .hotline-num {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        /* Desktop Actions: Hotline + Button */
        .header-actions-desktop {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .site-header .phone {
          padding: 13px 18px;
          border: 1px solid #dce6ec;
          border-radius: 50px;
          white-space: nowrap;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          color: #10263d;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          transition: all 0.2s;
        }

        .site-header .phone:hover {
          border-color: #087d54;
          color: #087d54;
        }

        .site-header .header-cta-btn {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          padding: 15px 22px;
          color: #ffffff;
          border: 1px solid #087d54;
          border-radius: 14px;
          background: linear-gradient(125deg, #078555, #05754f);
          font-weight: 700;
          font-size: 17px;
          box-shadow: 0 4px 10px rgba(6, 119, 74, 0.12);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          white-space: nowrap;
          font-family: inherit;
        }

        .site-header .header-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(6, 119, 74, 0.25);
        }

        .site-header .menu-toggle {
          display: none;
        }

        @media (max-width: 1450px) {
          .site-header .header-inner {
            gap: 16px;
            padding: 0 3%;
          }
          .header-nav-desktop {
            gap: 18px;
            font-size: 15px;
          }
          .site-header .logo {
            width: 185px;
          }
          .site-header .phone {
            font-size: 14px;
            padding: 11px 14px;
          }
          .site-header .header-cta-btn {
            font-size: 15px;
            padding: 12px 18px;
          }
        }

        @media (max-width: 1180px) {
          .site-header .phone {
            display: none;
          }
        }

        @media (max-width: 1024px) {
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
            width: 42px;
            height: 42px;
            cursor: pointer;
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .site-header .header-inner {
            height: 70px;
            padding: 0 16px;
            gap: 10px;
          }
          .site-header .logo {
            width: 146px;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          top: 90px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ffffff;
          z-index: 1100;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .site-header.scrolled .mobile-drawer-overlay {
          top: 76px;
        }

        .mobile-drawer-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 90px);
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
          gap: 0.4rem;
          padding: 0.5rem 1rem 0.85rem;
          border-top: 1px solid #e2e8f0;
          background-color: #ffffff;
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e293b;
          text-decoration: none;
          padding: 0.5rem 0;
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
