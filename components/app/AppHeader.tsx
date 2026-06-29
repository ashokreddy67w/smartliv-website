// components/app/AppHeader.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, Fingerprint, Camera, 
  Film, Thermometer, Mic, Activity, LayoutDashboard,
  Bell, User, Lock, Wifi
} from 'lucide-react';

const features = [
  { icon: Lightbulb, label: 'Smart Lighting' },
  { icon: Fingerprint, label: 'Digital Door Locks' },
  { icon: Camera, label: 'Live CCTV' },
  { icon: Film, label: 'Home Theater' },
  { icon: Thermometer, label: 'Climate Control' },
  { icon: Mic, label: 'Voice Assistant' },
  { icon: Activity, label: 'Energy Monitoring' },
  { icon: LayoutDashboard, label: 'Scene Automation' },
  { icon: Bell, label: 'Push Notifications' },
  { icon: User, label: 'Guest Access' },
  { icon: Wifi, label: 'Remote Control' },
];

export function AppHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-[0.15em] uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        SMARTLIV MOBILE APP
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
        <span className="block">Control Your</span>
        <span className="block">Entire Home.</span>
        <span className="block text-primary mt-1">Anywhere. Anytime.</span>
      </h2>

      {/* Description */}
      <p className="text-text-gray/70 text-lg max-w-xl font-light leading-relaxed">
        Manage your complete SmartLiv ecosystem from one beautifully designed application. Monitor CCTV, unlock doors, control lighting, automate curtains, manage climate, activate scenes, receive instant alerts, and control every connected device securely from anywhere in the world.
      </p>

      {/* Feature List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
        {features.slice(0, 6).map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon size={16} className="text-primary" />
            <span className="text-sm text-white/70">{label}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
     <div className="flex flex-wrap gap-4 pt-4">
  <a
    href="https://wa.me/919248123456"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3.5 bg-primary text-[#0B1F38] font-semibold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
  >
    Chat on WhatsApp
  </a>

  <a
    href="tel:+919248123456"
    className="px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/30"
  >
    Call Now
  </a>
</div>
    </motion.div>
  );
}