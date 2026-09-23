import React from 'react';
import { useRouter } from './Router';

type FooterLink = { label: string; hash?: string; path: string; secondaryOnMobile?: boolean };

const FOOTER_GROUPS: { title: string; ariaLabel: string; links: FooterLink[] }[] = [
  {
    title: 'Dịch vụ', ariaLabel: 'Danh mục dịch vụ', links: [
      { label: 'Thiết kế website', path: '/dich-vu#service-0' },
      { label: 'Google Maps & Local SEO', path: '/dich-vu#service-1' },
      { label: 'Google Ads', path: '/dich-vu#service-2' },
      { label: 'Content & chăm sóc số', path: '/dich-vu#service-3', secondaryOnMobile: true },
      { label: 'CRM & Automation', path: '/dich-vu#service-4', secondaryOnMobile: true }
    ]
  },
  {
    title: 'Khám phá', ariaLabel: 'Khám phá LocalMate', links: [
      { label: 'LocalMate Labs', path: '/labs' },
      { label: 'Dự án / Demo', hash: '#stories', path: '/#stories' },
      { label: 'Cách làm việc', hash: '#process', path: '/#process', secondaryOnMobile: true },
      { label: 'Kiến thức', path: '/kien-thuc', secondaryOnMobile: true }
    ]
  }
];

