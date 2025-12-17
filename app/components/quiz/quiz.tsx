import { useLoaderData } from 'react-router';
import type { loader } from '~/routes/home';
import { Typography } from '~/components/ui/typography';
import { ExactMatchQuiz } from './exact-match-quiz';
import { EstimationQuiz } from './estimation-quiz';

export const Quiz = () => {
  const { quizQuestion } = useLoaderData<typeof loader>();

  if (!quizQuestion) {
    return null;
  }

  switch (quizQuestion.type) {
    case 'estimation': {
      return <EstimationQuiz quizQuestion={quizQuestion} />;
    }
    case 'top-five': {
      return <Typography variant="h2">{quizQuestion.questionText}</Typography>;
    }
    case 'multiple-choice': {
      return <Typography variant="h2">{quizQuestion.questionText}</Typography>;
    }
    case 'exact-match': {
      return <ExactMatchQuiz quizQuestion={quizQuestion} />;
    }
    default: {
      return null;
    }
  }
};
