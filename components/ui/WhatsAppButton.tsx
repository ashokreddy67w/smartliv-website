"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-[#111] border border-white/10 rounded-2xl p-4 max-w-[220px] mb-2"
              >
                <p className="text-white/70 text-sm mb-1">Chat with SmartLiv</p>
                <p className="text-white/35 text-xs">Get a quote for your home in 5 minutes</p>
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-2 right-2 text-white/30 hover:text-white/60"
                >
                  <X size={12} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="https://wa.me/919248123456?text=Hi%2C%20I%27m%20interested%20in%20SmartLiv%20for%20my%20home"
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setTooltipOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} className="text-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
