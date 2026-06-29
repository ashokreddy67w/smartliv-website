// components/compare/CompareSection.tsx
'use client';

import { CompareHeader } from './CompareHeader';
import { ComparisonTable } from './ComparisonTable';
import { CompareStats } from './CompareStats';
import { CompareCTA } from './CompareCTA';
import { CompareBackground } from './CompareBackground';

export function CompareSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0B0B0B] min-h-screen">
      <CompareBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <CompareHeader />
        <ComparisonTable />
        <CompareStats />
        <CompareCTA />
      </div>
    </section>
  );
}