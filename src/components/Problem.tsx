
import { Clock, Tag, Pencil } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="size-10 text-vesty-purple" strokeWidth={1.5} />,
      title: "Mañanas caóticas",
      description: "Pierdes tiempo y energía cada día frente a un armario que no te inspira.",
    },
    {
      icon: <Tag className="size-10 text-vesty-pink" strokeWidth={1.5} />,
      title: "Compras sin sentido",
      description: "Acumulas ropa por impulso que no usas, desaprovechando tu dinero y espacio.",
    },
    {
      icon: <Pencil className="size-10 text-vesty-orange" strokeWidth={1.5} />,
      title: "Creatividad bloqueada",
      description: "Sientes que tu estilo no te representa y vistes en piloto automático, sin confianza.",
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [sectionCompleted, setSectionCompleted] = useState(false);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.6
  });

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (sectionInView && !sectionCompleted) {
      const timer = setTimeout(() => {
        if (currentStep < problems.length) {
          setCurrentStep(prev => prev + 1);
        } else {
          setSectionCompleted(true);
        }
      }, currentStep === 0 ? 800 : 1200); // Header appears first, then each card

      return () => clearTimeout(timer);
    }
  }, [sectionInView, currentStep, problems.length, sectionCompleted]);

  return (
    <section ref={sectionRef} className="min-h-screen py-32 bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            currentStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
              className={`bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start text-left transition-all duration-1000 ease-out transform ${
                currentStep >= index + 2 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{
                transitionDelay: currentStep >= index + 2 ? `${index * 300}ms` : '0ms'
              }}
            >
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-gray-800 mb-4">
                {problem.title}
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
