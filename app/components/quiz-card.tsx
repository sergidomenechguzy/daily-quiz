import type { PropsWithChildren } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import type { QuizQuestion } from '~/types/quiz-question';
import { Badge } from '~/components/ui/badge';

interface QuizCardProps {
  quizQuestion: QuizQuestion;
}

export function QuizCard({
  quizQuestion,
  children,
}: PropsWithChildren<QuizCardProps>) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{quizQuestion.questionText}</CardTitle>
        <CardDescription className="flex gap-2">
          <Badge variant="secondary">{quizQuestion.category}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
