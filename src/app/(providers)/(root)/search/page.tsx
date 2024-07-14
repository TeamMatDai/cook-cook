'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchSearchResults, Recipe } from '@/utils/supabase/fetchSearchResults';
import MainLayout from '@/app/(providers)/(root)/_components/MainLayout';
import { CardList, CardItem, CardImage, CardTitle, CardDescription } from '@/components/Card/Card';
import Typography from '@/components/Typography';
import { useQuery } from '@tanstack/react-query';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const {
    data: results = [],
    isLoading,
    isError
  } = useQuery<Recipe[]>({
    queryKey: ['searchResults', query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query
  });

  return (
    <MainLayout className="px-[22px] py-8">
      <Typography as="strong" size="xl" weight="medium" className="text-black block mb-[16px]">
        {query} 검색 결과
      </Typography>
      {isLoading ? (
        <Typography as="p" size="md" className="text-[#666]">
          로딩 중...
        </Typography>
      ) : isError ? (
        <Typography as="p" size="md" className="text-[#666]">
          검색 중 오류가 발생했습니다.
        </Typography>
      ) : results.length === 0 ? (
        <Typography className="font-Pretendard mt-[80px] text-[16px] font-medium leading-normal text-center text-[#999]">
          검색된 레시피가 없어요
        </Typography>
      ) : (
        <CardList>
          {results.map((result) => (
            <CardItem key={result.id} href={`/detail/${result.id}`}>
              <CardImage src={result.thumbnail} />
              <CardTitle>{result.title}</CardTitle>
              <CardDescription>{result.description}</CardDescription>
            </CardItem>
          ))}
        </CardList>
      )}
    </MainLayout>
  );
};

export default SearchPage;
