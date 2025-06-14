
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
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-outfit">
              Ahorra tiempo y viste increíble cada día
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-inter">
              Descubre por qué miles de mujeres aman Vesty para organizar su armario y planificar sus outfits.
            </p>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="-m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900 font-inter">
                    <p>{`“${testimonial.quote}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.avatar} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900 font-outfit">{testimonial.name}</div>
                       <div className="flex items-center gap-x-0.5 text-vesty-yellow">
                        <Star className="h-5 w-5" fill="currentColor" />
                        <Star className="h-5 w-5" fill="currentColor" />
                        <Star className="h-5 w-5" fill="currentColor" />
                        <Star className="h-5 w-5" fill="currentColor" />
                        <Star className="h-5 w-5" fill="currentColor" />
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
