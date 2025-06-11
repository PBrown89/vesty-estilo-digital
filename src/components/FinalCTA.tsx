import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const FinalCTA = () => {
  return (
    <footer 
      className="relative text-white py-16 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/a61d7ea7-1a24-4edf-9706-d15728310c2c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability with the new background */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre Vesty */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Sobre Vesty</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit"
                >
                  Contacta con nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit"
                >
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
                <a 
                  href="/terminos" 
                  className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-outfit"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Descarga la app */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Descarga la app</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-slate-400 text-slate-200 hover:bg-slate-600 hover:text-white transition-colors duration-200 font-outfit"
              >
                iOS App Store
              </Button>
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-slate-400 text-slate-200 hover:bg-slate-600 hover:text-white transition-colors duration-200 font-outfit"
              >
                Google Play
              </Button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 font-outfit">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-slate-200 hover:text-white hover:bg-slate-500 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
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
    </footer>
  );
};

export default FinalCTA;
