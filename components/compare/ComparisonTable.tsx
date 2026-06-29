// components/compare/ComparisonTable.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, X, 
  Lightbulb, Shield, Thermometer, Film, 
  Zap, Wifi, Bell, Cpu, Sparkles 
} from 'lucide-react';

const comparisons = [
  {
    id: 'lighting',
    icon: Lightbulb,
    category: 'Lighting',
    traditional: 'Manual wall switches',
    smartLiv: 'App, voice & scene control',
  },
  {
    id: 'security',
    icon: Shield,
    category: 'Security',
    traditional: 'Basic locks only',
    smartLiv: 'Digital locks, CCTV, sensors, alarms, access control',
  },

  {
    id: 'climate',
    icon: Thermometer,
    category: 'Climate',
    traditional: 'Manual AC control',
    smartLiv: 'Automatic climate control with scheduling',
  },
  {
    id: 'entertainment',
    icon: Film,
    category: 'Entertainment',
    traditional: 'Multiple remotes',
    smartLiv: 'One-touch home theater scenes',
  },
  {
    id: 'energy',
    icon: Zap,
    category: 'Energy',
    traditional: 'High electricity consumption',
    smartLiv: 'Smart scheduling and optimized energy usage',
  },
  {
    id: 'remote',
    icon: Wifi,
    category: 'Remote Access',
    traditional: 'Unavailable',
    smartLiv: 'Control from anywhere using the SmartLiv app',
  },
  {
    id: 'notifications',
    icon: Bell,
    category: 'Notifications',
    traditional: 'None',
    smartLiv: 'Instant mobile alerts for security events',
  },
  {
    id: 'automation',
    icon: Cpu,
    category: 'Automation',
    traditional: 'None',
    smartLiv: 'Custom scenes, schedules, AI automation',
  },
  {
    id: 'lifestyle',
    icon: Sparkles,
    category: 'Lifestyle',
    traditional: 'Basic living',
    smartLiv: 'Luxury intelligent living',
  },
];

export function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass rounded-3xl overflow-hidden border border-white/5"
      style={{
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.9)',
      }}
    >
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 bg-white/5">
        <div className="col-span-1" />
        <div className="text-center">
          <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider">Traditional Home</h4>
        </div>
        <div className="text-center">
          <h4 className="text-sm font-medium text-primary uppercase tracking-wider">SmartLiv Home</h4>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/5">
        {comparisons.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 p-5 hover:bg-white/5 transition-colors group"
          >
            {/* Category */}
            <div className="flex items-center gap-3">
              <item.icon size={20} className="text-primary/60 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {item.category}
              </span>
            </div>

            {/* Traditional */}
            <div className="flex items-center justify-center gap-2 text-text-gray/50">
              <X size={16} className="text-red-500/40 flex-shrink-0" />
              <span className="text-sm text-center">{item.traditional}</span>
            </div>

            {/* SmartLiv */}
            <div className="flex items-center justify-center gap-2 text-white/70">
              <Check size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm text-center">{item.smartLiv}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="p-6 bg-primary/5 border-t border-primary/10">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-text-gray/50">
            <X size={14} className="text-red-500/40" />
            <span>10 limitations eliminated</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2 text-primary/70">
            <Check size={14} className="text-primary" />
            <span>10 intelligent features added</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}