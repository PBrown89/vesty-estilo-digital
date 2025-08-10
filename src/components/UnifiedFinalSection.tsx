import { Button } from "@/components/ui/button";
import { Apple, Star, Instagram } from "lucide-react";

const UnifiedFinalSection = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Download CTA Section */}
      <div className="bg-gray-50 text-gray-900 relative overflow-hidden py-[130px] flex-1 flex items-center">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-20 -left-16 w-64 h-64 bg-vesty-purple/10 rounded-full"></div>
          <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-coral-500/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Título principal */}
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Descárgala gratis y empieza a crear{" "}
              <span className="bg-gradient-to-r from-vesty-purple via-pink-500 to-coral-500 bg-clip-text text-transparent">
                tus looks hoy mismo
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Únete a miles de personas que ya han transformado su forma de vestir con Vesty
            </p>

            {/* Botones de descarga */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="w-full bg-vesty-purple text-white text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-0">
                  <Apple className="w-6 h-6" fill="white" />
                  Descargar para iOS
                </Button>
              </a>

              <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="w-full text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 border-2 bg-white text-vesty-purple border-vesty-purple hover:bg-vesty-purple/20">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Descargar para Android
                </Button>
              </a>
            </div>

            {/* Información adicional */}
            <div className="flex items-center justify-center gap-6 pt-8 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm font-medium">4.9/5 valoración</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-sm font-medium">Gratis en App Store y Google Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="relative bg-gray-900 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url("/lovable-uploads/ab991d48-cba9-4620-999c-551bb38cdb18.jpg")`,
        }}
      >
        {/* Overlay oscuro para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sobre Vesty */}
            <div>
              <h3 className="text-xl font-bold mb-6">Sobre Vesty</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:hola@vesty.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contacta con nosotros
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:reportar@vesty.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Reportar un error
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="/terminos" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a 
                    href="/privacidad" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>

            {/* Descarga la app */}
            <div>
              <h3 className="text-xl font-bold mb-6">Descarga la app</h3>
              <div className="space-y-4">
                <a 
                  href="https://apps.apple.com/es/app/vesty/id6743717284" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full justify-center text-white border-white hover:bg-white hover:text-gray-900">
                    iOS App Store
                  </Button>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full justify-center text-white border-white hover:bg-white hover:text-gray-900">
                    Google Play
                  </Button>
                </a>
              </div>
            </div>

            {/* Síguenos */}
            <div>
              <h3 className="text-xl font-bold mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/vesty.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://tiktok.com/@vesty.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.62V10.3a6.33 6.33 0 00-1.49-.18 6.34 6.34 0 106.34 6.34V8.35a8.16 8.16 0 004.37 1.26v-3.45a4.85 4.85 0 01-1.99-.47z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <hr className="border-gray-600 my-8" />

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Vesty. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default UnifiedFinalSection;