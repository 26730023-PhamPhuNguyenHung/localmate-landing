import React from 'react';

export interface ArticleAuthorProps {
  author?: string;
  role?: string;
  bio?: string;
}

export const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  author = 'Ban biên tập LocalMate',
  role = 'Nội dung & Nghiên cứu giải pháp kinh doanh số',
  bio = 'Đội ngũ kỹ thuật và cố vấn giải pháp tại LocalMate, tập trung vào việc chuẩn hóa hạ tầng số tinh gọn, tối ưu hiện diện địa phương (Local Search & Google Business Profile) và mang lại khách hàng thực tế cho các cơ sở dịch vụ tại Việt Nam.'
}) => {
  return (
    <aside
      aria-label="Thông tin tác giả"
      style={{
        marginTop: '3rem',
        padding: '1.35rem 1.5rem',
        backgroundColor: '#fbfcfb',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'row',
        gap: '1.15rem',
        alignItems: 'flex-start'
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: '#edf7f1',
          color: '#0d7647',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '1.1rem',
          flexShrink: 0,
          border: '1.5px solid #c6ebd4'
        }}
      >
        LM
      </div>

      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#0d7647',
            letterSpacing: '0.04em',
            marginBottom: '0.25rem'
          }}
        >
          Biên soạn bởi
        </div>

        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 0.25rem 0',
            lineHeight: 1.35
          }}
        >
          {author}
        </h3>

        {role && (
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#64748b',
              marginBottom: '0.5rem'
            }}
          >
            {role}
          </div>
        )}

        <p
          style={{
            fontSize: '0.875rem',
            color: '#475569',
            lineHeight: 1.65,
            margin: 0,
            textWrap: 'pretty'
          }}
        >
          {bio}
        </p>
      </div>
    </aside>
  );
};
