import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { DashboardStats } from '../../cms/types';
import { Link } from '../../components/layout/Router';
import {
  FileText, CheckCircle, Clock, Calendar, PlusCircle,
  Image as ImageIcon, ArrowRight, AlertTriangle, AlertCircle,
  Sparkles, Globe, HardDrive, ShieldCheck, Loader2
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getDashboardStats();
      if (res.success && res.data) {
        setData(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span style={{ padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#dcfce7', color: '#15803d' }}>Xuất bản</span>;
      case 'draft':
        return <span style={{ padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#475569' }}>Bản nháp</span>;
      case 'scheduled':
        return <span style={{ padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#e0f2fe', color: '#0369a1' }}>Đã lên lịch</span>;
      default:
        return <span style={{ padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#475569' }}>{status}</span>;
    }
  };

  const issues = data?.issues || {
    missingMetaDescription: 0,
    missingFeaturedImage: 0,
    missingAltMedia: 0,
    oversizedMedia: 0,
    geoIssues: 0,
    unusedMedia: 0,
    seoIssues: 0
  };

  return (
    <AdminLayout activeKey="dashboard" title="Tổng Quan Bảng Điều Khiển">
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <Loader2 size={32} className="spin" color="#0d7647" />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Quick Action Buttons */}
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
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Trung Tâm Điều Hành Nội Dung &amp; SEO
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
                Số liệu thực tế trực tiếp từ Cloudflare D1 &amp; R2, không sử dụng dữ liệu giả lập.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link
                to="/admin/posts/new"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <PlusCircle size={16} /> Viết bài mới
              </Link>
              <Link
                to="/admin/media"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  color: '#334155',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <ImageIcon size={16} /> Thư viện R2
              </Link>
              <Link
                to="/admin/audit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  color: '#334155',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <Sparkles size={16} color="#0d7647" /> Kiểm toán SEO &amp; GEO
              </Link>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {/* Total Posts */}
            <Link
              to="/admin/posts"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: '#edf7f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d7647' }}>
                <FileText size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>TỔNG BÀI VIẾT</div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  {data?.stats?.totalPosts ?? 0}
                </div>
              </div>
            </Link>

            {/* Published Posts */}
            <Link
              to="/admin/posts?status=published"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d' }}>
                <CheckCircle size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>ĐÃ XUẤT BẢN</div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#15803d', lineHeight: 1.2 }}>
                  {data?.stats?.publishedPosts ?? 0}
                </div>
              </div>
            </Link>

            {/* Draft Posts */}
            <Link
              to="/admin/posts?status=draft"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>BẢN NHÁP (DRAFT)</div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#475569', lineHeight: 1.2 }}>
                  {data?.stats?.draftPosts ?? 0}
                </div>
              </div>
            </Link>

            {/* Scheduled Posts */}
            <Link
              to="/admin/posts?status=scheduled"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0369a1' }}>
                <Calendar size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>HẸN GIỜ ĐĂNG</div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0369a1', lineHeight: 1.2 }}>
                  {data?.stats?.scheduledPosts ?? 0}
                </div>
              </div>
            </Link>
          </div>

          {/* ACTIONABLE ISSUES MATRIX (Cards thực tế có thể click để filter) */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <AlertTriangle size={18} color="#d97706" /> Danh Sách Việc Cần Khắc Phục (Action Items)
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
                  Nhấp chuột vào bất kỳ mục nào bên dưới để chuyển thẳng tới danh sách đối tượng cần chỉnh sửa.
                </p>
              </div>
              <Link to="/admin/audit" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Xem toàn bộ kiểm toán <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {/* Missing ALT Card */}
              <Link
                to="/admin/media?filter=missing-alt"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: issues.missingAltMedia > 0 ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                  backgroundColor: issues.missingAltMedia > 0 ? '#fff7ed' : '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: issues.missingAltMedia > 0 ? '#9a3412' : '#64748b' }}>
                    Ảnh Thiếu Thẻ ALT
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: issues.missingAltMedia > 0 ? '#ea580c' : '#15803d' }}>
                    {issues.missingAltMedia}
                  </div>
                </div>
                <ArrowRight size={16} color="#94a3b8" />
              </Link>

              {/* Oversized Media Card */}
              <Link
                to="/admin/media?filter=oversized"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: issues.oversizedMedia > 0 ? '1px solid #fecaca' : '1px solid #e2e8f0',
                  backgroundColor: issues.oversizedMedia > 0 ? '#fef2f2' : '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: issues.oversizedMedia > 0 ? '#991b1b' : '#64748b' }}>
                    Ảnh Quá Khổ (&gt;500KB)
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: issues.oversizedMedia > 0 ? '#dc2626' : '#15803d' }}>
                    {issues.oversizedMedia}
                  </div>
                </div>
                <ArrowRight size={16} color="#94a3b8" />
              </Link>

              {/* Unused Media Card */}
              <Link
                to="/admin/media?filter=unused"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>
                    Ảnh R2 Chưa Sử Dụng
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                    {issues.unusedMedia}
                  </div>
                </div>
                <ArrowRight size={16} color="#94a3b8" />
              </Link>

              {/* Missing Meta Description */}
              <Link
                to="/admin/audit?filter=seo"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: issues.missingMetaDescription > 0 ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                  backgroundColor: issues.missingMetaDescription > 0 ? '#fff7ed' : '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: issues.missingMetaDescription > 0 ? '#9a3412' : '#64748b' }}>
                    Bài Thiếu Thẻ Mô Tả
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: issues.missingMetaDescription > 0 ? '#ea580c' : '#15803d' }}>
                    {issues.missingMetaDescription}
                  </div>
                </div>
                <ArrowRight size={16} color="#94a3b8" />
              </Link>

              {/* Missing Featured Image */}
              <Link
                to="/admin/audit?filter=seo"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: issues.missingFeaturedImage > 0 ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                  backgroundColor: issues.missingFeaturedImage > 0 ? '#fff7ed' : '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: issues.missingFeaturedImage > 0 ? '#9a3412' : '#64748b' }}>
                    Bài Thiếu Ảnh Đại Diện
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: issues.missingFeaturedImage > 0 ? '#ea580c' : '#15803d' }}>
                    {issues.missingFeaturedImage}
                  </div>
                </div>
                <ArrowRight size={16} color="#94a3b8" />
              </Link>

              {/* GEO Readiness Issues */}
              <Link
                to="/admin/audit?filter=geo"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: issues.geoIssues > 0 ? '1px solid #e9d5ff' : '1px solid #e2e8f0',
                  backgroundColor: issues.geoIssues > 0 ? '#faf5ff' : '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: issues.geoIssues > 0 ? '#6b21a8' : '#64748b' }}>
                    Bài Chưa Chuẩn GEO (AI)
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: issues.geoIssues > 0 ? '#9333ea' : '#15803d' }}>
                    {issues.geoIssues}
                  </div>
                </div>
                <ArrowRight size={16} color="#94a3b8" />
              </Link>
            </div>
          </div>

          {/* Tables Grid: Recent Posts & Top Categories */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)', gap: '1.5rem', alignItems: 'start' }}>
            {/* Recent Posts Table */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Bài Viết Cập Nhật Gần Đây
                </h3>
                <Link to="/admin/posts" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0d7647', textDecoration: 'none' }}>
                  Xem tất cả
                </Link>
              </div>

              {!data?.recentPosts || data.recentPosts.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                  Chưa có bài viết nào được tạo.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {data.recentPosts.map((post) => (
                    <div
                      key={post.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: '8px',
                        border: '1px solid #f1f5f9'
                      }}
                    >
                      <div style={{ overflow: 'hidden', paddingRight: '0.75rem' }}>
                        <Link
                          to={`/admin/posts/${post.id}/edit`}
                          style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                          {post.title}
                        </Link>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                          {post.category_name} • {post.word_count || 0} từ • Cập nhật: {post.updated_at ? post.updated_at.split(' ')[0] : 'Vừa xong'}
                        </div>
                      </div>
                      <div style={{ flexShrink: 0 }}>
                        {getStatusBadge(post.status)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Top Categories */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Chuyên Mục &amp; Số Lượng Bài
                </h3>
                <Link to="/admin/categories" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0d7647', textDecoration: 'none' }}>
                  Quản lý
                </Link>
              </div>

              {!data?.topCategories || data.topCategories.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                  Chưa có chuyên mục nào.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {data.topCategories.map((cat: any) => (
                    <div
                      key={cat.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: '6px'
                      }}
                    >
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>
                        {cat.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '10px', backgroundColor: '#e2e8f0', color: '#334155' }}>
                        {cat.real_post_count || 0} bài
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
