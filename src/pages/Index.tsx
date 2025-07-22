
import Hero from "@/components/Hero";
import AppStores from "@/components/AppStores";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import VirtualTryOn from "@/components/VirtualTryOn";
import SwipeFeature from "@/components/SwipeFeature";
import OutfitPlanner from "@/components/OutfitPlanner";
import Pricing from "@/components/Pricing";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import FinalCTA from "@/components/FinalCTA";
import FullPageScroll from "@/components/FullPageScroll";

const Index = () => {
  return (
    <FullPageScroll>
      <Hero />
      <AppStores />
      <Problem />
      <HowItWorks />
      <VirtualTryOn />
      <SwipeFeature />
      <OutfitPlanner />
      <Pricing />
      <AppDownloadCTA />
      <FinalCTA />
    </FullPageScroll>
  );
};

export default Index;
