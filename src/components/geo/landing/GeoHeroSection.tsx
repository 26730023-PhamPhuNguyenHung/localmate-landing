import React from 'react';
import { GeoLeadFormCard } from './GeoLeadFormCard';
import { Badge, PlatformBadge, ProofItems, SectionContainer } from './GeoShared';
import { geoPlatforms } from '../../../data/geoLandingData';
export const GeoHeroSection = () => <section className="geo-hero geo-scene-section" id="geo-hero"><SectionContainer>
 <img className="geo-hero-art" src="/geo/hero-scene.png" alt="" width="1536" height="1024"/>
 <div className="geo-hero-copy"><Badge>SEO CHATGPT · GEO · AI SEARCH OPTIMIZATION</Badge>
 <h1>KHÁCH HỎI CHATGPT VỀ DỊCH VỤ CỦA BẠN.<strong>AI CÓ NHẮC ĐẾN BẠN KHÔNG?</strong></h1>
 <p className="geo-intro">Localmate giúp doanh nghiệp tối ưu website để tăng cơ hội được ChatGPT, Gemini, Perplexity và Google AI <b>hiểu, tin cậy và nhắc đến</b> khi khách hàng tìm kiếm thông tin, sản phẩm, dịch vụ.</p>
 <div className="geo-platforms">{geoPlatforms.map((name,index)=><PlatformBadge key={name} name={name} index={index}/>)}</div>
 <ProofItems/><p className="geo-handwritten">Để doanh nghiệp Việt hiện diện <span style={{whiteSpace:'nowrap'}}>mạnh mẽ</span><br/>trong kỷ nguyên tìm kiếm bằng AI</p></div>
 <div className="geo-hero-form"><GeoLeadFormCard id="hero-audit-form"/><p className="geo-handwritten">Biến câu hỏi thành<br/>cơ hội cho doanh nghiệp của bạn</p></div>
 </SectionContainer></section>;

