
import Hero from "@/components/Hero";
import AppStores from "@/components/AppStores";
import Problem from "@/components/Problem";
import HowItWorksNew from "@/components/HowItWorksNew";
import VirtualTryOn from "@/components/VirtualTryOn";
import SwipeFeature from "@/components/SwipeFeature";
import OutfitPlanner from "@/components/OutfitPlanner";

import Pricing from "@/components/Pricing";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppStores />
      <Problem />
      <HowItWorksNew />
      <VirtualTryOn />
      <SwipeFeature />
      <OutfitPlanner />
      
      <Pricing />
      <AppDownloadCTA />
      <FinalCTA />
    </div>
  );
};

export default Index;
