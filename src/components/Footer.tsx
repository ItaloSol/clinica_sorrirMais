import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DentalCare</h3>
            <p className="text-gray-400">
              Oferecendo atendimento odontológico excepcional e criando sorrisos bonitos desde 2008.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white">Equipe</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Odontologia Geral</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Odontologia Estética</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ortodontia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Odontopediatria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DentalCare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;