import React, { useState } from 'react';
import { 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import denteIcon2 from '/src/img/dente2.svg'; // Importando o SVG como um componente
import denteIcon3 from '/src/img/dente3.svg'; // Importando o SVG como um componente
import denteIcon4 from '/src/img/dente4.svg'; // Importando o SVG como um componente
import denteIcon5 from '/src/img/dente5.svg'; // Importando o SVG como um componente
import denteIcon6 from '/src/img/dente6.svg'; // Importando o SVG como um componente
const services = [
  {
    icon: <img src={denteIcon5} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Odontologia Geral',
    description: 'Cuidados completos para sua saúde bucal, incluindo limpeza profissional, prevenção de cáries, tratamento de gengivite e procedimentos restauradores. Nossa equipe especializada garante seu bem-estar com as técnicas mais modernas.'
  },
  {
    icon: <img src={denteIcon6} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Odontologia Estética',
    description: 'Transforme seu sorriso com procedimentos estéticos avançados, incluindo clareamento dental, facetas de porcelana, lentes de contato dental e restaurações estéticas. Resultados naturais e duradouros para um sorriso mais bonito e confiante.'
  },
  {
    icon: <img src={denteIcon2} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Aparelho Ortodôntico',
    description: 'Oferecemos diversos tipos de aparelhos ortodônticos, desde os tradicionais até os mais modernos. Tratamento personalizado para cada paciente, com acompanhamento regular e resultados precisos.'
  },
  {
    icon: <img src={denteIcon4} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Restauração Dental',
    description: 'Recupere a forma e função dos seus dentes com restaurações de alta qualidade. Utilizamos materiais de última geração que garantem durabilidade e uma aparência natural, devolvendo a beleza do seu sorriso.'
  },
  {
    icon: <img src={denteIcon3} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Tratamento de Canal',
    description: 'Procedimento especializado para tratar dentes com comprometimento do nervo, eliminando a dor e preservando o dente natural. Realizado com tecnologia moderna e técnicas minimamente invasivas para maior conforto.'
  },
  {
    icon: <img src={denteIcon6} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Implantes Dentários',
    description: 'Substitua dentes perdidos com implantes de titânio de alta qualidade. Procedimento seguro e eficaz que restaura a função mastigatória e a estética do seu sorriso com resultados naturais e duradouros.'
  },
  {
    icon: <img src={denteIcon2} alt="Dente" className="w-8 h-8" />, // Usando o SVG como uma imagem
    title: 'Próteses Dentárias',
    description: 'Soluções personalizadas para substituição de dentes, incluindo próteses fixas e removíveis. Confeccionadas com materiais de alta qualidade para garantir conforto, funcionalidade e naturalidade.'
  }
  
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextPage();
    } else if (isRightSwipe) {
      prevPage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentServices = services.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Oferecemos uma ampla gama de serviços odontológicos para atender todas as suas necessidades de saúde bucal.
          </motion.p>
        </div>

        <div className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {currentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Botões de navegação */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Serviços anteriores"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Próximos serviços"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicadores de página */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;