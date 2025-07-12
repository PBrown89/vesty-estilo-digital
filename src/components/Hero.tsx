
import { Button } from "@/components/ui/button";
import { Apple, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png", "/lovable-uploads/01b8ef1b-a2ae-4419-9a8b-d9ab8268c831.png", "/lovable-uploads/fa38c56a-46ea-4942-9720-d15111e89f3f.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vesty-purple to-vesty-purple/80 relative overflow-hidden pt-20 pb-16">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-16 w-32 h-32 bg-white/10 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-24 h-24 bg-white/15 rounded-full opacity-50 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-64 left-1/4 w-16 h-16 bg-white/20 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/5 rounded-full opacity-80 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl">
        {/* Contenido izquierdo */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/30">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            #1 en análisis de estilo personal
          </div>
          
          {/* Título principal */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Tu armario inteligente{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent animate-pulse">
                  a tu medida
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-lg blur-sm opacity-50 animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-xl">
              Despierta con looks listos para brillar. Captura tu ropa y obtén combinaciones en segundos.
            </p>
          </div>

          {/* Botones CTA principales */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full justify-center bg-vesty-purple text-white text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-0">
                <Apple className="w-6 h-6" fill="white" />
                Descargar para iOS
              </Button>
            </a>

            <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full justify-center text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-2 bg-white text-vesty-purple border-vesty-purple hover:bg-vesty-purple/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Descargar para Android
              </Button>
            </a>
          </div>

          {/* Indicadores sociales */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-white/80 font-medium">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <span className="text-sm text-white/80 font-medium">
              +10,000 usuarios activos
            </span>
          </div>
        </div>

        {/* Contenido derecho - Hero visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Imagen principal con rotación automática */}
            <div className="w-80 lg:w-96 h-[500px] lg:h-[600px] relative">
              {images.map((image, index) => <img key={index} src={image} alt={`Mujer con estilo elegante ${index + 1}`} className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
            </div>

            {/* Elementos informativos flotantes más modernos */}
            <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">
                  Paleta personalizada<br />detectada
                </span>
              </div>
            </div>

            <div className="absolute top-24 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-float" style={{
            animationDelay: '0.5s'
          }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-vesty-purple rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">
                  +247 prendas<br />organizadas
                </span>
              </div>
            </div>

            <div className="absolute bottom-24 -right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-float" style={{
            animationDelay: '1s'
          }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">
                  Outfit perfecto<br />encontrado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
