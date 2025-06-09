import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-vesty-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-24 h-24 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-10 w-32 h-32 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-32 w-28 h-28 bg-white rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight animate-fade-in-up">
            Tu mejor outfit{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              ya está
            </span>{" "}
            en tu armario
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Solo necesitas a Vesty para encontrarlo ✨
          </p>

          <div className="space-y-6 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white text-2xl px-12 py-6 rounded-full font-black transform hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Descubre Vesty hoy 🚀
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-purple-300">
              <span className="flex items-center gap-2">
                ✅ Gratis para siempre
              </span>
              <span className="flex items-center gap-2">
                ✅ Sin anuncios molestos
              </span>
              <span className="flex items-center gap-2">
                ✅ Resultados inmediatos
              </span>
            </div>
          </div>

          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <p className="text-purple-300 text-lg mb-4">
              Únete a la revolución del estilo personal
            </p>
            <div className="flex justify-center space-x-8 text-white/60">
              <span>📱 iOS</span>
              <span>🤖 Android</span>
              <span>💻 Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
