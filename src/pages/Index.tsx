
import React, { useState } from "react";
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
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
  };

  // Problem section scroll handler
  const handleProblemSectionScroll = (direction: 'up' | 'down') => {
    const problemSection = document.querySelector('[data-problem-section]');
    if (problemSection) {
      // @ts-ignore
      const handler = problemSection.scrollHandler;
      if (handler) {
        return handler(direction);
      }
    }
    return false;
  };

  // How it works section scroll handler
  const handleHowItWorksSectionScroll = (direction: 'up' | 'down') => {
    const videoSection = document.querySelector('[data-video-section]');
    if (videoSection) {
      // @ts-ignore
      const handler = videoSection.scrollHandler;
      if (handler) {
        return handler(direction);
      }
    }
    return false;
  };

  return (
    <FullPageScroll 
      onProblemSectionScroll={handleProblemSectionScroll}
      onHowItWorksSectionScroll={handleHowItWorksSectionScroll}
      isProblemSectionActive={currentSection === 2}
      isHowItWorksSectionActive={currentSection === 3}
      onSectionChange={handleSectionChange}
    >
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
