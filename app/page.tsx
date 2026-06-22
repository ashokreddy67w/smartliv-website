import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductIntroSection from "@/components/sections/ProductIntroSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import AppSection from "@/components/sections/AppSection";
import InteriorSection from "@/components/sections/InteriorSection";
import ColourSection from "@/components/sections/ColourSection";
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import CustomIconsSection from "@/components/sections/CustomIconsSection";
import ModuleSection from "@/components/sections/ModuleSection";
import InstallationSection from "@/components/sections/InstallationSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProductIntroSection />
      <ComparisonSection />
      <AppSection />
      <InteriorSection />
      <ColourSection />
      <WorkspaceSection />
      <CustomIconsSection />
      {/* <ModuleSection /> */}
      <InstallationSection />
      <EcosystemSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
