
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-6">
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
            <button 
              onClick={scrollToTop}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('precios')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Precios
            </button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium">
              Descargar App
            </Button>
          </div>

          {/* Menú móvil */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <button onClick={scrollToTop} className="text-gray-700 text-left font-medium py-2">Inicio</button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-gray-700 text-left font-medium py-2">Cómo funciona</button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 text-left font-medium py-2">Testimonios</button>
              <button onClick={() => scrollToSection('precios')} className="text-gray-700 text-left font-medium py-2">Precios</button>
              <Button className="bg-gray-900 text-white w-full mt-4 rounded-lg font-medium">
                Descargar App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
