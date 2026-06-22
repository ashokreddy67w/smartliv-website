// components/features/AppControlSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Smartphone, Lightbulb, Wind, Shield, Thermometer, Sparkles, Zap, Wifi } from 'lucide-react'
import { Reveal, StaggerChildren, StaggerItem } from '@/components/ui/Motion'

const features = [
  { icon: Lightbulb, label: 'Lights' },
  { icon: Wind, label: 'Curtains' },
  { icon: Shield, label: 'Security' },
  { icon: Thermometer, label: 'Climate' },
  { icon: Sparkles, label: 'Scenes' },
  { icon: Zap, label: 'Energy' },
  { icon: Wifi, label: 'Remote Access' },
]

export default function AppControlSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
              Mobile App
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight">
              Control Everything. <br />
              <span className="text-white/40">Anywhere.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* App Mockup */}
          <Reveal direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/features/app-control.jpg"
                alt="Mobile App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Smartphone className="w-5 h-5 text-white/60" />
              </div>
            </motion.div>
          </Reveal>

          {/* Features Grid */}
          <div>
            <Reveal delay={0.2}>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                Complete control from the palm of your hand. Our intuitive app
                puts every device and scene at your fingertips.
              </p>
            </Reveal>

            <StaggerChildren staggerDelay={0.06}>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-4 rounded-xl border border-white/5 hover:border-[#5EA43A]/20 transition-all text-center bg-white/5 hover:bg-white/10"
                    >
                      <feature.icon className="w-6 h-6 mx-auto text-[#5EA43A]/60 group-hover:text-[#5EA43A] transition-colors" />
                      <span className="text-white/60 text-sm font-light mt-2 block">
                        {feature.label}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}