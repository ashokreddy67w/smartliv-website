"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../ui/Motion";

// Room data with enhanced labels, subtitles, and hover features
const rooms = [
  {
    id: "living-room",
    title: "Luxury Living Room",
    subtitle: "Lighting • Entertainment • Smart Scenes",
    image: "/images/rooms/living-room.webp",
    alt: "Luxury living room with SmartLiv smart touch switches and intelligent home automation",
    features: ["Smart Lighting", "Home Theater", "Voice Control"],
    gridClass: "col-span-2 md:col-span-2 row-span-2",
    imageHeight: "h-[620px] lg:h-[720px]",
    aspectClass: "relative h-[620px] lg:h-[720px] w-full",
  },
  {
    id: "bedroom",
    title: "Master Bedroom",
    subtitle: "Comfort • Automation • Smart Lighting",
    image: "/images/rooms/bedroom.webp",
    alt: "Smart bedroom featuring SmartLiv premium touch switch automation",
    features: ["Good Night Scene", "Curtain Automation", "Climate Control"],
    gridClass: "",
    aspectClass: "relative aspect-square w-full",
  },
  {
    id: "study",
    title: "Home Office",
    subtitle: "Focus • Productivity • Smart Control",
    image: "/images/rooms/study.webp",
    alt: "Modern home office with SmartLiv smart home automation",
    features: ["Focus Lighting", "Smart Scheduling", "Voice Assistant"],
    gridClass: "",
    aspectClass: "relative aspect-square w-full",
  },
  {
    id: "dining",
    title: "Dining Area",
    subtitle: "Ambient Lighting • Scene Control",
    image: "/images/rooms/dining.webp",
    alt: "Smart dining room with automated lighting and SmartLiv switches",
    features: ["Scene Lighting", "Dimmer Control", "Smart Switches"],
    gridClass: "",
    aspectClass: "relative aspect-[4/3] w-full",
  },
  {
    id: "study-corner",
    title: "Reading Lounge",
    subtitle: "Comfort • Smart Lighting",
    image: "/images/rooms/study-corner.webp",
    alt: "Minimal home office powered by SmartLiv smart touch switches",
    features: ["Reading Mode", "Ambient Lighting", "Automation"],
    gridClass: "",
    aspectClass: "relative aspect-[4/3] w-full",
  },
  {
    id: "master-suite",
    title: "Luxury Suite",
    subtitle: "Premium Living • Smart Automation",
    image: "/images/rooms/master-suite.webp",
    alt: "Luxury master suite with SmartLiv smart home automation",
    features: ["Wake-up Scene", "Security", "Climate Control"],
    gridClass: "",
    aspectClass: "relative aspect-[4/3] w-full",
  },
];

export default function WorkspaceSection() {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  return (
    <section className="bg-[#050505] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
              SMART HOME FOR EVERY ROOM
            </p>
            <h2 className="text-headline font-thin text-white">
              Smart Home Automation
              <br />
              <span className="text-white/80">Designed for Every Room.</span>
            </h2>
            <p className="text-white/40 text-lg font-light max-w-3xl mx-auto mt-4 leading-relaxed">
              SmartLiv transforms every space with intelligent home automation. From luxury living rooms and master bedrooms to kitchens, home offices, villas, apartments, and commercial interiors, SmartLiv smart touch switches deliver elegant design, intelligent lighting, voice control, automation scenes, and effortless everyday living.
            </p>
          </div>
        </Reveal>

        {/* First row - Asymmetric gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Living Room - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`${rooms[0].gridClass} relative rounded-3xl overflow-hidden bg-[#0a0a0a] group`}
            onMouseEnter={() => setHoveredRoom(rooms[0].id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className={rooms[0].aspectClass}>
              <Image
                src={rooms[0].image}
                alt={rooms[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Room label */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-light tracking-wide">{rooms[0].title}</p>
                <p className="text-white/50 text-xs font-light">{rooms[0].subtitle}</p>
                
                {/* Hover features */}
                <AnimatePresence>
                  {hoveredRoom === rooms[0].id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 flex flex-wrap gap-2"
                    >
                      {rooms[0].features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Bedroom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] group"
            onMouseEnter={() => setHoveredRoom(rooms[1].id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className={rooms[1].aspectClass}>
              <Image
                src={rooms[1].image}
                alt={rooms[1].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-light tracking-wide">{rooms[1].title}</p>
                <p className="text-white/40 text-[10px] font-light">{rooms[1].subtitle}</p>
                
                <AnimatePresence>
                  {hoveredRoom === rooms[1].id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {rooms[1].features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Study / Home Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] group"
            onMouseEnter={() => setHoveredRoom(rooms[2].id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className={rooms[2].aspectClass}>
              <Image
                src={rooms[2].image}
                alt={rooms[2].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-light tracking-wide">{rooms[2].title}</p>
                <p className="text-white/40 text-[10px] font-light">{rooms[2].subtitle}</p>
                
                <AnimatePresence>
                  {hoveredRoom === rooms[2].id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {rooms[2].features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
          {/* Dining */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] group"
            onMouseEnter={() => setHoveredRoom(rooms[3].id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className={rooms[3].aspectClass}>
              <Image
                src={rooms[3].image}
                alt={rooms[3].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-light tracking-wide">{rooms[3].title}</p>
                <p className="text-white/40 text-[10px] font-light">{rooms[3].subtitle}</p>
                
                <AnimatePresence>
                  {hoveredRoom === rooms[3].id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {rooms[3].features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Study Corner / Reading Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] group"
            onMouseEnter={() => setHoveredRoom(rooms[4].id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className={rooms[4].aspectClass}>
              <Image
                src={rooms[4].image}
                alt={rooms[4].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-light tracking-wide">{rooms[4].title}</p>
                <p className="text-white/40 text-[10px] font-light">{rooms[4].subtitle}</p>
                
                <AnimatePresence>
                  {hoveredRoom === rooms[4].id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {rooms[4].features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Master Suite / Luxury Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] group"
            onMouseEnter={() => setHoveredRoom(rooms[5].id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className={rooms[5].aspectClass}>
              <Image
                src={rooms[5].image}
                alt={rooms[5].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-light tracking-wide">{rooms[5].title}</p>
                <p className="text-white/40 text-[10px] font-light">{rooms[5].subtitle}</p>
                
                <AnimatePresence>
                  {hoveredRoom === rooms[5].id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {rooms[5].features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <Reveal delay={0.2}>
          <div className="text-center mt-12">
            <motion.a
              href="/solutions"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-brand-green text-sm font-light hover:gap-3 transition-all duration-300"
            >
              Explore Smart Room Solutions →
            </motion.a>
          </div>
        </Reveal>

        {/* Bottom caption */}
        <Reveal delay={0.3}>
          <p className="text-center text-white/25 text-sm font-light mt-8 max-w-3xl mx-auto">
            Premium Smart Home Automation solutions for luxury homes, villas, apartments, offices, hotels, and commercial spaces across India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}