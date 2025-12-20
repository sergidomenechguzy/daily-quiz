import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useGetQuizResult } from '~/stores/quiz-store';

export function Result() {
  const { dateString } = useDailyIndex();
  const { isCorrect, isCompleted } = useGetQuizResult(dateString);

  if (!isCompleted) {
    return <span />;
  }

  return (
    <Typography
      variant="h4"
      className={`text-center ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}
    >
      {isCorrect ? '🎉 Correct' : '❌ Wrong'}
    </Typography>
  );
}
