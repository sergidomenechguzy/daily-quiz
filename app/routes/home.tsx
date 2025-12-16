import type { Route } from './+types/home';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { format } from 'date-fns';
import { getDailyIndex } from '~/lib/getDailyIndex.server';
import { quizQuestions } from '~/data/questions';
import { Layout } from '~/components/layout/layout';
import { Quiz } from '~/components/quiz/quiz';
import { Health } from '~/components/health';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Daily Quiz' },
    { name: 'description', content: 'Get a daily quiz question' },
  ];
}

export default function Home({}: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('date')) {
      return;
    }

    const date = format(new Date(), 'yyyy-MM-dd');
    const next = new URLSearchParams(searchParams);
    next.set('date', date);

    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

  return (
    <Layout>
      <Health />
      <Quiz />
    </Layout>
  );
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const dateString = url.searchParams.get('date');

  const dailyIndex = getDailyIndex(dateString);

  return {
    dailyIndex,
    quizQuestion: dailyIndex.isValid ? quizQuestions[dailyIndex.index] : null,
  };
}
