import { motion } from 'framer-motion';
import type { Question } from '../../services/testsService';

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedAnswer?: string;
  onSelect: (questionId: string, answer: string) => void;
  showResult?: boolean;
  disabled?: boolean;
}

export function QuestionCard({ question, index, selectedAnswer, onSelect, showResult, disabled }: QuestionCardProps) {
  const options: { key: string; text: string }[] =
    question.question_type === 'true_false'
      ? [
          { key: 'true', text: 'Verdadero' },
          { key: 'false', text: 'Falso' },
        ]
      : question.options || [];

  const isCorrect = selectedAnswer === question.correct_answer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glassmorphism rounded-2xl p-6 mb-6"
    >
      <p className="font-semibold text-text-dark mb-4">
        {index + 1}. {question.question_text}
      </p>

      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const isSelected = selectedAnswer === option.key;
          const isTheCorrectOne = showResult && option.key === question.correct_answer;
          const isWrongSelected = showResult && isSelected && !isCorrect;

          return (
            <motion.button
              key={option.key}
              type="button"
              disabled={disabled}
              whileHover={!disabled ? { scale: 1.01 } : undefined}
              whileTap={!disabled ? { scale: 0.99 } : undefined}
              onClick={() => onSelect(question.id, option.key)}
              className={`text-left px-4 py-3 rounded-lg border-2 transition ${
                isTheCorrectOne
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : isWrongSelected
                  ? 'border-red-400 bg-red-50 text-red-700'
                  : isSelected
                  ? 'border-unicoc-red bg-unicoc-red/5 text-unicoc-red'
                  : 'border-border-light text-text-dark hover:border-unicoc-red-light'
              } ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {option.text}
              {isTheCorrectOne && ' ✓'}
              {isWrongSelected && ' ✗'}
            </motion.button>
          );
        })}
      </div>

      {showResult && question.explanation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-text-light bg-bg-light rounded-lg p-3"
        >
          💡 {question.explanation}
        </motion.div>
      )}
    </motion.div>
  );
}
