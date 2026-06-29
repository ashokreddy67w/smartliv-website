// components/app/PhoneMockup.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { DashboardScreen } from './DashboardScreen';
import { FloatingNotifications } from './FloatingNotifications';
import { FloatingIcons } from './FloatingIcons';

export function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-20 translate-y-20" />
      </div>

      {/* Floating notifications */}
      <FloatingNotifications />

      {/* Floating icons */}
      <FloatingIcons />

      {/* Phone */}
     <motion.div
  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  animate={{
    y: [0, -12, 0],
    rotate: [-2, 2, -2],
  }}
  transition={{
    duration: 1,
    ease: 'easeOut',
    y: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
    rotate: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  }}
  className="relative z-20"
  style={{
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  }}
>
  {/* Phone frame */}
  <div className="relative w-[320px] sm:w-[360px] aspect-[9/19] rounded-[48px] p-3 bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]">
    <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-[#F5F7FA]">
      <div className="absolute top-2 left-1/2 z-50 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full bg-black">
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
        <div className="h-1.5 w-12 rounded-full bg-zinc-800" />
      </div>

      <DashboardScreen />

      <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-black/20" />
    </div>

    <div
      className="pointer-events-none absolute inset-0 rounded-[48px]"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
      }}
    />
  </div>

  <div className="absolute -bottom-8 left-1/2 h-[40px] w-[90%] -translate-x-1/2 rounded-full bg-black/40 blur-2xl" />
</motion.div>
    </div>
  );
}