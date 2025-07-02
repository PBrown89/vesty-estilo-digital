
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "0 €/mes",
      features: [
        "Prendas ilimitadas en tu armario",
        "Planificación de outfits de 2 semanas",
        "1 armario disponible",
        "Funciones básicas de organización"
      ],
      popular: false,
      limitation: "Perfecto para empezar"
    },
    {
      name: "Premium",
      price: "19,99 €/mes",
      originalPrice: "39,99 €/mes",
      features: [
        "TODO lo del plan gratuito +",
        "Planificación ILIMITADA de outfits",
        "Armarios ILIMITADOS",
        "Probador virtual SIN LÍMITES",
        "Análisis de color personalizado",
        "Recomendaciones de compra inteligentes",
        "Soporte prioritario 24/7"
      ],
      popular: true,
      savings: "¡Ahorras 240€ al año!",
      badge: "MÁS POPULAR"
    }
  ];

  return (
    <section id="precios" className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-outfit text-gray-800 mb-6">
            Elige tu{" "}
            <span className="bg-vesty-gradient bg-clip-text text-transparent">
              plan perfecto
            </span>
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            Comienza gratis y desbloquea todo el potencial de tu estilo con Premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-h-[500px] ${
                plan.popular ? 'border-2 border-vesty-purple scale-105 transform' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-vesty-purple text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-black font-outfit text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-black font-outfit text-gray-900">
                    {plan.price}
                  </div>
                  {plan.savings && (
                    <div className="text-sm font-semibold text-green-600 mt-2">
                      {plan.savings}
                    </div>
                  )}
                </div>

                {plan.limitation && (
                  <div className="text-sm text-gray-500 italic">
                    {plan.limitation}
                  </div>
                )}
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'bg-vesty-purple' : 'bg-gray-100'
                    }`}>
                      <svg 
                        className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <span className={`font-inter text-sm leading-relaxed ${
                      plan.popular ? 'text-vesty-purple font-medium' : 'text-gray-600'
                    } ${feature.includes('ILIMITADA') || feature.includes('ILIMITADOS') || feature.includes('SIN LÍMITES') ? 'font-bold' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-4 font-semibold text-lg rounded-2xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-vesty-purple hover:bg-vesty-purple/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {plan.popular ? '¡Empezar ahora!' : 'Comenzar gratis'}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional value proposition */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg mb-4">
            💡 <strong>¿Por qué Premium?</strong> Desbloquea tu potencial de estilo sin límites
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Sin restricciones de uso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Funciones exclusivas</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
