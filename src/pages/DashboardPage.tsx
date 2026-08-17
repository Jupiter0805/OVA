import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bg-light p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-unicoc-red mb-2">
              Bienvenido, {user?.user_metadata?.full_name || user?.email}
            </h1>
            <p className="text-text-light text-lg">
              Dashboard - Capítulos próximamente
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-unicoc-red text-white px-6 py-3 rounded-lg font-bold hover:bg-unicoc-red-dark transition shadow-lg"
          >
            Salir
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glassmorphism rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            Tus Capítulos
          </h2>
          <p className="text-text-light text-lg">
            Los 4 capítulos de OVA Periodontitis aparecerán aquí próximamente...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-unicoc-red-light to-unicoc-red rounded-2xl p-8 text-white shadow-lg">
            <p className="text-lg font-medium">Email:</p>
            <p className="font-bold text-xl mt-1">{user?.email}</p>
          </div>
          <div className="bg-gradient-to-br from-unicoc-red-light to-unicoc-red rounded-2xl p-8 text-white shadow-lg">
            <p className="text-lg font-medium">UID:</p>
            <p className="font-bold text-xl mt-1 truncate">{user?.id}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
