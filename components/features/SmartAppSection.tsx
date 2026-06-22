// components/features/SmartAppSection.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Smartphone } from 'lucide-react'

const screens = [
  { label: 'Dashboard', image: '/images/features/app/dashboard.jpg', color: '#5EA43A' },
  { label: 'Lighting', image: '/images/features/app/lighting.jpg', color: '#F59E0B' },
  { label: 'Security', image: '/images/features/app/security.jpg', color: '#EF4444' },
  { label: 'Climate', image: '/images/features/app/climate.jpg', color: '#3B82F6' },
  { label: 'Energy', image: '/images/features/app/energy.jpg', color: '#34D399' },
  { label: 'Scenes', image: '/images/features/app/scenes.jpg', color: '#8B5CF6' },
]

export default function SmartAppSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const currentIndex = useTransform(progress, [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1], [0, 1, 2, 3, 4, 5, 5])

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#050505]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
              Mobile App
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight">
              Control Everything. <br />
              <span className="text-white/40">Anywhere.</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[280px] md:w-[320px] aspect-[9/16]">
              {/* Phone Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                {screens.map((screen, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    style={{
                      opacity: useTransform(currentIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]),
                      scale: useTransform(currentIndex, [index - 0.5, index, index + 0.5], [0.9, 1, 0.9]),
                      rotate: useTransform(currentIndex, [index - 0.5, index, index + 0.5], [5, 0, -5]),
                    }}
                  >
                    <Image
                      src={screen.image}
                      alt={screen.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                      <span className="text-white/60 text-xs font-light">{screen.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}