import React from 'react';
import { Container } from '../components/ui/Container';
import { INDUSTRY_SOLUTIONS } from '../data/landingContent';
import { CheckCircle2, ArrowRight, Sparkles, Building2, Utensils, GraduationCap, Store, Briefcase, MapPin, Globe, Search, Bot, Layers } from 'lucide-react';
import { useRouter } from '../components/layout/Router';
import { SolutionJourneySection } from '../components/sections/SolutionJourneySection';
import { GrowthFlywheelSection } from '../components/sections/GrowthFlywheelSection';
import { MarketComparisonSection } from '../components/sections/MarketComparisonSection';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  'nha-hang': Utensils,
  'giao-duc': GraduationCap,
  'xay-dung': Building2,
  'spa': Sparkles,
  'cua-hang': Store,
  'doanh-nghiep-nho': Briefcase
};

const CAPABILITY_MODULES = [
  {
    title: 'Local Search & Google Maps & Technical',
    desc: 'Xác minh Google Maps GPS chính chủ, chống cướp Maps, SEO bán kính 3–10km và cam kết PageSpeed 90+ trên Cloudflare.',
    slug: '/dich-vu/local-search',
    badge: 'Bảo Hành 5 Năm',
    icon: MapPin
  },
  {
    title: 'Dịch Vụ GEO Địa Phương 2026',
    desc: 'Chuẩn bị dữ liệu thực thể, cấy Schema LocalBusiness và xây dựng Prompt Bank để AI chủ động trích dẫn thương hiệu.',
    slug: '/dich-vu/geo',
    badge: 'Đón Đầu Kỷ Nguyên AI',
    icon: Sparkles
  },
  {
    title: 'Tối Ưu Trích Dẫn AI (AEO)',
    desc: 'Đưa website thành nguồn trích dẫn uy tín (Primary Citation) trên Perplexity, ChatGPT Search và Google Snippets.',
    slug: '/dich-vu/aeo',
    badge: 'Zero-Click Search',
    icon: Globe
  },
  {
    title: 'Tối Ưu Xuất Hiện Trên Google AI Overviews',
    desc: 'Tối ưu Information Gain độc quyền, cấu trúc dữ liệu máy đọc để hiện diện vị trí tổng quan AI đầu Google.',
    slug: '/dich-vu/seo-ai',
    badge: 'Vị Trí Tổng Quan AI',
    icon: Search
  },
  {
    title: 'Tối Ưu Đề Xuất ChatGPT & SearchGPT',
    desc: 'Cấu hình tệp chuẩn llms.txt, đồng bộ Open Data để xuất hiện tự nhiên trong các cuộc hội thoại mua sắm.',
    slug: '/dich-vu/seo-chatgpt',
    badge: '600M+ Người Dùng',
    icon: Bot
  },
  {
    title: 'Chạy Khách Quanh Tiệm & Chăm Sóc Vận Hành',
    desc: 'Google Ads 0% phí kê giá, Facebook Ads bán kính 5km, gỡ lỗi chính sách nhạy cảm và chăm sóc web trọn gói.',
    slug: '/dich-vu/chay-khach-cham-soc',
    badge: 'Minh Bạch 100%',
    icon: Layers
  }
];

interface SolutionsPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenConsultForm }) => {
  const { currentPath, navigate } = useRouter();

  const cleanPath = currentPath.replace(/\/$/, '');
  const activeSubSlug = cleanPath.replace(/^\/giai-phap\/?/, '');
  const isFoundSolution = activeSubSlug === 'duoc-tim-thay';
  const activeSolution = INDUSTRY_SOLUTIONS.find((s) => s.id === activeSubSlug) || null;

