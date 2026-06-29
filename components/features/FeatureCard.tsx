// components/features/FeatureCard.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Feature } from './FeatureData';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="group relative rounded-[28px] p-8 transition-all duration-500"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(109, 179, 63, 0.3), 0 0 40px -8px rgba(109, 179, 63, 0.1)',
        }}
      />

      {/* Icon container */}
      <div className="relative mb-5">
        <motion.div
          className="text-primary/70 group-hover:text-primary transition-colors duration-300"
          whileHover={{ rotate: 6, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {feature.icon}
        </motion.div>
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-text-gray/60 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Explore link */}
      <motion.div
        className="mt-5 flex items-center gap-1.5 text-primary/50 group-hover:text-primary transition-colors"
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.div>
    </motion.div>
  );
}