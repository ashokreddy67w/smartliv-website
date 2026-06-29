// components/app/PowerChart.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function PowerChart() {
  const data = [1.2, 0.8, 0.6, 0.5, 0.9, 1.5, 2.2, 2.8, 2.5, 2.0, 1.8, 1.5];
  const max = Math.max(...data);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs text-[#8E8E93] font-medium">Today's Power Consumption</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#1A1A1A]">3.2</span>
            <span className="text-sm text-[#8E8E93]">kWh</span>
            <button className="flex items-center gap-1 text-xs text-[#8E8E93] bg-[#F2F2F7] px-2 py-0.5 rounded-full ml-1">
              Today <ChevronDown size={12} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs text-[#8E8E93]">Usage</span>
        </div>
      </div>

      <div className="h-[80px] flex items-end gap-1.5">
        {data.map((value, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${(value / max) * 100}%` }}
            transition={{ duration: 0.6, delay: i * 0.04 }}
            viewport={{ once: true }}
            className="flex-1 rounded-full bg-primary/20 relative group"
          >
            <div
              className="absolute bottom-0 left-0 right-0 rounded-full transition-all group-hover:bg-primary/60"
              style={{ height: `${(value / max) * 100}%`, backgroundColor: value > 2 ? '#6DB33F' : '#6DB33F60' }}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between mt-1.5">
        {['12AM', '4AM', '8AM', '12PM', '4PM'].map((label) => (
          <span key={label} className="text-[10px] text-[#8E8E93]">{label}</span>
        ))}
      </div>
    </div>
  );
}