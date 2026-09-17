export interface LeadFormData {
  website: string;
  phone: string;
}

export interface PricingPlanItem {
  id: string;
  name: string;
  badge: string;
  badgeType: 'featured' | 'neutral';
  price: string;
  unit: string;
  priceNote?: string;
  audience: string;
  features: string[];
  ctaText: string;
  ctaType: 'primary' | 'secondary';
  footerNote?: string;
}
