import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA } from '../data/company';
import { getAllCaseStudies } from '../data/caseStudiesData';
import {
  Sparkles, ArrowRight, MapPin, CheckCircle2, TrendingUp,
  Clock, ShieldCheck, PhoneCall, Award, Layers, Calendar,
  ExternalLink, BarChart3, Star, Zap, Gauge, HardDrive, Search, Quote
} from 'lucide-react';
import { useRouter } from '../components/layout/Router';

interface ProjectsPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const realProjects = COMPANY_DATA.caseStudies;
  const hypotheticalScenarios = getAllCaseStudies();
  const [activeTab, setActiveTab] = useState<'real' | 'scenarios'>('real');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { key: 'all', label: 'Tất cả ngành nghề (5)' },
    { key: 'y-te-nha-khoa', label: 'Y tế & Nha khoa' },
    { key: 'nha-hang-cafe', label: 'Cà phê & Nhà hàng' },
    { key: 'gara-cuu-ho', label: 'Gara & Cứu hộ ô tô' },
    { key: 'dien-tu-showroom', label: 'Âm thanh & Điện tử' },
    { key: 'dien-lanh-dich-vu', label: 'Sửa chữa điện lạnh' }
  ];

  const filteredScenarios = hypotheticalScenarios.filter((cs) => {
    return selectedIndustry === 'all' || cs.industryKey === selectedIndustry;
  });

  const handleOpenSurvey = (storeName?: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(storeName ? `Khảo sát tiệm: ${storeName}` : 'Khảo sát cơ sở kinh doanh 0đ');
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#fcfdfd', padding: '2rem 0 6rem 0' }}>
      <SEOHead
        title="Dự Án Thực Tế & Kết Quả Đo Lường Minh Bạch | LocalMate"
        description="Khám phá các dự án thực tế được bàn giao bởi LocalMate: Quán XÈO, Nội Thất Nam Phát, Hương Sen Spa với các chỉ số đo lường có thật: PageSpeed 98-99+, Tải <0.8s, Dung lượng <500KB, Lập chỉ mục Google và Top Google Maps."
        canonicalPath="/du-an"
        breadcrumbs={[
          { name: 'Dự án thực tế & Case Studies', url: '/du-an' }
        ]}
        schemaType="CreativeWork"
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Dự án thực tế & Case Studies', url: '/du-an' }
          ]}
        />

        {/* Hero Section - Minh Bạch & Kết Quả Đo Lường Thật */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '1rem auto 3rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#e6f7ef',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              marginBottom: '1.25rem',
              border: '1px solid #c7eed9'
            }}
          >
            <Sparkles size={16} color="#0d7647" /> KẾT QUẢ ĐO LƯỜNG MINH BẠCH — SỐ LIỆU THỰC CHỨNG
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 2.85rem)',
              color: '#0f172a',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              textWrap: 'pretty'
            }}
          >
            Dự Án Thực Tế &amp; Chỉ Số Hiệu Năng Đo Bằng Công Cụ Toàn Cầu
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '820px',
              margin: '0 auto 1.75rem auto',
              textWrap: 'pretty'
            }}
          >
            LocalMate tôn trọng sự thật và đặt kết quả kinh doanh của khách hàng lên hàng đầu: Không số liệu ảo, không dùng hình ảnh bịa đặt. Toàn bộ dự án dưới đây được đo lường trực tiếp bằng <strong>Google PageSpeed Insights, Chrome DevTools, Google Search Console và Google Maps</strong>.
          </p>

          {/* Transparency Statement */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #bbf7d0',
              borderRadius: '14px',
              padding: '0.9rem 1.4rem',
              maxWidth: '820px',
              margin: '0 auto 2.5rem auto',
              fontSize: '0.875rem',
              color: '#166534',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textAlign: 'left',
              boxShadow: '0 2px 6px rgba(13, 118, 71, 0.05)'
            }}
          >
            <ShieldCheck size={22} color="#0d7647" style={{ flexShrink: 0 }} />
            <span>
              <strong>Cam kết nghiệm thu thực tế:</strong> Khách hàng trực tiếp kiểm tra tốc độ tải trang, vị trí Maps và tính năng đặt đơn trên điện thoại cá nhân. Hài lòng 100% mới tiến hành thanh toán hợp đồng.
            </span>
          </div>

          {/* Highlight Real Metrics Scorecard */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '1rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '1.5rem',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: '#e6f7ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d7647', flexShrink: 0 }}>
                <Gauge size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0d7647', lineHeight: 1.1 }}>98 - 100</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>PageSpeed Mobile</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 }}>
                <Zap size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#d97706', lineHeight: 1.1 }}>&lt; 0.8 Giây</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Thời gian mở trang</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                <HardDrive size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0284c7', lineHeight: 1.1 }}>&lt; 500 KB</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Dung lượng siêu nhẹ</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7e22ce', flexShrink: 0 }}>
                <Search size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#7e22ce', lineHeight: 1.1 }}>100% Index</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Lập chỉ mục trong 24h</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', flexShrink: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#e11d48', lineHeight: 1.1 }}>Top 1 - 3</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Google Maps bán kính</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selection: Dự Án Thực Tế vs Kịch Bản Ngành */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setActiveTab('real')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'real' ? 800 : 600,
              backgroundColor: activeTab === 'real' ? '#0d7647' : '#ffffff',
              color: activeTab === 'real' ? '#ffffff' : '#334155',
              border: activeTab === 'real' ? '1px solid #0d7647' : '1px solid #cbd5e1',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'real' ? '0 4px 12px rgba(13, 118, 71, 0.25)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <Award size={18} /> Dự Án Thực Tế Đã Bàn Giao ({realProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('scenarios')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'scenarios' ? 800 : 600,
              backgroundColor: activeTab === 'scenarios' ? '#0d7647' : '#ffffff',
              color: activeTab === 'scenarios' ? '#ffffff' : '#334155',
              border: activeTab === 'scenarios' ? '1px solid #0d7647' : '1px solid #cbd5e1',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'scenarios' ? '0 4px 12px rgba(13, 118, 71, 0.25)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <Layers size={18} /> Kịch Bản &amp; Workflow Mẫu Theo Ngành ({hypotheticalScenarios.length})
          </button>
        </div>

        {/* TAB 1: DỰ ÁN THỰC TẾ (VERIFIED CASE STUDIES) */}
        {activeTab === 'real' && (
          <div>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#e6f7ef',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid #c7eed9'
                }}
              >
                DANH SÁCH DỰ ÁN KHÁCH HÀNG THỰC TẾ
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Khách Hàng Địa Phương Đã Nghiệm Thu &amp; Vận Hành
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '650px', margin: '0 auto' }}>
                Bấm vào từng dự án để xem quy trình xử lý điểm nghẽn, bảng đối chiếu trước - sau và ảnh chụp chứng minh chỉ số đo lường.
              </p>
            </div>

            {/* Real Projects Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {realProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate(project.canonicalPath)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '24px',
                    padding: '2.25rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.25s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#0d7647';
                    e.currentTarget.style.boxShadow = '0 14px 28px rgba(13, 118, 71, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  <div>
                    {/* Header Tags */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: '#0d7647',
                          backgroundColor: '#e6f7ef',
                          padding: '0.35rem 0.8rem',
                          borderRadius: '9999px',
                          border: '1px solid #c7eed9'
                        }}
                      >
                        {project.industry}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                        <MapPin size={14} color="#0d7647" /> {project.location}
                      </span>
                    </div>

                    {/* Client Name & Title */}
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 900,
                        color: '#0f172a',
                        marginBottom: '0.65rem',
                        lineHeight: 1.35
                      }}
                    >
                      {project.clientName}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {project.title}
                    </p>

                    {/* 5 Real Metrics Badges */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                        backgroundColor: '#f8fafc',
                        padding: '1rem',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Google PageSpeed</div>
                        <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0d7647', lineHeight: 1.2 }}>
                          {project.metrics.lighthouseScore} / 100
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Thời gian tải trang</div>
                        <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#d97706', lineHeight: 1.2 }}>
                          {project.metrics.pageSpeedMobile}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Dung lượng trang</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0284c7', lineHeight: 1.2 }}>
                          {project.metrics.pageWeight}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Lập chỉ mục Search</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#7e22ce', lineHeight: 1.2 }}>
                          {project.metrics.googleIndexing}
                        </div>
                      </div>

                      <div style={{ gridColumn: 'span 2', borderTop: '1px dashed #cbd5e1', paddingTop: '0.5rem' }}>
                        <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Vị trí Google Maps</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#e11d48' }}>
                          ✓ {project.metrics.mapRank}
                        </div>
                      </div>
                    </div>

                    {/* Deliverable highlight */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Hạng mục công nghệ bàn giao:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              backgroundColor: '#f1f5f9',
                              color: '#334155',
                              padding: '0.25rem 0.55rem',
                              borderRadius: '6px'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Customer Quote Snippet */}
                    <div
                      style={{
                        backgroundColor: '#f0fdf4',
                        borderLeft: '3px solid #0d7647',
                        padding: '0.75rem 1rem',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '0.85rem',
                        color: '#1e293b',
                        fontStyle: 'italic',
                        marginBottom: '1.5rem',
                        lineHeight: 1.55
                      }}
                    >
                      "{project.testimonial.quote.slice(0, 110)}..."
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0d7647', fontStyle: 'normal', marginTop: '0.35rem' }}>
                        — {project.testimonial.author} ({project.testimonial.role})
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid #f1f5f9',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: '#0d7647'
                    }}
                  >
                    <span>Xem toàn bộ quy trình &amp; kết quả</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              ))}
            </div>

            {/* REAL METRICS COMPARISON TABLE */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '24px',
                padding: '2.5rem',
                marginBottom: '4.5rem',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#0d7647',
                    backgroundColor: '#e6f7ef',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    border: '1px solid #c7eed9'
                  }}
                >
                  BẢNG SO SÁNH CHỈ SỐ KỸ THUẬT
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                  Đối Chiếu 5 Chỉ Số Đo Lường Cốt Lõi Trên 3 Dự Án
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                  Thông số thực tế ghi nhận sau khi triển khai và bàn giao toàn quyền tài sản số cho khách hàng.
                </p>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', width: '24%' }}>DỰ ÁN KHÁCH HÀNG</th>
                      <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', width: '15%' }}>PAGESPEED</th>
                      <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#d97706', width: '15%' }}>TẢI TRANG</th>
                      <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0284c7', width: '14%' }}>DUNG LƯỢNG</th>
                      <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#7e22ce', width: '18%' }}>GOOGLE INDEX</th>
                      <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#e11d48', width: '14%' }}>MAPS RANK</th>
                    </tr>
                  </thead>
                  <tbody>
                    {realProjects.map((proj, idx) => (
                      <tr
                        key={proj.id}
                        style={{
                          borderBottom: '1px solid #f1f5f9',
                          backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa'
                        }}
                      >
                        <td style={{ padding: '1.25rem 1rem', verticalAlign: 'top' }}>
                          <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.98rem' }}>
                            {proj.clientName}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                            <MapPin size={12} color="#0d7647" /> {proj.location}
                          </div>
                          <span
                            style={{
                              display: 'inline-block',
                              marginTop: '0.4rem',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              backgroundColor: '#e6f7ef',
                              color: '#0d7647',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px'
                            }}
                          >
                            {proj.timeline}
                          </span>
                        </td>

                        <td style={{ padding: '1.25rem 1rem', verticalAlign: 'top' }}>
                          <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0d7647' }}>
                            {proj.metrics.lighthouseScore} <span style={{ fontSize: '0.85rem', color: '#64748b' }}>/ 100</span>
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#0d7647', fontWeight: 700, marginTop: '0.2rem' }}>
                            Mức Xanh Tối Đa
                          </div>
                        </td>

                        <td style={{ padding: '1.25rem 1rem', verticalAlign: 'top' }}>
                          <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#d97706' }}>
                            {proj.metrics.pageSpeedMobile}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginTop: '0.2rem' }}>
                            Độ trễ &lt; 1 giây
                          </div>
                        </td>

                        <td style={{ padding: '1.25rem 1rem', verticalAlign: 'top' }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0284c7' }}>
                            {proj.metrics.pageWeight}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginTop: '0.2rem' }}>
                            Chuẩn &lt; 500KB
                          </div>
                        </td>

                        <td style={{ padding: '1.25rem 1rem', verticalAlign: 'top', fontSize: '0.85rem', color: '#334155', fontWeight: 700 }}>
                          <div style={{ color: '#7e22ce' }}>✓ {proj.metrics.googleIndexing}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500, marginTop: '0.2rem' }}>
                            Đồng bộ Search Console
                          </div>
                        </td>

                        <td style={{ padding: '1.25rem 1rem', verticalAlign: 'top', fontSize: '0.85rem', color: '#0f172a', fontWeight: 800 }}>
                          <div style={{ color: '#e11d48' }}>{proj.metrics.mapRank}</div>
                          <button
                            onClick={() => navigate(proj.canonicalPath)}
                            style={{
                              marginTop: '0.5rem',
                              backgroundColor: '#ffffff',
                              border: '1px solid #cbd5e1',
                              color: '#0d7647',
                              padding: '0.35rem 0.75rem',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 4
                            }}
                          >
                            Xem chi tiết <ArrowRight size={12} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KỊCH BẢN & WORKFLOW MẪU THEO NGÀNH (BLUEPRINTS) */}
        {activeTab === 'scenarios' && (
          <div>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#e6f7ef',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid #c7eed9'
                }}
              >
                KỊCH BẢN GIẢ ĐỊNH &amp; WORKFLOW KỸ THUẬT
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Mô Phỏng Cách LocalMate Tháo Gỡ Điểm Nghẽn Theo Từng Ngành
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                Các tình huống giả định phổ biến giúp bạn hình dung rõ ràng quy trình kỹ thuật sẽ áp dụng cho mô hình kinh doanh của mình.
              </p>
            </div>

            {/* Industry Filter Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                justifyContent: 'center',
                marginBottom: '2.5rem'
              }}
            >
              {industries.map((ind) => {
                const isActive = selectedIndustry === ind.key;
                return (
                  <button
                    key={ind.key}
                    onClick={() => setSelectedIndustry(ind.key)}
                    style={{
                      padding: '0.65rem 1.25rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 800 : 600,
                      backgroundColor: isActive ? '#0d7647' : '#ffffff',
                      color: isActive ? '#ffffff' : '#334155',
                      border: isActive ? '1px solid #0d7647' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: isActive ? '0 4px 10px rgba(13, 118, 71, 0.2)' : '0 1px 2px rgba(0,0,0,0.03)'
                    }}
                  >
                    {ind.label}
                  </button>
                );
              })}
            </div>

            {/* Scenarios Visual Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem', marginBottom: '4.5rem' }}>
              {filteredScenarios.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => navigate(`/du-an/${cs.slug}`)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#0d7647';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(13, 118, 71, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: '#0d7647',
                          backgroundColor: '#e6f7ef',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          border: '1px solid #c7eed9'
                        }}
                      >
                        {cs.industry}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
                        <MapPin size={13} color="#94a3b8" /> {cs.location.split(',')[0]}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '0.4rem',
                        lineHeight: 1.35
                      }}
                    >
                      {cs.clientDisplayName}
                    </h3>

                    {cs.clientSubtitle && (
                      <p style={{ fontSize: '0.85rem', color: '#0d7647', fontWeight: 600, marginBottom: '0.85rem' }}>
                        {cs.clientSubtitle}
                      </p>
                    )}

                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {cs.resultsSummary}
                    </p>

                    {/* Scorecard: 2 Highlight Evidence Metrics */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.75rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {cs.evidence.slice(0, 2).map((ev, evIdx) => (
                        <div
                          key={evIdx}
                          style={{
                            backgroundColor: '#f8fafc',
                            padding: '0.85rem',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0'
                          }}
                        >
                          <div style={{ fontSize: '1.35rem', fontWeight: 900, color: evIdx === 0 ? '#ea580c' : '#0d7647', lineHeight: 1.1 }}>
                            {ev.value}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#0f172a', fontWeight: 700, marginTop: '0.3rem' }}>
                            {ev.metric}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.15rem' }}>
                            {ev.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technical Solution Highlight Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>Giải pháp mũi nhọn:</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {cs.technicalSolutions.slice(0, 2).map((ts, tsIdx) => (
                          <span
                            key={tsIdx}
                            style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              backgroundColor: '#f1f5f9',
                              color: '#0f172a',
                              padding: '0.2rem 0.5rem',
                              borderRadius: '6px'
                            }}
                          >
                            {ts.tag || ts.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px dashed #e2e8f0',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#0d7647'
                    }}
                  >
                    <span>Xem chi tiết kịch bản &amp; workflow</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section - Đặt Lịch Khảo Sát Cơ Sở 0đ (100% Light Mode) */}
        <div
          style={{
            backgroundColor: '#f0fdf4',
            border: '2px solid #bbf7d0',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#ffffff',
              padding: '0.35rem 0.95rem',
              borderRadius: '9999px',
              border: '1px solid #86efac',
              marginBottom: '1.25rem'
            }}
          >
            <PhoneCall size={15} color="#0d7647" /> ĐẶT HẸN KHẢO SÁT TIỆM TẬN NƠI 0Đ
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '1rem',
              lineHeight: 1.3
            }}
          >
            Bạn Muốn Kiểm Tra Điểm Nghẽn Số &amp; Lên Phương Án Cho Cơ Sở Của Mình?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#334155',
              maxWidth: '680px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.7
            }}
          >
            Kỹ thuật viên của LocalMate sẽ đến tận nơi hoặc rà soát online: kiểm tra tọa độ Google Maps, đo tốc độ website hiện tại và lập phương án giải pháp chi tiết — Bàn giao chạy thử nghiệm thu hài lòng mới thanh toán.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleOpenSurvey()}
              style={{
                fontWeight: 800,
                fontSize: '1rem',
                padding: '0.9rem 2rem',
                backgroundColor: '#0d7647',
                boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)'
              }}
            >
              Nhận khảo sát cơ sở 0đ từ kỹ thuật viên →
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/lien-he')}
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#0f172a'
              }}
            >
              Tư vấn qua Zalo / Hotline ({COMPANY_DATA.entity.contact.hotlineDisplay})
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '2rem',
              fontSize: '0.85rem',
              color: '#475569',
              fontWeight: 600
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#0d7647" /> Không thu bất kỳ khoản phí khảo sát nào
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#0d7647" /> Phản hồi báo cáo hoặc khảo sát trong 24 giờ
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#0d7647" /> Khách hàng sở hữu 100% tài sản số chính chủ
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
