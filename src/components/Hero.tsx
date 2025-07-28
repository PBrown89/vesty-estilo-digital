import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { useState, useEffect, useRef } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const images = ["/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png", "/lovable-uploads/01b8ef1b-a2ae-4419-9a8b-d9ab8268c831.png", "/lovable-uploads/fa38c56a-46ea-4942-9720-d15111e89f3f.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      // Trigger sparkles when image changes
      setShowSparkles(true);
      setTimeout(() => setShowSparkles(false), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const x = e.clientX / window.innerWidth - 0.5; // -0.5 a 0.5
        const y = e.clientY / window.innerHeight - 0.5;
        const rotateX = y * 15; // Rotación suave
        const rotateY = x * 15;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    // Escuchar en todo el documento, no solo en el elemento
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section className="min-h-screen flex flex-col relative overflow-hidden" style={{
    backgroundImage: 'url(/lovable-uploads/36e38b0b-5f28-4c2d-af39-5b3f0d276766.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>

      <div className="container mx-auto px-1rem md:px-1.5rem text-center relative z-10 max-w-4xl flex-1 flex flex-col justify-center py-2rem">
        {/* Logo - Con más presencia */}
        <div className="mb-1rem md:mb-2rem">
          <img src="/lovable-uploads/b0d52d4b-d06e-458d-aab0-4113a7954fe3.png" alt="Vesty" className="h-12 md:h-16 mx-auto" />
        </div>
        
        {/* Título principal - Más impactante */}
        <div className="space-y-0.75rem md:space-y-1.5rem mb-1.5rem md:mb-2rem">
          <h1 className="text-2.5rem md:text-4rem lg:text-5rem font-black text-white leading-tight tracking-tight">
            <span className="block">Combina tu ropa</span>
            <span className="block text-yellow-300">en segundos</span>
          </h1>
          
          {/* Descripción visible en mobile */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-medium leading-relaxed max-w-2xl mx-auto px-0.5rem">
            <span className="block sm:hidden">Looks perfectos cada día</span>
            <span className="hidden sm:block">Despierta con looks listos para brillar. Captura tu ropa y obtén combinaciones perfectas al instante.</span>
          </p>
        </div>

        {/* Elementos de confianza */}
        <div className="flex items-center justify-center gap-1rem mb-8">
          <div className="flex items-center gap-0.25rem">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm md:text-base">★</span>
              ))}
            </div>
            <span className="text-white/90 text-xs md:text-sm font-medium ml-0.25rem">4.9</span>
          </div>
          <div className="w-px h-1rem bg-white/30"></div>
          <span className="text-white/90 text-xs md:text-sm font-medium">Descarga gratuita</span>
        </div>

        {/* Botón CTA principal más agresivo */}
        <div className="space-y-6 mb-8 md:mb-12 px-1rem md:px-0">
          <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="block">
            <Button size="lg" className="w-full max-w-sm mx-auto justify-center bg-gradient-to-r from-white to-white/95 text-vesty-purple text-lg md:text-xl px-2rem py-1rem font-black transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl flex items-center gap-0.75rem border-0 rounded-full relative overflow-hidden group">
              <span className="relative z-10">🚀 Descargar Gratis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </a>

          <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" size="lg" className="w-full max-w-sm mx-auto justify-center text-sm md:text-lg px-1.5rem py-0.75rem font-semibold transform hover:scale-102 transition-all duration-300 flex items-center gap-0.5rem border-2 bg-white/10 text-white border-white/50 hover:bg-white/20 rounded-full backdrop-blur-sm">
              También en Android
            </Button>
          </a>
        </div>

        {/* Imagen optimizada para mobile */}
        <div className="relative z-20 flex-1 flex items-center justify-center">
          <div className="relative w-[20rem] h-[20rem] md:w-[23rem] md:h-[23rem] mx-auto group">
            {/* Marco de fondo con efecto carta flotante */}
            <div ref={cardRef} className="absolute inset-0 bg-white/15 backdrop-blur-sm border border-white/25 shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.1)] transition-transform duration-200 ease-out rounded-full"></div>
            
            {/* Efecto shine alrededor del círculo */}
            {showSparkles && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_2.5rem_0.625rem_rgba(255,255,255,0.3)] animate-pulse"></div>
              </div>
            )}
            
            {/* Imagen de la chica - Más grande en mobile */}
            <div className="absolute -top-1.5rem md:-top-2rem left-1/2 transform -translate-x-1/2 w-[24rem] md:w-[28rem] h-auto z-10">
              {images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Mujer con estilo elegante ${index + 1}`} 
                  className={`absolute inset-0 w-full h-auto object-contain transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default Hero;