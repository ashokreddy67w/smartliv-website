// components/design/InteriorComparison.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Check } from 'lucide-react';

const traditionalFeatures = [
  'Plastic switches',
  'Visible wiring',
  'Multiple remotes',
  'No automation',
  'Manual operation',
  'Inconsistent lighting',
];

const smartLivFeatures = [
  'Premium glass switches',
  'Invisible automation',
  'Voice control',
  'Luxury lighting',
  'Scene automation',
  'Energy optimization',
];

export function InteriorComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, x)));
  };

  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-text-gray/40 text-sm uppercase tracking-widest">Interior Comparison</p>
        <h3 className="text-3xl font-bold mt-1">Traditional Home <span className="text-white/40">vs</span> <span className="text-primary">SmartLiv Home</span></h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
              <X size={20} className="text-red-500" />
            </div>
            <h4 className="text-xl font-semibold text-white/60">Traditional Home</h4>
          </div>
          <ul className="space-y-3">
            {traditionalFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-text-gray/50">
                <X size={16} className="text-red-500/40 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SmartLiv */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-6 border-primary/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Check size={20} className="text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-primary">SmartLiv Home</h4>
          </div>
          <ul className="space-y-3">
            {smartLivFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-white/70">
                <Check size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Interactive Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <div
          className="relative h-2 rounded-full bg-white/10 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <div
            className="absolute h-full rounded-full bg-primary/30"
            style={{ width: `${sliderPosition}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/30 cursor-grab active:cursor-grabbing"
            style={{ left: `calc(${sliderPosition}% - 10px)` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-text-gray/40">
          <span>Traditional</span>
          <span>SmartLiv</span>
        </div>
      </motion.div>
    </div>
  );
}