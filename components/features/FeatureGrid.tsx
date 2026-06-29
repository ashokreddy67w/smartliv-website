'use client';

import { FeatureCard } from './FeatureCard';
import { featureData } from './FeatureData';

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {featureData.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          index={index}
        />
      ))}
    </div>
  );
}