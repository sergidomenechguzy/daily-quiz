import { useLoaderData } from 'react-router';
import type { QuizQuestion } from '~/types/quiz-question';
import type { loader } from '~/routes/home';

/**
 * Hook to access the quiz question from loader data.
 * Ensures the quiz question is non-null.
 * Only call this hook within components that are guaranteed to be rendered
 * when a quiz question is available (i.e., after the parent has checked validity).
 */
export const useQuizQuestion = (): QuizQuestion => {
  const { quizQuestion } = useLoaderData<typeof loader>();

  if (!quizQuestion) {
    throw new Error(
      'Quiz question must be loaded. This hook should only be called in components rendered when a quiz question is available.'
    );
  }

  return quizQuestion;
};
