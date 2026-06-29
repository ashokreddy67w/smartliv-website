"use client";

import { motion } from "framer-motion";
import { Reveal } from "../ui/Motion";
import { Phone, Mail, MessageCircle, CheckCircle, Star, Award, Clock, Shield } from "lucide-react";

export default function CTASection() {
  const cities = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Vijayawada",
    "Guntur",
    "Visakhapatnam",
    "Tirupati",
    "Ongole",
    "Nellore",
    "Kurnool",
    "Rajahmundry",
  ];

  return (
    <section 
      id="enquire" 
      className="bg-[#050505] py-32 md:py-40 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/4 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-brand-green/3 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
              START YOUR SMART HOME JOURNEY
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="cta-heading" className="text-headline font-thin text-white mb-6">
              Build Your Dream Smart Home.
              <br />
              <span className="text-white/35">Designed Around Your Lifestyle.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Book a free Smart Home consultation with SmartLiv. Our automation experts design a personalised solution for your home, villa, apartment, office, or commercial space. We help you choose smart touch switches, lighting automation, home theatre systems, smart door locks, CCTV, video door phones, curtain automation, and complete home automation tailored to your budget.
            </p>
          </Reveal>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { 
              icon: Phone, 
              label: "Call SmartLiv Experts", 
              value: "+91 9248123456", 
              href: "tel:+919248123456",
              ariaLabel: "Call SmartLiv experts at +91 9248123456"
            },
            { 
              icon: Mail, 
              label: "Email Our Design Team", 
              value: "hello@smartliv.in", 
              href: "mailto:hello@smartliv.in",
              ariaLabel: "Email our design team at hello@smartliv.in"
            },
            { 
              icon: MessageCircle, 
              label: "WhatsApp Consultation", 
              value: "Chat Now", 
              href: "#",
              ariaLabel: "WhatsApp consultation for instant product guidance"
            },
          ].map(({ icon: Icon, label, value, href, ariaLabel }) => (
            <Reveal key={label} delay={0.1}>
              <motion.a
                href={href}
                aria-label={ariaLabel}
                whileHover={{ y: -4, borderColor: "rgba(94,164,58,0.3)" }}
                className="block glass rounded-2xl p-6 border border-white/5 text-center transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 group-hover:bg-brand-green/15 flex items-center justify-center mx-auto mb-4 transition-colors" aria-hidden="true">
                  <Icon size={20} className="text-brand-green" />
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase mb-1">{label}</div>
                <div className="text-white/80 text-sm group-hover:text-white transition-colors">{value}</div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Trust Statistics Cards */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto mb-12">
            {[
              { icon: Star, stat: "10000+", label: "Homes Automated" },
              { icon: Award, stat: "10+", label: "Years Industry Experience" },
              { icon: Clock, stat: "24/7", label: "Customer Support" },
              { icon: Shield, stat: "2 Years", label: "Official Product Warranty" },
              { icon: CheckCircle, stat: "Certified", label: "Installation Experts" },
            ].map(({ icon: Icon, stat, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + Math.random() * 0.1 }}
                className="glass rounded-2xl p-4 border border-white/5 text-center"
              >
                <Icon size={16} className="text-brand-green mx-auto mb-2" aria-hidden="true" />
                <div className="text-white/80 text-sm font-medium">{stat}</div>
                <div className="text-white/30 text-[10px] font-light">{label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.3}>
          <div className="text-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(94,164,58,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green hover:bg-brand-green-dark text-white font-medium text-base rounded-full transition-all duration-300"
              aria-label="Book your free smart home consultation"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Book Your Free Smart Home Consultation
            </motion.a>
            
            <div className="mt-4">
              <motion.a
                href="/services"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm font-light transition-all duration-300 group"
                aria-label="Explore smart home solutions"
              >
                Explore Smart Home Solutions 
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
              {[
                "Free Site Visit",
                "Professional Installation",
                "Smart Home Design",
                "After-Sales Support",
                "PAN India Delivery",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-white/25 text-xs font-light">
                  <CheckCircle size={12} className="text-brand-green" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cities */}
        <Reveal delay={0.4}>
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-white/20 text-xs font-light uppercase tracking-wider mb-3">
              Serving Homeowners, Architects, Builders, and Interior Designers Across
            </p>
            <p className="text-white/25 text-sm font-light leading-relaxed">
              {cities.map((city, index) => (
                <span key={city}>
                  {city}
                  {index < cities.length - 1 && " • "}
                </span>
              ))}
              <span className="text-white/20"> and expanding across India.</span>
            </p>
          </div>
        </Reveal>

        {/* Google Review Card */}
        <Reveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-md mx-auto mt-8 glass rounded-2xl p-6 border border-white/5 text-center"
          >
            <div className="flex justify-center mb-2" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-white/60 text-sm font-light">
              Trusted by homeowners across South India
            </p>
            <p className="text-white/30 text-xs font-light mt-1">
              Premium Smart Home Automation Solutions
            </p>
          </motion.div>
        </Reveal>

        {/* Bottom - Original city text (updated) */}
        <Reveal delay={0.3}>
          <p className="text-white/15 text-xs font-light mt-8 text-center">
            SmartLiv Smart Home Automation — Guntur • onagle • Tirupati  • Vijayawada • Hyderabad • Bangalore • Chennai
          </p>
        </Reveal>
      </div>
    </section>
  );
}