
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Problem = () => {
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const people = [
    {
      id: 1,
      name: "Carmen",
      age: 28,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      problem: "Nunca sé que ponerme los días de trabajo",
      story: "Carmen es una profesional que trabaja en marketing. Cada mañana se levanta 20 minutos antes solo para decidir qué ponerse. Su armario está lleno de ropa que compró con ilusión pero que nunca sabe cómo combinar. Desde que usa Vesty, tiene outfits predefinidos para cada día de la semana y puede dormir esos 20 minutos extra.",
      position: { top: "10%", left: "15%", rotation: "-12deg" }
    },
    {
      id: 2,
      name: "María",
      age: 24,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face",
      problem: "Al no tener tiempo siempre pillo lo primero que veo",
      story: "María estudia y trabaja a tiempo parcial. Sus mañanas son una carrera contra el reloj y siempre termina poniéndose lo mismo. Con Vesty, puede planificar sus outfits la noche anterior y tener todo listo para salir corriendo por la mañana con estilo.",
      position: { top: "25%", left: "45%", rotation: "8deg" }
    },
    {
      id: 3,
      name: "Ana",
      age: 32,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop&crop=face",
      problem: "Nunca soy capaz de verme bien en el espejo",
      story: "Ana perdió confianza en su estilo después de la maternidad. Su cuerpo cambió y siente que nada le queda como antes. Vesty le ayudó a redescubrir qué prendas la favorecen y cómo combinarlas para sentirse segura y hermosa cada día.",
      position: { top: "15%", left: "75%", rotation: "-5deg" }
    },
    {
      id: 4,
      name: "Laura",
      age: 26,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      problem: "Ojalá fuera más sencillo combinar la ropa, me resulta imposible",
      story: "Laura siempre se consideró 'mala para la moda'. Ve a otras mujeres con outfits increíbles y no entiende cómo lo hacen. Vesty le enseñó las reglas básicas de combinación y ahora puede crear looks que la hacen sentir como esas mujeres que admiraba.",
      position: { top: "40%", left: "25%", rotation: "15deg" }
    },
    {
      id: 5,
      name: "Sofia",
      age: 30,
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop&crop=face",
      problem: "Creo que me he puesto esta misma camiseta 3 veces esta semana",
      story: "Sofia tiene un armario lleno pero siempre recurre a las mismas 5 prendas cómodas. Se aburre de su estilo pero no sabe cómo salir de la rutina. Vesty le mostró cómo usar todas sus prendas de formas diferentes y ahora disfruta experimentando con su ropa.",
      position: { top: "55%", left: "55%", rotation: "-18deg" }
    },
    {
      id: 6,
      name: "Elena",
      age: 27,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      problem: "Compro ropa pero luego no sé con qué combinarla",
      story: "Elena ama ir de compras pero sus nuevas prendas terminan con etiquetas en el armario. No sabe cómo integrarlas con lo que ya tiene. Vesty le enseñó a comprar de forma estratégica y a maximizar cada prenda de su guardarropa.",
      position: { top: "35%", left: "10%", rotation: "22deg" }
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const getCardTransform = (person: any, index: number) => {
    const { x, y } = mousePosition;
    const cardElement = document.getElementById(`card-${person.id}`);
    if (!cardElement) return person.position.rotation;
    
    const rect = cardElement.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(Math.pow(x - cardCenterX, 2) + Math.pow(y - cardCenterY, 2));
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      const intensity = (maxDistance - distance) / maxDistance;
      const moveX = (x - cardCenterX) * intensity * 0.1;
      const moveY = (y - cardCenterY) * intensity * 0.1;
      return `translate(${moveX}px, ${moveY}px) rotate(${person.position.rotation}) scale(1.05)`;
    }
    
    return `rotate(${person.position.rotation})`;
  };

  return (
    <>
      <section className="min-h-screen py-32 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-20">
          <div 
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
              ¿Te suena familiar?
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto mb-4">
              Pequeñas historias con las que quizás te sientas identificada
            </p>
          </div>
        </div>

        <div 
          className="relative h-[600px] max-w-6xl mx-auto"
          onMouseMove={handleMouseMove}
        >
          {people.map((person, index) => (
            <div
              key={person.id}
              id={`card-${person.id}`}
              className={`absolute w-80 bg-white rounded-2xl p-6 border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:z-30 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                top: person.position.top,
                left: person.position.left,
                transform: getCardTransform(person, index),
                transitionDelay: inView ? `${index * 200}ms` : '0ms',
                zIndex: 20 + index
              }}
              onClick={() => setSelectedPerson(person)}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold font-outfit text-gray-800 text-lg">
                    {person.name}
                  </h3>
                  <p className="text-gray-500 font-inter text-sm">
                    {person.age} años - Estudiante
                  </p>
                </div>
              </div>
              <p className="font-inter text-gray-600 italic leading-relaxed">
                "{person.problem}"
              </p>
              <button className="mt-4 text-blue-500 font-inter text-sm underline hover:text-blue-600 transition-colors">
                descubrir historia
              </button>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedPerson} onOpenChange={() => setSelectedPerson(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPerson && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={selectedPerson.image}
                    alt={selectedPerson.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <DialogTitle className="text-2xl font-outfit text-gray-800">
                      {selectedPerson.name}
                    </DialogTitle>
                    <p className="text-gray-500 font-inter">
                      {selectedPerson.age} años
                    </p>
                  </div>
                </div>
              </DialogHeader>
              <DialogDescription className="text-gray-700 font-inter leading-relaxed text-base">
                {selectedPerson.story}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Problem;
