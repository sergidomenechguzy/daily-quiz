import { useState } from 'react';
import { useQuizStore, useRemainingAttempts } from '~/stores/quiz-store';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { Item, ItemContent, ItemMedia, ItemTitle } from '~/components/ui/item';
import { Eye, EyeClosed } from 'lucide-react';
import type { QuestionType } from '~/types/quiz-question';

interface HintItemProps {
  hint: string;
  open: boolean;
}

const HintItem = ({ hint, open = false }: HintItemProps) => {
  const { dateString } = useDailyIndex();
  const revealHint = useQuizStore(state => state.revealHint);
  const [showHint, setShowHint] = useState(open);

  const handleShowHintClick = () => {
    setShowHint(true);
    revealHint(dateString);
  };

  if (!showHint) {
    return (
      <Item variant="muted" className=" border-0" asChild>
        <button onClick={handleShowHintClick}>
          <ItemMedia>
            <EyeClosed className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-sm text-muted-foreground">
              Reveal hint
            </ItemTitle>
          </ItemContent>
        </button>
      </Item>
    );
  }

  return (
    <Item variant="muted" className=" border-0">
      <ItemMedia>
        <Eye className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="text-sm text-muted-foreground">{hint}</ItemTitle>
      </ItemContent>
    </Item>
  );
};

const remainingAttemptsToShowHint: Record<QuestionType, number[]> = {
  'multiple-choice': [1],
  estimation: [3, 1],
  'exact-match': [3, 1],
  'top-five': [3, 1],
};

export function Hints() {
  const { dateString } = useDailyIndex();
  const quizQuestion = useQuizQuestion();
  const hintsUsed = useQuizStore(
    state => state.quizState[dateString]?.hintsUsed
  );
  const remainingAttempts = useRemainingAttempts(dateString);

  return (
    quizQuestion.hints && (
      <div className="flex flex-col gap-2">
        {quizQuestion.hints.map(
          (hint, index) =>
            index <= hintsUsed &&
            remainingAttempts <=
              remainingAttemptsToShowHint[quizQuestion.type][index] && (
              <HintItem
                key={`hint-${index}`}
                hint={hint}
                open={index < hintsUsed}
              />
            )
        )}
      </div>
    )
  );
}
