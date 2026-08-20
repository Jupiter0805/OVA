import { motion } from 'framer-motion';

export function Features() {
  const cards = [
    {
      icon: '📚',
      title: 'Contenido Académico Profundo',
      points: [
        '14,000+ palabras de contenido académico en 32 lecciones',
        'Basado en Tonetti et al. (2018), Kornman et al. (2020), guías AAP/EFP',
        'Cubre fundamentos, diagnóstico, clasificación y casos clínicos',
        'Diseñado para residentes de periodoncia y especialistas',
      ],
    },
    {
      icon: '🏥',
      title: '8 Casos Clínicos Reales',
      points: [
        '8 casos clínicos, 4 con seguimiento mes a mes hasta los 24 meses',
        'Complicaciones reales y cómo se manejaron',
        'Evolución clínica y radiográfica documentada',
        'Decisiones genuinas: preservación vs. extracción, cirugía, mantenimiento',
      ],
    },
    {
      icon: '🎯',
      title: 'Herramientas de Decisión Clínica',
      points: [
        'Matriz Estadio × Grado con 12 combinaciones de pronóstico y plan terapéutico',
        'Algoritmo de decisión terapéutica paso a paso',
        '+50 casos clínicos breves distribuidos en los 4 capítulos',
        'Checklists diagnósticos y de manejo clínico',
      ],
    },
    {
      icon: '🔬',
      title: 'Clasificación Moderna AAP/EFP 2018',
      points: [
        'Estadio I-IV: severidad, desde incipiente hasta avanzada',
        'Grado A-C: velocidad de progresión de la enfermedad',
        'Modificadores integrados: tabaquismo, diabetes, genética, estrés',
        'Reclasificación post-terapia: cómo cambia el Grado cuando el paciente mejora',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="caracteristicas" className="py-24 md:py-32 gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-unicoc-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Por Qué Usar Este OVA
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-unicoc-red mx-auto mb-16 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glassmorphism p-8 rounded-2xl card-hover group"
            >
              <motion.div
                className="text-5xl mb-4 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark group-hover:text-unicoc-red transition">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.points.map((point, pidx) => (
                  <li key={pidx} className="flex gap-2 text-text-light leading-relaxed">
                    <span className="text-unicoc-red font-bold shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
