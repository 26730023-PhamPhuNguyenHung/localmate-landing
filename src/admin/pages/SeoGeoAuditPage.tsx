import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { Link } from '../../components/layout/Router';
import {
  Sparkles, Globe, AlertTriangle, AlertCircle, CheckCircle2,
  ExternalLink, Search, Filter, Loader2, ArrowRight, ShieldCheck,
  FileText, Image as ImageIcon
} from 'lucide-react';

interface AuditedPost {
  id: number;
  title: string;
  slug: string;
  status: string;
  category_name: string;
  word_count: number;
  updated_at: string;
  score: number;
  criticalCount: number;
  warningCount: number;
  issues: { type: 'critical' | 'warning' | 'info'; code: string; message: string }[];
}

export const SeoGeoAuditPage: React.FC = () => {
  const [posts, setPosts] = useState<AuditedPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'critical' | 'seo' | 'geo' | 'thin' | 'good'>('all');

  useEffect(() => {
    loadAudit();
  }, []);

  const loadAudit = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getSeoGeoAudit();
      if (res.success && res.data) {
        setPosts(res.data.posts);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPosts = posts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.slug.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filterType === 'critical') return p.criticalCount > 0;
    if (filterType === 'seo') return p.issues.some(i => i.code.includes('META') || i.code.includes('H2') || i.code.includes('FEATURED'));
    if (filterType === 'geo') return p.issues.some(i => i.code.includes('GEO'));
    if (filterType === 'thin') return p.issues.some(i => i.code.includes('THIN'));
    if (filterType === 'good') return p.score >= 80;
    return true;
  });

  const totalCritical = posts.reduce((sum, p) => sum + p.criticalCount, 0);
  const totalWarning = posts.reduce((sum, p) => sum + p.warningCount, 0);
  const goodCount = posts.filter(p => p.score >= 80).length;

  return (
    <AdminLayout activeKey="audit" title="Kiểm Toán SEO & GEO Toàn Website">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Top Summary Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Trung Tâm Kiểm Toán SEO &amp; GEO Tổng Hợp
            </h2>
            <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
              Rà soát tự động toàn bộ bài viết để phát hiện bài thiếu mô tả, thiếu ALT, rớt chuẩn Answer-First cho AI Search.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ padding: '0.5rem 1rem', borderRadius: '8px', backgroundColor: '#fee2e2', color: '#b91c1c', fontSize: '0.825rem', fontWeight: 700 }}>
              {totalCritical} Lỗi Nghiêm Trọng
            </div>
            <div style={{ padding: '0.5rem 1rem', borderRadius: '8px', backgroundColor: '#fef3c7', color: '#b45309', fontSize: '0.825rem', fontWeight: 700 }}>
              {totalWarning} Cần Cải Thiện
            </div>
            <div style={{ padding: '0.5rem 1rem', borderRadius: '8px', backgroundColor: '#dcfce7', color: '#15803d', fontSize: '0.825rem', fontWeight: 700 }}>
              {goodCount} Bài Đạt Chuẩn Tốt
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { key: 'all', label: 'Tất cả bài viết' },
            { key: 'critical', label: '🔴 Có lỗi nghiêm trọng' },
            { key: 'seo', label: '🌐 Lỗi SEO On-Page' },
            { key: 'geo', label: '🤖 Lỗi GEO & AI Search' },
            { key: 'thin', label: '⚠️ Bài viết quá ngắn (<400 từ)' },
            { key: 'good', label: '✓ Đạt chuẩn (>=80đ)' }
          ].map((tab) => {
            const isActive = filterType === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilterType(tab.key as any)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  border: isActive ? '1px solid #0d7647' : '1px solid #cbd5e1',
                  backgroundColor: isActive ? '#0d7647' : '#ffffff',
                  color: isActive ? '#ffffff' : '#334155',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            );
          })}

          <div style={{ marginLeft: 'auto', position: 'relative', width: '220px' }}>
            <Search size={14} style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Tìm tiêu đề bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.45rem 0.65rem 0.45rem 2rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '0.825rem',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Audit List Table */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          {isLoading ? (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 0.75rem auto' }} />
              <div style={{ color: '#64748b', fontSize: '0.875rem' }}>Đang quét kiểm toán toàn site...</div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <CheckCircle2 size={36} color="#15803d" style={{ margin: '0 auto 0.5rem auto' }} />
              <p style={{ margin: 0, fontWeight: 700 }}>Không có bài viết nào gặp vấn đề trong danh mục lọc này.</p>
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#475569' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Bài Viết</th>
                  <th style={{ padding: '0.75rem 1rem', width: '110px' }}>Chuyên Mục</th>
                  <th style={{ padding: '0.75rem 1rem', width: '90px' }}>Dung Lượng</th>
                  <th style={{ padding: '0.75rem 1rem', width: '90px' }}>Điểm SEO/GEO</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Các Vấn Đề Cần Khắc Phục</th>
                  <th style={{ padding: '0.75rem 1rem', width: '90px', textAlign: 'right' }}>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        style={{ fontWeight: 700, color: '#0f172a', textDecoration: 'none', display: 'block', marginBottom: '0.15rem' }}
                      >
                        {post.title}
                      </Link>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>/kien-thuc/{post.slug}</div>
                    </td>

                    <td style={{ padding: '0.85rem 1rem', color: '#475569' }}>
                      <span style={{ padding: '0.2rem 0.45rem', borderRadius: '4px', backgroundColor: '#f1f5f9', fontSize: '0.75rem', fontWeight: 600 }}>
                        {post.category_name}
                      </span>
                    </td>

                    <td style={{ padding: '0.85rem 1rem', color: post.word_count < 400 ? '#b91c1c' : '#334155', fontWeight: 600 }}>
                      {post.word_count} từ
                    </td>

                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '6px',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          backgroundColor: post.score >= 80 ? '#dcfce7' : post.score >= 60 ? '#fef3c7' : '#fee2e2',
                          color: post.score >= 80 ? '#15803d' : post.score >= 60 ? '#b45309' : '#b91c1c'
                        }}
                      >
                        {post.score}/100
                      </span>
                    </td>

                    <td style={{ padding: '0.85rem 1rem' }}>
                      {post.issues.length === 0 ? (
                        <span style={{ color: '#15803d', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                          <CheckCircle2 size={14} /> Hoàn hảo
                        </span>
                      ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {post.issues.map((issue, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontSize: '0.72rem',
                                padding: '0.15rem 0.4rem',
                                borderRadius: '4px',
                                fontWeight: 600,
                                backgroundColor: issue.type === 'critical' ? '#fee2e2' : issue.type === 'warning' ? '#fef3c7' : '#f1f5f9',
                                color: issue.type === 'critical' ? '#b91c1c' : issue.type === 'warning' ? '#b45309' : '#475569'
                              }}
                            >
                              {issue.message}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.35rem 0.65rem',
                          borderRadius: '6px',
                          backgroundColor: '#edf7f1',
                          color: '#0d7647',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                      >
                        Sửa ngay <ArrowRight size={13} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
