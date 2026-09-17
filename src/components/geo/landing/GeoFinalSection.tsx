import React from 'react';
import { Gift } from 'lucide-react';
import { Badge, ProofItems, SectionContainer } from './GeoShared';
import { GeoLeadFormCard } from './GeoLeadFormCard';
import { GeoFooter } from './GeoFooter';
export const GeoFinalSection=({selectedPackage}:{selectedPackage:string})=><section className="geo-final" id="lien-he-geo">
 <div className="geo-closing geo-scene-section"><SectionContainer>
 <img className="geo-cta-art" src="/geo/cta-scene.png" alt="" width="1536" height="1024" loading="lazy"/>
 <div className="geo-closing-copy"><Badge><Gift size={23}/>AI VISIBILITY AUDIT MIỄN PHÍ</Badge><h2>Sẵn sàng để thương hiệu của bạn <strong>được AI nhắc đến nhiều hơn?</strong></h2><p className="geo-intro">Để Localmate giúp bạn khám phá cơ hội hiển thị trên ChatGPT, Google Gemini, Perplexity và Google AI. Nhận phân tích mức độ hiện diện của thương hiệu và gợi ý chiến lược phù hợp ngay hôm nay — hoàn toàn miễn phí trải nghiệm, không phát sinh chi phí.</p><ProofItems closing/><p className="geo-handwritten">Cùng Localmate kiến tạo lợi thế hiển thị<br/>trong kỷ nguyên AI</p></div>
 <GeoLeadFormCard id="bottom-audit-form" closing selectedPackage={selectedPackage}/>
 </SectionContainer></div><GeoFooter/>
 </section>;
