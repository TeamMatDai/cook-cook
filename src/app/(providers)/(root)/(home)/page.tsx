'use client';

import React, { useEffect, useState } from 'react';
import { RecipesSwiper } from '@/components/RecipesSwiper';
import { fetchAllRecipes, fetchLatestRecipes } from '@/utils/supabase/fetchRecipes';

const Page = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const allData = await fetchAllRecipes();
      const latestData = await fetchLatestRecipes();

      const shuffledRecipes = allData.sort(() => 0.5 - Math.random());
      setAllRecipes(shuffledRecipes.slice(0, 5));
      setLatestRecipes(latestData);
    };

    getData();
  }, []);

  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">예린님, 오늘 이 요리 어때요?</h2>
        <RecipesSwiper recipes={allRecipes} />
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">새로 올라온 레시피 ✨</h2>
        <RecipesSwiper recipes={latestRecipes} />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">인기 레시피 🔥</h2>
        <RecipesSwiper recipes={latestRecipes} />
      </section>
    </>
  );
};

export default Page;
