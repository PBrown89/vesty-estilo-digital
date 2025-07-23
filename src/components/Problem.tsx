import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Problem = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stories = [
    {
      id: 1,
      name: "María García",
      age: "23 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "10%", left: "15%", rotation: "-8deg", zIndex: 1 },
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b601?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ana López", 
      age: "27 años - Profesional",
      quote: "Cada mañana pierdo 20 minutos decidiendo qué ponerme para el trabajo...",
      position: { top: "50%", left: "18%", rotation: "6deg", zIndex: 2 },
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Carmen Ruiz",
      age: "25 años - Diseñadora", 
      quote: "Compro ropa nueva pero nunca la combino bien con lo que ya tengo...",
      position: { top: "25%", left: "30%", rotation: "4deg", zIndex: 3 },
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Laura Martín",
      age: "22 años - Estudiante",
      quote: "Me encanta la moda pero no sé cómo crear looks únicos con mi ropa...",
      position: { top: "5%", left: "45%", rotation: "-5deg", zIndex: 4 },
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Isabel Fernández",
      age: "29 años - Marketing",
      quote: "Siempre acabo poniéndome lo mismo porque no tengo ideas nuevas...",
      position: { top: "65%", left: "35%", rotation: "7deg", zIndex: 5 },
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Sofía Jiménez", 
      age: "26 años - Abogada",
      quote: "Necesito inspiración para combinar mi ropa de forma creativa...",
      position: { top: "40%", left: "52%", rotation: "-6deg", zIndex: 6 },
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Elena Torres",
      age: "24 años - Periodista",
      quote: "Quiero maximizar mi armario pero no sé cómo crear nuevos outfits...",
      position: { top: "15%", left: "65%", rotation: "5deg", zIndex: 7 },
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Patricia Vega",
      age: "28 años - Arquitecta", 
      quote: "Me gustaría tener más confianza en mis decisiones de estilo...",
      position: { top: "55%", left: "60%", rotation: "-4deg", zIndex: 8 },
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Cristina Moreno",
      age: "21 años - Estudiante",
      quote: "Veo outfits increíbles en redes pero no sé cómo adaptarlos a mi estilo...",
      position: { top: "30%", left: "75%", rotation: "8deg", zIndex: 9 },
      avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Rocío Herrera",
      age: "30 años - Consultora",
      quote: "Necesito optimizar mi tiempo matutino sin sacrificar mi estilo...",
      position: { top: "70%", left: "70%", rotation: "-7deg", zIndex: 10 },
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Handle card scrolling for mobile
  const handleCardScroll = (direction: 'up' | 'down') => {
    if (!isMobile) return false;
    
    if (direction === 'down' && currentCardIndex < 5) { // Changed from stories.length - 1 to 5 (6 cards total)
      setCurrentCardIndex(prev => prev + 1);
      return true; // Consume the scroll event
    } else if (direction === 'up' && currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      return true; // Consume the scroll event
    }
    
    return false; // Don't consume the scroll event
  };

  // Register with parent component for mobile only
  useEffect(() => {
    const problemSection = document.querySelector('[data-problem-section]');
    if (problemSection && isMobile) {
      // @ts-ignore
      problemSection.scrollHandler = handleCardScroll;
    } else if (problemSection && !isMobile) {
      // For desktop, remove any scroll handler to allow normal scrolling
      // @ts-ignore
      problemSection.scrollHandler = null;
    }
  }, [currentCardIndex, isMobile]);

  return (
    <section className="min-h-screen py-32 bg-white relative overflow-hidden flex flex-col justify-center mt-8 md:mt-0" data-problem-section>
      <div className="container mx-auto px-4 text-center mb-8 md:mb-20">
        <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
            Tablón de historias
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto mb-4">
            Pequeñas historias con las que quizás te sientas identificada
          </p>
        </div>
      </div>

      {/* Mobile Stack View */}
      {isMobile ? (
        <div className="relative h-[500px] w-full px-4 flex items-center justify-center">
          <div className="relative w-80 h-auto min-h-[320px]">
            {stories.slice(0, 6).map((story, index) => {
              const isActive = index === currentCardIndex;
              const isNext = index === currentCardIndex + 1;
              const isPrev = index === currentCardIndex - 1;
              
              let transform = 'translateX(100%) scale(0.8)';
              let opacity = 0;
              let zIndex = 1;
              
              if (isActive) {
                transform = 'translateX(0%) scale(1) rotate(0deg)';
                opacity = 1;
                zIndex = 10;
              } else if (isPrev) {
                transform = 'translateX(-100%) scale(0.8)';
                opacity = 0.3;
                zIndex = 5;
              } else if (isNext) {
                transform = 'translateX(50%) scale(0.9)';
                opacity = 0.6;
                zIndex = 8;
              }
              
              return (
                <div
                  key={story.id}
                  className="absolute top-0 left-0 w-full bg-white rounded-2xl p-6 border border-gray-200 shadow-lg transition-all duration-500 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    minHeight: 'fit-content'
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <img 
                      src={story.avatar} 
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold font-outfit text-gray-800 text-lg">
                        {story.name}
                      </h3>
                      <p className="text-gray-500 font-inter text-sm">
                        {story.age}
                      </p>
                    </div>
                  </div>
                  <p className="font-inter text-gray-600 italic leading-relaxed text-lg">
                    "{story.quote}"
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {stories.slice(0, 6).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCardIndex ? 'bg-purple-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Desktop Scattered View */
        <div className="relative h-[600px] w-full px-4">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`absolute bg-white rounded-2xl p-5 border border-gray-200 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:z-50 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                top: story.position.top,
                left: story.position.left,
                transform: `rotate(${story.position.rotation}) ${inView ? 'translateY(0)' : 'translateY(20px)'}`,
                transformOrigin: 'center center',
                transitionDelay: `${index * 100}ms`,
                width: '240px',
                zIndex: story.position.zIndex
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <img 
                  src={story.avatar} 
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold font-outfit text-gray-800 text-base">
                    {story.name}
                  </h3>
                  <p className="text-gray-500 font-inter text-sm">
                    {story.age}
                  </p>
                </div>
              </div>
              <p className="font-inter text-gray-600 italic leading-relaxed text-sm">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Problem;