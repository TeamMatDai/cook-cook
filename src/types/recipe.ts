export interface Recipe {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  time: number;
  level: 'easy' | 'medium' | 'hard';
  author?: {
    thumbnail: string;
    name: string;
  };
  material: { name: string; value: string }[];
  thumbnail: File | string | null;
  recipe?: string;
  fileName: string;
  value: string;
}

export type Level = Recipe['level'];
