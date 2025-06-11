
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const AppDownloadCTA = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo más sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-32 left-1/3 w-16 h-16 bg-gradient-to-br from-vesty-purple/10 to-purple-200/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 text-sm font-inter text-gray-600 w-fit shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Disponible ahora
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-900 mb-6 leading-tight">
            ¡Lleva{" "}
            <span className="bg-gradient-to-r from-vesty-purple to-pink-500 bg-clip-text text-transparent">
              Vesty
            </span>{" "}
            contigo!
          </h2>

          {/* Descripción */}
          <p className="text-lg font-inter text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descarga nuestra app y empieza a planificar tus outfits estés donde estés.
          </p>

          {/* Botones de descarga - mismo estilo que el Hero */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-vesty-purple hover:bg-purple-600 text-white text-lg px-8 py-4 rounded-full font-inter font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Apple className="w-6 h-6" />
              Descargar para iOS
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="bg-white border-2 border-vesty-purple text-vesty-purple hover:bg-vesty-purple/5 text-lg px-8 py-4 rounded-full font-inter font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Descargar para Android
            </Button>
          </div>

          {/* Información adicional */}
          <div className="flex items-center justify-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-sm">⭐</span>
              ))}
            </div>
            <span className="text-sm font-inter text-gray-500 ml-2">
              Gratis en App Store y Google Play
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
