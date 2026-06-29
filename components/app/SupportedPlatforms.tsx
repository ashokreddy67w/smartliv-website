// components/app/SupportedPlatforms.tsx
'use client';

import { motion } from 'framer-motion';
import { Apple, Home, Mic, Zap, Wifi, Bluetooth, Share2 } from 'lucide-react';

const platforms = [
  { icon: Home, label: 'Apple Home' },
  { icon: Home, label: 'Google Home' },
  { icon: Mic, label: 'Amazon Alexa' },
  { icon: Share2, label: 'Matter' },
  { icon: Zap, label: 'Zigbee' },
  { icon: Bluetooth, label: 'Bluetooth' },
  { icon: Wifi, label: 'Wi-Fi' },
];

export function SupportedPlatforms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20 pt-12 border-t border-white/5"
    >
      <p className="text-center text-text-gray/40 text-sm uppercase tracking-widest mb-6">Compatible With</p>
      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((platform) => (
          <div
            key={platform.label}
            className="glass px-6 py-3 rounded-full flex items-center gap-2.5 border border-white/5 hover:border-primary/20 transition-all hover:scale-105"
          >
            <platform.icon size={18} className="text-primary/70" />
            <span className="text-sm text-white/70 font-medium">{platform.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}