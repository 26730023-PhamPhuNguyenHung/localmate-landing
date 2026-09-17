import React, { useState, useMemo } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { Link, useRouter } from '../components/layout/Router';
import { 
  getAllArticles, 
  preloadArticle, 
  ArticleMetadata 
} from '../data/articlesData';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Filter,
  X,
  HelpCircle,
  TrendingUp,
  Layout,
  MapPin,
  Target,
  Workflow
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// Curated high-resolution Unsplash photography corresponding to local business topics
const TOPIC_THUMBNAILS: Record<string, string[]> = {
  'website': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop'
  ],
  'google-maps': [
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
  ],
  'local-seo': [
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
  ],
  'google-ads': [
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551836022-4a4c74074554?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop'
  ],
  'crm-automation': [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
  ]
};

export interface TopicClusterDefinition {
  slug: string;
  name: string;
  categorySlugs: string[]; // danh sách category tương ứng
  description: string;
  count: number;
}

export const TOPIC_CLUSTERS: TopicClusterDefinition[] = [
  {
    slug: 'all',
    name: 'Tất cả bài viết',
    categorySlugs: ['all'],
    description: 'Toàn bộ 30 bài viết thực chiến tăng trưởng kinh doanh địa phương',
    count: 30
  },
  {
    slug: 'website',
    name: 'Nền Tảng Website',
    categorySlugs: ['website'],
    description: 'Thiết kế, bóc tách chi phí, trang đích và tối ưu tỷ lệ chuyển đổi khách hàng',
    count: 6
  },
  {
    slug: 'google-maps',
    name: 'Google Maps & GBP',
    categorySlugs: ['google-maps'],
    description: 'Tạo lập, xác minh địa điểm, tối ưu hồ sơ và tăng đánh giá 5 sao bền vững',
    count: 6
  },
  {
    slug: 'local-seo',
    name: 'SEO Địa Phương',
    categorySlugs: ['local-seo'],
    description: 'Chiếm lĩnh top tìm kiếm lân cận, đồng bộ NAP, Citation và Entity thực thể',
    count: 6
  },
  {
    slug: 'google-ads',
    name: 'Quảng Cáo Google Ads',
    categorySlugs: ['google-ads'],
    description: 'Đón đầu khách hàng có nhu cầu gấp, tối ưu ngân sách hàng ngày và landing page',
    count: 6
  },
  {
    slug: 'crm-automation',
    name: 'CRM & Tự Động Hóa',
    categorySlugs: ['crm-automation', 'content', 'kinh-doanh-dia-phuong'],
    description: 'Chăm sóc lead đa kênh Facebook/Zalo/Web, tự động hóa quy trình và chuyển đổi số',
    count: 6
  }
];

