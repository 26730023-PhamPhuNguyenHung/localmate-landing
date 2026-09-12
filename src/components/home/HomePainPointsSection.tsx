import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { PAIN_POINTS_LIST, PainPointItem } from '../../data/homepageCopyData';

interface HomePainPointsSectionProps {
  onSelectPainPoint?: (context: string) => void;
}

export const HomePainPointsSection: React.FC<HomePainPointsSectionProps> = ({ onSelectPainPoint }) => {
  const handleCardClick = (item: PainPointItem) => {
    if (onSelectPainPoint) {
      onSelectPainPoint(`[Vấn đề ${item.number}]: ${item.leadContext}`);
    } else {
      const target = document.getElementById('lien-he');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nhu-cau-thuc-te" className="py-16 md:py-20 bg-[#ffffff] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} className="text-[#0d7647]" />
            <span>Nhu cầu thực tế</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            Bạn đang thấy công việc vướng ở đâu nhất?
          </h2>
          <p className="text-base text-[#475569]" style={{ textWrap: 'pretty' }}>
            Không cần biết mình cần công nghệ gì trước. Hãy bấm vào tình huống bạn đang gặp phải, Localmate sẽ cùng bạn tháo gỡ.
          </p>
        </div>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAIN_POINTS_LIST.map((item: PainPointItem) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item);
                }
              }}
              className="group text-left bg-[#ffffff] border border-[#e2e8f0] hover:border-[#0d7647] rounded-2xl p-6 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#0d7647] focus:ring-offset-2"
            >
              <div>
                {/* Header row: Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#cbd5e1] group-hover:text-[#0d7647] transition-colors">
                    {item.number}
                  </span>
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-[#f8fafc] text-[#475569] border border-[#e2e8f0] group-hover:bg-[#edf7f1] group-hover:text-[#0d7647] group-hover:border-[#cbe8d5] transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#0f172a] group-hover:text-[#0d7647] transition-colors leading-snug mb-3"
                  style={{ textWrap: 'pretty' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6" style={{ textWrap: 'pretty' }}>
                  {item.description}
                </p>
              </div>

              {/* Action trigger */}
              <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-sm font-semibold text-[#0d7647] group-hover:translate-x-1 transition-transform">
                <span>Chọn nhu cầu này để tư vấn</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#64748b]">
            Không thấy trường hợp của bạn ở trên?{' '}
            <button
              type="button"
              onClick={() => onSelectPainPoint && onSelectPainPoint('Tôi có nhu cầu công việc khác chưa được liệt kê')}
              className="text-[#0d7647] font-semibold underline underline-offset-4 hover:text-[#0b633c]"
            >
              Nhắn trực tiếp cho Localmate việc bạn đang làm
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
