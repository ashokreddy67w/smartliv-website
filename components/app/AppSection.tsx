// components/app/AppSection.tsx
'use client';

import { AppHeader } from './AppHeader';
import { PhoneMockup } from './PhoneMockup';
import { SupportedPlatforms } from './SupportedPlatforms';
import { AppStats } from './AppStats';
import { AppCTA } from './AppCTA';
import { BackgroundEffects } from './BackgroundEffects';

export function AppSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#050505] min-h-screen">
      <BackgroundEffects />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <AppHeader />
          <PhoneMockup />
        </div>
        
        <SupportedPlatforms />
        <AppStats />
        <AppCTA />
      </div>
    </section>
  );
}