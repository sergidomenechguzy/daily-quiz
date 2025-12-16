import { Heart } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { Typography } from '~/components/ui/typography';
import type { loader } from '~/routes/home';
import { useRemainingAttempts } from '~/stores/quizStore';

export function Health() {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const remainingAttempts = useRemainingAttempts(dailyIndex.dateString);

  return (
    <div className="flex gap-2 items-center justify-end">
      <Typography variant="h4">{remainingAttempts}</Typography>
      <Heart />
    </div>
  );
}
