import { Recipe } from '@/types/recipe';
import RecipeInstructionsSection from '@/app/(providers)/(root)/detail/_components/RecipeInstructionsSection';
import ShareButton from '@/app/(providers)/(root)/detail/_components/ShareButton';
import BookmarkButton from '@/app/(providers)/(root)/detail/_components/BookmarkButton';
import UserInfo from '@/app/(providers)/(root)/detail/_components/UserInfo';
import IngredientsSection from '@/app/(providers)/(root)/detail/_components/IngredientsSection';

const RecipeSection: React.FC<{recipe: Recipe}> = ({ recipe }) => {
  return (
    <div className="px-6">
      <article className="-mt-16 mb-[72px] flex flex-col gap-[38px]">
        <div>
          <h3 className="text-[20px] text-gray-600">{recipe.subtitle}</h3>
          <h1 className="text-[52px] text-black font-extrabold">{recipe.title}</h1>
          <div className="text-lg text-gray-600">
            {recipe.time}분 · {recipe.level}
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-normal break-keep">
          {recipe.description}
        </p>
      </article>
      <IngredientsSection materials={recipe.material} />
      <RecipeInstructionsSection recipe={recipe} />
      <div className="flex flex-row justify-center items-center gap-4 text-gray-400 font-normal text-sm mb-[70px]">
        <ShareButton />
        <BookmarkButton recipesId={recipe.id} />
      </div>
      <UserInfo />
    </div>
  );
}
export default RecipeSection;