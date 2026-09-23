import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { trackFormStart } from '../../analytics/tracker';
import { submitLead } from '../../services/leadService';
import '../../styles/lead-modal.css';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceName?: string;
  initialBusinessInput?: string;
  initialNote?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultServiceName = 'Tư vấn dịch vụ LocalMate',
  initialBusinessInput = '',
  initialNote = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(initialNote || initialBusinessInput);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const nameInput = useRef<HTMLInputElement>(null);
  const submitting = useRef(false);

  useEffect(() => {
    setMessage(initialNote || initialBusinessInput);
  }, [initialNote, initialBusinessInput]);

  useEffect(() => {
    if (!isOpen) return;
    trackFormStart('Universal_Lead_Modal');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    nameInput.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const close = () => {
    setName('');
    setPhone('');
    setMessage('');
    setStatus('idle');
    setError('');
    onClose();
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const cleanPhone = phone.trim().replace(/[\s().-]/g, '');
    if (name.trim().length < 2) {
      setError('Vui lòng nhập họ tên từ 2 ký tự.');
      nameInput.current?.focus();
      return;
    }
    if (!/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(cleanPhone)) {
      setError('Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }
    submitting.current = true;
    setStatus('sending');
    setError('');
    try {
      await submitLead({
        name,
        phone,
        serviceInterest: defaultServiceName,
        message,
        sourcePage: window.location.pathname
      }, { requireNetworkDelivery: true });
      setStatus('sent');
    } catch {
      setStatus('idle');
      setError('Chưa thể gửi yêu cầu. Vui lòng thử lại hoặc gọi LocalMate.');
    } finally {
      submitting.current = false;
    }
  };

  return (
    <div className="lead-modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="lead-modal-card" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
        <button className="lead-modal-close" type="button" onClick={close} aria-label="Đóng"><X size={21} /></button>
        {status === 'sent' ? (
          <div className="lead-modal-result" role="status">
            <h2 id="lead-modal-title">Đã gửi yêu cầu</h2>
            <p>Yêu cầu đã được gửi qua mạng. Nếu cần trao đổi ngay, bạn có thể gọi hoặc nhắn Zalo.</p>
            <div className="lead-modal-contact">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`}>Gọi {CONTACT_INFO.phoneFormatted}</a>
              <a href={CONTACT_INFO.zaloUrl} target="_blank" rel="noopener noreferrer">Nhắn Zalo</a>
            </div>
            <button type="button" className="lead-modal-secondary" onClick={close}>Đóng</button>
          </div>
        ) : (
          <>
            <h2 id="lead-modal-title">Nhận tư vấn</h2>
            <p className="lead-modal-intro">Để lại thông tin, LocalMate sẽ liên hệ với bạn.</p>
            <form onSubmit={submit} noValidate>
              <label htmlFor="lead-name">Họ và tên *</label>
              <input ref={nameInput} id="lead-name" name="name" autoComplete="name" required maxLength={100}
                value={name} onChange={(event) => { setName(event.target.value); setError(''); }} disabled={status === 'sending'} />
              <label htmlFor="lead-phone">Số điện thoại / Zalo *</label>
              <input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={20}
                value={phone} onChange={(event) => { setPhone(event.target.value); setError(''); }} disabled={status === 'sending'} />
              <label htmlFor="lead-message">Bạn cần hỗ trợ gì? <span>(tùy chọn)</span></label>
              <textarea id="lead-message" name="message" rows={3} maxLength={1000} value={message}
                onChange={(event) => setMessage(event.target.value)} disabled={status === 'sending'} />
              {error && <p className="lead-modal-error" role="alert">{error}</p>}
              <button className="lead-modal-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Đang gửi...' : 'Gửi yêu cầu'}
              </button>
              <p className="lead-modal-note">Thông tin chỉ dùng để tư vấn. <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></p>
            </form>
            <div className="lead-modal-contact">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`}>Gọi {CONTACT_INFO.phoneFormatted}</a>
              <a href={CONTACT_INFO.zaloUrl} target="_blank" rel="noopener noreferrer">Nhắn Zalo</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
