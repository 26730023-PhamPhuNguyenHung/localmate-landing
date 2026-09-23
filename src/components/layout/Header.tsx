import React, { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useRouter } from './Router';
import { CONTACT_INFO } from '../../data/landingContent';
import { publicNavItems } from '../../data/navigation';
import '../../styles/header.css';

interface HeaderProps {
  onOpenDemoForm?: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const { currentPath, navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => path === '/'
    ? ['/', '/cach-lam-viec', '/quy-trinh'].includes(currentPath)
    : currentPath === path;

  useEffect(() => setIsMenuOpen(false), [currentPath]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setIsMenuOpen(false);
    navigate(path);
  };

  const openConsultation = () => {
    setIsMenuOpen(false);
    if (onOpenDemoForm) onOpenDemoForm();
    else navigate('/#contact');
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-header-brand" href="/" onClick={(event) => goTo(event, '/')} aria-label="LocalMate — Trang chủ">
          <img src="/logo.png" width="213" height="83" alt="LocalMate — Người đồng hành số" />
        </a>
        <nav className="site-header-nav" aria-label="Điều hướng chính">
          {publicNavItems.map((item) => (
            <a key={item.label} href={item.path} onClick={(event) => goTo(event, item.path)}
              aria-current={isActive(item.path) ? 'page' : undefined}>{item.label}</a>
          ))}
        </nav>
        <div className="site-header-actions">
          <a className="site-header-phone" href={`tel:${CONTACT_INFO.phoneRaw}`}>
            <Phone size={16} aria-hidden="true" />{CONTACT_INFO.phoneFormatted}
          </a>
          <button className="site-header-cta" type="button" onClick={openConsultation}>Báo giá nhanh</button>
        </div>
        <button className="site-header-toggle" type="button" onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMenuOpen} aria-controls="site-mobile-navigation">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="site-header-mobile" id="site-mobile-navigation" aria-label="Điều hướng mobile">
          {publicNavItems.map((item) => (
            <a key={item.label} href={item.path} onClick={(event) => goTo(event, item.path)}
              aria-current={isActive(item.path) ? 'page' : undefined}>{item.label}</a>
          ))}
          <button className="site-header-cta" type="button" onClick={openConsultation}>Báo giá nhanh</button>
          <a className="site-header-mobile-phone" href={`tel:${CONTACT_INFO.phoneRaw}`}>
            <Phone size={16} aria-hidden="true" />{CONTACT_INFO.phoneFormatted}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
