// components/features/EcosystemSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Lightbulb, Wind, Shield, Tv, Music, Thermometer, 
  Lock, Car, Trees, Wifi
} from 'lucide-react'

const devices = [
  { icon: Lightbulb, label: 'Lighting', angle: 0, color: '#F59E0B' },
  { icon: Wind, label: 'Curtains', angle: 36, color: '#06B6D4' },
  { icon: Shield, label: 'Security', angle: 72, color: '#EF4444' },
  { icon: Tv, label: 'TV', angle: 108, color: '#8B5CF6' },
  { icon: Music, label: 'Music', angle: 144, color: '#EC4899' },
  { icon: Thermometer, label: 'AC', angle: 180, color: '#3B82F6' },
  { icon: Lock, label: 'Door Lock', angle: 216, color: '#F472B6' },
  { icon: Car, label: 'Garage', angle: 252, color: '#34D399' },
  { icon: Trees, label: 'Garden', angle: 288, color: '#10B981' },
  { icon: Wifi, label: 'Network', angle: 324, color: '#6366F1' },
]

export default function EcosystemSection() {
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
            Everything <br />
            <span className="text-white/40">Connected</span>
          </motion.h2>
        </div>

        <div className="relative aspect-square max-w-3xl mx-auto">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {devices.map((device) => {
              const angle = (device.angle * Math.PI) / 180
              const radius = 160
              const x = 50 + (radius * Math.cos(angle)) / 3
              const y = 50 + (radius * Math.sin(angle)) / 3

              return (
                <motion.line
                  key={device.label}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke={device.color}
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              )
            })}
          </svg>

          {/* Center Device */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#5EA43A]/30 shadow-2xl shadow-[#5EA43A]/20 flex items-center justify-center">
              <Image
                src="/images/features/switch-icon.jpg"
                alt="Smart Liv"
                width={48}
                height={48}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
          </motion.div>

          {/* Devices */}
          {devices.map((device) => {
            const angle = (device.angle * Math.PI) / 180
            const radius = 160
            const x = 50 + (radius * Math.cos(angle)) / 3
            const y = 50 + (radius * Math.sin(angle)) / 3

            return (
              <motion.div
                key={device.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + device.angle / 360 }}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                >
                  <device.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: device.color }} />
                </motion.div>
                <p className="text-white/30 text-[10px] text-center mt-1 font-light">{device.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}