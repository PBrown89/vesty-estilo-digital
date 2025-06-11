
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const AppDownloadCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-vesty-purple to-vesty-pink relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icono principal */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-white mb-6 leading-tight">
            ¡Lleva Vesty contigo!
          </h2>

          {/* Descripción */}
          <p className="text-xl font-inter text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descarga nuestra app y empieza a planificar tus outfits estés donde estés.
          </p>

          {/* Botones de descarga */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-vesty-purple hover:bg-gray-100 font-outfit font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <div className="w-6 h-6 bg-vesty-purple rounded flex items-center justify-center">
                <Download className="w-4 h-4 text-white" />
              </div>
              Descargar para iOS
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white text-vesty-purple hover:bg-gray-100 font-outfit font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <div className="w-6 h-6 bg-vesty-purple rounded flex items-center justify-center">
                <Download className="w-4 h-4 text-white" />
              </div>
              Descargar para Android
            </Button>
          </div>

          {/* Texto adicional */}
          <div className="mt-8">
            <p className="text-white/70 font-inter text-sm">
              Disponible gratis en App Store y Google Play
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
