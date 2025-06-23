
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SEOFaq = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Qué es un armario digital y cómo funciona?",
      answer: "Un armario digital es una versión virtual de tu guardarropa donde puedes fotografiar y catalogar todas tus prendas. Vesty utiliza inteligencia artificial para organizar automáticamente tu ropa por categorías, colores y estilos, permitiéndote ver todo tu armario desde tu móvil y crear combinaciones perfectas sin tener que abrir el armario físico.",
      category: "armario-digital"
    },
    {
      question: "¿Cómo funciona el probador virtual de Vesty?",
      answer: "El probador virtual de Vesty usa tecnología de realidad aumentada para que puedas verte con diferentes prendas sin necesidad de cambiarte. Solo necesitas hacer una foto y la app superpone digitalmente las prendas de tu armario o nuevas compras, mostrándote cómo te quedarían antes de decidir qué ponerte o comprar.",
      category: "probador-virtual"
    },
    {
      question: "¿Qué es el análisis de colores personales?",
      answer: "El análisis de colores personales determina qué tonos realzan mejor tu piel, ojos y cabello. Vesty analiza tu foto para identificar tu paleta de colores ideal y te sugiere qué colores de ropa te favorecen más, ayudándote a tomar mejores decisiones de compra y a crear looks que te hagan brillar.",
      category: "analisis-colores"
    },
    {
      question: "¿Es gratis usar Vesty?",
      answer: "Vesty ofrece funciones básicas gratuitas que incluyen organizar hasta 50 prendas y crear looks básicos. Para acceder a todas las funciones premium como el probador virtual avanzado, análisis de colores completo y organización ilimitada, ofrecemos planes de suscripción desde 4.99€/mes.",
      category: "precios"
    },
    {
      question: "¿Cómo puede Vesty ayudarme a ahorrar dinero en ropa?",
      answer: "Vesty te ayuda a ahorrar dinero de tres formas: 1) Te muestra todas las prendas que ya tienes para evitar compras duplicadas, 2) El probador virtual te permite ver cómo te queda la ropa antes de comprar, reduciendo devoluciones, 3) Te sugiere combinaciones con tu ropa actual, maximizando el uso de cada prenda.",
      category: "beneficios"
    },
    {
      question: "¿Qué diferencia a Vesty de otras apps de moda?",
      answer: "Vesty es única porque combina tres funciones esenciales en una sola app: armario digital para organizar, probador virtual para probar y análisis de colores para acertar. Además, nuestra IA aprende tu estilo personal y te da sugerencias cada vez más precisas, funcionando como tu estilista personal 24/7.",
      category: "diferenciacion"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="preguntas-frecuentes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre el armario digital y el probador virtual
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 
                  className="text-lg font-semibold text-gray-900 pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div 
                  className="px-6 pb-4 border-t border-gray-100"
                  itemScope 
                  itemType="https://schema.org/Answer"
                >
                  <p 
                    className="text-gray-700 leading-relaxed pt-4"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SEO Schema for FAQ */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default SEOFaq;
