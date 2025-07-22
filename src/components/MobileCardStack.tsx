
import { useState, useEffect, useRef } from 'react';

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
  problem: string;
  story: string;
}

interface MobileCardStackProps {
  people: Person[];
  onAllCardsDiscarded: () => void;
}

const MobileCardStack: React.FC<MobileCardStackProps> = ({ people, onAllCardsDiscarded }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<{ y: number; time: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const remainingCards = people.slice(currentCardIndex);
  const isComplete = currentCardIndex >= people.length;

  useEffect(() => {
    if (isComplete) {
      onAllCardsDiscarded();
    }
  }, [isComplete, onAllCardsDiscarded]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating || isComplete) return;
    
    const touch = e.touches[0];
    setTouchStart({
      y: touch.clientY,
      time: Date.now()
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || isAnimating || isComplete) return;
    
    const touch = e.touches[0];
    const deltaY = touchStart.y - touch.clientY;
    
    // Prevent default scroll behavior during swipe
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || isAnimating || isComplete) return;
    
    const touch = e.changedTouches[0];
    const deltaY = touchStart.y - touch.clientY;
    const deltaTime = Date.now() - touchStart.time;
    const velocity = Math.abs(deltaY) / deltaTime;
    
    setTouchStart(null);
    
    // Check if it's a valid swipe up (minimum distance and velocity)
    if (deltaY > 50 && velocity > 0.3) {
      discardCurrentCard();
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (isAnimating || isComplete) return;
    
    e.preventDefault();
    
    if (e.deltaY > 0) {
      discardCurrentCard();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isAnimating, isComplete]);

  const discardCurrentCard = () => {
    if (isAnimating || isComplete) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentCardIndex(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  if (isComplete) {
    return null;
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-80 h-96"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {remainingCards.map((person, index) => {
          const isTopCard = index === 0;
          const zIndex = remainingCards.length - index;
          const offset = Math.min(index * 4, 16);
          
          return (
            <div
              key={`${person.id}-${currentCardIndex}`}
              className={`absolute inset-0 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg transition-all duration-300 ${
                isTopCard && isAnimating ? 'opacity-0 translate-y-[-100vh]' : 'opacity-100'
              }`}
              style={{
                zIndex,
                transform: `translateY(${offset}px) scale(${1 - index * 0.03})`,
                filter: index > 0 ? 'brightness(0.9)' : 'brightness(1)'
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold font-outfit text-gray-800 text-lg">
                    {person.name}
                  </h3>
                  <p className="text-gray-500 font-inter text-sm">
                    {person.age} años
                  </p>
                </div>
              </div>
              <p className="font-inter text-gray-600 italic leading-relaxed">
                "{person.problem}"
              </p>
            </div>
          );
        })}
      </div>

      {/* Swipe indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
        <div className="animate-bounce mb-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <p className="text-sm font-inter">Desliza hacia arriba</p>
        <p className="text-xs font-inter text-gray-400">
          {remainingCards.length} de {people.length}
        </p>
      </div>
    </div>
  );
};

export default MobileCardStack;
