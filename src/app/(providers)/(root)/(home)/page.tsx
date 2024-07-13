'use client';

import React, { useEffect, useState } from 'react';
import { RecipesSwiper } from '@/components/RecipesSwiper';
import { useQuery } from '@tanstack/react-query';
import { fetchAllRecipes, fetchLatestRecipes } from '@/utils/supabase/fetchRecipes';
import { CardDescription, CardImage, CardItem, CardTitle } from '@/components/Card';

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
    <h2 className="text-xl font-bold mb-4 pl-[22px]">{title}</h2>
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
        <RecipesSwiper
          recipes={shuffledRecipes}
          render={(recipe: any) => (
            <CardItem href={`/detail/${recipe.id}`}>
              <CardImage src={recipe.thumbnail} />
              <div className="shadow-[0_20px_30px_0_rgba(220,224,249,0.5)] border border-[#dbddeb] bg-white rounded-[12px] mt-[-48px] z-10 relative mb-[40px] py-[16px] mx-[10px] px-4">
                <CardTitle className="!mt-0">{recipe.title}</CardTitle>
                <CardDescription className="!mt-0">{recipe.subtitle}</CardDescription>
              </div>
            </CardItem>
          )}
        />
      </Section>
      <Section title="새로 올라온 레시피 ✨">
        <RecipesSwiper
          recipes={latestRecipes}
          render={(recipe: any) => (
            <CardItem href={`/detail/${recipe.id}`}>
              <CardImage src={recipe.thumbnail} />
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.subtitle}</CardDescription>
            </CardItem>
          )}
        />
      </Section>
      <Section title="인기 레시피 🔥">
        <RecipesSwiper
          recipes={latestRecipes}
          render={(recipe: any) => (
            <CardItem href={`/detail/${recipe.id}`}>
              <CardImage src={recipe.thumbnail} />
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.subtitle}</CardDescription>
            </CardItem>
          )}
        />
      </Section>
    </>
  );
};

export default Page;
