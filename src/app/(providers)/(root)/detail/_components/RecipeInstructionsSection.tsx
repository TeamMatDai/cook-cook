import { Recipe } from '@/types/recipe';
import Image from 'next/image';

type RecipeInstructionsSectionProps = {
  recipe: Recipe;
};

const RecipeInstructionsSection = ({ recipe }: RecipeInstructionsSectionProps) => {
  return (
    <article className="pb-4">
      <h1 className="text-2xl mb-4 text-black font-bold">레시피</h1>
      <Image
        src={recipe.thumbnail}
        alt={recipe.title}
        width={500}
        height={500}
        className="w-full object-cover mb-4"
      />
      <div
        dangerouslySetInnerHTML={{ __html: recipe.recipe }}
        className="text-base text-gray-600 leading-1.5 mb-4 flex flex-col gap-[16px]"
      />
    </article>
  );
};
export default RecipeInstructionsSection;
