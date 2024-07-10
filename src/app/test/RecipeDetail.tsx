'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/supabaseClient';
import DOMPurify from 'dompurify';

interface RecipeDetailProps {
  id: string;
}

interface RecipeData {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  recipe: string;
  time: number;
  level: string;
  material: { name: string; value: string }[];
}

const fetchContent = async (id: string): Promise<RecipeData | null> => {
  const { data, error } = await supabase.from('recipes').select('*').eq('id', id).single();

  if (error) {
    console.error('콘텐츠 불러오기 중 오류 발생:', error);
    return null;
  } else {
    return data as RecipeData;
  }
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({ id }) => {
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);

  useEffect(() => {
    const getContent = async () => {
      const fetchedData = await fetchContent(id);
      if (fetchedData) {
        const sanitizedRecipe = DOMPurify.sanitize(fetchedData.recipe);
        setRecipeData({ ...fetchedData, recipe: sanitizedRecipe });
      }
    };

    getContent();
  }, [id]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipeData.title}</h1>
      <h2>{recipeData.subtitle}</h2>
      <p>{recipeData.description}</p>
      {recipeData.thumbnail && <img src={recipeData.thumbnail} alt="Thumbnail" />}
      <p>조리 시간: {recipeData.time}분</p>
      <p>난이도: {recipeData.level}</p>
      <h3>재료:</h3>
      <ul>
        {recipeData.material.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
      <h3>레시피:</h3>
      <div dangerouslySetInnerHTML={{ __html: recipeData.recipe }} />
    </div>
  );
};

export default RecipeDetail;