  return (
    <div style={{ backgroundColor: '#f8fbfa', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-teal)" /> {isFoundSolution ? 'GIẢI PHÁP TỔNG THỂ' : 'LOCALMATE VERTICAL HUB'}
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            {isFoundSolution
              ? 'Giải Pháp: Được Khách Hàng Tìm Thấy Trên Google & AI'
              : activeSolution
              ? `Giải Pháp Website & Marketing: ${activeSolution.title}`
              : 'Giải Pháp Theo Ngành Nghề Kinh Doanh'}
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            {isFoundSolution
              ? 'Mô hình phủ sóng toàn diện: chuẩn bị dữ liệu gốc để khách hàng và các công cụ tìm kiếm AI (Google Maps, AI Overviews, ChatGPT, Perplexity) dễ dàng tìm thấy cơ sở của bạn.'
              : activeSolution
              ? activeSolution.description
              : 'Mô hình chuẩn hóa giao diện, từ khóa SEO và kịch bản tìm kiếm khách hàng cho từng lĩnh vực kinh doanh cụ thể.'}
          </p>
        </div>

        {/* Industry Pill Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => navigate('/giai-phap')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: !activeSolution ? 700 : 600,
              backgroundColor: !activeSolution ? 'var(--color-navy)' : '#ffffff',
              color: !activeSolution ? '#ffffff' : 'var(--color-navy)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer'
            }}
          >
            Tất cả ngành nghề
          </button>
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const isActive = activeSolution?.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => navigate(ind.slug)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 600,
                  backgroundColor: isActive ? 'var(--color-navy)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-navy)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer'
                }}
              >
                {ind.title}
              </button>
            );
          })}
        </div>

        {/* Display Grid or Detail */}
        {isFoundSolution ? (
          <div>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                6 Năng Lực Kỹ Thuật Chuyên Sâu Trực Thuộc
              </h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '720px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Tùy theo hiện trạng thực tế và mục tiêu tăng trưởng, bạn có thể triển khai từng module riêng lẻ hoặc kết hợp thành gói giải pháp toàn diện.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {CAPABILITY_MODULES.map((mod, idx) => {
                const IconComp = mod.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '1.75rem',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1.25rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconComp size={22} color="#0d7647" />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#e8f5ed', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                          {mod.badge}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                        {mod.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        {mod.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate(mod.slug)}
                      style={{
                        padding: '0.7rem 1rem',
                        backgroundColor: '#f8fafc',
                        color: 'var(--color-navy)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontWeight: 700,
                        fontSize: '0.825rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span>Xem chi tiết năng lực</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : activeSolution ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
              {activeSolution.badge}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.75rem', marginBottom: '1rem' }}>
              Giải pháp cho {activeSolution.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activeSolution.description}
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
              Tính năng chuẩn hóa theo ngành:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {activeSolution.keyFeatures.map((ft, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fbfa',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)'
                  }}
                >
                  <CheckCircle2 size={20} color="var(--color-teal-dark)" />
                  <span>{ft}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/lien-he')}
                style={{
                  padding: '0.85rem 2rem',
                  backgroundColor: 'var(--color-orange)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                Đăng ký tư vấn giải pháp {activeSolution.title}
              </button>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Gói khuyên dùng: <strong style={{ color: 'var(--color-navy)' }}>{activeSolution.recommendedPackage}</strong>
              </span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {INDUSTRY_SOLUTIONS.map((ind) => {
              const Icon = ICON_MAP[ind.id] || Briefcase;
              return (
                <div
                  key={ind.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={22} color="var(--color-teal-dark)" />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                        {ind.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                      {ind.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {ind.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {ind.keyFeatures.slice(0, 3).map((ft, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                          <CheckCircle2 size={14} color="var(--color-teal-dark)" />
                          <span>{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(ind.slug)}
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--color-navy)',
                      color: '#ffffff',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span>Xem giải pháp ngành {ind.title}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </Container>

      {/* Lộ trình đầu tư thông minh 3 bước */}
      <SolutionJourneySection />

      {/* Bánh đà Tăng trưởng Doanh thu Địa phương 4 Giai đoạn */}
      <GrowthFlywheelSection onOpenConsultForm={onOpenConsultForm} />

      {/* So sánh minh bạch thị trường — Agency lớn vs LocalMate */}
      <MarketComparisonSection onOpenConsultForm={onOpenConsultForm} />
    </div>
  );
};
