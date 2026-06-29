// components/app/SceneShortcuts.tsx
'use client';

import { motion } from 'framer-motion';
import { Film, Coffee, Moon, LogOut, PartyPopper, Sun, Umbrella } from 'lucide-react';

const scenes = [
  { icon: Film, label: 'Movie Mode', color: 'bg-purple-500/10 text-purple-500' },
  { icon: Sun, label: 'Good Morning', color: 'bg-yellow-500/10 text-yellow-500' },
  { icon: Moon, label: 'Good Night', color: 'bg-indigo-500/10 text-indigo-500' },
  { icon: LogOut, label: 'Away Mode', color: 'bg-blue-500/10 text-blue-500' },
  { icon: PartyPopper, label: 'Party Mode', color: 'bg-pink-500/10 text-pink-500' },
  { icon: Coffee, label: 'Dinner Mode', color: 'bg-orange-500/10 text-orange-500' },
  { icon: Umbrella, label: 'Vacation', color: 'bg-teal-500/10 text-teal-500' },
];

export function SceneShortcuts() {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold text-[#1A1A1A]">Scene Shortcuts</p>
        <span className="text-[10px] text-[#8E8E93]">8</span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {scenes.map((scene, index) => (
          <motion.button
            key={scene.label}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-2.5 rounded-xl ${scene.color} min-w-[70px] border border-transparent hover:border-primary/20 transition-all`}
          >
            <scene.icon size={20} />
            <span className="text-[10px] font-medium">{scene.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}