import { useLoaderData } from 'react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { ExactMatchQuestion } from '~/types/quiz-question';
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

interface ExactMatchQuizProps {
  quizQuestion: ExactMatchQuestion;
}

export function ExactMatchQuiz({ quizQuestion }: ExactMatchQuizProps) {
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
    const normalized = userAnswer.toLowerCase().trim();
    const correct = quizQuestion.correctAnswer.toLowerCase().trim();

    if (normalized === correct) return true;

    if (quizQuestion.acceptedVariations) {
      return quizQuestion.acceptedVariations.some(
        variation => variation.toLowerCase().trim() === normalized
      );
    }

    return false;
  }

  function onSubmit(data: FormData) {
    if (!dateString || isCompleted) return;

    const isCorrect = checkAnswer(data.answer);
    submitAnswer(dateString, data.answer, isCorrect, quizQuestion.type);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <QuizCard>
        <div className="flex flex-col gap-8">
          {isCompleted && (
            <>
              <div className="flex flex-col gap-2">
                <Typography variant="large">
                  {quizQuestion.correctAnswer}
                </Typography>
                <Typography variant="small">
                  {quizQuestion.explanation}
                </Typography>
              </div>
            </>
          )}
          {!isCompleted && (
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Controller
                  name="answer"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <Input
                        {...field}
                        id={field.name}
                        type="text"
                        placeholder="Enter your guess..."
                        required
                      />
                    </Field>
                  )}
                />
                <Button type="submit">Submit</Button>
              </div>
              <div className="flex flex-col gap-2">
                <Hint hintIndex={0} remainingAttemptsToShow={3} />
                <Hint hintIndex={1} remainingAttemptsToShow={1} />
              </div>
            </div>
          )}
          <Answers />
        </div>
      </QuizCard>
    </form>
  );
}
