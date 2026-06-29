// components/features/FeatureHeader.tsx
'use client';

import { motion } from 'framer-motion';

export function FeatureHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center max-w-4xl mx-auto mb-20"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        SMARTLIV FEATURES
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
        <span className="block">Everything Your Home Needs.</span>
        <span className="block text-primary mt-2">Powered by SmartLiv Intelligence.</span>
      </h2>

      {/* Subheading */}
      <p className="mt-6 text-text-gray/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
        Control lighting, security, entertainment, climate, access control and automation from one beautifully designed Smart Home platform.
      </p>
    </motion.div>
  );
}