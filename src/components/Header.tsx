
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f3f956ab-76e8-4592-a091-0ab9f1794a0a.png" 
              alt="Vesty" 
              className="h-8"
            />
          </div>
          
          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-inter text-gray-700 hover:text-vesty-purple transition-colors">
              Inicio
            </a>
            <a href="#features" className="font-inter text-gray-700 hover:text-vesty-purple transition-colors">
              Funciones
            </a>
            <a href="#testimonials" className="font-inter text-gray-700 hover:text-vesty-purple transition-colors">
              Testimonios
            </a>
            <a href="#pricing" className="font-inter text-gray-700 hover:text-vesty-purple transition-colors">
              Precios
            </a>
            <Button className="bg-vesty-purple hover:bg-purple-600 text-white font-inter px-6 py-2 rounded-full">
              Download App
            </Button>
          </nav>

          {/* Menú móvil */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="font-inter text-gray-700">Inicio</a>
              <a href="#features" className="font-inter text-gray-700">Funciones</a>
              <a href="#testimonials" className="font-inter text-gray-700">Testimonios</a>
              <a href="#pricing" className="font-inter text-gray-700">Precios</a>
              <Button className="bg-vesty-purple text-white font-inter w-full mt-4 rounded-full">
                Download App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
