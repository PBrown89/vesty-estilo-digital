
const Testimonials = () => {
  const testimonials = [
    {
      quote: "¡Me salvó las mañanas! Ahora tardo la mitad en decidir qué ponerme.",
      name: "Carmen López",
      position: "Diseñadora Gráfica",
      avatar: "/lovable-uploads/3ccf15b8-11d2-4754-ad9e-3b1a7b62ab06.png"
    },
    {
      quote: "Siento que tengo un estilista personal en el móvil. La amo.",
      name: "Sofia Martín", 
      position: "Marketing Manager",
      avatar: "/lovable-uploads/62d99d17-ffb3-4a9c-9c30-9763e041cc58.png"
    },
    {
      quote: "Antes compraba sin pensar. Ahora cada prenda tiene sentido en mi armario.",
      name: "María García",
      position: "Estudiante de Psicología",
      avatar: "/lovable-uploads/630fea7e-901e-4327-896e-de41c05a61fb.png"
    }
  ];

  return (
    <section id="testimonios" className="py-32 bg-gradient-to-br from-yellow-300 to-yellow-400 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-6 h-6 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 border border-white/15 rotate-45"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-5 h-5 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 border border-white/10 rotate-12"></div>
        <div className="absolute top-16 right-1/4 w-4 h-4 border-2 border-white/15 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            A ellos les encanta nuestra app. A ti{" "}
            <span className="text-gray-900">
              también te encantará.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
