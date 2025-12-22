import type { QuestionType } from './quiz-question';

export interface QuizData {
  answers: string[];
  hintsUsed: number;
  hintCounts: number[];
  isCompleted: boolean;
  results: boolean[];
  resultIndices?: (number | undefined)[];
  scorePercent?: number;
  playedArchive: boolean;
  questionId: string;
  type: QuestionType;
  category: string;
}
