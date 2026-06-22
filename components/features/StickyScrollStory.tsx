// components/features/StickyScrollStory.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Hand, Lightbulb, Wind, Thermometer, Music, Home } from 'lucide-react'

const steps = [
  {
    icon: Hand,
    label: 'Touch',
    description: 'A simple touch begins the journey',
    color: '#5EA43A'
  },
  {
    icon: Lightbulb,
    label: 'Lights Turn On',
    description: 'Warm illumination welcomes you home',
    color: '#F59E0B'
  },
  {
    icon: Wind,
    label: 'Curtains Open',
    description: 'Natural light floods the space',
    color: '#06B6D4'
  },
  {
    icon: Thermometer,
    label: 'Air Conditioner Starts',
    description: 'Perfect temperature awaits',
    color: '#3B82F6'
  },
  {
    icon: Music,
    label: 'Music Begins',
    description: 'Your favorite playlist fills the air',
    color: '#8B5CF6'
  },
  {
    icon: Home,
    label: 'Welcome Home',
    description: 'Everything is perfectly ready',
    color: '#34D399'
  }
]

export default function StickyScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const currentStep = useTransform(progress, [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1], [0, 1, 2, 3, 4, 5, 6])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
            {/* Left - Device */}
            <div className="relative">
              <motion.div
                style={{
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 10]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
                }}
                className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src="/images/features/switch.jpg"
                  alt="Smart Liv Switch"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Step Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-white/20"
                      style={{
                        background: useTransform(progress, [i / steps.length, (i + 1) / steps.length], ['rgba(255,255,255,0.2)', step.color])
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{
                    opacity: useTransform(currentStep, [index - 0.5, index, index + 0.5], [0.2, 1, 0.2]),
                    x: useTransform(currentStep, [index - 0.5, index, index + 0.5], [20, 0, -20]),
                    scale: useTransform(currentStep, [index - 0.5, index, index + 0.5], [0.9, 1, 0.9])
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${step.color}20` }}>
                      <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <div className="absolute -top-2 -right-2 text-xs font-light" style={{ color: step.color }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-light text-xl">{step.label}</h3>
                    <p className="text-white/40 text-sm font-light">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}