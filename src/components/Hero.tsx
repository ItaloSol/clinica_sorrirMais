import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
            alt="Clínica odontológica moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seu Sorriso, Nossa Paixão
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Experimente um atendimento odontológico excepcional com nossa equipe de profissionais especializados.
                Estamos comprometidos em dar a você o sorriso confiante que você merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Agendar Consulta
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;