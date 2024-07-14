'use client';
import { CardDescription, CardImage, CardItem, CardList, CardTitle } from '@/components/Card';
import Typography from '@/components/Typography';
import { usePinnedRecipes } from '@/hooks/queries/useRecipes';
import type { Recipe } from '@/types/recipe';

type PinnedRecipe = {
  recipes: Pick<Recipe, 'id' | 'title' | 'subtitle'> & {
    thumbnail: Exclude<Recipe['thumbnail'], File>;
  };
};

const MyPinPage = () => {
  const { data: pinnedRecipes = [], isPending } = usePinnedRecipes();

  return (
    <>
      <Typography as="strong" size="xl" weight="medium" className="text-black block mt-[42px] mb-4">
        내가 저장한 레시피
      </Typography>
      {!isPending &&
        (pinnedRecipes.length > 0 ? (
          <CardList>
            {pinnedRecipes.map((recipe: PinnedRecipe) => (
              <CardItem href={`/detail/${recipe.recipes.id}`} key={recipe.recipes.id}>
                <CardImage src={recipe.recipes.thumbnail || ''} />
                <CardTitle>{recipe.recipes.title}</CardTitle>
                <CardDescription>{recipe.recipes.subtitle}</CardDescription>
              </CardItem>
            ))}
          </CardList>
        ) : (
          <div className="mt-[140px]">
            <Typography as="p" size="md" className="text-center text-[#999]">
              글이 없어요
            </Typography>
          </div>
        ))}
    </>
  );
};

export default MyPinPage;
