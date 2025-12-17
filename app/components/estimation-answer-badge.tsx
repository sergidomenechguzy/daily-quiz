import { ArrowDown, ArrowUp } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import type { EstimationQuestion } from '~/types/quiz-question';
import type { QuizAnswer } from '~/types/quiz-attempt';

interface EstimationAnswerBadgeProps {
  quizQuestion: EstimationQuestion;
  answer: QuizAnswer;
}

export function EstimationAnswerBadge({
  quizQuestion,
  answer,
}: EstimationAnswerBadgeProps) {
  if (answer.isCorrect) return null;

  let normalized = Number(answer.answer);
  if (quizQuestion.precision != null) {
    normalized = Number(normalized.toFixed(quizQuestion.precision));
  }

  if (normalized === quizQuestion.correctAnswer) return null;

  return (
    <Badge
      variant="outline"
      className="bg-red-100 text-red-800 border-red-800 dark:bg-red-900 dark:border-red-200 dark:text-red-200"
    >
      too {normalized < quizQuestion.correctAnswer ? 'low' : 'high'}{' '}
      {normalized < quizQuestion.correctAnswer ? <ArrowUp /> : <ArrowDown />}
    </Badge>
  );
}
