import type {
  EstimationQuestion,
  ExactMatchQuestion,
  MultipleChoiceQuestion,
  QuizQuestion,
  TopFiveQuestion,
} from '~/types/quiz-question';

export function validateExactMatchAnswer(
  answer: string,
  quizQuestion: ExactMatchQuestion
) {
  const normalized = answer.toLowerCase().trim();
  const correct = quizQuestion.correctAnswer.toLowerCase().trim();

  if (normalized === correct) {
    return true;
  }

  if (quizQuestion.acceptedVariations) {
    return quizQuestion.acceptedVariations.some(
      variation => variation.toLowerCase().trim() === normalized
    );
  }

  return false;
}

export function validateEstimationAnswer(
  answer: string,
  quizQuestion: EstimationQuestion
) {
  let normalized = Number(answer);
  const correct = quizQuestion.correctAnswer;
  if (quizQuestion.precision != null) {
    normalized = Number(normalized.toFixed(quizQuestion.precision));
  }

  if (normalized === correct) {
    return true;
  }

  if (quizQuestion.tolerance != null) {
    let floor = correct - quizQuestion.tolerance;
    floor = Number(floor.toFixed(quizQuestion.precision));
    let ceil = correct + quizQuestion.tolerance;
    ceil = Number(ceil.toFixed(quizQuestion.precision));

    return normalized >= floor && normalized <= ceil;
  }

  return false;
}

export function validateMultipleChoiceAnswer(
  answer: string,
  quizQuestion: MultipleChoiceQuestion
) {
  const correct = quizQuestion.correctAnswer;

  if (Number(answer) === correct) {
    return true;
  }

  return false;
}

export function validateTopFiveAnswerWithIndex(
  answer: string,
  quizQuestion: TopFiveQuestion
) {
  const normalized = answer.toLowerCase().trim();

  for (let i = 0; i < quizQuestion.correctAnswers.length; i++) {
    const correctAnswerData = quizQuestion.correctAnswers[i];
    const correctAnswer = correctAnswerData.answer.toLowerCase().trim();

    if (normalized === correctAnswer) {
      return { isCorrect: true, index: i };
    }

    if (correctAnswerData.acceptedVariations) {
      const matchesVariation = correctAnswerData.acceptedVariations.some(
        variation => variation.toLowerCase().trim() === normalized
      );
      if (matchesVariation) {
        return { isCorrect: true, index: i };
      }
    }
  }

  return { isCorrect: false };
}

export function validateTopFiveAnswer(
  answer: string,
  quizQuestion: TopFiveQuestion
) {
  const result = validateTopFiveAnswerWithIndex(answer, quizQuestion);
  return result.isCorrect;
}

export function validateAnswer(answer: string, quizQuestion: QuizQuestion) {
  switch (quizQuestion.type) {
    case 'multiple-choice': {
      return validateMultipleChoiceAnswer(answer, quizQuestion);
    }
    case 'estimation': {
      return validateEstimationAnswer(answer, quizQuestion);
    }
    case 'exact-match': {
      return validateExactMatchAnswer(answer, quizQuestion);
    }
    case 'top-five': {
      return validateTopFiveAnswer(answer, quizQuestion);
    }
    default: {
      return false;
    }
  }
}
