export type Level = 'easy' | 'medium' | 'hard';

export interface Material {
  name: string;
  value: string;
}

export interface State {
  title: string;
  subtitle: string;
  description: string;
  time: number;
  material: Material[];
  thumbnail: File | null;
  fileName: string;
  level: Level;
  value: string;
}
