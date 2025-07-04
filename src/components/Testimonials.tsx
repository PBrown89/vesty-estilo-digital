
import { Star } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    quote: "¡Me salvó las mañanas! Ahora tardo la mitad en decidir qué ponerme.",
    name: "Carmen López",
    avatar: "/lovable-uploads/3ccf15b8-11d2-4754-ad9e-3b1a7b62ab06.png"
  }, {
    quote: "Siento que tengo un estilista personal en el móvil. La amo.",
    name: "Sofia Martín",
    avatar: "/lovable-uploads/62d99d17-ffb3-4a9c-9c30-9763e041cc58.png"
  }, {
    quote: "Antes compraba sin pensar. Ahora cada prenda tiene sentido en mi armario.",
    name: "María García",
    avatar: "/lovable-uploads/630fea7e-901e-4327-896e-de41c05a61fb.png"
  }];
  return <section id="testimonios" className="bg-white relative overflow-hidden py-[132px]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-coral-50/50 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-50/50 rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            A ti{" "}
            <span className="bg-gradient-to-r from-vesty-purple via-pink-500 to-coral-500 bg-clip-text text-transparent">
              también te encantará.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up flex flex-col border border-white/50" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
