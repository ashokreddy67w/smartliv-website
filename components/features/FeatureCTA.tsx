// components/features/FeatureCTA.tsx
'use client';

import { motion } from 'framer-motion';

export function FeatureCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-24 pt-12 border-t border-white/5 text-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
        Ready to <span className="text-primary">Upgrade</span> Your Home?
      </h3>
      <p className="mt-4 text-text-gray/60 text-lg font-light max-w-2xl mx-auto">
        Experience premium smart living with SmartLiv's intelligent automation ecosystem.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
       <a
  href="https://wa.me/919248123456?text=Hi%20SmartLiv,%20I%20would%20like%20to%20book%20a%20smart%20home%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3.5 bg-primary text-[#0B1F38] font-semibold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
>
  Book Consultation
</a>
        <a
          href="/products"
          className="px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/30"
        >
          View Products
        </a>
      </div>
    </motion.div>
  );
}