// components/features/FinalCTA.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/features/cta-bg.jpg"
          alt="Smart Living"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-tight">
            Ready To Experience <br />
            <span className="text-[#5EA43A]">Smart Living?</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/40 text-lg font-light">
            Join thousands of homeowners who have transformed their living spaces
            with Smart Liv automation.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[#5EA43A] text-white font-medium transition-all duration-300 shadow-lg shadow-[#5EA43A]/20 inline-flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Sales
            </motion.a>
            <motion.a
              href="#whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}