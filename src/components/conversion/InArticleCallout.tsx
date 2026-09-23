import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Search,
  Layout,
  TrendingUp,
  Users
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { trackCTAClick, trackZaloClick, trackPhoneClick } from '../../analytics/tracker';

export type CalloutTopic = 'web-demo' | 'maps-audit' | 'ads-optimization' | 'crm-setup' | 'custom';

export interface InArticleCalloutProps {
  topic?: CalloutTopic;
  title?: string;
  subtitle?: string;
  badge?: string;
  bulletPoints?: string[];
  ctaLabel?: string;
  serviceName?: string;
  notePrefix?: string;
  onOpenLeadModal?: (serviceName: string, initialNote?: string) => void;
  className?: string;
}

interface TopicConfig {
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  ctaLabel: string;
  serviceName: string;
  notePrefix: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  badgeBg: string;
  badgeColor: string;
}

const TOPIC_PRESETS: Record<Exclude<CalloutTopic, 'custom'>, TopicConfig> = {
  'web-demo': {
    icon: <Layout size={20} />,
    badge: 'XEM TRƯỚC MIỄN PHÍ • BẢN DEMO TỪ 490K',
    title: 'Dựng Bản Mẫu Web Ngành Nghề Trong 24H (Chỉ Từ 490k)',
    subtitle: 'Chưa cần thanh toán vội! Kỹ thuật viên LocalMate hỗ trợ dựng sẵn demo website chuẩn ngành để bạn duyệt thử trên điện thoại. Ưng ý mới triển khai.',
    bulletPoints: [
      'Trải nghiệm trực tiếp giao diện trên điện thoại cá nhân trong 24h',
      'Cam kết không phát sinh chi phí, không ép buộc đặt cọc trước',
      'Tích hợp sẵn nút gọi Hotline & nhắn Zalo 1 chạm tăng khách gọi'
    ],
    ctaLabel: 'Đăng ký nhận Demo Web 490k',
    serviceName: 'Thiết kế Website & Landing Page theo ngành',
    notePrefix: 'Đăng ký nhận Web demo 490k cho ngành: ',
    accentColor: '#0d7647',
    bgColor: '#ffffff',
    borderColor: '#bbf7d0',
    badgeBg: '#f0fdf4',
    badgeColor: '#166534'
  },
  'maps-audit': {
    icon: <Search size={20} />,
    badge: 'LOCAL SEO • KIỂM TRA ĐIỂM MÙ 0 ĐỒNG',
    title: 'Kiểm Tra Vị Trí & Thứ Hạng Google Maps 0đ Cho Tiệm',
    subtitle: 'Bạn có chắc khách hàng quanh bán kính 3–5km đang tìm thấy cơ sở của bạn trước đối thủ? Nhận bản quét hiển thị và chẩn đoán lỗi hồ sơ miễn phí.',
    bulletPoints: [
      'Quét thứ hạng từ khóa dịch vụ tại khu vực quanh tiệm',
      'Phát hiện lỗi trùng lặp địa chỉ hoặc cảnh báo vi phạm chính sách Google',
      'Kỹ thuật viên tư vấn 1-1 cách tối ưu để khách lướt Maps là thấy'
    ],
    ctaLabel: 'Nhận kiểm tra Maps 0đ ngay',
    serviceName: 'Xác minh & Tối ưu Google Maps (Local SEO)',
    notePrefix: 'Yêu cầu kiểm tra vị trí Google Maps cho cơ sở: ',
    accentColor: '#0284c7',
    bgColor: '#ffffff',
    borderColor: '#bae6fd',
    badgeBg: '#f0f9ff',
    badgeColor: '#075985'
  },
  'ads-optimization': {
    icon: <TrendingUp size={20} />,
    badge: 'CHỐNG LÃNG PHÍ • TỐI ƯU CHI PHÍ ADS',
    title: 'Rà Soát & Tối Ưu Chiến Dịch Quảng Cáo Google / Facebook',
    subtitle: 'Đốt tiền chạy quảng cáo nhưng toàn tin nhắn rác hoặc click ảo? Chuyên viên LocalMate giúp bạn rà soát chiến dịch, chặn click tặc và định vị lại khách thật.',
    bulletPoints: [
      'Audit ngân sách, loại bỏ các từ khóa và vị trí hiển thị không sinh ra đơn',
      'Chuẩn hóa trang đích (Landing Page) để tăng tỷ lệ khách bấm gọi Zalo/SĐT',
      'Minh bạch dữ liệu, kiểm soát từng đồng chi phí chi ra có hiệu quả'
    ],
    ctaLabel: 'Rà soát tài khoản Ads miễn phí',
    serviceName: 'Chạy quảng cáo Google / Facebook chuyển đổi',
    notePrefix: 'Yêu cầu rà soát tối ưu tài khoản Ads: ',
    accentColor: '#d97706',
    bgColor: '#ffffff',
    borderColor: '#fde68a',
    badgeBg: '#fffbeb',
    badgeColor: '#92400e'
  },
  'crm-setup': {
    icon: <Users size={20} />,
    badge: 'SỐ HÓA BÁN HÀNG • KHÔNG SÓT KHÁCH',
    title: 'Setup Hệ Thống Quản Lý Khách Hàng & Chăm Sóc Tự Động',
    subtitle: 'Đừng để tin nhắn khách hàng trên Zalo và Fanpage bị trôi lãng phí. Thiết lập hệ thống lưu data, nhắc lịch hẹn và chăm sóc khách cũ tinh gọn cho tiệm.',
    bulletPoints: [
      'Gom tin nhắn từ Website, Zalo OA và Fanpage về chung một nơi quản lý',
      'Tự động gửi thông báo lịch hẹn, chúc mừng sinh nhật, ưu đãi khách quen',
      'Cài đặt tinh gọn, nhân viên học 15 phút là dùng được ngay'
    ],
    ctaLabel: 'Tư vấn giải pháp CRM tinh gọn',
    serviceName: 'Gói số hóa & Marketing tổng thể cho tiệm',
    notePrefix: 'Tư vấn setup CRM quản lý khách hàng cho tiệm: ',
    accentColor: '#7c3aed',
    bgColor: '#ffffff',
    borderColor: '#ddd6fe',
    badgeBg: '#f5f3ff',
    badgeColor: '#5b21b6'
  }
};

