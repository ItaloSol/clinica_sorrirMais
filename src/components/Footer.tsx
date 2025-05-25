import { Facebook, MapPinned, Instagram } from 'lucide-react';
import Logo from '../img/logo.webp';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={Logo} alt="SorrirMais Logo" className="w-32 h-auto mb-4" />
            <p className="text-gray-400">
              Oferecendo atendimento odontológico excepcional e criando sorrisos bonitos desde 2017.
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
              <a target='_blank' rel="noopener" href="https://www.facebook.com/sorrirmais.odontoval" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a target='_blank' rel="noopener" href="https://www.instagram.com/sorrirmais.odonto" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a target='_blank' rel="noopener" href="https://maps.app.goo.gl/gccYiwmp5tLfuraGA" className="text-gray-400 hover:text-white">
                <MapPinned className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SorrirMais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;