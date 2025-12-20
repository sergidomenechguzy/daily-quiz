import { useLoaderData } from 'react-router';
import type { loader } from '~/routes/home';
import type { ValidDailyIndexResult } from '~/lib/getDailyIndex.server';

/**
 * Hook to access the daily index from loader data.
 * Ensures the daily index is valid.
 * Only call this hook within components that are guaranteed to be rendered
 * when the daily index is valid (i.e., after the parent has checked validity).
 */
export const useDailyIndex = (): ValidDailyIndexResult => {
  const { dailyIndex } = useLoaderData<typeof loader>();

  if (!dailyIndex.isValid) {
    throw new Error(
      'Quiz question must be loaded. This hook should only be called in components rendered when a quiz question is available.'
    );
  }

  return dailyIndex;
};
