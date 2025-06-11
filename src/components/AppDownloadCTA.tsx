
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const AppDownloadCTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Título principal */}
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            Descárgala gratis y empieza a crear{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              tus outfits hoy mismo
            </span>
          </h2>

          {/* Descripción */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Únete a miles de personas que ya han transformado su forma de vestir con Vesty
          </p>

          {/* Botones de descarga */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-3 border-0"
            >
              <Apple className="w-6 h-6" />
              Descargar para iOS
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-6 h-6" />
              Descargar para Android
            </Button>
          </div>

          {/* Información adicional */}
          <div className="flex items-center justify-center gap-6 pt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <span className="text-sm">4.9/5 valoración</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <span className="text-sm">Gratis en App Store y Google Play</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
