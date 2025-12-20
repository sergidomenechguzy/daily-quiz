import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { EstimationQuiz } from './estimation-quiz';
import { TopFiveQuiz } from './top-five-quiz';
import { MultipleChoiceQuiz } from './multiple-choice-quiz';
import { ExactMatchQuiz } from './exact-match-quiz';

export const Quiz = () => {
  const quizQuestion = useQuizQuestion();

  switch (quizQuestion.type) {
    case 'estimation': {
      return <EstimationQuiz quizQuestion={quizQuestion} />;
    }
    case 'top-five': {
      return <TopFiveQuiz quizQuestion={quizQuestion} />;
    }
    case 'multiple-choice': {
      return <MultipleChoiceQuiz quizQuestion={quizQuestion} />;
    }
    case 'exact-match': {
      return <ExactMatchQuiz quizQuestion={quizQuestion} />;
    }
    default: {
      return null;
    }
  }
};
