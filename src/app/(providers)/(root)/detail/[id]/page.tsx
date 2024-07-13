'use client';
import { useParams } from 'next/navigation';
import { Recipe } from '@/types/recipe';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import RecipeSection from '../_components/RecipeSection';
import { getRecipeById } from '@/services/recipesId';
import Loader from '../_components/Loader';
import ErrorPage from '../_components/ErrorPage';
import RecipeThumbnailSection from '../_components/RecipeThumbnailSection';
import { useState, useEffect } from 'react';

type ParamsType = {
  id: string;
};

const DetailPage = () => {
  const params = useParams<ParamsType>();
  const id = params.id;
  const [showLoader, setShowLoader] = useState(true);

  const {
    data: recipe,
    isPending,
    error
  }: UseQueryResult<Recipe> = useQuery({
    queryKey: ['recipes', id],
    queryFn: () => getRecipeById(id),
    enabled: !!id
  });

  useEffect(() => {
    if (!isPending) {
      const timer = setTimeout(() => setShowLoader(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isPending]);

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
