'use client';

import React, { useEffect, useState } from 'react';
import { RecipesSwiper } from '@/components/RecipesSwiper';
import { useQuery } from '@tanstack/react-query';
import { fetchAllRecipes, fetchLatestRecipes } from '@/utils/supabase/fetchRecipes';

interface Recipe {
  title: string;
  description: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const Page = () => {
  const { data: allRecipes = [] } = useQuery<Recipe[]>({
    queryKey: ['allRecipes'],
    queryFn: fetchAllRecipes
  });

  const { data: latestRecipes = [] } = useQuery<Recipe[]>({
    queryKey: ['latestRecipes'],
    queryFn: fetchLatestRecipes
  });

  const shuffledRecipes = allRecipes.toSorted(() => 0.5 - Math.random());

  return (
    <>
      <Section title="예린님, 오늘 이 요리 어때요?">
        <RecipesSwiper recipes={shuffledRecipes} />
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
