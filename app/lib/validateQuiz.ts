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
  const isCorrect = results.some(result => result.isCorrect);
  const scorePercent = results
    .map(result => result.scorePercent)
    .sort((a, b) => b - a)[0];
  const isCompleted =
    isCorrect || answers.length >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results: results.map(result => result.isCorrect),
    scorePercent,
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
  const isCorrect = results.some(result => result.isCorrect);
  const scorePercent = results
    .map(result => result.scorePercent)
    .sort((a, b) => b - a)[0];
  const isCompleted =
    isCorrect || answers.length >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results: results.map(result => result.isCorrect),
    scorePercent,
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
  const isCorrect = results.some(result => result.isCorrect);
  const scorePercent = results
    .map(result => result.scorePercent)
    .sort((a, b) => b - a)[0];
  const isCompleted =
    isCorrect || answers.length >= MAX_ATTEMPTS[quizQuestion.type];

  return {
    results: results.map(result => result.isCorrect),
    scorePercent,
    isCorrect,
    isCompleted,
  };
}

export function validateTopFiveQuiz(
  answers: string[],
  quizQuestion: TopFiveQuestion
) {
  const results = answers.map(answer =>
    validateTopFiveAnswerWithIndex(answer, quizQuestion)
  );
  const correctAnswerCount = results.filter(result => result.isCorrect).length;
  const isCorrect = correctAnswerCount >= quizQuestion.correctAnswers.length;
  const isCompleted =
    isCorrect ||
    answers.length - correctAnswerCount >= MAX_ATTEMPTS[quizQuestion.type];
  const scorePercent = Math.round(
    results.reduce((sum, result) => sum + result.scorePercent, 0) /
      quizQuestion.correctAnswers.length
  );

  return {
    results: results.map(result => result.isCorrect),
    resultIndices: results.map(result => result.index),
    scorePercent,
    isCorrect,
    isCompleted,
  };
}

export function validateQuiz(
  answers: string[] | undefined,
  quizQuestion: QuizQuestion
): {
  results: boolean[];
  resultIndices?: (number | undefined)[];
  scorePercent?: number;
  isCorrect: boolean;
  isCompleted: boolean;
} {
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
