import { CircleCheck, CircleX, Eye, EyeOff } from 'lucide-react';
import { Typography } from '~/components/ui/typography';
import { EstimationAnswerBadge } from '~/components/estimation-answer-badge';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { Item, ItemContent, ItemMedia, ItemTitle } from './ui/item';
import { Fragment } from 'react/jsx-runtime';
import { useQuizStore } from '~/stores/quiz-store';
import { AnimatePresence } from 'motion/react';

export function Answers() {
  const { dateString } = useDailyIndex();
  const quizQuestion = useQuizQuestion();
  const answers = useQuizStore(state => state.quizState[dateString]?.answers);
  const hintsUsed = useQuizStore(
    state => state.quizState[dateString]?.hintsUsed
  );
  const hintCounts = useQuizStore(
    state => state.quizState[dateString]?.hintCounts
  );
  const results = useQuizStore(state => state.quizState[dateString]?.results);
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

  const isEstimation = quizQuestion.type === 'estimation';
  const isMultipleChoice = quizQuestion.type === 'multiple-choice';

  return (
    answers &&
    answers.length > 0 && (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <Typography variant="muted">Your answers</Typography>
          {isCompleted && (
            <Typography variant="muted">
              {hintsUsed} hint{hintsUsed !== 1 ? 's' : ''} revealed
            </Typography>
          )}
        </div>
        <AnimatePresence>
          {answers.map((answer, index) => (
            <Fragment key={`answer-wrapper-${index}`}>
              {isCompleted &&
                Array.isArray(hintCounts) &&
                hintCounts[index] > 0 &&
                (() => {
                  const prevHints = hintCounts
                    .slice(0, index)
                    .reduce((s, v) => s + (v || 0), 0);
                  const count = hintCounts[index] || 0;
                  return (quizQuestion.hints ?? [])
                    .slice(prevHints, prevHints + count)
                    .map((hint, hintIndex) => (
                      <Item
                        key={`result-hint-${index}-${hintIndex}`}
                        variant="muted"
                        className="border-0"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
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
                    ));
                })()}
              <Item
                key={`answer-${index}`}
                variant="muted"
                className={`${
                  results[index]
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-0'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-0'
                }`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <ItemMedia>
                  {results[index] ? (
                    <CircleCheck className="size-5" />
                  ) : (
                    <CircleX className="size-5" />
                  )}
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="w-full flex gap-2 items-center justify-between">
                    {isMultipleChoice
                      ? quizQuestion.options[Number(answer)]
                      : answer}
                    {isEstimation && (
                      <EstimationAnswerBadge
                        quizQuestion={quizQuestion}
                        answer={answer}
                        isCorrect={results[index]}
                      />
                    )}
                  </ItemTitle>
                </ItemContent>
              </Item>
            </Fragment>
          ))}
          {isCompleted &&
            (quizQuestion.hints ?? [])
              .slice(hintsUsed, (quizQuestion.hints ?? []).length)
              .map((hint, hintIndex) => (
                <Item
                  key={`result-hint-no-revealed-${hintIndex}`}
                  variant="muted"
                  className="border-0"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <ItemMedia>
                    <EyeOff className="size-5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="text-sm text-muted-foreground">
                      {hint}
                    </ItemTitle>
                  </ItemContent>
                </Item>
              ))}
        </AnimatePresence>
      </div>
    )
  );
}
