import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../components/layout/Router';
import { cmsClient } from '../cms/services/cmsClient';
import {
  LayoutDashboard, FileText, PlusCircle, FolderTree, Tag,
  Image, Compass, Settings, Database, LogOut, Globe,
  Menu, X, CheckCircle2, User, Sparkles, MousePointerClick
} from 'lucide-react';
import { LoginPage } from './pages/LoginPage';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeKey?: string;
  title?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activeKey, title }) => {
  const { currentPath, navigate } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(cmsClient.isAuthenticated());
  const [user, setUser] = useState<any>(cmsClient.getCurrentUser());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Verify session
    if (isAuthenticated) {
      cmsClient.getMe().then((res: any) => {
        if (!res.success) {
          cmsClient.logout();
          setIsAuthenticated(false);
        } else {
          setUser(res.data);
        }
      });
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    await cmsClient.logout();
    setIsAuthenticated(false);
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  const navSections = [
    {
      title: 'TỔNG QUAN',
      items: [
        { key: 'dashboard', label: 'Bảng điều khiển', path: '/admin', icon: LayoutDashboard }
      ]
    },
    {
      title: 'NỘI DUNG',
      items: [
        { key: 'posts', label: 'Tất cả bài viết', path: '/admin/posts', icon: FileText },
        { key: 'new-post', label: 'Viết bài mới', path: '/admin/posts/new', icon: PlusCircle },
        { key: 'categories', label: 'Chuyên mục', path: '/admin/categories', icon: FolderTree },
        { key: 'tags', label: 'Thẻ tag', path: '/admin/tags', icon: Tag }
      ]
    },
    {
      title: 'MEDIA',
      items: [
        { key: 'media', label: 'Thư viện Media R2', path: '/admin/media', icon: Image }
      ]
    },
    {
      title: 'SEO & CHUYỂN ĐỔI',
      items: [
        { key: 'audit', label: 'Kiểm toán SEO & GEO', path: '/admin/audit', icon: Sparkles },
        { key: 'redirects', label: 'Chuyển hướng 301', path: '/admin/redirects', icon: Compass },
        { key: 'ctas', label: 'Khối CTA chuyển đổi', path: '/admin/ctas', icon: MousePointerClick }
      ]
    },
    {
      title: 'HỆ THỐNG',
      items: [
        { key: 'settings', label: 'Cài đặt hệ thống', path: '/admin/settings', icon: Settings },
        { key: 'backup', label: 'Sao lưu JSON', path: '/admin/backup', icon: Database }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'var(--font-family)' }}>
      {/* Sidebar Desktop */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 40,
          flexShrink: 0
        }}
      >
        {/* Brand Header */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
              LM
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0d7647', lineHeight: 1.1 }}>LocalMate</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>CMS QUẢN TRỊ</div>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navSections.map((section, sIdx) => (
            <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8', padding: '0 0.75rem 0.25rem 0.75rem', letterSpacing: '0.05em' }}>
                {section.title}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeKey === item.key || (item.path === '/admin' && currentPath === '/admin') || (item.path !== '/admin' && currentPath.startsWith(item.path));
                return (
                  <Link
                    key={item.key}
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#0d7647' : '#334155',
                      backgroundColor: isActive ? '#edf7f1' : 'transparent',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Icon size={16} color={isActive ? '#0d7647' : '#64748b'} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer User Info */}
        <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid #e2e8f0', backgroundColor: '#fcfdfd' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                <User size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0f172a' }}>{user?.name || 'Admin'}</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>{user?.role || 'Administrator'}</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Đăng xuất"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#dc2626',
                padding: '0.35rem',
                borderRadius: '6px'
              }}
            >
              <LogOut size={16} />
            </button>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontSize: '0.775rem',
              fontWeight: 600,
              color: '#0d7647',
              textDecoration: 'none',
              padding: '0.45rem',
              backgroundColor: '#edf7f1',
              borderRadius: '6px'
            }}
          >
            <Globe size={14} /> Xem Website Ngoài
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
        {/* Top Header */}
        <header
          style={{
            height: '60px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 30
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h1 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {title || 'Hệ Thống Quản Trị Nội Dung'}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to="/admin/posts/new"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#0d7647',
                color: '#ffffff',
                padding: '0.45rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <PlusCircle size={15} /> Viết Bài Mới
            </Link>
          </div>
        </header>

        {/* Page Inner Container */}
        <main style={{ flex: 1, padding: '1.75rem 2rem 3rem 2rem', maxWidth: '1600px', width: '100%', boxSizing: 'border-box', margin: '0 auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
};
