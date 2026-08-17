import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Cómo Funciona', href: '#como-funciona' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="UNICOC"
            className="h-10"
          />
        </motion.div>

        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-text-dark hover:text-unicoc-red transition font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-unicoc-red text-white px-6 py-2 rounded-lg hover:bg-unicoc-red-dark transition font-semibold shadow-lg hover:shadow-xl"
        >
          Acceder
        </motion.button>

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
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-text-dark hover:text-unicoc-red transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-unicoc-red text-white px-6 py-2 rounded-lg hover:bg-unicoc-red-dark transition font-semibold">
            Acceder
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
