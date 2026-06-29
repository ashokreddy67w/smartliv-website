"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";
import { Smartphone, Wifi, Zap, Shield, Clock, Globe } from "lucide-react";
import Image from "next/image";

const appFeatures = [
  { icon: Smartphone, title: "One App, Every Room", desc: "Control every switch, scene, and schedule from a single beautifully designed app." },
  { icon: Globe, title: "Control from Anywhere", desc: "Heading home? Turn on the AC. Away on holiday? Check your lights are off." },
  { icon: Clock, title: "Smart Schedules", desc: "Wake up to lights that ease on gradually. Fall asleep as they dim to nothing." },
  { icon: Zap, title: "Instant Scenes", desc: "One tap activates Movie Mode, Morning Routine, or your own custom scenes." },
  { icon: Shield, title: "Vacation Mode", desc: "Simulate occupancy with randomised lighting patterns to deter intruders." },
  { icon: Wifi, title: "Works Offline Too", desc: "Local control via LAN means your home keeps working even without internet." },
];

export default function AppSection() {
  return (
    <section id="app" className="bg-black py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
              Intelligent Control
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-headline font-thin text-white mb-6">
             Control Your Smart Home.
From Anywhere.
              <br />
              <span className="text-white/35">Everything you need.
One intelligent app.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
            The SmartLiv mobile app lets you control smart touch switches, lighting, fans, curtains, appliances, security, and automation scenes from anywhere. Available for Android and iPhone, it provides real-time control, schedules, voice assistant integration, and instant notifications to keep your home connected wherever you are.
          </p></Reveal>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-brand-green/8 blur-3xl" />
            </div>
            <div className="relative w-[260px] md:w-[300px]">
             <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[36px] border border-white/8 shadow-2xl shadow-brand-green/10 bg-black">
  <Image
src="/images/app/smartliv-app-screen.webp"
    alt="CONTROL YOUR SMART HOME"
    fill
    priority
    className="object-cover"
    sizes="(max-width:768px)100vw,300px"
  />

  {/* iPhone Dynamic Island */}
  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-20" />
</div>
              {/* Status bar sim */}
               <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full" />
            </div> 

            {/* Floating notification */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 md:right-4 glass rounded-xl px-4 py-3 max-w-[160px]"
            >
              <div className="text-brand-green text-xs font-medium mb-0.5">Scene Activated</div>
              <div className="text-white/50 text-xs">Evening Relax — 12 lights</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-20 -left-4 md:left-4 glass rounded-xl px-4 py-3"
            >
              <div className="text-white/40 text-xs mb-0.5">Energy saved today</div>
              <div className="text-white text-base font-light">2.4 <span className="text-brand-green text-xs">kWh</span></div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <StaggerChildren staggerDelay={0.08}>
            {appFeatures.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-5 py-5 border-b border-white/5 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green/15 transition-colors">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-white/80 text-sm font-medium mb-1 group-hover:text-white transition-colors">{title}</h3>
                    <p className="text-white/35 text-sm font-light leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Download badges */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            {["App Store", "Google Play"].map((store) => (
              <motion.a
                key={store}
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-3 px-6 py-3.5 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 glass group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Smartphone size={16} className="text-white/60" />
                </div>
                <div>
                  <div className="text-white/30 text-xs">Download on the</div>
                  <div className="text-white/80 text-sm font-medium">{store}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
