const VirtualTryOn = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido izquierdo */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Pruébate ropa desde tu sofá
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Elige cualquier prenda desde cualquier tienda online y pruébatela al instante gracias a nuestra tecnología con inteligencia artificial.
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Sin esperas, sin colas, sin probadores. Solo tú, tu estilo y un espejo digital que entiende tu cuerpo y tus gustos.
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Descubre cómo te queda antes de comprar y ahorra tiempo, devoluciones y dudas.
              </p>
            </div>
          </div>

          {/* Contenido derecho - Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Imagen de fondo con la chica en el sofá */}
              <div className="w-80 h-96 rounded-3xl overflow-hidden bg-gray-100 relative">
                <img 
                  src="/lovable-uploads/62d99d17-ffb3-4a9c-9c30-9763e041cc58.png" 
                  alt="Mujer probándose ropa virtualmente" 
                  className="w-full h-full object-cover"
                />
                
                {/* Mockup del teléfono flotante */}
                <div className="absolute top-8 right-8 w-48 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Contenido del mockup */}
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <button className="text-gray-400">←</button>
                      <span className="font-outfit font-semibold text-gray-900">Tus pruebas</span>
                      <button className="text-red-400">🗑</button>
                    </div>
                    
                    {/* Avatar con ropa */}
                    <div className="flex-1 bg-gray-50 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-40 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                      </div>
                      <div className="absolute top-4 left-4 w-8 h-8 bg-orange-200 rounded"></div>
                    </div>
                    
                    {/* Botones de acción */}
                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 bg-gray-100 py-3 rounded-xl font-inter font-medium text-gray-700">
                        Guardar outfit
                      </button>
                      <button className="flex-1 bg-gray-900 py-3 rounded-xl font-inter font-medium text-white">
                        📤 Compartir
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-orange-200 rounded-full border-dashed animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;
