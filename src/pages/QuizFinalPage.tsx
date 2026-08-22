import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuizFinalInteractivo } from '../components/quiz/QuizFinalInteractivo';

export function QuizFinalPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-light">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-8"
      >
        <div className="w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate('/dashboard')}
            className="mb-4 text-white/80 hover:text-white transition"
          >
            ← Volver al Dashboard
          </motion.button>
          <h1 className="text-4xl font-bold mb-2">🩺 Quiz Final: Diagnostica el Caso</h1>
          <p className="text-white/90">
            5 casos clínicos reales — practicá la asignación de Estadio, Extensión y Grado.
          </p>
        </div>
      </motion.div>

      <div className="w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6 py-12">
        <QuizFinalInteractivo />
      </div>
    </div>
  );
}
