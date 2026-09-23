import React from 'react';
import { Mail, MapPin, Phone, Sprout } from 'lucide-react';
import { CONTACT_INFO } from '../../../data/landingContent';
import { geoServices } from '../../../data/geoLandingData';
import { publicNavItems } from '../../../data/navigation';
import { SectionContainer } from './GeoShared';
import { Link } from '../../layout/Router';
export const GeoFooter=()=><footer className="geo-footer"><SectionContainer>
 <div className="geo-footer-grid"><div className="geo-footer-brand"><Link to="/"><img src="/geo/logo.png" alt="Localmate — Người đồng hành số" width="280" height="109" loading="lazy"/></Link><p>Localmate giúp doanh nghiệp Việt tối ưu hiện diện trên các nền tảng AI như ChatGPT, Google Gemini, Perplexity và Google AI. Chúng tôi đồng hành cùng bạn trong hành trình tăng trưởng bền vững ở kỷ nguyên tìm kiếm bằng AI.</p><p className="geo-handwritten">Doanh nghiệp Việt vươn xa cùng AI</p></div>
 <div><h3>Liên hệ với chúng tôi</h3><a href={`tel:${CONTACT_INFO.phoneRaw}`}><Phone size={19}/>{CONTACT_INFO.phoneFormatted}</a><a href={`mailto:${CONTACT_INFO.email}`}><Mail size={19}/>{CONTACT_INFO.email}</a><p className="geo-footer-address"><MapPin size={21}/>{CONTACT_INFO.address}</p><a href={CONTACT_INFO.zaloUrl} target="_blank" rel="noopener noreferrer">Zalo Localmate ↗</a></div>
 <div><h3>Liên kết nhanh</h3>{publicNavItems.map(({label,path})=><Link key={label} to={path}>{label}</Link>)}</div>
 <div><h3>Dịch vụ nổi bật</h3>{geoServices.map(([label,href])=><Link key={label} to={href}>{label}</Link>)}</div></div>
 <div className="geo-footer-promise"><Sprout size={24}/><p>Cùng nhau xây dựng <b>một Việt Nam thịnh vượng</b> trong kỷ nguyên AI</p></div>
 <div className="geo-footer-bottom"><span>© {new Date().getFullYear()} Localmate. All rights reserved.</span><div><Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link><Link to="/dieu-khoan">Điều khoản sử dụng</Link></div><span>Made with ♥ for a smarter Vietnam</span></div>
</SectionContainer></footer>;
