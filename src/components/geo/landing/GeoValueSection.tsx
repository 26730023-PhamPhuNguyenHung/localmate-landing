import React, { useState } from 'react';
import { ArrowRight, BarChart3, Calculator, Check, GraduationCap, MessageSquare, Search, Settings, ShoppingCart, Trophy, MonitorCheck } from 'lucide-react';
import { geoQueries, geoFeatures } from '../../../data/geoLandingData';
import { Badge, GeoButton, SectionContainer } from './GeoShared';
const queryIcons=[GraduationCap,BarChart3,Calculator,ShoppingCart];
const featureIcons=[MessageSquare,Trophy,Settings,BarChart3];
const QueryCard=({text,index,active,onClick}:{text:string;index:number;active:boolean;onClick:()=>void})=>{const Icon=queryIcons[index];return <button className={`geo-query-card ${active?'is-selected':''}`} onClick={onClick} aria-pressed={active}><span className="geo-quote-mark">“</span><span>{text}</span><Icon size={27}/><ArrowRight className="geo-query-arrow" size={20}/></button>;};
const FeatureCard=({index}:{index:number})=>{const Icon=featureIcons[index];const feature=geoFeatures[index];return <article className={`geo-feature feature-${index}`}><span className="geo-icon-tile"><Icon size={30}/></span><div><h3>{feature.title}</h3><p>{feature.text}</p></div></article>;};
export const GeoValueSection=({onAudit}:{onAudit:()=>void})=>{
 const [query,setQuery]=useState(0);
 return <section className="geo-value geo-scene-section" id="vi-sao-geo"><SectionContainer>
 <div className="geo-value-content"><div className="geo-value-heading"><Badge>VÌ SAO DOANH NGHIỆP CẦN LOCALMATE?</Badge><h2>Không chỉ lên AI — mà xuất hiện <strong>đúng lúc khách đang chọn nhà cung cấp</strong></h2><p>Khách hàng ngày nay tìm kiếm nhà cung cấp qua ChatGPT, Gemini, Google AI…<br/>Localmate giúp doanh nghiệp của bạn được AI nhắc đến khi họ đang thực sự có nhu cầu.</p></div>
 <div className="geo-query-grid">{geoQueries.map((text,index)=><QueryCard key={text} text={text} index={index} active={query===index} onClick={()=>setQuery(index)}/>)}</div>
 <div className="geo-ai-scene"><div className="geo-answer" aria-live="polite"><div className="geo-search-line"><Search size={15}/><span>{geoQueries[query]}</span><ArrowRight size={21}/></div><p className="geo-answer-label">Minh họa câu trả lời từ AI</p><div className="geo-answer-business"><img src="/geo/logo.png" alt="" width="70" height="28"/><div><b>Localmate</b> <span className="geo-example-label">Ví dụ minh họa</span><p>Thông tin doanh nghiệp rõ ràng, nội dung hữu ích và phù hợp với nhu cầu tìm kiếm.</p></div></div><div className="geo-answer-skeleton" aria-hidden="true"><i/><i/><i/></div></div></div></div>
 <div className="geo-features"><Badge>LOCALMATE GIÚP BẠN</Badge>{geoFeatures.map((_,index)=><FeatureCard key={index} index={index}/>)}</div>
 <div className="geo-audit-strip"><span className="geo-icon-tile"><MonitorCheck size={44}/></span><div><h3>Kiểm tra website trước khi quyết định</h3><p>Nhận phân tích nhanh miễn phí. Biết ngay doanh nghiệp của bạn đang hiện diện thế nào trên ChatGPT, Gemini và Google AI.</p></div><GeoButton onClick={onAudit}><Search size={21}/>Kiểm tra miễn phí ngay</GeoButton></div>
 <p className="geo-value-signoff">DOANH NGHIỆP VIỆT NAM — LỚN MẠNH HƠN TRONG KỶ NGUYÊN AI</p>
 </SectionContainer></section>;
};
