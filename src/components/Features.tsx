import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: '📚',
      title: 'Pedagogía Clara',
      description: 'Aprende paso a paso. Microlearning de 45 minutos por capítulo.',
    },
    {
      icon: '🎯',
      title: 'Casos Reales',
      description: '5-7 casos clínicos de artículos médicos.',
    },
    {
      icon: '⚡',
      title: 'Flexible',
      description: 'Pregrado o Máster. Tu ritmo, tu nivel.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          ¿Por Qué Este OVA?
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-unicoc-red mx-auto mb-16 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glassmorphism p-8 rounded-2xl card-hover group"
            >
              <motion.div
                className="text-6xl mb-6 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark group-hover:text-unicoc-red transition">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
