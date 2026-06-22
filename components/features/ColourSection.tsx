"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";

const colors = [
  { 
    name: "Obsidian Black", 
    hex: "#0D0D0D", 
    border: "#333", 
    image: "/images/colours/Black.png",
    desc: "The purest expression of the SmartLiv form. Absolute black that commands any room." 
  },
  { 
    name: "Polar White", 
    hex: "#F5F5F5", 
    border: "#DDD", 
    image: "/images/colours/white.png",
    desc: "Seamless integration with white interiors. Disappears into the wall, by design." 
  },
  { 
    name: "Titanium Grey", 
    hex: "#7A7A7A", 
    border: "#666", 
    image: "/images/colours/Titanium.png",
    desc: "Industrial warmth. Pairs with concrete, stone, and brushed metal finishes." 
  },
  { 
    name: "Champagne Gold", 
    hex: "#C8A96A", 
    border: "#B8954A", 
    image: "/images/colours/gold.png",
    desc: "For interiors that celebrate opulence. A warm accent that elevates every room." 
  },
  { 
    name: "Sage Green", 
    hex: "#5EA43A", 
    border: "#4A8A30", 
    image: "/images/colours/green.png",
    desc: "SmartLiv's signature finish. A nod to nature within a precision-engineered product." 
  },
  { 
    name: "Midnight Blue", 
    hex: "#1C2B4A", 
    border: "#2A3D66", 
    image: "/images/colours/blue.png",
    desc: "Deep and contemplative. A refined choice for libraries, studies, and master bedrooms." 
  },
];

export default function ColourSection() {
  const [selected, setSelected] = useState(0);
  const [showCollection, setShowCollection] = useState(true);

  return (
    <section className="bg-black py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <Reveal>
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">Colour Collection</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-headline font-thin text-white mb-4">
              hand.{" "}
              <span className="text-white/35">Zero Compromise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-2xl">
              Six precision-finished colourways, each developed over 18 months 
              of material research. Matched to Pantone standards. 
              UV-stable for 25 years.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Color swatches */}
          <div>
            <StaggerChildren staggerDelay={0.07}>
              {colors.map((color, i) => (
                <StaggerItem key={color.name}>
                  <motion.button
                    onClick={() => {
                      setSelected(i);
                      setShowCollection(false);
                    }}
                    whileHover={{ x: 6 }}
                    className={`w-full flex items-center gap-5 p-4 rounded-2xl transition-all duration-300 text-left mb-2 ${
                      selected === i && !showCollection ? "glass-green" : "hover:glass"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full shrink-0 border-2 transition-transform duration-200"
                      style={{
                        backgroundColor: color.hex,
                        borderColor: selected === i && !showCollection ? color.border : "transparent",
                        transform: selected === i && !showCollection ? "scale(1.15)" : "scale(1)",
                        boxShadow: selected === i && !showCollection ? `0 0 16px ${color.hex}60` : "none",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium transition-colors ${selected === i && !showCollection ? "text-white" : "text-white/50"}`}>
                        {color.name}
                      </div>
                      <AnimatePresence>
                        {selected === i && !showCollection && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-white/35 text-xs font-light leading-relaxed mt-1 overflow-hidden"
                          >
                            {color.desc}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {selected === i && !showCollection && (
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                    )}
                  </motion.button>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <Reveal delay={0.5}>
              <p className="text-white/20 text-xs font-light mt-6 ml-4">
                Custom RAL colours available for orders of 50+ units.{" "}
                <a href="#enquire" className="text-brand-green hover:underline">Enquire now →</a>
              </p>
            </Reveal>
          </div>

          {/* Preview image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {showCollection ? (
                // Show collection image first
                <motion.div
                  key="collection"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
                >
                  <Image
                    src="/images/colours/smartliv-colour-collection.png"
                    alt="SmartLiv Colour Collection - Premium Finish Options"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />
                  
                  {/* Bottom gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Collection badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 shadow-2xl"
                  >
                    <div className="text-brand-green text-xs tracking-widest uppercase mb-1">Collection</div>
                    <div className="text-white text-sm font-light">Six Premium Finishes</div>
                  </motion.div>

                  {/* Click to explore hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                  >
                    <span className="text-white/60 text-xs font-light">Click a colour to explore →</span>
                  </motion.div>
                </motion.div>
              ) : (
                // Show selected colour preview
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
                  style={{
                    boxShadow: `0 40px 80px ${colors[selected].hex}20`,
                  }}
                >
                  <Image
                    src={colors[selected].image}
                    alt={`${colors[selected].name} Finish - SmartLiv`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />
                  
                  {/* Bottom gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Color accent gradient */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${colors[selected].hex}40 0%, transparent 100%)`
                    }}
                  />
                  
                  {/* Color swatch overlay */}
                  <div
                    className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-white/20 shadow-xl"
                    style={{
                      backgroundColor: colors[selected].hex,
                      boxShadow: `0 8px 32px ${colors[selected].hex}50`,
                    }}
                  />
                  
                  {/* Colour name badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10"
                  >
                    <div className="text-white/50 text-xs tracking-widest uppercase">Selected</div>
                    <div className="text-white text-lg font-light">{colors[selected].name}</div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Back to collection button */}
            {!showCollection && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={() => setShowCollection(true)}
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white/60 text-xs font-light hover:text-white hover:border-white/20 transition-all"
              >
                ← Back to Collection
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}