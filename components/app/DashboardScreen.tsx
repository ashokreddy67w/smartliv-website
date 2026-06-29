// components/app/DashboardScreen.tsx
'use client';

import { Bell, User, Plus, Lock, Home, Grid, Settings, Layers, Camera, Users, ChevronDown, Wifi } from 'lucide-react';
import { PowerChart } from './PowerChart';
import { QuickStatus } from './QuickStatus';
import { SceneShortcuts } from './SceneShortcuts';
import { DeviceGrid } from './DeviceGrid';
import { motion, AnimatePresence } from 'framer-motion';

export function DashboardScreen() {
  return (
    <div className="h-full overflow-y-auto p-5 pb-20 bg-[#F5F7FA]">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-[#1A1A1A]">Smart Home</h1>
          <p className="text-xs text-[#8E8E93]">Welcome back, John</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#8E8E93] hover:bg-[#F0F0F0] transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>
          <button className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
            <Plus size={18} />
          </button>
          <button className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
            <User size={16} />
          </button>
        </div>
      </div>

      {/* Power Chart */}
      <PowerChart />

      {/* Quick Status */}
      <QuickStatus />

      {/* Scene Shortcuts */}
      <SceneShortcuts />

      {/* Devices */}
      <DeviceGrid />

      {/* Floating Lock Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-28 right-6 w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white z-30"
      >
        <Lock size={24} />
      </motion.button>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#E5E5EA] px-4 py-2 flex items-center justify-around">
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: Grid, label: 'Devices' },
          { icon: Layers, label: 'Automations' },
          { icon: Camera, label: 'Cameras' },
          { icon: Users, label: 'Profile' },
        ].map(({ icon: Icon, label, active }) => (
          <button key={label} className="flex flex-col items-center gap-0.5 relative">
            <Icon size={22} className={active ? 'text-primary' : 'text-[#8E8E93]'} />
            <span className={`text-[10px] ${active ? 'text-primary font-medium' : 'text-[#8E8E93]'}`}>{label}</span>
            {active && <span className="absolute -top-0.5 w-1 h-1 rounded-full bg-primary" />}
          </button>
        ))}
      </div>
    </div>
  );
}