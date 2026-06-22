"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../ui/Motion";

export default function WorkspaceSection() {
  return (
    <section className="bg-[#050505] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Gallery header */}
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">Lifestyle</p>
            <h2 className="text-headline font-thin text-white">
              At home in any room
            </h2>
          </div>
        </Reveal>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large left - Living Room */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-[#0a0a0a]"
          >
            <div className="relative h-[620px] lg:h-[720px] w-full">
              <Image
                src="/images/rooms/living-room.jpg"
                alt="SmartLiv Living Room Installation - Premium Smart Home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Room label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white/80 text-sm font-light tracking-wide">Living Room</p>
                <p className="text-white/40 text-xs font-light">SmartLiv Automation</p>
              </div>
            </div>
          </motion.div>

          {/* Bedroom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]"
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/images/rooms/bedroom.jpg"
                alt="SmartLiv Bedroom Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Room label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white/80 text-xs font-light tracking-wide">Bedroom</p>
              </div>
            </div>
          </motion.div>

          {/* Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]"
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/images/rooms/study.jpg"
                alt="SmartLiv Study Room Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Room label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white/80 text-xs font-light tracking-wide">Study</p>
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
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/rooms/dining.jpg"
                alt="SmartLiv Dining Room Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Room label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white/80 text-xs font-light tracking-wide">Dining</p>
              </div>
            </div>
          </motion.div>

          {/* Study Corner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/rooms/study-corner.jpg"
                alt="SmartLiv Study Corner Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Room label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white/80 text-xs font-light tracking-wide">Study Corner</p>
              </div>
            </div>
          </motion.div>

          {/* Master Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/rooms/master-suite.jpg"
                alt="SmartLiv Master Suite Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Room label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white/80 text-xs font-light tracking-wide">Master Suite</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <Reveal delay={0.3}>
          <p className="text-center text-white/25 text-sm font-light mt-8">
            SmartLiv installations across residences in Hyderabad, Bangalore, and Chennai
          </p>
        </Reveal>
      </div>
    </section>
  );
}