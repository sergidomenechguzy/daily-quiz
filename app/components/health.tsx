import { Heart } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Typography } from '~/components/ui/typography';
import { useDailyIndex } from '~/hooks/useDailyIndex';
import { useQuizStore, useRemainingAttempts } from '~/stores/quiz-store';

export function Health() {
  const { dateString } = useDailyIndex();
  const remainingAttempts = useRemainingAttempts(dateString);
  const isCompleted = useQuizStore(
    state => state.quizState[dateString]?.isCompleted
  );

  const [state, setState] = useState({
    prevAttempts: remainingAttempts,
    date: dateString,
    shakeKey: 0,
    isHidden: isCompleted,
  });

  // 1. Handle Date Changes (Navigation)
  if (state.date !== dateString) {
    setState({
      prevAttempts: remainingAttempts,
      date: dateString,
      // FIX: Keep the existing shakeKey!
      // Resetting it to 0 changes the key prop, which forces AnimatePresence
      // to run the 'exit' (shake) animation on the old element.
      shakeKey: state.shakeKey,
      isHidden: isCompleted,
    });
  }
  // 2. Handle Attempt Decrease (Wrong Answer -> Shake)
  else if (remainingAttempts < state.prevAttempts) {
    setState(s => ({
      ...s,
      prevAttempts: remainingAttempts,
      shakeKey: s.shakeKey + 1, // Only change key here to trigger shake
      isHidden: false,
    }));
  }
  // 3. Handle Attempt Increase (Undo/Sync)
  else if (remainingAttempts > state.prevAttempts) {
    setState(s => ({
      ...s,
      prevAttempts: remainingAttempts,
      isHidden: isCompleted,
    }));
  }

  // Hide immediately if loaded as completed (prevents flash of content)
  if (state.isHidden) {
    return null;
  }

  return (
    <motion.div
      key="health-status"
      className="flex gap-2 items-center"
      animate={{ opacity: isCompleted ? 0 : 1 }}
      transition={{ duration: 0.4, delay: isCompleted ? 0.4 : 0 }}
      style={{ pointerEvents: isCompleted ? 'none' : 'auto' }}
    >
      <Typography variant="h4">{remainingAttempts}</Typography>

      <AnimatePresence mode="wait">
        <motion.div
          key={`health-heart-${state.shakeKey}`}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{ duration: 0.4 }}
        >
          <Heart />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
