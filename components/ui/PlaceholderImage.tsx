"use client";

import { motion } from "framer-motion";

interface PlaceholderImageProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
  variant?: "dark" | "darker" | "green-tint" | "slate";
  zoom?: boolean;
}

export default function PlaceholderImage({
  aspectRatio = "aspect-video",
  className = "",
  label,
  variant = "dark",
  zoom = false,
}: PlaceholderImageProps) {
  const gradients = {
    dark: "from-[#111] via-[#1a1a1a] to-[#0d0d0d]",
    darker: "from-[#080808] via-[#111] to-[#080808]",
    "green-tint": "from-[#0a130a] via-[#111c11] to-[#080f08]",
    slate: "from-[#0d0d12] via-[#141420] to-[#0a0a0f]",
  };

  const Inner = (
    <div
      className={`relative ${aspectRatio} ${className} overflow-hidden bg-gradient-to-br ${gradients[variant]} rounded-inherit`}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10" />
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/3 h-1/3 rounded-full bg-brand-green/5 blur-3xl" />
      </div>
      {/* Optional label */}
      {label && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-xs tracking-widest uppercase font-light">
          {label}
        </div>
      )}
    </div>
  );

  if (zoom) {
    return (
      <motion.div
        className={`overflow-hidden ${aspectRatio} ${className}`}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {Inner}
        </motion.div>
      </motion.div>
    );
  }

  return Inner;
}
