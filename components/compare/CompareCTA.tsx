// components/compare/CompareCTA.tsx
'use client';

import { motion } from 'framer-motion';

export function CompareCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20 pt-12 border-t border-white/5 text-center"
    >
      <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
        Upgrade Your Home. <span className="text-primary">Upgrade Your Lifestyle.</span>
      </h3>
      <p className="mt-4 text-text-gray/60 text-lg font-light max-w-2xl mx-auto">
        Join thousands of homeowners who trust SmartLiv for intelligent living.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#solutions"
          className="px-8 py-3.5 bg-primary text-[#0B1F38] font-semibold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
        >
          Explore Solutions
        </a>
        <a
          href="#consult"
          className="px-8 py-3.5 glass text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/30"
        >
          Book Free Consultation
        </a>
      </div>
    </motion.div>
  );
}