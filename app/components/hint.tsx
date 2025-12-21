import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { useQuizStore, useRemainingAttempts } from '~/stores/quiz-store';
import { Typography } from '~/components/ui/typography';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { useDailyIndex } from '~/hooks/useDailyIndex';

interface HintProps {
  hintIndex: number;
  remainingAttemptsToShow: number;
}

export function Hint({ hintIndex, remainingAttemptsToShow }: HintProps) {
  const { dateString } = useDailyIndex();
  const quizQuestion = useQuizQuestion();
  const remainingAttempts = useRemainingAttempts(dateString);
  const revealHint = useQuizStore(state => state.revealHint);
  const [showHint, setShowHint] = useState(false);

  const handleShowHintClick = () => {
    setShowHint(true);
    revealHint(dateString);
  };

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
            onClick={handleShowHintClick}
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
