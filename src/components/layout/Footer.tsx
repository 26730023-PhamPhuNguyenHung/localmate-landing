import React from 'react';
import { useRouter } from './Router';
import { ArtCrop } from '../ui/ArtCrop';

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
              <ArtCrop
                image={1}
                box={[72, 4, 213, 83]}
                className="logo"
                role="img"
                ariaLabel="Localmate"
              />
            </a>
            <p className="brand-desc">
              Website, Google Maps, quảng cáo và hệ thống số cho hộ kinh doanh &amp; SME.
            </p>
            <p className="location-text">⌖ &nbsp;Đà Nẵng · Hội An · TP.HCM · Toàn quốc</p>
            <p className="handwritten slogan">Cùng doanh nghiệp địa phương vươn xa hơn</p>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4>Dịch vụ</h4>
            <nav className="footer-links" aria-label="Danh mục dịch vụ">
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services', '/#services')}
              >
                Thiết kế website
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services', '/#services')}
              >
                Google Maps &amp; Local SEO
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services', '/#services')}
              >
                Google Ads
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services', '/#services')}
              >
                Content &amp; chăm sóc số
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services', '/#services')}
              >
                CRM &amp; Automation
              </a>
            </nav>
          </div>

          {/* Col 3: Company & Information */}
          <div className="footer-col">
            <h4>Thông tin</h4>
            <nav className="footer-links" aria-label="Thông tin LocalMate">
              <a
                href="#process"
                onClick={(e) => handleLinkClick(e, '#process', '/#process')}
              >
                Cách làm việc
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services', '/#services')}
              >
                Bảng giá niêm yết
              </a>
              <a
                href="#stories"
                onClick={(e) => handleLinkClick(e, '#stories', '/#stories')}
              >
                Dự án / Demo
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact', '/#contact')}
              >
                Nhận tư vấn 0đ
              </a>
              <a
                href="/chinh-sach-bao-mat"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/chinh-sach-bao-mat');
                }}
              >
                Chính sách bảo mật
              </a>
            </nav>
          </div>

          {/* Col 4: Support & Contact */}
          <div className="footer-col support-col">
            <h4>Cần hỗ trợ?</h4>
            <p>Trao đổi trực tiếp với Localmate<br />về nhu cầu của bạn.</p>
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
          max-width: 1672px;
          margin: 0 auto;
          padding: 0 3.5%;
          box-sizing: border-box;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.25fr;
          gap: 4%;
        }

        .footer-grid > .footer-col + .footer-col {
          border-left: 1px solid #e3eeed;
          padding-left: 12%;
        }

        .brand-col .logo {
          width: 185px;
          aspect-ratio: 213/83;
          margin-bottom: 12px;
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
        }

        .slogan {
          font-family: 'Mali', 'Patrick Hand', 'Caveat', cursive;
          font-style: italic;
          font-weight: 500;
          font-size: 19px;
          color: #12815e;
          margin-top: 16px;
        }

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
          display: block;
          color: #ffffff;
          background: linear-gradient(125deg, #078555, #05754f);
          border: 1px solid #087d54;
          border-radius: 12px;
          text-align: center;
          width: 170px;
          padding: 11px 16px;
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

        @media (max-width: 1150px) {
          .footer-grid {
            gap: 3%;
          }
          .footer-grid > .footer-col + .footer-col {
            padding-left: 8%;
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
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
            padding: 32px 0 20px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
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
