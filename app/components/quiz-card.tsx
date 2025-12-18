import type { PropsWithChildren } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';

export function QuizCard({ children }: PropsWithChildren) {
  const quizQuestion = useQuizQuestion();

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
