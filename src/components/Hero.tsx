import { Button } from "@/components/ui/button";
import { Apple, Download, ChevronDown, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const images = [
    "/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png", 
    "/lovable-uploads/01b8ef1b-a2ae-4419-9a8b-d9ab8268c831.png", 
    "/lovable-uploads/fa38c56a-46ea-4942-9720-d15111e89f3f.png"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowStickyBar(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const downloadIOS = () => {
    window.open("https://apps.apple.com/es/app/vesty/id6743717284", "_blank");
  };

  const downloadAndroid = () => {
    window.open("https://play.google.com/store/apps/details?id=app.vesty.com&hl=es", "_blank");
  };

  return (
    <>
      <section 
        ref={heroRef}
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-vesty-purple via-purple-600 to-vesty-pink"
      >
        {/* Fondo con efecto parallax */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(/lovable-uploads/36e38b0b-5f28-4c2d-af39-5b3f0d276766.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Elementos decorativos parallax */}
        <div 
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-32 right-8 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 min-h-screen flex flex-col justify-center">
          {/* Logo */}
          <div className="text-center mb-6">
            <img 
              src="/lovable-uploads/b0d52d4b-d06e-458d-aab0-4113a7954fe3.png" 
              alt="Vesty" 
              className="h-10 md:h-12 mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Contenido de texto */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
              {/* Titular impactante */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Revoluciona tu estilo
                <span className="block text-yellow-300">cada día</span>
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Organiza, combina y planifica tus outfits de forma intuitiva. 
                Olvídate del estrés de elegir qué ponerte y exprésate con confianza y creatividad.
              </p>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={downloadIOS}
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 px-6 py-4 text-base font-semibold rounded-xl min-h-[44px] flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Apple className="h-5 w-5" />
                  Descargar para iOS
                </Button>
                
                <Button 
                  onClick={downloadAndroid}
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-6 py-4 text-base font-semibold rounded-xl min-h-[44px] flex items-center gap-3 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <Download className="h-5 w-5" />
                  Descargar para Android
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-yellow-300" />
                  <span className="text-white/90 text-sm font-medium">
                    Únete a +10,000 personas que ya planifican sus looks con Vesty
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                  <span className="text-white/90 text-sm font-medium ml-2">4.9 en App Store</span>
                </div>
              </div>
            </div>

            {/* Visual principal - Mockup */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div 
                className="relative"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              >
                {/* Efecto de resplandor */}
                <div className="absolute -inset-8 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" />
                
                {/* Mockup del teléfono */}
                <div className="relative w-64 md:w-80 mx-auto">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] overflow-hidden">
                      {/* Pantalla del teléfono */}
                      <div className="aspect-[9/19.5] bg-white relative overflow-hidden">
                        {images.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt={`Interfaz de Vesty ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        ))}
                        
                        {/* Overlay con gradiente sutil */}
                        <div className="absolute inset-0 bg-gradient-to-t from-vesty-purple/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white/80 text-sm mb-2">Descubre más</div>
            <ChevronDown className="h-6 w-6 text-white/80 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar para mobile */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-vesty-purple to-vesty-pink p-4 z-50 transform transition-transform duration-300 shadow-2xl lg:hidden">
          <div className="flex gap-3">
            <Button 
              onClick={downloadIOS}
              className="flex-1 bg-black text-white hover:bg-gray-800 rounded-xl min-h-[44px] font-semibold"
            >
              <Apple className="h-4 w-4 mr-2" />
              iOS
            </Button>
            <Button 
              onClick={downloadAndroid}
              variant="outline"
              className="flex-1 bg-white/20 text-white border-white/30 hover:bg-white/30 rounded-xl min-h-[44px] font-semibold backdrop-blur-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Android
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;