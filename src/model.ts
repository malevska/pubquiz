export interface AppModel {
  quizzes: Quiz[];
}

export interface Quiz {
  title: string;
  isPlaying: boolean;
  players: string[];
  questions: Category[];
}

export interface Category {
  title: string;
  auestions: Question[];
}

export interface Question {
  text: string;
  answer: string;
  embeds: string;
  points: number;

  answererIndex: number;
  awardedPoints: number;
}
