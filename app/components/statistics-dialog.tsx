import { differenceInCalendarDays, parseISO } from 'date-fns';
import { useQuizStore } from '~/stores/quiz-store';
import { DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import type { QuestionType } from '~/types/quiz-question';

const TYPE_LABELS: Record<QuestionType, string> = {
  'multiple-choice': 'Multiple Choice',
  estimation: 'Estimation',
  'exact-match': 'Exact Match',
  'top-five': 'Top Five',
};

function computeStreaks(
  sortedDates: string[],
  completedSet: Set<string>
): { current: number; best: number } {
  if (sortedDates.length === 0) return { current: 0, best: 0 };

  // Current streak: walk backwards from today
  const today = new Date();
  let current = 0;
  let checkDate = today;

  for (let i = sortedDates.length - 1; i >= 0; i--) {
    const d = parseISO(sortedDates[i]);
    const diff = differenceInCalendarDays(checkDate, d);

    if (diff > 1) break;
    if (!completedSet.has(sortedDates[i])) break;

    current++;
    checkDate = d;
  }

  // Best streak: scan full history
  let best = 0;
  let run = 0;
  let prev: string | null = null;

  for (const dateStr of sortedDates) {
    if (!completedSet.has(dateStr)) {
      run = 0;
      prev = null;
      continue;
    }
    if (prev === null) {
      run = 1;
    } else {
      const gap = differenceInCalendarDays(parseISO(dateStr), parseISO(prev));
      run = gap === 1 ? run + 1 : 1;
    }
    prev = dateStr;
    if (run > best) best = run;
  }

  return { current, best };
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5 rounded-lg bg-muted/50 px-3 py-3 text-center">
      <span className="text-2xl font-semibold tabular-nums">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
      {sub && <span className="text-xs text-muted-foreground/70">{sub}</span>}
    </div>
  );
}

export function StatisticsDialog() {
  const quizState = useQuizStore(state => state.quizState);

  const entries = Object.entries(quizState);
  const sortedDates = Object.keys(quizState).sort();

  const totalPlayed = entries.length;
  const completed = entries.filter(([, v]) => v.isCompleted).length;
  const correct = entries.filter(([, v]) => v.scorePercent === 100).length;
  const winRate =
    completed > 0 ? Math.round((correct / completed) * 100) : 0;

  const completedSet = new Set(
    entries.filter(([, v]) => v.isCompleted && !v.playedArchive).map(([k]) => k)
  );
  const { current: currentStreak, best: bestStreak } = computeStreaks(
    sortedDates,
    completedSet
  );

  const totalHints = entries.reduce((sum, [, v]) => sum + v.hintsUsed, 0);
  const avgHints =
    completed > 0 ? (totalHints / completed).toFixed(1) : '—';

  // Per-type breakdown
  const byType = entries.reduce<
    Record<QuestionType, { count: number; totalScore: number }>
  >(
    (acc, [, v]) => {
      const t = v.type;
      if (!acc[t]) acc[t] = { count: 0, totalScore: 0 };
      acc[t].count++;
      acc[t].totalScore += v.scorePercent ?? 0;
      return acc;
    },
    {} as Record<QuestionType, { count: number; totalScore: number }>
  );

  const typeRows = (Object.keys(byType) as QuestionType[]).map(type => ({
    type,
    label: TYPE_LABELS[type],
    count: byType[type].count,
    avgScore: Math.round(byType[type].totalScore / byType[type].count),
  }));

  // Per-category breakdown
  const byCategory = entries.reduce<
    Record<string, { count: number; totalScore: number }>
  >((acc, [, v]) => {
    const c = v.category;
    if (!acc[c]) acc[c] = { count: 0, totalScore: 0 };
    acc[c].count++;
    acc[c].totalScore += v.scorePercent ?? 0;
    return acc;
  }, {});

  const categoryRows = Object.keys(byCategory)
    .map(category => ({
      category,
      count: byCategory[category].count,
      avgScore: Math.round(byCategory[category].totalScore / byCategory[category].count),
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-base">Your Statistics</DialogTitle>
        <DialogDescription className="sr-only">
          Overview of your quiz performance
        </DialogDescription>
      </DialogHeader>

      <div className="overflow-y-auto min-h-0 flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatCard label="Played" value={totalPlayed} />
        <StatCard label="Completed" value={completed} />
        <StatCard label="Correct" value={correct} />
        <StatCard label="Win Rate" value={`${winRate}%`} />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatCard label="Current Streak" value={currentStreak} sub="days" />
        <StatCard label="Best Streak" value={bestStreak} sub="days" />
        <StatCard label="Hints Used" value={totalHints} />
        <StatCard label="Avg Hints/Game" value={avgHints} />
      </div>

      {typeRows.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            By Type
          </span>
          <div className="flex flex-col divide-y divide-border/50 rounded-lg bg-muted/50 overflow-hidden">
            {typeRows.map(row => (
              <div
                key={row.type}
                className="flex items-center justify-between px-3 py-2 text-sm"
              >
                <span>{row.label}</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>{row.count} played</span>
                  <span className="tabular-nums font-medium text-foreground">
                    {row.avgScore}% avg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {categoryRows.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            By Category
          </span>
          <div className="flex flex-col divide-y divide-border/50 rounded-lg bg-muted/50 overflow-hidden">
            {categoryRows.map(row => (
              <div
                key={row.category}
                className="flex items-center justify-between px-3 py-2 text-sm"
              >
                <span>{row.category}</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>{row.count} played</span>
                  <span className="tabular-nums font-medium text-foreground">
                    {row.avgScore}% avg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {totalPlayed === 0 && (
        <p className="text-center text-sm text-muted-foreground py-4">
          No games played yet. Start playing to see your stats!
        </p>
      )}
      </div>
    </>
  );
}
