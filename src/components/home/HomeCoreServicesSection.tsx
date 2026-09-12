import React from 'react';
import { Check, ArrowRight, Layers, Globe, Users, Zap, Wrench } from 'lucide-react';
import { CORE_SERVICES_LIST, CoreServiceItem } from '../../data/homepageCopyData';

interface HomeCoreServicesSectionProps {
  onOpenConsultForm?: (context?: string) => void;
}

export const HomeCoreServicesSection: React.FC<HomeCoreServicesSectionProps> = ({ onOpenConsultForm }) => {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'presence':
        return <Globe size={22} className="text-[#0d7647]" />;
      case 'leads':
        return <Users size={22} className="text-[#0d7647]" />;
      case 'automation':
        return <Zap size={22} className="text-[#0d7647]" />;
      case 'support-and-custom':
        return <Wrench size={22} className="text-[#0d7647]" />;
      default:
        return <Layers size={22} className="text-[#0d7647]" />;
    }
  };

  const handleCtaClick = (item: CoreServiceItem) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(`Tư vấn nhóm việc: ${item.title}`);
    } else {
      window.location.href = item.link;
    }
  };

  return (
    <section id="nhom-giai-phap" className="py-16 md:py-20 bg-[#fbfcfb] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#edf7f1] text-[#0d7647] text-xs font-semibold uppercase tracking-wider mb-3.5 border border-[#cbe8d5]">
            <Layers size={14} />
            <span>Localmate thực sự làm gì?</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            4 nhóm giải pháp gần gũi, gom theo công việc của bạn
          </h2>
          <p className="text-base sm:text-lg text-[#475569]" style={{ textWrap: 'pretty' }}>
            Chúng tôi không bày ra 20-30 dịch vụ kỹ thuật rời rạc. Mọi thứ Localmate làm đều phục vụ 4 mục đích thực tế dưới đây.
          </p>
        </div>

        {/* 4 Core Service Cards Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CORE_SERVICES_LIST.map((item: CoreServiceItem) => (
            <div
              key={item.id}
              className="bg-[#ffffff] border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all"
            >
              <div>
                {/* Header Row: Icon, Number, Title */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#edf7f1] flex items-center justify-center flex-shrink-0">
                      {getGroupIcon(item.id)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0d7647] tracking-wider uppercase">
                        Nhóm việc {item.number}
                      </span>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight"
                        style={{ textWrap: 'pretty' }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-normal" style={{ textWrap: 'pretty' }}>
                  {item.summary}
                </p>

                {/* Details Checklist */}
                <div className="space-y-2.5 mb-6">
                  {item.details.map((detail: string, dIdx: number) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#edf7f1] text-[#0d7647] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-[#334155] leading-normal" style={{ textWrap: 'pretty' }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sample Jobs Chips */}
                <div className="mb-8 pt-4 border-t border-[#f1f5f9]">
                  <div className="text-xs font-medium text-[#64748b] mb-2">Ví dụ công việc cụ thể:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.sampleJobs.map((job: string, jIdx: number) => (
                      <span
                        key={jIdx}
                        className="inline-block text-xs px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#334155] border border-[#e2e8f0]"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleCtaClick(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#f8fafc] hover:bg-[#edf7f1] text-[#0f172a] hover:text-[#0d7647] border border-[#cbd5e1] hover:border-[#cbe8d5] font-semibold text-sm transition-all shadow-sm"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
