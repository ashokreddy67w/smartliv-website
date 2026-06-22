// components/features/SmartScenesSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Sunrise, Film, Utensils, Book, Music, Moon, Plane, Trees } from 'lucide-react'
import { Reveal, StaggerChildren, StaggerItem } from '@/components/ui/Motion'

const scenes = [
  { icon: Sunrise, label: 'Morning', color: '#F59E0B', description: 'Wake gently with warm light' },
  { icon: Film, label: 'Movie', color: '#6366F1', description: 'Cinematic ambiance' },
  { icon: Utensils, label: 'Dinner', color: '#F472B6', description: 'Elegant dining atmosphere' },
  { icon: Book, label: 'Reading', color: '#34D399', description: 'Focused, comfortable light' },
  { icon: Music, label: 'Party', color: '#EC4899', description: 'Vibrant, energetic' },
  { icon: Moon, label: 'Sleep', color: '#1E293B', description: 'Perfect rest environment' },
  { icon: Plane, label: 'Away', color: '#F59E0B', description: 'Simulate presence' },
  { icon: Trees, label: 'Vacation', color: '#10B981', description: 'Energy saving mode' },
]

export default function SmartScenesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
              Smart Scenes
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight">
              One Touch. <br />
              <span className="text-white/40">Perfect Atmosphere.</span>
            </h2>
          </Reveal>
        </div>

        <StaggerChildren staggerDelay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {scenes.map((scene, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-6 rounded-2xl border border-white/5 hover:border-[#5EA43A]/20 transition-all bg-white/5 hover:bg-white/10 cursor-pointer overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{ background: scene.color }}
                  />
                  <scene.icon
                    className="w-8 h-8 mb-3 relative z-10"
                    style={{ color: scene.color }}
                  />
                  <h3 className="text-white font-light text-base relative z-10">{scene.label}</h3>
                  <p className="text-white/30 text-xs font-light mt-1 relative z-10">
                    {scene.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}