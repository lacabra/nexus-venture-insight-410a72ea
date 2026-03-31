import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SharedCockpitSection from "@/components/landing/SharedCockpitSection";
import ProblemSection from "@/components/landing/ProblemSection";

import HowItWorksSection from "@/components/landing/HowItWorksSection";
import MetricsSection from "@/components/landing/MetricsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ProductSection from "@/components/landing/ProductSection";
import ClosingSection from "@/components/landing/ClosingSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <SharedCockpitSection />
      <ProblemSection />
      <FrameworkSection />
      <HowItWorksSection />
      <MetricsSection />
      <AudienceSection />
      <ProductSection />
      <ClosingSection />
    </main>
    <Footer />
  </>
);

export default Index;
