import { Heart } from 'lucide-react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useQuizStore, useRemainingAttempts } from '~/stores/quiz-store';

export function Health() {
  const { dateString } = useDailyIndex();
  const remainingAttempts = useRemainingAttempts(dateString);
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

  if (isCompleted) {
    return null;
  }

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="h4">{remainingAttempts}</Typography>
      <Heart />
    </div>
  );
}
