import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { useState, useEffect, useRef } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const images = ["/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png", "/lovable-uploads/01b8ef1b-a2ae-4419-9a8b-d9ab8268c831.png", "/lovable-uploads/fa38c56a-46ea-4942-9720-d15111e89f3f.png"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
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
  return <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-[60px] mb-10" style={{
    backgroundImage: 'url(/lovable-uploads/36e38b0b-5f28-4c2d-af39-5b3f0d276766.png)',
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
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full justify-center bg-white text-vesty-purple text-lg px-8 py-4 font-semibold transform hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-0 rounded-2xl">
              Obtener en iOS
            </Button>
          </a>

          <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full justify-center text-lg px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-2 bg-transparent text-white border-white hover:bg-white/20 rounded-2xl">
              Obtener en Android
            </Button>
          </a>
        </div>

        {/* Imagen de la mujer con marco redondeado - Carta flotante */}
        <div className="relative z-20 transform translate-y-8">
          <div className="relative w-[460px] h-[460px] mx-auto group">
            {/* Marco de fondo con efecto carta flotante */}
            <div ref={cardRef} className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-out"></div>
            
            {/* Imagen de la chica */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[400px] h-auto z-10">
              {images.map((image, index) => <img key={index} src={image} alt={`Mujer con estilo elegante ${index + 1}`} className={`absolute inset-0 w-full h-auto object-contain transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default Hero;