import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './MamNonIcons';
import { STUDENT_DEMO_ITEMS, StudentDemoItem } from '../../data/mamNonData';

export interface MamNonDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const MamNonDemoModal: React.FC<MamNonDemoModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [students, setStudents] = useState<StudentDemoItem[]>(() =>
    STUDENT_DEMO_ITEMS.map((student) => ({ ...student }))
  );

  // Synchronize modal state with HTML5 dialog API
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle ESC key or modal cancel natively
  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    e.preventDefault();
    onClose();
  };

  // Close when clicking outside of dialog content (backdrop)
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      e.clientX < bounds.left ||
      e.clientX > bounds.right ||
      e.clientY < bounds.top ||
      e.clientY > bounds.bottom
    ) {
      onClose();
    }
  };

  // Toggle attendance state for an individual student
  const handleToggleAttendance = (index: number) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, present: !student.present } : student
      )
    );
  };

  // Reset to initial demo state
  const handleReset = () => {
    setStudents(STUDENT_DEMO_ITEMS.map((student) => ({ ...student })));
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      id="demo-dialog"
      aria-labelledby="demo-dialog-title"
      onCancel={handleCancel}
      onClick={handleDialogClick}
      open={isOpen}
    >
      <button
        type="button"
        className="dialog-close"
        aria-label="Đóng demo"
        onClick={onClose}
      >
        ×
      </button>

      <div className="eyebrow">
        <Icon name="calendar-check" />
        DEMO TƯƠNG TÁC
      </div>

      <h2 id="demo-dialog-title">Thử điểm danh cho lớp.</h2>
      <p>
        Dữ liệu minh họa từ mẫu thiết kế. Chạm vào trạng thái của bé để thử; thay đổi chỉ diễn ra trong bản demo này.
      </p>

      <div className="demo-live-totals" aria-live="polite">
        {students.length} bé minh họa · {presentCount} có mặt · {absentCount} nghỉ
      </div>

      <div className="demo-live-students">
        {students.map((student, index) => (
          <div key={student.name}>
            {student.girl ? (
              <img
                className="avatar"
                src="/assets/mam-non/child-avatar.png"
                alt={student.name}
              />
            ) : (
              <span className="avatar avatar-boy">{student.initial}</span>
            )}
            <span>{student.name}</span>
            <button
              type="button"
              data-attendance={index}
              className={student.present ? '' : 'absent'}
              aria-pressed={student.present}
              aria-label={`Điểm danh ${student.name}`}
              onClick={() => handleToggleAttendance(index)}
            >
              {student.present ? 'Có mặt' : 'Nghỉ'}
            </button>
          </div>
        ))}
      </div>

      <button type="button" className="demo-reset" onClick={handleReset}>
        Đặt lại demo
      </button>
    </dialog>
  );
};