export const InArticleCallout: React.FC<InArticleCalloutProps> = ({
  topic = 'web-demo',
  title,
  subtitle,
  badge,
  bulletPoints,
  ctaLabel,
  serviceName,
  notePrefix,
  onOpenLeadModal,
  className = ''
}) => {
  const preset = topic !== 'custom' ? TOPIC_PRESETS[topic] : null;

  const displayTitle = title || preset?.title || 'Giải Pháp Số Hóa & Tăng Khách Hàng Thực Tế';
  const displaySubtitle = subtitle || preset?.subtitle || 'Liên hệ kỹ thuật viên LocalMate để được tư vấn trực tiếp và nhận bản kế hoạch phù hợp với tiệm.';
  const displayBadge = badge || preset?.badge || 'TƯ VẤN KỸ THUẬT 0 ĐỒNG';
  const displayBullets = bulletPoints || preset?.bulletPoints || [
    'Tư vấn trực tiếp 1-1 từ kỹ thuật viên có kinh nghiệm thực chiến',
    'Báo giá trọn gói minh bạch, không phát sinh chi phí ẩn',
    'Hỗ trợ chu đáo trong suốt quá trình vận hành'
  ];
  const displayCta = ctaLabel || preset?.ctaLabel || 'Kể việc bạn đang cần • Nhận tư vấn 0đ';
  const targetService = serviceName || preset?.serviceName || 'Tư vấn giải pháp Website & Marketing';
  const initialNote = (notePrefix || preset?.notePrefix || 'Đăng ký tư vấn từ bài viết: ') + displayTitle;

  const borderColor = preset?.borderColor || '#e2e8f0';
  const badgeBg = preset?.badgeBg || '#edf7f1';
  const badgeColor = preset?.badgeColor || '#0d7647';
  const icon = preset?.icon || <Sparkles size={20} />;

  const handleCtaClick = () => {
    trackCTAClick(displayCta, `in_article_callout_${topic}`);
    if (onOpenLeadModal) {
      onOpenLeadModal(targetService, initialNote);
    } else {
      // Fallback: nếu chưa inject callback, mở Zalo
      window.open(CONTACT_INFO.zaloUrl, '_blank');
    }
  };

  const handleZaloClick = () => {
    trackZaloClick(`in_article_callout_${topic}`);
  };

  const handleCallClick = () => {
    trackPhoneClick(`in_article_callout_${topic}`);
  };

  return (
    <aside
      className={`in-article-callout ${className}`}
      aria-label="Khối tư vấn dịch vụ theo ngữ cảnh"
      role="complementary"
    >
      <div className="callout-card" style={{ borderColor }}>
        {/* Top Header Badge */}
        <div className="callout-header">
          <span
            className="callout-badge"
            style={{ backgroundColor: badgeBg, color: badgeColor }}
          >
            <span className="badge-icon">{icon}</span>
            <span>{displayBadge}</span>
          </span>
        </div>

        {/* Headline & Description */}
        <h3 className="callout-title">{displayTitle}</h3>
        <p className="callout-subtitle">{displaySubtitle}</p>

        {/* Benefit Bullet Points */}
        <ul className="callout-bullets" role="list">
          {displayBullets.map((item, idx) => (
            <li key={idx} className="bullet-item">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span className="bullet-text">{item}</span>
            </li>
          ))}
        </ul>

        {/* Action Row */}
        <div className="callout-actions">
          {/* Primary Action Button (Triggers LeadModal) */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="btn-callout-primary"
            aria-label={displayCta}
          >
            <span>{displayCta}</span>
            <ArrowRight size={17} className="action-arrow" />
          </button>

          {/* Secondary Action: Direct Zalo Chat */}
          <a
            href={CONTACT_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleZaloClick}
            className="btn-callout-secondary"
            aria-label="Nhắn Zalo trao đổi trực tiếp với kỹ thuật viên"
          >
            <MessageCircle size={17} />
            <span>Chat Zalo tư vấn ngay</span>
          </a>
        </div>

        {/* Reassurance Footer Bar */}
        <div className="callout-footer">
          <div className="reassurance-item">
            <ShieldCheck size={14} className="reassurance-icon" />
            <span>Phản hồi sớm trong giờ làm việc</span>
          </div>
          <span className="sep-dot">•</span>
          <div className="reassurance-item">
            <span>Không ép buộc mua dịch vụ</span>
          </div>
          <span className="sep-dot">•</span>
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            onClick={handleCallClick}
            className="hotline-mini-link"
          >
            <PhoneCall size={12} />
            <span>Hotline: {CONTACT_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>

      <style>{`
        /* In-Article Callout Box — Strict Light Mode & NO Glassmorphism */
        .in-article-callout {
          margin: 2.5rem 0;
          clear: both;
          width: 100%;
          box-sizing: border-box;
        }

        .callout-card {
          background-color: #ffffff;
          border-width: 1.5px;
          border-style: solid;
          border-radius: 16px;
          padding: clamp(1.25rem, 3.5vw, 1.75rem);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.03);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .callout-card:hover {
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        .callout-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.85rem;
        }

        .callout-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          text-transform: uppercase;
        }

        .badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .callout-title {
          font-size: clamp(1.15rem, 2.5vw, 1.35rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
          line-height: 1.35;
          letter-spacing: -0.01em;
          text-wrap: pretty;
        }

        .callout-subtitle {
          font-size: 0.925rem;
          color: #475569;
          margin: 0 0 1.15rem 0;
          line-height: 1.6;
          text-wrap: pretty;
        }

        .callout-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 1.35rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.875rem;
          color: #1e293b;
          line-height: 1.5;
        }

        .bullet-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .bullet-text {
          font-weight: 600;
        }

        .callout-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        /* Primary Button */
        .btn-callout-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 46px;
          padding: 0.65rem 1.35rem;
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 0.925rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          user-select: none;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.25);
          transition: background-color 0.15s ease, transform 0.12s ease;
        }

        .btn-callout-primary:hover {
          background-color: #095935;
          transform: translateY(-1px);
        }

        .btn-callout-primary:active {
          transform: scale(0.98);
        }

        .action-arrow {
          transition: transform 0.15s ease;
        }

        .btn-callout-primary:hover .action-arrow {
          transform: translateX(3px);
        }

        /* Secondary Button (Zalo) */
        .btn-callout-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          min-height: 46px;
          padding: 0.65rem 1.15rem;
          background-color: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }

        .btn-callout-secondary:hover {
          background-color: #dbeafe;
          border-color: #93c5fd;
        }

        /* Reassurance Footer */
        .callout-footer {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: #64748b;
          padding-top: 0.75rem;
          border-top: 1px solid #f1f5f9;
        }

        .reassurance-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-weight: 500;
        }

        .reassurance-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .sep-dot {
          color: #cbd5e1;
        }

        .hotline-mini-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #047857;
          text-decoration: none;
          font-weight: 700;
        }

        .hotline-mini-link:hover {
          text-decoration: underline;
        }

        /* Mobile Optimization */
        @media (max-width: 640px) {
          .callout-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-callout-primary,
          .btn-callout-secondary {
            width: 100%;
          }
          .callout-footer {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </aside>
  );
};

export default InArticleCallout;
