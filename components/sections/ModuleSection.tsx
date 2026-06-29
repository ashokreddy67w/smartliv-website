"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";

const moduleSizes = [
  { 
    gangs: 1, 
    label: "Single Gang", 
    uses: "Perfect for entrance lights, bathrooms, wardrobes, and utility rooms." 
  },
  { 
    gangs: 2, 
    label: "Double Gang", 
    uses: "Ideal for bedrooms, balconies, bathrooms, and side tables." 
  },
  { 
    gangs: 3, 
    label: "Triple Gang", 
    uses: "Popular for kitchens, dining rooms, and compact living spaces." 
  },
  { 
    gangs: 4, 
    label: "Four Gang", 
    uses: "Designed for master bedrooms, family rooms, and home offices." 
  },
  { 
    gangs: 6, 
    label: "Six Gang", 
    uses: "Perfect for luxury living rooms, media rooms, and entertainment spaces." 
  },
  { 
    gangs: 8, 
    label: "Eight Gang", 
    uses: "Complete smart home control for villas, penthouses, and premium residences." 
  },
];

const moduleTypes = [
  { type: "Touch Switch", desc: "Premium capacitive touch control." },
  { type: "Dimmer", desc: "Smooth brightness adjustment for smart lighting." },
  { type: "Fan Controller", desc: "Intelligent multi-speed fan control." },
  { type: "Scene Controller", desc: "Activate multiple smart devices with one touch." },
  { type: "USB Fast Charger", desc: "Integrated fast charging for phones and tablets." },
  { type: "TV & Media Socket", desc: "Clean connectivity for entertainment systems." },
  { type: "Data Port", desc: "High-speed Ethernet networking." },
  { type: "Doorbell Control", desc: "Integrated smart doorbell and intercom control." },
];

const features = [
  "Modular Design",
  "Premium Glass Finish",
  "Capacitive Touch Control",
  "Smart Home Automation",
  "Voice Assistant Ready",
  "Made for Modern Indian Homes",
];

export default function ModuleSection() {
  return (
    <section 
      className="bg-[#050505] py-32 md:py-40" 
      aria-labelledby="module-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
                MODULAR SMART SWITCH SYSTEM
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="module-heading" className="text-headline font-thin text-white">
                Build Your Perfect
                <br />
                <span className="text-white/35">Smart Switch Configuration</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="left">
            <p className="text-white/40 text-lg font-light leading-relaxed pt-2 lg:pt-16">
              Every SmartLiv smart touch switch is fully modular, allowing you to combine touch switches, dimmers, fan controllers, USB charging ports, data ports, TV sockets, and smart scene buttons within a single premium glass panel. Create the perfect configuration for every room in your home, villa, apartment, office, hotel, or commercial project.
            </p>
          </Reveal>
        </div>

        {/* Gang size cards */}
        <StaggerChildren staggerDelay={0.07}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
            {moduleSizes.map((size) => (
              <StaggerItem key={size.gangs}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(94,164,58,0.3)" }}
                  className="glass rounded-2xl p-5 border border-white/5 cursor-pointer transition-all duration-300 h-full"
                >
                  {/* Gang visualisation */}
                  <div className="flex gap-1 mb-4" aria-hidden="true">
                    {Array.from({ length: Math.min(size.gangs, 4) }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-6 rounded bg-white/8 border border-white/5"
                      />
                    ))}
                    {size.gangs > 4 && (
                      <div className="text-white/20 text-xs self-center ml-1">+{size.gangs - 4}</div>
                    )}
                  </div>
                  <div className="text-white/70 text-sm font-medium mb-1">{size.label}</div>
                  <div className="text-white/25 text-xs leading-relaxed">{size.uses}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Module types + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Module types */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-thin text-white mb-8">Available Module Types</h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-3" role="list">
              {moduleTypes.map((mod, i) => (
                <motion.div
                  key={mod.type}
                  role="listitem"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="border border-white/8 rounded-xl p-4 hover:border-brand-green/20 transition-all duration-300 group"
                  tabIndex={0}
                >
                  <div className="w-2 h-2 rounded-full bg-brand-green/50 mb-3 group-hover:bg-brand-green transition-colors" aria-hidden="true" />
                  <div className="text-white/70 text-sm font-medium mb-1">{mod.type}</div>
                  <div className="text-white/30 text-xs">{mod.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature chips */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2 mt-8">
                {features.map((feature) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + Math.random() * 0.1 }}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-light"
                  >
                    ✓ {feature}
                  </motion.span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.5}>
              <div className="mt-8">
                <a
                  href="/products/smart-switches"
                  className="inline-flex items-center gap-2 text-brand-green text-sm font-light hover:gap-3 transition-all duration-300 group"
                >
                  Explore Modular Configurations 
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>

            {/* Trust line */}
            <Reveal delay={0.6}>
              <p className="text-white/20 text-xs font-light mt-4">
                Suitable For
              </p>
              <p className="text-white/25 text-xs font-light">
                Luxury Homes • Villas • Apartments • Hotels • Offices • Commercial Projects
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/modules/module-configuration.webp"
                alt="SmartLiv modular smart touch switch showing multiple switch, dimmer, USB charging and automation configurations."
                fill
                quality={75}
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" aria-hidden="true" />
              
              {/* Bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
              
              {/* Module badge - Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">CUSTOM CONFIGURATION</div>
                <div className="text-white text-sm font-light">Mix & Match Smart Modules</div>
              </motion.div>

              {/* Gang count badge - Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-white/60 text-xs font-light">Available in 1–8 Gang Configurations</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}