
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-black font-outfit text-center text-gray-900 mb-16">
          Lo que dicen nuestras usuarias
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl flex flex-col">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <blockquote className="text-gray-600 font-inter mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-semibold font-outfit text-gray-900">{testimonial.name}</p>
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

