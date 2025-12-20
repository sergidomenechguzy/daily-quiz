import { Button } from '~/components/ui/button';
import type { MultipleChoiceQuestion } from '~/types/quiz-question';
import {
  useGetAnswers,
  useGetQuizResult,
  useQuizStore,
} from '~/stores/quiz-store';
import { Typography } from '~/components/ui/typography';
import { Hint } from '~/components/hint';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';
import { useDailyIndex } from '~/hooks/useDailyIndex';

interface MultipleChoiceQuizProps {
  quizQuestion: MultipleChoiceQuestion;
}

export function MultipleChoiceQuiz({ quizQuestion }: MultipleChoiceQuizProps) {
  const { dateString } = useDailyIndex();
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const answers = useGetAnswers(dateString);
  const { isCompleted } = useGetQuizResult(dateString);

  function onSelect(selected: number) {
    submitAnswer(dateString, selected.toString(), quizQuestion);
  }

  return (
    <QuizCard>
      <div className="flex flex-col gap-8">
        {isCompleted && (
          <>
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
                <Button
                  key={`answer-${index}-${option}`}
                  onClick={isCompleted ? undefined : () => onSelect(index)}
                  disabled={isCompleted || selected}
                  className={`py-7 ${
                    !isCompleted && !selected
                      ? ''
                      : correct
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 disabled:opacity-100'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {option}
                </Button>
              );
            })}
          </div>
          {!isCompleted && <Hint hintIndex={0} remainingAttemptsToShow={1} />}
        </div>
        {isCompleted && <Answers />}
      </div>
    </QuizCard>
  );
}
