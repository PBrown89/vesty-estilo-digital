
const Features = () => {
  const features = [
    {
      icon: "👗",
      title: "Pruébate la ropa sin moverte del sofá",
      description: "Visualiza cómo te queda cada prenda antes de ponértela. Tu espejo virtual personal.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎨", 
      title: "Descubre qué colores te hacen brillar",
      description: "Análisis personalizado de tu paleta de colores. Destaca con los tonos que mejor te van.",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: "📅",
      title: "Planifica tus outfits y gana tiempo (y estilo)",
      description: "Organiza tu semana con looks increíbles. Nunca más 'no tengo qué ponerme'.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "📸",
      title: "Digitaliza tu armario y combínalo como una pro",
      description: "Tu closet en tu móvil. Combina prendas como una experta en styling.",
      color: "from-purple-600 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            Tu nueva{" "}
            <span className="bg-vesty-gradient bg-clip-text text-transparent">
              superpotencia
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada función diseñada para que te veas y te sientas increíble
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-3xl bg-gradient-to-br ${feature.color} transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-6xl mb-6 text-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-white/90 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">¿Lista para revolucionar tu estilo?</p>
          <button className="bg-vesty-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            Prueba Vesty gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
