// components/design/LifestyleGallery.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { title: 'Luxury Villa', tag: 'Residential' },
  { title: 'Modern Apartment', tag: 'Residential' },
  { title: 'Bedroom', tag: 'Interior' },
  { title: 'Dining', tag: 'Interior' },
  { title: 'Swimming Pool', tag: 'Outdoor' },
  { title: 'Office', tag: 'Commercial' },
  { title: 'Night Lighting', tag: 'Exterior' },
];

export function LifestyleGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-text-gray/40 text-sm uppercase tracking-widest">Lifestyle Gallery</p>
        <h3 className="text-3xl font-bold mt-1">Inspired <span className="text-primary">Living</span></h3>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl overflow-hidden glass border border-white/5 group ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(109,179,63,0.05) 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-white/40 uppercase tracking-wider">{item.tag}</p>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 60px -20px rgba(109,179,63,0.15)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}