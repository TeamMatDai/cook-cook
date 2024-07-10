// test/page.tsx
import React from 'react';
import RecipeDetail from './RecipeDetail';

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>테스트 페이지</h1>
      <RecipeDetail id="1cebad07-3a5c-4d04-9d7e-02de651d0f8c" />
    </div>
  );
};

export default TestPage;
