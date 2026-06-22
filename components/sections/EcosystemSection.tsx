"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import { Mic, Smartphone, Wifi, Shield, Thermometer, Camera, DoorOpen, Lightbulb, Speaker, Lock } from "lucide-react";

const ecosystemItems = [
  { icon: Mic, name: "Alexa", desc: "Voice control via Amazon Echo" },
  { icon: Smartphone, name: "Google Home", desc: "Full Google assistant support" },
  { icon: Mic, name: "Siri Shortcuts", desc: "Native Apple HomeKit integration" },
  { icon: Thermometer, name: "Smart AC", desc: "IR blaster climate control" },
  { icon: Camera, name: "Security Cameras", desc: "View feeds within the app" },
  { icon: DoorOpen, name: "Smart Locks", desc: "Access control at your door" },
  { icon: Lightbulb, name: "Smart Lights", desc: "RGB & CCT bulb support" },
  { icon: Speaker, name: "Audio Systems", desc: "Whole-home music zones" },
  { icon: Shield, name: "Alarm Systems", desc: "Integrate with existing security" },
  { icon: Lock, name: "Video Doorbells", desc: "See & speak at your door" },
];

export default function EcosystemSection() {
  return (
    <section className="bg-[#050505] py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
              Connected Home
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-headline font-thin text-white mb-6">
              Part of the SmartLiv{" "}
              <br />
              <span className="text-white/35">Home Experience</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
              SmartLiv doesn't stop at switches. Our SmartDen ecosystem connects 
              every device in your home into a single, unified experience.
            </p>
          </Reveal>
        </div>

        {/* Central hub visual */}
        <div className="relative flex items-center justify-center mb-20">
          {/* Orbit rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/4" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/3" />
          <div className="absolute w-[560px] h-[560px] rounded-full border border-white/2" />

          {/* Center hub */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px]"
          >
            {ecosystemItems.slice(0, 6).map((item, i) => {
              const angle = (i / 6) * 360;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 130;
              const y = Math.sin(rad) * 130;
              return (
                <motion.div
                  key={item.name}
                  style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10">
                    <item.icon size={16} className="text-brand-green" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center logo */}
          <div className="relative z-10 w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center shadow-xl shadow-brand-green/30">
            <svg width="36" height="36" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
              <circle cx="8" cy="8" r="2" fill="white" />
            </svg>
          </div>
        </div>

        {/* Feature cards grid */}
        <StaggerChildren staggerDelay={0.06}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {ecosystemItems.map(({ icon: Icon, name, desc }) => (
              <StaggerItem key={name}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(94,164,58,0.2)" }}
                  className="glass rounded-2xl p-5 border border-white/5 transition-all duration-300 group h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/15 transition-colors">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <div className="text-white/70 text-sm font-medium mb-1">{name}</div>
                  <div className="text-white/30 text-xs leading-relaxed">{desc}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="text-center mt-14">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green/10 hover:bg-brand-green/15 border border-brand-green/20 hover:border-brand-green/40 text-brand-green text-sm rounded-full transition-all duration-300"
            >
              Explore the SmartLiv Ecosystem
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
