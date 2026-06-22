"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import { Wrench, Clock, CheckCircle, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Consultation",
    desc: "Our design team visits your home to plan the perfect SmartLiv configuration for every room.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Professional Installation",
    desc: "Certified SmartLiv technicians install everything to the highest electrical standards — usually in a single day.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Configuration & Setup",
    desc: "We configure your app, voice assistants, and scenes exactly to your preferences before we leave.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "10-Year Warranty",
    desc: "Every SmartLiv product is backed by our decade-long warranty and 24/7 support hotline.",
  },
];

export default function InstallationSection() {
  return (
    <section className="bg-black py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
                Hassle-Free
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-headline font-thin text-white mb-6">
                Simple To Install.{" "}
                <span className="text-white/35">Built To Last.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/45 text-lg font-light leading-relaxed mb-12">
                SmartLiv fits your existing wiring in most cases — no major 
                renovation required. Our installation team handles everything 
                from the first screw to the final scene configuration.
              </p>
            </Reveal>

            <StaggerChildren staggerDelay={0.1}>
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <StaggerItem key={step}>
                  <div className="flex gap-5 mb-8 group">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-xl border border-white/8 group-hover:border-brand-green/30 flex items-center justify-center transition-colors duration-300">
                        <Icon size={20} className="text-white/30 group-hover:text-brand-green transition-colors" />
                      </div>
                      <div className="absolute -top-2 -right-2 text-xs text-brand-green font-light">{step}</div>
                    </div>
                    <div>
                      <h3 className="text-white/80 text-base font-medium mb-2">{title}</h3>
                      <p className="text-white/35 text-sm font-light leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <Reveal delay={0.5}>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-green hover:bg-brand-green-dark text-white text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/20"
              >
                Book a Free Consultation
              </a>
            </Reveal>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/installation/smartliv-installation.jpg"
                alt="SmartLiv Professional Installation - Smart Home Automation Setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />
              
              {/* Bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Installation badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">Installation</div>
                <div className="text-white text-sm font-light">Certified Professionals</div>
              </motion.div>

              {/* Warranty badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-white/60 text-xs font-light">10-Year Warranty</span>
              </motion.div>

              {/* Speed badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-24 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-white/60 text-xs font-light">⚡ Installed in 1 Day</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}