import React from 'react';

const team = [
  {
    name: 'Dra. Mariana Amaral',
    role: 'Ortodontista',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    description: 'Dedicada a proporcionar um atendimento gentil para nossos pacientes.'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheça Nossa Equipe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa experiente equipe de profissionais está comprometida em proporcionar
            o mais alto padrão de atendimento em um ambiente confortável.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
            <img
              src={team[0].image}
              alt={team[0].name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{team[0].name}</h3>
              <p className="text-blue-600 mb-3">{team[0].role}</p>
              <p className="text-gray-600">{team[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;