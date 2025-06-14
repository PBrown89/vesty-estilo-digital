
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestras usuarias
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Descubre por qué miles de mujeres confían en Vesty para revolucionar su estilo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
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
