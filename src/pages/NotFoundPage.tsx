import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { useRouter } from '../components/layout/Router';
import { SEOHead } from '../components/seo/SEOHead';
import { Search, Home, BookOpen, PhoneCall } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#fbfcfb', minHeight: '65vh', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
      <SEOHead
        title="404 - Không tìm thấy trang | LocalMate"
        description="Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển sang địa chỉ mới."
        canonicalPath="/404"
        noIndex={true}
      />
      <Container size="md">
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: '#fef2f2',
              color: '#dc2626',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}
          >
            <Search size={36} />
          </div>

          <span
            style={{
              display: 'inline-block',
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#dc2626',
              backgroundColor: '#fee2e2',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Mã lỗi 404 — Không tìm thấy trang
          </span>

          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '1rem',
              lineHeight: 1.25
            }}
          >
            Nội dung này không tồn tại hoặc đã thay đổi đường dẫn
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              maxWidth: '540px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.6
            }}
          >
            Đường link bạn vừa truy cập có thể đã được cập nhật lại theo cấu trúc mới của LocalMate. Hãy kiểm tra lại địa chỉ hoặc chọn các liên kết hữu ích bên dưới.
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
              onClick={() => navigate('/')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
            >
              <Home size={18} />
              Về Trang chủ
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate('/kien-thuc')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
            >
              <BookOpen size={18} />
              Kho kiến thức thực chiến
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate('/lien-he')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem' }}
            >
              <PhoneCall size={18} />
              Hỗ trợ khẩn cấp
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
