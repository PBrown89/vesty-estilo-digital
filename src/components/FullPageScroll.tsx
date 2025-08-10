
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface FullPageScrollProps {
  children: React.ReactNode[];
  className?: string;
  onProblemSectionScroll?: (direction: 'up' | 'down') => boolean;
  onHowItWorksSectionScroll?: (direction: 'up' | 'down') => boolean;
  isProblemSectionActive?: boolean;
  isHowItWorksSectionActive?: boolean;
  onSectionChange?: (section: number) => void;
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ 
  children, 
  className = '', 
  onProblemSectionScroll,
  onHowItWorksSectionScroll,
  isProblemSectionActive = false,
  isHowItWorksSectionActive = false,
  onSectionChange
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const lastWheelTime = useRef(0);
  const lastTouchTime = useRef(0);

  const totalSections = children.length;

  const goToSection = useCallback((sectionIndex: number) => {
    if (isTransitioning || sectionIndex < 0 || sectionIndex >= totalSections || sectionIndex === currentSection) {
      return;
    }

    setIsTransitioning(true);
    setCurrentSection(sectionIndex);
    onSectionChange?.(sectionIndex);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [currentSection, totalSections, isTransitioning, onSectionChange]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isTransitioning) return;

    const now = Date.now();
    if (now - lastWheelTime.current < 300) return; // Throttle
    lastWheelTime.current = now;

    const direction = e.deltaY > 0 ? 'down' : 'up';

    // Delegate to section-specific handlers first
    if (isProblemSectionActive && onProblemSectionScroll) {
      const handled = onProblemSectionScroll(direction);
      if (handled) {
        e.preventDefault();
        return;
      }
    }

    if (isHowItWorksSectionActive && onHowItWorksSectionScroll) {
      const handled = onHowItWorksSectionScroll(direction);
      if (handled) {
        e.preventDefault();
        return;
      }
    }

    // Only handle and prevent default when navigating between sections
    if (direction === 'down' && currentSection < totalSections - 1) {
      e.preventDefault();
      goToSection(currentSection + 1);
    } else if (direction === 'up' && currentSection > 0) {
      e.preventDefault();
      goToSection(currentSection - 1);
    } // else: at bounds, allow native scroll
  }, [currentSection, goToSection, isTransitioning, isProblemSectionActive, onProblemSectionScroll, isHowItWorksSectionActive, onHowItWorksSectionScroll, totalSections]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isTransitioning) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown': {
        if (isProblemSectionActive && onProblemSectionScroll) {
          const handled = onProblemSectionScroll('down');
          if (handled) {
            e.preventDefault();
            return;
          }
        }
        if (isHowItWorksSectionActive && onHowItWorksSectionScroll) {
          const handled = onHowItWorksSectionScroll('down');
          if (handled) {
            e.preventDefault();
            return;
          }
        }
        if (currentSection < totalSections - 1) {
          e.preventDefault();
          goToSection(currentSection + 1);
        }
        break;
      }
      case 'ArrowUp':
      case 'PageUp': {
        if (isProblemSectionActive && onProblemSectionScroll) {
          const handled = onProblemSectionScroll('up');
          if (handled) {
            e.preventDefault();
            return;
          }
        }
        if (isHowItWorksSectionActive && onHowItWorksSectionScroll) {
          const handled = onHowItWorksSectionScroll('up');
          if (handled) {
            e.preventDefault();
            return;
          }
        }
        if (currentSection > 0) {
          e.preventDefault();
          goToSection(currentSection - 1);
        }
        break;
      }
      case 'Home':
        e.preventDefault();
        goToSection(0);
        break;
      case 'End':
        e.preventDefault();
        goToSection(totalSections - 1);
        break;
    }
  }, [currentSection, goToSection, isTransitioning, totalSections, isProblemSectionActive, onProblemSectionScroll, isHowItWorksSectionActive, onHowItWorksSectionScroll]);

  // Mobile touch handling
  const [touchStart, setTouchStart] = useState<{ y: number; time: number } | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({
      y: touch.clientY,
      time: Date.now()
    });
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStart || isTransitioning) return;
    
    const touch = e.changedTouches[0];
    const deltaY = touchStart.y - touch.clientY;
    const deltaTime = Date.now() - touchStart.time;
    const velocity = Math.abs(deltaY) / deltaTime;
    
    setTouchStart(null);
    
    const now = Date.now();
    if (now - lastTouchTime.current < 500) return; // Throttle
    lastTouchTime.current = now;
    
    // Check if it's a valid swipe (minimum distance and velocity) - more permissive for mobile
    if (Math.abs(deltaY) > 30 && velocity > 0.1) {
      const direction = deltaY > 0 ? 'down' : 'up';
      
      // If we're in the problem section and have a handler, use it
      if (isProblemSectionActive && onProblemSectionScroll) {
        const handled = onProblemSectionScroll(direction);
        if (handled) {
          e.preventDefault();
          return; // Problem section handled the scroll
        }
      }
  
      // If we're in the how it works section and have a handler, use it
      if (isHowItWorksSectionActive && onHowItWorksSectionScroll) {
        const handled = onHowItWorksSectionScroll(direction);
        if (handled) {
          e.preventDefault();
          return; // How it works section handled the scroll
        }
      }
  
      // Normal section navigation, only prevent default when switching sections
      if (direction === 'down' && currentSection < totalSections - 1) {
        e.preventDefault();
        goToSection(currentSection + 1);
      } else if (direction === 'up' && currentSection > 0) {
        e.preventDefault();
        goToSection(currentSection - 1);
      }
      // else: at bounds, allow native scroll
    }
  }, [touchStart, isTransitioning, currentSection, goToSection, isProblemSectionActive, onProblemSectionScroll, isHowItWorksSectionActive, onHowItWorksSectionScroll, totalSections]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    
    if (isMobile) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      if (isMobile) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [handleWheel, handleKeyDown, handleTouchStart, handleTouchEnd, isMobile]);

  // Both mobile and desktop: full-page scroll
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
