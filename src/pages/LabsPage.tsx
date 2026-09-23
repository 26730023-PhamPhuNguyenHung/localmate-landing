import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Bot, Check, Grid2X2, LockKeyhole, Mail, Phone, Send, Store, UserRound, MessageCircle } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Link } from '../components/layout/Router';
import { submitLead } from '../services/leadService';
import { labsNextProduct, labsProblems, labsProducts, labsShowcase, labsStages, labsSteps, labsValues } from '../data/labsContent';
import '../styles/labs.css';

function Wave() {
  return <svg className="labs-wave" viewBox="0 0 1600 110" preserveAspectRatio="none" aria-hidden="true"><path d="M0 18C200 0 240 120 490 82s300-84 520-35 335 35 590-34v97H0Z" fill="#dff5ec"/><path d="M0 43c220-8 255 110 500 65s325-72 520-20 360-4 580-40v62H0Z" fill="#f7fffb"/></svg>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="labs-eyebrow">{children}</span>; }
function HandNote({ children }: { children: React.ReactNode }) { return <p className="labs-handnote">{children}</p>; }

export const LabsPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', business: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const submitting = useRef(false);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const showcasePaused = useRef(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const scrollToProduct = (index: number) => {
    const track = showcaseRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollTo({ left: (card.offsetWidth + gap) * index, behavior: 'smooth' });
    setActiveProduct(index);
  };
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && !showcasePaused.current) {
        const track = showcaseRef.current;
        const card = track?.firstElementChild as HTMLElement | null;
        if (!track || !card) return;
        const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
        scrollToProduct((Math.round(track.scrollLeft / (card.offsetWidth + gap)) + 1) % labsShowcase.length);
      }
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll<HTMLElement>('.labs-page .labs-section-top, .labs-page .labs-section > .labs-container > .labs-eyebrow, .labs-page .labs-section h2, .labs-page .labs-intro, .labs-page .labs-product-card, .labs-page .labs-value-card, .labs-page .labs-problem-card, .labs-page .labs-step, .labs-page .labs-roadmap-card, .labs-page .labs-contact-copy, .labs-page .labs-contact-form-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    targets.forEach((target, index) => {
      target.classList.add('labs-reveal');
      target.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus('sending');
    try {
      await submitLead({ name: form.name, phone: form.phone, businessName: form.business, message: form.message, serviceInterest: 'Hợp tác LocalMate Labs', sourcePage: '/labs' }, { requireNetworkDelivery: true });
      setStatus('sent');
      setForm({ name: '', phone: '', business: '', message: '' });
    } catch { setStatus('error'); } finally { submitting.current = false; }
  };

  return <div className="labs-page">
    <SEOHead title="LocalMate Labs | Sản phẩm AI cho kinh doanh địa phương" description="LocalMate Labs nghiên cứu, thử nghiệm và phát triển sản phẩm AI thực tế cho công việc, tài chính và kinh doanh địa phương." canonicalPath="/labs" />
    <section className="labs-hero" id="labs-top">
      <div className="labs-container labs-hero-inner">
        <div className="labs-hero-copy"><Eyebrow>LocalMate Labs</Eyebrow><h1>LocalMate <em>Labs</em></h1><h2>Nơi LocalMate xây các sản phẩm AI cho những công việc rất cụ thể trong đời sống và kinh doanh.</h2><p>LocalMate Labs là nơi chúng tôi nghiên cứu, thử nghiệm và triển khai các sản phẩm AI thực tế, giúp doanh nghiệp địa phương làm việc hiệu quả hơn, phục vụ khách hàng tốt hơn và phát triển bền vững hơn.</p><div className="labs-hero-actions"><a className="labs-button" href="#products"><Bot size={22}/>Khám phá Labs <ArrowRight size={22}/></a><Link className="labs-button labs-button-outline" to="/#services"><Grid2X2 size={22}/>Xem dịch vụ</Link></div><HandNote>Cùng doanh nghiệp địa phương vươn xa hơn</HandNote></div>
        <div className="labs-hero-pills" aria-hidden="true"><span>AI trợ lý hằng ngày</span><span>Tối ưu vận hành</span><span>Hiểu khách hàng địa phương</span><span>Tăng trưởng doanh thu</span></div>
      </div><Wave/>
    </section>

    <section className="labs-section labs-products-section" id="products"><div className="labs-container"><div className="labs-section-top"><Eyebrow>Sản phẩm &amp; dự án</Eyebrow><a href="#roadmap" className="labs-text-link">Xem lộ trình Labs <ArrowRight/></a></div><h2>Những sản phẩm và dự án chúng tôi đang <em>xây dựng</em></h2><div className="labs-slider-controls"><p>Kéo ngang để khám phá thêm</p><div><button type="button" aria-label="Sản phẩm trước" onClick={() => scrollToProduct((activeProduct - 1 + labsShowcase.length) % labsShowcase.length)}><ArrowLeft/></button><button type="button" aria-label="Sản phẩm tiếp theo" onClick={() => scrollToProduct((activeProduct + 1) % labsShowcase.length)}><ArrowRight/></button></div></div><div className="labs-product-grid" ref={showcaseRef} aria-label="Sản phẩm và dự án LocalMate" onScroll={event => { const track = event.currentTarget; const card = track.firstElementChild as HTMLElement | null; const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0; if (card) setActiveProduct(Math.min(labsShowcase.length - 1, Math.round(track.scrollLeft / (card.offsetWidth + gap)))); }} onMouseEnter={() => { showcasePaused.current = true; }} onMouseLeave={() => { showcasePaused.current = false; }} onFocus={() => { showcasePaused.current = true; }} onBlur={() => { showcasePaused.current = false; }} onTouchStart={() => { showcasePaused.current = true; }} onTouchEnd={() => { showcasePaused.current = false; }}>{labsShowcase.map(product => { const Icon = product.icon; const href = 'href' in product ? product.href : '#contact-labs'; return <article className={`labs-product-card labs-tone-${product.tone}`} id={product.id} key={product.id}><div className="labs-product-art"><img src={product.image} alt={`Mockup minh họa ${product.name}`} loading="lazy" width="1439" height="900"/></div><div className="labs-product-body"><h3>{product.name}</h3><p>{product.description}</p><div className="labs-card-bottom"><span className="labs-status"><Icon size={21}/>{product.status}</span><a href={href} target={'href' in product ? '_blank' : undefined} rel={'href' in product ? 'noopener noreferrer' : undefined} aria-label={`${'href' in product ? 'Xem dự án' : 'Trao đổi về'} ${product.name}`} className="labs-round-link"><ArrowRight/></a></div></div></article>; })}</div><div className="labs-slider-dots" aria-label="Chọn sản phẩm">{labsShowcase.map((product,index)=><button type="button" key={product.id} className={index===activeProduct?'is-active':''} aria-label={`Xem ${product.name}`} aria-current={index===activeProduct?'true':undefined} onClick={()=>scrollToProduct(index)}/>)}</div></div><Wave/></section>

    <section className="labs-section labs-values-section"><div className="labs-container"><Eyebrow>Vì sao LocalMate Labs?</Eyebrow><h2>Chúng tôi tin AI thực sự có giá trị<br/>khi giải quyết được <em>vấn đề thật</em></h2><div className="labs-value-grid">{labsValues.map(value => { const Icon=value.icon; return <article className="labs-value-card" key={value.title}><span className="labs-value-icon"><Icon size={46} strokeWidth={1.8}/></span><h3>{value.title}</h3><p>{value.description}</p></article>; })}</div><HandNote>Cùng doanh nghiệp địa phương vươn xa hơn</HandNote></div><Wave/></section>

    <section className="labs-section labs-problems-section"><div className="labs-container"><div className="labs-heading-side"><Eyebrow>Chúng tôi tập trung vào</Eyebrow><HandNote>Những việc nhỏ<br/>Tạo nên thay đổi lớn</HandNote></div><h2>Những bài toán chúng tôi muốn <em>giải quyết</em></h2><div className="labs-problem-grid">{labsProblems.map(problem => { const Icon=problem.icon; return <article className="labs-problem-card" key={problem.title}><img src={problem.image} alt="" width="440" height="300" loading="lazy"/><div className="labs-problem-body"><span className="labs-problem-icon"><Icon/></span><h3>{problem.title}</h3><p>{problem.description}</p><a href={`#${problem.anchor}`} className="labs-round-link" aria-label={`Xem sản phẩm cho ${problem.title}`}><ArrowRight/></a></div></article>; })}</div></div><Wave/></section>

    <section className="labs-section labs-process-section" id="labs-process"><div className="labs-container"><Eyebrow>Cách chúng tôi xây</Eyebrow><h2>Từ ý tưởng đến <em>sản phẩm thực tế</em></h2><p className="labs-intro">Chúng tôi tin rằng những sản phẩm tốt bắt đầu từ việc giải quyết đúng vấn đề thực tế, được xây dựng nhanh, thử nghiệm sớm và liên tục hoàn thiện cùng người dùng.</p><div className="labs-steps">{labsSteps.map((step,index) => {const Icon=step.icon;return <article className="labs-step" key={step.title}><span className="labs-step-number">{index+1}</span><div className="labs-step-icon"><Icon size={54} strokeWidth={1.7}/></div><h3>{step.title}</h3><p>{step.description}</p>{index<labsSteps.length-1&&<ArrowRight className="labs-step-arrow" size={32}/>}</article>;})}</div><HandNote>Công nghệ vì những doanh nghiệp<br/>địa phương vươn xa hơn</HandNote></div><Wave/></section>

    <section className="labs-section labs-roadmap-section" id="roadmap"><div className="labs-container"><Eyebrow>Trạng thái dự án</Eyebrow><div className="labs-roadmap-heading"><h2>Lộ trình phát triển các sản phẩm <em>Labs</em></h2><a href="#contact-labs" className="labs-text-link">Theo dõi cập nhật mới nhất <ArrowRight/></a></div><p className="labs-roadmap-note">Các giai đoạn dưới đây thể hiện định hướng phát triển; tiến độ có thể thay đổi sau thử nghiệm.</p><div className="labs-roadmap-grid">{[...labsProducts,labsNextProduct].map((product,index)=>{const Icon=product.icon;return <article className={`labs-roadmap-card labs-roadmap-${index}`} key={product.name}><div className="labs-roadmap-art">{'image' in product?<img src={product.image} alt="" loading="lazy" width="340" height="210"/>:<Bot size={90} strokeWidth={1.3}/>}</div><div className="labs-roadmap-body"><h3>{product.name}</h3><p>{product.short}</p><div className="labs-stage-line">{labsStages.map((stage,step)=><span className={step===product.stage?'is-current':''} key={stage}><i/>{stage}</span>)}</div><span className="labs-status"><Icon size={21}/>{product.status}</span></div></article>;})}</div><HandNote>Cùng doanh nghiệp địa phương<br/>vươn xa hơn</HandNote></div><Wave/></section>

    <section className="labs-contact-section" id="contact-labs"><div className="labs-container labs-contact-grid"><div className="labs-contact-copy"><Eyebrow>Cùng kiến tạo giá trị</Eyebrow><h2>Muốn cùng <em>LocalMate</em><br/>thử nghiệm một sản phẩm AI phù hợp với bài toán của bạn?</h2><p>Chúng tôi luôn sẵn sàng lắng nghe, trao đổi và tìm kiếm cơ hội hợp tác với doanh nghiệp, đối tác và những người dùng tiên phong cùng kiến tạo các giải pháp AI thực tiễn cho thị trường Việt Nam.</p><HandNote>Cùng nhau tạo nên<br/>những giá trị thật cho cộng đồng doanh nghiệp!</HandNote></div><div className="labs-contact-form-card"><div className="labs-form-title"><span><Mail size={32}/></span><div><h3>Nhận tư vấn &amp; trao đổi hợp tác</h3><p>Điền thông tin, LocalMate sẽ liên hệ với bạn.</p></div></div>{status==='sent'?<div className="labs-form-success" role="status"><Check size={32}/><h3>Đã gửi yêu cầu</h3><p>Yêu cầu đã được gửi qua mạng. Nếu cần trao đổi ngay, bạn có thể gọi 0834.422.439.</p><button type="button" onClick={()=>setStatus('idle')}>Gửi thêm lời nhắn</button></div>:<form onSubmit={submit}><label><UserRound size={20}/><input name="name" autoComplete="name" placeholder="Họ và tên *" aria-label="Họ và tên" required maxLength={100} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} disabled={status==='sending'}/></label><label><Phone size={20}/><input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Số điện thoại *" aria-label="Số điện thoại" pattern="[0-9+(). -]{9,20}" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} disabled={status==='sending'}/></label><label><Store size={20}/><input name="business" autoComplete="organization" placeholder="Doanh nghiệp / Cửa hàng" aria-label="Doanh nghiệp hoặc cửa hàng" maxLength={120} value={form.business} onChange={e=>setForm({...form,business:e.target.value})} disabled={status==='sending'}/></label><label className="labs-textarea"><MessageCircle size={20}/><textarea name="message" placeholder="Bạn quan tâm sản phẩm hoặc có nhu cầu gì? (nếu có)" aria-label="Nội dung trao đổi" maxLength={1000} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} disabled={status==='sending'}/></label>{status==='error'&&<p className="labs-form-error" role="alert">Chưa thể gửi thông tin. Vui lòng thử lại hoặc gọi 0834.422.439.</p>}<button className="labs-button" type="submit" disabled={status==='sending'}><Send size={21}/>{status==='sending'?'Đang gửi...':'Trao đổi với LocalMate'}</button><p className="labs-privacy"><LockKeyhole size={15}/>Thông tin chỉ dùng để tư vấn. <Link to="/chinh-sach-bao-mat">Bảo mật tuyệt đối.</Link></p></form>}</div></div><Wave/></section>
  </div>;
};

export default LabsPage;
