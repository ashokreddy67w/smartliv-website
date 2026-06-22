"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";

const moduleSizes = [
  { gangs: 1, label: "Single Gang", uses: "Accent lighting, individual appliances, entrance corridors" },
  { gangs: 2, label: "Double Gang", uses: "Bedroom bedside, bathrooms, utility areas" },
  { gangs: 3, label: "Triple Gang", uses: "Living rooms, kitchen counters, dining rooms" },
  { gangs: 4, label: "Four Gang", uses: "Master bedrooms, open-plan living, media rooms" },
  { gangs: 6, label: "Six Gang", uses: "Home theatres, villa entrances, scene control panels" },
  { gangs: 8, label: "Eight Gang", uses: "Full room control, smart panels, luxury estates" },
];

const moduleTypes = [
  { type: "Touch Switch", desc: "Capacitive on/off control" },
  { type: "Dimmer", desc: "0–100% smooth dimming" },
  { type: "Fan Controller", desc: "5-speed regulation" },
  { type: "Scene Button", desc: "One-touch automation" },
  { type: "USB Charger", desc: "30W fast charge ports" },
  { type: "TV Socket", desc: "HDMI & satellite port" },
  { type: "Data Port", desc: "RJ45 ethernet" },
  { type: "Bell Switch", desc: "Doorbell & intercom" },
];

export default function ModuleSection() {
  return (
    <section className="bg-[#050505] py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
                Configuration
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-headline font-thin text-white">
                Multiple Module Sizes{" "}
                <span className="text-white/35">And Flexible Configuration</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="left">
            <p className="text-white/40 text-lg font-light leading-relaxed pt-2 lg:pt-16">
              SmartLiv panels are modular by design. Mix and match switches, dimmers, 
              USB chargers, TV sockets, and data ports within a single frame. 
              Configure exactly what each room needs — nothing more, nothing less.
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
                  <div className="flex gap-1 mb-4">
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
            <div className="grid grid-cols-2 gap-3">
              {moduleTypes.map((mod, i) => (
                <motion.div
                  key={mod.type}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="border border-white/8 rounded-xl p-4 hover:border-brand-green/20 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-green/50 mb-3 group-hover:bg-brand-green transition-colors" />
                  <div className="text-white/70 text-sm font-medium mb-1">{mod.type}</div>
                  <div className="text-white/30 text-xs">{mod.desc}</div>
                </motion.div>
              ))}
            </div>
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
                src="/images/modules/module-configuration.png"
                alt="SmartLiv Module Configuration - Customizable Smart Switch Panels"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />
              
              {/* Bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Module badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">Modular</div>
                <div className="text-white text-sm font-light">8 Module Types Available</div>
              </motion.div>

              {/* Gang count badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-white/60 text-xs font-light">1-8 Gang Options</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}