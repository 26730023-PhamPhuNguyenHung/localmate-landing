import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';
import { Link } from '../components/layout/Router';
import { SEOHead } from '../components/seo/SEOHead';
import { servicesData, serviceCategories, ServiceItem } from '../data/servicesData';
import { specializedSolutions } from '../data/homepageContent';
import '../styles/services.css';

interface ServicesPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultForm }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const target = window.location.hash.slice(1);
    if (target.startsWith('service-')) {
      requestAnimationFrame(() => {
        const el = document.getElementById(target);
        if (el) {
          const headerOffset = 80;
          const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    }
  }, []);

  const handleCtaClick = (serviceTitle: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(serviceTitle);
    } else {
      window.location.href = `/#contact`;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <div className="services-page">
      <SEOHead
        title="Dịch vụ LocalMate | Giải pháp số cho doanh nghiệp địa phương"
        description="Khám phá dịch vụ thiết kế website, Google Maps, Google Ads, content và CRM của LocalMate. Báo giá minh bạch, bàn giao đầy đủ mã nguồn và tài khoản chính chủ."
        canonicalPath="/dich-vu"
      />
      <div className="services-container">
        <header className="services-intro">
          <span className="services-eyebrow">HỆ SINH THÁI DỊCH VỤ LOCALMATE</span>
          <h1>Giải pháp số thực tế cho <em>doanh nghiệp địa phương</em></h1>
          <p>
            Chọn đúng việc cần làm, không lãng phí ngân sách. Chúng tôi đồng hành cùng bạn từ lúc khởi tạo đến khi vận hành ổn định.
          </p>

          <div className="services-trust-strip" aria-label="Cam kết của LocalMate">
            <span className="services-trust-item"><Zap size={16} /> Demo xem trước 48h</span>
            <span className="services-trust-sep">•</span>
            <span className="services-trust-item"><ShieldCheck size={16} /> 100% Chính chủ sở hữu</span>
            <span className="services-trust-sep">•</span>
            <span className="services-trust-item"><Award size={16} /> Bảo hành hạ tầng 5 năm</span>
            <span className="services-trust-sep">•</span>
            <span className="services-trust-item"><Sparkles size={16} /> Báo giá cố định trước</span>
          </div>
        </header>

        {/* Category Navigation Filter Pills */}
        <div className="services-filter-bar" role="tablist" aria-label="Lọc nhóm dịch vụ">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`services-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <section className="services-grid" aria-label="Các dịch vụ LocalMate">
          {filteredServices.map((service, index) => (
            <article className="services-card" id={`service-${service.id}`} key={service.id}>
              <div className="services-card-art">
                <img src={service.image} alt="" loading={index < 2 ? 'eager' : 'lazy'} width="600" height="400" />
                <span className="services-price-badge">{service.priceBadge}</span>
              </div>
              <div className="services-card-body">
                <div className="services-card-meta">
                  <span className="services-card-tag">{service.categoryLabel}</span>
                  <span className="services-card-number">0{parseInt(service.id, 10) + 1}</span>
                </div>
                <h2>{service.title}</h2>
                <p className="services-card-desc">{service.shortDesc}</p>

                <div className="services-deliverables">
                  <span className="services-deliverables-title">Hạng mục bàn giao:</span>
                  <ul>
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx}>
                        <CheckCircle2 size={16} className="services-check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-card-actions">
                  <button
                    type="button"
                    className="services-card-btn"
                    onClick={() => handleCtaClick(service.title)}
                  >
                    Nhận tư vấn &amp; Báo giá <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Specialized Solutions */}
        <section className="services-solutions" aria-labelledby="services-solutions-title">
          <h2 id="services-solutions-title">Giải pháp chuyên biệt cho ngành nghề</h2>
          <div className="services-solutions-grid">
            {specializedSolutions.map((solution) => (
              <article className="services-solution" key={solution.path}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <Link to={solution.path}>
                  {solution.linkLabel} <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Consultation Banner */}
        <aside className="services-contact">
          <div>
            <h2>Chưa rõ nên bắt đầu từ dịch vụ nào?</h2>
            <p>Chia sẻ bối cảnh hiện tại của bạn, chuyên viên LocalMate sẽ tư vấn phương án phù hợp nhất.</p>
          </div>
          <button
            type="button"
            className="services-contact-btn"
            onClick={() => handleCtaClick('Tư vấn lộ trình tổng thể')}
          >
            Nhận tư vấn miễn phí <ArrowRight size={19} aria-hidden="true" />
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ServicesPage;
