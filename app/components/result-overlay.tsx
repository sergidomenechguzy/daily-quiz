import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useQuizStore } from '~/stores/quiz-store';

export function ResultOverlay() {
  const { dateString } = useDailyIndex();
  const results = useQuizStore(state => state.quizState[dateString]?.results);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (results && results.length > 0) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [results]);

  const result = results?.at(-1);

  return (
    <AnimatePresence>
      {isVisible && result !== undefined && (
        <motion.div
          key={`result-overlay-${results?.length}`}
          className="fixed inset-0 z-50 flex flex-col items-center m-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className={`p-8 mt-4 rounded-xl text-center ${
              result
                ? 'bg-green-300/50 dark:bg-green-800/50'
                : 'bg-red-300/50 dark:bg-red-800/50'
            }`}
          >
            <Typography variant="h1" className="mb-4 text-6xl">
              {result ? '🎉' : '❌'}
            </Typography>
            <Typography variant="h3" className="font-bold">
              {result ? 'Correct!' : 'Wrong!'}
            </Typography>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
