import type { PropsWithChildren } from 'react';
import { Typography } from '~/components/ui/typography';
import { Badge } from '../ui/badge';
import { format } from 'date-fns';

interface LayoutProps {
  dayNumber?: number;
  gameDate?: Date;
}

export function Layout({
  children,
  dayNumber,
  gameDate,
}: PropsWithChildren<LayoutProps>) {
  return (
    <main className="flex items-start justify-center py-4 px-4 h-screen">
      <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
        <header className="flex flex-row items-center justify-start gap-2 w-full">
          <Typography variant="h3">
            Daily Quiz{dayNumber ? ` #${dayNumber}` : ''}
          </Typography>
          {gameDate ? (
            <Badge className="ml-2">{format(gameDate, 'yyyy-MM-dd')}</Badge>
          ) : null}
        </header>
        <div className="max-w-[800px] w-full space-y-3 px-4">{children}</div>
      </div>
    </main>
  );
}
