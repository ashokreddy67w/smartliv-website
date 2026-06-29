// components/app/FloatingNotifications.tsx
'use client';

import { motion } from 'framer-motion';
import { Bell, Lock, Lightbulb, Shield, Car, User, Moon, Film, DoorClosed } from 'lucide-react';

const notifications = [
  { icon: Lock, text: 'Front Door Locked', color: 'text-primary' },
  { icon: Lightbulb, text: 'Living Room Lights ON', color: 'text-yellow-500' },
  { icon: Shield, text: 'Motion Detected', color: 'text-red-500' },
  { icon: Car, text: 'Garage Opened', color: 'text-blue-500' },
  { icon: User, text: 'Visitor at Door', color: 'text-purple-500' },
  { icon: Moon, text: 'Good Night Activated', color: 'text-indigo-500' },
  { icon: Film, text: 'Movie Scene Running', color: 'text-pink-500' },
  { icon: DoorClosed, text: 'Curtains Closed', color: 'text-teal-500' },
];

export function FloatingNotifications() {
  const positions = [
    { top: '5%', right: '-12%' },
    { top: '20%', right: '-18%' },
    { top: '45%', right: '-15%' },
    { top: '70%', right: '-20%' },
    { bottom: '15%', right: '-12%' },
  ];
return (
  <>
    {notifications.slice(0, 5).map((notif, index) => (
      <motion.div
        key={notif.text}
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.5 + index * 0.15,
          y: {
            duration: 3 + index * 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: index * 0.3,
          },
        }}
        className="absolute z-30 hidden xl:flex items-center gap-2.5 glass rounded-xl px-3.5 py-2.5 shadow-lg"
        style={{
          ...positions[index % positions.length],
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.06)',
          maxWidth: '200px',
        }}
      >
        <notif.icon size={14} className={notif.color} />
        <span className="text-xs whitespace-nowrap text-white/80">
          {notif.text}
        </span>
        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      </motion.div>
    ))}
  </>
);
}