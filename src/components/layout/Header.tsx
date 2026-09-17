import React, { useState, useEffect } from 'react';
import { useRouter } from './Router';
import { ArtCrop } from '../ui/ArtCrop';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const { currentPath, navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = currentPath === '/' || currentPath === '/cach-lam-viec' || currentPath === '/quy-trinh';

  // Scroll detection for slight elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string, fallbackPath: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

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
    setIsMenuOpen(false);
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      handleNavClick(e as any, '#contact', '/#contact');
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
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

        {/* Mobile Menu Toggle Button */}
        <button
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Bar */}
        <nav
          id="navigation"
          className={isMenuOpen ? 'open' : ''}
          aria-label="Điều hướng chính"
        >
          <a
            className={isHome && activeSection === 'home' ? 'active' : ''}
            href="/"
            onClick={(e) => handleNavClick(e, '#home', '/')}
          >
            Trang chủ
          </a>
          <a
            className={(isHome && activeSection === 'services') || currentPath.startsWith('/dich-vu') || currentPath === '/giai-phap' ? 'active' : ''}
            href="/giai-phap"
            onClick={(e) => handleNavClick(e, '#services', '/giai-phap')}
          >
            Dịch vụ <small>⌄</small>
          </a>
          <a
            className={currentPath.startsWith('/bang-gia') ? 'active' : ''}
            href="/bang-gia"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              navigate('/bang-gia');
            }}
          >
            Bảng giá
          </a>
          <a
            className={(isHome && activeSection === 'stories') || currentPath.startsWith('/du-an') ? 'active' : ''}
            href="/du-an"
            onClick={(e) => handleNavClick(e, '#stories', '/du-an')}
          >
            Câu chuyện
          </a>
          <a
            className={(isHome && activeSection === 'process') || currentPath.startsWith('/quy-trinh') ? 'active' : ''}
            href="/quy-trinh"
            onClick={(e) => handleNavClick(e, '#process', '/quy-trinh')}
          >
            Quy trình
          </a>
          <a
            className={currentPath.startsWith('/gioi-thieu') ? 'active' : ''}
            href="/gioi-thieu"
            onClick={(e) => handleNavClick(e, '#about', '/gioi-thieu')}
          >
            Về Localmate
          </a>
          <a
            className={(isHome && activeSection === 'contact') || currentPath.startsWith('/lien-he') ? 'active' : ''}
            href="/lien-he"
            onClick={(e) => handleNavClick(e, '#contact', '/lien-he')}
          >
            Liên hệ
          </a>
        </nav>

        {/* Hotline Pill */}
        <a className="phone" href="tel:0834422439" aria-label="Gọi 0834 422 439">
          <span>
            <svg
              className="icon"
              viewBox="0 0 24 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle' }}
            >
              <path d="m5 2 4 5-3 3a15 15 0 0 0 8 8l3-3 5 4c-1 4-4 5-8 3C6 18 1 12 1 6c0-2 2-4 4-4Z" />
            </svg>
          </span>{' '}
          0834.422.439
        </a>

        {/* Quick Quote CTA Button */}
        <button
          type="button"
          className="header-cta-btn"
          onClick={handleCtaClick}
          aria-label="Nhận báo giá nhanh"
        >
          ✧ &nbsp; Báo giá nhanh
        </button>
      </div>

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

        .site-header nav {
          display: flex;
          gap: 30px;
          align-items: center;
          margin-left: auto;
          font-size: 17px;
          font-weight: 700;
          color: #10263d;
          white-space: nowrap;
        }

        .site-header nav a {
          padding: 28px 0;
          position: relative;
          text-decoration: none;
          color: #10263d;
          transition: color 0.2s;
        }

        .site-header nav a:hover {
          color: #087d54;
        }

        .site-header nav a.active {
          color: #087d54;
        }

        .site-header nav a.active:after {
          content: '';
          position: absolute;
          bottom: 14px;
          left: 15%;
          right: 15%;
          height: 3px;
          background: #087d54;
          border-radius: 2px;
        }

        .site-header small {
          margin-left: 5px;
        }

        .site-header .phone {
          padding: 15px 18px;
          border: 1px solid #dce6ec;
          border-radius: 50px;
          white-space: nowrap;
          font-size: 17px;
          font-weight: bold;
          margin-left: auto;
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

        .site-header .phone span {
          color: #ed8506;
          display: flex;
          align-items: center;
        }

        .site-header .header-cta-btn {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          padding: 16px 24px;
          color: #ffffff;
          border: 1px solid #087d54;
          border-radius: 14px;
          background: linear-gradient(125deg, #078555, #05754f);
          font-weight: 700;
          font-size: 18px;
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
          .site-header nav {
            gap: 20px;
            font-size: 15px;
          }
          .site-header .logo {
            width: 185px;
          }
          .site-header .phone {
            font-size: 15px;
            padding: 13px 14px;
          }
          .site-header .header-cta-btn {
            font-size: 15px;
            padding: 13px 18px;
          }
        }

        @media (max-width: 1150px) {
          .site-header nav {
            gap: 16px;
          }
          .site-header .phone {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .site-header .header-inner {
            height: 76px;
            gap: 15px;
          }
          .site-header .logo {
            width: 164px;
          }
          .site-header nav {
            display: none;
            position: absolute;
            left: 0;
            right: 0;
            top: 76px;
            background: #ffffff;
            padding: 16px 6%;
            box-shadow: 0 12px 24px rgba(18, 56, 42, 0.12);
            border-bottom: 1px solid #e2e8f0;
          }
          .site-header nav.open {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }
          .site-header nav a {
            padding: 15px 0;
          }
          .site-header nav a.active:after {
            bottom: 6px;
            left: 0;
            right: 70%;
          }
          .site-header .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            order: 3;
            background: #f8fafc;
            border: 1px solid #d8e7df;
            border-radius: 9px;
            font-size: 24px;
            color: #087653;
            width: 43px;
            height: 43px;
            cursor: pointer;
          }
          .site-header .header-cta-btn {
            margin-left: auto;
            font-size: 14px;
            padding: 12px 16px;
          }
        }

        @media (max-width: 600px) {
          .site-header .header-inner {
            height: 70px;
            padding: 0 16px;
            gap: 10px;
          }
          .site-header nav {
            top: 70px;
          }
          .site-header .logo {
            width: 146px;
          }
          .site-header .header-cta-btn {
            font-size: 13px;
            padding: 10px 12px;
            border-radius: 10px;
          }
          .site-header .menu-toggle {
            width: 38px;
            height: 38px;
            font-size: 22px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
