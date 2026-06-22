// components/features/InstallationTimeline.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, MessageSquare, PenTool, Wrench, Settings, Home } from 'lucide-react'

const steps = [
  { icon: MessageSquare, label: 'Consultation' },
  { icon: PenTool, label: 'Planning' },
  { icon: Wrench, label: 'Installation' },
  { icon: Settings, label: 'Configuration' },
  { icon: Home, label: 'Ready' },
]

export default function InstallationTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4"
          >
            Installation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight"
          >
            Simple <br />
            <span className="text-white/40">Installation Timeline</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto pt-8">
          {/* Progress line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-[#5EA43A] -translate-y-1/2"
            style={{ width: useTransform(progress, [0, 1], ['0%', '100%']) }}
          />

          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const stepProgress = useTransform(
                progress,
                [index / steps.length, (index + 1) / steps.length],
                [0, 1]
              )

              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white/40" />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#5EA43A]"
                      style={{
                        scale: useTransform(stepProgress, [0, 0.5, 1], [0, 1.2, 1]),
                        opacity: stepProgress,
                      }}
                    />
                  </div>
                  <span className="text-white/60 text-sm font-light">{step.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}