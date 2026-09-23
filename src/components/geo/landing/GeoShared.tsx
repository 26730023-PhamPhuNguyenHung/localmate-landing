import React from 'react';
import { ArrowRight, Building2, ShieldCheck, Sparkles, Zap, Network } from 'lucide-react';
export const SectionContainer = ({children,className=''}:{children:React.ReactNode;className?:string}) => <div className={`geo-container ${className}`}>{children}</div>;
export const Badge = ({children}:{children:React.ReactNode}) => <span className="geo-badge">{children}</span>;
export const GeoButton = ({children,onClick,secondary=false}:{children:React.ReactNode;onClick:()=>void;secondary?:boolean}) => <button type="button" className={`geo-button ${secondary?'geo-button-secondary':''}`} onClick={onClick}>{children}<ArrowRight size={20}/></button>;
export const ProofItems = ({closing=false}:{closing?:boolean}) => {
 const items = closing ? [{Icon:Zap,text:'Phản hồi nhanh'},{Icon:ShieldCheck,text:'Không cần hiểu kỹ thuật'},{Icon:Building2,text:'Phù hợp với doanh nghiệp đã có website'}] : [{Icon:Building2,text:'Phù hợp với doanh nghiệp đã có website'},{Icon:Zap,text:'Kiểm tra nhanh'},{Icon:ShieldCheck,text:'Không cần hiểu kỹ thuật'}];
 return <div className="geo-proofs">{items.map(({Icon,text})=><div key={text}><span><Icon size={26}/></span><p>{text}</p></div>)}</div>;
};
const platformLogos: Record<number, { src: string; alt: string }> = {
  0: { src: '/geo/platforms/chatgpt.png', alt: 'ChatGPT' },
  1: { src: '/geo/platforms/gemini.png', alt: 'Google Gemini' },
  2: { src: '/geo/platforms/perplexity.png', alt: 'Perplexity' },
  3: { src: '/geo/platforms/gemini.png', alt: 'Google AI Overviews' },
};

export const PlatformBadge = ({ name, index }: { name: string; index: number }) => {
  const logo = platformLogos[index];
  return (
    <div className="geo-platform">
      <span className={`geo-platform-icon platform-${index}`}>
        {logo ? (
          <img
            src={logo.src}
            alt={logo.alt}
            width={34}
            height={34}
            loading="lazy"
            className="geo-platform-img"
          />
        ) : (
          <Network />
        )}
      </span>
      <span>{name}</span>
    </div>
  );
};
