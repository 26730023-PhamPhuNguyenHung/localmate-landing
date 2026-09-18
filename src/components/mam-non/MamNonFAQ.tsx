import React, { useState } from 'react';
import { Icon, Waves } from './MamNonIcons';
import { FAQ_ITEMS } from '../../data/mamNonData';

export interface MamNonFAQProps {
  onOpenContact: () => void;
  className?: string;
}

const renderQuestion = (q: string) => {
  const lineBreaks: Record<string, [string, string]> = {
    'Lớp chỉ có 15–20 bé có dùng được không?': ['Lớp chỉ có 15–20 bé', 'có dùng được không?'],
    'Cô giáo không rành công nghệ có dùng được không?': ['Cô giáo không rành', 'công nghệ có dùng được không?'],
    'Có cần cài phần mềm phức tạp không?': ['Có cần cài phần mềm', 'phức tạp không?'],
    'Có hỗ trợ nhập dữ liệu ban đầu không?': ['Có hỗ trợ nhập dữ liệu', 'ban đầu không?'],
    'Muốn thêm một chức năng riêng thì sao?': ['Muốn thêm một chức năng', 'riêng thì sao?'],
    'Sau 1 tháng dùng thử không phù hợp thì sao?': ['Sau 1 tháng dùng thử', 'không phù hợp thì sao?'],
  };

  const parts = lineBreaks[q];
  if (parts) {
    return (
      <>
        {parts[0]} <br />
        {parts[1]}
      </>
    );
  }
  return q;
};

export const MamNonFAQ: React.FC<MamNonFAQProps> = ({
  onOpenContact,
  className = '',
}) => {
  // Trạng thái mở/đóng các câu hỏi accordion (mặc định mở tất cả như bản thiết kế gốc)
  const [openItems, setOpenItems] = useState<Record<number, boolean>>(() =>
    FAQ_ITEMS.reduce((acc, _, idx) => {
      acc[idx] = true;
      return acc;
    }, {} as Record<number, boolean>)
  );

  const toggleFaq = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className={`scene faq-section ${className}`.trim()}
      id="faq"
      aria-labelledby="faq-title"
    >
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="new-copy faq-copy">
        <div className="eyebrow">
          <Icon name="chat" />
          GIẢI ĐÁP NHẸ NHÀNG
        </div>
        <h2 id="faq-title">
          Những điều các cô <br />
          <span>
            hay hỏi trước khi <br />
            bắt đầu.
          </span>{' '}
          <b className="heart">♡</b>
        </h2>
        <p className="lead">
          Nếu còn băn khoăn, Localmate luôn sẵn sàng <br className="desktop" />
          giải thích thật dễ hiểu và đi cùng từng bước.
        </p>
      </div>

      <img
        className="faq-art"
        src="/assets/mam-non/faq-support-cropped.png"
        alt="Minh họa cô giáo và nhân viên hỗ trợ Localmate vui vẻ trao đổi"
        loading="lazy"
      />

      <div className="hand faq-bubble">
        Cô cứ hỏi, <br />
        bên em luôn <br />
        ở đây ạ! ♡
      </div>

      <div className="faq-grid">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = !!openItems[index];
          return (
            <details
              key={index}
              open={isOpen}
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(index);
                }}
                aria-expanded={isOpen}
              >
                <Icon name={item.icon} />
                <span>{renderQuestion(item.question)}</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          );
        })}
      </div>

      <div className="faq-cta">
        <button
          type="button"
          className="button"
          data-contact
          onClick={onOpenContact}
        >
          <Icon name="chat" />
          Nhắn hỏi Localmate <span>→</span>
        </button>
        <p className="hand">
          Mọi thắc mắc đều có lời giải đáp <br />
          và luôn có người đồng hành cùng cô ♡
          <span className="underline" />
        </p>
      </div>

      <div className="waves" aria-hidden="true">
        <Waves />
      </div>
    </section>
  );
};

export default MamNonFAQ;
