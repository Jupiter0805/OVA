import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: '¿Es este contenido para pregrado o postgrado?',
    answer:
      'Está diseñado para residentes de periodoncia, especialistas y estudiantes de posgrado. Un estudiante de pregrado puede usarlo, pero encontrará el nivel exigente — el contenido no está simplificado.',
  },
  {
    question: '¿Cuánto tiempo toma completarlo?',
    answer:
      'Entre 6 y 8 horas de estudio en total, repartidas en 4 capítulos independientes. Puedes avanzar a tu propio ritmo y retomar donde quedaste.',
  },
  {
    question: '¿Incluye casos clínicos reales con seguimiento?',
    answer:
      'Sí. El Capítulo 4 incluye 8 casos clínicos reales, 4 de ellos con seguimiento mes a mes hasta los 24 meses, incluyendo las complicaciones que surgieron y cómo se manejaron.',
  },
  {
    question: '¿Puedo acceder sin conexión?',
    answer:
      'Por ahora la plataforma es 100% en línea. No hay una versión descargable disponible todavía.',
  },
  {
    question: '¿Está actualizado con las guías más recientes?',
    answer:
      'El contenido se basa en la clasificación AAP/EFP 2018 (Tonetti et al., Caton et al.), que sigue vigente como el estándar actual de diagnóstico y clasificación periodontal.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-unicoc-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-unicoc-red mx-auto mb-16 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="border border-border-light rounded-2xl overflow-hidden bg-bg-light"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-text-dark text-lg">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-unicoc-red shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-text-light leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
