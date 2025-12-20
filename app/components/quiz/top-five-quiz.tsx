import { Controller, useForm } from 'react-hook-form';
import { ArrowBigRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { TopFiveQuestion } from '~/types/quiz-question';
import { Field } from '~/components/ui/field';
import {
  useGetTopFiveQuizResultWithIndex,
  useQuizStore,
} from '~/stores/quiz-store';
import { Hint } from '~/components/hint';
import { Answers } from '~/components/answers';
import { QuizCard } from '~/components/quiz-card';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '~/components/ui/item';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';

type FormData = {
  answer: string;
};

interface TopFiveQuizProps {
  quizQuestion: TopFiveQuestion;
}

export function TopFiveQuiz({ quizQuestion }: TopFiveQuizProps) {
  const { dateString } = useDailyIndex();
  const submitTopFiveAnswer = useQuizStore(state => state.submitTopFiveAnswer);
  const { isCompleted, results } = useGetTopFiveQuizResultWithIndex(dateString);

  const form = useForm<FormData>({
    defaultValues: {
      answer: '',
    },
  });

  function onSubmit(data: FormData) {
    submitTopFiveAnswer(dateString, data.answer, quizQuestion);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <QuizCard>
        <div className="flex flex-col gap-8">
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
              <div className="flex flex-col gap-2">
                <Hint hintIndex={0} remainingAttemptsToShow={3} />
                <Hint hintIndex={1} remainingAttemptsToShow={1} />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            {quizQuestion.correctAnswers.map((correctAnswer, index) => {
              const guessed =
                results.findIndex(result => result.index === index) !== -1;
              return (
                <Item
                  key={`answer-${index}`}
                  variant={guessed ? 'muted' : 'outline'}
                >
                  <ItemMedia
                    variant="image"
                    // needed to prevent vertical shift of number when title and description are added
                    className="group-has-[[data-slot=item-description]]/item:translate-y-0"
                  >
                    <Typography variant="h4">{index + 1}</Typography>
                  </ItemMedia>
                  {(guessed || isCompleted) && (
                    <ItemContent className="gap-0">
                      <ItemTitle>{correctAnswer.answer}</ItemTitle>
                      {correctAnswer.value && (
                        <ItemDescription className="leading-[20px]">
                          {correctAnswer.value}
                        </ItemDescription>
                      )}
                    </ItemContent>
                  )}
                </Item>
              );
            })}
          </div>
          <Answers />
        </div>
      </QuizCard>
    </form>
  );
}
