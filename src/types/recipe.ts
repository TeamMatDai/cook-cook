export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  time: number;
  level: "easy" | "medium" | "hard";
  author: {
    thumbnail: string;
    name: string;
  };
  material: { name: string; value: string }[];
  thumbnail: string;
  recipe: string;
}
