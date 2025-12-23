import { useState } from 'react';
import { motion } from 'motion/react';
import type { QuizMedia } from '~/types/quiz-question';
import { Typography } from '~/components/ui/typography';
import { Skeleton } from '~/components/ui/skeleton';

interface QuizMediaProps {
  media?: QuizMedia;
}

export function QuizMedia({ media }: QuizMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!media) {
    return null;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="relative overflow-hidden rounded-md w-fit h-fit">
        {media.type === 'image' && (
          <>
            {!isLoaded && !hasError && (
              <Skeleton className="h-[300px] w-[300px] rounded-md" />
            )}
            <motion.img
              src={media.url}
              alt={media.altText}
              className="h-auto w-auto max-w-[300px] max-h-[300px] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded && !hasError ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setHasError(true);
                setIsLoaded(false);
              }}
            />
          </>
        )}
        {media.attribution && isLoaded && !hasError && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 px-2 py-1 text-right bg-gradient-to-b from-transparent to-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <Typography
              variant="small"
              className="text-xs font-light text-white opacity-60"
            >
              Source: {media.attribution}
            </Typography>
          </motion.div>
        )}
      </div>
    </div>
  );
}
