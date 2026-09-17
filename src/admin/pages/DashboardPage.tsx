import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { DashboardStats, PostEntity } from '../../cms/types';
import { Link } from '../../components/layout/Router';
import {
  FileText, CheckCircle, Clock, Calendar, PlusCircle,
  Image, FolderPlus, ArrowRight, Edit3, Eye, Loader2
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

  return (
    <AdminLayout activeKey="dashboard" title="Tổng Quan Bảng Điều Khiển">
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <Loader2 size={32} className="spin" color="#0d7647" />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '1.25rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
              Tác vụ nhanh
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
                <Image size={16} /> Tải ảnh lên
              </Link>
              <Link
                to="/admin/categories"
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
                <FolderPlus size={16} /> Tạo chuyên mục
              </Link>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {/* Total Posts */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '10px', backgroundColor: '#edf7f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d7647' }}>
                <FileText size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#64748b' }}>TỔNG BÀI VIẾT</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  {data?.stats?.totalPosts ?? 0}
                </div>
              </div>
            </div>

            {/* Published Posts */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '10px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d' }}>
                <CheckCircle size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#64748b' }}>ĐÃ XUẤT BẢN</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#15803d', lineHeight: 1.2 }}>
                  {data?.stats?.publishedPosts ?? 0}
                </div>
              </div>
            </div>

            {/* Draft Posts */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '10px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                <Clock size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#64748b' }}>BẢN NHÁP (DRAFT)</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  {data?.stats?.draftPosts ?? 0}
                </div>
              </div>
            </div>

            {/* Scheduled Posts */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '10px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0369a1' }}>
                <Calendar size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#64748b' }}>ĐÃ HẸN GIỜ (SCHEDULED)</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0369a1', lineHeight: 1.2 }}>
                  {data?.stats?.scheduledPosts ?? 0}
                </div>
              </div>
            </div>
          </div>

          {/* Two Columns: Recent Posts & Top Categories */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
            {/* Column 1: Bài vừa chỉnh sửa */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Bài viết vừa chỉnh sửa
                </h2>
                <Link to="/admin/posts" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0d7647', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                  Xem tất cả <ArrowRight size={14} />
                </Link>
              </div>

              {data?.recentPosts && data.recentPosts.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {data.recentPosts.map((post: any) => (
                    <div
                      key={post.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      <div style={{ minWidth: 0, paddingRight: '1rem' }}>
                        <Link
                          to={`/admin/posts/${post.id}/edit`}
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: '#0f172a',
                            textDecoration: 'none',
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {post.title}
                        </Link>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                          {getStatusBadge(post.status)}
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{post.category_name}</span>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>•</span>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{post.updated_at}</span>
                        </div>
                      </div>
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        style={{
                          padding: '0.4rem 0.6rem',
                          backgroundColor: '#edf7f1',
                          color: '#0d7647',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}
                      >
                        <Edit3 size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Chưa có bài viết nào.</p>
              )}
            </div>

            {/* Column 2: Top Categories & Sắp xuất bản */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Top Categories */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Phân bổ chuyên mục
                  </h2>
                  <Link to="/admin/categories" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0d7647', textDecoration: 'none' }}>
                    Quản lý
                  </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {data?.topCategories?.map((cat: any) => (
                    <div
                      key={cat.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: '8px',
                        fontSize: '0.875rem'
                      }}
                    >
                      <span style={{ fontWeight: 600, color: '#334155' }}>{cat.name}</span>
                      <span style={{ fontWeight: 700, color: '#0d7647', backgroundColor: '#edf7f1', padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem' }}>
                        {cat.real_post_count || 0} bài
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Scheduled Posts */}
              {data?.upcomingPosts && data.upcomingPosts.length > 0 && (
                <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                    Bài viết sắp xuất bản
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {data.upcomingPosts.map((post: any) => (
                      <div key={post.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                        <span style={{ fontWeight: 600, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '240px' }}>
                          {post.title}
                        </span>
                        <span style={{ fontSize: '0.775rem', color: '#0369a1', fontWeight: 700 }}>
                          {post.scheduled_at}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
