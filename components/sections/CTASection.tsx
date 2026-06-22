"use client";

import { motion } from "framer-motion";
import { Reveal } from "../ui/Motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="enquire" className="bg-[#050505] py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/4 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-brand-green/3 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <p className="text-brand-green text-sm tracking-widest uppercase font-light mb-6">
              Ready to Begin
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-headline font-thin text-white mb-6">
              Transform your home.{" "}
              <span className="text-white/35">Start today.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Book a free home consultation. Our design team will create a room-by-room 
              SmartLiv plan tailored to your space, style, and budget.
            </p>
          </Reveal>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { icon: Phone, label: "Call Us", value: "+91 9248123456", href: "tel:+919248123456" },
            { icon: Mail, label: "Email", value: "hello@smartliv.in", href: "mailto:hello@smartliv.in" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat Now", href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <Reveal key={label} delay={0.1}>
              <motion.a
                href={href}
                whileHover={{ y: -4, borderColor: "rgba(94,164,58,0.3)" }}
                className="block glass rounded-2xl p-6 border border-white/5 text-center transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 group-hover:bg-brand-green/15 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Icon size={20} className="text-brand-green" />
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase mb-1">{label}</div>
                <div className="text-white/80 text-sm group-hover:text-white transition-colors">{value}</div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Primary CTA */}
        <Reveal delay={0.3}>
          <div className="text-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(94,164,58,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green hover:bg-brand-green-dark text-white font-medium text-base rounded-full transition-all duration-300"
            >
              <MessageCircle size={18} />
              Book a Free Home Consultation
            </motion.a>
            <p className="text-white/20 text-sm font-light mt-4">
              Available in Guntur · ongole · Tirupati · Vijayawada · Hyderabad· Bangalore · Chennai · Vizag
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
