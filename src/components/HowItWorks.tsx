
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [{
    number: "01",
    title: "Digitaliza tu armario",
    description: "Fotografía tus prendas y organízalas automáticamente. Vesty crea un catálogo visual de todo lo que tienes.",
    videoUrl: "https://youtube.com/shorts/jkFgKpD96zQ?feature=share",
    videoId: "jkFgKpD96zQ",
    bgColor: "from-pink-100 to-pink-200",
    iconBg: "bg-pink-500"
  }, {
    number: "02",
    title: "Crea o sugiere looks",
    description: "Recibe sugerencias personalizadas y planifica tus looks. Nunca más tendrás dudas sobre qué ponerte.",
    videoUrl: "https://youtube.com/shorts/WiRuukqJtps?feature=share",
    videoId: "WiRuukqJtps",
    bgColor: "from-yellow-100 to-orange-200",
    iconBg: "bg-orange-500"
  }, {
    number: "03",
    title: "Haz match con tu estilo",
    description: "Busca prendas que van con tu estilo y que realmente necesitas, pruébatelas y toma una decisión consciente y fundamentada.",
    videoUrl: "https://youtube.com/shorts/fDQRnUo4tQ8?feature=share",
    videoId: "fDQRnUo4tQ8",
    bgColor: "from-purple-100 to-purple-200",
    iconBg: "bg-purple-500"
  }];

  // Handle video scrolling for all devices
  const handleVideoScroll = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentVideoIndex < steps.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
      return true; // Consume the scroll event
    } else if (direction === 'up' && currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
      return true; // Consume the scroll event
    }
    
    return false; // Don't consume the scroll event, allow progression to next section
  };

  // Register scroll handler with parent component
  useEffect(() => {
    const videoSection = document.querySelector('[data-video-section]');
    if (videoSection) {
      // @ts-ignore
      videoSection.scrollHandler = handleVideoScroll;
    }
  }, [currentVideoIndex]);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white" data-video-section>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div 
          ref={headerRef} 
          className={`text-center mb-12 lg:mb-20 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 lg:mb-6">
            Cómo funciona
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tres pasos simples para transformar tu relación con la moda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile Stack View */}
          {isMobile ? (
            <div className="relative h-[500px] w-full flex justify-center">
              <div className="relative w-full h-auto">
                {steps.map((step, index) => {
                  // Always call useInView to maintain hook consistency
                  const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.2
                  });
                  
                  const isActive = index === currentVideoIndex;
                  const isNext = index === currentVideoIndex + 1;
                  const isPrev = index === currentVideoIndex - 1;
                  
                  let transform = 'translateX(100%) scale(0.8)';
                  let opacity = 0;
                  let zIndex = 1;
                  
                  if (isActive) {
                    transform = 'translateX(0%) scale(1)';
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
                      key={index}
                      ref={ref}
                      className="absolute top-1/2 left-1/2 w-full bg-white rounded-2xl p-4 shadow-lg transition-all duration-500 ease-out border border-gray-100"
                      style={{
                        transform: `translate(-50%, -50%) ${transform}`,
                        opacity,
                        zIndex
                      }}
                    >
                      {/* Number Badge */}
                      <div className={`absolute -top-4 left-6 ${step.iconBg} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg`}>
                        {step.number}
                      </div>
                      
                       {/* Video Container */}
                       <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl mb-4 overflow-hidden`}>
                         <div className="aspect-square relative flex items-center justify-center">
                           {isActive ? (
                             <iframe
                               src={`https://www.youtube.com/embed/${step.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${step.videoId}&modestbranding=1&rel=0&showinfo=0`}
                               className="w-full h-full object-cover rounded-2xl"
                               allow="autoplay; encrypted-media"
                               allowFullScreen
                               title="Video preview"
                             />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center rounded-2xl bg-black/5">
                               <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                                 <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                               </div>
                             </div>
                           )}
                         </div>
                       </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex ? 'bg-purple-500 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop - Similar to mobile, centered cards with scroll navigation */
            <div className="relative max-w-md mx-auto h-[600px] flex justify-center">
              <div className="relative w-full h-auto">
                {steps.map((step, index) => {
                  const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.2
                  });
                  
                  const isActive = index === currentVideoIndex;
                  const isNext = index === currentVideoIndex + 1;
                  const isPrev = index === currentVideoIndex - 1;
                  
                  let transform = 'translateX(100%) scale(0.8)';
                  let opacity = 0;
                  let zIndex = 1;
                  
                  if (isActive) {
                    transform = 'translateX(0%) scale(1)';
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
                      key={index}
                      ref={ref}
                      className="absolute top-1/2 left-1/2 w-full bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ease-out border border-gray-100"
                      style={{
                        transform: `translate(-50%, -50%) ${transform}`,
                        opacity,
                        zIndex
                      }}
                    >
                      {/* Number Badge */}
                      <div className={`absolute -top-4 left-8 ${step.iconBg} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg`}>
                        {step.number}
                      </div>
                      
                       {/* Video Container */}
                       <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl mb-6 overflow-hidden`}>
                         <div className="aspect-square relative flex items-center justify-center">
                           {isActive ? (
                             <iframe
                               src={`https://www.youtube.com/embed/${step.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${step.videoId}&modestbranding=1&rel=0&showinfo=0`}
                               className="w-full h-full object-cover rounded-2xl"
                               allow="autoplay; encrypted-media"
                               allowFullScreen
                               title="Video preview"
                             />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center rounded-2xl bg-black/5">
                               <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg">
                                 <Play className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" />
                               </div>
                             </div>
                           )}
                         </div>
                       </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex ? 'bg-purple-500 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Component for video hover functionality
const VideoHoverPlayer = ({ videoId, fallbackUrl, className }: { videoId: string, fallbackUrl: string, className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0`}
          className="w-full h-full object-cover rounded-2xl"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video preview"
        />
      ) : (
        <a 
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center group/video hover:bg-black/10 transition-colors duration-300 rounded-2xl"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg group-hover/video:scale-110 transition-all duration-500">
            <Play className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" />
          </div>
        </a>
      )}
    </div>
  );
};

export default HowItWorks;
