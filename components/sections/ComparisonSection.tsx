"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Reveal } from "../ui/Motion";
import Image from "next/image";

const comparisonRows = [
  { feature: "Capacitive Touch Control", smartliv: true, traditional: false },
  { feature: "Voice Assistant Integration", smartliv: true, traditional: false },
  { feature: "Remote Control via App", smartliv: true, traditional: false },
  { feature: "Scene & Schedule Automation", smartliv: true, traditional: false },
  { feature: "Energy Monitoring Dashboard", smartliv: true, traditional: false },
  { feature: "No Neutral Wire Required", smartliv: true, traditional: false },
  { feature: "Child Lock & Protection", smartliv: true, traditional: false },
  { feature: "Customisable LED Backlight", smartliv: true, traditional: false },
  { feature: "OTA Firmware Updates", smartliv: true, traditional: false },
  { feature: "10-Year Warranty", smartliv: true, traditional: false },
];

export default function ComparisonSection() {
  return (
    <section id="compare" className="bg-[#050505] py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl mb-6">
  <Image
    src="/images/home-automation/smart-switch-comparison.png"
    alt="SmartLiv vs Traditional"
    fill
    priority
    className="object-cover transition-transform duration-700 hover:scale-105"
    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,40vw"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
</div>
            </motion.div>
            <Reveal delay={0.3} direction="up">
              <div className="glass rounded-2xl p-6">
                <p className="text-white/30 text-sm font-light leading-relaxed">
                  "Every detail is considered. The switches respond before your finger 
                  fully lands. It's the kind of quality that makes everything else feel 
                  cheap by comparison."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <span className="text-brand-green text-xs font-medium">RV</span>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs">Ravi Varma</div>
                    <div className="text-white/30 text-xs">Villa Owner, Jubilee Hills</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Table side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
                Why SmartLiv
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-headline font-thin text-white mb-4">
                Smart Touch Switches{" "}
                <span className="text-white/35">vs</span>{" "}
                Traditional Boards
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/40 text-base font-light leading-relaxed mb-10">
                The gap between a standard switchboard and a SmartLiv panel isn't just 
                aesthetic — it's an entirely different relationship with your home.
              </p>
            </Reveal>

            {/* Table header */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 pb-4 border-b border-white/8 mb-2">
                <div className="text-white/25 text-xs tracking-widest uppercase"></div>
                <div className="text-brand-green text-xs tracking-widest uppercase w-24 text-center">SmartLiv</div>
                <div className="text-white/25 text-xs tracking-widest uppercase w-24 text-center">Traditional</div>
              </div>
            </Reveal>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                className="grid grid-cols-[1fr_auto_auto] gap-4 py-3.5 border-b border-white/5 items-center group hover:border-white/10 transition-colors"
              >
                <span className="text-white/55 text-sm font-light group-hover:text-white/70 transition-colors">
                  {row.feature}
                </span>
                <div className="w-24 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center">
                    <Check size={12} className="text-brand-green" />
                  </div>
                </div>
                <div className="w-24 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    <X size={12} className="text-white/20" />
                  </div>
                </div>
              </motion.div>
            ))}

            <Reveal delay={0.5}>
              <div className="mt-10">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-brand-green/30 hover:border-brand-green text-brand-green text-sm rounded-full transition-all duration-300 hover:bg-brand-green/5"
                >
                  Make the switch to SmartLiv
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
