"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";
import { Lightbulb, Tv, Wind, Coffee, Music, Blinds, Car, Utensils, Bath, BookOpen, Sunset, Moon } from "lucide-react";

const iconExamples = [
  { icon: Lightbulb, label: "Main Lights" },
  { icon: Tv, label: "Home Theatre" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "Morning Brew" },
  { icon: Music, label: "Audio System" },
  { icon: Blinds, label: "Curtains" },
  { icon: Car, label: "Garage Door" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Bath, label: "Spa Mode" },
  { icon: BookOpen, label: "Study Mode" },
  { icon: Sunset, label: "Sunset Scene" },
  { icon: Moon, label: "Sleep Mode" },
];

export default function CustomIconsSection() {
  return (
    <section className="bg-black py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <PlaceholderImage
              aspectRatio="aspect-[4/5]"
              variant="darker"
              label="Custom icon panel"
              zoom
              className="rounded-3xl"
            />
          </motion.div>

          {/* Text + icons */}
          <div>
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
                Personalisation
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-headline font-thin text-white mb-6">
                Personalised With{" "}
                <span className="text-white/35">Custom Icons</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/45 text-lg font-light leading-relaxed mb-6">
                Every switch can be labelled with a custom icon that matches exactly 
                what it controls. No more guessing which switch is which — each button 
                tells you precisely what it does.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-white/30 text-base font-light leading-relaxed mb-10">
                Choose from our library of 400+ precision-drawn icons, or submit 
                your own designs. Icons are laser-etched directly into the panel 
                surface — permanent, precise, and unfadeable.
              </p>
            </Reveal>

            {/* Icon grid */}
            <StaggerChildren staggerDelay={0.04}>
              <div className="grid grid-cols-4 gap-3">
                {iconExamples.map(({ icon: Icon, label }) => (
                  <StaggerItem key={label}>
                    <motion.div
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl glass hover:glass-green cursor-pointer transition-all duration-200 group"
                    >
                      <Icon size={20} className="text-white/40 group-hover:text-brand-green transition-colors" />
                      <span className="text-white/25 text-xs text-center leading-tight group-hover:text-white/50 transition-colors">{label}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>

            <Reveal delay={0.5}>
              <p className="text-white/20 text-sm font-light mt-6">
                400+ icons available · Custom submissions welcome ·{" "}
                <a href="#" className="text-brand-green hover:underline">Browse icon library →</a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
