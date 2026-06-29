"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Shield,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Trust badges
const trustBadges = [
  { label: "10-Year Warranty", icon: Shield },
  { label: "BIS Certified", icon: CheckCircle },
  { label: "Alexa Compatible", icon: "🎙️" },
  { label: "Google Home", icon: "🔊" },
  { label: "Apple Siri", icon: "📱" },
];

// Social links
const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

// Footer links data
const footerLinks = {
  Products: [
    { name: "Smart Touch Switches", href: "/products/smart-touch-switches" },
    { name: "Smart Door Locks", href: "/products/smart-door-locks" },
    { name: "Smart Lighting", href: "/products/smart-lighting" },
    { name: "Smart Curtains", href: "/products/smart-curtain-automation" },
    { name: "Home Theatre", href: "/products/home-theatre-automation" },
    { name: "CCTV & Security", href: "/products/security-systems" },
  ],
  Solutions: [
    { name: "Luxury Homes", href: "/solutions/luxury-homes" },
    { name: "Villas", href: "/solutions/villas" },
    { name: "Apartments", href: "/solutions/apartments" },
    { name: "Commercial Spaces", href: "/solutions/commercial-buildings" },
    { name: "Hotels", href: "/solutions/hotels" },
    { name: "Builders & Architects", href: "/solutions/builders-developers" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  Support: [
    { name: "Installation", href: "/installation-guide" },
    { name: "Downloads", href: "/downloads" },
    { name: "Warranty", href: "/warranty" },
    { name: "FAQs", href: "/faq" },
    { name: "Book Consultation", href: "/contact" },
    { name: "Dealer Network", href: "/dealer-network" },
  ],
};

// Mobile Accordion Component
function MobileAccordion({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-white/70 text-sm font-medium tracking-wide">{title}</span>
        {isOpen ? (
          <ChevronUp size={16} className="text-white/30" />
        ) : (
          <ChevronDown size={16} className="text-white/30" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <footer 
      className="bg-[#050505] border-t border-white/5"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-12 lg:py-16">
        {/* Desktop Grid - 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-brand-green flex items-center justify-center" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-white font-medium text-lg tracking-tight">
                Smart<span className="text-brand-green">Liv</span>
              </span>
            </div>
            
            <p className="text-white/35 text-xs leading-relaxed mb-5 max-w-xs font-light">
              Premium smart home automation for homes, villas, apartments, and commercial spaces across India.
            </p>
            
            <div className="space-y-2.5">
              <a 
                href="tel:+919248123456" 
                className="flex items-center gap-2.5 text-white/35 hover:text-white/70 text-xs transition-colors group"
                aria-label="Call SmartLiv at +91 9248 123456"
              >
                <Phone size={12} className="text-brand-green shrink-0" aria-hidden="true" />
                <span className="group-hover:text-white/70 transition-colors">+91 9248 123456</span>
              </a>
              <a 
                href="mailto:hello@smartliv.in" 
                className="flex items-center gap-2.5 text-white/35 hover:text-white/70 text-xs transition-colors group"
                aria-label="Email SmartLiv at hello@smartliv.in"
              >
                <Mail size={12} className="text-brand-green shrink-0" aria-hidden="true" />
                <span className="group-hover:text-white/70 transition-colors">hello@smartliv.in</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/35 text-xs">
                <Clock size={12} className="text-brand-green mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block">Mon–Sat, 9AM – 7PM</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-white/35 text-xs">
                <MapPin size={12} className="text-brand-green mt-0.5 shrink-0" aria-hidden="true" />
                <span> Guntur • onagle • Tirupati  • Vijayawada • Hyderabad • Bangalore • Chennai</span>
              </div>
              <a 
                href="/service-areas" 
                className="text-brand-green/60 hover:text-brand-green text-xs font-light transition-colors inline-block mt-1"
              >
                View All Service Locations →
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white/60 text-[10px] tracking-widest uppercase font-light mb-4">Products</h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.Products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/70 text-xs font-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white/60 text-[10px] tracking-widest uppercase font-light mb-4">Solutions</h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.Solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/70 text-xs font-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white/60 text-[10px] tracking-widest uppercase font-light mb-4">Company</h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/70 text-xs font-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-white/60 text-[10px] tracking-widest uppercase font-light mb-4">Support</h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.Support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/70 text-xs font-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden">
          {/* Brand Section - Always Visible */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-brand-green flex items-center justify-center" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-white font-medium text-lg tracking-tight">
                Smart<span className="text-brand-green">Liv</span>
              </span>
            </div>
            <p className="text-white/35 text-xs leading-relaxed mb-4 font-light">
              Premium smart home automation for homes, villas, apartments, and commercial spaces across India.
            </p>
            <div className="space-y-2">
              <a href="tel:+919248123456" className="flex items-center gap-2.5 text-white/35 text-xs">
                <Phone size={12} className="text-brand-green shrink-0" />
                +91 9248 123456
              </a>
              <a href="mailto:hello@smartliv.in" className="flex items-center gap-2.5 text-white/35 text-xs">
                <Mail size={12} className="text-brand-green shrink-0" />
                hello@smartliv.in
              </a>
              <div className="flex items-start gap-2.5 text-white/35 text-xs">
                <Clock size={12} className="text-brand-green mt-0.5 shrink-0" />
                <span>Mon–Sat, 9AM – 7PM</span>
              </div>
              <div className="flex items-start gap-2.5 text-white/35 text-xs">
                <MapPin size={12} className="text-brand-green mt-0.5 shrink-0" />
                <span>Hyderabad • Bangalore • Chennai • Vijayawada • Guntur</span>
              </div>
              <a href="/service-areas" className="text-brand-green/60 hover:text-brand-green text-xs font-light transition-colors inline-block mt-1">
                View All Service Locations →
              </a>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-0">
            {Object.entries(footerLinks).map(([title, links]) => (
              <MobileAccordion key={title} title={title}>
                <ul className="space-y-2.5" role="list">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/30 hover:text-white/70 text-xs font-light transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </MobileAccordion>
            ))}
          </div>
        </div>

        {/* Trust Strip */}
        <div className="border-t border-white/5 mt-10 pt-8 lg:mt-12 lg:pt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {trustBadges.map((badge) => (
              <span 
                key={badge.label} 
                className="flex items-center gap-1.5 text-white/25 hover:text-white/40 text-[11px] font-light transition-colors duration-200 px-3 py-1.5 rounded-full border border-white/5 bg-white/3"
              >
                {typeof badge.icon === 'string' ? (
                  <span className="text-xs">{badge.icon}</span>
                ) : (
                  <badge.icon size={10} className="text-brand-green" aria-hidden="true" />
                )}
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px] font-light order-2 md:order-1">
            © 2026 SmartLiv. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6 order-3 md:order-2">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a 
                key={item} 
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-white/20 hover:text-white/40 text-[11px] font-light transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3 order-1 md:order-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={`SmartLiv on ${label}`}
                className="text-white/20 hover:text-white/60 transition-all duration-200"
              >
                <Icon size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}