import { motion } from 'framer-motion';
import dentista1 from '../img/frank.png';
import mari from '../img/mari.png';
import mayara from '../img/mayara.png';
// Define team data structure
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

// Sample team data
const team: TeamMember[] = [
  {
    name: 'Dra. Mariana Amaral',
    role: 'Clínico Geral e Ortodontista',
    image: mari,
    description: 'Especialista em tratamentos ortodônticos e atendimento clínico geral.'
  },
  {
    name: 'Dra. Mayhara Dantas',
    role: 'Endodontista e Harmonização Facial',
    image: mayara,
    description: 'Especialista em tratamentos de canal e procedimentos de harmonização facial.'
  },
  {
    name: 'Dr. Franklin Vieira',
    role: 'Implantodontista, Cirurgião Oral e Estética Dental',
    image: dentista1,
    description: 'Especialista em implantes dentários, cirurgias orais e procedimentos estéticos.'
  }
  // Add more team members as needed
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Conheça Nossa Equipe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Nossa experiente equipe de profissionais está comprometida em proporcionar
            o mais alto padrão de atendimento em um ambiente confortável.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeInOut" } }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden flex justify-center items-center bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;