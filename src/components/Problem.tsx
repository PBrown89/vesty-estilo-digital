import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileCardStack from "./MobileCardStack";
const Problem = ({
  onSectionScroll,
  isActive
}: {
  onSectionScroll?: (handler: (direction: 'up' | 'down') => boolean) => void;
  isActive?: boolean;
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const people = [{
    id: 1,
    name: "Carmen",
    age: 28,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    problem: "Nunca sé que ponerme los días de trabajo",
    story: "Carmen es una profesional que trabaja en marketing. Cada mañana se levanta 20 minutos antes solo para decidir qué ponerse. Su armario está lleno de ropa que compró con ilusión pero que nunca sabe cómo combinar. Desde que usa Vesty, tiene outfits predefinidos para cada día de la semana y puede dormir esos 20 minutos extra.",
    position: {
      top: "15%",
      left: "5%",
      rotation: "-6deg"
    }
  }, {
    id: 2,
    name: "María",
    age: 24,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face",
    problem: "Al no tener tiempo siempre pillo lo primero que veo",
    story: "María estudia y trabaja a tiempo parcial. Sus mañanas son una carrera contra el reloj y siempre termina poniéndose lo mismo. Con Vesty, puede planificar sus outfits la noche anterior y tener todo listo para salir corriendo por la mañana con estilo.",
    position: {
      top: "45%",
      left: "12%",
      rotation: "8deg"
    }
  }, {
    id: 3,
    name: "Ana",
    age: 32,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop&crop=face",
    problem: "Nunca soy capaz de verme bien en el espejo",
    story: "Ana perdió confianza en su estilo después de la maternidad. Su cuerpo cambió y siente que nada le queda como antes. Vesty le ayudó a redescubrir qué prendas la favorecen y cómo combinarlas para sentirse segura y hermosa cada día.",
    position: {
      top: "8%",
      left: "28%",
      rotation: "3deg"
    }
  }, {
    id: 4,
    name: "Laura",
    age: 26,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
    problem: "Ojalá fuera más sencillo combinar la ropa, me resulta imposible",
    story: "Laura siempre se consideró 'mala para la moda'. Ve a otras mujeres con outfits increíbles y no entiende cómo lo hacen. Vesty le enseñó las reglas básicas de combinación y ahora puede crear looks que la hacen sentir como esas mujeres que admiraba.",
    position: {
      top: "60%",
      left: "25%",
      rotation: "4deg"
    }
  }, {
    id: 5,
    name: "Sofia",
    age: 30,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop&crop=face",
    problem: "Creo que me he puesto esta misma camiseta 3 veces esta semana",
    story: "Sofia tiene un armario lleno pero siempre recurre a las mismas 5 prendas cómodas. Se aburre de su estilo pero no sabe cómo salir de la rutina. Vesty le mostró cómo usar todas sus prendas de formas diferentes y ahora disfruta experimentando con su ropa.",
    position: {
      top: "25%",
      left: "48%",
      rotation: "-7deg"
    }
  }, {
    id: 6,
    name: "Elena",
    age: 27,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    problem: "Compro ropa pero luego no sé con qué combinarla",
    story: "Elena ama ir de compras pero sus nuevas prendas terminan con etiquetas en el armario. No sabe cómo integrarlas con lo que ya tiene. Vesty le enseñó a comprar de forma estratégica y a maximizar cada prenda de su guardarropa.",
    position: {
      top: "50%",
      left: "45%",
      rotation: "5deg"
    }
  }, {
    id: 7,
    name: "Claudia",
    age: 25,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop&crop=face",
    problem: "Mi estilo no refleja mi personalidad",
    story: "Claudia siempre sintió que su ropa no la representaba realmente. Quería verse más sofisticada pero no sabía cómo. Con Vesty descubrió su estilo personal y ahora se viste de manera que refleja su verdadera personalidad.",
    position: {
      top: "12%",
      left: "68%",
      rotation: "-5deg"
    }
  }, {
    id: 8,
    name: "Patricia",
    age: 35,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face",
    problem: "No sé si esto me queda bien o no",
    story: "Patricia constantemente dudaba de sus elecciones de vestimenta. Se probaba múltiples outfits antes de salir y aún así no estaba segura. Vesty le dio las herramientas para saber qué le favorece y ahora sale de casa con total confianza.",
    position: {
      top: "35%",
      left: "70%",
      rotation: "6deg"
    }
  }, {
    id: 9,
    name: "Isabella",
    age: 29,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
    problem: "Siempre voy vestida igual que mis amigas",
    story: "Isabella se sentía perdida en su grupo de amigas, todas se vestían muy parecido. Quería encontrar su propio estilo pero no sabía por dónde empezar. Vesty la ayudó a descubrir qué la hace única y cómo expresarlo a través de su ropa.",
    position: {
      top: "58%",
      left: "65%",
      rotation: "-4deg"
    }
  }, {
    id: 10,
    name: "Valentina",
    age: 23,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop&crop=face",
    problem: "Gasto mucho dinero en ropa que no uso",
    story: "Valentina compraba por impulso y su armario estaba lleno de prendas que usó una sola vez. No sabía cómo crear un guardarropa funcional. Vesty le enseñó a comprar de manera inteligente y a maximizar cada prenda.",
    position: {
      top: "18%",
      left: "85%",
      rotation: "8deg"
    }
  }, {
    id: 11,
    name: "Rocío",
    age: 31,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    problem: "No tengo tiempo para pensar en outfits",
    story: "Rocío es madre trabajadora y sus mañanas son un caos. No tiene tiempo para pensar en qué ponerse y siempre sale corriendo con lo primero que encuentra. Vesty le dio un sistema para tener outfits listos toda la semana.",
    position: {
      top: "42%",
      left: "88%",
      rotation: "-3deg"
    }
  }];
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const handleCardHover = (cardId: number) => {
    setHoveredCard(cardId);
  };
  const handleCardLeave = () => {
    setHoveredCard(null);
  };
  const handleCardAdvance = (direction: 'up' | 'down'): boolean => {
    if (!isMobile || isAnimating) return false;
    if (direction === 'down' && currentCardIndex < people.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCardIndex(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
      return true; // Handled
    }
    if (direction === 'up' && currentCardIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCardIndex(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
      return true; // Handled
    }
    return false; // Not handled, allow normal section navigation
  };

  // Pass the handler to parent via onSectionScroll prop
  useEffect(() => {
    if (onSectionScroll && isMobile && isActive) {
      // Update the parent's handler
      onSectionScroll(handleCardAdvance);
    }
  }, [onSectionScroll, isMobile, isActive, currentCardIndex, isAnimating]);
  const remainingCards = people.slice(currentCardIndex);
  const isComplete = currentCardIndex >= people.length;

  // Mobile and desktop experience
  return <>
      <section className="min-h-screen py-32 bg-white relative overflow-hidden flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center mb-20">
          <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
              Tablón de historias
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto mb-4">
              Pequeñas historias con las que quizás te sientas identificada
            </p>
          </div>
        </div>

        {isMobile ?
      // Mobile: Card stack layout
      <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-96">
              {remainingCards.map((person, index) => {
            const isTopCard = index === 0;
            const zIndex = remainingCards.length - index;
            const offset = Math.min(index * 4, 16);
            return <div key={`${person.id}-${currentCardIndex}`} className={`absolute inset-0 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg transition-all duration-300 ${isTopCard && isAnimating ? 'opacity-0 translate-y-[-100vh]' : 'opacity-100'}`} style={{
              zIndex,
              transform: `translateY(${offset}px) scale(${1 - index * 0.03})`,
              filter: index > 0 ? 'brightness(0.9)' : 'brightness(1)'
            }}>
                    <div className="flex items-start gap-4 mb-4">
                      <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full object-cover" />
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
                  </div>;
          })}
            </div>
            
            {/* Mobile swipe indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
              <div className="animate-bounce mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <p className="text-sm font-inter">Desliza hacia arriba</p>
              <p className="text-xs font-inter text-gray-400">
                {currentCardIndex + 1} de {people.length}
              </p>
            </div>
          </div> :
      // Desktop and Tablet: Messy bulletin board layout
      <div className="relative h-[600px] max-w-6xl mx-auto">
            {/* Pushpins for bulletin board effect */}
            <div className="absolute top-12 left-32 w-4 h-4 bg-pink-400 rounded-full shadow-lg transform rotate-12 z-10">
              <div className="absolute top-1 left-1 w-2 h-2 bg-pink-600 rounded-full"></div>
            </div>
            <div className="absolute top-20 right-40 w-4 h-4 bg-yellow-400 rounded-full shadow-lg transform -rotate-6 z-10">
              <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-600 rounded-full"></div>
            </div>
            <div className="absolute bottom-24 left-1/4 w-4 h-4 bg-blue-400 rounded-full shadow-lg transform rotate-45 z-10">
              <div className="absolute top-1 left-1 w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            
            {people.map((person, index) => {})}
          </div>}
      </section>
    </>;
};
export default Problem;