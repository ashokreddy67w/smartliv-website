// components/sections/CustomIconsSection.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import Image from "next/image";
import {
  Lightbulb,
  Tv,
  Wind,
  Coffee,
  Music,
  Blinds,
  Car,
  Utensils,
  Bath,
  BookOpen,
  Moon,
  Smartphone,
  LayoutDashboard,
  DoorOpen,
  Shield,
  Home,
  Activity,
} from "lucide-react";

// Sun icon component (not in Lucide by default)
const Sun = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Enhanced icon data with tooltip descriptions
const iconExamples = [
  {
    icon: Lightbulb,
    label: "Ambient Lighting",
    description: "Control all primary lights instantly.",
  },
  {
    icon: LayoutDashboard,
    label: "Air Conditioning",
    description: "Set perfect temperature with one touch.",
  },
  {
    icon: Tv,
    label: "Home Theatre",
    description: "Activate your entertainment scene.",
  },
  {
    icon: Music,
    label: "Music System",
    description: "Fill your home with premium sound.",
  },
  {
    icon: Blinds,
    label: "Motorised Curtains",
    description: "Open or close curtains with ease.",
  },
  {
    icon: Car,
    label: "Garage Door",
    description: "Open or close your gate remotely.",
  },
  {
    icon: Utensils,
    label: "Kitchen",
    description: "Smart lighting for cooking and dining.",
  },
  {
    icon: Coffee,
    label: "Dining Mode",
    description: "Perfect ambient lighting for meals.",
  },
  {
    icon: Sun,
    label: "Good Morning",
    description: "Gentle wake-up lighting and scenes.",
  },
  {
    icon: Moon,
    label: "Good Night",
    description: "Turn off lights and activate sleep mode.",
  },
  {
    icon: BookOpen,
    label: "Reading Mode",
    description: "Focused lighting for your favourite book.",
  },
  {
    icon: Activity,
    label: "Movie Mode",
    description: "Cinema lighting for the perfect movie night.",
  },
  {
    icon: Shield,
    label: "Security System",
    description: "Arm and monitor your home security.",
  },
  {
    icon: DoorOpen,
    label: "Vacation Mode",
    description: "Secure your home while travelling.",
  },
  {
    icon: Home,
    label: "Smart Scenes",
    description: "Activate custom automation sequences.",
  },
  {
    icon: Smartphone,
    label: "Voice Control",
    description: "Control everything with your voice.",
  },
];

export default function CustomIconsSection() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-black py-32 md:py-40" aria-labelledby="custom-icons-heading">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Changed grid to give more space to image - 1.3fr for image, 1fr for text */}
    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 lg:gap-24 items-start">
          {/* Image - Full width with proper sizing - INCREASED SIZE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] w-full"
          >
            {/* Image container with proper aspect ratio - INCREASED SIZE */}
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/CustomSmartSwitch/customicons.webp"
                alt="SmartLiv premium smart touch switch with custom laser engraved smart home icons."
                fill
                className={`object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
                quality={90}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
              
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] animate-pulse" />
              )}
            </div>
            
            {/* Premium glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
            
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Feature badge - positioned at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/10">
                <div className="text-green-400 text-[10px] tracking-widest uppercase mb-0.5">
                  Laser Engraved
                </div>
                <div className="text-white text-sm font-light">
                  500+ premium smart home icons
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text + icons content */}
          <div>
            <Reveal>
              <p className="text-green-400 text-sm tracking-widest uppercase font-light mb-6">
                CUSTOM ENGRAVED SMART ICONS
              </p>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 id="custom-icons-heading" className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Custom Smart Switch Icons.
                <br />
                <span className="text-white/35">Designed Around Your Lifestyle.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-white/45 text-lg font-light leading-relaxed mb-6">
                SmartLiv premium smart touch switches can be personalised with precision laser-engraved icons, making every button instantly recognisable. Control lighting, fans, curtains, air conditioning, appliances, entertainment systems, security, and automation scenes with confidence and elegance.
              </p>
            </Reveal>
            
            <Reveal delay={0.25}>
              <p className="text-white/30 text-base font-light leading-relaxed mb-10">
                Choose from hundreds of professionally designed smart home icons or request completely custom engravings for your home, villa, apartment, hotel, office, or commercial project. Every icon is permanently engraved for long-lasting clarity and a premium finish.
              </p>
            </Reveal>

            {/* Icon grid */}
            <StaggerChildren staggerDelay={0.035}>
              <div className="grid grid-cols-4 gap-3" role="list" aria-label="Available smart home icons">
                {iconExamples.map(({ icon: Icon, label, description }, index) => (
                  <StaggerItem key={label}>
                    <motion.div
                      role="listitem"
                      aria-label={`${label}: ${description}`}
                      whileHover={{ scale: 1.08, y: -2 }}
                      onHoverStart={() => setHoveredIcon(index)}
                      onHoverEnd={() => setHoveredIcon(null)}
                      className="relative flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-green-500/30 cursor-pointer transition-all duration-200 group"
                      tabIndex={0}
                    >
                      <Icon size={20} className="text-white/40 group-hover:text-green-400 transition-colors" aria-hidden="true" />
                      <span className="text-white/25 text-xs text-center leading-tight group-hover:text-white/50 transition-colors">
                        {label}
                      </span>
                      
                      {/* Tooltip on hover */}
                      <AnimatePresence>
                        {hoveredIcon === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 whitespace-nowrap z-10 shadow-2xl"
                          >
                            <p className="text-white/80 text-xs font-light">{description}</p>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>

            {/* Feature chips */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "Laser Engraved Icons",
                  "Permanent Markings",
                  "Premium Glass Finish",
                  "Custom Icon Requests",
                  "Smart Scene Labels",
                  "Made for Modern Homes",
                ].map((feature) => (
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

            {/* CTA */}
            <Reveal delay={0.5}>
              <p className="text-white/20 text-sm font-light mt-6">
                500+ professionally designed smart home icons available. Custom icon engraving for homes, villas, hospitality, offices, and commercial projects.{" "}
                <a 
                  href="/custom-icons" 
                  className="text-green-400 hover:underline transition-all hover:gap-2 inline-flex items-center group"
                >
                  Explore Icon Library 
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}