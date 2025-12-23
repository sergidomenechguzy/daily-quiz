import { useMemo } from 'react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { useQuizStore } from '~/stores/quiz-store';

export function Result() {
  const { dateString } = useDailyIndex();
  const quizQuestion = useQuizQuestion();
  const scorePercent = useQuizStore(
    state => state.quizState[dateString]?.scorePercent
  );
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

  const isCorrect = useMemo(() => {
    if (scorePercent == null) {
      return false;
    }
    if (scorePercent === 100) {
      return true;
    }
    if (quizQuestion.type === 'estimation' && scorePercent === 75) {
      return true;
    }
    if (quizQuestion.type === 'top-five' && scorePercent > 0) {
      return true;
    }
    return false;
  }, [quizQuestion.type, scorePercent]);

  const resultText = useMemo(() => {
    if (!isCorrect) {
      return '❌ Better luck next time!';
    }

    if (quizQuestion.type === 'estimation' && scorePercent === 75) {
      return `🎯 Close enough!`;
    }

    if (quizQuestion.type === 'top-five' && scorePercent != null) {
      const correctCount = Math.floor(5 * (scorePercent / 100));

      if (correctCount === 5) {
        return '🏆 Perfection! 5/5 Correct';
      }
      if (correctCount >= 4) {
        return `🎉 Nice! ${correctCount}/5 Correct`;
      }
      if (correctCount >= 2) {
        return `👍 Good effort! ${correctCount}/5 Correct`;
      }
      return `🌱 A start! ${correctCount}/5 Correct`;
    }

    return '🎉 Correct!';
  }, [isCorrect, quizQuestion.type, scorePercent]);

  if (!isCompleted) {
    return <span />;
  }

  return (
    <Typography
      variant="h4"
      className={`text-center ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}
    >
      {resultText}
    </Typography>
  );
}
