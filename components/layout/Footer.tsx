"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Products: [
    "Touch Switches",
    "Dimmer Modules",
    "Fan Controllers",
    "Scene Controllers",
    "Security Panels",
    "Smart Curtains",
  ],
  Solutions: [
    "Residential",
    "Villas & Bungalows",
    "Apartments",
    "Commercial Spaces",
    "Hospitality",
    "Builder Projects",
  ],
  Company: [
    "About SmartLiv",
    "Our Technology",
    "Partnerships",
    "Press & Media",
    "Careers",
    "Blog",
  ],
  Support: [
    "Installation Guide",
    "FAQs",
    "Warranty",
    "Service Request",
    "Find a Dealer",
    "Contact Us",
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-brand-green flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-white font-medium text-xl tracking-tight">
                Smart<span className="text-brand-green">Liv</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Premium smart home automation crafted for modern Indian homes. 
              Where intelligent technology meets luxury design.
            </p>
            <div className="space-y-3">
              <a href="tel:+919248123456" className="flex items-center gap-3 text-white/40 hover:text-white/70 text-sm transition-colors">
                <Phone size={14} className="text-brand-green" />
                +91 9248 123456
              </a>
              <a href="mailto:hello@smartliv.in" className="flex items-center gap-3 text-white/40 hover:text-white/70 text-sm transition-colors">
                <Mail size={14} className="text-brand-green" />
                hello@smartliv.in
              </a>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={14} className="text-brand-green mt-0.5 shrink-0" />
                 Guntur · ongole · Tirupati · Vijayawada · Hyderabad· Bangalore · Chennai · Vizag
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/80 text-sm font-medium mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-white/70 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2025 SmartLiv Smart Home Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
