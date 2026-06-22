"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/ui/Motion";

const products = [
  {
    name: "Black Glass Touch Switch",
    category: "Switches",
    image: "/images/products/black-switch.jpg",
  },
  {
    name: "White Glass Touch Switch",
    category: "Switches",
    image: "/images/products/white-switch.jpg",
  },
  {
    name: "Titanium Grey Switch",
    category: "Switches",
    image: "/images/products/titanium-switch.jpg",
  },
  {
    name: "Champagne Gold Switch",
    category: "Switches",
    image: "/images/products/gold-switch.jpg",
  },
  {
    name: "Sage Green Switch",
    category: "Switches",
    image: "/images/products/green-switch.jpg",
  },
  {
    name: "Midnight Blue Switch",
    category: "Switches",
    image: "/images/products/blue-switch.jpg",
  },
  {
    name: "Smart Dimmer",
    category: "Controls",
    image: "/images/products/dimmer.jpg",
  },
  {
    name: "Fan Controller",
    category: "Controls",
    image: "/images/products/fan-controller.jpg",
  },
  {
    name: "Curtain Controller",
    category: "Controls",
    image: "/images/products/curtain-controller.jpg",
  },
  {
    name: "Smart Thermostat",
    category: "Climate",
    image: "/images/products/thermostat.jpg",
  },
  {
    name: "Smart Door Lock",
    category: "Security",
    image: "/images/products/door-lock.jpg",
  },
  {
    name: "Video Door Phone",
    category: "Security",
    image: "/images/products/door-phone.jpg",
  },
  {
    name: "Smart Door Bell",
    category: "Security",
    image: "/images/products/door-bell.jpg",
  },
  {
    name: "Smart Power Socket",
    category: "Power",
    image: "/images/products/power-socket.jpg",
  },
  {
    name: "USB Charging Module",
    category: "Power",
    image: "/images/products/usb-module.jpg",
  },
  {
    name: "HDMI / TV Module",
    category: "Entertainment",
    image: "/images/products/hdmi-module.jpg",
  },
  {
    name: "RJ45 Data Module",
    category: "Connectivity",
    image: "/images/products/rj45-module.jpg",
  },
  {
    name: "Smart Scene Controller",
    category: "Controls",
    image: "/images/products/scene-controller.jpg",
  },
  {
    name: "Home Theatre Controller",
    category: "Entertainment",
    image: "/images/products/theatre-controller.jpg",
  },
  {
    name: "Smart Lighting Controller",
    category: "Lighting",
    image: "/images/products/lighting-controller.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#050505] py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
              Complete Ecosystem
            </p>
            <h2 className="text-headline font-thin text-white">
              The SmartLiv{" "}
              <span className="text-white/35">Collection</span>
            </h2>
            <p className="text-white/40 text-lg font-light max-w-2xl mx-auto mt-4">
              Twenty premium products, one unified ecosystem. Every detail 
              precision-engineered for the modern home.
            </p>
          </div>
        </Reveal>

        {/* Product Grid */}
        <StaggerChildren staggerDelay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <StaggerItem key={product.name}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 hover:border-brand-green/30 transition-all duration-500"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Product name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/90 text-xs font-light tracking-wide">{product.name}</p>
                      <p className="text-white/40 text-[10px] font-light uppercase tracking-wider">{product.category}</p>
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/5">
                    <span className="text-white/40 text-[8px] uppercase tracking-wider">{product.category}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Footer */}
        <Reveal delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-white/25 text-sm font-light">
              All products available in six premium finishes
            </p>
            <div className="flex justify-center gap-3 mt-4">
              {["Black", "White", "Titanium", "Gold", "Green", "Blue"].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-white/10"
                  style={{
                    background: color === "Black" ? "#0D0D0D" :
                              color === "White" ? "#F5F5F5" :
                              color === "Titanium" ? "#7A7A7A" :
                              color === "Gold" ? "#C8A96A" :
                              color === "Green" ? "#5EA43A" :
                              "#1C2B4A"
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}