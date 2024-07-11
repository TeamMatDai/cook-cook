import React from 'react';
import RecipeCard from '@/components/RecipeCard';

const Page = () => {
  const recipes = [
    {
      title: '전복 황태 삼계탕',
      description: '중급 · 30분',
      image: '/images/recipe1.jpg'
    },
    {
      title: '전복 황태 삼계탕',
      description: '중급 · 30분',
      image: '/images/recipe2.jpg'
    },
    {
      title: '전복 황태 삼계탕',
      description: '간장을 태워 불맛을 낸',
      image: '/images/recipe3.jpg'
    },
    {
      title: '전복 황태 삼계탕',
      description: '간장을 태워 불맛을 낸',
      image: '/images/recipe4.jpg'
    }
  ];

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <main className="w-full max-w-[500px] px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">예린님, 오늘 이 요리 어때요?</h2>
          <div className="grid grid-cols-2 gap-4">
            {recipes.slice(0, 2).map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                isOverlayCard={true}
              />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">새로 올라온 레시피 ✨</h2>
          <div className="grid grid-cols-2 gap-4">
            {recipes.slice(2, 4).map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                isOverlayCard={false}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">인기 레시피 🔥</h2>
          <div className="grid grid-cols-2 gap-4">
            {recipes.slice(2).map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                isOverlayCard={false}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
