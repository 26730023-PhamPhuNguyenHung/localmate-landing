import React from 'react';
import { Link, useRouter } from '../layout/Router';
import { Sparkles, Bot, HelpCircle, Search, ShieldCheck, MapPin, CheckCircle2, Award } from 'lucide-react';

interface AiSearchClusterNavProps {
  currentServiceSlug: 'geo' | 'aeo' | 'seo-ai' | 'seo-chatgpt';
}

export const AiSearchClusterNav: React.FC<AiSearchClusterNavProps> = ({ currentServiceSlug }) => {
  const { currentPath } = useRouter();

  const services = [
    {
      slug: 'geo',
      path: '/dich-vu/geo',
      title: 'Dịch vụ GEO',
      subtitle: 'Tối ưu đề xuất ChatGPT & Gemini',
      tag: 'Phổ biến nhất ⭐',
      tagColor: '#0d7647',
      icon: Sparkles
    },
    {
      slug: 'aeo',
      path: '/dich-vu/aeo',
      title: 'Dịch vụ AEO',
      subtitle: 'Trích dẫn nguồn Answer Engine',
      tag: 'Citations & E-E-A-T',
      tagColor: '#2563eb',
      icon: HelpCircle
    },
    {
      slug: 'seo-ai',
      path: '/dich-vu/seo-ai',
      title: 'Dịch vụ SEO AI',
      subtitle: 'Thống trị Google AI Overviews',
      tag: 'Chiếm vị trí số 0',
      tagColor: '#d97706',
      icon: Search
    },
    {
      slug: 'seo-chatgpt',
      path: '/dich-vu/seo-chatgpt',
      title: 'SEO ChatGPT',
      subtitle: 'Hiện diện trong hội thoại AI',
      tag: '600M+ người dùng',
      tagColor: '#059669',
      icon: Bot
    }
  ];

  return (
    <div
      style={{
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '1.25rem 0',
        position: 'sticky',
        top: '64px',
        zIndex: 20,
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Top Trust Banner */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '0.875rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #e2e8f0',
            fontSize: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0d7647', fontWeight: 700 }}>
            <span style={{ backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
              CỤM DỊCH VỤ AI SEARCH 2026
            </span>
            <span style={{ color: '#0f172a' }}>Hệ sinh thái đưa thương hiệu lên các cỗ máy AI thế hệ mới</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', color: '#475569', fontWeight: 600, fontSize: '0.8rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#0d7647' }}>
              <CheckCircle2 size={15} /> Chỉ từ <strong>2.900.000đ/tháng</strong>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#0369a1' }}>
              <ShieldCheck size={15} /> Bảo hành kỹ thuật <strong>5 năm</strong>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#b45309' }}>
              <MapPin size={15} /> Hỗ trợ <strong>1-1 tận nơi</strong> tại địa phương
            </span>
          </div>
        </div>

        {/* 4 Tabs Selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.75rem'
          }}
        >
          {services.map((srv) => {
            const isActive = currentServiceSlug === srv.slug;
            const Icon = srv.icon;

            return (
              <Link
                key={srv.slug}
                to={srv.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: isActive ? '#ffffff' : '#f1f5f9',
                  border: isActive ? '2px solid #0d7647' : '1px solid #cbd5e1',
                  color: '#0f172a',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(13, 118, 71, 0.12)' : 'none'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#0d7647' : '#e2e8f0',
                    color: isActive ? '#ffffff' : '#475569',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={18} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: '0.925rem',
                        color: isActive ? '#0d7647' : '#0f172a',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {srv.title}
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        backgroundColor: isActive ? '#dcfce7' : '#e2e8f0',
                        color: isActive ? '#0d7647' : '#475569',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        flexShrink: 0
                      }}
                    >
                      {srv.tag}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {srv.subtitle}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
