import { Typography } from '~/components/ui/typography';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <Typography variant="h1">Daily Quiz</Typography>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <Typography variant="h2">Welcome to Daily Quiz</Typography>
          <Typography variant="p">
            Daily Quiz is a daily quiz game that will help you improve your
            knowledge.
          </Typography>
          <Typography variant="p">
            Each day you will get a new quiz question.
          </Typography>
          <Typography variant="p">
            You can answer the question and see the correct answer.
          </Typography>
        </div>
      </div>
    </main>
  );
}
