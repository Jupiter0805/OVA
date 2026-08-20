import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { chaptersService } from '../services/chaptersService';
import type { Chapter } from '../services/chaptersService';
import { lessonsService } from '../services/lessonsService';
import type { Lesson } from '../services/lessonsService';
import { testsService } from '../services/testsService';
import type { Test, Question } from '../services/testsService';
import { PreTestComponent } from '../components/tests/PreTestComponent';
import { PostTestComponent } from '../components/tests/PostTestComponent';
import { LessonsFlow } from '../components/lessons/LessonsFlow';

// Lazy-loaded: react-pdf + pdfjs-dist add ~1MB, only worth paying for
// once a user actually reaches Chapter 1's PDF step, not on every page load.
const PDFViewer = lazy(() =>
  import('../components/lessons/PDFViewer').then((m) => ({ default: m.PDFViewer })),
);

type PageState = 'pretest' | 'pdf-resource' | 'lessons' | 'posttest' | 'completed';

const CATON_2018_PDF_URL =
  'https://jaghsnjjklrorojbtkpr.supabase.co/storage/v1/object/public/academic-papers/J%20Clinic%20Periodontology%20-%202018%20-%20Caton%20-%20A%20new%20classification%20scheme%20for%20periodontal.pdf';

const TONETTI_2018_PDF_URL =
  'https://jaghsnjjklrorojbtkpr.supabase.co/storage/v1/object/public/academic-papers/Journal%20of%20Periodontology%20-%202018%20-%20Tonetti%20-%20Staging%20and%20grading%20of%20periodontitis%20%20Framework%20and%20proposal%20of%20a%20new.pdf';

type PdfResource = { url: string; title: string; author: string; downloadName: string };

const PDF_RESOURCE_BY_CHAPTER: Record<number, PdfResource> = {
  1: {
    url: CATON_2018_PDF_URL,
    title: 'A new classification scheme for periodontal and peri-implant diseases and conditions',
    author: 'Caton JG, Armitage G, Berglundh T, et al. (2018) — J Clin Periodontol. 2018;45(S20):S1-S8',
    downloadName: 'Caton_2018_Classification.pdf',
  },
  2: {
    url: TONETTI_2018_PDF_URL,
    title: 'Staging and grading of periodontitis: Framework and proposal of a new classification system',
    author: 'Tonetti MS, Greenwell H, Kornman KS. (2018) — J Periodontol. 2018;89(S1):S159-S172',
    downloadName: 'Tonetti_2018_Staging_Grading.pdf',
  },
};

