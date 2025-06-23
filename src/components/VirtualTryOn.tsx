import { useState, useRef } from 'react';
const VirtualTryOn = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleInteractionStart = () => {
    setIsDragging(true);
  };
  const handleInteractionEnd = () => {
    setIsDragging(false);
  };
  const handleInteractionMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = x / rect.width * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    handleInteractionMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      handleInteractionMove(e.touches[0].clientX);
    }
  };
  return <section className="py-32 bg-white">
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

          {/* Contenido derecho - Slider */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
            <div ref={containerRef} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-50 cursor-col-resize select-none" onMouseMove={handleMouseMove} onMouseUp={handleInteractionEnd} onMouseLeave={handleInteractionEnd} onTouchMove={handleTouchMove} onTouchEnd={handleInteractionEnd} onTouchCancel={handleInteractionEnd}>
              {/* Imagen de la derecha (fondo completo) - "Después" */}
              <div className="absolute inset-0">
                <img alt="Imagen después" src="/lovable-uploads/af8d7912-29b8-4413-81b5-347573a50a36.png" className="w-full h-full object-contain" />
              </div>

              {/* Imagen de la izquierda (recortada por el slider) - "Antes" */}
              <div className="absolute inset-0 overflow-hidden" style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}>
                <img alt="Imagen antes" src="/lovable-uploads/ab991d48-cba9-4620-999c-551bb38cdb18.jpg" className="w-full h-full object-contain" />
              </div>

              {/* Línea divisoria y control deslizante */}
              <div className="absolute top-0 h-full w-1 bg-white shadow-lg z-10 cursor-col-resize" style={{
              left: `${sliderPosition}%`,
              transform: 'translateX(-50%)'
            }} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
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
    </section>;
};
export default VirtualTryOn;