import React from 'react';

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  isOverlayCard?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
  image,
  isOverlayCard = false
}) => {
  return (
    <div className="relative w-full">
      <img src={image} alt={title} className="w-full h-[150px] object-cover rounded-t-[12px]" />
      <div
        className={`p-4 ${
          isOverlayCard
            ? 'absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 rounded-b-[12px]'
            : 'bg-white rounded-b-[12px]'
        }`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
