"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import { Mic, Smartphone, Wifi, Shield, Thermometer, Camera, DoorOpen, Lightbulb, Speaker, Lock, Cloud, Zap, Home, Users } from "lucide-react";

const ecosystemItems = [
  { 
    icon: Mic, 
    name: "Amazon Alexa", 
    desc: "Hands-free voice control for your entire SmartLiv home." 
  },
  { 
    icon: Smartphone, 
    name: "Google Home", 
    desc: "Control lights, fans, curtains, and smart scenes using Google Assistant." 
  },
  { 
    icon: Mic, 
    name: "Apple Siri Shortcuts", 
    desc: "Trigger automations and smart scenes with Siri voice commands." 
  },
  { 
    icon: Thermometer, 
    name: "Smart Air Conditioning", 
    desc: "Automate climate control for comfort and energy efficiency." 
  },
  { 
    icon: Camera, 
    name: "Security Cameras", 
    desc: "View live camera feeds directly from your SmartLiv app." 
  },
  { 
    icon: DoorOpen, 
    name: "Smart Door Locks", 
    desc: "Secure and unlock your home remotely with intelligent access control." 
  },
  { 
    icon: Lightbulb, 
    name: "Smart Lighting", 
    desc: "Control brightness, colours, schedules, and lighting scenes." 
  },
  { 
    icon: Speaker, 
    name: "Multi-Room Audio", 
    desc: "Synchronise music across every room with smart audio control." 
  },
  { 
    icon: Shield, 
    name: "Security System", 
    desc: "Integrate alarms, motion sensors, and smart security devices." 
  },
  { 
    icon: Lock, 
    name: "Video Door Phone", 
    desc: "See visitors, communicate remotely, and unlock your entrance from anywhere." 
  },
];

const featureChips = [
  "One Mobile App",
  "Voice Control",
  "Smart Automation",
  "Remote Access",
  "Real-Time Notifications",
  "Secure Cloud Connectivity",
];

const compatibilityItems = [
  "Amazon Alexa",
  "Google Home",
  "Apple Siri Shortcuts",
  "Smart Lighting",
  "Smart Locks",
  "Security Cameras",
  "Video Door Phones",
  "Motorised Curtains",
  "Home Theatre Systems",
  "Air Conditioning",
];

export default function EcosystemSection() {
  return (
    <section 
      className="bg-[#050505] py-32 md:py-40"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
              CONNECTED SMART HOME ECOSYSTEM
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="ecosystem-heading" className="text-headline font-thin text-white mb-6">
              Everything Connected.
              <br />
              <span className="text-white/35">One Intelligent Smart Home.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
              SmartLiv connects lighting, fans, air conditioning, curtains, smart locks, security cameras, video door phones, entertainment systems, and voice assistants into one intelligent smart home ecosystem. Control every connected device through a single mobile app, voice commands, automation scenes, and schedules.
            </p>
          </Reveal>
        </div>

        {/* Central hub visual */}
        <div className="relative flex items-center justify-center mb-20">
          {/* Orbit rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/4" aria-hidden="true" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/3" aria-hidden="true" />
          <div className="absolute w-[560px] h-[560px] rounded-full border border-white/2" aria-hidden="true" />

          {/* Orbit items */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px]"
          >
            {ecosystemItems.slice(0, 6).map((item, i) => {
              const radius = 130;
              const angle = (i / 6) * (2 * Math.PI);
              const x = Math.round(Math.cos(angle) * radius);
              const y = Math.round(Math.sin(angle) * radius);
              return (
                <motion.div
                  key={item.name}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <div 
                    className="w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10"
                    aria-label={item.name}
                  >
                    <item.icon size={16} className="text-brand-green" aria-hidden="true" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center hub */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center shadow-xl shadow-brand-green/30">
              <svg width="36" height="36" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
                <circle cx="8" cy="8" r="2" fill="white" />
              </svg>
            </div>
            <p className="text-white/60 text-xs font-light mt-3 tracking-wide">SmartLiv Hub</p>
            <p className="text-white/30 text-[10px] font-light">The Brain of Your Smart Home</p>
          </div>
        </div>

        {/* Feature cards grid */}
        <StaggerChildren staggerDelay={0.06}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3" role="list">
            {ecosystemItems.map(({ icon: Icon, name, desc }) => (
              <StaggerItem key={name}>
                <motion.div
                  role="listitem"
                  whileHover={{ y: -4, borderColor: "rgba(94,164,58,0.2)" }}
                  className="glass rounded-2xl p-5 border border-white/5 transition-all duration-300 group h-full"
                  tabIndex={0}
                  aria-label={`${name}: ${desc}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/15 transition-colors" aria-hidden="true">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <div className="text-white/70 text-sm font-medium mb-1">{name}</div>
                  <div className="text-white/30 text-xs leading-relaxed">{desc}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Feature chips */}
        <Reveal delay={0.35}>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {featureChips.map((feature) => (
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
        <Reveal delay={0.4}>
          <div className="text-center mt-8">
            <a
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green/10 hover:bg-brand-green/15 border border-brand-green/20 hover:border-brand-green/40 text-brand-green text-sm rounded-full transition-all duration-300 group"
              aria-label="Explore Smart Home Integrations"
            >
              Explore Smart Home Integrations 
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>

        {/* Compatibility section */}
        <Reveal delay={0.5}>
          <div className="text-center mt-10">
            <p className="text-white/20 text-xs font-light uppercase tracking-wider mb-4">
              Compatible With
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {compatibilityItems.map((item) => (
                <span
                  key={item}
                  className="text-white/30 text-xs font-light"
                >
                  {item}
                  {item !== "Air Conditioning" && " • "}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}