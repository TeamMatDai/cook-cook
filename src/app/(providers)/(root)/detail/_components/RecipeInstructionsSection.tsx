import { Recipe } from '@/types/recipe';
import DOMPurify from 'dompurify';

type RecipeInstructionsSectionProps = {
  recipe: Recipe;
};

const RecipeInstructionsSection = ({ recipe }: RecipeInstructionsSectionProps) => {
  const sanitizedRecipe = DOMPurify.sanitize(recipe.recipe);
  return (
    <article className="pb-6">
      <h1 className="text-2xl mb-4 text-black font-bold">레시피</h1>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedRecipe }}
        className="text-base text-gray-600 leading-1.5 mb-4 flex flex-col gap-4"
      />
    </article>
  );
};
export default RecipeInstructionsSection;
