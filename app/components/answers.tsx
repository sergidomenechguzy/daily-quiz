import { CircleCheck, CircleX } from 'lucide-react';
import { useGetAnswers, useGetQuizResult } from '~/stores/quiz-store';
import { Alert, AlertTitle } from '~/components/ui/alert';
import { Typography } from '~/components/ui/typography';
import { EstimationAnswerBadge } from '~/components/estimation-answer-badge';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { useDailyIndex } from '~/hooks/useDailyIndex';

export function Answers() {
  const {dateString} = useDailyIndex();
  const quizQuestion = useQuizQuestion();
  const answers = useGetAnswers(dateString);
  const { results } = useGetQuizResult(dateString);

  const isEstimation = quizQuestion.type === 'estimation';
  const isMultipleChoice = quizQuestion.type === 'multiple-choice';

  return (
    answers &&
    answers.length > 0 && (
      <div className="flex flex-col gap-2">
        <Typography variant="muted">Your answers</Typography>
        {answers.map((answer, index) => (
          <Alert
            key={index}
            className={`${
              results[index]
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-0'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-0'
            }`}
          >
            {results[index] ? <CircleCheck /> : <CircleX />}
            <AlertTitle className="flex gap-2 items-center justify-between">
              {isMultipleChoice ? quizQuestion.options[Number(answer)] : answer}
              {isEstimation && (
                <EstimationAnswerBadge
                  quizQuestion={quizQuestion}
                  answer={answer}
                  isCorrect={results[index]}
                />
              )}
            </AlertTitle>
          </Alert>
        ))}
      </div>
    )
  );
}
