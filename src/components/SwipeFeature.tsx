
import { useState } from 'react';
import { useInView } from "react-intersection-observer";
const SwipeFeature = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);
  const [animationType, setAnimationType] = useState<'like' | 'dislike' | null>(null);
  const [showHearts, setShowHearts] = useState(false);
  const [nextActionIsLike, setNextActionIsLike] = useState(true);
  const cards = [{
    id: 1,
    image: "/lovable-uploads/cf705711-ff72-4b82-b72e-e2e6541c967f.png",
    color: "bg-yellow-100"
  }, {
    id: 2,
    image: "/lovable-uploads/84ab8ed5-13f9-4248-89fd-f2163104013e.png",
    color: "bg-green-100"
  }, {
    id: 3,
    image: "/lovable-uploads/281504be-8d09-46c7-af41-d1edf7d40d62.png",
    color: "bg-blue-100"
  }];
  const handleLike = () => {
    setAnimationType('like');
    setAnimatingCard(currentCardIndex);
    setShowHearts(true);
    setTimeout(() => {
      setCurrentCardIndex(prev => (prev + 1) % cards.length);
      setAnimatingCard(null);
      setAnimationType(null);
      setShowHearts(false);
    }, 800);
  };
  const handleDislike = () => {
    setAnimationType('dislike');
    setAnimatingCard(currentCardIndex);
    setTimeout(() => {
      setCurrentCardIndex(prev => (prev + 1) % cards.length);
      setAnimatingCard(null);
      setAnimationType(null);
    }, 800);
  };
  const handleCardClick = () => {
    if (animatingCard !== null) return;
    if (nextActionIsLike) {
      handleLike();
    } else {
      handleDislike();
    }
    setNextActionIsLike(!nextActionIsLike);
  };
  const getCardStyle = (index: number) => {
    const isAnimating = animatingCard === index;
    const isCurrent = index === currentCardIndex;
    const isNext = index === (currentCardIndex + 1) % cards.length;
    const isPrevious = index === (currentCardIndex + 2) % cards.length;
    if (isAnimating) {
      if (animationType === 'like') {
        return {
          transform: 'translateX(100px) rotate(20deg)',
          opacity: 0.7,
          zIndex: 10
        };
      } else if (animationType === 'dislike') {
        return {
          transform: 'translateX(-100px) rotate(-20deg)',
          opacity: 0.7,
          zIndex: 10
        };
      }
    }
    if (isCurrent && !isAnimating) {
      return {
        transform: 'translateX(0) rotate(0deg) scale(1)',
        zIndex: 3,
        opacity: 1
      };
    } else if (isNext) {
      return {
        transform: 'translateX(5px) rotate(-2deg) scale(0.95)',
        zIndex: 2,
        opacity: 0.8
      };
    } else if (isPrevious) {
      return {
        transform: 'translateX(-5px) rotate(1deg) scale(0.9)',
        zIndex: 1,
        opacity: 0.6
      };
    }
    return {
      transform: 'translateX(0) rotate(0deg) scale(0.85)',
      zIndex: 0,
      opacity: 0.3
    };
  };

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: mockupRef, inView: mockupInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return <section id="funciones" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Contenido */}
          <div 
            ref={contentRef}
            className={`w-full lg:w-1/2 space-y-6 text-center lg:text-left transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Swipea para encontrar ropa que vibra contigo.
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Descubre nuevas prendas de forma rápida, divertida y sin esfuerzo.
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Di sí, di no, y deja que Vesty aprenda de ti para mostrarte exactamente lo que va con tu estilo.
              </p>
              
            </div>
          </div>

          {/* Mockup */}
          <div 
            ref={mockupRef}
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ease-out ${
              mockupInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{transitionDelay: mockupInView ? '200ms' : '0ms'}}
          >
            <img 
              src="/lovable-uploads/f011518d-ac62-4e1b-9472-9eaf660a07c3.png" 
              alt="App mockup interface" 
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default SwipeFeature;
