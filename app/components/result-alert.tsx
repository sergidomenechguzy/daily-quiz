import { AnimatePresence, motion } from 'motion/react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useQuizStore } from '~/stores/quiz-store';

export function ResultAlert() {
  const { dateString } = useDailyIndex();
  const results = useQuizStore(state => state.quizState[dateString]?.results);

  if (!results || results.length === 0) {
    return null;
  }

  const result = results.at(-1);

  return (
    <AnimatePresence>
      <motion.div
        key={`result-overlay-${results.length}`}
        className={`backdrop-blur-xs ${result ? 'bg-green-100' : 'bg-red-100'}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <Typography variant="h1">{result ? '🎉' : '❌'}</Typography>
        <Typography variant="h3">{result ? 'Correct' : 'Wrong'}</Typography>
      </motion.div>
    </AnimatePresence>
  );
}
