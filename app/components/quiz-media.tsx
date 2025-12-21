import type { QuizMedia } from '~/types/quiz-question';
import { Typography } from './ui/typography';

interface QuizMediaProps {
  media?: QuizMedia;
}

export function QuizMedia({ media }: QuizMediaProps) {
  if (!media) {
    return null;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="relative overflow-hidden rounded-md w-fit h-fit">
        {media.type === 'image' && (
          <img
            src={media.url}
            alt={media.altText}
            className="h-auto w-auto max-w-[300px] max-h-[300px] object-contain"
            onError={e => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        {media.attribution && (
          <div className="absolute bottom-0 left-0 right-0 px-2 py-1 text-right bg-gradient-to-b from-transparent to-black/70">
            <Typography
              variant="small"
              className="text-xs font-light text-white opacity-60"
            >
              Source: {media.attribution}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
