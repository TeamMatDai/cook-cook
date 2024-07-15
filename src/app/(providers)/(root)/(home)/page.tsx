'use client';

import { RecipesSwiper } from '@/components/RecipesSwiper';
import { useQuery } from '@tanstack/react-query';
import { fetchAllRecipes, fetchLatestRecipes } from '@/utils/supabase/fetchRecipes';
import { CardDescription, CardImage, CardItem, CardTitle } from '@/components/Card';
import useShallowSelector from '@/hooks/useShallowSelector';
import { useAuthStore } from '@/providers/AuthStoreProvider';
import useLoader from '@/hooks/useLoader';
import Loader from '../detail/_components/Loader';
import { AuthStoreTypes } from '@/stores/authStore';
import { UserMetadata } from '@supabase/supabase-js';
import { StrictPropsWithChildren } from '@/types/common';

interface SectionProps {
  title: string;
}

type UserType = {
  fullName: UserMetadata['full_name'];
};

const Section = ({ title, children }: StrictPropsWithChildren<SectionProps>) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 pl-[22px]">{title}</h2>
    {children}
  </section>
);

const Page = () => {
  const { fullName } = useShallowSelector<AuthStoreTypes, UserType>(useAuthStore, ({ user }) => ({
    fullName: user?.user_metadata?.full_name || ''
  }));

  const { data: allRecipes = [], isPending } = useQuery({
    queryKey: ['allRecipes'],
    queryFn: fetchAllRecipes
  });

  const { data: latestRecipes = [] } = useQuery({
    queryKey: ['latestRecipes'],
    queryFn: fetchLatestRecipes
  });

  const shuffledRecipes = allRecipes.toSorted(() => 0.5 - Math.random());

  const showLoader = useLoader(isPending);

  if (showLoader) return <Loader />;

  return (
    <>
      <Section title={fullName ? `${fullName}님, 오늘 이 요리 어때요?` : '오늘 이 요리 어때요?'}>
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
