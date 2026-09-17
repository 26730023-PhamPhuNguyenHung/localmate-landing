import React, { useState } from 'react';
import { ArrowRight, Building2, Menu, Phone, ShieldCheck, Sparkles, X, Zap, Network } from 'lucide-react';
import { CONTACT_INFO } from '../../../data/landingContent';
import { geoNav } from '../../../data/geoLandingData';
import { Link } from '../../layout/Router';
export const SectionContainer = ({children,className=''}:{children:React.ReactNode;className?:string}) => <div className={`geo-container ${className}`}>{children}</div>;
export const Badge = ({children}:{children:React.ReactNode}) => <span className="geo-badge">{children}</span>;
export const GeoButton = ({children,onClick,secondary=false}:{children:React.ReactNode;onClick:()=>void;secondary?:boolean}) => <button type="button" className={`geo-button ${secondary?'geo-button-secondary':''}`} onClick={onClick}>{children}<ArrowRight size={20}/></button>;
export const ProofItems = ({closing=false}:{closing?:boolean}) => {
 const items = closing ? [{Icon:Zap,text:'Phản hồi nhanh'},{Icon:ShieldCheck,text:'Không cần hiểu kỹ thuật'},{Icon:Building2,text:'Phù hợp với doanh nghiệp đã có website'}] : [{Icon:Building2,text:'Phù hợp với doanh nghiệp đã có website'},{Icon:Zap,text:'Kiểm tra nhanh'},{Icon:ShieldCheck,text:'Không cần hiểu kỹ thuật'}];
 return <div className="geo-proofs">{items.map(({Icon,text})=><div key={text}><span><Icon size={26}/></span><p>{text}</p></div>)}</div>;
};
export const PlatformBadge = ({name,index}:{name:string;index:number}) => <div className="geo-platform"><span className={`geo-platform-icon platform-${index}`}>{index===1?<Sparkles/>:index===3?'G':<Network/>}</span><span>{name}</span></div>;
export const GeoHeader = () => {
 const [open,setOpen]=useState(false);
 return <header className="geo-header"><SectionContainer>
 <Link to="/" aria-label="Localmate — Trang chủ"><img src="/geo/logo.png" alt="Localmate — Người đồng hành số" width="250" height="98"/></Link>
 <nav id="geo-navigation" aria-label="Điều hướng chính" className={open?'is-open':''}>{geoNav.map(([label,href])=><Link key={label} to={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
 <a className="geo-phone" href={`tel:${CONTACT_INFO.phoneRaw}`}><Phone size={19}/>{CONTACT_INFO.phoneFormatted}</a>
 <a className="geo-button geo-header-quote" href="#bang-gia-geo">Báo giá nhanh<ArrowRight size={20}/></a>
 <button className="geo-menu" aria-label={open?'Đóng menu':'Mở menu'} aria-expanded={open} aria-controls="geo-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </SectionContainer></header>;
};
