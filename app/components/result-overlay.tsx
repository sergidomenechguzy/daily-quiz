import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useQuizStore } from '~/stores/quiz-store';

export function ResultOverlay() {
  const { dateString } = useDailyIndex();
  const results = useQuizStore(state => state.quizState[dateString]?.results);
  const currentLength = results?.length ?? 0;

  const [state, setState] = useState({
    resultCount: currentLength,
    date: dateString,
    isVisible: false,
  });

  if (state.date !== dateString) {
    // If the date changed, reset completely without showing the overlay
    setState({
      resultCount: currentLength,
      date: dateString,
      isVisible: false,
    });
  } else if (currentLength > state.resultCount) {
    // If date is same but length increased -> New Result! Show overlay.
    setState({
      ...state,
      resultCount: currentLength,
      isVisible: true,
    });
  } else if (currentLength < state.resultCount) {
    // If length decreased (undo/reset), just sync the count silently
    setState({
      ...state,
      resultCount: currentLength,
      isVisible: false,
    });
  }

  useEffect(() => {
    if (state.isVisible) {
      const timer = setTimeout(() => {
        setState(s => ({ ...s, isVisible: false }));
      }, 1250);

      return () => clearTimeout(timer);
    }
  }, [state.isVisible]);

  const result = results?.at(-1);

  return (
    <AnimatePresence>
      {state.isVisible && result !== undefined && (
        <motion.div
          key={`overlay-${state.resultCount}`} // Ensures animation replays if user answers fast
          className={`fixed top-0 left-1/2 z-50 flex flex-col items-center mt-4 p-8 rounded-xl text-center shadow-lg -translate-x-1/2 backdrop-blur-md ${
            result
              ? 'bg-green-300/60 dark:bg-green-800/60'
              : 'bg-red-300/60 dark:bg-red-800/60'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            scale: {
              type: 'spring',
              bounce: 0.6,
            },
          }}
        >
          <Typography variant="h1" className="mb-2 text-6xl">
            {result ? '🎉' : '❌'}
          </Typography>
          <Typography variant="h3" className="font-bold text-foreground">
            {result ? 'Correct!' : 'Wrong!'}
          </Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
