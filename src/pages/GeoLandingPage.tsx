import React, { useState, useRef } from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/seo/SEOHead';
import { CONTACT_INFO } from '../data/landingContent';
import { submitLead } from '../services/leadService';
import { trackCTAClick, trackPhoneClick, trackZaloClick } from '../analytics/tracker';
import {
  Sparkles,
  Bot,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe,
  Phone,
  MessageSquare,
  Check,
  ChevronRight,
  PhoneCall,
  Zap
} from 'lucide-react';

interface GeoLandingPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GeoLandingPage: React.FC<GeoLandingPageProps> = ({ onOpenConsultForm }) => {
  // Hero Form state
  const [heroWebsite, setHeroWebsite] = useState('');
  const [heroPhone, setHeroPhone] = useState('');
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState('');

  // Bottom Form state
  const [bottomWebsite, setBottomWebsite] = useState('');
  const [bottomPhone, setBottomPhone] = useState('');
  const [bottomSubmitting, setBottomSubmitting] = useState(false);
  const [bottomSuccess, setBottomSuccess] = useState(false);
  const [bottomError, setBottomError] = useState('');

  // Selected package tracking
  const [selectedPackage, setSelectedPackage] = useState<string>('Gói GEO Setup 2.490.000đ');

  const heroFormRef = useRef<HTMLDivElement>(null);
  const bottomFormRef = useRef<HTMLDivElement>(null);

  // Scroll to form helper
  const scrollToForm = (pkgName?: string) => {
    if (pkgName) {
      setSelectedPackage(pkgName);
    }
    trackCTAClick(pkgName || 'Bắt đầu GEO', 'pricing_card');

    if (heroFormRef.current) {
      heroFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = heroFormRef.current.querySelector('input');
      if (input) input.focus();
    } else if (bottomFormRef.current) {
      bottomFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = bottomFormRef.current.querySelector('input');
      if (input) input.focus();
    }
  };

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroError('');

    if (!heroWebsite.trim()) {
      setHeroError('Vui lòng nhập địa chỉ website hoặc tên doanh nghiệp của bạn.');
      return;
    }
    if (!heroPhone.trim() || heroPhone.trim().length < 8) {
      setHeroError('Vui lòng nhập số điện thoại hoặc Zalo hợp lệ để nhận báo cáo audit.');
      return;
    }

    setHeroSubmitting(true);
    trackCTAClick('Kiểm tra AI Visibility Miễn Phí', 'hero_form');

