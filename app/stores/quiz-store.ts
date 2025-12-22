import { format } from 'date-fns';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { getClientEnv } from '~/lib/env';
import { validateQuiz } from '~/lib/validateQuiz';
import type { QuizData } from '~/types/quiz-data';
import type { QuizQuestion } from '~/types/quiz-question';

interface QuizState {
  quizState: Record<string, QuizData>;
}

interface QuizActions {
  submitAnswer: (
    dateString: string,
    answer: string,
    quizQuestion: QuizQuestion
  ) => void;
  revealHint: (dateString: string) => void;
}

export const MAX_ATTEMPTS = {
  'multiple-choice': getClientEnv().VITE_MAX_ATTEMPTS_MULTIPLE_CHOICE,
  estimation: getClientEnv().VITE_MAX_ATTEMPTS_ESTIMATION,
  'exact-match': getClientEnv().VITE_MAX_ATTEMPTS_EXACT_MATCH,
  'top-five': getClientEnv().VITE_MAX_ATTEMPTS_TOP_FIVE,
};

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    immer(set => ({
      quizState: {},

      submitAnswer: (dateString, answer, quizQuestion) => {
        set(state => {
          const existing = state.quizState[dateString];

          if (existing) {
            if (existing.isCompleted) {
              return;
            }

            existing.answers.push(answer);
            const result = validateQuiz(existing.answers, quizQuestion);
            existing.isCompleted = result.isCompleted;
            existing.results = result.results;
            existing.resultIndices = result.resultIndices;
            existing.scorePercent = result.scorePercent;
          } else {
            const todayDate = new Date();
            const todayString = format(todayDate, 'yyyy-MM-dd');
            const isArchive = dateString !== todayString;

            const result = validateQuiz([answer], quizQuestion);

            state.quizState[dateString] = {
              answers: [answer],
              hintsUsed: 0,
              hintCounts: [],
              isCompleted: result.isCompleted,
              results: result.results,
              scorePercent: result.scorePercent,
              playedArchive: isArchive,
              questionId: quizQuestion.id,
              type: quizQuestion.type,
              category: quizQuestion.category,
            };

            if (result.resultIndices) {
              state.quizState[dateString].resultIndices = result.resultIndices;
            }
          }
        });
      },

      revealHint: (dateString: string) => {
        set(state => {
          const quizState = state.quizState[dateString];
          if (!quizState) {
            return;
          }

          const currentAttemptIndex = quizState.answers.length;
          const counts = quizState.hintCounts;

          // Fill any missing slots with 0 so index accesses are safe and explicit
          for (let i = counts.length; i <= currentAttemptIndex; i++) {
            if (counts[i] == null) {
              counts[i] = 0;
            }
          }

          counts[currentAttemptIndex] = (counts[currentAttemptIndex] ?? 0) + 1;
          quizState.hintsUsed += 1;
        });
      },
    })),
    {
      name: 'daily-quiz-storage',
    }
  )
);

export function useRemainingAttempts(dateString: string) {
  const results = useQuizStore(state => state.quizState[dateString]?.results);
  const type = useQuizStore(state => state.quizState[dateString]?.type);

  if (!results) {
    return MAX_ATTEMPTS[type];
  }

  // Don't count the correct answer against remaining attempts
  const [, wrongAnswers] = results.reduce(
    (acc, result) => (result ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + 1]),
    [0, 0]
  );

  return MAX_ATTEMPTS[type] - wrongAnswers;
}
