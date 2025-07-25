import { useInView } from "react-intersection-observer";

const OutfitPlanner = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: mockupRef, inView: mockupInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Contenido */}
          <div 
            ref={contentRef}
            className={`w-full lg:w-1/2 space-y-6 text-center lg:text-left transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Planifica tus outfits gratis y sin límite
            </h2>
            
            <p className="text-lg font-inter text-gray-600 leading-relaxed font-normal">Deja el caos fuera y planifica tus outfits.
            </p>

            <div className="space-y-4">
              <p className="text-xl font-outfit font-bold text-gray-900">
                ¿Tienes un evento importante el finde y no sabes qué ponerte?
              </p>
              
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                ¡Deja que tus amigas te sugieran echando un ojo a tu armario! nunca había sido tan fácil.
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div 
            ref={mockupRef}
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ease-out ${
              mockupInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{transitionDelay: mockupInView ? '200ms' : '0ms'}}
          >
            <img 
              src="/lovable-uploads/f78ee6b5-efc1-4dcb-baf4-1fd0de4db1fb.png" 
              alt="Planificador de outfits móvil" 
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default OutfitPlanner;