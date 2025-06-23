
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Apple, Star, Smartphone, Camera, Palette, Sparkles } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

const ArmarioDigital = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  Tu <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">armario digital</span> personalizado
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Digitaliza todas tus prendas, organízalas automáticamente y accede a tu guardarropa completo desde tu móvil. La revolución del armario inteligente ha llegado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3">
                    <Apple className="w-6 h-6" />
                    Crear mi armario digital
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 en App Store</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/3d4a8528-0afc-4d2d-84ed-fe843fda8c2f.png" 
                alt="Mujer organizando su armario digital con Vesty" 
                className="w-full max-w-md mx-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              ¿Por qué necesitas un armario digital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforma tu relación con la ropa y descubre el poder de tener tu guardarropa organizado digitalmente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Acceso total desde tu móvil</h3>
              <p className="text-gray-600">Ve todas tus prendas organizadas por categorías, colores y ocasiones. Tu armario completo en tu bolsillo.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                <Camera className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Catalogación automática</h3>
              <p className="text-gray-600">Solo fotografía tus prendas y la IA las organiza automáticamente. Sin etiquetas manuales ni complicaciones.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Combinaciones inteligentes</h3>
              <p className="text-gray-600">Recibe sugerencias de looks personalizadas basadas en tu estilo, el clima y la ocasión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              Cómo crear tu armario digital en 3 pasos
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-purple-600">01</span>
                  <h3 className="text-2xl font-bold text-gray-900">Fotografía tus prendas</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Haz fotos de tu ropa con el móvil. Nuestra IA reconoce automáticamente el tipo de prenda, color y estilo.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/3d4a8528-0afc-4d2d-84ed-fe843fda8c2f.png" 
                  alt="Fotografiando ropa para crear armario digital" 
                  className="w-full max-w-sm mx-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-pink-600">02</span>
                  <h3 className="text-2xl font-bold text-gray-900">Organización automática</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Vesty organiza tu ropa por categorías, colores y temporadas automáticamente. Sin trabajo manual.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/a70262fc-420a-4478-9893-f0800ea3d26b.png" 
                  alt="Organización automática del armario digital" 
                  className="w-full max-w-sm mx-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-orange-600">03</span>
                  <h3 className="text-2xl font-bold text-gray-900">Crea looks perfectos</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Combina prendas digitalmente, recibe sugerencias personalizadas y planifica tus outfits de la semana.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/5bfb2d50-21cc-4ed1-9b19-5fe6c0001deb.png" 
                  alt="Creando looks con armario digital" 
                  className="w-full max-w-sm mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-black text-white">
              Revoluciona tu forma de vestir hoy
            </h2>
            <p className="text-xl text-white/90">
              Únete a miles de mujeres que ya han transformado su relación con la moda gracias al armario digital de Vesty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
                  <Apple className="w-6 h-6 mr-2" />
                  Descargar para iOS
                </Button>
              </a>
              <a href="https://play.google.com/store/search?q=vesty&c=apps&hl=es" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold">
                  Descargar para Android
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default ArmarioDigital;
