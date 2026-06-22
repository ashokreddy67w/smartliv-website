// components/features/InteractiveVilla.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Home, Sofa, Utensils, Bed, Film, Car, Trees, X, 
  Lightbulb, Shield, Thermometer, Music, Wind, Lock, Sparkles, Mic } from 'lucide-react'

const rooms = [
  {
    id: 'living',
    label: 'Living Room',
    icon: Sofa,
    x: '30%',
    y: '45%',
    features: ['Ambient Lighting', 'Smart TV Control', 'Motorized Curtains', 'Voice Control'],
    image: '/images/features/living-room.jpg'
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    icon: Utensils,
    x: '65%',
    y: '55%',
    features: ['Task Lighting', 'Smart Appliances', 'Voice Recipes', 'Energy Monitoring'],
    image: '/images/features/kitchen.jpg'
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    icon: Bed,
    x: '70%',
    y: '25%',
    features: ['Sleep Scenes', 'Wake-up Lighting', 'Climate Control', 'Privacy Mode'],
    image: '/images/features/bedroom.jpg'
  },
  {
    id: 'theatre',
    label: 'Home Theatre',
    icon: Film,
    x: '15%',
    y: '20%',
    features: ['Projector Control', 'Dolby Audio', 'Movie Scenes', 'Light Dimming'],
    image: '/images/features/theatre.jpg'
  },
  {
    id: 'garage',
    label: 'Garage',
    icon: Car,
    x: '85%',
    y: '75%',
    features: ['Remote Access', 'Lighting', 'Security Camera', 'Charging Port'],
    image: '/images/features/garage.jpg'
  },
  {
    id: 'garden',
    label: 'Garden',
    icon: Trees,
    x: '10%',
    y: '75%',
    features: ['Irrigation Control', 'Ambient Lighting', 'Weather Sensors'],
    image: '/images/features/garden.jpg'
  }
]

export default function InteractiveVilla() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null)
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null)

  const activeRoomData = rooms.find(r => r.id === activeRoom)

  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4"
          >
            Interactive Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight"
          >
            Explore Your <br />
            <span className="text-white/40">Smart Villa</span>
          </motion.h2>
        </div>

        {/* Villa Image */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/features/villa.jpg"
              alt="Luxury Smart Villa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Hotspots */}
            {rooms.map((room) => (
              <motion.button
                key={room.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + rooms.indexOf(room) * 0.1 }}
                className="absolute"
                style={{ left: room.x, top: room.y }}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
                onClick={() => setActiveRoom(activeRoom === room.id ? null : room.id)}
              >
                <motion.div
                  animate={{
                    scale: hoveredRoom === room.id || activeRoom === room.id ? 1.3 : 1,
                    boxShadow: hoveredRoom === room.id || activeRoom === room.id 
                      ? '0 0 30px rgba(94,164,58,0.5)' 
                      : '0 0 0px rgba(94,164,58,0)'
                  }}
                  className="relative"
                >
                  <div className="w-14 h-14 rounded-full bg-[#5EA43A]/20 backdrop-blur-xl border border-[#5EA43A]/30 flex items-center justify-center cursor-pointer hover:bg-[#5EA43A]/30 transition-all">
                    <room.icon className="w-6 h-6 text-[#5EA43A]" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#5EA43A] rounded-full animate-pulse" />
                </motion.div>

                {/* Label */}
                {hoveredRoom === room.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/70 text-xs font-light"
                  >
                    {room.label}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Room Popup */}
          <AnimatePresence>
            {activeRoom && activeRoomData && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-lg px-4"
              >
                <div className="glass p-6 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#5EA43A]/20">
                        <activeRoomData.icon className="w-5 h-5 text-[#5EA43A]" />
                      </div>
                      <div>
                        <h3 className="text-white font-light">{activeRoomData.label}</h3>
                        <p className="text-white/30 text-xs font-light">Smart Features</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveRoom(null)}
                      className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-white/40" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {activeRoomData.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5EA43A]" />
                        <span className="text-white/60 text-xs font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/20 text-xs font-light mt-6"
        >
          Hover over a hotspot to explore each room
        </motion.p>
      </div>
    </section>
  )
}