interface ArticlesIndexPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ArticlesIndexPage: React.FC<ArticlesIndexPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();

  // URL search query / category sync
  const queryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialCluster = queryParams?.get('chuyen-muc') || 'all';
  const initialSearch = queryParams?.get('q') || '';

  const [selectedCluster, setSelectedCluster] = useState<string>(initialCluster);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  // All 30 articles metadata
  const allArticles = useMemo(() => getAllArticles(), []);

  // Filter articles based on cluster and search
  const filteredArticles = useMemo(() => {
    let list = allArticles;

    // Filter by topic cluster
    if (selectedCluster && selectedCluster !== 'all') {
      const clusterDef = TOPIC_CLUSTERS.find((c) => c.slug === selectedCluster);
      if (clusterDef) {
        list = list.filter((a) => clusterDef.categorySlugs.includes(a.categorySlug));
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((a) => 
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.seo.focusKeyword.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [allArticles, selectedCluster, searchQuery]);

  const handleClusterClick = (clusterSlug: string) => {
    setSelectedCluster(clusterSlug);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Helper to get thumbnail for article
  const getThumbnailForArticle = (article: ArticleMetadata, index: number) => {
    const list = TOPIC_THUMBNAILS[article.categorySlug] || TOPIC_THUMBNAILS['website'];
    return list[index % list.length] || article.featuredImageUrl || '/logo.png';
  };

  // Get icon for cluster
  const getClusterIcon = (slug: string) => {
    switch (slug) {
      case 'website':
        return <Layout size={15} />;
      case 'google-maps':
        return <MapPin size={15} />;
      case 'local-seo':
        return <TrendingUp size={15} />;
      case 'google-ads':
        return <Target size={15} />;
      case 'crm-automation':
        return <Workflow size={15} />;
      default:
        return <BookOpen size={15} />;
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '5rem' }}>
      <SEOHead
        title="Kiến Thức & Cẩm Nang Tăng Trưởng Số Doanh Nghiệp Địa Phương"
        description="Tổng hợp 30 bài viết thực chiến về Website, Google Maps, Local SEO, Google Ads và Tự động hóa CRM cho chủ tiệm, cơ sở dịch vụ và doanh nghiệp nhỏ tại Việt Nam."
        canonicalPath="/kien-thuc"
        breadcrumbs={[{ name: 'Kiến thức', url: '/kien-thuc' }]}
        schemaType="BlogPosting"
      />

      {/* Hero Header Section */}
      <section
        style={{
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          padding: '3rem 0 2.5rem 0'
        }}
      >
        <Container size="lg">
          <Breadcrumbs items={[{ name: 'Kiến thức kinh doanh', url: '/kien-thuc' }]} />

          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            {/* Top Pill Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.9rem',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                border: '1px solid #c6ebd4'
              }}
            >
              <Sparkles size={14} />
              <span>CẨM NANG THỰC CHIẾN — MINH BẠCH & KHÔNG SÁO RỖNG</span>
            </div>

            {/* Page Title */}
            <h1
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                textWrap: 'pretty'
              }}
            >
              Kiến Thức Tăng Trưởng Số Thực Tế Cho Doanh Nghiệp Địa Phương
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)',
                color: '#475569',
                lineHeight: 1.65,
                maxWidth: '740px',
                margin: '0 auto 2rem auto',
                textWrap: 'pretty'
              }}
            >
              Không lý thuyết suông, không thuật ngữ cao siêu. Mọi bài viết đều được đúc kết từ kinh nghiệm triển khai trực tiếp cho hàng trăm cửa hàng, xưởng sản xuất và cơ sở dịch vụ tại Việt Nam.
            </p>

            {/* Search Box Input */}
            <div
              style={{
                position: 'relative',
                maxWidth: '620px',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#64748b',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Search size={18} />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài viết: bảng giá, tên miền, google maps, ads, crm..."
                style={{
                  width: '100%',
                  padding: '0.85rem 2.8rem 0.85rem 2.85rem',
                  fontSize: '0.95rem',
                  color: '#0f172a',
                  backgroundColor: '#ffffff',
                  border: '2px solid #cbd5e1',
                  borderRadius: '12px',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0d7647';
                  e.target.style.boxShadow = '0 0 0 3px rgba(13, 118, 71, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#cbd5e1';
                  e.target.style.boxShadow = '0 2px 6px rgba(15, 23, 42, 0.04)';
                }}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Xóa tìm kiếm"
                  style={{
                    position: 'absolute',
                    right: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                fontSize: '0.85rem',
                color: '#64748b'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="#0d7647" /> 30 bài viết thực chiến
              </span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="#0d7647" /> 5 Cụm chủ đề cốt lõi
              </span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="#0d7647" /> Tốc độ tải trang 0ms
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 Topic Clusters Filter Bar */}
      <section
        style={{
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 40,
          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
        }}
      >
        <Container size="lg">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              overflowX: 'auto',
              padding: '0.85rem 0',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.825rem',
                fontWeight: 700,
                color: '#64748b',
                paddingRight: '0.5rem',
                flexShrink: 0
              }}
            >
              <Filter size={15} />
              <span>Chủ đề:</span>
            </div>

            {TOPIC_CLUSTERS.map((cluster) => {
              const isActive = selectedCluster === cluster.slug;
              return (
                <button
                  key={cluster.slug}
                  type="button"
                  onClick={() => handleClusterClick(cluster.slug)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 600,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    border: isActive ? '1.5px solid #0d7647' : '1.5px solid #e2e8f0',
                    backgroundColor: isActive ? '#0d7647' : '#ffffff',
                    color: isActive ? '#ffffff' : '#334155',
                    boxShadow: isActive ? '0 2px 6px rgba(13, 118, 71, 0.2)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#94a3b8';
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {getClusterIcon(cluster.slug)}
                  </span>
                  <span>{cluster.name}</span>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '9999px',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#64748b',
                      marginLeft: '0.15rem'
                    }}
                  >
                    {cluster.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Articles Grid Content */}
      <section style={{ padding: '2.5rem 0' }}>
        <Container size="lg">
          {/* Header row with count & clear */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem'
            }}
          >
            <div style={{ fontSize: '0.925rem', color: '#64748b' }}>
              Hiển thị <strong style={{ color: '#0f172a' }}>{filteredArticles.length}</strong> bài viết
              {selectedCluster !== 'all' && (
                <span>
                  {' '}trong chuyên mục{' '}
                  <strong style={{ color: '#0d7647' }}>
                    {TOPIC_CLUSTERS.find((c) => c.slug === selectedCluster)?.name}
                  </strong>
                </span>
              )}
              {searchQuery && (
                <span>
                  {' '}khớp với từ khóa "<strong>{searchQuery}</strong>"
                </span>
              )}
            </div>

            {(selectedCluster !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCluster('all');
                  setSearchQuery('');
                }}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#0d7647',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textDecoration: 'underline'
                }}
              >
                Đặt lại tất cả bộ lọc
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                border: '1.5px dashed #cbd5e1'
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: '#edf7f1',
                  color: '#0d7647',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <HelpCircle size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Không tìm thấy bài viết nào phù hợp
              </h3>
              <p style={{ color: '#64748b', maxWidth: '450px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
                Hãy thử tìm kiếm với các từ khóa phổ biến như: <em>website, google maps, chi phí, seo, ads, crm</em> hoặc chọn một cụm chủ đề khác.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedCluster('all');
                  setSearchQuery('');
                }}
              >
                Xem toàn bộ 30 bài viết
              </Button>
            </div>
          )}

          {/* 30 Articles Responsive Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredArticles.map((article, idx) => {
              const thumbUrl = getThumbnailForArticle(article, idx);
              return (
                <article
                  key={article.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    preloadArticle(article.slug);
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {/* Card Thumbnail */}
                  <Link
                    to={`/kien-thuc/${article.slug}`}
                    style={{
                      display: 'block',
                      position: 'relative',
                      aspectRatio: '16 / 9',
                      backgroundColor: '#f1f5f9',
                      overflow: 'hidden',
                      textDecoration: 'none'
                    }}
                  >
                    <img
                      src={thumbUrl}
                      alt={article.featuredImageAlt || article.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />

                    {/* Category Pill Tag Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: '#ffffff',
                        color: '#0d7647',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {article.category}
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div
                    style={{
                      padding: '1.25rem 1.25rem 1rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1
                    }}
                  >
                    {/* Meta: Reading time */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.775rem',
                        color: '#64748b',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={13} /> {article.readingTime}
                      </span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: '1.08rem',
                        fontWeight: 800,
                        lineHeight: 1.45,
                        color: '#0f172a',
                        marginBottom: '0.65rem',
                        textWrap: 'pretty'
                      }}
                    >
                      <Link
                        to={`/kien-thuc/${article.slug}`}
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          transition: 'color 0.15s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#0d7647';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#0f172a';
                        }}
                      >
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: '#475569',
                        marginBottom: '1.25rem',
                        flexGrow: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Card Footer Link */}
                    <div
                      style={{
                        paddingTop: '0.85rem',
                        borderTop: '1px solid #f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Link
                        to={`/kien-thuc/${article.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#0d7647',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Đọc chi tiết</span>
                        <ArrowRight size={14} />
                      </Link>

                      <span
                        style={{
                          fontSize: '0.725rem',
                          color: '#94a3b8',
                          fontWeight: 500
                        }}
                      >
                        #{article.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom Conversion Banner Section */}
      <section style={{ marginTop: '2rem' }}>
        <Container size="lg">
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '2px solid #0d7647',
              borderRadius: '18px',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 8px 24px -4px rgba(13, 118, 71, 0.08)'
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={24} />
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '0.75rem'
              }}
            >
              Bạn Chưa Rõ Nên Bắt Đầu Từ Website, Google Maps Hay Quảng Cáo?
            </h2>

            <p
              style={{
                fontSize: '0.975rem',
                color: '#475569',
                maxWidth: '640px',
                lineHeight: 1.65,
                margin: '0 auto 1.75rem auto'
              }}
            >
              Đừng vội chi tiền khi chưa hiểu rõ bài toán của mình. Đội ngũ chuyên viên LocalMate sẵn sàng rà soát hiện trạng số, tư vấn lộ trình phù hợp với ngân sách và dựng trước bản demo xem thử hoàn toàn 0đ.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  if (onOpenConsultForm) {
                    onOpenConsultForm('Tư vấn lộ trình tăng trưởng số tổng thể');
                  } else {
                    navigate('/lien-he');
                  }
                }}
              >
                Nhận Tư Vấn & Bản Demo Xem Thử 0đ
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.location.href = 'tel:0834422439';
                }}
              >
                Gọi Hotline: 0834.422.439
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
