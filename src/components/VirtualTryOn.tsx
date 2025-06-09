import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
const VirtualTryOn = () => {
  const [sliderValue, setSliderValue] = useState([50]);
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
                    

                    {/* Header de la app */}
                    

                    {/* Área principal con imagen dividida y slider */}
                    <div className="px-4 flex-1 px-4 py-0">
                      <div className="relative bg-gray-50 rounded-2xl overflow-hidden" style={{
                      height: '320px'
                    }}>
                        {/* Contenedor de la imagen dividida */}
                        <div className="relative w-full h-full py-0 my-0 px-0 mx-0">
                          {/* Imagen del lado izquierdo (outfit original) */}
                          <div className="absolute top-0 left-0 h-full bg-gray-200 overflow-hidden" style={{
                          width: `${sliderValue[0]}%`
                        }}>
                            <img alt="Outfit original" className="w-full h-full object-cover" style={{
                            width: '220px',
                            clipPath: `polygon(0 0, ${sliderValue[0] / 50 * 100}% 0, ${sliderValue[0] / 50 * 100}% 100%, 0 100%)`
                          }} src="/lovable-uploads/630fea7e-901e-4327-896e-de41c05a61fb.png" />
                          </div>
                          
                          {/* Imagen del lado derecho (outfit modificado) */}
                          

                          {/* Línea divisoria */}
                          <div className="absolute top-0 h-full w-0.5 bg-white shadow-lg z-10" style={{
                          left: `${sliderValue[0]}%`
                        }}>
                            {/* Círculo del slider */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                              <div className="flex gap-0.5">
                                <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                                <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                              </div>
                            </div>
                          </div>

                          {/* Flechas de navegación */}
                          
                          
                        </div>

                        {/* Slider funcional (invisible pero controla la división) */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <Slider value={sliderValue} onValueChange={setSliderValue} max={100} min={0} step={1} className="w-full" />
                        </div>
                      </div>
                    </div>

                    {/* Botones de acción */}
                    
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
    </section>;
};
export default VirtualTryOn;