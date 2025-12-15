import type { Route } from './+types/home';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { z } from 'zod';
import { format } from 'date-fns';
import { getDailyIndex } from '~/lib/getDailyIndex.server';
import { quizQuestions } from '~/data/questions';
import { Layout } from '~/components/layout/layout';
import { Quiz } from '~/components/quiz/quiz';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Daily Quiz' },
    { name: 'description', content: 'Get a daily quiz question' },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(loaderData);

  useEffect(() => {
    if (searchParams.get('date')) {
      return;
    }

    const date = format(new Date(), 'YYYY-MM-DD');
    const next = new URLSearchParams(searchParams);
    next.set('date', date);

    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

const dateStringSchema = z.iso.date();

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const dateString = url.searchParams.get('date');

  const dateParsed = dateStringSchema.safeParse(dateString);
  // Only compute the daily index when the client has provided a valid
  // `date` query parameter. If it's missing or invalid, we skip the
  // server-side fallback (which would use the server's timezone) and
  // let the client redirect with its own current date.
  const dailyIndex = dateParsed.success
    ? getDailyIndex(new Date(dateParsed.data))
    : null;

  if (!dailyIndex) {
    return {
      dailyIndex: null,
      quizQuestion: null,
    };
  }

  return {
    dailyIndex,
    quizQuestion: dailyIndex.isValid ? quizQuestions[dailyIndex.index] : null,
  };
}
