import React from 'react';
import { Footprints, ArrowRight, MessageCircle } from 'lucide-react';
import { WORKING_STEPS, WorkingStep } from '../../data/homepageCopyData';

interface HomeHowWeWorkSectionProps {
  onOpenConsultForm?: (context?: string) => void;
}

export const HomeHowWeWorkSection: React.FC<HomeHowWeWorkSectionProps> = ({ onOpenConsultForm }) => {
  return (
    <section id="cach-lam-viec" className="py-16 md:py-20 bg-[#fbfcfb] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#edf7f1] text-[#0d7647] text-xs font-semibold uppercase tracking-wider mb-3.5 border border-[#cbe8d5]">
            <Footprints size={14} />
            <span>Quy trình đồng hành</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            4 bước làm việc thẳng thắn, không thủ tục rườm rà
          </h2>
          <p className="text-base sm:text-lg text-[#475569]" style={{ textWrap: 'pretty' }}>
            Bạn không cần chuẩn bị bản brief kỹ thuật. Chỉ cần cho chúng tôi biết bạn đang làm việc gì.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {WORKING_STEPS.map((item: WorkingStep, index: number) => (
            <div
              key={index}
              className="bg-[#ffffff] border border-[#e2e8f0] rounded-2xl p-6 flex flex-col justify-between shadow-sm relative group hover:border-[#cbd5e1] transition-all"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#cbd5e1] group-hover:text-[#0d7647] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#edf7f1] text-[#0d7647]">
                    Bước {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  className="text-lg font-bold text-[#0f172a] leading-snug mb-3"
                  style={{ textWrap: 'pretty' }}
                >
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6" style={{ textWrap: 'pretty' }}>
                  {item.description}
                </p>
              </div>

              {/* Step Outcome tag */}
              <div className="pt-4 border-t border-[#f1f5f9]">
                <div className="text-xs text-[#64748b] mb-1">Kết quả bước này:</div>
                <div className="text-xs font-semibold text-[#0d7647] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                  <span>{item.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action button beneath */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onOpenConsultForm && onOpenConsultForm('Trao đổi bước 1: Kể việc cần làm')}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0d7647] hover:bg-[#0b633c] text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0d7647] focus:ring-offset-2"
          >
            <MessageCircle size={18} />
            <span>Bắt đầu từ Bước 01: Nhắn cho Localmate</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
