import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { getClientEnv } from '~/lib/env';
import {
  validateAnswer,
  validateTopFiveAnswerWithIndex,
} from '~/lib/validateAnswer';
import { validateQuiz, validateTopFiveQuizWithIndex } from '~/lib/validateQuiz';
// import type { QuizAttempt } from '~/types/quiz-attempt';
import type { QuizQuestion, TopFiveQuestion } from '~/types/quiz-question';

interface QuizState {
  answers: Record<string, string[]>;
  hintCounts: Record<string, number[]>;
}

interface QuizActions {
  submitAnswer: (
    dateString: string,
    answer: string,
    quizQuestion: QuizQuestion
  ) => void;
  submitTopFiveAnswer: (
    dateString: string,
    answer: string,
    quizQuestion: TopFiveQuestion
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
      answers: {},
      hintCounts: {},

      submitAnswer: (dateString, answer, quizQuestion) => {
        set(state => {
          const existing = state.answers[dateString];

          if (existing) {
            const { isCompleted } = validateQuiz(existing, quizQuestion);
            if (isCompleted) {
              return;
            }

            existing.push(answer);
          } else {
            state.answers[dateString] = [answer];
          }
        });
      },

      submitTopFiveAnswer: (dateString, answer, quizQuestion) => {
        set(state => {
          const existing = state.answers[dateString];

          if (existing) {
            const { isCompleted, results } = validateTopFiveQuizWithIndex(
              existing,
              quizQuestion
            );
            if (isCompleted) {
              return;
            }

            const result = validateTopFiveAnswerWithIndex(answer, quizQuestion);
            if (
              result.isCorrect &&
              results.some(
                existingResult => existingResult.index === result.index
              )
            ) {
              return;
            }

            existing.push(answer);
          } else {
            state.answers[dateString] = [answer];
          }
        });
      },

      revealHint: (dateString: string) => {
        set(state => {
          const currentAttemptIndex = state.answers[dateString]?.length ?? 0;

          if (!state.hintCounts[dateString]) {
            state.hintCounts[dateString] = [];
          }

          const counts = state.hintCounts[dateString];

          // Fill any missing slots with 0 so index accesses are safe and explicit
          for (let i = counts.length; i <= currentAttemptIndex; i++) {
            if (counts[i] == null) {
              counts[i] = 0;
            }
          }

          counts[currentAttemptIndex] = (counts[currentAttemptIndex] ?? 0) + 1;
        });
      },
    })),
    {
      name: 'daily-quiz-storage',
    }
  )
);

export function useGetAnswers(dateString: string) {
  const answers = useQuizStore(state => state.answers[dateString]);

  return answers;
}

export function useGetHintCounts(dateString: string) {
  const hintCounts = useQuizStore(state => state.hintCounts[dateString]);

  return hintCounts;
}

export function useGetTotalHintCount(dateString: string) {
  const hintCounts = useQuizStore(state => state.hintCounts[dateString]);

  return hintCounts?.reduce((a, b) => a + b, 0) || 0;
}

export function useGetQuizResult(dateString: string) {
  const quizQuestion = useQuizQuestion();
  const answers = useQuizStore(state => state.answers[dateString]);

  return validateQuiz(answers, quizQuestion);
}

export function useGetTopFiveQuizResultWithIndex(dateString: string) {
  const quizQuestion = useQuizQuestion();
  const answers = useQuizStore(state => state.answers[dateString]);

  if (quizQuestion.type !== 'top-five' || !answers) {
    return {
      results: [],
      isCorrect: false,
      isCompleted: false,
    };
  }

  return validateTopFiveQuizWithIndex(answers, quizQuestion);
}

export function useRemainingAttempts(dateString: string) {
  const quizQuestion = useQuizQuestion();
  const answers = useQuizStore(state => state.answers[dateString]);

  if (!answers) {
    return MAX_ATTEMPTS[quizQuestion.type];
  }

  // Don't count the correct answer against remaining attempts
  const [, wrongAnswers] = answers.reduce(
    (acc, answer) =>
      validateAnswer(answer, quizQuestion)
        ? [acc[0] + 1, acc[1]]
        : [acc[0], acc[1] + 1],
    [0, 0]
  );

  return MAX_ATTEMPTS[quizQuestion.type] - wrongAnswers;
}
