import type { PropsWithChildren } from 'react';
import { useLoaderData } from 'react-router';
import { Typography } from '~/components/ui/typography';
import type { loader } from '~/routes/home';

export function Layout({ children }: PropsWithChildren) {
  const { dailyIndex } = useLoaderData<typeof loader>();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <Typography variant="h1">
            Daily Quiz{dailyIndex?.dayNumber ? ` #${dailyIndex.dayNumber}` : ''}
          </Typography>
        </header>
        <div className="max-w-[600px] w-full space-y-6 px-4">{children}</div>
      </div>
    </main>
  );
}
