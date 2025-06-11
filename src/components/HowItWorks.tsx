
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Digitaliza tu armario",
      description: "Fotografía tus prendas y organízalas automáticamente. Vesty crea un catálogo visual de todo lo que tienes.",
      image: "/lovable-uploads/01b8ef1b-a2ae-4419-9a8b-d9ab8268c831.png",
      bgColor: "bg-pink-50"
    },
    {
      number: "02", 
      title: "Crea outfits perfectos",
      description: "Recibe sugerencias personalizadas y planifica tus looks. Nunca más tendrás dudas sobre qué ponerte.",
      image: "/lovable-uploads/fa38c56a-46ea-4942-9720-d15111e89f3f.png", 
      bgColor: "bg-yellow-50"
    },
    {
      number: "03",
      title: "Encuentra el estilo que buscas",
      description: "Busca prendas que van con tu estilo y que realmente necesitas, pruébatelas y toma una decisión consciente y fundamentada. Se acabaron los arrepentimientos.",
      image: "/lovable-uploads/27123033-2eee-4e8e-8ca4-a5a74c308ad2.png",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos simples para transformar tu relación con la moda
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
                <div className={`${step.bgColor} rounded-3xl p-8 w-80 h-80 flex items-center justify-center`}>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