    try {
      await submitLead({
        name: `Khách GEO (${heroWebsite.trim()})`,
        phone: heroPhone.trim(),
        businessName: heroWebsite.trim(),
        serviceInterest: `Dịch vụ GEO AI Search - ${selectedPackage}`,
        message: `Đăng ký Audit AI Visibility miễn phí cho Website: ${heroWebsite.trim()} | SĐT/Zalo: ${heroPhone.trim()}`,
        sourcePage: '/geo'
      });
      setHeroSuccess(true);
    } catch (err) {
      setHeroError('Có lỗi xảy ra khi gửi thông tin. Vui lòng kết nối trực tiếp qua Zalo hoặc Hotline.');
    } finally {
      setHeroSubmitting(false);
    }
  };

  const handleBottomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBottomError('');

    if (!bottomWebsite.trim()) {
      setBottomError('Vui lòng nhập địa chỉ website hoặc tên doanh nghiệp của bạn.');
      return;
    }
    if (!bottomPhone.trim() || bottomPhone.trim().length < 8) {
      setBottomError('Vui lòng nhập số điện thoại hoặc Zalo hợp lệ để nhận báo cáo.');
      return;
    }

    setBottomSubmitting(true);
    trackCTAClick('Nhận AI Visibility Audit Miễn Phí', 'bottom_form');

    try {
      await submitLead({
        name: `Khách GEO (${bottomWebsite.trim()})`,
        phone: bottomPhone.trim(),
        businessName: bottomWebsite.trim(),
        serviceInterest: `Dịch vụ GEO AI Search - ${selectedPackage}`,
        message: `Đăng ký Audit AI Visibility cuối trang cho Website: ${bottomWebsite.trim()} | SĐT/Zalo: ${bottomPhone.trim()}`,
        sourcePage: '/geo'
      });
      setBottomSuccess(true);
    } catch (err) {
      setBottomError('Có lỗi xảy ra khi gửi thông tin. Vui lòng kết nối trực tiếp qua Zalo hoặc Hotline.');
    } finally {
      setBottomSubmitting(false);
    }
  };

  return (
    <div className="geo-ads-landing-page">
      <SEOHead
        title="Tối Ưu AI Search (GEO) - Xuất Hiện Khi Khách Hỏi ChatGPT"
        description="SEO ChatGPT, GEO, AI Search Optimization: Giúp website được ChatGPT, Gemini, Perplexity và Google AI tìm thấy và đề xuất khi khách hàng hỏi mua dịch vụ."
        canonicalPath="/geo"
      />

      {/* ========================================================================= */}
      {/* SECTION 1 — HERO & FULL-WIDTH CENTERED AUDIT FORM                         */}
      {/* ========================================================================= */}
      <section className="geo-hero-section">
        <Container size="wide">
          <div className="geo-hero-fullwidth">
            {/* Top Category Badge */}
            <div className="geo-category-pill">
              <span className="geo-pill-dot" />
              <Bot size={16} className="geo-pill-icon" />
              <span className="geo-pill-text">SEO ChatGPT · GEO · AI Search Optimization</span>
            </div>

            {/* Main Full-Width Headline (Ngắt dòng chuẩn ngữ nghĩa 2 dòng trọn vẹn) */}
            <h1 className="geo-main-title">
              <span className="geo-title-line line-1">
                KHÁCH HỎI CHATGPT VỀ DỊCH VỤ CỦA BẠN.
              </span>
              <span className="geo-title-line line-2">
                AI CÓ NHẮC ĐẾN BẠN KHÔNG?
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="geo-hero-desc">
              Chúng tôi giúp doanh nghiệp tối ưu website để tăng khả năng được{' '}
              <strong>ChatGPT, Gemini, Perplexity và Google AI</strong> tìm thấy, hiểu đúng và sử dụng khi trả lời khách hàng.
            </p>

            {/* AI Platform Badges */}
            <div className="geo-platform-badges">
              <span className="geo-badge-label">Nền tảng AI tối ưu:</span>
              <div className="geo-badge-list">
                <span className="geo-ai-chip">
                  <span className="geo-ai-icon-dot chatgpt" /> ChatGPT
                </span>
                <span className="geo-ai-chip">
                  <span className="geo-ai-icon-dot gemini" /> Google Gemini
                </span>
                <span className="geo-ai-chip">
                  <span className="geo-ai-icon-dot perplexity" /> Perplexity
                </span>
                <span className="geo-ai-chip">
                  <span className="geo-ai-icon-dot google-ai" /> Google AI Overviews
                </span>
              </div>
            </div>

            {/* Hero Audit Card (Full-Width High-Conversion Box) */}
            <div className="geo-hero-card-container" ref={heroFormRef} id="audit-form-section">
              <div className="geo-audit-card">
                {/* Header */}
                <div className="geo-audit-header">
                  <div className="geo-audit-icon-wrap">
                    <Sparkles size={24} className="geo-sparkle-icon" />
                  </div>
                  <div className="geo-audit-header-text">
                    <h2 className="geo-audit-title">Kiểm tra miễn phí thương hiệu của bạn trên AI</h2>
                    <p className="geo-audit-subtitle">Nhập website, chúng tôi kiểm tra:</p>
                  </div>
                </div>

                {/* 4 Checkpoints Grid (2 columns on desktop, 1 column on mobile) */}
                <div className="geo-audit-checkpoints-grid">
                  <div className="geo-checkpoint-item">
                    <CheckCircle2 size={18} className="geo-check-icon" />
                    <span>AI hiện có biết đến thương hiệu không</span>
                  </div>
                  <div className="geo-checkpoint-item">
                    <CheckCircle2 size={18} className="geo-check-icon" />
                    <span>Khi hỏi về dịch vụ của bạn, AI đang đề xuất ai</span>
                  </div>
                  <div className="geo-checkpoint-item">
                    <CheckCircle2 size={18} className="geo-check-icon" />
                    <span>Website đang thiếu tín hiệu gì</span>
                  </div>
                  <div className="geo-checkpoint-item">
                    <CheckCircle2 size={18} className="geo-check-icon" />
                    <span>Những truy vấn nào nên ưu tiên trước</span>
                  </div>
                </div>

                {/* Interactive Audit Form */}
                {heroSuccess ? (
                  <div className="geo-form-success">
                    <div className="geo-success-icon-wrap">
                      <Check size={28} />
                    </div>
                    <h3 className="geo-success-title">Đã tiếp nhận yêu cầu kiểm tra thành công!</h3>
                    <p className="geo-success-desc">
                      Kỹ thuật viên LocalMate sẽ quét độ phủ AI cho website <strong>{heroWebsite}</strong> và gửi báo cáo chi tiết về số Zalo <strong>{heroPhone}</strong> trong vòng 2-4h làm việc.
                    </p>
                    <a
                      href={CONTACT_INFO.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="geo-success-zalo-btn"
                    >
                      <MessageSquare size={16} />
                      <span>Nhắn Zalo nhận báo cáo ưu tiên</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="geo-form">
                    {heroError && (
                      <div className="geo-form-error" role="alert">
                        {heroError}
                      </div>
                    )}

                    {/* 2 Inputs in 1 Row (Full-width responsive) */}
                    <div className="geo-form-row">
                      <div className="geo-input-group">
                        <label htmlFor="hero-website" className="geo-label">
                          Website của bạn
                        </label>
                        <div className="geo-input-wrap">
                          <Globe size={18} className="geo-field-icon" />
                          <input
                            id="hero-website"
                            type="text"
                            value={heroWebsite}
                            onChange={(e) => setHeroWebsite(e.target.value)}
                            placeholder="vd: yourbrand.vn hoặc tên doanh nghiệp"
                            className="geo-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="geo-input-group">
                        <label htmlFor="hero-phone" className="geo-label">
                          Số điện thoại / Zalo
                        </label>
                        <div className="geo-input-wrap">
                          <Phone size={18} className="geo-field-icon" />
                          <input
                            id="hero-phone"
                            type="tel"
                            value={heroPhone}
                            onChange={(e) => setHeroPhone(e.target.value)}
                            placeholder="vd: 0912 345 678 (để nhận kết quả)"
                            className="geo-input"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={heroSubmitting}
                      className="geo-submit-btn"
                    >
                      {heroSubmitting ? (
                        <span>Đang gửi thông tin phân tích...</span>
                      ) : (
                        <>
                          <Zap size={20} />
                          <span>KIỂM TRA AI VISIBILITY MIỄN PHÍ</span>
                        </>
                      )}
                    </button>

                    {/* Transparent Disclaimer */}
                    <p className="geo-audit-disclaimer">
                      <ShieldCheck size={16} className="geo-shield-icon" />
                      <span>
                        Không cam kết “ép ChatGPT lên top”. Chúng tôi đo lường hiện trạng và tối ưu những yếu tố có thể tác động.
                      </span>
                    </p>
                  </form>
                )}
              </div>

              {/* Quick Contacts under Form */}
              <div className="geo-hero-quick-contacts">
                <span className="geo-quick-hint">Cần tư vấn trực tiếp với kỹ thuật viên?</span>
                <div className="geo-quick-buttons">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    onClick={() => trackPhoneClick('hero_quick_call')}
                    className="geo-quick-btn call"
                  >
                    <PhoneCall size={15} />
                    <span>Hotline: {CONTACT_INFO.phone}</span>
                  </a>
                  <a
                    href={CONTACT_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackZaloClick('hero_quick_zalo')}
                    className="geo-quick-btn zalo"
                  >
                    <MessageSquare size={15} />
                    <span>Chat Zalo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — BẢNG GIÁ (GEO SETUP & GEO GROWTH)                             */}
      {/* ========================================================================= */}
      <section className="geo-pricing-section" id="bang-gia-geo">
        <Container size="wide">
          <div className="geo-section-header">
            <div className="geo-sub-badge">BẢNG GIÁ NIÊM YẾT MINH BẠCH</div>
            <h2 className="geo-section-title">
              BẮT ĐẦU NHỎ. THẤY PHÙ HỢP RỒI MỚI MỞ RỘNG.
            </h2>
            <p className="geo-section-desc">
              Không ép ký hợp đồng dài hạn. Bắt đầu với gói Setup chuẩn kỹ thuật một lần, khi thấy rõ tín hiệu và hiệu quả mới mở rộng sang gói duy trì tăng trưởng.
            </p>
          </div>

          <div className="geo-pricing-grid">
            {/* Card 1: GEO SETUP */}
            <div className="geo-price-card featured">
              <div className="geo-card-top-tag">
                <span>GÓI NỀN TẢNG KHỞI ĐỘNG · PHỔ BIẾN NHẤT</span>
              </div>

              <div className="geo-card-main-info">
                <h3 className="geo-card-title">GEO SETUP</h3>
                <div className="geo-price-amount">
                  2.490.000<span className="geo-price-unit">đ / lần</span>
                </div>
                <p className="geo-card-audience">
                  Dành cho doanh nghiệp đã có website và muốn bắt đầu xuất hiện tốt hơn trên AI Search.
                </p>
              </div>

              <div className="geo-card-divider" />

              <div className="geo-card-includes-block">
                <div className="geo-includes-title">Bao gồm:</div>
                <ul className="geo-feature-list">
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Audit ChatGPT, Gemini, Perplexity & Google AI</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Kiểm tra các câu hỏi khách hàng thực sự có thể hỏi AI</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>So sánh thương hiệu với 3 đối thủ</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Tối ưu entity & thông tin doanh nghiệp</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Tối ưu cấu trúc website cho AI crawler</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Schema & structured data cần thiết</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Tối ưu 5 trang quan trọng</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Xây dựng FAQ / Answer-first content</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Bộ 20 truy vấn AI để theo dõi</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Báo cáo trước & sau triển khai</span>
                  </li>
                </ul>
              </div>

              <div className="geo-card-footer">
                <div className="geo-price-summary-tag">
                  2.490.000đ — thanh toán một lần
                </div>
                <button
                  type="button"
                  onClick={() => scrollToForm('Gói GEO Setup 2.490.000đ')}
                  className="geo-card-btn primary"
                >
                  <span>BẮT ĐẦU GEO</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Card 2: GEO GROWTH */}
            <div className="geo-price-card standard">
              <div className="geo-card-top-tag neutral">
                <span>GÓI DUY TRÌ & MỞ RỘNG ĐỘ PHỦ</span>
              </div>

              <div className="geo-card-main-info">
                <h3 className="geo-card-title">GEO GROWTH</h3>
                <div className="geo-price-amount">
                  Từ 2.990.000<span className="geo-price-unit">đ / tháng</span>
                </div>
                <p className="geo-card-audience">
                  Dành cho doanh nghiệp muốn tiếp tục tăng độ phủ sau khi hoàn thành GEO Setup.
                </p>
              </div>

              <div className="geo-card-divider" />

              <div className="geo-card-includes-block">
                <div className="geo-includes-title">Bao gồm:</div>
                <ul className="geo-feature-list">
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Theo dõi AI Visibility hàng tháng</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Kiểm tra ChatGPT / Gemini / Perplexity</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Theo dõi đối thủ</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Tối ưu nội dung hiện có</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Xây dựng nội dung theo câu hỏi mua hàng</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Củng cố Brand Mention & Entity</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Theo dõi Citation / Brand Mention</span>
                  </li>
                  <li>
                    <Check size={18} className="geo-check-green" />
                    <span>Báo cáo thay đổi hàng tháng</span>
                  </li>
                </ul>
              </div>

              <div className="geo-card-footer">
                <div className="geo-no-contract-badge">
                  <ShieldCheck size={16} />
                  <span>Không bắt buộc duy trì hàng tháng.</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToForm('Gói GEO Growth từ 2.990.000đ/tháng')}
                  className="geo-card-btn secondary"
                >
                  <span>XEM WEBSITE CỦA TÔI PHÙ HỢP GÓI NÀO</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — KHÔNG CHỈ "LÊN AI" & CHỐT HẠ CONVERSION                       */}
      {/* ========================================================================= */}
      <section className="geo-intent-section">
        <Container size="wide">
          <div className="geo-section-header">
            <div className="geo-sub-badge">KHÔNG CHỈ “LÊN AI”</div>
            <h2 className="geo-section-title">
              MỤC TIÊU LÀ XUẤT HIỆN ĐÚNG LÚC KHÁCH ĐANG CHỌN NHÀ CUNG CẤP
            </h2>
          </div>

          {/* Real simulated AI search prompts */}
          <div className="geo-prompts-wrapper">
            <div className="geo-prompts-lead-badge">
              <span>Ví dụ câu hỏi khách hàng thực tế đang hỏi AI khi chuẩn bị mua hàng:</span>
            </div>

            <div className="geo-prompts-grid">
              <div className="geo-prompt-item">
                <div className="geo-prompt-avatar">
                  <Bot size={18} />
                </div>
                <div className="geo-prompt-body">
                  <span className="geo-prompt-label">Khách hỏi ChatGPT:</span>
                  <p className="geo-prompt-text">“Công ty thiết kế website cho trường mầm non nào tốt?”</p>
                </div>
              </div>

              <div className="geo-prompt-item">
                <div className="geo-prompt-avatar">
                  <Bot size={18} />
                </div>
                <div className="geo-prompt-body">
                  <span className="geo-prompt-label">Khách hỏi Gemini:</span>
                  <p className="geo-prompt-text">“Agency chạy Google Ads cho doanh nghiệp nhỏ?”</p>
                </div>
              </div>

              <div className="geo-prompt-item">
                <div className="geo-prompt-avatar">
                  <Bot size={18} />
                </div>
                <div className="geo-prompt-body">
                  <span className="geo-prompt-label">Khách hỏi Perplexity:</span>
                  <p className="geo-prompt-text">“Dịch vụ kế toán cho startup tại TP.HCM?”</p>
                </div>
              </div>

              <div className="geo-prompt-item">
                <div className="geo-prompt-avatar">
                  <Bot size={18} />
                </div>
                <div className="geo-prompt-body">
                  <span className="geo-prompt-label">Khách hỏi AI:</span>
                  <p className="geo-prompt-text">“Nên chọn đơn vị nào để làm website bán hàng?”</p>
                </div>
              </div>
            </div>

            <div className="geo-intent-explanation">
              <p>
                Chúng tôi xác định những câu hỏi có giá trị với doanh nghiệp của bạn, sau đó tối ưu website và nội dung để thương hiệu có cơ hội xuất hiện trong quá trình AI tổng hợp câu trả lời.
              </p>
            </div>
          </div>

          {/* 4 Value Outcomes: 01 to 04 */}
          <div className="geo-outcomes-container">
            <h3 className="geo-outcomes-heading">Bạn sẽ biết được:</h3>

            <div className="geo-outcomes-grid">
              {/* Point 01 */}
              <div className="geo-outcome-card">
                <div className="geo-outcome-num">01</div>
                <h4 className="geo-outcome-title">AI đang nói gì về bạn</h4>
                <p className="geo-outcome-desc">
                  Thương hiệu có xuất hiện không, xuất hiện ở đâu và được mô tả thế nào.
                </p>
              </div>

              {/* Point 02 */}
              <div className="geo-outcome-card">
                <div className="geo-outcome-num">02</div>
                <h4 className="geo-outcome-title">Đối thủ nào đang được AI nhắc đến</h4>
                <p className="geo-outcome-desc">
                  Và họ đang có những tín hiệu nào mà website bạn thiếu.
                </p>
              </div>

              {/* Point 03 */}
              <div className="geo-outcome-card">
                <div className="geo-outcome-num">03</div>
                <h4 className="geo-outcome-title">Cần làm gì trước</h4>
                <p className="geo-outcome-desc">
                  Không làm hàng trăm đầu việc SEO. Tập trung vào các trang, câu hỏi và tín hiệu có giá trị cao nhất.
                </p>
              </div>

              {/* Point 04 */}
              <div className="geo-outcome-card">
                <div className="geo-outcome-num">04</div>
                <h4 className="geo-outcome-title">Có cải thiện hay không</h4>
                <p className="geo-outcome-desc">
                  Theo dõi cùng một bộ truy vấn theo thời gian thay vì chỉ gửi screenshot đẹp.
                </p>
              </div>
            </div>
          </div>

          {/* Final Conversion Form Block */}
          <div className="geo-final-cta-card" ref={bottomFormRef}>
            <div className="geo-final-cta-content">
              <div className="geo-final-badge">BƯỚC ĐẦU TIÊN HOÀN TOÀN 0Đ</div>
              <h3 className="geo-final-title">KIỂM TRA WEBSITE TRƯỚC KHI QUYẾT ĐỊNH</h3>
              <p className="geo-final-subtitle">
                Không cần mua ngay. Kiểm tra hiện trạng trước. Kỹ thuật viên LocalMate sẽ gửi báo cáo AI Visibility miễn phí qua Zalo của bạn.
              </p>

              {bottomSuccess ? (
                <div className="geo-form-success bottom">
                  <div className="geo-success-icon-wrap">
                    <Check size={28} />
                  </div>
                  <h4 className="geo-success-title">Yêu cầu audit đã được gửi đi!</h4>
                  <p className="geo-success-desc">
                    Chúng tôi sẽ tiến hành kiểm tra cho <strong>{bottomWebsite}</strong> và gửi phân tích chi tiết tới Zalo <strong>{bottomPhone}</strong> trong vòng 2-4h.
                  </p>
                  <a
                    href={CONTACT_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="geo-success-zalo-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Mở Zalo kết nối với kỹ thuật viên</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="geo-bottom-form">
                  {bottomError && (
                    <div className="geo-form-error" role="alert">
                      {bottomError}
                    </div>
                  )}

                  <div className="geo-bottom-form-fields">
                    <div className="geo-input-group">
                      <label htmlFor="bottom-website" className="geo-label">
                        Website
                      </label>
                      <div className="geo-input-wrap">
                        <Globe size={18} className="geo-field-icon" />
                        <input
                          id="bottom-website"
                          type="text"
                          value={bottomWebsite}
                          onChange={(e) => setBottomWebsite(e.target.value)}
                          placeholder="Nhập địa chỉ website của bạn"
                          className="geo-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="geo-input-group">
                      <label htmlFor="bottom-phone" className="geo-label">
                        Số điện thoại / Zalo
                      </label>
                      <div className="geo-input-wrap">
                        <Phone size={18} className="geo-field-icon" />
                        <input
                          id="bottom-phone"
                          type="tel"
                          value={bottomPhone}
                          onChange={(e) => setBottomPhone(e.target.value)}
                          placeholder="Số điện thoại hoặc Zalo nhận báo cáo"
                          className="geo-input"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={bottomSubmitting}
                    className="geo-submit-btn large"
                  >
                    {bottomSubmitting ? (
                      <span>Đang tạo báo cáo...</span>
                    ) : (
                      <>
                        <Zap size={20} />
                        <span>NHẬN AI VISIBILITY AUDIT MIỄN PHÍ</span>
                      </>
                    )}
                  </button>

                  <div className="geo-bottom-guarantee">
                    <CheckCircle2 size={16} className="geo-check-green" />
                    <span>Không cần mua ngay. Kiểm tra hiện trạng trước.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Scoped CSS — 100% Light Mode, No Glassmorphism, Pure Solid Crisp Surfaces, Natural Full-Width Typography */}
      <style>{`
        .geo-ads-landing-page {
          background-color: #f8fafc;
          color: #1e293b;
          font-family: inherit;
          scrollbar-gutter: stable;
          overflow-x: hidden;
          width: 100%;
        }

        /* ------------------------------------------------------------- */
        /* SECTION 1 — HERO FULL-WIDTH CENTERED LAYOUT                   */
        /* ------------------------------------------------------------- */
        .geo-hero-section {
          padding-top: clamp(36px, 5.5vw, 68px);
          padding-bottom: clamp(48px, 6.5vw, 84px);
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }

        .geo-hero-fullwidth {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Category Pill Badge */
        .geo-category-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          border-radius: 9999px;
          margin-bottom: 20px;
        }

        .geo-pill-dot {
          width: 8px;
          height: 8px;
          background-color: #16a34a;
          border-radius: 50%;
          display: inline-block;
          animation: geoPulse 2s infinite;
        }

        @keyframes geoPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(22, 163, 74, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }

        .geo-pill-icon {
          color: #0d7647;
        }

        .geo-pill-text {
          font-size: 13px;
          font-weight: 800;
          color: #0d7647;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        /* Main Full-Width Headline */
        .geo-main-title {
          width: 100%;
          margin: 0 0 18px 0;
          font-size: clamp(28px, 4.2vw, 46px);
          font-weight: 900;
          line-height: 1.25;
          letter-spacing: -0.025em;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .geo-title-line {
          display: block;
          width: 100%;
          word-break: keep-all;
          overflow-wrap: normal;
          text-wrap: balance;
        }

        .geo-title-line.line-1 {
          color: #0f172a;
        }

        .geo-title-line.line-2 {
          color: #0d7647;
        }

        /* Sub-headline */
        .geo-hero-desc {
          font-size: clamp(16px, 1.8vw, 19px);
          line-height: 1.65;
          color: #334155;
          margin: 0 0 22px 0;
          max-width: 820px;
          text-wrap: pretty;
        }

        .geo-hero-desc strong {
          color: #0f172a;
          font-weight: 750;
        }

        /* Platform Badges */
        .geo-platform-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }

        .geo-badge-label {
          font-size: 12px;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .geo-badge-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .geo-ai-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 650;
          color: #0f172a;
        }

        .geo-ai-icon-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .geo-ai-icon-dot.chatgpt { background-color: #10a37f; }
        .geo-ai-icon-dot.gemini { background-color: #1a73e8; }
        .geo-ai-icon-dot.perplexity { background-color: #20b2aa; }
        .geo-ai-icon-dot.google-ai { background-color: #ea4335; }

        /* ------------------------------------------------------------- */
        /* HERO AUDIT CARD (FULL-WIDTH CENTERPIECE)                      */
        /* ------------------------------------------------------------- */
        .geo-hero-card-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
        }

        .geo-audit-card {
          background-color: #ffffff;
          border: 2px solid #0d7647;
          border-radius: 20px;
          padding: clamp(24px, 4vw, 36px);
          box-shadow: 0 16px 36px -8px rgba(13, 118, 71, 0.16), 0 6px 14px -4px rgba(13, 118, 71, 0.06);
          text-align: left;
        }

        .geo-audit-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .geo-audit-icon-wrap {
          width: 48px;
          height: 48px;
          background-color: #edf7f1;
          color: #0d7647;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .geo-audit-header-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .geo-audit-title {
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
          word-break: keep-all;
        }

        .geo-audit-subtitle {
          font-size: 14.5px;
          font-weight: 650;
          color: #0d7647;
          margin: 0;
        }

        /* 4 Checkpoints Grid */
        .geo-audit-checkpoints-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 20px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 24px;
        }

        @media (max-width: 640px) {
          .geo-audit-checkpoints-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 14px 16px;
          }
        }

        .geo-checkpoint-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          line-height: 1.45;
          color: #1e293b;
          font-weight: 550;
        }

        .geo-check-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Form Controls */
        .geo-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .geo-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 640px) {
          .geo-form-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        .geo-form-error {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 13.5px;
          line-height: 1.45;
        }

        .geo-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .geo-label {
          font-size: 14px;
          font-weight: 750;
          color: #0f172a;
        }

        .geo-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .geo-field-icon {
          position: absolute;
          left: 14px;
          color: #64748b;
          pointer-events: none;
        }

        .geo-input {
          width: 100%;
          min-height: 52px;
          padding: 12px 14px 12px 44px;
          font-size: 15.5px;
          color: #0f172a;
          background-color: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .geo-input:focus {
          border-color: #0d7647;
          box-shadow: 0 0 0 3px rgba(13, 118, 71, 0.15);
        }

        .geo-submit-btn {
          width: 100%;
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #0d7647;
          color: #ffffff;
          font-size: 16px;
          font-weight: 850;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          letter-spacing: 0.02em;
          box-shadow: 0 6px 16px rgba(13, 118, 71, 0.28);
          transition: background-color 0.15s ease, transform 0.05s ease;
          padding: 14px 20px;
          box-sizing: border-box;
        }

        .geo-submit-btn:hover:not(:disabled) {
          background-color: #095935;
        }

        .geo-submit-btn:active:not(:disabled) {
          transform: translateY(1px);
        }

        .geo-submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .geo-submit-btn.large {
          min-height: 56px;
          font-size: 16.5px;
        }

        .geo-audit-disclaimer {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          line-height: 1.5;
          color: #64748b;
          margin: 4px 0 0 0;
          text-align: center;
        }

        .geo-shield-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Success Message */
        .geo-form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          padding: 28px 20px;
          background-color: #edf7f1;
          border: 1.5px solid #c6ebd4;
          border-radius: 14px;
        }

        .geo-success-icon-wrap {
          width: 52px;
          height: 52px;
          background-color: #0d7647;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .geo-success-title {
          font-size: 19px;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
        }

        .geo-success-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #334155;
          margin: 0;
          max-width: 600px;
        }

        .geo-success-zalo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #0284c7;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 22px;
          border-radius: 10px;
          font-size: 14.5px;
          font-weight: 750;
          min-height: 46px;
          box-sizing: border-box;
          margin-top: 4px;
        }

        /* Quick Contacts under Hero */
        .geo-hero-quick-contacts {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
        }

        .geo-quick-hint {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .geo-quick-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .geo-quick-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 650;
          text-decoration: none;
          min-height: 44px;
          box-sizing: border-box;
          transition: background-color 0.15s ease;
        }

        .geo-quick-btn.call {
          background-color: #ffffff;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .geo-quick-btn.call:hover {
          background-color: #f1f5f9;
        }

        .geo-quick-btn.zalo {
          background-color: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
        }

        .geo-quick-btn.zalo:hover {
          background-color: #bae6fd;
        }

        /* ------------------------------------------------------------- */
        /* SECTION 2 — BẢNG GIÁ                                          */
        /* ------------------------------------------------------------- */
        .geo-pricing-section {
          padding-top: clamp(48px, 6vw, 84px);
          padding-bottom: clamp(48px, 6vw, 84px);
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .geo-section-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto clamp(32px, 5vw, 56px) auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .geo-sub-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          padding: 4px 14px;
          border-radius: 9999px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .geo-section-title {
          font-size: clamp(24px, 3.8vw, 36px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.3;
          margin: 0;
          word-break: keep-all;
          text-wrap: balance;
        }

        .geo-section-desc {
          font-size: clamp(15px, 1.6vw, 17px);
          color: #475569;
          line-height: 1.6;
          margin: 0;
          text-wrap: pretty;
        }

        .geo-pricing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          align-items: stretch;
          max-width: 1040px;
          margin: 0 auto;
        }

        @media (max-width: 840px) {
          .geo-pricing-grid {
            grid-template-columns: 1fr;
            max-width: 540px;
          }
        }

        .geo-price-card {
          background-color: #ffffff;
          border-radius: 18px;
          padding: clamp(24px, 3.5vw, 36px);
          display: flex;
          flex-direction: column;
          position: relative;
          box-sizing: border-box;
          box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03);
        }

        .geo-price-card.featured {
          border: 2px solid #0d7647;
          box-shadow: 0 16px 32px -8px rgba(13, 118, 71, 0.16), 0 4px 8px -2px rgba(13, 118, 71, 0.05);
        }

        .geo-price-card.standard {
          border: 1.5px solid #cbd5e1;
        }

        .geo-card-top-tag {
          align-self: flex-start;
          font-size: 12px;
          font-weight: 800;
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          padding: 4px 12px;
          border-radius: 6px;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }

        .geo-card-top-tag.neutral {
          color: #475569;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
        }

        .geo-card-title {
          font-size: 24px;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .geo-price-amount {
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 900;
          color: #0d7647;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .geo-price-unit {
          font-size: 16px;
          font-weight: 600;
          color: #64748b;
          margin-left: 4px;
        }

        .geo-card-audience {
          font-size: 14.5px;
          line-height: 1.55;
          color: #334155;
          margin: 0;
          min-height: 46px;
        }

        .geo-card-divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 20px 0;
        }

        .geo-card-includes-block {
          flex-grow: 1;
          margin-bottom: 24px;
        }

        .geo-includes-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .geo-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .geo-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          line-height: 1.45;
          color: #1e293b;
        }

        .geo-check-green {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .geo-card-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }

        .geo-price-summary-tag {
          font-size: 13.5px;
          font-weight: 750;
          color: #0d7647;
          background-color: #edf7f1;
          border-radius: 8px;
          padding: 8px 12px;
          text-align: center;
        }

        .geo-no-contract-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 650;
          color: #047857;
          background-color: #ecfdf5;
          border-radius: 8px;
          padding: 8px 12px;
        }

        .geo-card-btn {
          width: 100%;
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 12px;
          font-size: 15.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
          padding: 12px 20px;
          box-sizing: border-box;
          border: none;
        }

        .geo-card-btn.primary {
          background-color: #0d7647;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.22);
        }

        .geo-card-btn.primary:hover {
          background-color: #095935;
        }

        .geo-card-btn.secondary {
          background-color: #ffffff;
          color: #0f172a;
          border: 2px solid #0f172a;
        }

        .geo-card-btn.secondary:hover {
          background-color: #0f172a;
          color: #ffffff;
        }

        /* ------------------------------------------------------------- */
        /* SECTION 3 — KHÔNG CHỈ "LÊN AI"                                */
        /* ------------------------------------------------------------- */
        .geo-intent-section {
          padding-top: clamp(48px, 6vw, 84px);
          padding-bottom: clamp(56px, 7vw, 96px);
          background-color: #ffffff;
        }

        .geo-prompts-wrapper {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: clamp(20px, 3.5vw, 36px);
          margin-bottom: clamp(40px, 5vw, 64px);
        }

        .geo-prompts-lead-badge {
          margin-bottom: 18px;
        }

        .geo-prompts-lead-badge span {
          font-size: 14.5px;
          font-weight: 750;
          color: #0f172a;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 8px 16px;
          border-radius: 8px;
          display: inline-block;
        }

        .geo-prompts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .geo-prompts-grid {
            grid-template-columns: 1fr;
          }
        }

        .geo-prompt-item {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 4px solid #0d7647;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04);
        }

        .geo-prompt-avatar {
          width: 34px;
          height: 34px;
          background-color: #edf7f1;
          color: #0d7647;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .geo-prompt-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .geo-prompt-label {
          font-size: 12px;
          font-weight: 750;
          color: #64748b;
          text-transform: uppercase;
        }

        .geo-prompt-text {
          font-size: 15.5px;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          line-height: 1.45;
          font-style: italic;
        }

        .geo-intent-explanation {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .geo-intent-explanation p {
          font-size: clamp(15.5px, 1.8vw, 17.5px);
          line-height: 1.65;
          color: #1e293b;
          margin: 0;
          font-weight: 500;
        }

        /* 4 Value Outcomes (01 to 04) */
        .geo-outcomes-container {
          margin-bottom: clamp(48px, 6vw, 76px);
        }

        .geo-outcomes-heading {
          font-size: 24px;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 28px 0;
          text-align: center;
        }

        .geo-outcomes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        @media (max-width: 991px) {
          .geo-outcomes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .geo-outcomes-grid {
            grid-template-columns: 1fr;
          }
        }

        .geo-outcome-card {
          background-color: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }

        .geo-outcome-card:hover {
          border-color: #0d7647;
          transform: translateY(-2px);
        }

        .geo-outcome-num {
          font-size: 20px;
          font-weight: 900;
          color: #0d7647;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          width: 46px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.05em;
        }

        .geo-outcome-title {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.35;
        }

        .geo-outcome-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* Final Conversion Box */
        .geo-final-cta-card {
          background-color: #0f172a;
          color: #ffffff;
          border-radius: 22px;
          padding: clamp(32px, 5vw, 54px);
          max-width: 880px;
          margin: 0 auto;
          box-shadow: 0 24px 36px -12px rgba(15, 23, 42, 0.28);
        }

        .geo-final-cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
        }

        .geo-final-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          color: #4ade80;
          background-color: rgba(74, 222, 128, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.3);
          padding: 4px 14px;
          border-radius: 9999px;
          letter-spacing: 0.05em;
        }

        .geo-final-title {
          font-size: clamp(24px, 3.8vw, 34px);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
          word-break: keep-all;
          text-wrap: balance;
        }

        .geo-final-subtitle {
          font-size: clamp(14.5px, 1.6vw, 16.5px);
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0 0 18px 0;
          max-width: 640px;
          text-wrap: pretty;
        }

        .geo-bottom-form {
          width: 100%;
          max-width: 660px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .geo-bottom-form .geo-label {
          color: #ffffff;
        }

        .geo-bottom-form-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 640px) {
          .geo-bottom-form-fields {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        .geo-bottom-form .geo-input {
          background-color: #ffffff;
          color: #0f172a;
          border: 1.5px solid #ffffff;
        }

        .geo-bottom-form .geo-input:focus {
          border-color: #4ade80;
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
        }

        .geo-bottom-form .geo-submit-btn {
          background-color: #16a34a;
        }

        .geo-bottom-form .geo-submit-btn:hover:not(:disabled) {
          background-color: #15803d;
        }

        .geo-bottom-guarantee {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 14px;
          color: #94a3b8;
          margin-top: 4px;
        }

        .geo-form-success.bottom {
          background-color: #ffffff;
          color: #0f172a;
          border-color: #ffffff;
          max-width: 600px;
          width: 100%;
        }

        /* ------------------------------------------------------------- */
        /* MOBILE OPTIMIZATIONS (ADS FOCUSED)                            */
        /* ------------------------------------------------------------- */
        @media (max-width: 768px) {
          .geo-hero-section {
            padding-top: 24px;
            padding-bottom: 38px;
          }

          .geo-main-title {
            font-size: 23px;
            gap: 4px;
          }

          .geo-hero-desc {
            font-size: 15px;
          }

          .geo-audit-card {
            padding: 20px 16px;
          }

          .geo-audit-title {
            font-size: 17px;
          }

          .geo-price-card {
            padding: 22px 18px;
          }

          .geo-card-title {
            font-size: 22px;
          }

          .geo-price-amount {
            font-size: 30px;
          }

          .geo-final-cta-card {
            padding: 26px 18px;
          }

          .geo-final-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};
