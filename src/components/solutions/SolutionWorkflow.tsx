import React from 'react';
import { Container } from '../ui/Container';
import { Layers, UserCheck, Wrench, Clock, Check } from 'lucide-react';

export interface WorkflowStepItem {
  step: number | string;
  title: string;
  localmateDoes: string;
  clientDoes: string;
  duration?: string;
  outcome?: string;
}

export interface SolutionWorkflowProps {
  workflow?: WorkflowStepItem[];
  whatWeDo?: string[];
  heading?: string;
  subheading?: string;
}

export const SolutionWorkflow: React.FC<SolutionWorkflowProps> = ({
  workflow,
  whatWeDo,
  heading = 'LocalMate Sẽ Làm Những Gì — Phân Định Trách Nhiệm Rõ Ràng',
  subheading = 'Bạn không cần biết lập trình hay kỹ thuật phức tạp. LocalMate chủ động lo toàn bộ hạ tầng, bạn chỉ cần duyệt và sử dụng.'
}) => {
  // If whatWeDo is provided instead of full workflow objects, map it into structured steps
  const steps: WorkflowStepItem[] = workflow || (whatWeDo ? whatWeDo.map((task, idx) => {
    const defaultDurations = ['Trong 2 - 4 giờ', 'Trong 24 - 48 giờ', '1 - 3 ngày', 'Suốt thời gian vận hành'];
    const defaultClientActions = [
      'Cung cấp thông tin tiệm, menu, ảnh chụp thực tế hoặc chỉ định hotline nhận khách.',
      'Mở link demo trên điện thoại, duyệt giao diện và yêu cầu chỉnh sửa theo ý.',
      'Phối hợp xác minh mã OTP chính chủ (nếu Google gửi qua SMS) và nghiệm thu.',
      'Đón khách hàng và tiếp nhận cuộc gọi, LocalMate hỗ trợ kỹ thuật khi cần.'
    ];

    return {
      step: idx + 1,
      title: `Hạng mục triển khai 0${idx + 1}`,
      localmateDoes: task,
      clientDoes: defaultClientActions[idx] || 'Duyệt kết quả và tiếp nhận bàn giao chính chủ.',
      duration: defaultDurations[idx] || '1 - 2 ngày',
      outcome: 'Đạt chuẩn nghiệm thu, bàn giao mã nguồn và quyền quản trị chính chủ.'
    };
  }) : []);

  if (steps.length === 0) return null;

  return (
    <section
      id="phan-cong-workflow"
      style={{
        backgroundColor: '#ffffff',
        padding: '4.5rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-soft)',
              border: '1px solid var(--color-primary-border)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.85rem'
            }}
          >
            <Layers size={14} /> CƠ CHẾ PHỐI HỢP
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.8vw, 2.15rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              lineHeight: 1.3,
              marginBottom: '0.85rem',
              textWrap: 'pretty'
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text)',
              lineHeight: 1.6,
              textWrap: 'pretty'
            }}
          >
            {subheading}
          </p>
        </div>

        {/* Workflow Steps Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '980px', margin: '0 auto' }}>
          {steps.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                position: 'relative'
              }}
            >
              {/* Step Header Row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingBottom: '1.25rem',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid var(--color-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      margin: 0
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {item.duration && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-text-muted)',
                      backgroundColor: 'var(--color-bg)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <Clock size={13} style={{ color: 'var(--color-primary)' }} />
                    <span>Thời gian: {item.duration}</span>
                  </div>
                )}
              </div>

              {/* 2-Column Comparison Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: item.outcome ? '1.25rem' : '0'
                }}
              >
                {/* LocalMate Does */}
                <div
                  style={{
                    backgroundColor: 'var(--color-primary-soft)',
                    border: '1px solid var(--color-primary-border)',
                    borderRadius: '12px',
                    padding: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-dark)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <Wrench size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>LocalMate Chủ Động Làm (90% việc)</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--color-navy)',
                      lineHeight: 1.6,
                      margin: 0,
                      fontWeight: 500
                    }}
                  >
                    {item.localmateDoes}
                  </p>
                </div>

                {/* Client Does */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <UserCheck size={14} style={{ color: '#2563eb' }} />
                    <span>Khách Hàng Chỉ Cần Làm Gì (Đơn giản)</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {item.clientDoes}
                  </p>
                </div>
              </div>

              {/* Outcome Bar if exists */}
              {item.outcome && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    paddingTop: '0.75rem',
                    borderTop: '1px dashed var(--color-border)'
                  }}
                >
                  <Check size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>
                    <strong style={{ color: 'var(--color-navy)' }}>Kết quả mốc này:</strong> {item.outcome}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
