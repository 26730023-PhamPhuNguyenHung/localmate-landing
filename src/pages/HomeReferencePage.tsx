import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Coffee, FileText, Heart, Leaf, Lightbulb, LockKeyhole, Mail, MapPin, Menu, MessageCircle, Monitor, Mountain, MousePointerClick, Phone, Send, Settings, ShieldCheck, ShoppingBag, Store, Target, Users, Wrench, X } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Link } from '../components/layout/Router';
import { CONTACT_INFO } from '../data/landingContent';
import { servicesData, storiesData, stepsData } from '../data/homepageContent';
import { submitLead } from '../services/leadService';
import '../styles/reference-landing.css';
import '../styles/homepage.css';

const storyIcons = [Coffee, Mountain, Wrench, ShoppingBag];
const serviceIcons = [Monitor, MapPin, Target, FileText, Users];
const valueIcons = [Leaf, Target, Settings, Heart];
const values = [['Dễ bắt đầu', 'Quy trình đơn giản, rõ ràng'], ['Rõ nhu cầu', 'Tư vấn đúng, làm đúng'], ['Triển khai thực tế', 'Giải pháp phù hợp, dễ áp dụng'], ['Đồng hành dài hạn', 'Luôn bên bạn trên hành trình phát triển']];
const processValues = [['Dễ hiểu', 'Ngôn ngữ đơn giản, rõ ràng'], ['Rõ đầu việc', 'Minh bạch, thống nhất ngay từ đầu'], ['Làm thực tế', 'Tập trung vào kết quả, hiệu quả'], ['Hỗ trợ lâu dài', 'Luôn bên bạn trên hành trình phát triển']];
const benefits = [[MessageCircle, 'Trao đổi rõ nhu cầu', 'Lắng nghe và tư vấn tận tâm'], [ShieldCheck, 'Không ép gói', 'Chỉ đề xuất khi thật sự phù hợp'], [Target, 'Chọn đúng giải pháp', 'Tối ưu theo mục tiêu thực tế'], [Users, 'Phù hợp hộ kinh doanh & SME', 'Giải pháp linh hoạt, dễ triển khai']] as const;

