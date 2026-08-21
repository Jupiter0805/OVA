import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { adminService } from '../services/adminService';
import type { AdminUserSummary, ChapterProgressDetail } from '../services/adminService';
import type { UserType } from '../services/profileService';
import { useAuth } from '../context/AuthContext';

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

const ROLE_OPTIONS: UserType[] = ['student', 'admin', 'master'];

export function AdminPage() {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [users, setUsers] = useState<AdminUserSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionError, setActionError] = useState<string | null>(null);

  const [confirmingResetId, setConfirmingResetId] = useState<string | null>(null);
  const [resettingId, setResettingId] = useState<string | null>(null);

  const [roleEditingId, setRoleEditingId] = useState<string | null>(null);
  const [pendingRole, setPendingRole] = useState<UserType | null>(null);
  const [updatingRoleId, setUpdatingRoleId] = useState<string | null>(null);

  const [confirmingDeleteId, setConfirmingDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  const [loadingDetailId, setLoadingDetailId] = useState<string | null>(null);
  const [chapterDetails, setChapterDetails] = useState<Record<string, ChapterProgressDetail[]>>({});

  const viewerIsMaster = profile?.user_type === 'master';

  const loadUsers = async () => {
    setLoading(true);
    const data = await adminService.getAllUsersSummary();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const canManage = (u: AdminUserSummary) => {
    const isSelf = user?.id === u.id;
    const isMasterRow = u.user_type === 'master';
    return !isSelf && (!isMasterRow || viewerIsMaster);
  };

  const closeAllActions = () => {
    setConfirmingResetId(null);
    setRoleEditingId(null);
    setPendingRole(null);
    setConfirmingDeleteId(null);
  };

  const handleReset = async (userId: string) => {
    setResettingId(userId);
    const ok = await adminService.resetUserProgress(userId);
    setResettingId(null);
    setConfirmingResetId(null);
    if (ok) {
      await loadUsers();
    }
  };

  const handleRoleConfirm = async (userId: string) => {
    if (!pendingRole) return;
    setActionError(null);
    setUpdatingRoleId(userId);
    const { ok, error } = await adminService.updateUserRole(userId, pendingRole);
    setUpdatingRoleId(null);
    setRoleEditingId(null);
    setPendingRole(null);
    if (ok) {
      await loadUsers();
    } else {
      setActionError(error || 'No se pudo cambiar el rol.');
    }
  };

  const handleToggleDetail = async (userId: string) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null);
      return;
    }
    setExpandedUserId(userId);
    if (!chapterDetails[userId]) {
      setLoadingDetailId(userId);
      const details = await adminService.getUserChapterDetails(userId);
      setChapterDetails((prev) => ({ ...prev, [userId]: details }));
      setLoadingDetailId(null);
    }
  };

  const handleDelete = async (userId: string) => {
    setActionError(null);
    setDeletingId(userId);
    const { ok, error } = await adminService.deleteUser(userId);
    setDeletingId(null);
    setConfirmingDeleteId(null);
    if (ok) {
      await loadUsers();
    } else {
      setActionError(error || 'No se pudo eliminar el usuario.');
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
        {actionError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium mb-6 flex justify-between items-center"
          >
            <span>{actionError}</span>
            <button onClick={() => setActionError(null)} className="text-red-700 font-bold px-2">✕</button>
          </motion.div>
        )}

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
                  {users.map((u) => {
                    const isSelf = user?.id === u.id;
                    const manageable = canManage(u);

                    return (
                      <Fragment key={u.id}>
                      <tr className="border-t border-border-light align-top">
                        <td className="px-6 py-4">
                          <p className="font-semibold text-text-dark">
                            {u.full_name || '(sin nombre)'} {isSelf && <span className="text-xs text-text-light font-normal">(tú)</span>}
                          </p>
                          <p className="text-sm text-text-light">{u.email}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${ROLE_STYLES[u.user_type]}`}>
                            {ROLE_LABELS[u.user_type]}
                          </span>
                          {!manageable && (
                            <p className="text-xs text-text-light mt-1">
                              {isSelf ? 'No puedes editarte a ti mismo aquí' : '🔒 Protegido — solo el master'}
                            </p>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-text-dark">
                          <p>{u.chaptersCompleted} completados · {u.chaptersInProgress} en progreso</p>
                          <button
                            onClick={() => handleToggleDetail(u.id)}
                            className="text-unicoc-red text-xs font-bold hover:underline mt-1"
                          >
                            {expandedUserId === u.id ? '▲ Ocultar detalle' : '▼ Ver pretest/posttest por capítulo'}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-text-light">
                          {u.lastActivity ? new Date(u.lastActivity).toLocaleDateString('es-CO') : '—'}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2 min-w-[220px]">
                            {/* Reset progress */}
                            {confirmingResetId === u.id ? (
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
                                  onClick={() => setConfirmingResetId(null)}
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
                                onClick={() => { closeAllActions(); setConfirmingResetId(u.id); }}
                                className="border-2 border-unicoc-red text-unicoc-red px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-unicoc-red hover:text-white transition"
                              >
                                Reiniciar Progreso
                              </motion.button>
                            )}

                            {/* Change role */}
                            {manageable && (
                              roleEditingId === u.id ? (
                                <div className="flex items-center gap-2 flex-wrap">
                                  <select
                                    value={pendingRole ?? u.user_type}
                                    onChange={(e) => setPendingRole(e.target.value as UserType)}
                                    disabled={updatingRoleId === u.id}
                                    className="border-2 border-border-light rounded-lg text-xs font-medium px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-unicoc-red"
                                  >
                                    {ROLE_OPTIONS.map((r) => (
                                      <option key={r} value={r}>{ROLE_LABELS[r]}</option>
                                    ))}
                                  </select>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={updatingRoleId === u.id || (pendingRole ?? u.user_type) === u.user_type}
                                    onClick={() => handleRoleConfirm(u.id)}
                                    className="bg-unicoc-red text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-unicoc-red-dark transition disabled:opacity-50"
                                  >
                                    {updatingRoleId === u.id ? 'Guardando...' : '¿Confirmar?'}
                                  </motion.button>
                                  <button
                                    onClick={() => { setRoleEditingId(null); setPendingRole(null); }}
                                    disabled={updatingRoleId === u.id}
                                    className="text-text-light text-xs font-medium hover:text-text-dark transition"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              ) : (
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => { closeAllActions(); setRoleEditingId(u.id); setPendingRole(u.user_type); }}
                                  className="border-2 border-text-dark text-text-dark px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-text-dark hover:text-white transition"
                                >
                                  Cambiar Rol
                                </motion.button>
                              )
                            )}

                            {/* Delete user */}
                            {manageable && (
                              confirmingDeleteId === u.id ? (
                                <div className="flex items-center gap-2">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={deletingId === u.id}
                                    onClick={() => handleDelete(u.id)}
                                    className="bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-800 transition disabled:opacity-50"
                                  >
                                    {deletingId === u.id ? 'Eliminando...' : '¿Eliminar definitivamente?'}
                                  </motion.button>
                                  <button
                                    onClick={() => setConfirmingDeleteId(null)}
                                    disabled={deletingId === u.id}
                                    className="text-text-light text-xs font-medium hover:text-text-dark transition"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              ) : (
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => { closeAllActions(); setConfirmingDeleteId(u.id); }}
                                  className="border-2 border-red-700 text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-700 hover:text-white transition"
                                >
                                  Eliminar Usuario
                                </motion.button>
                              )
                            )}
                          </div>
                        </td>
                      </tr>
                      {expandedUserId === u.id && (
                        <tr className="border-t border-border-light bg-bg-light">
                          <td colSpan={5} className="px-6 py-5">
                            {loadingDetailId === u.id ? (
                              <p className="text-text-light text-sm">Cargando progreso por capítulo...</p>
                            ) : (
                              <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                  <thead>
                                    <tr className="text-text-light">
                                      <th className="pr-4 py-2 font-semibold">Capítulo</th>
                                      <th className="pr-4 py-2 font-semibold">Avance</th>
                                      <th className="pr-4 py-2 font-semibold">Pretest</th>
                                      <th className="pr-4 py-2 font-semibold">Posttest</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {(chapterDetails[u.id] || []).map((c) => (
                                      <tr key={c.chapterId} className="border-t border-border-light">
                                        <td className="pr-4 py-2 font-medium text-text-dark">
                                          Cap. {c.chapterNumber}: {c.chapterTitle}
                                        </td>
                                        <td className="pr-4 py-2 text-text-dark">
                                          {c.completionPercentage}%
                                          {c.status === 'completed' && <span className="text-green-700 font-bold"> ✓</span>}
                                        </td>
                                        <td className="pr-4 py-2 text-text-dark">
                                          {c.pretestPercentage === null
                                            ? '— sin intentar'
                                            : `${c.pretestPercentage}% (${c.pretestAttempts} intento${c.pretestAttempts === 1 ? '' : 's'})`}
                                        </td>
                                        <td className="pr-4 py-2">
                                          {c.posttestBestPercentage === null ? (
                                            <span className="text-text-dark">— sin intentar</span>
                                          ) : (
                                            <span className={c.posttestPassed ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>
                                              {c.posttestBestPercentage}% ({c.posttestAttempts} intento{c.posttestAttempts === 1 ? '' : 's'}) — {c.posttestPassed ? 'Aprobado' : 'No aprobado'}
                                            </span>
                                          )}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
