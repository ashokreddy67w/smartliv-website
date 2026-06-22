// components/features/ComparisonSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { X, Check, Lightbulb, Shield, Thermometer, Music, Smartphone, Zap } from 'lucide-react'

const comparisons = [
  { feature: 'Smart Lighting', traditional: 'Manual switches', smart: 'Voice & app controlled' },
  { feature: 'Security', traditional: 'Basic locks', smart: 'Remote monitoring' },
  { feature: 'Climate', traditional: 'Manual AC', smart: 'Auto temperature' },
  { feature: 'Entertainment', traditional: 'Separate remotes', smart: 'Unified control' },
  { feature: 'Curtains', traditional: 'Manual pull', smart: 'Automated' },
  { feature: 'Energy', traditional: 'No monitoring', smart: 'Smart savings' },
]

export default function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, 50])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div style={{ opacity, y }}>
          <div className="text-center mb-16">
            <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
              Compare
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight">
              Traditional vs. <br />
              <span className="text-[#5EA43A]">Smart Liv</span>
            </h2>
          </div>

          <div className="relative">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-left">
                <p className="text-white/30 text-sm font-light">Feature</p>
              </div>
              <div className="text-center">
                <p className="text-white/30 text-sm font-light">Traditional</p>
              </div>
              <div className="text-center">
                <p className="text-[#5EA43A] text-sm font-light">Smart Liv</p>
              </div>
            </div>

            {/* Comparison rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-3 gap-4 py-4 border-t border-white/5 last:border-b"
              >
                <div className="flex items-center gap-3">
                  <span className="text-white/60 text-sm font-light">{item.feature}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-500/50" />
                  <span className="text-white/30 text-sm font-light">{item.traditional}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#5EA43A]" />
                  <span className="text-white/60 text-sm font-light">{item.smart}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}