// components/features/FeatureBentoGrid.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Lightbulb, Shield, Thermometer, Music, Wind, Lock, Sparkles, Mic } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Lighting',
    description: 'Intelligent illumination that adapts to your life',
    image: '/images/features/bento/lighting.jpg',
    size: 'large',
    color: '#F59E0B'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Peace of mind with advanced protection',
    image: '/images/features/bento/security.jpg',
    size: 'medium',
    color: '#EF4444'
  },
  {
    icon: Thermometer,
    title: 'Climate',
    description: 'Perfect comfort in every room',
    image: '/images/features/bento/climate.jpg',
    size: 'medium',
    color: '#3B82F6'
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Immersive audio-visual experiences',
    image: '/images/features/bento/entertainment.jpg',
    size: 'small',
    color: '#8B5CF6'
  },
  {
    icon: Wind,
    title: 'Curtains',
    description: 'Automated privacy and light control',
    image: '/images/features/bento/curtains.jpg',
    size: 'small',
    color: '#06B6D4'
  },
  {
    icon: Lock,
    title: 'Smart Locks',
    description: 'Keyless entry with total control',
    image: '/images/features/bento/locks.jpg',
    size: 'small',
    color: '#F472B6'
  },
  {
    icon: Sparkles,
    title: 'Scenes',
    description: 'One touch. Perfect atmosphere.',
    image: '/images/features/bento/scenes.jpg',
    size: 'medium',
    color: '#A78BFA'
  },
  {
    icon: Mic,
    title: 'Voice Control',
    description: 'Speak to control your entire home',
    image: '/images/features/bento/voice.jpg',
    size: 'medium',
    color: '#34D399'
  }
]

export default function FeatureBentoGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4"
          >
            Ecosystem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight"
          >
            Complete Smart <br />
            <span className="text-white/40">Home Ecosystem</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {features.map((feature, index) => {
            let span = ''
            if (index === 0) span = 'md:col-span-2 md:row-span-2'
            else if (index === 1 || index === 2) span = 'md:row-span-1'
            else if (index === 3 || index === 4) span = 'md:col-span-1 md:row-span-1'
            else if (index === 5) span = 'md:col-span-1 md:row-span-1'
            else if (index === 6 || index === 7) span = 'md:col-span-1 md:row-span-1'

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl ${span} group cursor-pointer`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <feature.icon className="w-5 h-5 text-[#5EA43A]" />
                      <h3 className="text-white font-light text-lg">{feature.title}</h3>
                    </div>
                    <p className="text-white/40 text-xs font-light">{feature.description}</p>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="mt-2 inline-flex items-center gap-1 text-[#5EA43A] text-xs font-light"
                    >
                      Learn More <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}