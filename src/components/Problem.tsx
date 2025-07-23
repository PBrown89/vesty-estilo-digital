import { useInView } from "react-intersection-observer";

const Problem = () => {
  const stories = [
    {
      id: 1,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "15%", left: "8%", rotation: "-8deg" }
    },
    {
      id: 2,
      name: "Jaime Mora", 
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "45%", left: "5%", rotation: "6deg" }
    },
    {
      id: 3,
      name: "Jaime Mora",
      age: "21 años - Estudiante", 
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "25%", left: "22%", rotation: "4deg" }
    },
    {
      id: 4,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "8%", left: "35%", rotation: "-5deg" }
    },
    {
      id: 5,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "60%", left: "25%", rotation: "7deg" }
    },
    {
      id: 6,
      name: "Jaime Mora", 
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "35%", left: "48%", rotation: "-6deg" }
    },
    {
      id: 7,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "12%", left: "58%", rotation: "5deg" }
    },
    {
      id: 8,
      name: "Jaime Mora",
      age: "21 años - Estudiante", 
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "50%", left: "45%", rotation: "-4deg" }
    },
    {
      id: 9,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "25%", left: "72%", rotation: "8deg" }
    },
    {
      id: 10,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "65%", left: "65%", rotation: "-7deg" }
    },
    {
      id: 11,
      name: "Jaime Mora", 
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "40%", left: "85%", rotation: "3deg" }
    },
    {
      id: 12,
      name: "Jaime Mora",
      age: "21 años - Estudiante",
      quote: "Tengo el armario lleno, pero siempre siento que no tengo nada que ponerme...",
      position: { top: "18%", left: "85%", rotation: "-9deg" }
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="min-h-screen py-32 bg-white relative overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center mb-20">
        <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
            Tablón de historias
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto mb-4">
            Pequeñas historias con las que quizás te sientas identificada
          </p>
        </div>
      </div>

      <div className="relative h-[600px] max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`absolute bg-white rounded-2xl p-6 border border-gray-200 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              top: story.position.top,
              left: story.position.left,
              transform: `rotate(${story.position.rotation})`,
              transitionDelay: `${index * 100}ms`,
              width: '280px'
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-bold font-outfit text-gray-800 text-base">
                  {story.name}
                </h3>
                <p className="text-gray-500 font-inter text-sm">
                  {story.age}
                </p>
              </div>
            </div>
            <p className="font-inter text-gray-600 italic leading-relaxed text-sm mb-3">
              "{story.quote}"
            </p>
            <a href="#" className="text-blue-500 font-inter text-sm hover:underline">
              descubrir historia
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problem;