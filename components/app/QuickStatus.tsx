// components/app/QuickStatus.tsx
'use client';

import { motion } from 'framer-motion';
import { Wifi, Power, Shield, Thermometer, Activity, Lock } from 'lucide-react';

const statusItems = [
  { icon: Wifi, label: 'Devices Online', value: '36', color: 'text-primary' },
  { icon: Power, label: 'Lights ON', value: '12', color: 'text-yellow-500' },
  { icon: Power, label: 'Lights OFF', value: '8', color: 'text-[#8E8E93]' },
  { icon: Shield, label: 'Security Armed', value: '✓', color: 'text-primary' },
  { icon: Thermometer, label: 'Temperature', value: '22°C', color: 'text-blue-500' },
  { icon: Activity, label: 'Energy Today', value: '3.2kWh', color: 'text-primary' },
];

export function QuickStatus() {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      {statusItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-3 shadow-sm text-center"
        >
          <item.icon size={20} className={`${item.color} mx-auto mb-1`} />
          <p className="text-lg font-bold text-[#1A1A1A]">{item.value}</p>
          <p className="text-[10px] text-[#8E8E93]">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}