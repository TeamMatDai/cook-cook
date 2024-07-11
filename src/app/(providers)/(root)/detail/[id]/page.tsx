'use client';
import { useParams } from 'next/navigation';
import { getRecipeById } from '@/lib/fetchData';
import { IconBackButton } from '@/icons/IconBackButton';
import { IconSearch } from '@/icons/IconSearch';
import { Recipe } from '@/types/recipe';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import RecipeSection from '@/app/(providers)/(root)/detail/_components/RecipeSection';

const DetailPage: React.FC= () => {
  const params = useParams();
  const id = params?.id as string;

  const {
    data: recipe,
    isPending,
    error
  }: UseQueryResult<Recipe> = useQuery({
    queryKey: ['recipes'],
    queryFn: () => getRecipeById(id),
    enabled: !!id
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;

  return (
    <>
      <article
        className="bg-red-600 bg-[linear-gradient(to_bottom,_rgba(255,_255,_255,_0)_50%,_#fff)] h-[500px]"
        style={{ backgroundImage: `url(${recipe?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <header className="h-[80px] flex flex-row justify-between items-center px-[2px]">
          <IconBackButton />
          <IconSearch />
        </header>
      </article>
      {recipe && <RecipeSection recipe={recipe} />}
    </>
  );
};

export default DetailPage;
