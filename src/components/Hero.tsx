import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Hero() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleAccess = () => navigate(isAuthenticated ? '/dashboard' : '/login');
  const handleSeeFeatures = () => {
    document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="inicio"
      className="text-white py-32 md:py-48 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/odontologia.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay de marca: deja ver la foto pero mantiene el título como protagonista */}
      <div className="absolute inset-0 gradient-hero opacity-55" />

      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-unicoc-red-light rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Objeto virtual de aprendizaje para la enseñanza de la clasificación de periodontitis AAP/EFP 2018
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Interactivo. Basado en casos reales. Para pregrado y máster.
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAccess}
            className="bg-white text-unicoc-red px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transition"
          >
            Acceder al OVA
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSeeFeatures}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-unicoc-red transition"
          >
            Ver Características
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
