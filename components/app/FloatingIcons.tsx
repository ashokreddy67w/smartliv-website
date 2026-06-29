// components/app/FloatingIcons.tsx
'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Shield, Camera, Wifi, Home, Mic, Fingerprint, Lock } from 'lucide-react';

const icons = [
  { icon: Lightbulb, color: 'text-yellow-500', x: -15, y: 10 },
  { icon: Shield, color: 'text-primary', x: 20, y: -15 },
  { icon: Camera, color: 'text-blue-500', x: -18, y: -20 },
  { icon: Wifi, color: 'text-cyan-500', x: 25, y: 5 },
  { icon: Home, color: 'text-primary', x: -20, y: 20 },
  { icon: Mic, color: 'text-purple-500', x: 22, y: -10 },
  { icon: Fingerprint, color: 'text-indigo-500', x: -25, y: -5 },
  { icon: Lock, color: 'text-red-500', x: 15, y: 25 },
];

export function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -10 + (index % 3) * 5, 0],
            x: [0, index % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 0.6,
            delay: 0.8 + index * 0.06,
            y: {
              duration: 4 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: 5 + index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="absolute z-20 hidden 2xl:flex items-center justify-center w-12 h-12 rounded-full glass border border-white/5"
          style={{
            left: `${50 + item.x}%`,
            top: `${30 + item.y}%`,
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <item.icon size={20} className={item.color} />
        </motion.div>
      ))}
    </>
  );

}