import React from 'react';
import { Container } from '../../ui/Container';
import { CONTACT_INFO } from '../../../data/landingContent';
import { PhoneCall, Mail, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from '../../layout/Router';

export const GeoFooter: React.FC = () => {
  return (
    <footer className="geo-landing-footer">
      <Container size="wide">
        <div className="gl-footer-inner">
          {/* Top Row: Brand & Quick Contact */}
          <div className="gl-footer-top">
            <div className="gl-footer-brand">
              <img src="/logo.png" alt="LocalMate" className="gl-footer-logo" />
              <div>
                <span className="gl-footer-name">LocalMate</span>
                <span className="gl-footer-tagline">Tối ưu AI Search & Đề xuất dịch vụ địa phương</span>
              </div>
            </div>

            <div className="gl-footer-contacts">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="gl-footer-contact-item">
                <PhoneCall size={15} className="gl-icon" />
                <span>Hotline / Zalo: <strong>{CONTACT_INFO.phone}</strong></span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="gl-footer-contact-item">
                <Mail size={15} className="gl-icon" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="gl-footer-contact-item address">
                <MapPin size={15} className="gl-icon" />
                <span>03 Trường Chinh, P. Hội An Tây, TP. Đà Nẵng</span>
              </div>
            </div>
          </div>

          <div className="gl-footer-divider" />

          {/* Bottom Row: Legal & Compliance for Ads */}
          <div className="gl-footer-bottom">
            <div className="gl-footer-legal">
              <span><strong>CÔNG TY TNHH LOCALMATE</strong> — MST: 4001337934</span>
              <span className="gl-sep">·</span>
              <span>Bàn giao tài khoản chính chủ 100%</span>
              <span className="gl-sep">·</span>
              <span>Không cam kết ảo “ép AI lên top 1”</span>
            </div>

            <div className="gl-footer-links">
              <Link to="/chinh-sach-bao-mat">Bảo mật</Link>
              <Link to="/dieu-khoan">Điều khoản</Link>
              <Link to="/quy-trinh-geo">Quy trình GEO</Link>
              <Link to="/bang-gia">Bảng giá</Link>
            </div>
          </div>

          <div className="gl-footer-copyright">
            © 2026 LocalMate. Nền tảng tiếp thị số & tối ưu hiển thị AI Search dành cho doanh nghiệp và hộ kinh doanh.
          </div>
        </div>
      </Container>

      <style>{`
        .geo-landing-footer {
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 28px 0 24px 0;
          color: #475569;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
        }

        .gl-footer-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gl-footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .gl-footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .gl-footer-logo {
          height: 36px;
          width: auto;
          object-fit: contain;
        }

        .gl-footer-name {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          display: block;
          line-height: 1.2;
        }

        .gl-footer-tagline {
          font-size: 12.5px;
          color: #64748b;
          display: block;
        }

        .gl-footer-contacts {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px 20px;
        }

        .gl-footer-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #334155;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
        }

        .gl-footer-contact-item:hover {
          color: #0d7647;
        }

        .gl-footer-contact-item strong {
          color: #0d7647;
          font-weight: 700;
        }

        .gl-footer-contact-item.address {
          color: #64748b;
        }

        .gl-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .gl-footer-divider {
          height: 1px;
          background-color: #f1f5f9;
        }

        .gl-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 12.5px;
        }

        .gl-footer-legal {
          color: #64748b;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .gl-footer-legal strong {
          color: #0f172a;
          font-weight: 700;
        }

        .gl-sep {
          color: #cbd5e1;
        }

        .gl-footer-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .gl-footer-links a {
          color: #475569;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.15s ease;
        }

        .gl-footer-links a:hover {
          color: #0d7647;
        }

        .gl-footer-copyright {
          text-align: center;
          font-size: 11.5px;
          color: #94a3b8;
          padding-top: 6px;
          border-top: 1px solid #f8fafc;
        }

        @media (max-width: 768px) {
          .gl-footer-top,
          .gl-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .gl-footer-contacts {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
};
