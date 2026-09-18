import React, { useEffect, useRef } from 'react';
import { Icon } from './MamNonIcons';

export interface MamNonContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadModal?: () => void;
}

export const MamNonContactModal: React.FC<MamNonContactModalProps> = ({
  isOpen,
  onClose,
  onOpenLeadModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Xử lý đóng bằng phím Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Khóa scroll khi mở modal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Xử lý click ngoài dialog để đóng
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleOpenLead = () => {
    onClose();
    if (onOpenLeadModal) {
      onOpenLeadModal();
    }
  };

  return (
    <div
      className="mam-non-modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(6, 47, 56, 0.47)',
        padding: '16px',
      }}
    >
      <div
        ref={modalRef}
        className="mam-non-contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          border: '1px solid #dceadf',
          borderRadius: '24px',
          boxShadow: '0 25px 100px rgba(0, 45, 52, 0.25)',
          padding: '38px',
          maxWidth: '520px',
          width: 'calc(100% - 32px)',
          color: '#063537',
          boxSizing: 'border-box',
        }}
      >
        <button
          type="button"
          className="dialog-close"
          aria-label="Đóng"
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '16px',
            top: '14px',
            fontSize: '28px',
            width: '36px',
            height: '36px',
            background: 'transparent',
            border: 0,
            color: '#537265',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
            borderRadius: '50%',
          }}
        >
          ×
        </button>

        <div
          className="eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75em',
            background: 'linear-gradient(95deg, #eaf6ed, #eff7ed)',
            color: '#007956',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.025em',
            borderRadius: '100px',
            padding: '9px 14px',
            lineHeight: 1.5,
          }}
        >
          <Icon name="sprout" style={{ width: '16px', height: '16px' }} />
          LOCALMATE MẦM NON
        </div>

        <h2
          id="contact-title"
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#063537',
            margin: '20px 0 12px',
            lineHeight: 1.25,
            letterSpacing: '-0.03em',
          }}
        >
          Bắt đầu từ lớp của mình.
        </h2>

        <p
          style={{
            fontSize: '15px',
            color: '#5b7395',
            lineHeight: 1.65,
            margin: '0 0 24px',
          }}
        >
          Liên hệ Localmate để trao đổi nhu cầu và đăng ký dùng thử 1 tháng.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a
            className="button"
            href="tel:0834422439"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.85em',
              borderRadius: '12px',
              background: 'linear-gradient(120deg, #00886b, #007f57)',
              color: '#ffffff',
              padding: '14px 20px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              lineHeight: 1.4,
              boxShadow: '0 5px 14px rgba(0, 131, 86, 0.15)',
              textAlign: 'center',
            }}
          >
            <Icon name="phone" style={{ width: '20px', height: '20px' }} />
            Gọi 0834.422.439
          </a>

          <button
            type="button"
            className="button secondary"
            onClick={handleOpenLead}
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.85em',
              borderRadius: '12px',
              background: '#ffffff',
              color: '#00835d',
              border: '1.5px solid #00835d',
              padding: '14px 20px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              lineHeight: 1.4,
              textAlign: 'center',
            }}
          >
            <Icon name="chat" style={{ width: '18px', height: '18px' }} />
            Để lại thông tin tư vấn
          </button>
        </div>

        <p
          className="dialog-note"
          style={{
            fontSize: '12px',
            color: '#75899e',
            lineHeight: 1.6,
            marginTop: '18px',
            marginBottom: 0,
            textAlign: 'center',
          }}
        >
          Kỹ thuật viên Localmate sẽ liên hệ hỗ trợ cài đặt và kích hoạt dùng thử 30 ngày hoàn toàn miễn phí.
        </p>
      </div>
    </div>
  );
};
