import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  MapPin,
  Globe,
  FileText,
  Phone,
  Layout,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useRouter, Link } from './Router';
import { CONTACT_INFO } from '../../data/landingContent';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'knowledge' | null>(null);

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
        setActiveDropdown(null);
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
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterDropdown = (type: 'services' | 'knowledge') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(type);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleActionClick = () => {
    closeMenus();
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  const closeMenus = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

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

            {/* 2. Desktop Navigation: [Dịch vụ] [Bảng giá] [Dự án] [Kiến thức] [Giới thiệu] */}
            <nav className="header-desktop-nav" aria-label="Điều hướng chính">
              {/* Dịch vụ Dropdown */}
              <div
                className="nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnterDropdown('services')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className={`nav-link-btn ${currentPath.startsWith('/dich-vu') || currentPath.startsWith('/landing-490k') ? 'active' : ''}`}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Dịch vụ</span>
                  <ChevronDown
                    size={14}
                    className={`dropdown-caret ${activeDropdown === 'services' ? 'open' : ''}`}
                  />
                </button>

                {/* Dịch vụ Mega Menu Panel */}
                {activeDropdown === 'services' && (
                  <div
                    className="mega-menu-wrapper"
                    onMouseEnter={() => handleMouseEnterDropdown('services')}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <div className="mega-menu-card">
                      {/* 3 Columns Categorized Services */}
                      <div className="mega-columns-grid">
                        {/* Col 1: Website & Bán hàng */}
                        <div className="mega-col">
                          <div className="mega-col-heading">
                            <Globe size={15} color="var(--color-primary)" />
                            <span>Website &amp; Bán Hàng</span>
                          </div>
                          <div className="mega-link-list">
                            <Link to="/landing-490k" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-emerald">
                                <Layout size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Website 1 Trang</span>
                                  <span className="mega-badge badge-red">490k</span>
                                </div>
                                <p className="mega-item-desc">Gọn gàng, rõ giá, có nút gọi / Zalo ngay.</p>
                              </div>
                            </Link>

                            <Link to="/dich-vu/website-landing-page" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-blue">
                                <Globe size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Web Doanh Nghiệp</span>
                                  <span className="mega-badge badge-neutral">3–5 trang</span>
                                </div>
                                <p className="mega-item-desc">Đầy đủ giới thiệu, dịch vụ và dự án.</p>
                              </div>
                            </Link>

                            <Link to="/dich-vu/website-landing-page" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-purple">
                                <Sparkles size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Chỉnh Sửa &amp; Nâng Cấp Web</span>
                                </div>
                                <p className="mega-item-desc">Sửa lỗi, đổi banner, cập nhật bảng giá nhanh.</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Col 2: Google Maps & Tìm kiếm */}
                        <div className="mega-col">
                          <div className="mega-col-heading">
                            <MapPin size={15} color="var(--color-primary)" />
                            <span>Google Maps &amp; Tìm Kiếm</span>
                          </div>
                          <div className="mega-link-list">
                            <Link to="/dich-vu/google-maps" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-amber">
                                <MapPin size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Đưa Tiệm Lên Maps</span>
                                  <span className="mega-badge badge-green">Từ 299k</span>
                                </div>
                                <p className="mega-item-desc">Khách tìm quanh khu vực thấy tiệm ngay.</p>
                              </div>
                            </Link>

                            <Link to="/dich-vu/google-maps" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-emerald">
                                <TrendingUp size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Tối Ưu &amp; SEO Local Maps</span>
                                </div>
                                <p className="mega-item-desc">Tăng thứ hạng hiển thị top tìm kiếm gần.</p>
                              </div>
                            </Link>

                            <Link to="/dich-vu/google-maps" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-blue">
                                <Sparkles size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Mã QR Đánh Giá 5 Sao</span>
                                </div>
                                <p className="mega-item-desc">In để bàn giúp khách quét đánh giá dễ dàng.</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Col 3: Quảng cáo & Bài viết */}
                        <div className="mega-col">
                          <div className="mega-col-heading">
                            <Sparkles size={15} color="var(--color-primary)" />
                            <span>Quảng Cáo &amp; Bài Viết</span>
                          </div>
                          <div className="mega-link-list">
                            <Link to="/dich-vu/google-ads" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-amber">
                                <Sparkles size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Quảng Cáo Google Ads</span>
                                  <span className="mega-badge badge-red">Từ 390k</span>
                                </div>
                                <p className="mega-item-desc">Nhắm đúng người đang cần mua, gọi ngay.</p>
                              </div>
                            </Link>

                            <Link to="/dich-vu/content-marketing" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-pink">
                                <FileText size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Chăm Sóc Fanpage FB</span>
                                  <span className="mega-badge badge-green">990k/th</span>
                                </div>
                                <p className="mega-item-desc">15 bài viết + thiết kế ảnh đẹp mắt.</p>
                              </div>
                            </Link>

                            <Link to="/dich-vu/content-marketing" onClick={closeMenus} className="mega-item">
                              <div className="mega-item-icon icon-purple">
                                <Briefcase size={16} />
                              </div>
                              <div className="mega-item-body">
                                <div className="mega-item-title">
                                  <span>Thiết Kế Banner &amp; Ảnh Lẻ</span>
                                </div>
                                <p className="mega-item-desc">Ảnh menu, banner khuyến mãi từ 99k/ảnh.</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Right Promo Rail */}
                      <div className="mega-promo-column">
                        <div className="mega-highlight-card">
                          <span className="highlight-tag">GÓI KHỞI TẠO NỔI BẬT</span>
                          <h4 className="highlight-title">Website 1 Trang 490.000đ</h4>
                          <p className="highlight-desc">
                            Website chuẩn di động + Google Maps + Nút gọi Zalo trực tiếp.
                          </p>
                          <div className="highlight-checklist">
                            <div className="checklist-item">
                              <CheckCircle2 size={13} color="var(--color-primary-light)" />
                              <span>Báo giá trọn gói, không phụ phí</span>
                            </div>
                            <div className="checklist-item">
                              <CheckCircle2 size={13} color="var(--color-primary-light)" />
                              <span>Bàn giao 100% tài khoản chính chủ</span>
                            </div>
                          </div>
                          <Link to="/landing-490k" onClick={closeMenus} className="highlight-action-btn">
                            Xem chi tiết gói 490k →
                          </Link>
                        </div>

                        {/* Direct Hotline strip inside mega menu */}
                        <a
                          href={`tel:${CONTACT_INFO.phoneRaw}`}
                          className="mega-hotline-strip"
                          title="Gọi hotline tư vấn"
                        >
                          <div className="hotline-strip-icon">
                            <Phone size={14} color="#ffffff" />
                          </div>
                          <div className="hotline-strip-text">
                            <span className="hotline-strip-label">Tư vấn trực tiếp 24/7</span>
                            <span className="hotline-strip-phone">0834 422 439</span>
                          </div>
                        </a>
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

              {/* Dự án */}
              <Link
                to="/du-an"
                onClick={closeMenus}
                className={`nav-link ${currentPath.startsWith('/du-an') ? 'active' : ''}`}
              >
                <span>Dự án</span>
              </Link>

              {/* Kiến thức Dropdown */}
              <div
                className="nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnterDropdown('knowledge')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'knowledge' ? null : 'knowledge')}
                  className={`nav-link-btn ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
                  aria-expanded={activeDropdown === 'knowledge'}
                >
                  <span>Kiến thức</span>
                  <ChevronDown
                    size={14}
                    className={`dropdown-caret ${activeDropdown === 'knowledge' ? 'open' : ''}`}
                  />
                </button>

                {activeDropdown === 'knowledge' && (
                  <div
                    className="knowledge-dropdown-panel"
                    onMouseEnter={() => handleMouseEnterDropdown('knowledge')}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <Link to="/kien-thuc" onClick={closeMenus} className="knowledge-item">
                      <div className="knowledge-item-icon icon-emerald">
                        <Globe size={15} />
                      </div>
                      <div>
                        <div className="knowledge-title">Kinh Nghiệm Làm Website</div>
                        <div className="knowledge-desc">Cấu trúc trang web chuyển đổi cao</div>
                      </div>
                    </Link>

                    <Link to="/kien-thuc" onClick={closeMenus} className="knowledge-item">
                      <div className="knowledge-item-icon icon-amber">
                        <MapPin size={15} />
                      </div>
                      <div>
                        <div className="knowledge-title">Tối Ưu Google Maps &amp; SEO</div>
                        <div className="knowledge-desc">Cách tăng đánh giá 5 sao &amp; khách gần</div>
                      </div>
                    </Link>

                    <Link to="/kien-thuc" onClick={closeMenus} className="knowledge-item">
                      <div className="knowledge-item-icon icon-blue">
                        <Sparkles size={15} />
                      </div>
                      <div>
                        <div className="knowledge-title">Quảng Cáo Google Ads Thực Chiến</div>
                        <div className="knowledge-desc">Lọc từ khóa tránh lãng phí ngân sách</div>
                      </div>
                    </Link>

                    <Link to="/kien-thuc" onClick={closeMenus} className="knowledge-item">
                      <div className="knowledge-item-icon icon-pink">
                        <FileText size={15} />
                      </div>
                      <div>
                        <div className="knowledge-title">Nội Dung &amp; Bài Viết Fanpage</div>
                        <div className="knowledge-desc">Mẫu bài đăng thu hút khách hàng</div>
                      </div>
                    </Link>

                    <div className="knowledge-footer-link">
                      <Link to="/kien-thuc" onClick={closeMenus} className="knowledge-all-btn">
                        <span>Xem tất cả bài hướng dẫn</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Giới thiệu */}
              <Link
                to="/gioi-thieu"
                onClick={closeMenus}
                className={`nav-link ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
              >
                <span>Giới thiệu</span>
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
                <Sparkles size={16} />
                <span>Đăng ký tư vấn</span>
              </button>
            </div>

            {/* 4. Mobile Actions: [Hotline gọi nhanh] [CTA Nhận demo] [Menu Hamburger] */}
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

            {/* Drawer Body — Flat Clear List, No Nested Confusing Dropdowns */}
            <div className="drawer-scroll-body">
              {/* Primary Navigation Links */}
              <div className="drawer-section">
                <div className="drawer-section-label">ĐIỀU HƯỚNG CHÍNH</div>
                <div className="drawer-nav-list">
                  <Link
                    to="/"
                    onClick={closeMenus}
                    className={`drawer-link ${currentPath === '/' ? 'active' : ''}`}
                  >
                    <span>Trang chủ</span>
                  </Link>
                  <Link
                    to="/bang-gia"
                    onClick={closeMenus}
                    className={`drawer-link ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
                  >
                    <span>Bảng giá niêm yết</span>
                    <span className="drawer-badge-pill">Minh bạch</span>
                  </Link>
                  <Link
                    to="/du-an"
                    onClick={closeMenus}
                    className={`drawer-link ${currentPath.startsWith('/du-an') ? 'active' : ''}`}
                  >
                    <span>Dự án thực tế</span>
                  </Link>
                  <Link
                    to="/kien-thuc"
                    onClick={closeMenus}
                    className={`drawer-link ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
                  >
                    <span>Kiến thức &amp; Hướng dẫn</span>
                  </Link>
                  <Link
                    to="/gioi-thieu"
                    onClick={closeMenus}
                    className={`drawer-link ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
                  >
                    <span>Giới thiệu LocalMate</span>
                  </Link>
                  <Link
                    to="/lien-he"
                    onClick={closeMenus}
                    className={`drawer-link ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
                  >
                    <span>Liên hệ tư vấn</span>
                  </Link>
                </div>
              </div>

              {/* Highlighted Services — Directly Accessible, Tap Target >= 44px */}
              <div className="drawer-section">
                <div className="drawer-section-label">DỊCH VỤ TRIỂN KHAI NHANH</div>
                <div className="drawer-services-list">
                  <Link
                    to="/landing-490k"
                    onClick={closeMenus}
                    className="drawer-service-link"
                  >
                    <div className="drawer-service-icon icon-emerald">
                      <Layout size={15} />
                    </div>
                    <span className="drawer-service-name">Website 1 Trang Bán Hàng</span>
                    <span className="drawer-price-badge badge-red">490k</span>
                  </Link>

                  <Link
                    to="/dich-vu/google-maps"
                    onClick={closeMenus}
                    className="drawer-service-link"
                  >
                    <div className="drawer-service-icon icon-amber">
                      <MapPin size={15} />
                    </div>
                    <span className="drawer-service-name">Đưa Tiệm Lên Google Maps</span>
                    <span className="drawer-price-badge badge-green">Từ 299k</span>
                  </Link>

                  <Link
                    to="/dich-vu/google-ads"
                    onClick={closeMenus}
                    className="drawer-service-link"
                  >
                    <div className="drawer-service-icon icon-blue">
                      <Sparkles size={15} />
                    </div>
                    <span className="drawer-service-name">Quảng Cáo Google Ads</span>
                    <span className="drawer-price-badge badge-red">Từ 390k</span>
                  </Link>

                  <Link
                    to="/dich-vu/content-marketing"
                    onClick={closeMenus}
                    className="drawer-service-link"
                  >
                    <div className="drawer-service-icon icon-pink">
                      <FileText size={15} />
                    </div>
                    <span className="drawer-service-name">Chăm Sóc Fanpage FB</span>
                    <span className="drawer-price-badge badge-green">990k/th</span>
                  </Link>

                  <Link
                    to="/dich-vu/website-landing-page"
                    onClick={closeMenus}
                    className="drawer-service-link"
                  >
                    <div className="drawer-service-icon icon-purple">
                      <Globe size={15} />
                    </div>
                    <span className="drawer-service-name">Web Doanh Nghiệp 3–5 Trang</span>
                  </Link>

                  <Link
                    to="/dich-vu"
                    onClick={closeMenus}
                    className="drawer-all-services-link"
                  >
                    <span>Xem tất cả dịch vụ &amp; bảng giá</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions: Big CTA & Direct Hotline */}
            <div className="drawer-footer">
              <button
                type="button"
                onClick={handleActionClick}
                className="drawer-primary-cta"
              >
                <Sparkles size={17} />
                <span>Đăng ký tư vấn / Nhận Demo Web</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="drawer-hotline-card"
                title="Gọi hotline tư vấn 0834 422 439"
              >
                <div className="drawer-hotline-icon">
                  <Phone size={17} />
                </div>
                <div className="drawer-hotline-content">
                  <span className="drawer-hotline-sub">Gọi tư vấn trực tiếp 24/7</span>
                  <span className="drawer-hotline-num">0834 422 439</span>
                </div>
              </a>

              <p className="drawer-footer-note">
                Tư vấn &amp; trải nghiệm demo miễn phí (8:00 - 21:00)
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Base Header */
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
        }

        .site-header.header-scrolled {
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* Logo */
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

        /* Desktop Nav */
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
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .nav-link:hover,
        .nav-link-btn:hover {
          color: #0d7647;
          background-color: #f0fdf4;
        }

        .nav-link.active,
        .nav-link-btn.active {
          color: #0d7647;
          font-weight: 600;
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

        /* Desktop Mega Menu for Services */
        .mega-menu-wrapper {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          width: min(1200px, 94vw);
          z-index: 1050;
          animation: headerFadeIn 0.16s ease-out;
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
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
          padding: 1.5rem 1.65rem;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 1.75rem;
          box-sizing: border-box;
        }

        .mega-columns-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .mega-col {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mega-col-heading {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.775rem;
          font-weight: 700;
          color: #0d7647;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 0.15rem;
        }

        .mega-link-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          padding: 0.5rem 0.65rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.15s ease;
        }

        .mega-item:hover {
          background-color: #f0fdf4;
          border-color: #c6ebd4;
          transform: translateY(-1px);
        }

        .mega-item-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .icon-emerald { background-color: #edf7f1; color: #0d7647; }
        .icon-amber { background-color: #fef3c7; color: #d97706; }
        .icon-blue { background-color: #eff6ff; color: #2563eb; }
        .icon-purple { background-color: #f5f3ff; color: #7c3aed; }
        .icon-pink { background-color: #fdf2f8; color: #db2777; }

        .mega-item-body {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .mega-item-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
          line-height: 1.3;
        }

        .mega-item-desc {
          font-size: 0.725rem;
          color: #64748b;
          line-height: 1.35;
          margin: 0;
        }

        .mega-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.12rem 0.45rem;
          border-radius: 999px;
          line-height: 1;
          white-space: nowrap;
        }

        .badge-red { background-color: #fee2e2; color: #dc2626; }
        .badge-green { background-color: #dcfce7; color: #15803d; }
        .badge-neutral { background-color: #f1f5f9; color: #475569; }

        /* Right Promo Column */
        .mega-promo-column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
          border-left: 1px solid #e2e8f0;
          padding-left: 1.5rem;
        }

        .mega-highlight-card {
          background: linear-gradient(145deg, #072e3b, #0d7647);
          border-radius: 14px;
          padding: 1.1rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          justify-content: space-between;
        }

        .highlight-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: #86efac;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .highlight-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .highlight-desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
          margin: 0;
        }

        .highlight-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.725rem;
          color: rgba(255, 255, 255, 0.95);
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .highlight-action-btn {
          margin-top: 0.25rem;
          background-color: #ffffff;
          color: #0f172a;
          font-size: 0.775rem;
          font-weight: 700;
          text-align: center;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.15s ease;
        }

        .highlight-action-btn:hover {
          background-color: #dcfce7;
          color: #0d7647;
        }

        .mega-hotline-strip {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.65rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .mega-hotline-strip:hover {
          border-color: #0d7647;
          background-color: #f0fdf4;
        }

        .hotline-strip-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #0d7647;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hotline-strip-text {
          display: flex;
          flex-direction: column;
        }

        .hotline-strip-label {
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.2;
        }

        .hotline-strip-phone {
          font-size: 0.925rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        /* Responsive Laptop 14" Zoom 125% (1025px - 1240px) for Mega Menu */
        @media (min-width: 1025px) and (max-width: 1240px) {
          .mega-menu-card {
            padding: 1.15rem 1.25rem;
            gap: 1.15rem;
            grid-template-columns: 1fr 240px;
          }
          .mega-columns-grid {
            gap: 0.9rem;
          }
          .mega-item {
            padding: 0.4rem 0.5rem;
            gap: 0.5rem;
          }
          .mega-item-icon {
            width: 28px;
            height: 28px;
          }
          .mega-item-title {
            font-size: 0.8125rem;
          }
          .mega-item-desc {
            font-size: 0.675rem;
          }
          .mega-promo-column {
            padding-left: 1rem;
          }
        }

        /* Knowledge Dropdown Panel */
        .knowledge-dropdown-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 310px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          padding: 0.65rem;
          z-index: 1050;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          animation: headerFadeIn 0.16s ease-out;
        }

        .knowledge-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.55rem 0.65rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.15s ease;
        }

        .knowledge-item:hover {
          background-color: #f0fdf4;
        }

        .knowledge-item-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .knowledge-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.25;
        }

        .knowledge-desc {
          font-size: 0.725rem;
          color: #64748b;
          line-height: 1.35;
          margin-top: 2px;
        }

        .knowledge-footer-link {
          border-top: 1px solid #e2e8f0;
          padding-top: 0.4rem;
          margin-top: 0.25rem;
        }

        .knowledge-all-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.775rem;
          font-weight: 600;
          color: #0d7647;
          text-decoration: none;
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          transition: background-color 0.15s ease;
        }

        .knowledge-all-btn:hover {
          background-color: #edf7f1;
        }

        /* Desktop Actions: Hotline & CTA */
        .header-desktop-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-hotline-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
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
          transform: scale(1.06);
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
          padding: 0 22px;
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

        /* Mobile Actions inside Header */
        .header-mobile-actions {
          display: none;
          align-items: center;
          gap: 8px;
        }

        .header-mobile-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
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
          .mega-menu-wrapper,
          .knowledge-dropdown-panel {
            display: none !important;
          }
          .header-mobile-actions {
            display: flex !important;
          }
        }

        /* Mobile Drawer Styles */
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
          background-color: rgba(15, 23, 42, 0.45);
          animation: drawerBackdropFade 0.2s ease-out;
        }

        @keyframes drawerBackdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-drawer-panel {
          position: relative;
          width: min(380px, 90vw);
          height: 100%;
          background-color: #ffffff;
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);
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
          gap: 18px;
          box-sizing: border-box;
        }

        .drawer-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .drawer-section-label {
          font-size: 0.6875rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-left: 6px;
          margin-bottom: 2px;
        }

        .drawer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .drawer-link {
          min-height: 44px;
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

        .drawer-link:hover {
          background-color: #f8fafc;
          color: #0d7647;
        }

        .drawer-link.active {
          background-color: #edf7f1;
          color: #0d7647;
        }

        .drawer-badge-pill {
          font-size: 0.65rem;
          font-weight: 600;
          background-color: #dcfce7;
          color: #15803d;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
        }

        .drawer-services-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .drawer-service-link {
          min-height: 44px;
          padding: 8px 12px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
          text-decoration: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background-color 0.15s ease;
        }

        .drawer-service-link:hover {
          background-color: #f0fdf4;
        }

        .drawer-service-icon {
          width: 30px;
          height: 30px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .drawer-service-name {
          flex: 1;
          font-size: 0.875rem;
          color: #0f172a;
        }

        .drawer-price-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.12rem 0.45rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .drawer-all-services-link {
          min-height: 44px;
          padding: 10px 12px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #0d7647;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 8px;
          margin-top: 4px;
          background-color: #f0fdf4;
          transition: background-color 0.15s ease;
        }

        .drawer-all-services-link:hover {
          background-color: #dcfce7;
        }

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
          font-weight: 600;
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
          min-height: 50px;
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
          width: 34px;
          height: 34px;
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
