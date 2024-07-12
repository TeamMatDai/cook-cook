'use client';

import React, { useEffect, useState } from 'react';
import { RecipesSwiper } from '@/components/RecipesSwiper';
import { fetchRecipes } from '@/utils/supabase/fetchRecipes';

const Page = () => {
  const [recipes, setRecipes] = useState<
    { title: string; subtitle: string; description: string; thumbnail: string }[]
  >([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };

    getRecipes();
  }, []);

  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">예린님, 오늘 이 요리 어때요?</h2>
        <RecipesSwiper recipes={recipes.slice(0, 2)} />
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">새로 올라온 레시피 ✨</h2>
        <RecipesSwiper recipes={recipes.slice(2, 4)} />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">인기 레시피 🔥</h2>
        <RecipesSwiper recipes={recipes.slice(2)} />
      </section>
    </>
  );
};

export default Page;
