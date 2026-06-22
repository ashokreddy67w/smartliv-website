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
                src="/images/interior/living-room.png"
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
                src="/images/interior/switch-closeup.png"
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
                Designed for Your Interior
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-8 text-headline font-thin leading-tight text-white">
                Crafted to Complement{" "}
                <span className="text-white/35">
                  Your Interior
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-6 text-lg font-light leading-8 text-white/60">
                Interior designers specify SmartLiv because it never compromises
                their vision. Its ultra-slim profile—just 8.2mm proud of the
                wall—blends effortlessly into any aesthetic, from exposed
                concrete to premium marble finishes.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-12 text-base font-light leading-8 text-white/40">
                Whether your home embraces modern minimalism, timeless elegance,
                or contemporary luxury, SmartLiv switches remain beautifully
                understated until the moment you need them.
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