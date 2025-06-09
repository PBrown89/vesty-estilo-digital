
import { useState, useRef } from 'react';
import { Slider } from "@/components/ui/slider";
import { Upload, ArrowLeft, ArrowRight } from 'lucide-react';

const VirtualTryOn = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  const [leftImage, setLeftImage] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState<string | null>(null);
  const leftInputRef = useRef<HTMLInputElement>(null);
  const rightInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (file: File, side: 'left' | 'right') => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (side === 'left') {
        setLeftImage(result);
      } else {
        setRightImage(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = (side: 'left' | 'right') => {
    if (side === 'left') {
      leftInputRef.current?.click();
    } else {
      rightInputRef.current?.click();
    }
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
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 py-2 text-xs font-semibold">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                        </div>
                        <div className="w-4 h-2 border border-black rounded-sm">
                          <div className="w-full h-full bg-black rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Header de la app */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-semibold text-sm">Tus pruebas</span>
                      </div>
                      <div className="w-4 h-4 border-2 border-red-500 rounded"></div>
                    </div>

                    {/* Área principal con imagen dividida y slider */}
                    <div className="px-4 flex-1 relative" style={{ height: '280px' }}>
                      <div className="relative bg-gray-50 rounded-2xl overflow-hidden h-full">
                        {/* Contenedor de la imagen dividida */}
                        <div className="relative w-full h-full">
                          {/* Input files ocultos */}
                          <input
                            ref={leftInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImageUpload(file, 'left');
                            }}
                          />
                          <input
                            ref={rightInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImageUpload(file, 'right');
                            }}
                          />

                          {/* Lado izquierdo */}
                          <div 
                            className="absolute top-0 left-0 h-full bg-gray-200 overflow-hidden cursor-pointer"
                            style={{ width: `${sliderValue[0]}%` }}
                            onClick={() => triggerFileInput('left')}
                          >
                            {leftImage ? (
                              <img 
                                src={leftImage} 
                                alt="Imagen izquierda" 
                                className="w-full h-full object-cover"
                                style={{ 
                                  width: `${220 * (100 / sliderValue[0])}px`,
                                  clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                <div className="text-center">
                                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                                  <span className="text-xs text-gray-500">Añadir foto</span>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Lado derecho */}
                          <div 
                            className="absolute top-0 right-0 h-full bg-gray-300 overflow-hidden cursor-pointer"
                            style={{ width: `${100 - sliderValue[0]}%` }}
                            onClick={() => triggerFileInput('right')}
                          >
                            {rightImage ? (
                              <img 
                                src={rightImage} 
                                alt="Imagen derecha" 
                                className="w-full h-full object-cover"
                                style={{ 
                                  width: `${220 * (100 / (100 - sliderValue[0]))}px`,
                                  marginLeft: `-${220 * (sliderValue[0] / (100 - sliderValue[0]))}px`
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-400">
                                <div className="text-center">
                                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                                  <span className="text-xs text-gray-600">Añadir foto</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Línea divisoria */}
                          <div 
                            className="absolute top-0 h-full w-0.5 bg-white shadow-lg z-10" 
                            style={{ left: `${sliderValue[0]}%` }}
                          >
                            {/* Círculo del slider */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                              <div className="flex gap-0.5">
                                <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                                <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                              </div>
                            </div>
                          </div>

                          {/* Flechas de navegación */}
                          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                            <ArrowLeft className="w-3 h-3 text-white" />
                          </button>
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </button>
                        </div>

                        {/* Slider funcional (invisible pero controla la división) */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <Slider 
                            value={sliderValue} 
                            onValueChange={setSliderValue} 
                            max={100} 
                            min={0} 
                            step={1} 
                            className="w-full opacity-0" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="px-4 py-4 flex gap-2">
                      <button className="flex-1 py-2 px-4 bg-gray-100 rounded-full text-sm font-medium">
                        Guardar outfit
                      </button>
                      <button className="flex-1 py-2 px-4 bg-black text-white rounded-full text-sm font-medium flex items-center justify-center gap-1">
                        <span>📤</span>
                        Compartir
                      </button>
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
