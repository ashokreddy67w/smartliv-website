"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../ui/Motion";

export default function InteriorSection() {
  const specs = [
    { label: "Depth", value: "8.2mm" },
    { label: "Finish options", value: "12" },
    { label: "Gang sizes", value: "1–8" },
    { label: "IP Rating", value: "IP44" },
  ];

  return (
    <section id="design" className="bg-[#050505] py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
          
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-[520px] md:h-[650px] w-full overflow-hidden rounded-[32px]"
            >
              <Image
                src="/images/interior/living-room.webp"
                alt="Luxury Modern Living Room"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Floating Detail Image */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-8 -right-6 h-40 w-40 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-52 md:w-52"
            >
              <Image
                src="/images/interior/switch-closeup.webp"
                alt="SmartLiv Switch Closeup"
                fill
                sizes="220px"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <Reveal>
              <p className="mb-6 text-sm font-light uppercase tracking-[0.35em] text-brand-green">
               LUXURY SMART HOME DESIGN
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-8 text-headline font-thin leading-tight text-white">
             Premium Smart Home Design{" "}
                <span className="text-white/35">
                That Complements Every Interior
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-6 text-lg font-light leading-8 text-white/60">
               SmartLiv premium smart touch switches are designed to complement luxury homes, modern apartments, villas, offices, and commercial interiors. With an ultra-slim profile, premium glass finish, and minimalist design, every switch blends naturally into contemporary living spaces while delivering advanced smart home automation.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-12 text-base font-light leading-8 text-white/40">
               Whether you're building a new home or upgrading an existing one, SmartLiv combines elegant design with intelligent automation. Every switch is engineered to match premium interiors while providing seamless control of lighting, fans, curtains, appliances, and smart scenes.
              </p>
            </Reveal>

            {/* Specifications */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-5">
                {specs.map((spec) => (
                  <motion.div
                    key={spec.label}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/35">
                      {spec.label}
                    </p>
                    <p className="text-2xl font-light text-white">
                      {spec.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}