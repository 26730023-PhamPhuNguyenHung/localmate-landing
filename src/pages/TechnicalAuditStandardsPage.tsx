import React, { useState, useMemo } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import {
  AUDIT_CATEGORIES,
  AUDIT_CRITERIA_30,
  AUDIT_STATS,
  COMPARISON_TABLE,
  AUDIT_FAQS,
  AuditCriterion,
  CategoryId,
  PriorityLevel
} from '../data/technicalAuditStandardsData';
import { CONTACT_INFO, COMPANY_INFO } from '../data/landingContent';
import { submitLead } from '../services/leadService';
import {
  Zap,
  MapPin,
  Code2,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Check,
  Search,
  Printer,
  FileDown,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  CheckSquare,
  Square,
  Award,
  Lock,
  PhoneCall,
  Flame,
  Layers,
  Smartphone,
  Info
} from 'lucide-react';

interface TechnicalAuditStandardsPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const TechnicalAuditStandardsPage: React.FC<TechnicalAuditStandardsPageProps> = ({
  onOpenConsultForm
}) => {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Checklist State: Track which criteria are checked (default empty or pre-selected)
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  // Accordion FAQ state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Form submission state
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    phone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Toggle single criterion checked
  const toggleCriterion = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Check all / Uncheck all
  const handleCheckAll = () => {
    const allIds = new Set(AUDIT_CRITERIA_30.map((c) => c.id));
    setCheckedIds(allIds);
  };

  const handleResetChecklist = () => {
    setCheckedIds(new Set());
  };

  // Filtered criteria based on tabs, priority, and search
  const filteredCriteria = useMemo(() => {
    return AUDIT_CRITERIA_30.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.categoryId === selectedCategory;
      const matchPriority =
        selectedPriority === 'all' || item.priority === selectedPriority;
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.benchmark.toLowerCase().includes(query) ||
        item.simpleExplanation.toLowerCase().includes(query) ||
        item.localmateSolution.toLowerCase().includes(query);

      return matchCategory && matchPriority && matchSearch;
    });
  }, [selectedCategory, selectedPriority, searchQuery]);

  // Checklist score calculation
  const scoreCount = checkedIds.size;
  const scorePercent = Math.round((scoreCount / AUDIT_STATS.total) * 100);

  // Score diagnostic assessment
  const getAssessment = () => {
    if (scoreCount === 0) {
      return {
        label: 'Chưa chấm điểm',
        desc: 'Hãy tích chọn các mục mà website hoặc điểm kinh doanh của bạn hiện đã đáp ứng để xem đánh giá.',
        color: '#64748b',
        bgColor: '#f1f5f9'
      };
    }
    if (scoreCount < 15) {
      return {
        label: '⚠️ Báo động rủi ro cao (Dưới 50%)',
        desc: 'Cơ sở của bạn có nguy cơ mất tới hơn 50% khách hàng tiềm năng vì tải chậm, sai sót bản đồ hoặc thiếu cấu trúc dữ liệu để Google/AI đề xuất.',
        color: '#dc2626',
        bgColor: '#fef2f2'
      };
    }
    if (scoreCount < 24) {
      return {
        label: '⚡ Mức độ trung bình (50% - 79%)',
        desc: 'Website đã đáp ứng được một số tiêu chuẩn cơ bản nhưng chưa sẵn sàng cho cuộc đua AI Search và có thể bị các đối thủ được tối ưu bài bản vượt mặt.',
        color: '#d97706',
        bgColor: '#fffbeb'
      };
    }
    return {
      label: '🏆 Chuẩn mực xuất sắc (80% - 100%)',
      desc: 'Điểm kinh doanh đạt chuẩn mực kỹ thuật số 2026 cao nhất: Tốc độ siêu tốc, vị trí GPS ghim chuẩn, đầy đủ Schema và tối ưu hoàn hảo cho các trợ lý AI.',
      color: '#0d7647',
      bgColor: '#ecfdf5'
    };
  };

  const assessment = getAssessment();

  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Form submit handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName.trim() || !formData.phone.trim()) {
      setFormError('Vui lòng nhập tên điểm kinh doanh và số điện thoại / Zalo.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      await submitLead({
        name: formData.businessName,
        phone: formData.phone,
        businessName: formData.businessName,
        serviceInterest: 'Đăng ký Audit Kỹ Thuật 30 Tiêu Chuẩn Điểm Kinh Doanh (0đ)',
        message: `Website cần kiểm tra: ${formData.websiteUrl || 'Chưa có website'} | Ghi chú: ${formData.notes || 'Không có'} | Điểm tự chấm: ${scoreCount}/30 tiêu chí`,
        sourcePage: '/tieu-chuan-audit'
      });
      setSubmitSuccess(true);
      setFormData({
        businessName: '',
        websiteUrl: '',
        phone: '',
        notes: ''
      });
    } catch {
      setFormError('Có lỗi xảy ra khi gửi đăng ký. Bạn vui lòng gọi hotline 0834.422.439 để nhận báo cáo ngay.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="audit-standards-page" style={{ backgroundColor: '#f8fafc', paddingBottom: '5rem' }}>
      <SEOHead
        title="Bộ Tiêu Chuẩn Kỹ Thuật Số Điểm Kinh Doanh Địa Phương 2026 | LocalMate"
        description="Bảng danh mục 30 tiêu chí kỹ thuật chuẩn mực cho website địa phương 2026: Core Web Vitals <1.2s, NAP đồng nhất, Schema LocalBusiness, tệp llms.txt cho AI Search và bảo mật Cloudflare TLS 1.3."
        canonicalPath="/tieu-chuan-audit"
        breadcrumbs={[
          { name: 'Tiêu chuẩn Audit Kỹ thuật 2026', url: '/tieu-chuan-audit' }
        ]}
      />

      {/* STYLES FOR PRINTING & LIGHT MODE CLEAN LOOK */}
      <style>{`
        @media print {
          /* Hide non-printable elements */
          header, footer, nav, .localmate-footer, .no-print, .mobile-floating-cta, #main-content > header {
            display: none !important;
          }
          body, .audit-standards-page {
            background-color: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-header {
            display: block !important;
            border-bottom: 2px solid #0d7647;
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
          }
          .audit-card {
            break-inside: avoid;
            page-break-inside: avoid;
            border: 1px solid #cbd5e1 !important;
            margin-bottom: 1rem !important;
            box-shadow: none !important;
          }
          .container {
            max-width: 100% !important;
            padding: 0 1cm !important;
          }
        }
        .print-header {
          display: none;
        }
        .filter-tab-btn {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          padding: 0.6rem 1.1rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        .filter-tab-btn:hover {
          border-color: #0d7647;
          color: #0d7647;
          background-color: #f0fdf4;
        }
        .filter-tab-btn.active {
          background-color: #0d7647;
          color: #ffffff;
          border-color: #0d7647;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.25);
        }
        .priority-chip-btn {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          color: #475569;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .priority-chip-btn:hover {
          border-color: #cbd5e1;
          background-color: #f8fafc;
        }
        .priority-chip-btn.active {
          background-color: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }
        .audit-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.5rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .audit-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
        }
        .audit-card.is-checked {
          border-color: #86efac;
          background-color: #fbfdfb;
        }
      `}</style>

      {/* PRINT-ONLY HEADER FOR CLEAN PDF EXPORT */}
      <div className="print-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.4rem', color: '#0d7647', margin: 0, fontWeight: 800 }}>
              LOCALMATE — BỘ TIÊU CHUẨN KỸ THUẬT SỐ ĐIỂM KINH DOANH 2026
            </h1>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#475569' }}>
              30 Tiêu chí đo lường: Tốc độ di động | Bản đồ GPS | Dữ liệu Schema | AI Search (AEO) | Bảo mật Cloudflare
            </p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#64748b' }}>
            <strong>Hotline/Zalo:</strong> {CONTACT_INFO.phoneFormatted}<br />
            <strong>Website:</strong> https://localmate.vn
          </div>
        </div>
      </div>

      <Container size="lg">
        {/* BREADCRUMBS */}
        <div style={{ paddingTop: '1.5rem' }}>
          <Breadcrumbs
            items={[
              { name: 'Tiêu chuẩn Audit Kỹ thuật 2026', url: '/tieu-chuan-audit' }
            ]}
          />
        </div>

        {/* HERO SECTION */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: ' clamp(1.75rem, 4vw, 3rem)',
            marginTop: '0.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)'
          }}
        >
          {/* Top Badge */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#0d7647',
                backgroundColor: '#edf7f1',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid #c6ebd4'
              }}
            >
              <Award size={14} /> CHUẨN MỰC AUDIT WEBSITE 2026
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#475569',
                backgroundColor: '#f1f5f9',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px'
              }}
            >
              Tham chiếu FastMarketing &amp; Google Core Web Vitals
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#1d4ed8',
                backgroundColor: '#eff6ff',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px'
              }}
            >
              Sẵn sàng cho ChatGPT, Gemini &amp; Perplexity
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
              lineHeight: 1.25,
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Bộ Tiêu Chuẩn Kỹ Thuật Số Điểm Kinh Doanh Địa Phương 2026
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#334155',
              lineHeight: 1.65,
              maxWidth: '860px',
              marginBottom: '2rem'
            }}
          >
            Bảng danh mục <strong>30 tiêu chí kỹ thuật chuẩn mực</strong> được phân bổ thành 5 nhóm năng lực cốt lõi.
            Được thiết kế giải thích bằng ngôn ngữ giản dị, thực tế cho chủ tiệm, quán ăn, phòng khám và cơ sở dịch vụ
            địa phương; kèm giải pháp kỹ thuật triệt để từ đội ngũ LocalMate.
          </p>

          {/* Key Metric Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              marginBottom: '2rem'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0d7647' }}>30</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Tiêu chí kiểm chuẩn</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#dc2626' }}>14</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Bắt buộc (Must)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#2563eb' }}>10</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Quan trọng (Should)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#7c3aed' }}>6</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Nâng cao (Nice-to-have)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f172a' }}>5</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Trụ cột kỹ thuật</div>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
            <a
              href="#form-audit-mien-phi"
              style={{
                backgroundColor: '#0d7647',
                color: '#ffffff',
                padding: '0.75rem 1.4rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 10px rgba(13, 118, 71, 0.25)',
                minHeight: '48px'
              }}
            >
              <Sparkles size={18} />
              <span>Nhận Kiểm Tra Miễn Phí (0đ)</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                padding: '0.75rem 1.3rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                minHeight: '48px',
                transition: 'all 0.15s ease'
              }}
              title="In hoặc Lưu thành file PDF"
            >
              <Printer size={18} />
              <span>Tải Checklist PDF / In bản kiểm</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                color: '#0d7647',
                backgroundColor: '#edf7f1',
                border: '1px solid #c6ebd4',
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                minHeight: '48px'
              }}
            >
              <PhoneCall size={16} />
              <span>Tư vấn KTV: {CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* 5 CORE PILLARS OVERVIEW CARDS */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
              5 Trụ Cột Kỹ Thuật Số Toàn Diện 2026
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.25rem' }}>
              Mỗi trụ cột bao gồm 6 tiêu chuẩn chuyên biệt, đảm bảo website của bạn vận hành hoàn hảo từ trải nghiệm người dùng đến thuật toán tìm kiếm.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem'
            }}
          >
            {AUDIT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    backgroundColor: isActive ? '#f0fdf4' : '#ffffff',
                    border: `1.5px solid ${isActive ? '#0d7647' : '#e2e8f0'}`,
                    borderRadius: '14px',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 14px rgba(13, 118, 71, 0.12)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: isActive ? '#0d7647' : '#64748b',
                        backgroundColor: isActive ? '#dcfce7' : '#f1f5f9',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px'
                      }}
                    >
                      Nhóm {cat.index}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>
                      6 tiêu chí
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: isActive ? '#0d7647' : '#0f172a',
                      marginBottom: '0.4rem',
                      lineHeight: 1.35
                    }}
                  >
                    {cat.shortName}
                  </h3>

                  <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE SELF-AUDIT SCORE CALCULATOR (CHỦ TIỆM TỰ TÍNH ĐIỂM) */}
        <div
          id="bang-tu-tinh-diem"
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #cbd5e1',
            borderRadius: '18px',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.25rem'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#edf7f1',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  display: 'inline-block',
                  marginBottom: '0.35rem'
                }}
              >
                CÔNG CỤ TƯƠNG TÁC
              </span>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Bảng Tự Chấm Điểm Website Của Bạn (30 Tiêu Chí)
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                Đánh dấu các tiêu chí mà điểm kinh doanh của bạn đã đạt để nhận chẩn đoán tức thì.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleCheckAll}
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#0f172a',
                  border: '1px solid #cbd5e1',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <CheckSquare size={14} />
                <span>Mô phỏng chuẩn LocalMate (30/30)</span>
              </button>

              <button
                type="button"
                onClick={handleResetChecklist}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#64748b',
                  border: '1px solid #e2e8f0',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <RotateCcw size={14} />
                <span>Xóa trắng làm lại</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                Tiến độ đạt chuẩn: <strong style={{ color: '#0d7647' }}>{scoreCount}</strong> / 30 tiêu chí ({scorePercent}%)
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                Mục tiêu an toàn: Tối thiểu 24/30 tiêu chí
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: '12px',
                backgroundColor: '#e2e8f0',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${scorePercent}%`,
                  height: '100%',
                  backgroundColor: scorePercent < 50 ? '#dc2626' : scorePercent < 80 ? '#d97706' : '#0d7647',
                  borderRadius: '9999px',
                  transition: 'width 0.4s ease, background-color 0.4s ease'
                }}
              />
            </div>
          </div>

          {/* Diagnostic Result Box */}
          <div
            style={{
              backgroundColor: assessment.bgColor,
              border: `1px solid ${assessment.color}40`,
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <Info size={20} color={assessment.color} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: assessment.color, marginBottom: '0.2rem' }}>
                {assessment.label}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.5 }}>
                {assessment.desc}
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS BAR: SEARCH, TABS & PRIORITY FILTER */}
        <div
          className="no-print"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '1.25rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          {/* Row 1: Search Input */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search
              size={18}
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm tiêu chí (Ví dụ: LCP, GPS, Schema, AI, WOFF2, SSL, Zalo...)"
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: '10px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.925rem',
                color: '#0f172a',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.8rem',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px'
                }}
              >
                Xóa
              </button>
            )}
          </div>

          {/* Row 2: Category Tabs */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Phân nhóm chuyên môn:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <button
                type="button"
                className={`filter-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                Tất cả (30)
              </button>
              {AUDIT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  Nhóm {cat.index}: {cat.shortName} (6)
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Priority Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Mức độ ưu tiên:
              </span>
              <button
                type="button"
                className={`priority-chip-btn ${selectedPriority === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedPriority('all')}
              >
                Tất cả ({AUDIT_STATS.total})
              </button>
              <button
                type="button"
                className={`priority-chip-btn ${selectedPriority === 'critical' ? 'active' : ''}`}
                onClick={() => setSelectedPriority('critical')}
                style={{
                  color: selectedPriority === 'critical' ? '#ffffff' : '#b91c1c'
                }}
              >
                🔴 Bắt buộc ({AUDIT_STATS.critical})
              </button>
              <button
                type="button"
                className={`priority-chip-btn ${selectedPriority === 'high' ? 'active' : ''}`}
                onClick={() => setSelectedPriority('high')}
                style={{
                  color: selectedPriority === 'high' ? '#ffffff' : '#1d4ed8'
                }}
              >
                🔵 Quan trọng ({AUDIT_STATS.high})
              </button>
              <button
                type="button"
                className={`priority-chip-btn ${selectedPriority === 'advanced' ? 'active' : ''}`}
                onClick={() => setSelectedPriority('advanced')}
                style={{
                  color: selectedPriority === 'advanced' ? '#ffffff' : '#6d28d9'
                }}
              >
                🟣 Nâng cao ({AUDIT_STATS.advanced})
              </button>
            </div>

            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Hiển thị <strong>{filteredCriteria.length}</strong> / 30 tiêu chuẩn
            </div>
          </div>
        </div>

        {/* LIST OF 30 AUDIT CRITERIA CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {filteredCriteria.length === 0 ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '3rem 1.5rem',
                textAlign: 'center'
              }}
            >
              <AlertTriangle size={36} color="#d97706" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                Không tìm thấy tiêu chuẩn phù hợp
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Vui lòng xóa bớt từ khóa tìm kiếm hoặc đặt lại bộ lọc để xem đầy đủ 30 tiêu chí.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriority('all');
                  setSearchQuery('');
                }}
                style={{
                  marginTop: '1rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Đặt lại toàn bộ bộ lọc
              </button>
            </div>
          ) : (
            filteredCriteria.map((item) => {
              const isChecked = checkedIds.has(item.id);
              const priorityBadge = () => {
                if (item.priority === 'critical') {
                  return {
                    bg: '#fef2f2',
                    border: '#fecaca',
                    text: '#b91c1c',
                    label: 'Bắt buộc (Must)'
                  };
                }
                if (item.priority === 'high') {
                  return {
                    bg: '#eff6ff',
                    border: '#bfdbfe',
                    text: '#1d4ed8',
                    label: 'Quan trọng (Should)'
                  };
                }
                return {
                  bg: '#f5f3ff',
                  border: '#ddd6fe',
                  text: '#6d28d9',
                  label: 'Nâng cao (Nice)'
                };
              };
              const pStyle = priorityBadge();

              return (
                <article
                  key={item.id}
                  className={`audit-card ${isChecked ? 'is-checked' : ''}`}
                >
                  {/* Top Bar: Code, Category, Priority, Checkbox */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      {/* Standard Code Tag */}
                      <span
                        style={{
                          backgroundColor: '#0f172a',
                          color: '#ffffff',
                          fontSize: '0.8125rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {item.id}
                      </span>

                      {/* Criterion Number */}
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                        #{item.number} / 30
                      </span>

                      {/* Category Tag */}
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: '#475569',
                          backgroundColor: '#f1f5f9',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px'
                        }}
                      >
                        {item.categoryShort}
                      </span>

                      {/* Priority Tag */}
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: pStyle.text,
                          backgroundColor: pStyle.bg,
                          border: `1px solid ${pStyle.border}`,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px'
                        }}
                      >
                        {pStyle.label}
                      </span>
                    </div>

                    {/* Interactive Checkbox Button */}
                    <button
                      type="button"
                      className="no-print"
                      onClick={() => toggleCriterion(item.id)}
                      style={{
                        backgroundColor: isChecked ? '#0d7647' : '#ffffff',
                        color: isChecked ? '#ffffff' : '#334155',
                        border: `1.5px solid ${isChecked ? '#0d7647' : '#cbd5e1'}`,
                        borderRadius: '8px',
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.15s ease'
                      }}
                      title="Bấm để đánh dấu website của bạn đã có tiêu chuẩn này"
                    >
                      {isChecked ? <Check size={14} /> : <Square size={14} />}
                      <span>{isChecked ? 'Đã có mục này' : 'Tích chọn mục này'}</span>
                    </button>
                  </div>

                  {/* Criterion Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Benchmark Box */}
                  <div
                    style={{
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderRadius: '8px',
                      padding: '0.55rem 0.85rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      color: '#166534',
                      fontWeight: 700
                    }}
                  >
                    <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>Chỉ số kiểm chuẩn: {item.benchmark}</span>
                  </div>

                  {/* 2-Column Info Grid: Simple Explanation & LocalMate Solution */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1rem'
                    }}
                  >
                    {/* Cột 1: Giải thích cho chủ tiệm */}
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '1rem'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: '#0f172a',
                          marginBottom: '0.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <HelpCircle size={14} color="#0d7647" />
                        <span>Chủ tiệm hiểu đơn giản:</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.55, margin: 0 }}>
                        {item.simpleExplanation}
                      </p>
                      <div
                        style={{
                          marginTop: '0.65rem',
                          paddingTop: '0.65rem',
                          borderTop: '1px dashed #cbd5e1',
                          fontSize: '0.8125rem',
                          color: '#047857',
                          fontWeight: 600
                        }}
                      >
                        💡 <strong>Tác động kinh doanh:</strong> {item.businessImpact}
                      </div>
                    </div>

                    {/* Cột 2: Cách LocalMate xử lý kỹ thuật */}
                    <div
                      style={{
                        backgroundColor: '#fbfdfb',
                        border: '1px solid #c6ebd4',
                        borderRadius: '10px',
                        padding: '1rem'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: '#0d7647',
                          marginBottom: '0.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <Zap size={14} color="#0d7647" />
                        <span>Cách LocalMate xử lý kỹ thuật:</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#1f2937', lineHeight: 1.55, margin: 0 }}>
                        {item.localmateSolution}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* COMPARISON TABLE: WEBSITE THƯỜNG GẶP VS TIÊU CHUẨN LOCALMATE 2026 */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '3.5rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem auto' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#0d7647',
                backgroundColor: '#edf7f1',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              ĐỐI CHIẾU THỰC TẾ
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a' }}>
              Website Tự Phát &amp; Đại Trà vs Tiêu Chuẩn LocalMate 2026
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Tại sao nhiều website làm vài triệu đồng nhưng không mang lại khách? Sự khác biệt nằm ở chiều sâu kỹ thuật chuẩn mực.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.9rem'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '1rem', fontWeight: 800, color: '#0f172a', width: '25%' }}>Hạng mục kiểm tra</th>
                  <th style={{ padding: '1rem', fontWeight: 800, color: '#dc2626', width: '37.5%' }}>Website tự phát / cũ kỹ</th>
                  <th style={{ padding: '1rem', fontWeight: 800, color: '#0d7647', width: '37.5%' }}>Chuẩn mực LocalMate 2026</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid #e2e8f0',
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fcfdfd'
                    }}
                  >
                    <td style={{ padding: '0.9rem 1rem', fontWeight: 700, color: '#0f172a' }}>
                      {row.metric}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', color: '#64748b' }}>
                      <span style={{ color: '#dc2626', marginRight: '0.35rem' }}>✕</span>
                      {row.traditional}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', fontWeight: 600, color: '#065f46', backgroundColor: '#f0fdf4' }}>
                      <span style={{ color: '#16a34a', marginRight: '0.35rem' }}>✓</span>
                      {row.localmate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FORM NHẬN BÁO CÁO AUDIT MIỄN PHÍ 0Đ */}
        <div
          id="form-audit-mien-phi"
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #0d7647',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            marginBottom: '3.5rem',
            boxShadow: '0 4px 20px rgba(13, 118, 71, 0.08)'
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#edf7f1',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                MIỄN PHÍ 100% — KHÔNG RÀNG BUỘC
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f172a', marginTop: '0.75rem' }}>
                Đăng Ký Nhận Báo Cáo Kỹ Thuật 30 Tiêu Chí Cho Cơ Sở Của Bạn
              </h2>
              <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                Kỹ thuật viên LocalMate sẽ trực tiếp kiểm tra website hoặc hồ sơ Google Maps hiện tại của bạn theo đúng 30 tiêu chí trên và gửi file phân tích chi tiết qua Zalo trong vòng 24 giờ.
              </p>
            </div>

            {submitSuccess ? (
              <div
                style={{
                  backgroundColor: '#ecfdf5',
                  border: '1.5px solid #a7f3d0',
                  borderRadius: '14px',
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={48} color="#0d7647" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#065f46', marginBottom: '0.5rem' }}>
                  Đã tiếp nhận yêu cầu kiểm tra!
                </h3>
                <p style={{ color: '#047857', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Kỹ thuật viên phụ trách của LocalMate sẽ tiến hành quét 30 tiêu chí và gửi file PDF báo cáo kèm giải pháp qua số Zalo của bạn sớm nhất.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a
                    href={CONTACT_INFO.zaloUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      padding: '0.7rem 1.3rem',
                      borderRadius: '10px',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    Nhắn Zalo nhận ngay: {CONTACT_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {formError && (
                  <div
                    style={{
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      color: '#b91c1c',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      marginBottom: '1rem'
                    }}
                  >
                    {formError}
                  </div>
                )}

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                      Tên tiệm / Điểm kinh doanh của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Ví dụ: Gara Ô Tô Tuấn Phát, Quán Cà Phê Mộc..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                      Số điện thoại / Zalo nhận báo cáo *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ví dụ: 0912 345 678"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Đường dẫn Website hoặc Link Google Maps (Nếu có)
                  </label>
                  <input
                    type="text"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://tiemcuaban.vn hoặc link ghim Google Maps (để trống nếu chưa có)"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      color: '#0f172a',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Vấn đề bạn đang lo lắng nhất (Tùy chọn)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ví dụ: Website tải chậm quá, ghim map bị lệch, khách tìm không thấy..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      color: '#0f172a',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.9rem 2.25rem',
                      borderRadius: '12px',
                      fontWeight: 800,
                      fontSize: '1rem',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 14px rgba(13, 118, 71, 0.28)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      minHeight: '48px'
                    }}
                  >
                    {isSubmitting ? (
                      <span>Đang tiếp nhận...</span>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        <span>Gửi Yêu Cầu Audit Kỹ Thuật (0đ)</span>
                      </>
                    )}
                  </button>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.75rem' }}>
                    Cam kết bảo mật thông tin 100%. Không làm phiền hay chèo kéo bán hàng.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem auto' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#0d7647',
                backgroundColor: '#edf7f1',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              GIẢI ĐÁP THẮC MẮC
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a' }}>
              Câu Hỏi Thường Gặp Về Audit Kỹ Thuật Website
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Những băn khoăn thực tế của các chủ cơ sở trước khi quyết định nâng cấp hạ tầng số.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {AUDIT_FAQS.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    border: `1px solid ${isOpen ? '#0d7647' : '#e2e8f0'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      backgroundColor: isOpen ? '#f0fdf4' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isOpen ? '#0d7647' : '#0f172a' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} color="#0d7647" /> : <ChevronDown size={18} color="#64748b" />}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '1rem 1.25rem',
                        backgroundColor: '#ffffff',
                        borderTop: '1px solid #e2e8f0',
                        fontSize: '0.9rem',
                        color: '#334155',
                        lineHeight: 1.65
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ACTION CTA BANNER */}
        <div
          style={{
            backgroundColor: '#0f172a',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span
              style={{
                backgroundColor: '#1e293b',
                color: '#86efac',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                display: 'inline-block',
                marginBottom: '1rem'
              }}
            >
              ĐỒNG HÀNH BỀN VỮNG CÙNG DOANH NGHIỆP ĐỊA PHƯƠNG
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, marginBottom: '1rem', color: '#ffffff' }}>
              Sở Hữu Website Chuẩn 30 Tiêu Chí 2026 Ngay Hôm Nay
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              LocalMate cam kết dựng bản web demo thực tế 0đ để bạn duyệt trước. Bàn giao đầy đủ 100% tài khoản chính chủ và bảo hành kỹ thuật 5 năm.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => onOpenConsultForm?.('Đăng ký Website Chuẩn 30 Tiêu Chí')}
                style={{
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minHeight: '48px',
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.4)'
                }}
              >
                <span>Nhận Tư Vấn Xây Web Chuẩn 2026</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1.5px solid #475569',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minHeight: '48px'
                }}
              >
                <PhoneCall size={18} />
                <span>Hotline: {CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TechnicalAuditStandardsPage;
