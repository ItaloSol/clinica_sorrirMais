import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../img/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/5561996190502?text=${message}`, '_blank');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 64; // height of the fixed navbar
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src={Logo} 
              alt="SorrirMais Logo" 
              className="p-2 w-32 h-20 object-contain" 
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Início</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Serviços</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Sobre</a>
            <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Equipe</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contato</a>
            <a href="#contact"  onClick={(e) => handleNavClick(e, 'contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Início</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Serviços</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Sobre</a>
            <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Equipe</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Contato</a>
            <button onClick={handleWhatsAppClick} className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;