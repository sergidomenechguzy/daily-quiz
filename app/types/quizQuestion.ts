export type QuestionType =
  | 'multiple-choice' // Classic A/B/C/D
  | 'estimation' // "How many km is the moon?" (Slider or number input)
  | 'exact-match' // "What is the capital of Peru?" (Text input)
  | 'top-five'; // "Name the top 5 largest oceans" (Family Feud style)

interface BaseQuestion {
  id: string;
  type: QuestionType;
  questionText: string;
  category: string;
  hint?: string;
  explanation?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
}

export interface EstimationQuestion extends BaseQuestion {
  type: 'estimation';
  correctAnswer: number;
  unit: string;
  // Optional: Allow answers within 10% to be considered "perfect"
  tolerance?: number;
  // Optional: Min/Max for a slider UI
  range?: { min: number; max: number };
}

export interface ExactMatchQuestion extends BaseQuestion {
  type: 'exact-match';
  correctAnswer: string;
  // Optional: Allow variations (e.g. "USA", "United States", "U.S.")
  acceptedVariations?: string[];
}

export interface TopFiveQuestion extends BaseQuestion {
  type: 'top-five';
  correctAnswers: [string, string, string, string, string];
  // Optional: Allow variations (e.g. "USA", "United States", "U.S.")
  acceptedVariations?: [string[], string[], string[], string[], string[]];
  correctValues?: [string, string, string, string, string];
}

export type QuizQuestion =
  | MultipleChoiceQuestion
  | EstimationQuestion
  | ExactMatchQuestion
  | TopFiveQuestion;
