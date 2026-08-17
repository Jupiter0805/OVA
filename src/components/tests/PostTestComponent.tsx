import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { testsService } from '../../services/testsService';
import type { Test, Question, TestAttempt } from '../../services/testsService';
import { QuestionCard } from './QuestionCard';

const REFLECTION_PROMPT =
  'De los cambios entre 1999 y 2018, ¿cuál crees que es el MÁS IMPACTANTE para tu práctica clínica?';
const REFLECTION_KEY = 'reflection';

interface PostTestComponentProps {
  test: Test;
  questions: Question[];
  onPass: () => void;
}

export function PostTestComponent({ test, questions, onPass }: PostTestComponentProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [reflectionText, setReflectionText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [lastAttempt, setLastAttempt] = useState<TestAttempt | null>(null);
  const [startTime, setStartTime] = useState(() => Date.now());

  useEffect(() => {
    const loadAttempts = async () => {
      if (!user?.id) return;
      const data = await testsService.getUserAttempts(user.id, test.id);
      setAttempts(data);
      const passedAttempt = data.find((a) => a.passed);
      if (passedAttempt) setLastAttempt(passedAttempt);
      setLoading(false);
    };
    loadAttempts();
  }, [user?.id, test.id]);

  const attemptsUsed = attempts.length;
  const attemptsRemaining = Math.max(0, test.max_attempts - attemptsUsed);
  const alreadyPassed = attempts.some((a) => a.passed);
  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSubmit = async () => {
    if (!user?.id) return;
    setSubmitting(true);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const combinedAnswers = { ...answers, [REFLECTION_KEY]: reflectionText };
    const attempt = await testsService.submitAttempt(user.id, test, questions, combinedAnswers, timeSpent);
    setSubmitting(false);
    if (attempt) {
      setAttempts((prev) => [...prev, attempt]);
      setLastAttempt(attempt);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setReflectionText('');
    setLastAttempt(null);
    setStartTime(Date.now());
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="rounded-full h-10 w-10 border-4 border-unicoc-red border-t-transparent mx-auto"
        />
      </div>
    );
  }

  // Already passed in a previous attempt — no need to redo the test.
  const passedAttempt = attempts.find((a) => a.passed);
  if (alreadyPassed && passedAttempt && !lastAttempt) {
    const passed = passedAttempt;
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glassmorphism rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-bold text-unicoc-red mb-2">Ya aprobaste este posttest</h2>
        <p className="text-text-light mb-6">Obtuviste {passed.percentage}% en un intento anterior.</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onPass}
          className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
        >
          Ver Capítulo Completado →
        </motion.button>
      </motion.div>
    );
  }

  if (!alreadyPassed && attemptsRemaining <= 0 && !lastAttempt) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glassmorphism rounded-2xl p-8 text-center border-2 border-red-300">
        <div className="text-5xl mb-4">✗</div>
        <h2 className="text-2xl font-bold text-unicoc-red mb-2">Sin intentos disponibles</h2>
        <p className="text-text-light">
          Usaste tus {test.max_attempts} intentos para este posttest sin alcanzar el puntaje mínimo de {test.passing_score_percentage}%.
        </p>
      </motion.div>
    );
  }

  // Result screen for the attempt just submitted.
  if (lastAttempt) {
    const passed = lastAttempt.passed;
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`glassmorphism rounded-2xl p-8 text-center mb-8 border-2 ${
            passed ? 'border-green-300' : 'border-red-300'
          }`}
        >
          <div className="text-5xl mb-4">{passed ? '✓' : '✗'}</div>
          <h2 className="text-2xl font-bold text-unicoc-red mb-2">
            {passed ? '¡Aprobaste el posttest!' : 'Aún no alcanzas el puntaje mínimo'}
          </h2>
          <p className="text-text-light">
            Obtuviste <strong>{lastAttempt.percentage}%</strong> (necesitas ≥{test.passing_score_percentage}%)
          </p>
          {!passed && (
            <p className="text-sm text-text-light mt-2">
              {attemptsRemaining > 0
                ? `Te quedan ${attemptsRemaining} intento(s) de ${test.max_attempts}.`
                : 'No te quedan intentos disponibles para este posttest.'}
            </p>
          )}
        </motion.div>

        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            selectedAnswer={lastAttempt.answers[question.id]}
            onSelect={() => undefined}
            showResult
            disabled
          />
        ))}

        <div className="flex justify-center mt-4">
          {passed ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPass}
              className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
            >
              Ver Capítulo Completado →
            </motion.button>
          ) : attemptsRemaining > 0 ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRetry}
              className="bg-unicoc-red text-white px-8 py-3 rounded-lg font-bold hover:bg-unicoc-red-dark transition"
            >
              Intentar de Nuevo
            </motion.button>
          ) : null}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-unicoc-red mb-2">Posttest</h2>
        <p className="text-text-light">{test.description}</p>
        <p className="text-xs text-text-light mt-1">
          Intento {attemptsUsed + 1} de {test.max_attempts}
        </p>
      </div>

      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          selectedAnswer={answers[question.id]}
          onSelect={(qid, answer) => setAnswers((prev) => ({ ...prev, [qid]: answer }))}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: questions.length * 0.05 }}
        className="glassmorphism rounded-2xl p-6 mb-6"
      >
        <p className="font-semibold text-text-dark mb-2">{questions.length + 1}. {REFLECTION_PROMPT}</p>
        <p className="text-xs text-text-light mb-3">Reflexión personal — no afecta tu calificación.</p>
        <textarea
          value={reflectionText}
          onChange={(e) => setReflectionText(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-unicoc-red focus:border-transparent transition"
          placeholder="Escribe tu reflexión..."
        />
      </motion.div>

      <motion.button
        whileHover={allAnswered ? { scale: 1.02 } : undefined}
        whileTap={allAnswered ? { scale: 0.98 } : undefined}
        disabled={!allAnswered || submitting}
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Enviando...' : 'Enviar Posttest'}
      </motion.button>
    </motion.div>
  );
}
