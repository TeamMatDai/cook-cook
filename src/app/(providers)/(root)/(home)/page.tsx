'use client';

import React, { useEffect, useState } from 'react';
import { RecipesSwiper } from '@/components/RecipesSwiper';
import { fetchRandomRecipes } from '@/utils/supabase/fetchRecipes';

const Page = () => {
  const [recipes, setRecipes] = useState<
    { title: string; subtitle: string; description: string; thumbnail: string }[]
  >([]);

  useEffect(() => {
    const getRandomRecipes = async () => {
      const data = await fetchRandomRecipes();
      setRecipes(data);
    };

    getRandomRecipes();
  }, []);

  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">예린님, 오늘 이 요리 어때요?</h2>
        <RecipesSwiper recipes={recipes} />
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">새로 올라온 레시피 ✨</h2>
        <RecipesSwiper recipes={recipes} />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">인기 레시피 🔥</h2>
        <RecipesSwiper recipes={recipes} />
      </section>
    </>
  );
};

export default Page;
