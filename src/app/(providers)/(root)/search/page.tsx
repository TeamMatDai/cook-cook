'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchSearchResults } from '@/utils/supabase/fetchSearchResults';
import MainLayout from '@/app/(providers)/(root)/_components/MainLayout';
import { CardList, CardItem, CardImage, CardTitle, CardDescription } from '@/components/Card/Card';

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
    <MainLayout>
      <section>
        <CardList>
          {results.map((result) => (
            <CardItem key={result.id} href={`/recipes/${result.id}`}>
              <CardImage src={result.thumbnail} />
              <CardTitle>{result.title}</CardTitle>
              <CardDescription>{result.description}</CardDescription>
            </CardItem>
          ))}
        </CardList>
      </section>
    </MainLayout>
  );
};

export default SearchPage;
