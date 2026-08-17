import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Chapter, UserProgress } from '../services/chaptersService';

interface ChapterCardProps {
  chapter: Chapter;
  progress?: UserProgress | null;
  index: number;
}

export function ChapterCard({ chapter, progress, index }: ChapterCardProps) {
  const navigate = useNavigate();
  const completionPercentage = progress?.completion_percentage || 0;
  const status = progress?.status || 'not_started';

  const statusColors = {
    not_started: 'from-gray-300 to-gray-400',
    in_progress: 'from-yellow-300 to-yellow-400',
    completed: 'from-green-300 to-green-400',
    abandoned: 'from-red-300 to-red-400',
  };

  const statusLabels = {
    not_started: 'No iniciado',
    in_progress: 'En progreso',
    completed: '✓ Completado',
    abandoned: 'Abandonado',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/chapter/${chapter.id}`)}
      className="cursor-pointer"
    >
      <div className="glassmorphism rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition">
        <div className="mb-6 flex items-center justify-between">
          <div className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
            {chapter.chapter_number}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${statusColors[status]}`}>
            {statusLabels[status]}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-unicoc-red mb-3">
          {chapter.title}
        </h3>

        <p className="text-text-light mb-6 line-clamp-3">
          {chapter.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-bold text-text-dark mb-2">Aprenderás:</h4>
          <ul className="space-y-1">
            {(chapter.learning_outcomes || []).slice(0, 2).map((outcome, idx) => (
              <li key={idx} className="text-xs text-text-light flex items-start gap-2">
                <span className="text-unicoc-red font-bold">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-text-dark">Progreso</span>
            <span className="text-xs font-bold text-unicoc-red">{completionPercentage}%</span>
          </div>
          <motion.div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        <div className="flex items-center gap-2 text-xs text-text-light">
          <span>⏱️</span>
          <span>{chapter.estimated_time_minutes} minutos</span>
        </div>
      </div>
    </motion.div>
  );
}
