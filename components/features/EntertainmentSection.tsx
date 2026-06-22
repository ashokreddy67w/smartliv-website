// components/features/EntertainmentSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tv, Projector, Music, Film, Lightbulb } from 'lucide-react'
import { Reveal } from '@/components/ui/Motion'

const features = [
  { icon: Tv, label: 'Home Theatre' },
  { icon: Projector, label: 'Projector Control' },
  { icon: Music, label: 'Dolby Audio' },
  { icon: Film, label: 'Movie Scene' },
  { icon: Lightbulb, label: 'Mood Lighting' },
]

export default function EntertainmentSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <Reveal direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/features/entertainment.jpg"
                  alt="Home Entertainment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
                Feature
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight mb-6">
                Entertainment <br />
                <span className="text-white/40">Reimagined</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                Transform your home into a cinematic experience. With one touch,
                dim the lights, close the curtains, and immerse yourself in
                perfect audio-visual bliss.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-[#5EA43A]/20 transition-colors group bg-black/30"
                >
                  <feature.icon className="w-4 h-4 text-[#5EA43A]/60 group-hover:text-[#5EA43A] transition-colors" />
                  <span className="text-white/70 text-sm font-light group-hover:text-white transition-colors">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}