import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { cmsClient } from '../cms/services/cmsClient';
import { PostEntity } from '../cms/types';
import { useRouter } from '../components/layout/Router';
import { Clock, Calendar, User, BookOpen, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface PostPreviewPageProps {
  postId: number;
}

export const PostPreviewPage: React.FC<PostPreviewPageProps> = ({ postId }) => {
  const { navigate } = useRouter();
  const [post, setPost] = useState<PostEntity | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    loadPreview();
  }, [postId]);

  const loadPreview = async () => {
    setIsLoading(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token') || undefined;
      const res = await cmsClient.getPreviewPost(postId, token);
      if (res.success && res.data?.post) {
        setPost(res.data.post);
      } else {
        setErrorMsg(res.error?.message || 'Không tìm thấy bản nháp bài viết');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Lỗi khi tải bản xem trước');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <p style={{ fontSize: '1.1rem', color: '#64748b' }}>Đang tải bản xem trước bài viết...</p>
        </Container>
      </div>
    );
  }

  if (errorMsg || !post) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <AlertTriangle size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
            {errorMsg || 'Không thể xem trước bài viết'}
          </h1>
          <p style={{ color: '#64748b', margin: '1rem 0 2rem 0' }}>
            Có thể bài viết không tồn tại hoặc phiên xem trước không hợp lệ.
          </p>
          <Button variant="primary" onClick={() => navigate('/admin/posts')}>
            Quay lại Quản trị
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {/* Draft Preview Warning Banner */}
      <div
        style={{
          backgroundColor: '#fef3c7',
          borderBottom: '2px solid #f59e0b',
          color: '#92400e',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          fontWeight: 700,
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle size={18} color="#d97706" />
          <span>CHẾ ĐỘ XEM TRƯỚC BẢN NHÁP (DRAFT PREVIEW) — Bài viết chưa được xuất bản chính thức</span>
        </div>

        <button
          onClick={() => window.close()}
          style={{
            padding: '0.35rem 0.75rem',
            backgroundColor: '#ffffff',
            border: '1px solid #d97706',
            borderRadius: '6px',
            color: '#92400e',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          Đóng cửa sổ
        </button>
      </div>

      <SEOHead
        title={`[XEM TRƯỚC] ${post.seo_title || post.title}`}
        description={post.seo_description || post.excerpt}
        canonicalPath={`/kien-thuc/${post.slug}`}
        noIndex={true}
      />

      <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Kiến thức', url: '/kien-thuc' },
              { name: post.category_name || 'Chuyên mục', url: '/kien-thuc' },
              { name: post.title, url: `/kien-thuc/${post.slug}` }
            ]}
          />

          <article style={{ maxWidth: '820px', margin: '0 auto' }}>
            {/* Category & Read time */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {post.category_name || 'Kiến thức'}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={14} /> {post.reading_time || '5 phút đọc'}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={14} /> Trạng thái: <strong>{post.status.toUpperCase()}</strong>
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
                color: 'var(--color-text)',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}
            >
              {post.title}
            </h1>

            {/* Author */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.85rem 1.25rem',
                backgroundColor: '#f8fbfa',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
                <User size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text)' }}>
                  {post.author_name || 'Ban biên tập LocalMate'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Chuyên gia tư vấn LocalMate</div>
              </div>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  fontSize: '1.025rem',
                  color: 'var(--color-text)',
                  lineHeight: 1.65,
                  fontWeight: 500,
                  marginBottom: '2rem'
                }}
              >
                {post.excerpt}
              </div>
            )}

            {/* Featured Image */}
            {post.featured_image_url && (
              <div style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Article Rendered Body */}
            <div
              className="article-rendered-body"
              dangerouslySetInnerHTML={{ __html: post.rendered_html }}
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#334155'
              }}
            />

            {/* Contextual CTA */}
            <div
              style={{
                backgroundColor: '#f8fbfa',
                border: '2px solid var(--color-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                marginTop: '3.5rem',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                Cần Triển Khai Cho Doanh Nghiệp Của Bạn?
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                Đội ngũ LocalMate hỗ trợ tư vấn giải pháp thực tế, lên kế hoạch chi tiết và bàn giao trọn gói không phát sinh chi phí.
              </p>
              <Button variant="primary" size="lg" onClick={() => navigate('/lien-he')}>
                Nhận Tư Vấn Miễn Phí Ngay
              </Button>
            </div>
          </article>
        </Container>
      </div>
    </div>
  );
};
