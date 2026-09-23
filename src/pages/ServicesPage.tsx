import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../components/layout/Router';
import { SEOHead } from '../components/seo/SEOHead';
import { servicesData, specializedSolutions } from '../data/homepageContent';
import '../styles/services.css';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    const target = window.location.hash.slice(1);
    if (target.startsWith('service-')) {
      requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    }
  }, []);

  return (
  <div className="services-page">
    <SEOHead
      title="Dịch vụ LocalMate | Giải pháp số cho doanh nghiệp địa phương"
      description="Khám phá dịch vụ thiết kế website, Google Maps, Google Ads, content và CRM của LocalMate."
      canonicalPath="/dich-vu"
    />
    <div className="services-container">
      <header className="services-intro">
        <span className="services-eyebrow">DỊCH VỤ LOCALMATE</span>
        <h1>Giải pháp số cho <em>doanh nghiệp địa phương</em></h1>
        <p>Chọn việc bạn đang cần. LocalMate sẽ cùng bạn xác định phạm vi phù hợp trước khi triển khai.</p>
      </header>

      <section className="services-grid" aria-label="Các dịch vụ LocalMate">
        {servicesData.map((service, index) => (
          <article className="services-card" id={`service-${service.id}`} key={service.id}>
            <div className="services-card-art">
              <img src={service.image} alt="" loading={index < 2 ? 'eager' : 'lazy'} width="600" height="400" />
            </div>
            <div className="services-card-body">
              <span className="services-card-number">0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.shortDesc}</p>
              <Link to="/#contact" className="services-card-link">Trao đổi nhu cầu <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="services-solutions" aria-labelledby="services-solutions-title">
        <h2 id="services-solutions-title">Giải pháp chuyên biệt</h2>
        <div className="services-solutions-grid">
          {specializedSolutions.map((solution) => (
            <article className="services-solution" key={solution.path}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <Link to={solution.path}>{solution.linkLabel} <ArrowRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>

      <aside className="services-contact">
        <div><h2>Chưa rõ nên bắt đầu từ đâu?</h2><p>Chia sẻ nhu cầu của bạn để nhận đề xuất phù hợp.</p></div>
        <Link to="/#contact" className="services-contact-link">Nhận tư vấn <ArrowRight size={19} aria-hidden="true" /></Link>
      </aside>
    </div>
  </div>
  );
};

export default ServicesPage;
