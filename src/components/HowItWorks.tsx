import { useInView } from "react-intersection-observer";
const HowItWorks = () => {
  const steps = [{
    number: "01",
    title: "Digitaliza tu armario",
    description: "Fotografía tus prendas y organízalas automáticamente. Vesty crea un catálogo visual de todo lo que tienes.",
    image: "/lovable-uploads/21525915-0d29-415a-bcef-5ed02f37e62f.png",
    bgColor: "bg-pink-50"
  }, {
    number: "02",
    title: "Crea looks perfectos",
    description: "Recibe sugerencias personalizadas y planifica tus looks. Nunca más tendrás dudas sobre qué ponerte.",
    image: "/lovable-uploads/a70262fc-420a-4478-9893-f0800ea3d26b.png",
    bgColor: "bg-yellow-50"
  }, {
    number: "03",
    title: "Haz match con tu estilo",
    description: "Busca prendas que van con tu estilo y que realmente necesitas, pruébatelas y toma una decisión consciente y fundamentada. Se acabaron los arrepentimientos.",
    image: "/lovable-uploads/5bfb2d50-21cc-4ed1-9b19-5fe6c0001deb.png",
    bgColor: "bg-purple-50"
  }];
  const {
    ref: headerRef,
    inView: headerInView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos simples para transformar tu relación con la moda
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
          const {
            ref,
            inView
          } = useInView({
            triggerOnce: true,
            threshold: 0.2
          });
          return <div key={index} ref={ref} className={`flex flex-col lg:flex-row items-center gap-12 mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: `${index * 150}ms`
          }}>
                {/* Contenido */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-vesty-purple">{step.number}</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                  <div className={`${step.bgColor} rounded-3xl w-80 h-80 flex items-center justify-center`}>
                    <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HowItWorks;
