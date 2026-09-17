import React from 'react';
import { useRouter } from '../layout/Router';
import {
  TOPIC_CLUSTERS,
  getClusterByPostId,
  getClusterBySlug,
  TopicCluster,
  ClusterArticle
} from '../../data/topicClusters';
import {
  BookOpen,
  Star,
  ArrowRight,
  CheckCircle2,
  Layers,
  Clock,
  ExternalLink,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export interface TopicClusterNavProps {
  currentPostId?: number;
  currentSlug?: string;
  clusterId?: string;
  className?: string;
}

export const TopicClusterNav: React.FC<TopicClusterNavProps> = ({
  currentPostId,
  currentSlug,
  clusterId,
  className = ''
}) => {
  const { navigate } = useRouter();

  // Xác định cụm chủ đề dựa trên ID bài, Slug bài hoặc ID cụm chỉ định
  let cluster: TopicCluster | null = null;

  if (clusterId && TOPIC_CLUSTERS[clusterId]) {
    cluster = TOPIC_CLUSTERS[clusterId];
  } else if (currentPostId) {
    cluster = getClusterByPostId(currentPostId);
  } else if (currentSlug) {
    cluster = getClusterBySlug(currentSlug);
  }

  // Fallback mặc định: Cụm 1 nếu không truyền tham số
  if (!cluster) {
    cluster = TOPIC_CLUSTERS['website-doanh-nghiep'];
  }

  const isCurrentPillar =
    (currentPostId && cluster.pillar.id === currentPostId) ||
    (currentSlug && cluster.pillar.slug === currentSlug);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const allClustersList = Object.values(TOPIC_CLUSTERS);

  return (
    <nav
      aria-label="Điều hướng Cụm Chủ Đề (Topic Cluster Navigation)"
      className={`topic-cluster-nav ${className}`}
      style={{
        marginTop: '3.5rem',
        marginBottom: '2.5rem',
        padding: '2rem 1.75rem',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        color: '#0f172a'
      }}
    >
      {/* 1. Header Cụm Chủ Đề */}
      <div
        style={{
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: '1.25rem',
          marginBottom: '1.75rem'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            color: '#166534',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.025em',
            marginBottom: '0.75rem'
          }}
        >
          <Layers size={14} color="#16a34a" />
          <span>TOPIC CLUSTER #{cluster.number} — KIẾN THÚC CHUYÊN SÂU</span>
        </div>

        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.35,
            marginBottom: '0.5rem'
          }}
        >
          {cluster.name}
        </h3>

        <p
          style={{
            fontSize: '0.925rem',
            color: '#475569',
            lineHeight: 1.6,
            margin: 0
          }}
        >
          {cluster.description}
        </p>
      </div>

      {/* 2. Bài Viết Trụ Cột (Pillar Article) — Hub chính */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '1.25rem 1.5rem',
          backgroundColor: isCurrentPillar ? '#f0fdf4' : '#f8fafc',
          border: isCurrentPillar ? '2px solid #16a34a' : '1px solid #cbd5e1',
          borderRadius: '12px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '0.65rem'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: isCurrentPillar ? '#dcfce7' : '#e2e8f0',
              color: isCurrentPillar ? '#15803d' : '#334155',
              padding: '0.2rem 0.6rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <Star size={13} color={isCurrentPillar ? '#16a34a' : '#475569'} fill={isCurrentPillar ? '#16a34a' : '#475569'} />
            <span>Bài Trụ Cột (Pillar Article)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: '#64748b' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={13} /> {cluster.pillar.readingTime}
            </span>
            {isCurrentPillar && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: '#15803d',
                  fontWeight: 700
                }}
              >
                <CheckCircle2 size={14} /> Bạn đang đọc bài này
              </span>
            )}
          </div>
        </div>

        <h4
          style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            lineHeight: 1.4,
            marginBottom: '0.4rem'
          }}
        >
          {isCurrentPillar ? (
            <span style={{ color: '#0f172a' }}>{cluster.pillar.title}</span>
          ) : (
            <a
              href={cluster.pillar.path}
              onClick={(e) => handleLinkClick(e, cluster.pillar.path)}
              style={{
                color: '#0d7647',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = 'underline')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = 'none')}
            >
              <span>{cluster.pillar.title}</span>
              <ArrowUpRight size={16} />
            </a>
          )}
        </h4>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#475569',
            lineHeight: 1.55,
            margin: '0 0 0.75rem 0'
          }}
        >
          {cluster.pillar.excerpt}
        </p>

        {!isCurrentPillar && (
          <div style={{ marginTop: '0.5rem' }}>
            <a
              href={cluster.pillar.path}
              onClick={(e) => handleLinkClick(e, cluster.pillar.path)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.825rem',
                fontWeight: 700,
                color: '#0d7647',
                textDecoration: 'none',
                padding: '0.4rem 0.85rem',
                backgroundColor: '#ffffff',
                border: '1px solid #bbf7d0',
                borderRadius: '6px'
              }}
            >
              <span>Đọc bài viết trụ cột mở đầu chuyên đề</span>
              <ArrowRight size={14} />
            </a>
          </div>
        )}
      </div>

      {/* 3. Danh Sách Bài Viết Bổ Trợ (Supporting Articles) — Khử hoàn toàn Orphan Pages */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={16} color="#0d7647" />
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                color: '#0f172a',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                margin: 0
              }}
            >
              Các bài viết thực chiến trong cùng chuyên đề ({cluster.supporting.length})
            </h4>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Liên kết nội bộ 2 chiều</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0.875rem'
          }}
        >
          {cluster.supporting.map((article, idx) => {
            const isCurrentArticle =
              (currentPostId && article.id === currentPostId) ||
              (currentSlug && article.slug === currentSlug);

            return (
              <div
                key={article.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1rem 1.15rem',
                  backgroundColor: isCurrentArticle ? '#f0fdf4' : '#ffffff',
                  border: isCurrentArticle ? '2px solid #16a34a' : '1px solid #e2e8f0',
                  borderRadius: '10px',
                  transition: 'border-color 0.15s ease, transform 0.15s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isCurrentArticle ? '#166534' : '#475569',
                        backgroundColor: isCurrentArticle ? '#dcfce7' : '#f1f5f9',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {article.badge}
                    </span>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#64748b',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <Clock size={12} /> {article.readingTime}
                    </span>
                  </div>

                  <h5
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: 700,
                      lineHeight: 1.45,
                      margin: '0 0 0.4rem 0'
                    }}
                  >
                    {isCurrentArticle ? (
                      <span style={{ color: '#0f172a' }}>{article.title}</span>
                    ) : (
                      <a
                        href={article.path}
                        onClick={(e) => handleLinkClick(e, article.path)}
                        style={{
                          color: '#0f172a',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#0d7647')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#0f172a')}
                      >
                        {article.title}
                      </a>
                    )}
                  </h5>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      margin: '0 0 0.75rem 0',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
                  {isCurrentArticle ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        color: '#15803d'
                      }}
                    >
                      <CheckCircle2 size={13} /> Bạn đang đọc bài viết này
                    </span>
                  ) : (
                    <a
                      href={article.path}
                      onClick={(e) => handleLinkClick(e, article.path)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        color: '#0d7647',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Xem bài viết chi tiết</span>
                      <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Commercial Canonical Target CTA (Quy chuẩn dẫn dắt hành trình khách hàng) */}
      <div
        style={{
          backgroundColor: '#f8fbfa',
          border: '1.5px solid #0d7647',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#dcfce7',
              color: '#166534',
              padding: '0.15rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.35rem'
            }}
          >
            <ShieldCheck size={13} color="#16a34a" />
            <span>{cluster.commercialTarget.badge}</span>
          </div>

          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 0.25rem 0'
            }}
          >
            {cluster.commercialTarget.label}
          </h4>

          <p
            style={{
              fontSize: '0.85rem',
              color: '#475569',
              lineHeight: 1.5,
              margin: 0
            }}
          >
            {cluster.commercialTarget.description}
          </p>
        </div>

        <div>
          <a
            href={cluster.commercialTarget.path}
            onClick={(e) => handleLinkClick(e, cluster.commercialTarget.path)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(13, 118, 71, 0.2)'
            }}
          >
            <span>Nhận Báo Giá &amp; Tư Vấn</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* 5. Chuyển Đổi Liên Cụm (Inter-Cluster Discovery — Chống Spider Trap A->B->C->A) */}
      <div
        style={{
          borderTop: '1px solid #f1f5f9',
          paddingTop: '1.25rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#64748b',
            marginBottom: '0.75rem'
          }}
        >
          <Compass size={14} color="#64748b" />
          <span>KHÁM PHÁ CÁC CỤM KIẾN THỨC KHÁC CỦA LOCALMATE:</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          {allClustersList.map((c) => {
            const isSelected = c.id === cluster.id;
            return (
              <a
                key={c.id}
                href={c.pillar.path}
                onClick={(e) => handleLinkClick(e, c.pillar.path)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? '#e2e8f0' : '#f8fafc',
                  color: isSelected ? '#0f172a' : '#475569',
                  border: '1px solid',
                  borderColor: isSelected ? '#cbd5e1' : '#e2e8f0',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Cụm {c.number}: {c.shortName}</span>
                {!isSelected && <ChevronRight size={12} color="#94a3b8" />}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TopicClusterNav;
