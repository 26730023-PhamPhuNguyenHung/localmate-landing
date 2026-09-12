import React from 'react';
import { Compass, Lightbulb, Quote } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../../data/homepageCopyData';

export const HomePhilosophySection: React.FC = () => {
  const { block1, block2 } = PHILOSOPHY_DATA;

  return (
    <section className="py-16 md:py-20 bg-[#ffffff] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass size={14} className="text-[#0d7647]" />
            <span>Cách tiếp cận của Localmate</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            Đơn giản hóa công nghệ để phục vụ công việc
          </h2>
          <p className="text-base sm:text-lg text-[#475569]" style={{ textWrap: 'pretty' }}>
            Chúng tôi tin rằng phần mềm chỉ có giá trị khi nó làm cho cuộc sống và việc bán hàng của bạn nhẹ nhàng hơn, chứ không phải phức tạp thêm.
          </p>
        </div>

        {/* 2 Philosophy Cards (Split 2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Không bắt đầu bằng công nghệ */}
          <div className="bg-[#fbfcfb] border border-[#e2e8f0] rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#edf7f1] text-[#0d7647] text-xs font-bold uppercase tracking-wider mb-4 border border-[#cbe8d5]">
                <Compass size={14} />
                <span>{block1.title}</span>
              </div>

              <h3
                className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mb-3"
                style={{ textWrap: 'pretty' }}
              >
                {block1.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-normal" style={{ textWrap: 'pretty' }}>
                {block1.description}
              </p>

              {/* Bullets */}
              <div className="space-y-3.5 mb-8">
                {block1.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d7647] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#334155] leading-relaxed">
                      <strong className="text-[#0f172a] font-semibold">{bullet.bold}</strong> {bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div className="pt-5 border-t border-[#e2e8f0] flex items-start gap-3 bg-[#ffffff] p-4 rounded-xl border border-[#e2e8f0]">
              <Quote size={20} className="text-[#0d7647] flex-shrink-0 mt-0.5 opacity-80" />
              <p className="text-xs sm:text-sm italic text-[#334155] leading-relaxed">
                {block1.quote}
              </p>
            </div>
          </div>

          {/* Card 2: Một việc có thể bắt đầu rất nhỏ */}
          <div className="bg-[#fbfcfb] border border-[#e2e8f0] rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fef3c7] text-[#92400e] text-xs font-bold uppercase tracking-wider mb-4 border border-[#fde68a]">
                <Lightbulb size={14} />
                <span>{block2.title}</span>
              </div>

              <h3
                className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mb-3"
                style={{ textWrap: 'pretty' }}
              >
                {block2.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-normal" style={{ textWrap: 'pretty' }}>
                {block2.description}
              </p>

              {/* Bullets */}
              <div className="space-y-3.5 mb-8">
                {block2.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#334155] leading-relaxed">
                      <strong className="text-[#0f172a] font-semibold">{bullet.bold}</strong> {bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div className="pt-5 border-t border-[#e2e8f0] flex items-start gap-3 bg-[#ffffff] p-4 rounded-xl border border-[#e2e8f0]">
              <Quote size={20} className="text-[#d97706] flex-shrink-0 mt-0.5 opacity-80" />
              <p className="text-xs sm:text-sm italic text-[#334155] leading-relaxed">
                {block2.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
