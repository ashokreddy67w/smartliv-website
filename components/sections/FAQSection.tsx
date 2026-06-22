"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "../ui/Motion";

const faqs = [
  {
    q: "Do SmartLiv switches work without a neutral wire?",
    a: "Yes. Most SmartLiv switches are designed to work in a 2-wire configuration, meaning they do not require a neutral wire. This makes them compatible with the majority of existing Indian home wiring setups without requiring costly rewiring.",
  },
  {
    q: "Which voice assistants does SmartLiv support?",
    a: "SmartLiv switches are compatible with Amazon Alexa, Google Home, and Apple Siri Shortcuts. You can control individual switches, groups of switches, or full scenes using your voice through any of these platforms.",
  },
  {
    q: "What happens if my internet connection goes down?",
    a: "SmartLiv uses local LAN control, which means your switches continue to function normally even without internet. The physical touch controls always work, and local app control over Wi-Fi remains available. Cloud features like remote access resume when connectivity is restored.",
  },
  {
    q: "How long does installation typically take?",
    a: "For a standard 3-bedroom apartment, installation and configuration typically takes 6–8 hours. Larger properties like villas may take 2 days. Our certified technicians handle everything including wiring, configuration, app setup, and a comprehensive handover walkthrough.",
  },
  {
    q: "Are SmartLiv switches safe for Indian electrical standards?",
    a: "Yes. All SmartLiv products are rated for Indian electrical standards (230V AC, 50Hz) and carry BIS certification. They include built-in surge protection, short-circuit protection, and are rated to ISI standards for safety and durability.",
  },
  {
    q: "Can I install SmartLiv myself, or do I need a professional?",
    a: "While SmartLiv switches are designed for straightforward installation, we strongly recommend professional installation by our certified team. Electrical work carries inherent risks, and professional installation ensures your warranty remains valid and the system is optimally configured.",
  },
  {
    q: "What is the warranty period for SmartLiv products?",
    a: "All SmartLiv switches, panels, and accessories carry a 10-year product warranty. This covers manufacturing defects, component failure, and finish degradation under normal use conditions. Our 24/7 support team is always available for troubleshooting.",
  },
  {
    q: "Can SmartLiv be integrated with existing home automation systems?",
    a: "Yes. SmartLiv supports integration with major home automation platforms including KNX, Modbus, and custom API integrations. If you have an existing Crestron, Control4, or similar system, our engineering team can develop a bespoke integration.",
  },
  {
    q: "How many devices can I connect to one SmartLiv hub?",
    a: "A single SmartLiv hub supports up to 200 individual device channels. For larger properties, multiple hubs can be networked together seamlessly within a single app interface. There is no practical limit to the size of installation SmartLiv can handle.",
  },
  {
    q: "Do the switches work during power cuts?",
    a: "SmartLiv switches require mains power to operate — this is true of all smart switch systems. However, if you integrate SmartLiv with a UPS or inverter backup system, your smart switches will continue to work normally during power cuts alongside the devices they control.",
  },
  {
    q: "Can I add SmartLiv to rooms gradually, rather than doing the whole home at once?",
    a: "Absolutely. Many customers start with the living room or master bedroom and expand room by room. SmartLiv is designed for staged adoption — each new room you add integrates immediately into your existing app and hub without any additional configuration.",
  },
  {
    q: "Is the SmartLiv app available in regional Indian languages?",
    a: "The SmartLiv app is currently available in English, Hindi, and Telugu, with Tamil, Kannada, and Marathi support planned for the next release. The app is available on both iOS and Android.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      className="border-b border-white/6"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-sm md:text-base font-light pr-8 transition-colors ${open ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
          {q}
        </span>
        <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "border-brand-green bg-brand-green/10 text-brand-green" : "border-white/15 text-white/30"}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/40 text-sm font-light leading-relaxed pb-6 max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-black py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[360px_1fr] gap-16 lg:gap-24">
          {/* Sticky header */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
                Questions
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl font-thin text-white mb-6">Some FAQs</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/35 text-base font-light leading-relaxed mb-8">
                Everything you need to know about SmartLiv. Can't find your answer?
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 text-brand-green text-sm hover:gap-4 transition-all duration-300"
              >
                Contact our team →
              </a>
            </Reveal>
          </div>

          {/* FAQ list */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
