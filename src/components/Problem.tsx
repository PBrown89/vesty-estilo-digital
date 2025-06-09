
const Problem = () => {
  const problems = [
    {
      emoji: "😩",
      text: "Mi armario está lleno pero no tengo nada que ponerme",
      delay: "0s"
    },
    {
      emoji: "🙄", 
      text: "¿Otra vez ese look? ¿No te lo pusiste anteayer?",
      delay: "0.2s"
    },
    {
      emoji: "😴",
      text: "Combinar ropa da pereza. Comprar sin pensar, no.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-vesty-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
            Lo sabemos...
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            Todas hemos estado ahí. Es hora de cambiar la historia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{animationDelay: problem.delay}}
            >
              <div className="text-6xl mb-4 animate-float" style={{animationDelay: problem.delay}}>
                {problem.emoji}
              </div>
              <p className="text-lg font-semibold font-inter text-gray-700 leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg animate-scale-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl font-bold font-outfit text-gray-800">
              ¡Pero ya no más! 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
