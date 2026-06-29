"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
         src="/video/hersection/hero-compressed.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Green Glow */}
      <div className="absolute -left-40 top-20 w-[600px] h-[600px] rounded-full bg-[#5EA43A]/10 blur-[180px]" />
      <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] rounded-full bg-[#5EA43A]/10 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(94,164,58,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94,164,58,.7) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 max-w-6xl text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#5EA43A]/30 bg-[#5EA43A]/10 backdrop-blur-xl mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#5EA43A]" />
          <span className="text-[#5EA43A] uppercase tracking-[0.25em] text-xs">
  PREMIUM SMART HOME AUTOMATION
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extralight text-white leading-none tracking-tight"
        >
     Every Touch.
Perfectly Intelligent.
          <br />
          <span className="text-[#5EA43A] font-semibold">         
Smart Home Automation
Designed Around You.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed"
        >
Control lighting, security, curtains, climate and entertainment
from one beautifully designed smart home platform.        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#5EA43A] text-white font-medium hover:scale-105 transition"
          >
            Book Consultation
          </a>

          <a
            href="#products"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
           Experience SmartLiv
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-3 gap-10 max-w-xl mx-auto">
          <div>
            <h2 className="text-4xl font-light text-white">10000+</h2>
            <p className="text-white/40 text-sm uppercase mt-1">
              Homes Automated
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-light text-white">1500+</h2>
            <p className="text-white/40 text-sm uppercase mt-1">
              Cities Served
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-light text-white">99.9%</h2>
            <p className="text-white/40 text-sm uppercase mt-1">
              System Uptime
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-2">
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}