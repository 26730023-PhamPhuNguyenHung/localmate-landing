import React from 'react';
import { ConversionJourneySection } from './ConversionJourneySection';

export interface PainPointsSectionProps {
  onOpenConsultForm?: (serviceName?: string, defaultNote?: string) => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenConsultForm }) => {
  return <ConversionJourneySection onOpenConsultForm={onOpenConsultForm} />;
};

export default PainPointsSection;
