"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import { Wrench, Clock, CheckCircle, PhoneCall, Shield, Users, Settings, Star } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Smart Home Consultation",
    desc: "Our smart home specialists understand your lifestyle, recommend the ideal SmartLiv solution, and design the perfect automation plan for your home, villa, apartment, office, hotel, or commercial project.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Professional Installation",
    desc: "Certified SmartLiv technicians install your premium smart touch switches, lighting controls, automation modules, and connected devices safely and efficiently while following professional electrical standards.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Configuration & Smart Setup",
    desc: "We connect your SmartLiv mobile app, configure voice assistants, automation scenes, schedules, smart lighting, fan control, and personalised settings before handing over the completed system.",
  },
  {
    icon: Shield,
    step: "04",
    title: "Support & Warranty",
    desc: "Enjoy long-term peace of mind with product warranty, software updates, technical assistance, and dedicated SmartLiv customer support.",
  },
];

const trustFeatures = [
  "Certified Installation Team",
  "Premium Smart Home Setup",
  "Mobile App Configuration",
  "Voice Assistant Setup",
  "After-Sales Support",
  "Installation Across India",
];

const serviceCoverage = [
  "Luxury Homes",
  "Villas",
  "Apartments",
  "Hotels",
  "Offices",
  "Commercial Projects",
];

export default function InstallationSection() {
  return (
    <section 
      className="bg-black py-32 md:py-40"
      aria-labelledby="installation-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
                PROFESSIONAL SMART HOME INSTALLATION
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="installation-heading" className="text-headline font-thin text-white mb-6">
                Professional Installation.
                <br />
                <span className="text-white/35">Designed to Last for Years.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/45 text-lg font-light leading-relaxed mb-12">
                Every SmartLiv smart home automation system is professionally installed by trained technicians using your existing electrical wiring wherever possible. From planning and installation to mobile app setup, smart scene programming, and final testing, we ensure a seamless experience with minimal disruption to your home.
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

            {/* Trust feature chips */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2 mt-6 mb-8">
                {trustFeatures.map((feature) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + Math.random() * 0.1 }}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-light"
                  >
                    ✓ {feature}
                  </motion.span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-green hover:bg-brand-green-dark text-white text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/20"
                aria-label="Book your free smart home consultation"
              >
                Book Your Free Smart Home Consultation
              </a>
            </Reveal>

            {/* Service coverage */}
            <Reveal delay={0.6}>
              <div className="mt-6">
                <p className="text-white/20 text-xs font-light uppercase tracking-wider mb-2">
                  Available For
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceCoverage.map((item) => (
                    <span
                      key={item}
                      className="text-white/25 text-xs font-light"
                    >
                      {item}
                      {item !== "Commercial Projects" && " • "}
                    </span>
                  ))}
                </div>
                <p className="text-white/20 text-xs font-light mt-1">Across India</p>
              </div>
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
                src="/images/installation/smartliv-installation.webp"
                alt="Professional SmartLiv technician installing premium smart home automation switches in a luxury residence."
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" aria-hidden="true" />
              
              {/* Bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
              
              {/* Installation badge - Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-brand-green text-xs tracking-widest uppercase mb-1">CERTIFIED INSTALLATION</div>
                <div className="text-white text-sm font-light">Professional Smart Home Experts</div>
              </motion.div>

              {/* Warranty badge - Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-white/60 text-xs font-light">Manufacturer Warranty</span>
              </motion.div>

              {/* Speed badge - Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-24 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-white/60 text-xs font-light">⚡ Fast Professional Installation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}