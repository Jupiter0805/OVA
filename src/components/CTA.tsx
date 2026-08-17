import { motion } from 'framer-motion';

export function CTA() {
  return (
    <motion.section
      className="gradient-hero text-white py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Listo Para Aprender<br />
          <span className="text-white">Periodontitis de Verdad?</span>
        </motion.h2>

        <motion.p
          className="text-2xl mb-12 text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Solo toma 4 horas. Comienza hoy.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08, boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-unicoc-red px-10 py-5 rounded-xl font-bold text-xl shadow-xl"
        >
          Acceder al OVA
        </motion.button>
      </div>
    </motion.section>
  );
}
