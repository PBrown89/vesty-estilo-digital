
import { Clock, Tag, Pencil } from "lucide-react";
import { useInView } from "react-intersection-observer";

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

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: problemsRef, inView: problemsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 bg-vesty-gradient-soft">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            No estás sola. Es hora de recuperar el control de tu armario y tu estilo.
          </p>
        </div>

        <div 
          ref={problemsRef}
          className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 ease-out ${
            problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-start text-left transition-all duration-700 ease-out ${
                problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: problemsInView ? `${index * 200}ms` : '0ms'}}
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

        <div 
          ref={ctaRef}
          className={`text-center mt-20 transition-all duration-700 ease-out ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`inline-block bg-white rounded-full px-8 py-4 shadow-lg transition-all duration-700 ease-out ${
            ctaInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{transitionDelay: ctaInView ? '400ms' : '0ms'}}>
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
