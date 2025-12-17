import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { QuizAttempt } from '~/types/quiz-attempt';

interface QuizState {
  attempts: Record<string, QuizAttempt>;
}

interface QuizActions {
  submitAnswer: (
    dateString: string,
    answer: string,
    isCorrect: boolean
  ) => void;
}

const MAX_ATTEMPTS = 5;

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    immer(set => ({
      attempts: {},

      submitAnswer: (dateString, answer, isCorrect) => {
        set(state => {
          const existing = state.attempts[dateString];

          if (existing) {
            // Don't allow more answers if already completed or max attempts reached
            if (
              existing.isCompleted ||
              existing.answers.length >= MAX_ATTEMPTS
            ) {
              return;
            }

            existing.answers.push({ answer, isCorrect });

            // Mark as completed if correct or max attempts reached
            if (isCorrect || existing.answers.length >= MAX_ATTEMPTS) {
              existing.isCompleted = true;
              existing.completedAt = new Date().toISOString();
            }
          } else {
            // First attempt for this date
            const isCompleted = isCorrect;
            state.attempts[dateString] = {
              answers: [{ answer, isCorrect }],
              isCompleted,
              startedAt: new Date().toISOString(),
              completedAt: isCompleted ? new Date().toISOString() : undefined,
            };
          }
        });
      },
    })),
    {
      name: 'daily-quiz-storage',
    }
  )
);

export function useGetAttempt(dateString: string | undefined) {
  const attempt = useQuizStore(state =>
    dateString ? state.attempts[dateString] : undefined
  );

  if (!attempt) return undefined;

  return attempt;
}

export function useHasCompletedQuiz(dateString: string | undefined) {
  const attempt = useQuizStore(state =>
    dateString ? state.attempts[dateString] : undefined
  );

  return attempt?.isCompleted ?? false;
}

export function useRemainingAttempts(dateString: string | undefined) {
  const attempt = useQuizStore(state =>
    dateString ? state.attempts[dateString] : undefined
  );

  if (!attempt) return MAX_ATTEMPTS;

  // Don't count the correct answer against remaining attempts
  const hasWon = attempt.answers.some(a => a.isCorrect);
  const wrongAnswers = attempt.answers.filter(a => !a.isCorrect).length;

  return hasWon
    ? MAX_ATTEMPTS - wrongAnswers
    : MAX_ATTEMPTS - attempt.answers.length;
}
