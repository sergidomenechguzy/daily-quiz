import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface QuizAnswer {
  answer: string;
  isCorrect: boolean;
}

export interface QuizAttempt {
  answers: QuizAnswer[];
  isCompleted: boolean;
  startedAt: string;
  completedAt?: string;
}

interface QuizState {
  attempts: Record<string, QuizAttempt>;
}

interface QuizActions {
  submitAnswer: (
    dateString: string,
    answer: string,
    isCorrect: boolean
  ) => void;
  getAttempt: (dateString: string) => QuizAttempt | undefined;
  hasCompletedQuiz: (dateString: string) => boolean;
}

const MAX_ATTEMPTS = 5;

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    immer((set, get) => ({
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

      getAttempt: dateString => {
        return get().attempts[dateString];
      },

      hasCompletedQuiz: dateString => {
        const attempt = get().attempts[dateString];
        return attempt?.isCompleted ?? false;
      },
    })),
    {
      name: 'daily-quiz-storage',
    }
  )
);

/**
 * Hook to get remaining attempts for a given date.
 * Subscribes to state changes and triggers re-renders when attempts change.
 */
export function useRemainingAttempts(dateString: string | undefined): number {
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
