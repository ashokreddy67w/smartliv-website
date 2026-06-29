// components/features/FeatureSection.tsx
'use client';

import { FeatureHeader } from './FeatureHeader';
import { FeatureGrid } from './FeatureGrid';
import { FeatureStats } from './FeatureStats';
import { FeatureCTA } from './FeatureCTA';
import { FloatingParticles } from './FloatingParticles';

export function FeatureSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0B0B0B]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      {/* Particles - z-index 0 */}
      <FloatingParticles />

      {/* Content - z-index 10 */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <FeatureHeader />
        <FeatureGrid />
        <FeatureStats />
        <FeatureCTA />
      </div>
    </section>
  );
}