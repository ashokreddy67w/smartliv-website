// components/design/FinishCollection.tsx
'use client';

import { motion } from 'framer-motion';

const finishes = [
  { name: 'Glass White', color: 'from-white/90 to-white/40', bg: 'bg-white/10' },
  { name: 'Matte Black', color: 'from-zinc-700 to-zinc-900', bg: 'bg-zinc-800' },
  { name: 'Midnight Blue', color: 'from-blue-800 to-blue-950', bg: 'bg-blue-900' },
  { name: 'Forest Green', color: 'from-green-700 to-green-900', bg: 'bg-green-800' },
  { name: 'Champagne Gold', color: 'from-amber-300 to-amber-500', bg: 'bg-amber-400' },
  { name: 'Silver', color: 'from-gray-300 to-gray-400', bg: 'bg-gray-300' },
];

export function FinishCollection() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-text-gray/40 text-sm uppercase tracking-widest">Finish Collection</p>
        <h3 className="text-3xl font-bold mt-1">Choose Your <span className="text-primary">Finish</span></h3>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {finishes.map((finish, index) => (
          <motion.div
            key={finish.name}
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.05,
              rotateY: 8,
              rotateX: -4,
            }}
            className="group relative cursor-pointer"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-4 flex flex-col items-center justify-center border border-white/5 hover:border-primary/30 transition-all duration-500">
              <div
                className={`w-full h-full rounded-xl bg-gradient-to-br ${finish.color} shadow-inner`}
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4)',
                }}
              />
              
              {/* Reflection effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, transparent 80%, rgba(255,255,255,0.05) 100%)',
                }}
              />
              
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: '0 0 40px -8px rgba(109,179,63,0.3)',
                }}
              />
            </div>
            <p className="text-center text-sm text-white/60 mt-3 group-hover:text-white transition-colors">
              {finish.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}