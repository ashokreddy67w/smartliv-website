// components/app/BackgroundEffects.tsx
'use client';

import { FloatingParticles } from '../features/FloatingParticles';

export function BackgroundEffects() {
  return (
    <>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] -translate-y-1/2" />
      </div>

      {/* Particles */}
      <FloatingParticles />
    </>
  );
}