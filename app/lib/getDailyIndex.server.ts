import { differenceInCalendarDays, startOfDay } from 'date-fns';
import { getServerEnv } from './env.server';
import { quizQuestions } from '~/data/questions';
import { z } from 'zod';

interface ValidDailyIndexResult {
  isValid: true;
  index: number; // The array index to fetch (e.g., questions[5])
  dateString: string; // The date this index corresponds to (YYYY-MM-DD format)
  gameDate: Date; // The date this index corresponds to (normalized)
  dayNumber: number; // Human readable "Day #45"
}

interface InvalidDailyIndexResult {
  isValid: false;
  dateString?: string; // The date this index corresponds to (YYYY-MM-DD format)
  gameDate?: Date; // The date this index corresponds to (normalized)
  isFuture: boolean; // If the user tries to access a future date
  isPreLaunch: boolean; // If the user tries to access a past date before app launch
  dayNumber?: number; // Human readable "Day #45"
}

type DailyIndexResult = ValidDailyIndexResult | InvalidDailyIndexResult;

const dateStringSchema = z.iso.date();

/**
 * Calculates which question index to show based on a target date.
 * @param targetDate - (Optional) specific date to check. Defaults to user's "Now".
 * @returns Object containing the calculated index and metadata.
 */
export const getDailyIndex = (dateString?: string | null): DailyIndexResult => {
  if (!dateString) {
    return {
      isValid: false,
      isFuture: false,
      isPreLaunch: false,
    };
  }
  const dateParsed = dateStringSchema.safeParse(dateString);
  if (!dateParsed.success) {
    return {
      isValid: false,
      isFuture: false,
      isPreLaunch: false,
    };
  }

  // 1. Determine "Now" vs "Requested Date"
  // If no date is passed, use the user's current system time.
  const now = new Date();

  // 2. Normalize to Midnight (Local Time)
  // This strips hours/minutes so we strictly compare calendar dates.
  // Using date-fns `startOfDay` is safer than manual math for edge cases.
  const currentMidnight = startOfDay(new Date(dateParsed.data));
  const startMidnight = startOfDay(new Date(getServerEnv().START_DATE));

  // 3. Calculate the Difference
  // differenceInCalendarDays handles DST (Daylight Savings) anomalies automatically.
  // If we just did (date1 - date2) / 86400000, DST switches could return 14.9 days, breaking logic.
  const daysPassed = differenceInCalendarDays(currentMidnight, startMidnight);

  // 4. Handle Edge Cases

  // Case A: The app hasn't launched yet (Negative days)
  if (daysPassed < 0) {
    return {
      isValid: false,
      dateString: dateParsed.data,
      gameDate: currentMidnight,
      isFuture: false,
      isPreLaunch: true,
    };
  }

  // Case B: Date exceeds the number of existing quiz questions
  if (daysPassed > quizQuestions.length) {
    return {
      isValid: false,
      dateString: dateParsed.data,
      gameDate: currentMidnight,
      isFuture: false,
      isPreLaunch: false,
      dayNumber: daysPassed + 1,
    };
  }

  // Case C: User tries to access a future date via URL manipulation
  // We compare the requested date against the *real* current time.
  const isFuture =
    differenceInCalendarDays(currentMidnight, startOfDay(now)) > 0;
  if (isFuture) {
    return {
      isValid: false,
      dateString: dateParsed.data,
      gameDate: currentMidnight,
      isFuture: true,
      isPreLaunch: false,
      dayNumber: daysPassed + 1,
    };
  }

  return {
    isValid: true,
    index: daysPassed,
    dateString: dateParsed.data,
    gameDate: currentMidnight,
    dayNumber: daysPassed + 1,
  };
};
