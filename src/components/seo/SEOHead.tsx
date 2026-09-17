import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  schemaType?: 'Organization' | 'ProfessionalService' | 'Service' | 'Article' | 'FAQPage' | 'CreativeWork' | 'BreadcrumbList' | 'LocalBusiness' | 'BlogPosting' | 'HowTo';
  schemaData?: Record<string, any>;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogImage = 'https://localmate.vn/logo.png',
  ogType = 'website',
  breadcrumbs,
  schemaType = 'ProfessionalService',
  schemaData,
  noIndex = false
}) => {
  useEffect(() => {
    // 1. Update Title (chống nhân đôi tên thương hiệu nếu title đã có LocalMate)
    const fullTitle = title.includes('LocalMate') ? title : `${title} | LocalMate`;
    document.title = fullTitle;

    // Helper: update or create meta tag
    const updateOrCreateMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    // 2. Update Meta Description
    updateOrCreateMeta('name', 'description', description);

    // 3. Update Robots Directives (noindex cho 404 / Draft preview)
    updateOrCreateMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Update Canonical URL
    const canonicalUrl = `https://localmate.vn${canonicalPath === '/' ? '' : canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Update OpenGraph Tags
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://localmate.vn${ogImage}`;
    updateOrCreateMeta('property', 'og:title', fullTitle);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    updateOrCreateMeta('property', 'og:image', fullOgImage);
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:site_name', 'LocalMate');
    updateOrCreateMeta('property', 'og:locale', 'vi_VN');

    // 6. Update Twitter Tags
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', fullTitle);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:image', fullOgImage);

    // 7. Injected Structured Data (JSON-LD) theo chuẩn Entity Graph
    const graphNodes: Record<string, any>[] = [];

    // Base Organization / ProfessionalService
    const baseOrgSchema = {
      '@type': 'ProfessionalService',
      '@id': 'https://localmate.vn/#organization',
      name: 'LocalMate',
      image: 'https://localmate.vn/logo.png',
      url: 'https://localmate.vn',
      telephone: '+84834422439',
      email: 'contact@localmate.vn',
      description: 'Đơn vị thiết kế Website, SEO Google Maps & Chuyển đổi số cho doanh nghiệp nhỏ tại Việt Nam.',
      priceRange: '490.000 - 6.900.000 VNĐ',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'VN'
      }
    };
    graphNodes.push(baseOrgSchema);

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: `https://localmate.vn${b.url}`
        }))
      };
      graphNodes.push(breadcrumbSchema);
    }

    // Contextual Page Schema (Article / Service / FAQ)
    if (schemaData) {
      const pageSchema: Record<string, any> = {
        '@type': schemaType,
        '@id': `${canonicalUrl}#${schemaType.toLowerCase()}`,
        mainEntityOfPage: canonicalUrl,
        ...schemaData
      };

      // Đảm bảo Article Schema luôn có thuộc tính image bắt buộc của Google
      if (schemaType === 'Article' && !pageSchema.image) {
        pageSchema.image = [fullOgImage];
      }

      graphNodes.push(pageSchema);
    }

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': graphNodes
    };

    // Insert or update dynamic script tag in head
    let scriptTag = document.getElementById('dynamic-jsonld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLdData);
  }, [title, description, canonicalPath, ogImage, ogType, breadcrumbs, schemaType, schemaData, noIndex]);

  return null;
};
