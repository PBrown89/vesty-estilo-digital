
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold font-outfit bg-gradient-to-r from-vesty-purple to-pink-500 bg-clip-text text-transparent">
            Vesty
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-inter text-gray-700 hover:text-vesty-purple transition-colors">
              Funciones
            </a>
            <a href="#testimonios" className="font-inter text-gray-700 hover:text-vesty-purple transition-colors">
              Testimonios
            </a>
            <Button className="bg-vesty-purple hover:bg-purple-600 text-white font-inter">
              Empieza gratis
            </Button>
          </nav>

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

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="font-inter text-gray-700">Funciones</a>
              <a href="#testimonios" className="font-inter text-gray-700">Testimonios</a>
              <Button className="bg-vesty-purple text-white font-inter w-full mt-4">
                Empieza gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
