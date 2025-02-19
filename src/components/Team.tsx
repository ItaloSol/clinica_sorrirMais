import React from 'react';

const team = [
  {
    name: 'Dra. Sarah Johnson',
    role: 'Dentista Responsável',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    description: 'Especialista em odontologia estética com mais de 10 anos de experiência.'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Ortodontista',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
    description: 'Especialista em tratamentos com aparelhos tradicionais e invisíveis.'
  },
  {
    name: 'Dra. Emily Rodriguez',
    role: 'Odontopediatra',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    description: 'Dedicada a proporcionar um atendimento gentil para nossos pacientes mais jovens.'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;