import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Button } from '~/components/ui/button';
import { useRemainingAttempts } from '~/stores/quiz-store';
import type { loader } from '~/routes/home';
import { Typography } from '~/components/ui/typography';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';

interface HintProps {
  hintIndex: number;
  remainingAttemptsToShow: number;
}

export function Hint({ hintIndex, remainingAttemptsToShow }: HintProps) {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const quizQuestion = useQuizQuestion();
  const dateString = dailyIndex.dateString;
  const remainingAttempts = useRemainingAttempts(dateString, quizQuestion.type);
  const [showHint, setShowHint] = useState(false);

  return (
    remainingAttempts <= remainingAttemptsToShow &&
    quizQuestion.hints &&
    quizQuestion.hints.length > hintIndex &&
    quizQuestion.hints[hintIndex] && (
      <div className="flex gap-2">
        {!showHint ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowHint(!showHint)}
            className="h-6"
          >
            Reveal hint
          </Button>
        ) : (
          <Typography variant="muted" className="py-[2px]">
            {quizQuestion.hints[hintIndex]}
          </Typography>
        )}
      </div>
    )
  );
}
