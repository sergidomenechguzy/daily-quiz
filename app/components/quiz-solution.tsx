import { motion, AnimatePresence } from 'motion/react';
import type { QuizQuestion } from '~/types/quiz-question';
import { useQuizStore } from '~/stores/quiz-store';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { QuizMedia } from '~/components/quiz-media';

interface EstimationQuizProps {
  quizQuestion: QuizQuestion;
  correctText?: string;
  hideCorrect?: boolean;
  hideExplanation?: boolean;
}

export function QuizSolution({
  quizQuestion,
  correctText,
  hideCorrect,
  hideExplanation,
}: EstimationQuizProps) {
  const { dateString } = useDailyIndex();
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

  return (
    <AnimatePresence>
      {isCompleted && (
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          key="quiz-solution-complete"
        >
          <QuizMedia media={quizQuestion.media} />
          <div className="flex flex-col gap-2">
            {!hideCorrect && 'correctAnswer' in quizQuestion && (
              <Typography variant="large">
                {correctText ? correctText : quizQuestion.correctAnswer}
                {'unit' in quizQuestion && quizQuestion.unit
                  ? ` ${quizQuestion.unit}`
                  : ''}
              </Typography>
            )}
            {!hideExplanation && (
              <Typography variant="small">
                {quizQuestion.explanation}
              </Typography>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
