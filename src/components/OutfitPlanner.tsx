
const OutfitPlanner = () => {
  return <section className="bg-vesty-gradient-soft py-[186px]">
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
                  {/* Martes 7 */}
                  

                  {/* Miércoles 8 */}
                  

                  {/* Jueves 9 */}
                  
                </div>
              </div>

              {/* Bloques flotantes de outfits */}
              <div className="absolute -right-40 top-0 space-y-4 mx-px">
                {/* Martes 11 */}
                <div className="bg-vesty-purple rounded-2xl p-4 w-64 shadow-lg animate-float">
                  <div className="flex items-center gap-4">
                    <div className="text-white">
                      <div className="text-sm font-inter">Mar</div>
                      <div className="text-2xl font-outfit font-bold">11</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/f6d742ff-ae8f-497c-9d9e-fdd473b68796.png" alt="Top" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img alt="Pants" className="w-full h-full object-cover" src="/lovable-uploads/640ff384-9dbe-46d2-a1af-5522de1daff1.png" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/6ff58194-7ecd-49f1-ad1e-d5be8ebd19ae.png" alt="Shoes" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Miércoles 12 */}
                <div className="bg-white rounded-2xl p-4 w-64 shadow-lg animate-float" style={{
                animationDelay: '0.5s'
              }}>
                  <div className="flex items-center gap-4">
                    <div className="text-vesty-purple">
                      <div className="text-sm font-inter">Mie</div>
                      <div className="text-2xl font-outfit font-bold">12</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png" alt="Dress" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/47bf4978-5e16-4898-89b7-0d9c0033b6c7.png" alt="Jacket" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/84ab8ed5-13f9-4248-89fd-f2163104013e.png" alt="Boots" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lunes 17 */}
                <div className="bg-white rounded-2xl p-4 w-64 shadow-lg animate-float" style={{
                animationDelay: '1s'
              }}>
                  <div className="flex items-center gap-4">
                    <div className="text-vesty-purple">
                      <div className="text-sm font-inter">Lun</div>
                      <div className="text-2xl font-outfit font-bold">17</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/2eff8da6-aa4f-45ac-91cf-42209c1660cc.png" alt="Shirt" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/3058937b-1b5d-432f-bf54-99c24ab7a678.png" alt="Skirt" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Martes 18 */}
                <div className="bg-white rounded-2xl p-4 w-64 shadow-lg animate-float" style={{
                animationDelay: '1.5s'
              }}>
                  <div className="flex items-center gap-4">
                    <div className="text-vesty-purple">
                      <div className="text-sm font-inter">Mar</div>
                      <div className="text-2xl font-outfit font-bold">18</div>
                    </div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/3ccf15b8-11d2-4754-ad9e-3b1a7b62ab06.png" alt="Sweater" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src="/lovable-uploads/62d99d17-ffb3-4a9c-9c30-9763e041cc58.png" alt="Pants" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              
            </div>
          </div>

          {/* Contenido derecho */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Planifica tus outfits gratis y sin límite
            </h2>
            
            <p className="text-lg font-inter text-gray-600 leading-relaxed font-normal">Deja el caos fuera y planifica tus outfits. Haz maletas sin estrés y saca más partido a tu armario.
            </p>

            <div className="space-y-2">
              <p className="text-xl font-outfit font-bold text-gray-900">
                ¿Tienes un evento importante el finde y no sabes qué ponerte?
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                ¡Deja que tus amigas te sugieran echando un ojo a tu armario! nunca había sido tan fácil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OutfitPlanner;
