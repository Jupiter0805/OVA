import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { chaptersService } from '../services/chaptersService';
import type { Chapter } from '../services/chaptersService';

export function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChapter = async () => {
      if (!chapterId) return;
      const data = await chaptersService.getChapter(chapterId);
      setChapter(data);
      setLoading(false);
    };

    loadChapter();
  }, [chapterId]);

  useEffect(() => {
    if (chapter && user?.id) {
      chaptersService.updateProgress(user.id, chapter.id, {
        status: 'in_progress',
      });
    }
  }, [chapter, user?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="rounded-full h-12 w-12 border-4 border-unicoc-red border-t-transparent mx-auto mb-4"
          />
          <p className="text-text-light">Cargando capítulo...</p>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-text-dark mb-4">Capítulo no encontrado</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/dashboard')}
            className="bg-unicoc-red text-white px-6 py-3 rounded-lg font-bold hover:bg-unicoc-red-dark transition"
          >
            Volver al Dashboard
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-8"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate('/dashboard')}
            className="mb-4 text-white/80 hover:text-white transition"
          >
            ← Volver al Dashboard
          </motion.button>
          <h1 className="text-4xl font-bold mb-2">
            Capítulo {chapter.chapter_number}: {chapter.title}
          </h1>
          <p className="text-white/90">
            ⏱️ Tiempo estimado: {chapter.estimated_time_minutes} minutos
          </p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <p className="text-text-dark text-lg leading-relaxed mb-8">
            {chapter.description}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-unicoc-red mb-4">
              Aprenderás:
            </h2>
            <ul className="space-y-3">
              {(chapter.learning_outcomes || []).map((outcome, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-unicoc-red font-bold text-xl mt-1">✓</span>
                  <span className="text-text-dark">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-unicoc-red-light p-6 rounded-lg border-2 border-unicoc-red"
          >
            <p className="text-text-dark font-medium">
              📚 Las lecciones y tests estarán disponibles próximamente...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
