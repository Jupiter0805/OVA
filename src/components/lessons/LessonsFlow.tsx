import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Lesson } from '../../services/lessonsService';

interface LessonsFlowProps {
  lessons: Lesson[];
  onLessonComplete: (lessonsCompleted: number) => void;
  onAllComplete: () => void;
}

export function LessonsFlow({ lessons, onLessonComplete, onAllComplete }: LessonsFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lesson = lessons[currentIndex];
  const isLast = currentIndex === lessons.length - 1;

  const handleNext = () => {
    onLessonComplete(currentIndex + 1);
    if (isLast) {
      onAllComplete();
    } else {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!lesson) {
    return <p className="text-text-light text-center py-12">No hay lecciones disponibles todavía.</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-text-light">
          Lección {currentIndex + 1} de {lessons.length}
        </span>
        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark"
            animate={{ width: `${((currentIndex + 1) / lessons.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={lesson.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-6"
          dangerouslySetInnerHTML={{ __html: lesson.content_html }}
        />
      </AnimatePresence>

      <div className="flex justify-between">
        <motion.button
          whileHover={currentIndex > 0 ? { scale: 1.02 } : undefined}
          whileTap={currentIndex > 0 ? { scale: 0.98 } : undefined}
          disabled={currentIndex === 0}
          onClick={handlePrev}
          className="px-6 py-3 rounded-lg font-semibold text-text-dark border-2 border-border-light hover:border-unicoc-red transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Anterior
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
        >
          {isLast ? 'Continuar al Posttest →' : 'Siguiente →'}
        </motion.button>
      </div>
    </div>
  );
}
