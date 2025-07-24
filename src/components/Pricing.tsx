import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

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
      name: "Premium Unlimited",
      price: "19,99 €/mes",
      originalPrice: "39,99 €/mes",
      features: [
        "TODO lo del plan gratuito +",
        "Planificación ILIMITADA de outfits",
        "Armarios ILIMITADOS",
        "Probador virtual SIN LÍMITES",
        "Análisis de color personalizado",
        "Recomendaciones de compra inteligentes",
        "Seguimiento de precios",
        "Soporte prioritario 24/7"
      ],
      popular: true,
      savings: "¡Ahorras 240€ al año!",
      badge: "PREMIUM UNLIMITED",
      highlight: "¡TODO ILIMITADO!"
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

        {/* Mobile - Solo plan Premium */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-vesty-purple">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-vesty-purple text-white px-8 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                PREMIUM UNLIMITED
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-black font-outfit text-gray-900 mb-2">
                Premium Unlimited
              </h3>
              
              <div className="mb-4">
                <div className="text-lg text-gray-400 line-through mb-1">
                  19,99 €/mes
                </div>
                <div className="text-4xl font-black font-outfit text-gray-900">
                  4,99 €/mes
                </div>
                <div className="text-sm font-semibold text-green-600 mt-2">
                  ¡Ahorras 75%!
                </div>
              </div>
            </div>

            <ul className="space-y-4 flex-grow mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-vesty-purple">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-inter text-sm leading-relaxed text-vesty-purple font-bold">
                  Probador virtual SIN LÍMITES
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-vesty-purple">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-inter text-sm leading-relaxed text-vesty-purple font-medium flex items-center gap-2">
                  Seguimiento de precios
                  <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold">
                    Próximamente
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-vesty-purple">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-inter text-sm leading-relaxed text-vesty-purple font-medium flex items-center gap-2">
                  Asistente de moda virtual
                  <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold">
                    Próximamente
                  </span>
                </span>
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full py-3 font-semibold text-sm rounded-2xl transition-all duration-300 flex items-center gap-2 justify-center bg-vesty-purple hover:bg-vesty-purple/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Apple className="w-4 h-4" fill="currentColor" />
                  Descarga para iOS
                </Button>
              </a>

              <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full py-3 font-semibold text-sm rounded-2xl transition-all duration-300 flex items-center gap-2 justify-center bg-white text-vesty-purple border-2 border-vesty-purple hover:bg-vesty-purple/10 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Descarga para Android
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop - Ambos planes */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-h-[500px] ${
                plan.popular ? 'border-2 border-vesty-purple scale-105 transform' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-vesty-purple text-white px-8 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
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

              <div className="flex flex-col gap-3">
                <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    className={`w-full py-3 font-semibold text-sm rounded-2xl transition-all duration-300 flex items-center gap-2 justify-center ${
                      plan.popular 
                        ? 'bg-vesty-purple hover:bg-vesty-purple/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Apple className="w-4 h-4" fill="currentColor" />
                    Descarga para iOS
                  </Button>
                </a>

                <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    className={`w-full py-3 font-semibold text-sm rounded-2xl transition-all duration-300 flex items-center gap-2 justify-center ${
                      plan.popular 
                        ? 'bg-white text-vesty-purple border-2 border-vesty-purple hover:bg-vesty-purple/10 shadow-lg hover:shadow-xl transform hover:scale-105' 
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Descarga para Android
                  </Button>
                </a>
              </div>
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
