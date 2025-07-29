import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showElements, setShowElements] = useState({
    logo: false,
    title: false,
    subtitle: false,
    wardrobe: false,
    button: false,
    downloadButton: false
  });

  useEffect(() => {
    // Animación secuencial de aparición de elementos
    const timeouts = [
      setTimeout(() => setShowElements(prev => ({ ...prev, logo: true })), 300),
      setTimeout(() => setShowElements(prev => ({ ...prev, title: true })), 600),
      setTimeout(() => setShowElements(prev => ({ ...prev, subtitle: true })), 900),
      setTimeout(() => setShowElements(prev => ({ ...prev, wardrobe: true })), 1200),
      setTimeout(() => setShowElements(prev => ({ ...prev, button: true })), 1500),
      setTimeout(() => setShowElements(prev => ({ ...prev, downloadButton: true })), 1800),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleOpenWardrobe = () => {
    setIsOpen(true);
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden transition-all duration-1000 ease-in-out">
      {/* Fondo dinámico */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          isOpen 
            ? 'bg-white' 
            : 'bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800'
        }`}
      />
      
      {/* Estrellas decorativas */}
      {!isOpen && (
        <>
          <div className="absolute top-20 right-20 text-yellow-300 text-2xl animate-pulse">✨</div>
          <div className="absolute top-32 right-32 text-yellow-300 text-xl animate-pulse delay-300">✨</div>
        </>
      )}

      <div className="container mx-auto px-6 md:px-8 text-center relative z-10 max-w-6xl flex-1 flex flex-col justify-center py-8">
        
        {/* Logo */}
        <div className={`mb-8 md:mb-12 transition-all duration-800 ${
          showElements.logo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <img 
            src="/lovable-uploads/b0d52d4b-d06e-458d-aab0-4113a7954fe3.png" 
            alt="Vesty" 
            className="h-16 md:h-20 mx-auto" 
          />
        </div>
        
        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Columna izquierda - Texto */}
          <div className="space-y-8 text-left">
            
            {/* Título principal */}
            <div className={`space-y-4 transition-all duration-800 delay-300 ${
              showElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                isOpen ? 'text-purple-600' : 'text-white'
              }`}>
                {isOpen ? (
                  <>
                    <span className="block">Descubre</span>
                  </>
                ) : (
                  <>
                    <span className="block">Tu armario</span>
                    <span className="block">como nunca lo</span>
                    <span className="block">habías visto</span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtítulo */}
            <div className={`transition-all duration-800 delay-500 ${
              showElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className={`text-xl md:text-2xl font-medium leading-relaxed ${
                isOpen ? 'text-purple-400' : 'text-white/90'
              }`}>
                {isOpen ? (
                  <>
                    <span className="block font-semibold text-purple-600">Looks listos para brillar.</span>
                    <span className="block">Captura tu ropa y obtén</span>
                    <span className="block">combinaciones en segundos.</span>
                  </>
                ) : null}
              </p>
            </div>

            {/* Botón de abrir armario */}
            {!isOpen && (
              <div className={`transition-all duration-800 delay-1000 ${
                showElements.button ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <Button 
                  onClick={handleOpenWardrobe}
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Abrir el armario
                </Button>
              </div>
            )}

            {/* Botón de descarga (solo cuando está abierto) */}
            {isOpen && (
              <div className={`space-y-4 transition-all duration-800 delay-1200 ${
                showElements.downloadButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="w-full max-w-sm bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Descargar gratis
                  </Button>
                </a>
              </div>
            )}
          </div>

          {/* Columna derecha - Armario */}
          <div className={`relative flex justify-center items-center transition-all duration-800 delay-700 ${
            showElements.wardrobe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            
            {/* Armario cerrado */}
            <div className={`transition-all duration-1000 ${
              isOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <img 
                src="/lovable-uploads/f3eb37dc-676b-474f-a310-64fd781f52f8.png" 
                alt="Armario cerrado con luz mágica" 
                className="w-80 md:w-96 h-auto mx-auto filter drop-shadow-2xl"
              />
            </div>

            {/* Armario abierto */}
            <div className={`absolute inset-0 transition-all duration-1000 ${
              isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}>
              <img 
                src="/lovable-uploads/2fabf40a-b772-4a33-8b45-0d74b43ee8e0.png" 
                alt="Armario abierto con ropa organizada" 
                className="w-80 md:w-96 h-auto mx-auto filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;