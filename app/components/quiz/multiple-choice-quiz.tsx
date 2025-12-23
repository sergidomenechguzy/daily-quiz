import { motion, AnimatePresence } from 'motion/react';
import { Button } from '~/components/ui/button';
import type { MultipleChoiceQuestion } from '~/types/quiz-question';
import { useQuizStore } from '~/stores/quiz-store';
import { Typography } from '~/components/ui/typography';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { QuizMedia } from '~/components/quiz-media';
import { Hints } from '~/components/hints';

interface MultipleChoiceQuizProps {
  quizQuestion: MultipleChoiceQuestion;
}

export function MultipleChoiceQuiz({ quizQuestion }: MultipleChoiceQuizProps) {
  const { dateString } = useDailyIndex();
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const answers = useQuizStore(state => state.quizState[dateString]?.answers);
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

  function onSelect(selected: number) {
    submitAnswer(dateString, selected.toString(), quizQuestion);
  }

  return (
    <QuizCard>
      <div className="flex flex-col gap-8">
        {isCompleted && (
          <>
            <QuizMedia media={quizQuestion.media} />
            <div className="flex flex-col gap-2">
              <Typography variant="large">
                {quizQuestion.options[quizQuestion.correctAnswer]}
              </Typography>
              <Typography variant="small">
                {quizQuestion.explanation}
              </Typography>
            </div>
          </>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {quizQuestion.options.map((option, index) => {
              const selected =
                answers &&
                answers.findIndex(answer => Number(answer) === index) !== -1;
              const correct = quizQuestion.correctAnswer === index;

              return (
                <AnimatePresence
                  key={`answer-button-wrapper-${index}`}
                  mode="wait"
                  initial={false}
                >
                  <motion.span
                    key={`answer-button-${isCompleted || selected ? 'revealed' : 'default'}-${index}`}
                    initial={
                      isCompleted || selected
                        ? {
                            opacity: 0,
                            rotateX: 90,
                          }
                        : undefined
                    }
                    animate={{
                      opacity: 1,
                      rotateX: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotateX: -90,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                  >
                    <Button
                      onClick={isCompleted ? undefined : () => onSelect(index)}
                      disabled={isCompleted || selected}
                      className={`py-7 w-full ${
                        !isCompleted && !selected
                          ? ''
                          : correct
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 disabled:opacity-100'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {option}
                    </Button>
                  </motion.span>
                </AnimatePresence>
              );
            })}
          </div>
          {!isCompleted && <Hints />}
        </div>
        <Answers />
      </div>
    </QuizCard>
  );
}
