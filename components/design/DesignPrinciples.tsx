// components/design/DesignPrinciples.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Wrench, Zap, Sparkles, Layers, Building, RefreshCw 
} from 'lucide-react';

const principles = [
  { icon: Wrench, title: 'Minimal Installation', description: 'Clean, discreet installation that preserves your home\'s aesthetics.' },
  { icon: Zap, title: 'Invisible Wiring', description: 'Hidden wiring for a clutter-free, seamless look.' },
  { icon: Sparkles, title: 'Luxury Finishes', description: 'Premium materials and impeccable craftsmanship.' },
  { icon: Layers, title: 'Premium Glass Panels', description: 'Elegant glass touch panels with precision engineering.' },
  { icon: Building, title: 'Architect Approved', description: 'Designed in collaboration with leading architects.' },
  { icon: RefreshCw, title: 'Future Ready', description: 'Built to evolve with tomorrow\'s smart home standards.' },
];

export function DesignPrinciples() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-text-gray/40 text-sm uppercase tracking-widest">Smart Design Principles</p>
        <h3 className="text-3xl font-bold mt-1">Where Form Meets <span className="text-primary">Function</span></h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card rounded-2xl p-6 group"
          >
            <motion.div
              whileHover={{ rotate: 6, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="text-primary mb-3"
            >
              <item.icon size={28} strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
              {item.title}
            </h4>
            <p className="mt-2 text-text-gray/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}