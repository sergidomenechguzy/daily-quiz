import {
  differenceInCalendarDays,
  startOfDay,
  addDays,
  addHours,
} from 'date-fns';
import { getServerEnv } from './env.server';
import { quizQuestions } from '~/data/questions.server';
import { z } from 'zod';

export interface ValidDailyIndexResult {
  isValid: true;
  index: number; // The array index to fetch (e.g., questions[5])
  dateString: string; // The date this index corresponds to (YYYY-MM-DD format)
  gameDate: Date; // The date this index corresponds to (normalized)
  dayNumber: number; // Human readable "Day #45"
  firstDate: Date;
  lastDate: Date;
}

export interface InvalidDailyIndexResult {
  isValid: false;
  dateString?: string; // The date this index corresponds to (YYYY-MM-DD format)
  gameDate?: Date; // The date this index corresponds to (normalized)
  isFuture: boolean; // If the user tries to access a future date
  isPreLaunch: boolean; // If the user tries to access a past date before app launch
  dayNumber?: number; // Human readable "Day #45"
  firstDate: Date;
  lastDate: Date;
}

export type DailyIndexResult = ValidDailyIndexResult | InvalidDailyIndexResult;

const dateStringSchema = z.iso.date();

/**
 * Calculates which question index to show based on a target date.
 * @param targetDate - (Optional) specific date to check. Defaults to user's "Now".
 * @returns Object containing the calculated index and metadata.
 */
export const getDailyIndex = (dateString?: string | null): DailyIndexResult => {
  const startMidnight = startOfDay(new Date(getServerEnv().START_DATE));

  const firstDate = startMidnight;
  const lastDate = addDays(firstDate, quizQuestions.length - 1);

  if (!dateString) {
    return {
      isValid: false,
      isFuture: false,
      isPreLaunch: false,
      firstDate,
      lastDate,
    };
  }
  const dateParsed = dateStringSchema.safeParse(dateString);
  if (!dateParsed.success) {
    return {
      isValid: false,
      isFuture: false,
      isPreLaunch: false,
      firstDate,
      lastDate,
    };
  }

  // 1. Calculate Earth's frthest timezone (UTC+14).
  const serverNow = new Date();
  const maxAllowedDate = startOfDay(addHours(serverNow, 14));

  // 2. Normalize Requested Date
  const requestedDate = startOfDay(new Date(dateParsed.data));

  // 3. Calculate Days Passed (Relative to Start Date)
  const daysPassed = differenceInCalendarDays(requestedDate, startMidnight);

  // 4. Check for Future (Global Guard)
  // We check against maxAllowedDate instead of server local time
  const isFuture = differenceInCalendarDays(requestedDate, maxAllowedDate) > 0;

  // 4. Handle Edge Cases

  // Case A: The app hasn't launched yet (Negative days)
  if (daysPassed < 0) {
    return {
      isValid: false,
      dateString: dateParsed.data,
      gameDate: requestedDate,
      isFuture: false,
      isPreLaunch: true,
      firstDate,
      lastDate,
    };
  }

  // Case B: Date exceeds the number of existing quiz questions
  if (daysPassed > quizQuestions.length) {
    return {
      isValid: false,
      dateString: dateParsed.data,
      gameDate: requestedDate,
      isFuture: false,
      isPreLaunch: false,
      dayNumber: daysPassed + 1,
      firstDate,
      lastDate,
    };
  }

  // Case C: User tries to access a future date via URL manipulation
  if (isFuture) {
    return {
      isValid: false,
      dateString: dateParsed.data,
      gameDate: requestedDate,
      isFuture: true,
      isPreLaunch: false,
      dayNumber: daysPassed + 1,
      firstDate,
      lastDate,
    };
  }

  return {
    isValid: true,
    index: daysPassed,
    dateString: dateParsed.data,
    gameDate: requestedDate,
    dayNumber: daysPassed + 1,
    firstDate,
    lastDate,
  };
};
