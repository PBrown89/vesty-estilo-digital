import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showElements, setShowElements] = useState({
    title: false,
    subtitle: false,
    buttons: false,
    image: false,
    logo: false
  });

  useEffect(() => {
    // Animación secuencial de aparición de elementos
    const timeouts = [
      setTimeout(() => setShowElements(prev => ({ ...prev, title: true })), 300),
      setTimeout(() => setShowElements(prev => ({ ...prev, subtitle: true })), 600),
      setTimeout(() => setShowElements(prev => ({ ...prev, image: true })), 900),
      setTimeout(() => setShowElements(prev => ({ ...prev, buttons: true })), 1200),
      setTimeout(() => setShowElements(prev => ({ ...prev, logo: true })), 1500),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10 max-w-4xl flex-1 flex flex-col justify-center py-8">
        
        {/* Título principal */}
        <div className={`mb-6 transition-all duration-800 ${
          showElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8">
            <span className="block">Bienvenida a</span>
            <span className="block">tu nuevo</span>
            <span className="block">armario</span>
          </h1>
        </div>

        {/* Subtítulo */}
        <div className={`mb-8 transition-all duration-800 delay-300 ${
          showElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 mb-2">
            <span className="block font-semibold">Looks listos para brillar.</span>
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white/80">
            <span className="block">Captura tu ropa y obtén combinaciones</span>
            <span className="block">en segundos.</span>
          </p>
        </div>

        {/* Botones de descarga */}
        <div className={`mb-8 transition-all duration-800 delay-900 ${
          showElements.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                variant="secondary"
                size="lg" 
                className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30 text-lg px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
              >
                Descargar iOS
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Descargar Android
              </Button>
            </a>
          </div>
        </div>

        {/* Imagen de la chica */}
        <div className={`mb-8 transition-all duration-800 delay-600 ${
          showElements.image ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="relative max-w-sm mx-auto">
            <img 
              src="/lovable-uploads/a9f60e2c-298d-4739-b759-f7b438432f0f.png"
              alt="Chica feliz con flores en el cabello" 
              className="w-full h-auto mx-auto filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Logo Vesty */}
        <div className={`transition-all duration-800 delay-1200 ${
          showElements.logo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Vesty
            </h2>
            <div className="absolute -top-2 -right-8 text-yellow-300 text-3xl">✨</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;