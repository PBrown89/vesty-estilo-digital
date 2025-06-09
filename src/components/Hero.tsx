
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-vesty-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Tú no necesitas{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              más ropa
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Solo necesitas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vesty
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto">
            La app que transforma tu armario en tu mejor aliado de estilo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white text-xl px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Empieza gratis ✨
            </Button>
            <p className="text-purple-300 text-sm">
              Sin tarjeta de crédito • Resultados inmediatos
            </p>
          </div>
        </div>

        {/* Phone mockup or visual element */}
        <div className="mt-16 animate-scale-in" style={{animationDelay: '0.5s'}}>
          <div className="w-64 h-96 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="text-white/60 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                👗
              </div>
              <p className="text-sm">Tu armario digital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
