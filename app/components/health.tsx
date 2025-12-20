import { Heart } from 'lucide-react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useRemainingAttempts } from '~/stores/quiz-store';

export function Health() {
  const { dateString } = useDailyIndex();
  const remainingAttempts = useRemainingAttempts(dateString);

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="h4">{remainingAttempts}</Typography>
      <Heart />
    </div>
  );
}
