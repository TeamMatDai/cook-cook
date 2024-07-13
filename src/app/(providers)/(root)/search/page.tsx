'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchSearchResults } from '@/utils/supabase/fetchSearchResults';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    if (query) {
      fetchSearchResults(query).then(setResults);
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
