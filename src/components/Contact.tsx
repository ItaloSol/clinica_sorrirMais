import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    comments: ''
  });

  const services = [
    'Odontologia Geral',
    'Odontologia Estética',
    'Aparelho Ortodôntico',
    'Restauração Dental',
    'Tratamento de Canal',
    'Implantes Dentários',
    'Próteses Dentárias'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDate = new Date(formData.date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
    
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar uma consulta:\n\n` +
      `Nome: ${formData.name}\n` +
      `Data: ${formattedDate}\n` +
      `Horário: ${formData.time}\n` +
      `Especialidade: ${formData.service}\n` +
      `Comentários adicionais: ${formData.comments}`
    );
    window.open(`https://wa.me/5561996190502?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aqui para ajudar! Entre em contato para esclarecer dúvidas ou agendar uma consulta.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  title: 'Localização',
                  content: 'R. Tupinambás, Quadra 16 - Loja 07 Anhanguera C, Valparaíso de Goiás - GO',
                  link: 'https://maps.app.goo.gl/gccYiwmp5tLfuraGA'
                },
                {
                  Icon: Phone,
                  title: 'Telefone',
                  content: '(61) 99619-0502',
                  link: 'tel:996190502'
                },
                {
                  Icon: Mail,
                  title: 'E-mail',
                  content: 'gerencia.sorrirmais@gmail.com',
                  link: 'mailto:gerencia.sorrirmais@gmail.com'
                },
                {
                  Icon: Clock,
                  title: 'Horário de Funcionamento',
                  content: 'Segunda a Sexta: 8:30 às 18:00\nSábado: 8:30 às 12:00\nDomingo: Fechado'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <item.Icon className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    {item.link ? (
                      <a target='_blank' href={item.link}>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                      </a>
                    ) : (
                      <>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Agende sua Consulta</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  {
                    label: 'Nome Completo',
                    type: 'text',
                    name: 'name',
                    required: true
                  },
                  {
                    label: 'Data',
                    type: 'date',
                    name: 'date',
                    required: true
                  },
                  {
                    label: 'Horário',
                    type: 'time',
                    name: 'time',
                    required: true,
                    min: '09:00',
                    max: '18:00'
                  }
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="transform transition-all duration-200 hover:scale-[1.01]"
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      {...field}
                      id={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="transform transition-all duration-200 hover:scale-[1.01]"
                >
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Especialidade
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                  >
                    <option value="">Selecione uma especialidade</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="transform transition-all duration-200 hover:scale-[1.01]"
                >
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                    Comentários Adicionais
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center gap-3 font-medium text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Enviar Agendamento via WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;