import { useLoaderData } from 'react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { EstimationQuestion } from '~/types/quiz-question';
import { Controller, useForm } from 'react-hook-form';
import { Field } from '~/components/ui/field';
import { useGetAttempt, useQuizStore } from '~/stores/quiz-store';
import type { loader } from '~/routes/home';
import { Typography } from '~/components/ui/typography';
import { Hint } from '~/components/hint';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';

type FormData = {
  answer: string;
};

interface EstimationQuizProps {
  quizQuestion: EstimationQuestion;
}

export function EstimationQuiz({ quizQuestion }: EstimationQuizProps) {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const dateString = dailyIndex.dateString;
  const attempt = useGetAttempt(dateString);

  const isCompleted = attempt?.isCompleted ?? false;

  const form = useForm<FormData>({
    defaultValues: {
      answer: '',
    },
  });

  function checkAnswer(userAnswer: string): boolean {
    let normalized = Number(userAnswer);
    const correct = quizQuestion.correctAnswer;
    if (quizQuestion.precision != null) {
      normalized = Number(normalized.toFixed(quizQuestion.precision));
    }

    if (normalized === correct) return true;

    if (quizQuestion.tolerance != null) {
      let floor = correct - quizQuestion.tolerance;
      floor = Number(floor.toFixed(quizQuestion.precision));
      let ceil = correct + quizQuestion.tolerance;
      ceil = Number(ceil.toFixed(quizQuestion.precision));

      return normalized >= floor && normalized <= ceil;
    }

    return false;
  }

  function onSubmit(data: FormData) {
    if (!dateString || isCompleted) return;

    const isCorrect = checkAnswer(data.answer);
    submitAnswer(dateString, data.answer, isCorrect);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <QuizCard quizQuestion={quizQuestion}>
        <div className="flex flex-col gap-8">
          {isCompleted && (
            <>
              <div className="flex flex-col gap-2">
                <Typography variant="large">
                  {quizQuestion.correctAnswer}
                  {quizQuestion.unit ? ` ${quizQuestion.unit}` : ''}
                </Typography>
                <Typography variant="small">
                  {quizQuestion.explanation}
                </Typography>
              </div>
            </>
          )}
          {!isCompleted && (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Controller
                  name="answer"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <Input
                        {...field}
                        id={field.name}
                        type="number"
                        placeholder="Enter your guess..."
                        required
                      />
                    </Field>
                  )}
                />
                <Button type="submit">Submit</Button>
              </div>
              <Hint
                quizQuestion={quizQuestion}
                hintIndex={0}
                remainingAttemptsToShow={3}
              />
              <Hint
                quizQuestion={quizQuestion}
                hintIndex={1}
                remainingAttemptsToShow={1}
              />
            </div>
          )}
          <Answers />
        </div>
      </QuizCard>
    </form>
  );
}
