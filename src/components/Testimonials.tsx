import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Jheniffer Muniz",
    date: "11 meses atrás",
    text: "Muito bem atendida. Da recepcionista que sempre foi muito atenciosa e prestativa, até a Doutora Mari que é um amor, faz seu trabalho com excelência e muito carinho. Fui indicada por minha tia que já indo a família toda, e hoje toda minha família já fez ou faz tratamento com ela. E indicamos pra todos!",
    rating: 5
  },
  {
    name: "Matheus Porfirio",
    date: "9 meses atrás",
    text: "Excelente profissional, atendimento acolhedor, Dra. Mariana é decidida acolhedora, paciente, o seu orçamento é limpo e objetivo, e ainda vai te deixar surpreendido com o resultado! Tem um dom de nos dar um sorriso novo o nosso sorriso mais natural, suave! Quero registrar meus sinceros agradecimento e cuidados, o sorriso é outro!",
    rating: 5
  },
  {
    name: "Vanessa Reis",
    date: "11 meses atrás",
    text: "Excelente atendimento do começo ao fim. Ambiente aconchegante, limpo e bem organizado, Dra Mariana me passou confiança, tem propriedade e segurança no tratamento proposto.",
    rating: 5
  },
  {
    name: "Patty Sárib",
    date: "11 meses atrás",
    text: "Excelente atendimento desde a recepção! A Dra.Mariana é super simpática e atenciosa, tem mãos de fada! E ela nos deixa bem relaxados no momento em que trabalha. Notal 10!",
    rating: 5
  },
  {
    name: "Keila Amorim maciel da silva",
    date: "11 meses atrás",
    text: "Dra. Mariana super atenciosa,a melhor dentista que alguém pode ter . Shallana recepcionista maravilhosa 😍. Tudo sem comparação amo ser atendida por vcs 😍. …",
    rating: 5
  },
  {
    name: "Gildete Maria dos Santos Gil",
    date: "11 meses atrás",
    text: "Eu estou muito satisfeita com meu tratamento com vocês e, da doutora Mariana.. Meu sorriso mudou para melhor.",
    rating: 5
  },
  {
    name: "Raquel Martins",
    date: "11 meses atrás",
    text: "Pra mim tá sendo a melhor clínica, atendimento impecável, tanto pelo moça da recepção, quanto pela doutora",
    rating: 5
  },
  {
    name: "carlos messias cordeiro da silva",
    date: "11 meses atrás",
    text: "Ótimo atendimento, começando pela recepção até o atendimento pela doutora, ótimo padrão, recomendo de olhos fechados😊 …",
    rating: 5
  },
  {
    name: "Diana Marques",
    date: "11 meses atrás",
    text: "Ambiente super limpo, atendimento desde da recepção até o consultório maravilhoso!",
    rating: 5
  },
  {
    name: "kamila antunes dos santos",
    date: "11 meses atrás",
    text: "Excelente,  a melhor dentista da região!\nNão é atoa que confio meus pequenos a ela!!!",
    rating: 5
  },
  {
    name: "Vitoria Lorrane Brito",
    date: "11 meses atrás",
    text: "Doutora mariana e excelente profissional sempre nos tratando bem ❤️‍🩹 …",
    rating: 5
  },
  {
    name: "Patrícia Viana",
    date: "11 meses atrás",
    text: "Super recomendo!!\nÓtimo atendimento   e excelente profissional.",
    rating: 5
  },
  {
    name: "Márcio Magalhães",
    date: "11 meses atrás",
    text: "Ótima prestação de serviço, atendimento, flexibilidade de agenda.\n\nRecomendo!",
    rating: 5
  },
  {
    name: "roberto felgueiras",
    date: "11 meses atrás",
    text: "Sem dúvida a melhor experiência em dentista em todo Valparaíso",
    rating: 5
  },
  {
    name: "edson de jesus",
    date: "11 meses atrás",
    text: "Serviço prestado com qualidade e um excelente atendimento.",
    rating: 5
  },
  {
    name: "Josenilton Santos",
    date: "11 meses atrás",
    text: "Maravilhoso o melhor lugar para seu sorriso",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerView,
    (currentPage * itemsPerView) + itemsPerView
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            O Que Nossos Pacientes Dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Confira as avaliações dos nossos pacientes no Google
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="flex gap-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-md flex-shrink-0 ${
                      itemsPerView === 1 ? 'w-full' :
                      itemsPerView === 2 ? 'w-[calc(50%-12px)]' :
                      'w-[calc(33.333%-16px)]'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-4 md:line-clamp-none">{testimonial.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                aria-label="Avaliações anteriores"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                aria-label="Próximas avaliações"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

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

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/SorrirMais+Odontologia/@-16.0636503,-48.013578,17z/data=!4m8!3m7!1s0x93598128d97ac03b:0xed5f9592a3e7dd5!8m2!3d-16.0636555!4d-48.0110031!9m1!1b1!16s%2Fg%2F11h_1lh5jx?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Ver Todas as Avaliações
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;