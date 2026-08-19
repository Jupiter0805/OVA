import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    { number: 1, title: 'REGÍSTRATE', description: 'Crea cuenta con email @unicoc.edu.co' },
    { number: 2, title: 'EXPLORA TU DASHBOARD', description: 'Los 4 capítulos y tu progreso en cada uno, siempre a la vista' },
    { number: 3, title: 'COMIENZA', description: '4 capítulos, 32 lecciones, 8 evaluaciones y 8 casos clínicos reales' },
    { number: 4, title: 'REFUERZA TU CRITERIO', description: 'Pretest, lecciones y posttest (≥70% para aprobar) en cada capítulo' },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-unicoc-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Cómo Funciona
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-unicoc-red to-unicoc-red-dark text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg"
              >
                {step.number}
              </motion.div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-text-light text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