export const Footer: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const isHome = currentPath === '/' || currentPath === '/cach-lam-viec' || currentPath === '/quy-trinh';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string, fallbackPath: string) => {
    e.preventDefault();
    if (isHome && hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const headerHeight = 85;
        const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
        return;
      }
    }
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

  return (
    <footer id="about" className="site-footer" aria-label="Thông tin chân trang LocalMate">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col brand-col">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '#home', '/')}
              className="footer-brand"
              aria-label="Localmate"
            >
              <img src="/logo.png" className="logo" width="213" height="83" alt="LocalMate" />
            </a>
            <p className="brand-desc">
              Website, Google Maps, quảng cáo và hệ thống số cho hộ kinh doanh &amp; SME.
            </p>
            <p className="location-text">⌖ &nbsp;Đà Nẵng · Hội An · TP.HCM · Toàn quốc</p>
            <p className="handwritten slogan">Cùng doanh nghiệp địa phương vươn xa hơn<span className="footer-slogan-line" aria-hidden="true" /></p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div className="footer-col footer-nav-col" key={group.title}>
              <h4>{group.title}</h4>
              <nav className="footer-links" aria-label={group.ariaLabel}>
                {group.links.map((link) => (
                  <a key={link.label} href={link.path} className={link.secondaryOnMobile ? 'footer-secondary-link' : undefined}
                    onClick={(event) => handleLinkClick(event, link.hash || '', link.path)}>{link.label}</a>
                ))}
              </nav>
            </div>
          ))}

          {/* Col 4: Support & Contact */}
          <div className="footer-col support-col">
            <h4>Cần hỗ trợ?</h4>
            <p>Trao đổi trực tiếp với LocalMate về nhu cầu của bạn.</p>
            <a
              className="zalo-btn"
              href="https://zalo.me/0834422439"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nhắn Zalo với chuyên viên LocalMate"
            >
              Nhắn Zalo
            </a>
            <a className="contact-line" href="tel:0834422439">
              <strong>
                <svg
                  className="icon"
                  viewBox="0 0 24 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle', marginRight: 6 }}
                >
                  <path d="m5 2 4 5-3 3a15 15 0 0 0 8 8l3-3 5 4c-1 4-4 5-8 3C6 18 1 12 1 6c0-2 2-4 4-4Z" />
                </svg>
                0834 422 439
              </strong>
            </a>
            <a className="contact-line email" href="mailto:contact@localmate.vn">
              ✉ &nbsp;contact@localmate.vn
            </a>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <span>© 2026 CÔNG TY TNHH LOCALMATE — MST: 4001337934. Trụ sở: 03 Trường Chinh, Đà Nẵng.</span>
          <a
            href="/chinh-sach-bao-mat"
            onClick={(e) => {
              e.preventDefault();
              navigate('/chinh-sach-bao-mat');
            }}
            className="bottom-policy-link"
          >
            Bảo mật &amp; dữ liệu
          </a>
        </div>
      </div>

      <style>{`
        .site-footer {
          padding: 40px 0 20px;
          background: linear-gradient(160deg, #f7fcfa, #eef8f3);
          border-top: 1px solid #dcece4;
          color: #0b3040;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .footer-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(16px, 2.5vw, 32px);
          box-sizing: border-box;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: clamp(16px, 2.5vw, 32px);
        }

        .footer-grid > .footer-col + .footer-col {
          border-left: 1px solid #e3eeed;
          padding-left: clamp(14px, 2vw, 24px);
        }

        .brand-col .logo {
          display: block;
          width: 185px;
          height: auto;
          margin-bottom: 8px;
        }

        .brand-desc {
          font-size: 14px;
          color: #586e89;
          line-height: 1.5;
          margin: 8px 0;
        }

        .location-text {
          font-size: 14px;
          color: #586e89;
          margin: 8px 0;
          text-wrap: pretty;
        }

        .slogan {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Mali', 'Patrick Hand', 'Caveat', cursive;
          font-style: italic;
          font-weight: 500;
          font-size: 19px;
          color: #12815e;
          margin-top: 16px;
        }

        .footer-slogan-line { display: block; width: 110px; height: 8px; margin: 3px 0 0; border-top: 3px solid #ed9900; border-radius: 50%; transform: rotate(-5deg); }

        .footer-col h4 {
          margin: 8px 0 16px;
          font-size: 17px;
          font-weight: 700;
          color: #0b3040;
          letter-spacing: -0.3px;
        }

        .footer-links a {
          display: block;
          margin: 11px 0;
          font-size: 14px;
          color: #586e89;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #087d54;
        }

        .support-col p {
          font-size: 14px;
          color: #586e89;
          line-height: 1.5;
          margin: 8px 0 14px;
        }

        .zalo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: linear-gradient(125deg, #078555, #05754f);
          border: 1px solid #087d54;
          border-radius: 12px;
          text-align: center;
          width: min(170px, 100%);
          min-height: 44px;
          padding: 10px 16px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 3px 8px rgba(6, 119, 74, 0.15);
          transition: transform 0.2s, box-shadow 0.2s;
          margin-bottom: 14px;
        }

        .zalo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 14px rgba(6, 119, 74, 0.25);
        }

        .contact-line {
          display: block;
          margin: 8px 0;
          font-size: 15px;
          color: #10263d;
          text-decoration: none;
        }

        .contact-line strong {
          display: inline-flex;
          align-items: center;
          color: #10263d;
        }

        .contact-line.email {
          color: #586e89;
          font-size: 14px;
        }

        .contact-line:hover {
          color: #087d54;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid #cddfdf;
          margin-top: 32px;
          font-size: 13px;
          color: #586e89;
        }

        .bottom-policy-link {
          color: #586e89;
          text-decoration: none;
          transition: color 0.2s;
        }

        .bottom-policy-link:hover {
          color: #087d54;
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 24px;
          }
          .footer-grid > .footer-col + .footer-col {
            border-left: none;
            padding-left: 0;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .site-footer {
            padding: 24px 0 18px;
          }
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 16px;
          }
          .brand-col, .support-col { grid-column: 1 / -1; }
          .brand-col .logo { width: 145px; margin-bottom: 4px; }
          .brand-desc { display: none; }
          .location-text, .slogan, .footer-secondary-link, .support-col p { display: none !important; }
          .footer-col h4 { font-size: 14px; margin: 0 0 6px; }
          .footer-links a { font-size: 13px; line-height: 1.3; margin: 0; padding: 3px 0; }
          .support-col { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 14px; }
          .support-col h4 { display: none; }
          .zalo-btn { width: auto; min-height: 40px; margin: 0; padding: 8px 15px; font-size: 13px; }
          .contact-line { margin: 0; font-size: 13px; }
          .contact-line.email { width: 100%; font-size: 12px; }
          .footer-bottom { margin-top: 18px; padding-top: 12px; gap: 6px; }
          .footer-bottom span { max-width: 330px; }
          .bottom-policy-link { text-decoration: underline; text-underline-offset: 2px; }
          .footer-container { padding: 0 18px; }
          .footer-grid > .footer-col + .footer-col { border: 0; padding-left: 0; }
          .footer-nav-col { min-width: 0; }
          .footer-nav-col a { overflow-wrap: anywhere; }
          .footer-brand { display: inline-block; }
          .footer-bottom {
            flex-direction: column;
          }
          .footer-bottom {
            font-size: 11px;
            line-height: 1.4;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
