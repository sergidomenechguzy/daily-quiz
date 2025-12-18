import { useLoaderData } from 'react-router';
import { CircleCheck, CircleX } from 'lucide-react';
import { useGetAttempt } from '~/stores/quiz-store';
import type { loader } from '~/routes/home';
import { Alert, AlertTitle } from '~/components/ui/alert';
import { Typography } from '~/components/ui/typography';
import { EstimationAnswerBadge } from '~/components/estimation-answer-badge';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';

export function Answers() {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const quizQuestion = useQuizQuestion();
  const dateString = dailyIndex.dateString;
  const attempt = useGetAttempt(dateString);

  const isEstimation = quizQuestion.type === 'estimation';
  const isMultipleChoice = quizQuestion.type === 'multiple-choice';

  return (
    attempt &&
    attempt.answers.length > 0 && (
      <div className="flex flex-col gap-2">
        <Typography variant="muted">Your answers</Typography>
        {attempt.answers.map((answer, index) => (
          <Alert
            key={index}
            className={`${
              answer.isCorrect
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-0'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-0'
            }`}
          >
            {answer.isCorrect ? <CircleCheck /> : <CircleX />}
            <AlertTitle className="flex gap-2 items-center justify-between">
              {isMultipleChoice
                ? quizQuestion.options[Number(answer.answer)]
                : answer.answer}
              {isEstimation && (
                <EstimationAnswerBadge
                  quizQuestion={quizQuestion}
                  answer={answer}
                />
              )}
            </AlertTitle>
          </Alert>
        ))}
      </div>
    )
  );
}
