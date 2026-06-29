// components/design/DesignBackground.tsx
'use client';

import { FloatingParticles } from '../features/FloatingParticles';

export function DesignBackground() {
  return (
    <>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[100px] -translate-y-1/2" />
        
        {/* Soft light rays */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/3 rounded-full blur-[60px]" />
      </div>

      {/* Particles */}
      <FloatingParticles />
    </>
  );
}