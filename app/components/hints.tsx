import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useQuizStore, useRemainingAttempts } from '~/stores/quiz-store';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { Item, ItemContent, ItemMedia, ItemTitle } from '~/components/ui/item';
import type { QuestionType } from '~/types/quiz-question';

interface HintItemProps {
  hint: string;
  defaultOpen: boolean;
}

const HintItem = ({ hint, defaultOpen = false }: HintItemProps) => {
  const { dateString } = useDailyIndex();
  const revealHint = useQuizStore(state => state.revealHint);
  const [showHint, setShowHint] = useState(false);

  const handleShowHintClick = () => {
    setShowHint(true);
    revealHint(dateString);
  };

  return (
    <AnimatePresence mode="wait">
      {!showHint && !defaultOpen && (
        <Item
          key="hint-reveal-button"
          variant="muted"
          className=" border-0"
          asChild
        >
          <motion.button
            onClick={handleShowHintClick}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              rotateX: -90,
              transition: {
                duration: 0.15,
              },
            }}
          >
            <ItemMedia>
              <EyeClosed className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm text-muted-foreground">
                Reveal hint
              </ItemTitle>
            </ItemContent>
          </motion.button>
        </Item>
      )}
      {(showHint || (defaultOpen && !showHint)) && (
        <Item
          key="hint-revealed"
          variant="muted"
          className=" border-0"
          initial={
            defaultOpen && !showHint
              ? {
                  opacity: 0,
                  y: 10,
                }
              : {
                  opacity: 0,
                  rotateX: 90,
                }
          }
          animate={{
            opacity: 1,
            rotateX: 0,
            y: 0,
          }}
          transition={{
            duration: defaultOpen && !showHint ? 0.3 : 0.15,
          }}
        >
          <ItemMedia>
            <Eye className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-sm text-muted-foreground">
              {hint}
            </ItemTitle>
          </ItemContent>
        </Item>
      )}
    </AnimatePresence>
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
                defaultOpen={index < hintsUsed}
              />
            )
        )}
      </div>
    )
  );
}
