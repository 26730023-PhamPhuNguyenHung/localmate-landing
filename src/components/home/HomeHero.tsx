import React from 'react';
import { Store, CheckCircle2, KeyRound, ShieldCheck, ArrowRight, MessageSquareCode, Sparkles } from 'lucide-react';
import { HERO_CONTENT, HeroTrustBadge } from '../../data/homepageCopyData';

interface HomeHeroProps {
  onOpenConsultForm?: (context?: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onOpenConsultForm }) => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Store size={18} className="text-emerald-700" />;
      case 'CheckCircle2':
        return <CheckCircle2 size={18} className="text-emerald-700" />;
      case 'KeyRound':
        return <KeyRound size={18} className="text-emerald-700" />;
      case 'ShieldCheck':
        return <ShieldCheck size={18} className="text-emerald-700" />;
      default:
        return <Sparkles size={18} className="text-emerald-700" />;
    }
  };

  const handlePrimaryClick = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm('Tư vấn nhu cầu công việc từ Hero');
    } else {
      const target = document.getElementById('lien-he');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#fbfcfb] border-b border-[#e2e8f0] pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
      {/* Background subtle mesh decoration - no glassmorphism */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf7f1] border border-[#cbe8d5] text-[#0d7647] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
            <span style={{ textWrap: 'pretty' }}>{HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-[1.25] tracking-tight mb-6"
            style={{ textWrap: 'pretty' }}
          >
            {HERO_CONTENT.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg text-[#334155] leading-relaxed mb-8 max-w-2xl mx-auto font-normal"
            style={{ textWrap: 'pretty' }}
          >
            {HERO_CONTENT.subheadline}
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
            <button
              type="button"
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0d7647] hover:bg-[#0b633c] text-white font-semibold text-base shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#0d7647] focus:ring-offset-2 active:scale-[0.99] min-h-[48px]"
            >
              <MessageSquareCode size={19} />
              <span>{HERO_CONTENT.ctaPrimary.label}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={HERO_CONTENT.ctaSecondary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#ffffff] hover:bg-[#f8fafc] text-[#1e293b] font-medium text-base border border-[#cbd5e1] hover:border-[#94a3b8] transition-all duration-150 shadow-sm min-h-[48px]"
            >
              <span>{HERO_CONTENT.ctaSecondary.label}</span>
            </a>
          </div>

          {/* Trust reassurance micro-copy */}
          <p className="text-xs sm:text-sm text-[#64748b] mb-12">
            {HERO_CONTENT.ctaPrimary.note}
          </p>
        </div>

        {/* 4 Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4">
          {HERO_CONTENT.trustBadges.map((badge: HeroTrustBadge, idx: number) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#e2e8f0] rounded-xl p-4 flex items-start gap-3 shadow-sm hover:border-[#cbd5e1] transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#edf7f1] flex items-center justify-center flex-shrink-0 mt-0.5">
                {getBadgeIcon(badge.icon)}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#0f172a] mb-0.5">
                  {badge.label}
                </div>
                <div className="text-xs text-[#64748b] leading-normal" style={{ textWrap: 'pretty' }}>
                  {badge.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
