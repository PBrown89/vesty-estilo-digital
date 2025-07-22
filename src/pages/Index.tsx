
import { useState } from "react";
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
  const [problemSectionHandler, setProblemSectionHandler] = useState<((direction: 'up' | 'down') => boolean) | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionScroll = (handler: (direction: 'up' | 'down') => boolean) => {
    setProblemSectionHandler(() => handler);
  };

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
  };

  return (
    <FullPageScroll 
      onProblemSectionScroll={problemSectionHandler || undefined}
      isProblemSectionActive={currentSection === 2}
      onSectionChange={handleSectionChange}
    >
      <Hero />
      <AppStores />
      <Problem onSectionScroll={handleSectionScroll} isActive={currentSection === 2} />
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
