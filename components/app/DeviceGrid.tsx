// components/app/DeviceGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Tv, Fan, Lock, Car, DoorClosed, Camera, Bell, ChefHat, Music } from 'lucide-react';

const devices = [
  { icon: Lightbulb, name: 'Living Room Lights', room: 'Living Room', status: 'on' },
  { icon: Lightbulb, name: 'Kitchen Lights', room: 'Kitchen', status: 'off' },
  { icon: Lightbulb, name: 'Master Bedroom Lights', room: 'Bedroom', status: 'on' },
  { icon: Fan, name: 'Fan', room: 'Living Room', status: 'on' },
  { icon: Tv, name: 'TV', room: 'Living Room', status: 'off' },
  { icon: Fan, name: 'AC', room: 'Bedroom', status: 'off' },
  { icon: DoorClosed, name: 'Curtains', room: 'Living Room', status: 'on' },
  { icon: Lock, name: 'Door Lock', room: 'Front Door', status: 'on' },
  { icon: Car, name: 'Garage Door', room: 'Garage', status: 'off' },
  { icon: Lightbulb, name: 'Garden Lights', room: 'Garden', status: 'off' },
  { icon: Camera, name: 'CCTV', room: 'Living Room', status: 'on' },
  { icon: Bell, name: 'Door Bell', room: 'Front Door', status: 'off' },
];

export function DeviceGrid() {
  return (
    <div>
      <p className="text-xs font-semibold text-[#1A1A1A] mb-2">Devices</p>
      <div className="grid grid-cols-2 gap-2">
        {devices.slice(0, 8).map((device, index) => (
          <motion.div
            key={device.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`bg-white rounded-xl p-3 shadow-sm border transition-all ${
              device.status === 'on' 
                ? 'border-primary/20 bg-primary/5' 
                : 'border-[#E5E5EA]'
            }`}
          >
            <div className="flex items-start justify-between">
              <device.icon size={18} className={device.status === 'on' ? 'text-primary' : 'text-[#8E8E93]'} />
              <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${
                device.status === 'on' ? 'bg-primary/10 text-primary' : 'bg-[#F2F2F7] text-[#8E8E93]'
              }`}>
                {device.status === 'on' ? 'ON' : 'OFF'}
              </span>
            </div>
            <p className="text-xs font-medium text-[#1A1A1A] mt-1.5 leading-tight">{device.name}</p>
            <p className="text-[9px] text-[#8E8E93]">{device.room}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}