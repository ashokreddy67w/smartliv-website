"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";

const features = [
  "Capacitive touch with haptic feedback",
  "Works without neutral wire",
  "Rated for Indian electrical standards",
  "Child-lock & gang protection built in",
  "Zero-flicker dimming technology",
  "Works with Alexa, Google & Siri",
  "Wi-Fi & Bluetooth Connectivity",
  "Mobile App Control from Anywhere"
];

export default function ProductIntroSection() {
  return (
    <section id="products" className="bg-black py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section label */}
        <Reveal>
          <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
            PREMIUM SMART TOUCH SWITCHES FOR MODERN HOMES
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <Reveal delay={0.1}>
              <h2 className="text-headline font-thin text-white mb-8">
               Luxury Smart Touch Switches.{" "}
                <span className="text-white/40">Built for Modern Home Automation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
               SmartLiv Smart Touch Switches combine premium design with advanced home automation. Control lights, fans, curtains, appliances, and scenes from elegant glass touch panels, the SmartLiv mobile app, or voice assistants like Alexa, Google Assistant, and Siri. Designed for luxury homes, villas, apartments, and commercial spaces, SmartLiv delivers intelligent living with seamless control.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-white/35 text-base font-light leading-relaxed mb-12">
                Each switch is crafted to tolerances measured in microns. The result
                is a surface that feels unlike anything else in your home — smooth,
                solid, and satisfying to use ten thousand times a day.
              </p>
            </Reveal>

            <StaggerChildren staggerDelay={0.06}>
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3 py-3 border-b border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                    <span className="text-white/60 text-sm font-light">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <Reveal delay={0.6}>
              <div className="mt-10">
                <motion.a
                  href="#enquire"
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="inline-flex items-center gap-2 text-brand-green text-sm font-light tracking-wide hover:gap-4 transition-all duration-300"
                >
                  Explore the SmartLiv range
                  <span>→</span>
                </motion.a>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                <Image
                  src="/images/home-automation/smart-switch-premium.webp"
                  alt="SmartLiv Switch Panel - Premium Smart Home Control"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />
                
                {/* Bottom gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
              </div>

              {/* Floating badge - Material */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">Material</div>
                <div className="text-white text-sm font-light">Aircraft-grade Aluminium</div>
              </motion.div>

              {/* Floating badge - Finish */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">Finish</div>
                <div className="text-white text-sm font-light">Premium Matte</div>
              </motion.div>

              {/* Floating badge - Touch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute bottom-20 -right-4 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">Technology</div>
                <div className="text-white text-sm font-light">Capacitive Touch</div>
              </motion.div>
            </motion.div>

            {/* Decorative glow effects */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-brand-green/10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-brand-green/15" />
            
            {/* Ambient glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl" />
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}