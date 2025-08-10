import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const FinalCTA = () => {
  return <footer className="relative text-white py-16 md:py-16 min-h-screen md:min-h-screen overflow-hidden" style={{
    backgroundImage: `url('/lovable-uploads/55056cdc-2aca-4de0-a017-77259b4fe6de.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/[0.40]"></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center md:justify-start">
        {/* Main footer content */}
        {/* Desktop/Tablet Download CTA merged with footer */}
        <div className="hidden md:block mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Descárgala gratis y empieza a crear{" "}
              <span className="bg-gradient-to-r from-vesty-purple via-pink-500 to-coral-500 bg-clip-text text-transparent">
                tus looks hoy mismo
              </span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Únete a miles de personas que ya han transformado su forma de vestir con Vesty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-gray-900 text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                  Descargar para iOS
                </Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 bg-transparent text-white border-white hover:bg-white/10">
                  Descargar para Android
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Sobre Vesty */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Sobre Vesty</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:vestyappes@gmail.com?subject=Contacto%20desde%20la%20web" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm">
                  Contacta con nosotros
                </a>
              </li>
              <li>
                <a href="mailto:vestyappes@gmail.com?subject=Reporte%20de%20error%20desde%20la%20web" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm">
                  Reportar un error
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/terminos" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Descarga la app */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Descarga la app</h3>
            <div className="space-y-3">
              <a href="https://apps.apple.com/es/app/vesty/id6743717284" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                <Button variant="outline" className="w-full bg-transparent border-gray-400 text-gray-200 hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm">
                  iOS App Store
                </Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=app.vesty.com&hl=es" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                <Button variant="outline" className="w-full bg-transparent border-gray-400 text-gray-200 hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm">
                  Google Play
                </Button>
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/vesty_app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@vestyapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.05z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-400 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Vesty. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default FinalCTA;
