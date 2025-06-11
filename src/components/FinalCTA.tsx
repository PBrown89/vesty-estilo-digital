import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const FinalCTA = () => {
  return <footer className="relative text-white py-16 overflow-hidden" style={{
    backgroundImage: `url('/lovable-uploads/55056cdc-2aca-4de0-a017-77259b4fe6de.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/[0.40]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre Vesty */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Sobre Vesty</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm">
                  Contacta con nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm">
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
              <Button variant="outline" className="w-full bg-transparent border-gray-400 text-gray-200 hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm">
                iOS App Store
              </Button>
              <Button variant="outline" className="w-full bg-transparent border-gray-400 text-gray-200 hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm">
                Google Play
              </Button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110" aria-label="TikTok">
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