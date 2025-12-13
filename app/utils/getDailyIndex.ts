import { differenceInCalendarDays, startOfDay } from 'date-fns';

// 1. CONFIGURATION
// ----------------
// The date your app "begins". The first question (index 0) appears on this day.
// Format: YYYY-MM-DD. 
const START_DATE = new Date('2025-01-01T00:00:00'); 

// The total number of questions you have prepared.
// Used to safely loop back to the start if you run out (modulo), 
// or stop the game if you prefer.
const TOTAL_QUESTIONS_COUNT = 365; 

interface DailyIndexResult {
  index: number;      // The array index to fetch (e.g., questions[5])
  gameDate: Date;     // The date this index corresponds to (normalized)
  isFuture: boolean;  // If the user tries to access a future date
  dayNumber: number;  // Human readable "Day #45"
}

/**
 * Calculates which question index to show based on a target date.
 * * @param targetDate - (Optional) specific date to check. Defaults to user's "Now".
 * @returns Object containing the calculated index and metadata.
 */
export const getDailyIndex = (targetDate?: Date): DailyIndexResult => {
  // 1. Determine "Now" vs "Requested Date"
  // If no date is passed, use the user's current system time.
  const now = new Date();
  const dateToCheck = targetDate || now;

  // 2. Normalize to Midnight (Local Time)
  // This strips hours/minutes so we strictly compare calendar dates.
  // Using date-fns `startOfDay` is safer than manual math for edge cases.
  const currentMidnight = startOfDay(dateToCheck);
  const startMidnight = startOfDay(START_DATE);

  // 3. Calculate the Difference
  // differenceInCalendarDays handles DST (Daylight Savings) anomalies automatically.
  // If we just did (date1 - date2) / 86400000, DST switches could return 14.9 days, breaking logic.
  const daysPassed = differenceInCalendarDays(currentMidnight, startMidnight);

  // 4. Handle Edge Cases
  
  // Case A: The app hasn't launched yet (Negative days)
  if (daysPassed < 0) {
    return {
      index: 0, 
      gameDate: currentMidnight, 
      isFuture: false, // It's technically past/invalid, but we handle it safely
      dayNumber: 0
    };
  }

  // Case B: User tries to access a future date via URL manipulation
  // We compare the requested date against the *real* current time.
  const isFuture = differenceInCalendarDays(currentMidnight, startOfDay(now)) > 0;

  // 5. Calculate the Array Index
  // We use modulo (%) so if you have 100 questions and it's day 101, 
  // it loops back to question 1.
  const index = daysPassed % TOTAL_QUESTIONS_COUNT;

  return {
    index,
    gameDate: currentMidnight,
    isFuture,
    dayNumber: daysPassed + 1 // "Day 1" is nicer than "Day 0" for UI
  };
};