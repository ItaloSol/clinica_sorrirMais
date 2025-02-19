import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/5561996190502?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aqui para ajudar! Entre em contato para esclarecer dúvidas ou agendar uma consulta.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Localização</h3>
                  <p className="text-gray-600">Rua Dental, 123, Cidade da Saúde, 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">(11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">contato@dentalcare.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9:00 às 18:00<br />
                    Sábado: 9:00 às 14:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Agende sua Consulta</h3>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 text-white px-6 py-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar via WhatsApp
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md h-[400px]">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.8076936254584!2d-48.01116500000001!3d-16.063635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzQ5LjEiUyA0OMKwMDAnNDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1709764543841!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
                title="Localização da Clínica"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;