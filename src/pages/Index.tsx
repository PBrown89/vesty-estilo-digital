
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SwipeFeature from "@/components/SwipeFeature";
import OutfitPlanner from "@/components/OutfitPlanner";
import VirtualTryOn from "@/components/VirtualTryOn";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <SwipeFeature />
      <OutfitPlanner />
      <VirtualTryOn />
      <AppDownloadCTA />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  );
};

export default Index;