export function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [pretest, setPretest] = useState<Test | null>(null);
  const [pretestQuestions, setPretestQuestions] = useState<Question[]>([]);
  const [posttest, setPosttest] = useState<Test | null>(null);
  const [posttestQuestions, setPosttestQuestions] = useState<Question[]>([]);
  const [pageState, setPageState] = useState<PageState>('pretest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!chapterId || !user?.id) return;

      const chapterData = await chaptersService.getChapter(chapterId);
      setChapter(chapterData);
      if (!chapterData) {
        setLoading(false);
        return;
      }

      const [lessonsData, pretestData, posttestData, progress] = await Promise.all([
        lessonsService.getLessons(chapterId),
        testsService.getTest(chapterId, 'pretest'),
        testsService.getTest(chapterId, 'posttest'),
        chaptersService.getUserProgressByChapter(user.id, chapterId),
      ]);
      setLessons(lessonsData);
      setPretest(pretestData);
      setPosttest(posttestData);

      if (pretestData) {
        setPretestQuestions(await testsService.getQuestions(pretestData.id));
      }
      if (posttestData) {
        setPosttestQuestions(await testsService.getQuestions(posttestData.id));
      }

      if (progress?.status === 'completed') {
        setPageState('completed');
      } else if (posttestData) {
        const posttestAttempts = await testsService.getUserAttempts(user.id, posttestData.id);
        if (posttestAttempts.some((a) => a.passed)) {
          setPageState('completed');
        } else if (pretestData) {
          const pretestAttempts = await testsService.getUserAttempts(user.id, pretestData.id);
          if (pretestAttempts.length > 0) {
            const allLessonsDone = lessonsData.length > 0 && (progress?.lessons_completed || 0) >= lessonsData.length;
            setPageState(allLessonsDone ? 'posttest' : 'lessons');
          } else {
            setPageState('pretest');
          }
        }
      }

      chaptersService.updateProgress(user.id, chapterId, { status: 'in_progress' });
      setLoading(false);
    };

    loadData();
  }, [chapterId, user?.id]);

  const pdfResource = chapter ? PDF_RESOURCE_BY_CHAPTER[chapter.chapter_number] : undefined;

  const handlePreTestComplete = () => {
    setPageState(pdfResource ? 'pdf-resource' : 'lessons');
  };

  const handlePdfResourceContinue = () => setPageState('lessons');

  const handleLessonComplete = (lessonsCompleted: number) => {
    if (!user?.id || !chapterId) return;
    const completion = lessons.length > 0 ? Math.round((lessonsCompleted / lessons.length) * 100) : 0;
    chaptersService.updateProgress(user.id, chapterId, {
      lessons_completed: lessonsCompleted,
      completion_percentage: completion,
    });
  };

  const handleAllLessonsComplete = () => setPageState('posttest');

  const handlePostTestPass = () => {
    if (!user?.id || !chapterId) return;
    chaptersService.updateProgress(user.id, chapterId, {
      status: 'completed',
      completion_percentage: 100,
      lessons_completed: lessons.length,
    });
    setPageState('completed');
  };

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
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

  const hasInteractiveContent = lessons.length > 0 && pretest && posttest;

  return (
    <div className="min-h-screen bg-bg-light">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-8"
      >
        <div className="w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6">
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
          <p className="text-white/90">⏱️ Tiempo estimado: {chapter.estimated_time_minutes} minutos</p>
        </div>
      </motion.div>

      <div className="w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6 py-12">
        {!hasInteractiveContent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-text-dark text-lg leading-relaxed mb-8">{chapter.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-unicoc-red mb-4">Aprenderás:</h2>
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
              <p className="text-text-dark font-medium">📚 Las lecciones y tests estarán disponibles próximamente...</p>
            </motion.div>
          </motion.div>
        ) : (
          <>
            {pageState === 'pretest' && pretest && (
              <PreTestComponent test={pretest} questions={pretestQuestions} onComplete={handlePreTestComplete} />
            )}

            {pageState === 'pdf-resource' && pdfResource && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-unicoc-red-light/10 border-l-4 border-unicoc-red rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-unicoc-red mb-2">📄 Recurso: Paper Original AAP/EFP 2018</h3>
                <p className="text-text-dark mb-6">
                  Antes de empezar las lecciones, este es el paper original que define la clasificación que vas a
                  aprender en este capítulo. Léelo directamente aquí o descárgalo para tu referencia personal.
                </p>

                <Suspense
                  fallback={
                    <div className="bg-white rounded-2xl p-8 text-center border-2 border-border-light">
                      <div className="animate-spin h-8 w-8 border-4 border-unicoc-red border-t-transparent rounded-full mx-auto mb-4" />
                      <p className="text-text-light">Cargando visor de PDF...</p>
                    </div>
                  }
                >
                  <PDFViewer
                    url={pdfResource.url}
                    title={pdfResource.title}
                    author={pdfResource.author}
                    downloadName={pdfResource.downloadName}
                  />
                </Suspense>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePdfResourceContinue}
                  className="mt-6 bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Continuar a las lecciones →
                </motion.button>
              </motion.div>
            )}

            {pageState === 'lessons' && (
              <LessonsFlow
                lessons={lessons}
                onLessonComplete={handleLessonComplete}
                onAllComplete={handleAllLessonsComplete}
              />
            )}

            {pageState === 'posttest' && posttest && (
              <PostTestComponent test={posttest} questions={posttestQuestions} onPass={handlePostTestPass} />
            )}

            {pageState === 'completed' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glassmorphism rounded-2xl p-12 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-7xl mb-6"
                >
                  🏆
                </motion.div>
                <h2 className="text-3xl font-bold text-unicoc-red mb-4">¡Capítulo Completado!</h2>
                <p className="text-text-light text-lg mb-8">
                  Terminaste el Capítulo {chapter.chapter_number}: {chapter.title}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Volver al Dashboard
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
