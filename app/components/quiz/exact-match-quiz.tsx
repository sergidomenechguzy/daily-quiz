import { Controller, useForm } from 'react-hook-form';
import { ArrowBigRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { ExactMatchQuestion } from '~/types/quiz-question';
import { Field } from '~/components/ui/field';
import { useQuizStore } from '~/stores/quiz-store';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { Hints } from '~/components/hints';
import { QuizSolution } from '../quiz-solution';

type FormData = {
  answer: string;
};

interface ExactMatchQuizProps {
  quizQuestion: ExactMatchQuestion;
}

export function ExactMatchQuiz({ quizQuestion }: ExactMatchQuizProps) {
  const { dateString } = useDailyIndex();
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

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
    <QuizCard>
      <div className="flex flex-col gap-8">
        <QuizSolution quizQuestion={quizQuestion} />
        {!isCompleted && (
          <div className="flex flex-col gap-4">
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
            </form>
            <Hints />
          </div>
        )}
        <Answers />
      </div>
    </QuizCard>
  );
}
