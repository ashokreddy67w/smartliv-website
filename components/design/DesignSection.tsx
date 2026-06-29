// components/design/DesignSection.tsx
'use client';

import { DesignHeader } from './DesignHeader';
import { InteriorShowcase } from './InteriorShowcase';
import { FinishCollection } from './FinishCollection';
import { DesignPrinciples } from './DesignPrinciples';
import { LifestyleGallery } from './LifestyleGallery';
import { InteriorComparison } from './InteriorComparison';
import { DesignCTA } from './DesignCTA';
import { DesignBackground } from './DesignBackground';

export function DesignSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0B0B0B]">
      <DesignBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <DesignHeader />
        <InteriorShowcase />
        <FinishCollection />
        <DesignPrinciples />
        <LifestyleGallery />
        <InteriorComparison />
        <DesignCTA />
      </div>
    </section>
  );
}