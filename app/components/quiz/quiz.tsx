import { Typography } from '~/components/ui/typography';
import { ExactMatchQuiz } from './exact-match-quiz';
import { EstimationQuiz } from './estimation-quiz';
import { useQuizQuestion } from '~/hooks/useQuizQuestion';
import { MultipleChoiceQuiz } from './multiple-choice-quiz';

export const Quiz = () => {
  const quizQuestion = useQuizQuestion();

  switch (quizQuestion.type) {
    case 'estimation': {
      return <EstimationQuiz quizQuestion={quizQuestion} />;
    }
    case 'top-five': {
      return <Typography variant="h2">{quizQuestion.questionText}</Typography>;
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
