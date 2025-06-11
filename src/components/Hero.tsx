
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png",
    "/lovable-uploads/01b8ef1b-a2ae-4419-9a8b-d9ab8268c831.png", 
    "/lovable-uploads/fa38c56a-46ea-4942-9720-d15111e89f3f.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20 pb-16">
      {/* Elementos decorativos más sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-16 w-32 h-32 bg-purple-50 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-16 w-24 h-24 bg-coral-50 rounded-full opacity-30"></div>
        <div className="absolute top-64 left-1/4 w-16 h-16 bg-yellow-50 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl">
        {/* Contenido izquierdo */}
        <div className="space-y-8">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-600 border border-gray-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            #1 en Análisis de estilo personal
          </div>
          
          {/* Título principal */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Tu estilista personal{" "}
              <span className="bg-gradient-to-r from-vesty-purple via-pink-500 to-coral-500 bg-clip-text text-transparent">
                en el bolsillo
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
              Organiza tu armario. Decide más fácil. Viste mejor.
            </p>
          </div>

          {/* Botones CTA principales */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-white text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-0"
              style={{ backgroundColor: '#735BF2' }}
            >
              <Apple className="w-6 h-6" />
              Descargar para iOS
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-gray-900 hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
              style={{ borderColor: '#735BF2', borderWidth: '2px' }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Descargar para Android
            </Button>
          </div>

          {/* Indicadores sociales */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <span className="text-sm text-gray-500 font-medium">
              +10,000 usuarios activos
            </span>
          </div>
        </div>

        {/* Contenido derecho - Hero visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Imagen principal con rotación automática */}
            <div className="w-80 lg:w-96 h-[500px] lg:h-[600px] relative">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Mujer con estilo elegante ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
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

            <div className="absolute top-24 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-vesty-purple rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">
                  +247 prendas<br />organizadas
                </span>
              </div>
            </div>

            <div className="absolute bottom-24 -right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 animate-float" style={{animationDelay: '1s'}}>
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
