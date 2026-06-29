// components/design/DesignHeader.tsx
'use client';

import { motion } from 'framer-motion';

export function DesignHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center max-w-4xl mx-auto mb-20"
    >
      <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        DESIGN EXCELLENCE
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
        <span className="block">Designed to Complement</span>
        <span className="block text-primary mt-2">Every Interior.</span>
        <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-white/60 mt-3">
          Every Space. Every Style.
        </span>
      </h2>

      <p className="mt-6 text-text-gray/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
        Whether modern, minimalist, luxury, classic or contemporary, SmartLiv products blend beautifully into your home while delivering intelligent automation.
      </p>
    </motion.div>
  );
}