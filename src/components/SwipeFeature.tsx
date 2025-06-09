
const SwipeFeature = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido izquierdo */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Swipea para encontrar ropa que vibra contigo.
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Descubre nuevas prendas de forma rápida, divertida y sin esfuerzo.
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Di sí, di no, y deja que Vesty aprenda de ti para mostrarte exactamente lo que va con tu estilo.
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Cada swipe te acerca a ese outfit que te representa sin que tengas que buscar entre miles de opciones.
              </p>
            </div>
          </div>

          {/* Contenido derecho - Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Imagen de fondo con las chicas */}
              <div className="w-80 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100 relative">
                <img 
                  src="/lovable-uploads/e09f76fa-e937-4dd8-92ae-5dd0327d7bb9.png" 
                  alt="Chicas usando la app" 
                  className="w-full h-full object-cover"
                />
                
                {/* Mockup del teléfono flotante */}
                <div className="absolute top-8 right-8 w-48 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Contenido del mockup */}
                  <div className="p-4 h-full flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="font-outfit font-bold text-gray-900">Match clothes</h3>
                    </div>
                    
                    {/* Tarjeta de ropa */}
                    <div className="flex-1 bg-pink-100 rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-inter">
                        LIKE
                      </div>
                      <div className="text-center text-sm font-inter text-gray-600 mt-8">
                        Vestido floral con carácter simple
                      </div>
                    </div>
                    
                    {/* Botones de acción */}
                    <div className="flex justify-center gap-4 mt-4">
                      <button className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-500">✕</span>
                      </button>
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-500">↺</span>
                      </button>
                      <button className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-500">♡</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-purple-200 rounded-full border-dashed animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwipeFeature;
