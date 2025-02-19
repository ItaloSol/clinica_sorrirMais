import React from 'react';
import { Bluetooth as Tooth, Sparkles, Stethoscope, Baby } from 'lucide-react';

const services = [
  {
    icon: <Tooth className="w-8 h-8 text-blue-600" />,
    title: 'Odontologia Geral',
    description: 'Cuidados odontológicos abrangentes, incluindo limpeza, restaurações e tratamentos preventivos.'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: 'Odontologia Estética',
    description: 'Transforme seu sorriso com nossos procedimentos e tratamentos estéticos avançados.'
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: 'Ortodontia',
    description: 'Alcance um sorriso perfeitamente alinhado com nossas soluções ortodônticas.'
  },
  {
    icon: <Baby className="w-8 h-8 text-blue-600" />,
    title: 'Odontopediatria',
    description: 'Atendimento odontológico especializado para crianças em um ambiente confortável e amigável.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços odontológicos para atender todas as suas necessidades de saúde bucal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;