// components/features/VoiceControlSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Volume2 } from 'lucide-react'

const voiceSteps = [
  { text: '"Hey Google..."', icon: Mic },
  { text: 'Good Night', icon: Volume2 },
  { text: 'Lights Off', icon: Volume2 },
  { text: 'Curtains Close', icon: Volume2 },
  { text: 'Doors Lock', icon: Volume2 },
  { text: 'AC 24°C', icon: Volume2 },
]

export default function VoiceControlSection() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % voiceSteps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4"
          >
            Voice Control
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight"
          >
            Control With <br />
            <span className="text-white/40">Your Voice</span>
          </motion.h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 flex items-center justify-center">
            {/* Animated voice waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#5EA43A]/20"
                  style={{
                    width: 100 + i * 40,
                    height: 100 + i * 40,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Mic icon */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#5EA43A]/20 flex items-center justify-center border border-[#5EA43A]/30">
              <Mic className="w-8 h-8 text-[#5EA43A]" />
            </div>

            {/* Voice text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full border border-white/10"
              >
                <span className="text-white/80 font-light text-sm">
                  {voiceSteps[currentStep].text}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Step indicator */}
            <div className="absolute bottom-6 flex gap-1.5">
              {voiceSteps.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/20"
                  animate={{
                    background: i === currentStep ? '#5EA43A' : 'rgba(255,255,255,0.2)',
                    scale: i === currentStep ? 1.5 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}