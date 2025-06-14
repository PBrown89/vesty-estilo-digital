
import { Clock, Tag, Pencil } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="size-10 text-vesty-purple" strokeWidth={1.5} />,
      title: "Mañanas caóticas",
      description: "Pierdes tiempo y energía cada día frente a un armario que no te inspira.",
      delay: "0s"
    },
    {
      icon: <Tag className="size-10 text-vesty-pink" strokeWidth={1.5} />,
      title: "Compras sin sentido",
      description: "Acumulas ropa por impulso que no usas, desaprovechando tu dinero y espacio.",
      delay: "0.2s"
    },
    {
      icon: <Pencil className="size-10 text-vesty-orange" strokeWidth={1.5} />,
      title: "Creatividad bloqueada",
      description: "Sientes que tu estilo no te representa y vistes en piloto automático, sin confianza.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-32 bg-vesty-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            No estás sola. Es hora de recuperar el control de tu armario y tu estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-start text-left animate-fade-in-up"
              style={{animationDelay: problem.delay}}
            >
              <div className="mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg animate-scale-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl font-bold font-outfit text-gray-800">
              ¡Vesty es tu solución! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
