
const OutfitPlanner = () => {
  return (
    <section className="py-20 bg-vesty-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido izquierdo - Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Mockup principal */}
              <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400">‹</button>
                    <span className="font-outfit font-semibold text-gray-900">Septiembre 2025</span>
                    <button className="text-gray-400">›</button>
                  </div>
                </div>

                {/* Calendario */}
                <div className="grid grid-cols-7 gap-1 text-xs font-inter text-gray-500 mb-4">
                  <div className="text-center">Lun</div>
                  <div className="text-center">Mar</div>
                  <div className="text-center">Mie</div>
                  <div className="text-center">Jue</div>
                  <div className="text-center">Vie</div>
                  <div className="text-center">Sab</div>
                  <div className="text-center">Dom</div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-6">
                  {Array.from({length: 35}, (_, i) => (
                    <div key={i} className="aspect-square flex items-center justify-center text-xs font-inter">
                      {i >= 5 && i <= 34 ? i - 4 : ''}
                    </div>
                  ))}
                </div>

                {/* Outfits programados */}
                <div className="space-y-3">
                  <div className="bg-purple-100 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs font-outfit font-bold">
                      Lun<br />6
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-blue-500 text-white rounded-lg px-2 py-1 text-xs font-outfit font-bold">
                      Mar<br />7
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-pink-200 rounded"></div>
                      <div className="w-8 h-8 bg-gray-800 rounded"></div>
                      <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Imagen de la modelo */}
              <div className="absolute -right-16 top-8 w-48 h-64 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/2eff8da6-aa4f-45ac-91cf-42209c1660cc.png" 
                  alt="Modelo con outfit planificado" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Contenido derecho */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Planifica tus outfits gratis y sin límite
            </h2>
            
            <p className="text-lg font-inter text-gray-600 leading-relaxed">
              Deja el caos fuera. Con Vesty planifica tus outfits, haz maletas sin estrés y saca más partido a tu armario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutfitPlanner;
