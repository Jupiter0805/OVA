import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { testsService } from '../../services/testsService';
import type { Test, Question } from '../../services/testsService';
import { QuestionCard } from './QuestionCard';

interface PreTestComponentProps {
  test: Test;
  questions: Question[];
  onComplete: () => void;
}

export function PreTestComponent({ test, questions, onComplete }: PreTestComponentProps) {
  const { user } = useAuth();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [startTime] = useState(() => Date.now());

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSubmit = async () => {
    if (!user?.id) return;
    setSubmitting(true);
    setSubmitError(false);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const attempt = await testsService.submitAttempt(user.id, test, questions, answers, timeSpent);
    setSubmitting(false);
    if (attempt) {
      setSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-unicoc-red mb-2">Pretest</h2>
        <p className="text-text-light">{test.description}</p>
        <p className="text-xs text-text-light mt-1">
          Este pretest no es calificable — es una reflexión inicial. Tus respuestas se comparan con las correctas al enviar.
        </p>
      </div>

      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          selectedAnswer={answers[question.id]}
          onSelect={(qid, answer) => !submitted && setAnswers((prev) => ({ ...prev, [qid]: answer }))}
          showResult={submitted}
          disabled={submitted}
        />
      ))}

      {!submitted ? (
        <>
          {submitError && (
            <p className="text-sm text-red-600 font-medium mb-3">
              No se pudo guardar tu pretest. Revisá tu conexión e intentá de nuevo.
            </p>
          )}
          <motion.button
            whileHover={allAnswered ? { scale: 1.02 } : undefined}
            whileTap={allAnswered ? { scale: 0.98 } : undefined}
            disabled={!allAnswered || submitting}
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Enviando...' : 'Enviar Pretest'}
          </motion.button>
        </>
      ) : (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onComplete}
          className="w-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition"
        >
          Continuar a las Lecciones →
        </motion.button>
      )}
    </motion.div>
  );
}
