
import { Button } from "@/components/ui/button";
import { Instagram, TikTok } from "lucide-react";

const FinalCTA = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre Vesty */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Sobre Vesty</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contacta con nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Reportar un error
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Descarga la app */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Descarga la app</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                iOS App Store
              </Button>
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                Google Play
              </Button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="TikTok"
              >
                <TikTok size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Vesty. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FinalCTA;
