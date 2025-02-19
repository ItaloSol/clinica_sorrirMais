import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/5561996190502?text=${message}`, '_blank');
  };
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">SorrirMais</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Início</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600">Equipe</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
            <button onClick={handleWhatsAppClick} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
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
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Início</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Equipe</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
            <button onClick={handleWhatsAppClick} className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;