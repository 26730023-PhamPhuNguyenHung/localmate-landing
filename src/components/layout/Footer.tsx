import React from 'react';
import { Container } from '../ui/Container';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import { Link } from './Router';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { entity } = COMPANY_DATA;

  return (
    <footer className="localmate-footer" aria-label="Thông tin chân trang LocalMate">
      <Container size="lg">
        {/* TẦNG 1: MAIN FOOTER (GRID 4 COLUMNS) */}
        <div className="footer-main-grid">
          {/* CỘT 1: BRAND (32-35% CHIỀU NGANG) */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo-link" title="LocalMate Việt Nam - Trang chủ">
              <img
                src="/logo.png"
                alt="LocalMate - Hệ thống số cho hộ kinh doanh & SME"
                width="160"
                height="42"
                className="footer-logo-img"
                loading="lazy"
              />
            </Link>

            <p className="footer-brand-desc">
              Website, Google Maps, quảng cáo và hệ thống số cho hộ kinh doanh &amp; SME.
            </p>

            <div className="footer-brand-location">
              Đà Nẵng · Hội An · TP.HCM · Toàn quốc
            </div>
          </div>

          {/* CỘT 2: DỊCH VỤ */}
          <div className="footer-col footer-col-services">
            <h3 className="footer-col-title">Dịch vụ</h3>
            <nav className="footer-nav-list" aria-label="Danh mục dịch vụ">
              <Link to="/thiet-ke-website" className="footer-nav-link">
                Thiết kế website
              </Link>
              <Link to="/google-maps-local-seo" className="footer-nav-link">
                Google Maps &amp; Local SEO
              </Link>
              <Link to="/google-ads" className="footer-nav-link">
                Google Ads
              </Link>
              <Link to="/content-marketing" className="footer-nav-link">
                Content &amp; chăm sóc số
              </Link>
              <Link to="/automation" className="footer-nav-link">
                CRM &amp; Automation
              </Link>
            </nav>
          </div>

          {/* CỘT 3: THÔNG TIN */}
          <div className="footer-col footer-col-info">
            <h3 className="footer-col-title">Thông tin</h3>
            <nav className="footer-nav-list" aria-label="Thông tin doanh nghiệp">
              <Link to="/#cach-lam-viec" className="footer-nav-link">
                Cách làm việc
              </Link>
              <Link to="/bang-gia" className="footer-nav-link">
                Bảng giá
              </Link>
              <Link to="/du-an" className="footer-nav-link">
                Dự án / Demo
              </Link>
              <Link to="/ve-localmate" className="footer-nav-link">
                Về LocalMate
              </Link>
              <Link to="/chinh-sach-bao-mat" className="footer-nav-link">
                Chính sách bảo mật
              </Link>
            </nav>
          </div>

          {/* CỘT 4: CONTACT / CTA */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">Cần hỗ trợ?</h3>
            <p className="footer-contact-desc">
              Trao đổi trực tiếp với LocalMate về nhu cầu của bạn.
            </p>

            <a
              href={entity.contact.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn"
              title="Nhắn Zalo với chuyên viên LocalMate"
            >
              Nhắn Zalo
            </a>

            <div className="footer-contact-links">
              <a
                href={`tel:${entity.contact.hotlineTel}`}
                className="footer-direct-link"
                title="Gọi Hotline tư vấn trực tiếp"
              >
                <Phone size={15} className="contact-link-icon" aria-hidden="true" />
                <span className="contact-phone-num">0834 422 439</span>
              </a>

              <a
                href={`mailto:${entity.contact.email}`}
                className="footer-direct-link"
                title="Gửi email cho LocalMate"
              >
                <Mail size={15} className="contact-link-icon" aria-hidden="true" />
                <span>{entity.contact.email}</span>
              </a>
            </div>

            {/* Social Icons phẳng, tinh gọn */}
            <div className="footer-social-row" aria-label="Kênh mạng xã hội">
              <a
                href={entity.socialProfiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook LocalMate"
                title="Fanpage Facebook LocalMate"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={entity.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-zalo"
                aria-label="Zalo LocalMate"
                title="Tư vấn Zalo LocalMate"
              >
                <span className="zalo-symbol" aria-hidden="true">Z</span>
              </a>
              <a
                href={`tel:${entity.contact.hotlineTel}`}
                className="footer-social-btn"
                aria-label="Hotline LocalMate"
                title="Gọi Hotline 0834 422 439"
              >
                <Phone size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* TẦNG 2: BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} LocalMate. All rights reserved.
          </div>

          <div className="footer-bottom-legal">
            <Link to="/dieu-khoan" className="footer-legal-link">
              Điều khoản
            </Link>
            <span className="footer-legal-dot" aria-hidden="true">·</span>
            <Link to="/chinh-sach-bao-mat" className="footer-legal-link">
              Bảo mật
            </Link>
          </div>
        </div>
      </Container>

      <style>{`
        /* ==========================================================================
           LOCALMATE FOOTER COMPONENT (REDESIGNED 2026)
           Style: Clean, Minimalist, High Contrast, Strict No Glassmorphism
           Height: 400 - 500px on Desktop
           ========================================================================== */
        .localmate-footer {
          background-color: #ffffff;
          border-top: 1px solid #e9edf2;
          padding: 72px 0 0 0;
          font-family: inherit;
          scrollbar-gutter: stable;
          color: #667085;
        }

        /* 1. Main Grid (4 Columns) */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          padding-bottom: 56px;
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 32px;
          }
        }

        @media (min-width: 1200px) {
          .footer-main-grid {
            grid-template-columns: 34% 1fr 1fr 1.2fr;
            column-gap: 56px;
            row-gap: 0;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        /* Mobile ordering per user requirement:
           1. Brand, 2. CTA/Contact, 3. Dịch vụ, 4. Thông tin */
        @media (max-width: 767px) {
          .footer-col-brand { order: 1; }
          .footer-col-contact { order: 2; }
          .footer-col-services { order: 3; }
          .footer-col-info { order: 4; }
        }

        /* Column Titles */
        .footer-col-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 18px 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        /* Column 1: Brand */
        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 16px;
          width: fit-content;
        }

        .footer-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .footer-brand-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
          margin: 0 0 14px 0;
          max-width: 320px;
          text-wrap: pretty;
        }

        .footer-brand-location {
          font-size: 14px;
          line-height: 1.5;
          color: #667085;
          font-weight: 500;
        }

        /* Columns 2 & 3: Navigation Lists */
        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-nav-link {
          font-size: 15px;
          line-height: 1.5;
          color: #667085;
          text-decoration: none;
          transition: color 0.15s ease, transform 0.15s ease;
          width: fit-content;
        }

        .footer-nav-link:hover {
          color: #0d7647;
          transform: translateX(2px);
          text-decoration: underline;
        }

        /* Column 4: Contact / CTA */
        .footer-contact-desc {
          font-size: 15px;
          line-height: 1.55;
          color: #667085;
          margin: 0 0 16px 0;
          text-wrap: pretty;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 46px;
          padding: 0 24px;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.15s ease, transform 0.1s ease;
          width: fit-content;
          box-shadow: 0 1px 2px rgba(13, 118, 71, 0.12);
        }

        .footer-cta-btn:hover {
          background-color: #0a5c37;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .footer-contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }

        .footer-direct-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: #475569;
          text-decoration: none;
          transition: color 0.15s ease;
          width: fit-content;
        }

        .footer-direct-link:hover {
          color: #0d7647;
          text-decoration: underline;
        }

        .contact-link-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .contact-phone-num {
          font-weight: 700;
          color: #111827;
        }

        .footer-direct-link:hover .contact-phone-num {
          color: #0d7647;
        }

        /* Social Icons Group */
        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .footer-social-btn:hover {
          background-color: #0d7647;
          border-color: #0d7647;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .zalo-symbol {
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        /* 2. Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid #e5e7eb;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
          font-size: 14px;
          color: #667085;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .footer-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 64px;
            padding: 0;
          }
        }

        .footer-copyright {
          color: #667085;
        }

        .footer-bottom-legal {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footer-legal-link {
          color: #667085;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-legal-link:hover {
          color: #0d7647;
          text-decoration: underline;
        }

        .footer-legal-dot {
          color: #9ca3af;
          font-weight: 700;
        }

        /* Mobile specific adjustments */
        @media (max-width: 767px) {
          .localmate-footer {
            padding: 40px 0 0 0;
          }

          .footer-main-grid {
            gap: 32px;
            padding-bottom: 36px;
          }

          .footer-cta-btn {
            width: 100%;
          }

          .footer-bottom-bar {
            padding: 20px 0 28px 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
