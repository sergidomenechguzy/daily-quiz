import { Heart } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { Typography } from '~/components/ui/typography';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import type { loader } from '~/routes/home';
import { useRemainingAttempts } from '~/stores/quiz-store';

export function Health() {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const quizQuestion = useQuizQuestion();
  const remainingAttempts = useRemainingAttempts(
    dailyIndex.dateString,
    quizQuestion.type
  );

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="h4">{remainingAttempts}</Typography>
      <Heart />
    </div>
  );
}
