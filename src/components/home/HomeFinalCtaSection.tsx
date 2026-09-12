import React from 'react';
import { MessageSquare, PhoneCall, CheckCircle2, HelpCircle } from 'lucide-react';
import { FINAL_CTA_COPY } from '../../data/homepageCopyData';

interface HomeFinalCtaSectionProps {
  onOpenConsultForm?: (context?: string) => void;
}

export const HomeFinalCtaSection: React.FC<HomeFinalCtaSectionProps> = ({ onOpenConsultForm }) => {
  const handlePrimaryCta = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm('Tư vấn từ CTA cuối trang: Kể việc cần làm');
    } else {
      const target = document.getElementById('lien-he');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lien-he" className="py-16 md:py-24 bg-[#fbfcfb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#ffffff] border-2 border-[#bbf7d0] rounded-3xl p-8 sm:p-12 shadow-sm text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#edf7f1] text-[#0d7647] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#cbe8d5]">
            <HelpCircle size={14} />
            <span>{FINAL_CTA_COPY.badge}</span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4"
            style={{ textWrap: 'pretty' }}
          >
            {FINAL_CTA_COPY.title}
          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
            style={{ textWrap: 'pretty' }}
          >
            {FINAL_CTA_COPY.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <button
              type="button"
              onClick={handlePrimaryCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0d7647] hover:bg-[#0b633c] text-white font-semibold text-base shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0d7647] focus:ring-offset-2 min-h-[48px]"
            >
              <MessageSquare size={19} />
              <span>{FINAL_CTA_COPY.ctaButtonText}</span>
            </button>

            <a
              href={`tel:${FINAL_CTA_COPY.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#ffffff] hover:bg-[#f8fafc] text-[#1e293b] font-medium text-base border border-[#cbd5e1] hover:border-[#94a3b8] transition-all shadow-sm min-h-[48px]"
            >
              <PhoneCall size={18} className="text-[#0d7647]" />
              <span>Gọi hotline: {FINAL_CTA_COPY.phoneDisplay}</span>
            </a>
          </div>

          {/* Commitments Row */}
          <div className="pt-6 border-t border-[#f1f5f9] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#475569]">
            {FINAL_CTA_COPY.commitments.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#16a34a] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
