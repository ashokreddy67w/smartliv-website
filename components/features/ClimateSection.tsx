    // components/features/ClimateSection.tsx
    'use client'

    import { motion } from 'framer-motion'
    import Image from 'next/image'
    import { Thermometer, Wind, Clock, Sparkles } from 'lucide-react'
    import { Reveal, StaggerChildren, StaggerItem } from '@/components/ui/Motion'

    const features = [
    { icon: Thermometer, label: 'AC Control' },
    { icon: Wind, label: 'Fan Controller' },
    { icon: Clock, label: 'Temperature Scheduling' },
    { icon: Sparkles, label: 'Smart Climate Scenes' },
    ]

    export default function ClimateSection() {
    return (
        <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <div>
                <Reveal>
                <p className="text-[#5EA43A] text-sm tracking-widest uppercase font-light mb-4">
                    Feature
                </p>
                </Reveal>
                <Reveal delay={0.1}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Comfort That <br />
                    <span className="text-white/40">Thinks Ahead</span>
                </h2>
                </Reveal>
                <Reveal delay={0.2}>
                <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                    Your home anticipates your comfort. Intelligent climate control
                    ensures the perfect temperature in every room, exactly when you need it.
                </p>
                </Reveal>

                <StaggerChildren staggerDelay={0.08}>
                <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                    <StaggerItem key={index}>
                        <motion.div
                        whileHover={{ y: -4 }}
                        className="p-5 rounded-2xl border border-white/5 hover:border-[#5EA43A]/20 transition-all text-center group bg-white/5 hover:bg-white/10"
                        >
                        <feature.icon className="w-8 h-8 mx-auto text-[#5EA43A]/60 group-hover:text-[#5EA43A] transition-colors mb-2" />
                        <span className="text-white/70 text-sm font-light group-hover:text-white transition-colors">
                            {feature.label}
                        </span>
                        </motion.div>
                    </StaggerItem>
                    ))}
                </div>
                </StaggerChildren>
            </div>

            {/* Image */}
            <Reveal direction="right">
                <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
                >
                <div className="relative aspect-[4/3] w-full">
                    <Image
                    src="/images/features/climate.jpg"
                    alt="Climate Control"
                    fill
                    className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                </motion.div>
            </Reveal>
            </div>
        </div>
        </section>
    )
    }