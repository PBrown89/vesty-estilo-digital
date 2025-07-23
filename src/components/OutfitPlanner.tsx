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

  return <section className="py-16 pb-48 md:py-[208px]">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido derecho */}
          <div 
            ref={contentRef}
            className={`space-y-6 lg:order-2 transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-gray-900 leading-tight">
              Planifica tus outfits gratis y sin límite
            </h2>
            
            <p className="text-lg font-inter text-gray-600 leading-relaxed font-normal">Deja el caos fuera y planifica tus outfits.
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

          {/* Contenido izquierdo - Mockup */}
          <div 
            ref={mockupRef}
            className={`relative flex justify-center lg:justify-start lg:order-1 transition-all duration-700 ease-out ${
              mockupInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{transitionDelay: mockupInView ? '200ms' : '0ms'}}
          >
            <img 
              src="/lovable-uploads/f78ee6b5-efc1-4dcb-baf4-1fd0de4db1fb.png" 
              alt="Planificador de outfits móvil" 
              className="w-38 h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default OutfitPlanner;