
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [{
    name: "Gratuito",
    price: "0 €/mes",
    badge: "Plan actual",
    badgeColor: "bg-green-100 text-green-700",
    features: ["Sin créditos disponibles.", "Planificación de outfits de 2 semanas.", "Cantidad de armarios limitados."],
    buttonText: "Seleccionar plan",
    buttonStyle: "border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    popular: false
  }, {
    name: "Premium",
    price: "14,99 €/mes",
    features: ["Planifica hasta 1 mes de outfits.", "Crea hasta 4 armarios.", "60 créditos para usar tanto en el probador como en las pruebas de color."],
    buttonText: "Seleccionar plan",
    buttonStyle: "border-2 border-vesty-purple text-vesty-purple bg-white hover:bg-purple-50",
    popular: false
  }, {
    name: "Unlimited",
    price: "19,99 €/mes",
    badge: "Más valorado",
    badgeColor: "bg-gradient-to-r from-vesty-purple to-purple-600 text-white",
    features: ["Crea todos los outfits que quieras, sin restricciones.", "Añade tantos armarios como necesites.", "Usa el probador virtual tantas veces como te apetezca.", "Experimenta con todas las pruebas de color que necesites.", "Combina, prueba y repite sin límites."],
    buttonText: "Seleccionar plan",
    buttonStyle: "bg-vesty-gradient text-white hover:opacity-90",
    popular: true
  }];

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
            Desde gratis hasta ilimitado. Encuentra el plan que mejor se adapte a tu estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-2 border-vesty-purple scale-105' : 'border border-gray-200'}`}>
              {plan.badge && (
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold font-inter mb-6 ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-black font-outfit text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              <div className="text-3xl font-black font-outfit text-gray-900 mb-8">
                {plan.price}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? 'bg-vesty-purple' : 'bg-gray-100'}`}>
                      <svg className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`font-inter text-sm leading-relaxed ${plan.popular ? 'text-vesty-purple' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full py-3 px-6 rounded-xl font-semibold font-inter transition-all duration-200 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
