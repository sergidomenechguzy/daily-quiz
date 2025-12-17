import { useLoaderData } from 'react-router';
import { Typography } from '~/components/ui/typography';
import type { loader } from '~/routes/home';
import { useGetAttempt } from '~/stores/quiz-store';

export function Result() {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const dateString = dailyIndex.dateString;
  const attempt = useGetAttempt(dateString);

  const isCompleted = attempt?.isCompleted ?? false;
  if (!isCompleted) {
    return <span />;
  }

  const hasWon = attempt?.answers.some(a => a.isCorrect) ?? false;

  return (
    <Typography
      variant="h4"
      className={`text-center ${hasWon ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}
    >
      {hasWon ? '🎉 Correct' : '❌ Wrong'}
    </Typography>
  );
}
