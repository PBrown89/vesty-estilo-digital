import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const FinalCTA = () => {
  return <footer className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white py-16 overflow-hidden">
      {/* Fun background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="funPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
              <path d="M40 10 Q50 20 40 30 Q30 20 40 10" fill="currentColor" opacity="0.2" />
              <rect x="60" y="15" width="8" height="8" rx="2" fill="currentColor" opacity="0.25" />
              <path d="M15 50 L25 40 L35 50 L25 60 Z" fill="currentColor" opacity="0.2" className="bg-transparent" />
              <circle cx="70" cy="45" r="4" fill="currentColor" opacity="0.3" />
              <path d="M10 70 Q20 80 30 70 Q20 60 10 70" fill="currentColor" opacity="0.25" />
              <rect x="50" y="65" width="6" height="12" rx="3" fill="currentColor" opacity="0.2" />
              <path d="M75 75 L85 70 L85 80 Z" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#funPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre Vesty */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Sobre Vesty</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit">
                  Contacta con nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit">
                  Reportar un error
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Descarga la app */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Descarga la app</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full bg-transparent border-slate-400 text-slate-200 hover:bg-slate-600 hover:text-white transition-colors duration-200 font-outfit">
                iOS App Store
              </Button>
              <Button variant="outline" className="w-full bg-transparent border-slate-400 text-slate-200 hover:bg-slate-600 hover:text-white transition-colors duration-200 font-outfit">
                Google Play
              </Button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-slate-200 hover:text-white hover:bg-slate-500 transition-all duration-200 hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Dashed Separator */}
        <div className="border-t border-dashed border-slate-400 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-slate-300 text-sm font-outfit">
            © 2025 Vesty. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default FinalCTA;