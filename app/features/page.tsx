// app/features/page.tsx
import { Metadata } from 'next'
import HeroSection from '@/components/features/HeroSection'
import InteractiveVilla from '@/components/features/InteractiveVilla'
import FeatureBentoGrid from '@/components/features/FeatureBentoGrid'
import StickyScrollStory from '@/components/features/StickyScrollStory'
import SmartScenesiPhone from '@/components/features/SmartScenesiPhone'
import ComparisonSection from '@/components/features/ComparisonSection'
import EcosystemSection from '@/components/features/EcosystemSection'
import SmartAppSection from '@/components/features/SmartAppSection'
import VoiceControlSection from '@/components/features/VoiceControlSection'
import InstallationTimeline from '@/components/features/InstallationTimeline'

import FinalCTA from '@/components/features/FinalCTA'

export const metadata: Metadata = {
  title: 'Smart Liv Features | Premium Home Automation',
  description: 'Experience intelligent lighting, security, entertainment, climate control and automation—all working together beautifully.',
}

export default function FeaturesPage() {
  return (
    <main className="bg-[#050505] overflow-x-hidden">
      <HeroSection />
      <InteractiveVilla />
      <FeatureBentoGrid />
      <StickyScrollStory />
      <SmartScenesiPhone />
      <ComparisonSection />
      <EcosystemSection />
      <SmartAppSection />
      <VoiceControlSection />
      <InstallationTimeline />
     
      <FinalCTA />
    </main>
  )
}