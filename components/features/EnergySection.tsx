// components/features/EnergySection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BarChart3, Activity, Clock, Zap, DollarSign } from 'lucide-react'
import { Reveal } from '@/components/ui/Motion'

const features = [
  { icon: BarChart3, label: 'Energy Monitoring', color: '#5EA43A' },
  { icon: Activity, label: 'Power Analytics', color: '#34D399' },
  { icon: Clock, label: 'Scheduling', color: '#F59E0B' },
  { icon: Zap, label: 'Automation', color: '#6366F1' },
  { icon: DollarSign, label: 'Savings', color: '#10B981' },
]

export default function EnergySection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
                Feature
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight mb-6">
                Smarter Energy. <br />
                <span className="text-white/40">Lower Bills.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                Smart Liv optimizes your energy usage without compromising comfort.
                Monitor, control, and reduce your consumption effortlessly.
              </p>
            </Reveal>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-[#5EA43A]/20 transition-colors bg-white/5 hover:bg-white/10"
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: `${feature.color}20` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <span className="text-white/80 text-sm font-light">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <Reveal direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/features/energy.jpg"
                  alt="Energy Management"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}