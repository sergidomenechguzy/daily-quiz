import { Controller, useForm } from 'react-hook-form';
import { ArrowBigRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { ExactMatchQuestion } from '~/types/quiz-question';
import { Field } from '~/components/ui/field';
import { useGetQuizResult, useQuizStore } from '~/stores/quiz-store';
import { Typography } from '~/components/ui/typography';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { QuizMedia } from '~/components/quiz-media';
import { Hints } from '~/components/hints';

type FormData = {
  answer: string;
};

interface ExactMatchQuizProps {
  quizQuestion: ExactMatchQuestion;
}

export function ExactMatchQuiz({ quizQuestion }: ExactMatchQuizProps) {
  const { dateString } = useDailyIndex();
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const { isCompleted } = useGetQuizResult(dateString);

  const form = useForm<FormData>({
    defaultValues: {
      answer: '',
    },
  });

  function onSubmit(data: FormData) {
    submitAnswer(dateString, data.answer, quizQuestion);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <QuizCard>
        <div className="flex flex-col gap-8">
          {isCompleted && (
            <>
              <QuizMedia media={quizQuestion.media} />
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
                <Button type="submit">
                  <ArrowBigRight />
                </Button>
              </div>
              <Hints />
            </div>
          )}
          <Answers />
        </div>
      </QuizCard>
    </form>
  );
}
