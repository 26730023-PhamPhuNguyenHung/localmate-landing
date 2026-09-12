import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { getAllCaseStudies } from '../data/caseStudiesData';
import {
  Sparkles, ArrowRight, MapPin, CheckCircle2, TrendingUp,
  Clock, ShieldCheck, PhoneCall, Award, Layers, Calendar,
  ExternalLink, BarChart3, Star
} from 'lucide-react';
import { useRouter } from '../components/layout/Router';

interface ProjectsPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const caseStudies = getAllCaseStudies();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { key: 'all', label: 'Tất cả ngành nghề (5)' },
    { key: 'y-te-nha-khoa', label: 'Y tế & Nha khoa' },
    { key: 'nha-hang-cafe', label: 'Cà phê & Nhà hàng' },
    { key: 'gara-cuu-ho', label: 'Gara & Cứu hộ ô tô' },
    { key: 'dien-tu-showroom', label: 'Âm thanh & Điện tử' },
    { key: 'dien-lanh-dich-vu', label: 'Sửa chữa điện lạnh' }
  ];

  const filteredCaseStudies = caseStudies.filter((cs) => {
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
        title="Hồ Sơ Dự Án Thực Tế & Số Liệu Đo Lường | LocalMate"
        description="Khám phá 5 câu chuyện khách hàng thực tế của LocalMate: Từ cơ sở mới vắng khách vươn lên Top 1 Google Maps, tiết kiệm 100% chi phí ads, hoàn vốn sau 3 ngày và tăng tỷ lệ chốt đơn từ 30% lên 75%."
        canonicalPath="/du-an"
        breadcrumbs={[
          { name: 'Dự án thực tế', url: '/du-an' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Dự án thực tế', url: '/du-an' }
          ]}
        />

        {/* Hero Section - FastMarketing Style */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '1rem auto 3rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#e6f7ef',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              marginBottom: '1.25rem',
              border: '1px solid #c7eed9'
            }}
          >
            <Sparkles size={16} color="#0d7647" /> HỒ SƠ DỰ ÁN ĐO LƯỜNG THỰC TẾ (CASE STUDIES MATRIX)
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#0f172a',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}
          >
            Nói Thực, Làm Kỹ, Số Liệu Đo Lường Minh Bạch
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '750px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            Mỗi cơ sở kinh doanh địa phương là một bài toán riêng biệt. Không lý thuyết suông, LocalMate đồng hành giải quyết tận gốc điểm nghẽn bằng giải pháp công nghệ thực chiến, giúp chủ tiệm kéo khách thật và gia tăng doanh số.
          </p>

          {/* Highlight Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '1rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#e6f7ef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d7647', flexShrink: 0 }}>
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>5 Cơ Sở</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Dự án tiêu biểu có số liệu thật</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 }}>
                <TrendingUp size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#d97706', lineHeight: 1.1 }}>Top 1 &amp; +250%</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Tăng trưởng cuộc gọi &amp; khách tới</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0284c7', lineHeight: 1.1 }}>4 - 7 Ngày</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Thời gian triển khai thần tốc</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7e22ce', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#7e22ce', lineHeight: 1.1 }}>100% Đo Thật</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Có đối chiếu Before/After rõ ràng</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            justifyContent: 'center',
            marginBottom: '3rem'
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

        {/* Case Studies Visual Cards Grid (FastMarketing Style) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem', marginBottom: '4.5rem' }}>
          {filteredCaseStudies.map((cs, idx) => (
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
              {/* Card Header */}
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
                <span>Xem chi tiết câu chuyện &amp; số liệu</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* CASE STUDIES MATRIX TABLE - FastMarketing Reference */}
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
              ĐỐI CHIẾU NHANH
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Bảng Ma Trận 5 Dự Án Khách Hàng Tiêu Biểu (SSOT Matrix)
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Đối chiếu trực quan bài toán kinh doanh, giải pháp công nghệ đã thực hiện và kết quả đo lường Before / After thật của từng cơ sở.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '760px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', width: '22%' }}>CƠ SỞ &amp; NGÀNH</th>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#c62828', width: '24%' }}>ĐIỂM NGHẼN TRƯỚC ĐÓ</th>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', width: '26%' }}>GIẢI PHÁP KỸ THUẬT</th>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#0284c7', width: '18%' }}>KẾT QUẢ ĐỘT PHÁ</th>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 800, color: '#334155', width: '10%', textAlign: 'center' }}>XEM</th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((cs, idx) => (
                  <tr
                    key={cs.id}
                    style={{
                      borderBottom: '1px solid #f1f5f9',
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa'
                    }}
                  >
                    <td style={{ padding: '1.15rem 1rem', verticalAlign: 'top' }}>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem' }}>
                        {cs.clientDisplayName}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <MapPin size={12} /> {cs.location}
                      </div>
                      <span
                        style={{
                          display: 'inline-block',
                          marginTop: '0.4rem',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px'
                        }}
                      >
                        {cs.industry}
                      </span>
                    </td>

                    <td style={{ padding: '1.15rem 1rem', verticalAlign: 'top', fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      <div style={{ color: '#b91c1c', fontWeight: 700, marginBottom: '0.25rem' }}>
                        ✗ {cs.bottlenecks[0]?.title || cs.problem}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        {cs.startingState[0]}
                      </div>
                    </td>

                    <td style={{ padding: '1.15rem 1rem', verticalAlign: 'top', fontSize: '0.85rem', color: '#0f172a', lineHeight: 1.5 }}>
                      <div style={{ fontWeight: 700, color: '#0d7647', marginBottom: '0.25rem' }}>
                        ✓ {cs.technicalSolutions[0]?.title}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                        {cs.technicalSolutions[1]?.title}
                      </div>
                    </td>

                    <td style={{ padding: '1.15rem 1rem', verticalAlign: 'top' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ea580c' }}>
                        {cs.evidence[0]?.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>
                        {cs.evidence[0]?.metric}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#0d7647', fontWeight: 600, marginTop: '0.2rem' }}>
                        {cs.evidence[1]?.metric}: {cs.evidence[1]?.value}
                      </div>
                    </td>

                    <td style={{ padding: '1.15rem 1rem', verticalAlign: 'middle', textAlign: 'center' }}>
                      <button
                        onClick={() => navigate(`/du-an/${cs.slug}`)}
                        style={{
                          backgroundColor: '#e6f7ef',
                          border: '1px solid #c7eed9',
                          color: '#0d7647',
                          padding: '0.5rem 0.85rem',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4
                        }}
                      >
                        Chi tiết <ArrowRight size={13} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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
            Bạn Muốn Cơ Sở Của Mình Cũng Đạt Kết Quả Đột Phá Như Thế Này?
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
            Chuyên gia của LocalMate sẽ đến tận tiệm hoặc khảo sát trực tuyến: kiểm tra vị trí Google Maps, rà soát đối thủ cạnh tranh bán kính 5km và lên phương án kỹ thuật miễn phí trước khi bạn quyết định triển khai.
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
              Đăng ký khảo sát cơ sở 0đ ngay →
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
              Tư vấn qua Zalo / Hotline
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
              <CheckCircle2 size={16} color="#0d7647" /> Có mặt hoặc phản hồi báo cáo trong 24 giờ
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={16} color="#0d7647" /> Tư vấn giải pháp sát sườn với ngân sách thực tế
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
