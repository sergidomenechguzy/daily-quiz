import { Button } from '~/components/ui/button';
import type { EstimationQuestion } from '~/types/quiz-question';
import { Controller, useForm } from 'react-hook-form';
import { ArrowBigRight } from 'lucide-react';
import { Field } from '~/components/ui/field';
import { useQuizStore } from '~/stores/quiz-store';
import { Typography } from '~/components/ui/typography';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '~/components/ui/input-group';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { QuizMedia } from '~/components/quiz-media';
import { Hints } from '~/components/hints';

type FormData = {
  answer: string;
};

interface EstimationQuizProps {
  quizQuestion: EstimationQuestion;
}

export function EstimationQuiz({ quizQuestion }: EstimationQuizProps) {
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
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <QuizCard>
        <div className="flex flex-col gap-8">
          {isCompleted && (
            <>
              <QuizMedia media={quizQuestion.media} />
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
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Controller
                  name="answer"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <InputGroup>
                        <InputGroupInput
                          {...field}
                          id={field.name}
                          type="number"
                          placeholder="Enter your guess..."
                          required
                        />
                        {quizQuestion.unit && (
                          <InputGroupAddon align="inline-end">
                            {quizQuestion.unit}
                          </InputGroupAddon>
                        )}
                      </InputGroup>
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
