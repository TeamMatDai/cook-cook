'use client';
import { useParams } from 'next/navigation';
import { getRecipeById } from '@/lib/fetchData';
import IconBackButton from '@/icons/arrow-left.svg';
import { IconSearch } from '@/icons/IconSearch';
import { Recipe } from '@/types/recipe';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import RecipeSection from '../_components/RecipeSection';

type ParamsType = {
  id: string;
};

const DetailPage: React.FC = () => {
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

  if (isPending) return <div>로딩중</div>;
  if (error) return <div>로딩중 에러 발생</div>;

  return (
    <>
      <article className="h-[500px] w-full">
        <header className="px-[24px] absolute left-0 top-0 z-10 w-full h-[80px] flex flex-row justify-between items-center">
          <Link href="/">
            <IconBackButton />
          </Link>
          {/*TODO: 검색페이지 링크 추가하기*/}
          <Link href="/">
            <IconSearch />
          </Link>
        </header>
        <div className="relative w-full h-full">
          <img src={recipe?.thumbnail} alt={recipe?.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,_255,_255,_0)_50%,_#fff)]" />
        </div>
      </article>
      {recipe && <RecipeSection recipe={recipe} />}
    </>
  );
};

export default DetailPage;
