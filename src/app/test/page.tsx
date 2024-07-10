// test/page.tsx
import React from 'react';
import RecipeDetail from './RecipeDetail';

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>테스트 페이지</h1>
      <RecipeDetail id="958f4fa7-b68d-4596-8800-990414b4f90b" />
    </div>
  );
};

export default TestPage;
