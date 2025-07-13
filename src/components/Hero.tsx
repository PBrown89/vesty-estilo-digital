import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
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
  return <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-[60px]" style={{
    backgroundImage: 'url(/lovable-uploads/acbd147c-ca1b-4e12-a13f-b9e79383d35f.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        {/* Logo */}
        <div className="mb-8">
          <img src="/lovable-uploads/b0d52d4b-d06e-458d-aab0-4113a7954fe3.png" alt="Vesty" className="h-12 mx-auto" />
        </div>

        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white border border-white/30 mb-8 rounded-2xl bg-[AB9BFE]">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          n°1 en análisis de estilo personal
        </div>
        
        {/* Título principal */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tu armario inteligente<br />
            <span className="text-white">a tu medida</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Despierta con looks listos para brillar. Captura tu ropa y obtén combinaciones en segundos.
          </p>
        </div>

        {/* Botones CTA principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full justify-center bg-white text-vesty-purple text-lg px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-0 rounded-2xl">
              <Apple className="w-6 h-6" />
              Descargar para iOS
            </Button>
          </a>

          <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full justify-center text-lg px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-2 bg-transparent text-white border-white hover:bg-white/10 rounded-2xl">
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

        {/* Imagen de la mujer con marco redondeado */}
        <div className="mb-12 relative">
          <div className="relative w-80 h-96 mx-auto">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30"></div>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-72 h-auto z-10">
            {images.map((image, index) => <img key={index} src={image} alt={`Mujer con estilo elegante ${index + 1}`} className={`absolute inset-0 w-full h-auto object-contain transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          </div>
        </div>

      </div>
    </section>;
};
export default Hero;