export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  time: number;
  level: "쉬움" | "중급" | "어려움";
  author: {
    thumbnail: string;
    name: string;
  };
  material: { name: string; value: string }[];
  thumbnail: string;
  recipe: string;
}
