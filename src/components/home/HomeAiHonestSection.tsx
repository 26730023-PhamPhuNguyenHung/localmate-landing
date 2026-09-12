import React from 'react';
import { Bot, Check, AlertCircle, Sparkles } from 'lucide-react';
import { AI_HONEST_DATA } from '../../data/homepageCopyData';

export const HomeAiHonestSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#fbfcfb] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-semibold uppercase tracking-wider mb-3.5 border border-[#e2e8f0]">
            <Bot size={14} className="text-[#0d7647]" />
            <span>{AI_HONEST_DATA.badge}</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            {AI_HONEST_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed" style={{ textWrap: 'pretty' }}>
            {AI_HONEST_DATA.intro}
          </p>
        </div>

        {/* 2 Comparison Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Column 1: AI hỗ trợ tốt */}
          <div className="bg-[#ffffff] border border-[#cbe8d5] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-[#0d7647] font-bold text-base sm:text-lg mb-6 pb-3 border-b border-[#edf7f1]">
              <div className="w-8 h-8 rounded-lg bg-[#edf7f1] flex items-center justify-center">
                <Check size={18} strokeWidth={2.5} />
              </div>
              <span>Những việc AI có thể phụ bạn rất tốt:</span>
            </div>

            <div className="space-y-4">
              {AI_HONEST_DATA.whatAiCanDo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0f172a] mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Giới hạn thực tế */}
          <div className="bg-[#ffffff] border border-[#fed7aa] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-[#c2410c] font-bold text-base sm:text-lg mb-6 pb-3 border-b border-[#fff7ed]">
              <div className="w-8 h-8 rounded-lg bg-[#ffedd5] flex items-center justify-center">
                <AlertCircle size={18} strokeWidth={2.5} />
              </div>
              <span>Những điều AI không thể làm thay bạn:</span>
            </div>

            <div className="space-y-4">
              {AI_HONEST_DATA.whatAiCannotDo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0f172a] mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Stance Callout Box */}
        <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e2e8f0] shadow-sm flex items-start gap-4 max-w-3xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-[#edf7f1] text-[#0d7647] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-[#0d7647] uppercase tracking-wider mb-1">
              Nguyên tắc của Localmate:
            </div>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed" style={{ textWrap: 'pretty' }}>
              {AI_HONEST_DATA.ourStance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
