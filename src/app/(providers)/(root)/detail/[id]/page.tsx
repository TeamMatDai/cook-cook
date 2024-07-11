'use client';
import { useParams } from 'next/navigation';
import { getRecipeById } from '@/lib/fetchData';
import { IconBackButton } from '@/icons/IconBackButton';
import { IconSearch } from '@/icons/IconSearch';
import { Recipe } from '@/types/recipe';
import { IconShare } from '@/icons/IconShare';
import { IconBookmark } from '@/icons/IconBookmark';
import { Button } from '@/app/(providers)/(root)/detail/_components/Button';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useState } from 'react';
import BookmarkButton from '@/app/(providers)/(root)/detail/_components/BookmarkButton';

const DetailPage: React.FC = () => {
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

  // url공유하기 기능 추가
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert('URL이 클립보드에 복사되었습니다.');
        })
        .catch((error) => {
          console.error('Error copying URL:', error);
        });
    } else {
      console.log('Clipboard API not supported in this browser.');
    }
  };

  const handleBookmark = () => {
    console.log('@@ click');
  };

  return (
    <>
      <article className="bg-red-600 bg-[linear-gradient(to_bottom,_rgba(255,_255,_255,_0)_50%,_#fff)] h-[500px]">
        {/* <img src={recipe.thumbnail} alt="" /> */}
        <header className="h-[80px] flex flex-row justify-between items-center px-[2px]">
          <IconBackButton />
          <IconSearch />
        </header>
      </article>
      <div className="px-6">
        <article className="-mt-16 mb-[72px] flex flex-col gap-[38px]">
          <div>
            <h3 className="text-[20px] text-[#666666]">{recipe?.subtitle}</h3>
            <h1 className="text-[52px] text-black font-extrabold">{recipe?.title}</h1>
            <div className="text-[18px] text-[#666666]">
              {recipe?.time}분 · {recipe?.level}
            </div>
          </div>
          <p className="text-[20px] text-[#666666] leading-normal break-keep">
            {recipe?.description}
          </p>
        </article>
        <article className="mb-[90px]">
          <h2 className="text-xl text-black font-bold mb-[16px]">기본 재료</h2>
          <ul className="flex flex-col gap-[24px] text-[#666666]">
            {recipe?.material?.map((ingredient, index) => (
              <li key={index} className="flex flex-row justify-between items-center">
                <div>{ingredient.name}</div>
                <div>{ingredient.value}</div>
              </li>
            ))}
          </ul>
        </article>
        <article className="pb-4">
          <h1 className="text-2xl mb-4 text-black font-bold">레시피</h1>
          <img src={recipe?.thumbnail} alt={recipe?.title} className="w-full object-cover mb-4" />
          <div
            dangerouslySetInnerHTML={{ __html: recipe?.recipe }}
            className="text-base text-[#666666] leading-1.5 mb-4"
          />
        </article>
        <div className="flex flex-row justify-center items-center gap-4 text-[#999999] font-[13px] mb-[72px]">
          <Button onClick={handleShare}>
            <IconShare />
            공유
          </Button>
          <BookmarkButton recipeId={id} />
        </div>
        <div className="flex flex-col gap-[50px] justify-center items-center">
          <img
            className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
            src="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/66059442_2275758249307701_5758914269005479936_n.png?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=8dsZHav4tcgQ7kNvgEUja4v&_nc_ht=scontent-nrt1-2.xx&oh=00_AYCsT_OzCYO6ORnFoxxnBin-78EpvKcNJZoR7OivDeVBzw&oe=66B59DE5"
            alt="프로필"
          />
          <div className="flex flex-col gap-2 text-center">
            <div className="font-bold text-[#222222] text-lg">김소라</div>
            <div className="text-base text-[#222222]">소라의 키친</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
