import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export function Header() {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 md:px-10 min-h-[8vh] flex items-center justify-between gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer shrink-0"
          onClick={() => navigate('/')}
        >
          <img src="/logo.png" alt="UNICOC" className="h-12 md:h-16 w-auto" />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#inicio" className="text-text-dark hover:text-unicoc-red transition font-medium">
            Inicio
          </a>
          <a href="/#caracteristicas" className="text-text-dark hover:text-unicoc-red transition font-medium">
            Características
          </a>
          <a href="/#como-funciona" className="text-text-dark hover:text-unicoc-red transition font-medium">
            Cómo Funciona
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/dashboard')}
                className="text-text-dark hover:text-unicoc-red transition font-medium"
              >
                Dashboard
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-unicoc-red text-white px-8 py-3 rounded-xl hover:bg-unicoc-red-dark transition font-semibold shadow-lg"
              >
                Salir
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/login')}
                className="text-text-dark hover:text-unicoc-red transition px-4 py-2 font-medium"
              >
                Iniciar Sesión
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/signup')}
                className="bg-unicoc-red text-white px-8 py-3 rounded-xl hover:bg-unicoc-red-dark transition font-semibold shadow-lg"
              >
                Registrarse
              </motion.button>
            </>
          )}
        </div>

        <motion.button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white/95 backdrop-blur-lg"
        >
          <a href="/#inicio" className="text-text-dark hover:text-unicoc-red transition font-medium" onClick={() => setIsOpen(false)}>
            Inicio
          </a>
          <a href="/#caracteristicas" className="text-text-dark hover:text-unicoc-red transition font-medium" onClick={() => setIsOpen(false)}>
            Características
          </a>
          <a href="/#como-funciona" className="text-text-dark hover:text-unicoc-red transition font-medium" onClick={() => setIsOpen(false)}>
            Cómo Funciona
          </a>
          {isAuthenticated ? (
            <>
              <button
                onClick={() => { setIsOpen(false); navigate('/dashboard'); }}
                className="text-text-dark hover:text-unicoc-red transition font-medium text-left"
              >
                Dashboard
              </button>
              <button
                onClick={() => { setIsOpen(false); handleLogout(); }}
                className="bg-unicoc-red text-white px-8 py-3 rounded-xl hover:bg-unicoc-red-dark transition font-semibold"
              >
                Salir
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => { setIsOpen(false); navigate('/login'); }}
                className="text-text-dark hover:text-unicoc-red transition font-medium text-left"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => { setIsOpen(false); navigate('/signup'); }}
                className="bg-unicoc-red text-white px-8 py-3 rounded-xl hover:bg-unicoc-red-dark transition font-semibold"
              >
                Registrarse
              </button>
            </>
          )}
        </motion.div>
      )}
    </motion.header>
  );
}
