import React from 'react';
import { Gift, ShieldCheck } from 'lucide-react';
import { geoPlans } from '../../../data/geoLandingData';
import { Badge, SectionContainer } from './GeoShared';
import { GeoPricingCard } from './GeoPricingCard';
export const GeoPricingSection = ({onSelectPlan}:{onSelectPlan:(name:string)=>void}) => <section className="geo-pricing geo-scene-section" id="bang-gia-geo"><SectionContainer>
 <div className="geo-section-heading"><Badge><Gift size={23}/>AI VISIBILITY AUDIT MIỄN PHÍ</Badge><h2>BẢNG GIÁ <strong>DỊCH VỤ GEO</strong></h2><p>Bắt đầu từ những bước nhỏ, tạo nền tảng hôm nay, bứt phá ngày mai.</p><p className="geo-heading-note">Localmate đồng hành cùng doanh nghiệp Việt trên hành trình tăng hiện diện thương hiệu trong kỷ nguyên AI.</p></div>
 <div className="geo-price-grid">{geoPlans.map(plan=><GeoPricingCard key={plan.id} plan={plan} onSelect={()=>onSelectPlan(`${plan.name} ${plan.price} ${plan.unit}`.trim())}/>)}</div>
 <div className="geo-reassurance"><span className="geo-icon-tile"><ShieldCheck size={37}/></span><p>Localmate không cam kết “đưa bạn lên top AI”.<br/>Chúng tôi tập trung giúp doanh nghiệp <b>tăng khả năng được AI phát hiện, xuất hiện nhiều hơn và đo lường được mức độ hiện diện</b> một cách minh bạch.</p></div>
 </SectionContainer></section>;
