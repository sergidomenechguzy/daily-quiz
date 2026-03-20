import { useState, type PropsWithChildren } from 'react';
import { differenceInCalendarDays, format, startOfDay } from 'date-fns';
import { BarChart2Icon, CalendarIcon } from 'lucide-react';
import { Typography } from '~/components/ui/typography';
import { Popover } from '~/components/ui/popover';
import { PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Calendar } from '~/components/ui/calendar';
import { Link, useSearchParams } from 'react-router';
import type { Matcher } from 'react-day-picker';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '~/components/ui/dialog';
import { StatisticsDialog } from '~/components/statistics-dialog';

interface LayoutProps {
  dayNumber?: number;
  gameDate?: Date;
  firstDate?: Date;
  lastDate?: Date;
}

export function Layout({
  children,
  dayNumber,
  gameDate,
  firstDate,
  lastDate,
}: PropsWithChildren<LayoutProps>) {
  const [, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const dateRange: Matcher[] = [];
  if (firstDate) {
    dateRange.push({
      before: firstDate,
    });
  }
  if (lastDate) {
    const today = startOfDay(new Date());
    const isAfterToday = differenceInCalendarDays(lastDate, today) > 0;
    dateRange.push({
      after: isAfterToday ? today : lastDate,
    });
  }

  return (
    <main className="flex items-start justify-center p-4 min-h-screen">
      <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
        <header className="flex flex-row items-center justify-between gap-2 w-full">
          <div className="flex flex-row items-center gap-2 min-w-0">
            <Link to="/" className="cursor-default">
              <Typography variant="h4">Daily Quiz</Typography>
            </Link>
            {dayNumber && (
              <Typography variant="h4" className="font-light">
                #{dayNumber}
              </Typography>
            )}
          </div>
          <div className="flex flex-row items-center gap-2 shrink-0">
            {gameDate ? (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  {/* <Badge className="ml-2 cursor-default">
                  {format(gameDate, 'yyyy-MM-dd')} <ChevronDown />
                </Badge> */}
                  <Button variant="ghost" size="icon" aria-label="Archive">
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="center"
                  collisionPadding={14}
                >
                  <Calendar
                    mode="single"
                    selected={gameDate}
                    defaultMonth={gameDate}
                    captionLayout="dropdown"
                    weekStartsOn={1}
                    reverseYears
                    disabled={dateRange}
                    modifiers={{
                      // TODO: create server side stats route that returns this data
                      completedCorrect: [],
                      completedWrong: [],
                    }}
                    modifiersClassNames={{
                      completedCorrect:
                        'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200',
                      completedWrong:
                        'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200',
                    }}
                    onSelect={date => {
                      if (date) {
                        setSearchParams(searchParams => {
                          searchParams.set('date', format(date, 'yyyy-MM-dd'));
                          return searchParams;
                        });
                      }

                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            ) : null}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Statistics">
                  <BarChart2Icon />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg max-h-[85dvh] overflow-hidden flex flex-col">
                <StatisticsDialog />
              </DialogContent>
            </Dialog>
          </div>
        </header>
        <div className="max-w-[800px] w-full space-y-3 px-0 sm:px-4">
          {children}
        </div>
      </div>
    </main>
  );
}
