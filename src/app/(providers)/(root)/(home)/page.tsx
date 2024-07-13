'use client';

import React, { useEffect, useState } from 'react';
import { RecipesSwiper } from '@/components/RecipesSwiper';
import { fetchAllRecipes, fetchLatestRecipes } from '@/utils/supabase/fetchRecipes';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <header>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
    </header>
    {children}
  </section>
);

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
      <Section title="예린님, 오늘 이 요리 어때요?">
        <RecipesSwiper recipes={allRecipes} />
      </Section>
      <Section title="새로 올라온 레시피 ✨">
        <RecipesSwiper recipes={latestRecipes} />
      </Section>
      <Section title="인기 레시피 🔥">
        <RecipesSwiper recipes={latestRecipes} />
      </Section>
    </>
  );
};

export default Page;
