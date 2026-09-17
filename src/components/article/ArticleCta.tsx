import React from 'react';
import { useRouter } from '../layout/Router';
import { Button } from '../ui/Button';
import { Sparkles, PhoneCall } from 'lucide-react';

export interface ArticleCtaProps {
  articleTitle?: string;
  onOpenConsultForm?: (serviceName?: string) => void;
  badgeText?: string;
  headline?: string;
  description?: string;
}

export const ArticleCta: React.FC<ArticleCtaProps> = ({
  articleTitle,
  onOpenConsultForm,
  badgeText = 'GIẢI PHÁP THỰC TẾ CHO CƠ SỞ CỦA BẠN',
  headline = 'Cần Triển Khai Bài Bản Ngay Cho Cơ Sở Của Bạn?',
  description = 'Thay vì tự mày mò mất nhiều thời gian, LocalMate giúp bạn thiết lập website tinh gọn, tối ưu Google Maps chuẩn vị trí và lên chiến dịch đón khách quanh khu vực với cam kết minh bạch và hỗ trợ tận tâm.'
}) => {
  const { navigate } = useRouter();

  const handleConsultClick = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(articleTitle ? `Tư vấn từ bài viết: ${articleTitle}` : 'Tư vấn giải pháp LocalMate');
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section
      aria-label="Kêu gọi hành động"
      style={{
        marginTop: '3.5rem',
        padding: '2rem 1.75rem',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '14px',
        textAlign: 'center',
        boxShadow: '0 4px 16px -2px rgba(13, 118, 71, 0.05)'
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.8rem',
          fontWeight: 800,
          color: '#0d7647',
          backgroundColor: '#ffffff',
          padding: '0.3rem 0.85rem',
          borderRadius: '9999px',
          marginBottom: '1rem',
          border: '1px solid #c6ebd4'
        }}
      >
        <Sparkles size={14} />
        <span>{badgeText}</span>
      </div>

      <h2
        style={{
          fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
          fontWeight: 800,
          color: '#0f172a',
          marginBottom: '0.75rem',
          textWrap: 'pretty'
        }}
      >
        {headline}
      </h2>

      <p
        style={{
          fontSize: '0.95rem',
          color: '#334155',
          maxWidth: '600px',
          margin: '0 auto 1.75rem auto',
          lineHeight: 1.65,
          textWrap: 'pretty'
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={handleConsultClick}
        >
          Nhận Tư Vấn & Dựng Bản Demo 0đ
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            window.location.href = 'tel:0834422439';
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <PhoneCall size={16} />
          <span>Gọi Hotline: 0834.422.439</span>
        </Button>
      </div>
    </section>
  );
};
