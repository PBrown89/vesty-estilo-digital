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
    <section className="min-h-screen flex flex-col relative overflow-hidden" style={{background: 'linear-gradient(135deg, #715391 0%, #CDB2DF 100%)'}}>
      
      {/* Mobile Layout */}
      <div className="lg:hidden container mx-auto px-6 text-center relative z-10 flex-1 flex flex-col justify-center py-8">
        
        {/* Título principal */}
        <div className={`mb-6 transition-all duration-800 ${
          showElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold leading-tight text-white mb-8 tracking-tight">
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
        <div className={`mb-8 transition-all duration-800 delay-1200 ${
          showElements.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button 
                variant="secondary"
                size="lg" 
                className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30 text-lg px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
              >
                Descargar iOS
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button 
                size="lg" 
                className="w-full bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Descargar Android
              </Button>
            </a>
          </div>
        </div>

        {/* Imagen de la chica con logo superpuesto */}
        <div className={`relative transition-all duration-800 delay-600 ${
          showElements.image ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Texto "Descubre" detrás */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <span className="text-white/10 text-8xl font-bold font-outfit select-none">Descubre</span>
          </div>
          
          {/* Imagen que se corta por el scroll */}
          <div className="relative max-w-sm mx-auto">
            <img 
              src="/lovable-uploads/9a70cc31-6cd8-4a6b-a733-46c7419dd4bb.png"
              alt="Chica feliz con flores en el cabello" 
              className="w-full h-auto mx-auto filter drop-shadow-2xl"
              style={{marginBottom: '-20vh'}}
            />
            
            {/* Logo Vesty superpuesto */}
            <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-800 delay-900 ${
              showElements.logo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/8ba14a19-6738-47ec-a77e-3ebcbc421ddb.png"
                  alt="Vesty logo"
                  className="h-16 md:h-20 w-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex container mx-auto px-8 relative z-10 flex-1 items-center py-8 max-w-7xl">
        
        {/* Contenido izquierda */}
        <div className="w-1/2 pr-12">
          
          {/* Título principal */}
          <div className={`mb-6 transition-all duration-800 ${
            showElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-6xl xl:text-7xl font-outfit font-bold leading-tight text-white mb-8 text-left tracking-tight">
              <span className="block">Bienvenida a</span>
              <span className="block">tu nuevo</span>
              <span className="block">armario</span>
            </h1>
          </div>

          {/* Subtítulo */}
          <div className={`mb-8 transition-all duration-800 delay-300 ${
            showElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-2xl font-medium leading-relaxed text-white/90 mb-2 text-left">
              <span className="block font-semibold">Looks listos para brillar.</span>
            </p>
            <p className="text-xl leading-relaxed text-white/80 text-left">
              <span className="block">Captura tu ropa y obtén combinaciones</span>
              <span className="block">en segundos.</span>
            </p>
          </div>

          {/* Botones de descarga */}
          <div className={`transition-all duration-800 delay-1200 ${
            showElements.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex gap-4 max-w-md">
              <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  variant="secondary"
                  size="lg" 
                  className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30 text-lg px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
                >
                  Descargar iOS
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Descargar Android
                </Button>
              </a>
            </div>
          </div>
          
        </div>

        {/* Contenido derecha - Imagen con logo */}
        <div className="w-1/2 relative">
          <div className={`relative transition-all duration-800 delay-600 ${
            showElements.image ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Texto "Descubre" detrás */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <span className="text-white/10 text-9xl font-bold font-outfit select-none">Descubre</span>
            </div>
            
            {/* Imagen que se corta por el scroll */}
            <div className="relative">
              <img 
                src="/lovable-uploads/9a70cc31-6cd8-4a6b-a733-46c7419dd4bb.png"
                alt="Chica feliz con flores en el cabello" 
                className="w-full h-auto lg:w-3/4 lg:mx-auto filter drop-shadow-2xl"
                style={{marginBottom: '-15vh'}}
              />
              
              {/* Logo Vesty superpuesto */}
              <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-800 delay-900 ${
                showElements.logo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="relative">
                <img 
                  src="/lovable-uploads/8ba14a19-6738-47ec-a77e-3ebcbc421ddb.png"
                  alt="Vesty logo"
                  className="h-20 md:h-24 w-auto drop-shadow-lg"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;