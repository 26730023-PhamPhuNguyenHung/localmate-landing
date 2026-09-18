import React, { useState, useEffect } from 'react';
import '../../styles/mam-non.css';
import { MAM_NON_SEO } from '../../data/mamNonData';
import { MamNonHero } from '../../components/mam-non/MamNonHero';
import { MamNonFeatures } from '../../components/mam-non/MamNonFeatures';
import { MamNonRoles } from '../../components/mam-non/MamNonRoles';
import { MamNonScale } from '../../components/mam-non/MamNonScale';
import { MamNonTrial } from '../../components/mam-non/MamNonTrial';
import { MamNonProductDemo } from '../../components/mam-non/MamNonProductDemo';
import { MamNonPricing } from '../../components/mam-non/MamNonPricing';
import { MamNonFAQ } from '../../components/mam-non/MamNonFAQ';
import { MamNonContactModal } from '../../components/mam-non/MamNonContactModal';
import { MamNonDemoModal } from '../../components/mam-non/MamNonDemoModal';

export interface MamNonPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
  onOpenDemoForm?: (serviceName?: string) => void;
}

export const MamNonPage: React.FC<MamNonPageProps> = ({
  onOpenConsultForm,
  onOpenDemoForm,
}) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // SEO & Document Metadata
  useEffect(() => {
    const prevTitle = document.title;
    document.title = MAM_NON_SEO.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', MAM_NON_SEO.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', MAM_NON_SEO.description);
      document.head.appendChild(metaDesc);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical ? canonical.getAttribute('href') : '';
    if (canonical) {
      canonical.setAttribute('href', MAM_NON_SEO.canonical);
    }

    // Scroll to top on first mount if no hash
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
      if (canonical && prevCanonical) {
        canonical.setAttribute('href', prevCanonical);
      }
    };
  }, []);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleOpenLeadModal = () => {
    setIsContactModalOpen(false);
    const serviceName = 'Localmate Mầm non — Dùng thử 1 tháng';
    if (onOpenConsultForm) {
      onOpenConsultForm(serviceName);
    } else if (onOpenDemoForm) {
      onOpenDemoForm(serviceName);
    }
  };

  return (
    <div className="mam-non-page">
      <MamNonHero onOpenContact={handleOpenContact} />
      <MamNonFeatures onOpenContact={handleOpenContact} />
      <MamNonRoles onOpenContact={handleOpenContact} />
      <MamNonScale onOpenContact={handleOpenContact} />
      <MamNonTrial onOpenContact={handleOpenContact} />
      <MamNonProductDemo
        onOpenContact={handleOpenContact}
        onOpenDemo={handleOpenDemo}
      />
      <MamNonPricing onOpenContact={handleOpenContact} />
      <MamNonFAQ onOpenContact={handleOpenContact} />

      {/* Modal liên hệ & tư vấn 1 tháng */}
      <MamNonContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Modal demo tương tác điểm danh học sinh */}
      <MamNonDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
};

export default MamNonPage;