function ValueStrip({ items }: { items: string[][] }) {
  return <div className="lm-values">{items.map(([title, description], index) => {
    const Icon = valueIcons[index];
    return <div className="lm-value" key={title}><span className={`lm-round ${index % 2 ? 'lm-orange' : ''}`}><Icon /></span><div><strong>{title}</strong><p>{description}</p></div></div>;
  })}</div>;
}
function Wave() {
  return <svg className="lm-wave" viewBox="0 0 1672 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20C230 0 310 140 620 65S930 45 1090 62 1440-15 1672 60V130H0Z" fill="#dfefe7" opacity=".8"/><path d="M0 48C240 5 275 160 660 80S900 55 1115 45 1460 5 1672 110V130H0Z" fill="#f3faf6"/></svg>;
}
export const HomePage: React.FC<{ onOpenConsultForm?: (serviceName?: string) => void }> = ({ onOpenConsultForm }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof servicesData)[number] | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', industry: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const dialog = useRef<HTMLDialogElement>(null);
  const header = useRef<HTMLElement>(null);
  const submitting = useRef(false);
  useEffect(() => { if (selectedService) dialog.current?.showModal(); else dialog.current?.close(); }, [selectedService]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); setServicesOpen(false); } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) { setServicesOpen(false); setMenuOpen(false); } };
    document.addEventListener('keydown', close); document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, []);
  const closeNav = () => { setMenuOpen(false); setServicesOpen(false); };
  const quote = (name?: string) => { closeNav(); if (name) setForm(previous => ({ ...previous, message: `Tôi muốn được tư vấn về ${name}.` })); };
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (submitting.current) return;
    if (!form.name.trim()) { event.currentTarget.querySelector<HTMLInputElement>('[name="name"]')?.focus(); return; }
    submitting.current = true; setStatus('sending');
    try {
      await submitLead({ name: form.name, phone: form.phone, businessName: form.industry, serviceInterest: `Báo giá nhanh: ${form.industry}`, message: form.message, sourcePage: '/' }, { requireNetworkDelivery: true });
      setStatus('sent'); setForm({ name: '', phone: '', industry: '', message: '' });
    } catch { setStatus('error'); } finally { submitting.current = false; }
  };
  return <div className="lm-home">
    <SEOHead title="LocalMate | Người đồng hành số cho doanh nghiệp địa phương" description="Website, Google Maps / Local SEO, Google Ads, content và CRM automation cho hộ kinh doanh & SME. Cùng doanh nghiệp địa phương vươn xa hơn." canonicalPath="/" />
    <a className="lm-skip" href="#home">Đến nội dung chính</a>
    <header className="lm-header" ref={header}><div className="lm-header-inner">
      <a href="#home" className="lm-brand" onClick={closeNav} aria-label="LocalMate — Trang chủ"><img src="/logo.webp" width="213" height="83" alt="LocalMate — Người đồng hành số" /></a>
      <nav className={`lm-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Điều hướng chính" id="lm-navigation">
        <a href="#home" className="is-active" onClick={closeNav}>Trang chủ</a>
        <div className="lm-nav-services"><button type="button" aria-expanded={servicesOpen} aria-controls="lm-service-menu" onClick={() => setServicesOpen(!servicesOpen)}>Dịch vụ <ChevronDown size={15} /></button>{servicesOpen && <div id="lm-service-menu" className="lm-dropdown">{servicesData.map((service, index) => { const Icon = serviceIcons[index]; return <button key={service.id} onClick={() => { setSelectedService(service); closeNav(); }}><Icon size={20} />{service.title}<ArrowRight size={16}/></button>; })}</div>}</div>
        <a href="#contact" onClick={() => quote('bảng giá dịch vụ')}>Bảng giá</a><a href="#stories" onClick={closeNav}>Dự án</a><Link to="/kien-thuc" onClick={closeNav}>Kiến thức <ChevronDown size={15} /></Link><a href="#process" onClick={closeNav}>Giới thiệu</a><a href="#contact" onClick={closeNav}>Liên hệ</a>
      </nav>
      <div className="lm-header-actions"><a className="lm-phone" href={`tel:${CONTACT_INFO.phoneRaw}`}><Phone size={20}/>{CONTACT_INFO.phoneFormatted}</a><a className="lm-button lm-header-quote" href="#contact" onClick={closeNav}><MousePointerClick size={21}/>Báo giá nhanh</a><button className="lm-menu-toggle" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen} aria-controls="lm-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </div></header>
    <section id="home" className="lm-hero lm-section">
      <div className="lm-hero-visual" aria-hidden="true"><img src="/images/home/hero.webp" width="1448" height="1086" fetchPriority="high" alt=""/>
        <span className="lm-device-label lm-label-web"><Monitor/><span><b>Website</b><small>Chuyên nghiệp</small></span></span><span className="lm-device-label lm-label-ads"><Target/><span><b>Google Ads</b><small>Tiếp cận đúng khách hàng</small></span></span><span className="lm-device-label lm-label-maps"><MapPin/><span><b>Google Maps</b><small>Hiện diện dễ dàng</small></span></span><span className="lm-device-label lm-label-content"><FileText/><span><b>Content</b><small>Chăm sóc số</small></span></span><span className="lm-device-label lm-label-crm"><Users/><span><b>CRM Automation</b><small>Quản lý khách hàng</small></span></span>
      </div>
      <div className="lm-wrap lm-hero-inner"><div className="lm-hero-copy"><div className="lm-eyebrow-row"><span className="lm-eyebrow">LOCALMATE</span><span>— &nbsp;Người đồng hành số cho doanh nghiệp địa phương</span></div><h1>Đồng hành số cho<br/><em>doanh nghiệp địa phương</em></h1><p className="lm-hero-description">Website, Google Maps / Local SEO, Google Ads, content &amp; chăm sóc số, CRM automation – giải pháp toàn diện cho hộ kinh doanh &amp; SME, giúp bạn hiện diện chuyên nghiệp và phát triển bền vững trên môi trường số.</p><div className="lm-actions"><a className="lm-button" href="#contact"><MessageCircle/>Nhận tư vấn<ArrowRight/></a><a className="lm-button lm-outline" href="#services"><span className="lm-grid-icon">⊞</span>Xem dịch vụ</a></div><p className="lm-hand lm-hero-note">Cùng doanh nghiệp địa phương vươn xa hơn<span className="lm-swash"/></p></div><p className="lm-hand lm-hero-aside">Địa phương<br/>mạnh hơn<br/>cùng công nghệ ♡</p></div>
      <Wave/><div className="lm-wrap lm-hero-values"><ValueStrip items={values}/></div>
    </section>
    <section id="services" className="lm-section lm-services"><div className="lm-wrap">
      <p className="lm-hand lm-side lm-side-left">Giải pháp thực tế<br/>cho doanh nghiệp địa phương<br/>vươn xa cùng công nghệ<span className="lm-swash"/></p><p className="lm-hand lm-side lm-side-right">Địa phương<br/>vững mạnh<br/>cùng Localmate ♡</p>
      <div className="lm-heading"><span className="lm-eyebrow">DỊCH VỤ CỦA LOCALMATE</span><h2>Dịch vụ phù hợp cho<br/><em>doanh nghiệp địa phương</em></h2><p>Giúp hộ kinh doanh &amp; SME xây dựng hiện diện số chuyên nghiệp,<br className="lm-desktop"/> tiếp cận đúng khách hàng và phát triển bền vững trên môi trường số.</p></div>
      <div className="lm-service-grid">{servicesData.map(service => <article className="lm-service-card" key={service.id}><img src={service.image} width="600" height="400" loading="lazy" decoding="async" alt=""/><h3>{service.title}</h3><p>{service.shortDesc}</p><button onClick={() => setSelectedService(service)}>Tìm hiểu thêm<span><ArrowRight size={19}/></span></button></article>)}</div>
      <aside className="lm-service-note"><span className="lm-round lm-orange"><Lightbulb/></span><div><strong>Bạn có thể bắt đầu từ một dịch vụ hoặc kết hợp nhiều dịch vụ</strong><p>Localmate luôn đồng hành và tư vấn giải pháp phù hợp nhất với nhu cầu và ngân sách doanh nghiệp bạn.</p></div><a className="lm-button lm-outline" href="#contact"><MessageCircle/>Nhận tư vấn ngay<ArrowRight/></a></aside>
    </div><Wave/></section>
    <section id="stories" className="lm-section lm-stories"><div className="lm-wrap">
      <p className="lm-hand lm-side lm-side-left">Mỗi doanh nghiệp<br/>đều có một hành trình<br/>đáng kể ♡</p><p className="lm-hand lm-side lm-side-right">Cùng viết nên<br/>câu chuyện thành công<br/>của bạn ♡</p>
      <div className="lm-heading"><span className="lm-eyebrow">CÂU CHUYỆN KHÁCH HÀNG</span><h2>Mỗi ngành nghề, một câu chuyện <em>tăng trưởng riêng</em></h2><p>Localmate thấu hiểu đặc thù từng ngành nghề, từ đó thiết kế giải pháp phù hợp giúp bạn<br className="lm-desktop"/> hiện diện đúng nơi, tiếp cận đúng khách hàng và phát triển bền vững.</p></div>
      <div className="lm-story-grid">{storiesData.map((story, index) => { const Icon = storyIcons[index]; return <article className={`lm-story-card lm-story-${index}`} key={story.business}><div className="lm-story-heading"><span className="lm-round"><Icon/></span><div><span className="lm-category">{story.category}</span><h3>{story.business}</h3><p>{story.goal}</p></div></div><img className="lm-story-image" src={story.image} width="800" height="600" loading="lazy" decoding="async" alt={`Minh họa giải pháp số cho ${story.business.toLowerCase()}`}/><div className="lm-story-details"><div className="lm-story-detail"><span className="lm-status lm-challenge">!</span><div><strong>Thách thức</strong><p>{story.challenge}</p></div></div><div className="lm-story-detail"><span className="lm-status"><Check/></span><div><strong>Giải pháp cùng Localmate</strong><p>{story.solution}</p></div></div></div></article>; })}</div>
      <div className="lm-story-bottom"><a className="lm-button" href="#contact"><MessageCircle/>Trao đổi câu chuyện của bạn với Localmate<ArrowRight/></a><p className="lm-hand">Ngành nghề của bạn là gì?<br/>Hãy để Localmate đồng hành! ♡</p></div>
    </div><Wave/></section>
    <section id="process" className="lm-section lm-process"><div className="lm-wrap">
      <p className="lm-hand lm-side lm-side-left">Đơn giản hơn<br/>Hiệu quả hơn<br/>Cùng phát triển<span className="lm-swash"/></p><p className="lm-hand lm-side lm-side-right">Từ nhu cầu thực tế<br/>đến kết quả thực tế ♡</p>
      <div className="lm-heading"><span className="lm-eyebrow">QUY TRÌNH LÀM VIỆC</span><h2>Cách Localmate <em>đồng hành cùng bạn</em></h2><p>Biến hành trình chuyển đổi số trở nên đơn giản, rõ ràng và hiệu quả hơn<br className="lm-desktop"/> cho mọi doanh nghiệp địa phương.</p></div>
      <div className="lm-process-grid">{stepsData.map((step, index) => <article className="lm-process-card" key={step.title}><div className="lm-step-title"><span>{index + 1}</span><h3>{step.title}</h3></div><p>{step.desc}</p><img src={step.image} width="600" height="400" loading="lazy" decoding="async" alt=""/>{index < 3 && <span className="lm-step-arrow" aria-hidden="true">⤴</span>}</article>)}</div><ValueStrip items={processValues}/>
    </div><Wave/></section>
    <section id="contact" className="lm-section lm-contact"><div className="lm-wrap lm-contact-grid">
      <div className="lm-contact-copy"><p className="lm-hand">Cùng doanh nghiệp địa phương<br/>vươn xa hơn<span className="lm-swash"/></p><h2>Sẵn sàng bắt đầu<br/><em>cùng Localmate?</em></h2><p className="lm-contact-intro">Hãy chia sẻ nhu cầu của bạn, đội ngũ Localmate sẽ tư vấn miễn phí và đề xuất giải pháp phù hợp nhất cho doanh nghiệp của bạn.</p><div className="lm-benefits">{benefits.map(([Icon, title, description], index) => <div className="lm-benefit" key={title}><span className={`lm-round ${index === 2 ? 'lm-orange' : ''}`}><Icon/></span><div><strong>{title}</strong><p>{description}</p></div></div>)}</div></div>
      <form className="lm-form" onSubmit={submit} aria-labelledby="lm-form-title"><div className="lm-form-heading"><span className="lm-round"><Mail/></span><div><h3 id="lm-form-title">Nhận báo giá nhanh</h3><p>Điền thông tin, Localmate sẽ liên hệ ngay cho bạn!</p></div></div><fieldset disabled={status === 'sending'}>
        <label className="lm-field"><Users/><span className="lm-sr-only">Họ và tên</span><input name="name" placeholder="Họ và tên *" autoComplete="name" required maxLength={100} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/></label>
        <label className="lm-field"><Phone/><span className="lm-sr-only">Số điện thoại</span><input name="phone" type="tel" placeholder="Số điện thoại *" autoComplete="tel" inputMode="tel" pattern="[+0-9\s().\-]{9,20}" title="Nhập số điện thoại từ 9 đến 20 ký tự." required maxLength={20} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}/></label>
        <label className="lm-field"><Store/><span className="lm-sr-only">Lĩnh vực kinh doanh</span><select name="industry" required value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })}><option value="" disabled>Lĩnh vực kinh doanh *</option>{storiesData.map(story => <option key={story.business}>{story.business}</option>)}<option>Khác</option></select><ChevronDown className="lm-select-arrow"/></label>
        <label className="lm-field lm-textarea"><MessageCircle/><span className="lm-sr-only">Chia sẻ nhu cầu</span><textarea name="message" placeholder="Chia sẻ thêm nhu cầu của bạn (nếu có)" rows={3} maxLength={2000} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}/></label><button className="lm-button" type="submit"><Send/>{status === 'sending' ? 'Đang gửi yêu cầu…' : 'Nhận báo giá nhanh'}</button>
      </fieldset><p className="lm-form-note"><LockKeyhole size={14}/>Thông tin chỉ dùng để tư vấn. <Link to="/chinh-sach-bao-mat">Bảo mật</Link></p><p className={`lm-form-status ${status === 'error' ? 'is-error' : ''}`} role="status" aria-live="polite">{status === 'sent' ? 'Đã gửi yêu cầu qua mạng. Nếu cần tư vấn ngay, bạn có thể gọi hoặc nhắn Zalo cho LocalMate.' : status === 'error' ? 'Chưa thể gửi yêu cầu. Vui lòng thử lại hoặc gọi 0834 422 439.' : ''}</p></form>
      <p className="lm-hand lm-contact-note">Bắt đầu hành trình<br/>chuyển đổi số ngay hôm nay!<span>⤶</span></p>
    </div><Wave/></section>
    <footer id="about" className="lm-footer"><div className="lm-wrap"><div className="lm-footer-grid">
      <div className="lm-footer-brand"><a href="#home"><img src="/logo.webp" width="213" height="83" alt="LocalMate — Người đồng hành số"/></a><p>Website, Google Maps, quảng cáo và hệ thống số cho hộ kinh doanh &amp; SME.</p><p className="lm-location"><MapPin size={20}/>Đà Nẵng · Hội An · TP.HCM · Toàn quốc</p><p className="lm-hand">Cùng doanh nghiệp địa phương vươn xa hơn<span className="lm-swash"/></p></div>
      <div><h3>Dịch vụ</h3><nav aria-label="Dịch vụ LocalMate">{servicesData.map(service => <button key={service.id} onClick={() => setSelectedService(service)}>{service.title}</button>)}</nav></div>
      <div><h3>Thông tin</h3><nav aria-label="Thông tin LocalMate"><a href="#process">Cách làm việc</a><a href="#contact" onClick={() => quote('bảng giá dịch vụ')}>Bảng giá</a><a href="#stories">Dự án / Demo</a><a href="#home">Về LocalMate</a><Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link></nav></div>
      <div className="lm-footer-support"><h3>Cần hỗ trợ?</h3><p>Trao đổi trực tiếp với LocalMate<br/>về nhu cầu của bạn.</p><a className="lm-button" href={CONTACT_INFO.zaloUrl} target="_blank" rel="noreferrer"><MessageCircle/>Nhắn Zalo</a><a href={`tel:${CONTACT_INFO.phoneRaw}`}><Phone size={19}/><strong>{CONTACT_INFO.phoneFormatted}</strong></a><a href={CONTACT_INFO.mailtoUrl}><Mail size={19}/>{CONTACT_INFO.email}</a></div>
    </div><div className="lm-footer-bottom"><p>© {new Date().getFullYear()} LocalMate. All rights reserved.</p><div><Link to="/dieu-khoan">Điều khoản</Link><span>·</span><Link to="/chinh-sach-bao-mat">Bảo mật</Link><span>·</span><Link to="/chinh-sach-dich-vu">Chính sách dịch vụ</Link></div></div></div></footer>
    <dialog className="lm-dialog" ref={dialog} aria-labelledby="lm-dialog-title" onCancel={() => setSelectedService(null)} onClick={e => { if (e.target === e.currentTarget) setSelectedService(null); }}><button className="lm-dialog-close" aria-label="Đóng chi tiết dịch vụ" onClick={() => setSelectedService(null)}><X/></button><span className="lm-eyebrow">DỊCH VỤ LOCALMATE</span><h2 id="lm-dialog-title">{selectedService?.title}</h2><p>{selectedService?.fullDesc}</p><button className="lm-button" onClick={() => { const title = selectedService?.title; setSelectedService(null); if (onOpenConsultForm) onOpenConsultForm(title); else { quote(title); document.getElementById('contact')?.scrollIntoView(); } }}>Trao đổi nhu cầu<ArrowRight/></button></dialog>
  </div>;
};
