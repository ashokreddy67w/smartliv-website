// components/design/InteriorShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Home, Bed, Coffee, Film, DoorClosed, TreePalm } from 'lucide-react';

const interiors = [
  {
    id: 'living',
    icon: Home,
    title: 'Luxury Living Room',
    features: ['Smart switches', 'RGB lighting', 'Hidden speakers', 'Motorized curtains', 'Ambient lighting'],
    gradient: 'from-amber-500/20 to-primary/10',
    image: 'bg-[url("/interiors/living.jpg")]',
  },
  {
    id: 'bedroom',
    icon: Bed,
    title: 'Master Bedroom',
    features: ['Scene control', 'Mood lighting', 'Curtains', 'Climate control'],
    gradient: 'from-indigo-500/20 to-purple-500/10',
    image: 'bg-[url("/interiors/bedroom.jpg")]',
  },
  {
    id: 'kitchen',
    icon: Coffee,
    title: 'Modern Kitchen',
    features: ['Touch switches', 'Smart lighting', 'Motion sensors'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    image: 'bg-[url("/interiors/kitchen.jpg")]',
  },
  {
    id: 'theater',
    icon: Film,
    title: 'Home Theater',
    features: ['Cinema lighting', 'Dolby Atmos', 'Projector', 'Acoustic panels'],
    gradient: 'from-purple-500/20 to-pink-500/10',
    image: 'bg-[url("/interiors/theater.jpg")]',
  },
  {
    id: 'entrance',
    icon: DoorClosed,
    title: 'Luxury Entrance',
    features: ['Digital lock', 'Video door phone', 'Access control', 'Facade lighting'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    image: 'bg-[url("/interiors/entrance.jpg")]',
  },
  {
    id: 'garden',
    icon: TreePalm,
    title: 'Garden & Outdoor',
    features: ['Landscape lighting', 'Gate automation', 'CCTV', 'Security sensors'],
    gradient: 'from-green-500/20 to-emerald-500/10',
    image: 'bg-[url("/interiors/garden.jpg")]',
  },
];

export function InteriorShowcase() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-text-gray/40 text-sm uppercase tracking-widest">Featured Interiors</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interiors.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${item.gradient}), #111111`,
              boxShadow: '0 20px 40px -12px rgba(0,0,0,0.8)',
            }}
          >
            {/* Placeholder image area */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <item.icon size={20} className="text-primary" />
                  <span className="text-white/70 text-xs font-medium tracking-wider uppercase">Featured</span>
                </div>
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary/60 hover:text-primary transition-colors"
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {item.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-[10px] px-2.5 py-1 rounded-full glass border border-white/5 text-white/60">
                      {feature}
                    </span>
                  ))}
                  {item.features.length > 3 && (
                    <span className="text-[10px] px-2.5 py-1 rounded-full glass border border-white/5 text-white/40">
                      +{item.features.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 80px -20px rgba(109,179,63,0.15)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}