import { Controller, useForm } from 'react-hook-form';
import { ArrowBigRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { TopFiveQuestion } from '~/types/quiz-question';
import { Field } from '~/components/ui/field';
import { useQuizStore } from '~/stores/quiz-store';
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
import { QuizMedia } from '~/components/quiz-media';
import { Hints } from '~/components/hints';
import { AnimatePresence } from 'motion/react';

type FormData = {
  answer: string;
};

interface TopFiveQuizProps {
  quizQuestion: TopFiveQuestion;
}

export function TopFiveQuiz({ quizQuestion }: TopFiveQuizProps) {
  const { dateString } = useDailyIndex();
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );
  const resultIndices = useQuizStore(
    state => state.quizState[dateString]?.resultIndices
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
        {isCompleted && (
          <>
            <QuizMedia media={quizQuestion.media} />
            <div className="flex flex-col gap-2">
              <Typography variant="small">
                {quizQuestion.explanation}
              </Typography>
            </div>
          </>
        )}
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
        <div className="flex flex-col gap-2">
          {quizQuestion.correctAnswers.map((correctAnswer, index) => {
            const guessed =
              resultIndices &&
              resultIndices.findIndex(resultIndex => resultIndex === index) !==
                -1;
            return (
              <AnimatePresence mode="wait" initial={false}>
                <Item
                  key={`answer-${guessed ? 'revealed' : 'hidden'}-${index}`}
                  variant={guessed ? 'muted' : 'outline'}
                  initial={
                    guessed
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
              </AnimatePresence>
            );
          })}
        </div>
        <Answers />
      </div>
    </QuizCard>
  );
}
