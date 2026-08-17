import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email.endsWith('@unicoc.edu.co')) {
      setError('Por favor usa tu email de UNICOC (@unicoc.edu.co)');
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password, fullName);

    if (error) {
      setError(error.message || 'Error al registrarse');
      setLoading(false);
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  if (success) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glassmorphism rounded-2xl p-8 text-center max-w-md border-2 border-green-200"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-4"
          >
            ✓
          </motion.div>
          <h3 className="text-3xl font-bold text-unicoc-red mb-4">
            ¡Registro exitoso!
          </h3>
          <p className="text-text-dark mb-4 font-medium">
            Te hemos enviado un email de confirmación. Por favor verifica tu correo.
          </p>
          <p className="text-sm text-text-light animate-pulse">
            Redirigiendo a login en 3 segundos...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="glassmorphism rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-unicoc-red mb-2">
              Crear Cuenta
            </h1>
            <p className="text-text-light">
              Únete a OVA Periodontitis
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Nombre Completo
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-unicoc-red focus:border-transparent transition"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Email UNICOC
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-unicoc-red focus:border-transparent transition"
                placeholder="juan.perez@unicoc.edu.co"
              />
              <p className="text-xs text-text-light mt-1">
                ⚠️ Debes usar tu email de UNICOC (@unicoc.edu.co)
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Contraseña
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-unicoc-red focus:border-transparent transition"
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </motion.button>
          </form>

          <p className="text-center text-text-light mt-6">
            ¿Ya tienes cuenta?{' '}
            <Link
              to="/login"
              className="text-unicoc-red hover:text-unicoc-red-dark font-bold transition"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
