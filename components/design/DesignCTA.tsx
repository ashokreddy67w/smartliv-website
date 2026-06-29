// components/design/DesignCTA.tsx
'use client';

import { motion } from 'framer-motion';

export function DesignCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center pt-12 border-t border-white/5"
    >
      <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
        Beautiful Homes Deserve <span className="text-primary">Intelligent Design</span>.
      </h3>
      <p className="mt-4 text-text-gray/60 text-lg font-light max-w-2xl mx-auto">
        Create a home that is as beautiful as it is smart.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#designs"
          className="px-8 py-3.5 bg-primary text-[#0B1F38] font-semibold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
        >
          Explore Designs
        </a>
        <a
          href="#consult"
          className="px-8 py-3.5 glass text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/30"
        >
          Book Design Consultation
        </a>
      </div>
    </motion.div>
  );
}