import type {
  EstimationQuestion,
  ExactMatchQuestion,
  MultipleChoiceQuestion,
  QuizQuestion,
  TopFiveQuestion,
} from '~/types/quiz-question';
import {
  validateEstimationAnswer,
  validateExactMatchAnswer,
  validateMultipleChoiceAnswer,
  validateTopFiveAnswerWithIndex,
} from './validateAnswer';
import { MAX_ATTEMPTS } from '~/stores/quiz-store';

export function validateExactMatchQuiz(
  answers: string[],
  quizQuestion: ExactMatchQuestion
) {
  const results = answers.map(answer =>
    validateExactMatchAnswer(answer, quizQuestion)
  );
  const isCorrect = results.some(Boolean);
  const isCompleted =
    isCorrect || answers.length >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results,
    isCorrect,
    isCompleted,
  };
}

export function validateEstimationQuiz(
  answers: string[],
  quizQuestion: EstimationQuestion
) {
  const results = answers.map(answer =>
    validateEstimationAnswer(answer, quizQuestion)
  );
  const isCorrect = results.some(Boolean);
  const isCompleted =
    isCorrect || answers.length >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results,
    isCorrect,
    isCompleted,
  };
}

export function validateMultipleChoiceQuiz(
  answers: string[],
  quizQuestion: MultipleChoiceQuestion
) {
  const results = answers.map(answer =>
    validateMultipleChoiceAnswer(answer, quizQuestion)
  );
  const isCorrect = results.some(Boolean);
  const isCompleted =
    isCorrect || answers.length >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results,
    isCorrect,
    isCompleted,
  };
}

export function validateTopFiveQuizWithIndex(
  answers: string[],
  quizQuestion: TopFiveQuestion
) {
  const results = answers.map(answer =>
    validateTopFiveAnswerWithIndex(answer, quizQuestion)
  );
  const correctAnswerCount = results.filter(result => result.isCorrect).length;
  const isCorrect = correctAnswerCount >= 5;
  const isCompleted =
    isCorrect ||
    answers.length - correctAnswerCount >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results,
    isCorrect,
    isCompleted,
  };
}

export function validateTopFiveQuiz(
  answers: string[],
  quizQuestion: TopFiveQuestion
) {
  const { results, isCorrect, isCompleted } = validateTopFiveQuizWithIndex(
    answers,
    quizQuestion
  );

  return {
    results: results.map(result => result.isCorrect),
    isCorrect,
    isCompleted,
  };
}

export function validateQuiz(
  answers: string[] | undefined,
  quizQuestion: QuizQuestion
) {
  if (!answers) {
    return {
      results: [],
      isCorrect: false,
      isCompleted: false,
    };
  }

  switch (quizQuestion.type) {
    case 'multiple-choice': {
      return validateMultipleChoiceQuiz(answers, quizQuestion);
    }
    case 'estimation': {
      return validateEstimationQuiz(answers, quizQuestion);
    }
    case 'exact-match': {
      return validateExactMatchQuiz(answers, quizQuestion);
    }
    case 'top-five': {
      return validateTopFiveQuiz(answers, quizQuestion);
    }
    default: {
      return {
        results: [],
        isCorrect: false,
        isCompleted: false,
      };
    }
  }
}
