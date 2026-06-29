"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "../ui/Motion";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "Do SmartLiv switches work without a neutral wire?",
    a: "Yes. Most SmartLiv smart touch switches are designed to work in a 2-wire configuration, meaning they do not require a neutral wire. This makes them compatible with the majority of existing Indian home wiring setups without requiring costly rewiring. Our smart home automation switches are engineered specifically for Indian electrical standards and older homes.",
  },
  {
    q: "Which voice assistants does SmartLiv support?",
    a: "SmartLiv smart home automation switches are compatible with Amazon Alexa, Google Home, and Apple Siri Shortcuts. You can control individual switches, groups of switches, or full smart home scenes using your voice through any of these platforms for hands-free voice control of your entire home.",
  },
  {
    q: "What happens if my internet connection goes down?",
    a: "SmartLiv uses local LAN control, which means your WiFi smart switches continue to function normally even without internet. The physical touch controls always work, and local app control over Wi-Fi remains available for remote home control. Cloud features like remote access resume when connectivity is restored, ensuring uninterrupted smart home automation.",
  },
  {
    q: "How long does smart switch installation typically take?",
    a: "For a standard 3-bedroom apartment, smart switch installation and configuration typically takes 6–8 hours. Larger properties like villas and luxury homes may take 2 days. Our certified technicians handle everything including wiring, configuration, app setup, scene programming, and a comprehensive handover walkthrough.",
  },
  {
    q: "Are SmartLiv switches safe for Indian electrical standards?",
    a: "Yes. All SmartLiv smart home products are rated for Indian electrical standards (230V AC, 50Hz) and carry BIS certification. They include built-in surge protection, short-circuit protection, and are rated to ISI standards for safety and durability. As a trusted home automation company in India, safety is our priority.",
  },
  {
    q: "Can I install SmartLiv myself, or do I need a professional?",
    a: "While SmartLiv switches are designed for straightforward installation, we strongly recommend professional installation by our certified team. Electrical work carries inherent risks, and professional smart switch installation ensures your warranty remains valid and the system is optimally configured for your home.",
  },
  {
    q: "What is the warranty period for SmartLiv products?",
    a: "All SmartLiv smart touch switches, panels, and accessories carry a 10-year product warranty. This covers manufacturing defects, component failure, and finish degradation under normal use conditions. Our 24/7 support team is always available for troubleshooting and technical assistance.",
  },
  {
    q: "Does SmartLiv work in apartments and villas?",
    a: "Yes. SmartLiv smart home automation is designed for apartments, independent homes, villas, duplex houses, luxury residences, offices, hotels, and commercial buildings. Every installation is customised according to your space and requirements, making it the perfect smart home solution for every property type.",
  },
  {
    q: "Can I control my home from another city or another country?",
    a: "Yes. Using the SmartLiv mobile app, you can remotely control lights, fans, curtains, ACs, smart door locks, and automation scenes securely from anywhere in the world. This makes SmartLiv ideal for frequent travellers, NRIs, and homeowners who want complete peace of mind through remote home control.",
  },
  {
    q: "Does SmartLiv increase property value?",
    a: "Many premium homebuyers look for smart home automation as a modern convenience. Smart lighting, intelligent security, energy management, and luxury smart home features can improve the attractiveness and perceived value of a property. SmartLiv enhances the modern home experience and can be a valuable addition for potential buyers.",
  },
  {
    q: "Is SmartLiv suitable for new homes and renovation projects?",
    a: "Yes. SmartLiv supports both new construction projects and existing homes. Many products work without requiring major rewiring, making smart switch installation faster and more convenient. Our solutions are ideal for renovation projects where homeowners want to upgrade to smart home automation.",
  },
  {
    q: "Can architects and interior designers work with SmartLiv?",
    a: "Yes. SmartLiv collaborates with architects, interior designers, builders, and developers to integrate premium smart home automation without compromising interior aesthetics. Our team provides specification sheets, technical support, and design consultation for professional projects.",
  },
  {
    q: "Which cities does SmartLiv serve?",
    a: "SmartLiv provides smart home automation solutions across Hyderabad, Bangalore, Chennai, Vijayawada, Guntur, Visakhapatnam, Tirupati, Ongole, and other major cities in India. Installation support is available for residential and commercial projects across the country. Contact our team to check availability in your city.",
  },
  {
    q: "Which SmartLiv products are available?",
    a: "SmartLiv offers a comprehensive range of smart home automation products including Smart Touch Switches, Smart Curtain Controllers, Smart Door Locks, Video Door Phones, Home Theatre Automation, Smart Lighting, Fan Controllers, Scene Controllers, Energy Monitoring, and Security Integration solutions for modern Indian homes and luxury villas.",
  },
  {
    q: "Can SmartLiv be integrated with existing home automation systems?",
    a: "Yes. SmartLiv supports integration with major home automation platforms including KNX, Modbus, and custom API integrations. If you have an existing Crestron, Control4, or similar system, our engineering team can develop a bespoke integration for your smart home.",
  },
  
];

// Structured Data for FAQ Schema
const generateFAQSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
});

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
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        role="button"
      >
        <span className={`text-sm md:text-base font-light pr-8 transition-colors ${open ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
          {q}
        </span>
        <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "border-brand-green bg-brand-green/10 text-brand-green" : "border-white/15 text-white/30"}`} aria-hidden="true">
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
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
  const [schema] = useState(() => generateFAQSchema(faqs));

  return (
    <section id="faq" className="bg-black py-32 md:py-40" aria-labelledby="faq-heading">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[360px_1fr] gap-16 lg:gap-24">
          {/* Sticky header */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Reveal>
              <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-4">
                HELP CENTER
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="faq-heading" className="text-4xl font-thin text-white mb-6">
                Frequently Asked Questions About Smart Home Automation
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/35 text-base font-light leading-relaxed mb-8">
                Everything homeowners, architects, builders, and interior designers need to know before installing SmartLiv smart home automation systems.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-brand-green text-sm hover:gap-4 transition-all duration-300 group"
                aria-label="Book a Free Smart Home Consultation"
              >
                Book a Free Smart Home Consultation 
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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