
import { useEffect, useState } from 'react';

const OutfitPlanner = () => {
  const [currentStyle, setCurrentStyle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyle(prev => (prev + 1) % 4);
    }, 4000); // Changed from 2000 to 4000 (4 seconds)

    return () => clearInterval(interval);
  }, []);

  const getBlockStyle = (blockIndex: number) => {
    const styleIndex = (currentStyle + blockIndex) % 4;
    const isSelected = styleIndex === 0;
    
    if (isSelected) {
      return "bg-vesty-purple text-white";
    } else {
      return "bg-white text-vesty-purple";
    }
  };

  const getBlurStyle = (blockIndex: number) => {
    const styleIndex = (currentStyle + blockIndex) % 4;
    const isSelected = styleIndex === 0;
    
    return isSelected ? "" : "blur-sm";
  };

  return (
    <section className="bg-vesty-gradient-soft py-[186px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido izquierdo - Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Mockup principal */}
              <div className="w-80 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden p-6 py-[24px]">
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
                  {Array.from({
                  length: 35
                }, (_, i) => {
                  const dayNumber = i >= 5 && i <= 34 ? i - 4 : '';
                  const isHighlighted = dayNumber === 11 || dayNumber === 12 || dayNumber === 17 || dayNumber === 18;
                  return <div key={i} className="aspect-square flex items-center justify-center text-xs font-inter relative">
                        {dayNumber}
                        {isHighlighted && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-vesty-purple"></div>}
                      </div>;
                })}
                </div>

                {/* Outfits programados */}
                <div className="space-y-3">
                  {/* Outfits content if any */}
                </div>
              </div>

              {/* Bloques flotantes de outfits */}
              <div className="absolute -right-40 top-0 space-y-4 mx-px">
                {/* Lunes 6 */}
                <div className={`rounded-2xl p-4 w-64 shadow-lg transition-all duration-500 ${getBlockStyle(0)} ${getBlurStyle(0)}`}>
                  <div className="flex items-center gap-4">
                    <div className={currentStyle === 0 ? "text-white" : "text-vesty-purple"}>
                      <div className="text-sm font-inter">Lun</div>
                      <div className="text-2xl font-outfit font-bold">6</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src="/lovable-uploads/47c614dd-5409-468f-a59d-59f536e39592.png" 
                          alt="Top verde" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src="/lovable-uploads/4fd9e7b1-941a-4e6b-9172-5f0bae33e962.png" 
                          alt="Pantalón azul" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src="/lovable-uploads/ef25462f-32eb-4081-bbad-983930f1136a.png" 
                          alt="Zapatillas blancas" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Martes 7 */}
                <div className={`rounded-2xl p-4 w-64 shadow-lg transition-all duration-500 ${getBlockStyle(1)} ${getBlurStyle(1)}`}>
                  <div className="flex items-center gap-4">
                    <div className={currentStyle === 1 ? "text-white" : "text-vesty-purple"}>
                      <div className="text-sm font-inter">Mar</div>
                      <div className="text-2xl font-outfit font-bold">7</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Miércoles 8 */}
                <div className={`rounded-2xl p-4 w-64 shadow-lg transition-all duration-500 ${getBlockStyle(2)} ${getBlurStyle(2)}`}>
                  <div className="flex items-center gap-4">
                    <div className={currentStyle === 2 ? "text-white" : "text-vesty-purple"}>
                      <div className="text-sm font-inter">Mie</div>
                      <div className="text-2xl font-outfit font-bold">8</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src="/lovable-uploads/f7386320-d560-4ed0-b6ef-6bf5c6746069.png" 
                          alt="Vestido negro y beige" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src="/lovable-uploads/4de9da1a-aa27-46a2-8712-503950c0df8b.png" 
                          alt="Zapatos negros" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jueves 9 */}
                <div className={`rounded-2xl p-4 w-64 shadow-lg transition-all duration-500 ${getBlockStyle(3)} ${getBlurStyle(3)}`}>
                  <div className="flex items-center gap-4">
                    <div className={currentStyle === 3 ? "text-white" : "text-vesty-purple"}>
                      <div className="text-sm font-inter">Jue</div>
                      <div className="text-2xl font-outfit font-bold">9</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 animate-float" style={{
              animationDelay: '1s'
            }}></div>
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
