
import { useState, useRef } from 'react';

const VirtualTryOn = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
            <div className="relative w-full max-w-md">
              {/* Imagen de fondo con la chica en el sofá al 100% */}
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative bg-white mx-0 py-0 my-0 px-[12px]">
                <img src="/lovable-uploads/2e7470d5-25c9-45f2-bf2b-4494746669ed.png" alt="Mujer probándose ropa virtualmente" className="w-full h-full object-contain" />
                
                {/* Mockup del teléfono flotante */}
                <div className="absolute top-8 right-1 w-56 h-[400px] bg-black rounded-3xl shadow-2xl overflow-hidden p-1 my-0 mx-0 py-[4px] px-[4px]">
                  {/* Pantalla del teléfono */}
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden relative my-0 px-px py-px">
                    {/* Área principal con slider de comparación */}
                    <div className="w-full h-full relative">
                      <div className="relative bg-gray-50 rounded-2xl overflow-hidden h-full">
                        {/* Contenedor del slider de comparación */}
                        <div 
                          ref={containerRef}
                          className="relative w-full h-full cursor-col-resize select-none"
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp}
                        >
                          {/* Imagen de la derecha (fondo completo) - "Después" */}
                          <div className="absolute inset-0">
                            <img 
                              src="/lovable-uploads/62b5a92b-467e-4f7f-96dd-ac35ccc8b9cd.png" 
                              alt="Imagen después" 
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Imagen de la izquierda (recortada por el slider) - "Antes" */}
                          <div 
                            className="absolute inset-0 overflow-hidden"
                            style={{ 
                              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                            }}
                          >
                            <img 
                              src="/lovable-uploads/62b5a92b-467e-4f7f-96dd-ac35ccc8b9cd.png" 
                              alt="Imagen antes" 
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Línea divisoria y control deslizante */}
                          <div 
                            className="absolute top-0 h-full w-1 bg-white shadow-lg z-10 cursor-col-resize"
                            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                            onMouseDown={handleMouseDown}
                          >
                            {/* Círculo del slider */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
                              <div className="flex gap-0.5">
                                <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                                <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                              </div>
                            </div>
                          </div>

                          {/* Etiquetas antes/después */}
                          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            Antes
                          </div>
                          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            Después
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-orange-200 rounded-full border-dashed animate-float" style={{
                animationDelay: '2s'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;
