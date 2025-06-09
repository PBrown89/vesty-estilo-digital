
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-vesty-hero relative overflow-hidden pt-16">
      {/* Formas geométricas de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/4 w-32 h-32 bg-gradient-to-br from-vesty-purple/20 to-purple-300/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contenido izquierdo */}
        <div className="animate-fade-in-left">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-inter text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            #1 en Análisis de estilo
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black font-outfit text-gray-900 mb-6 leading-tight">
            <span className="text-gray-800">Viste como</span>{" "}
            <span className="bg-gradient-to-r from-vesty-purple to-pink-500 bg-clip-text text-transparent">
              eres
            </span>
            <br />
            <span className="text-gray-600 text-3xl lg:text-4xl font-normal">
              Cambia cuando quieras
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl font-inter text-gray-600 mb-8 max-w-lg leading-relaxed">
            Descubre tu paleta de colores personalizada y transforma tu armario. 
            Recibe consejos únicos en minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-vesty-purple hover:bg-purple-600 text-white text-lg px-8 py-4 rounded-full font-inter font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Apple className="w-6 h-6" />
              Descárgala
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
              Descárgala
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-sm">⭐</span>
              ))}
            </div>
            <span className="text-sm font-inter text-gray-500 ml-2">
              +2,000 personas ya han transformado su experiencia
            </span>
          </div>
        </div>

        {/* Contenido derecho - Imagen sin caja */}
        <div className="relative animate-fade-in-right lg:block hidden">
          <div className="relative">
            {/* Imagen principal sin caja, como fondo */}
            <div className="w-80 h-96 relative">
              <img 
                src="/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png" 
                alt="Mujer con estilo elegante" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Elementos flotantes con información */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-inter text-sm font-medium text-gray-700">
                  Descubre tu<br />Paleta de colores
                </span>
              </div>
            </div>

            <div className="absolute top-20 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-vesty-purple rounded-full"></div>
                <span className="font-inter text-sm font-medium text-gray-700">
                  Recomendaciones<br />En maquillaje
                </span>
              </div>
            </div>

            <div className="absolute bottom-16 -right-8 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="font-inter text-sm font-medium text-gray-700">
                  Encuentra tus<br />Must-have
                </span>
              </div>
            </div>

            <div className="absolute bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{animationDelay: '1.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-inter text-sm font-medium text-gray-700">
                  Obtén consejos<br />Personalizados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior con stats o testimonios breves */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-8 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className="text-center">
            <div className="font-outfit font-bold text-gray-900">10k+</div>
            <div className="font-inter text-xs text-gray-600">Usuarias</div>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="text-center">
            <div className="font-outfit font-bold text-gray-900">4.9</div>
            <div className="font-inter text-xs text-gray-600">Rating</div>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="text-center">
            <div className="font-outfit font-bold text-gray-900">2min</div>
            <div className="font-inter text-xs text-gray-600">Proceso</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
