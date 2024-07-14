import { Recipe } from '@/types/recipe';

type IngredientsSectionProps = {
  materials: Recipe['material'];
};

const IngredientsSection = ({ materials }: IngredientsSectionProps) => (
  <article className="mb-[90px]">
    <h2 className="text-xl text-black font-bold mb-[16px]">기본 재료</h2>
    <ul className="flex flex-col gap-6 text-[#666666]">
      {materials.map((ingredient, index) => (
        <li key={index} className="flex flex-row justify-between items-center">
          <div>{ingredient.name}</div>
          <div>{ingredient.value}</div>
        </li>
      ))}
    </ul>
  </article>
);

export default IngredientsSection;
