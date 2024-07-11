import React from 'react';
import { Recipe } from '@/types/recipe';

const IngredientsSection: React.FC<{ materials: Recipe['material'] }> = ({ materials }) => (
  <article className="mb-[90px]">
    <h2 className="text-xl text-black font-bold mb-[16px]">기본 재료</h2>
    <ul className="flex flex-col gap-[24px] text-[#666666]">
      {materials.map((ingredient, index) => (
        <li key={index} className="flex flex-row justify-between items-center">
          <div>{ingredient.name}</div>
          <div>{ingredient.value}</div>
        </li>
      ))}
    </ul>
  </article>
);

export default IngredientsSection;
