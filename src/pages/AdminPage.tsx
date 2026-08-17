import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { adminService } from '../services/adminService';
import type { AdminUserSummary } from '../services/adminService';

const ROLE_LABELS: Record<AdminUserSummary['user_type'], string> = {
  master: 'Master',
  admin: 'Admin',
  student: 'Estudiante',
};

const ROLE_STYLES: Record<AdminUserSummary['user_type'], string> = {
  master: 'bg-unicoc-red text-white',
  admin: 'bg-unicoc-red-light text-white',
  student: 'bg-gray-200 text-text-dark',
};

export function AdminPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<AdminUserSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmingId, setConfirmingId] = useState<string | null>(null);
  const [resettingId, setResettingId] = useState<string | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    const data = await adminService.getAllUsersSummary();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleReset = async (userId: string) => {
    setResettingId(userId);
    const ok = await adminService.resetUserProgress(userId);
    setResettingId(null);
    setConfirmingId(null);
    if (ok) {
      await loadUsers();
    }
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg sticky top-0 z-40"
      >
        <div className="w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-unicoc-red mb-1">Panel de Administración</h1>
            <p className="text-text-light">{users.length} usuarios registrados</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
            className="text-text-dark hover:text-unicoc-red transition font-medium"
          >
            ← Volver al Dashboard
          </motion.button>
        </div>
      </motion.div>

      <div className="w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="rounded-full h-12 w-12 border-4 border-unicoc-red border-t-transparent mx-auto mb-4"
            />
            <p className="text-text-light">Cargando usuarios...</p>
          </div>
        ) : users.length === 0 ? (
          <p className="text-text-light text-center py-12">No hay usuarios registrados todavía.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-bg-light text-text-dark text-sm">
                    <th className="px-6 py-4 font-semibold">Usuario</th>
                    <th className="px-6 py-4 font-semibold">Rol</th>
                    <th className="px-6 py-4 font-semibold">Progreso</th>
                    <th className="px-6 py-4 font-semibold">Última actividad</th>
                    <th className="px-6 py-4 font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t border-border-light">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-text-dark">{u.full_name || '(sin nombre)'}</p>
                        <p className="text-sm text-text-light">{u.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${ROLE_STYLES[u.user_type]}`}>
                          {ROLE_LABELS[u.user_type]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-dark">
                        {u.chaptersCompleted} completados · {u.chaptersInProgress} en progreso
                      </td>
                      <td className="px-6 py-4 text-sm text-text-light">
                        {u.lastActivity ? new Date(u.lastActivity).toLocaleDateString('es-CO') : '—'}
                      </td>
                      <td className="px-6 py-4">
                        {confirmingId === u.id ? (
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              disabled={resettingId === u.id}
                              onClick={() => handleReset(u.id)}
                              className="bg-unicoc-red text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-unicoc-red-dark transition disabled:opacity-50"
                            >
                              {resettingId === u.id ? 'Reiniciando...' : '¿Confirmar?'}
                            </motion.button>
                            <button
                              onClick={() => setConfirmingId(null)}
                              disabled={resettingId === u.id}
                              className="text-text-light text-xs font-medium hover:text-text-dark transition"
                            >
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setConfirmingId(u.id)}
                            className="border-2 border-unicoc-red text-unicoc-red px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-unicoc-red hover:text-white transition"
                          >
                            Reiniciar Progreso
                          </motion.button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
