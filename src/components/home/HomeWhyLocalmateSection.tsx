import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_POINTS, WhyChooseItem } from '../../data/homepageCopyData';

export const HomeWhyLocalmateSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#ffffff] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake size={14} className="text-[#0d7647]" />
            <span>Cam kết đồng hành</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            5 lý do nhiều tiệm địa phương chọn làm việc cùng Localmate
          </h2>
          <p className="text-base sm:text-lg text-[#475569]" style={{ textWrap: 'pretty' }}>
            Chúng tôi không coi đây là những khẩu hiệu quảng cáo, mà là cách chúng tôi giữ uy tín và sự tôn trọng với từng khách hàng.
          </p>
        </div>

        {/* 5 Points Grid (3 cols on top, 2 cols centered below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {WHY_CHOOSE_POINTS.slice(0, 3).map((item: WhyChooseItem, idx: number) => (
            <div
              key={idx}
              className="bg-[#fbfcfb] border border-[#e2e8f0] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-[#cbd5e1] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#cbd5e1]">
                    {item.number}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#edf7f1] text-[#0d7647]">
                    {item.highlight}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#0f172a] mb-2.5 leading-snug"
                  style={{ textWrap: 'pretty' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed" style={{ textWrap: 'pretty' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {WHY_CHOOSE_POINTS.slice(3, 5).map((item: WhyChooseItem, idx: number) => (
            <div
              key={idx}
              className="bg-[#fbfcfb] border border-[#e2e8f0] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-[#cbd5e1] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#cbd5e1]">
                    {item.number}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#edf7f1] text-[#0d7647]">
                    {item.highlight}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#0f172a] mb-2.5 leading-snug"
                  style={{ textWrap: 'pretty' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed" style={{ textWrap: 'pretty' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
