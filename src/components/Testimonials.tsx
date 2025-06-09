const Testimonials = () => {
  const testimonials = [
    {
      quote: "Antes me vestía para encajar. Ahora me visto para destacar.",
      name: "María, 23 años",
      emoji: "✨"
    },
    {
      quote: "Gracias a Vesty dejé de comprar por impulso.",
      name: "Carmen, 27 años", 
      emoji: "💰"
    },
    {
      quote: "Ahora mis outfits son 🔥 y mi armario respira.",
      name: "Sofía, 21 años",
      emoji: "🔥"
    }
  ];

  return (
    <section id="testimonios" className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            Ellas ya lo{" "}
            <span className="bg-vesty-gradient bg-clip-text text-transparent">
              descubrieron
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Historias reales de chicas como tú
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-4xl text-center mb-4">
                {testimonial.emoji}
              </div>
              <blockquote className="text-lg font-semibold text-gray-800 mb-4 text-center">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-gray-600 text-center font-medium">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-gray-800 font-bold">
              +10,000 chicas ya transformaron su estilo 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
