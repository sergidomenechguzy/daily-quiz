import type { Route } from './+types/home';
import { Link, redirect } from 'react-router';
import { format, isAfter, startOfDay } from 'date-fns';
import {
  getDailyIndex,
  type InvalidDailyIndexResult,
} from '~/lib/getDailyIndex.server';
import { quizQuestions } from '~/data/questions.server';
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
      <Layout
        gameDate={loaderData.dailyIndex.gameDate}
        firstDate={loaderData.dailyIndex.firstDate}
        lastDate={loaderData.dailyIndex.lastDate}
      >
        <Typography variant="h4" className="text-center">
          Sorry there is no quiz question available for this day.
        </Typography>
        <Typography variant="p" className="text-center">
          Please choose a different day if you want to answer a quiz question.
        </Typography>
        <div className="flex justify-center gap-2 pt-8">
          <Button asChild>
            <Link to="/">Today’s Quiz</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      dayNumber={loaderData.dailyIndex.dayNumber}
      gameDate={loaderData.dailyIndex.gameDate}
      firstDate={loaderData.dailyIndex.firstDate}
      lastDate={loaderData.dailyIndex.lastDate}
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
  const dateParam = url.searchParams.get('date');
  const todayDate = new Date();
  const todayString = format(todayDate, 'yyyy-MM-dd');

  if (!dateParam) {
    return redirect(`/?date=${todayString}`);
  }

  const serverData = await serverLoader();

  // LOCAL TIME GUARD
  // If the user tries to visit a date that is in the future *for them*,
  // prevent quiz question from being passed and make result invalid.
  // (The server might allow it because it's valid in at least one timezone,
  // but we block it here).
  const requestedDate = startOfDay(new Date(dateParam));
  const clientToday = startOfDay(todayDate);

  if (isAfter(requestedDate, clientToday)) {
    const guardDailyIndex: InvalidDailyIndexResult = {
      isValid: false,
      dateString: serverData.dailyIndex.dateString,
      gameDate: serverData.dailyIndex.gameDate,
      isFuture: true,
      isPreLaunch: false,
      dayNumber: serverData.dailyIndex.dayNumber,
      firstDate: serverData.dailyIndex.firstDate,
      lastDate: serverData.dailyIndex.lastDate,
    };

    return {
      dailyIndex: guardDailyIndex,
      quizQuestion: null,
    };
  }

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
