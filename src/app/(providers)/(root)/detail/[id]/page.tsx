'use client';

import { useParams } from 'next/navigation';
import { Recipe } from '@/types/recipe';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import RecipeSection from '../_components/RecipeSection';
import { getRecipeById } from '@/services/recipesId';
import Loader from '../_components/Loader';
import ErrorPage from '../_components/ErrorPage';
import RecipeThumbnailSection from '../_components/RecipeThumbnailSection';
import useLoader from '@/hooks/useLoader';

type ParamsProps = {
  params: { id: string };
};

type RecipeResponse = Exclude<Recipe, 'thumbnail'> & {
  thumbnail: Exclude<Recipe['thumbnail'], File>;
};

const DetailPage = () => {
  const params = useParams<ParamsProps['params']>();
  const id = params.id;

  const {
    data: recipe,
    isPending,
    error
  }: UseQueryResult<RecipeResponse> = useQuery({
    queryKey: ['recipes', id],
    queryFn: () => getRecipeById(id),
    enabled: !!id
  });

  const showLoader = useLoader(isPending);

  if (showLoader) return <Loader />;
  if (error || !recipe) {
    return <ErrorPage message="해당 게시글이 없어요" />;
  }

  return (
    <>
      <RecipeThumbnailSection thumbnail={recipe.thumbnail} title={recipe.title} />
      {recipe && <RecipeSection recipe={recipe} />}
    </>
  );
};

export default DetailPage;
