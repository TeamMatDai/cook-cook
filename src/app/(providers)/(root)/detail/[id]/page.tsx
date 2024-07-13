'use client';
import { useParams } from 'next/navigation';
import { Recipe } from '@/types/recipe';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import RecipeSection from '../_components/RecipeSection';
import { getRecipeById } from '@/services/recipesId';
import Loader from '../_components/Loader';
import ErrorPage from '../_components/ErrorPage';
import RecipeThumbnailSection from '../_components/RecipeThumbnailSection';

type ParamsType = {
  id: string;
};

type DetailPageProps = {};

const DetailPage = (props: DetailPageProps) => {
  const params = useParams<ParamsType>();
  const id = params.id;

  const {
    data: recipe,
    isPending,
    error
  }: UseQueryResult<Recipe> = useQuery({
    queryKey: ['recipes', id],
    queryFn: () => getRecipeById(id),
    enabled: !!id
  });

  if (isPending) return <Loader />;
  if (error || !recipe) {
    return <ErrorPage message={'해당 게시글이 없습니다.'} />;
  }

  return (
    <>
      <RecipeThumbnailSection thumbnail={recipe.thumbnail} title={recipe.title}/>
      {recipe && <RecipeSection recipe={recipe} />}
    </>
  );
};

export default DetailPage;
