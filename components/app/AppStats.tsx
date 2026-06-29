// components/app/AppStats.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: 'Homes Connected' },
  { value: 1500, suffix: '+', label: 'Projects Installed' },
  { value: 99.9, suffix: '%', label: 'System Uptime' },
  { value: 24, suffix: '/7', label: 'Remote Control', prefix: '' },
];

function AnimatedCounter({ end, duration = 2500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`app-stat-${end}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function AppStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/5"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white tracking-tight" id={`app-stat-${stat.value}`}>
            {stat.prefix}<AnimatedCounter end={stat.value} />{stat.suffix}
          </div>
          <p className="mt-1 text-text-gray/40 text-sm uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}