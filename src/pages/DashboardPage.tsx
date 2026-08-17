import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChapterCard } from '../components/ChapterCard';
import { chaptersService } from '../services/chaptersService';
import type { Chapter, UserProgress } from '../services/chaptersService';

export function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [progressMap, setProgressMap] = useState<Map<string, UserProgress | null>>(new Map());
  const [globalProgress, setGlobalProgress] = useState({ completed: 0, total: 4, percentage: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return;

      try {
        const chaptersData = await chaptersService.getChapters();
        setChapters(chaptersData);

        const allProgress = await chaptersService.getUserAllProgress(user.id);
        const nextProgressMap = new Map<string, UserProgress | null>();

        for (const chapter of chaptersData) {
          const progress = allProgress.find((p) => p.chapter_id === chapter.id) || null;
          nextProgressMap.set(chapter.id, progress);
        }

        setProgressMap(nextProgressMap);

        const global = await chaptersService.getUserGlobalProgress(user.id, chaptersData.length);
        setGlobalProgress(global);
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user?.id]);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="rounded-full h-16 w-16 border-4 border-unicoc-red border-t-transparent mx-auto mb-4"
          />
          <p className="text-text-light font-medium">Cargando capítulos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-light to-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-unicoc-red mb-2">
              Bienvenido, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
            </h1>
            <p className="text-text-light">
              {chapters.length} capítulos disponibles • {globalProgress.completed} completados
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-unicoc-red text-white px-8 py-3 rounded-lg font-bold hover:bg-unicoc-red-dark transition shadow-lg"
          >
            Salir
          </motion.button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark rounded-2xl p-8 text-white mb-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Progreso General</p>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-bold">{globalProgress.percentage}%</div>
                <p className="text-white/80 mb-1">{globalProgress.completed} de {globalProgress.total} capítulos</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-white/80 text-sm font-medium mb-3">Barra de Progreso</p>
              <motion.div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${globalProgress.percentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold text-unicoc-red mb-8">
            4 Capítulos Disponibles
          </h2>

          {chapters.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-light text-lg">No hay capítulos disponibles todavía.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chapters.map((chapter, index) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  progress={progressMap.get(chapter.id) || null}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-3xl font-bold text-unicoc-red mb-2">{chapters.length}</p>
            <p className="text-text-light text-sm">Capítulos totales</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-3xl font-bold text-unicoc-red mb-2">{globalProgress.completed}</p>
            <p className="text-text-light text-sm">Completados</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-3xl font-bold text-unicoc-red mb-2">20+</p>
            <p className="text-text-light text-sm">Tests totales</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-3xl font-bold text-unicoc-red mb-2">7</p>
            <p className="text-text-light text-sm">Casos clínicos</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
