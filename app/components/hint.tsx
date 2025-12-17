import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Button } from '~/components/ui/button';
import type { QuizQuestion } from '~/types/quiz-question';
import { useRemainingAttempts } from '~/stores/quiz-store';
import type { loader } from '~/routes/home';
import { Typography } from '~/components/ui/typography';

interface HintProps {
  quizQuestion: QuizQuestion;
  hintIndex: number;
  remainingAttemptsToShow: number;
}

export function Hint({
  quizQuestion,
  hintIndex,
  remainingAttemptsToShow,
}: HintProps) {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const dateString = dailyIndex.dateString;
  const remainingAttempts = useRemainingAttempts(dateString);
  const [showHint, setShowHint] = useState(false);

  return (
    remainingAttempts <= remainingAttemptsToShow &&
    quizQuestion.hints &&
    quizQuestion.hints.length > hintIndex &&
    quizQuestion.hints[hintIndex] && (
      <div className="flex gap-2 items-start">
        {!showHint ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowHint(!showHint)}
          >
            Reveal hint {hintIndex + 1}
          </Button>
        ) : (
          <Typography variant="muted">
            {quizQuestion.hints[hintIndex]}
          </Typography>
        )}
      </div>
    )
  );
}
