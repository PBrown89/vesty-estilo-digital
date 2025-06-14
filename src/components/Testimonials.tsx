
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
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Lo que dicen nuestras usuarias
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Miles de mujeres ya han transformado su relación con la moda.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
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
