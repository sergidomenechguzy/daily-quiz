export interface QuizAnswer {
  answer: string;
  isCorrect: boolean;
}

export interface QuizAttempt {
  answers: QuizAnswer[];
  isCompleted: boolean;
  startedAt: string;
  completedAt?: string;
}
