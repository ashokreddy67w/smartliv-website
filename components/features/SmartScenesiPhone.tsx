// components/features/SmartScenesiPhone.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Sunrise, Film, Book, Utensils, Music, Moon, Plane, Trees,
  Lightbulb, Wind, Music as MusicIcon, Thermometer
} from 'lucide-react'

const scenes = [
  {
    id: 'morning',
    label: 'Morning',
    icon: Sunrise,
    color: '#F59E0B',
    bg: 'from-amber-500/20 to-yellow-500/10',
    settings: {
      lights: '80%',
      curtains: 'Open',
      music: 'Jazz',
      temperature: '22°C'
    }
  },
  {
    id: 'movie',
    label: 'Movie',
    icon: Film,
    color: '#6366F1',
    bg: 'from-indigo-500/20 to-purple-500/10',
    settings: {
      lights: '10%',
      curtains: 'Closed',
      music: 'Cinema',
      temperature: '20°C'
    }
  },
  {
    id: 'reading',
    label: 'Reading',
    icon: Book,
    color: '#34D399',
    bg: 'from-emerald-500/20 to-teal-500/10',
    settings: {
      lights: '60%',
      curtains: 'Semi',
      music: 'Classical',
      temperature: '23°C'
    }
  },
  {
    id: 'dinner',
    label: 'Dinner',
    icon: Utensils,
    color: '#F472B6',
    bg: 'from-pink-500/20 to-rose-500/10',
    settings: {
      lights: '40%',
      curtains: 'Closed',
      music: 'Soft Jazz',
      temperature: '21°C'
    }
  },
  {
    id: 'party',
    label: 'Party',
    icon: Music,
    color: '#EC4899',
    bg: 'from-pink-500/20 to-purple-500/10',
    settings: {
      lights: '100%',
      curtains: 'Open',
      music: 'Upbeat',
      temperature: '19°C'
    }
  },
  {
    id: 'sleep',
    label: 'Sleep',
    icon: Moon,
    color: '#1E293B',
    bg: 'from-slate-500/20 to-gray-500/10',
    settings: {
      lights: '0%',
      curtains: 'Closed',
      music: 'Off',
      temperature: '18°C'
    }
  },
  {
    id: 'away',
    label: 'Away',
    icon: Plane,
    color: '#F59E0B',
    bg: 'from-amber-500/20 to-yellow-500/10',
    settings: {
      lights: 'Random',
      curtains: 'Semi',
      music: 'Off',
      temperature: '16°C'
    }
  },
  {
    id: 'vacation',
    label: 'Vacation',
    icon: Trees,
    color: '#10B981',
    bg: 'from-emerald-500/20 to-green-500/10',
    settings: {
      lights: 'Eco',
      curtains: 'Open',
      music: 'Off',
      temperature: '15°C'
    }
  }
]

export default function SmartScenesiPhone() {
  const [activeScene, setActiveScene] = useState<string | null>(null)

  const activeSceneData = scenes.find(s => s.id === activeScene)

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
            Smart Scenes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight"
          >
            One Touch. <br />
            <span className="text-white/40">Perfect Atmosphere.</span>
          </motion.h2>
        </div>

        <div className="flex justify-center">
          {/* iPhone Frame */}
          <div className="relative w-[320px] md:w-[380px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/60 to-transparent z-10" />
            
            {/* Content */}
            <div className="relative w-full h-full p-4 pt-12">
              <Image
                src="/images/features/scenes-bg.jpg"
                alt="Scenes Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Scenes Grid */}
              <div className="relative z-10 grid grid-cols-4 gap-2">
                {scenes.map((scene) => (
                  <motion.button
                    key={scene.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveScene(activeScene === scene.id ? null : scene.id)}
                    className={`p-2 rounded-xl text-center transition-all ${
                      activeScene === scene.id 
                        ? 'bg-white/20 border border-white/30' 
                        : 'bg-white/5 border border-white/5'
                    }`}
                  >
                    <scene.icon 
                      className="w-5 h-5 mx-auto mb-1" 
                      style={{ color: scene.color }}
                    />
                    <span className="text-white/60 text-[8px] font-light block">
                      {scene.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Scene Settings */}
              <AnimatePresence>
                {activeScene && activeSceneData && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-6 left-4 right-4 glass p-4 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <activeSceneData.icon 
                        className="w-5 h-5" 
                        style={{ color: activeSceneData.color }}
                      />
                      <h4 className="text-white font-light text-sm">{activeSceneData.label}</h4>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {Object.entries(activeSceneData.settings).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-white/30 text-[8px] uppercase font-light">{key}</div>
                          <div className="text-white/80 text-[10px] font-light">{value}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}