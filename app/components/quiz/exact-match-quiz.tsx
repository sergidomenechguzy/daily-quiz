import { useLoaderData } from 'react-router';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import type { ExactMatchQuestion } from '~/types/quizQuestion';
import { Badge } from '~/components/ui/badge';
import { Controller, useForm } from 'react-hook-form';
import { Field } from '~/components/ui/field';
import { useQuizStore, useRemainingAttempts } from '~/stores/quizStore';
import type { loader } from '~/routes/home';
import { Alert, AlertTitle } from '~/components/ui/alert';
import { CircleCheck, CircleX } from 'lucide-react';
import { Typography } from '../ui/typography';
import { useState } from 'react';

type FormData = {
  answer: string;
};

interface ExactMatchQuestionProps {
  quizQuestion: ExactMatchQuestion;
}

export function ExactMatchQuiz({ quizQuestion }: ExactMatchQuestionProps) {
  const { dailyIndex } = useLoaderData<typeof loader>();
  const getAttempt = useQuizStore(state => state.getAttempt);
  const submitAnswer = useQuizStore(state => state.submitAnswer);
  const dateString = dailyIndex.dateString;
  const attempt = dateString ? getAttempt(dateString) : undefined;
  const remainingAttempts = useRemainingAttempts(dateString);
  const [showHint, setShowHint] = useState(false);

  const isCompleted = attempt?.isCompleted ?? false;
  const hasWon = attempt?.answers.some(a => a.isCorrect) ?? false;

  const form = useForm<FormData>({
    defaultValues: {
      answer: '',
    },
  });

  function checkAnswer(userAnswer: string): boolean {
    const normalized = userAnswer.toLowerCase().trim();
    const correct = quizQuestion.correctAnswer.toLowerCase().trim();

    if (normalized === correct) return true;

    // Check accepted variations
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
    submitAnswer(dateString, data.answer, isCorrect);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{quizQuestion.questionText}</CardTitle>
          <CardDescription className="flex gap-2">
            <Badge variant="secondary">{quizQuestion.category}</Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            {isCompleted && (
              <>
                <Typography
                  variant="h2"
                  className={`text-center ${hasWon ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}
                >
                  {hasWon ? '🎉 Correct' : '❌ Wrong'}
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography variant="p">
                    {quizQuestion.correctAnswer}
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
                          type="text"
                          placeholder="Enter your guess..."
                          required
                        />
                      </Field>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </div>
                {remainingAttempts < 3 && quizQuestion.hint && (
                  <div className="flex gap-2 items-center">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowHint(!showHint)}
                    >
                      {showHint ? 'Hide hint' : 'Show hint'}
                    </Button>
                    {showHint && (
                      <Typography variant="muted">
                        Hint: {quizQuestion.hint}
                      </Typography>
                    )}
                  </div>
                )}
              </div>
            )}
            {attempt && attempt.answers.length > 0 && (
              <div className="flex flex-col gap-2">
                {attempt.answers.map((answer, index) => (
                  <Alert
                    key={index}
                    className={`${
                      answer.isCorrect
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}
                  >
                    {answer.isCorrect ? <CircleCheck /> : <CircleX />}
                    <AlertTitle>{answer.answer}</AlertTitle>
                  </Alert>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
