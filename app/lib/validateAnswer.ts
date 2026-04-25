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
    return {
      scorePercent: 100,
      isCorrect: true,
    };
  }

  if (quizQuestion.acceptedVariations) {
    const matchedVariation = quizQuestion.acceptedVariations.some(
      variation => variation.toLowerCase().trim() === normalized
    );

    return {
      scorePercent: matchedVariation ? 100 : 0,
      isCorrect: matchedVariation,
    };
  }

  return {
    scorePercent: 0,
    isCorrect: false,
  };
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
    return {
      scorePercent: 100,
      isCorrect: true,
    };
  }

  if (quizQuestion.tolerance != null) {
    let floor = correct - quizQuestion.tolerance;
    floor = Number(floor.toFixed(quizQuestion.precision));
    let ceil = correct + quizQuestion.tolerance;
    ceil = Number(ceil.toFixed(quizQuestion.precision));

    const withinTolerance = normalized >= floor && normalized <= ceil;

    return {
      scorePercent: withinTolerance ? 75 : 0,
      isCorrect: withinTolerance,
    };
  }

  return {
    scorePercent: 0,
    isCorrect: false,
  };
}

export function validateMultipleChoiceAnswer(
  answer: string,
  quizQuestion: MultipleChoiceQuestion
) {
  const correct = quizQuestion.correctAnswer;

  if (Number(answer) === correct) {
    return {
      scorePercent: 100,
      isCorrect: true,
    };
  }

  return {
    scorePercent: 0,
    isCorrect: false,
  };
}

function matchesTopFiveAnswer(
  normalized: string,
  answerData: TopFiveQuestion['correctAnswers'][number]
) {
  const correctAnswer = answerData.answer.toLowerCase().trim();

  if (normalized === correctAnswer) {
    return true;
  }

  return (
    answerData.acceptedVariations?.some(
      variation => variation.toLowerCase().trim() === normalized
    ) ?? false
  );
}

export function validateTopFiveAnswerWithIndex(
  answer: string,
  quizQuestion: TopFiveQuestion
) {
  const normalized = answer.toLowerCase().trim();

  for (let i = 0; i < quizQuestion.correctAnswers.length; i++) {
    const correctAnswerData = quizQuestion.correctAnswers[i];

    if (matchesTopFiveAnswer(normalized, correctAnswerData)) {
      return {
        scorePercent: 100,
        isCorrect: true,
        index: i,
      };
    }
  }

  for (const otherOption of quizQuestion.otherOptions ?? []) {
    if (matchesTopFiveAnswer(normalized, otherOption)) {
      return {
        scorePercent: 100,
        isCorrect: true,
      };
    }
  }

  return {
    scorePercent: 0,
    isCorrect: false,
  };
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
