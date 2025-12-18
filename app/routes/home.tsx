import type { Route } from './+types/home';
import { Link, redirect } from 'react-router';
import { format } from 'date-fns';
import { getDailyIndex } from '~/lib/getDailyIndex.server';
import { quizQuestions } from '~/data/questions';
import { Layout } from '~/components/layout/layout';
import { Quiz } from '~/components/quiz/quiz';
import { Health } from '~/components/health';
import { Result } from '~/components/result';
import { Typography } from '~/components/ui/typography';
import { Button } from '~/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Daily Quiz' },
    { name: 'description', content: 'Get a daily quiz question' },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  if (!loaderData.dailyIndex.isValid || !loaderData.quizQuestion) {
    return (
      <Layout>
        <Typography variant="h4" className="text-center">
          Sorry there is no quiz question available for this day.
        </Typography>
        <Typography variant="p" className="text-center">
          Please choose a different day if you want to answer a quiz question.
        </Typography>
        <div className="flex justify-center gap-2 pt-8">
          <Button asChild>
            <Link to="/">Today</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      dayNumber={loaderData.dailyIndex.dayNumber}
      gameDate={loaderData.dailyIndex.gameDate}
    >
      <div className="flex items-center justify-between">
        <Result />
        <Health />
      </div>
      <Quiz />
    </Layout>
  );
}

export async function clientLoader({
  serverLoader,
  request,
}: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  const dateString = url.searchParams.get('date');

  if (!dateString) {
    const today = format(new Date(), 'yyyy-MM-dd');
    return redirect(`/?date=${today}`);
  }
  const serverData = await serverLoader();
  return serverData;
}

clientLoader.hydrate = true as const; // `as const` for type inference

export function HydrateFallback() {
  return <Layout />;
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
