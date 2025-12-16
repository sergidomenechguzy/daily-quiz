import type { PropsWithChildren } from 'react';
import { useLoaderData } from 'react-router';
import { Typography } from '~/components/ui/typography';
import type { loader } from '~/routes/home';
import { Badge } from '../ui/badge';
import { format } from 'date-fns';

export function Layout({ children }: PropsWithChildren) {
  const { dailyIndex } = useLoaderData<typeof loader>();

  return (
    <main className="flex items-start justify-center py-4 px-4 h-screen">
      <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
        <header className="flex flex-row items-center justify-start gap-4 w-full">
          <Typography variant="h3">
            Daily Quiz{dailyIndex.dayNumber ? ` #${dailyIndex.dayNumber}` : ''}
          </Typography>
          {dailyIndex.gameDate ? (
            // TODO: add user locale
            <Badge>{format(dailyIndex.gameDate, 'yyyy-MM-dd')}</Badge>
          ) : null}
        </header>
        <div className="max-w-[800px] w-full space-y-3 px-4">{children}</div>
      </div>
    </main>
  );
}
