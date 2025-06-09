
import { useState } from 'react';

const SwipeFeature = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);
  const [animationType, setAnimationType] = useState<'like' | 'dislike' | null>(null);
  const [showHearts, setShowHearts] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Vestido floral con carácter simple",
      image: "/lovable-uploads/47bf4978-5e16-4898-89b7-0d9c0033b6c7.png",
      color: "bg-yellow-100"
    },
    {
      id: 2,
      title: "Top verde con detalles únicos",
      image: "/lovable-uploads/3058937b-1b5d-432f-bf54-99c24ab7a678.png",
      color: "bg-green-100"
    },
    {
      id: 3,
      title: "Pantalón de rayas casual",
      image: "/lovable-uploads/41931d4c-1b40-4520-b2e4-ad97308720da.png",
      color: "bg-blue-100"
    }
  ];

  const handleLike = () => {
    setAnimationType('like');
    setAnimatingCard(currentCardIndex);
    setShowHearts(true);
    
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
      setAnimatingCard(null);
      setAnimationType(null);
      setShowHearts(false);
    }, 800);
  };

  const handleDislike = () => {
    setAnimationType('dislike');
    setAnimatingCard(currentCardIndex);
    
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
      setAnimatingCard(null);
      setAnimationType(null);
    }, 800);
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

  return (
    <section id="funciones" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido izquierdo */}
          <div className="space-y-6">
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
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Cada swipe te acerca a ese outfit que te representa sin que tengas que buscar entre miles de opciones.
              </p>
            </div>
          </div>

          {/* Contenido derecho - Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Imagen de fondo con las chicas - centrada */}
              <div className="w-80 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100 relative flex items-center justify-center">
                <img 
                  alt="Chicas usando la app" 
                  className="w-full h-full object-cover object-center" 
                  src="/lovable-uploads/3ccf15b8-11d2-4754-ad9e-3b1a7b62ab06.png" 
                />
                
                {/* Mockup del teléfono flotante */}
                <div className="absolute top-8 right-8 w-48 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Contenido del mockup */}
                  <div className="p-4 h-full flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="font-outfit font-bold text-gray-900">Match clothes</h3>
                    </div>
                    
                    {/* Stack de cartas */}
                    <div className="flex-1 relative">
                      {cards.map((card, index) => (
                        <div
                          key={card.id}
                          className={`absolute inset-0 ${card.color} rounded-2xl p-4 transition-all duration-500 ease-out cursor-pointer hover:scale-105`}
                          style={getCardStyle(index)}
                          onMouseEnter={() => {
                            if (index === currentCardIndex && !animatingCard) {
                              // Hover effect
                            }
                          }}
                        >
                          {/* Indicador de acción */}
                          {animatingCard === index && (
                            <div className="absolute top-2 right-2 z-10">
                              {animationType === 'like' ? (
                                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-inter font-bold">
                                  LIKE
                                </div>
                              ) : (
                                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-inter font-bold">
                                  DISLIKE
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Imagen de la prenda centrada */}
                          <div className="flex items-center justify-center h-32 mb-4">
                            <img 
                              src={card.image} 
                              alt={card.title}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          
                          <div className="text-center text-sm font-inter text-gray-600">
                            {card.title}
                          </div>
                        </div>
                      ))}
                      
                      {/* Corazones flotantes */}
                      {showHearts && (
                        <div className="absolute inset-0 pointer-events-none z-20">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute animate-bounce text-2xl"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 20}%`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '1s'
                              }}
                            >
                              💖
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Botones de acción */}
                    <div className="flex justify-center gap-4 mt-4">
                      <button 
                        onClick={handleDislike}
                        className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                        disabled={animatingCard !== null}
                      >
                        <span className="text-red-500 text-lg">✕</span>
                      </button>
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <span className="text-gray-500 text-lg">↺</span>
                      </button>
                      <button 
                        onClick={handleLike}
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                        disabled={animatingCard !== null}
                      >
                        <span className="text-green-500 text-lg">♡</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-purple-200 rounded-full border-dashed animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwipeFeature;
