
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface FullPageScrollProps {
  children: React.ReactNode[];
  className?: string;
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ children, className = '' }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const lastWheelTime = useRef(0);

  const totalSections = children.length;

  const goToSection = useCallback((sectionIndex: number) => {
    if (isTransitioning || sectionIndex < 0 || sectionIndex >= totalSections || sectionIndex === currentSection) {
      return;
    }

    setIsTransitioning(true);
    setCurrentSection(sectionIndex);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [currentSection, totalSections, isTransitioning]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isMobile || isTransitioning) return;

    e.preventDefault();
    
    const now = Date.now();
    if (now - lastWheelTime.current < 300) return; // Throttle
    lastWheelTime.current = now;

    if (e.deltaY > 0) {
      // Scroll down
      goToSection(currentSection + 1);
    } else {
      // Scroll up
      goToSection(currentSection - 1);
    }
  }, [currentSection, goToSection, isMobile, isTransitioning]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isMobile || isTransitioning) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        goToSection(currentSection + 1);
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        goToSection(currentSection - 1);
        break;
      case 'Home':
        e.preventDefault();
        goToSection(0);
        break;
      case 'End':
        e.preventDefault();
        goToSection(totalSections - 1);
        break;
    }
  }, [currentSection, goToSection, isMobile, isTransitioning, totalSections]);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown, isMobile]);

  // Mobile: render normally with special handling for Problem section
  if (isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // Desktop: full-page scroll
  return (
    <div 
      ref={containerRef}
      className={`${className} relative overflow-hidden`}
      style={{ height: '100vh' }}
    >
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${totalSections * 100}vh`
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="h-screen w-full flex flex-col"
            style={{ height: '100vh' }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-vesty-purple scale-125'
                : 'bg-muted border border-border hover:bg-accent'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div
          className="h-full bg-vesty-purple transition-all duration-700 ease-in-out"
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default FullPageScroll;
