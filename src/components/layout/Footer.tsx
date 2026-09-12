import React from 'react';
import { Container } from '../ui/Container';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Globe,
  CheckCircle2,
  Lock,
  Clock,
  ArrowRight,
  Building2,
  Users,
  FileText,
  Sparkles,
  BookOpen,
  ClipboardCheck,
  Compass,
  CheckSquare
} from 'lucide-react';
import { CONTACT_INFO, COMPANY_INFO } from '../../data/landingContent';
import { Link } from './Router';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="localmate-footer" aria-label="Thông tin cuối trang LocalMate">
      <Container size="lg">
        {/* TOP BRAND & LOCAL COMMITMENT BANNER */}
        <div className="footer-header-banner">
          <div className="footer-header-brand">
            <Link to="/" className="footer-logo-link" title="LocalMate Việt Nam">
              <img
                src="/logo.png"
                alt="LocalMate - Giải pháp chuyển đổi số và website thực chiến"
                width="170"
                height="44"
                className="footer-logo-img"
                loading="lazy"
              />
            </Link>
            <div className="footer-brand-pill">
              <Building2 size={14} className="pill-icon" />
              <span>Đối tác số hóa tin cậy cho hộ kinh doanh &amp; SME</span>
            </div>
          </div>

          <div className="footer-header-cta">
            <div className="footer-local-badge">
              <span className="live-dot" aria-hidden="true"></span>
              <span>Tư vấn trực tiếp 1-1 tận nơi tại Hóc Môn, TP.HCM &amp; Toàn quốc</span>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="footer-quick-phone-btn"
              title="Gọi Hotline tư vấn nhanh"
            >
              <Phone size={15} />
              <span>0834 422 439</span>
            </a>
          </div>
        </div>

        {/* MAIN CONTENT GRID: 4 COLUMNS */}
        <div className="footer-main-grid">
          {/* CỘT 1: HỒ SƠ PHÁP NHÂN & ĐỊA BÀN PHỤC VỤ (LOCAL IDENTITY) */}
          <div className="footer-col col-identity">
            <h3 className="footer-heading-legal">
              {COMPANY_INFO.legalName}
            </h3>

            <p className="footer-intro-desc">
              Đơn vị tiên phong cung cấp giải pháp Website, Google Maps và Digital Marketing tinh gọn, giá minh bạch dành cho chủ tiệm, tiểu thương và doanh nghiệp địa phương.
            </p>

            <div className="footer-contact-list">
              {/* Địa bàn làm việc & Văn phòng Hóc Môn */}
              <div className="contact-item">
                <MapPin size={16} className="contact-icon highlight-icon" />
                <div className="contact-text">
                  <strong>Văn phòng tư vấn (TP.HCM):</strong>
                  <span>Khu vực Hóc Môn &amp; Quận 12, TP. Hồ Chí Minh</span>
                  <span className="local-tag">Hỗ trợ hẹn gặp khảo sát 1-1 tận nơi</span>
                </div>
              </div>

              {/* Trụ sở đăng ký kinh doanh */}
              <div className="contact-item">
                <Building2 size={16} className="contact-icon" />
                <div className="contact-text">
                  <strong>Trụ sở pháp lý:</strong>
                  <span>{COMPANY_INFO.taxAddress}</span>
                </div>
              </div>

              {/* Hotline & Zalo */}
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <div className="contact-text">
                  <strong>Hotline / Zalo tư vấn:</strong>
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="footer-hotline-link">
                    0834 422 439
                  </a>
                  <span className="sub-note">(Hỗ trợ nhanh 24/7)</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <div className="contact-text">
                  <strong>Hộp thư điện tử:</strong>
                  <a href={CONTACT_INFO.mailtoUrl} className="footer-link-inline">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Giờ làm việc chuẩn mực */}
              <div className="contact-item">
                <Clock size={16} className="contact-icon" />
                <div className="contact-text">
                  <strong>Giờ làm việc:</strong>
                  <span className="working-hours-tag">
                    8:00 – 20:00 cả tuần (Thứ Hai – Chủ Nhật)
                  </span>
                </div>
              </div>
            </div>

            {/* Thông tin thuế & thành lập */}
            <div className="footer-tax-box">
              <span>Mã số thuế: <strong>{COMPANY_INFO.taxCode}</strong></span>
              <span className="divider-tax">•</span>
              <span>Thành lập ngày <strong>{COMPANY_INFO.establishedDate}</strong></span>
            </div>
          </div>

          {/* CỘT 2: GIẢI PHÁP THEO 5 TRỤ CỘT CHÍNH */}
          <div className="footer-col col-solutions">
            <h4 className="footer-col-title">5 Trụ Cột Giải Pháp</h4>
            
            <div className="footer-pillars-list">
              {/* 01. Xây nền tảng số */}
              <div className="footer-pillar-block">
                <Link to="/giai-phap/xay-nen-tang-so" className="pillar-link-primary">
                  <span className="pillar-num-badge">01</span>
                  <span className="pillar-link-title">Xây nền tảng số</span>
                </Link>
                <div className="pillar-sublinks-row">
                  <Link to="/landing-490k" className="pillar-sub-link">
                    Web 1 trang 490k
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/dich-vu/thiet-ke-website" className="pillar-sub-link">
                    Web doanh nghiệp
                  </Link>
                </div>
              </div>

              {/* 02. Được tìm thấy */}
              <div className="footer-pillar-block">
                <Link to="/giai-phap/duoc-tim-thay" className="pillar-link-primary">
                  <span className="pillar-num-badge">02</span>
                  <span className="pillar-link-title">Được tìm thấy</span>
                </Link>
                <div className="pillar-sublinks-row">
                  <Link to="/dich-vu/local-search" className="pillar-sub-link">
                    Google Maps SEO
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/dich-vu/geo" className="pillar-sub-link">
                    GEO AI Search
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/quy-trinh-geo" className="pillar-sub-link">
                    Quy trình GEO
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/dich-vu/aeo" className="pillar-sub-link">
                    AEO Trích dẫn
                  </Link>
                </div>
              </div>

              {/* 03. Thu hút khách */}
              <div className="footer-pillar-block">
                <Link to="/giai-phap/thu-hut-khach-hang" className="pillar-link-primary">
                  <span className="pillar-num-badge">03</span>
                  <span className="pillar-link-title">Thu hút khách hàng</span>
                </Link>
                <div className="pillar-sublinks-row">
                  <Link to="/dich-vu/google-ads" className="pillar-sub-link">
                    Google Ads 0% kê giá
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/dich-vu/seo-ai" className="pillar-sub-link">
                    SEO AI Overviews
                  </Link>
                </div>
              </div>

              {/* 04. Vận hành hiệu quả */}
              <div className="footer-pillar-block">
                <Link to="/giai-phap/van-hanh-tu-dong-hoa" className="pillar-link-primary">
                  <span className="pillar-num-badge">04</span>
                  <span className="pillar-link-title">Vận hành hiệu quả</span>
                </Link>
                <div className="pillar-sublinks-row">
                  <span className="pillar-sub-text">
                    CRM tinh gọn, Mini App Zalo &amp; Tự động hóa
                  </span>
                </div>
              </div>

              {/* 05. Chăm sóc đồng hành */}
              <div className="footer-pillar-block">
                <Link to="/giai-phap/dong-hanh-cham-soc" className="pillar-link-primary">
                  <span className="pillar-num-badge">05</span>
                  <span className="pillar-link-title">Chăm sóc đồng hành</span>
                </Link>
                <div className="pillar-sublinks-row">
                  <Link to="/quy-trinh-cham-soc" className="pillar-sub-link">
                    Quy trình chăm sóc định kỳ
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/dich-vu/cham-soc-website" className="pillar-sub-link">
                    Bảo hành 5 năm
                  </Link>
                  <span className="sublink-divider">•</span>
                  <Link to="/dich-vu/chay-khach-cham-soc" className="pillar-sub-link">
                    Vận hành 1-1
                  </Link>
                </div>
              </div>

              {/* Link Xem tất cả giải pháp */}
              <div className="pillar-all-wrapper">
                <Link to="/giai-phap" className="footer-view-all-btn">
                  <span>Xem tất cả giải pháp &amp; báo giá</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* CỘT 3: TÀI NGUYÊN & QUY TRÌNH (CHUYÊN BIỆT BỔ SUNG) */}
          <div className="footer-col col-resources">
            <h4 className="footer-col-title">Tài Nguyên &amp; Quy Trình</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/khao-sat-du-an" className="nav-item-link highlight-survey-link">
                  <ClipboardCheck size={14} className="nav-arrow nav-survey-icon" />
                  <span className="survey-link-label">Khảo sát dự án 0đ</span>
                  <span className="footer-pill-mini">0đ</span>
                </Link>
              </li>
              <li>
                <Link to="/chien-luoc-5-giai-doan" className="nav-item-link">
                  <Compass size={14} className="nav-arrow" />
                  <span>Lộ trình 5 giai đoạn</span>
                </Link>
              </li>
              <li>
                <Link to="/quy-trinh-geo" className="nav-item-link">
                  <MapPin size={14} className="nav-arrow" />
                  <span>Quy trình GEO &amp; AI</span>
                  <span className="footer-pill-mini hot">2026</span>
                </Link>
              </li>
              <li>
                <Link to="/tieu-chuan-audit" className="nav-item-link">
                  <CheckSquare size={14} className="nav-arrow" />
                  <span>Tiêu chuẩn Audit 2026</span>
                </Link>
              </li>
              <li>
                <Link to="/quy-trinh-cham-soc" className="nav-item-link">
                  <ShieldCheck size={14} className="nav-arrow" />
                  <span>Quy trình chăm sóc số</span>
                  <span className="footer-pill-mini teal">5 năm</span>
                </Link>
              </li>
              <li>
                <Link to="/ho-so-nang-luc" className="nav-item-link">
                  <FileText size={14} className="nav-arrow" />
                  <span style={{ fontWeight: 650 }}>Hồ sơ năng lực 2026</span>
                  <span className="footer-pill-mini">40 Slide</span>
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc" className="nav-item-link">
                  <BookOpen size={14} className="nav-arrow" />
                  <span>Trung tâm kiến thức</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: CHÍNH SÁCH & MINH BẠCH */}
          <div className="footer-col col-policies">
            <h4 className="footer-col-title">Chính Sách &amp; Minh Bạch</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/bang-gia" className="nav-item-link">
                  <FileText size={13} className="nav-arrow" />
                  <span>Bảng giá &amp; Dự toán rõ ràng</span>
                </Link>
              </li>
              <li>
                <Link to="/ve-localmate" className="nav-item-link">
                  <Users size={13} className="nav-arrow" />
                  <span>Về Localmate &amp; Tầm nhìn</span>
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat" className="nav-item-link">
                  <ShieldCheck size={13} className="nav-arrow" />
                  <span>Chính sách bảo mật thông tin</span>
                </Link>
              </li>
              <li>
                <Link to="/dieu-khoan" className="nav-item-link">
                  <FileText size={13} className="nav-arrow" />
                  <span>Điều khoản sử dụng dịch vụ</span>
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-dich-vu" className="nav-item-link">
                  <Lock size={13} className="nav-arrow" />
                  <span>Quy định hỗ trợ &amp; Bảo hành</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="nav-item-link">
                  <Globe size={13} className="nav-arrow" />
                  <span>Sơ đồ trang web (Sitemap)</span>
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="nav-item-link">
                  <Phone size={13} className="nav-arrow" />
                  <span>Liên hệ tư vấn trực tiếp</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 5: ĐẶC QUYỀN ĐỊA PHƯƠNG & KẾT NỐI TRỰC TIẾP */}
          <div className="footer-col col-local-support">
            <h4 className="footer-col-title">Đặc Quyền Địa Phương</h4>

            {/* Local Support Card */}
            <div className="local-support-card">
              <div className="local-card-badge">Tư Vấn 1-1 Tận Nơi</div>
              <p className="local-card-desc">
                Bạn ở <strong>Hóc Môn, Quận 12 hoặc khu vực lân cận TP.HCM</strong>? Chuyên viên LocalMate sẵn sàng mang máy tính đến tận cửa hàng để khảo sát, tư vấn giải pháp và lên bản demo website miễn phí.
              </p>
              <div className="local-action-buttons">
                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-local-zalo"
                  title="Nhắn Zalo hẹn lịch tư vấn"
                >
                  Nhắn Zalo Đặt Hẹn
                </a>
                <Link to="/lien-he" className="btn-local-contact">
                  Gửi Yêu Cầu →
                </Link>
              </div>
            </div>

            {/* Social channels */}
            <div className="footer-social-wrapper">
              <span className="social-label">Kênh kết nối:</span>
              <div className="social-icons-group">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle"
                  aria-label="Fanpage Facebook LocalMate"
                >
                  <span>f</span>
                </a>
                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle"
                  aria-label="Kênh Zalo LocalMate"
                >
                  <span>Z</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle"
                  aria-label="Kênh YouTube LocalMate"
                >
                  <span>▶</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="footer-social-circle"
                  aria-label="Gọi Hotline LocalMate"
                >
                  <Phone size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST CERTIFICATIONS & BADGES STRIP */}
        <div className="footer-trust-strip">
          <div className="trust-pills-list">
            <div className="trust-pill-badge">
              <Clock size={14} className="trust-icon" />
              <span>Làm việc 8:00 – 20:00 cả tuần</span>
            </div>

            <div className="trust-pill-badge">
              <CheckCircle2 size={14} className="trust-icon" />
              <span>Tư vấn trực tiếp 1-1 tại Hóc Môn &amp; TP.HCM</span>
            </div>

            <div className="trust-pill-badge">
              <Lock size={14} className="trust-icon" />
              <span>Bảo mật SSL 256-bit chuẩn quốc tế</span>
            </div>

            <div className="trust-pill-badge">
              <ShieldCheck size={14} className="trust-icon" />
              <span>Báo giá trước khi làm – Không phát sinh</span>
            </div>
          </div>

          {/* Huy hiệu Bộ Công Thương */}
          <div className="trust-bct-wrapper">
            <a
              href="http://online.gov.vn"
              target="_blank"
              rel="noopener noreferrer"
              title="Website đã thông báo với Bộ Công Thương"
              className="bct-badge-link"
            >
              <img
                src="/logo-da-thong-bao-bct.png"
                alt="Website đã đăng ký thông báo với Bộ Công Thương"
                width="145"
                height="45"
                className="bct-badge-img"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & MISSION STATEMENT */}
        <div className="footer-bottom-bar">
          <div className="footer-mission-statement">
            <strong>Sứ mệnh LocalMate:</strong> Đồng hành cùng hộ kinh doanh và doanh nghiệp SME địa phương xây dựng hiện diện số uy tín, tinh gọn, chi phí hợp lý và ra đơn thực tế.
          </div>

          <div className="footer-sub-links-row">
            <div className="copyright-text">
              © {currentYear} <strong>{COMPANY_INFO.legalName}</strong>. Toàn quyền bảo lưu.
            </div>

            <div className="policy-quick-nav">
              <Link to="/bang-gia">Bảng giá</Link>
              <span className="dot-sep">•</span>
              <Link to="/ve-localmate">Về Localmate</Link>
              <span className="dot-sep">•</span>
              <Link to="/chinh-sach-bao-mat">Bảo mật</Link>
              <span className="dot-sep">•</span>
              <Link to="/dieu-khoan">Điều khoản</Link>
              <span className="dot-sep">•</span>
              <Link to="/chinh-sach-dich-vu">Bảo hành</Link>
              <span className="dot-sep">•</span>
              <Link to="/sitemap">Sơ đồ website</Link>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        /* ==========================================================================
           LOCALMATE FOOTER COMPONENT STYLES
           Design Language: MISA Light Theme, high contrast, strict no glassmorphism
           ========================================================================== */
        .localmate-footer {
          background-color: #ffffff;
          color: #334155;
          border-top: 1px solid #e2e8f0;
          padding: 3rem 0 2rem 0;
          font-family: inherit;
          scrollbar-gutter: stable;
        }

        /* 1. Header Banner */
        .footer-header-banner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 768px) {
          .footer-header-banner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .footer-header-brand {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }

        @media (min-width: 640px) {
          .footer-header-brand {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }
        }

        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .footer-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
        }

        .pill-icon {
          color: #15803d;
          flex-shrink: 0;
        }

        .footer-header-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-local-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.825rem;
          color: #0f172a;
          font-weight: 600;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.4rem 0.85rem;
          border-radius: 9999px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          display: inline-block;
          box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
        }

        .footer-quick-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background-color: #0d7647;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .footer-quick-phone-btn:hover {
          background-color: #0a5c37;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* 2. Main Content Grid (5 Columns on Desktop) */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.75rem;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .footer-main-grid {
            grid-template-columns: 1.25fr 1.15fr 1fr 1fr;
            gap: 1.75rem;
          }
          .col-local-support {
            grid-column: span 2;
          }
        }

        @media (min-width: 1280px) {
          .footer-main-grid {
            grid-template-columns: 1.3fr 1.1fr 1fr 0.9fr 1.1fr;
            gap: 1.75rem;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        /* Heading Styles */
        .footer-heading-legal {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.65rem 0;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }

        .footer-col-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 1rem 0;
          position: relative;
          padding-bottom: 0.45rem;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background-color: #0d7647;
          border-radius: 2px;
        }

        .footer-intro-desc {
          font-size: 0.85rem;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 1.15rem 0;
          text-wrap: pretty;
        }

        /* Column 1: Contact Items */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #334155;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          line-height: 1.45;
        }

        .contact-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .contact-icon.highlight-icon {
          color: #059669;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .contact-text strong {
          color: #0f172a;
          font-weight: 700;
        }

        .local-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #065f46;
          background-color: #ecfdf5;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          margin-top: 0.2rem;
          width: fit-content;
          border: 1px solid #a7f3d0;
        }

        .working-hours-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #92400e;
          background-color: #fef3c7;
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
          margin-top: 0.2rem;
          width: fit-content;
          border: 1px solid #fde68a;
        }

        .footer-hotline-link {
          font-weight: 800;
          color: #0d7647;
          font-size: 0.95rem;
          text-decoration: none;
        }

        .footer-hotline-link:hover {
          text-decoration: underline;
        }

        .sub-note {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
          margin-left: 0.25rem;
        }

        .footer-link-inline {
          color: #0d7647;
          font-weight: 600;
          text-decoration: none;
        }

        .footer-link-inline:hover {
          text-decoration: underline;
        }

        .footer-tax-box {
          margin-top: 1.15rem;
          padding-top: 0.75rem;
          border-top: 1px dashed #cbd5e1;
          font-size: 0.775rem;
          color: #64748b;
          line-height: 1.5;
        }

        .divider-tax {
          margin: 0 0.4rem;
          color: #94a3b8;
        }

        /* Column 2: 5 Pillars Solution Structure */
        .footer-pillars-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-pillar-block {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-bottom: 0.65rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .footer-pillar-block:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        .pillar-link-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #0f172a;
          font-size: 0.875rem;
          font-weight: 700;
          transition: color 0.15s ease;
        }

        .pillar-link-primary:hover {
          color: #0d7647;
        }

        .pillar-num-badge {
          font-size: 0.6875rem;
          font-weight: 800;
          color: #0d7647;
          background-color: #edf7f1;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        .pillar-link-title {
          font-size: 0.875rem;
          font-weight: 700;
        }

        .pillar-sublinks-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem 0.45rem;
          padding-left: 1.75rem;
          font-size: 0.775rem;
        }

        .pillar-sub-link {
          color: #64748b;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .pillar-sub-link:hover {
          color: #0d7647;
          text-decoration: underline;
        }

        .sublink-divider {
          color: #cbd5e1;
          font-size: 0.65rem;
        }

        .pillar-sub-text {
          color: #64748b;
          font-size: 0.75rem;
        }

        .pillar-all-wrapper {
          padding-top: 0.45rem;
        }

        .footer-view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          font-weight: 700;
          color: #0d7647;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          transition: all 0.15s ease;
          width: fit-content;
        }

        .footer-view-all-btn:hover {
          background-color: #0d7647;
          color: #ffffff;
        }

        /* Column 3: Navigation Links */
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          font-size: 0.85rem;
        }

        .nav-item-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #475569;
          text-decoration: none;
          transition: color 0.15s ease, transform 0.15s ease;
          line-height: 1.4;
        }

        .nav-item-link:hover {
          color: #0d7647;
          transform: translateX(2px);
          text-decoration: underline;
        }

        .nav-arrow {
          color: #94a3b8;
          flex-shrink: 0;
          transition: color 0.15s ease;
        }

        .nav-item-link:hover .nav-arrow {
          color: #0d7647;
        }

        /* Column 4: Local Support Card & Social */
        .local-support-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.15rem;
          margin-bottom: 1.25rem;
        }

        .local-card-badge {
          display: inline-block;
          font-size: 0.725rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #0d7647;
          background-color: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          margin-bottom: 0.65rem;
        }

        .local-card-desc {
          font-size: 0.8rem;
          line-height: 1.5;
          color: #475569;
          margin: 0 0 0.85rem 0;
          text-wrap: pretty;
        }

        .local-action-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .btn-local-zalo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 0.775rem;
          font-weight: 700;
          padding: 0.45rem 0.85rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.15s ease;
        }

        .btn-local-zalo:hover {
          background-color: #0a5c37;
          color: #ffffff;
        }

        .btn-local-contact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          font-size: 0.775rem;
          font-weight: 600;
          padding: 0.45rem 0.85rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.15s ease;
        }

        .btn-local-contact:hover {
          background-color: #f1f5f9;
        }

        .footer-social-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-label {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
        }

        .social-icons-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .footer-social-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #334155;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 800;
          transition: all 0.15s ease;
        }

        .footer-social-circle:hover {
          background-color: #0d7647;
          border-color: #0d7647;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* 3. Trust Strip */
        .footer-trust-strip {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem 0;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 1024px) {
          .footer-trust-strip {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .trust-pills-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.65rem;
        }

        .trust-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.775rem;
          color: #334155;
          font-weight: 600;
        }

        .trust-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .trust-bct-wrapper {
          display: flex;
          align-items: center;
        }

        .bct-badge-link {
          display: inline-block;
          text-decoration: none;
        }

        .bct-badge-img {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* 4. Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding-top: 0.5rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .footer-mission-statement {
          line-height: 1.5;
          text-wrap: pretty;
        }

        .footer-mission-statement strong {
          color: #0f172a;
        }

        .footer-sub-links-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .footer-sub-links-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .copyright-text strong {
          color: #334155;
        }

        .policy-quick-nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.4rem;
        }

        .policy-quick-nav a {
          color: #64748b;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .policy-quick-nav a:hover {
          color: #0d7647;
          text-decoration: underline;
        }

        .dot-sep {
          color: #cbd5e1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
