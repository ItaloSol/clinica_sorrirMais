import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80"
              alt="Equipamento odontológico moderno"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que Escolher a DentalCare?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Com mais de 15 anos de experiência, construímos nossa reputação oferecendo
              atendimento odontológico excepcional em um ambiente confortável e acolhedor.
            </p>
            
            <div className="space-y-4">
              {[
                'Instalações e equipamentos de última geração',
                'Profissionais experientes e atenciosos',
                'Ampla gama de serviços odontológicos',
                'Ambiente confortável e relaxante',
                'Horários flexíveis e atendimento de emergência'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;