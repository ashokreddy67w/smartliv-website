
// components/app/AppCTA.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AppCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-24 border-t border-white/10 pt-16"
    >
      <div className="mx-auto max-w-5xl text-center">

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          SMARTLIV MOBILE APP
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Control Your Home
          <span className="block text-primary">
            Anytime. Anywhere.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Download the SmartLiv App and control your smart home from anywhere.
          Manage lighting, CCTV, digital locks, curtains, AC, home theater,
          security, and automation with a single app.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.abhee.smart&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Image
              src="/images/google-play-badge.webp"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>

          {/* Apple App Store */}
          <a
            href="https://apps.apple.com/in/app/smart-liv/id6550908415
Smart Liv"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Image
              src="/images/google-play-badge.webp"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>

          {/* WhatsApp Consultation */}
          <a
            href="https://wa.me/919248123456?text=Hi%20SmartLiv,%20I%20would%20like%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-3.5 font-semibold text-[#0B1F38] shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            Book Consultation
          </a>

        </div>

        {/* Footer Text */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          Available on Google Play
          <span className="mx-2">•</span>
          Available on the App Store
        </div>

      </div>
    </motion.section>
  );
}

