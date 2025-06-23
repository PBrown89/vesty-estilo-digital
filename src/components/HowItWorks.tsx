
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [{
    number: "01",
    title: "Digitaliza tu armario",
    description: "Fotografía tus prendas y organízalas automáticamente. Vesty crea un catálogo visual de todo lo que tienes.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual video URL
    bgColor: "from-pink-100 to-pink-200",
    iconBg: "bg-pink-500"
  }, {
    number: "02",
    title: "Crea looks perfectos",
    description: "Recibe sugerencias personalizadas y planifica tus looks. Nunca más tendrás dudas sobre qué ponerte.",
    image: "/lovable-uploads/a70262fc-420a-4478-9893-f0800ea3d26b.png",
    bgColor: "from-yellow-100 to-orange-200",
    iconBg: "bg-orange-500"
  }, {
    number: "03",
    title: "Haz match con tu estilo",
    description: "Busca prendas que van con tu estilo y que realmente necesitas, pruébatelas y toma una decisión consciente y fundamentada. Se acabaron los arrepentimientos.",
    image: "/lovable-uploads/0712663e-3178-4fd1-84e3-f40c498cca64.png",
    bgColor: "from-purple-100 to-purple-200",
    iconBg: "bg-purple-500"
  }];

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef} 
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos simples para transformar tu relación con la moda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.2
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative group transition-all duration-700 ease-out ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group/card">
                    {/* Number Badge */}
                    <div className={`absolute -top-4 left-8 ${step.iconBg} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg`}>
                      {step.number}
                    </div>
                    
                    {/* Video/Image Container */}
                    <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl mb-6 mt-4 overflow-hidden`}>
                      <div className="aspect-square">
                        {step.videoUrl ? (
                          <a 
                            href={step.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center group/video hover:bg-black/10 transition-colors duration-300 rounded-2xl"
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg group-hover/video:scale-110 group-hover/card:opacity-0 transition-all duration-500">
                              <Play className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" />
                            </div>
                          </a>
                        ) : (
                          <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover rounded-2xl" 
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-vesty-purple transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                  </div>

                  {/* Connection Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-10">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
