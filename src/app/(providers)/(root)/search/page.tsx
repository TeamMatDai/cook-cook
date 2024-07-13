'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchSearchResults } from '@/utils/supabase/fetchSearchResults';
import MainLayout from '@/app/(providers)/(root)/_components/MainLayout';
import { CardList, CardItem, CardImage, CardTitle, CardDescription } from '@/components/Card/Card';
import Typography from '@/components/Typography';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      fetchSearchResults(query).then(setResults);
    }
  }, [query]);

  return (
    <MainLayout className="px-[22px] py-8">
      <Typography as="strong" size="xl" weight="medium" className="text-black block mb-[16px]">
        {query} 검색 결과
      </Typography>
      <CardList>
        {results.map((result) => (
          <CardItem key={result.id} href={`/recipes/${result.id}`}>
            <CardImage src={result.thumbnail} />
            <CardTitle>{result.title}</CardTitle>
            <CardDescription>{result.description}</CardDescription>
          </CardItem>
        ))}
      </CardList>
    </MainLayout>
  );
};

export default SearchPage;
